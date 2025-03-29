'use client';

import * as React from 'react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const toolbarVariants = cva(
  'flex items-center gap-1 rounded-md border border-input bg-background p-1',
  {
    variants: {
      variant: {
        default: 'bg-white/60 border-ghibli-green-dark/30',
        // Ghibli-inspired variants
        nature: 'bg-ghibli-green-light/10 border-ghibli-green/40',
        sky: 'bg-ghibli-sky/10 border-ghibli-sky/40',
        spirit: 'bg-ghibli-beige/20 border-ghibli-beige/50',
      },
      size: {
        default: 'h-10',
        sm: 'h-8 p-0.5 gap-0.5',
        lg: 'h-12 p-1.5 gap-1.5',
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

const toolbarButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-transparent hover:bg-ghibli-green/10 text-ghibli-green-dark data-[state=on]:bg-ghibli-green/20',
        // Ghibli-inspired variants
        nature:
          'bg-transparent hover:bg-ghibli-green/15 text-ghibli-green-dark data-[state=on]:bg-ghibli-green/25',
        sky: 'bg-transparent hover:bg-ghibli-sky/15 text-ghibli-blue-dark data-[state=on]:bg-ghibli-sky/25',
        spirit:
          'bg-transparent hover:bg-ghibli-beige/20 text-ghibli-brown data-[state=on]:bg-ghibli-beige/30',
      },
      size: {
        default: 'h-8 px-2.5',
        sm: 'h-7 px-2 text-xs',
        lg: 'h-9 px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const toolbarSeparatorVariants = cva('w-[1px] bg-border', {
  variants: {
    variant: {
      default: 'bg-ghibli-green-dark/20',
      // Ghibli-inspired variants
      nature: 'bg-ghibli-green/30',
      sky: 'bg-ghibli-sky/30',
      spirit: 'bg-ghibli-beige/40',
    },
    orientation: {
      horizontal: 'h-full',
      vertical: 'h-[1px] w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    orientation: 'horizontal',
  },
});

const toolbarLinkVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-ghibli-green-dark hover:text-ghibli-green data-[active]:text-ghibli-green',
        // Ghibli-inspired variants
        nature:
          'text-ghibli-green-dark hover:text-ghibli-green data-[active]:text-ghibli-green',
        sky: 'text-ghibli-blue-dark hover:text-ghibli-sky data-[active]:text-ghibli-sky',
        spirit:
          'text-ghibli-brown hover:text-ghibli-beige data-[active]:text-ghibli-beige',
      },
      size: {
        default: 'h-8 px-2.5',
        sm: 'h-7 px-2 text-xs',
        lg: 'h-9 px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Toolbar
 * -----------------------------------------------------------------------------------------------*/

export interface ToolbarProps
  extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>,
    VariantProps<typeof toolbarVariants> {}

const Toolbar = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  ToolbarProps
>(({ className, variant, size, rounded, ...props }, ref) => (
  <ToolbarPrimitive.Root
    ref={ref}
    className={cn(toolbarVariants({ variant, size, rounded, className }))}
    {...props}
  />
));
Toolbar.displayName = ToolbarPrimitive.Root.displayName;

/* -------------------------------------------------------------------------------------------------
 * Toolbar Button
 * -----------------------------------------------------------------------------------------------*/

export interface ToolbarButtonProps
  extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button>,
    VariantProps<typeof toolbarButtonVariants> {}

const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Button>,
  ToolbarButtonProps
>(({ className, variant, size, ...props }, ref) => (
  <ToolbarPrimitive.Button
    ref={ref}
    className={cn(toolbarButtonVariants({ variant, size, className }))}
    {...props}
  />
));
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName;

/* -------------------------------------------------------------------------------------------------
 * Toolbar Separator
 * -----------------------------------------------------------------------------------------------*/

export interface ToolbarSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>,
    VariantProps<typeof toolbarSeparatorVariants> {}

const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Separator>,
  ToolbarSeparatorProps
>(({ className, variant, orientation, ...props }, ref) => (
  <ToolbarPrimitive.Separator
    ref={ref}
    className={cn(
      toolbarSeparatorVariants({ variant, orientation, className })
    )}
    {...props}
  />
));
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName;

/* -------------------------------------------------------------------------------------------------
 * Toolbar Link
 * -----------------------------------------------------------------------------------------------*/

export interface ToolbarLinkProps
  extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link>,
    VariantProps<typeof toolbarLinkVariants> {}

const ToolbarLink = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Link>,
  ToolbarLinkProps
>(({ className, variant, size, ...props }, ref) => (
  <ToolbarPrimitive.Link
    ref={ref}
    className={cn(toolbarLinkVariants({ variant, size, className }))}
    {...props}
  />
));
ToolbarLink.displayName = ToolbarPrimitive.Link.displayName;

/* -------------------------------------------------------------------------------------------------
 * Toolbar Toggle Group
 * -----------------------------------------------------------------------------------------------*/

const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup;

/* -------------------------------------------------------------------------------------------------
 * Toolbar Toggle Item
 * -----------------------------------------------------------------------------------------------*/

const ToolbarToggleItem = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleItem>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem> &
    VariantProps<typeof toolbarButtonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <ToolbarPrimitive.ToggleItem
    ref={ref}
    className={cn(toolbarButtonVariants({ variant, size, className }))}
    {...props}
  />
));
ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName;

export {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
};
