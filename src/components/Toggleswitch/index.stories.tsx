import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ToggleSwitch from '.';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
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
