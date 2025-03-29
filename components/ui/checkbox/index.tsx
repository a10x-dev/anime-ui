'use client';

import './styles.css';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

// Check icon component for the checkbox
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    // Optional animation variant for different Ghibli-inspired themes
    variant?: 'default' | 'nature' | 'sky' | 'spirit';
  }
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn('ghibli-checkbox', `ghibli-checkbox-${variant}`, className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild forceMount>
        <motion.div
          initial={{ scale: 0 }}
          animate={props.checked ? { scale: 1 } : { scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          className="ghibli-checkbox-indicator"
        >
          <CheckIcon className="h-4 w-4 text-current" />

          {/* Add sparkle effect for "spirit" variant when checked */}
          {variant === 'spirit' && props.checked && (
            <div className="ghibli-checkbox-sparkle"></div>
          )}

          {/* Add leaf effect for "nature" variant when checked */}
          {variant === 'nature' && props.checked && (
            <div className="ghibli-checkbox-leaf"></div>
          )}
        </motion.div>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
