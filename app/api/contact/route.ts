import { contactSchema } from "@/schemas/formValidation";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Data tidak valid",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, noHp, subject, message } = result.data;

    const { error } = await resend.emails.send({
      from: "Zona Kamar <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Pesan baru ${subject}`,
      text: `Nama: ${name} 
      Email: ${email} 
      Nomor HP: ${noHp} 
      Subjek: ${subject} 
      Pesan:${message}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "Gagal mengirim email" },
        { status: 500 },
      );
    }


    return NextResponse.json({
      message: "Pesan berhasil diterima",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Terjadi kesalahan pada server" },
      { status: 500 },
    );
  }
}
