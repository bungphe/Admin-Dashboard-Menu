
import React from 'react';
import type { MenuGroup } from '../types';
import { IconPlaceholder } from '../components/icons/index';

// Using placeholders since specific icons are varied. 
// A real app would have a dedicated icon for each item.
export const menuData: MenuGroup[] = [
  {
    id: 'ceo',
    title: 'CEO',
    items: [
      { id: 'ceo-schedule', title: 'Lịch học và làm việc', icon: <img src="https://i.imgur.com/qLwR5eG.png" alt="schedule" className="w-12 h-12" /> },
    ],
  },
  {
    id: 'teacher',
    title: 'Giáo viên',
    items: [
      { id: 'teacher-list', title: 'Danh sách giáo viên', icon: <img src="https://i.imgur.com/gK9pZkH.png" alt="teacher list" className="w-12 h-12" /> },
      { id: 'class-list', title: 'Danh sách lớp', icon: <img src="https://i.imgur.com/6J7V2aR.png" alt="class list" className="w-12 h-12" /> },
    ],
  },
  {
    id: 'student',
    title: 'Học sinh',
    items: [
      { id: 'student-list', title: 'Danh sách học sinh', icon: <img src="https://i.imgur.com/6XyJ8gJ.png" alt="student list" className="w-12 h-12" /> },
      { id: 'attendance-list', title: 'Danh sách điểm danh', icon: <img src="https://i.imgur.com/Hn5a9bV.png" alt="attendance" className="w-12 h-12" /> },
    ],
  },
  {
    id: 'admin',
    title: 'Admin',
    items: [
      { id: 'admin-orders', title: 'Chia đơn', icon: <IconPlaceholder color="bg-green-500" /> },
      { id: 'admin-dropped-orders', title: 'Danh sách đơn thả nổi', icon: <IconPlaceholder color="bg-blue-500" /> },
      { id: 'admin-source', title: 'Nguồn tới', icon: <IconPlaceholder color="bg-purple-500" /> },
      { id: 'admin-business-report', title: 'Báo cáo kinh doanh', icon: <IconPlaceholder color="bg-yellow-500" /> },
    ],
  },
  {
    id: 'sale',
    title: 'Sale',
    items: [
      { id: 'sale-data', title: 'Data sale', icon: <IconPlaceholder color="bg-indigo-500" /> },
      { id: 'sale-order', title: 'Order', icon: <IconPlaceholder color="bg-sky-500" /> },
      { id: 'sale-crm', title: 'CRM', icon: <IconPlaceholder color="bg-rose-500" /> },
      { id: 'sale-customer-service', title: 'Customer Service', icon: <IconPlaceholder color="bg-teal-500" /> },
      { id: 'sale-report', title: 'Báo cáo sale', icon: <IconPlaceholder color="bg-lime-500" /> },
    ],
  },
   {
    id: 'accounting',
    title: 'Kế toán',
    items: [
        { id: 'acc-review-total', title: 'Kế toán đối soát đơn', icon: <IconPlaceholder color="bg-cyan-500" /> },
        { id: 'acc-review-internal', title: 'Kế toán đối soát nội bộ', icon: <IconPlaceholder color="bg-cyan-600" /> },
        { id: 'acc-hotbonus', title: 'Thanh toán hotbonus', icon: <IconPlaceholder color="bg-green-400" /> },
        { id: 'acc-review-vet', title: 'Kế toán đối soát đơn VET', icon: <IconPlaceholder color="bg-cyan-700" /> },
        { id: 'acc-email-salary', title: 'Gửi email lương', icon: <IconPlaceholder color="bg-lime-400" /> },
    ],
  },
  {
    id: 'warehouse',
    title: 'Kho vận',
    items: [
        { id: 'wh-main', title: 'Warehouse', icon: <IconPlaceholder color="bg-blue-600" /> },
        { id: 'wh-combo', title: 'Combo', icon: <IconPlaceholder color="bg-yellow-400" /> },
        { id: 'wh-qrcode', title: 'QR code', icon: <IconPlaceholder color="bg-gray-400" /> },
        { id: 'wh-stockin', title: 'Stock in', icon: <IconPlaceholder color="bg-blue-800" /> },
    ],
  },
];
