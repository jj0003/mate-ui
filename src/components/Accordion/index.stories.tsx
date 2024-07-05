import type { Meta, StoryFn } from "@storybook/react";
import Accordion from ".";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The Accordion component is a reusable component that can be used to display collapsible sections of content. It can be customized to include different variants such as basic, with background, and with border.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<{ items: { title: string; content: React.ReactNode }[]; variant: 'basic' | 'withBackground' | 'withBorder' }> = (args) => <Accordion {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ],
  variant: 'basic',
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ],
  variant: 'withBackground',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ],
  variant: 'withBorder',
};