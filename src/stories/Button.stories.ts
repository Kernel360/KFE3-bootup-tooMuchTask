import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../src/components/Button/index";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    variant: {
      control: { type: "select" },
      options: ["wide", "icon"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "default", "disabled"],
    },
    onClick: { action: "clicked" },
    children: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    size: "md",
    variant: "wide",
    color: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    size: "md",
    variant: "wide",
    color: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    size: "md",
    variant: "wide",
    color: "danger",
    children: "Danger Button",
  },
};

export const Disabled: Story = {
  args: {
    size: "md",
    variant: "wide",
    color: "disabled",
    children: "Disabled Button",
  },
};

export const IconLarge: Story = {
  args: {
    size: "lg",
    variant: "icon",
    color: "primary",
    children: "🔔",
  },
};
