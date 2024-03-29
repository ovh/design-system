// import { EventEmitter } from "@stencil/core";

// function handleClear(eventEmitter: EventEmitter<void>, isDisabled: boolean): undefined | void {
//   if (isDisabled) {
//     return;
//   }
//   eventEmitter.emit();
//   return undefined;
// }

async function handleKeySpace(event: KeyboardEvent, isDisabled: boolean, callback: () => Promise<void>): Promise<void> {
  event?.preventDefault?.();
  if(event.key === ' ' && !isDisabled) {
    await callback();
  }
}

// function handleOnInput(eventEmitter: EventEmitter<{ value?: string | number}>, isDisabled: boolean, internals: ElementInternals, inputEl?: HTMLInputElement): { value?: string | number, error: boolean } {
//   if (isDisabled) {
//     return;
//   }
//   inputEl?.value && internals.setFormValue(inputEl.value.toString());
//   eventEmitter.emit({ value: inputEl?.value });
//   return { value: inputEl?.value, error: !inputEl?.validity.valid ?? false }
// }

// function handleReset(eventEmitter: EventEmitter<void>, isDisabled: boolean, defaultValue?: string | number): string | number | undefined {
//   if (isDisabled) {
//     return;
//   }
//   eventEmitter.emit();
//   return defaultValue ?? undefined;
// }

// function handleToggleMask(eventEmitter: EventEmitter<void>, isDisabled: boolean, masked?: boolean): boolean {
//   if (isDisabled) {
//     return;
//   }
//   eventEmitter.emit();
//   return !masked;
// }

function isPassword(isMasked?: boolean): boolean {
  return isMasked !== undefined;
}

export {
  // handleClear,
  handleKeySpace,
  // handleOnInput,
  // handleToggleMask,
  // handleReset,
  isPassword,
};
