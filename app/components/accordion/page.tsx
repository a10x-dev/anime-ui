'use client';

import * as React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AccordionPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Accordion</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A vertically stacked set of interactive headings that reveal or hide
          associated content.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Example */}
        <section className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Accordion</CardTitle>
              <CardDescription>
                A simple accordion with default styling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>My Neighbor Totoro</AccordionTrigger>
                  <AccordionContent>
                    Released in 1988, this film tells the story of two young
                    girls, Satsuki and Mei, who move with their father to a new
                    home in the countryside to be closer to their hospitalized
                    mother.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Spirited Away</AccordionTrigger>
                  <AccordionContent>
                    Released in 2001, this film follows the story of Chihiro, a
                    ten-year-old girl who, while moving to a new neighborhood,
                    enters the world of Kami (spirits) of Japanese Shinto
                    folklore.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Howl&apos;s Moving Castle</AccordionTrigger>
                  <AccordionContent>
                    Released in 2004, this film is about a young milliner named
                    Sophie who is turned into an elderly woman by a witch who
                    enters her shop and curses her. She encounters a wizard
                    named Howl and gets caught up in his resistance to fighting
                    for the king.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-ghibli-brown">
                  {`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Accordion Types */}
        <section className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Accordion Types</CardTitle>
              <CardDescription>
                Accordions can have single or multiple items expanded at once.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                    Single (Default)
                  </h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Single Expand (Item 1)
                      </AccordionTrigger>
                      <AccordionContent>
                        With the single type, only one item can be open at a
                        time, unless collapsible is set to true.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Single Expand (Item 2)
                      </AccordionTrigger>
                      <AccordionContent>
                        When one item is opened, the other will automatically
                        close.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                    Multiple
                  </h3>
                  <Accordion type="multiple">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Multiple Expand (Item 1)
                      </AccordionTrigger>
                      <AccordionContent>
                        With the multiple type, you can have multiple items open
                        simultaneously.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Multiple Expand (Item 2)
                      </AccordionTrigger>
                      <AccordionContent>
                        Click any item to toggle it independently of the others.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Multiple Expand (Item 3)
                      </AccordionTrigger>
                      <AccordionContent>
                        This is great for FAQ sections or detailed information
                        that users might want to compare.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-ghibli-brown">
                  {`// Single Type (only one item open at a time)
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple Type (multiple items can be open)
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ghibli-Themed Example */}
        <section className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ghibli-Themed Example</CardTitle>
              <CardDescription>
                An accordion showcasing Ghibli films by theme.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Nature Films</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>My Neighbor Totoro (1988)</li>
                      <li>Princess Mononoke (1997)</li>
                      <li>Nausicaä of the Valley of the Wind (1984)</li>
                      <li>The Secret World of Arrietty (2010)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Flight & Adventure</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Castle in the Sky (1986)</li>
                      <li>Porco Rosso (1992)</li>
                      <li>Kiki&apos;s Delivery Service (1989)</li>
                      <li>The Wind Rises (2013)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Magical Realms</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Spirited Away (2001)</li>
                      <li>Howl&apos;s Moving Castle (2004)</li>
                      <li>Ponyo (2008)</li>
                      <li>The Tale of The Princess Kaguya (2013)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Controlled Example */}
        <section className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Controlled Accordion</CardTitle>
              <CardDescription>
                Control the accordion state programmatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ControlledAccordion />
            </CardContent>
          </Card>
        </section>

        {/* Component Code */}
        <section className="space-y-4">
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
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

// Component code for Accordion goes here...

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };`}
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

// Controlled Accordion Example
function ControlledAccordion() {
  const [value, setValue] = React.useState<string[]>(['item-1']);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          onClick={() => setValue(['item-1'])}
          variant={value.includes('item-1') ? 'default' : 'outline'}
        >
          Open Item 1
        </Button>
        <Button
          size="sm"
          onClick={() => setValue(['item-2'])}
          variant={value.includes('item-2') ? 'default' : 'outline'}
        >
          Open Item 2
        </Button>
        <Button
          size="sm"
          onClick={() => setValue(['item-1', 'item-2'])}
          variant={
            value.includes('item-1') && value.includes('item-2')
              ? 'default'
              : 'outline'
          }
        >
          Open Both
        </Button>
        <Button size="sm" onClick={() => setValue([])} variant="outline">
          Close All
        </Button>
      </div>

      <Accordion
        type="multiple"
        value={value}
        onValueChange={setValue}
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Controlled Item 1</AccordionTrigger>
          <AccordionContent>
            This item&apos;s state is controlled programmatically by the buttons
            above.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Controlled Item 2</AccordionTrigger>
          <AccordionContent>
            You can control which accordion items are open using React state.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-4 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
        <pre className="text-sm text-ghibli-brown">
          {`function ControlledAccordion() {
  const [value, setValue] = React.useState(['item-1']);

  return (
    <Accordion
      type="multiple"
      value={value}
      onValueChange={setValue}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
        </pre>
      </div>
    </div>
  );
}
