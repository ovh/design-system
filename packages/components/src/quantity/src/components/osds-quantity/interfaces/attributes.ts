import type { OdsCommonFieldAttribute } from '@ovhcloud/ods-common-core';

type OdsQuantityAttribute = Omit<OdsCommonFieldAttribute, 'clearable' | 'forbiddenValues' | 'label' | 'loading' | 'placeholder' | 'prefixValue' | 'readonly' | 'required' | 'step' | 'tabindex'>;

export type { OdsQuantityAttribute };
