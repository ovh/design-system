import { ODS_LINK_ICON_ALIGNMENT, OdsLink } from '.';
import { ODS_ICON_NAME } from '../../icon/src';

export default {
  title: "OdsLink dev",
  component: OdsLink,
};

export const Default = () => (
  <OdsLink href="http://google.com" label="My link" target="_blank" />
);

export const Disabled = () => (
  <>
    <OdsLink disabled={ true } href="http://google.com" label="My link" target="_blank" />
    <br />
    <OdsLink disabled={ false } href="http://google.com" label="My link" target="_blank" />
  </>
);

export const Icons = () => (
  <>
    <OdsLink href="http://google.com" icon={ ODS_ICON_NAME.arrowLeft } iconAlignment={ ODS_LINK_ICON_ALIGNMENT.left } label="My link" target="_blank" />
    <br />
    <OdsLink href="http://google.com" icon={ ODS_ICON_NAME.arrowRight } label="My link" target="_blank" />
  </>
);
