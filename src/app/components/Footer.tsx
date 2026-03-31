import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KMP</span>
              </div>
              <div>
                <div className="font-bold text-white">Koperasi Merah Putih</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Membangun ekonomi kerakyatan yang kuat dan berkelanjutan untuk kesejahteraan anggota.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/profil" className="hover:text-red-500 transition-colors">
                  Profil Koperasi
                </Link>
              </li>
              <li>
                <Link to="/struktur" className="hover:text-red-500 transition-colors">
                  Struktur Pengurus
                </Link>
              </li>
              <li>
                <Link to="/visi-misi" className="hover:text-red-500 transition-colors">
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link to="/toko" className="hover:text-red-500 transition-colors">
                  Toko Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <span>Jl. Kemerdekaan No. 17, Jakarta Pusat 10110</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-red-500" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-red-500" />
                <span>info@koperasimerahputih.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white mb-4">Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">Jam Operasional:</p>
              <p className="text-sm">Senin - Jumat: 08:00 - 16:00</p>
              <p className="text-sm">Sabtu: 08:00 - 12:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Koperasi Merah Putih. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
