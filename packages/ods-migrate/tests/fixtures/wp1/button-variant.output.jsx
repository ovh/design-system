import { Button } from '@ovhcloud/ods-react';

export const Actions = ({ variant }) => (
  <>
    <Button emphasis="low">Cancel</Button>
    <Button>Edit</Button>
    <Button emphasis="high">Save</Button>
    <Button emphasis={ variant }>Passed</Button>
  </>
);
