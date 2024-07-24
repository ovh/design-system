import { type OdsTagRemoveEventDetail } from '../interfaces/events';

function emit(tag: HTMLElement, isDisabled: boolean, eventEmitter: { emit: (data: OdsTagRemoveEventDetail) => CustomEvent }): void {
  if (!isDisabled) {
    eventEmitter.emit({
      id: tag.id,
    });
  }
}

function handleClick(tag: HTMLElement, isDisabled: boolean, eventEmitter: { emit: (data: OdsTagRemoveEventDetail) => CustomEvent }): void {
  emit(tag, isDisabled, eventEmitter);
}

function handleKeyDown(event: KeyboardEvent): void {
  // This prevents Space key to scroll the window down
  if (event.key === ' ') {
    event.preventDefault();
  }
}

function handleKeyUp(event: KeyboardEvent, tag: HTMLElement, isDisabled: boolean, eventEmitter: { emit: (data: OdsTagRemoveEventDetail) => CustomEvent }): void {
  switch (event.key) {
    case ' ':
    case 'Enter':
      emit(tag, isDisabled, eventEmitter);
      break;
    default:
      break;
  }
}

export {
  handleClick,
  handleKeyDown,
  handleKeyUp,
};
