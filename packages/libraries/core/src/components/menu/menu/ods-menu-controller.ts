import { OdsComponentController } from '../../ods-component-controller';
import { OdsMenu } from './ods-menu';
import { OdsLogger } from '../../../logger/ods-logger';

/**
 * common controller logic for menu component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsMenuController extends OdsComponentController<OdsMenu> {
  private readonly logger = new OdsLogger('OdsMenuController');

  constructor(component: OdsMenu) {
    super(component);
  }

  afterInit(): void {
    this.component.propagateDisabledToChild(this.component.disabled);
  }

  propagateDisabledToChild(disabled: boolean | undefined): void {
    if (disabled) {
      this.logger.log('Propagate Disabled attribute on children');
      this.component.title?.setAttribute('disabled', 'disabled');
    } else {
      this.logger.log('Remove Disabled attribute on children');
      this.component.title?.removeAttribute('disabled');
    }
  }

  handleTriggerClick(): void {
    this.logger.log('Click on trigger');

    if (!this.component.surface || this.component.disabled) {
      return;
    }
    this.component.surface.opened = !this.component.surface.opened;
  }

  handleTriggerKey(event: KeyboardEvent): void {
    if(event.key === " " || event.key === "Enter") {
      this.logger.log('Key on trigger');

      if (!this.component.surface || this.component.disabled) {
        return;
      }
      this.component.surface.opened = !this.component.surface.opened;
    }

    if(event.key === "Escape") {
      this.logger.log('EscapeKey on trigger');
      if(this.component.surface) {
        this.component.surface.opened = false;
      }
    }
  }

  handleSurfaceKey(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      this.logger.log('EscapeKey in surface');
      if(this.component.surface) {
        this.component.surface.opened = false;
      }
    }
  }

  checkForClickOutside(event: any): void {
    if (this.component.el.contains(event.target) || this.component.surface === undefined || !this.component.surface.opened) {
      return;
    } else {
      this.logger.log('Click outside component while he is opened');
      this.component.surface.opened = false;
    }
  }

  syncReferences(): void {
    if (this.component.surface && this.component.anchor) {
      this.component.surface.setAnchorElement(this.component.anchor);
      this.component.surface.setAnchorMargin( {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      });
    }
  }
}
