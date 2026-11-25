import React from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Monitor,
  Play,
  Sparkles,
  Check,
} from "lucide-react";

export default function RightPanel({
  notifications,
  invitations,
  onAcceptInvite,
}) {
  const getIcon = (tipe) => {
    if (tipe === "success")
      return <CheckCircle2 className="w-4 h-4 text-arena-electric" />;
    if (tipe === "warning")
      return <AlertTriangle className="w-4 h-4 text-arena-orange" />;
    return <Monitor className="w-4 h-4 text-arena-blue" />;
  };

  return (
    <aside className="w-full xl:w-80 space-y-5 shrink-0">
      {/* Kartu Notifikasi */}
      <div className="bg-arena-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-sm text-arena-black">Notifikasi</h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-arena-blue/10 text-arena-blue">
            {notifications.length} Baru
          </span>
        </div>
        <div className="space-y-3.5">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-3 p-2.5 rounded-xl bg-arena-surface/70 hover:bg-arena-surface transition"
            >
              <div className="mt-0.5 p-1.5 rounded-lg bg-arena-black">
                {getIcon(notif.tipe)}
              </div>
              <div>
                <p className="text-xs font-bold text-arena-black">
                  {notif.judul}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {notif.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kartu Tips Hari Ini */}
      <div className="rounded-2xl p-5 bg-gradient-to-br from-arena-black via-slate-900 to-arena-purple text-arena-white shadow-md border border-arena-purple/40">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-arena-electric flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Tips hari ini
          </span>
        </div>
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            className="w-11 h-11 rounded-xl bg-arena-orange hover:bg-orange-500 flex items-center justify-center shrink-0 shadow-orange transition transform hover:scale-105"
            title="Putar tips singkat"
          >
            <Play className="w-5 h-5 text-arena-white fill-arena-white ml-0.5" />
          </button>
          <div>
            <p className="text-xs font-bold text-arena-white">
              Campur level Bloom
            </p>
            <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
              Kombinasikan soal C2–C6 agar kompetisi arena kelas terasa lebih
              dinamis.
            </p>
          </div>
        </div>
      </div>

      {/* Kartu Ajakan Berbagi Soal */}
      <div className="bg-arena-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
        <h3 className="font-bold text-sm text-arena-black mb-4">
          Ajakan berbagi soal
        </h3>
        <div className="space-y-3">
          {invitations.map((inv) => (
            <div
              key={inv.id}
              className="p-3 rounded-xl border border-slate-100 bg-arena-surface/60 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${inv.warna} text-arena-white font-bold text-xs flex items-center justify-center shrink-0`}
                >
                  {inv.kode}
                </div>
                <div>
                  <p className="text-xs font-bold text-arena-black">
                    {inv.nama}
                  </p>
                  <p className="text-[11px] text-slate-500">{inv.paket}</p>
                </div>
              </div>

              <button
                onClick={() => onAcceptInvite(inv.id)}
                disabled={inv.diterima}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1 ${
                  inv.diterima
                    ? "bg-emerald-100 text-emerald-700 cursor-default"
                    : "bg-arena-blue hover:bg-arena-purple text-arena-white shadow-sm"
                }`}
              >
                {inv.diterima ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Diterima
                  </>
                ) : (
                  "Terima"
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}