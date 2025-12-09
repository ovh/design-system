enum SEARCH_TAG {
  checkbox = 'checkbox',
  location = 'location',
  selection = 'selection',
  tile = 'tile',
}

type SearchTag = `${SEARCH_TAG}`;

const SEARCH_TAGS = Object.freeze(Object.values(SEARCH_TAG));

export {
  SEARCH_TAG,
  SEARCH_TAGS,
  type SearchTag,
};
