import { OdsLogger } from '@ovhcloud/ods-common-core';

export default function(): void {
  const logger = new OdsLogger('global-dev');
  logger.log('init');
}
