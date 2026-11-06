/* TODO(ods-v20): SPINNER_COLOR: removed in v20, delete it from this import once the places marked below no longer use it */ import { Divider, SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';

const LOADER_COLOR = /* TODO(ods-v20): SPINNER_COLOR.primary has no v20 equivalent: primary is the default color of the v20 Spinner: delete it */ SPINNER_COLOR.primary;

export const Example = () => (
  <>
    <Divider />
    <Divider />
    <Spinner />
    <Spinner />
  </>
);

export { LOADER_COLOR };
