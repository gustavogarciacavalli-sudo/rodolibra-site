"use client";

import { useState, useEffect } from "react";
import { Menu, X, Truck, Phone, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {/* Ícone personalizado com estética de transporte e peso (libra) */}
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-accent text-navy shadow-md shadow-accent/25 transition-transform hover:scale-105">
        <Truck size={22} strokeWidth={2.5} aria-hidden />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-navy bg-brand" />
      </span>
      <div className="flex flex-col">
        <span
          className={`font-heading text-xl font-black tracking-tight leading-none ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {site.name.toUpperCase()}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Transportes
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne rolagem de fundo quando menu mobile está aberto
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20 py-2.5"
          : "border-b border-white/5 bg-navy py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="Rodolibra - Ir para início da página">
          <Logo />
        </a>

        {/* Navegação Desktop */}
        <nav
          aria-label="Navegação Principal"
          className="hidden lg:flex flex-1 items-center justify-center gap-5 px-5"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 whitespace-nowrap text-sm font-semibold text-white/80 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ações Desktop */}
        <div className="hidden shrink-0 sm:flex items-center gap-4">
          <a
            href={`tel:+55${site.phone.replace(/\D/g, "")}`}
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition"
          >
            <Phone size={14} className="text-accent" aria-hidden />
            <span>{site.phone}</span>
          </a>

          <a
            href="#cotacao"
            className="btn-primary text-xs sm:text-sm py-2.5 px-4.5 rounded-lg"
          >
            <span>Solicitar cotação</span>
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu Gaveta Mobile */}
      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 top-[60px] bottom-0 z-40 flex flex-col justify-between bg-navy/98 p-6 backdrop-blur-xl lg:hidden overflow-y-auto"
        >
          <nav aria-label="Menu móvel" className="flex flex-col divide-y divide-white/10">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-base font-bold text-white transition hover:text-accent"
              >
                <span>{item.label}</span>
                <ArrowRight size={16} className="text-white/40" />
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <a
              href="#cotacao"
              onClick={() => setOpen(false)}
              className="btn-primary w-full py-3.5 text-center justify-center"
            >
              Solicitar cotação agora
            </a>
            <p className="text-center text-xs text-white/50">
              Atendimento direto pelo WhatsApp com a Rodolibra
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
