import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-ghibli-green-light/30 bg-ghibli-beige/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-ghibli-brown hover:text-ghibli-green-dark transition-colors"
          >
            AnimeUI
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/components"
              className="text-ghibli-green-dark hover:text-ghibli-brown transition-colors"
            >
              Components
            </Link>
            <Link
              href="/showcase"
              className="text-ghibli-green-dark hover:text-ghibli-brown transition-colors"
            >
              Showcase
            </Link>
          </nav>
          <div className="flex space-x-2">
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/components">Explore</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-ghibli-green-light/30 py-6 text-center bg-ghibli-beige/30">
        <div className="container mx-auto px-4">
          <p className="text-ghibli-brown">
            AnimeUI - Studio Ghibli Inspired Components
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              href="/components"
              className="text-sm text-ghibli-green-dark hover:text-ghibli-brown transition-colors"
            >
              Components
            </Link>
            <Link
              href="/showcase"
              className="text-sm text-ghibli-green-dark hover:text-ghibli-brown transition-colors"
            >
              Showcase
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
