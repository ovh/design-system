import type { OsdsAutocomplete } from '@ovhcloud/ods-components';

const database = [
  { value: 'Hello', text: 'Hello World' },
  { value: 'How', text: 'How are you today?' },
  { value: 'Bonjour', text: 'Bonjour tout le monde' },
  { value: 'Hola', text: 'Hola Mundo' },
  { value: 'Fizz', text: 'Buzz' },
  { value: 'Auto', text: 'Autocomplete' },
];

export const AutocompletePlay = async() => {
  await customElements.whenDefined('osds-autocomplete');
  const autocomplete = document.querySelector('osds-autocomplete') as (HTMLElement & OsdsAutocomplete) | null;

  if (autocomplete) {
    const updateOptions = (value: string) => {
      while (autocomplete.firstChild) {
        autocomplete.removeChild(autocomplete.firstChild);
      }

      const regex = new RegExp(value, 'i');
      database.forEach(entry => {
        if (regex.test(entry.text)) {
          const optionElement = document.createElement('osds-select-option');
          optionElement.value = entry.value;

          const textElem = document.createElement('span');
          textElem.innerHTML = entry.text.replace(regex, '<b>$&</b>');
          optionElement.appendChild(textElem);

          autocomplete.appendChild(optionElement);
        }
      });
    };

    autocomplete.addEventListener('odsValueChange', (event: Event) => {
      const detail = (event as CustomEvent).detail;
      updateOptions(detail.value);
    });

    updateOptions('');
  }
};
