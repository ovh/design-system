import { Toaster, toast } from '../../src';

export default {
  component: Toaster,
  title: 'Tests rendering',
};

export const Default = () => (
  <>
    <Toaster duration={ Infinity } />

    <button
      id="trigger"
      onClick={ () => toast('Some notification') }>
      Trigger Toast
    </button>
  </>
);
