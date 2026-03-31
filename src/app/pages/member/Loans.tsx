// Loans Page
import { Link } from 'react-router';
import { Plus, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { mockLoans } from '../../data/mockData';

export default function Loans() {
  const activeLoan = mockLoans[0];
  const paidInstallments = activeLoan.installments.filter(i => i.paid).length;
  const progress = (paidInstallments / activeLoan.installments.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pinjaman Saya</h2>
          <p className="text-gray-600">Kelola pinjaman Anda</p>
        </div>
        <Button asChild className="bg-red-600 hover:bg-red-700">
          <Link to="/member/pinjaman/ajukan">
            <Plus className="w-4 h-4 mr-2" />
            Ajukan Pinjaman
          </Link>
        </Button>
      </div>

      {/* Active Loan Summary */}
      <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <CardContent className="p-6">
          <p className="text-blue-100 mb-2">Sisa Pinjaman</p>
          <p className="text-4xl font-bold mb-4">Rp {activeLoan.remainingAmount.toLocaleString('id-ID')}</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-blue-100">Total Pinjaman</p>
              <p className="font-semibold">Rp {activeLoan.amount.toLocaleString('id-ID')}</p>
            </div>
            <div>
              <p className="text-blue-100">Angsuran / Bulan</p>
              <p className="font-semibold">Rp {activeLoan.monthlyPayment.toLocaleString('id-ID')}</p>
            </div>
            <div>
              <p className="text-blue-100">Bunga</p>
              <p className="font-semibold">{activeLoan.interestRate}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Pembayaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">
                {paidInstallments} dari {activeLoan.installments.length} angsuran terbayar
              </span>
              <span className="text-sm font-semibold text-blue-600">{progress.toFixed(0)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
          {activeLoan.nextPaymentDate && (
            <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
              <Calendar className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Jatuh Tempo Berikutnya</p>
                <p className="text-sm text-gray-600">
                  {new Date(activeLoan.nextPaymentDate).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Installment Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Jadwal Angsuran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activeLoan.installments.map((installment) => (
              <div
                key={installment.id}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  installment.paid ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    installment.paid ? 'bg-green-100' : 'bg-gray-200'
                  }`}>
                    {installment.paid ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Angsuran #{installment.installmentNumber}</p>
                    <p className="text-sm text-gray-600">
                      Jatuh tempo: {new Date(installment.dueDate).toLocaleDateString('id-ID')}
                    </p>
                    {installment.paidDate && (
                      <p className="text-sm text-green-600">
                        Dibayar: {new Date(installment.paidDate).toLocaleDateString('id-ID')}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    Rp {installment.amount.toLocaleString('id-ID')}
                  </p>
                  <p className={`text-sm ${installment.paid ? 'text-green-600' : 'text-orange-600'}`}>
                    {installment.paid ? 'Lunas' : 'Belum Bayar'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
