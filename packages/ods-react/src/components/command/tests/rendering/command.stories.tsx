import { Command } from '../../src';

export default {
  component: Command,
  title: 'Tests rendering',
};

const options = [
  { id: 'opt-new-file', label: 'New file' },
  { id: 'opt-open-file', label: 'Open file' },
  { id: 'opt-save-file', label: 'Save file' },
];

export const Default = () => (
  <Command open>
    <Command.Content createPortal={ false }>
      <Command.Filter placeholder="Search..." />
      <Command.List>
        { options.map((opt) => (
          <Command.Option key={ opt.id } id={ opt.id }>{ opt.label }</Command.Option>
        )) }
        <Command.Empty>No results found.</Command.Empty>
      </Command.List>
    </Command.Content>
  </Command>
);

export const WithGroups = () => (
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
          <Command.Option id="opt-paste">Paste</Command.Option>
        </Command.Group>
        <Command.Empty>No results found.</Command.Empty>
      </Command.List>
    </Command.Content>
  </Command>
);

export const WithEmpty = () => (
  <Command open>
    <Command.Content createPortal={ false }>
      <Command.Filter placeholder="Search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
      </Command.List>
    </Command.Content>
  </Command>
);

export const WithDisabledOption = () => (
  <Command open>
    <Command.Content createPortal={ false }>
      <Command.List>
        <Command.Option id="opt-enabled">Enabled option</Command.Option>
        <Command.Option aria-disabled="true" id="opt-disabled">Disabled option</Command.Option>
      </Command.List>
    </Command.Content>
  </Command>
);

export const WithTrigger = () => (
  <Command>
    <Command.Trigger>Open command</Command.Trigger>
    <Command.Content createPortal={ false }>
      <Command.Filter placeholder="Search..." />
      <Command.List>
        { options.map((opt) => (
          <Command.Option key={ opt.id } id={ opt.id }>{ opt.label }</Command.Option>
        )) }
      </Command.List>
    </Command.Content>
  </Command>
);

export const CustomStyle = () => (
  <Command open>
    <Command.Content createPortal={ false } style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
      <Command.List>
        <Command.Option id="opt-1">Option 1</Command.Option>
      </Command.List>
    </Command.Content>
  </Command>
);
