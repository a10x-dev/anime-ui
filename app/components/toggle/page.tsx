'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';

export default function TogglePage() {
  const [pressed, setPressed] = React.useState(false);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Toggle</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A two-state button that can be either on or off, with Ghibli-inspired
          magical animations.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Variants
          </h2>
          <p className="mb-6">
            Our toggles come in four magical variants inspired by Studio Ghibli
            aesthetics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Default
              </h3>
              <div className="flex items-center gap-4">
                <Toggle variant="default" aria-label="Toggle option" />
                <span>Default Toggle</span>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Nature
              </h3>
              <div className="flex items-center gap-4">
                <Toggle variant="nature" aria-label="Toggle nature option" />
                <span>Nature Toggle</span>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sky
              </h3>
              <div className="flex items-center gap-4">
                <Toggle variant="sky" aria-label="Toggle sky option" />
                <span>Sky Toggle</span>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Spirit
              </h3>
              <div className="flex items-center gap-4">
                <Toggle variant="spirit" aria-label="Toggle spirit option" />
                <span>Spirit Toggle</span>
              </div>
            </div>
          </div>
        </section>

        {/* Controlled Toggle */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Controlled Toggle
          </h2>
          <p className="mb-6">
            An example of a controlled toggle using React state.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Toggle
                  variant="nature"
                  pressed={pressed}
                  onPressedChange={setPressed}
                  aria-label="Controlled toggle"
                />
                <span>Toggle is {pressed ? 'ON' : 'OFF'}</span>
              </div>
              <Button onClick={() => setPressed(!pressed)} className="w-fit">
                Toggle State
              </Button>
            </div>
          </div>
        </section>

        {/* Toggle with Text */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Toggle with Text
          </h2>
          <p className="mb-6">Toggles can also contain text content.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Text Toggle
              </h3>
              <Toggle className="px-4">Bold</Toggle>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Toggle Group Example
              </h3>
              <div className="flex items-center gap-2">
                <Toggle variant="nature" className="px-3">
                  B
                </Toggle>
                <Toggle variant="nature" className="px-3">
                  I
                </Toggle>
                <Toggle variant="nature" className="px-3">
                  U
                </Toggle>
              </div>
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
              <code>{`import { Toggle } from '@/components/ui/toggle';

// Basic toggle
<Toggle aria-label="Toggle italic" />

// With a specific variant
<Toggle variant="nature" aria-label="Toggle nature option" />

// With children
<Toggle>Bold</Toggle>

// Controlled toggle
const [pressed, setPressed] = useState(false);
<Toggle 
  pressed={pressed} 
  onPressedChange={setPressed}
  aria-label="Controlled toggle"
/>
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
