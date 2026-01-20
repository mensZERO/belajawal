"use client";

import React, { useState } from 'react';

// Komponen Ikon SVG Sederhana untuk menggantikan lucide-react
const Icons = {
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
  ShoppingCart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  Star: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Leaf: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  ),
  Droplets: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.8 4-4 0-3.3-4-6.3-4-6.3s-4 3-4 6.3c0 2.2 1.8 4 4 4Z"/><path d="M17 18.3c2.2 0 4-1.8 4-4 0-3.3-4-6.3-4-6.3s-4 3-4 6.3c0 2.2 1.8 4 4 4Z"/></svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2 Z"/></svg>
  )
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bestSellers = [
    {
      id: 1,
      name: "Ocean Blue Latte",
      price: "Rp 25.000",
      category: "Signature",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf76589fd1?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "White Cloud Macchiato",
      price: "Rp 28.000",
      category: "Coffee",
      image: "https://images.unsplash.com/photo-1544787210-2213d242938b?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Pure Minty Soda",
      price: "Rp 22.000",
      category: "Fresh",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf76589fd1?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navigasi */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 tracking-tight">FRESH<span className="text-blue-400">BLUE.</span></span>
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition">Beranda</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition">Menu</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition">Tentang Kami</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Pesan Sekarang
              </button>
            </div>

            {/* Tombol Menu Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Overlay Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-blue-50 px-4 pt-2 pb-6 flex flex-col space-y-4">
            <a href="#" className="block px-3 py-2 text-slate-600">Beranda</a>
            <a href="#" className="block px-3 py-2 text-slate-600">Menu</a>
            <a href="#" className="block px-3 py-2 text-slate-600">Tentang Kami</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">Pesan Sekarang</button>
          </div>
        )}
      </nav>

      {/* Bagian Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-6 uppercase tracking-wider">
              Segar & Murni
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Kesegaran <span className="text-blue-600">Murni</span> Dalam Setiap Tegukan.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
              Nikmati perpaduan bahan alami terbaik yang dirancang khusus untuk memberikan energi dan kesegaran instan di hari Anda yang sibuk.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200 group">
                Mulai Menjelajah <span className="ml-2 group-hover:translate-x-1 transition"><Icons.ArrowRight /></span>
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition">
                Lihat Promo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800" 
              alt="Minuman Segar" 
              className="relative z-10 w-4/5 h-auto rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Bagian Fitur */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-3xl bg-blue-50/50 hover:bg-blue-50 transition">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md text-blue-600">
                <Icons.Leaf />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Alami</h3>
              <p className="text-slate-600">Menggunakan buah segar pilihan dan pemanis alami tanpa bahan pengawet.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-blue-50/50 hover:bg-blue-50 transition border-y-4 border-blue-200 md:border-y-0">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md text-blue-600">
                <Icons.Droplets />
              </div>
              <h3 className="text-xl font-bold mb-3">Air Mineral Murni</h3>
              <p className="text-slate-600">Melalui sistem filtrasi tingkat tinggi untuk menjaga kejernihan rasa.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-blue-50/50 hover:bg-blue-50 transition">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md text-blue-600">
                <Icons.Zap />
              </div>
              <h3 className="text-xl font-bold mb-3">Segar & Cepat</h3>
              <p className="text-slate-600">Dibuat langsung setelah dipesan untuk menjamin kualitas terbaik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Produk Terlaris */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Paling <span className="text-blue-600">Diminati</span></h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Varian terfavorit yang selalu menjadi pilihan utama para pelanggan setia kami.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {bestSellers.map((item) => (
              <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Icons.Star />
                      <span className="text-slate-400 text-sm ml-1">(4.9)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-blue-600">{item.price}</span>
                    <button className="bg-slate-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center">
                      <Icons.ShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-bold text-blue-400 tracking-tight mb-6 block">FRESHBLUE.</span>
              <p className="text-slate-400 leading-relaxed">
                Kami berkomitmen menghadirkan kebahagiaan melalui minuman segar berkualitas tinggi setiap hari.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Menu Cepat</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition">Koleksi Coffee</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Signature Blue</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Fresh Tea</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Smoothies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Informasi</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Lokasi Gerai</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Kerja Sama</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Bantuan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Langganan Info</h4>
              <p className="text-slate-400 mb-4">Dapatkan update menu baru dan promo menarik langsung di emailmu.</p>
              <div className="flex overflow-hidden rounded-xl border border-slate-700">
                <input 
                  type="email" 
                  placeholder="Email anda" 
                  className="bg-transparent px-4 py-2 w-full outline-none text-sm"
                />
                <button className="bg-blue-600 px-4 py-2 hover:bg-blue-700 transition">
                  Kirim
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2024 FreshBlue Beverage Co. Seluruh hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;