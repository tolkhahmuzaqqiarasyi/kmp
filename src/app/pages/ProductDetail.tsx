import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockProducts } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk tidak ditemukan</h2>
            <Button asChild variant="outline" className="border-red-600 text-red-600">
              <Link to="/toko">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Kembali ke Toko
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error('Silakan login terlebih dahulu');
      navigate('/login');
      return;
    }

    if (user?.role !== 'member') {
      toast.error('Hanya anggota yang dapat melakukan pembelian');
      return;
    }

    // Save to cart in localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.productId === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.images[0]
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Produk ditambahkan ke keranjang');
    navigate('/member/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/toko')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Kembali ke Toko
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <ImageWithFallback
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-red-600' : 'border-gray-200'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-red-600">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <span className="text-gray-500 ml-2">/ {product.unit}</span>
                </div>
                
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Ketersediaan Stok</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {product.stock > 0 ? (
                      <span className="text-green-600">{product.stock} {product.unit} tersedia</span>
                    ) : (
                      <span className="text-red-600">Stok habis</span>
                    )}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Deskripsi Produk</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {product.stock > 0 && (
                  <>
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Jumlah
                      </label>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-xl font-semibold w-16 text-center">{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                          disabled={quantity >= product.stock}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Total Harga</p>
                      <p className="text-2xl font-bold text-red-600">
                        Rp {(product.price * quantity).toLocaleString('id-ID')}
                      </p>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="mr-2 w-5 h-5" />
                      Tambah ke Keranjang
                    </Button>

                    {!isAuthenticated && (
                      <p className="text-sm text-gray-500 text-center mt-3">
                        <Link to="/login" className="text-red-600 hover:text-red-700">
                          Login
                        </Link>{' '}
                        untuk melakukan pembelian
                      </p>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Produk Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                      <ImageWithFallback
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-red-600 font-bold mb-3">
                      Rp {relatedProduct.price.toLocaleString('id-ID')}
                    </p>
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      <Link to={`/toko/${relatedProduct.id}`}>Lihat Detail</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
