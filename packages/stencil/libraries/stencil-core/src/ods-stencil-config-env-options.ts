import { Config } from '@stencil/core';

/**
 * allowed options to set with ODS into the Stencil config,
 * depending the environment (dev or prod)
 */
export interface OdsStencilConfigEnvOptions {
  tsConfig?: Config['tsconfig'];
  globalScript?: Config['globalScript'];
}
