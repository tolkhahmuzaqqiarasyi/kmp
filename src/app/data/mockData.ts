export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  images: string[];
  description: string;
  unit: string;
}

export interface Order {
  id: string;
  userId: string;
  products: { productId: string; quantity: number; price: number; name: string }[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  paymentMethod: 'transfer' | 'qris' | 'cash';
  paymentStatus: 'unpaid' | 'paid' | 'verified';
  date: string;
  invoiceUrl?: string;
  shippingAddress?: string;
}

export interface Saving {
  id: string;
  userId: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
  date: string;
  balance: number;
  description: string;
}

export interface Loan {
  id: string;
  userId: string;
  amount: number;
  interestRate: number;
  duration: number; // months
  monthlyPayment: number;
  remainingAmount: number;
  status: 'pending' | 'approved' | 'active' | 'completed' | 'rejected';
  applicationDate: string;
  approvalDate?: string;
  nextPaymentDate?: string;
  installments: LoanInstallment[];
}

export interface LoanInstallment {
  id: string;
  loanId: string;
  installmentNumber: number;
  dueDate: string;
  amount: number;
  paid: boolean;
  paidDate?: string;
}

export interface FinancialReport {
  id: string;
  period: string; // "2026-03"
  income: number;
  operational: number;
  installments: number;
  visible: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Beras Premium 5kg',
    category: 'Sembako',
    price: 75000,
    stock: 150,
    images: [
      'https://images.unsplash.com/photo-1710563139265-813bda7ff165?w=800',
      'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800'
    ],
    description: 'Beras premium kualitas terbaik, pulen dan wangi. Cocok untuk konsumsi sehari-hari.',
    unit: 'kg'
  },
  {
    id: '2',
    name: 'Minyak Goreng 2L',
    category: 'Sembako',
    price: 35000,
    stock: 200,
    images: [
      'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?w=800',
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800'
    ],
    description: 'Minyak goreng berkualitas, tanpa kolesterol, cocok untuk memasak sehari-hari.',
    unit: 'liter'
  },
  {
    id: '3',
    name: 'Gula Pasir 1kg',
    category: 'Sembako',
    price: 15000,
    stock: 180,
    images: [
      'https://images.unsplash.com/photo-1583872548706-bdbf14cc19b9?w=800',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800'
    ],
    description: 'Gula pasir murni berkualitas tinggi untuk kebutuhan sehari-hari.',
    unit: 'kg'
  },
  {
    id: '4',
    name: 'Pupuk NPK 5kg',
    category: 'Pertanian',
    price: 85000,
    stock: 100,
    images: [
      'https://images.unsplash.com/photo-1696371269544-e2601fd835f5?w=800',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800'
    ],
    description: 'Pupuk NPK untuk meningkatkan hasil panen dan kesuburan tanah.',
    unit: 'kg'
  },
  {
    id: '5',
    name: 'Bibit Padi Unggul',
    category: 'Pertanian',
    price: 120000,
    stock: 80,
    images: [
      'https://images.unsplash.com/photo-1710563139265-813bda7ff165?w=800',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
    ],
    description: 'Bibit padi unggul varietas tahan hama dengan hasil panen melimpah.',
    unit: 'pack'
  },
  {
    id: '6',
    name: 'Jasa Sewa Traktor',
    category: 'Jasa',
    price: 500000,
    stock: 5,
    images: [
      'https://images.unsplash.com/photo-1637768315904-519ee221d27b?w=800',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800'
    ],
    description: 'Jasa sewa traktor untuk mengolah lahan pertanian. Termasuk operator berpengalaman.',
    unit: 'hari'
  },
  {
    id: '7',
    name: 'Jasa Pergudangan',
    category: 'Logistik',
    price: 2000000,
    stock: 10,
    images: [
      'https://images.unsplash.com/photo-1644079446600-219068676743?w=800',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800'
    ],
    description: 'Jasa pergudangan dengan fasilitas lengkap untuk penyimpanan barang.',
    unit: 'bulan'
  },
  {
    id: '8',
    name: 'Jasa Cold Storage',
    category: 'Logistik',
    price: 3500000,
    stock: 8,
    images: [
      'https://images.unsplash.com/photo-1764565686713-de4ace49dccd?w=800',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800'
    ],
    description: 'Jasa cold storage untuk penyimpanan produk yang membutuhkan suhu dingin.',
    unit: 'bulan'
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: '1',
    products: [
      { productId: '1', quantity: 2, price: 75000, name: 'Beras Premium 5kg' },
      { productId: '2', quantity: 1, price: 35000, name: 'Minyak Goreng 2L' }
    ],
    total: 185000,
    status: 'completed',
    paymentMethod: 'transfer',
    paymentStatus: 'verified',
    date: '2026-03-25',
    invoiceUrl: '#',
    shippingAddress: 'Jl. Merdeka No. 123, Jakarta'
  },
  {
    id: 'ORD-002',
    userId: '1',
    products: [
      { productId: '3', quantity: 5, price: 15000, name: 'Gula Pasir 1kg' }
    ],
    total: 75000,
    status: 'processing',
    paymentMethod: 'qris',
    paymentStatus: 'paid',
    date: '2026-03-28',
    shippingAddress: 'Jl. Merdeka No. 123, Jakarta'
  }
];

export const mockSavings: Saving[] = [
  {
    id: 'SAV-001',
    userId: '1',
    amount: 500000,
    type: 'deposit',
    date: '2026-03-01',
    balance: 500000,
    description: 'Setoran simpanan pokok'
  },
  {
    id: 'SAV-002',
    userId: '1',
    amount: 300000,
    type: 'deposit',
    date: '2026-03-15',
    balance: 800000,
    description: 'Setoran simpanan wajib'
  },
  {
    id: 'SAV-003',
    userId: '1',
    amount: 200000,
    type: 'deposit',
    date: '2026-03-28',
    balance: 1000000,
    description: 'Setoran simpanan sukarela'
  }
];

export const mockLoans: Loan[] = [
  {
    id: 'LOAN-001',
    userId: '1',
    amount: 5000000,
    interestRate: 1.5,
    duration: 12,
    monthlyPayment: 437500,
    remainingAmount: 3500000,
    status: 'active',
    applicationDate: '2026-01-15',
    approvalDate: '2026-01-20',
    nextPaymentDate: '2026-04-15',
    installments: Array.from({ length: 12 }, (_, i) => ({
      id: `INST-${i + 1}`,
      loanId: 'LOAN-001',
      installmentNumber: i + 1,
      dueDate: `2026-${String(i + 2).padStart(2, '0')}-15`,
      amount: 437500,
      paid: i < 3,
      paidDate: i < 3 ? `2026-${String(i + 2).padStart(2, '0')}-15` : undefined
    }))
  }
];

export const mockFinancialReports: FinancialReport[] = [
  {
    id: 'RPT-001',
    period: '2026-03',
    income: 25000000,
    operational: 15000000,
    installments: 3500000,
    visible: true
  },
  {
    id: 'RPT-002',
    period: '2026-02',
    income: 23000000,
    operational: 14000000,
    installments: 3200000,
    visible: true
  }
];

// Admin data
export interface AdminProduct extends Product {
  createdAt: string;
  updatedAt: string;
}

export interface MemberVerification {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedDate: string;
  documents?: string[];
}

export const mockMemberVerifications: MemberVerification[] = [
  {
    id: 'VER-001',
    userId: 'NEW-001',
    name: 'Siti Rahayu',
    email: 'siti@email.com',
    phone: '081234567891',
    address: 'Jl. Kenanga No. 45, Bandung',
    status: 'pending',
    appliedDate: '2026-03-30'
  },
  {
    id: 'VER-002',
    userId: 'NEW-002',
    name: 'Agus Wijaya',
    email: 'agus@email.com',
    phone: '081234567892',
    address: 'Jl. Melati No. 12, Surabaya',
    status: 'pending',
    appliedDate: '2026-03-29'
  }
];
