"use client";

import { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Box,
  Truck,
  Sparkles,
} from "lucide-react";
import { site, waLink } from "@/lib/site";

export default function Hero() {
  const [selectedType, setSelectedType] = useState<"geral" | "fracionada" | "dedicada">("fracionada");

  const modalidadeInfo = {
    geral: {
      titulo: "Carga Geral Rodoviária",
      detalhe: "Ideal para insumos, manufaturados e mercadorias secas.",
      beneficio: "Itinerário flexível e conferência na coleta",
    },
    fracionada: {
      titulo: "Carga Fracionada (LTL)",
      detalhe: "Excelente custo-benefício para lotes menores e caixas.",
      beneficio: "Economia ao compartilhar espaço de frete",
    },
    dedicada: {
      titulo: "Carga Dedicada / Fechada",
      detalhe: "Veículo exclusivo e rota direta expressa até a entrega.",
      beneficio: "Prioridade máxima e saída imediata",
    },
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-navy to-[#071726] pt-12 pb-20 text-white lg:pt-20 lg:pb-28"
    >
      {/* Luzes de ambientação de fundo */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand/30 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[140px]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Coluna da Esquerda: Proposta de Valor e CTAs */}
          <div className="lg:col-span-7">
            {/* Tag / Badge superior */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-bold text-accent backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>LOGÍSTICA E TRANSPORTE RODOVIÁRIO</span>
            </div>

            {/* Headline Principal */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-[1.15]">
              Sua carga no <span className="text-accent">destino certo</span>, com agilidade e total clareza.
            </h1>

            {/* Texto Descritivo */}
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed">
              A <strong>Rodolibra</strong> cuida do transporte das suas mercadorias sem burocracia. 
              Organize os dados do seu frete em minutos, envie diretamente para o nosso WhatsApp 
              e receba uma cotação transparente adaptada à sua necessidade.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#cotacao"
                className="btn-primary flex items-center justify-center gap-2 px-7 py-4 text-base"
              >
                <span>Solicitar cotação rápida</span>
                <ArrowRight size={18} aria-hidden />
              </a>

              <a
                href={waLink("Olá! Gostaria de conversar com a Rodolibra sobre transporte de cargas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center justify-center gap-2 px-6 py-4 text-base"
              >
                <MessageCircle size={20} className="text-accent" aria-hidden />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Diferenciais rápidos */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                <CheckCircle2 size={16} className="text-accent shrink-0" aria-hidden />
                <span>Cotação sem intermediários</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                <CheckCircle2 size={16} className="text-accent shrink-0" aria-hidden />
                <span>Atendimento direto e ágil</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                <CheckCircle2 size={16} className="text-accent shrink-0" aria-hidden />
                <span>Cargas seguras e monitoradas</span>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Elemento Visual Tecnológico e Interativo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/15 bg-navy-800/80 p-6 shadow-2xl backdrop-blur-xl sm:p-7">
              {/* Badge de cabeçalho do card */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-accent">
                    <Truck size={18} aria-hidden />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">
                      Painel de Cotação Rodolibra
                    </h2>
                    <span className="text-[11px] text-slate-400">
                      Simulação & Planejamento
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online
                </span>
              </div>

              {/* Rota Visual */}
              <div className="my-5 rounded-2xl bg-navy-950/70 p-4 border border-white/5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                  <span>Itinerário Previsto</span>
                  <span className="text-accent text-[10px]">Rotas sob medida</span>
                </div>
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-brand/60 grid place-items-center text-accent text-xs font-bold border border-accent/30">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Origem</p>
                      <p className="text-[11px] text-slate-400">Curitiba & Região</p>
                    </div>
                  </div>

                  {/* Linha animada com caminhãozinho */}
                  <div className="flex-1 px-3 flex flex-col items-center">
                    <span className="text-[10px] text-accent/80 font-mono mb-1">Direto</span>
                    <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand via-accent to-brand w-full animate-pulse" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-accent/20 grid place-items-center text-accent text-xs font-bold border border-accent/40">
                      <Box size={14} />
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white">Destino</p>
                      <p className="text-[11px] text-slate-400">Sua Cidade / UF</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seletor Rápido de Modalidade */}
              <div>
                <p className="text-xs font-bold text-slate-300 mb-2.5">
                  Selecione uma modalidade para consultar:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {(["fracionada", "geral", "dedicada"] as const).map((key) => {
                    const active = selectedType === key;
                    const labels = {
                      fracionada: "Fracionada",
                      geral: "Geral",
                      dedicada: "Dedicada",
                    };
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedType(key)}
                        className={`rounded-xl py-2 px-2 text-xs font-bold transition-all text-center ${
                          active
                            ? "bg-accent text-navy shadow-md shadow-accent/20"
                            : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
                        }`}
                      >
                        {labels[key]}
                      </button>
                    );
                  })}
                </div>

                {/* Detalhe da modalidade selecionada */}
                <div className="mt-3.5 rounded-xl bg-white/5 p-3.5 border border-white/5">
                  <p className="text-xs font-bold text-accent">
                    {modalidadeInfo[selectedType].titulo}
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    {modalidadeInfo[selectedType].detalhe}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Sparkles size={12} className="text-accent" />
                    <span>{modalidadeInfo[selectedType].beneficio}</span>
                  </div>
                </div>
              </div>

              {/* Botão de cotação direta deste card */}
              <a
                href="#cotacao"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand/50 hover:bg-brand py-3 text-xs font-bold text-white transition border border-white/10"
              >
                <span>Preencher dados desta carga</span>
                <ArrowRight size={14} />
              </a>

              {/* Rodapé informativo */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-accent" /> Contato oficial: Gustavo Rios
                </span>
                <span>(41) 9789-1225</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
