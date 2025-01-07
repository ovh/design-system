import '@ovhcloud/ods-themes/default';

// Use this configuration to test the lazy loader

// import { defineCustomElement as defineBreadcrumb } from '@ovhcloud/ods-components/ods-breadcrumb';
// import { defineCustomElement as defineBreadcrumbItem } from '@ovhcloud/ods-components/ods-breadcrumb-item';
// defineBreadcrumb();
// defineBreadcrumbItem();
//
// import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/ods-button';
// defineButton();
//
// import { defineCustomElement as defineClipboard } from '@ovhcloud/ods-components/ods-clipboard';
// defineClipboard();
//
// import { defineCustomElement as defineFileUpload } from '@ovhcloud/ods-components/ods-file-upload';
// defineFileUpload();
//
// import { defineCustomElement as defineIcon } from '@ovhcloud/ods-components/ods-icon';
// defineIcon();

import { defineCustomElement as defineAccordion } from '@ovhcloud/ods-components/ods-accordion';
defineAccordion();

// import { defineCustomElement as defineInput } from '@ovhcloud/ods-components/ods-input';
// defineInput();
// import { defineCustomElement as defineSkeleton } from '@ovhcloud/ods-components/ods-skeleton';
// defineSkeleton();

// import { defineCustomElement as definePassword } from '@ovhcloud/ods-components/ods-password';
// definePassword();
//
// import { defineCustomElement as definePhoneNumber } from '@ovhcloud/ods-components/ods-phone-number';
// definePhoneNumber();

// import { defineCustomElement as defineText } from '@ovhcloud/ods-components/ods-text';
// defineText();
//
import { ODS_BUTTON_SIZE, type OdsButtonSize, ODS_BUTTON_COLOR } from '@ovhcloud/ods-components';
console.log(ODS_BUTTON_SIZE);
console.log(ODS_BUTTON_COLOR);

const toto: OdsButtonSize = 'md';
console.log(toto)


// Use this configuration to test the "per-component" import
// import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/ods-button';
// defineButton();
