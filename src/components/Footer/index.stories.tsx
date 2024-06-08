import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "."; // Adjust the import path according to your project structure
import { DocsContainer, DocsPage } from '@storybook/addon-docs';

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      container: DocsContainer,
      page: () => (
        <>
          <DocsPage />
          <h3>Responsive Footer</h3>
          <p>
            The Footer component is designed to be responsive and can be used to display information about the website or application. It can be customized to include links/buttons, and other elements as needed.
          </p>
        </>
      ),
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
