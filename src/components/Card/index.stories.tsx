import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The Card component is a reusable component that can be used to display content in a card format. It can be customized to include different variants such as basic, with button, and with image. The image can be added as a URL.",
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
    title: "Basic Card",
    content: "This is a basic card with a title and content.",
    onClick: () => alert('Card clicked!'),
  },
};

export const WithButton: Story = {
  args: {
    variant: "withButton",
    title: "Card with Button",
    content: "This card includes a button for additional actions.",
    buttonText: "Click Me",
    onClick: () => alert('Card clicked!'),
  },
};

export const Image: Story = {
  args: {
    variant: "image",
    title: "Card with Image",
    content: "This card includes an image, a title, and content.",
    imageSrc: "https://via.placeholder.com/400x300",
    onClick: () => alert('Card clicked!'),
  },
};
