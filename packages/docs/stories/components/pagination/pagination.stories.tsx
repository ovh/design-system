import { type Meta, type StoryObj } from '@storybook/react';
import React, { type ComponentPropsWithRef, useState } from 'react';
import { Link as RouterLink, useNavigate, useSearchParams } from 'react-router-dom';
import { Pagination, type PaginationPageChangeDetail, PaginationPageSelector, type PaginationPageSizeChangeDetail, PaginationPageSizeSelector, type PaginationPageUrlDetail, PaginationPages, type PaginationProp } from '../../../../ods-react/src/components/pagination/src';
import { excludeFromDemoControls } from '../../support/controls';
import { staticSourceRenderConfig } from '../../support/source';

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
    imports: `import { Pagination, type PaginationPageChangeDetail, PaginationPages } from '@ovhcloud/ods-react';
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

export const Links: Story = {
  globals: {
    imports: `import { Pagination, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';
import { useSearchParams } from 'react-router-dom';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [searchParams] = useSearchParams();

    function getPageUrl({ page, pageSize }: PaginationPageUrlDetail) {
      return `?page=${page}&size=${pageSize}`;
    }

    return (
      <Pagination
        aria-label="Products pagination"
        getPageUrl={ getPageUrl }
        page={ Number(searchParams.get('page') ?? 1) }
        pageSize={ Number(searchParams.get('size') ?? 10) }
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>
    );
  },
};

export const WithReactRouter: Story = {
  globals: {
    imports: `import { Pagination, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';
import { type ComponentPropsWithRef } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [searchParams] = useSearchParams();

    function getPageUrl({ page, pageSize }: PaginationPageUrlDetail) {
      return `?page=${page}&size=${pageSize}`;
    }

    function PaginationLink({ href, ...props }: ComponentPropsWithRef<'a'>) {
      return (
        <RouterLink
          to={ href ?? '' }
          { ...props } />
      );
    }

    return (
      <Pagination
        aria-label="Products pagination"
        getPageUrl={ getPageUrl }
        linkAs={ PaginationLink }
        page={ Number(searchParams.get('page') ?? 1) }
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>
    );
  },
};

export const LinksWithAllControls: Story = {
  globals: {
    imports: `import { Pagination, type PaginationPageChangeDetail, PaginationPageSelector, type PaginationPageSizeChangeDetail, PaginationPageSizeSelector, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';
import { useNavigate, useSearchParams } from 'react-router-dom';`,
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const page = Number(searchParams.get('page') ?? 1);
    const pageSize = Number(searchParams.get('size') ?? 10);

    function getPageUrl({ page, pageSize }: PaginationPageUrlDetail) {
      return `?page=${page}&size=${pageSize}`;
    }

    // The pages are links and navigate on their own.
    // The two controls below are not, and have no href for the browser to follow:
    // they report the state they want, and the application navigates to the URL that describes it - the same URL getPageUrl builds for the links.
    function handlePageChange({ page, pageSize }: PaginationPageChangeDetail) {
      navigate(getPageUrl({ page, pageSize }));
    }

    function handlePageSizeChange({ pageSize }: PaginationPageSizeChangeDetail) {
      navigate(getPageUrl({ page: 1, pageSize }));
    }

    return (
      <Pagination
        aria-label="Products pagination"
        getPageUrl={ getPageUrl }
        onPageChange={ handlePageChange }
        onPageSizeChange={ handlePageSizeChange }
        page={ page }
        pageSize={ pageSize }
        totalItems={ 500 }>
        <PaginationPageSizeSelector />

        <PaginationPages />

        <PaginationPageSelector />
      </Pagination>
    );
  },
};

export const LinksVsButtons: Story = {
  globals: {
    imports: `import { Pagination, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Pagination
        defaultPage={ 4 }
        getPageUrl={ ({ page, pageSize }: PaginationPageUrlDetail) => `?page=${page}&size=${pageSize}` }
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>

      <Pagination
        defaultPage={ 4 }
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>
    </div>
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
    imports: `import { Pagination, type PaginationPageUrlDetail, PaginationPages } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Pagination
        labelTooltipPrev="Go to previous page"
        labelTooltipNext="Go to next page"
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>

      <Pagination
        defaultPage={ 1 }
        getPageUrl={ ({ page, pageSize }: PaginationPageUrlDetail) => `?page=${page}&size=${pageSize}` }
        labelTooltipPrev="Go to previous page"
        labelTooltipNext="Go to next page"
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>
    </div>
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
