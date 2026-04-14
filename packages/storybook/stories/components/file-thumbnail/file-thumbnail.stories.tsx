import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FileThumbnail, type FileThumbnailProp } from '../../../../ods-react/src/components/file-thumbnail/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<FileThumbnailProp>;

const meta: Meta<FileThumbnailProp> = {
  argTypes: excludeFromDemoControls(['file', 'i18n', 'locale', 'onFileRemove']),
  component: FileThumbnail,
  tags: ['new'],
  title: 'React Components/File Thumbnail',
};

export default meta;

export const Demo: Story = {
  render: ({ disabled, dismissible, error, progress }) => {
    const [file, setFile] = useState<File>();

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
        <input
          onChange={ (e) => {
            if (e.target.files?.length) {
              setFile(e.target.files[0]);
            }
          }}
          type="file" />
        {
          file &&
          <FileThumbnail
            disabled={ disabled }
            dismissible={ dismissible }
            error={ error }
            file={ file }
            progress={ progress } />
        }
      </div>
    );
  },
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    dismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    error: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    progress: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'number',
    },
  }),
};

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

    return (
      <FileThumbnail file={ fakeFile } />
    );
  },
};

export const Default: Story = {
  globals: {
    imports: `import { FileThumbnail } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

    return (
      <FileThumbnail file={ fakeFile } />
    );
  },
};

export const Disabled: Story = {
  globals: {
    imports: `import { FileThumbnail } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

    return (
      <FileThumbnail
        disabled
        file={ fakeFile } />
    );
  },
};

export const NonDismissible: Story = {
  globals: {
    imports: `import { FileThumbnail } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'non-dismissible-file.txt', { type: 'text/plain' });

    return (
      <FileThumbnail
        dismissible={ false }
        file={ fakeFile } />
    );
  },
};

export const Error: Story = {
  globals: {
    imports: `import { FileThumbnail } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

    return (
      <FileThumbnail
        error="Something went wrong"
        file={ fakeFile } />
    );
  },
};

export const Overview: Story = {
  parameters: {
    layout: 'centered',
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

    return (
      <FileThumbnail file={ fakeFile } />
    );
  },
};

export const Progress: Story = {
  globals: {
    imports: `import { FileThumbnail } from '@ovhcloud/ods-react';`,
  },
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

    return (
      <FileThumbnail
        file={ fakeFile }
        progress={ 45 }/>
    );
  },
};

export const ThemeGenerator: Story = {
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => {
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

    return (
      <FileThumbnail file={ fakeFile } />
    );
  },
};
