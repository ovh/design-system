import { Select, SelectContent, SelectControl } from '../../src';

export default {
  component: Select,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Select
    data-testid="custom-style"
    items={[]}
    style={{ height: '42px' }}>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const render = () => (
  <Select
    data-testid="render"
    items={[]}>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const DefaultWidth = () => (
  <>
    <style>{ '.probe-wide { width: 400px; }' }</style>
    <div data-testid="default"><Select className="probe" items={ [] }><SelectControl /><SelectContent /></Select></div>
    <div data-testid="narrow" style={ { width: '200px' } }><Select className="probe" items={ [] }><SelectControl /><SelectContent /></Select></div>
    <div data-testid="override"><Select className="probe probe-wide" items={ [] }><SelectControl /><SelectContent /></Select></div>
  </>
);
