// ###
// declaration of components dependencies by importing types
// ###

import type { Components as IconComponents, JSX as IconsJSX } from '@ovhcloud/ods-stencil-icon';

declare module './components' {
  export namespace Components {
    export type OsdsIcon = IconComponents.OsdsIcon;
  }
}

declare module './components' {
  export namespace JSX {
    export type OsdsIcon = IconsJSX.OsdsIcon;
  }
}
