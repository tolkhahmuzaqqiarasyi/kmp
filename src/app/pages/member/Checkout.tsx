import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export default function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<any[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
  const [shippingAddress, setShippingAddress] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15000;
  const total = subtotal + shipping;

  const removeItem = (productId: string) => {
    const newCart = cart.filter(item => item.productId !== productId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    toast.success('Produk dihapus dari keranjang');
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    const newCart = cart.map(item =>
      item.productId === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleCheckout = () => {
    if (!shippingAddress.trim()) {
      toast.error('Alamat pengiriman wajib diisi');
      return;
    }

    const orderId = 'ORD-' + Date.now();
    const orderData = {
      orderId,
      items: cart,
      subtotal,
      shipping,
      total,
      shippingAddress,
      date: new Date().toISOString()
    };

    localStorage.setItem('currentOrder', JSON.stringify(orderData));
    localStorage.setItem('cart', JSON.stringify([]));
    navigate(`/member/payment/${orderId}`);
  };

  if (cart.length === 0) {
    return (
      <div>
        <Button variant="ghost" onClick={() => navigate('/toko')} className="mb-4">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Kembali
        </Button>
        <Card>
          <CardContent className="p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Keranjang Kosong</h3>
            <p className="text-gray-600 mb-6">Belum ada produk di keranjang Anda</p>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a href="/toko">Belanja Sekarang</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Button variant="ghost" onClick={() => navigate('/toko')} className="mb-4">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Lanjut Belanja
      </Button>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Keranjang Belanja</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.productId} className="flex gap-4 pb-4 border-b last:border-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-red-600 font-semibold mb-2">
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 mb-2">
                        Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                      </p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeItem(item.productId)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alamat Pengiriman</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Alamat Lengkap</Label>
                  <Textarea
                    id="address"
                    rows={3}
                    placeholder="Masukkan alamat lengkap pengiriman"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Ringkasan Pesanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Ongkir</span>
                  <span>Rp {shipping.toLocaleString('id-ID')}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-red-600">Rp {total.toLocaleString('id-ID')}</span>
                </div>
                <Button
                  className="w-full bg-red-600 hover:bg-red-700"
                  size="lg"
                  onClick={handleCheckout}
                >
                  Lanjut ke Pembayaran
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}