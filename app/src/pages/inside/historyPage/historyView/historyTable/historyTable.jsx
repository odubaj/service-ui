/*
 * Copyright 2019 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { defineMessages, injectIntl } from 'react-intl';
import Parser from 'html-react-parser';
import CompareIcon from 'common/img/compare-inline.svg';
import { NOT_FOUND, RESETED } from 'common/constants/testStatuses';
import {
  historySelector,
  totalItemsCountSelector,
  loadingSelector,
  fetchItemsHistoryAction,
  filterForCompareSelector,
  itemsHistorySelector,
} from 'controllers/itemsHistory';
import { nameLinkSelector } from 'controllers/testItem';
import { PROJECT_LOG_PAGE } from 'controllers/pages';
import { SpinningPreloader } from 'components/preloaders/spinningPreloader';
import { ScrollWrapper } from 'components/main/scrollWrapper';
import { NoItemMessage } from 'components/main/noItemMessage';
import { ItemNameBlock } from './itemNameBlock';
import { EmptyHistoryItem } from './emptyHistoryItem';
import { HistoryItem } from './historyItem';
import { HistoryCell } from './historyCell';
import styles from './historyTable.scss';

const cx = classNames.bind(styles);

// var headerline = new Array();
const headerlineLaunch = new Array();

const messages = defineMessages({
  loadMoreHistoryItemsTitle: {
    id: 'HistoryTable.loadMoreHistoryItemsTitle',
    defaultMessage: 'Click here to load more items',
  },
  itemNamesHeaderTitle: {
    id: 'HistoryTable.itemNamesHeaderTitle',
    defaultMessage: 'Name',
  },
  executionNumberTitle: {
    id: 'HistoryTable.launchNumberTitle',
    defaultMessage: 'RHEL #',
  },
  noHistoryItems: {
    id: 'HistoryTable.noHistoryItems',
    defaultMessage: 'No history items',
  },
});

@connect(
  (state) => ({
    history: historySelector(state),
    itemsHistory: itemsHistorySelector(state),
    loading: loadingSelector(state),
    totalItemsCount: totalItemsCountSelector(state),
    selectedFilter: filterForCompareSelector(state),
    link: (ownProps) => nameLinkSelector(state, ownProps),
  }),
  {
    fetchItemsHistoryAction,
    navigate: (linkAction) => linkAction,
  },
)
@injectIntl
export class HistoryTable extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    historyDepth: PropTypes.string.isRequired,
    historyBase: PropTypes.string.isRequired,
    selectedFilter: PropTypes.object,
    history: PropTypes.array,
    itemsHistory: PropTypes.array,
    loading: PropTypes.bool,
    totalItemsCount: PropTypes.number,
    selectedItems: PropTypes.arrayOf(PropTypes.object),
    withGroupOperations: PropTypes.bool,
    fetchItemsHistoryAction: PropTypes.func,
    link: PropTypes.func,
    navigate: PropTypes.func,
    onSelectItem: PropTypes.func,
  };

  static defaultProps = {
    selectedFilter: null,
    history: [],
    itemsHistory: [],
    loading: false,
    totalItemsCount: 0,
    selectedItems: [],
    withGroupOperations: false,
    fetchItemsHistoryAction: () => {},
    link: () => {},
    navigate: () => {},
    onSelectItem: () => {},
  };

  calculateItemOwnLinkParams = (item) => {
    const itemIdsArray = item.path.split('.');
    const itemIds = itemIdsArray.slice(0, itemIdsArray.length - 1).join('/');

    return {
      page: item.hasChildren ? null : PROJECT_LOG_PAGE,
      testItemIds: itemIds ? `${item.launchId}/${itemIds}` : item.launchId,
    };
  };

  loadMoreHistoryItems = () => {
    this.props.fetchItemsHistoryAction({
      historyDepth: this.props.historyDepth,
      historyBase: this.props.historyBase,
      loadMore: true,
    });
  };

  renderCorrespondingHistoryItem = (historyItem, isLastRow) => {
    const { navigate, link, onSelectItem, selectedItems, withGroupOperations } = this.props;
    switch (historyItem.status) {
      case NOT_FOUND:
      case RESETED:
        return (
          <HistoryCell
            status={historyItem.status}
            key={historyItem.id}
            highlighted={historyItem.isFilterItem}
            bottom={isLastRow}
          >
            <EmptyHistoryItem {...historyItem} />
          </HistoryCell>
        );
      default: {
        const clickHandler = () => {
          const ownProps = {
            ownLinkParams: this.calculateItemOwnLinkParams(historyItem),
            itemId: historyItem.id,
          };
          navigate(link(ownProps));
        };
        return (
          <HistoryCell
            status={historyItem.status}
            onClick={clickHandler}
            highlighted={historyItem.isFilterItem}
            bottom={isLastRow}
            key={historyItem.id}
          >
            <HistoryItem
              testItem={historyItem}
              onSelectItem={onSelectItem}
              selectedItems={selectedItems}
              selectable={withGroupOperations && !historyItem.isFilterItem}
            />
          </HistoryCell>
        );
      }
    }
  };

  renderHeader = () => {
    const {
      intl: { formatMessage },
      selectedFilter,
      loading,
      history,
    } = this.props;
    const historyResourcesLength = history[0].resources.length;
    const maxRowItemsCount = selectedFilter ? historyResourcesLength - 1 : historyResourcesLength;
    const headerItems = [];
    // console.log("rederheader: "+history[0].resources)
    // console.log("filter: "+ selectedFilter);

    for (let index = maxRowItemsCount; index > 0; index -= 1) {
      let distro = '';
      history[0].resources[maxRowItemsCount - index].attributes.forEach((element) =>
        element.key === 'distro' ? (distro = element.value) : '',
      );
      headerlineLaunch[maxRowItemsCount - index] =
        history[0].resources[maxRowItemsCount - index].launchId;
      headerItems.push(
        <HistoryCell key={index} header>
          {history[0].resources[maxRowItemsCount - index].pathNames.launchPathName.name} #
          {history[0].resources[maxRowItemsCount - index].pathNames.launchPathName.number}
        </HistoryCell>,
      );
    }

    if (selectedFilter) {
      headerItems.unshift(
        <HistoryCell key={selectedFilter.id} header highlighted>
          {loading ? (
            <SpinningPreloader />
          ) : (
            <div className={cx('filter-cell-item')}>
              <i className={cx('compare-icon')}>{Parser(CompareIcon)}</i>
              <span className={cx('filter-name')} title={selectedFilter.name}>
                {selectedFilter.name}
              </span>
            </div>
          )}
        </HistoryCell>,
      );
    }
    return headerItems;
  };

  renderBody = () => {
    const { history, itemsHistory } = this.props;

    return history.map((item, index) => {
      const isLastRow = index === history.length - 1;

      console.log(headerlineLaunch);

      let k = 0;
      const tmp = Array();
      console.log('pole na zaciatku');
      console.log(item.resources);
      for (let i = 0; i < item.resources.length; ) {
        console.log(`i: ${i}`);
        if (item.resources[i].status == 'NOT_FOUND' || item.resources[i].status == 'RESETED') {
          console.log('nenajdene, pokracujem');
          i++;
          continue;
        }

        if (item.resources[i].launchId === headerlineLaunch[k]) {
          tmp[k] = item.resources[i];
          i++;
          console.log('rovnake, pokracujem');
        } else {
          console.log('prazdne pole, zaciatok');
          const emptyObj = { status: 'NOT_FOUND', id: 'NOT_FOUND_-1694763521_6' };
          tmp.splice(k, 0, emptyObj);
          console.log('prazdne pole, koniec');
        }
        k++;
        console.log('porovnavam');
        console.log(item.resources.length);
        console.log(k);
        if (k == item.resources.length) {
          console.log('breakujem');
          break;
        }
      }

      console.log('priradujem');
      console.log(tmp);
      item.resources = tmp;

      console.log('vysledne pole: ');
      console.log(item.resources);

      return (
        <tr key={item.groupingField}>
          <HistoryCell first>
            <div className={cx('history-grid-name')}>
              <ItemNameBlock
                data={itemsHistory[index].resources[0]}
                ownLinkParams={this.calculateItemOwnLinkParams(itemsHistory[index].resources[0])}
                // { `${ this.renderRow(longestRow, item.resources, line, isLastRow) } `}
              />
            </div>
          </HistoryCell>
          {item.resources.map((historyItem) =>
            this.renderCorrespondingHistoryItem(historyItem, isLastRow),
          )}
        </tr>
      );
    });
  };

  renderFooter = () => {
    const {
      intl: { formatMessage },
      history,
      loading,
      totalItemsCount,
    } = this.props;
    const visibleItemsCount = history.length;

    if (loading) {
      return (
        <div className={cx('spinner-wrapper')}>
          <SpinningPreloader />
        </div>
      );
    }

    return (
      !!visibleItemsCount &&
      visibleItemsCount < totalItemsCount && (
        <div className={cx('load-more-container')}>
          <button className={cx('load-more')} onClick={this.loadMoreHistoryItems}>
            <h3 className={cx('load-more-title')}>
              {formatMessage(messages.loadMoreHistoryItemsTitle)}
            </h3>
          </button>
        </div>
      )
    );
  };

  render() {
    const {
      intl: { formatMessage },
      history,
      loading,
      filterEntities,
    } = this.props;

    console.log("v historytable som !!!!!!!!!!!!!!!!!!!!!!!")
    console.log(filterEntities)

    return (
      <Fragment>
        {!history.length ? (
          !loading && <NoItemMessage message={formatMessage(messages.noHistoryItems)} />
        ) : (
          <ScrollWrapper autoHeight>
            <table className={cx('history-table')}>
              <thead>
                <tr>
                  <HistoryCell header first>
                    <div className={cx('history-grid-name')}>
                      {formatMessage(messages.itemNamesHeaderTitle)}
                    </div>
                  </HistoryCell>
                  {this.renderHeader()}
                </tr>
              </thead>
              <tbody>{this.renderBody()}</tbody>
            </table>
          </ScrollWrapper>
        )}
        {this.renderFooter()}
      </Fragment>
    );
  }
}
