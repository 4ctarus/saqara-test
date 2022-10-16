import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import ButtonIcon from './ButtonIcon';

enum ButtonVariant {
  text = 'text',
  filled = 'filled',
  outlined = 'outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: keyof typeof ButtonVariant;
  icon?: ReactElement<IconBaseProps>;
  prefixIcon?: ReactElement<IconBaseProps>;
  suffixIcon?: ReactElement<IconBaseProps>;
}

const hoverStyle =
  'hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-full hover:before:bg-primary hover:before:opacity-[.08]';
const focusStyle =
  'focus:before:block focus:before:absolute focus:before:inset-0 focus:before:rounded-full focus:before:bg-primary focus:before:opacity-[.12]';
const textStyle = `text-primary`;
const filledStyle = `bg-primary text-on-primary hover:before:bg-on-primary hover:shadow-1 disabled:hover:shadow-none disabled:bg-disabled`;
const outlinedStyle = `text-primary border border-outline focus:border-primary disabled:border-disabled`;

const disabledStyle =
  'disabled:text-on-surface disabled:before:content-none [&>*]:disabled:opacity-[.38]';

function Button(props: ButtonProps) {
  const {
    variant = ButtonVariant.text,
    icon,
    prefixIcon,
    suffixIcon,
    children,
    ...rest
  } = props;

  const rootClassName = `relative box-border inline-flex items-center justify-center h-10 rounded-full ${
    icon ? 'w-10' : 'px-4'
  } ${hoverStyle} ${focusStyle} ${disabledStyle} ${
    variant === ButtonVariant.text ? textStyle : ''
  } ${variant === ButtonVariant.filled ? filledStyle : ''} ${
    variant === ButtonVariant.outlined ? outlinedStyle : ''
  }`;

  return (
    <button className={rootClassName} {...rest}>
      {icon ? (
        <ButtonIcon icon={icon} standalone />
      ) : (
        <div className="flex items-center justify-center gap-2">
          <>
            {prefixIcon && <ButtonIcon icon={prefixIcon} />}
            <span className="text-label-large">{children}</span>
            {suffixIcon && <ButtonIcon icon={suffixIcon} />}
          </>
        </div>
      )}
    </button>
  );
}

export default Button;
