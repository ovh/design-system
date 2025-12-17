enum SEARCH_TAG {
  form = 'form',
  interactive = 'interactive',
  presentation = 'presentation',
  status = 'status',
}

type SearchTag = `${SEARCH_TAG}`;

const SEARCH_TAGS = Object.freeze(Object.values(SEARCH_TAG));

export {
  SEARCH_TAG,
  SEARCH_TAGS,
  type SearchTag,
};
