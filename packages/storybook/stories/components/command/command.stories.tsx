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
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandContent>
    </Command>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Command } from '@ovhcloud/ods-react';`,
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
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandOption, CommandList } from '@ovhcloud/ods-react';
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
          <CommandContent>
            <CommandFilter placeholder="Search..." />
            <CommandList>
              <CommandGroup heading="Actions">
                <CommandOption>New file</CommandOption>
                <CommandOption>Open file</CommandOption>
                <CommandOption>Save file</CommandOption>
              </CommandGroup>
              <CommandEmpty>No results found.</CommandEmpty>
            </CommandList>
          </CommandContent>
        </Command>
      </>
    );
  },
};

export const WithShortcuts: Story = {
  globals: {
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandOption, CommandList, CommandTrigger, Kbd } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <CommandTrigger asChild>
        <Button>Open command</Button>
      </CommandTrigger>
      <CommandContent>
        <CommandFilter placeholder="Search..." />
        <CommandList>
          <CommandGroup heading="File">
            <CommandOption>
              New file
              <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                <Kbd>⌘</Kbd>+<Kbd>n</Kbd>
              </kbd>
            </CommandOption>
            <CommandOption>
              Open file
            </CommandOption>
            <CommandOption>
              Save file
            </CommandOption>
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandContent>
    </Command>
  ),
};

export const WithOnSelect: Story = {
  globals: {
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandOption, CommandList, CommandTrigger, Toaster, toast } from '@ovhcloud/ods-react';`,
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
        <CommandTrigger asChild>
          <Button>Open command</Button>
        </CommandTrigger>
        <CommandContent>
          <CommandFilter placeholder="Search..." />
          <CommandList>
            <CommandGroup heading="Actions">
              <CommandOption onSelect={ () => toast('New file', { toasterId: 'command-on-select' }) }>New file</CommandOption>
              <CommandOption onSelect={ () => toast('Open file', { toasterId: 'command-on-select' }) }>Open file</CommandOption>
              <CommandOption onSelect={ () => toast('Save file', { toasterId: 'command-on-select' }) }>Save file</CommandOption>
            </CommandGroup>
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        </CommandContent>
      </Command>

      <Toaster id="command-on-select" style={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)' }} />
    </>
  ),
};

export const WithoutFilter: Story = {
  globals: {
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandGroup, CommandOption, CommandList, CommandTrigger, Kbd } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <CommandTrigger asChild>
        <Button>Open command</Button>
      </CommandTrigger>
      <CommandContent>
        <CommandList aria-label="Actions">
          <CommandGroup heading="File">
            <CommandOption>
              New file
            </CommandOption>
            <CommandOption>
              Open file
            </CommandOption>
            <CommandOption>
              Save file
            </CommandOption>
          </CommandGroup>
          <CommandGroup heading="Edit">
            <CommandOption>
              Undo
            </CommandOption>
            <CommandOption>
              Redo
            </CommandOption>
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandContent>
    </Command>
  ),
};

export const EmptyState: Story = {
  globals: {
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandFilter, CommandList, CommandTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <CommandTrigger asChild>
        <Button>Open command</Button>
      </CommandTrigger>
      <CommandContent>
        <CommandFilter placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandContent>
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
          <CommandContent
            createPortal={ false }
            style={{
              width: '280px',
              minWidth: 'auto',
              animation: 'none',
            }}
          >
            <CommandFilter aria-label='search command' />
            <CommandList>
              <CommandGroup heading="Group a">
                <CommandOption>item a-1</CommandOption>
                <CommandOption>item a-2</CommandOption>
              </CommandGroup>
              <CommandGroup heading="Group b">
                <CommandOption>item b-1</CommandOption>
                <CommandOption>item b-2</CommandOption>
              </CommandGroup>
              <CommandEmpty>No results found.</CommandEmpty>
            </CommandList>
          </CommandContent>
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
          <CommandContent
            createPortal={ false }
            style={{
              width: '280px',
              minWidth: 'auto',
              animation: 'none',
            }}
          >
            <CommandFilter aria-label='search command' />
            <CommandList>
              <CommandEmpty>No results found<br />…
              </CommandEmpty>
            </CommandList>
          </CommandContent>
        </Command>
      </div>
      <Command open={false} aria-label="Command component demo">
        <CommandTrigger asChild>
          <Button variant={ BUTTON_VARIANT.outline }>
            Trigger Command
          </Button>
        </CommandTrigger>
      </Command>
    </div>
  )
};

export const AccessibilityLabels: Story = {
  globals: {
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandOption, CommandList, CommandTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <CommandTrigger asChild>
        <Button>Open command</Button>
      </CommandTrigger>
      <CommandContent aria-label="Command palette">
        <CommandFilter aria-label="Search command palette" placeholder="Search..." />
        <CommandList aria-label="Command palette">
          <CommandGroup heading="Actions">
            <CommandOption>New file</CommandOption>
            <CommandOption>Open file</CommandOption>
            <CommandOption>Save file</CommandOption>
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandContent>
    </Command>
  ),
};

export const AccessibilityFilterLabel: Story = {
  tags: ['!dev'],
  globals: {
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandOption, CommandList, CommandTrigger } from '@ovhcloud/ods-react';`,
  },
  render: ({}) => (
    <Command>
      <CommandTrigger asChild>
        <Button>Open command</Button>
      </CommandTrigger>
      <CommandContent aria-label="Command palette">
        <CommandFilter aria-label="Search command palette" placeholder="Search..." />
        <CommandList>
          <CommandGroup heading="Actions">
            <CommandOption>New file</CommandOption>
            <CommandOption>Open file</CommandOption>
            <CommandOption>Save file</CommandOption>
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandContent>
    </Command>
  ),
};

export const AccessibilityGroupNames: Story = {
  globals: {
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandOption, CommandList, CommandTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <CommandTrigger asChild>
        <Button>Open command</Button>
      </CommandTrigger>
      <CommandContent aria-label="Command palette">
        <CommandFilter aria-label="Search command palette" placeholder="Search..." />
        <CommandList aria-label="Command palette">
          <CommandGroup heading="Visible group name">
            <CommandOption>New file</CommandOption>
            <CommandOption>Open file</CommandOption>
          </CommandGroup>
          <CommandGroup aria-label="Hidden group name">
            <CommandOption>Some help</CommandOption>
            <CommandOption>Some more help</CommandOption>
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandContent>
    </Command>
  ),
};

export const AccessibilityDisabledOption: Story = {
  globals: {
    imports: `import { Button, Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandOption, CommandList, CommandTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Command>
      <CommandTrigger asChild>
        <Button>Open command</Button>
      </CommandTrigger>
      <CommandContent aria-label="Command palette">
        <CommandFilter aria-label="Search command palette" placeholder="Search..." />
        <CommandList>
          <CommandGroup heading="Actions">
            <CommandOption>New file</CommandOption>
            <CommandOption>Open file</CommandOption>
            <CommandOption aria-disabled="true">Save file</CommandOption>
          </CommandGroup>
          <CommandGroup heading="Help">
            <CommandOption>Some help</CommandOption>
            <CommandOption>Some more help</CommandOption>
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandContent>
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
        <CommandTrigger asChild>
          <Button>Default</Button>
        </CommandTrigger>
        <CommandContent createPortal={ false }>
          <CommandFilter placeholder="Search..." />
          <CommandList>
            <CommandGroup heading="Actions">
              <CommandOption>New file</CommandOption>
              <CommandOption>Open file</CommandOption>
              <CommandOption>Save file</CommandOption>
            </CommandGroup>
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        </CommandContent>
      </Command>

      <Command>
        <CommandTrigger asChild>
          <Button>With shortcuts</Button>
        </CommandTrigger>
        <CommandContent createPortal={ false }>
          <CommandFilter placeholder="Search..." />
          <CommandList>
            <CommandGroup heading="File">
              <CommandOption>
                New file
                <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                  <Kbd>Meta</Kbd>+<Kbd>n</Kbd>
                </kbd>
              </CommandOption>
              <CommandOption>
                Open file
                <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                  <Kbd>Meta</Kbd>+<Kbd>o</Kbd>
                </kbd>
              </CommandOption>
              <CommandOption>
                Save file
                <kbd style={{ alignItems: 'center', display: 'flex', gap: '2px' }}>
                  <Kbd>Meta</Kbd>+<Kbd>s</Kbd>
                </kbd>
              </CommandOption>
            </CommandGroup>
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        </CommandContent>
      </Command>

      <Command>
        <CommandTrigger asChild>
          <Button>Empty state</Button>
        </CommandTrigger>
        <CommandContent createPortal={ false }>
          <CommandFilter placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        </CommandContent>
      </Command>

      <Command>
        <CommandTrigger asChild>
          <Button>Without filter</Button>
        </CommandTrigger>
        <CommandContent createPortal={ false }>
          <CommandList aria-label="Actions">
            <CommandGroup heading="Actions">
              <CommandOption>New file</CommandOption>
              <CommandOption>Open file</CommandOption>
              <CommandOption>Save file</CommandOption>
            </CommandGroup>
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        </CommandContent>
      </Command>
    </div>
  ),
};
