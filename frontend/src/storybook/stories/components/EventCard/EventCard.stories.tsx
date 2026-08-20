import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventCard } from '../../../../components/EventCard/EventCard';

const meta = {
  title: 'common/EventCard',
  component: EventCard,
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: 'object',
    },
  },
} satisfies Meta<typeof EventCard>;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    item: {
        description: 'My Card Description',
        type: 'Event Type'
    }
  },
};

export default meta;
