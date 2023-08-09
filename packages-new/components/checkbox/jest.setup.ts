/**
 * setup jest file executed for each test and in the test environment
 * @see https://jestjs.io/fr/docs/configuration#setupfiles-array
 */

// set a mocked configured config for ODS
// config can be changed on the fly later in tests

const setupConfig: any = { config: { logging: { active: false } } };
/**
 * mock the window for jest testing.
 * very useful with stencil in order to manage the MockedWindow of stencil.
 * warning: when using `window` with stencil e2e test, each time window is called, a new MockedWindow is created.
 * it can lead to misunderstanding, so it is recommended to use this in every e2e tests.
 * @param setupConfig- - window's ods config
 */

