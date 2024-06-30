import type { Meta, StoryObj } from "@storybook/react";
import { LoginSection } from ".";

const meta: Meta<typeof LoginSection> = {
  title: "Components/LoginSection",
  component: LoginSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "basic",
  },
};

export const WithBackground: Story = {
  args: {
    variant: "withBackground",
  },
};

export const WithBorder: Story = {
  args: {
    variant: "withBorder",
  },
};
