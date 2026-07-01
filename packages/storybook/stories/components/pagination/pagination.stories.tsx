import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination, PaginationPageChangeDetail, PaginationPageSelector, PaginationPageSizeSelector, PaginationPages, type PaginationProp } from '../../../../ods-react/src/components/pagination/src';
import { excludeFromDemoControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<PaginationProp>;

const meta: Meta<PaginationProp> = {
  argTypes: excludeFromDemoControls(['defaultPage', 'onPageChange', 'onPageSizeChange', 'page', 'pageSize', 'renderTotalItemsLabel']),
  component: Pagination,
  subcomponents: { PaginationPageSelector, PaginationPageSizeSelector, PaginationPages },
  title: 'React Components/Pagination',
};

export default meta;

export const AccessibilityLabel: Story = {
  globals: {
    imports: `import { Pagination, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      aria-label="Pagination"
      totalItems={ 5000 }>
      <PaginationPages />
    </Pagination>
  ),
};

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Pagination totalItems={ 100 }>
      <PaginationPageSizeSelector />
      <PaginationPages />
      <PaginationPageSelector />
    </Pagination>
  ),
};

export const Controlled: Story = {
  globals: {
    imports: `import { Pagination, PaginationPages } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [page, setPage] = useState(1);

    function handlePageChange({ page }: PaginationPageChangeDetail){
      setPage(page);
    }

    return (
      <Pagination
        onPageChange={ handlePageChange }
        page={ page }
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>
    );
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Pagination, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Pagination totalItems={ 5000 }>
      <PaginationPages />
    </Pagination>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Pagination, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      disabled
      totalItems={ 500 }>
      <PaginationPages />
    </Pagination>
  ),
};

export const ItemsPerPage: Story = {
  globals: {
    imports: `import { Pagination, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      pageSize={ 25 }
      totalItems={ 500 }>
      <PaginationPages />
    </Pagination>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Pagination totalItems={ 100 }>
      <PaginationPageSizeSelector />
      <PaginationPages />
      <PaginationPageSelector />
    </Pagination>
  ),
};

export const PageSizeSelection: Story = {
  globals: {
    imports: `import { Pagination, PaginationPageSizeSelector, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Pagination totalItems={ 500 }>
      <PaginationPageSizeSelector />

      <PaginationPages />
    </Pagination>
  ),
};

export const SiblingCount: Story = {
  globals: {
    imports: `import { Pagination, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      defaultPage={ 5 }
      siblingCount={ 2 }
      totalItems={ 500 }>
      <PaginationPages />
    </Pagination>
  ),
}

export const WithTooltipLabels: Story = {
  globals: {
    imports: `import { Pagination, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      labelTooltipPrev="Go to previous page"
      labelTooltipNext="Go to next page"
      totalItems={ 500 }>
      <PaginationPages />
    </Pagination>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Pagination totalItems={ 100 }>
        <PaginationPages />
      </Pagination>
      <Pagination totalItems={ 500 } pageSize={ 25 }>
        <PaginationPages />
      </Pagination>
      <Pagination totalItems={ 500 } disabled>
        <PaginationPages />
      </Pagination>
      <Pagination totalItems={ 100 }>
        <PaginationPageSizeSelector />
        <PaginationPages />
        <PaginationPageSelector />
      </Pagination>
    </div>
  ),
};
