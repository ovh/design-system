import { OdsErrorStateControl, OdsFormControl, OdsFormForbiddenValues } from '../../form/public-api';

import { OdsRange } from './ods-range';
import { OdsRangeController } from './ods-range-controller';
import { OdsRangeEvents } from './ods-range-events';
import { OdsRangeMethods } from './ods-range-methods';
import { OdsRangeValidityState } from './ods-range-validity-state';
import { OdsRangeValue } from './ods-range-value';
import { OdsRangeValueChangeEventDetail } from './ods-range-value-change-event-detail';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

export class OdsRangeMock implements OdsRange<OdsRangeMethods, OdsRangeEvents> {
  color?: OdsThemeColorIntent;
  disabled?: boolean;
  error?: boolean;
  errorStateControl?: OdsErrorStateControl;
  inline?: boolean;
  id?: string;
  max?: number;
  min?: number;
  step?: number;
  value: OdsRangeValue = '';
  forbiddenValues: OdsFormForbiddenValues<number> = [];
  formControl?: OdsFormControl<OdsRangeValidityState>;

  odsValueChange!: OdsRangeValueChangeEventDetail;

  inputEl?: HTMLInputElement;
  dualInputEl?: HTMLInputElement;

  controller: OdsRangeController = jest.fn() as unknown as OdsRangeController;

  getValidity = jest.fn();
  beforeInit = jest.fn();
  beforeRender = jest.fn();
  afterRender = jest.fn();

  onInput = jest.fn();
  onKeyup = jest.fn();

  emitChange = jest.fn();
}
