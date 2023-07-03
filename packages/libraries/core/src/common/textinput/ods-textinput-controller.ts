// import { OdsComponentController } from '../../components/ods-component-controller';
// import { OdsTextArea } from '../../components/textarea/public-api';
// import { OdsTextInput } from './ods-textinput-controller-type';

// Not used anymore after textarea move to new architecture
// Kept only for historic purpose until removed

export class OdsTextInputController {
  private component: any;

	constructor(component: any) {
    this.component = component
	}

	onFocus(): void {
		this.component.hasFocus = true;
		this.component.emitFocus();
	}

	onBlur(): void {
		if (!this.component.disabled) {
			this.component.hasFocus = false;
			this.component.emitBlur();
		}
	}

	setFocus(): void {
		const el = this.component.textInputEl;

		if (el && !this.component.disabled) {
			el.focus();
			this.onFocus();
		}
	}
}
