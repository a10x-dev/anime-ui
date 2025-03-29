'use client';

import * as React from 'react';

import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ToastPage() {
  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState<
    'default' | 'success' | 'error' | 'warning' | 'info'
  >('default');

  const showToast = (
    toastVariant: 'default' | 'success' | 'error' | 'warning' | 'info'
  ) => {
    setVariant(toastVariant);
    setOpen(true);
    setTimeout(() => setOpen(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Toast</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A succinct message that is displayed temporarily and provides feedback
          about an operation.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Toast Types
          </h2>
          <p className="mb-6">
            Toasts can be used to show different types of messages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Default Toast
              </h3>
              <Button onClick={() => showToast('default')}>
                Show Default Toast
              </Button>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Success Toast
              </h3>
              <Button variant="nature" onClick={() => showToast('success')}>
                Show Success Toast
              </Button>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Error Toast
              </h3>
              <Button variant="destructive" onClick={() => showToast('error')}>
                Show Error Toast
              </Button>
            </div>

            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Warning Toast
              </h3>
              <Button variant="sky" onClick={() => showToast('warning')}>
                Show Warning Toast
              </Button>
            </div>
          </div>

          <ToastProvider>
            {open && (
              <Toast variant={variant} open={open} onOpenChange={setOpen}>
                <ToastTitle>
                  {variant === 'default' && 'Notification'}
                  {variant === 'success' && 'Success!'}
                  {variant === 'error' && 'Error'}
                  {variant === 'warning' && 'Warning'}
                  {variant === 'info' && 'Information'}
                </ToastTitle>
                <ToastDescription>
                  {variant === 'default' && 'This is a default notification.'}
                  {variant === 'success' &&
                    'Your action completed successfully!'}
                  {variant === 'error' &&
                    'Something went wrong. Please try again.'}
                  {variant === 'warning' &&
                    'Please check the details before continuing.'}
                  {variant === 'info' &&
                    'Here is some information you might find useful.'}
                </ToastDescription>
                <ToastAction altText="Dismiss">Dismiss</ToastAction>
                <ToastClose />
              </Toast>
            )}
            <ToastViewport />
          </ToastProvider>
        </section>

        {/* Toast With Actions */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Toast with Actions
          </h2>
          <p className="mb-6">
            Toasts can include actions that allow users to respond directly.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent('toast', {
                    detail: {
                      title: 'Scheduled Successfully',
                      description: 'Your message will be sent in 3 minutes.',
                      action: {
                        label: 'Undo',
                        onClick: () => console.log('Undo'),
                      },
                    },
                  })
                );
              }}
            >
              Show Action Toast
            </Button>
            <p className="text-sm text-muted-foreground">
              This is just a placeholder as we don&apos;t have an event system
              set up for this example.
            </p>
          </div>
        </section>

        {/* Toast Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Ghibli-inspired Toast Animations
          </h2>
          <p className="mb-6">
            Our toasts feature animations inspired by Studio Ghibli.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <p className="mb-4 text-sm">
              Each toast variant has a unique animation style:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-sm">
              <li>
                <strong>Default:</strong> Gentle fade-in with a slight float
                effect
              </li>
              <li>
                <strong>Success:</strong> Accompanied by a nature-inspired
                growth effect
              </li>
              <li>
                <strong>Error:</strong> A subtle shake animation that&apos;s
                noticeable but not distracting
              </li>
              <li>
                <strong>Warning:</strong> Sky-inspired appearance with
                cloud-like movements
              </li>
              <li>
                <strong>Info:</strong> Sparkle effect inspired by magical
                elements
              </li>
            </ul>
            <p className="text-sm">
              Click any of the buttons above to see these animations in action.
            </p>
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Usage
          </h2>
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige space-y-4">
            <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
              <code>{`import * as React from 'react';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

// Step 1: Set up the toast provider in your layout or page
export function MyApp() {
  return (
    <ToastProvider>
      {/* Your app content */}
      <ToastViewport />
    </ToastProvider>
  )
}

// Step 2: Create a toast component
export function ToastDemo() {
  const [open, setOpen] = React.useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      
      <Toast open={open} onOpenChange={setOpen} variant="success">
        <ToastTitle>Success!</ToastTitle>
        <ToastDescription>Your action completed successfully!</ToastDescription>
        <ToastAction altText="Dismiss">Dismiss</ToastAction>
        <ToastClose />
      </Toast>
    </>
  )
}
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
