import { useRef } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '.';

export default {
  component: Breadcrumb,
  title: 'Breadcrumb dev',
};

export const Default = () => (
  <Breadcrumb>
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

export const Ellipsis = () => (
  <>
    <h4>Default</h4>

    <Breadcrumb>
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
        <BreadcrumbLink href="#">Link 5</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <h4>Custom before/after</h4>

    <Breadcrumb
      nbItemsAfterEllipsis={ 2 }
      nbItemsBeforeEllipsis={ 2 }>
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
        <BreadcrumbLink href="#">Link 5</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <h4>Custom max</h4>

    <Breadcrumb collapseThreshold={ 5 }>
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
        <BreadcrumbLink href="#">Link 5</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <h4>No ellipsis</h4>

    <Breadcrumb noCollapse>
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
        <BreadcrumbLink href="#">Link 5</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </>
);

export const Ref = () => {
  const linkRef = useRef(null);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" ref={ linkRef }>Link 1</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Link 2</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Link 3</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <button onClick={ () => console.log(linkRef.current) }>Log link ref</button>
    </>
  );
};
