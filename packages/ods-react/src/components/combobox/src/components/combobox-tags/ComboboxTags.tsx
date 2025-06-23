import classNames from 'classnames';
import { type FC, type KeyboardEvent, type MouseEvent, forwardRef, useEffect, useRef } from 'react';
import { Tag } from '../../../../tag/src';
import { type ComboboxItemOrGroup } from '../../contexts/useCombobox';
import { findLabelForValue } from '../../controller/combobox';
import style from './comboboxTags.module.scss';

interface ComboboxTagsProps {
  focusedTagIndex: number | null;
  inputRef: React.RefObject<HTMLInputElement>;
  items: ComboboxItemOrGroup[];
  onFocusedTagChange: (index: number | null) => void;
  onTagRemove: (tagValue: string) => void;
  open: boolean;
  value: string[];
}

const ComboboxTags: FC<ComboboxTagsProps> = forwardRef(({
  focusedTagIndex,
  items,
  onFocusedTagChange,
  onTagRemove,
  open,
  value,
}): JSX.Element | null => {
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event): void {
      if (tagsRef.current && !tagsRef.current.contains(event.target as Node)) {
        onFocusedTagChange(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onFocusedTagChange]);

  useEffect(() => {
    onFocusedTagChange(null);
  }, [open, onFocusedTagChange]);

  function handleTagClick(tagValue: string): void {
    onFocusedTagChange(null);
    onTagRemove(tagValue);
  }

  function handleTagsClick(e: MouseEvent<HTMLDivElement>): void {
    if (e.target === e.currentTarget) {
      onFocusedTagChange(null);
    }
  }

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div
      ref={tagsRef}
      className={style['combobox-tags']}
      onClick={handleTagsClick}
    >
      {value.map((val, index) => (
        <Tag
          className={classNames({
            [style['combobox-tag--focused']]: focusedTagIndex === index,
          })}
          key={val}
          onClick={() => handleTagClick(val)}
          tabIndex={-1}
          value={val}
        >
          {findLabelForValue(items, val)}
        </Tag>
      ))}
    </div>
  );
});

ComboboxTags.displayName = 'ComboboxTags';

export function handleTagsKeyDown(
  e: KeyboardEvent<HTMLInputElement>,
  {
    focusedTagIndex,
    inputRef,
    onFocusedTagChange,
    onTagRemove,
    value,
  }: Pick<ComboboxTagsProps, 'focusedTagIndex' | 'inputRef' | 'onFocusedTagChange' | 'onTagRemove' | 'value'>,
): void {
  const isBackspaceAtStart = e.key === 'Backspace' &&
    inputRef.current &&
    inputRef.current.selectionStart === 0 &&
    inputRef.current.selectionEnd === 0;

  if (isBackspaceAtStart && value.length > 0) {
    if (focusedTagIndex === null) {
      onFocusedTagChange(value.length - 1);
      e.preventDefault();
    } else {
      const indexToRemove = focusedTagIndex;
      const tagToRemove = value[indexToRemove];

      const newLength = value.length - 1;
      let newFocusIndex: number | null = null;

      if (indexToRemove > 0 && newLength > 0) {
        newFocusIndex = indexToRemove - 1;
      } else if (newLength > 0) {
        newFocusIndex = 0;
      }

      onFocusedTagChange(newFocusIndex);
      onTagRemove(tagToRemove);
      e.preventDefault();
    }
  } else if (e.key !== 'Backspace') {
    onFocusedTagChange(null);
  }

  if (focusedTagIndex !== null && value.length > 0) {
    if (e.key === 'ArrowLeft' && focusedTagIndex > 0) {
      onFocusedTagChange(focusedTagIndex - 1);
      e.preventDefault();
    } else if (e.key === 'ArrowRight' && focusedTagIndex < value.length - 1) {
      onFocusedTagChange(focusedTagIndex + 1);
      e.preventDefault();
    } else if (e.key === 'Escape') {
      onFocusedTagChange(null);
      e.preventDefault();
    }
  }
}

export {
  ComboboxTags,
  type ComboboxTagsProps,
};
