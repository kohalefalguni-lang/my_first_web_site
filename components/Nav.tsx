"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"], ["Education", "#education"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Experience", "#experience"], ["Certifications", "#achievements"], ["Contact", "#contact"],
];

export default function Nav({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-serif text-lg font-semibold">{name}</a>
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="text-muted transition-colors hover:text-brand">{l}</a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line px-5 pb-4 md:hidden">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2.5 text-sm">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
