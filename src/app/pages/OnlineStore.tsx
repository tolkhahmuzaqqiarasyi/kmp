import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { mockProducts } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function OnlineStore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(mockProducts.map(p => p.category)))];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-48 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Toko Online KMP</h1>
            <p className="text-red-100">Produk berkualitas dengan harga terjangkau untuk anggota</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Semua Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  {categories.filter(c => c !== 'all').map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'bg-red-600 hover:bg-red-700' : 'border-red-600 text-red-600 hover:bg-red-50'}
          >
            Semua
          </Button>
          {categories.filter(c => c !== 'all').map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-red-600 hover:bg-red-700' : 'border-red-600 text-red-600 hover:bg-red-50'}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <ImageWithFallback
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-700 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-red-600 font-bold text-lg mb-2">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Stok: {product.stock > 0 ? `${product.stock} ${product.unit}` : 'Habis'}
                </p>
                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700"
                  disabled={product.stock === 0}
                >
                  <Link to={`/toko/${product.id}`}>
                    Lihat Detail
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-white border-red-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Jasa Logistik & Distribusi</h3>
              <p className="text-sm text-gray-600 mb-3">
                Layanan pergudangan, cold storage, dan rantai pasok untuk kebutuhan logistik Anda
              </p>
              <p className="text-xs text-red-600">Hubungi admin untuk info lebih lanjut</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-white border-red-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Pertanian Terpadu</h3>
              <p className="text-sm text-gray-600 mb-3">
                Penyediaan pupuk, bibit, dan pemasaran produk pertanian untuk meningkatkan hasil panen
              </p>
              <p className="text-xs text-red-600">Hubungi admin untuk info lebih lanjut</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-white border-red-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Sewa Alat Pertanian</h3>
              <p className="text-sm text-gray-600 mb-3">
                Sewa traktor dan peralatan pertanian modern dengan harga terjangkau
              </p>
              <p className="text-xs text-red-600">Hubungi admin untuk info lebih lanjut</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
