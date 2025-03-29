import * as React from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'beige' | 'nature' | 'sky';
  animation?: 'float' | 'fade' | 'scale' | 'none';
  hover?: boolean;
};

export function AnimatedCard({
  children,
  className,
  variant = 'default',
  animation = 'fade',
  hover = false,
}: AnimatedCardProps) {
  const variantStyles = {
    default: 'bg-ghibli-beige border-ghibli-beige-dark',
    beige: 'bg-ghibli-beige border-ghibli-beige-dark',
    nature: 'bg-ghibli-green-light border-ghibli-green',
    sky: 'bg-ghibli-sky-light border-ghibli-sky',
  };

  const baseStyles = cn(
    'rounded-xl border-2 shadow-ghibli p-4',
    variantStyles[variant],
    className
  );

  // Set up motion props based on animation type
  let motionProps = {};

  if (animation === 'fade') {
    motionProps = {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10 },
      transition: { duration: 0.5, ease: 'easeOut' },
    };
  } else if (animation === 'scale') {
    motionProps = {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.95, opacity: 0 },
      transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] },
    };
  } else if (animation === 'float') {
    motionProps = {
      animate: {
        y: [0, -10, 0],
      },
      transition: {
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    };
  }

  if (hover) {
    motionProps = {
      ...motionProps,
      whileHover: { scale: 1.03, transition: { duration: 0.2 } },
    };
  }

  return (
    <motion.div className={baseStyles} {...motionProps}>
      {children}
    </motion.div>
  );
}

export const AnimatedCardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 p-2', className)} {...props} />
);

export const AnimatedCardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      'text-xl font-semibold leading-none tracking-tight text-ghibli-brown',
      className
    )}
    {...props}
  />
);

export const AnimatedCardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
);

export const AnimatedCardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-2 pt-0', className)} {...props} />
);

export const AnimatedCardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center p-2 pt-0', className)} {...props} />
);
