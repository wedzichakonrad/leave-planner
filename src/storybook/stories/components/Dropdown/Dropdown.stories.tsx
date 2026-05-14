import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Dropdown, { type DropdownOption } from '../../../../ui/components/Dropdown';

const dropdownOptions = [
  { label: 'Value 1', value: 'value1' },
  { label: 'Value 2', value: 'value2' },
  { label: 'Value 3', value: 'value3' },
] as DropdownOption[];

const meta = {
  title: 'common/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      control: false,
    },
    value: {
      control: false,
    },
    options: { control: false },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'Dropdown Label',
    options: dropdownOptions,
  }
};