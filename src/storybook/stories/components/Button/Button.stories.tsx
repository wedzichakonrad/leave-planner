import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Button, { type ButtonProps } from '@mui/material/Button';

const DefaultRender = (args: ButtonProps) => {
  return <Button {...args}>Button</Button>;
};

const meta = {
  title: 'common/Button',
  component: DefaultRender,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    variant: { control: 'radio', options: ['contained', 'outlined', 'text'] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Outlined: Story = {
  ...Playground,
  args: {
    variant: 'outlined',
  },
};

export const Large: Story = {
  ...Playground,
  args: {
    variant: 'outlined',
    size: 'large',
  },
};

DefaultRender.displayName = 'Button';
