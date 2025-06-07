import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../../components/Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Teal: Story = {
  args: {
    title: "티얼 칩",
    color: "#00ff00",
  },
};

export const Rose: Story = {
  args: {
    title: "로즈 칩",
    color: "#ff0000",
  },
};

export const Neutral: Story = {
  args: {
    title: "뉴트럴 칩",
    color: "#000000",
  },
};

export const AllChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip title="현재제시가" color="#000000" />
      <Chip title="즉시구매가" color="#00ff00" />
      <Chip title="경매중" color="#ff0000" />
      <Chip title="거래중" color="#000000" />
      <Chip title="거래완료" color="#00ff00" />
    </div>
  ),
};
