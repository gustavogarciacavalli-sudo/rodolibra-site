"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Search,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { faqs, FaqItem, waLink } from "@/lib/site";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faq" className="bg-mist py-16 sm:py-24 border-y border-slate-200/70">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="badge-tag bg-brand/10 text-brand inline-flex items-center gap-1.5">
            <HelpCircle size={14} /> Dúvidas Frequentes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Respostas diretas para as principais dúvidas sobre frete, cotação, regiões de atendimento e tipos de mercadoria.
          </p>

          {/* Campo de Busca Rápida no FAQ */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar pergunta (ex: congelada, cotação, região)..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 shadow-sm"
            />
          </div>
        </div>

        {/* Lista Acordeão */}
        <div className="mt-10 space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq: FaqItem, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-200 overflow-hidden"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-slate-50/80"
                    >
                      <span className="font-heading text-sm sm:text-base font-bold text-navy">
                        {faq.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-navy transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-brand text-white" : ""
                        }`}
                        aria-hidden
                      >
                        <ChevronDown size={18} />
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                    >
                      <p>{faq.a}</p>

                      {faq.provisional && (
                        <div className="mt-3.5 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800 border border-amber-200/60">
                          <AlertCircle size={14} className="shrink-0 text-amber-600" />
                          <span>Informação em homologação — confirme a rota e condições exatas na sua cotação.</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center text-slate-500 border border-slate-200">
              <p className="text-sm">Nenhuma pergunta encontrada com o termo &ldquo;{search}&rdquo;.</p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-3 text-xs font-bold text-brand hover:underline"
              >
                Limpar busca
              </button>
            </div>
          )}
        </div>

        {/* Banner de Ajuda Extra */}
        <div className="mt-12 rounded-3xl bg-navy p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider">
              <Sparkles size={14} /> Atendimento Humanizado
            </span>
            <h3 className="mt-1.5 text-lg font-bold sm:text-xl text-white">
              Sua dúvida não está listada aqui?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-md">
              Envie uma mensagem direta pelo WhatsApp para esclarecermos prazos, seguros e viabilidade de carga.
            </p>
          </div>

          <a
            href={waLink("Olá! Tenho uma dúvida sobre os serviços de transporte da Rodolibra.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-3 px-5 shrink-0"
          >
            <MessageCircle size={18} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
