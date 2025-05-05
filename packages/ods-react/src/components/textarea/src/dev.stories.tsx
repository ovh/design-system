import { Textarea } from '.';
import style from './dev.module.css';

export default {
  component: Textarea,
  title: 'Textarea dev',
};

export const Default = () => (
  <Textarea />
);

export const Disabled = () => (
  <Textarea disabled />
);

export const CustomStyle = () => (
  <Textarea className={ style['custom-textarea'] } placeholder={'My custom textarea'} />
)
