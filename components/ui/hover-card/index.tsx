'use client';

import './styles.css';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';

import { AnimatePresence, motion } from 'motion/react';
import { cn, ghibliAnimations } from '@/lib/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & {
    // Optional animation variant to apply different animations
    animationVariant?: 'float' | 'grow' | 'sparkle' | 'leaf';
  }
>(({ className, animationVariant = 'float', children, ...props }, ref) => {
  // Animation variants
  const animations = {
    float: {
      initial: { opacity: 0, y: 15, scale: 0.95 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 350,
          damping: 25,
        },
      },
      exit: {
        opacity: 0,
        y: 10,
        scale: 0.95,
        transition: { duration: 0.2 },
      },
    },
    grow: {
      initial: { opacity: 0, scale: 0.85 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 20,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.15 },
      },
    },
    sparkle: {
      initial: { opacity: 0, scale: 0.9, rotate: -3 },
      animate: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 25,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        rotate: 3,
        transition: { duration: 0.2 },
      },
    },
    leaf: {
      initial: { opacity: 0, x: -20, rotate: -10 },
      animate: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 25,
        },
      },
      exit: {
        opacity: 0,
        x: 20,
        rotate: 10,
        transition: { duration: 0.3 },
      },
    },
  };

  // Get selected animation variant
  const selectedAnimation = animations[animationVariant];

  return (
    <HoverCardPrimitive.Content
      ref={ref}
      sideOffset={5}
      collisionPadding={10}
      className={cn(
        `ghibli-hover-card ghibli-hover-card-${animationVariant}`,
        className
      )}
      {...props}
      asChild
    >
      <motion.div {...selectedAnimation} style={{ originX: 0.5, originY: 0 }}>
        {children}
        {animationVariant === 'sparkle' && (
          <div className="ghibli-hover-card-sparkles"></div>
        )}
        {animationVariant === 'leaf' && (
          <div className="ghibli-hover-card-leaves"></div>
        )}
      </motion.div>
    </HoverCardPrimitive.Content>
  );
});

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
