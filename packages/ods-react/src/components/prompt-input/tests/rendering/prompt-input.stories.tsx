import { PromptInput } from '../../src';

export default {
  component: PromptInput,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <PromptInput style={{ height: '42px' }} />
);

export const render = () => (
  <PromptInput />
);
