import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-ghibli-green text-ghibli-beige shadow-sm hover:bg-ghibli-green-dark',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-2 border-ghibli-green bg-transparent text-ghibli-green-dark hover:bg-ghibli-green hover:text-ghibli-beige',
        secondary:
          'bg-ghibli-beige text-ghibli-green-dark shadow-sm hover:bg-ghibli-beige-dark',
        ghost: 'hover:bg-ghibli-green-light/20 hover:text-ghibli-green-dark',
        link: 'text-ghibli-green-dark underline-offset-4 hover:underline',
        // Special Ghibli-inspired variants
        nature:
          'bg-ghibli-green-light text-ghibli-green-dark shadow-sm border-2 border-ghibli-green hover:bg-ghibli-green hover:text-ghibli-beige',
        sky: 'bg-ghibli-sky text-white shadow-sm hover:bg-ghibli-sky/80',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
        pill: 'rounded-full px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// Animated version of the button
type AnimatedButtonProps = ButtonProps & {
  animation?: 'tap' | 'hover' | 'both' | 'none';
};

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      animation = 'both',
      // We're not using asChild but it's in the interface
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      asChild,
      ...props
    },
    ref
  ) => {
    // Regular button classes
    const buttonClasses = cn(
      buttonVariants({ variant, size, rounded, className })
    );

    // Set up animation props
    let motionProps = {};

    if (animation === 'tap' || animation === 'both') {
      motionProps = {
        ...motionProps,
        whileTap: { scale: 0.97 },
      };
    }

    if (animation === 'hover' || animation === 'both') {
      motionProps = {
        ...motionProps,
        whileHover: { scale: 1.05, transition: { duration: 0.2 } },
      };
    }

    return (
      <motion.button
        className={buttonClasses}
        ref={ref}
        {...motionProps}
        // Type assertion to avoid conflicts between HTMLButtonElement and motion.button props
        // Using any is necessary here due to incompatible event handler types between React and Framer Motion
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    );
  }
);
AnimatedButton.displayName = 'AnimatedButton';

export { Button, AnimatedButton, buttonVariants };
