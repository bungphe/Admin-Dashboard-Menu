
import React from 'react';
import type { MenuGroup } from '../types';
import MenuItemCard from './MenuItemCard';
import { IconStar } from './icons/index';

interface MenuGroupProps {
  group: MenuGroup;
  layout: 'grid' | 'list';
}

const MenuGroupComponent: React.FC<MenuGroupProps> = ({ group, layout }) => {
  const gridLayoutClass = layout === 'grid' 
    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
    : "flex flex-col gap-3";

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <IconStar />
        <h2 className="ml-2 text-lg font-semibold text-gray-800 dark:text-gray-100">{group.title}</h2>
      </div>
      <div className={gridLayoutClass}>
        {group.items.map((item) => (
          <MenuItemCard key={item.id} item={item} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default MenuGroupComponent;
