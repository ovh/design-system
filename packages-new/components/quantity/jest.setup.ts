/**
 * setup jest file executed for each test and in the test environment
 * @see https://jestjs.io/fr/docs/configuration#setupfiles-array
 */

import { odsMockWindow } from '@ovhcloud/ods-common-testing/src/jest/ods-mock-window';

// set a mocked configured config for ODS
// config can be changed on the fly later in tests
odsMockWindow({ config: { logging: { active: false } } });

