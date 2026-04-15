import { usePaginationContext } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type FormEvent, type JSX, type ReactNode, forwardRef, useId } from 'react';
import { BUTTON_SIZE, Button } from '../../../../button/src';
import { INPUT_TYPE, Input } from '../../../../input/src';
import style from './paginationPageSelector.module.scss';

interface PaginationPageSelectorProp extends ComponentPropsWithRef<'form'> {
  /**
   * The label displayed near the go-to-page input.
   */
  label?: ReactNode;
  /**
   * The label displayed in the go-to-page submit button.
   */
  submitLabel?: ReactNode;
}

const INPUT_NAME = 'page';

const PaginationPageSelector: FC<PaginationPageSelectorProp> = forwardRef(({
  className,
  label = 'Go to page',
  submitLabel = 'Go',
  ...props
}, ref): JSX.Element => {
  const { page, setPage, totalPages } = usePaginationContext();
  const textId = useId();

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(event.target as HTMLFormElement);
    const newPage = Number(formData.get(INPUT_NAME));

    if (!isNaN(newPage) && newPage !== page) {
      setPage(Math.max(Math.min(newPage, totalPages), 1));
    }
  }

  return (
    <form
      className={ classNames(style['pagination-page-selector'], className) }
      data-ods="pagination-page-selector"
      onSubmit={ handleSubmit }
      ref={ ref }
      { ...props }>
      <span
        className={ style['pagination-page-selector__label'] }
        id={ textId }>
        { label }
      </span>

      <Input
        aria-labelledby={ textId }
        className={ style['pagination-page-selector__input'] }
        name={ INPUT_NAME }
        type={ INPUT_TYPE.number } />

      <Button
        size={ BUTTON_SIZE.sm }
        type="submit">
        { submitLabel }
      </Button>
    </form>
  );
});

export {
  PaginationPageSelector,
  type PaginationPageSelectorProp,
};
