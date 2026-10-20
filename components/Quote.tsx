"use client";

import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Scale,
  PackageSearch,
  Send,
  CheckCircle2,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";
import { waLink, site } from "@/lib/site";

interface FormState {
  origem: string;
  destino: string;
  peso: string;
  dimensoes: string;
  mercadoria: string;
  modalidade: string;
  obs: string;
}

const initialForm: FormState = {
  origem: "",
  destino: "",
  peso: "",
  dimensoes: "",
  mercadoria: "",
  modalidade: "Carga Fracionada",
  obs: "",
};

export function generateWhatsAppMessage(f: FormState): string {
  const line = (label: string, val: string) =>
    `• *${label}:* ${val.trim() || "A definir"}`;

  const lines = [
    "📦 *SOLICITAÇÃO DE COTAÇÃO — RODOLIBRA*",
    "Olá! Gostaria de receber uma cotação para o seguinte transporte:",
    "",
    line("Origem", f.origem),
    line("Destino", f.destino),
    line("Tipo de mercadoria", f.mercadoria),
    line("Modalidade pretendida", f.modalidade),
    line("Peso estimado", f.peso),
    line("Dimensões / Volumes", f.dimensoes),
    line("Observações específicas", f.obs),
    "",
    "_Enviado pelo site oficial da Rodolibra._",
  ];

  return lines.join("\n");
}

export default function Quote() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const modalidades = [
    "Carga Fracionada",
    "Carga Dedicada",
    "Carga Geral Seca",
    "Carga Especial",
  ];

  const updateField = (key: keyof FormState, val: string) => {
    setForm((prev) => ({ ...prev, [key]: val }));
  };

  const isOrigemValid = form.origem.trim().length > 0;
  const isDestinoValid = form.destino.trim().length > 0;
  const isMercadoriaValid = form.mercadoria.trim().length > 0;
  const isFormValid = isOrigemValid && isDestinoValid && isMercadoriaValid;

  const currentMessage = generateWhatsAppMessage(form);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    if (!isFormValid) {
      return;
    }

    const link = waLink(currentMessage);
    window.open(link, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section
      id="cotacao"
      className="bg-navy py-16 text-white sm:py-24 border-y border-white/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Coluna Esquerda: Orientações, Etapas e Atendimento Direto */}
          <div className="flex flex-col justify-between lg:col-span-5 space-y-8">
            <div>
              <span className="badge-tag border border-accent-light/30 bg-accent/15 text-accent-light">
                Cotação de Frete
              </span>
              <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl text-white leading-tight">
                Solicite seu orçamento de transporte
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Preencha os dados principais da sua remessa ao lado. Com essas
                informações organizadas, nossa equipe analisa a rota e retorna
                rapidamente pelo WhatsApp com prazo e condições comerciais.
              </p>

              {/* 3 Etapas */}
              <div className="mt-8 rounded-xl border border-white/10 bg-navy-800 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent-light mb-5">
                  Como funciona
                </h3>

                <ol className="space-y-5">
                  <li className="flex items-start gap-3.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent font-heading text-xs font-extrabold text-white">
                      1
                    </span>
                    <div>
                      <strong className="block text-sm text-white">
                        Informe os dados da carga
                      </strong>
                      <span className="mt-0.5 block text-xs text-slate-300 leading-relaxed">
                        Indique origem, destino, tipo de mercadoria, peso e
                        volumes.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent font-heading text-xs font-extrabold text-white">
                      2
                    </span>
                    <div>
                      <strong className="block text-sm text-white">
                        Envie pelo WhatsApp
                      </strong>
                      <span className="mt-0.5 block text-xs text-slate-300 leading-relaxed">
                        Ao confirmar, você é direcionado para a conversa com os
                        dados preenchidos.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent font-heading text-xs font-extrabold text-white">
                      3
                    </span>
                    <div>
                      <strong className="block text-sm text-white">
                        Receba a proposta comercial
                      </strong>
                      <span className="mt-0.5 block text-xs text-slate-300 leading-relaxed">
                        Avaliamos a disponibilidade de frota e retornamos com a
                        cotação do frete.
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Card de Contato Direto (Alinhado na base da coluna esquerda) */}
            <div className="rounded-xl border border-white/10 bg-navy-950/80 p-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Atendimento Comercial Direto
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-slate-200">
                <a
                  href={waLink(
                    "Olá! Gostaria de falar com o atendimento comercial da Rodolibra."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-white hover:text-accent-light transition-colors"
                >
                  <Phone size={15} className="text-accent-light shrink-0" />
                  <span>
                    {site.phone} — {site.contactName}
                  </span>
                </a>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock size={14} className="text-accent-light shrink-0" />
                  <span>{site.hours}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário de Cotação */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 sm:p-8 text-ink shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-navy">
                    Dados para cotação
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Campos marcados com asterisco (
                    <span className="text-red-600 font-bold">*</span>) são
                    obrigatórios.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Modalidade */}
                  <div className="mb-5">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">
                      Modalidade do Frete
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {modalidades.map((mod) => {
                        const selected = form.modalidade === mod;
                        return (
                          <button
                            key={mod}
                            type="button"
                            onClick={() => updateField("modalidade", mod)}
                            className={`rounded-lg py-2.5 px-3 text-xs font-bold transition text-center ${
                              selected
                                ? "bg-accent text-white shadow-sm"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            {mod}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Linha 1: Origem e Destino */}
                  <div className="grid gap-4 sm:grid-cols-2 mb-4">
                    <div>
                      <label
                        htmlFor="origem"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                      >
                        <MapPin size={14} className="text-accent" />
                        <span>Origem (Cidade / UF)</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="origem"
                        type="text"
                        value={form.origem}
                        onChange={(e) => updateField("origem", e.target.value)}
                        placeholder="Ex: Curitiba / PR"
                        className={`field ${
                          touched && !isOrigemValid ? "field-error" : ""
                        }`}
                        required
                      />
                      {touched && !isOrigemValid && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          Informe a cidade de origem.
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="destino"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                      >
                        <MapPin size={14} className="text-accent" />
                        <span>Destino (Cidade / UF)</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="destino"
                        type="text"
                        value={form.destino}
                        onChange={(e) => updateField("destino", e.target.value)}
                        placeholder="Ex: Joinville / SC"
                        className={`field ${
                          touched && !isDestinoValid ? "field-error" : ""
                        }`}
                        required
                      />
                      {touched && !isDestinoValid && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          Informe a cidade de destino.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Linha 2: Tipo de Mercadoria */}
                  <div className="mb-4">
                    <label
                      htmlFor="mercadoria"
                      className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                    >
                      <PackageSearch size={14} className="text-accent" />
                      <span>Tipo de Mercadoria</span>
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="mercadoria"
                      type="text"
                      value={form.mercadoria}
                      onChange={(e) =>
                        updateField("mercadoria", e.target.value)
                      }
                      placeholder="Ex: Peças industriais, caixas embaladas, insumos..."
                      className={`field ${
                        touched && !isMercadoriaValid ? "field-error" : ""
                      }`}
                      required
                    />
                    {touched && !isMercadoriaValid && (
                      <p className="mt-1 text-xs text-red-600 font-medium">
                        Descreva resumidamente o tipo de mercadoria.
                      </p>
                    )}
                  </div>

                  {/* Linha 3: Peso e Dimensões */}
                  <div className="grid gap-4 sm:grid-cols-2 mb-4">
                    <div>
                      <label
                        htmlFor="peso"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                      >
                        <Scale size={14} className="text-accent" />
                        <span>Peso Estimado (kg ou ton)</span>
                      </label>
                      <input
                        id="peso"
                        type="text"
                        value={form.peso}
                        onChange={(e) => updateField("peso", e.target.value)}
                        placeholder="Ex: 350 kg ou 2 toneladas"
                        className="field"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="dimensoes"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                      >
                        <PackageSearch size={14} className="text-accent" />
                        <span>Dimensões / Volumes</span>
                      </label>
                      <input
                        id="dimensoes"
                        type="text"
                        value={form.dimensoes}
                        onChange={(e) =>
                          updateField("dimensoes", e.target.value)
                        }
                        placeholder="Ex: 120 x 80 x 100 cm (2 pallets)"
                        className="field"
                      />
                    </div>
                  </div>

                  {/* Linha 4: Observações */}
                  <div className="mb-6">
                    <label
                      htmlFor="obs"
                      className="mb-1.5 block text-xs font-bold text-navy uppercase tracking-wider"
                    >
                      Observações ou Necessidades Especiais
                    </label>
                    <textarea
                      id="obs"
                      rows={3}
                      value={form.obs}
                      onChange={(e) => updateField("obs", e.target.value)}
                      placeholder="Ex: Restrição de horário na entrega, controle de temperatura, cuidados de manuseio..."
                      className="field resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2.5"
                  >
                    <MessageCircle size={20} />
                    <span>Solicitar cotação pelo WhatsApp</span>
                    <Send size={16} />
                  </button>

                  {touched && !isFormValid && (
                    <div
                      role="alert"
                      className="mt-3.5 rounded-lg border border-red-200 bg-red-50 p-3 text-center text-xs font-medium text-red-700"
                    >
                      Preencha os campos obrigatórios (Origem, Destino e Tipo de
                      Mercadoria) para enviar sua solicitação.
                    </div>
                  )}

                  {submitted && isFormValid && (
                    <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-700">
                      <p className="font-bold text-navy flex items-center justify-center gap-1.5">
                        <CheckCircle2 size={16} className="text-accent" />
                        Solicitação pronta para envio!
                      </p>
                      <p className="mt-1 text-slate-600">
                        Caso o WhatsApp não tenha aberto automaticamente, clique
                        abaixo:
                      </p>
                      <a
                        href={waLink(currentMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 font-bold text-accent hover:underline"
                      >
                        <span>Abrir conversa no WhatsApp</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
