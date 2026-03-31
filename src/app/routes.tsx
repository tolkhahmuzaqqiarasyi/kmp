import { createBrowserRouter } from 'react-router';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Public pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Structure from './pages/Structure';
import VisionMission from './pages/VisionMission';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

// Store pages
import OnlineStore from './pages/OnlineStore';
import ProductDetail from './pages/ProductDetail';

// Member pages
import MemberLayout from './pages/member/MemberLayout';
import MemberProfile from './pages/member/MemberProfile';
import EditProfile from './pages/member/EditProfile';
import Settings from './pages/member/Settings';
import Savings from './pages/member/Savings';
import Loans from './pages/member/Loans';
import LoanApplication from './pages/member/LoanApplication';
import TransactionHistory from './pages/member/TransactionHistory';
import Checkout from './pages/member/Checkout';
import Payment from './pages/member/Payment';
import FinancialReport from './pages/member/FinancialReport';
import ChatSupport from './pages/member/ChatSupport';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminMembers from './pages/admin/AdminMembers';
import AdminReports from './pages/admin/AdminReports';
import AdminContent from './pages/admin/AdminContent';
import AdminSettings from './pages/admin/AdminSettings';

// Admin Simpan Pinjam pages
import AdminSPDashboard from './pages/admin-sp/AdminSPDashboard';
import AdminSPLoans from './pages/admin-sp/AdminSPLoans';
import AdminSPSavings from './pages/admin-sp/AdminSPSavings';
import AdminSPMembers from './pages/admin-sp/AdminSPMembers';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>
  },
  {
    path: '/profil',
    element: <Layout><Profile /></Layout>
  },
  {
    path: '/struktur',
    element: <Layout><Structure /></Layout>
  },
  {
    path: '/visi-misi',
    element: <Layout><VisionMission /></Layout>
  },
  {
    path: '/toko',
    element: <Layout><OnlineStore /></Layout>
  },
  {
    path: '/toko/:id',
    element: <Layout><ProductDetail /></Layout>
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>
  },
  {
    path: '/register',
    element: <Layout><Register /></Layout>
  },
  {
    path: '/lupa-password',
    element: <Layout><ForgotPassword /></Layout>
  },
  // Member routes
  {
    path: '/member',
    element: <Layout><MemberLayout /></Layout>,
    children: [
      {
        path: 'profil',
        element: <MemberProfile />
      },
      {
        path: 'edit-profil',
        element: <EditProfile />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'simpanan',
        element: <Savings />
      },
      {
        path: 'pinjaman',
        element: <Loans />
      },
      {
        path: 'pinjaman/ajukan',
        element: <LoanApplication />
      },
      {
        path: 'transaksi',
        element: <TransactionHistory />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'payment/:orderId',
        element: <Payment />
      },
      {
        path: 'laporan',
        element: <FinancialReport />
      },
      {
        path: 'chat',
        element: <ChatSupport />
      }
    ]
  },
  // Admin routes
  {
    path: '/admin',
    element: <Layout><AdminDashboard /></Layout>
  },
  {
    path: '/admin/produk',
    element: <Layout><AdminProducts /></Layout>
  },
  {
    path: '/admin/pesanan',
    element: <Layout><AdminOrders /></Layout>
  },
  {
    path: '/admin/anggota',
    element: <Layout><AdminMembers /></Layout>
  },
  {
    path: '/admin/laporan',
    element: <Layout><AdminReports /></Layout>
  },
  {
    path: '/admin/konten',
    element: <Layout><AdminContent /></Layout>
  },
  {
    path: '/admin/pengaturan',
    element: <Layout><AdminSettings /></Layout>
  },
  // Admin Simpan Pinjam routes
  {
    path: '/admin-simpan-pinjam',
    element: <Layout><AdminSPDashboard /></Layout>
  },
  {
    path: '/admin-simpan-pinjam/pinjaman',
    element: <Layout><AdminSPLoans /></Layout>
  },
  {
    path: '/admin-simpan-pinjam/simpanan',
    element: <Layout><AdminSPSavings /></Layout>
  },
  {
    path: '/admin-simpan-pinjam/anggota',
    element: <Layout><AdminSPMembers /></Layout>
  }
]);
