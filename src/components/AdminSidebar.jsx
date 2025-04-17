import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  ClipboardList, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Products', icon: ShoppingCart, path: '/admin/products' },
    { name: 'Inventory', icon: Package, path: '/admin/inventory' },
    { name: 'Orders', icon: ClipboardList, path: '/admin/orders' },
    { name: 'Customers', icon: Users, path: '/admin/customers' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <aside 
      className={cn(
        "h-[calc(100vh-4rem)] bg-white border-r transition-all duration-300",
        collapsed ? "w-16" : "w-56"
      )}
    >
      <div className="flex h-full flex-col justify-between py-4">
        <div className="space-y-1 px-3">
          {sidebarItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors",
                item.path === '/admin' && "bg-harvest-green-light text-harvest-green-dark font-medium"
              )}
            >
              <item.icon className={cn("h-5 w-5 flex-shrink-0", item.path === '/admin' && "text-harvest-green")} />
              <span className={cn("ml-3 truncate", collapsed && "hidden")}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="px-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : (
              <>
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span>Collapse</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
