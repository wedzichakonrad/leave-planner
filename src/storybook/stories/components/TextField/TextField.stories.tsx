import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import TextField from '@mui/material/TextField';

const meta = {
  title: 'common/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
    error: { control: 'boolean' },
    value: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'Label',
    placeholder: 'Input Placeholder...'
  }
};

export const WithError: Story = {
  ...Playground,
  args: {
    error: true,
  },
};

export const WithDefaultValue: Story = {
  ...Playground,
  args: {
    defaultValue: 'Default Input Value',
  },
};