export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonState = 'default' | 'hover' | 'pressed' | 'disabled';
export type ButtonVariant = 'primary' | 'secondary' | 'secondary-grey' | 'tertiary' | 'tertiary-grey';

export interface GenericButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  state: ButtonState;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
