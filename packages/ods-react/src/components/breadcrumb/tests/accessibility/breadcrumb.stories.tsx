import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '../../src';

export default {
  component: Breadcrumb,
  title: 'Tests accessibility',
};

export const Collapsed = () => (
  <Breadcrumb data-testid="collapsed">
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Link 1</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Link 2</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Link 3</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Link 4</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Current page</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
