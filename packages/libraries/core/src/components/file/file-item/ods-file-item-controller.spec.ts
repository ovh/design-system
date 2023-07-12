import { OdsFileItemController } from './ods-file-item-controller';
import { OdsFileItemAttributes } from './ods-file-item-attributes';
import { OdsFileItem } from './ods-file-item';

const requiredAttributes: OdsFileItemAttributes = {
  name: 'test',
  size: 1000,
};

export class OdsFileItemMock implements OdsFileItem {
  size: number;
  name: string;
  progress?: number;
  error?: boolean;
  cancel: any;
  getSizeInKiloBytes = jest.fn();
  getContent = jest.fn();
  emitCancel = jest.fn();
  controller: OdsFileItemController = new OdsFileItemController(this);


  constructor(attributes: OdsFileItemAttributes) {
    this.size = attributes.size;
    this.name = attributes.name;
    this.progress = attributes?.progress;
    this.error = attributes?.error ?? false;
  }

 }

describe('OdsFileItemController', () => {
  function setup(attributes: Partial<OdsFileItemAttributes> = requiredAttributes) {
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
