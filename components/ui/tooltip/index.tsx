'use client';

import './styles.css';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    // Optional animation variant
    variant?: 'default' | 'nature' | 'sky' | 'spirit';
    // Arrow position
    withArrow?: boolean;
  }
>(
  (
    {
      className,
      variant = 'default',
      withArrow = true,
      sideOffset = 4,
      ...props
    },
    ref
  ) => (
    <AnimatePresence>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn('ghibli-tooltip', `ghibli-tooltip-${variant}`, className)}
        {...props}
        asChild
      >
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{
            duration: 0.25,
            ease: [0.175, 0.885, 0.32, 1.275], // Custom spring-like easing
          }}
        >
          {props.children}

          {withArrow && (
            <motion.div
              className="ghibli-tooltip-arrow-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
            >
              <TooltipPrimitive.Arrow
                className={`ghibli-tooltip-arrow ghibli-tooltip-arrow-${variant}`}
              />
            </motion.div>
          )}

          {/* Add variant-specific visual effects */}
          {variant === 'spirit' && (
            <div className="ghibli-tooltip-spirit-effect"></div>
          )}
          {variant === 'nature' && (
            <div className="ghibli-tooltip-nature-effect"></div>
          )}
          {variant === 'sky' && (
            <div className="ghibli-tooltip-sky-effect"></div>
          )}
        </motion.div>
      </TooltipPrimitive.Content>
    </AnimatePresence>
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Create a composed Tooltip component that includes Provider
const Tooltip = ({ children, ...props }: TooltipPrimitive.TooltipProps) => (
  <TooltipProvider>
    <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
  </TooltipProvider>
);

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
