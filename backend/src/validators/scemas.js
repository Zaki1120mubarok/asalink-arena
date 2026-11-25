import { z } from "zod";

export const registerSchema = z.object({
  nama: z.string().trim().min(3, "Nama minimal 3 karakter").max(60),
  email: z.string().trim().email("Format email tidak valid").toLowerCase(),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .max(100, "Password terlalu panjang"),
});

export const loginSchema = z.object({
  email: z.string().trim().email("Format email tidak valid").toLowerCase(),
  password: z.string().min(1, "Password wajib diisi"),
});

export const questionSchema = z.object({
  mapel: z.string().trim().min(2).max(50),
  bab: z.string().trim().min(2).max(100),
  tipe: z.enum(["Pilihan ganda", "Benar / Salah", "Isian singkat"]),
  bloom: z.string().trim().min(2).max(40),
  kesulitan: z.enum(["Mudah", "Sedang", "Sulit"]),
  durasi: z.coerce.number().int().min(5).max(300),
  teks: z.string().trim().min(5, "Teks soal minimal 5 karakter").max(1000),
  opsi: z.object({
    A: z.string().trim().min(1, "Opsi A wajib diisi").max(300),
    B: z.string().trim().min(1, "Opsi B wajib diisi").max(300),
    C: z.string().trim().min(1, "Opsi C wajib diisi").max(300),
    D: z.string().trim().min(1, "Opsi D wajib diisi").max(300),
  }),
  kunci: z.enum(["A", "B", "C", "D"]),
  pembahasan: z.string().trim().max(1000).optional().default(""),
});