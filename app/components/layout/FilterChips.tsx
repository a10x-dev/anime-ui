import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group/button-group';
import React from 'react';

type FilterChipProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const FilterChip = ({ label, active = false, onClick }: FilterChipProps) => (
  <Button
    variant={active ? 'nature' : 'outline'}
    size="sm"
    rounded="pill"
    className={`px-4 whitespace-nowrap text-xs ${
      active
        ? 'border-ghibli-green bg-ghibli-green text-ghibli-beige hover:bg-ghibli-green-dark'
        : 'border-ghibli-beige-dark bg-ghibli-beige/60 text-ghibli-brown hover:bg-ghibli-beige-dark/50'
    }`}
    onClick={onClick}
  >
    {label}
  </Button>
);

export function FilterChips() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = React.useState({
    left: false,
    right: true,
  });

  const categories = [
    { id: 'all', label: 'All', active: true },
    { id: 'videogames', label: 'Video games' },
    { id: 'music', label: 'Music' },
    { id: 'live', label: 'Live' },
    { id: 'counter-strike', label: 'Counter-Strike 2' },
    { id: 'age-of-empires', label: 'Age of Empires II: Definitive E...' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'deep-house', label: 'Deep house' },
    { id: 'ai', label: 'Artificial intelligence' },
    { id: 'mixes', label: 'Mixes' },
    { id: 'boiler-room', label: 'Boiler Room' },
    { id: 'tech', label: 'Technology' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newPosition = container.scrollLeft;

      setScrollPosition(newPosition);
      setShowScrollButtons({
        left: newPosition > 0,
        right: newPosition < container.scrollWidth - container.clientWidth - 10,
      });
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Check initial state
      handleScroll();

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center">
        {showScrollButtons.left && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 z-10 bg-ghibli-beige/80 border-ghibli-beige-dark rounded-full shadow-md"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={16} />
          </Button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 pl-0 pr-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <FilterChip
              key={category.id}
              label={category.label}
              active={category.active}
            />
          ))}
        </div>

        {showScrollButtons.right && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 z-10 bg-ghibli-beige/80 border-ghibli-beige-dark rounded-full shadow-md"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
}
