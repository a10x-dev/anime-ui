'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full bg-secondary',
  {
    variants: {
      variant: {
        default: 'h-4 bg-ghibli-beige/30',
        thin: 'h-2 bg-ghibli-beige/30',
        thick: 'h-6 bg-ghibli-beige/30',
        // Ghibli-inspired variants
        nature: 'h-4 bg-ghibli-green-light/20 border border-ghibli-green/30',
        sky: 'h-4 bg-ghibli-sky/20 border border-ghibli-sky/30',
        spirit: 'h-4 bg-ghibli-beige/20 border border-ghibli-beige/30',
      },
      rounded: {
        default: 'rounded-full',
        sm: 'rounded-md',
        lg: 'rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'default',
    },
  }
);

const progressIndicatorVariants = cva('h-full w-full flex rounded-full', {
  variants: {
    variant: {
      default: 'bg-ghibli-green',
      thin: 'bg-ghibli-green',
      thick: 'bg-ghibli-green',
      // Ghibli-inspired variants
      nature: 'bg-gradient-to-r from-ghibli-green to-ghibli-green-dark',
      sky: 'bg-gradient-to-r from-ghibli-sky to-ghibli-blue',
      spirit: 'bg-gradient-to-r from-ghibli-beige to-ghibli-brown',
    },
    rounded: {
      default: 'rounded-full',
      sm: 'rounded-md',
      lg: 'rounded-xl',
    },
    animation: {
      none: '',
      pulse: 'animate-pulse',
      shimmer: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    rounded: 'default',
    animation: 'none',
  },
});

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorVariant?: VariantProps<typeof progressIndicatorVariants>['variant'];
  animation?: VariantProps<typeof progressIndicatorVariants>['animation'];
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value,
      variant,
      rounded,
      indicatorVariant,
      animation = 'none',
      ...props
    },
    ref
  ) => {
    const actualVariant = indicatorVariant || variant;

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressVariants({ variant, rounded, className }))}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            progressIndicatorVariants({
              variant: actualVariant,
              rounded,
              animation,
            })
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        >
          {animation === 'shimmer' && (
            <div className="absolute inset-0 w-full h-full">
              <motion.div
                className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20"
                animate={{ left: ['0%', '100%', '0%'] }}
                transition={{
                  duration: 3,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
            </div>
          )}
        </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
    );
  }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
