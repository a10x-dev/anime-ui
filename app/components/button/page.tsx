import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

export default function ButtonPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-ghibli-brown mb-4">Button</h1>
        <p className="text-lg text-ghibli-green-dark max-w-3xl">
          Interactive button elements with various styles, sizes, and states for
          user actions.
        </p>
      </div>

      {/* Variants Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Different visual styles for various contexts and hierarchies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="nature">Nature</Button>
              <Button variant="sky">Sky</Button>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`import { Button } from "@/components/ui/button"
                
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="nature">Nature</Button>
<Button variant="sky">Sky</Button>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sizes Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>
              Different sizes to fit various UI contexts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🌿</Button>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🌿</Button>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Rounded Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Button Shapes</CardTitle>
            <CardDescription>
              Different border radius styles for your buttons.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center flex-wrap gap-4">
              <Button rounded="default">Default</Button>
              <Button rounded="full">Full</Button>
              <Button rounded="pill">Pill</Button>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`<Button rounded="default">Default</Button>
<Button rounded="full">Full</Button>
<Button rounded="pill">Pill</Button>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* States Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Button States</CardTitle>
            <CardDescription>Interactive states for buttons.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center flex-wrap gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button className="opacity-80">Hover (simulated)</Button>
              <Button className="opacity-70">Active (simulated)</Button>
            </div>

            <div className="mt-8 bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm text-ghibli-brown">
                {`<Button>Default</Button>
<Button disabled>Disabled</Button>
                
// States are managed automatically with hover: and active: Tailwind classes`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Examples Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Button Examples</CardTitle>
            <CardDescription>Real-world usage examples.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-6 border rounded-md border-ghibli-green-light/30">
                <h3 className="text-xl font-medium text-ghibli-brown">
                  Form Actions
                </h3>
                <div className="flex justify-between mt-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit</Button>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 border rounded-md border-ghibli-green-light/30">
                <h3 className="text-xl font-medium text-ghibli-brown">
                  Call to Action
                </h3>
                <div className="flex gap-4 items-center mt-2">
                  <Button variant="nature" size="lg">
                    Get Started
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Component Code Section */}
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
                {`import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ghibli-green text-ghibli-beige shadow-sm hover:bg-ghibli-green-dark",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-ghibli-green bg-transparent text-ghibli-green-dark hover:bg-ghibli-green hover:text-ghibli-beige",
        secondary: "bg-ghibli-beige text-ghibli-green-dark shadow-sm hover:bg-ghibli-beige-dark",
        ghost: "hover:bg-ghibli-green-light/20 hover:text-ghibli-green-dark",
        link: "text-ghibli-green-dark underline-offset-4 hover:underline",
        nature: "bg-ghibli-green-light text-ghibli-green-dark shadow-sm border-2 border-ghibli-green hover:bg-ghibli-green hover:text-ghibli-beige",
        sky: "bg-ghibli-sky text-white shadow-sm hover:bg-ghibli-sky/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        pill: "rounded-full px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
