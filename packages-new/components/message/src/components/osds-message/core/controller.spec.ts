import type { EventEmitter } from '@stencil/core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OsdsMessage } from '../osds-message';
import { OdsMessageController } from './controller';
import { ODS_MESSAGE_TYPE } from '../constants/message-type';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { DEFAULT_ATTRIBUTE } from '../constants/default-attributes';

class OdsMessageMock extends OsdsMessage {
  constructor(attribute: Partial<OsdsMessage>) {
    super();
    Object.assign(this, attribute)
  }
  controller: OdsMessageController = jest.fn() as unknown as OdsMessageController;
  odsRemoveClick!: EventEmitter<void>;
  removeClicked = jest.fn();
  beforeInit = jest.fn();
}

describe('spec:ods-message-controller', () => {
  let controller: OdsMessageController;
  let component: OsdsMessage;
  let spyOnRemoveClicked: jest.SpyInstance<void, jest.ArgsType<OsdsMessage['removeClicked']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsMessage> = {}) {
    component = new OdsMessageMock(attributes);
    controller = new OdsMessageController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsMessageController
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:validateColor', () => {
      it('should throw a console.warn when color does not exist', () => {
        setup();

        controller.validateColor(DEFAULT_ATTRIBUTE.color);
        expect(loggerSpyReferences.methodSpies.warn).not.toHaveBeenCalled();

        controller.validateColor('wrongColor' as OdsThemeColorIntent);

        const expected = "The color attribute must have a value from [default, primary, text, accent, error, warning, success, info, promotion]";
        expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith(expected);
      });
    });

    describe('methods:setColorForType', () => {
      it('should change default color', async () => {
        setup({ type: ODS_MESSAGE_TYPE.info, color: OdsThemeColorIntent.default });
        controller.setColorForType(ODS_MESSAGE_TYPE.success);
        expect(component.color).toBe(OdsThemeColorIntent.success);
      });

      it('should not change other color', () => {
        setup({ type: ODS_MESSAGE_TYPE.success, color: OdsThemeColorIntent.success });
        controller.setColorForType(ODS_MESSAGE_TYPE.error);
        expect(component.color).toBe(OdsThemeColorIntent.success);
      });
    });

    describe('methods:onRemoveClicked', () => {
      it('should call controller.removeClicked', () => {
        setup();
        spyOnRemoveClicked = jest.spyOn(component, 'removeClicked');
        controller.onRemoveClicked();
        expect(spyOnRemoveClicked).toHaveBeenCalledWith();
      })
    });
  });
});
