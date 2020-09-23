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

import React, { Fragment } from 'react';
import PropTypes, { element } from 'prop-types';
import { HISTORY_PAGE_EVENTS } from 'components/main/analytics/events';
import { RefineFiltersPanel } from 'pages/inside/common/refineFiltersPanel';
import { ActionPanel } from './actionPanel';
import { ActionPanelWithGroupOperations } from './actionPanelWithGroupOperations';

export const HistoryToolbar = ({
  selectedItems,
  onUnselect,
  onUnselectAll,
  onRefresh,
  onFilterAdd,
  onFilterRemove,
  onFilterValidate,
  onFilterChange,
  myonFilterAdd,
  myonFilterRemove,
  myonFilterValidate,
  myonFilterChange,
  filterErrors,
  myfilterErrors,
  filterEntities,
  infoLine,
  withGroupOperations,
  userId,
}) => {
  console.log('myonFilterAdd');
  console.log(myonFilterAdd);
  console.log('myonFilterRemove');
  console.log(myonFilterRemove);
  console.log('myonFilterValidate');
  console.log(myonFilterValidate);
  console.log('myonFilterChange');
  console.log(myonFilterChange);
  console.log('myfilterErrors');
  console.log(myfilterErrors);
  console.log('myonFilterAdd');
  console.log(onFilterAdd);
  console.log('onFilterRemove');
  console.log(onFilterRemove);
  console.log('onFilterValidate');
  console.log(onFilterValidate);
  console.log('onFilterChange');
  console.log(onFilterChange);
  console.log('filterErrors');
  console.log(filterErrors);
  console.log('events');
  console.log(HISTORY_PAGE_EVENTS.REFINE_FILTERS_PANEL_EVENTS);

  let myFilterEntities;
  myFilterEntities = filterEntities.slice(0, 5);
  myFilterEntities.splice(0, 3);

  // myFilterEntities.forEach(element => element.active = true);

  console.log('myfilterEntities');
  console.log(myFilterEntities);
  console.log('filterEntities');
  console.log(filterEntities);

  return (
    <Fragment>
      {withGroupOperations ? (
        <ActionPanelWithGroupOperations
          onRefresh={onRefresh}
          selectedItems={selectedItems}
          onUnselect={onUnselect}
          onUnselectAll={onUnselectAll}
          userId={userId}
        />
      ) : (
        <ActionPanel onRefresh={onRefresh} selectedItems={selectedItems} />
      )}
      {infoLine}
      <RefineFiltersPanel
        onFilterAdd={onFilterAdd}
        onFilterRemove={onFilterRemove}
        onFilterValidate={onFilterValidate}
        onFilterChange={onFilterChange}
        filterErrors={filterErrors}
        filterEntities={filterEntities}
        events={HISTORY_PAGE_EVENTS.REFINE_FILTERS_PANEL_EVENTS}
      />
      <RefineFiltersPanel
        onFilterAdd={myonFilterAdd}
        onFilterRemove={myonFilterRemove}
        onFilterValidate={myonFilterValidate}
        onFilterChange={myonFilterChange}
        filterErrors={myfilterErrors}
        filterEntities={myFilterEntities}
        events={HISTORY_PAGE_EVENTS.REFINE_FILTERS_PANEL_EVENTS}
      />
    </Fragment>
  );
};
HistoryToolbar.propTypes = {
  /*
          <RefineFiltersPanel
          onFilterAdd={FilterEntitiesContainer.handleAdd}
          onFilterRemove={FilterEntitiesContainer.handleRemove}
          onFilterValidate={FilterEntitiesContainer.handleValidate}
          onFilterChange={FilterEntitiesContainer.handleChange}
          filterErrors={FilterEntitiesContainer.state.error}/>
   */
  selectedItems: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.string,
  infoLine: PropTypes.node,
  filterErrors: PropTypes.object,
  myfilterErrors: PropTypes.object,
  filterEntities: PropTypes.array,
  withGroupOperations: PropTypes.bool,
  onRefresh: PropTypes.func,
  onFilterAdd: PropTypes.func,
  onFilterRemove: PropTypes.func,
  onFilterValidate: PropTypes.func,
  onFilterChange: PropTypes.func,
  myonFilterAdd: PropTypes.func,
  myonFilterRemove: PropTypes.func,
  myonFilterValidate: PropTypes.func,
  myonFilterChange: PropTypes.func,
  onUnselect: PropTypes.func,
  onUnselectAll: PropTypes.func,
};
HistoryToolbar.defaultProps = {
  selectedItems: [],
  userId: '',
  infoLine: null,
  filterErrors: {},
  myfilterErrors: {},
  filterEntities: [],
  withGroupOperations: false,
  onRefresh: () => {},
  onFilterAdd: () => {},
  onFilterRemove: () => {},
  onFilterValidate: () => {},
  onFilterChange: () => {},
  myonFilterAdd: () => {},
  myonFilterRemove: () => {},
  myonFilterValidate: () => {},
  myonFilterChange: () => {},
  onUnselect: () => {},
  onUnselectAll: () => {},
};
