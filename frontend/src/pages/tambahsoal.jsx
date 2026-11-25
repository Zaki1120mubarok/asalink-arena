import React, { useState } from "react";
import { ArrowLeft, Sparkles, Save, X, CheckCircle2 } from "lucide-react";

export default function TambahSoal({ onSaveQuestion, onCancel }) {
  const [formData, setFormData] = useState({
    mapel: "Matematika",
    bab: "Bab 3 - Barisan dan deret",
    tipe: "Pilihan ganda",
    bloom: "C3 - Menerapkan",
    kesulitan: "Sedang",
    durasi: 30,
    teks: "",
    opsi: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    kunci: "B",
    pembahasan: "",
  });

  const handleOptionChange = (huruf, nilai) => {
    setFormData((prev) => ({
      ...prev,
      opsi: {
        ...prev.opsi,
        [huruf]: nilai,
      },
    }));
  };

  const handleFillSample = () => {
    setFormData({
      mapel: "Matematika",
      bab: "Bab 3 - Barisan dan deret",
      tipe: "Pilihan ganda",
      bloom: "C3 - Menerapkan",
      kesulitan: "Sedang",
      durasi: 30,
      teks: "Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?",
      opsi: {
        A: "100",
        B: "110",
        C: "120",
        D: "90",
      },
      kunci: "B",
      pembahasan: "S10 = 10/2 × (2 × 2 + 9 × 2) = 5 × 22 = 110",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.teks.trim()) {
      alert("Teks soal wajib diisi terlebih dahulu!");
      return;
    }

    onSaveQuestion({
      ...formData,
      id: Date.now(),
      durasi: Number(formData.durasi) || 30,
      reviewed: true,
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Navigasi Atas */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-arena-blue hover:text-arena-purple transition mb-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Kembali ke bank soal
          </button>
          <h2 className="text-2xl font-extrabold text-arena-black">
            Tambah soal
          </h2>
        </div>

        <button
          type="button"
          onClick={handleFillSample}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-arena-purple to-arena-blue text-arena-white text-xs font-bold shadow-sm hover:opacity-95 transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-arena-electric" />
          Isi Contoh Soal Otomatis
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Kartu 1: Identitas Soal */}
        <div className="bg-arena-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-arena-electric ring-4 ring-arena-blue/15" />
            <h3 className="font-bold text-base text-arena-black">
              Identitas soal
            </h3>
          </div>

          {/* Baris 1: Mapel, Bab, Tipe Soal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Mapel
              </label>
              <select
                value={formData.mapel}
                onChange={(e) =>
                  setFormData({ ...formData, mapel: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 bg-arena-surface/60 px-3.5 py-2.5 text-sm font-medium text-arena-black focus:border-arena-blue focus:ring-2 focus:ring-arena-electric/40 outline-none"
              >
                <option>Matematika</option>
                <option>Informatika</option>
                <option>Fisika</option>
                <option>Kimia</option>
                <option>Biologi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Bab
              </label>
              <input
                type="text"
                value={formData.bab}
                onChange={(e) =>
                  setFormData({ ...formData, bab: e.target.value })
                }
                placeholder="Contoh: Bab 3 - Barisan dan deret"
                className="w-full rounded-xl border border-slate-200 bg-arena-surface/60 px-3.5 py-2.5 text-sm font-medium text-arena-black focus:border-arena-blue focus:ring-2 focus:ring-arena-electric/40 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Tipe soal
              </label>
              <select
                value={formData.tipe}
                onChange={(e) =>
                  setFormData({ ...formData, tipe: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 bg-arena-surface/60 px-3.5 py-2.5 text-sm font-medium text-arena-black focus:border-arena-blue focus:ring-2 focus:ring-arena-electric/40 outline-none"
              >
                <option>Pilihan ganda</option>
                <option>Benar / Salah</option>
                <option>Isian singkat</option>
              </select>
            </div>
          </div>

          {/* Baris 2: Level Bloom, Kesulitan, Durasi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Level Bloom
              </label>
              <select
                value={formData.bloom}
                onChange={(e) =>
                  setFormData({ ...formData, bloom: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 bg-arena-surface/60 px-3.5 py-2.5 text-sm font-medium text-arena-black focus:border-arena-purple focus:ring-2 focus:ring-arena-purple/30 outline-none"
              >
                <option>C1 - Mengingat</option>
                <option>C2 - Memahami</option>
                <option>C3 - Menerapkan</option>
                <option>C4 - Menganalisis</option>
                <option>C5 - Mengevaluasi</option>
                <option>C6 - Mencipta</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Kesulitan
              </label>
              <select
                value={formData.kesulitan}
                onChange={(e) =>
                  setFormData({ ...formData, kesulitan: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 bg-arena-surface/60 px-3.5 py-2.5 text-sm font-medium text-arena-black focus:border-arena-orange focus:ring-2 focus:ring-arena-orange/30 outline-none"
              >
                <option>Mudah</option>
                <option>Sedang</option>
                <option>Sulit</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Durasi (detik)
              </label>
              <input
                type="number"
                min="5"
                max="300"
                value={formData.durasi}
                onChange={(e) =>
                  setFormData({ ...formData, durasi: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 bg-arena-surface/60 px-3.5 py-2.5 text-sm font-medium text-arena-black focus:border-arena-blue focus:ring-2 focus:ring-arena-electric/40 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Kartu 2: Isi Soal */}
        <div className="bg-arena-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-arena-orange ring-4 ring-arena-orange/20" />
            <h3 className="font-bold text-base text-arena-black">Isi soal</h3>
          </div>

          {/* Teks Soal */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">
              Teks soal
            </label>
            <textarea
              rows={3}
              value={formData.teks}
              onChange={(e) =>
                setFormData({ ...formData, teks: e.target.value })
              }
              placeholder="Tuliskan pertanyaan di sini, contoh: Jumlah 10 suku pertama deret 2 + 4 + 6 + ... adalah?"
              className="w-full rounded-2xl border border-slate-200 bg-arena-surface/60 p-3.5 text-sm text-arena-black focus:border-arena-blue focus:ring-2 focus:ring-arena-electric/40 outline-none"
            />
          </div>

          {/* Opsi Jawaban A - D */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-600">
              Opsi jawaban — pilih satu sebagai kunci
            </label>

            {["A", "B", "C", "D"].map((huruf) => {
              const isKunci = formData.kunci === huruf;
              return (
                <div
                  key={huruf}
                  className={`flex items-center gap-3 p-2.5 rounded-2xl border transition ${
                    isKunci
                      ? "bg-arena-blue/5 border-arena-blue ring-2 ring-arena-electric/40"
                      : "bg-arena-surface/50 border-slate-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="kunciJawaban"
                    checked={isKunci}
                    onChange={() =>
                      setFormData({ ...formData, kunci: huruf })
                    }
                    className="w-4 h-4 accent-arena-blue cursor-pointer ml-1"
                  />

                  <span
                    className={`w-8 h-8 rounded-xl font-extrabold text-xs flex items-center justify-center shrink-0 ${
                      isKunci
                        ? "bg-arena-black text-arena-electric shadow-sm"
                        : "bg-arena-white text-arena-black border border-slate-200"
                    }`}
                  >
                    {huruf}
                  </span>

                  <input
                    type="text"
                    value={formData.opsi[huruf]}
                    onChange={(e) => handleOptionChange(huruf, e.target.value)}
                    placeholder={`Masukkan teks pilihan ${huruf}...`}
                    className="flex-1 bg-transparent text-sm font-medium text-arena-black outline-none px-1"
                  />

                  {isKunci && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-arena-electric/20 text-arena-blue">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Kunci
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pembahasan */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">
              Pembahasan (muncul setelah jawaban dibuka)
            </label>
            <textarea
              rows={2}
              value={formData.pembahasan}
              onChange={(e) =>
                setFormData({ ...formData, pembahasan: e.target.value })
              }
              placeholder="Tuliskan langkah penyelesaian soal..."
              className="w-full rounded-2xl border border-slate-200 bg-arena-surface/60 p-3.5 text-sm text-arena-black focus:border-arena-purple focus:ring-2 focus:ring-arena-purple/30 outline-none"
            />
          </div>
        </div>

        {/* Tombol Aksi Bawah */}
        <div className="flex items-center justify-end gap-3 pt-2 pb-6">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-arena-white hover:bg-slate-100 text-arena-black font-bold text-sm border border-slate-300 transition"
          >
            <X className="w-4 h-4" />
            Batal
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-arena-blue via-arena-purple to-arena-blue hover:opacity-95 text-arena-white font-bold text-sm shadow-electric transition transform hover:-translate-y-0.5"
          >
            <Save className="w-4 h-4 text-arena-electric" />
            Simpan soal
          </button>
        </div>
      </form>
    </div>
  );
}