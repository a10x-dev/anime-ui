'use client';

import './styles.css';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    // Theme variant
    variant?: 'default' | 'nature' | 'sky' | 'spirit';
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'ghibli-tabs-list',
      `ghibli-tabs-list-${variant}`,
      'flex h-12 items-center justify-center rounded-lg bg-white/20 p-1 backdrop-blur-sm',
      className
    )}
    {...props}
    data-variant={variant}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    // Optional icon to display next to the tab text
    icon?: React.ReactNode;
    // Animation variant
    animation?: 'default' | 'grow' | 'slide' | 'bounce';
    // Theme variant - if not specified, inherits from parent TabsList
    variant?: 'default' | 'nature' | 'sky' | 'spirit';
  }
>(
  (
    { className, children, icon, animation = 'default', variant, ...props },
    ref
  ) => {
    // Check if the tab is selected based on data-state
    const isSelected = props['data-state' as keyof typeof props] === 'active';

    // Reference to find parent variant
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const [parentVariant, setParentVariant] = React.useState<string | null>(
      null
    );

    // Determine variant (either from props or from parent)
    const effectiveVariant =
      variant ||
      (parentVariant as 'default' | 'nature' | 'sky' | 'spirit' | null) ||
      'default';

    // Get parent variant when mounted
    React.useEffect(() => {
      if (triggerRef.current) {
        const parentList = triggerRef.current.closest('[data-variant]');
        if (parentList) {
          setParentVariant(parentList.getAttribute('data-variant'));
        }
      }
    }, []);

    return (
      <TabsPrimitive.Trigger
        ref={(node) => {
          // Handle both refs
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          triggerRef.current = node;
        }}
        className={cn(
          'ghibli-tabs-trigger',
          `ghibli-tabs-trigger-${effectiveVariant}`,
          'relative flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          className
        )}
        {...props}
      >
        <motion.div
          className="flex items-center gap-2"
          whileHover={animation === 'grow' ? { scale: 1.05 } : undefined}
          whileTap={animation === 'grow' ? { scale: 0.98 } : undefined}
          {...(animation === 'bounce' && {
            whileHover: {
              y: [0, -3, 0],
              transition: { repeat: Infinity, duration: 1 },
            },
          })}
          {...(animation === 'slide' && {
            whileHover: {
              x: [0, 3, 0],
              transition: { repeat: Infinity, duration: 1 },
            },
          })}
        >
          {icon && <span className="ghibli-tabs-icon">{icon}</span>}
          {children}
        </motion.div>

        {isSelected && (
          <motion.div
            className={cn(
              'ghibli-tabs-active-indicator',
              `ghibli-tabs-active-indicator-${effectiveVariant}`
            )}
            layoutId="ghibli-tab-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          />
        )}
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
    // Animation variant
    animation?: 'fade' | 'slide' | 'scale' | 'none';
    // Theme variant
    variant?: 'default' | 'nature' | 'sky' | 'spirit';
  }
>(
  (
    { className, children, animation = 'fade', variant = 'default', ...props },
    ref
  ) => {
    // Check if the content is selected based on data-state
    const isSelected = props['data-state' as keyof typeof props] === 'active';

    // Define animation variants
    const animations = {
      fade: {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
        transition: { duration: 0.4, ease: 'easeOut' },
      },
      slide: {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.3, ease: 'easeOut' },
      },
      scale: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        transition: {
          duration: 0.3,
          type: 'spring',
          stiffness: 500,
          damping: 30,
        },
      },
      none: {},
    };

    return (
      <TabsPrimitive.Content
        ref={ref}
        className={cn(
          'ghibli-tabs-content',
          `ghibli-tabs-content-${variant}`,
          'mt-2 rounded-lg p-6 border-2 border-ghibli-beige/50 bg-white/30 backdrop-blur-sm ring-offset-white focus-visible:outline-none',
          className
        )}
        {...props}
      >
        {isSelected && animation !== 'none' ? (
          <motion.div {...animations[animation]}>{children}</motion.div>
        ) : (
          children
        )}

        {/* Add variant-specific visual effects */}
        {variant === 'spirit' && (
          <div className="ghibli-tabs-spirit-effect"></div>
        )}
        {variant === 'nature' && (
          <div className="ghibli-tabs-nature-effect"></div>
        )}
        {variant === 'sky' && <div className="ghibli-tabs-sky-effect"></div>}
      </TabsPrimitive.Content>
    );
  }
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
