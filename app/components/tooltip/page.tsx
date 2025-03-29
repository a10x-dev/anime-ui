'use client';

import * as React from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TooltipPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Tooltip</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          Magical tooltips that display information when users hover over or
          focus on an element.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Variants
          </h2>
          <p className="mb-6">
            Our tooltips come in four magical variants inspired by Studio Ghibli
            aesthetics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Default Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent variant="default">
                  <p>This is a default tooltip</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="nature">Nature Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent variant="nature">
                  <p>This is a nature-styled tooltip with leaf decorations</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="sky">Sky Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent variant="sky">
                  <p>This is a sky-styled tooltip with cloud decorations</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Spirit Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent variant="spirit">
                  <p>This is a spirit-styled tooltip with magical sparkles</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Positioning Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Positioning
          </h2>
          <p className="mb-6">
            Tooltips can be positioned in different directions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Top
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip on top</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Right
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Tooltip on right</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Bottom
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Tooltip on bottom</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Left
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Tooltip on left</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Custom Content */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Custom Content
          </h2>
          <p className="mb-6">
            Tooltips can contain rich content, not just text.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Rich Content</Button>
              </TooltipTrigger>
              <TooltipContent variant="nature" className="w-80">
                <div className="space-y-2">
                  <h3 className="font-bold text-ghibli-green-dark">
                    Custom Tooltip
                  </h3>
                  <p>
                    This tooltip contains rich content with multiple elements.
                  </p>
                  <div className="border-t border-ghibli-green-light/30 pt-2 mt-2">
                    <p className="text-sm text-ghibli-green-dark/70">
                      You can include images, links, and other HTML elements.
                    </p>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Usage
          </h2>
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige space-y-4">
            <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
              <code>{`import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

// Basic tooltip
<Tooltip>
  <TooltipTrigger asChild>
    <Button>Hover Me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>

// With a specific variant
<TooltipContent variant="nature">
  <p>Nature-styled tooltip</p>
</TooltipContent>

// Positioned tooltip
<TooltipContent side="right">
  <p>Right-sided tooltip</p>
</TooltipContent>
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
