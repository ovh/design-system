import '@ovhcloud/ods-theme-blue-jeans';

// Use this configuration to test the lazy loader
// import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
// defineCustomElements();

// Use this configuration to test the "per-component" import
import { defineCustomElement as defineDatagrid } from '@ovhcloud/ods-components/dist/components/osds-datagrid';
defineDatagrid();
