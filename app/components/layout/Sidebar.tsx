import {
  Bookmark,
  Clock,
  Download,
  Film,
  Gamepad2,
  History,
  Home,
  Lightbulb,
  Music,
  Newspaper,
  Radio,
  ThumbsUp,
  Trophy,
  VideoIcon,
} from 'lucide-react';

import Link from 'next/link';
import React from 'react';

const SidebarItem = ({
  icon,
  label,
  active,
  href = '#',
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
}) => (
  <Link href={href} className="block">
    <div
      className={`flex items-center p-2 rounded-lg transition-colors ${
        active
          ? 'bg-ghibli-green-light/20 text-ghibli-green-dark'
          : 'hover:bg-ghibli-green-light/10 text-ghibli-brown'
      }`}
    >
      <div className="mr-4 text-current">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  </Link>
);

export function Sidebar() {
  return (
    <aside className="w-56 h-[calc(100vh-64px)] overflow-y-auto bg-ghibli-beige/40 backdrop-blur-sm border-r border-ghibli-beige-dark/30 py-2 px-2 flex-shrink-0">
      <div className="space-y-0.5">
        <SidebarItem icon={<Home size={20} />} label="Home" active />
        <SidebarItem icon={<VideoIcon size={20} />} label="Shorts" />
        <SidebarItem icon={<Bookmark size={20} />} label="Subscriptions" />
        <SidebarItem icon={<Music size={20} />} label="YouTube Music" />
      </div>

      <div className="mt-4 pt-4 border-t border-ghibli-beige-dark/30 space-y-0.5">
        <SidebarItem icon={<History size={20} />} label="History" />
        <SidebarItem icon={<Clock size={20} />} label="Watch later" />
        <SidebarItem icon={<ThumbsUp size={20} />} label="Liked videos" />
        <SidebarItem icon={<Download size={20} />} label="Downloads" />
      </div>

      <div className="mt-4 pt-4 border-t border-ghibli-beige-dark/30 space-y-0.5">
        <h3 className="px-4 mb-1 text-xs font-semibold text-ghibli-brown opacity-70 uppercase">
          Subscriptions
        </h3>
        <SidebarItem
          icon={
            <div className="w-6 h-6 flex items-center justify-center">T</div>
          }
          label="a10x.dev"
        />
        <SidebarItem
          icon={
            <div className="w-6 h-6 flex items-center justify-center">L</div>
          }
          label="Lenny's Podcast"
        />
        <SidebarItem
          icon={
            <div className="w-6 h-6 flex items-center justify-center">D</div>
          }
          label="David Ondřej"
        />
        <SidebarItem
          icon={
            <div className="w-6 h-6 flex items-center justify-center">B</div>
          }
          label="Be Awesome"
        />
        <SidebarItem
          icon={
            <div className="w-6 h-6 flex items-center justify-center">T</div>
          }
          label="Better UX"
        />
      </div>

      <div className="mt-4 pt-4 border-t border-ghibli-beige-dark/30 space-y-0.5">
        <h3 className="px-4 mb-1 text-xs font-semibold text-ghibli-brown opacity-70 uppercase">
          Explore
        </h3>
        <SidebarItem icon={<Lightbulb size={20} />} label="Trending" />
        <SidebarItem icon={<Music size={20} />} label="Music" />
        <SidebarItem icon={<Film size={20} />} label="Movies" />
        <SidebarItem icon={<Radio size={20} />} label="Live" />
        <SidebarItem icon={<Gamepad2 size={20} />} label="Video games" />
        <SidebarItem icon={<Newspaper size={20} />} label="News" />
        <SidebarItem icon={<Trophy size={20} />} label="Sports" />
        <SidebarItem icon={<Lightbulb size={20} />} label="Learning" />
      </div>
    </aside>
  );
}
