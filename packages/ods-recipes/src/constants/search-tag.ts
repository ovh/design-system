enum SEARCH_TAG {
  form = 'form',
  interactive = 'interactive',
  presentation = 'presentation',
  // TODO remove those when deleting example recipes
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
