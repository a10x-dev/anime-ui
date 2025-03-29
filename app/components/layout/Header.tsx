import { Bell, Menu, Mic, Plus, Search, User } from 'lucide-react';

import { AnimatedButton } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input/input';
import Link from 'next/link';
import React from 'react';

export function Header() {
  return (
    <header className="h-16 border-b border-ghibli-beige-dark/30 bg-ghibli-beige/70 backdrop-blur-sm sticky top-0 z-50 px-4">
      <div className="flex items-center justify-between h-full">
        {/* Left Section: Logo and menu */}
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu size={20} className="text-ghibli-brown" />
          </Button>

          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-ghibli-brown mr-1">
              <span className="text-ghibli-green-dark">Anime UI</span>
            </span>
            <span className="text-xs bg-ghibli-green-dark text-white px-1 rounded-sm">
              a10x.dev
            </span>
          </Link>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-10">
          <div className="relative flex items-center w-full">
            <div className="flex-1 flex">
              <Input
                type="text"
                placeholder="Search"
                variant="default"
                rounded="leftFull"
                className="w-full"
              />
            </div>
            <Button
              className="h-10 rounded-r-full border-2 border-l-0 border-ghibli-beige-dark bg-ghibli-beige hover:bg-ghibli-beige-dark"
              size="icon"
            >
              <Search size={18} className="text-ghibli-brown" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 rounded-full bg-ghibli-beige/50 hover:bg-ghibli-beige-dark/50"
            >
              <Mic size={18} className="text-ghibli-brown" />
            </Button>
          </div>
        </div>

        {/* Right: User actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell size={20} className="text-ghibli-brown" />
          </Button>

          <AnimatedButton
            variant="nature"
            size="sm"
            rounded="pill"
            className="hidden sm:flex gap-1 items-center"
            animation="hover"
          >
            <Plus size={18} />
            <span>Create</span>
          </AnimatedButton>

          <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-ghibli-yellow border-2 border-ghibli-brown">
            <User size={20} className="text-ghibli-brown" />
          </div>
        </div>
      </div>
    </header>
  );
}
