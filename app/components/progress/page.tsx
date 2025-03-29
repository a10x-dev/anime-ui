'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

export default function ProgressPage() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-ghibli-brown mb-4">Progress</h1>
        <p className="text-lg text-ghibli-green-dark max-w-2xl mx-auto">
          A visual indicator showing the completion progress of an operation or
          task.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Basic Progress
          </h2>
          <p className="mb-6">A simple progress bar with a default style.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
            </div>
          </div>
        </section>

        {/* Different Sizes */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Progress Sizes
          </h2>
          <p className="mb-6">
            Progress bars are available in different sizes.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm mb-1">Thin</div>
                <Progress value={progress} variant="thin" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Default</div>
                <Progress value={progress} />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Thick</div>
                <Progress value={progress} variant="thick" />
              </div>
            </div>
          </div>
        </section>

        {/* Ghibli-inspired Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Ghibli-inspired Variants
          </h2>
          <p className="mb-6">
            Progress bars with Ghibli-inspired colors and styles.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm mb-1">Default</div>
                <Progress value={progress} />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Nature</div>
                <Progress value={progress} variant="nature" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Sky</div>
                <Progress value={progress} variant="sky" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Spirit</div>
                <Progress value={progress} variant="spirit" />
              </div>
            </div>
          </div>
        </section>

        {/* Rounded Variants */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Rounded Styles
          </h2>
          <p className="mb-6">Progress bars with different corner styles.</p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm mb-1">Default Rounded</div>
                <Progress value={progress} variant="nature" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Small Corners</div>
                <Progress value={progress} variant="nature" rounded="sm" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Large Corners</div>
                <Progress value={progress} variant="nature" rounded="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Animated Progress */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Animated Progress
          </h2>
          <p className="mb-6">
            Progress bars with special Ghibli-inspired animations.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm mb-1">Pulse Animation</div>
                <Progress value={progress} variant="nature" animation="pulse" />
              </div>
              <div className="space-y-2">
                <div className="text-sm mb-1">Shimmer Animation</div>
                <Progress value={progress} variant="sky" animation="shimmer" />
              </div>
            </div>
          </div>
        </section>

        {/* Controlled Progress Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-ghibli-green-dark mb-6">
            Controlled Progress
          </h2>
          <p className="mb-6">
            A progress bar that can be controlled by clicking buttons.
          </p>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-lg border-2 border-ghibli-beige">
            <div className="space-y-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Current Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} variant="spirit" animation="shimmer" />
              <div className="flex gap-4 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setProgress((p) => Math.max(0, p - 10))}
                >
                  Decrease
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setProgress((p) => Math.min(100, p + 10))}
                >
                  Increase
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setProgress(0)}
                >
                  Reset
                </Button>
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
              <code>{`import { Progress } from '@/components/ui/progress';

// Basic progress bar
<Progress value={60} />

// With variants
<Progress value={60} variant="nature" />

// With size variants
<Progress value={60} variant="thick" />

// With animations
<Progress value={60} variant="sky" animation="shimmer" />

// With rounded corners
<Progress value={60} variant="spirit" rounded="lg" />

// Controlled progress
const [progress, setProgress] = React.useState(0);

React.useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500);
  return () => clearTimeout(timer);
}, []);

<Progress value={progress} />
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
