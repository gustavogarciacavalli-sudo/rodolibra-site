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
  quantidadeVolumes: string;
  dataColeta: string;
  mercadoria: string;
  modalidade: string;
  obs: string;
}

const initialForm: FormState = {
  origem: "",
  destino: "",
  peso: "",
  dimensoes: "",
  quantidadeVolumes: "",
  dataColeta: "",
  mercadoria: "",
  modalidade: "Carga Fracionada",
  obs: "",
};

const FIELD_LIMITS = {
  location: 100,
  cargo: 160,
  weight: 60,
  dimensions: 120,
  observations: 500,
} as const;

const MAX_QUANTITY = 9999;
const MAX_WHATSAPP_MESSAGE_LENGTH = 1800;
const MAX_WHATSAPP_URL_LENGTH = 2000;

function getLocalDateIso(): string {
  const now = new Date();
  const localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return localTime.toISOString().slice(0, 10);
}

function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function generateWhatsAppMessage(f: FormState): string {
  const line = (label: string, val: string) =>
    `• *${label}:* ${val.trim() || "A definir"}`;
  const dataColeta = f.dataColeta
    ? f.dataColeta.split("-").reverse().join("/")
    : "";

  const lines = [
    "📦 *SOLICITAÇÃO DE COTAÇÃO — RODOLIBRA*",
    "Olá! Gostaria de receber uma cotação para o seguinte transporte:",
    "",
    line("Origem", f.origem),
    line("Destino", f.destino),
    line("Tipo de carga ou produto", f.mercadoria),
    line("Modalidade pretendida", f.modalidade),
    line("Peso e unidade", f.peso),
    line("Volume ou dimensões", f.dimensoes),
    line("Quantidade de volumes", f.quantidadeVolumes),
    line("Data prevista para coleta", dataColeta),
    line(
      "Observações complementares",
      f.obs.trim() ? f.obs : "Sem observações"
    ),
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

  const todayIso = getLocalDateIso();
  const quantity = Number(form.quantidadeVolumes);
  const currentMessage = generateWhatsAppMessage(form);
  const currentWhatsAppLink = waLink(currentMessage);

  const isOrigemValid =
    form.origem.trim().length > 0 &&
    form.origem.length <= FIELD_LIMITS.location;
  const isDestinoValid =
    form.destino.trim().length > 0 &&
    form.destino.length <= FIELD_LIMITS.location;
  const isMercadoriaValid =
    form.mercadoria.trim().length > 0 &&
    form.mercadoria.length <= FIELD_LIMITS.cargo;
  const isPesoValid =
    form.peso.trim().length > 0 && form.peso.length <= FIELD_LIMITS.weight;
  const isDimensoesValid =
    form.dimensoes.trim().length > 0 &&
    form.dimensoes.length <= FIELD_LIMITS.dimensions;
  const isQuantidadeVolumesValid =
    /^\d+$/.test(form.quantidadeVolumes) &&
    Number.isSafeInteger(quantity) &&
    quantity >= 1 &&
    quantity <= MAX_QUANTITY;
  const isDataColetaValid =
    isValidIsoDate(form.dataColeta) && form.dataColeta >= todayIso;
  const isObservacoesValid =
    form.obs.length <= FIELD_LIMITS.observations;
  const isWhatsAppPayloadValid =
    currentMessage.length <= MAX_WHATSAPP_MESSAGE_LENGTH &&
    currentWhatsAppLink.length <= MAX_WHATSAPP_URL_LENGTH;
  const isFormValid =
    isOrigemValid &&
    isDestinoValid &&
    isMercadoriaValid &&
    isPesoValid &&
    isDimensoesValid &&
    isQuantidadeVolumesValid &&
    isDataColetaValid &&
    isObservacoesValid &&
    isWhatsAppPayloadValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    if (!isFormValid) {
      return;
    }

    window.open(currentWhatsAppLink, "_blank", "noopener,noreferrer");
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
                        Indique origem, destino, carga, peso, dimensões,
                        volumes e data de coleta.
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
                  <span>{site.phone}</span>
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
                        maxLength={FIELD_LIMITS.location}
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
                        maxLength={FIELD_LIMITS.location}
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
                      <span>Tipo de Carga ou Produto</span>
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
                      maxLength={FIELD_LIMITS.cargo}
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
                        <span>Peso e Unidade</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="peso"
                        type="text"
                        value={form.peso}
                        onChange={(e) => updateField("peso", e.target.value)}
                        placeholder="Ex: 350 kg ou 2 toneladas"
                        maxLength={FIELD_LIMITS.weight}
                        className={`field ${
                          touched && !isPesoValid ? "field-error" : ""
                        }`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="dimensoes"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                      >
                        <PackageSearch size={14} className="text-accent" />
                        <span>Volume ou Dimensões</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="dimensoes"
                        type="text"
                        value={form.dimensoes}
                        onChange={(e) =>
                          updateField("dimensoes", e.target.value)
                        }
                        placeholder="Ex: 120 x 80 x 100 cm por volume"
                        maxLength={FIELD_LIMITS.dimensions}
                        className={`field ${
                          touched && !isDimensoesValid ? "field-error" : ""
                        }`}
                        required
                      />
                    </div>
                  </div>

                  {/* Linha 4: Quantidade de volumes e data */}
                  <div className="grid gap-4 sm:grid-cols-2 mb-4">
                    <div>
                      <label
                        htmlFor="quantidadeVolumes"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                      >
                        <PackageSearch size={14} className="text-accent" />
                        <span>Quantidade de Volumes</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="quantidadeVolumes"
                        type="number"
                        min="1"
                        max={MAX_QUANTITY}
                        step="1"
                        inputMode="numeric"
                        value={form.quantidadeVolumes}
                        onChange={(e) =>
                          updateField("quantidadeVolumes", e.target.value)
                        }
                        placeholder="Ex: 2"
                        className={`field ${
                          touched && !isQuantidadeVolumesValid
                            ? "field-error"
                            : ""
                        }`}
                        required
                      />
                      {touched && !isQuantidadeVolumesValid && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          Informe um número inteiro entre 1 e {MAX_QUANTITY}.
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="dataColeta"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                      >
                        <Clock size={14} className="text-accent" />
                        <span>Data Prevista para Coleta</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="dataColeta"
                        type="date"
                        min={todayIso}
                        value={form.dataColeta}
                        onChange={(e) =>
                          updateField("dataColeta", e.target.value)
                        }
                        className={`field ${
                          touched && !isDataColetaValid ? "field-error" : ""
                        }`}
                        required
                      />
                      {touched && !isDataColetaValid && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          Informe uma data válida a partir de hoje.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Linha 5: Observações */}
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
                      maxLength={FIELD_LIMITS.observations}
                      className={`field resize-none ${
                        touched &&
                        (!isObservacoesValid || !isWhatsAppPayloadValid)
                          ? "field-error"
                          : ""
                      }`}
                    />
                    <p className="mt-1 text-right text-xs text-slate-500">
                      {form.obs.length}/{FIELD_LIMITS.observations}
                    </p>
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
                      {!isWhatsAppPayloadValid
                        ? "Reduza o texto dos campos para enviar a cotação pelo WhatsApp."
                        : "Revise os campos destacados. A quantidade deve ser um número inteiro válido e a coleta não pode estar no passado."}
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
                        href={currentWhatsAppLink}
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
