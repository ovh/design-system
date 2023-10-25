import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import type { OsdsButton } from '@ovhcloud/ods-component-button';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '@ovhcloud/ods-component-button';
import type { OsdsIcon } from '@ovhcloud/ods-component-icon';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-component-icon';

import { OdsCodeController } from './controller';
import { OsdsCode } from '../osds-code';

class OdsCodeMock extends OsdsCode {
  constructor(attribute: Partial<OsdsCode>) {
    super();
    Object.assign(this, attribute);
  }

  controller: OdsCodeController = jest.fn() as unknown as OdsCodeController;
  beforeRender = jest.fn();
  copyCode = jest.fn();
  autocompleteCopySlot = jest.fn();
  codeEl = document.createElement('code') as HTMLElement;
}

describe('spec:ods-code-controller', () => {
  let controller: OdsCodeController;
  let component: OsdsCode;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsCode> = {}) {
    component = new OdsCodeMock(attributes);
    controller = new OdsCodeController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsCodeController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:copyCode', () => {
      beforeEach(() => {
        Object.assign(navigator, {
          clipboard: {
            writeText: jest.fn().mockImplementation(() => Promise.resolve()),
          },
        });
      });

      // FIXME seems like testing slot text content is not possible for now as assignedNodes function is not available
      //  (see https://github.com/ionic-team/stencil/issues/2830)
      xit('should copy code content to clipboard', () => {
        setup();
        const textNode = document.createTextNode('Code content');
        const slot = document.createElement('slot');
        const spyOnQuerySelectorCodeEL = jest.spyOn(component.codeEl, 'querySelector').mockImplementation(() => {
          return slot;
        });
        const spyOnAssignedElements = jest.spyOn(slot, 'assignedNodes').mockImplementation(() => [textNode]);
        const spyOnClipboard = jest.spyOn(navigator.clipboard, 'writeText');
        controller.copyCode();
        expect(spyOnQuerySelectorCodeEL).toHaveBeenCalledWith('slot');
        expect(spyOnQuerySelectorCodeEL).toHaveBeenCalledTimes(1);
        expect(spyOnAssignedElements).toHaveBeenCalledWith();
        expect(spyOnAssignedElements).toHaveBeenCalledTimes(1);
        expect(spyOnClipboard).toHaveBeenCalledWith('Code content');
      });

      it('should call component.emitCopy', () => {
        setup();
        const spyOn = jest.spyOn(component, 'emitCopy');
        controller.copyCode();
        expect(spyOn).toHaveBeenCalled();
      });
    });

    describe('methods:autocompleteCopySlot', () => {
      it('should warn if ods-button size is different than sm', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OsdsButton);
        button.setAttribute('size', ODS_BUTTON_SIZE.sm);
        controller.autocompleteCopySlot(button, null);
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledTimes(0);

        button.setAttribute('size', ODS_BUTTON_SIZE.md);
        controller.autocompleteCopySlot(button, null);
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledWith('size on copy slot will be overridden with sm');
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledTimes(1);
      });

      it('should warn if ods-icon size is different than xs', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OsdsButton);
        const icon = document.createElement('osds-icon') as (HTMLSlotElement & OsdsIcon);
        button.appendChild(icon);

        icon.setAttribute('size', ODS_ICON_SIZE.xs);
        controller.autocompleteCopySlot(button, icon);
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledTimes(0);

        icon.setAttribute('size', ODS_ICON_SIZE.xl);
        controller.autocompleteCopySlot(button, icon);
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledWith('size on icon component will be overridden with xs');
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledTimes(1);
      });

      it('should set ods-button attributes', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OsdsButton);
        controller.autocompleteCopySlot(button, null);
        expect(button.size).toBe(ODS_BUTTON_SIZE.sm);
        expect(button.variant).toBe(ODS_BUTTON_VARIANT.ghost);
        expect(button.contrasted).toBe(true);
      });

      it('should create default ods-icon in ods-button', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OsdsButton);
        controller.autocompleteCopySlot(button, null);
        const icon = button.querySelector('osds-icon') as (HTMLSlotElement & OsdsIcon);
        expect(icon.size).toBe(ODS_ICON_SIZE.xs);
        expect(icon.name).toBe(ODS_ICON_NAME.COPY);
        expect(icon.contrasted).toBe(true);
      });

      it('should set attributes on custom ods-icon', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OsdsButton);
        const icon = document.createElement('osds-icon') as (HTMLSlotElement & OsdsIcon);
        icon.name = ODS_ICON_NAME.FILE;
        button.appendChild(icon);

        controller.autocompleteCopySlot(button, icon);
        expect(icon.name).toBe(ODS_ICON_NAME.FILE);
        expect(icon.size).toBe(ODS_ICON_SIZE.xs);
        expect(icon.contrasted).toBe(true);
      });
    });
  });
});
