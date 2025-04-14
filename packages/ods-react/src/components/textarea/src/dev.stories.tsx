import { Textarea } from '.';

export default {
  component: Textarea,
  title: 'Textarea dev',
};

export const Default = () => (
  <Textarea />
);

export const Disabled = () => (
  <Textarea disabled />
);
