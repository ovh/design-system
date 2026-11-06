import { BUTTON_EMPHASIS, BUTTON_EMPHASES, Button, type ButtonEmphasis } from '@ovhcloud/ods-react';

const TONES: Record<'main' | 'side', ButtonEmphasis> = { main: 'high', side: 'low' };

export const Actions = ({ isMain, variant }: { isMain: boolean, variant?: ButtonEmphasis }) => (
  <>
    <Button emphasis="high">Delete</Button>
    <Button>Edit</Button>
    <Button emphasis={ BUTTON_EMPHASIS.low }>Cancel</Button>
    <Button>Back</Button>
    <Button emphasis={ isMain ? BUTTON_EMPHASIS.high : BUTTON_EMPHASIS.low }>Toggle</Button>
    <Button emphasis={ variant }>Passed</Button>
    <Button emphasis={ BUTTON_EMPHASIS.high }>Save</Button>
    <Button status="critical" emphasis="low">Remove</Button>
    <Button>Multi-line</Button>
    { BUTTON_EMPHASES.map((item) => <Button key={ item } emphasis={ item }>{ item }</Button>) }
  </>
);

export { TONES };
