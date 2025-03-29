'use client';

import './styles.css';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

import { AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, ...props }, ref) => {
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 25,
          }}
        >
          <ToastPrimitives.Root
            ref={ref}
            className={cn(
              'ghibli-toast',
              'group relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg p-6 pr-8 shadow-lg',
              className
            )}
            {...props}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'ghibli-toast-action',
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'ghibli-toast-close',
      'absolute right-2 top-2 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100',
      className
    )}
    toast-close=""
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('ghibli-toast-title', 'text-lg font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('ghibli-toast-description', 'text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// Types for various toast variants
type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast> & {
  variant?: ToastVariant;
};

// Enhanced Toast component with variants
const GhibliToast = React.forwardRef<
  React.ElementRef<typeof Toast>,
  ToastProps
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <Toast
      ref={ref}
      className={cn(
        {
          'ghibli-toast-default': variant === 'default',
          'ghibli-toast-success': variant === 'success',
          'ghibli-toast-error': variant === 'error',
          'ghibli-toast-warning': variant === 'warning',
          'ghibli-toast-info': variant === 'info',
        },
        className
      )}
      {...props}
    />
  );
});
GhibliToast.displayName = 'GhibliToast';

export {
  ToastProvider,
  ToastViewport,
  GhibliToast as Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
