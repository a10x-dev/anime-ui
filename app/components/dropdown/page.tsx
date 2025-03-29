'use client';

import * as React from 'react';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DropdownPage() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showFullUrls, setShowFullUrls] = React.useState(false);
  const [position, setPosition] = React.useState('bottom');

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">
          Dropdown Menu
        </h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          Displays a menu to the user triggered by a button—an excellent
          alternative to a navigation bar for interfaces with limited space.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Variants
          </h2>
          <p className="mb-6">
            Our dropdown menus come in four magical variants inspired by Studio
            Ghibli aesthetics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Default Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent variant="default" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="nature">Nature Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent variant="nature" className="w-56">
                  <DropdownMenuLabel>Nature Theme</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trees</DropdownMenuItem>
                  <DropdownMenuItem>Flowers</DropdownMenuItem>
                  <DropdownMenuItem>Rivers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="sky">Sky Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent variant="sky" className="w-56">
                  <DropdownMenuLabel>Sky Theme</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Clouds</DropdownMenuItem>
                  <DropdownMenuItem>Birds</DropdownMenuItem>
                  <DropdownMenuItem>Wind</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Spirit Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent variant="spirit" className="w-56">
                  <DropdownMenuLabel>Spirit Theme</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Magic</DropdownMenuItem>
                  <DropdownMenuItem>Dreams</DropdownMenuItem>
                  <DropdownMenuItem>Spirits</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>

        {/* Advanced Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Advanced Menu
          </h2>
          <p className="mb-6">
            A complex dropdown with checkboxes, radio items, submenus, and
            keyboard shortcuts.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Advanced Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  Show Bookmarks
                  <DropdownMenuShortcut>⌘+B</DropdownMenuShortcut>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showFullUrls}
                  onCheckedChange={setShowFullUrls}
                >
                  Show Full URLs
                </DropdownMenuCheckboxItem>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Position</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuRadioGroup
                        value={position}
                        onValueChange={setPosition}
                      >
                        <DropdownMenuRadioItem value="top">
                          Top
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">
                          Bottom
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="left">
                          Left
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">
                          Right
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-6 bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
              Current State
            </h3>
            <div className="space-y-2">
              <p>
                Show Bookmarks:{' '}
                <span className="font-semibold">
                  {showBookmarks ? 'Yes' : 'No'}
                </span>
              </p>
              <p>
                Show Full URLs:{' '}
                <span className="font-semibold">
                  {showFullUrls ? 'Yes' : 'No'}
                </span>
              </p>
              <p>
                Position: <span className="font-semibold">{position}</span>
              </p>
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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

// Basic dropdown
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// With a specific variant
<DropdownMenuContent variant="nature">
  {/* Menu items */}
</DropdownMenuContent>
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
