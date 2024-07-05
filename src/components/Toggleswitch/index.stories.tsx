import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ToggleSwitch from '.';

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The ToggleSwitch component is a reusable component that can be used to display a toggle switch. It can be customized to include different variants such as basic, with background, and with border.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<{ isOn: boolean }> = (args) => {
  const [isOn, setIsOn] = useState(args.isOn);
  const handleToggle = () => setIsOn(!isOn);

  return (
    <ToggleSwitch
      isOn={isOn}
      handleToggle={handleToggle}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  isOn: false,
};

export const On = Template.bind({});
On.args = {
  isOn: true,
};
