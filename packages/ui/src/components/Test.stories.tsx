import type { Meta, StoryObj } from '@storybook/react-vite';

import Test from './Test';

export default {
  component: Test,
} satisfies Meta<typeof Test>;

type Story = StoryObj<typeof Test>;

export const Default: Story = {
  args: {
    className: 'text-red-400',
    title: '테스트',
  },
};

export const Blue: Story = {
  args: {
    className: 'bg-blue-500',
    title: '파란색 테스트',
  },
};
