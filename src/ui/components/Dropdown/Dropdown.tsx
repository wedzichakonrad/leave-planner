import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export type DropdownOption = {
  label: string;
  value: string;
};

interface DropdownProps {
  name: string;
  value: string;
  options: DropdownOption[];
  onChange?: (value: any) => void;
  label?: string;
}

const Dropdown = ({ value, options, onChange, label, name }: DropdownProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;