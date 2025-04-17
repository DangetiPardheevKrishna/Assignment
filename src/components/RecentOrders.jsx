import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RecentOrders = () => {
  const orders = [
    {
      id: 'ORD-7192',
      customer: 'Green Farms Co.',
      date: '2025-04-17',
      total: '$1,293.92',
      status: 'Processing',
      statusColor: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'ORD-7191',
      customer: 'Organic Foods Market',
      date: '2025-04-16',
      total: '$2,468.40',
      status: 'Shipped',
      statusColor: 'bg-green-50 text-green-600'
    },
    {
      id: 'ORD-7190',
      customer: 'Fresh Harvest Inc.',
      date: '2025-04-16',
      total: '$876.25',
      status: 'Delivered',
      statusColor: 'bg-green-50 text-green-600'
    },
    {
      id: 'ORD-7189',
      customer: 'Sunset Valley Market',
      date: '2025-04-15',
      total: '$1,452.68',
      status: 'Delivered',
      statusColor: 'bg-green-50 text-green-600'
    },
    {
      id: 'ORD-7188',
      customer: 'City Grocers Ltd.',
      date: '2025-04-15',
      total: '$592.40',
      status: 'Cancelled',
      statusColor: 'bg-red-50 text-red-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Latest orders across your platform.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-3 text-left font-medium text-gray-600">Order ID</th>
                <th className="px-3 py-3 text-left font-medium text-gray-600">Customer</th>
                <th className="px-3 py-3 text-left font-medium text-gray-600">Date</th>
                <th className="px-3 py-3 text-left font-medium text-gray-600">Total</th>
                <th className="px-3 py-3 text-left font-medium text-gray-600">Status</th>
                <th className="px-3 py-3 text-left font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="whitespace-nowrap px-3 py-3 font-medium">{order.id}</td>
                  <td className="whitespace-nowrap px-3 py-3">{order.customer}</td>
                  <td className="whitespace-nowrap px-3 py-3">{order.date}</td>
                  <td className="whitespace-nowrap px-3 py-3">{order.total}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Badge variant="outline" className={`${order.statusColor} border-0 px-2.5 py-0.5`}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <button className="text-sm text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;
