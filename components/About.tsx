import {
  Shield,
  MessageSquare,
  FileCheck2,
  MapPin,
  GraduationCap,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const pilares = [
    {
      icon: MessageSquare,
      titulo: "Atendimento Direto",
      descricao:
        "Contato sem intermediários com quem acompanha a operação. Você trata prazos, coleta e valores diretamente pelo WhatsApp ou telefone.",
    },
    {
      icon: FileCheck2,
      titulo: "Cotação Objetiva",
      descricao:
        "Levantamento rápido das informações essenciais da carga — origem, destino, peso e cubagem — para retorno ágil de orçamento.",
    },
    {
      icon: Shield,
      titulo: "Cuidado Operacional",
      descricao:
        "Conferência no embarque, planejamento adequado de rota e acompanhamento do transporte até a entrega no destinatário.",
    },
  ];

  return (
    <section
      id="sobre"
      className="bg-mist py-16 sm:py-24 border-b border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl">
          <span className="badge-tag bg-accent/10 text-accent">
            A Empresa
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-4xl">
            Transporte rodoviário com foco em pontualidade e clareza
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            A <strong className="text-navy">Rodolibra</strong> atua no transporte
            rodoviário de cargas conectando empresas a soluções seguras para
            remessas fracionadas e cargas dedicadas. Nosso trabalho prioriza a
            comunicação direta, prazos realistas e o cuidado em cada etapa do
            frete.
          </p>
        </div>

        {/* 3 Pilares Alinhados */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pilares.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="card-premium p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-accent-light">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {p.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blocos Institucionais Alinhados (2 colunas de mesma altura) */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Coluna 1: Atuação e Base Operacional */}
          <div className="rounded-xl bg-white p-6 sm:p-8 border border-slate-200 shadow-card lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Truck size={20} />
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-navy">
                  Operação e Cobertura Rodoviária
                </h3>
              </div>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Atendemos demandas de transporte rodoviário desde pequenos lotes
                fracionados até operações de lotação exclusiva. Cada solicitação
                é analisada considerando as características da mercadoria,
                janelas de coleta e exigências de descarga.
              </p>
            </div>

            <div className="mt-6 rounded-lg bg-mist p-4 border border-slate-200/80 flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-navy block">
                  Atendimento em todo o Brasil
                </strong>
                Atendemos empresas de diferentes segmentos. Cada rota é
                analisada de acordo com a origem, o destino, a carga e a
                programação solicitada.
              </div>
            </div>
          </div>

          {/* Coluna 2: Parceria Universitária (Item importante do projeto) */}
          <div className="rounded-xl bg-navy p-6 sm:p-8 text-white shadow-card lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-white">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent-light">
                    Extensão Universitária
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Projeto TI e Sociedade
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Este canal digital foi estruturado em parceria com o projeto de
                extensão universitária <em>TI e Sociedade</em>, com o objetivo de
                modernizar o atendimento da Rodolibra e agilizar o envio de
                cotações por novos clientes.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-300 font-medium">
                Precisa cotar um transporte?
              </span>
              <a
                href="#cotacao"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-light hover:underline shrink-0"
              >
                <span>Ir para o formulário</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
