import { BUTTON_COLOR, BUTTON_VARIANT, BUTTON_VARIANTS, Button, type ButtonVariant } from '@ovhcloud/ods-react';

const TONES: Record<'main' | 'side', ButtonVariant> = { main: 'default', side: 'ghost' };

export const Actions = ({ isMain, variant }: { isMain: boolean, variant?: ButtonVariant }) => (
  <>
    <Button variant="default">Delete</Button>
    <Button variant="outline">Edit</Button>
    <Button variant={ BUTTON_VARIANT.ghost }>Cancel</Button>
    <Button variant={ BUTTON_VARIANT['outline'] }>Back</Button>
    <Button variant={ isMain ? BUTTON_VARIANT.default : BUTTON_VARIANT.ghost }>Toggle</Button>
    <Button variant={ variant }>Passed</Button>
    <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.default }>Save</Button>
    <Button color="critical" variant="ghost">Remove</Button>
    <Button
      color="primary"
      variant="outline">Multi-line</Button>
    { BUTTON_VARIANTS.map((item) => <Button key={ item } variant={ item }>{ item }</Button>) }
  </>
);

export { TONES };
