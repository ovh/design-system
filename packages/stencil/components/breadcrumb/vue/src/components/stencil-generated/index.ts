/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@ovhcloud/ods-stencil/components/breadcrumb/custom-elements';

import { defineCustomElement as defineOsdsBreadcrumb } from '@ovhcloud/ods-stencil/components/breadcrumb/custom-elements/osds-breadcrumb.js';
import { defineCustomElement as defineOsdsBreadcrumbItem } from '@ovhcloud/ods-stencil/components/breadcrumb/custom-elements/osds-breadcrumb-item.js';


export const OsdsBreadcrumb = /*@__PURE__*/ defineContainer<JSX.OsdsBreadcrumb>('osds-breadcrumb', defineOsdsBreadcrumb, [
  'maxItems',
  'itemBeforeCollapse',
  'itemAfterCollapse',
  'odsValueChange',
  'collapsedClick'
]);


export const OsdsBreadcrumbItem = /*@__PURE__*/ defineContainer<JSX.OsdsBreadcrumbItem>('osds-breadcrumb-item', defineOsdsBreadcrumbItem, [
  'active',
  'collapsed',
  'disabled',
  'displayed',
  'showCollapsedIndicator',
  'color',
  'collapsedClick',
  'inFocus',
  'inBlur',
  'odsFocus',
  'odsBlur'
]);

