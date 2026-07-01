import { Command } from '../../src';

export default {
  component: Command,
  title: 'Tests accessibility',
};

export const Default = () => (
  <Command open>
    <Command.Content createPortal={ false }>
      <Command.Filter placeholder="Search..." />
      <Command.List>
        <Command.Option id="opt-new-file">New file</Command.Option>
        <Command.Option id="opt-open-file">Open file</Command.Option>
        <Command.Option id="opt-save-file">Save file</Command.Option>
      </Command.List>
    </Command.Content>
  </Command>
);

export const WithGroup = () => (
  <Command open>
    <Command.Content createPortal={ false }>
      <Command.Filter placeholder="Search..." />
      <Command.List>
        <Command.Group heading="File">
          <Command.Option id="opt-new-file">New file</Command.Option>
          <Command.Option id="opt-open-file">Open file</Command.Option>
        </Command.Group>
        <Command.Group heading="Edit">
          <Command.Option id="opt-copy">Copy</Command.Option>
        </Command.Group>
      </Command.List>
    </Command.Content>
  </Command>
);
