enum CONTROL_CATEGORY {
  accessibility = 'Accessibility',
  design = 'Design',
  general = 'General',
  slot = 'Slot',
}

const orderedControlCategories = [
  CONTROL_CATEGORY.design,
  CONTROL_CATEGORY.slot,
  CONTROL_CATEGORY.general,
  CONTROL_CATEGORY.accessibility,
];

function orderControls(control: Record<string, any>) {
  try {
    return Object.entries(control)
      .sort((a, b) => {
        return orderedControlCategories.indexOf(a[ 1 ].category) - orderedControlCategories.indexOf(b[ 1 ].category);
      })
      .reduce((res, entry) => {
        res[ entry[ 0 ] ] = entry[ 1 ];
        return res;
      }, {} as Record<string, any>);
  } catch {
    console.error('Error while ordering controls');
    return {};
  }
}

export {
  CONTROL_CATEGORY,
  orderControls,
};
