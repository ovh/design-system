const parseCssVariables = (cssContent: string): Record<string, string> => {
  const variables: Record<string, string> = {};
  
  const extractVariablesFromRoot = (content: string, startIndex: number = 0): void => {
    const rootMatch = /:root\s*\{([^}]+)\}/g;
    rootMatch.lastIndex = startIndex;
    const match = rootMatch.exec(content);
    
    if (!match) return;
    
    const rootContent = match[1];
    extractVariablesFromContent(rootContent);
    
    extractVariablesFromRoot(content, rootMatch.lastIndex);
  };
  
  const extractVariablesFromContent = (content: string, startIndex: number = 0): void => {
    const varRegex = /(--[^:]+):\s*([^;]+);/g;
    varRegex.lastIndex = startIndex;
    const match = varRegex.exec(content);
    
    if (!match) return;
    
    const propertyName = match[1].trim();
    const propertyValue = match[2].trim();
    
    // Only include --ods-* variables
    if (propertyName.startsWith('--ods-')) {
      variables[propertyName] = propertyValue;
    }
    
    // Recursively find next variable
    extractVariablesFromContent(content, varRegex.lastIndex);
  };
  
  extractVariablesFromRoot(cssContent);
  return variables;
};

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

export { categorizeCssVariables, type CategorizedVariables, parseCssVariables };
