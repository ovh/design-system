/* eslint-disable no-console */
import { OdsLogger } from './ods-logger';
import { OdsWindow } from '../configure/ods-window';
import { Ods } from '../configure/ods';
import { odsDefaultConfig } from '../configure/ods-default-config';

describe('e2e:ods-logging', () => {
  let logger: OdsLogger;

  function setup() {
    logger = new OdsLogger('e2e:ods-logging');
  }

  describe('e2e', () => {
    it('should enable logging via ods', () => {
      Ods.instance().logging(true);
      setup();
      expect(logger.logging).toEqual(true);
    });

    it('should disable logging via ods', () => {
      Ods.instance().logging(false);
      setup();
      expect(logger.logging).toEqual(false);
    });

    it('should modify logging via ods', () => {
      setup();
      expect(logger.logging).toEqual(odsDefaultConfig.logging.active);

      Ods.instance().logging(true);
      expect(logger.logging).toEqual(true);

      Ods.instance().logging(false);
      expect(logger.logging).toEqual(false);
    });

    it('should enable logging via window', () => {
      const win: OdsWindow = window;
      win.ods = win.ods || {};
      win.ods.config = { logging: { active: true, color: true } }
      setup();
      expect(logger.logging).toEqual(true);
    });

    it('should modify logging via window', () => {
      const win: OdsWindow = window;
      win.ods = win.ods || {};
      win.ods.config = { logging: { active: false, color: true } }
      setup();
      expect(logger.logging).toEqual(win.ods.config.logging?.active);

      win.ods.config.logging!.active = true;
      expect(logger.logging).toEqual(true);

      win.ods.config.logging!.active = false;
      expect(logger.logging).toEqual(false);
    });
  });

});
