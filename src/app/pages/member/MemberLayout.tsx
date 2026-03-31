import { Outlet, Link, useNavigate, useLocation } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import {
  User,
  Wallet,
  CreditCard,
  Receipt,
  MessageSquare,
  Settings as SettingsIcon,
  FileText,
  ArrowLeft
} from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function MemberLayout() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'member') {
      navigate('/login');
    }
  }, [isAuthenticated, user, navigate]);

  const menuItems = [
    { icon: User, label: 'Profil Saya', path: '/member/profil' },
    { icon: Wallet, label: 'Simpanan', path: '/member/simpanan' },
    { icon: CreditCard, label: 'Pinjaman', path: '/member/pinjaman' },
    { icon: Receipt, label: 'Riwayat Transaksi', path: '/member/transaksi' },
    { icon: FileText, label: 'Laporan Keuangan', path: '/member/laporan' },
    { icon: MessageSquare, label: 'Chat Admin', path: '/member/chat' },
    { icon: SettingsIcon, label: 'Pengaturan', path: '/member/settings' }
  ];

  if (!isAuthenticated || user?.role !== 'member') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Kembali ke Beranda
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Anggota</h1>
          <p className="text-gray-600">Kelola akun dan transaksi Anda</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
