import { directive } from 'lit-html';

export const DEFAULT_SLOT = 'DEFAULT';

export const createTag = ({ tag, attributes = {}, slots = {} }: { tag: string; attributes: { [index: string]: any }; slots: { [index: string]: any } }) =>
  `
  <${tag} ${Object.keys(attributes)
    .map(key => `${key}='${attributes[key]}'`)
    .join(' ')}>
    ${Object.keys(slots)
      .map((key: string) => (key === DEFAULT_SLOT ? slots[key] : `<span slot="${key}">${slots[key]}</span>`))
      .join('')}
  </${tag}>
`;

export const createComponentTable = (tag: string, tableDataX: { [index: string]: any }, tableDataY: { [index: string]: any }, tagContent: string, otherAttributes = {}) => {
  let res = `<div class="table">`;
  const attrX: string = Object.keys(tableDataX)[0];
  const attrY: string = Object.keys(tableDataY)[0];
  // Headers
  res += `<div class="table-row"><span class="table-cell"></span>`;
  tableDataY[attrY].map((valueY: string) => {
    res += `<span class="table-cell">${valueY}</span>`;
  });
  res += `</div>`;

  // Rows
  tableDataX[attrX].map((valueX: string) => {
    res += `<div class="table-row"><span class="table-cell">${valueX}</span>`;
    tableDataY[attrY].map((valueY: string) => {
      let obj: { [index: string]: any } = {};
      obj[attrX] = valueX;
      obj[attrY] = valueY;
      obj = { ...obj, ...otherAttributes };
      res += `<span class="table-cell">${createTag({ tag, attributes: obj, slots: { DEFAULT: tagContent } })}</span>`;
    });
    res += `</div>`;
  });
  res += `</div>`;
  return res;
};

const previousProps = new WeakMap();

export const getTagAttributes = directive(args => (part: any) => {
  const prev = previousProps.get(part);
  if (prev === args) {
    return;
  }
  const tagArgs: { [index: string]: any } = {};
  Object.keys(args).forEach(key => {
    if (!key.match(/Slot/i)) {
      tagArgs[key] = args[key];
    }
  });
  previousProps.set(part, tagArgs);

  Object.entries(args).forEach(([k, v]) => {
    if (v !== part.committer.element[k]) {
      part.committer.element[k] = v;
    }
  });
});

export const extractNewArgTypes = (storyCategories: Record<string, Record<string, unknown>[]>) => {
  const res = {};
  Object.entries(storyCategories).forEach(([category, categoryParams]: [string, Record<string, unknown>[]]) => {
    categoryParams.forEach(({
                              name,
                              options,
                              defaultValue,
                              control,
                              ...rest
                            }: { name: string, options?: string[], control?: Record<string, string>, rest?: unknown }) => {
      res[name] = {
        table: {
          category,
        },
        ...control ? { control } : options && options.length ? { control: { type: 'select', options } } : { control: undefined },
        ...rest,
      };
    });
  });
  return res;
};

export const extractArgTypes = (storyParams: { [k: string]: any }) => {
  const res: { [k: string]: any } = {};
  Object.keys(storyParams).forEach((storyParam) => {
    res[storyParam] = (({ options, control, description }) => ({
      options,
      control,
      description
    }))(storyParams[storyParam]);
    // keep table if already defined
    res[storyParam].table = storyParams[storyParam].table;

    if (storyParams[storyParam]?.category) {
      res[storyParam].table = { ...res[storyParam].table, category: storyParams[storyParam].category };
    }
  });
  return {
    ...res,
  };
};

export const extractNewStoryParams = (storyCategories: Record<string, Record<string, unknown>[]>) => {
  const res = {};
  Object.values(storyCategories).forEach((categoryParams: Record<string, unknown>[]) => {
    categoryParams.forEach(({ name, defaultValue }: { name: string, defaultValue: string }) => {
      res[name] = typeof defaultValue !== 'undefined' ? defaultValue : '';
    });
  });
  return res;
};

export const extractStoryParams = (storyParams: { [k: string]: any }) => {
  const res: { [k: string]: any } = {};
  Object.keys(storyParams).forEach(storyParam => {
    if (typeof storyParams[storyParam]?.defaultValue !== 'undefined') {
      res[storyParam] = storyParams[storyParam]?.defaultValue;
    }
  });
  return res;
};
