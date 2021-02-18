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

import { defineMessages } from 'react-intl';
import {
  TEST_BUG,
  INVESTIGATED,
  LAUNCHES_QUANTITY,
  PRODUCT_BUG,
  SYSTEM_ISSUE,
  TO_INVESTIGATE,
  MINOR_DEFECT,
} from './constants';

export const messages = defineMessages({
  total: {
    id: 'Charts.total',
    defaultMessage: 'Total {type}',
  },
  passed: {
    id: 'Charts.passed',
    defaultMessage: 'Passed',
  },
  failed: {
    id: 'Charts.failed',
    defaultMessage: 'Failed',
  },
  skipped: {
    id: 'Charts.skipped',
    defaultMessage: 'Skipped',
  },
  untested: {
    id: 'Charts.untested',
    defaultMessage: 'Untested',
  },
  running: {
    id: 'Charts.running',
    defaultMessage: 'Running',
  },
  notPassed: {
    id: 'Charts.notPassed',
    defaultMessage: 'Not passed',
  },
  cases: {
    id: 'Charts.cases',
    defaultMessage: 'cases',
  },
  launchName: {
    id: 'Charts.launchName',
    defaultMessage: 'Launch name:',
  },
  filterLabel: {
    id: 'Charts.filterLabel',
    defaultMessage: 'Filter:',
  },
  failedSkippedUntestedRunningTotal: {
    id: 'Charts.failedSkippedUntestedRunningTotal',
    defaultMessage: '% (Failed+Skipped+Untested+Running)/Total',
  },
  [TO_INVESTIGATE]: {
    id: `Chart.label.toInvestigate`,
    defaultMessage: 'To Investigate',
  },
  [INVESTIGATED]: {
    id: `Chart.label.investigated`,
    defaultMessage: 'Investigated',
  },
  [PRODUCT_BUG]: {
    id: `Chart.label.productBug`,
    defaultMessage: 'Product Bug',
  },
  [TEST_BUG]: {
    id: `Chart.label.testBug`,
    defaultMessage: 'Test Bug',
  },
  [SYSTEM_ISSUE]: {
    id: `Chart.label.systemIssue`,
    defaultMessage: 'System Issue',
  },
  [MINOR_DEFECT]: {
    id: `Chart.label.minorDefect`,
    defaultMessage: 'Minor Defect',
  },
  [LAUNCHES_QUANTITY]: {
    id: `Chart.label.launchesQuantity`,
    defaultMessage: 'Launches',
  },
  passingRate: {
    id: 'Charts.passingRate',
    defaultMessage: 'Passing rate',
  },
  testCasesCaption: {
    id: 'Charts.testCasesCaption',
    defaultMessage: 'Test cases',
  },
  launchInterrupted: {
    id: `Charts.launchInterrupted`,
    defaultMessage: 'Run interrupted',
  },
});
