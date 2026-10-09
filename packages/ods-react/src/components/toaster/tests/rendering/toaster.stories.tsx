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

export const status = () => (
  <>
    <Toaster duration={ Infinity } />

    <button
      id="trigger-critical"
      onClick={ () => toast.critical('Critical notification') }>
      Trigger critical toast
    </button>

    <button
      id="trigger-accent"
      onClick={ () => toast.accent('Accent notification') }>
      Trigger accent toast
    </button>
  </>
);
