"use client";

import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Scale,
  PackageSearch,
  Send,
  CheckCircle2,
  Copy,
  Info,
  Layers,
  FileText,
  ExternalLink,
} from "lucide-react";
import { waLink, site, WHATSAPP_NUMBER } from "@/lib/site";

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
  const line = (label: string, val: string) => `• *${label}:* ${val.trim() || "A definir"}`;
  
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
    "_Mensagem organizada pelo formulário do site oficial da Rodolibra._",
  ];

  return lines.join("\n");
}

export default function Quote() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [touched, setTouched] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const modalidades = [
    "Carga Fracionada",
    "Carga Dedicada / Fechada",
    "Carga Geral Seca",
    "Carga Especial / A definir",
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

  const handleCopy = () => {
    navigator.clipboard.writeText(currentMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="cotacao"
      className="relative overflow-hidden bg-navy py-16 text-white sm:py-24"
    >
      {/* Elementos decorativos sutis */}
      <div
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl">
          <span className="badge-tag border border-accent/40 bg-accent/10 text-accent">
            Cotação Descomplicada
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white">
            Como funciona a solicitação de frete
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            O objetivo deste formulário não é calcular preços automaticamente por estimativas genéricas, mas sim 
            <strong> organizar todas as informações mínimas necessárias</strong> para que a equipe da Rodolibra avalie sua rota e forneça um orçamento justo e rápido.
          </p>
        </div>

        {/* Grade Principal: Passo a passo / Preview (Esquerda) e Formulário (Direita) */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          
          {/* Coluna Esquerda: Passos + Live Preview da Mensagem */}
          <div className="space-y-6 lg:col-span-5">
            
            {/* 3 Passos */}
            <div className="rounded-2xl border border-white/10 bg-navy-800/80 p-6 backdrop-blur-md">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Layers size={18} className="text-accent" />
                <span>3 etapas simples até sua cotação:</span>
              </h3>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent font-heading text-xs font-black text-navy">
                    1
                  </span>
                  <div>
                    <strong className="block text-xs text-white">Informe os dados da carga</strong>
                    <span className="text-xs text-slate-300">
                      Origem, destino, peso aproximado e o que será transportado.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent font-heading text-xs font-black text-navy">
                    2
                  </span>
                  <div>
                    <strong className="block text-xs text-white">Envie direto no WhatsApp</strong>
                    <span className="text-xs text-slate-300">
                      O botão gera o texto formatado para envio imediato à transportadora.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent font-heading text-xs font-black text-navy">
                    3
                  </span>
                  <div>
                    <strong className="block text-xs text-white">Receba a proposta comercial</strong>
                    <span className="text-xs text-slate-300">
                      A equipe da Rodolibra responde com prazo e condições do frete.
                    </span>
                  </div>
                </li>
              </ol>
            </div>

            {/* Pré-visualização ao vivo do WhatsApp */}
            <div className="rounded-2xl border border-white/10 bg-[#091b2c] p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-accent text-navy grid place-items-center">
                    <MessageCircle size={14} />
                  </div>
                  <span className="text-xs font-bold text-white">
                    Prévia da Mensagem (WhatsApp)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:bg-white/10 transition"
                  title="Copiar texto da mensagem"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 size={12} className="text-accent" />
                      <span className="text-accent">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Balão estilizado de WhatsApp */}
              <div className="rounded-xl bg-[#005c4b]/30 border border-[#005c4b]/50 p-4 text-xs font-mono text-slate-200 whitespace-pre-line leading-relaxed selection:bg-accent/40 selection:text-navy">
                {currentMessage}
              </div>

              {/* Informação sobre o contato */}
              <div className="mt-3 flex items-start gap-2 text-[11px] text-slate-400">
                <Info size={14} className="text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Destinatário oficial:</strong> {site.contactName} ({site.phone}). 
                  {WHATSAPP_NUMBER ? " Número configurado no sistema." : " Abrirá o aplicativo WhatsApp pronto para envio."}
                </span>
              </div>
            </div>

          </div>

          {/* Coluna Direita: O Formulário */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-9 text-ink shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Preencha os dados da carga
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Os campos marcados com asterisco (<span className="text-red-600">*</span>) são essenciais.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-brand bg-brand/5 px-3 py-1 rounded-full">
                  <FileText size={14} /> Cotação rápida
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Seleção de Modalidade rápida */}
                <div className="mb-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Modalidade do Frete:
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {modalidades.map((mod) => {
                      const selected = form.modalidade === mod;
                      return (
                        <button
                          key={mod}
                          type="button"
                          onClick={() => updateField("modalidade", mod)}
                          className={`rounded-xl p-2.5 text-xs font-semibold transition text-center ${
                            selected
                              ? "bg-navy text-accent ring-2 ring-navy shadow-sm"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
                      <MapPin size={14} className="text-brand" />
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
                        Por favor, informe a cidade de origem.
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="destino"
                      className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider"
                    >
                      <MapPin size={14} className="text-accent-hover" />
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
                        Por favor, informe a cidade de destino.
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
                    <PackageSearch size={14} className="text-brand" />
                    <span>Tipo de Mercadoria</span>
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="mercadoria"
                    type="text"
                    value={form.mercadoria}
                    onChange={(e) => updateField("mercadoria", e.target.value)}
                    placeholder="Ex: Peças industriais, caixas com calçados, alimentos embalados..."
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
                      <Scale size={14} className="text-brand" />
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
                      <PackageSearch size={14} className="text-brand" />
                      <span>Dimensões / Volumes</span>
                    </label>
                    <input
                      id="dimensoes"
                      type="text"
                      value={form.dimensoes}
                      onChange={(e) => updateField("dimensoes", e.target.value)}
                      placeholder="Ex: 120 x 80 x 100 cm (2 pallets)"
                      className="field"
                    />
                  </div>
                </div>

                {/* Linha 4: Observações adicionais */}
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
                    placeholder="Ex: Prazo limite para entrega, necessidade de plataforma de descarga, temperatura ou cuidados de empilhamento..."
                    className="field resize-none"
                  />
                </div>

                {/* Botão de Envio Principal */}
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-base shadow-lg shadow-accent/25 hover:shadow-glow flex items-center justify-center gap-3"
                >
                  <MessageCircle size={22} className="text-navy" />
                  <span>Solicitar cotação pelo WhatsApp</span>
                  <Send size={18} className="text-navy" />
                </button>

                {/* Alerta de campos pendentes */}
                {touched && !isFormValid && (
                  <div
                    role="alert"
                    className="mt-3.5 rounded-xl border border-red-200 bg-red-50 p-3 text-center text-xs font-medium text-red-700"
                  >
                    Preencha os campos obrigatórios destacadas em vermelho (Origem, Destino e Mercadoria) para prosseguir.
                  </div>
                )}

                {/* Feedback de sucesso e link alternativo */}
                {submitted && isFormValid && (
                  <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-xs text-emerald-800">
                    <p className="font-bold flex items-center justify-center gap-1.5">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      Mensagem formatada com sucesso!
                    </p>
                    <p className="mt-1 text-slate-600">
                      Caso o WhatsApp não tenha aberto em uma nova aba, clique no link abaixo:
                    </p>
                    <a
                      href={waLink(currentMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 font-bold text-brand hover:underline"
                    >
                      <span>Abrir conversa do WhatsApp agora</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
