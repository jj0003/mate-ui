import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "."; // Adjust the import path according to your project structure

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    layout: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    layout: "default",
  },
};
