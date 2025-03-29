'use client';

import './styles.css';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & {
    // Optional animation variant for different Ghibli-inspired themes
    variant?: 'default' | 'nature' | 'sky' | 'spirit';
  }
>(({ className, variant = 'default', ...props }, ref) => {
  // Access the pressed state for animations
  const [isPressed, setIsPressed] = React.useState(!!props.pressed);

  React.useEffect(() => {
    // Update the internal state when the pressed prop changes
    setIsPressed(!!props.pressed);
  }, [props.pressed]);

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn('ghibli-toggle', `ghibli-toggle-${variant}`, className)}
      onPressedChange={(pressed) => {
        setIsPressed(pressed);
        if (props.onPressedChange) {
          props.onPressedChange(pressed);
        }
      }}
      {...props}
    >
      <motion.div
        className="ghibli-toggle-thumb"
        animate={isPressed ? { x: 'calc(100% - 1.25rem)' } : { x: '0.125rem' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Add variant-specific visual effects */}
      {variant === 'spirit' && (
        <motion.div
          className="ghibli-toggle-spirit-effect"
          animate={isPressed ? { opacity: 1 } : { opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {variant === 'nature' && (
        <motion.div
          className="ghibli-toggle-nature-effect"
          animate={
            isPressed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.3 }}
        />
      )}

      {variant === 'sky' && (
        <motion.div
          className="ghibli-toggle-sky-effect"
          animate={isPressed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {props.children}
    </TogglePrimitive.Root>
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
