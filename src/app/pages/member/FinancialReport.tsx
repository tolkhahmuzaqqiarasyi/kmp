// Financial Report Page
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { mockFinancialReports } from '../../data/mockData';
import { TrendingUp, DollarSign, CreditCard } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function FinancialReport() {
  const chartData = mockFinancialReports.map(r => ({
    period: r.period,
    Pendapatan: r.income,
    Operasional: r.operational,
    Cicilan: r.installments
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Laporan Keuangan</h2>
        <p className="text-gray-600">Laporan keuangan bulanan Koperasi Merah Putih</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pendapatan Bulan Ini</p>
                <p className="text-2xl font-bold text-gray-900">
                  Rp {mockFinancialReports[0].income.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Operasional Bulan Ini</p>
                <p className="text-2xl font-bold text-gray-900">
                  Rp {mockFinancialReports[0].operational.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Cicilan Bulan Ini</p>
                <p className="text-2xl font-bold text-gray-900">
                  Rp {mockFinancialReports[0].installments.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Grafik Laporan Keuangan</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Pendapatan" fill="#16a34a" />
              <Bar dataKey="Operasional" fill="#f97316" />
              <Bar dataKey="Cicilan" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detail Laporan per Bulan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockFinancialReports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Periode: {new Date(report.period + '-01').toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Pendapatan KMP</p>
                    <p className="font-semibold text-green-600">Rp {report.income.toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Operasional KMP</p>
                    <p className="font-semibold text-orange-600">Rp {report.operational.toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Cicilan dari Anggota</p>
                    <p className="font-semibold text-blue-600">Rp {report.installments.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
