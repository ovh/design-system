import type { SpecPage } from '@stencil/core/testing';

import { newSpecPage } from '@stencil/core/testing';

import { OsdsTooltipContent } from './osds-tooltip-content';

describe('spec:osds-tooltip-content', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTooltipContent;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup() {
    page = await newSpecPage({
      components: [OsdsTooltipContent],
      html: '<osds-tooltip-content>My Tooltip Content</osds-tooltip-content>',
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });
});
