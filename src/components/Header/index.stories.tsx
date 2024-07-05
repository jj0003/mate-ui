import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The Header component is a reusable component that can be used to display the header of the application. It can be customized to include different variants such as logged in and logged out. The component also includes buttons for login, logout, and sign up. The user name is displayed when the user is logged in. There are different arguments for the component to simulate the different states of the user.',
      },
    },
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
