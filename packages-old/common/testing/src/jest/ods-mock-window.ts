/**
 * WARNING: keep direct access to file for the two imports.
 * it avoids to import `@ovhcloud/ods-core` that setup globals itself
 * in `packages/libraries/core/src/index.ts` with `setUpGlobals();`
 */
// import { OdsWindowConfig } from '@ovhcloud/ods-core/src/configure/ods-window-config';
// import { OdsWindow } from '@ovhcloud/ods-core/src/configure/ods-window';

interface OdsMockWindow extends Window {
  ods?: any;
  winId?: number;
}

/**
 * mock the window for jest testing.
 * very useful with stencil in order to manage the MockedWindow of stencil.
 * warning: when using `window` with stencil e2e test, each time window is called, a new MockedWindow is created.
 * it can lead to misunderstanding, so it is recommended to use this in every e2e tests.
 * @param setupConfig- - window's ods config
 */
export function odsMockWindow(setupConfig: any): void {
  // TODO remove or update if still needed
  jest.mock('@ovhcloud/ods-common-core/src/configure/ods-get-window', () => ({
    getOdsWindow: ():OdsMockWindow | undefined => {
      console.log('[odsMockWindow]', 'get mocked window');
      // node protection or other env : window may not exist
      if (typeof window !== 'undefined') {
        const win: OdsMockWindow = window;
        // set automatically window id in order trace the used window or mocked window by the framework tool like stencil
        win.winId = win.winId ? win.winId : Math.floor(Math.random() * 100000000);

        // set automatically setupId in order to avoid doing it into the spec file
        setupConfig.setupId = setupConfig.setupId ? setupConfig.setupId : Math.floor(Math.random() * 100000000);
        // set automatically logging config id in order to avoid doing it into the spec file
        setupConfig.config = setupConfig.config ? setupConfig.config : {};
        setupConfig.config.id = setupConfig.config.id ? setupConfig.config.id : Math.floor(Math.random() * 100000000);

        // set up it into the window if not already done
        !win.ods && (win.ods = setupConfig);

        // eslint-disable-next-line no-console
        console.log('want mocked window id=', win.winId, { setupId: win.ods?.setupId, config: win.ods?.config });
        return win;
      }
      return undefined;
    },
  }));
}
