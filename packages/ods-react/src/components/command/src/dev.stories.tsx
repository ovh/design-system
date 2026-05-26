import { Icon, Toaster, toast } from '@ovhcloud/ods-react';
import { useState } from 'react';
import style from './dev.module.css';
import { Kbd } from '../../kbd/src';
import { Command } from './index';

type StoryGroup = {
  id?: string;
  items: {
    description?: string;
    id?: string;
    label: string;
    onSelect?: () => void;
    shortcut?: string;
  }[];
  label?: string;
};

export default {
  component: Command,
  title: 'Command dev',
};

const notify = (message: string): void => {
  toast(message, { toasterId: 'notifications' });
};

export const Default = (): JSX.Element => {
  const commandItems: StoryGroup[] = [
    {
      id: 'group-1',
      items: [
        {
          id: 'group-1-item-1',
          label: 'New file',
          onSelect: () => notify('New file'),
          shortcut: '⌘+N',
        },
        {
          id: 'group-1-item-2',
          label: 'Open file',
          onSelect: () => notify('Open file'),
          shortcut: '⌘+O',
        },
        {
          id: 'group-1-item-3',
          label: 'Save file',
          onSelect: () => notify('Save file'),
          shortcut: '⌘+S',
        },
      ],
      label: 'Hot keys',
    },
    {
      id: 'group-2',
      items: [
        {
          description: 'About this subject, help is on the way...',
          id: 'group-2-item-1',
          label: 'You need help',
          onSelect: () => notify('You need help'),
        },
        {
          description: 'Long description for this command that should wrap to multiple lines and not break the layout of the command item…',
          id: 'group-2-item-2',
          label: 'Another subject you need help with',
          onSelect: () => notify('Go to symbol'),
          shortcut: '⌘+H',
        },
      ],
      label: 'Help',
    },
  ];

  const getParts = (shortcut: string): string[] => shortcut.split('+');

  return (
    <Command open>
      <Command.Trigger>Open command</Command.Trigger>
      <Command.Content>
        <Command.Filter placeholder="Search..." />

        <Command.List>
          {commandItems?.length > 0 &&
            commandItems.map((group) => (
              <Command.Group key={group.id} heading={group.label}>
                {group.items.map((item) => (
                  <Command.Option key={item.id} onSelect={item.onSelect}>
                    {item.label}
                    {item.shortcut &&
                      <kbd style={{ alignItems: 'center',display: 'flex', gap: '2px' }}>
                        {getParts(item.shortcut).map((part, idx) => (
                          <>
                            { idx > 0 && '+' }
                            <Kbd key={idx}>
                              {part}
                            </Kbd>
                          </>
                        ))}
                      </kbd>
                    }
                  </Command.Option>
                ))}
              </Command.Group>
            ))}
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  );
};

export const WithIconDescription = (): JSX.Element => {
  const commandItems: StoryGroup[] = [
    {
      id: 'group-1',
      items: [
        {
          id: 'group-1-item-1',
          label: 'New file',
          onSelect: () => notify('New file'),
          shortcut: '⌘+N',
        },
        {
          id: 'group-1-item-2',
          label: 'Open file',
          onSelect: () => notify('Open file'),
          shortcut: '⌘+O',
        },
        {
          id: 'group-1-item-3',
          label: 'Save file',
          onSelect: () => notify('Save file'),
          shortcut: '⌘+S',
        },
      ],
      label: 'Hot keys',
    },
    {
      id: 'group-2',
      items: [
        {
          description: 'About this subject, help is on the way...',
          id: 'group-2-item-1',
          label: 'You need help',
          onSelect: () => notify('You need help'),
        },
        {
          description: 'Long description for this command that should wrap over several lines and not break the layout of the command item…',
          id: 'group-2-item-2',
          label: 'Another subject you need help with',
          onSelect: () => notify('Go to symbol'),
          shortcut: '⌘+H',
        },
      ],
      label: 'Help',
    },
  ];

  return (
    <Command defaultOpen>
      <Command.Trigger>Open command</Command.Trigger>
      <Command.Content>
        {/* <div>{ command }</div>ss */}
        <Command.Filter placeholder='Search...' />

        <Command.List>
          { commandItems.map((group) => (
            <Command.Group key={ group.id } title={ group.label }>
              { group.items.map((item) => (
                <Command.Option className={style['custom-command__item']} key={ item.id } onSelect={ item.onSelect }>
                  <div className={style['custom-command__title']}>
                    <Icon name="file" />
                    <span>
                      { item.label }
                    </span>
                    { item.shortcut && <kbd className={style['custom-command__shortcut']}>{ item.shortcut }</kbd> }
                  </div>
                  {item?.description && <div className={style['custom-command__description']}>{item.description}</div>}
                </Command.Option>
              )) }
            </Command.Group>
          )) }
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  );
};

export const CustomShortcuts = (): JSX.Element => {

  const commandItems: StoryGroup[] = [
    {
      items: [
        {
          label: 'New file',
          shortcut: 'N',
        },
        {
          label: 'Open file',
          shortcut: 'O',
        },
        {
          label: 'Save file',
          shortcut: 'S',
        },
      ],
      label: 'Custom Shortcuts',
    },
  ];

  return (
    <>
      <Command defaultOpen>
        <Command.Trigger>Open command</Command.Trigger>
        <Command.Content>
          {/* <div>{ command }</div>ss */}
          <Command.Filter placeholder="Search..." />

          <Command.List>
            {commandItems?.length > 0 &&
              commandItems.map((group) => (
                <Command.Group key={group.label} heading={group.label}>
                  {group.items.map((item) => (
                    <Command.Option key={item.id} onSelect={item.onSelect}>
                      {item.label}
                      <kbd className={style['custom-shortcut']}>
                        <kbd>⌘</kbd>
                        +
                        <kbd>{item.shortcut}</kbd>
                      </kbd>
                    </Command.Option>
                  ))}
                </Command.Group>
              ))}
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>
      <Toaster style={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)' }} id="notifications" />
    </>
  );
};

export const NoSearchInput = (): JSX.Element => {

  const commandItems: StoryGroup[] = [
    {
      id: 'group-1',
      items: [
        {
          id: 'group-1-item-1',
          label: 'New file',
          onSelect: () => notify('New file'),
          shortcut: 'Ctrl + N',
        },
        {
          id: 'group-1-item-2',
          label: 'Open file',
          onSelect: () => notify('Open file'),
          shortcut: '⌃ + O',
        },
        {
          id: 'group-1-item-3',
          label: 'Save file',
          onSelect: () => notify('Save file'),
          shortcut: '⌥ + S',
        },
      ],
    },
  ];

  return (
    <>
      <Command defaultOpen>
        <Command.Trigger>Open command</Command.Trigger>
        <Command.Content>
          <Command.List aria-label="Command list">
            {commandItems?.length > 0 &&
              commandItems.map((group) => (
                <Command.Group key={group.id} heading={group.label}>
                  {group.items.map((item) => (
                    <Command.Option key={item.id} onSelect={item.onSelect}>
                      {item.label}
                      {item.shortcut && <kbd className={style['custom-shortcut']}>{item.shortcut}</kbd>}
                    </Command.Option>
                  ))}
                </Command.Group>
              ))}
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>
      <Toaster style={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)' }} id="notifications" />
    </>
  );
};

export const FilterByDataId = (): JSX.Element => {
  const [filterValue, setFilterValue] = useState('');

  const allItems = [
    { id: 'git-commit', label: 'Stage and commit' },
    { id: 'git-push', label: 'Push to remote' },
    { id: 'git-pull', label: 'Pull from remote' },
    { id: 'file-new', label: 'Create new file' },
    { id: 'file-open', label: 'Browse files' },
    { id: 'file-save', label: 'Save current' },
  ];

  const visibleItems = allItems.filter((item) =>
    !filterValue || item.id.toLowerCase().includes(filterValue.toLowerCase()),
  );

  return (
    <Command open>
      <Command.Trigger>Open command</Command.Trigger>
      <Command.Content>
        <Command.Filter
          onChange={ (e) => setFilterValue(e.target.value) }
          placeholder="Filter by id..."
          value={ filterValue }
        />
        <Command.List>
          { visibleItems.map((item) => (
            <Command.Option
              data-id={ item.id }
              key={ item.id }
              onSelect={ () => notify(item.label) }
            >
              { item.label }
            </Command.Option>
          )) }
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  );
};
