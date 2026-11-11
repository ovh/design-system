import { Badge, Button } from '@ovhcloud/ods-react';

// A name of the file declared again closer to the tag is not the ODS component: its props are its own.
export function Inner() {
  const Button = (p: { variant: string, color: string }) => null;
  return <Button variant="ghost" color="primary" />;
}

export const Param = ({ Badge }: { Badge: (p: { color: string }) => null }) => <Badge color="primary" />;

export const Renamed = ({ Card: Badge }: { Card: (p: { color: string }) => null }) => <Badge color="primary" />;

export function Hoisted() {
  return <Button variant="ghost" />;
  function Button(p: { variant: string }) {
    return null;
  }
}

export class Panel {
  render() {
    class Badge {}
    return <Badge color="primary" />;
  }
}

export const Loop = (items: Array<(p: { color: string }) => null>) => items.map((Badge) => <Badge color="primary" />);

// The ODS components, next to them and in a scope that declares other names.
export const Real = ({ label }: { label: string }) => {
  const other = label;
  return <Button emphasis="low">{ other }<Badge status="accent" /></Button>;
};
