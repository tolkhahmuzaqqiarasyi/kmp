// Loan Application Page
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { toast } from 'sonner';

export default function LoanApplication() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: '',
    duration: '12',
    purpose: '',
    income: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pengajuan pinjaman berhasil! Menunggu verifikasi admin.');
    navigate('/member/pinjaman');
  };

  return (
    <div>
      <Button variant="ghost" onClick={() => navigate('/member/pinjaman')} className="mb-4">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Kembali
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Ajukan Pinjaman</CardTitle>
          <CardDescription>Isi formulir di bawah untuk mengajukan pinjaman</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="amount">Jumlah Pinjaman (Rp)</Label>
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="5000000"
                required
              />
            </div>
            <div>
              <Label htmlFor="duration">Jangka Waktu</Label>
              <Select value={formData.duration} onValueChange={(v) => setFormData({ ...formData, duration: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6">6 Bulan</SelectItem>
                  <SelectItem value="12">12 Bulan</SelectItem>
                  <SelectItem value="24">24 Bulan</SelectItem>
                  <SelectItem value="36">36 Bulan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="purpose">Tujuan Pinjaman</Label>
              <Textarea
                id="purpose"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                placeholder="Modal usaha, pendidikan, dll"
                required
              />
            </div>
            <div>
              <Label htmlFor="income">Pendapatan Per Bulan (Rp)</Label>
              <Input
                id="income"
                type="number"
                value={formData.income}
                onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                placeholder="5000000"
                required
              />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Info:</strong> Bunga pinjaman 1.5% per bulan. Pengajuan akan diverifikasi dalam 2-3 hari kerja.
              </p>
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Ajukan Pinjaman
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
