import classNames from 'classnames';
import { type FC, useEffect, useRef } from 'react';
import { Tag } from '../../../../tag/src';
import { useCombobox } from '../../contexts/useCombobox';
import { findLabelForValue } from '../../controller/combobox';
import style from './comboboxTags.module.scss';

interface ComboboxTagsProps {}

const ComboboxTags: FC<ComboboxTagsProps> = (): JSX.Element | null => {
  const tagsRef = useRef<HTMLDivElement>(null);
  const {
    value,
    items,
    multiple,
    tagFocus,
    handleTagRemove,
  } = useCombobox();

  useEffect(() => {
    function handleClickOutside(event: Event): void {
      if (tagsRef.current && !tagsRef.current.contains(event.target as Node)) {
        tagFocus.resetTagFocus();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tagFocus]);

  if (!multiple || !value || value.length === 0) {
    return null;
  }

  return (
    <div
      ref={tagsRef}
      className={style['combobox-tags']}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          tagFocus.resetTagFocus();
        }
      }}
    >
      {value.map((val, index) => (
        <Tag
          className={classNames({
            [style['combobox-tag--focused']]: tagFocus.focusedIndex === index,
          })}
          key={val}
          onClick={(e) => {
            e.stopPropagation();
            handleTagRemove(val);
          }}
          tabIndex={-1}
          value={val}
        >
          {findLabelForValue(items, val)}
        </Tag>
      ))}
    </div>
  );
};

ComboboxTags.displayName = 'ComboboxTags';

export {
  ComboboxTags,
  type ComboboxTagsProps,
};
