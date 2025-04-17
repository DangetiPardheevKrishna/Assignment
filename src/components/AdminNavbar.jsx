import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const AdminNavbar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center bg-white px-4 shadow-sm">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center space-x-2 md:w-56">
          <div className="h-8 w-8 rounded-full bg-[#4CAF50] flex items-center justify-center">
            <span className="text-white font-bold">HH</span>
          </div>
          <span className="font-display text-xl font-bold hidden md:inline">Harvest Hub</span>
          <span className="font-display text-sm text-gray-500 hidden md:inline">Admin</span>
        </div>
        
        <div className="flex max-w-md flex-1 items-center px-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search products, orders..."
              className="w-full rounded-md border pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#4CAF50] text-[10px] font-medium text-white">
                  3
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="flex flex-col space-y-2 p-2">
                <h3 className="font-medium text-sm">Notifications</h3>
                <div className="border-t pt-2">
                  <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md">
                    <div className="h-9 w-9 rounded-full bg-[#E6F4EA] flex items-center justify-center text-bg-[#4CAF50]">
                      <Bell className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New order received</p>
                      <p className="text-xs text-gray-500">Order #10392 from Organic Foods Co.</p>
                      <p className="text-xs text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md">
                    <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <Bell className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Low inventory alert</p>
                      <p className="text-xs text-gray-500">Organic Apples (5 kg left)</p>
                      <p className="text-xs text-gray-400">3 hours ago</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-sm" size="sm">
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56" align="end">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@harvesthub.com</p>
                <div className="h-px bg-gray-200 my-2" />
                <Button variant="ghost" className="justify-start text-sm px-2">
                  Profile Settings
                </Button>
                <Button variant="ghost" className="justify-start text-sm px-2">
                  Account
                </Button>
                <Button variant="ghost" className="justify-start text-sm px-2 text-red-500">
                  Sign out
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;