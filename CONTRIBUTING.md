# Contributing to Anime UI

Thank you for considering contributing to Anime UI! This document provides guidelines and instructions to help you get started.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors. All participants are expected to be respectful, considerate, and constructive in their interactions. Any form of harassment, discrimination, or abusive behavior will not be tolerated.

## How Can I Contribute?

### Reporting Bugs

- **Check Existing Issues** - Before creating a new issue, please check if it already exists
- **Use the Bug Report Template** - When creating an issue, use the bug report template
- **Provide Detailed Information** - Include browser version, OS, steps to reproduce, expected behavior, and actual behavior

### Suggesting Enhancements

- **Check Existing Suggestions** - Before suggesting an enhancement, please check if it already exists
- **Use the Feature Request Template** - When suggesting an enhancement, use the feature request template
- **Explain Your Use Case** - Describe why this enhancement would be useful and how it aligns with the library's goals

### Pull Requests

1. **Fork the Repository** - Fork the Anime UI repository to your GitHub account
2. **Create a Branch** - Create a branch for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Changes** - Make your changes following our coding standards
4. **Run Tests** - Make sure all tests pass
   ```bash
   npm run test
   ```
5. **Commit Changes** - Commit your changes with a clear message
   ```bash
   git commit -m "Add: your feature description"
   ```
6. **Push Changes** - Push your changes to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create Pull Request** - Create a pull request from your branch to our main branch

## Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/anime-ui.git

# Navigate to the project
cd anime-ui

# Install dependencies
npm install

# Start the development server
npm run dev

# Run tests
npm run test
```

## Component Development Guidelines

### Component Structure

```tsx
// Example component structure
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const exampleVariants = cva('base-styles-here', {
  variants: {
    variant: {
      default: 'default-styles',
      nature: 'nature-theme-styles',
      sky: 'sky-theme-styles',
      spirit: 'spirit-theme-styles',
    },
    size: {
      default: 'default-size-styles',
      sm: 'small-size-styles',
      lg: 'large-size-styles',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ExampleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof exampleVariants> {}

const Example = React.forwardRef<HTMLDivElement, ExampleProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(exampleVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Example.displayName = 'Example';

export { Example };
```

### Design Guidelines

1. **Ghibli-Inspired Colors** - Use the color palette defined in the tailwind config
2. **Animation** - Include subtle animations where appropriate
3. **Accessibility** - Ensure all components are accessible
4. **Responsive** - Components should work well on all screen sizes

## Style Guide

### TypeScript

- Use TypeScript for all components
- Export proper types for all components
- Use interfaces for props

### CSS

- Use Tailwind CSS for styling
- Use class-variance-authority for component variants
- Follow the Ghibli color theme
- Use `cn` utility function for class name merging

### Code Formatting

- Use ESLint and Prettier for code formatting
- Run `npm run lint` before committing

## Documentation

- Document each component with usage examples
- Update the main README.md when adding new components
- Create Storybook stories for new components

Thank you for contributing to Anime UI! 🌿✨
