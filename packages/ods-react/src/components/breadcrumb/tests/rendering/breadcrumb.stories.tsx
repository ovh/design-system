import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '../../src';

export default {
  component: Breadcrumb,
  title: 'Tests rendering',
};

export const render = () => (
  <Breadcrumb data-testid="render">
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Link 1</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Link 2</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Link 3</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
