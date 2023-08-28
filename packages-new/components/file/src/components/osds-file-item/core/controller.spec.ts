import { OdsFileItemAttribute } from '../interfaces/attributes';
import { OsdsFileItem } from '../osds-file-item';
import { OdsFileItemController } from './controller';

const requiredAttributes: OdsFileItemAttribute = {
  name: 'test',
  size: 1000,
};

class OdsFileItemMock extends OsdsFileItem {
  constructor(attribute: Partial<OsdsFileItem>) {
    super();
    Object.assign(this, attribute)
  }
  getSizeInKiloBytes = jest.fn();
  getContent = jest.fn();
  emitCancel = jest.fn();
}

describe('OdsFileItemController', () => {
  function setup(attributes: Partial<OdsFileItemAttribute>) {
    const component = new OdsFileItemMock({
      ...requiredAttributes,
      ...attributes,
    });
    const controller = new OdsFileItemController(component);

    return { component, controller };
  }

  describe('validateAttributes', () => {
    it('should throw an error if name is not defined', () => {
      const { controller } = setup({ name: undefined as any });
      expect(() => controller.validateAttributes()).toThrowError('ods-file-item: name attribute is required');
    });
    it('should throw an error if size is not defined', () => {
      const { controller } = setup({ size: undefined as any });
      expect(() => controller.validateAttributes()).toThrowError('ods-file-item: size attribute is required');
    });
  });

  describe('methods', () => {
    describe('getSizeInKiloBytes', () => {
      it('should return the size in kilo bytes', () => {
        const { controller } = setup();
        expect(controller.getSizeInKiloBytes(1000)).toBe(1);
        expect(controller.getSizeInKiloBytes(1500)).toBe(2);
        expect(controller.getSizeInKiloBytes(2000)).toBe(2);
      });
    });
  })
});
