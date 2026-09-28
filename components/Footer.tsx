"use client";

import { MessageCircle, ArrowUp, Phone, MapPin, GraduationCap, ShieldCheck } from "lucide-react";
import { nav, site, waLink } from "@/lib/site";
import { Logo } from "./Header";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Marca e Missão (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo light={true} />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Transporte rodoviário de cargas com foco em pontualidade, atendimento direto e cotações transparentes. Soluções completas para a logística da sua empresa.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-accent">
              <ShieldCheck size={16} />
              <span>Compromisso e segurança no transporte rodoviário</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
              Navegação
            </h4>
            <nav className="flex flex-col space-y-2">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-xs sm:text-sm text-slate-300 transition hover:text-accent hover:translate-x-1 duration-150 inline-block"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato & Extensão Universitária (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
              Atendimento & Projeto
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-accent shrink-0" />
                <span>{site.phone} ({site.contactName})</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-accent shrink-0" />
                <span>Curitiba e Região Metropolitana — PR</span>
              </p>
            </div>

            <div className="mt-4 rounded-xl bg-white/5 p-3.5 border border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-accent mb-1">
                <GraduationCap size={15} />
                <span>Projeto TI e Sociedade</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Desenvolvimento institucional e tecnológico em parceria acadêmica de extensão universitária.
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior com Direitos e Voltar ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {site.name} Transportes. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">Projeto de Extensão “TI e Sociedade”</span>
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
    <aside aria-label="Atendimento rápido pelo WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={waLink("Olá! Gostaria de falar com o atendimento da Rodolibra.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Rodolibra no WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-navy shadow-xl shadow-black/40 transition-all duration-300 hover:scale-110 hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/40"
      >
        <MessageCircle size={28} className="transition-transform group-hover:rotate-12" aria-hidden />

        {/* Indicador de status online pulsante */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white" />
        </span>

        {/* Tooltip moderno no desktop */}
        <span className="pointer-events-none absolute right-16 hidden rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-white shadow-lg border border-white/10 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
          Cotação rápida no WhatsApp
        </span>
      </a>
    </aside>
  );
}
