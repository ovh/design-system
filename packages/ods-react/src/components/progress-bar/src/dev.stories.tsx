import { ProgressBar } from '.';
import style from './dev.module.css';

export default {
  component: ProgressBar,
  title: 'ProgressBar dev',
};

export const CustomCSS = () => (
  <ProgressBar
    className={ style['custom-progress-bar'] }
    value="50" />
);

export const Default = () => (
  <ProgressBar />
);

export const Max = () => (
  <ProgressBar
    max="50"
    value="25" />
);

export const Value = () => (
  <ProgressBar value="75" />
);
