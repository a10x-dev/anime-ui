'use client';

import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SelectPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Select</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A control that allows the user to choose a value from a list of
          options.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Select
          </h2>
          <p className="mb-6">
            A simple select component with default styling.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a film" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Studio Ghibli Films</SelectLabel>
                  <SelectItem value="spirited-away">Spirited Away</SelectItem>
                  <SelectItem value="howls-moving-castle">
                    Howl's Moving Castle
                  </SelectItem>
                  <SelectItem value="princess-mononoke">
                    Princess Mononoke
                  </SelectItem>
                  <SelectItem value="my-neighbor-totoro">
                    My Neighbor Totoro
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Select Variants
          </h2>
          <p className="mb-6">
            Select components with Ghibli-inspired styling variants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Nature Variant
              </h3>
              <Select>
                <SelectTrigger className="w-full" variant="nature">
                  <SelectValue placeholder="Select a forest creature" />
                </SelectTrigger>
                <SelectContent variant="nature">
                  <SelectGroup>
                    <SelectItem value="totoro">Totoro</SelectItem>
                    <SelectItem value="kodama">Kodama</SelectItem>
                    <SelectItem value="soot-sprites">Soot Sprites</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sky Variant
              </h3>
              <Select>
                <SelectTrigger className="w-full" variant="sky">
                  <SelectValue placeholder="Select an aircraft" />
                </SelectTrigger>
                <SelectContent variant="sky">
                  <SelectGroup>
                    <SelectItem value="flying-castle">Flying Castle</SelectItem>
                    <SelectItem value="tiger-moth">Tiger Moth</SelectItem>
                    <SelectItem value="goliath">Goliath</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Spirit Variant
              </h3>
              <Select>
                <SelectTrigger className="w-full" variant="spirit">
                  <SelectValue placeholder="Select a spirit" />
                </SelectTrigger>
                <SelectContent variant="spirit">
                  <SelectGroup>
                    <SelectItem value="no-face">No-Face</SelectItem>
                    <SelectItem value="haku">Haku</SelectItem>
                    <SelectItem value="calcifer">Calcifer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Sizes and Shapes */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Sizes and Shapes
          </h2>
          <p className="mb-6">
            Select components with different sizes and corner styles.
          </p>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sizes
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Small</div>
                  <Select>
                    <SelectTrigger className="w-full" size="sm">
                      <SelectValue placeholder="Small select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Default</div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Default select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Large</div>
                  <Select>
                    <SelectTrigger className="w-full" size="lg">
                      <SelectValue placeholder="Large select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Corner Styles
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Default Rounded</div>
                  <Select>
                    <SelectTrigger className="w-full" variant="nature">
                      <SelectValue placeholder="Default corners" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Small Corners</div>
                  <Select>
                    <SelectTrigger
                      className="w-full"
                      variant="nature"
                      rounded="sm"
                    >
                      <SelectValue placeholder="Small corners" />
                    </SelectTrigger>
                    <SelectContent rounded="sm">
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Large Corners</div>
                  <Select>
                    <SelectTrigger
                      className="w-full"
                      variant="nature"
                      rounded="lg"
                    >
                      <SelectValue placeholder="Large corners" />
                    </SelectTrigger>
                    <SelectContent rounded="lg">
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Pill Shape</div>
                  <Select>
                    <SelectTrigger
                      className="w-full"
                      variant="nature"
                      rounded="full"
                    >
                      <SelectValue placeholder="Fully rounded" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complex Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Grouped Select
          </h2>
          <p className="mb-6">A select with grouped options.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Select>
              <SelectTrigger className="w-full" variant="sky">
                <SelectValue placeholder="Select a character" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Heroines</SelectLabel>
                  <SelectItem value="san">San (Princess Mononoke)</SelectItem>
                  <SelectItem value="nausicaa">Nausicaä</SelectItem>
                  <SelectItem value="kiki">Kiki</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Heroes</SelectLabel>
                  <SelectItem value="ashitaka">Ashitaka</SelectItem>
                  <SelectItem value="howl">Howl</SelectItem>
                  <SelectItem value="haku">Haku</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Supporting Characters</SelectLabel>
                  <SelectItem value="jiji">Jiji</SelectItem>
                  <SelectItem value="calcifer">Calcifer</SelectItem>
                  <SelectItem value="totoro">Totoro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Basic select
<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// With variants
<SelectTrigger variant="nature">
  <SelectValue placeholder="Select an option" />
</SelectTrigger>
<SelectContent variant="nature">
  {/* Options */}
</SelectContent>

// With sizes
<SelectTrigger size="lg">
  <SelectValue placeholder="Select an option" />
</SelectTrigger>

// With rounded corners
<SelectTrigger rounded="full">
  <SelectValue placeholder="Select an option" />
</SelectTrigger>

// Grouped select
<SelectContent>
  <SelectGroup>
    <SelectLabel>Group 1</SelectLabel>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectGroup>
    <SelectLabel>Group 2</SelectLabel>
    <SelectItem value="option3">Option 3</SelectItem>
    <SelectItem value="option4">Option 4</SelectItem>
  </SelectGroup>
</SelectContent>
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
