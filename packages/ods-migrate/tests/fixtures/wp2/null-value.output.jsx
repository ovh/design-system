import { Button } from '@ovhcloud/ods-react';
export const A = ({ c }) => <Button /* TODO(ods-v20): <Button color="information"> has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical (brand is the default), and show the status with a Badge or a Message next to it */ color={c ? 'information' : c}>x</Button>;
