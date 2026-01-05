import { Editable, EditableDisplay, EditableInput } from '../../src';

export default {
  component: Editable,
  title: 'Tests rendering',
};

export const render = () => (
  <Editable>
    <EditableDisplay>
      Some label
    </EditableDisplay>

    <EditableInput>
      <input />
    </EditableInput>
  </Editable>
);
