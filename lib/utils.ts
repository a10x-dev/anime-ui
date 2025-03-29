import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Animation variants using Framer Motion
export const ghibliAnimations = {
  // Subtle floating animation like clouds
  float: {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  },

  // Gentle swaying like grass or plants
  sway: {
    initial: { rotate: 0 },
    animate: {
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  },

  // Fade in with slight rise, like morning mist
  fadeIn: {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  },

  // Scale in with slight bounce, like a character appearing
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.175, 0.885, 0.32, 1.275], // Custom spring-like easing
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  },

  // For buttons and interactive elements
  tap: {
    whileTap: { scale: 0.98 },
  },

  // For hover effects
  hover: {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  },
};
