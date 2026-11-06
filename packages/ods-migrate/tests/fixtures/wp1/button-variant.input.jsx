import { Button } from '@ovhcloud/ods-react';

export const Actions = ({ variant }) => (
  <>
    <Button variant="ghost">Cancel</Button>
    <Button variant="outline">Edit</Button>
    <Button color="primary" variant="default">Save</Button>
    <Button variant={ variant }>Passed</Button>
  </>
);
