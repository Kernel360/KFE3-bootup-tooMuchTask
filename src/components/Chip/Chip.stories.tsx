import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./index";

const meta: Meta<typeof Chip> = {
  title: "Common/Chip",
  component: Chip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Teal: Story = {
  args: {
    title: "티얼 칩",
    color: "teal",
  },
};

export const Rose: Story = {
  args: {
    title: "로즈 칩",
    color: "rose",
  },
};

export const Neutral: Story = {
  args: {
    title: "뉴트럴 칩",
    color: "neutral",
  },
};

export const AllChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip title="현재제시가" color="neutral" />
      <Chip title="즉시구매가" color="teal" />
      <Chip title="경매중" color="rose" />
      <Chip title="거래중" color="neutral" />
      <Chip title="거래완료" color="teal" />
    </div>
  ),
};