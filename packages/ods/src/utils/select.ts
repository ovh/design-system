/**
 * Tom-select plugin to handle multiple selection as one string instead of x elements
 * (see https://tom-select.js.org/docs/plugins)
 * @param label: the custom label to use before the selection count
 */
function mergeSelectedItemPlugin({ label }: Record<string, unknown>): void {
  // @ts-ignore "this" is the TomSelect instance but is set as any by the lib
  const self = this; // eslint-disable-line @typescript-eslint/no-this-alias
  const mergeItemsClassName = 'ts-merged-items';
  const placeholderClassName = 'ts-merged-items-placeholder';
  let currentLabel = label;
  let currentPlaceholder = self.settings.placeholder || '';
  let divElement: HTMLDivElement;

  function updateCount(): void {
    if (self.items.length > 0) {
      divElement.classList.remove(placeholderClassName);
      divElement.innerText = `${currentLabel} (${self.items.length})`;
    } else {
      divElement.classList.add(placeholderClassName);
      divElement.innerText = currentPlaceholder;
    }
  }

  self.on('initialize', () => {
    divElement = document.createElement('div');
    divElement.className = mergeItemsClassName;
    self.control.append(divElement);
    updateCount();
  });

  self.on('item_add', updateCount);
  self.on('item_remove', updateCount);

  self.hook('after', 'setup', function() {
    self.control.addEventListener('ods-select-multiple-selection-label-change', (event: CustomEvent<string>) => {
      event.stopPropagation();
      currentLabel = event.detail;
      updateCount();
    });
    self.control.addEventListener('ods-select-placeholder-change', (event: CustomEvent<string>) => {
      event.stopPropagation();
      currentPlaceholder = event.detail;
      updateCount();
    });
  });
}

/**
 * Tom-select plugin to display placeholder on all type of Select
 * The lib placeholder attribute will not work when we enforce an empty control input to prevent typing
 * (see https://tom-select.js.org/docs/plugins)
 */
function placeholderPlugin(): void {
  // @ts-ignore "this" is the TomSelect instance but is set as any by the lib
  const self = this; // eslint-disable-line @typescript-eslint/no-this-alias
  const placeholderElement = document.createElement('div');
  let currentPlaceholder = '';

  function updateVisibility(): void {
    if (self.items.length > 0) {
      placeholderElement.style.display = 'none';
    } else {
      placeholderElement.style.display = 'block';
    }
  }

  self.on('initialize', () => {
    currentPlaceholder = self.settings.placeholder || '';
    placeholderElement.className = 'ts-placeholder';
    placeholderElement.innerText = currentPlaceholder;
    self.control.append(placeholderElement);
    updateVisibility();
  });

  self.on('item_add', updateVisibility);
  self.on('item_remove', updateVisibility);

  self.hook('after', 'setup', function() {
    self.control.addEventListener('ods-select-placeholder-change', (event: CustomEvent<string>) => {
      event.stopPropagation();
      currentPlaceholder = event.detail;
      placeholderElement.innerText = currentPlaceholder;
    });
  });
}

export {
  mergeSelectedItemPlugin,
  placeholderPlugin,
};
