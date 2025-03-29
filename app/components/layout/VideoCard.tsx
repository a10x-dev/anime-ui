import { Clock, MoreVertical } from 'lucide-react';

import { AnimatedCard } from '@/components/ui/animated-card';
import Link from 'next/link';
import React from 'react';

type VideoCardProps = {
  thumbnail: string;
  title: string;
  channelName: string;
  channelAvatar?: string;
  channelVerified?: boolean;
  views: string;
  timestamp: string;
  duration: string;
  isLive?: boolean;
  channelInitial?: string;
  className?: string;
};

export function VideoCard({
  thumbnail,
  title,
  channelName,
  channelAvatar,
  channelVerified = false,
  views,
  timestamp,
  duration,
  isLive = false,
  channelInitial,
  className = '',
}: VideoCardProps) {
  return (
    <div className={`group ${className}`}>
      <Link href="#" className="block">
        <div className="relative mb-3 rounded-xl overflow-hidden">
          {/* Thumbnail */}
          <div className="aspect-video bg-ghibli-beige-dark relative overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Duration badge */}
            {!isLive && (
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                {duration}
              </div>
            )}

            {/* Live badge */}
            {isLive && (
              <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
                <span className="w-2 h-2 rounded-full bg-white mr-1 animate-pulse"></span>
                LIVE
              </div>
            )}

            {/* Watch later overlay - appears on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button className="w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80">
                <Clock size={18} />
              </button>
            </div>
          </div>

          {/* Video info */}
          <div className="flex mt-3">
            {/* Channel avatar */}
            <div className="flex-shrink-0 mr-3">
              {channelAvatar ? (
                <div className="w-9 h-9 rounded-full overflow-hidden">
                  <img
                    src={channelAvatar}
                    alt={channelName}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-full bg-ghibli-green-light flex items-center justify-center text-ghibli-green-dark font-medium">
                  {channelInitial || channelName.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              {/* Title */}
              <h3 className="text-ghibli-brown font-medium text-sm mb-1 line-clamp-2">
                {title}
              </h3>

              {/* Channel name and verification */}
              <div className="flex items-center text-xs text-ghibli-brown/70 mb-1">
                <span className="truncate">{channelName}</span>
                {channelVerified && (
                  <span className="ml-1 text-ghibli-green-dark">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-3.8-3.8L7 12l3.1 3.1 6.9-6.9 1.2 1.3-7.9 7.2z" />
                    </svg>
                  </span>
                )}
              </div>

              {/* View count and time */}
              <div className="text-xs text-ghibli-brown/70 flex items-center">
                <span>{views}</span>
                <span className="mx-1">•</span>
                <span>{timestamp}</span>
              </div>
            </div>

            {/* More options button - appears on hover */}
            <button className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 text-ghibli-brown hover:bg-ghibli-beige-dark/40">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
