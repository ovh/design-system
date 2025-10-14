import { forwardRef, useRef } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '.';
import style from './dev.module.css';

export default {
  component: Breadcrumb,
  title: 'Breadcrumb dev',
};

export const CustomStyle = () => (
  <Breadcrumb className={ style['custom-breadcrumb'] }>
    <BreadcrumbItem className={ style['custom-breadcrumb-item'] }>
      <BreadcrumbLink
        className={ style['custom-breadcrumb-link'] }
        href="#">
        Link 1
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem className={ style['custom-breadcrumb-item'] }>
      <BreadcrumbLink
        className={ style['custom-breadcrumb-link'] }
        href="#">
        Link 2
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem className={ style['custom-breadcrumb-item'] }>
      <BreadcrumbLink
        className={ style['custom-breadcrumb-link'] }
        href="#">
        Link 3
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

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

const DummyLink = forwardRef(({ children, ...props }: any, ref) => {
  return (
    <a data-test="dummy" { ...props } ref={ ref }>{ children }</a>
  );
});
export const RefAs = () => {
  const linkRef = useRef(null);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={ DummyLink } href="#" ref={ linkRef }>Link 1</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={ DummyLink } href="#">Link 2</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={ DummyLink } href="#">Link 3</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <button onClick={ () => console.log(linkRef.current) }>Log link ref</button>
    </>
  );
};
