'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import React from 'react';

export default function CheckboxPage() {
  const [checked, setChecked] = React.useState<boolean>(false);

  // Create a handler function to convert CheckedState to boolean
  const handleCheckedChange = (value: boolean | 'indeterminate') => {
    setChecked(value === true);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Checkbox</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          Ghibli-inspired checkboxes with magical animations and effects.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Variants
          </h2>
          <p className="mb-6">
            Our checkboxes come in four magical variants inspired by Studio
            Ghibli&apos;s aesthetic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Default
              </h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="default" variant="default" />
                <label htmlFor="default" className="text-sm font-medium">
                  Default Checkbox
                </label>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Nature
              </h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="nature" variant="nature" />
                <label htmlFor="nature" className="text-sm font-medium">
                  Nature Checkbox
                </label>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sky
              </h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="sky" variant="sky" />
                <label htmlFor="sky" className="text-sm font-medium">
                  Sky Checkbox
                </label>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Spirit
              </h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="spirit" variant="spirit" />
                <label htmlFor="spirit" className="text-sm font-medium">
                  Spirit Checkbox
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Controlled Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Controlled Checkbox
          </h2>
          <p className="mb-6">
            An example of a controlled checkbox using React state.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="controlled"
                variant="nature"
                checked={checked}
                onCheckedChange={handleCheckedChange}
              />
              <label htmlFor="controlled" className="text-sm font-medium">
                {checked ? 'Checked' : 'Unchecked'}
              </label>
            </div>
            <Button onClick={() => setChecked(!checked)}>
              Toggle Checkbox
            </Button>
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Usage
          </h2>
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige space-y-4">
            <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
              <code>{`import { Checkbox } from '@/components/ui/checkbox';

// Basic checkbox
<Checkbox id="terms" />

// With variant
<Checkbox id="terms" variant="nature" />

// Controlled checkbox
const [checked, setChecked] = React.useState(false);
const handleCheckedChange = (value) => setChecked(value === true);

<Checkbox 
  id="terms" 
  checked={checked} 
  onCheckedChange={handleCheckedChange} 
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
