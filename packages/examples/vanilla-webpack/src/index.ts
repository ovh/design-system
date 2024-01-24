import '@ovhcloud/ods-theme-blue-jeans';

// Use this configuration to test the lazy loader
import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();

// Use this configuration to test the "per-component" import
// import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/osds-button';
// import { defineCustomElement as defineForm } from '@ovhcloud/ods-components/dist/components/osds-form';
// import { defineCustomElement as defineInput } from '@ovhcloud/ods-components/dist/components/osds-input';
// import { defineCustomElement as defineTextarea } from '@ovhcloud/ods-components/dist/components/osds-textarea';

// defineButton();
// defineInput();
// defineForm();
// defineTextarea();

const form = document.getElementById('osdsForm') as HTMLFormElement;
const odsInput = document.querySelector('[name="odsInput"]');
odsInput?.addEventListener('odsFocus', () => {
  console.log('focus event', )
});
odsInput?.addEventListener('odsBlur', () => {
  console.log('blur event', )
});
form?.addEventListener('odsOnSubmit', (event: CustomEvent) => {
  event.preventDefault();
  console.log('onSubmit', event.detail)
});
