"use client";

import { useState, useEffect } from "react";
import { Menu, X, Truck, Phone, ArrowRight } from "lucide-react";
import { nav, site, waLink } from "@/lib/site";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-white shadow-sm">
        <Truck size={20} strokeWidth={2.2} aria-hidden />
      </span>
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading text-lg sm:text-xl font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {site.name.toUpperCase()}
        </span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          Transportes & Logística
        </span>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-navy transition-shadow duration-200 ${
        scrolled
          ? "border-b border-white/10 shadow-lg shadow-black/25"
          : "border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#inicio"
          aria-label="Rodolibra - Ir para o início da página"
          className="shrink-0"
        >
          <Logo />
        </a>

        {/* Navegação Desktop */}
        <nav
          aria-label="Navegação Principal"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap text-sm font-medium text-slate-200 transition-colors hover:text-accent-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ações Desktop */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href={waLink(
              "Olá! Gostaria de falar com o atendimento da Rodolibra."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-2 whitespace-nowrap text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <Phone size={14} className="text-accent-light shrink-0" aria-hidden />
            <span>{site.phone}</span>
          </a>

          <a
            href="#cotacao"
            className="btn-primary whitespace-nowrap text-xs sm:text-sm py-2.5 px-5 rounded-lg"
          >
            <span>Solicitar cotação</span>
            <ArrowRight size={15} aria-hidden />
          </a>
        </div>

        {/* Botão Menu Mobile / Tablet */}
        <button
          type="button"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu Gaveta Mobile */}
      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col justify-between bg-navy border-t border-white/10 p-6 lg:hidden overflow-y-auto"
        >
          <nav
            aria-label="Menu móvel"
            className="flex flex-col divide-y divide-white/10"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-base font-semibold text-white transition hover:text-accent-light"
              >
                <span>{item.label}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <a
              href={waLink(
                "Olá! Gostaria de falar com o atendimento da Rodolibra."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white"
            >
              <Phone size={15} className="text-accent-light" />
              <span>{site.phone}</span>
            </a>
            <a
              href="#cotacao"
              onClick={() => setOpen(false)}
              className="btn-primary w-full py-3.5 text-center justify-center"
            >
              <span>Solicitar cotação</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
