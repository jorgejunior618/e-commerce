import { ButtonHTMLAttributes } from 'react';

function Button({
  className,
  id,
  onClick,
  children
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      id={id}
      className={
        `button${className && className.length > 2 ? ' ' + className : ''}`
      }
      onClick={onClick
        ? onClick
        : (event) => {}}
    >
      {children}
    </button>
  );
}

export default Button;
