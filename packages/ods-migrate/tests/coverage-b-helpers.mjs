/* Shared by the coverage-b tests: the TypeScript module (coverage-helpers.mjs) and removed-name sets. */
export { skipTs, ts } from './coverage-helpers.mjs';
export const names = ({ css = [], scss = [], mixin = [], module = [] } = {}) => ({ css: new Set(css), scss: new Set(scss), mixin: new Set(mixin), module: new Set(module) });
