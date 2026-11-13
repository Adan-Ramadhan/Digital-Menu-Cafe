"use client";

import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

export default function FormContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      noHp: formData.get("noHp"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Data di submit:", data)
      const result = await response.json();

      console.log("Result form:", result)

      if (!response.ok) {
        throw new Error(result.errors.message);
      }

      setStatus(result.message);
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="w-full p-4">
      <form
        onSubmit={handleFormSubmit}
        className="rounded-lg border p-4 flex flex-col gap-4"
      >
        <div className="w-full">
          <label
            htmlFor="name"
            className="block font-semibold text-md tracking-wider"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Input your email here..."
            className="w-full border p-1 rounded focus:outline-amber-400 focus:outline mt-1"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="noHp"
            className="block font-semibold text-md tracking-wider"
          >
            No Hp/WhatsApp
          </label>
          <input
            id="noHp"
            name="noHp"
            type="number"
            required
            placeholder="Input your number here..."
            className="w-full border p-1 rounded focus:outline-amber-400 focus:outline mt-1"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="name"
            className="block font-semibold text-md tracking-wider"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Input your name here..."
            className="w-full border p-1 rounded focus:outline-amber-400 focus:outline mt-1"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="subject"
            className="block font-semibold text-md tracking-wider"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Input your subject here..."
            className="w-full border p-1 rounded focus:outline-amber-400 focus:outline mt-1"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="message"
            className="block font-semibold text-md tracking-wider"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Input your message here..."
            className="w-full border p-1 rounded focus:outline-amber-400 focus:outline mt-1"
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Process submit..." : "Submit"}
        </Button>

        {status && <p role="status" className={`${status } text-sm text-red-600 text-center`}>Warning: {status}</p>}
      </form>
    </section>
  );
}
