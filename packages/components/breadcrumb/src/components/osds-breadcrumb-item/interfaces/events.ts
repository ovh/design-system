import type { EventEmitter } from '@stencil/core';
import type { OdsBreadcrumbAttributeItem } from '../../osds-breadcrumb/public-api';

interface OdsBreadcrumbItemEvent {
  /**
   * Event triggered on collapsed item click
   */
  odsBreadcrumbItemCollapsedClick: EventEmitter<void>;
  /**
   * Event triggered item click
   */
  odsBreadcrumbItemClick: EventEmitter<OdsBreadcrumbAttributeItem & { event: MouseEvent }>;
}

export {
  OdsBreadcrumbItemEvent,
};
