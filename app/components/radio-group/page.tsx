'use client';

import * as React from 'react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RadioGroupPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">
          Radio Group
        </h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A set of checkable buttons where only one can be checked at a time.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Radio Group
          </h2>
          <p className="mb-6">A simple radio group with default styling.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <form>
              <RadioGroup defaultValue="option-two">
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label htmlFor="option-one">Option One</label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label htmlFor="option-two">Option Two</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <label htmlFor="option-three">Option Three</label>
                </div>
              </RadioGroup>
            </form>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Radio Group Variants
          </h2>
          <p className="mb-6">
            Radio groups in different Ghibli-inspired styles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Nature Variant
              </h3>
              <RadioGroup defaultValue="totoro">
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem
                    value="totoro"
                    id="nature-totoro"
                    variant="nature"
                  />
                  <label htmlFor="nature-totoro">My Neighbor Totoro</label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem
                    value="ponyo"
                    id="nature-ponyo"
                    variant="nature"
                  />
                  <label htmlFor="nature-ponyo">Ponyo</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="mononoke"
                    id="nature-mononoke"
                    variant="nature"
                  />
                  <label htmlFor="nature-mononoke">Princess Mononoke</label>
                </div>
              </RadioGroup>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sky Variant
              </h3>
              <RadioGroup defaultValue="castle">
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem
                    value="castle"
                    id="sky-castle"
                    variant="sky"
                  />
                  <label htmlFor="sky-castle">Castle in the Sky</label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="howl" id="sky-howl" variant="sky" />
                  <label htmlFor="sky-howl">Howl&apos;s Moving Castle</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wind" id="sky-wind" variant="sky" />
                  <label htmlFor="sky-wind">The Wind Rises</label>
                </div>
              </RadioGroup>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Spirit Variant
              </h3>
              <RadioGroup defaultValue="spirited">
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem
                    value="spirited"
                    id="spirit-spirited"
                    variant="spirit"
                  />
                  <label htmlFor="spirit-spirited">Spirited Away</label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem
                    value="kiki"
                    id="spirit-kiki"
                    variant="spirit"
                  />
                  <label htmlFor="spirit-kiki">
                    Kiki&apos;s Delivery Service
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="arrietty"
                    id="spirit-arrietty"
                    variant="spirit"
                  />
                  <label htmlFor="spirit-arrietty">
                    The Secret World of Arrietty
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Radio Group Sizes
          </h2>
          <p className="mb-6">Radio groups are available in different sizes.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Small Size</h3>
                <RadioGroup defaultValue="sm-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem
                      value="sm-1"
                      id="sm-1"
                      size="sm"
                      variant="nature"
                    />
                    <label htmlFor="sm-1" className="text-sm">
                      Small Option 1
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="sm-2"
                      id="sm-2"
                      size="sm"
                      variant="nature"
                    />
                    <label htmlFor="sm-2" className="text-sm">
                      Small Option 2
                    </label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Default Size</h3>
                <RadioGroup defaultValue="default-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem
                      value="default-1"
                      id="default-1"
                      variant="nature"
                    />
                    <label htmlFor="default-1">Default Option 1</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="default-2"
                      id="default-2"
                      variant="nature"
                    />
                    <label htmlFor="default-2">Default Option 2</label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Large Size</h3>
                <RadioGroup defaultValue="lg-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem
                      value="lg-1"
                      id="lg-1"
                      size="lg"
                      variant="nature"
                    />
                    <label htmlFor="lg-1" className="text-lg">
                      Large Option 1
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="lg-2"
                      id="lg-2"
                      size="lg"
                      variant="nature"
                    />
                    <label htmlFor="lg-2" className="text-lg">
                      Large Option 2
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Animated Radio Groups
          </h2>
          <p className="mb-6">Radio groups with Ghibli-inspired animations.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Grow Animation</h3>
                <RadioGroup defaultValue="grow-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem
                      value="grow-1"
                      id="grow-1"
                      variant="sky"
                      animation="grow"
                    />
                    <label htmlFor="grow-1">Grow Option 1</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="grow-2"
                      id="grow-2"
                      variant="sky"
                      animation="grow"
                    />
                    <label htmlFor="grow-2">Grow Option 2</label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Pulse Animation</h3>
                <RadioGroup defaultValue="pulse-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem
                      value="pulse-1"
                      id="pulse-1"
                      variant="spirit"
                      animation="pulse"
                    />
                    <label htmlFor="pulse-1">Pulse Option 1</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="pulse-2"
                      id="pulse-2"
                      variant="spirit"
                      animation="pulse"
                    />
                    <label htmlFor="pulse-2">Pulse Option 2</label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Sparkle Animation</h3>
                <RadioGroup defaultValue="sparkle-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem
                      value="sparkle-1"
                      id="sparkle-1"
                      variant="nature"
                      animation="sparkle"
                    />
                    <label htmlFor="sparkle-1">Sparkle Option 1</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="sparkle-2"
                      id="sparkle-2"
                      variant="nature"
                      animation="sparkle"
                    />
                    <label htmlFor="sparkle-2">Sparkle Option 2</label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Layout */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Horizontal Layout
          </h2>
          <p className="mb-6">Radio groups can be displayed horizontally.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <RadioGroup defaultValue="horizontal-2" orientation="horizontal">
              <div className="flex items-center space-x-2 mr-6">
                <RadioGroupItem
                  value="horizontal-1"
                  id="horizontal-1"
                  variant="sky"
                />
                <label htmlFor="horizontal-1">Option 1</label>
              </div>
              <div className="flex items-center space-x-2 mr-6">
                <RadioGroupItem
                  value="horizontal-2"
                  id="horizontal-2"
                  variant="sky"
                />
                <label htmlFor="horizontal-2">Option 2</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="horizontal-3"
                  id="horizontal-3"
                  variant="sky"
                />
                <label htmlFor="horizontal-3">Option 3</label>
              </div>
            </RadioGroup>
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Usage
          </h2>
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige space-y-4">
            <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
              <code>{`import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// Basic radio group
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <label htmlFor="option-one">Option One</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <label htmlFor="option-two">Option Two</label>
  </div>
</RadioGroup>

// With variants and animations
<RadioGroupItem 
  value="option-one" 
  id="option-one" 
  variant="nature" 
  animation="grow" 
/>

// With different sizes
<RadioGroupItem 
  value="option-one" 
  id="option-one" 
  size="lg" 
/>

// Horizontal layout
<RadioGroup defaultValue="option-one" orientation="horizontal">
  {/* Radio items */}
</RadioGroup>
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
