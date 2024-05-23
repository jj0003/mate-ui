import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: () => console.log('Logged in'),
    onLogout: () => console.log('Logged out'),
    onSignUp: () => console.log('Account created'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jan Furio',
    },
  },
};

export const LoggedOut: Story = {};
