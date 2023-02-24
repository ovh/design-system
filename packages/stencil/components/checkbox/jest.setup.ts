/**
 * setup jest file executed for each test and in the test environment
 * @see https://jestjs.io/fr/docs/configuration#setupfiles-array
 */

// import { odsMockWindow } from '@ovhcloud/ods-testing/src/jest/ods-mock-window';

console.log('mockkk')
// set a mocked configured config for ODS
// config can be changed on the fly later in tests
// odsMockWindow({ config: { logging: { active: false } } });


interface OdsMockWindow extends Window {
  ods?: any;
  winId?: number;
}

const setupConfig: any = { config: { logging: { active: false } } };
/**
 * mock the window for jest testing.
 * very useful with stencil in order to manage the MockedWindow of stencil.
 * warning: when using `window` with stencil e2e test, each time window is called, a new MockedWindow is created.
 * it can lead to misunderstanding, so it is recommended to use this in every e2e tests.
 * @param setupConfig- - window's ods config
 */
// export function odsMockWindow(setupConfig: any): void {
//   jest.mock('@ovhcloud/ods-core/src/configure/ods-get-window', () => ({
//     getOdsWindow: ():OdsMockWindow | undefined => {
//       console.log('[odsMockWindow]', 'get mocked window');
//       // node protection or other env : window may not exist
//       if (typeof window !== "undefined") {
//         const win: OdsMockWindow = window;
//         // set automatically window id in order trace the used window or mocked window by the framework tool like stencil
//         win.winId = win.winId ? win.winId : Math.floor(Math.random() * 100000000);
//
//         // set automatically setupId in order to avoid doing it into the spec file
//         setupConfig.setupId = setupConfig.setupId ? setupConfig.setupId : Math.floor(Math.random() * 100000000);
//         // set automatically logging config id in order to avoid doing it into the spec file
//         setupConfig.config = setupConfig.config ? setupConfig.config : {};
//         setupConfig.config.id = setupConfig.config.id ? setupConfig.config.id : Math.floor(Math.random() * 100000000);
//
//         // set up it into the window if not already done
//         !win.ods && (win.ods = setupConfig);
//
//         // eslint-disable-next-line no-console
//         console.log('want mocked window id=', win.winId, { setupId: win.ods?.setupId, config: win.ods?.config });
//         return win;
//       }
//       return undefined;
//     },
//   }));
// }
