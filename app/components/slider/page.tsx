'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Slider } from '@/components/ui/slider';

export default function SliderPage() {
  const [singleValue, setSingleValue] = React.useState([50]);
  const [rangeValue, setRangeValue] = React.useState([25, 75]);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Slider</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A control that allows users to make selections from a range of values.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Slider
          </h2>
          <p className="mb-6">A simple slider with default styling.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Value</span>
                  <span>{singleValue}%</span>
                </div>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  value={singleValue}
                  onValueChange={setSingleValue}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Range Slider */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Range Slider
          </h2>
          <p className="mb-6">
            A slider with two thumbs for selecting a range of values.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Range</span>
                  <span>
                    {rangeValue[0]}% - {rangeValue[1]}%
                  </span>
                </div>
                <Slider
                  defaultValue={[25, 75]}
                  max={100}
                  step={1}
                  value={rangeValue}
                  onValueChange={setRangeValue}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Slider Variants
          </h2>
          <p className="mb-6">Sliders with Ghibli-inspired styling variants.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm mb-1">Default</div>
                <Slider defaultValue={[70]} />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Nature</div>
                <Slider defaultValue={[70]} variant="nature" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Sky</div>
                <Slider defaultValue={[70]} variant="sky" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Spirit</div>
                <Slider defaultValue={[70]} variant="spirit" />
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Slider Sizes
          </h2>
          <p className="mb-6">Sliders come in different sizes.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm mb-1">Small</div>
                <Slider defaultValue={[50]} size="sm" variant="nature" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Default</div>
                <Slider defaultValue={[50]} variant="nature" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Large</div>
                <Slider defaultValue={[50]} size="lg" variant="nature" />
              </div>
            </div>
          </div>
        </section>

        {/* Animated Sliders */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Animated Sliders
          </h2>
          <p className="mb-6">Sliders with Ghibli-inspired animations.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm mb-1">Pulse Animation</div>
                <Slider defaultValue={[60]} variant="sky" animation="pulse" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Grow Animation</div>
                <Slider defaultValue={[60]} variant="spirit" animation="grow" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Shine Animation</div>
                <Slider
                  defaultValue={[60]}
                  variant="nature"
                  animation="shine"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Disabled Slider
          </h2>
          <p className="mb-6">A slider in its disabled state.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Slider defaultValue={[30]} disabled />
          </div>
        </section>

        {/* Stepped Slider */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Stepped Slider
          </h2>
          <p className="mb-6">A slider with specific steps.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Volume</span>
                <span>{singleValue}%</span>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={10}
                value={singleValue}
                onValueChange={setSingleValue}
                variant="nature"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
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
              <code>{`import { Slider } from '@/components/ui/slider';

// Basic slider
<Slider defaultValue={[50]} />

// Range slider
<Slider defaultValue={[20, 80]} />

// With variants
<Slider defaultValue={[50]} variant="nature" />

// With animations
<Slider defaultValue={[50]} variant="spirit" animation="grow" />

// With specific steps
<Slider
  defaultValue={[50]}
  max={100}
  step={10}
/>

// Controlled slider
const [value, setValue] = React.useState([50]);
<Slider
  value={value}
  onValueChange={setValue}
  max={100}
  step={1}
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
