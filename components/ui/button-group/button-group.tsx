import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ButtonProps } from '../button';

const buttonGroupVariants = cva('inline-flex rounded-md overflow-hidden', {
  variants: {
    variant: {
      default: 'bg-transparent shadow-sm',
      outline: 'border-2 border-ghibli-green',
      // Ghibli-inspired variants
      nature: 'bg-transparent border-2 border-ghibli-green',
      sky: 'bg-transparent border-2 border-ghibli-sky',
      spirit: 'bg-transparent border-2 border-ghibli-beige',
    },
    size: {
      default: 'h-10',
      sm: 'h-9',
      lg: 'h-11',
    },
    rounded: {
      default: 'rounded-md',
      full: 'rounded-full',
    },
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    rounded: 'default',
    orientation: 'horizontal',
  },
});

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  children: React.ReactNode;
}

// Type guard to check if an element is a Button component
const isButtonElement = (
  child: React.ReactNode
): child is React.ReactElement<ButtonProps> => {
  return React.isValidElement(child);
};

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    { className, variant, size, rounded, orientation, children, ...props },
    ref
  ) => {
    // Transform children to apply special styling for button group
    const childrenWithProps = React.Children.map(children, (child, index) => {
      if (isButtonElement(child)) {
        // Get total number of children
        const childCount = React.Children.count(children);

        // Determine custom class based on position
        let specialClasses = '';

        if (orientation === 'horizontal') {
          // Apply border radius only to first and last buttons
          if (index === 0) {
            specialClasses =
              rounded === 'full'
                ? 'rounded-l-full rounded-r-none'
                : 'rounded-l-md rounded-r-none';
          } else if (index === childCount - 1) {
            specialClasses =
              rounded === 'full'
                ? 'rounded-r-full rounded-l-none border-l-0'
                : 'rounded-r-md rounded-l-none border-l-0';
          } else {
            specialClasses = 'rounded-none border-l-0';
          }
        } else {
          // Vertical orientation
          if (index === 0) {
            specialClasses =
              rounded === 'full'
                ? 'rounded-t-full rounded-b-none'
                : 'rounded-t-md rounded-b-none';
          } else if (index === childCount - 1) {
            specialClasses =
              rounded === 'full'
                ? 'rounded-b-full rounded-t-none border-t-0'
                : 'rounded-b-md rounded-t-none border-t-0';
          } else {
            specialClasses = 'rounded-none border-t-0';
          }
        }

        // Clone element with additional props
        return React.cloneElement(child, {
          className: cn(child.props.className, specialClasses),
          size: child.props.size || size,
          variant: child.props.variant || variant,
        } as ButtonProps);
      }
      return child;
    });

    return (
      <div
        className={cn(
          buttonGroupVariants({
            variant,
            size,
            rounded,
            orientation,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {childrenWithProps}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup, buttonGroupVariants };
