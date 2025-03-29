'use client';

import * as React from 'react';

import { FilterChips } from '@/app/components/layout/FilterChips';
import { Header } from '@/app/components/layout/Header';
import { Sidebar } from '@/app/components/layout/Sidebar';
import { VideoGrid } from '@/app/components/layout/VideoGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100/30 via-green-50/30 to-ghibli-beige flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="overflow-x-hidden">
          <FilterChips />
          <main className="px-4">
            <VideoGrid />
          </main>
        </div>
      </div>
    </div>
  );
}
