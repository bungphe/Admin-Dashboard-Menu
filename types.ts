
import type React from 'react';

export interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface MenuGroup {
  id: string;
  title: string;
  items: MenuItem[];
}
