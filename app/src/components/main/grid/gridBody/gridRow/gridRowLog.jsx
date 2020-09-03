import { render } from "react-dom";

import React, { Component } from 'react';
import styles from './gridRowLog.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export class GridRowLog extends Component {
    render() {
        return(
                <div className={cx("grid-row-log1")}>
                    <div className={cx("grid-row-log2")}>
                        <div className={cx("grid-row-log3")}>
                            <div className={cx("grid-row-log4")}>
                                <p><a href={this.props.element.value}>{this.props.element.key}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}