import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Pagination,
  PaginationPageChangeDetail,
  type PaginationProp,
} from '../../../../ods-react/src/components/pagination/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { staticSourceRenderConfig } from '../../../src/helpers/source';

type Story = StoryObj<PaginationProp>;

const meta: Meta<PaginationProp> = {
  argTypes: excludeFromDemoControls(['defaultPage', 'onPageChange', 'onPageSizeChange', 'page', 'pageSize', 'renderTotalItemsLabel']),
  component: Pagination,
  title: 'React Components/Pagination',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    disabled : {
      table: {
        category: CONTROL_CATEGORY.general
      },
    },
    labelTooltipNext : {
      table: {
        category: CONTROL_CATEGORY.general
      },
    },
    labelTooltipPrev : {
      table: {
        category: CONTROL_CATEGORY.general
      },
    },
    pageSize : {
      table: {
        category: CONTROL_CATEGORY.general
      },
    },
    page : {
      table: {
        category: CONTROL_CATEGORY.general
      },
    },
    siblingCount : {
      table: {
        category: CONTROL_CATEGORY.general
      },
    },
    totalItems: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
    },
    withPageSizeSelector: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    }
  }),
  args: {
    totalItems: 5000
  }
};

export const AccessibilityLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      aria-label="Pagination"
      totalItems={ 5000 } />
  ),
};

export const Controlled: Story = {
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

    return <Pagination page={ page } onPageChange={ handlePageChange } totalItems={ 500 } />;
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Pagination totalItems={ 5000 } />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      totalItems={ 500 }
      disabled
    />
  ),
};

export const ItemsPerPage: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      pageSize={ 25 }
      totalItems={ 500 } />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Pagination totalItems={ 100 } withPageSizeSelector />
  ),
};

export const SiblingCount: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      defaultPage={ 5 }
      siblingCount={ 2 }
      totalItems={ 500 } />
  ),
}

export const WithLabels: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Pagination
      labelTooltipPrev={ 'Go to previous page' }
      labelTooltipNext={ 'Go to next page' }
      totalItems={ 500 } />
  ),
};

export const TotalItems: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => (
    <Pagination
      totalItems={ 500 } renderTotalItemsLabel={({ totalItems }) => `of ${totalItems} results`} withPageSizeSelector />
  ),
};
