"use client";
import { useState } from "react";
import { Send } from "lucide-react";

// Opens the visitor's email app with the message filled in. No server needed.
export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const field = "mt-1 w-full rounded border border-line bg-white px-3 py-2 text-sm";
  function send(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "your portfolio"}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`;
  }
  return (
    <form onSubmit={send} className="space-y-4">
      <label className="block text-sm font-medium">Your name
        <input required value={name} onChange={(e) => setName(e.target.value)} className={field} />
      </label>
      <label className="block text-sm font-medium">Message
        <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
      </label>
      <button className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
        <Send size={16} aria-hidden /> Send by email
      </button>
    </form>
  );
}
