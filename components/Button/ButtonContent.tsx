import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function ButtonContent(props: Props) {
  const { children, ...rest } = props;

  return (
    <div className="flex items-center justify-center gap-2" {...rest}>
      {children}
    </div>
  );
}

export default ButtonContent;
