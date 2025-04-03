import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_MESSAGE_COLOR } from '../../src';

describe('ods-message rendering', () => {
  let closeButton: E2EElement;
  let el: E2EElement;
  let message: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-message');
    message = await page.find('ods-message >>> .ods-message__message');
    closeButton = await page.find('ods-message >>> .ods-message__message__close');
  }

  it('should render the web component', async() => {
    await setup('<ods-message></ods-message>');

    expect(el.shadowRoot).not.toBeNull();
    expect(message).not.toBeNull();
    expect(closeButton).not.toBeNull();
  });

  describe('icon', () => {
    it('should render critical icon', async() => {
      await setup(`<ods-message color="${ODS_MESSAGE_COLOR.critical}"></ods-message>`);

      const criticalIcon = await message.find('ods-icon[name="hexagon-exclamation"]');

      expect(criticalIcon).not.toBeNull();
    });

    it('should render danger icon', async() => {
      await setup(`<ods-message color="${ODS_MESSAGE_COLOR.danger}"></ods-message>`);

      const dangerIcon = await message.find('ods-icon[name="diamond-exclamation"]');

      expect(dangerIcon).not.toBeNull();
    });

    it('should render information icon', async() => {
      await setup(`<ods-message color="${ODS_MESSAGE_COLOR.information}"></ods-message>`);

      const informationIcon = await message.find('ods-icon[name="circle-info"]');

      expect(informationIcon).not.toBeNull();
    });

    it('should render success icon', async() => {
      await setup(`<ods-message color="${ODS_MESSAGE_COLOR.success}"></ods-message>`);

      const successIcon = await message.find('ods-icon[name="circle-check"]');

      expect(successIcon).not.toBeNull();
    });

    it('should render warning icon', async() => {
      await setup(`<ods-message color="${ODS_MESSAGE_COLOR.warning}"></ods-message>`);

      const warningIcon = await message.find('ods-icon[name="triangle-exclamation"]');

      expect(warningIcon).not.toBeNull();
    });
  });

  describe('isDismissible', () => {
    it('should render with close button by default', async() => {
      await setup('<ods-message></ods-message>');

      const closeButton = await page.find('ods-message >>> .ods-message__message__close');

      expect(closeButton).not.toBeNull();
    });

    it('should render without close button if set to false', async() => {
      await setup('<ods-message is-dismissible="false"></ods-message>');

      const closeButton = await page.find('ods-message >>> .ods-message__message__close');

      expect(closeButton).toBeNull();
    });
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customBackgroundColor = '#ff0000';

      await setup('<ods-message></ods-message>', `ods-message::part(message) { background-color: ${customBackgroundColor}; }`);

      const messageStyle = await message.getComputedStyle();
      expect(messageStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });
});
