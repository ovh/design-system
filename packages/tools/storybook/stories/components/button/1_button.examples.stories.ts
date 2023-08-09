import { defineCustomElements } from '@ovhcloud/ods-component-button/loader';
import generateExamples from '../../../.storybook/generate-examples-template';

defineCustomElements();

export default {
  title: 'UI Components/Button️ [atom]/Examples',
  id: 'button-examples',
  parameters: {
    controls: { hideNoControlsWarning: true },
    options: { showPanel: false },
  }
};

/* Examples */
export const Examples = () => generateExamples({
  'Sizes': [
    {
      title: "Small",
      template: `<osds-button color='primary' size='sm' inline>Button</osds-button>`
    },
    {
      title: "Medium (default)",
      template: `<osds-button color='primary' inline>Button</osds-button>`
    },
  ],
  'Style variations': [
    {
      title: "Flat (default)",
      template: `<osds-button color='primary' inline>Button</osds-button>`
    },
    {
      title: "Stroked",
      template: `<osds-button color='primary' variant='stroked' inline>Button</osds-button>`
    },
    {
      title: "Ghost",
      template: `<osds-button color='primary' variant='ghost' inline>Button</osds-button>`
    },
  ],
  'Widths': [
    {
      title: "Full width (default)",
      template: `<osds-button color='primary'>Button</osds-button>`
    },
    {
      title: "Inline",
      template: `<osds-button color='primary' inline>Button</osds-button>`
    },
  ],
  'Colors': [
    {
      title: "None (default)",
      template: `<osds-button inline>Button</osds-button>`
    },
    {
      title: "Primary",
      template: `<osds-button color='primary' inline>Button</osds-button>`
    },
    {
      title: "Error",
      template: `<osds-button color='error' inline>Button</osds-button>`
    }
  ],
  'Misc.': [
    {
      title: "Disabled",
      template: `<osds-button color='primary' inline disabled>Button</osds-button>`
    },
    {
      title: "Circle",
      template: `<osds-button color='primary' circle><osds-icon name='search' size='sm' color="primary"></osds-icon></osds-button>`
    },
    {
      title: "As link",
      template: `<osds-button color='primary' href="#" inline>Link<span slot="end"><osds-icon name='external-link' size='xxs' contrasted></osds-icon></span></osds-button>`
    }
  ],
  'Slots': [
    {
      title: "Main (default)",
      template: `<osds-button color='primary'>Button</osds-button>`
    },
    {
      title: "Start + Main",
      template: `<osds-button color='primary'><span slot='start'><osds-icon name='arrow-left' size='sm' contrasted></osds-icon></span>Button</osds-button>`
    },
    {
      title: "Main + End",
      template: `<osds-button color='primary'>Button<span slot='end'><osds-icon name='arrow-right' size='sm' contrasted></osds-icon></span></osds-button>`
    },
    {
      title: "All slots",
      template: `<osds-button color='primary'><span slot='start'><osds-icon name='arrow-left' size='sm' contrasted></osds-icon></span>Button<span slot='end'><osds-icon name='arrow-right' size='sm' contrasted></osds-icon></span></osds-button>`
    }
  ],
});
