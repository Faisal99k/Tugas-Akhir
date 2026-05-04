const defaultGudangData = [
  { barang: 'Bawang merah sedang 5kg', kategori: 'Bumbu Basah', namaBarang: 'Bawang Merah', satuan: 'kg', qtyPerUnit: 5, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Bawang merah kecil 1kg', kategori: 'Bumbu Basah', namaBarang: 'Bawang Merah', satuan: 'kg', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Bawang putih besar 20kg', kategori: 'Bumbu Basah', namaBarang: 'Bawang Putih', satuan: 'kg', qtyPerUnit: 20, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Bawang putih sedang 5kg', kategori: 'Bumbu Basah', namaBarang: 'Bawang Putih', satuan: 'kg', qtyPerUnit: 5, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Bawang putih kecil 1kg', kategori: 'Bumbu Basah', namaBarang: 'Bawang Putih', satuan: 'kg', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Mrica 100gram', kategori: 'Rempah', namaBarang: 'Mrica', satuan: 'gram', qtyPerUnit: 100, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Ketumbar 100gram', kategori: 'Rempah', namaBarang: 'Ketumbar', satuan: 'gram', qtyPerUnit: 100, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Jahe 1kg', kategori: 'Bumbu Basah', namaBarang: 'Jahe', satuan: 'kg', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Pete', kategori: 'Sayuran', namaBarang: 'Pete', satuan: 'keris', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Gula Pasir besar 50kg', kategori: 'Sembako', namaBarang: 'Gula Pasir', satuan: 'sak', qtyPerUnit: 50, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Gula Pasir sedang 10kg', kategori: 'Sembako', namaBarang: 'Gula Pasir', satuan: 'kg', qtyPerUnit: 10, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Gula Pasir sedang 5kg', kategori: 'Sembako', namaBarang: 'Gula Pasir', satuan: 'kg', qtyPerUnit: 5, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Serbuk teh kecil', kategori: 'Minuman', namaBarang: 'Serbuk Teh', satuan: 'pack', qtyPerUnit: 250, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Beras C4', kategori: 'Beras', namaBarang: 'Beras C4', satuan: 'karung', qtyPerUnit: 25, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Beras Mentik', kategori: 'Beras', namaBarang: 'Beras Mentik', satuan: 'karung', qtyPerUnit: 25, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Beras Rojolele', kategori: 'Beras', namaBarang: 'Beras Rojolele', satuan: 'karung', qtyPerUnit: 25, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Beras Mix besar 24kg', kategori: 'Beras', namaBarang: 'Beras Mix', satuan: 'karung', qtyPerUnit: 24, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },

  // --- TAMBAHAN RESTORAN MEWAH (PREMIUM PROTEIN & SEAFOOD) ---
  { barang: 'Wagyu Beef MB 9+ Tomahawk', kategori: 'Meat', namaBarang: 'Wagyu Beef', satuan: 'kg', qtyPerUnit: 1.5, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Salmon Fillet Norwegian', kategori: 'Seafood', namaBarang: 'Salmon', satuan: 'kg', qtyPerUnit: 2, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Lobster Air Tawar Live', kategori: 'Seafood', namaBarang: 'Lobster', satuan: 'kg', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Foie Gras Whole Duck', kategori: 'Premium', namaBarang: 'Foie Gras', satuan: 'kg', qtyPerUnit: 0.5, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },

  // --- TAMBAHAN CAFE METROPOLITAN (COFFEE & DAIRY) ---
  { barang: 'Biji Kopi Arabica Ethiopia', kategori: 'Coffee', namaBarang: 'Kopi Arabica', satuan: 'pack', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Oat Milk Barista 1L', kategori: 'Dairy', namaBarang: 'Oat Milk', satuan: 'karton', qtyPerUnit: 12, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Syrup Artisan Elderflower', kategori: 'Beverage', namaBarang: 'Syrup', satuan: 'botol', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Frozen Croissant Butter', kategori: 'Pastry', namaBarang: 'Croissant', satuan: 'box', qtyPerUnit: 50, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },

  // --- TAMBAHAN BAHAN LUXURY & PRODUCE ---
  { barang: 'Truffle Oil Premium', kategori: 'Condiment', namaBarang: 'Truffle Oil', satuan: 'botol', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Saffron Persian Grade 1', kategori: 'Condiment', namaBarang: 'Saffron', satuan: 'gram', qtyPerUnit: 10, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Edible Flowers Mix', kategori: 'Fresh', namaBarang: 'Edible Flowers', satuan: 'box', qtyPerUnit: 0.1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Burrata Cheese Fresh', kategori: 'Dairy', namaBarang: 'Burrata', satuan: 'pcs', qtyPerUnit: 1, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },

  // --- TAMBAHAN OPERASIONAL (PACKAGING & CHEMICAL) ---
  { barang: 'Paper Bag Luxury Large', kategori: 'Packaging', namaBarang: 'Paper Bag', satuan: 'pack', qtyPerUnit: 100, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Dishwasher Liquid Industrial', kategori: 'Chemical', namaBarang: 'Sabun Dishwash', satuan: 'pail', qtyPerUnit: 20, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 },
  { barang: 'Sanitizer Surface 5L', kategori: 'Chemical', namaBarang: 'Sanitizer', satuan: 'jerigen', qtyPerUnit: 5, personil: '', orderReguler: 0, orderTambahan: 0, stokKurangBesok: 0 }
];

export default dataBarang;
