import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { AnimatedButtonGroup } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import Link from 'next/link';

export default function ButtonGroupPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-ghibli-brown mb-4">
          Button Group
        </h1>
        <p className="text-lg text-ghibli-green-dark max-w-3xl">
          A component that groups related buttons together with consistent
          styling.
        </p>
      </div>

      {/* Basic Examples */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Basic Button Group</CardTitle>
            <CardDescription>
              Groups of related buttons in different orientations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Horizontal (Default)
                </h3>
                <ButtonGroup>
                  <Button>Home</Button>
                  <Button>Settings</Button>
                  <Button>Profile</Button>
                </ButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Vertical
                </h3>
                <ButtonGroup orientation="vertical">
                  <Button>Home</Button>
                  <Button>Settings</Button>
                  <Button>Profile</Button>
                </ButtonGroup>
              </div>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

<ButtonGroup>
  <Button>Home</Button>
  <Button>Settings</Button>
  <Button>Profile</Button>
</ButtonGroup>

<ButtonGroup orientation="vertical">
  <Button>Home</Button>
  <Button>Settings</Button>
  <Button>Profile</Button>
</ButtonGroup>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Button Group Variants</CardTitle>
            <CardDescription>
              Different style variants to match your Ghibli-inspired theme.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Default
                </h3>
                <ButtonGroup variant="default">
                  <Button>Home</Button>
                  <Button>Settings</Button>
                  <Button>Profile</Button>
                </ButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Outline
                </h3>
                <ButtonGroup variant="outline">
                  <Button variant="outline">Home</Button>
                  <Button variant="outline">Settings</Button>
                  <Button variant="outline">Profile</Button>
                </ButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Nature
                </h3>
                <ButtonGroup variant="nature">
                  <Button variant="nature">Home</Button>
                  <Button variant="nature">Settings</Button>
                  <Button variant="nature">Profile</Button>
                </ButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Sky
                </h3>
                <ButtonGroup variant="sky">
                  <Button variant="sky">Home</Button>
                  <Button variant="sky">Settings</Button>
                  <Button variant="sky">Profile</Button>
                </ButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Spirit
                </h3>
                <ButtonGroup variant="spirit">
                  <Button>Home</Button>
                  <Button>Settings</Button>
                  <Button>Profile</Button>
                </ButtonGroup>
              </div>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`<ButtonGroup variant="nature">
  <Button variant="nature">Home</Button>
  <Button variant="nature">Settings</Button>
  <Button variant="nature">Profile</Button>
</ButtonGroup>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Button Group Sizes</CardTitle>
            <CardDescription>
              Button groups in different sizes to fit your design.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Small
                </h3>
                <ButtonGroup size="sm">
                  <Button size="sm">Home</Button>
                  <Button size="sm">Settings</Button>
                  <Button size="sm">Profile</Button>
                </ButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Default
                </h3>
                <ButtonGroup>
                  <Button>Home</Button>
                  <Button>Settings</Button>
                  <Button>Profile</Button>
                </ButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Large
                </h3>
                <ButtonGroup size="lg">
                  <Button size="lg">Home</Button>
                  <Button size="lg">Settings</Button>
                  <Button size="lg">Profile</Button>
                </ButtonGroup>
              </div>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`<ButtonGroup size="lg">
  <Button size="lg">Home</Button>
  <Button size="lg">Settings</Button>
  <Button size="lg">Profile</Button>
</ButtonGroup>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Rounded Styles */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Rounded Styles</CardTitle>
            <CardDescription>
              Button groups with different corner styles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Default Rounded
                </h3>
                <ButtonGroup>
                  <Button>Home</Button>
                  <Button>Settings</Button>
                  <Button>Profile</Button>
                </ButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Fully Rounded
                </h3>
                <ButtonGroup rounded="full">
                  <Button rounded="full">Home</Button>
                  <Button rounded="full">Settings</Button>
                  <Button rounded="full">Profile</Button>
                </ButtonGroup>
              </div>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`<ButtonGroup rounded="full">
  <Button rounded="full">Home</Button>
  <Button rounded="full">Settings</Button>
  <Button rounded="full">Profile</Button>
</ButtonGroup>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Animated Button Groups */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Animated Button Groups</CardTitle>
            <CardDescription>
              Button groups with Ghibli-inspired animations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Float Animation
                </h3>
                <AnimatedButtonGroup animation="float" variant="nature">
                  <Button variant="nature">Home</Button>
                  <Button variant="nature">Settings</Button>
                  <Button variant="nature">Profile</Button>
                </AnimatedButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Grow Animation
                </h3>
                <AnimatedButtonGroup animation="grow" variant="sky">
                  <Button variant="sky">Home</Button>
                  <Button variant="sky">Settings</Button>
                  <Button variant="sky">Profile</Button>
                </AnimatedButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Sparkle Animation
                </h3>
                <AnimatedButtonGroup animation="sparkle" variant="default">
                  <Button>Home</Button>
                  <Button>Settings</Button>
                  <Button>Profile</Button>
                </AnimatedButtonGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-ghibli-brown">
                  Leaf Animation
                </h3>
                <AnimatedButtonGroup animation="leaf" variant="outline">
                  <Button variant="outline">Home</Button>
                  <Button variant="outline">Settings</Button>
                  <Button variant="outline">Profile</Button>
                </AnimatedButtonGroup>
              </div>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`import { AnimatedButtonGroup } from "@/components/ui/button-group";

<AnimatedButtonGroup animation="float" variant="nature">
  <Button variant="nature">Home</Button>
  <Button variant="nature">Settings</Button>
  <Button variant="nature">Profile</Button>
</AnimatedButtonGroup>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Code Example */}
      <section className="mb-12">
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
                {`// Basic usage
<ButtonGroup>
  <Button>Home</Button>
  <Button>Settings</Button>
  <Button>Profile</Button>
</ButtonGroup>

// With variants and orientation
<ButtonGroup variant="nature" orientation="vertical">
  <Button variant="nature">Home</Button>
  <Button variant="nature">Settings</Button>
  <Button variant="nature">Profile</Button>
</ButtonGroup>

// Animated button group
<AnimatedButtonGroup animation="float" variant="sky">
  <Button variant="sky">Home</Button>
  <Button variant="sky">Settings</Button>
  <Button variant="sky">Profile</Button>
</AnimatedButtonGroup>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="mt-16 text-center">
        <Button asChild>
          <Link href="/components">Back to Components</Link>
        </Button>
      </div>
    </div>
  );
}
