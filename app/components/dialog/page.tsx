'use client';

import * as React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DialogPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Dialog</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Dialog
          </h2>
          <p className="mb-6">
            A simple dialog with a title, description, and actions.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Welcome to the Magical World</DialogTitle>
                  <DialogDescription>
                    Enter a realm of wonder and enchantment, where nature and
                    magic intertwine.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>
                    Studio Ghibli UI brings the magic of animation to your
                    interfaces.
                  </p>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Continue</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Variant Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Dialog Variants
          </h2>
          <p className="mb-6">
            Dialogs come in different Ghibli-inspired variants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Nature Variant
              </h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="nature">Nature Dialog</Button>
                </DialogTrigger>
                <DialogContent variant="nature">
                  <DialogHeader>
                    <DialogTitle>Forest Spirit</DialogTitle>
                    <DialogDescription>
                      A dialog inspired by the lush forests and nature themes in
                      Ghibli films.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>The forest is alive with magic and wonder.</p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="nature">Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Sky Variant
              </h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="sky">Sky Dialog</Button>
                </DialogTrigger>
                <DialogContent variant="sky">
                  <DialogHeader>
                    <DialogTitle>Skyward Journey</DialogTitle>
                    <DialogDescription>
                      A dialog inspired by the vast skies and flying machines in
                      Ghibli films.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>
                      Soar through the clouds and experience the freedom of
                      flight.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="sky">Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Form Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Dialog with Form
          </h2>
          <p className="mb-6">
            A dialog can contain interactive elements like forms.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Form Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create Profile</DialogTitle>
                  <DialogDescription>
                    Fill in your information to create a magical profile.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">
                      Name
                    </label>
                    <input
                      id="name"
                      className="col-span-3 h-10 rounded-md border border-ghibli-green-dark/30 bg-transparent px-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="spirit" className="text-right">
                      Spirit Animal
                    </label>
                    <input
                      id="spirit"
                      className="col-span-3 h-10 rounded-md border border-ghibli-green-dark/30 bg-transparent px-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Create Profile</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Basic Dialog
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a description of the dialog.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p>Your content goes here.</p>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// With variants
<DialogContent variant="nature">
  {/* Dialog content */}
</DialogContent>
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
