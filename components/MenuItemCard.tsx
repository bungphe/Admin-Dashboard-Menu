
import React from 'react';
import type { MenuItem } from '../types';
import { IconUsers, IconChevronDown } from './icons/index';

interface MenuItemCardProps {
  item: MenuItem;
  layout: 'grid' | 'list';
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, layout }) => {
  if (layout === 'list') {
    return (
      <a href="#" className="flex items-center p-3 space-x-4 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 border border-transparent dark:border-gray-700/50">
        <div className="flex-shrink-0">
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {item.title}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full">
            <IconUsers />
          </button>
          <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full">
            <IconChevronDown />
          </button>
        </div>
      </a>
    );
  }

  return (
    <a href="#" className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent dark:border-gray-700/50 text-center">
      <div className="mb-3">
        {item.icon}
      </div>
      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400">
        {item.title}
      </p>
      <div className="absolute top-2 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full">
            <IconUsers />
        </button>
        <button className="p-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full">
            <IconChevronDown />
        </button>
      </div>
    </a>
  );
};

export default MenuItemCard;
