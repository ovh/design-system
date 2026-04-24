import { type QueryFilterGroup, type QueryFilterItem, type QueryFilterOption, type QueryFilterProperty, type QueryFilterTag } from '../contexts/useQueryFilter';

const MAX_STEP = 3;
const TAG_ID_SEPARATOR = '-';

function extractCustomLabel(item: QueryFilterItem, selection: QueryFilterItem[]): string {
  if (!selection.length) {
    return item.label;
  }

  const lastLabel = selection[selection.length - 1].label;

  if (item.label.trim().toLowerCase().startsWith(lastLabel.toLowerCase())) {
    return item.label.replace(new RegExp(`^${lastLabel}`, 'i'), '').trim();
  }

  return item.label;
}

function findItemByValue(items: QueryFilterItem[], value: string): QueryFilterItem | undefined {
  return items.find((item) => item.value === value);
}

function generateTagId(selection: QueryFilterItem[]): string {
  return selection
    .map((filter) => filter.value)
    .join(TAG_ID_SEPARATOR);
}

function getDefaultTags(filterProperty: QueryFilterProperty, filterOption: QueryFilterOption, defaultValue?: string[][]): QueryFilterTag[] {
  if (!defaultValue?.length) {
    return [];
  }

  function mutateTag(currentTag: QueryFilterTag, list: QueryFilterItem[] = [], value = ''): void {
    const filterItem = findItemByValue(list, value);

    if (filterItem) {
      currentTag.filters.push(filterItem);
    }
    currentTag.id += `${currentTag.id ? TAG_ID_SEPARATOR : ''}${filterItem ? filterItem.value : value}`;
    currentTag.label += `${currentTag.label ? ' ' : ''}${filterItem ? filterItem.label : value}`;
  }

  return defaultValue.map((values) => {
    if (!values.length) {
      return;
    }

    const tag: QueryFilterTag = {
      filters: [],
      id: '',
      label: '',
    };

    mutateTag(tag, filterProperty.options, values[0]);
    mutateTag(tag, filterOption[tag.filters[0]?.value]?.operator?.options, values[1]);
    mutateTag(tag, filterOption[tag.filters[0]?.value]?.value?.options, values[2]);

    for (let i = MAX_STEP; i < values.length; i++) {
      mutateTag(tag, [], values[i]);
    }

    return tag;
  }).filter((tag): tag is QueryFilterTag => !!tag);
}

function getMergedLabel(selection: QueryFilterItem[], label?: string): string {
  if (selection.length) {
    if (label) {
      return `${selection[selection.length - 1].label} ${label}`;
    }

    return selection[selection.length - 1].label;
  }

  return label || '';
}

function getStepGroup(selection: QueryFilterItem[], filterProperty: QueryFilterProperty, filterOption: QueryFilterOption): QueryFilterGroup | undefined {
  switch (selection.length) {
    case 0:
      return filterProperty;
    case 1:
      return filterOption[selection[0].value]?.operator;
    case 2:
      return filterOption[selection[0].value]?.value;
    default:
      return undefined;
  }
}

export {
  extractCustomLabel,
  findItemByValue,
  generateTagId,
  getDefaultTags,
  getMergedLabel,
  getStepGroup,
  MAX_STEP,
};
