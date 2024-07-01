import type { Meta, StoryFn } from "@storybook/react";
import Accordion from ".";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<{ items: { title: string; content: React.ReactNode }[]; variant: 'basic' | 'withBackground' | 'withBorder' | 'withCustomColor' }> = (args) => <Accordion {...args} />;

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

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
  items: [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ],
  variant: 'withCustomColor',
};
