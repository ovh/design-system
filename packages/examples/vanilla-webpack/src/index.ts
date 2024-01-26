import '@ovhcloud/ods-theme-blue-jeans';

// Use this configuration to test the lazy loader
import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();

// Use this configuration to test the "per-component" import
// import { defineCustomElement as defineDatagrid } from '@ovhcloud/ods-components/dist/components/osds-datagrid';
// import { defineCustomElement as defineForm } from '@ovhcloud/ods-components/dist/components/osds-form';
// import { defineCustomElement as defineInput } from '@ovhcloud/ods-components/dist/components/osds-input';
// import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/osds-button';
// import { defineCustomElement as defineSelect } from '@ovhcloud/ods-components/dist/components/osds-select';
// import { defineCustomElement as defineSelectOption } from '@ovhcloud/ods-components/dist/components/osds-select-option';

// defineDatagrid();
// defineForm();
// defineInput();
// defineButton();
// defineSelect();
// defineSelectOption();

const form = document.getElementById('osds-form') as HTMLFormElement;
const odsInput = document.querySelector('[name="odsInput"]');
odsInput?.addEventListener('odsFocus', () => {
  console.log('focus event', )
});
odsInput?.addEventListener('odsBlur', () => {
  console.log('blur event', )
});
form?.addEventListener('odsOnSubmit', (event: CustomEvent) => {
  event.preventDefault();
  console.log('onSubmit', event.detail);
});
