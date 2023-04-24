import { Ods<%= componentName %>Attributes } from './<%= componentFileNamePrefix %>-attributes';

export const ods<%= componentName %>DefaultAttributesDoc  = {
    // default attributes
} as const;

export const ods<%= componentName %>DefaultAttributes = ods<%= componentName %>DefaultAttributesDoc as Ods<%= componentName %>Attributes;
