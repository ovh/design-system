import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';
import axe from 'axe-core';
import classNames from 'classnames';
import { type ReactElement, useReducer } from 'react';
import { ResultDetails } from './ResultDetails';
import styles from './accessibilityControl.module.scss';

type Prop = {
  className?: string,
}

const initialState = {
  error: '',
  inapplicables: [],
  incompletes: [],
  isControlling: undefined,
  passes: [],
  violations: [],
}

/**
 * All components using an aria-haspopup have an aria-controls set by default by Ark.
 * This does cause a warning "Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup".
 * One fix would be to override those aria-controls so that they're set only if the popup is visible.
 * Though setting them in advance is actually valid.
 * Quoting MDN:
 * "The aria-controls only needs to be set when the popup is visible, but it is valid and easier to program to reference an element that is not visible."
 * (see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
 * So, for now, we remove the warning from the results.
 */
function filterIncompletes(list: any) {
  return list.filter((item: any) => {
    return !item.nodes.some((node: any) => {
      return !!node.failureSummary.match(/Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup/);
    });
  });
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'error':
      return {
        ...initialState,
        error: action.payload,
      };
    case 'run-control':
      return {
        ...initialState,
        isControlling: true,
      };
    case 'set-results':
      return {
        error: '',
        inapplicables: action.payload.inapplicable,
        incompletes: filterIncompletes(action.payload.incomplete),
        isControlling: false,
        passes: action.payload.passes,
        violations: action.payload.violations,
      };
    default:
      return state;
  }
}

function AccessibilityControl({ className }: Prop): ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function onRunControlClick() {
    dispatch({ type: 'run-control' });

    requestAnimationFrame(() => {
      axe.run()
        .then(results => {
          dispatch({ type: 'set-results', payload: results });
        })
        .catch((error) => {
          dispatch({ type: 'error', payload: error.message });
        });
    });
  }

  return (
    <div className={ classNames(styles['accessibility-control'], className) }>
      <Button
        onClick={ onRunControlClick }
        loading={ state.isControlling }>
        Run Controls
      </Button>

      {
        state.isControlling === false &&
        <Modal>
          <ModalTrigger>
            <div className={ styles['accessibility-control__results'] }>
              <div className={ styles['accessibility-control__results__passes'] }>
                <Icon name={ ICON_NAME.circleCheck } /> { state.passes.length }
              </div>

              <div className={ styles['accessibility-control__results__violations'] }>
                <Icon name={ ICON_NAME.circleXmark } /> { state.violations.length }
              </div>

              <div className={ styles['accessibility-control__results__incompletes'] }>
                <Icon name={ ICON_NAME.triangleExclamation } /> { state.incompletes.length }
              </div>

              <div className={ styles['accessibility-control__results__inapplicables'] }>
                <Icon name={ ICON_NAME.circleInfo } /> { state.inapplicables.length }
              </div>
            </div>
          </ModalTrigger>

          <ModalContent>
            <ModalBody>
              <ResultDetails
                list={ state.passes }
                title="Passes" />
              <ResultDetails
                list={ state.violations }
                title="Violations" />
              <ResultDetails
                list={ state.incompletes }
                title="Incompletes" />
              <ResultDetails
                list={ state.inapplicables }
                title="Inapplicables" />
            </ModalBody>
          </ModalContent>
        </Modal>
      }
    </div>
  );
}

export { AccessibilityControl };
