import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-ghibli-green-dark text-white hover:bg-ghibli-green-dark/80',
        secondary:
          'border-transparent bg-ghibli-beige text-ghibli-brown hover:bg-ghibli-beige/80',
        outline: 'text-foreground border-ghibli-beige',
        nature:
          'border-transparent bg-ghibli-green-light/20 text-ghibli-green-dark',
        sky: 'border-transparent bg-ghibli-sky/20 text-ghibli-blue',
        spirit: 'border-transparent bg-ghibli-beige/20 text-ghibli-brown',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  className?: string;
}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
