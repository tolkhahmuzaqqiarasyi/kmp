import { Eye, Target, TrendingUp, Users, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export default function VisionMission() {
  const missions = [
    {
      icon: Users,
      title: 'Pemberdayaan Anggota',
      description: 'Memberdayakan anggota melalui program pendidikan, pelatihan, dan pengembangan kapasitas usaha.'
    },
    {
      icon: TrendingUp,
      title: 'Pertumbuhan Ekonomi',
      description: 'Mendorong pertumbuhan ekonomi anggota dengan menyediakan akses permodalan yang mudah dan terjangkau.'
    },
    {
      icon: Shield,
      title: 'Perlindungan Usaha',
      description: 'Memberikan perlindungan terhadap usaha anggota melalui sistem simpan pinjam yang aman dan terpercaya.'
    },
    {
      icon: Lightbulb,
      title: 'Inovasi Berkelanjutan',
      description: 'Mengembangkan inovasi dalam pelayanan dan produk untuk memenuhi kebutuhan anggota yang terus berkembang.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Visi & Misi</h1>
            <p className="text-red-100">Arah dan tujuan Koperasi Merah Putih</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Visi */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-red-50 to-white border-red-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi Koperasi</h2>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    "Menjadi koperasi terdepan dan terpercaya dalam membangun ekonomi kerakyatan yang mandiri, 
                    berkelanjutan, dan berkeadilan untuk meningkatkan kesejahteraan anggota dan masyarakat."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Misi */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <Target className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">Misi Koperasi</h2>
            </div>
            <p className="text-gray-600">Langkah strategis untuk mewujudkan visi koperasi</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <mission.icon className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{mission.title}</h3>
                      <p className="text-gray-600">{mission.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Strategic Goals */}
        <section>
          <Card className="bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sasaran Strategis</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-4xl font-bold text-red-600 mb-2">2030</div>
                  <p className="text-gray-700 font-semibold mb-2">Target Tahun</p>
                  <p className="text-gray-600 text-sm">
                    Menjadi koperasi terbesar di wilayah dengan 5,000+ anggota aktif
                  </p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-4xl font-bold text-red-600 mb-2">100M+</div>
                  <p className="text-gray-700 font-semibold mb-2">Aset Koperasi</p>
                  <p className="text-gray-600 text-sm">
                    Mencapai total aset lebih dari 100 miliar rupiah
                  </p>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                  <p className="text-gray-700 font-semibold mb-2">Cabang & Outlet</p>
                  <p className="text-gray-600 text-sm">
                    Membuka cabang dan outlet di berbagai wilayah strategis
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-white rounded-lg border border-red-200">
                <h3 className="font-semibold text-gray-900 mb-4">Program Unggulan:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Simpan Pinjam Digital:</strong> Layanan simpan pinjam berbasis teknologi untuk kemudahan akses anggota
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Toko Online Terintegrasi:</strong> Platform e-commerce untuk memudahkan transaksi jual beli produk anggota
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Program Pendampingan UMKM:</strong> Pelatihan dan pendampingan bagi anggota yang mengembangkan usaha
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Jasa Logistik Pertanian:</strong> Layanan pergudangan, cold storage, dan distribusi untuk produk pertanian
                    </p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
