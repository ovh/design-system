import { ODS_TIMEZONE, ODS_TIMEZONES } from '../constants/timezones';
import { OdsTimepickerController } from './controller'
import { OsdsTimepicker } from '../osds-timepicker';

class OdsTimepickerMock extends OsdsTimepicker {
  constructor(attribute: Partial<OsdsTimepicker>) {
    super();
    Object.assign(this, attribute)
  }

  checkSeconds = jest.fn;
}

describe('spec:ods-timepicker-controller', () => {
  let controller: OdsTimepickerController;
  let component: OsdsTimepicker;

  function setup(attributes: Partial<OsdsTimepicker> = {}) {
    component = new OdsTimepickerMock(attributes);
    controller = new OdsTimepickerController(component);
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:checkSeconds', () => {
      it('should change value seconds if not match ', () => {
        const valueWithSeconds = "11:11:11";
        const valueWithoutSeconds = "11:11";
        const valueWithSecondsAdded = "11:11:00";
        const input = document.createElement('osds-input');

        setup({ input });

        component.input.value = valueWithSeconds;
        component.withSeconds = false;
        controller.checkSeconds(component.withSeconds)
        expect(component.input.value).toEqual(valueWithoutSeconds);

        component.input.value = valueWithoutSeconds;
        component.withSeconds = true;
        controller.checkSeconds(component.withSeconds)
        expect(component.input.value).toEqual(valueWithSecondsAdded);
      });

      it('should do nothing if value and with seconds match', () => {
        const valueWithSeconds = "11:11:11";
        const valueWithoutSeconds = "11:11";
        const input = document.createElement('osds-input');

        setup({ input });

        component.input.value = valueWithSeconds;
        component.withSeconds = true;
        controller.checkSeconds(component.withSeconds)
        expect(component.input.value).toEqual(valueWithSeconds);

        component.input.value = valueWithoutSeconds;
        component.withSeconds = false;
        controller.checkSeconds(component.withSeconds)
        expect(component.input.value).toEqual(valueWithoutSeconds);
      })
    });

    describe('methods:handleTimezones', () => {
      it('should set timezonesList with all timezones', () => {
        setup();

        controller.handleTimezones();
        expect(component.timezonesList).toEqual(ODS_TIMEZONES);
      });

      it('should set timezonesList with specific timezones', () => {
        const timezonesArray = [ODS_TIMEZONE.UTC, ODS_TIMEZONE.UTC2]
        setup( { timezones : timezonesArray } );
        controller.handleTimezones();

        expect(component.timezonesList).toEqual(timezonesArray);
      });
    });

    describe('methods:handleCurrentTimezone', () => {
      it('should set currentTimezone if none', () => {
        setup();

        controller.handleCurrentTimezone()
        expect(component.currentTimezone).toBeTruthy();
      });
    });
  });
});
