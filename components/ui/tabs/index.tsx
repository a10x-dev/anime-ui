'use client';

import './styles.css';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'ghibli-tabs-list',
      'flex h-12 items-center justify-center rounded-lg bg-white/20 p-1 backdrop-blur-sm',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    // Optional icon to display next to the tab text
    icon?: React.ReactNode;
  }
>(({ className, children, icon, ...props }, ref) => {
  // Check if the tab is selected based on data-state
  const isSelected = props['data-state' as keyof typeof props] === 'active';

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        'ghibli-tabs-trigger',
        'relative flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    >
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {icon && <span className="ghibli-tabs-icon">{icon}</span>}
        {children}
      </motion.div>

      {isSelected && (
        <motion.div
          className="ghibli-tabs-active-indicator"
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
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  // Check if the content is selected based on data-state
  const isSelected = props['data-state' as keyof typeof props] === 'active';

  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        'ghibli-tabs-content',
        'mt-2 rounded-lg p-6 border-2 border-ghibli-beige/50 bg-white/30 backdrop-blur-sm ring-offset-white focus-visible:outline-none',
        className
      )}
      {...props}
    >
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </TabsPrimitive.Content>
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
