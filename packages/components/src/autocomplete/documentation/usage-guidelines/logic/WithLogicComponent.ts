import type { OsdsAutocomplete } from '@ovhcloud/ods-components';
import React, { useEffect } from 'react';

type DatabaseEntry = {
  value: string;
  text: string;
};

const WithLogicComponent: React.FC = () => {
  useEffect(() => {
    const autocomplete = document.querySelector('#logic') as (HTMLElement & OsdsAutocomplete) | null;

    const database: DatabaseEntry[] = [
      { value: 'Hello', text: 'Hello World' },
      { value: 'How', text: 'How are you today?' },
      { value: 'Bonjour', text: 'Bonjour tout le monde' },
      { value: 'Hola', text: 'Hola Mundo' },
      { value: 'Fizz', text: 'Buzz' },
      { value: 'Auto', text: 'Autocomplete' },
    ];

    const updateOptions = (value: string): void => {
      while (autocomplete && autocomplete.firstChild) {
        autocomplete.removeChild(autocomplete.firstChild);
      }

      const regex = new RegExp(value, 'i');
      database.forEach((entry) => {
        if (regex.test(entry.text)) {
          const optionElement = document.createElement('osds-select-option');
          optionElement.value = entry.value;
          optionElement.tabIndex = 1;

          const textElem = document.createElement('osds-text');
          textElem.innerHTML = entry.text.replace(regex, '<b>$&</b>');
          optionElement.appendChild(textElem);

          autocomplete?.appendChild(optionElement);
        }
      });
    };

    if (autocomplete) {
      autocomplete.addEventListener('odsValueChange', (event: Event) => {
        const detail = (event as CustomEvent<{ value: string }>).detail;
        updateOptions(detail.value);
      });

      updateOptions('');
    }
  }, []);

  return null;
};

export default WithLogicComponent;