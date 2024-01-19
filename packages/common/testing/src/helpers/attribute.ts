function odsComponentAttributes2StringAttributes<T>(attributes: { [K in keyof T]: T[K] }, defaultValues: { [K in keyof T]: T[K] }):Record<string, string | null | undefined> {
  const parameters: Record<string, string | null | undefined> = {};
  Object.entries(attributes)
    .map(([name, value]) => {
      if (value === null) {
        parameters[name] = null;
      } else if (typeof value === 'boolean') {
        if (value) {
          parameters[name] = 'true';
        } else if (!value && defaultValues[(name as keyof { [K in keyof T]: T[K] })]) {
          parameters[name] = `${value}`;
        }
      } else if (typeof value === 'number') {
        parameters[name] = `${value}`;
      } else if (typeof value === 'string') {
        parameters[name] = `${value}`;
      } else if (typeof value === 'object') {
        parameters[name] = JSON.stringify(value);
      } else if(value) {
        console.warn(`your attribute ${name}=${value} cannot be set as DOM attribute. use setProperty instead`);
      }
    });
  return parameters;
}


/**
 * get a list of attributes as a string in order to integrate it into a HTML element.
 * In case of undefined value of the attribute, only the attribute name is output, not the value.
 */
function odsStringAttributes2Str(attributes: Record<string, string | null | undefined>): string {
  return Object.entries(attributes)
    .map(([name, value]) => {
      const kebabName = name.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
      return (value === undefined || value === null) ? `${kebabName}` : `${kebabName}='${value}'`;
    })
    .join(' ');
}

export {
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
};
