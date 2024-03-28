import { handleClick } from '../../src/controller/ods-button';

describe('ods-button controller', () => {
  const dummyForm = {
    reset: jest.fn(),
    submit: jest.fn(),
  };

  beforeEach(jest.clearAllMocks);

  describe('handleClick', () => {
    it('should do nothing if no form', async() => {
      handleClick('reset', null);

      expect(dummyForm.reset).not.toHaveBeenCalled();

      handleClick('submit', null);

      expect(dummyForm.submit).not.toHaveBeenCalled();
    });

    it('should submit the form', async() => {
      // @ts-ignore for test purpose
      handleClick('submit', dummyForm);

      expect(dummyForm.submit).toHaveBeenCalledTimes(1);
    });

    it('should reset the form', async() => {
      // @ts-ignore for test purpose
      handleClick('reset', dummyForm);

      expect(dummyForm.reset).toHaveBeenCalledTimes(1);
    });
  });
});
