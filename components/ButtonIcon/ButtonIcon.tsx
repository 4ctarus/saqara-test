import { cloneElement, ReactElement } from 'react';
import { IconBaseProps } from 'react-icons/lib';

interface Props {
  icon: ReactElement<IconBaseProps>;
  onClick: () => void;
}

const hoverStyle =
  'hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-full hover:before:bg-primary hover:before:opacity-[.08]';
const focusStyle =
  'focus:before:block focus:before:absolute focus:before:inset-0 focus:before:rounded-full focus:before:bg-primary focus:before:opacity-[.12]';
const disabledStyle =
  'disabled:text-on-surface disabled:before:content-none [&>*]:disabled:opacity-[.38]';
const rootClassName = `relative text-primary dark:text-primary-dark box-border inline-flex items-center justify-center h-10 rounded-full w-10 ${hoverStyle} ${focusStyle} ${disabledStyle}`;

function ButtonIcon(props: Props) {
  const { icon, onClick } = props;

  return (
    <button className={rootClassName} onClick={onClick}>
      {cloneElement(icon, {
        size: 24,
      })}
    </button>
  );
}

export default ButtonIcon;
