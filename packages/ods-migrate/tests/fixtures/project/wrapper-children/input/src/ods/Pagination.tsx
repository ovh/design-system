import { Pagination as OdsPagination, type PaginationProp as OdsPaginationProp } from '@ovhcloud/ods-react';
import type { FC } from 'react';

// Forwards its children with the rest of the props: its users write the parts out.
interface PaginationProp extends OdsPaginationProp {
  current?: number;
}

const Pagination: FC<PaginationProp> = ({ current, ...rest }) => <OdsPagination { ...rest } />;

// Renders its own children: its users have nothing to write out.
const FullPagination: FC<OdsPaginationProp> = (props) => <OdsPagination { ...props }><span /></OdsPagination>;

// Takes the children out of the props: they never reach the ODS element.
const ShortPagination: FC<OdsPaginationProp> = ({ children, ...rest }) => <OdsPagination { ...rest } />;

export { FullPagination, Pagination, ShortPagination, type PaginationProp };
