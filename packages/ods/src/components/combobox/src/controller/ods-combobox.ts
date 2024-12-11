// import type TomSelect from 'tom-select';
// import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';
// import { type OdsSelectCustomRenderer } from '../interfaces/options';

// TODO mutualize in utils?
// type SelectConfigItem = Record<string, object>;
// type SelectConfig = { plugin: SelectConfigItem, template: SelectConfigItem };
type SelectTemplateData = { className: string, text: string };
type SelectTemplateEscape = (str: string) => string;

const VALUE_DEFAULT_VALUE = null;

// function getInitialValue(value: string | string [] | null, defaultValue?: string | string []): string | string [] | null {
//   if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
//     return defaultValue;
//   }
//
//   return value;
// }

function getSelectPlugin(allowMultiple: boolean, isClearable: boolean, clearTemplate: (data: SelectTemplateData) => string): Record<string, object> {
  const plugin: Record<string, object> = {
    remove_item_on_ods_remove_plugin: {},
  };

  if (allowMultiple) {
    plugin['caret_position'] = {};
    plugin['input_autogrow'] = {};
  }

  if (isClearable) {
    plugin['clear_button'] = {
      html: clearTemplate,
    };
  }

  return plugin;
}

function hasNoValueOption(elements: HTMLOptionElement[]): boolean {
  return (elements || []).some((element) => element.value === '');
}

// function inlineValue(value: string | string[] | null | undefined): string | null {
//   if (value === undefined) {
//     return VALUE_DEFAULT_VALUE;
//   }
//
//   if (Array.isArray(value)) {
//     return value.join(',');
//   }
//
//   return value;
// }

function moveSlottedElements(targetElement: Element, slottedElements: Element[], hasEmptyOption: boolean): void {
// function moveSlottedElements(targetElement: Element, slottedElements: Element[]): void {
  // clean-up target
  targetElement.replaceChildren();

  if (!hasEmptyOption) {
    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    targetElement.appendChild(emptyOption);
  }

  slottedElements.forEach((element) => {
    targetElement.appendChild(element);
  });
}

// function setSelectValue(select?: TomSelect, value?: string | string[] | null, defaultValue?: string | string [], isSilent: boolean = false): void {
//   if (select) {
//     if (value || defaultValue) {
//       select.setValue(value || defaultValue || '', isSilent);
//     } else {
//       select.clear(isSilent);
//     }
//   }
// }

// function updateInternals(internals: ElementInternals, value: string[] | string | null, selectEl?: HTMLSelectElement): void {
//   internals.setFormValue(inlineValue(value) ?? '');
//
//   if (selectEl) {
//     setInternalsValidityFromHtmlElement(selectEl, internals);
//   }
// }

export {
  // type SelectConfig,
  type SelectTemplateData,
  type SelectTemplateEscape,
  // getInitialValue,
  // getSelectConfig,
  getSelectPlugin,
  hasNoValueOption,
  // inlineValue,
  moveSlottedElements,
  // setSelectValue,
  // updateInternals,
  VALUE_DEFAULT_VALUE,
};
