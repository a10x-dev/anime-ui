'use client';

import * as React from 'react';

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from 'lucide-react';
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@/components/ui/toolbar';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ToolbarPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Toolbar</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A container for grouping a set of controls, such as buttons, toggle
          groups or dropdown menus.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Toolbar
          </h2>
          <p className="mb-6">A simple toolbar with buttons and separators.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Toolbar aria-label="Formatting options">
              <ToolbarButton aria-label="Bold">
                <Bold className="h-5 w-5" />
              </ToolbarButton>
              <ToolbarButton aria-label="Italic">
                <Italic className="h-5 w-5" />
              </ToolbarButton>
              <ToolbarButton aria-label="Underline">
                <Underline className="h-5 w-5" />
              </ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton aria-label="Left align">
                <AlignLeft className="h-5 w-5" />
              </ToolbarButton>
              <ToolbarButton aria-label="Center align">
                <AlignCenter className="h-5 w-5" />
              </ToolbarButton>
              <ToolbarButton aria-label="Right align">
                <AlignRight className="h-5 w-5" />
              </ToolbarButton>
            </Toolbar>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Toolbar Variants
          </h2>
          <p className="mb-6">
            Toolbars with Ghibli-inspired styling variants.
          </p>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Nature Variant
              </h3>
              <Toolbar variant="nature" aria-label="Nature themed toolbar">
                <ToolbarButton variant="nature" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="nature" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarSeparator variant="nature" />
                <ToolbarButton variant="nature" aria-label="Left align">
                  <AlignLeft className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="nature" aria-label="Center align">
                  <AlignCenter className="h-5 w-5" />
                </ToolbarButton>
              </Toolbar>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sky Variant
              </h3>
              <Toolbar variant="sky" aria-label="Sky themed toolbar">
                <ToolbarButton variant="sky" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="sky" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarSeparator variant="sky" />
                <ToolbarButton variant="sky" aria-label="Left align">
                  <AlignLeft className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="sky" aria-label="Center align">
                  <AlignCenter className="h-5 w-5" />
                </ToolbarButton>
              </Toolbar>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Spirit Variant
              </h3>
              <Toolbar variant="spirit" aria-label="Spirit themed toolbar">
                <ToolbarButton variant="spirit" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="spirit" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarSeparator variant="spirit" />
                <ToolbarButton variant="spirit" aria-label="Left align">
                  <AlignLeft className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="spirit" aria-label="Center align">
                  <AlignCenter className="h-5 w-5" />
                </ToolbarButton>
              </Toolbar>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Toolbar Sizes
          </h2>
          <p className="mb-6">Toolbars come in different sizes.</p>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Small Size
              </h3>
              <Toolbar size="sm" variant="nature" aria-label="Small toolbar">
                <ToolbarButton size="sm" variant="nature" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton size="sm" variant="nature" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarSeparator variant="nature" />
                <ToolbarButton
                  size="sm"
                  variant="nature"
                  aria-label="Left align"
                >
                  <AlignLeft className="h-4 w-4" />
                </ToolbarButton>
              </Toolbar>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Default Size
              </h3>
              <Toolbar variant="nature" aria-label="Default toolbar">
                <ToolbarButton variant="nature" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="nature" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarSeparator variant="nature" />
                <ToolbarButton variant="nature" aria-label="Left align">
                  <AlignLeft className="h-5 w-5" />
                </ToolbarButton>
              </Toolbar>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Large Size
              </h3>
              <Toolbar size="lg" variant="nature" aria-label="Large toolbar">
                <ToolbarButton size="lg" variant="nature" aria-label="Bold">
                  <Bold className="h-6 w-6" />
                </ToolbarButton>
                <ToolbarButton size="lg" variant="nature" aria-label="Italic">
                  <Italic className="h-6 w-6" />
                </ToolbarButton>
                <ToolbarSeparator variant="nature" />
                <ToolbarButton
                  size="lg"
                  variant="nature"
                  aria-label="Left align"
                >
                  <AlignLeft className="h-6 w-6" />
                </ToolbarButton>
              </Toolbar>
            </div>
          </div>
        </section>

        {/* Toggle Groups */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Toolbar with Toggle Groups
          </h2>
          <p className="mb-6">
            Toolbars can contain toggle groups for mutually exclusive options.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Toolbar
              variant="sky"
              aria-label="Text formatting"
              className="mb-4"
            >
              <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
                <ToolbarToggleItem value="bold" aria-label="Bold" variant="sky">
                  <Bold className="h-5 w-5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                  value="italic"
                  aria-label="Italic"
                  variant="sky"
                >
                  <Italic className="h-5 w-5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                  value="underline"
                  aria-label="Underline"
                  variant="sky"
                >
                  <Underline className="h-5 w-5" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>
              <ToolbarSeparator variant="sky" />
              <ToolbarToggleGroup
                type="single"
                defaultValue="left"
                aria-label="Text alignment"
              >
                <ToolbarToggleItem
                  value="left"
                  aria-label="Left aligned"
                  variant="sky"
                >
                  <AlignLeft className="h-5 w-5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                  value="center"
                  aria-label="Center aligned"
                  variant="sky"
                >
                  <AlignCenter className="h-5 w-5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                  value="right"
                  aria-label="Right aligned"
                  variant="sky"
                >
                  <AlignRight className="h-5 w-5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                  value="justify"
                  aria-label="Justify"
                  variant="sky"
                >
                  <AlignJustify className="h-5 w-5" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>
            </Toolbar>

            <div className="bg-ghibli-sky/10 p-4 rounded-md border border-ghibli-sky/30">
              <p className="text-sm">
                The toggle groups above let you select text formatting options
                (multiple can be selected) and text alignment (only one can be
                selected).
              </p>
            </div>
          </div>
        </section>

        {/* Rounded Styles */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Rounded Toolbar Styles
          </h2>
          <p className="mb-6">Toolbars with different corner roundness.</p>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Default Rounded
              </h3>
              <Toolbar variant="spirit" aria-label="Default rounded toolbar">
                <ToolbarButton variant="spirit" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="spirit" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToolbarButton>
              </Toolbar>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Small Corners
              </h3>
              <Toolbar
                variant="spirit"
                rounded="sm"
                aria-label="Small corner toolbar"
              >
                <ToolbarButton variant="spirit" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="spirit" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToolbarButton>
              </Toolbar>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Large Corners
              </h3>
              <Toolbar
                variant="spirit"
                rounded="lg"
                aria-label="Large corner toolbar"
              >
                <ToolbarButton variant="spirit" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="spirit" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToolbarButton>
              </Toolbar>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Fully Rounded
              </h3>
              <Toolbar
                variant="spirit"
                rounded="full"
                aria-label="Fully rounded toolbar"
              >
                <ToolbarButton variant="spirit" aria-label="Bold">
                  <Bold className="h-5 w-5" />
                </ToolbarButton>
                <ToolbarButton variant="spirit" aria-label="Italic">
                  <Italic className="h-5 w-5" />
                </ToolbarButton>
              </Toolbar>
            </div>
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
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@/components/ui/toolbar';

// Basic toolbar
<Toolbar aria-label="Formatting options">
  <ToolbarButton aria-label="Bold">
    <Bold className="h-5 w-5" />
  </ToolbarButton>
  <ToolbarButton aria-label="Italic">
    <Italic className="h-5 w-5" />
  </ToolbarButton>
  <ToolbarSeparator />
  <ToolbarButton aria-label="Left align">
    <AlignLeft className="h-5 w-5" />
  </ToolbarButton>
</Toolbar>

// With variants
<Toolbar variant="nature">
  {/* Toolbar items */}
</Toolbar>

// Toggle groups
<ToolbarToggleGroup type="single" defaultValue="left">
  <ToolbarToggleItem value="left">
    <AlignLeft className="h-5 w-5" />
  </ToolbarToggleItem>
  <ToolbarToggleItem value="center">
    <AlignCenter className="h-5 w-5" />
  </ToolbarToggleItem>
</ToolbarToggleGroup>

// With different sizes
<Toolbar size="lg">
  {/* Toolbar items */}
</Toolbar>

// With rounded corners
<Toolbar rounded="full">
  {/* Toolbar items */}
</Toolbar>
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
