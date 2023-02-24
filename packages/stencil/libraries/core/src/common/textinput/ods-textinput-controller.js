import { OdsComponentController } from '../../components/ods-component-controller';
// TODO : Replace `(this.component as OdsTextArea)` 
//        with `this.component` when osds-input ready
export class OdsTextInputController extends OdsComponentController {
  constructor(component) {
    super(component);
  }
  onFocus() {
    this.component.hasFocus = true;
    this.component.emitFocus();
  }
  onBlur() {
    if (!this.component.disabled) {
      this.component.hasFocus = false;
      this.component.emitBlur();
    }
  }
  setFocus() {
    const el = this.component.textInputEl;
    if (el && !this.component.disabled) {
      el.focus();
      this.onFocus();
    }
  }
}
