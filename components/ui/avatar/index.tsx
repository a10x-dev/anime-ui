'use client';

import './styles.css';

import * as React from 'react';

import { HTMLMotionProps, motion } from 'motion/react';

import { cn } from '@/lib/utils';

interface AvatarProps extends Omit<HTMLMotionProps<'div'>, 'onDrag'> {
  // Optional animation variant
  variant?: 'default' | 'nature' | 'sky' | 'spirit';
  // Source for the avatar image
  src?: string;
  // Alt text for the avatar image
  alt?: string;
  // Fallback for when image fails to load
  fallback?: React.ReactNode;
  // Size of the avatar: 'sm', 'md', 'lg'
  size?: 'sm' | 'md' | 'lg';
  // Apply delicate animation on hover
  animated?: boolean;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      variant = 'default',
      src,
      alt,
      fallback,
      size = 'md',
      animated = true,
      ...props
    },
    ref
  ) => {
    const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>(
      'loading'
    );

    // Handle image load
    const handleLoad = React.useCallback(() => setStatus('loaded'), []);

    // Handle image error
    const handleError = React.useCallback(() => setStatus('error'), []);

    // Size classes
    const sizeClasses = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-14 w-14',
    };

    // Animation variants
    const hoverAnimation = animated
      ? {
          whileHover: {
            scale: 1.05,
            boxShadow:
              '0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(141, 198, 63, 0.2)',
          },
          transition: {
            duration: 0.2,
          },
        }
      : {};

    return (
      <motion.div
        ref={ref}
        className={cn(
          'ghibli-avatar',
          `ghibli-avatar-${variant}`,
          sizeClasses[size],
          className
        )}
        {...hoverAnimation}
        {...props}
      >
        {status !== 'error' && src ? (
          <img
            src={src}
            alt={alt}
            className="ghibli-avatar-image"
            onLoad={handleLoad}
            onError={handleError}
          />
        ) : (
          <div className="ghibli-avatar-fallback">
            {fallback || (
              <span className="ghibli-avatar-initials">
                {/* Extract initials from alt text if available */}
                {alt
                  ? alt
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)
                  : '?'}
              </span>
            )}
          </div>
        )}

        {/* Add variant-specific visual effects */}
        {variant === 'spirit' && (
          <div className="ghibli-avatar-spirit-effect"></div>
        )}
        {variant === 'nature' && (
          <div className="ghibli-avatar-nature-effect"></div>
        )}
        {variant === 'sky' && <div className="ghibli-avatar-sky-effect"></div>}
      </motion.div>
    );
  }
);
Avatar.displayName = 'Avatar';

export { Avatar };
