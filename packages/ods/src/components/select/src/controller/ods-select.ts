import type TomSelect from 'tom-select';
import { type OdsSelectCustomRenderer } from '../interfaces/options';

type SelectConfigItem = Record<string, object>;
type SelectConfig = { plugin: SelectConfigItem, template: SelectConfigItem };

function getSelectConfig(allowMultiple: boolean, multipleSelectionLabel: string, renderer?: OdsSelectCustomRenderer): SelectConfig {
  const plugin: SelectConfigItem = { placeholder: {} };
  const template: SelectConfigItem = renderer || {};

  if (allowMultiple) {
    plugin['checkbox_options'] = {
      checkedClassNames: ['ts-checked'],
      uncheckedClassNames: ['ts-unchecked'],
    };
    plugin['merge_selected_items'] = {
      label: multipleSelectionLabel,
    };

    template['item'] = (): string => '<div style="display: none;"></div>';
  }

  return { plugin, template };
}

function inlineValue(value: string | string[] | null | undefined): string {
  if (Array.isArray(value)) {
    return value.join(',');
  }
  return value ?? '';
}

function moveSlottedElements(targetElement: Element, slottedElements: Element[]): void {
  // clean-up target
  targetElement.replaceChildren();

  slottedElements.forEach((element) => {
    targetElement.appendChild(element);
  });
}

function setFormValue(internals: ElementInternals, value: string | string [] | null | undefined): void {
  internals.setFormValue(inlineValue(value));
}

function setSelectValue(select?: TomSelect, value?: string | string[] | null, defaultValue?: string | string [], isSilent: boolean = false): void {
  if (select) {
    if (value || defaultValue) {
      select.setValue(value || defaultValue || '', isSilent);
    } else {
      select.clear(isSilent);
    }
  }
}

export {
  type SelectConfig,
  getSelectConfig,
  inlineValue,
  moveSlottedElements,
  setFormValue,
  setSelectValue,
};
