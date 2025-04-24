import { Clipboard } from '.';

export default {
  component: Clipboard,
  title: 'Clipboard dev',
};

export const Default = () => (
  <Clipboard value="My great value to copy" />
);

export const Masked = () => (
  <Clipboard value="My great value to copy" maskOption={{ enable: true }} />
);

export const Disabled = () => (
  <Clipboard value="My great value to copy" disabled />
);

export const Loading = () => (
  <Clipboard value="My great value to copy" loading />
);
