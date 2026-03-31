import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Check, CreditCard, Smartphone, Store } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Label } from '../../components/ui/label';
import { toast } from 'sonner';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function Payment() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderData] = useState(() => {
    const data = localStorage.getItem('currentOrder');
    return data ? JSON.parse(data) : null;
  });

  if (!orderData) {
    return (
      <div>
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-600">Data pesanan tidak ditemukan</p>
            <Button asChild className="mt-4 bg-red-600 hover:bg-red-700">
              <a href="/toko">Kembali ke Toko</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handlePayment = () => {
    if (!paymentMethod) {
      toast.error('Pilih metode pembayaran');
      return;
    }

    // Simulate payment processing
    toast.success('Pesanan berhasil dibuat! Menunggu konfirmasi pembayaran.');
    localStorage.removeItem('currentOrder');
    navigate('/member/transaksi');
  };

  return (
    <div>
      <Button variant="ghost" onClick={() => navigate('/member/checkout')} className="mb-4">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Kembali
      </Button>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Pilih Metode Pembayaran</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  {/* Transfer Bank */}
                  <div className="border rounded-lg p-4 hover:border-red-600 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="transfer" id="transfer" />
                      <Label htmlFor="transfer" className="flex-grow cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Transfer Bank</p>
                            <p className="text-sm text-gray-600">BCA, BNI, Mandiri, BRI</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    {paymentMethod === 'transfer' && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Rekening Tujuan:</p>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="text-gray-600">Bank BCA</p>
                            <p className="font-mono font-semibold">1234567890</p>
                            <p className="text-gray-600">a.n. Koperasi Merah Putih</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* QRIS */}
                  <div className="border rounded-lg p-4 hover:border-red-600 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="qris" id="qris" />
                      <Label htmlFor="qris" className="flex-grow cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Smartphone className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">QRIS</p>
                            <p className="text-sm text-gray-600">Scan untuk bayar</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    {paymentMethod === 'qris' && (
                      <div className="mt-4 p-4 bg-purple-50 rounded-lg text-center">
                        <div className="w-48 h-48 bg-white mx-auto mb-2 flex items-center justify-center border-2 border-purple-200 rounded-lg">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1609743522653-52354461eb27?w=200"
                            alt="QR Code"
                            className="w-40 h-40 object-contain"
                          />
                        </div>
                        <p className="text-sm text-gray-600">Scan dengan aplikasi e-wallet Anda</p>
                      </div>
                    )}
                  </div>

                  {/* Cash */}
                  <div className="border rounded-lg p-4 hover:border-red-600 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex-grow cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Store className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Bayar di Toko</p>
                            <p className="text-sm text-gray-600">Bayar tunai saat mengambil pesanan</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    {paymentMethod === 'cash' && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          Pesanan Anda akan disiapkan. Silakan datang ke toko untuk mengambil dan membayar pesanan.
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Alamat: Jl. Kemerdekaan No. 17, Jakarta Pusat
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Detail Pesanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Order ID</p>
                  <p className="font-mono font-semibold">{orderId}</p>
                </div>
                <div className="border-t pt-3">
                  <p className="text-sm text-gray-600 mb-2">Item ({orderData.items.length})</p>
                  {orderData.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.name} x{item.quantity}</span>
                      <span className="font-semibold">
                        Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>Rp {orderData.subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Ongkir</span>
                    <span>Rp {orderData.shipping.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-red-600">Rp {orderData.total.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-red-600 hover:bg-red-700"
                  size="lg"
                  onClick={handlePayment}
                  disabled={!paymentMethod}
                >
                  <Check className="mr-2 w-5 h-5" />
                  Konfirmasi Pembayaran
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
