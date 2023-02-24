import { OdsLogger } from '../logger/ods-logger';
const logger = new OdsLogger('GetElementAttributes');
/**
 * get element's attribute as key value
 */
export const getElementAttributes = (nodeMap) => {
  if (nodeMap) {
    const length = nodeMap.length;
    return Object.keys(nodeMap).reduce((props, current) => {
      try {
        const numCurrent = parseInt(current, 10);
        if (numCurrent < length) {
          const property = nodeMap[numCurrent];
          return Object.assign(Object.assign({}, props), { [property.name]: property.value });
        }
      }
      catch (err) {
        // eslint-disable-next-line no-console
        logger.error(err);
      }
      return props;
    }, {});
  }
  return {};
};
