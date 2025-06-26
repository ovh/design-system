import classNames from 'classnames';
import { type FC, type ReactNode, useEffect, useRef } from 'react';
import { Tag } from '../../../../tag/src';
import { useCombobox } from '../../contexts/useCombobox';
import { findLabelForValue } from '../../controller/combobox';
import style from './comboboxTags.module.scss';

interface ComboboxTagsProps {
  children?: ReactNode;
}

const ComboboxTags: FC<ComboboxTagsProps> = ({ children }): JSX.Element | null => {
  const tagsRef = useRef<HTMLDivElement>(null);
  const {
    disabled,
    handleTagRemove,
    items,
    multiple,
    tagFocus,
    readOnly,
    value,
  } = useCombobox();

  const isInteractive = !disabled && !readOnly;

  useEffect(() => {
    if (!isInteractive) {
      return;
    }

    function handleClickOutside(event: Event): void {
      if (tagsRef.current && !tagsRef.current.contains(event.target as Node)) {
        tagFocus.resetTagFocus();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tagFocus, isInteractive]);

  if (!multiple) {
    return null;
  }

  return (
    <div
      ref={tagsRef}
      className={style['combobox-tags']}
      onClick={isInteractive ? (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.target === e.currentTarget) {
          tagFocus.resetTagFocus();
        }
      } : undefined}
    >
      {value && value.length > 0 && value.map((val, index) => (
        <Tag
          disabled={disabled || readOnly}
          className={classNames({
            [style['combobox-tag--focused']]: isInteractive && tagFocus.focusedIndex === index,
          })}
          key={val}
          onClick={isInteractive ? (): void => {
            tagFocus.resetTagFocus();
            handleTagRemove(val);
          } : undefined}
          tabIndex={-1}
          value={val}
        >
          {findLabelForValue(items, val)}
        </Tag>
      ))}
      {children}
    </div>
  );
};

ComboboxTags.displayName = 'ComboboxTags';

export {
  ComboboxTags,
  type ComboboxTagsProps,
};
