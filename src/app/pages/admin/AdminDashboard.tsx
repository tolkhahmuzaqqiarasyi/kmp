// Admin Dashboard
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import {
  ShoppingBag,
  Users,
  Package,
  FileText,
  Settings,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { mockProducts, mockOrders, mockMemberVerifications } from '../../data/mockData';

export default function AdminDashboard() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      navigate('/login');
    }
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated || user?.role !== 'admin') {
    return null;
  }

  const menuItems = [
    { icon: Package, label: 'Kelola Produk', path: '/admin/produk', color: 'bg-blue-500' },
    { icon: ShoppingBag, label: 'Pesanan', path: '/admin/pesanan', color: 'bg-green-500' },
    { icon: Users, label: 'Anggota', path: '/admin/anggota', color: 'bg-purple-500' },
    { icon: FileText, label: 'Laporan', path: '/admin/laporan', color: 'bg-orange-500' },
    { icon: FileText, label: 'Konten', path: '/admin/konten', color: 'bg-pink-500' },
    { icon: Settings, label: 'Pengaturan', path: '/admin/pengaturan', color: 'bg-gray-500' }
  ];

  const stats = [
    {
      label: 'Total Produk',
      value: mockProducts.length,
      icon: Package,
      color: 'bg-blue-50 text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      label: 'Pesanan Aktif',
      value: mockOrders.filter(o => o.status === 'processing').length,
      icon: ShoppingBag,
      color: 'bg-green-50 text-green-600',
      iconBg: 'bg-green-100'
    },
    {
      label: 'Verifikasi Pending',
      value: mockMemberVerifications.filter(m => m.status === 'pending').length,
      icon: AlertCircle,
      color: 'bg-orange-50 text-orange-600',
      iconBg: 'bg-orange-100'
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Admin</h1>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Pesanan Terbaru</CardTitle>
              <Button asChild variant="outline" size="sm">
                <Link to="/admin/pesanan">Lihat Semua</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockOrders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString('id-ID')}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">Rp {order.total.toLocaleString('id-ID')}</p>
                    <p className={`text-sm ${
                      order.status === 'completed' ? 'text-green-600' : 
                      order.status === 'processing' ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {order.status === 'completed' ? 'Selesai' : 
                       order.status === 'processing' ? 'Diproses' : 'Pending'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Verifications */}
        {mockMemberVerifications.filter(m => m.status === 'pending').length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Verifikasi Anggota Baru</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link to="/admin/anggota">Lihat Semua</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockMemberVerifications.filter(m => m.status === 'pending').map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.email}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Setujui
                      </Button>
                      <Button size="sm" variant="outline">
                        Detail
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
