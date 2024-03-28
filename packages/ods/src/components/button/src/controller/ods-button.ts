function handleClick(type: HTMLButtonElement['type'], form: HTMLFormElement | null): void {
  if (form) {
    if (type === 'submit') {
      return form.submit();
    }

    if (type === 'reset') {
      return form.reset();
    }
  }
}

export {
  handleClick,
};
