import Avatar from '@repo/ui/components/common/Avatar';
import type { Meta, StoryObj } from '@storybook/nextjs';

export default {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 'xs',
    variant: 'circle',
    imgUrl: '',
    alt: '',
    className: '',
  },
};
