import z from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter"),
  email: z.string().trim().email("Email tidak valid"),
  subject: z.string().trim().min(3, "Subjek terlalu pendek"),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter"),
});



export {contactSchema}