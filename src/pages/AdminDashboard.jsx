import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  ClipboardList, 
  Settings, 
  ArrowLeft
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';
import DashboardStats from '@/components/DashboardStats';
import RecentOrders from '@/components/RecentOrders';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome to your Harvest Hub admin dashboard</p>
            </div>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} />
                Back to Main Site
              </Button>
            </Link>
          </div>
          
          <DashboardStats />
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
            <div className="lg:col-span-2">
              <RecentOrders />
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add New Product
                  </Button>
                  <Button className="w-full justify-start">
                    <ClipboardList className="mr-2 h-4 w-4" />
                    Create New Order
                  </Button>
                  <Button className="w-full justify-start">
                    <Package className="mr-2 h-4 w-4" />
                    Manage Inventory
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 rounded-lg border p-3">
                      <div className="mt-0.5 rounded-full bg-orange-100 p-1 text-orange-600">
                        <Package className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Low Stock Alert</p>
                        <p className="text-xs text-gray-500">Organic Apples are running low</p>
                        <p className="text-xs text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-lg border p-3">
                      <div className="mt-0.5 rounded-full bg-green-100 p-1 text-green-600">
                        <ShoppingCart className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">New Order Received</p>
                        <p className="text-xs text-gray-500">Order #10392 needs processing</p>
                        <p className="text-xs text-gray-400">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;