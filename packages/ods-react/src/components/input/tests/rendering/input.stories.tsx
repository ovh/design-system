import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../button/src';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../../form-field/src';
import { Input } from '../../src';

export default {
  component: Input,
  title: 'Tests rendering',
};

export const ClearableDefaultValue = () => (
  <Input
    clearable
    defaultValue="Some value"
    locale="en" />
);

export const ClearableEmpty = () => (
  <Input
    clearable
    locale="en" />
);

export const ClearableValue = () => (
  <Input
    clearable
    locale="en"
    value="Some value" />
);

export const CustomStyle = () => (
  <Input
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

// The geometry stories below back the pixel-parity assertions in input.e2e.ts. There is no
// visual regression suite in this repo, so they are the only guard against the in-field
// spacing drifting when the padding moves between the container and the parts.
export const GeometryBare = () => (
  <Input
    data-testid="geometry-bare"
    defaultValue="Some value" />
);

export const GeometryClearable = () => (
  <Input
    clearable
    data-testid="geometry-clearable"
    defaultValue="Some value"
    locale="en" />
);

export const GeometryLoading = () => (
  <Input
    data-testid="geometry-loading"
    defaultValue="Some value"
    loading
    locale="en" />
);

// `className` is the only prop that reaches the container, so it is the only way to constrain
// the field the way real consumers do (PaginationPageSelector sets `width: 45px` this way).
// A `style` prop would land on the <input> instead and the container would simply grow.
export const GeometryConstrained = () => (
  <>
    <style>{ '.geometry-constrained { width: 100px; }' }</style>

    <Input
      className="geometry-constrained"
      clearable
      data-testid="geometry-constrained"
      defaultValue="Some value"
      locale="en" />
  </>
);

export const Render = () => (
  <Input data-testid="render" />
);

export const SlotsAriaDescribedBy = () => (
  <>
    <FormField>
      <FormFieldLabel>
        Weight
      </FormFieldLabel>

      <Input
        aria-describedby="consumer-description"
        data-testid="slots-aria-described-by"
        defaultValue="42"
        endContent="kg" />

      <FormFieldHelper>
        Help text
      </FormFieldHelper>
    </FormField>

    {/* The referenced element has to exist, or the fixture models an invalid aria reference. */}
    <p id="consumer-description">
      Consumer description
    </p>
  </>
);

export const SlotsInForm = () => (
  <form data-testid="slots-form">
    <Input
      data-testid="slots-in-form"
      defaultValue="42"
      endContent="kg"
      name="weight"
      startContent="~" />
  </form>
);

export const SlotsInFormField = () => (
  <FormField invalid>
    <FormFieldLabel>
      Weight
    </FormFieldLabel>

    <Input
      data-testid="slots-in-form-field"
      defaultValue="42"
      endContent="kg" />

    <FormFieldHelper>
      Help text
    </FormFieldHelper>

    <FormFieldError>
      Error message
    </FormFieldError>
  </FormField>
);

export const SlotsText = () => (
  <Input
    clearable
    data-testid="slots-text"
    defaultValue="example"
    endContent=".com"
    locale="en"
    startContent="https://" />
);

export const SlotsWithButton = () => (
  <Input
    clearable
    data-testid="slots-with-button"
    defaultValue="42"
    endContent={ (
      <Button
        aria-label="Copy value"
        size={ BUTTON_SIZE.xs }
        variant={ BUTTON_VARIANT.ghost }>
        C
      </Button>
    ) }
    locale="en" />
);

// An end adornment holding a control lines up with the built-in action buttons (4px from the
// border) rather than with the text inset (8px). A text adornment keeps the text inset.
export const GeometrySlotButton = () => (
  <Input
    data-testid="geometry-slot-button"
    defaultValue="42"
    endContent={ (
      <Button
        aria-label="Copy value"
        size={ BUTTON_SIZE.xs }
        variant={ BUTTON_VARIANT.ghost }>
        C
      </Button>
    ) } />
);

export const GeometrySlotText = () => (
  <Input
    data-testid="geometry-slot-text"
    defaultValue="42"
    endContent="kg" />
);

export const GeometrySlotTextClearable = () => (
  <Input
    clearable
    data-testid="geometry-slot-text-clearable"
    defaultValue="42"
    endContent="kg"
    locale="en" />
);

// Mirrors GeometrySlotButton / GeometrySlotText on the leading side.
export const GeometrySlotStartButton = () => (
  <Input
    data-testid="geometry-slot-start-button"
    defaultValue="42"
    startContent={ (
      <Button
        aria-label="Search"
        size={ BUTTON_SIZE.xs }
        variant={ BUTTON_VARIANT.ghost }>
        S
      </Button>
    ) } />
);

export const GeometrySlotStartText = () => (
  <Input
    data-testid="geometry-slot-start-text"
    defaultValue="42"
    startContent="https://" />
);

// Each side is decided on its own: a control at the start pulls that edge in, while a text
// adornment at the end keeps the text inset. Without a fixture the two sides could silently
// share a single decision.
export const GeometrySlotMixed = () => (
  <Input
    data-testid="geometry-slot-mixed"
    defaultValue="42"
    endContent="kg"
    startContent={ (
      <Button
        aria-label="Search"
        size={ BUTTON_SIZE.xs }
        variant={ BUTTON_VARIANT.ghost }>
        S
      </Button>
    ) } />
);

// Same mix, but with the clear button in play: the end inset is then owned by the actions.
export const GeometrySlotMixedClearable = () => (
  <Input
    clearable
    data-testid="geometry-slot-mixed-clearable"
    defaultValue="42"
    endContent="kg"
    locale="en"
    startContent={ (
      <Button
        aria-label="Search"
        size={ BUTTON_SIZE.xs }
        variant={ BUTTON_VARIANT.ghost }>
        S
      </Button>
    ) } />
);
