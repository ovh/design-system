function debounce<F extends(...args: Parameters<F>) => ReturnType<F>>(callback: F, waitFor: number): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), waitFor);
  };
}

export {
  debounce,
};
