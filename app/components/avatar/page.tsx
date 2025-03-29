'use client';

import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AvatarPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Avatar</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          Image elements representing users with Ghibli-inspired styling and
          animations.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Basic Avatar</CardTitle>
              <CardDescription>
                Simple avatar components with different image sources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6">
                <Avatar alt="Totoro Avatar" />
                <Avatar alt="Ponyo Avatar" />
                <Avatar alt="Calcifer Avatar" />
                <Avatar alt="No Face" />
              </div>

              <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-ghibli-brown">
                  {`import { Avatar } from "@/components/ui/avatar"

<Avatar src="path/to/image.jpg" alt="User name" />

// Fallback with initials when no image is provided
<Avatar alt="John Doe" />`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Variants */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Variants</CardTitle>
              <CardDescription>
                Avatars with Ghibli-inspired theme variations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Default Variant
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <Avatar alt="Default Avatar" variant="default" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Nature Variant
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <Avatar alt="Nature Avatar" variant="nature" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Sky Variant
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <Avatar alt="Sky Avatar" variant="sky" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Spirit Variant
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <Avatar alt="Spirit Avatar" variant="spirit" />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-ghibli-brown">
                  {`<Avatar 
  src="path/to/image.jpg" 
  alt="Nature Avatar" 
  variant="nature" 
/>

<Avatar 
  src="path/to/image.jpg" 
  alt="Sky Avatar" 
  variant="sky" 
/>

<Avatar 
  src="path/to/image.jpg" 
  alt="Spirit Avatar" 
  variant="spirit" 
/>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Sizes</CardTitle>
              <CardDescription>
                Avatars come in different sizes to fit your design.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Small Size
                  </h3>
                  <div className="flex flex-wrap gap-6 items-center">
                    <Avatar alt="Small Avatar" size="sm" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Medium Size (Default)
                  </h3>
                  <div className="flex flex-wrap gap-6 items-center">
                    <Avatar alt="Medium Avatar" size="md" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Large Size
                  </h3>
                  <div className="flex flex-wrap gap-6 items-center">
                    <Avatar alt="Large Avatar" size="lg" />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-ghibli-brown">
                  {`<Avatar 
  src="path/to/image.jpg" 
  alt="Small Avatar" 
  size="sm" 
/>

<Avatar 
  src="path/to/image.jpg" 
  alt="Medium Avatar" 
  size="md" 
/>

<Avatar 
  src="path/to/image.jpg" 
  alt="Large Avatar" 
  size="lg" 
/>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fallbacks */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Fallbacks</CardTitle>
              <CardDescription>
                Avatars display fallback content when images fail to load.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Initial Fallbacks
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <Avatar alt="Totoro" />
                    <Avatar alt="Chihiro Ogino" />
                    <Avatar alt="Howl Jenkins Pendragon" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Custom Fallback
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <Avatar
                      alt="Custom Fallback"
                      fallback={<span className="text-xs">Ghibli</span>}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-ghibli-brown">
                  {`// Initials fallback automatically generated from alt text
<Avatar alt="Chihiro Ogino" />

// Custom fallback element
<Avatar 
  alt="Custom Fallback" 
  fallback={<span>Custom</span>} 
/>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Animations */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Animated Avatars</CardTitle>
              <CardDescription>
                Avatars with subtle animations on hover.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Animated (Default)
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <Avatar alt="Animated Avatar" animated />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Non-Animated
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <Avatar alt="Non-Animated Avatar" animated={false} />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-ghibli-brown">
                  {`// With hover animation (default)
<Avatar 
  src="path/to/image.jpg" 
  alt="Animated Avatar" 
  animated 
/>

// Without hover animation
<Avatar 
  src="path/to/image.jpg" 
  alt="Non-Animated Avatar" 
  animated={false} 
/>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Usage Examples</CardTitle>
              <CardDescription>
                Various ways to use avatars in your UI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    User Profile
                  </h3>
                  <div className="flex items-center gap-4 p-4 bg-white/40 rounded-lg">
                    <Avatar alt="Totoro" variant="nature" size="lg" />
                    <div>
                      <p className="font-medium">Totoro</p>
                      <p className="text-sm text-ghibli-green-dark">
                        Forest Spirit
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-ghibli-brown">
                    Avatar Group
                  </h3>
                  <div className="flex -space-x-4">
                    <Avatar alt="Totoro" variant="nature" />
                    <Avatar alt="Ponyo" variant="sky" />
                    <Avatar alt="No Face" variant="spirit" />
                    <Avatar alt="+" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Component Code */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Component Code</CardTitle>
              <CardDescription>
                Copy and paste this code into your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-ghibli-brown">
                  {`'use client';

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
  ({ className, variant = 'default', src, alt, fallback, size = 'md', animated = true, ...props }, ref) => {
    const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

    // Handle image load
    const handleLoad = React.useCallback(() => setStatus('loaded'), []);

    // Handle image error
    const handleError = React.useCallback(() => setStatus('error'), []);

    // Component implementation...
  }
);

export { Avatar };`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="mt-16 text-center">
        <Button asChild>
          <Link href="/components">Back to Components</Link>
        </Button>
      </div>
    </div>
  );
}
