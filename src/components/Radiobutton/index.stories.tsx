import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from ".";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The RadioButton component is a reusable component that can be used to display a radio button. It can be customized to include different variants such as basic, with background, and with border.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select me",
  },
};

