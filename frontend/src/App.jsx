import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Beranda from "./pages/Beranda";
import TambahSoal from "./pages/TambahSoal";
import {
  initialQuestions,
  initialNotifications,
  initialInvitations,
} from "./data/initialData";

export default function App() {
  const [activePage, setActivePage] = useState("beranda");
  const [questions, setQuestions] = useState(initialQuestions);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [invitations, setInvitations] = useState(initialInvitations);

  // Tambah soal baru dari halaman TambahSoal
  const handleSaveQuestion = (newQuestion) => {
    setQuestions((prev) => [newQuestion, ...prev]);
    setNotifications((prev) => [
      {
        id: Date.now(),
        judul: "Soal baru ditambahkan",
        detail: `${newQuestion.mapel} • ${newQuestion.bab}`,
        tipe: "success",
      },
      ...prev,
    ]);
    setActivePage("beranda");
  };

  // Terima ajakan berbagi soal
  const handleAcceptInvite = (id) => {
    setInvitations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, diterima: true } : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-arena-surface">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {activePage === "beranda" ? (
          <Beranda
            questions={questions}
            notifications={notifications}
            invitations={invitations}
            onAcceptInvite={handleAcceptInvite}
            onNavigateTambah={() => setActivePage("tambah-soal")}
          />
        ) : (
          <TambahSoal
            onSaveQuestion={handleSaveQuestion}
            onCancel={() => setActivePage("beranda")}
          />
        )}
      </main>
    </div>
  );
}