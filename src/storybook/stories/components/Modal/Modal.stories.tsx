import type { Meta, StoryObj } from '@storybook/react-vite';
import Modal from '../../../../ui/components/Modal/Modal';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const DefaultRender = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant='contained' onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onCancel={() => setOpen(false)}>
        <Typography>Modal Content</Typography>
      </Modal>
    </>
  );
};

const meta = {
  title: 'common/Modal',
  component: DefaultRender,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: false,
      description: 'Whether modal is open.',
    },
  },
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
};

export const WithButtons: Story = {
  args: {
    onConfirm: () => {
      console.log("Confirmed")
    }
  },
};

export default meta;
