import type { Meta, StoryObj } from "@storybook/react";
import { ContactSection } from ".";

const meta: Meta<typeof ContactSection> = {
  title: "Components/ContactSection",
  component: ContactSection,
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
