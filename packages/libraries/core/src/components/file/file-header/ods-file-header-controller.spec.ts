import { OdsFileHeaderController } from './ods-file-header-controller';
import { OdsFileHeaderAttributes } from './ods-file-header-attributes';
import { OdsFileHeader } from './ods-file-header';

export class OdsFileHeaderMock implements OdsFileHeader {
  controller: OdsFileHeaderController = new OdsFileHeaderController(this);
  emitFiles= jest.fn()
  filesSelected: any;
  handleFilesSelected = jest.fn()
  isSuccessful = false;
  errorMessage = '';
  acceptedTypes = '';

  constructor(attributes: OdsFileHeaderAttributes) {
    this.isSuccessful = attributes.isSuccessful ?? false;
    this.errorMessage = attributes.errorMessage ?? ''
    this.acceptedTypes = attributes.acceptedTypes ?? ''
  }
 }

describe('OdsFileHeaderController', () => {
  function setup(attributes: Partial<OdsFileHeaderAttributes> = {}) {
    const component = new OdsFileHeaderMock(attributes);
    const controller = new OdsFileHeaderController(component);

    return { component, controller };
  }

  describe('validateAttributes', () => {
    it('should throw an error if isSuccessful is not a boolean', () => {
      const { controller } = setup({ isSuccessful: 'true' as any });
      expect(() => controller.validateAttributes()).toThrowError('ods-file-header: isSuccessful attribute must be a boolean');
    });

    it('should throw an error if errorMessage is not a string', () => {
      const { controller } = setup({ errorMessage: true as any });
      expect(() => controller.validateAttributes()).toThrowError('ods-file-header: errorMessage attribute must be a string');
    });

    it('should throw an error if acceptedTypes is not a string', () => {
      const { controller } = setup({ acceptedTypes: true as any });
      expect(() => controller.validateAttributes()).toThrowError('ods-file-header: acceptedTypes attribute must be a string');
    });
  });

  describe('methods', () => {
    describe('getFilesFromSelection', () => {
      it('should emit files', () => {
        const { controller, component } = setup();
        const event = {
          target: {
            files: ['file1', 'file2'],
          },
        };

        controller.getFilesFromSelection(event as any);
        expect(component.emitFiles).toHaveBeenCalledWith(['file1', 'file2']);
      });
    });

    describe('acceptedExtensions', () => {
      it.each([
        [undefined, ''],
        ['image/png,image/jpeg,.docx', 'png,jpeg,docx'],
        ['image/png, image/jpeg, .docx', 'png, jpeg, docx'],
        ['image/png, image/jpeg, .docx, .doc, application/pdf', 'png, jpeg, docx, doc, pdf'],
      ])('should return accepted extensions', (acceptedTypes, extension) => {
        const { controller } = setup({ acceptedTypes });
        expect(controller.acceptedExtensions()).toBe(extension);
      });
    })
  })
});
