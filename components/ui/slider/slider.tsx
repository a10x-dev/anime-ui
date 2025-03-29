'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const sliderVariants = cva(
  'relative flex w-full touch-none select-none items-center',
  {
    variants: {
      size: {
        default: 'h-5',
        sm: 'h-4',
        lg: 'h-6',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const sliderTrackVariants = cva(
  'relative h-2 w-full grow overflow-hidden rounded-full transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-ghibli-beige/30',
        // Ghibli-inspired variants
        nature: 'bg-ghibli-green-light/20 border border-ghibli-green/20',
        sky: 'bg-ghibli-sky/20 border border-ghibli-sky/20',
        spirit: 'bg-ghibli-beige/20 border border-ghibli-beige/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const sliderRangeVariants = cva('absolute h-full transition-all', {
  variants: {
    variant: {
      default: 'bg-ghibli-green',
      // Ghibli-inspired variants
      nature: 'bg-gradient-to-r from-ghibli-green-light to-ghibli-green',
      sky: 'bg-gradient-to-r from-ghibli-sky to-ghibli-blue',
      spirit: 'bg-gradient-to-r from-ghibli-beige to-ghibli-brown',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const sliderThumbVariants = cva(
  'block h-5 w-5 rounded-full border-2 bg-white ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative z-10 shadow-md transform translate-y-[-1px] hover:shadow-lg active:scale-95',
  {
    variants: {
      variant: {
        default:
          'border-ghibli-green hover:border-ghibli-green-dark active:border-ghibli-green-dark',
        // Ghibli-inspired variants
        nature:
          'border-ghibli-green hover:border-ghibli-green-dark active:border-ghibli-green-dark',
        sky: 'border-ghibli-sky hover:border-ghibli-blue active:border-ghibli-blue',
        spirit:
          'border-ghibli-beige hover:border-ghibli-brown active:border-ghibli-brown',
      },
      animation: {
        none: '',
        pulse: 'animate-pulse',
        grow: '',
        shine: '',
      },
      size: {
        default: 'h-5 w-5',
        sm: 'h-4 w-4',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      animation: 'none',
      size: 'default',
    },
  }
);

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  variant?: VariantProps<typeof sliderTrackVariants>['variant'];
  animation?: VariantProps<typeof sliderThumbVariants>['animation'];
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, variant, size, animation = 'none', ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(sliderVariants({ size, className }))}
      {...props}
    >
      <SliderPrimitive.Track className={cn(sliderTrackVariants({ variant }))}>
        <SliderPrimitive.Range
          className={cn(sliderRangeVariants({ variant }))}
        />
      </SliderPrimitive.Track>
      {props.defaultValue?.map((_, i) => (
        <SliderThumb
          key={i}
          variant={variant}
          size={size}
          animation={animation}
        />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

interface SliderThumbProps extends VariantProps<typeof sliderThumbVariants> {}

const SliderThumb = ({ variant, size, animation }: SliderThumbProps) => {
  if (animation === 'grow') {
    return (
      <SliderPrimitive.Thumb
        className={cn(sliderThumbVariants({ variant, size }))}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full rounded-full z-10 bg-white"
        />
      </SliderPrimitive.Thumb>
    );
  }

  if (animation === 'shine') {
    return (
      <SliderPrimitive.Thumb
        className={cn(sliderThumbVariants({ variant, size }))}
      >
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden z-10 bg-white"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
          }}
        >
          <motion.div
            className="w-full h-full bg-white opacity-30"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </motion.div>
      </SliderPrimitive.Thumb>
    );
  }

  return (
    <SliderPrimitive.Thumb
      className={cn(sliderThumbVariants({ variant, size, animation }))}
    />
  );
};

export { Slider };
