import { OdsFormController } from './controller';
import { OsdsForm } from '../osds-form';

class OdsFormMock extends OsdsForm {
  constructor(attribute: Partial<OsdsForm>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-form-controller', () => {
  let controller: OdsFormController;
  let component: OdsFormMock;

  function setup(attributes: Partial<OdsFormMock> = {}): void {
    component = new OdsFormMock(attributes);
    controller = new OdsFormController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should parse string initialValues', () => {
    setup({ initialValues: '{"firstName": "Jean", "test": ""}' });
    const initialValues = controller.getInitialValues();
    expect(initialValues).toBeInstanceOf(Object);
    expect(initialValues.firstName).toBe('Jean');
    expect(initialValues.test).toBe('');
  });

  it('should parse initialValues', () => {
    setup({ initialValues: { 'firstName': 'Jean', 'test': '' } });
    const initialValues = controller.getInitialValues();
    expect(initialValues).toBeInstanceOf(Object);
    expect(initialValues.firstName).toBe('Jean');
    expect(initialValues.test).toBe('');
  });
});
