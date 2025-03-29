'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const selectTriggerVariants = cva(
  'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-ghibli-green-dark/30 focus:ring-ghibli-green',
        outline: 'border-ghibli-green-dark focus:ring-ghibli-green',
        // Ghibli-inspired variants
        nature:
          'border-ghibli-green bg-ghibli-green-light/10 focus:ring-ghibli-green',
        sky: 'border-ghibli-sky bg-ghibli-sky/10 focus:ring-ghibli-sky',
        spirit:
          'border-ghibli-beige bg-ghibli-beige/10 focus:ring-ghibli-beige',
      },
      size: {
        default: 'h-10',
        sm: 'h-8 text-xs px-2',
        lg: 'h-12 text-base px-4',
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

const selectContentVariants = cva(
  'relative z-50 min-w-[12rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      variant: {
        default: 'border-ghibli-green-dark/30 bg-white/95',
        outline: 'border-ghibli-green-dark bg-white/95',
        // Ghibli-inspired variants
        nature: 'border-ghibli-green bg-ghibli-green-light/10',
        sky: 'border-ghibli-sky bg-ghibli-sky/10',
        spirit: 'border-ghibli-beige bg-ghibli-beige/10',
      },
      position: {
        popper:
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        'item-aligned': '',
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-xl overflow-hidden',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'popper',
      rounded: 'default',
    },
  }
);

const selectItemVariants = cva(
  'relative flex w-full cursor-pointer select-none items-center py-2 px-6 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 rounded-md transition-colors duration-150',
  {
    variants: {
      variant: {
        default:
          'hover:bg-ghibli-green-light/20 hover:text-ghibli-green-dark data-[highlighted]:bg-ghibli-green-light/20 data-[highlighted]:text-ghibli-green-dark',
        outline:
          'hover:bg-ghibli-green-light/20 hover:text-ghibli-green-dark data-[highlighted]:bg-ghibli-green-light/20 data-[highlighted]:text-ghibli-green-dark',
        // Ghibli-inspired variants
        nature:
          'hover:bg-ghibli-green-light/30 hover:text-ghibli-green-dark data-[highlighted]:bg-ghibli-green-light/30 data-[highlighted]:text-ghibli-green-dark',
        sky: 'hover:bg-ghibli-sky/30 hover:text-ghibli-blue-dark data-[highlighted]:bg-ghibli-sky/30 data-[highlighted]:text-ghibli-blue-dark',
        spirit:
          'hover:bg-ghibli-beige/30 hover:text-ghibli-brown data-[highlighted]:bg-ghibli-beige/30 data-[highlighted]:text-ghibli-brown',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Select
 * -----------------------------------------------------------------------------------------------*/

const Select = SelectPrimitive.Root;
Select.displayName = SelectPrimitive.Root.displayName;

/* -------------------------------------------------------------------------------------------------
 * SelectTrigger
 * -----------------------------------------------------------------------------------------------*/

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, variant, size, rounded, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ variant, size, rounded, className }))}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

/* -------------------------------------------------------------------------------------------------
 * SelectValue
 * -----------------------------------------------------------------------------------------------*/

const SelectValue = SelectPrimitive.Value;

/* -------------------------------------------------------------------------------------------------
 * SelectContent
 * -----------------------------------------------------------------------------------------------*/

export interface SelectContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
      'position'
    >,
    VariantProps<typeof selectContentVariants> {
  position?: 'popper' | 'item-aligned';
}

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(
  (
    { className, children, position = 'popper', variant, rounded, ...props },
    ref
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          selectContentVariants({
            variant,
            position,
            rounded,
            className,
          }),
          'max-h-[var(--radix-select-content-available-height)]'
        )}
        position={position}
        {...props}
        asChild
      >
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <SelectPrimitive.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-transparent text-slate-500">
            <ChevronUp className="h-4 w-4" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport
            className={cn(
              'p-2',
              position === 'popper' &&
                'h-auto max-h-[var(--radix-select-content-available-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-transparent text-slate-500">
            <ChevronDown className="h-4 w-4" />
          </SelectPrimitive.ScrollDownButton>
        </motion.div>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

/* -------------------------------------------------------------------------------------------------
 * SelectLabel
 * -----------------------------------------------------------------------------------------------*/

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

/* -------------------------------------------------------------------------------------------------
 * SelectItem
 * -----------------------------------------------------------------------------------------------*/

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    VariantProps<typeof selectItemVariants> {}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, variant, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(selectItemVariants({ variant, className }))}
    {...props}
  >
    <div className="flex items-center gap-2 w-full">
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </div>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

/* -------------------------------------------------------------------------------------------------
 * SelectSeparator
 * -----------------------------------------------------------------------------------------------*/

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-slate-100', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/* -------------------------------------------------------------------------------------------------
 * SelectGroup
 * -----------------------------------------------------------------------------------------------*/

const SelectGroup = SelectPrimitive.Group;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
