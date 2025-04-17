
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Search, Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';

const AdminProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Organic Apples',
      category: 'Fruits',
      price: '$24.99',
      unit: 'per 5kg box',
      stock: 15,
      stockStatus: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 2,
      name: 'Fresh Carrots',
      category: 'Vegetables',
      price: '$18.50',
      unit: 'per 10kg bag',
      stock: 42,
      stockStatus: 'In Stock',
      image: 'https://images.unsplash.com/photo-1598170845352-32ff054a87f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fHww'
    },
    {
      id: 3,
      name: 'Red Potatoes',
      category: 'Vegetables',
      price: '$22.75',
      unit: 'per 15kg sack',
      stock: 36,
      stockStatus: 'In Stock',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 4,
      name: 'Ripe Bananas',
      category: 'Fruits',
      price: '$19.99',
      unit: 'per 10kg box',
      stock: 28,
      stockStatus: 'In Stock',
      image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww'
    },
    {
      id: 5,
      name: 'Fresh Tomatoes',
      category: 'Vegetables',
      price: '$26.50',
      unit: 'per 8kg box',
      stock: 0,
      stockStatus: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 6,
      name: 'Green Peppers',
      category: 'Vegetables',
      price: '$21.99',
      unit: 'per 5kg box',
      stock: 8,
      stockStatus: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBwZXBwZXJ8ZW58MHx8MHx8fDA%3D'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Products</h1>
              <p className="text-gray-600">Manage your product inventory</p>
            </div>
            <div className="flex gap-2">
              <Link to="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft size={16} />
                  Back to Main Site
                </Button>
              </Link>
              <Button className="gap-2">
                <Plus size={16} />
                Add Product
              </Button>
            </div>
          </div>
          
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-8"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Filter size={14} />
                Filter
              </Button>
              <Button variant="outline" size="sm">Category</Button>
              <Button variant="outline" size="sm">Price Range</Button>
              <Button variant="outline" size="sm">Stock Status</Button>
            </div>
          </div>
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{product.category}</span>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${product.stockStatus === 'In Stock' ? 'bg-green-50 text-green-600' : 
                            product.stockStatus === 'Low Stock' ? 'bg-orange-50 text-orange-600' : 
                            'bg-red-50 text-red-600'} 
                          border-0
                        `}
                      >
                        {product.stockStatus}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold">{product.price}</span>
                        <span className="text-xs text-gray-500 ml-1">{product.unit}</span>
                      </div>
                      <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                    </div>
                    <div className="pt-2 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                      <Button size="sm" className="flex-1">View</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProducts;
