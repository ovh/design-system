/* eslint-disable no-console */
import {OdsLogger} from './ods-logger';
import {odsDefaultConfig} from '../configure/ods-default-config';
import {OdsWindow} from '../configure/ods-window';

describe('spec:ods-logger', () => {
  let logger: OdsLogger;

  function setup() {
    logger = new OdsLogger('spec:ods-logger');
  }

  it('should initialize', () => {
    setup();
    expect(logger).toBeTruthy();
  });

  describe('methods', () => {

    describe('logging', () => {
      it('should have no logging by default', () => {
      });

      describe('no config', () => {
        it('should take the default config', () => {
          setup();
          expect(logger.logging).toEqual(odsDefaultConfig.logging.active);
        });
      });


      describe('with config', () => {
        it('should take the default config', () => {
          const win: OdsWindow = window;
          win.ods = win.ods || {};
          win.ods.config = {logging: {active: true, color: true}};
          setup();
          expect(logger.logging).toEqual(win.ods.config.logging?.active);
        });
      });

    });

  });

});
