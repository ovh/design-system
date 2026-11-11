import { Button, Card } from '@ovhcloud/ods-react';
import { MyButton, PromoCard, SolidButton } from './kit';

export const App = () => (
  <>
    <PromoCard color="neutral">plain</PromoCard>
    <MyButton variant="outline">Cancel</MyButton>
    <SolidButton variant="outline" color="primary">Back</SolidButton>
    <Card color="neutral">plain</Card>
    <Button variant="outline" color="primary">Close</Button>
  </>
);
