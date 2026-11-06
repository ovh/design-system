type Props = { variant?: 'ghost' | 'solid' };

export const Button = ({ variant }: Props) => <button data-variant={ variant } />;
