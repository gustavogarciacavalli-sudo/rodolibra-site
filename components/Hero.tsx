"use client";

import { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Truck,
  Phone,
} from "lucide-react";
import { site, waLink } from "@/lib/site";

export default function Hero() {
  const [selectedType, setSelectedType] = useState<
    "fracionada" | "geral" | "dedicada"
  >("fracionada");

  const modalidadeInfo = {
    fracionada: {
      titulo: "Carga Fracionada",
      detalhe:
        "Para volumes menores, caixas e pallets que não exigem o uso exclusivo de um caminhão.",
      indicacao: "Otimização de custo no compartilhamento de rota",
    },
    geral: {
      titulo: "Carga Geral Rodoviária",
      detalhe:
        "Transporte de mercadorias secas, insumos industriais e produtos embalados com conferência na coleta.",
      indicacao: "Emissão completa de documentação fiscal (CT-e / DACTE)",
    },
    dedicada: {
      titulo: "Carga Dedicada (Lotação)",
      detalhe:
        "Veículo exclusivo para a sua operação, com saída direta da coleta ao destinatário final.",
      indicacao: "Menor tempo de trânsito e sem paradas intermediárias",
    },
  };

  return (
    <section
      id="inicio"
      className="relative bg-navy pt-12 pb-16 text-white lg:pt-20 lg:pb-24 border-b border-white/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda: Chamada Principal */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-md border border-accent-light/30 bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-light">
              <span>Transporte Rodoviário de Cargas</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Sua carga no destino certo, com{" "}
              <span className="text-accent-light">agilidade</span> e negociação
              direta.
            </h1>

            <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed">
              A <strong className="text-white">Rodolibra</strong> realiza o
              transporte rodoviário de cargas gerais, fracionadas e dedicadas a
              partir de Curitiba e Região Metropolitana. Solicite sua cotação sem
              burocracia e fale diretamente com nossa operação.
            </p>

            {/* Botões Principais */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#cotacao"
                className="btn-primary px-7 py-4 text-base"
              >
                <span>Solicitar cotação de frete</span>
                <ArrowRight size={18} aria-hidden />
              </a>

              <a
                href={waLink(
                  "Olá! Gostaria de falar com a Rodolibra sobre transporte de cargas."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-6 py-4 text-base"
              >
                <MessageCircle
                  size={19}
                  className="text-accent-light"
                  aria-hidden
                />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>

            {/* Destaques Operacionais */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2
                  size={16}
                  className="text-accent-light shrink-0"
                  aria-hidden
                />
                <span>Atendimento sem intermediários</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2
                  size={16}
                  className="text-accent-light shrink-0"
                  aria-hidden
                />
                <span>Cargas fracionadas e lotação</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2
                  size={16}
                  className="text-accent-light shrink-0"
                  aria-hidden
                />
                <span>Base em Curitiba e Região (PR)</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Quadro de Consulta Rápida */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-navy-800 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-white">
                  <Truck size={20} aria-hidden />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white leading-snug">
                    Modalidades de Transporte
                  </h2>
                  <p className="text-xs text-slate-400">
                    Consulte o perfil ideal para a sua remessa
                  </p>
                </div>
              </div>

              {/* Base e Cobertura */}
              <div className="my-5 rounded-xl bg-navy-950/80 p-4 border border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-accent-light shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Origem e Cobertura
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      Saídas a partir de{" "}
                      <strong className="text-white">
                        Curitiba e Região Metropolitana (PR)
                      </strong>
                      , com avaliação de rotas estaduais e interestaduais sob
                      consulta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Abas de Modalidade */}
              <div>
                <p className="text-xs font-semibold text-slate-300 mb-2.5">
                  Selecione o tipo de operação:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {(["fracionada", "geral", "dedicada"] as const).map((key) => {
                    const active = selectedType === key;
                    const labels = {
                      fracionada: "Fracionada",
                      geral: "Carga Geral",
                      dedicada: "Dedicada",
                    };
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedType(key)}
                        className={`rounded-lg py-2.5 px-2 text-xs font-bold transition-colors text-center ${
                          active
                            ? "bg-accent text-white shadow-sm"
                            : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                        }`}
                      >
                        {labels[key]}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3.5 rounded-xl bg-white/5 p-4 border border-white/10">
                  <p className="text-sm font-bold text-white">
                    {modalidadeInfo[selectedType].titulo}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {modalidadeInfo[selectedType].detalhe}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-accent-light">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>{modalidadeInfo[selectedType].indicacao}</span>
                  </div>
                </div>
              </div>

              <a
                href="#cotacao"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 py-3 text-xs sm:text-sm font-bold text-white transition border border-white/15"
              >
                <span>Preencher dados para cotação</span>
                <ArrowRight size={15} />
              </a>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-300 pt-3.5 border-t border-white/10">
                <span className="font-medium">
                  Atendimento: <strong className="text-white">{site.contactName}</strong>
                </span>
                <a
                  href={waLink(
                    "Olá! Gostaria de falar com a Rodolibra sobre transporte de cargas."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-accent-light hover:underline"
                >
                  <Phone size={13} />
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
