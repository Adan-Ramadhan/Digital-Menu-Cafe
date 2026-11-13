import { contactSchema } from "@/schemas/formValidation";
import { NextResponse } from "next/server";

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

    const { name, email, subject, message } = result.data;

    // Nantinya, data ini dikirim ke layanan email.

    console.log({ name, email, subject, message });

    return NextResponse.json({
      message: "Pesan berhasil diterima",
      data: result.data,
    });
  } catch {
    return NextResponse.json(
      { message: "Terjadi kesalahan pada server" },
      { status: 500 },
    );
  }
}
