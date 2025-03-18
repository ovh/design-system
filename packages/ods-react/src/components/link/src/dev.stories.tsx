import { ODS_ICON_NAME, OdsIcon } from '../../icon/src';
import { OdsLink } from '.';

export default {
  component: OdsLink,
  title: 'OdsLink dev',
};

export const Default = () => (
  <OdsLink href="http://google.com" target="_blank">
    My link
  </OdsLink>
);

export const Disabled = () => (
  <>
    <OdsLink disabled={ true } href="http://google.com" target="_blank">
      My link
    </OdsLink>
    <br />
    <OdsLink disabled={ false } href="http://google.com" target="_blank">
      My link
    </OdsLink>
  </>
);

export const Icons = () => (
  <>
    <OdsLink href="http://google.com" target="_blank">
      <OdsIcon name={ ODS_ICON_NAME.arrowLeft } /> My link
    </OdsLink>
    <br />
    <OdsLink href="http://google.com" target="_blank">
      My link <OdsIcon name={ ODS_ICON_NAME.arrowRight } />
    </OdsLink>
  </>
);
