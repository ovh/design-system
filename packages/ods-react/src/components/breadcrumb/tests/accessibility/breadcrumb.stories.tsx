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

export const Names = () => (
  <>
    <Breadcrumb
      data-testid="default"
      locale="fr">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb
      aria-label="Custom"
      data-testid="aria-label">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <span id="breadcrumb-title">Own title</span>

    <Breadcrumb
      aria-labelledby="breadcrumb-title"
      data-testid="aria-labelledby">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </>
);
