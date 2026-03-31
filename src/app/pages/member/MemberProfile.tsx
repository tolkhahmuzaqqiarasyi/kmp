import { Link } from 'react-router';
import { Mail, Phone, MapPin, Calendar, CreditCard, Edit } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { useAuth } from '../../contexts/AuthContext';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function MemberProfile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Profil Anggota</CardTitle>
            <Button asChild variant="outline" className="border-red-600 text-red-600">
              <Link to="/member/edit-profil">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profil
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={user.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-grow space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h2>
                <p className="text-gray-600">{user.role === 'member' ? 'Anggota Aktif' : user.role}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{user.email}</p>
                  </div>
                </div>
                {user.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Telepon</p>
                      <p className="font-medium text-gray-900">{user.phone}</p>
                    </div>
                  </div>
                )}
                {user.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Alamat</p>
                      <p className="font-medium text-gray-900">{user.address}</p>
                    </div>
                  </div>
                )}
                {user.memberNumber && (
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Nomor Anggota</p>
                      <p className="font-medium text-gray-900">{user.memberNumber}</p>
                    </div>
                  </div>
                )}
                {user.joinDate && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Tanggal Bergabung</p>
                      <p className="font-medium text-gray-900">
                        {new Date(user.joinDate).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Total Simpanan</p>
            <p className="text-2xl font-bold text-green-600">Rp 1.000.000</p>
            <Link to="/member/simpanan" className="text-sm text-green-600 hover:text-green-700 mt-2 inline-block">
              Lihat Detail →
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Pinjaman Aktif</p>
            <p className="text-2xl font-bold text-blue-600">Rp 3.500.000</p>
            <Link to="/member/pinjaman" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block">
              Lihat Detail →
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-200">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Total Transaksi</p>
            <p className="text-2xl font-bold text-orange-600">5</p>
            <Link to="/member/transaksi" className="text-sm text-orange-600 hover:text-orange-700 mt-2 inline-block">
              Lihat Detail →
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Aksi Cepat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button asChild className="bg-red-600 hover:bg-red-700 h-auto py-4">
              <Link to="/toko">
                <div className="text-center w-full">
                  <p className="font-semibold">Belanja di Toko</p>
                  <p className="text-xs opacity-90">Lihat produk kami</p>
                </div>
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-red-600 text-red-600 h-auto py-4">
              <Link to="/member/pinjaman/ajukan">
                <div className="text-center w-full">
                  <p className="font-semibold">Ajukan Pinjaman</p>
                  <p className="text-xs opacity-90">Proses cepat & mudah</p>
                </div>
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-red-600 text-red-600 h-auto py-4">
              <Link to="/member/chat">
                <div className="text-center w-full">
                  <p className="font-semibold">Chat Admin</p>
                  <p className="text-xs opacity-90">Butuh bantuan?</p>
                </div>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
