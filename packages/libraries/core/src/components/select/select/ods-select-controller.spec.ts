import { OdsSelect } from './ods-select';
import { OdsSelectController } from './ods-select-controller';
import { OdsSelectMock } from './ods-select-mock';

describe('spec:ods-select-controller', () => {
  let controller: OdsSelectController;
  let component: OdsSelect;

  function setup(attributes: Partial<OdsSelect> = {}) {
    component = { ...component, ...attributes };
    if (component.surface) {
        component.surface.opened = attributes?.opened ?? false;
    }
    controller = new OdsSelectController(component);
  }

  beforeEach(() => {
    component = new OdsSelectMock();
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeDefined();
  });

  describe('methods', () => {
    describe('methods:openSurface', () => {
        it('should open surface with default value', () => {
            setup();
            controller.openSurface();
            expect(component.opened).toBe(true);
        });

        it('should open surface', () => {
            setup({
                opened: false,
            });
            controller.openSurface();
            expect(component.opened).toBe(true);
        });

        it('should close surface', () => {
            setup({
                opened: true,
            });
            controller.closeSurface();
            expect(component.opened).toBe(false);
        });
    });
  });
});
