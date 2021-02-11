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

import {
  MINOR_DEFECT,
  SYSTEM_ISSUE,
  TEST_BUG,
  PRODUCT_BUG,
  TO_INVESTIGATE,
} from 'common/constants/defectTypes';

export const DEFECT_TYPE_CONFIGURATION = [
  PRODUCT_BUG.toUpperCase(),
  TEST_BUG.toUpperCase(),
  SYSTEM_ISSUE.toUpperCase(),
  MINOR_DEFECT.toUpperCase(),
  TO_INVESTIGATE.toUpperCase(),
];
