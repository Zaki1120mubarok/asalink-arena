import React, { useState } from "react";
import {
  ArrowRight,
  Plus,
  FileText,
  CheckCircle2,
  Star,
  Zap,
  Grid,
  Sparkles,
} from "lucide-react";
import RightPanel from "../components/RightPanel";

export default function Beranda({
  questions,
  notifications,
  invitations,
  onAcceptInvite,
  onNavigateTambah,
}) {
  const [selectedTile, setSelectedTile] = useState(5);
  const [activeMode, setActiveMode] = useState("Speed Clash");

  // Statistik otomatis dari state soal
  const totalSoal = questions.length;
  const sudahDireview = questions.filter((q) => q.reviewed).length;
  const soalHots = questions.filter((q) =>
    ["C4", "C5", "C6"].some((lvl) => q.bloom.startsWith(lvl))
  ).length;

  // Grid dekoratif 3x4 sesuai desain arena
  const arenaTiles = [
    { id: 1, label: "A", style: "bg-arena-blue text-arena-white border-arena-electric/50" },
    { id: 2, label: "", style: "bg-white/10 border-white/10" },
    { id: 3, label: "B", style: "bg-arena-orange text-arena-white border-orange-300/50" },
    { id: 4, label: "", style: "bg-white/10 border-white/10" },
    { id: 5, label: "★", style: "bg-arena-electric text-arena-black font-black shadow-electric" },
    { id: 6, label: "", style: "bg-white/10 border-white/10" },
    { id: 7, label: "C", style: "bg-arena-purple text-arena-white border-purple-300/50" },
    { id: 8, label: "", style: "bg-white/10 border-white/10" },
    { id: 9, label: "D", style: "bg-gradient-to-br from-arena-orange to-arena-purple text-arena-white" },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* Kolom Utama Tengah */}
      <div className="flex-1 space-y-6">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-arena-purple">
              Web II • Dashboard Bank Soal
            </span>
            <h2 className="text-2xl font-extrabold text-arena-black">
              Beranda Arena Kelas
            </h2>
          </div>

          <button
            onClick={onNavigateTambah}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-arena-black hover:bg-arena-blue text-arena-white text-sm font-semibold border border-arena-electric/40 shadow-sm transition"
          >
            <Plus className="w-4 h-4 text-arena-electric" />
            Tambah soal baru
          </button>
        </div>

        {/* Hero Banner: Ubah bab jadi arena kelas */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-arena-black via-arena-blue to-arena-purple p-6 sm:p-8 text-arena-white shadow-lg border border-arena-electric/30">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-md space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-arena-black/60 text-arena-electric border border-arena-electric/40">
                <Sparkles className="w-3.5 h-3.5" /> Interactive Smartboard
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
                Ubah bab jadi{" "}
                <span className="text-arena-electric">arena kelas</span>
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Pilih bank soal, tentukan mode permainan, dan tampilkan kompetisi
                interaktif langsung ke layar kelas.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() =>
                    alert(`Memulai sesi game mode: ${activeMode}!`)
                  }
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-arena-orange hover:bg-orange-500 text-arena-white font-bold text-sm shadow-orange transition transform hover:-translate-y-0.5"
                >
                  Buat sesi game
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onNavigateTambah}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-arena-white/15 hover:bg-arena-white/25 text-arena-white font-semibold text-sm backdrop-blur-sm border border-white/20 transition"
                >
                  + Kelola Soal
                </button>
              </div>
            </div>

            {/* Ilustrasi Grid Arena 3x3 */}
            <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-arena-black/50 backdrop-blur-md border border-arena-electric/30 self-center">
              {arenaTiles.map((tile) => (
                <button
                  key={tile.id}
                  type="button"
                  onClick={() => setSelectedTile(tile.id)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center font-extrabold text-base transition-all duration-200 ${
                    tile.style
                  } ${
                    selectedTile === tile.id
                      ? "ring-2 ring-arena-electric scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  {tile.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Kartu Statistik Bank Soal */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Total Soal */}
          <div className="bg-arena-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-arena-blue/10 text-arena-blue flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Total soal</p>
              <p className="text-2xl font-extrabold text-arena-black">
                {totalSoal} <span className="text-xs font-medium text-slate-400">Butir</span>
              </p>
              <p className="text-[11px] text-arena-blue font-medium mt-0.5">
                Semua mata pelajaran
              </p>
            </div>
          </div>

          {/* Sudah Direview */}
          <div className="bg-arena-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-arena-black text-arena-electric flex items-center justify-center shrink-0 shadow-sm">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">
                Sudah direview
              </p>
              <p className="text-2xl font-extrabold text-arena-black">
                {sudahDireview}{" "}
                <span className="text-xs font-medium text-emerald-600">
                  Siap pakai
                </span>
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Terverifikasi kunci & pembahasan
              </p>
            </div>
          </div>

          {/* Soal HOTS */}
          <div className="bg-arena-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-arena-purple/10 text-arena-purple flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-arena-purple" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Soal HOTS</p>
              <p className="text-2xl font-extrabold text-arena-black">
                {soalHots}{" "}
                <span className="text-xs font-semibold text-arena-purple">
                  Level C4–C6
                </span>
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Analisis & evaluasi tinggi
              </p>
            </div>
          </div>
        </section>

        {/* Pilihan Mode Arena Game */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-arena-black">
            Pilih Mode Permainan Arena
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Speed Clash */}
            <div
              className={`bg-arena-white rounded-2xl p-5 border transition flex items-center justify-between gap-4 ${
                activeMode === "Speed Clash"
                  ? "border-arena-orange ring-2 ring-arena-orange/20"
                  : "border-slate-200/80"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-arena-orange text-arena-white font-black text-base flex items-center justify-center shrink-0 shadow-orange">
                  SC
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-arena-black">
                      Speed Clash
                    </h4>
                    <Zap className="w-3.5 h-3.5 text-arena-orange fill-arena-orange" />
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Adu cepat menjawab benar untuk meraih skor beruntun tertinggi.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveMode("Speed Clash")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                  activeMode === "Speed Clash"
                    ? "bg-arena-orange text-arena-white"
                    : "bg-arena-surface text-arena-black hover:bg-arena-orange hover:text-arena-white"
                }`}
              >
                {activeMode === "Speed Clash" ? "Dipakai" : "Pakai"}
              </button>
            </div>

            {/* Territory Grid */}
            <div
              className={`bg-arena-white rounded-2xl p-5 border transition flex items-center justify-between gap-4 ${
                activeMode === "Territory Grid"
                  ? "border-arena-blue ring-2 ring-arena-electric/40"
                  : "border-slate-200/80"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-arena-blue to-arena-purple text-arena-electric font-black text-base flex items-center justify-center shrink-0">
                  TG
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-arena-black">
                      Territory Grid
                    </h4>
                    <Grid className="w-3.5 h-3.5 text-arena-blue" />
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Kuasai petak arena kelas secara tim melalui strategi jawaban.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveMode("Territory Grid")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                  activeMode === "Territory Grid"
                    ? "bg-arena-blue text-arena-white"
                    : "bg-arena-surface text-arena-black hover:bg-arena-blue hover:text-arena-white"
                }`}
              >
                {activeMode === "Territory Grid" ? "Dipakai" : "Pakai"}
              </button>
            </div>
          </div>
        </section>

        {/* Daftar Soal Terbaru di Bank Soal */}
        <section className="bg-arena-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-arena-black">
              Daftar Soal Terbaru ({totalSoal})
            </h3>
            <button
              onClick={onNavigateTambah}
              className="text-xs font-bold text-arena-blue hover:text-arena-purple transition"
            >
              + Tambah Soal
            </button>
          </div>

          <div className="space-y-3">
            {questions.map((q) => (
              <div
                key={q.id}
                className="p-4 rounded-xl bg-arena-surface/70 border border-slate-200/60 hover:border-arena-blue/40 transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-arena-black text-arena-electric">
                      {q.mapel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-arena-purple/10 text-arena-purple">
                      {q.bloom}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-arena-orange/10 text-arena-orange">
                      {q.kesulitan} • {q.durasi}d
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600">
                    Kunci: {q.kunci}
                  </span>
                </div>
                <p className="text-sm font-medium text-arena-black">{q.teks}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Panel Samping Kanan */}
      <RightPanel
        notifications={notifications}
        invitations={invitations}
        onAcceptInvite={onAcceptInvite}
      />
    </div>
  );
}