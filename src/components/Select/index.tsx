import { Container, Option } from './styles.ts';
import { ChangeEvent } from 'react';

export type SelectProps<T = any> = {
  value?: T
  items?: T[]
  placeholder?: string;
  onChange?: (value?: T) => void;
  getOptionKey?: (value: T) => string;
  getOptionLabel?: (value: T) => string;
}

export const Select = ({ value, placeholder, items, onChange, getOptionLabel, getOptionKey }: SelectProps) => {

  const getKey = (item: any) => {
    return getOptionKey?.(item) ?? JSON.stringify(item);
  };

  const isSelected = (item: any) => {
    if (!item || !value) return false;
    return getKey(item) === getKey(value);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log('mudou', value);
    const item = items?.find((item) => getKey(item) === value);
    console.log('items', items);
    console.log('Time escolhido', item);
    onChange?.(item);
  };

  return (
    <Container onChange={handleChange}>
      {placeholder && <Option value={''}>{placeholder}</Option>}
      {items?.map((item) => (
        <Option key={getKey(item)} value={getKey(item)} selected={isSelected(item)}>
          {getOptionLabel?.(item) ?? JSON.stringify(item)}
        </Option>
      ))}
    </Container>
  );
};