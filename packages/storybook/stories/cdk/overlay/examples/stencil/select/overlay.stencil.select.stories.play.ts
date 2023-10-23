export const play = async() => {
  await customElements.whenDefined('ocdk-surface');
};
