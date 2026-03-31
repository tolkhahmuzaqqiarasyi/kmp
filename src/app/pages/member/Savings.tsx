// Simpanan Page
import { useState } from 'react';
import { TrendingUp, Plus, Download } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { mockSavings } from '../../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';

export default function Savings() {
  const [depositAmount, setDepositAmount] = useState('');
  const totalBalance = mockSavings[mockSavings.length - 1].balance;

  const chartData = mockSavings.map(s => ({
    date: new Date(s.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' }),
    balance: s.balance
  }));

  const handleDeposit = () => {
    toast.success('Pengajuan setoran berhasil! Menunggu konfirmasi admin.');
    setDepositAmount('');
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white">
        <CardContent className="p-6">
          <p className="text-green-100 mb-2">Total Saldo Simpanan</p>
          <p className="text-4xl font-bold mb-4">Rp {totalBalance.toLocaleString('id-ID')}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-green-700 hover:bg-green-50">
                <Plus className="w-4 h-4 mr-2" />
                Ajukan Setoran
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajukan Setoran Simpanan</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Jumlah Setoran</Label>
                  <Input
                    type="number"
                    placeholder="Masukkan jumlah"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                  />
                </div>
                <Button onClick={handleDeposit} className="w-full bg-green-600 hover:bg-green-700">
                  Ajukan Setoran
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Grafik Pertumbuhan Simpanan</CardTitle>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="balance" stroke="#16a34a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Riwayat Simpanan</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
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
                  <p className="text-sm text-gray-600">Saldo: Rp {saving.balance.toLocaleString('id-ID')}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
