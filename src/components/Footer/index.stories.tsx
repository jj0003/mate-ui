import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "."; // Adjust the import path according to your project structure

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The ContactSection component is a reusable component that can be used to display contact information. It can be customized to include different variants such as basic, with background, and with border.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
