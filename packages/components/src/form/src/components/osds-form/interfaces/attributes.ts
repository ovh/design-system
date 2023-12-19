import type { OdsInputValue } from "@ovhcloud/ods-common-core";

interface OdsFormAttribute {
  initialValues: Record<string, OdsInputValue> | string,
}

export type {
  OdsFormAttribute,
};
