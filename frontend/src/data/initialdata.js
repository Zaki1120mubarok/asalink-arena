export const initialQuestions = [
  {
    id: 1,
    mapel: "Matematika",
    bab: "Bab 3 - Barisan dan deret",
    tipe: "Pilihan ganda",
    bloom: "C3 - Menerapkan",
    kesulitan: "Sedang",
    durasi: 30,
    teks: "Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?",
    opsi: { A: "100", B: "110", C: "120", D: "90" },
    kunci: "B",
    pembahasan: "S10 = 10/2 × (2 × 2 + 9 × 2) = 5 × 22 = 110",
    reviewed: true,
  },
  {
    id: 2,
    mapel: "Informatika",
    bab: "Bab 2 - Algoritma & Pemrograman",
    tipe: "Pilihan ganda",
    bloom: "C4 - Menganalisis",
    kesulitan: "Sulit",
    durasi: 45,
    teks: "Manakah kompleksitas waktu terbaik untuk algoritma Binary Search pada array terurut?",
    opsi: { A: "O(n)", B: "O(n log n)", C: "O(log n)", D: "O(1)" },
    kunci: "C",
    pembahasan: "Binary Search membagi ruang pencarian menjadi dua setiap iterasi sehingga kompleksitasnya O(log n).",
    reviewed: true,
  },
  {
    id: 3,
    mapel: "Fisika",
    bab: "Bab 1 - Kinematika Gerak",
    tipe: "Pilihan ganda",
    bloom: "C5 - Mengevaluasi",
    kesulitan: "Sedang",
    durasi: 40,
    teks: "Sebuah benda bergerak lurus beraturan dengan kecepatan 15 m/s selama 8 detik. Jarak tempuhnya adalah...",
    opsi: { A: "90 m", B: "105 m", C: "120 m", D: "135 m" },
    kunci: "C",
    pembahasan: "s = v × t = 15 m/s × 8 s = 120 meter.",
    reviewed: false,
  },
];

export const initialNotifications = [
  {
    id: 1,
    judul: "Soal selesai divalidasi",
    detail: "Paket Matematika Kelas XI siap dipakai",
    tipe: "success",
  },
  {
    id: 2,
    judul: "3 soal perlu review",
    detail: "Periksa kembali kunci jawaban Bab 2",
    tipe: "warning",
  },
  {
    id: 3,
    judul: "Smartboard terhubung",
    detail: "Ruang Lab Komputer 01 • Siap Host",
    tipe: "info",
  },
];

export const initialInvitations = [
  {
    id: 1,
    kode: "GM",
    nama: "Guru Matematika",
    paket: "12 Soal • Barisan & Deret",
    warna: "from-arena-purple to-arena-blue",
    diterima: false,
  },
  {
    id: 2,
    kode: "GF",
    nama: "Guru Fisika",
    paket: "8 Soal • Dinamika Partikel",
    warna: "from-arena-orange to-amber-500",
    diterima: false,
  },
];