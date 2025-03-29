import React from 'react';
import { VideoCard } from './VideoCard';

const thumbnail = '/bg.png';
// Example mock data for videos
const videoData = [
  {
    id: '1',
    thumbnail: thumbnail,
    title:
      'BLAST Premier Open Spring Lisboa 2025, Semi-Finals - Eternal Fire vs. OG',
    channelName: 'BLAST Premier',
    channelVerified: true,
    views: '87K views',
    timestamp: '2 hours ago',
    duration: '1:50:17',
    isLive: true,
    channelInitial: 'B',
  },
  {
    id: '2',
    thumbnail: thumbnail,
    title: 'John Dill - Robot Heart - Burning Man 2024',
    channelName: 'Robot Heart',
    channelVerified: true,
    views: '17K views',
    timestamp: '2 months ago',
    duration: '1:50:17',
    channelInitial: 'R',
  },
  {
    id: '3',
    thumbnail: thumbnail,
    title:
      'How to win in the AI era: Ship weekly, embrace technical debt & share your roadmap',
    channelName: "Lenny's Podcast",
    channelVerified: false,
    views: '7.6K views',
    timestamp: '2 days ago',
    duration: '1:25:50',
    channelInitial: 'L',
  },
  {
    id: '4',
    thumbnail: thumbnail,
    title: 'SONA Presents: TOMAN All Night Long',
    channelName: 'TOMAN',
    channelVerified: false,
    views: '3.3K views',
    timestamp: '1 day ago',
    duration: '1:59:47',
    channelInitial: 'T',
  },
  {
    id: '5',
    thumbnail: thumbnail,
    title:
      'Amsterdam Skyscraper Mix by NatX | Dive Deep: Melodic Nights Vol. 3',
    channelName: 'Dive Deep',
    channelVerified: false,
    views: '253 views',
    timestamp: '2 days ago',
    duration: '1:25:49',
    channelInitial: 'D',
  },
  {
    id: '6',
    thumbnail: thumbnail,
    title: '🎮 Master of Rage Forest: GamerLegion vs. LY - Epic Showdown!',
    channelName: 'MembTV - Age of Empires',
    channelVerified: true,
    views: '672 users',
    timestamp: '',
    duration: '',
    isLive: true,
    channelInitial: 'M',
  },
  {
    id: '7',
    thumbnail: thumbnail,
    title: 'DAUT INVENTED A STRATEGY THAT ELIMINATES ARCHERS!!! GODSSS',
    channelName: 'Mario Ovalle',
    channelVerified: false,
    views: '17K views',
    timestamp: '8 days ago',
    duration: '13:04',
    channelInitial: 'M',
  },
  {
    id: '8',
    thumbnail: thumbnail,
    title:
      'Vintage Culture, Live at Opulent Temple, Burning Man 2024 (Full Set)',
    channelName: 'Opulent Temple',
    channelVerified: false,
    views: '224K views',
    timestamp: '4 months ago',
    duration: '1:55:20',
    channelInitial: 'O',
  },
  {
    id: '9',
    thumbnail: thumbnail,
    title: 'The genius of 57X efficiency improvement from DeepSeek AI',
    channelName: 'Welch Labs',
    channelVerified: true,
    views: '451K views',
    timestamp: '3 weeks ago',
    duration: '18:09',
    channelInitial: 'W',
  },
  {
    id: '10',
    thumbnail: thumbnail,
    title:
      'DoorDash CEO: Customer Obsession, Surviving Startup Death Valley & Execution Beats Expertise',
    channelName: 'Y Combinator',
    channelVerified: true,
    views: '36K views',
    timestamp: '3 days ago',
    duration: '51:33',
    channelInitial: 'Y',
  },
  {
    id: '11',
    thumbnail: thumbnail,
    title: 'Nadav Dagon Live Show at Ein Hod Amphitheatre',
    channelName: 'NADAV DAGON Official',
    channelVerified: false,
    views: '588K views',
    timestamp: '2 years ago',
    duration: '1:15:27',
    channelInitial: 'N',
  },
  {
    id: '12',
    thumbnail: thumbnail,
    title:
      'Jano Gil live at Mute, Mar del Plata | w/ Artbat - Mässen | 27.01.24',
    channelName: 'Jano Gil',
    channelVerified: false,
    views: '185 views',
    timestamp: '2 days ago',
    duration: '1:30:01',
    channelInitial: 'J',
  },
];

export function VideoGrid() {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoData.map((video) => (
          <VideoCard
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            channelName={video.channelName}
            channelVerified={video.channelVerified}
            views={video.views}
            timestamp={video.timestamp}
            duration={video.duration}
            isLive={video.isLive}
            channelInitial={video.channelInitial}
            className="animate-fadeIn"
          />
        ))}
      </div>
    </div>
  );
}
