'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function InputPage() {
  const [value, setValue] = React.useState('Hello, Ghibli World!');

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Input</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          An input field for collecting data from users with Ghibli-inspired
          styling.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Input
          </h2>
          <p className="mb-6">A simple input field with default styling.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="default-input" className="text-sm font-medium">
                  Username
                </label>
                <Input id="default-input" placeholder="Enter your username" />
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Input Variants
          </h2>
          <p className="mb-6">
            Input fields with different Ghibli-inspired styling variants.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="default-variant"
                  className="text-sm font-medium"
                >
                  Default Variant
                </label>
                <Input
                  id="default-variant"
                  placeholder="Default input"
                  variant="default"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="outline-variant"
                  className="text-sm font-medium"
                >
                  Outline Variant
                </label>
                <Input
                  id="outline-variant"
                  placeholder="Outline input"
                  variant="outline"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="nature-variant" className="text-sm font-medium">
                  Nature Variant
                </label>
                <Input
                  id="nature-variant"
                  placeholder="Nature-themed input"
                  variant="nature"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="sky-variant" className="text-sm font-medium">
                  Sky Variant
                </label>
                <Input
                  id="sky-variant"
                  placeholder="Sky-themed input"
                  variant="sky"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="spirit-variant" className="text-sm font-medium">
                  Spirit Variant
                </label>
                <Input
                  id="spirit-variant"
                  placeholder="Spirit-themed input"
                  variant="spirit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Input Sizes
          </h2>
          <p className="mb-6">Input fields come in different sizes.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="small-input" className="text-sm font-medium">
                  Small Input
                </label>
                <Input
                  id="small-input"
                  placeholder="Small input"
                  inputSize="sm"
                  variant="nature"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="default-size" className="text-sm font-medium">
                  Default Input
                </label>
                <Input
                  id="default-size"
                  placeholder="Default size input"
                  variant="nature"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="large-input" className="text-sm font-medium">
                  Large Input
                </label>
                <Input
                  id="large-input"
                  placeholder="Large input"
                  inputSize="lg"
                  variant="nature"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rounded Corners */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Corner Styles
          </h2>
          <p className="mb-6">Input fields with different corner styles.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="default-rounded"
                  className="text-sm font-medium"
                >
                  Default Rounded
                </label>
                <Input
                  id="default-rounded"
                  placeholder="Default corners"
                  variant="sky"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="small-rounded" className="text-sm font-medium">
                  Small Corners
                </label>
                <Input
                  id="small-rounded"
                  placeholder="Small corners"
                  variant="sky"
                  rounded="sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="large-rounded" className="text-sm font-medium">
                  Large Corners
                </label>
                <Input
                  id="large-rounded"
                  placeholder="Large corners"
                  variant="sky"
                  rounded="lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="fully-rounded" className="text-sm font-medium">
                  Fully Rounded
                </label>
                <Input
                  id="fully-rounded"
                  placeholder="Pill shape"
                  variant="sky"
                  rounded="full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Input States
          </h2>
          <p className="mb-6">Input fields in different states.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="disabled-input" className="text-sm font-medium">
                  Disabled Input
                </label>
                <Input
                  id="disabled-input"
                  placeholder="Disabled input"
                  disabled
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="readonly-input" className="text-sm font-medium">
                  Read-only Input
                </label>
                <Input id="readonly-input" value="Read-only content" readOnly />
              </div>
              <div className="space-y-2">
                <label htmlFor="with-value" className="text-sm font-medium">
                  Input with Value
                </label>
                <Input
                  id="with-value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  variant="spirit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Input Types */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Input Types
          </h2>
          <p className="mb-6">Input fields for different types of data.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="text-input" className="text-sm font-medium">
                  Text Input
                </label>
                <Input id="text-input" type="text" placeholder="Enter text" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email-input" className="text-sm font-medium">
                  Email Input
                </label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password-input" className="text-sm font-medium">
                  Password Input
                </label>
                <Input
                  id="password-input"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="number-input" className="text-sm font-medium">
                  Number Input
                </label>
                <Input
                  id="number-input"
                  type="number"
                  placeholder="Enter number"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="date-input" className="text-sm font-medium">
                  Date Input
                </label>
                <Input id="date-input" type="date" />
              </div>
              <div className="space-y-2">
                <label htmlFor="search-input" className="text-sm font-medium">
                  Search Input
                </label>
                <Input
                  id="search-input"
                  type="search"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* With Form Layout */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Form Layout Example
          </h2>
          <p className="mb-6">Input fields used in a form layout.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="First name"
                    variant="nature"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Last name"
                    variant="nature"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  variant="nature"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-ghibli-green bg-ghibli-green-light/10 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ghibli-green focus-visible:ring-offset-2"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button type="submit" variant="nature">
                Submit
              </Button>
            </form>
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Usage
          </h2>
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige space-y-4">
            <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
              <code>{`import { Input } from '@/components/ui/input';

// Basic input
<Input placeholder="Enter text" />

// With variants
<Input placeholder="Nature-themed input" variant="nature" />
<Input placeholder="Sky-themed input" variant="sky" />
<Input placeholder="Spirit-themed input" variant="spirit" />

// With sizes
<Input placeholder="Small input" inputSize="sm" />
<Input placeholder="Default input" />
<Input placeholder="Large input" inputSize="lg" />

// With rounded corners
<Input placeholder="Small corners" rounded="sm" />
<Input placeholder="Default corners" />
<Input placeholder="Large corners" rounded="lg" />
<Input placeholder="Pill shape" rounded="full" />

// Controlled input
const [value, setValue] = React.useState("");
<Input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>

// Input types
<Input type="email" placeholder="Enter email" />
<Input type="password" placeholder="Enter password" />
<Input type="number" placeholder="Enter number" />
<Input type="date" />
<Input type="search" placeholder="Search..." />
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
