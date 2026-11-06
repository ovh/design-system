import { DIVIDER_COLOR, Divider, SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';

const LOADER_COLOR = SPINNER_COLOR.primary;

export const Example = () => (
  <>
    <Divider color="neutral" />
    <Divider color={ DIVIDER_COLOR.primary } />
    <Spinner color={ SPINNER_COLOR.neutral } />
    <Spinner color="primary" />
  </>
);

export { LOADER_COLOR };
