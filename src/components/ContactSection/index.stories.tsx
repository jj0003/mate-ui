import type { Meta, StoryObj } from "@storybook/react";
import { ContactSection } from ".";

const meta: Meta<typeof ContactSection> = {
  title: "Components/ContactSection",
  component: ContactSection,
  parameters: {
    layout: "centered",
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
