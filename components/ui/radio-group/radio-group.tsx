'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Circle } from 'lucide-react';
import { motion } from 'motion/react';

const radioGroupVariants = cva('flex gap-2', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

const radioVariants = cva(
  'peer h-4 w-4 rounded-full border border-primary ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'border-ghibli-green-dark',
        // Ghibli-inspired variants
        nature: 'border-ghibli-green',
        sky: 'border-ghibli-sky',
        spirit: 'border-ghibli-beige',
      },
      size: {
        default: 'h-4 w-4',
        sm: 'h-3 w-3',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const indicatorVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      default: 'text-ghibli-green',
      nature: 'text-ghibli-green',
      sky: 'text-ghibli-sky',
      spirit: 'text-ghibli-beige',
    },
    animation: {
      none: '',
      grow: 'scale-100',
      pulse: '',
      sparkle: '',
    },
    size: {
      default: 'h-2.5 w-2.5',
      sm: 'h-1.5 w-1.5',
      lg: 'h-3.5 w-3.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    animation: 'none',
    size: 'default',
  },
});

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    VariantProps<typeof radioGroupVariants> {}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(radioGroupVariants({ orientation, className }))}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioVariants> {
  animation?: VariantProps<typeof indicatorVariants>['animation'];
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, variant, size, animation = 'none', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioVariants({ variant, size, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="relative flex h-full w-full items-center justify-center">
        {animation === 'grow' ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'rounded-full',
              indicatorVariants({ variant, size, animation })
            )}
          >
            <Circle className="h-full w-full fill-current" />
          </motion.div>
        ) : animation === 'pulse' ? (
          <motion.div
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              repeat: 1,
              repeatType: 'reverse',
            }}
            className={cn(
              'rounded-full',
              indicatorVariants({ variant, size, animation })
            )}
          >
            <Circle className="h-full w-full fill-current" />
          </motion.div>
        ) : animation === 'sparkle' ? (
          <React.Fragment>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                'absolute rounded-full',
                indicatorVariants({ variant, size, animation })
              )}
            >
              <Circle className="h-full w-full fill-current" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="absolute h-full w-full rounded-full bg-current opacity-30"
            />
          </React.Fragment>
        ) : (
          <div className={cn(indicatorVariants({ variant, size, animation }))}>
            <Circle className="h-full w-full fill-current" />
          </div>
        )}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
