import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '../../src';

export default {
  component: Breadcrumb,
  title: 'Tests rendering',
};

export const restUnderline = () => (
  <>
    <Breadcrumb data-testid="rest-underline-trail">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Link 1</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Link 2</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Current page</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb data-testid="rest-underline-collapsed">
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
  </>
);

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
