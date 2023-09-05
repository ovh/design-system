import { Ods } from './ods';

describe('spec:ods', () => {
  let odsInstance: Ods;

  function setup() {
    odsInstance = Ods.instance();
  }

  it('should initialize', () => {
    setup();
    expect(odsInstance).toBeTruthy();
  });

  describe('methods', () => {
    // todo
  });
});
