import { useEffect, useRef, useState } from 'react';
import style from './dev.module.css';
import { Pagination, type PaginationPageChangeDetail, PaginationPageSelector, type PaginationPageSizeChangeDetail, PaginationPageSizeSelector, type PaginationPageUrlDetail, PaginationPages } from '.';

export default {
  component: Pagination,
  title: 'Pagination dev',
};

export const Controlled = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    console.log(`Query new ${pageSize} results for page ${currentPage}`);
  }, [currentPage, pageSize]);

  function onPageChange({ page }: PaginationPageChangeDetail) {
    setCurrentPage(page);
  }

  function onPageSizeChange({ pageSize }: PaginationPageSizeChangeDetail) {
    setPageSize(pageSize);
  }

  return (
    <Pagination
      onPageChange={ onPageChange }
      onPageSizeChange={ onPageSizeChange }
      page={ currentPage }
      pageSize={ pageSize }
      totalItems={ 500 }>
      <PaginationPageSizeSelector />

      <PaginationPages />
    </Pagination>
  );
};

export const ControlledDeprecated = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    console.log(`Query new ${pageSize} results for page ${currentPage}`);
  }, [currentPage, pageSize]);

  function onPageChange({ page }: PaginationPageChangeDetail) {
    setCurrentPage(page);
  }

  function onPageSizeChange({ pageSize }: PaginationPageSizeChangeDetail) {
    setPageSize(pageSize);
  }

  return (
    <Pagination
      onPageChange={ onPageChange }
      onPageSizeChange={ onPageSizeChange }
      page={ currentPage }
      pageSize={ pageSize }
      totalItems={ 500 }
      withPageSizeSelector />
  );
};

export const Default = () => (
  <>
    <Pagination
      defaultPage={ 10 }
      totalItems={ 50000 }>
      <PaginationPages />
    </Pagination>

    <hr />
    <p>Deprecated</p>

    <Pagination
      defaultPage={ 10 }
      totalItems={ 50000 } />
  </>
);

export const CustomStyle = () => (
  <>
    <Pagination
      className={ style['custom-pagination'] }
      totalItems={ 500 }>
      <PaginationPages />
    </Pagination>

    <hr />
    <p>Deprecated</p>

    <Pagination
      className={ style['custom-pagination'] }
      totalItems={ 500 } />
  </>
);

export const Disabled = () => (
  <>
    <Pagination
      disabled
      totalItems={ 500 }>
      <PaginationPages />
    </Pagination>

    <hr />
    <p>Deprecated</p>

    <Pagination
      disabled
      totalItems={ 500 } />
  </>
);

// A hash so that following a link does not take the storybook iframe off the story.
function getPageUrl({ page, pageSize }: PaginationPageUrlDetail) {
  return `#page-${page}-size-${pageSize}`;
}

function readFromHash() {
  const match = window.location.hash.match(/^#page-(\d+)-size-(\d+)$/);

  return match ? { page: Number(match[1]), pageSize: Number(match[2]) } : { page: 1, pageSize: 10 };
}

// Only reached by the controls that are not links: the "Go to page" form and the size selector.
function navigateToPage(page: number, pageSize: number) {
  window.location.hash = getPageUrl({ page, pageSize });
}

export const Links = () => {
  // The page and the size are read back from the URL, never from the callbacks: the URL is what
  // the links move, and the rest of the bar navigates to it.
  const [{ page, pageSize }, setLocation] = useState(readFromHash);

  useEffect(() => {
    function sync() {
      setLocation(readFromHash());
    }

    window.addEventListener('hashchange', sync);

    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return (
    <>
      <p>Link mode: the pages navigate, so they look like a Link.</p>

      <Pagination
        getPageUrl={ getPageUrl }
        labelTooltipNext="Go to next page"
        labelTooltipPrev="Go to prev page"
        onPageChange={ ({ page, pageSize }) => navigateToPage(page, pageSize) }
        onPageSizeChange={ ({ pageSize }) => navigateToPage(1, pageSize) }
        page={ page }
        pageSize={ pageSize }
        totalItems={ 500 }>
        <PaginationPageSizeSelector />

        <PaginationPages />

        <PaginationPageSelector />
      </Pagination>

      <hr />
      <p>Link mode, disabled</p>

      <Pagination
        defaultPage={ 4 }
        disabled
        getPageUrl={ getPageUrl }
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>

      <hr />
      <p>Button mode, for comparison</p>

      <Pagination
        defaultPage={ 4 }
        totalItems={ 500 }>
        <PaginationPages />
      </Pagination>
    </>
  );
};

export const Refs = () => {
  const paginationRef = useRef(null);
  const paginationPagesRef = useRef(null);
  const paginationPageSelectorRef = useRef(null);
  const paginationPageSizeSelectorRef = useRef(null);

  return (
    <>
      <Pagination
        ref={ paginationRef }
        totalItems={ 500 }>
        <PaginationPageSizeSelector ref={ paginationPageSizeSelectorRef } />

        <PaginationPages ref={ paginationPagesRef } />

        <PaginationPageSelector ref={ paginationPageSelectorRef } />
      </Pagination>

      <button onClick={ () => {
        console.log(paginationRef.current);
        console.log(paginationPagesRef.current);
        console.log(paginationPageSelectorRef.current);
        console.log(paginationPageSizeSelectorRef.current);
      }}>
        Log refs
      </button>
    </>
  );
};

export const WithLabels = () => (
  <>
    <Pagination
      labelTooltipPrev="Go to prev page"
      labelTooltipNext="Go to next page"
      totalItems={ 500 }>
      <PaginationPages />
    </Pagination>

    <hr />
    <p>Deprecated</p>

    <Pagination
      labelTooltipPrev="Go to prev page"
      labelTooltipNext="Go to next page"
      totalItems={ 500 } />
  </>
);

export const WithPageSelector = () => (
  <Pagination totalItems={ 500 }>
    <PaginationPages />

    <PaginationPageSelector />
  </Pagination>
);

export const WithPageSizeSelector = () => (
  <>
    <Pagination totalItems={ 500 }>
      <PaginationPageSizeSelector />

      <PaginationPages />
    </Pagination>

    <hr />
    <p>Deprecated</p>

    <Pagination
      totalItems={ 500 }
      withPageSizeSelector />
  </>
);

export const WithPageSizeSelectorAndCustomTotalLabel = () => (
  <>
    <Pagination totalItems={ 500 }>
      <PaginationPageSizeSelector label="sur 500 résultats" />

      <PaginationPages />
    </Pagination>

    <hr />
    <p>Deprecated</p>

    <Pagination
      renderTotalItemsLabel={ ({ totalItems }) => `sur ${totalItems} résultats`}
      totalItems={ 500 }
      withPageSizeSelector />
  </>
);
