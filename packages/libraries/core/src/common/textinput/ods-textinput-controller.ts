import { OdsComponentController } from '../../components/ods-component-controller';
import { OdsTextArea } from '../../components/textarea/public-api';
import { OdsTextInput } from './ods-textinput-controller-type';

// TODO : Replace `(this.component as OdsTextArea)` 
//        with `this.component` when osds-input ready

export class OdsTextInputController<T extends OdsTextInput> extends OdsComponentController<T> {

	constructor(component: T) {
		super(component);
	}

	onFocus(): void {
		(this.component as OdsTextArea).hasFocus = true;
		(this.component as OdsTextArea).emitFocus();
	}

	onBlur(): void {
		if (!this.component.disabled) {
			(this.component as OdsTextArea).hasFocus = false;
			(this.component as OdsTextArea).emitBlur();
		}
	}

	setFocus(): void {
		const el = (this.component as OdsTextArea).textInputEl;

		if (el && !this.component.disabled) {
			el.focus();
			this.onFocus();
		}
	}
}
