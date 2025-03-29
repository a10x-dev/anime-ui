'use client';

import * as React from 'react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HoverCardPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">
          Hover Card
        </h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A popup card that appears when a user hovers over an element, perfect
          for more detailed explanations or previews.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Hover Card
          </h2>
          <p className="mb-6">
            A simple hover card that shows additional information when hovered.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button>Hover Me</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Studio Ghibli UI</h4>
                  <p className="text-sm">
                    A beautiful UI component library inspired by the magical
                    worlds of Studio Ghibli films.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Hover Card Variants
          </h2>
          <p className="mb-6">
            Hover cards come in different Ghibli-inspired themes and animation
            styles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Nature Theme with Float Animation
              </h3>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="nature">Nature Card</Button>
                </HoverCardTrigger>
                <HoverCardContent variant="nature" className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Forest Spirit</h4>
                    <p className="text-sm">
                      A card inspired by the lush forests and nature themes in
                      Ghibli films.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sky Theme with Grow Animation
              </h3>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="sky">Sky Card</Button>
                </HoverCardTrigger>
                <HoverCardContent variant="sky" className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Skyward Journey</h4>
                    <p className="text-sm">
                      A card inspired by the vast skies and flying machines in
                      Ghibli films.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Spirit Theme with Sparkle Animation
              </h3>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Spirit Card</Button>
                </HoverCardTrigger>
                <HoverCardContent variant="spirit" className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Magical Spirit</h4>
                    <p className="text-sm">
                      A card inspired by the mystical spirits and magical
                      elements in Ghibli films.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Default Theme with Leaf Animation
              </h3>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button>Leaf Card</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Leaf in the Wind</h4>
                    <p className="text-sm">
                      A card with a gentle leaf-like movement animation.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* User Profile Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            User Profile Example
          </h2>
          <p className="mb-6">
            A common use case for hover cards is to show user profile previews.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="#"
                  className="text-ghibli-green-dark font-medium underline"
                >
                  @studio_ghibli
                </a>
              </HoverCardTrigger>
              <HoverCardContent variant="nature" className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="w-12 h-12 rounded-full bg-ghibli-green-light flex items-center justify-center text-ghibli-green-dark font-bold">
                    SG
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Studio Ghibli</h4>
                    <p className="text-sm">
                      Japanese animation film studio known for its magical
                      storytelling and beautiful visuals.
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Joined 1985
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Usage
          </h2>
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige space-y-4">
            <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
              <code>{`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

// Basic hover card
<HoverCard>
  <HoverCardTrigger asChild>
    <Button>Hover Me</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Title</h4>
      <p className="text-sm">Description text goes here.</p>
    </div>
  </HoverCardContent>
</HoverCard>

// With animation and variant
<HoverCardContent 
  animation="float" 
  variant="nature" 
  className="w-80"
>
  {/* Content */}
</HoverCardContent>
`}</code>
            </pre>
          </div>
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
