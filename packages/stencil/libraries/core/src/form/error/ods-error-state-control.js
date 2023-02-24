export class OdsErrorStateControl {
  isErrorState(control) {
    return !!(control && !control.valid);
  }
}
