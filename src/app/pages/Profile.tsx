import { Target, Eye, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Profil Koperasi</h1>
            <p className="text-red-100">Mengenal lebih dekat Koperasi Merah Putih</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Sejarah */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Sejarah Koperasi</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    Koperasi Merah Putih (KMP) didirikan pada tanggal 17 Agustus 2021 dengan semangat
                    kemerdekaan dan gotong royong. Berawal dari keinginan sekelompok petani dan pelaku
                    usaha kecil untuk meningkatkan kesejahteraan bersama, KMP tumbuh menjadi koperasi
                    yang solid dan terpercaya.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Dalam perjalanannya, KMP telah melayani lebih dari 1.000 anggota aktif dengan
                    berbagai program unggulan di bidang simpan pinjam, toko online, dan jasa logistik
                    pertanian. Kami berkomitmen untuk terus berinovasi demi kesejahteraan anggota.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1642888621202-6e335ec4d6c5?w=800"
                    alt="Koperasi Building"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tujuan */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tujuan Koperasi</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Ekonomi Kerakyatan</h3>
                    <p className="text-gray-700">
                      Membangun dan memperkuat ekonomi kerakyatan yang mandiri, berkelanjutan, dan
                      berkeadilan untuk seluruh anggota.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Kesejahteraan Anggota</h3>
                    <p className="text-gray-700">
                      Meningkatkan kesejahteraan dan kualitas hidup anggota melalui program simpan
                      pinjam, pendidikan, dan pemberdayaan usaha.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Pengembangan Usaha</h3>
                    <p className="text-gray-700">
                      Mendorong pengembangan usaha anggota melalui penyediaan modal, pelatihan, dan
                      akses pasar yang lebih luas.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Kemitraan Strategis</h3>
                    <p className="text-gray-700">
                      Membangun kemitraan yang kuat dengan berbagai pihak untuk memperluas jaringan
                      dan meningkatkan daya saing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nilai-Nilai */}
        <section>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Nilai-Nilai Koperasi</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kejujuran</h3>
                  <p className="text-gray-600 text-sm">
                    Berkomitmen untuk selalu jujur dan transparan dalam setiap kegiatan koperasi
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gotong Royong</h3>
                  <p className="text-gray-600 text-sm">
                    Menjunjung tinggi semangat kebersamaan dan saling membantu antar anggota
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Profesionalisme</h3>
                  <p className="text-gray-600 text-sm">
                    Menjalankan seluruh kegiatan dengan profesional dan bertanggung jawab
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Inovasi</h3>
                  <p className="text-gray-600 text-sm">
                    Terus berinovasi dan beradaptasi dengan perkembangan zaman
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">5</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Keberlanjutan</h3>
                  <p className="text-gray-600 text-sm">
                    Memastikan kegiatan koperasi berkelanjutan untuk generasi mendatang
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">6</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kepedulian</h3>
                  <p className="text-gray-600 text-sm">
                    Peduli terhadap kesejahteraan anggota dan masyarakat sekitar
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
