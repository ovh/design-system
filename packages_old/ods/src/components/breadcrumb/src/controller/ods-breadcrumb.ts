const MAX_ITEM = 4;

function expandItems(items: Element[]): void {
  items
    .filter((child) => child.tagName.toLowerCase() === 'ods-breadcrumb-item')
    .forEach((item) => {
      item.setAttribute('is-collapsed', 'false');
      item.setAttribute('is-expandable', 'false');
    });
}

function setupItems(items: Element[]): void {
  const breadcrumbItems = items
    .filter((child) => child.tagName.toLowerCase() === 'ods-breadcrumb-item')
    .map((child) => {
      child.removeAttribute('is-last');
      return child;
    });

  if (breadcrumbItems.length) {
    breadcrumbItems[breadcrumbItems.length - 1].setAttribute('is-last', 'true');
  }

  if (breadcrumbItems.length > MAX_ITEM) {
    breadcrumbItems.forEach((breadcrumbItem, idx) => {
      if (idx > 0 && idx < breadcrumbItems.length - 1) {
        breadcrumbItem.setAttribute('is-collapsed', 'true');
      }

      if (idx === 1) {
        breadcrumbItem.setAttribute('is-expandable', 'true');
      }
    });
  }
}

export {
  expandItems,
  setupItems,
};
