import { ButtonHTMLAttributes } from 'react';

function Button({
  className,
  onClick,
  children
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
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
