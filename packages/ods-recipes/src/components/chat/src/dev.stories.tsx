import { Chat } from '.';

export default {
  component: Chat,
  title: 'Chat dev',
};

export const CssModule = () => (
  <div style={{ height: 'calc(100vh - 2rem)' }}>
    <Chat.CssModule />
  </div>
);

export const Tailwind = () => (
  <Chat.Tailwind />
);
