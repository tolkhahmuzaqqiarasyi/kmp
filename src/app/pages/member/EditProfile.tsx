import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Camera } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { useAuth } from '../../contexts/AuthContext';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export default function EditProfile() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || '',
    photo: user?.photo || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    toast.success('Profil berhasil diperbarui');
    navigate('/member/profil');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoChange = () => {
    // In a real app, this would open a file picker
    const photoUrl = prompt('Masukkan URL foto profil:');
    if (photoUrl) {
      setFormData({ ...formData, photo: photoUrl });
    }
  };

  return (
    <div>
      <Button
        variant="ghost"
        onClick={() => navigate('/member/profil')}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 w-4 h-4" />
        Kembali
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Edit Profil</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Photo */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={formData.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'}
                    alt={formData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={handlePhotoChange}
                  className="absolute bottom-0 right-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                >
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600">Klik ikon kamera untuk mengubah foto</p>
            </div>

            {/* Name */}
            <div>
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Nomor Telepon</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
              />
            </div>

            {/* Address */}
            <div>
              <Label htmlFor="address">Alamat</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                placeholder="Masukkan alamat lengkap"
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                Simpan Perubahan
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/member/profil')}
              >
                Batal
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
