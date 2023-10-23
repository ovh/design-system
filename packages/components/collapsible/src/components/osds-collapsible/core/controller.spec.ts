import type {EventEmitter} from '@stencil/core';
import {OdsCollapsibleController} from './controller';
import {OsdsCollapsible} from '../osds-collapsible';

class OdsCollapsibleMock extends OsdsCollapsible {
  constructor(attribute: Partial<OsdsCollapsible>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-collapsible-controller', () => {
  let controller: OdsCollapsibleController;
  let component: OsdsCollapsible;

  function setup(attributes: Partial<OsdsCollapsible> = {}) {
    component = new OdsCollapsibleMock(attributes);
    component.odsCollapsibleToggle = {emit: jest.fn()} as unknown as EventEmitter<boolean>;
    controller = new OdsCollapsibleController(component);
  }

  describe('methods:onToggle', () => {
    it('should odsCollapsibleToggle emit false', () => {
      setup({opened: true});
      const spy = jest.spyOn(component, 'emitToggle');
      controller.onToggle();
      expect(spy).toHaveBeenCalledWith(true);
    });

    it('should odsCollapsibleToggle emit true', () => {
      setup({opened: false});
      const spy = jest.spyOn(component, 'emitToggle');
      controller.onToggle();
      expect(spy).toHaveBeenCalledWith(false);
    });
  });
});
