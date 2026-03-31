// Admin Simpan Pinjam Dashboard
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { CreditCard, Wallet, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export default function AdminSPDashboard() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin_savings_loans') {
      navigate('/login');
    }
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated || user?.role !== 'admin_savings_loans') {
    return null;
  }

  const menuItems = [
    { icon: CreditCard, label: 'Kelola Pinjaman', path: '/admin-simpan-pinjam/pinjaman', color: 'bg-blue-500' },
    { icon: Wallet, label: 'Kelola Simpanan', path: '/admin-simpan-pinjam/simpanan', color: 'bg-green-500' },
    { icon: Users, label: 'Kartu Anggota', path: '/admin-simpan-pinjam/anggota', color: 'bg-purple-500' }
  ];

  const stats = [
    {
      label: 'Pengajuan Pinjaman Baru',
      value: '5',
      icon: CreditCard,
      color: 'bg-blue-50 text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      label: 'Total Pinjaman Aktif',
      value: 'Rp 50M',
      icon: FileText,
      color: 'bg-orange-50 text-orange-600',
      iconBg: 'bg-orange-100'
    },
    {
      label: 'Simpanan Bulan Ini',
      value: 'Rp 25M',
      icon: Wallet,
      color: 'bg-green-50 text-green-600',
      iconBg: 'bg-green-100'
    },
    {
      label: 'Total Anggota',
      value: '1,234',
      icon: Users,
      color: 'bg-purple-50 text-purple-600',
      iconBg: 'bg-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Admin Simpan Pinjam</h1>
          <p className="text-gray-600">Selamat datang, {user.name}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.iconBg}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
