import { Card, CardContent } from '../components/ui/card';
import { Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Structure() {
  const structure = [
    {
      position: 'Ketua',
      name: 'Dr. Ahmad Fauzi',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      email: 'ahmad.fauzi@kmp.com',
      phone: '081234567801'
    },
    {
      position: 'Wakil Ketua',
      name: 'Ir. Siti Aminah',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      email: 'siti.aminah@kmp.com',
      phone: '081234567802'
    },
    {
      position: 'Sekretaris',
      name: 'Budi Santoso, S.E.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      email: 'budi.santoso@kmp.com',
      phone: '081234567803'
    },
    {
      position: 'Bendahara',
      name: 'Rina Wijayanti, S.Ak.',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      email: 'rina.w@kmp.com',
      phone: '081234567804'
    },
    {
      position: 'Pengawas',
      name: 'Drs. Hendra Kusuma',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      email: 'hendra.k@kmp.com',
      phone: '081234567805'
    },
    {
      position: 'Manager Keuangan',
      name: 'Maya Sari, S.E., M.M.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      email: 'maya.sari@kmp.com',
      phone: '081234567806'
    },
    {
      position: 'Manager Operasional',
      name: 'Teguh Prasetyo',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      email: 'teguh.p@kmp.com',
      phone: '081234567807'
    },
    {
      position: 'Manager Pemasaran',
      name: 'Dewi Lestari, S.Sos.',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      email: 'dewi.l@kmp.com',
      phone: '081234567808'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Struktur Pengurus</h1>
            <p className="text-red-100">Tim profesional yang menggerakkan Koperasi Merah Putih</p>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Struktur Organisasi Koperasi Merah Putih
              </h2>
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <div className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold">
                    Ketua
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg">
                    Wakil Ketua
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg">
                    Pengawas
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="inline-block px-6 py-3 bg-red-400 text-white rounded-lg">
                    Sekretaris
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block px-6 py-3 bg-red-400 text-white rounded-lg">
                    Bendahara
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="inline-block px-4 py-2 bg-red-300 text-white rounded text-sm">
                    Manager Keuangan
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block px-4 py-2 bg-red-300 text-white rounded text-sm">
                    Manager Operasional
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block px-4 py-2 bg-red-300 text-white rounded text-sm">
                    Manager Pemasaran
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Members Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {structure.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
                      {member.position}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{member.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2 justify-center">
                      <Mail className="w-4 h-4 text-red-600" />
                      <span className="text-xs">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Phone className="w-4 h-4 text-red-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
