"use client";

import {
  MessageCircle,
  ArrowUp,
  Phone,
  MapPin,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { nav, site, waLink } from "@/lib/site";
import { Logo } from "./Header";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-10 border-b border-white/10">
          {/* Coluna 1: Marca e Missão */}
          <div className="lg:col-span-5 space-y-4">
            <Logo light={true} />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Transporte rodoviário de cargas gerais, fracionadas e dedicadas.
              Atendimento direto, planejamento de rota e agilidade na cotação.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-accent-light font-medium">
              <ShieldCheck size={16} />
              <span>Segurança e compromisso no transporte rodoviário</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent-light">
              Navegação
            </h4>
            <nav className="flex flex-col space-y-2">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-xs sm:text-sm text-slate-300 transition hover:text-accent-light inline-block"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Atendimento & Extensão Universitária */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent-light">
              Atendimento
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-accent-light shrink-0" />
                <span>
                  {site.phone} — {site.contactName}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-accent-light shrink-0" />
                <span>Curitiba e Região Metropolitana — PR</span>
              </p>
            </div>

            <div className="mt-4 rounded-lg bg-white/5 p-3.5 border border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-accent-light mb-1">
                <GraduationCap size={15} />
                <span>Projeto TI e Sociedade</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Desenvolvimento institucional realizado em parceria de extensão
                universitária.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {site.name} Transportes. Todos os
            direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">
              Projeto de Extensão “TI e Sociedade”
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/10 hover:text-white transition"
              aria-label="Voltar ao início da página"
            >
              <span>Topo</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={waLink("Olá! Gostaria de falar com o atendimento da Rodolibra.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Rodolibra no WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-black/30 transition-all duration-200 hover:scale-105 hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/40"
      >
        <MessageCircle size={26} aria-hidden />

        <span className="pointer-events-none absolute right-16 hidden rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-white shadow-lg border border-white/10 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
          Solicitar cotação no WhatsApp
        </span>
      </a>
    </aside>
  );
}
