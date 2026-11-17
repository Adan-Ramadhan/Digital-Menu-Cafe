import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama minimal 2 karakter")
    .max(100, "Nama maksimal 100 karakter"),

  email: z
    .string()
    .trim()
    .email("Email tidak valid")
    .max(254, "Email terlalu panjang"),

  noHp: z
    .string()
    .trim()
    .min(10, "Nomor HP minimal 10 karakter")
    .max(20, "Nomor HP maksimal 20 karakter")
    .regex(/^\+?[0-9\s()-]+$/, "Format nomor HP tidak valid"),
  subject: z
    .string()
    .trim()
    .min(3, "Subjek minimal 3 karakter")
    .max(150, "Subjek maksimal 150 karakter"),

  message: z
    .string()
    .trim()
    .min(10, "Pesan minimal 10 karakter")
    .max(2000, "Pesan maksimal 2000 karakter"),
});

export { contactSchema };
