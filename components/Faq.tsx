"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Search } from "lucide-react";
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
    <section
      id="faq"
      className="bg-mist py-16 sm:py-24 border-b border-slate-200"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="badge-tag bg-accent/10 text-accent">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Respostas diretas sobre cotação de frete, regiões atendidas e
            modalidades de transporte.
          </p>

          {/* Campo de Busca */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar dúvida (ex: cotação, região, refrigerada)..."
              className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-xs sm:text-sm text-navy placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 shadow-sm"
            />
          </div>
        </div>

        {/* Lista Acordeão */}
        <div className="mt-10 space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq: FaqItem, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:px-6 text-left transition-colors hover:bg-slate-50"
                    >
                      <span className="font-heading text-sm sm:text-base font-bold text-navy">
                        {faq.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 bg-accent text-white"
                            : "bg-slate-100 text-navy"
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
                      className="px-5 pb-5 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                    >
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="rounded-xl bg-white p-8 text-center text-slate-500 border border-slate-200">
              <p className="text-sm">
                Nenhuma pergunta encontrada para &ldquo;{search}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-3 text-xs font-bold text-accent hover:underline"
              >
                Limpar busca
              </button>
            </div>
          )}
        </div>

        {/* Banner de Atendimento */}
        <div className="mt-10 rounded-2xl bg-navy p-6 sm:p-8 text-white shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold sm:text-xl text-white">
              Ficou com alguma outra dúvida operacional?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-md">
              Fale diretamente com nossa equipe pelo WhatsApp para consultar
              prazos, rotas e condições de embarque.
            </p>
          </div>

          <a
            href={waLink(
              "Olá! Tenho uma dúvida sobre os serviços de transporte da Rodolibra."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-3 px-5 shrink-0"
          >
            <MessageCircle size={18} />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
