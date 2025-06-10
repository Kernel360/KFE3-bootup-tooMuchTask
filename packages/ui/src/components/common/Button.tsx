
import { ReactNode } from 'react';

import { ButtonStyle } from './styles';


import { ReactNode } from 'react';

import { ButtonStyle } from './styles';

export interface Props {
  size: string;
  color: string;
  variant: string;
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ size, color, variant, children, onClick }: Props) => {
  const disabled = color === 'disabled' ? true : false;
  return (
    <ButtonStyle
      size={size}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;


export interface Props {
  size: string;
  color: string;
  variant: string;
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ size, color, variant, children, onClick }: Props) => {
  const disabled = color === 'disabled' ? true : false;
  return (
    <ButtonStyle
      size={size}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
