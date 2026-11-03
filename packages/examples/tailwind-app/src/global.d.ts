/// <reference types="vite/client" />
// The ODS theme entry points are plain CSS with no type declarations shipped: imported as strings
// (?inline) to be switched at runtime.
declare module '@ovhcloud/ods-themes/*/css?inline' {
  const css: string;
  export default css;
}
