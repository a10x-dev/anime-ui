'use client';

import * as React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TabsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Tabs</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A set of layered sections of content that display one panel at a time.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Tabs
          </h2>
          <p className="mb-6">
            A simple tabs component with different content panels.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your account settings and preferences.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="password" className="p-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Password</h3>
                  <p className="text-sm text-muted-foreground">
                    Change or reset your account password.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="settings" className="p-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure your application settings.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Tab Variants
          </h2>
          <p className="mb-6">
            Tabs come in different Ghibli-inspired variants.
          </p>

          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Nature Variant
              </h3>
              <Tabs defaultValue="totoro" variant="nature">
                <TabsList>
                  <TabsTrigger value="totoro">Totoro</TabsTrigger>
                  <TabsTrigger value="ponyo">Ponyo</TabsTrigger>
                  <TabsTrigger value="mononoke">Mononoke</TabsTrigger>
                </TabsList>
                <TabsContent value="totoro" className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">My Neighbor Totoro</h3>
                    <p className="text-sm text-muted-foreground">
                      A story of two young sisters and their interactions with
                      friendly forest spirits.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="ponyo" className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Ponyo</h3>
                    <p className="text-sm text-muted-foreground">
                      A goldfish princess who wants to become human after
                      falling in love with a boy.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="mononoke" className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Princess Mononoke</h3>
                    <p className="text-sm text-muted-foreground">
                      A story about the struggle between the supernatural
                      guardians of a forest and the humans who consume its
                      resources.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sky Variant
              </h3>
              <Tabs defaultValue="castle" variant="sky">
                <TabsList>
                  <TabsTrigger value="castle">Castle in the Sky</TabsTrigger>
                  <TabsTrigger value="porco">Porco Rosso</TabsTrigger>
                  <TabsTrigger value="wind">The Wind Rises</TabsTrigger>
                </TabsList>
                <TabsContent value="castle" className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Castle in the Sky</h3>
                    <p className="text-sm text-muted-foreground">
                      An adventure about a young boy and girl searching for a
                      legendary floating castle.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="porco" className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Porco Rosso</h3>
                    <p className="text-sm text-muted-foreground">
                      A story about an Italian WWI ex-fighter ace who is cursed
                      to look like a pig.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="wind" className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">The Wind Rises</h3>
                    <p className="text-sm text-muted-foreground">
                      A fictionalized biographical film of Jiro Horikoshi,
                      designer of the Mitsubishi A6M Zero fighter aircraft.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Custom Styles */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Custom Styled Tabs
          </h2>
          <p className="mb-6">
            You can customize the appearance of the tabs and content.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Tabs defaultValue="spirits" variant="spirit">
              <TabsList className="w-full">
                <TabsTrigger value="spirits" className="flex-1">
                  Spirits
                </TabsTrigger>
                <TabsTrigger value="characters" className="flex-1">
                  Characters
                </TabsTrigger>
                <TabsTrigger value="locations" className="flex-1">
                  Locations
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="spirits"
                className="mt-4 p-6 rounded-lg bg-ghibli-beige/10 border border-ghibli-beige"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Magical Spirits</h3>
                  <p className="text-sm">
                    From the soot sprites to the majestic forest spirit, Ghibli
                    films are filled with magical creatures.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="characters"
                className="mt-4 p-6 rounded-lg bg-ghibli-beige/10 border border-ghibli-beige"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Memorable Characters</h3>
                  <p className="text-sm">
                    Complex and relatable characters like San, Kiki, and Chihiro
                    make Ghibli films unforgettable.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="locations"
                className="mt-4 p-6 rounded-lg bg-ghibli-beige/10 border border-ghibli-beige"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    Breathtaking Locations
                  </h3>
                  <p className="text-sm">
                    From floating castles to magical bathhouses, Ghibli creates
                    incredibly detailed and immersive worlds.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Usage
          </h2>
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige space-y-4">
            <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
              <code>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Basic tabs
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account content
  </TabsContent>
  <TabsContent value="password">
    Password content
  </TabsContent>
</Tabs>

// With variants
<Tabs defaultValue="account" variant="nature">
  {/* Similar structure */}
</Tabs>
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
