import { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './styles';

function Button({
  className,
  id,
  onClick,
  children
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonWrapper
      id={id}
      className={
        `button${className && className.length > 2 ? ' ' + className : ''}`
      }
      onClick={onClick
        ? onClick
        : (event) => {}}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;
