import React from 'react';
import { ArrowDownIcon, ArrowUpIcon, ShoppingCart, Users, CreditCard, CircleDollarSign } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,426.78',
      change: '+12.5%',
      trend: 'up',
      icon: CircleDollarSign,
      iconClass: 'bg-green-100 text-green-600',
      description: 'compared to last month'
    },
    {
      title: 'New Orders',
      value: '243',
      change: '+18.2%',
      trend: 'up',
      icon: ShoppingCart,
      iconClass: 'bg-blue-100 text-blue-600',
      description: 'compared to last month'
    },
    {
      title: 'Sales Conversions',
      value: '8.14%',
      change: '-3.1%',
      trend: 'down',
      icon: CreditCard,
      iconClass: 'bg-orange-100 text-orange-600',
      description: 'compared to last month'
    },
    {
      title: 'Active Customers',
      value: '573',
      change: '+6.7%',
      trend: 'up',
      icon: Users,
      iconClass: 'bg-purple-100 text-purple-600',
      description: 'compared to last month'
    }
  ];

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`p-2 rounded-full ${stat.iconClass}`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="flex items-center text-xs text-gray-500">
              {stat.trend === 'up' ? (
                <ArrowUpIcon className="mr-1 h-3 w-3 text-green-500" />
              ) : (
                <ArrowDownIcon className="mr-1 h-3 w-3 text-red-500" />
              )}
              <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                {stat.change}
              </span>
              <span className="ml-1">{stat.description}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
