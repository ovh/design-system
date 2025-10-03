interface CategorizedVariables {
  colors: Array<{ name: string; value: string }>;
  border: Array<{ name: string; value: string }>;
  font: Array<{ name: string; value: string }>;
  form: Array<{ name: string; value: string }>;
  outline: Array<{ name: string; value: string }>;
  other: Array<{ name: string; value: string }>;
}

const categorizeCssVariables = (variables: Record<string, string>): CategorizedVariables => {
  const categories: CategorizedVariables = {
    colors: [],
    border: [],
    font: [],
    form: [],
    outline: [],
    other: [],
  };

  Object.entries(variables).forEach(([name, value]) => {
    const variable = { name, value };
    
    if (name.includes('color')) {
      categories.colors.push(variable);
    } else if (name.includes('border')) {
      categories.border.push(variable);
    } else if (name.includes('font')) {
      categories.font.push(variable);
    } else if (name.includes('form')) {
      categories.form.push(variable);
    } else if (name.includes('outline')) {
      categories.outline.push(variable);
    } else {
      categories.other.push(variable);
    }
  });

  return categories;
};

export { categorizeCssVariables, type CategorizedVariables };
