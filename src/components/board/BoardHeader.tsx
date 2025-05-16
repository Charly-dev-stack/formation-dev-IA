import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Board } from '../../types';
import { useBoard } from '../../context/BoardContext';

interface BoardHeaderProps {
  board: Board;
  onAddColumn: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const BoardHeader: React.FC<BoardHeaderProps> = ({
  board,
  onAddColumn,
  searchQuery,
  setSearchQuery,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          {board.title}
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          {/* Search bar - shows on mobile when expanded */}
          {isSearchOpen && (
            <div className="w-full sm:max-w-xs">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks..."
                className="w-full"
                leftIcon={<Search size={16} />}
              />
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex space-x-2">
            {/* Search toggle button (mobile only) */}
            <Button
              variant="ghost"
              className="sm:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={18} />
            </Button>
            
            {/* Search input (desktop only) */}
            <div className="hidden sm:block max-w-xs">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks..."
                className="w-full"
              />
            </div>
            
            <Button 
              variant="secondary"
              leftIcon={<Filter size={16} />}
            >
              Filter
            </Button>
            
            <Button 
              leftIcon={<Plus size={16} />}
              onClick={onAddColumn}
            >
              Add Column
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};