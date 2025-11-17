import React from 'react';
import type { MenuGroup } from '../types';
import {
  IconCalendar,
  IconTeacherList,
  IconClassList,
  IconStudentList,
  IconAttendance,
  IconAssignOrders,
  IconFloatingOrders,
  IconDataSource,
  IconBusinessReport,
  IconSalesData,
  IconOrder,
  IconCRM,
  IconCustomerService,
  IconSalesReport,
  IconReconciliation,
  IconInternalReconciliation,
  IconBonusPayment,
  IconVetReconciliation,
  IconSalaryEmail,
  IconWarehouse,
  IconCombo,
  IconQRCode,
  IconStockIn,
} from '../components/icons/index';


export const menuData: MenuGroup[] = [
  {
    id: 'ceo',
    title: 'CEO',
    items: [
      { id: 'ceo-schedule', title: 'Lịch học và làm việc', icon: <IconCalendar /> },
    ],
  },
  {
    id: 'teacher',
    title: 'Giáo viên',
    items: [
      { id: 'teacher-list', title: 'Danh sách giáo viên', icon: <IconTeacherList /> },
      { id: 'class-list', title: 'Danh sách lớp', icon: <IconClassList /> },
    ],
  },
  {
    id: 'student',
    title: 'Học sinh',
    items: [
      { id: 'student-list', title: 'Danh sách học sinh', icon: <IconStudentList /> },
      { id: 'attendance-list', title: 'Danh sách điểm danh', icon: <IconAttendance /> },
    ],
  },
  {
    id: 'admin',
    title: 'Admin',
    items: [
      { id: 'admin-orders', title: 'Chia đơn', icon: <IconAssignOrders /> },
      { id: 'admin-dropped-orders', title: 'Danh sách đơn thả nổi', icon: <IconFloatingOrders /> },
      { id: 'admin-source', title: 'Nguồn tới', icon: <IconDataSource /> },
      { id: 'admin-business-report', title: 'Báo cáo kinh doanh', icon: <IconBusinessReport /> },
    ],
  },
  {
    id: 'sale',
    title: 'Sale',
    items: [
      { id: 'sale-data', title: 'Data sale', icon: <IconSalesData /> },
      { id: 'sale-order', title: 'Order', icon: <IconOrder /> },
      { id: 'sale-crm', title: 'CRM', icon: <IconCRM /> },
      { id: 'sale-customer-service', title: 'Customer Service', icon: <IconCustomerService /> },
      { id: 'sale-report', title: 'Báo cáo sale', icon: <IconSalesReport /> },
    ],
  },
   {
    id: 'accounting',
    title: 'Kế toán',
    items: [
        { id: 'acc-review-total', title: 'Kế toán đối soát đơn', icon: <IconReconciliation /> },
        { id: 'acc-review-internal', title: 'Kế toán đối soát nội bộ', icon: <IconInternalReconciliation /> },
        { id: 'acc-hotbonus', title: 'Thanh toán hotbonus', icon: <IconBonusPayment /> },
        { id: 'acc-review-vet', title: 'Kế toán đối soát đơn VET', icon: <IconVetReconciliation /> },
        { id: 'acc-email-salary', title: 'Gửi email lương', icon: <IconSalaryEmail /> },
    ],
  },
  {
    id: 'warehouse',
    title: 'Kho vận',
    items: [
        { id: 'wh-main', title: 'Warehouse', icon: <IconWarehouse /> },
        { id: 'wh-combo', title: 'Combo', icon: <IconCombo /> },
        { id: 'wh-qrcode', title: 'QR code', icon: <IconQRCode /> },
        { id: 'wh-stockin', title: 'Stock in', icon: <IconStockIn /> },
    ],
  },
];
