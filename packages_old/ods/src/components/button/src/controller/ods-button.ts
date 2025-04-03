function handleClick(type: HTMLButtonElement['type'], form: HTMLFormElement | null): void {
  if (form) {
    if (type === 'submit') {
      return form.requestSubmit();
    }

    if (type === 'reset') {
      return form.reset();
    }
  }
}

export {
  handleClick,
};
