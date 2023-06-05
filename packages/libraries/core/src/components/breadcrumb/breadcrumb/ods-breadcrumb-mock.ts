import { OdsBreadcrumb } from './ods-breadcrumb';
import { OdsBreadcrumbController } from './ods-breadcrumb-controller';
import { OdsBreadcrumbEvents } from './ods-breadcrumb-events';
import { OdsBreadcrumbMethods } from './ods-breadcrumb-methods';

export class OdsBreadcrumbMock implements OdsBreadcrumb<OdsBreadcrumbMethods, OdsBreadcrumbEvents> {
  el!: HTMLElement;
  contrasted?: boolean;
  controller: OdsBreadcrumbController = jest.fn() as unknown as OdsBreadcrumbController;
  items = [];

  componentWillLoad = jest.fn();
  onBreadcrumbItemCollapsedClick = jest.fn();
}
