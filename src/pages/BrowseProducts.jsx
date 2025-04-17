import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ShoppingCart, ChevronDown, Star, Heart, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BrowseProducts = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Red Apples",
      category: "Fruits",
      price: "$24.99",
      pricePerUnit: "per 5kg box",
      minimumOrder: "3 boxes",
      rating: 4.8,
      inStock: true,
      availableQuantity: 145,
      image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Sweet and crisp red apples. Perfect for fresh consumption, cooking, or juicing. Grown without synthetic pesticides.",
      featured: true,
      discount: "10% off",
      organic: true,
      seasonal: true
    },
    {
      id: 2,
      name: "Organic Carrots",
      category: "Vegetables",
      price: "$18.50",
      pricePerUnit: "per 10kg bag",
      minimumOrder: "2 bags",
      rating: 4.6,
      inStock: true,
      availableQuantity: 72,
      image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Fresh organic carrots with vibrant color and sweet flavor. Excellent source of beta-carotene and antioxidants.",
      featured: false,
      organic: true,
      seasonal: false
    },
    {
      id: 3,
      name: "Russet Potatoes",
      category: "Vegetables",
      price: "$22.75",
      pricePerUnit: "per 15kg sack",
      minimumOrder: "1 sack",
      rating: 4.3,
      inStock: true,
      availableQuantity: 36,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Versatile russet potatoes perfect for baking, mashing, or frying. High starch content for fluffy texture.",
      featured: false,
      organic: false,
      seasonal: false
    },
    {
      id: 4,
      name: "Yellow Bananas",
      category: "Fruits",
      price: "$19.99",
      pricePerUnit: "per 13kg box",
      minimumOrder: "2 boxes",
      rating: 4.7,
      inStock: true,
      availableQuantity: 89,
      image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Perfectly ripened sweet bananas. Excellent source of potassium and natural energy. Ideal ripeness for immediate sale.",
      featured: true,
      discount: "15% off",
      organic: false,
      seasonal: false
    },
    {
      id: 5,
      name: "Roma Tomatoes",
      category: "Vegetables",
      price: "$26.50",
      pricePerUnit: "per 8kg box",
      minimumOrder: "2 boxes",
      rating: 4.5,
      inStock: false,
      availableQuantity: 0,
      image: "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Meaty Roma tomatoes ideal for sauces and canning. Rich flavor and low moisture content.",
      featured: false,
      organic: true,
      seasonal: true
    },
    {
      id: 6,
      name: "Bell Peppers Assortment",
      category: "Vegetables",
      price: "$29.99",
      pricePerUnit: "per 6kg box",
      minimumOrder: "1 box",
      rating: 4.9,
      inStock: true,
      availableQuantity: 28,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Colorful mix of red, yellow, and green bell peppers. Sweet flavor and crisp texture. Excellent for roasting or fresh use.",
      featured: true,
      organic: true,
      seasonal: false
    },
    {
      id: 7,
      name: "Seedless Watermelon",
      category: "Fruits",
      price: "$35.00",
      pricePerUnit: "per 15kg case",
      minimumOrder: "1 case",
      rating: 4.4,
      inStock: true,
      availableQuantity: 42,
      image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Sweet, juicy seedless watermelons. Refreshing summer favorite with bright red flesh.",
      featured: false,
      discount: "5% off",
      organic: false,
      seasonal: true
    },
    {
      id: 8,
      name: "Organic Broccoli",
      category: "Vegetables",
      price: "$32.50",
      pricePerUnit: "per 8kg case",
      minimumOrder: "1 case",
      rating: 4.2,
      inStock: true,
      availableQuantity: 18,
      image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Fresh organic broccoli with tight florets. Rich in vitamins and antioxidants.",
      featured: false,
      organic: true,
      seasonal: false
    },
    {
      id: 9,
      name: "Ginger Root",
      category: "Herbs",
      price: "$42.99",
      pricePerUnit: "per 5kg box",
      minimumOrder: "1 box",
      rating: 4.6,
      inStock: true,
      availableQuantity: 32,
      image: "https://images.unsplash.com/photo-1603904068602-afc447e483df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Fresh, aromatic ginger root. Adds spicy warmth to dishes and beverages. Known for anti-inflammatory properties.",
      featured: false,
      organic: true,
      seasonal: false
    },
    {
      id: 10,
      name: "Red Onions",
      category: "Vegetables",
      price: "$17.99",
      pricePerUnit: "per 10kg bag",
      minimumOrder: "2 bags",
      rating: 4.3,
      inStock: true,
      availableQuantity: 65,
      image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Vibrant red onions with mild, sweet flavor. Excellent for salads, grilling, and pickling.",
      featured: false,
      discount: "8% off",
      organic: false,
      seasonal: false
    },
    {
      id: 11,
      name: "Fresh Blueberries",
      category: "Berries",
      price: "$58.00",
      pricePerUnit: "per 4kg tray",
      minimumOrder: "1 tray",
      rating: 4.9,
      inStock: true,
      availableQuantity: 25,
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Plump, sweet blueberries bursting with flavor. Packed with antioxidants and ready for immediate sale.",
      featured: true,
      organic: true,
      seasonal: true
    },
    {
      id: 12,
      name: "Green Cabbage",
      category: "Vegetables",
      price: "$15.75",
      pricePerUnit: "per 12kg case",
      minimumOrder: "1 case",
      rating: 4.0,
      inStock: true,
      availableQuantity: 48,
      image: "https://images.unsplash.com/photo-1551629438-94c365f4a71f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Firm green cabbage heads with crisp texture. Great for slaws, stir-fries, and fermentation.",
      featured: false,
      organic: false,
      seasonal: false
    }
  ];

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Render stars for ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < Math.floor(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft size={16} />
                  Back
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Browse Products</h1>
            </div>
            <p className="text-gray-600 mt-1">Explore our fresh produce for wholesale orders</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <ShoppingCart size={16} />
              Cart (0)
            </Button>
            <Button className="gap-2">
              Request Quote
            </Button>
          </div>
        </div>
        
        {/* Search and filters */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="w-full justify-between">
              <span>Category</span>
              <ChevronDown size={16} />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span>Sort by</span>
              <ChevronDown size={16} />
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'} 
              className="flex-1"
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </Button>
            <Button 
              variant={viewMode === 'table' ? 'default' : 'outline'} 
              className="flex-1"
              onClick={() => setViewMode('table')}
            >
              Table View
            </Button>
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map(category => (
            <Button 
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Featured products banner */}
        {selectedCategory === 'all' && (
          <div className="mb-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.filter(p => p.featured).slice(0, 3).map(product => (
                <Card key={`featured-${product.id}`} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                    {product.discount && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        {product.discount}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg font-bold">{product.price}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-2">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Badge variant="outline" className="bg-white text-red-600 border-0">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  {product.discount && (
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      {product.discount}
                    </Badge>
                  )}
                  {product.organic && (
                    <Badge className="absolute top-2 left-2 bg-green-500">
                      Organic
                    </Badge>
                  )}
                  <Button variant="outline" size="icon" className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 p-0">
                    <Heart size={16} className="text-gray-500 hover:text-red-500" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{product.category}</span>
                      <div className="flex">
                        {renderStars(product.rating)}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold">{product.price}</span>
                        <span className="text-xs text-gray-500 ml-1">{product.pricePerUnit}</span>
                      </div>
                      <span className="text-sm text-gray-500">Min: {product.minimumOrder}</span>
                    </div>
                    <div className="pt-2 flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                      >
                        Details
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-green-300"
                        disabled={!product.inStock}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {/* Table View */}
        {viewMode === 'table' && (
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Minimum Order</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map(product => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded overflow-hidden">
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs flex items-center gap-1">
                            {product.organic && (
                              <Badge variant="outline" className="bg-green-50 text-green-600 border-0 text-xs">
                                Organic
                              </Badge>
                            )}
                            {product.seasonal && (
                              <Badge variant="outline" className="bg-orange-50 text-orange-600 border-0 text-xs">
                                Seasonal
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <div className="font-medium">{product.price}</div>
                      <div className="text-xs text-gray-500">{product.pricePerUnit}</div>
                    </TableCell>
                    <TableCell>{product.minimumOrder}</TableCell>
                    <TableCell>
                      {product.inStock ? (
                        <Badge variant="outline" className="bg-green-50 text-green-600 border-0">
                          In Stock ({product.availableQuantity})
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-50 text-red-600 border-0">
                          Out of Stock
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                        <Button size="sm" disabled={!product.inStock}>
                          Add
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        
        {/* Pagination */}
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowseProducts;
