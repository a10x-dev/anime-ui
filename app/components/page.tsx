import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const components = [
  {
    name: 'Accordion',
    slug: 'accordion',
    description:
      'A vertically stacked set of interactive headings with reveal/hide content.',
  },
  {
    name: 'Avatar',
    slug: 'avatar',
    description: 'Image elements representing users with fallbacks.',
  },
  {
    name: 'Button',
    slug: 'button',
    description: 'Interactive button elements with various styles and states.',
  },
  {
    name: 'Button Group',
    slug: 'button-group',
    description: 'Group related buttons together with consistent styling.',
  },
  {
    name: 'Card',
    slug: 'card',
    description: 'Container components for grouping related content.',
  },
  {
    name: 'Checkbox',
    slug: 'checkbox',
    description: 'Form controls for selecting multiple options from a set.',
  },
  {
    name: 'Dialog',
    slug: 'dialog',
    description: 'Modal windows for important notifications and actions.',
  },
  {
    name: 'Dropdown',
    slug: 'dropdown',
    description:
      'Toggleable contextual overlays for displaying lists of links.',
  },
  {
    name: 'Hover Card',
    slug: 'hover-card',
    description: 'Preview cards that appear when hovering over elements.',
  },
  {
    name: 'Input',
    slug: 'input',
    description: 'Form controls for collecting text-based information.',
  },
  {
    name: 'Progress',
    slug: 'progress',
    description: 'Visual indicators showing completion status of an operation.',
  },
  {
    name: 'Radio Group',
    slug: 'radio-group',
    description: 'Set of radio buttons where only one can be selected.',
  },
  {
    name: 'Select',
    slug: 'select',
    description: 'Controls for selecting a value from a list of options.',
  },
  {
    name: 'Slider',
    slug: 'slider',
    description: 'Controls for selecting values from a range.',
  },
  {
    name: 'Tabs',
    slug: 'tabs',
    description:
      'Organize content into separate views where only one is visible.',
  },
  {
    name: 'Toast',
    slug: 'toast',
    description: 'Brief notifications that appear temporarily.',
  },
  {
    name: 'Toggle',
    slug: 'toggle',
    description: 'Switches for turning a single option on or off.',
  },
  {
    name: 'Toolbar',
    slug: 'toolbar',
    description:
      'Container for grouping a set of controls like buttons or toggles.',
  },
  {
    name: 'Tooltip',
    slug: 'tooltip',
    description: 'Contextual information displayed on hover or focus.',
  },
];

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">
          Components
        </h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          Explore our Ghibli-inspired UI components built with Radix UI and
          Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link
            key={component.slug}
            href={`/components/${component.slug}`}
            className="transition-transform hover:scale-105"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{component.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{component.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
