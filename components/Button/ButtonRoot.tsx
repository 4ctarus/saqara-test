import { ButtonHTMLAttributes, ReactNode } from 'react';

enum ButtonVariant {
  text = 'text',
  filled = 'filled',
  outlined = 'outlined',
}

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: keyof typeof ButtonVariant;
  isIconButton?: boolean;
}

function ButtonRoot(props: ButtonRootProps) {
  const {
    children,
    variant = ButtonVariant.text,
    isIconButton,
    ...rest
  } = props;

  return (
    <button
      className={`inline-flex items-center justify-center h-10 ${
        isIconButton ? 'px-2' : 'px-4'
      } ${variant === ButtonVariant.text ? 'text-primary' : ''} ${
        variant === ButtonVariant.filled ? 'bg-primary text-on-primary' : ''
      } ${
        variant === ButtonVariant.outlined ? 'text-primary border-outline' : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonRoot;
