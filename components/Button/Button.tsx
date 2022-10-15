import {
  ButtonHTMLAttributes,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';
import ButtonContent from './ButtonContent';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactElement<IconBaseProps>;
  prefixIcon?: ReactElement<IconBaseProps>;
  suffixIcon?: ReactElement<IconBaseProps>;
}

function Button(props: Props) {
  const { children, icon, prefixIcon, suffixIcon, ...rest } = props;

  return (
    <button {...rest}>
      {icon ? (
        isValidElement(icon) &&
        cloneElement(icon, {
          size: '24px',
        })
      ) : (
        <ButtonContent>
          <>
            {isValidElement(prefixIcon) &&
              cloneElement(prefixIcon, {
                size: '18px',
              })}
            <span className="text-label-large">{children}</span>
            {isValidElement(suffixIcon) &&
              cloneElement(suffixIcon, {
                size: '18px',
              })}
          </>
        </ButtonContent>
      )}
    </button>
  );
}

export default Button;
