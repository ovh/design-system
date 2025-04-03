import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, Watch, h } from '@stencil/core';
import { ODS_DRAWER_POSITION, type OdsDrawerPosition } from '../../constant/drawer-position';

@Component({
  shadow: true,
  styleUrl: 'ods-drawer.scss',
  tag: 'ods-drawer',
})
export class OdsDrawer {
  private drawerDialog?: HTMLDialogElement;

  @Element() el!: HTMLElement;

  @Prop({ mutable: true, reflect: true }) public isOpen: boolean = false;
  @Prop({ reflect: true }) public position: OdsDrawerPosition = ODS_DRAWER_POSITION.left;

  @Event() odsClose!: EventEmitter<void>;
  @Event() odsOpen!: EventEmitter<void>;

  @Method()
  public async close(): Promise<void> {
    if (this.drawerDialog) {
      const closeAnimationClassName = `ods-drawer__dialog--close-animation--${this.position}`;
      this.drawerDialog.classList.add(closeAnimationClassName);

      const onAnimationEnd = (): void => {
        this.isOpen = false;
        this.odsClose.emit();
        this.drawerDialog?.classList.remove(closeAnimationClassName);
        this.drawerDialog?.removeEventListener('animationend', onAnimationEnd);
      };

      this.drawerDialog.addEventListener('animationend', onAnimationEnd);
    } else {
      this.isOpen = false;
      this.odsClose.emit();
    }
  }

  @Method()
  public async open(): Promise<void> {
    this.isOpen = true;
    this.odsOpen.emit();
  }

  @Watch('isOpen')
  handleOpenState(): void {
    if (!this.drawerDialog) {
      return;
    }

    if (this.isOpen) {
      return this.drawerDialog.show?.();
    }

    return this.drawerDialog.close?.();
  }

  @Listen('keydown', { target: 'window' })
  onKeyDown(event: KeyboardEvent): void {
    if(event.key === 'Escape' && this.isOpen) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.close();
    }
  }

  componentDidLoad(): void {
    if (this.isOpen) {
      this.drawerDialog?.show?.();
    }
  }

  disconnectedCallback(): void {
    this.drawerDialog?.close();
    this.isOpen = false;
  }

  render(): FunctionalComponent {
    return (
      <Host class={{
        'ods-drawer': true,
        'ods-drawer--open': this.isOpen,
      }}
      aria-expanded={ this.isOpen }>
        <dialog
          class={ `ods-drawer__dialog ods-drawer__dialog--${this.position}` }
          ref={ (el) => this.drawerDialog = el as HTMLDialogElement }
          part="drawer"
          tabindex={ -1 }>
          <slot></slot>
        </dialog>
      </Host>
    );
  }
}
