import { useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { Modal, ModalBody, ModalContent } from '../../modal/src';
import { Datepicker, DatepickerContent, DatepickerControl, type DatepickerView } from '.';
import style from './dev.module.css';

export default {
  component: Datepicker,
  title: 'Datepicker dev',
};

export const Clearable = () => (
  <Datepicker>
    <DatepickerControl clearable />

    <DatepickerContent />
  </Datepicker>
);

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<DatepickerView>('year');

  return (
    <>
      <button onClick={ () => setIsOpen((o) => !o) }>
        Toggle datepicker
      </button>

      <button onClick={ () => setView((v) => v === 'year' ? 'month' : 'day') }>
        Toggle view
      </button>

      <Datepicker open={ isOpen }
                  locale="fr"
                  view={ view }>
        <DatepickerControl />

        <DatepickerContent />
      </Datepicker>
    </>
  );
}

export const CustomCSS = () => (
  <Datepicker className={ style['custom-datepicker'] }>
    <DatepickerControl className={ style['custom-datepicker-control'] } />

    <DatepickerContent className={ style['custom-datepicker-content'] } />
  </Datepicker>
);

export const DateFormatter = () => (
  <Datepicker open
              dateFormatter={ ({ date }) => `${date.getFullYear()}` }>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const Default = () => (
  <Datepicker>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const Disabled = () => (
  <>
    <Datepicker disabled>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>

    <Datepicker disabled open>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  </>
);

export const DisabledDays = () => (
  <Datepicker
    disabledDates={ [new Date(Date.now() - 86400000), new Date(), new Date(Date.now() + 86400000)] }
    open>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const DisabledWeekDays = () => (
  <Datepicker
    disabledWeekDays={ [0, 3] }
    open>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const InFormField = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          My datepicker:
        </FormFieldLabel>

        <Datepicker>
          <DatepickerControl />

          <DatepickerContent />
        </Datepicker>

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </>
  );
};

export const Invalid = () => (
  <Datepicker invalid>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const InModal = () => (
  <Modal open>
    <ModalContent>
      <ModalBody>
        <Datepicker>
          <DatepickerControl />

          <DatepickerContent createPortal={ false } />
        </Datepicker>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const Loading = () => (
  <Datepicker>
    <DatepickerControl loading />

    <DatepickerContent />
  </Datepicker>
);

export const Locales = () => {
  const [locale, setLocale] = useState('fr');

  return (
    <>
      <select
        onChange={ (e) => setLocale(e.target.value) }
        value={ locale }>
        <option value="de">DE</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
        <option value="it">IT</option>
        <option value="nl">NL</option>
        <option value="pl">PL</option>
        <option value="pt">PT</option>
      </select>

      <Datepicker locale={ locale } open>
        <DatepickerControl />

        <DatepickerContent />
      </Datepicker>
    </>
  );
};

export const Max = () => (
  <Datepicker
    max={ new Date(Date.now() + (86400000 * 10)) }
    open>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const MaxView = () => (
  <div style={{ display: 'flex', gap: '100px' }}>
    <Datepicker
      maxView="day"
      open>
      <p>Max view DAY</p>

      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>

    <Datepicker
      maxView="month"
      open>
      <p>Max view MONTH</p>

      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  </div>
);

export const Min = () => (
  <Datepicker
    min={ new Date(Date.now() - (86400000 * 10)) }
    open>
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const MinView = () => (
  <div style={{ display: 'flex', gap: '100px' }}>
    <Datepicker
      minView="month"
      open>
      <p>Min view MONTH</p>

      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>

    <Datepicker
      minView="year"
      open>
      <p>Min view YEAR</p>

      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  </div>
);

export const Placeholder = () => (
  <Datepicker placeholder="Pick a date">
    <DatepickerControl />

    <DatepickerContent />
  </Datepicker>
);

export const Readonly = () => (
  <>
    <Datepicker readOnly>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>

    <Datepicker readOnly open>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  </>
);

export const Value = () => (
  <>
    <p>Value as Date</p>

    <Datepicker value={ new Date() }>
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>

    <p>Value as string</p>

    <Datepicker value="2025-05-07" locale="fr">
      <DatepickerControl />

      <DatepickerContent />
    </Datepicker>
  </>
);
