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
        incompletes: action.payload.incomplete,
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

    axe.run()
      .then(results => {
        dispatch({ type: 'set-results', payload: results });
      })
      .catch((error) => {
        dispatch({ type: 'error', payload: error.message });
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
