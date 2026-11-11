import { Button, Card } from '@ovhcloud/ods-react';
import { MyButton, PromoCard, SolidButton } from './kit';

export const App = () => (
  <>
    <PromoCard status="neutral">plain</PromoCard>
    <MyButton emphasis="medium">Cancel</MyButton>
    <SolidButton emphasis="medium" status="brand">Back</SolidButton>
    <Card>plain</Card>
    <Button>Close</Button>
  </>
);
