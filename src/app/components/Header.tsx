import { Link, useNavigate } from 'react-router';
import { Menu, ShoppingCart, User, LogOut, LayoutDashboard, X } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Beranda', path: '/' },
    { label: 'Profil', path: '/profil' },
    { label: 'Struktur Pengurus', path: '/struktur' },
    { label: 'Visi & Misi', path: '/visi-misi' },
    { label: 'Toko Online', path: '/toko' }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">KMP</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900">Koperasi Merah Putih</div>
              <div className="text-xs text-gray-500">Bersama Membangun Negeri</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/admin')}
                    className="border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard Admin
                  </Button>
                )}
                {user?.role === 'admin_savings_loans' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/admin-simpan-pinjam')}
                    className="border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard Admin SP
                  </Button>
                )}
                {user?.role === 'member' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/member/profil')}
                    className="border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <User className="w-4 h-4 mr-2" />
                    {user.name}
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Keluar
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigate('/register')}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Daftar
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-red-600 py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t pt-3 mt-2 space-y-2">
                {isAuthenticated ? (
                  <>
                    {user?.role === 'admin' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigate('/admin');
                          closeMobileMenu();
                        }}
                        className="w-full border-red-600 text-red-600 hover:bg-red-50"
                      >
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard Admin
                      </Button>
                    )}
                    {user?.role === 'admin_savings_loans' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigate('/admin-simpan-pinjam');
                          closeMobileMenu();
                        }}
                        className="w-full border-red-600 text-red-600 hover:bg-red-50"
                      >
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard Admin SP
                      </Button>
                    )}
                    {user?.role === 'member' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigate('/member/profil');
                          closeMobileMenu();
                        }}
                        className="w-full border-red-600 text-red-600 hover:bg-red-50"
                      >
                        <User className="w-4 h-4 mr-2" />
                        {user.name}
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLogout}
                      className="w-full text-gray-600 hover:text-red-600"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Keluar
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        navigate('/login');
                        closeMobileMenu();
                      }}
                      className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    >
                      Login
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => {
                        navigate('/register');
                        closeMobileMenu();
                      }}
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      Daftar
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
