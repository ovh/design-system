jest.mock('./core/controller'); // keep jest.mock before any import

import type { SpecPage } from '@stencil/core/testing'
import { newSpecPage } from '@stencil/core/testing';
import { OsdsAccordion } from '../osds-accordion/osds-accordion';
import { OdsAccordionGroupController } from './core/controller';
import { OsdsAccordionGroup } from './osds-accordion-group';

describe('spec:osds-accordion-group', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsAccordionGroup;
  let mainSlot: HTMLElement | null | undefined;
  let controller: OdsAccordionGroupController

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup() {
    page = await newSpecPage({
      components: [OsdsAccordionGroup],
      html: `<osds-accordion-group></osds-accordion-group>`
    });

    root = page.root;
    instance = page.rootInstance;
    mainSlot = root?.shadowRoot?.querySelector('slot:not([name])');

    controller = (OdsAccordionGroupController as unknown as jest.SpyInstance<OdsAccordionGroupController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a main slot', async () => {
      await setup();
      expect(mainSlot).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call controller.beforeInit before initialization', async () => {
      await setup();
      expect(controller.beforeInit).toHaveBeenCalledWith();
      expect(controller.beforeInit).toHaveBeenCalledTimes(1);
    });

    it('should call controller.onDestroy on destroy', async () => {
      await setup();
      root.remove();
      expect(controller.onDestroy).toHaveBeenCalledWith();
      expect(controller.onDestroy).toHaveBeenCalledTimes(1);
    });

    it('should call controller.registerAccordion from registerAccordion method', async () => {
      const accordion = new OsdsAccordion() as unknown as (HTMLElement & OsdsAccordion);
      await setup();
      await instance.registerAccordion(accordion);
      expect(controller.registerAccordion).toHaveBeenCalledWith(accordion);
      expect(controller.registerAccordion).toHaveBeenCalledTimes(1);
    });

    it('should call controller.unRegisterAccordion from unRegisterAccordion method', async () => {
      const accordion = new OsdsAccordion() as unknown as (HTMLElement & OsdsAccordion);
      await setup();
      await instance.unRegisterAccordion(accordion);
      expect(controller.unRegisterAccordion).toHaveBeenCalledWith(accordion);
      expect(controller.unRegisterAccordion).toHaveBeenCalledTimes(1);
    });
  });
});
