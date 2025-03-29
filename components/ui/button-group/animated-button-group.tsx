'use client';

import * as React from 'react';

import { ButtonGroupProps, buttonGroupVariants } from './button-group';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type AnimatedButtonGroupProps = Omit<ButtonGroupProps, 'className'> & {
  animation?: 'float' | 'grow' | 'sparkle' | 'leaf' | 'none';
  className?: string;
};

const AnimatedButtonGroup = React.forwardRef<
  HTMLDivElement,
  AnimatedButtonGroupProps
>(
  (
    {
      className,
      variant,
      size,
      rounded,
      orientation,
      animation = 'float',
      children,
      ...props
    },
    ref
  ) => {
    // Common class for the group
    const groupClasses = cn(
      buttonGroupVariants({ variant, size, rounded, orientation }),
      className
    );

    // Animation options based on the animation type
    let motionProps: Record<string, unknown> = {};

    switch (animation) {
      case 'float':
        motionProps = {
          initial: { y: 0 },
          animate: {
            y: [-2, 2, -2],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
          whileHover: {
            y: -5,
            transition: { duration: 0.2 },
          },
        };
        break;
      case 'grow':
        motionProps = {
          whileHover: {
            scale: 1.03,
            transition: { duration: 0.2 },
          },
          whileTap: { scale: 0.98 },
        };
        break;
      case 'sparkle':
        // Sparkle effect using box-shadow pulses
        motionProps = {
          initial: { boxShadow: '0 0 0 rgba(255, 255, 200, 0)' },
          animate: {
            boxShadow: [
              '0 0 0 rgba(255, 255, 200, 0)',
              '0 0 10px rgba(255, 255, 200, 0.5)',
              '0 0 0 rgba(255, 255, 200, 0)',
            ],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
          whileHover: {
            boxShadow: '0 0 15px rgba(255, 255, 200, 0.8)',
            transition: { duration: 0.3 },
          },
        };
        break;
      case 'leaf':
        // Gentle rotation like leaves in the wind
        motionProps = {
          initial: { rotate: 0 },
          animate: {
            rotate: [-0.5, 0.5, -0.5],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
          whileHover: {
            rotate: 0,
            scale: 1.03,
            transition: { duration: 0.2 },
          },
        };
        break;
      case 'none':
      default:
        // No animation
        motionProps = {};
    }

    return (
      <motion.div
        className={groupClasses}
        ref={ref}
        {...motionProps}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);
AnimatedButtonGroup.displayName = 'AnimatedButtonGroup';

export { AnimatedButtonGroup };
