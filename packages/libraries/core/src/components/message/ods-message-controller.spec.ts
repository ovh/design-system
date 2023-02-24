import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { Ods } from '../../configure/ods';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsMessage } from './ods-message';
import { OdsMessageController } from './ods-message-controller';
import { OdsMessageMock } from './ods-message-mock';
import { OdsMessageType } from './ods-message-type';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { odsMessageDefaultAttributes } from './ods-message-default-attributes';

describe('spec:ods-message-controller', () => {
  let controller: OdsMessageController;
  let component: OdsMessage;
  let spyOnRemoveClicked: jest.SpyInstance<void, jest.ArgsType<OdsMessage['removeClicked']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsMessage> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsMessageController(component);
  }

  beforeEach(() => {
    component = new OdsMessageMock();
    spyOnRemoveClicked = jest.spyOn(component, 'removeClicked');

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsMessageController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:validateColor', () => {
      it('should throw a console.warn when color does not exist', () => {
        setup();

        controller.validateColor(odsMessageDefaultAttributes.color);
        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();

        controller.validateColor('wrongColor' as OdsThemeColorIntent);

        const expected = "The color attribute must have a value from [default, primary, text, accent, error, warning, success, info, promotion]";
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });

    describe('methods:setColorForType', () => {
      it('should change default color', async () => {
        setup({ type: OdsMessageType.info, color: OdsThemeColorIntent.default });
        controller.setColorForType(OdsMessageType.success);
        expect(component.color).toBe(OdsThemeColorIntent.success);
      });

      it('should not change other color', () => {
        setup({ type: OdsMessageType.success, color: OdsThemeColorIntent.success });
        controller.setColorForType(OdsMessageType.error);
        expect(component.color).toBe(OdsThemeColorIntent.success);
      });
    });

    describe('methods:onRemoveClicked', () => {
      it('should call component.removeClicked', () => {
        setup();
        controller.onRemoveClicked();
        expect(spyOnRemoveClicked).toHaveBeenCalledWith();
      })
    });
  });
});
