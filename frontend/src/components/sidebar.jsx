import React from "react";
import {
  LayoutGrid,
  BookOpen,
  PlusCircle,
  Gamepad2,
  Users,
  BarChart3,
  Settings,
  Zap,
} from "lucide-react";

export default function Sidebar({ activePage, setActivePage }) {
  const menus = [
    { id: "beranda", label: "Bank soal", icon: BookOpen },
    { id: "tambah-soal", label: "Tambah soal", icon: PlusCircle },
    { id: "sesi-game", label: "Sesi game", icon: Gamepad2, badge: "Live" },
    { id: "kelas", label: "Kelas & siswa", icon: Users },
    { id: "laporan", label: "Laporan", icon: BarChart3 },
    { id: "pengaturan", label: "Pengaturan", icon: Settings },
  ];

  return (
    <aside className="w-full lg:w-64 bg-arena-black text-arena-white flex flex-col justify-between p-5 border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0">
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-8 px-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-arena-blue via-arena-purple to-arena-electric flex items-center justify-center shadow-electric">
            <LayoutGrid className="w-5 h-5 text-arena-black font-bold" />
          </div>
          <div>
            <h1 className="font-extrabold text-lg tracking-tight leading-none text-arena-white">
              ASALink <span className="text-arena-electric">Arena</span>
            </h1>
            <span className="text-[11px] text-slate-400 tracking-wider uppercase">
              Smartboard Host
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {menus.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === "beranda" || item.id === "tambah-soal") {
                    setActivePage(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-arena-blue to-arena-purple text-arena-white shadow-electric border border-arena-electric/40"
                    : "text-slate-400 hover:text-arena-white hover:bg-slate-900"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-arena-electric" : "text-slate-400"
                    }`}
                  />
                  {item.label}
                </span>
                {item.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-arena-orange text-arena-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Status Card */}
      <div className="hidden lg:block mt-8 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-arena-black border border-arena-purple/40">
        <div className="flex items-center gap-2 text-arena-electric text-xs font-semibold mb-1">
          <Zap className="w-4 h-4 fill-arena-electric" />
          Mode Arena Aktif
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Sinkronisasi otomatis dengan layar smartboard kelas.
        </p>
      </div>
    </aside>
  );
}