import { Link } from 'react-router';
import { ArrowRight, ShoppingBag, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockProducts, mockFinancialReports } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const { isAuthenticated, user } = useAuth();
  const featuredProducts = mockProducts.slice(0, 4);
  const visibleReports = mockFinancialReports.filter(r => r.visible);
  const latestReport = visibleReports[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642888621202-6e335ec4d6c5?w=1600"
            alt="Koperasi Building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Koperasi Merah Putih
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Bersama Membangun Ekonomi Kerakyatan untuk Kesejahteraan Anggota
            </p>
            <div className="flex flex-wrap gap-4">
              {!isAuthenticated && (
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-red-700 hover:bg-gray-100"
                >
                  <Link to="/register">
                    Daftar Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-red-700"
              >
                <Link to="/profil">
                  Pelajari Lebih Lanjut
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Report for Members */}
      {isAuthenticated && user?.role === 'member' && latestReport && (
        <section className="py-12 bg-gradient-to-r from-red-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Laporan Keuangan Bulan Ini</h2>
              <Link to="/member/laporan" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                Lihat Semua
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Pendapatan KMP</p>
                      <p className="text-2xl font-bold text-gray-900">
                        Rp {latestReport.income.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Operasional KMP</p>
                      <p className="text-2xl font-bold text-gray-900">
                        Rp {latestReport.operational.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Cicilan dari Anggota</p>
                      <p className="text-2xl font-bold text-gray-900">
                        Rp {latestReport.installments.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Produk Toko Online</h2>
            <p className="text-gray-600">Dapatkan kebutuhan sehari-hari dengan harga terjangkau</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <ImageWithFallback
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-700 rounded">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-red-600 font-bold text-lg mb-3">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">Stok: {product.stock} {product.unit}</p>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    <Link to={`/toko/${product.id}`}>
                      Lihat Detail
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              <Link to="/toko">
                <ShoppingBag className="mr-2 w-5 h-5" />
                Lihat Semua Produk
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang Koperasi Merah Putih
              </h2>
              <p className="text-gray-600 mb-4">
                Koperasi Merah Putih (KMP) didirikan dengan semangat gotong royong untuk membangun
                ekonomi kerakyatan yang kuat dan berkelanjutan. Kami berkomitmen untuk meningkatkan
                kesejahteraan anggota melalui berbagai program dan layanan.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan fokus pada sektor pertanian, perdagangan, dan jasa logistik, kami hadir
                sebagai mitra terpercaya dalam memenuhi kebutuhan anggota dan masyarakat.
              </p>
              <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <Link to="/profil">
                  Selengkapnya tentang KMP
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 bg-red-50 border-red-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">1,000+</h3>
                <p className="text-gray-600">Anggota Aktif</p>
              </Card>
              <Card className="text-center p-6 bg-red-50 border-red-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Produk & Jasa</p>
              </Card>
              <Card className="text-center p-6 bg-red-50 border-red-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5 Tahun</h3>
                <p className="text-gray-600">Pengalaman</p>
              </Card>
              <Card className="text-center p-6 bg-red-50 border-red-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600">Penghargaan</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Bergabunglah Bersama Kami</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Daftarkan diri Anda sekarang dan nikmati berbagai keuntungan sebagai anggota
              Koperasi Merah Putih
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-red-700 hover:bg-gray-100"
            >
              <Link to="/register">
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
