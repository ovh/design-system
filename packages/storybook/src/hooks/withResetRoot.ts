const resetRoot = () => {
  const storybookRoot = document.querySelector('#storybook-root');
  if (storybookRoot) {
    storybookRoot.innerHTML = '';
  }
};

const withResetRoot = (storyFn: any) => {
  resetRoot();
  return storyFn();
};

export {
  withResetRoot,
};
