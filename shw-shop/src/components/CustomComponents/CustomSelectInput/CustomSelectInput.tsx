import React from 'react';
import { filter } from '../../Products/ProductsSlice/ProductsSlice';
import {
  CustomLabel,
  CustomSelect,
  CustomOption,
} from './CustomSelectInput.component';
interface CustomSelectInputProps {
  label: string;
  value: filter | string | number;
  options: string[];
  onChange: ((Filter: filter) => void) | (() => void);
  id: string;
}

const CustomSelectInput: React.FC<CustomSelectInputProps> = ({
  label,
  value,
  options,
  onChange,
  id,
}) => {
  return (
    <>
      <CustomLabel htmlFor={id}>{label}</CustomLabel>
      <CustomSelect
        value={value}
        id={id}
        onChange={(e): void =>
          onChange(e?.target.value.replace(/\s/g, '') as filter)
        }
      >
        {options.map((option) => (
          <CustomOption key={option}>{option}</CustomOption>
        ))}
      </CustomSelect>
    </>
  );
};

export default CustomSelectInput;
