import { useState } from 'react';
import { Command } from '../../src';

export default {
  component: Command,
  title: 'Tests behavior',
};

const fileOptions = [
  { id: 'opt-new-file', label: 'New file' },
  { id: 'opt-open-file', label: 'Open file' },
  { id: 'opt-save-file', label: 'Save file' },
];

export const KeyboardNavigation = () => (
  <Command open>
    <Command.Content createPortal={ false }>
      <Command.Filter placeholder="Search..." />
      <Command.List>
        { fileOptions.map((opt) => (
          <Command.Option key={ opt.id } id={ opt.id }>{ opt.label }</Command.Option>
        )) }
      </Command.List>
    </Command.Content>
  </Command>
);

export const OnSelect = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <div data-testid="selected-value">{ selected }</div>
      <Command open>
        <Command.Content createPortal={ false }>
          <Command.Filter placeholder="Search..." />
          <Command.List>
            { fileOptions.map((opt) => (
              <Command.Option
                key={ opt.id }
                id={ opt.id }
                onSelect={ () => setSelected(opt.id) }>
                { opt.label }
              </Command.Option>
            )) }
          </Command.List>
        </Command.Content>
      </Command>
    </>
  );
};

export const Filter = () => (
  <Command open>
    <Command.Content createPortal={ false }>
      <Command.Filter placeholder="Search..." />
      <Command.List>
        <Command.Option id="opt-new-file">New file</Command.Option>
        <Command.Option id="opt-save-file">Save file</Command.Option>
        <Command.Option id="opt-copy">Copy</Command.Option>
        <Command.Empty>No results found.</Command.Empty>
      </Command.List>
    </Command.Content>
  </Command>
);

export const ControlledFilter = () => {
  const [filterValue, setFilterValue] = useState('');

  const allOptions = [
    { id: 'opt-new-file', label: 'New file' },
    { id: 'opt-open-file', label: 'Open file' },
    { id: 'opt-copy', label: 'Copy' },
    { id: 'opt-paste', label: 'Paste' },
  ];

  const visible = allOptions.filter((opt) =>
    !filterValue || opt.label.toLowerCase().includes(filterValue.toLowerCase()),
  );

  return (
    <Command open>
      <Command.Content createPortal={ false }>
        <Command.Filter
          onChange={ (e) => setFilterValue(e.target.value) }
          placeholder="Search..."
          value={ filterValue }
        />
        <Command.List>
          { visible.map((opt) => (
            <Command.Option key={ opt.id } id={ opt.id }>{ opt.label }</Command.Option>
          )) }
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  );
};

export const DisabledOption = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <div data-testid="selected-value">{ selected }</div>
      <Command open>
        <Command.Content createPortal={ false }>
          <Command.Filter placeholder="Search..." />
          <Command.List>
            <Command.Option id="opt-enabled" onSelect={ () => setSelected('enabled') }>
              Enabled option
            </Command.Option>
            <Command.Option aria-disabled="true" id="opt-disabled" onSelect={ () => setSelected('disabled') }>
              Disabled option
            </Command.Option>
          </Command.List>
        </Command.Content>
      </Command>
    </>
  );
};

export const OpenClose = () => (
  <Command>
    <Command.Trigger>Open command</Command.Trigger>
    <Command.Content createPortal={ false }>
      <Command.Filter placeholder="Search..." />
      <Command.List>
        { fileOptions.map((opt) => (
          <Command.Option key={ opt.id } id={ opt.id }>{ opt.label }</Command.Option>
        )) }
      </Command.List>
    </Command.Content>
  </Command>
);

export const Groups = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <div data-testid="selected-value">{ selected }</div>
      <Command open>
        <Command.Content createPortal={ false }>
          <Command.Filter placeholder="Search..." />
          <Command.List>
            <Command.Group heading="File">
              <Command.Option id="opt-new-file" onSelect={ () => setSelected('new-file') }>New file</Command.Option>
              <Command.Option id="opt-open-file" onSelect={ () => setSelected('open-file') }>Open file</Command.Option>
            </Command.Group>
            <Command.Group heading="Edit">
              <Command.Option id="opt-copy" onSelect={ () => setSelected('copy') }>Copy</Command.Option>
              <Command.Option id="opt-paste" onSelect={ () => setSelected('paste') }>Paste</Command.Option>
            </Command.Group>
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>
    </>
  );
};
