'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full border-2 bg-white/70 px-3 py-2 text-sm focus:outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-ghibli-beige-dark text-ghibli-brown placeholder-ghibli-brown/60 focus:border-ghibli-green',
        outline:
          'border-ghibli-green-dark text-ghibli-brown placeholder-ghibli-brown/60 focus:border-ghibli-green',
        // Ghibli-inspired variants
        nature:
          'border-ghibli-green text-ghibli-green-dark placeholder-ghibli-green-dark/60 bg-ghibli-green-light/10 focus:border-ghibli-green-dark',
        sky: 'border-ghibli-sky text-ghibli-blue placeholder-ghibli-blue/60 bg-ghibli-sky/10 focus:border-ghibli-blue',
        spirit:
          'border-ghibli-beige text-ghibli-brown placeholder-ghibli-brown/60 bg-ghibli-beige/10 focus:border-ghibli-brown',
      },
      inputSize: {
        default: 'h-10 py-2',
        sm: 'h-8 px-2 py-1 text-xs',
        lg: 'h-12 px-4 py-3 text-lg',
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-full',
        leftFull: 'rounded-l-full',
        rightFull: 'rounded-r-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
      rounded: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, rounded, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, inputSize, rounded, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
