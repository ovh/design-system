import { html } from 'lit-html';
import page from './oles-ipsum.mdx';
import { olesIpsum, OlesIpsumGeneration, OlesIpsumGenerationList } from '@ovhcloud/ods-common-core';

export default {
  title: 'Libraries/Core/Oles Ipsum',
  parameters: {
    docs: { page },
  },
  argTypes: {
    generationType: {
      options: OlesIpsumGenerationList,
      control: { type: 'radio' },
    },
    amount: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
    }
  }
};

const Template = (args: any) => {
  return html`
    <p style="white-space: pre-line;">${olesIpsum(args.generationType, args.amount)}</p>
  `;
};
export const OlesIpsum = Template.bind({});
OlesIpsum.args = {
  generationType: OlesIpsumGeneration.words,
  amount: 10,
};

