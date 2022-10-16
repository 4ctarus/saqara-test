import { cloneElement, ReactElement } from 'react';
import { IconBaseProps } from 'react-icons/lib';

interface ButtonIconProps extends IconBaseProps {
  icon: ReactElement<IconBaseProps>;
  standalone?: boolean;
}

function ButtonIcon(props: ButtonIconProps) {
  const { icon, standalone, ...rest } = props;

  return cloneElement(icon, {
    size: standalone ? 24 : 18,
    ...rest,
  });
}

export default ButtonIcon;
