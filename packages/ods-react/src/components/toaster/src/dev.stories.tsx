import { useRef, useState } from 'react';
import { ICON_NAME } from '../../icon/src';
import { TOASTER_POSITION, Toaster, toast } from '.';
import style from './dev.module.css';

export default {
  component: Toaster,
  title: 'Toaster dev',
};

export const Colors = () => (
  <>
    <Toaster
      duration={ Infinity }
      max={ Infinity } />

    <button onClick={ () => toast('Default') }>
      Default toast
    </button>
    <button onClick={ () => toast.critical('Critical') }>
      Critical toast
    </button>
    <button onClick={ () => toast.information('Information') }>
      Information toast
    </button>
    <button onClick={ () => toast.neutral('Neutral') }>
      Neutral toast
    </button>
    <button onClick={ () => toast.primary('Primary') }>
      Primary toast
    </button>
    <button onClick={ () => toast.success('Success') }>
      Success toast
    </button>
    <button onClick={ () => toast.warning('Warning') }>
      Warning toast
    </button>
  </>
);

export const Controlled = () => {
  const [toastIds, setToastIds] = useState<string[]>([]);

  function addToast() {
    const id = toast.information(`Toast number ${toastIds.length + 1}`);

    setToastIds((ids) => ids.concat([id]));
  }

  function removeOldestToast() {
    toast.remove(toastIds[0]);

    setToastIds((ids) => {
      ids.shift();
      return [...ids];
    });
  }

  return (
    <>
      <Toaster />

      <button onClick={ addToast }>
        Add one toast
      </button>

      <br />

      <button onClick={ removeOldestToast }>
        Remove oldest toast
      </button>
    </>
  );
};

export const CustomStyle = () => (
  <>
    <Toaster />

    <button onClick={ () => toast.information('Icon toast', {
      className: style['custom-toast']
    })}>
      Trigger custom toast
    </button>
  </>
);

export const Default = () => (
  <>
    <Toaster />

    <button onClick={ () => toast(`Toast ${(new Date()).getMilliseconds()}`) }>
      Trigger some toast
    </button>
  </>
);

export const Dismissible = () => (
  <>
    <Toaster id="dismissible" position={ TOASTER_POSITION.topEnd } />
    <Toaster id="non-dismissible" dismissible={ false } position={ TOASTER_POSITION.bottomEnd } />

    <button onClick={ () => toast.information('Global dismissible', { toasterId: 'dismissible' }) }>
      Global dismissible toast
    </button>

    <button onClick={ () => toast.information('Global non-dismissible', { toasterId: 'non-dismissible' }) }>
      Global non-dismissible toast
    </button>

    <br />

    <button onClick={ () => toast.information('Local non-dismissible', { dismissible: false, toasterId: 'dismissible' }) }>
      Local non-dismissible toast
    </button>

    <button onClick={ () => toast.information('Local dismissible', { dismissible: true, toasterId: 'non-dismissible' }) }>
      Local dismissible toast
    </button>
  </>
);

export const Duration = () => (
  <>
    <Toaster id="three-seconds" position={ TOASTER_POSITION.topEnd } />
    <Toaster id="infinite" duration={ Infinity } position={ TOASTER_POSITION.bottomEnd } />

    <button onClick={ () => toast.information('Global three seconds', { toasterId: 'three-seconds' }) }>
      Global three seconds toast
    </button>

    <button onClick={ () => toast.information('Global infinite', { toasterId: 'infinite' }) }>
      Global infinite toast
    </button>

    <br />

    <button onClick={ () => toast.information('Local infinite', { duration: Infinity, toasterId: 'three-seconds' }) }>
      Local infinite toast
    </button>

    <button onClick={ () => toast.information('Local three seconds', { duration: 3000, toasterId: 'infinite' }) }>
      Local three seconds toast
    </button>
  </>
);

export const Icon = () => (
  <>
    <Toaster />

    <button onClick={ () => toast.information('Icon toast', { icon: ICON_NAME.circleInfo }) }>
      Trigger icon toast
    </button>
  </>
);

export const Positions = () => (
  <>
    <Toaster id="top-start" position={ TOASTER_POSITION.topStart } />
    <Toaster id="top" position={ TOASTER_POSITION.top } />
    <Toaster id="top-end" position={ TOASTER_POSITION.topEnd } />
    <Toaster id="bottom-start" position={ TOASTER_POSITION.bottomStart } />
    <Toaster id="bottom" position={ TOASTER_POSITION.bottom } />
    <Toaster id="bottom-end" position={ TOASTER_POSITION.bottomEnd } />

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gap: '20px',
      padding: '200px',
    }}>
      <button onClick={ () => toast.information('Top Start', { toasterId: 'top-start' }) }>
        Top Start
      </button>

      <button onClick={ () => toast.information('Top', { toasterId: 'top' }) }>
        Top
      </button>

      <button onClick={ () => toast.information('Top End', { toasterId: 'top-end' }) }>
        Top End
      </button>

      <button onClick={ () => toast.information('Bottom Start', { toasterId: 'bottom-start' }) }>
        Bottom Start
      </button>

      <button onClick={ () => toast.information('Bottom', { toasterId: 'bottom' }) }>
        Bottom
      </button>

      <button onClick={ () => toast.information('Bottom End', { toasterId: 'bottom-end' }) }>
        Bottom End
      </button>
    </div>
  </>
);

export const Ref = () => {
  const toasterRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Toaster ref={ toasterRef } />

      <button onClick={ () => console.log(toasterRef.current) }>
        Log ref
      </button>
    </>
  );
};
