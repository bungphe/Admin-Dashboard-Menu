
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import MenuGroupComponent from './components/MenuGroup';
import { menuData } from './data/menuData';
import type { MenuGroup } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const filteredMenuData = useMemo(() => {
    if (!searchTerm) {
      return menuData;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    
    const filtered = menuData.map(group => {
      const filteredItems = group.items.filter(item =>
        item.title.toLowerCase().includes(lowercasedFilter)
      );

      if (filteredItems.length > 0) {
        return { ...group, items: filteredItems };
      }
      
      // Also check if group title matches
      if (group.title.toLowerCase().includes(lowercasedFilter)) {
        return group;
      }
      
      return null;
    }).filter((group): group is MenuGroup => group !== null);

    return filtered;

  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        layout={layout}
        onLayoutChange={setLayout}
        theme={theme}
        onThemeChange={setTheme}
      />
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {filteredMenuData.length > 0 ? (
          filteredMenuData.map(group => (
            <MenuGroupComponent key={group.id} group={group} layout={layout} />
          ))
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold">No results found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
