# MateUI

MateUI is a comprehensive, modular UI library tailored for React developers, designed to streamline the process of building visually appealing, responsive, and accessible user interfaces. This library comes equipped with a wide array of customizable components and styles, making it a versatile choice for projects of any scale. Its modularity ensures that developers can pick and choose components as needed, allowing for lightweight, tailored applications.

## Features

- **Modular Components**: Each component can be used independently, enabling a modular and flexible design approach.
- **Customizable Styles**: Easily customize components using props and CSS classes to match your project’s design requirements.
- **Responsive Design**: Components are designed to be responsive, ensuring they look great on all devices.

## Components

### Button
A flexible button component with various styling options.
- **Variants**: Solid, Outline, Ghost, Underline
- **Sizes**: Small, Medium, Large
- **Color Schemes**: Primary, Secondary, Danger

### Checkbox
A customizable checkbox component with text description.
- **Variants**: Different color options for checked state
- **Features**: Accessible, customizable label

### Accordion
A vertically stacked set of interactive headings that each reveal a section of content.
- **Features**: Collapsible sections, smooth transitions, customizable content
- **Variants**: Default, Bordered

### Input
A customizable input component.
- **Types**: Text, Password, Number, Date
- **Features**: Accessible, customizable styles

### Header
A customizable header component.
- **Features**: Includes navigation buttons and user greeting
- **Variants**: Default, With background

### LoginCard
A card component for login forms.
- **Features**: Email and password inputs, customizable submit button
- **Variants**: Default, With background

### RadioButton
A set of customizable radio buttons with text description.
- **Features**: Grouped options, customizable styles

### Modal
A modal dialog for user interactions.
- **Features**: Two text fields, two input fields, and a button

### Card
A card component to display content.
- **Features**: Displays an image, title, and paragraph with different font sizes

### Dropdown
A dropdown button that displays multiple buttons when clicked.
- **Features**: Various options for user selection

### Switch
A toggle switch for on/off options.
- **Features**: Customizable styles and states

### ContactSection
A pre-designed contact section.
- **Features**: Input fields for contact information

### MainSection
A main section for general content.
- **Features**: Flexible content display

### Footer
A customizable footer.
- **Features**: Different layout and style options

## Installation

To install MateUI in your project, use npm:

```bash
npm install mateui
```
## Usage
Here's a basic example of how to use the Button component in your React project:

```bash
import React from 'react';
import { Button } from 'mateui';

const App = () => {
  return (
    <div>
      <Button variant="solid" size="md" colorscheme="primary">
        Click Me
      </Button>
    </div>
  );
};

export default App;
```

## Documentation
For detailed usage and API documentation, visit the [MateUI Documentation](https://www.matesuite.com/mateui).

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Developed with ❤️ by Jan Furio Catalan
