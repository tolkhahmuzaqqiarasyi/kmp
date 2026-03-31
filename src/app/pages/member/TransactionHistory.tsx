// Transaction History Page
import { useState } from 'react';
import { Download, Eye, Filter } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { mockOrders, mockSavings, mockLoans } from '../../data/mockData';
import { Badge } from '../../components/ui/badge';

export default function TransactionHistory() {
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: any }> = {
      completed: { label: 'Selesai', variant: 'default' },
      processing: { label: 'Diproses', variant: 'secondary' },
      pending: { label: 'Menunggu', variant: 'outline' },
      cancelled: { label: 'Dibatalkan', variant: 'destructive' }
    };
    const s = statusMap[status] || statusMap.pending;
    return <Badge variant={s.variant}>{s.label}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Riwayat Transaksi</h2>
          <p className="text-gray-600">Semua transaksi Anda</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </div>

      <Tabs defaultValue="orders">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="orders">Pesanan</TabsTrigger>
          <TabsTrigger value="savings">Simpanan</TabsTrigger>
          <TabsTrigger value="loans">Pinjaman</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Pesanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(order.date).toLocaleDateString('id-ID')}
                        </p>
                      </div>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="space-y-1 mb-3">
                      {order.products.map((p, i) => (
                        <p key={i} className="text-sm text-gray-700">
                          {p.name} x{p.quantity}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-red-600">
                        Rp {order.total.toLocaleString('id-ID')}
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedInvoice(order)}>
                            <Eye className="w-4 h-4 mr-2" />
                            Lihat Invoice
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Invoice {order.id}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-gray-600">Tanggal</p>
                              <p className="font-semibold">{new Date(order.date).toLocaleDateString('id-ID')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-2">Produk</p>
                              {order.products.map((p, i) => (
                                <div key={i} className="flex justify-between mb-1">
                                  <span>{p.name} x{p.quantity}</span>
                                  <span>Rp {(p.price * p.quantity).toLocaleString('id-ID')}</span>
                                </div>
                              ))}
                            </div>
                            <div className="border-t pt-3">
                              <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span className="text-red-600">Rp {order.total.toLocaleString('id-ID')}</span>
                              </div>
                            </div>
                            <Button className="w-full" variant="outline">
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="savings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Simpanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockSavings.map((saving) => (
                  <div key={saving.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{saving.description}</p>
                      <p className="text-sm text-gray-600">{new Date(saving.date).toLocaleDateString('id-ID')}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${saving.type === 'deposit' ? 'text-green-600' : 'text-red-600'}`}>
                        {saving.type === 'deposit' ? '+' : '-'} Rp {saving.amount.toLocaleString('id-ID')}
                      </p>
                      <Button variant="ghost" size="sm" className="mt-1">
                        <Eye className="w-4 h-4 mr-1" />
                        Invoice
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="loans" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Pinjaman</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockLoans.map((loan) => (
                  <div key={loan.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">{loan.id}</p>
                        <p className="text-sm text-gray-600">
                          Diajukan: {new Date(loan.applicationDate).toLocaleDateString('id-ID')}
                        </p>
                      </div>
                      {getStatusBadge(loan.status)}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Jumlah Pinjaman</p>
                        <p className="font-semibold">Rp {loan.amount.toLocaleString('id-ID')}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Sisa</p>
                        <p className="font-semibold text-blue-600">Rp {loan.remainingAmount.toLocaleString('id-ID')}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat Detail & Invoice
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
