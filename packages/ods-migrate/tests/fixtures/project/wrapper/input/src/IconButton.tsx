import { Button, type ButtonProp } from './ods';

export const IconButton = ({ variant, ...rest }: ButtonProp) => <Button { ...rest } data-variant={ variant } />;
