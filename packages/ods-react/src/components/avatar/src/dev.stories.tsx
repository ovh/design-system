import { Icon, ICON_NAME } from '../../icon/src';
import { Avatar } from '.';

export default {
  component: Avatar,
  title: 'Avatar dev',
};

export const Default = () => (
  <Avatar fallback={<Icon name={ICON_NAME.user} />} src={'myimg.com'} />
);

export const Initials = () => (
  <Avatar>
    T
  </Avatar>
)

export const Image = () => (
  <Avatar src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Logo-OVH.svg/960px-Logo-OVH.svg.png"} />
)

export const Fallback = () => (
  <Avatar fallback={'T'} src={"/asdasdwqe"} />
)

export const AI = () => (
  <Avatar>
    <Icon name={ ICON_NAME.sparkle } />
  </Avatar>
)
