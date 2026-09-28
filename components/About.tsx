import {
  Shield,
  MessageSquare,
  FileCheck2,
  MapPin,
  GraduationCap,
  Sparkles,
  Layers,
} from "lucide-react";
import { site, TBD } from "@/lib/site";

export default function About() {
  const pilares = [
    {
      icon: MessageSquare,
      titulo: "Comunicação Direta & Sem Filtros",
      descricao:
        "Fale diretamente com quem entende e decide a operação. Sem filas de espera ou formulários intermináveis — você é atendido de forma ágil no WhatsApp.",
    },
    {
      icon: FileCheck2,
      titulo: "Cotações Precisas & Organizadas",
      descricao:
        "Coletamos de saída as informações indispensáveis da sua carga (peso, cubagem, origem e destino), eliminando dúvidas repetitivas e agilizando o envio de propostas.",
    },
    {
      icon: Shield,
      titulo: "Cuidado e Responsabilidade com o Frete",
      descricao:
        "Atenção dedicada a cada volume transportado. Planejamento cuidadoso de itinerário para garantir pontualidade e integridade da sua mercadoria.",
    },
  ];

  return (
    <section id="sobre" className="bg-mist py-16 sm:py-24 border-y border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl">
          <span className="badge-tag bg-brand/10 text-brand">
            Sobre a Rodolibra
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Transporte rodoviário focado em clareza, pontualidade e proximidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A <strong>Rodolibra</strong> é uma transportadora dedicada a conectar negócios a soluções de transporte seguras e sem complicação. 
            Nossa prioridade é transformar o primeiro contato em uma experiência transparente, prática e confiável.
          </p>
        </div>

        {/* Grade de Conteúdo */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Coluna Esquerda: Contexto Institucional e Projeto de Extensão */}
          <div className="space-y-6 lg:col-span-6">
            
            {/* Bloco 1: A Empresa e Atuação */}
            <div className="rounded-2xl bg-white p-7 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-accent">
                  <Layers size={20} />
                </span>
                <h3 className="text-xl font-bold text-navy">
                  Atuação Operacional
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Atuando no segmento rodoviário, a Rodolibra disponibiliza atendimento tanto para demandas fracionadas quanto para cargas dedicadas de lotação completa. O foco central da empresa é garantir que o cliente saiba exatamente o status de sua carga, com negociação direta e prazos realistas.
              </p>
              
              <div className="mt-5 rounded-xl bg-slate-50 p-4 border border-slate-100 flex items-start gap-3">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600">
                  <strong className="text-navy block mb-0.5">Base e Regiões Atendidas:</strong>
                  Atendimento documentado com base em Curitiba e Região Metropolitana (PR). Rotas estaduais e interestaduais são avaliadas sob consulta prévia no formulário de cotação.
                </div>
              </div>
            </div>

            {/* Bloco 2: Contexto do Projeto de Extensão Universitária "TI e Sociedade" */}
            <div className="rounded-2xl bg-gradient-to-br from-navy to-brand p-7 text-white shadow-md relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-navy">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                    Iniciativa Universitária
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    Projeto de Extensão “TI e Sociedade”
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Este portal foi desenvolvido como aplicação prática da disciplina universitária <em>TI e Sociedade</em>. 
                O projeto uniu a pesquisa de requisitos reais da Rodolibra à entrega de uma solução tecnológica acessível, 
                eliminando barreiras digitais e profissionalizando o fluxo de cotações para novos clientes.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-accent/90">
                <Sparkles size={14} />
                <span>Tecnologia a serviço do desenvolvimento comunitário e empresarial</span>
              </div>
            </div>

            {/* Bloco 3: Aviso de Homologação (Transparência com dados autorizados) */}
            <div className="rounded-xl border border-dashed border-amber-300 bg-amber-50/70 p-4 text-xs text-amber-900">
              <strong>Nota sobre Dados Institucionais:</strong> Em conformidade com as diretrizes do projeto, informações como quadro societário, métricas históricas e certificações adicionais estão mantidas sob a nota &ldquo;<em>{TBD}</em>&rdquo; e serão integradas conforme as atualizações oficiais da empresa.
            </div>

          </div>

          {/* Coluna Direita: Pilares e Diferenciais */}
          <div className="space-y-4 lg:col-span-6">
            <h3 className="text-lg font-bold text-navy mb-4">
              Por que cotar seu frete com a Rodolibra?
            </h3>

            {pilares.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="card-premium p-6 flex flex-col sm:flex-row gap-5 items-start"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-accent shadow-sm">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-navy">
                      {p.titulo}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {p.descricao}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Chamada para Ação Integrada */}
            <div className="mt-6 rounded-2xl border border-brand/20 bg-brand/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-navy text-sm">
                  Precisa de uma resposta rápida para a sua carga?
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Informe peso, rota e mercadoria para retorno imediato.
                </p>
              </div>
              <a href="#cotacao" className="btn-secondary text-xs py-2.5 px-4 shrink-0">
                Fazer cotação agora
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
