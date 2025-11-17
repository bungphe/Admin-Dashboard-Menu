
import React from 'react';
import { IconSearch, IconGrid, IconList, IconSun, IconMoon } from './icons/index';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  layout: 'grid' | 'list';
  onLayoutChange: (layout: 'grid' | 'list') => void;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  layout,
  onLayoutChange,
  theme,
  onThemeChange,
}) => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm p-4 mb-6">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 whitespace-nowrap">Menu</h1>
        
        <div className="relative flex-grow max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <IconSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Menu..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onLayoutChange('list')}
            className={`p-2 rounded-md ${layout === 'list' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
            aria-label="List view"
          >
            <IconList className="h-5 w-5" />
          </button>
          <button
            onClick={() => onLayoutChange('grid')}
            className={`p-2 rounded-md ${layout === 'grid' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
            aria-label="Grid view"
          >
            <IconGrid className="h-5 w-5" />
          </button>
          <button
            onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
