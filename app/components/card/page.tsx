import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

export default function CardPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-ghibli-brown mb-4">Card</h1>
        <p className="text-lg text-ghibli-green-dark max-w-3xl">
          Container components for grouping related content and information with
          Ghibli-inspired styling.
        </p>
      </div>

      {/* Variants Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Card Variants</CardTitle>
            <CardDescription>
              Different visual styles for various contexts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>Uses the beige color scheme</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the default card style with beige background.</p>
                </CardContent>
              </Card>

              <Card variant="nature">
                <CardHeader>
                  <CardTitle>Nature Card</CardTitle>
                  <CardDescription>Uses the green color scheme</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    This card has a green-themed style inspired by Ghibli
                    forests.
                  </p>
                </CardContent>
              </Card>

              <Card variant="sky">
                <CardHeader>
                  <CardTitle>Sky Card</CardTitle>
                  <CardDescription>Uses the blue color scheme</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    This card has a blue-themed style inspired by Ghibli skies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm text-ghibli-brown">
                      {`<Card variant="default">
  <CardContent>Default card</CardContent>
</Card>

<Card variant="nature">
  <CardContent>Nature-themed card</CardContent>
</Card>

<Card variant="sky">
  <CardContent>Sky-themed card</CardContent>
</Card>`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Card Composition Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Card Composition</CardTitle>
            <CardDescription>
              Cards are composed of multiple components that can be combined.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card with Header</CardTitle>
                  <CardDescription>
                    This card has a header with title and description.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the main content area of the card.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card with Footer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This card includes a footer with actions.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-ghibli-beige/30 p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm text-ghibli-brown">
                      {`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Examples Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Card Examples</CardTitle>
            <CardDescription>Real-world usage examples.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-ghibli-green flex items-center justify-center text-ghibli-beige text-2xl">
                      CH
                    </div>
                    <div>
                      <h3 className="font-medium">Character Name</h3>
                      <p className="text-sm text-muted-foreground">
                        From the Ghibli universe
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="nature">
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>
                    Highlighting a special feature
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Discover the magic of our animated components inspired by
                    the Ghibli aesthetic.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="nature">Learn More</Button>
                </CardFooter>
              </Card>
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
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "beige" | "nature" | "sky";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variantStyles = {
    default: "bg-ghibli-beige border-ghibli-beige-dark",
    beige: "bg-ghibli-beige border-ghibli-beige-dark",
    nature: "bg-ghibli-green-light border-ghibli-green",
    sky: "bg-ghibli-sky-light border-ghibli-sky",
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border-2 shadow-ghibli p-4",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-2", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold leading-none tracking-tight text-ghibli-brown", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-2 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-2 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
