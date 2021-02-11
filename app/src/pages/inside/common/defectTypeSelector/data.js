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

export const state = {
  project: {
    info: {
      configuration: {
        subTypes: {
          TO_INVESTIGATE: [
            {
              locator: 'TI001',
              typeRef: 'TO_INVESTIGATE',
              longName: 'To Investigate',
              shortName: 'TI',
              color: '#ffb743',
            },
          ],
          MINOR_DEFECT: [
            {
              locator: 'MD001',
              typeRef: 'MINOR_DEFECT',
              longName: 'Minor Defect',
              shortName: 'MD',
              color: '#777777',
            },
          ],
          TEST_BUG: [
            {
              locator: 'TB001',
              typeRef: 'TEST_BUG',
              longName: 'Test Bug',
              shortName: 'TB',
              color: '#f7d63e',
            },
            {
              locator: 'tb_1h7inqu51mgys',
              typeRef: 'TEST_BUG',
              longName: 'NewAB',
              shortName: 'NAB',
              color: '#e6ee9c',
            },
            {
              locator: 'tb_qecoiezu7sc8',
              typeRef: 'TEST_BUG',
              longName: 'New2AB',
              shortName: 'NAB2',
              color: '#ffcc80',
            },
            {
              locator: 'tb_1k1tyymqtlp46',
              typeRef: 'TEST_BUG',
              longName: 'New3AB',
              shortName: 'NAB3',
              color: '#ffab91',
            },
          ],
          PRODUCT_BUG: [
            {
              locator: 'PB001',
              typeRef: 'PRODUCT_BUG',
              longName: 'Product Bug',
              shortName: 'PB',
              color: '#ec3900',
            },
          ],
          SYSTEM_ISSUE: [
            {
              locator: 'SI001',
              typeRef: 'SYSTEM_ISSUE',
              longName: 'System Issue',
              shortName: 'SI',
              color: '#0274d1',
            },
          ],
        },
      },
    },
  },
};
