import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandOption, CommandList, CommandTrigger, type CommandProp } from '../../../../ods-react/src/components/command/src';
import { Kbd } from '../../../../ods-react/src/components/kbd/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';
import { Button, BUTTON_VARIANT } from '../../../../ods-react/src/components/button/src';
import { Toaster, toast } from '../../../../ods-react/src/components/toaster/src';

type Story = StoryObj<CommandProp>;

type DemoArg = Partial<CommandProp> & {
  filterPlaceholder?: string;
};


const meta: Meta<CommandProp> = {
  argTypes: excludeFromDemoControls(['defaultOpen', 'content', 'i18n', 'initialFocusedElement', 'locale', 'onOpenChange', 'open']),
  component: Command,
  subcomponents: {
    CommandContent,
    CommandEmpty,
    CommandFilter,
    CommandGroup,
    CommandOption,
    CommandList,
    CommandTrigger,
  },
  tags: ['new'],
  title: 'React Components/Command',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    closeOnEscape: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    closeOnInteractOutside: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: { type: 'boolean' },
    },
    filterPlaceholder: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
  }),
  args: {
    content: 'My modal content',
  },

  render: (arg: DemoArg) => (
    <Command
      closeOnEscape={ arg.closeOnEscape }
      closeOnInteractOutside={ arg.closeOnInteractOutside }>
      <CommandTrigger asChild>
        <Button>Open command</Button>
      </CommandTrigger>
      <CommandContent>
        <CommandFilter placeholder={ arg.filterPlaceholder } />
        <CommandList>
          <CommandGroup heading="Actions">
            <CommandOption>New file</CommandOption>
            <CommandOption>Open file</CommandOption>
            <CommandOption>Save file</CommandOption>
          </CommandGroup>
          <Command.Empty>No results found.</Command.Empty>
        </CommandList>
      </CommandContent>
    </Command>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Button, Command } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content>
        <Command.Filter />
        <Command.List>
          <Command.Group>
            <Command.Option>item 1</Command.Option>
            <Command.Option>item 2</Command.Option>
          </Command.Group>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content>
        <Command.Filter placeholder="Search..." />
        <Command.List>
          <Command.Group heading="Hot keys">
            <Command.Option>
              New file
              <Kbd>n</Kbd>
            </Command.Option>
            <Command.Option>
                Open file
              <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                <Kbd>Alt</Kbd>+<Kbd>o</Kbd>
              </kbd>
            </Command.Option>
            <Command.Option>
              Save file
              <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                <Kbd>⌘</Kbd>+<Kbd>s</Kbd>
              </kbd>
            </Command.Option>
          </Command.Group>
          <Command.Group heading="Help">
            <Command.Option>Some help about an important subject</Command.Option>
            <Command.Option>Some help about another subject</Command.Option>
          </Command.Group>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};


export const Controlled: Story = {
  globals: {
    imports: `import { Button, Command } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    function onOpenChange({ open }: { open: boolean }) {
      setIsOpen(open);
    }

    function openCommand() {
      setIsOpen(true);
    }

    return (
      <>
        <Button onClick={ openCommand }>
          Open command
        </Button>

        <Command
          onOpenChange={ onOpenChange }
          open={ isOpen }>
          <Command.Content>
            <Command.Filter placeholder="Search..." />
            <Command.List>
              <Command.Group heading="Actions">
                <Command.Option>New file</Command.Option>
                <Command.Option>Open file</Command.Option>
                <Command.Option>Save file</Command.Option>
              </Command.Group>
              <Command.Empty>No results found.</Command.Empty>
            </Command.List>
          </Command.Content>
        </Command>
      </>
    );
  },
};

export const ControlledFiltering: Story = {
  globals: {
    imports: `import { Button, Command } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [query, setQuery] = useState('');

    const actions = ['New file', 'Open file', 'Save file'];
    const visibleActions = actions.filter((action) => !query || action.toLowerCase().includes(query.toLowerCase()));

    return (
      <Command>
        <Command.Trigger asChild>
          <Button>Open command</Button>
        </Command.Trigger>
        <Command.Content>
          <Command.Filter
            onChange={ (e) => setQuery(e.target.value) }
            placeholder="Search..."
            value={ query }
          />
          <Command.List>
            <Command.Group heading="Actions">
              { visibleActions.map((action) => (
                <Command.Option key={ action }>{ action }</Command.Option>
              )) }
            </Command.Group>
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>
    );
  },
};

export const WithShortcuts: Story = {
  globals: {
    imports: `import { Button, Command, Kbd } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content>
        <Command.Filter placeholder="Search..." />
        <Command.List>
          <Command.Group heading="File">
            <Command.Option>
              New file
              <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                <Kbd>⌘</Kbd>+<Kbd>n</Kbd>
              </kbd>
            </Command.Option>
            <Command.Option>
              Open file
            </Command.Option>
            <Command.Option>
              Save file
            </Command.Option>
          </Command.Group>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};

export const WithOnSelect: Story = {
  globals: {
    imports: `import { Button, Command, Toaster, toast } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => (
    <>
      <Command>
        <Command.Trigger asChild>
          <Button>Open command</Button>
        </Command.Trigger>
        <Command.Content>
          <Command.Filter placeholder="Search..." />
          <Command.List>
            <Command.Group heading="Actions">
              <Command.Option onSelect={ () => toast('New file', { toasterId: 'command-on-select' }) }>New file</Command.Option>
              <Command.Option onSelect={ () => toast('Open file', { toasterId: 'command-on-select' }) }>Open file</Command.Option>
              <Command.Option onSelect={ () => toast('Save file', { toasterId: 'command-on-select' }) }>Save file</Command.Option>
            </Command.Group>
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>

      <Toaster id="command-on-select" style={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)' }} />
    </>
  ),
};

export const WithoutFilter: Story = {
  globals: {
    imports: `import { Button, Command, Kbd } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content>
        <Command.List aria-label="Actions">
          <Command.Group heading="File">
            <Command.Option>
              New file
            </Command.Option>
            <Command.Option>
              Open file
            </Command.Option>
            <Command.Option>
              Save file
            </Command.Option>
          </Command.Group>
          <Command.Group heading="Edit">
            <Command.Option>
              Undo
            </Command.Option>
            <Command.Option>
              Redo
            </Command.Option>
          </Command.Group>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};

export const EmptyState: Story = {
  globals: {
    imports: `import { Button, Command } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content>
        <Command.Filter placeholder="Search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};

export const AnatomyTech: Story = {
  tags: ["!dev"],
  render: ({}) => (
    <div style={{
      display: 'flex',
      flexFlow: 'column',
      rowGap: 'var(--ods-theme-row-gap)',
      alignItems: 'start',
      zIndex: 0,
      position: 'relative'
    }}>
      <div style={{
        position: 'relative',
        minWidth: '320px',
        minHeight: '335px'
      }}>
        <Command
          aria-label="Command component demo"
          backdropStyle={{ position: 'absolute' }}
          // @ts-ignore force ark attribute to avoid inert on page
          modal={ false }
          open
          positionerStyle={{ position: 'absolute' }}
        >
          <Command.Content
            createPortal={ false }
            style={{
              width: '280px',
              minWidth: 'auto',
              animation: 'none',
            }}
          >
            <Command.Filter aria-label='search command' />
            <Command.List>
              <Command.Group heading="Group a">
                <Command.Option>item a-1</Command.Option>
                <Command.Option>item a-2</Command.Option>
              </Command.Group>
              <Command.Group heading="Group b">
                <Command.Option>item b-1</Command.Option>
                <Command.Option>item b-2</Command.Option>
              </Command.Group>
              <Command.Empty>No results found.</Command.Empty>
            </Command.List>
          </Command.Content>
        </Command>
      </div>
      <div style={{
        position: 'relative',
        minWidth: '320px',
        minHeight: '160px',
      }}>
        <Command
          aria-label="Command component demo"
          backdropStyle={{ position: 'absolute' }}
          // @ts-ignore force ark attribute to avoid inert on page
          modal={ false }
          open
          positionerStyle={{ position: 'absolute' }}
        >
          <Command.Content
            createPortal={ false }
            style={{
              width: '280px',
              minWidth: 'auto',
              animation: 'none',
            }}
          >
            <Command.Filter aria-label='search command' />
            <Command.List>
              <Command.Empty>No results found<br />…
              </Command.Empty>
            </Command.List>
          </Command.Content>
        </Command>
      </div>
      <Command open={false} aria-label="Command component demo">
        <Command.Trigger asChild>
          <Button variant={ BUTTON_VARIANT.outline }>
            Trigger Command
          </Button>
        </Command.Trigger>
      </Command>
    </div>
  )
};

export const AccessibilityLabels: Story = {
  globals: {
    imports: `import { Button, Command } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content aria-label="Command palette">
        <Command.Filter aria-label="Search command palette" placeholder="Search..." />
        <Command.List aria-label="Command palette">
          <Command.Group heading="Actions">
            <Command.Option>New file</Command.Option>
            <Command.Option>Open file</Command.Option>
            <Command.Option>Save file</Command.Option>
          </Command.Group>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};

export const AccessibilityFilterLabel: Story = {
  tags: ['!dev'],
  globals: {
    imports: `import { Button, Command } from '@ovhcloud/ods-react';`,
  },
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content aria-label="Command palette">
        <Command.Filter aria-label="Search command palette" placeholder="Search..." />
        <Command.List>
          <Command.Group heading="Actions">
            <Command.Option>New file</Command.Option>
            <Command.Option>Open file</Command.Option>
            <Command.Option>Save file</Command.Option>
          </Command.Group>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};

export const AccessibilityGroupNames: Story = {
  globals: {
    imports: `import { Button, Command } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content aria-label="Command palette">
        <Command.Filter aria-label="Search command palette" placeholder="Search..." />
        <Command.List aria-label="Command palette">
          <Command.Group heading="Visible group name">
            <Command.Option>New file</Command.Option>
            <Command.Option>Open file</Command.Option>
          </Command.Group>
          <Command.Group aria-label="Hidden group name">
            <Command.Option>Some help</Command.Option>
            <Command.Option>Some more help</Command.Option>
          </Command.Group>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};

export const AccessibilityDisabledOption: Story = {
  globals: {
    imports: `import { Button, Command } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <Command.Trigger asChild>
        <Button>Open command</Button>
      </Command.Trigger>
      <Command.Content aria-label="Command palette">
        <Command.Filter aria-label="Search command palette" placeholder="Search..." />
        <Command.List>
          <Command.Group heading="Actions">
            <Command.Option>New file</Command.Option>
            <Command.Option>Open file</Command.Option>
            <Command.Option aria-disabled="true">Save file</Command.Option>
          </Command.Group>
          <Command.Group heading="Help">
            <Command.Option>Some help</Command.Option>
            <Command.Option>Some more help</Command.Option>
          </Command.Group>
          <Command.Empty>No results found.</Command.Empty>
        </Command.List>
      </Command.Content>
    </Command>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '12px' }}>
      <Command>
        <Command.Trigger asChild>
          <Button>Default</Button>
        </Command.Trigger>
        <Command.Content createPortal={ false }>
          <Command.Filter placeholder="Search..." />
          <Command.List>
            <Command.Group heading="Actions">
              <Command.Option>New file</Command.Option>
              <Command.Option>Open file</Command.Option>
              <Command.Option>Save file</Command.Option>
            </Command.Group>
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>

      <Command>
        <Command.Trigger asChild>
          <Button>With shortcuts</Button>
        </Command.Trigger>
        <Command.Content createPortal={ false }>
          <Command.Filter placeholder="Search..." />
          <Command.List>
            <Command.Group heading="File">
              <Command.Option>
                New file
                <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                  <Kbd>Meta</Kbd>+<Kbd>n</Kbd>
                </kbd>
              </Command.Option>
              <Command.Option>
                Open file
                <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                  <Kbd>Meta</Kbd>+<Kbd>o</Kbd>
                </kbd>
              </Command.Option>
              <Command.Option>
                Save file
                <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                  <Kbd>Meta</Kbd>+<Kbd>s</Kbd>
                </kbd>
              </Command.Option>
            </Command.Group>
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>

      <Command>
        <Command.Trigger asChild>
          <Button>Empty state</Button>
        </Command.Trigger>
        <Command.Content createPortal={ false }>
          <Command.Filter placeholder="Search..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>

      <Command>
        <Command.Trigger asChild>
          <Button>Without filter</Button>
        </Command.Trigger>
        <Command.Content createPortal={ false }>
          <Command.List aria-label="Actions">
            <Command.Group heading="Actions">
              <Command.Option>New file</Command.Option>
              <Command.Option>Open file</Command.Option>
              <Command.Option>Save file</Command.Option>
            </Command.Group>
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command>
    </div>
  ),
};
