import { MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer } from './styles.ts';

export type ButtonProps = {
  children?: ReactNode | ReactNode[]
  type?: 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer {...props} />
  );
};