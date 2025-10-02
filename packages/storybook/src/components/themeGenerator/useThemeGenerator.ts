/**
 * Parse CSS content and extract CSS custom properties from :root selector
 */
export const parseCssVariables = (cssContent: string): Record<string, string> => {
  const variables: Record<string, string> = {};
  
  // Match :root { ... } blocks
  const rootRegex = /:root\s*\{([^}]+)\}/g;
  let match;
  
  while ((match = rootRegex.exec(cssContent)) !== null) {
    const rootContent = match[1];
    
    // Extract CSS custom properties (--property-name: value;)
    const varRegex = /(--[^:]+):\s*([^;]+);/g;
    let varMatch;
    
    while ((varMatch = varRegex.exec(rootContent)) !== null) {
      const propertyName = varMatch[1].trim();
      const propertyValue = varMatch[2].trim();
      
      // Only include --ods-* variables
      if (propertyName.startsWith('--ods-')) {
        variables[propertyName] = propertyValue;
      }
    }
  }
  
  return variables;
};

/**
 * Categorize CSS variables by type
 */
export interface CategorizedVariables {
  colors: Array<{ name: string; value: string }>;
  border: Array<{ name: string; value: string }>;
  font: Array<{ name: string; value: string }>;
  form: Array<{ name: string; value: string }>;
  outline: Array<{ name: string; value: string }>;
  other: Array<{ name: string; value: string }>;
}

export const categorizeCssVariables = (variables: Record<string, string>): CategorizedVariables => {
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

