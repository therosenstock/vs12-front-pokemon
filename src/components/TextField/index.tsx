import { ChangeEvent, ChangeEventHandler } from 'react';
import { TextFieldInput } from './styles.ts';

export type TextFieldProps = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onChangeValue?: (value: string) => void;
  placeholder?: string;
}
export const TextField = ({ onChangeValue, ...props }: TextFieldProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(event);
    onChangeValue?.(event.target.value);
  };

  return <TextFieldInput {...props} onChange={onChange} />;
};