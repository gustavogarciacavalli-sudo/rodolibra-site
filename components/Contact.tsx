import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  ExternalLink,
  UserCheck,
  Building2,
  GraduationCap,
} from "lucide-react";
import { site, waLink, TBD } from "@/lib/site";

export default function Contact() {
  const canais = [
    {
      icon: Phone,
      titulo: "Telefone de Contato",
      valor: site.phone,
      subtexto: `Responsável Documentado: ${site.contactName}`,
      href: `tel:+55${site.phone.replace(/\D/g, "")}`,
      cta: "Ligar agora",
      badge: "Oficial do Projeto",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      icon: MessageCircle,
      titulo: "WhatsApp Direto",
      valor: site.phone,
      subtexto: "Canal prioritário para envio rápido de cotações e mensagens",
      href: waLink("Olá! Gostaria de falar com o atendimento da Rodolibra."),
      cta: "Chamar no WhatsApp",
      badge: "Mais Rápido",
      badgeColor: "bg-accent/20 text-navy font-bold",
      target: "_blank",
    },
    {
      icon: Mail,
      titulo: "E-mail de Atendimento",
      valor: site.email,
      subtexto: "Para envio de notas fiscais, contratos e propostas formais",
      href: `mailto:${site.email}`,
      cta: "Enviar e-mail",
      badge: "Em Homologação",
      badgeColor: "bg-amber-100 text-amber-800",
      provisional: site.isEmailProvisional,
    },
    {
      icon: Clock,
      titulo: "Horário de Atendimento",
      valor: site.hours,
      subtexto: "Atendimento comercial para planejamento de rotas e coletas",
      badge: "Padrão Sugerido",
      badgeColor: "bg-slate-100 text-slate-700",
      provisional: site.isHoursProvisional,
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <span className="badge-tag bg-brand/10 text-brand">
            Contato & Atendimento
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Fale diretamente com a equipe da Rodolibra
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Seja para cotar uma carga fracionada, agendar frete dedicado ou tirar dúvidas operacionais, utilize nossos canais oficiais de comunicação.
          </p>
        </div>

        {/* Grade de Cartões de Contato */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {canais.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-accent">
                      <Icon size={22} />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-bold text-navy text-base">
                    {item.titulo}
                  </h3>

                  <p className="mt-1 text-base font-extrabold text-brand break-words">
                    {item.valor || TBD}
                  </p>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {item.subtexto}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-50 py-2.5 px-3 text-xs font-bold text-navy transition hover:bg-brand hover:text-white"
                    >
                      <span>{item.cta}</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="block text-center text-xs text-slate-400 py-1">
                      Horário comercial
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Destaque Institucional & Projeto de Extensão */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 items-stretch">
          
          {/* Informação Operacional */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-navy font-bold text-base mb-3">
                <Building2 size={20} className="text-brand" />
                <span>Base Operacional e Logística</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operação rodoviária com base documentada em Curitiba e Região Metropolitana (PR). 
                Para cargas com origem ou destino em outras localidades do Paraná ou demais estados da federação, 
                solicite consulta prévia de itinerário.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-4 border-t border-slate-200">
              <span className="flex items-center gap-1.5">
                <UserCheck size={16} className="text-accent-hover" />
                Contato oficial: Gustavo Rios
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-brand" />
                Curitiba & Região Metropolitana
              </span>
            </div>
          </div>

          {/* Chamada para o WhatsApp em Destaque */}
          <div className="rounded-2xl bg-gradient-to-br from-navy to-brand p-6 sm:p-7 text-white lg:col-span-5 flex flex-col justify-between shadow-md">
            <div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                <GraduationCap size={14} /> TI e Sociedade
              </span>
              <h3 className="mt-2 text-lg font-bold text-white leading-tight">
                Precisa de uma cotação agora mesmo?
              </h3>
              <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                Clique abaixo para iniciar uma conversa direta no WhatsApp ou use nosso formulário na página de cotação.
              </p>
            </div>

            <a
              href={waLink("Olá, Gustavo! Gostaria de solicitar uma cotação com a Rodolibra.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full text-center justify-center py-3 text-sm shadow-md"
            >
              <MessageCircle size={18} />
              <span>Chamar no WhatsApp agora</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
