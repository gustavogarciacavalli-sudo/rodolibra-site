import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  ExternalLink,
  Building2,
} from "lucide-react";
import { site, waLink } from "@/lib/site";

export default function Contact() {
  const canais = [
    {
      icon: Phone,
      titulo: "Telefone & WhatsApp",
      valor: site.phone,
      subtexto: "Atendimento realizado pela equipe da Rodolibra",
      href: waLink("Olá! Gostaria de falar com o atendimento da Rodolibra."),
      cta: "Conversar no WhatsApp",
      target: "_blank",
    },
    {
      icon: MessageCircle,
      titulo: "WhatsApp Comercial",
      valor: site.phone,
      subtexto: "Canal prioritário para cotações e informações de coleta",
      href: waLink("Olá! Gostaria de falar com o atendimento da Rodolibra."),
      cta: "Chamar no WhatsApp",
      target: "_blank",
      primary: true,
    },
    {
      icon: Mail,
      titulo: "E-mail Comercial",
      valor: site.email,
      subtexto: "Envio de notas fiscais, documentos e propostas formais",
      href: `mailto:${site.email}`,
      cta: "Enviar e-mail",
    },
    {
      icon: Clock,
      titulo: "Horário de Atendimento",
      valor: site.hours,
      subtexto: "Programação de coletas, cotações e acompanhamento de cargas",
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <span className="badge-tag bg-accent/10 text-accent">
            Canais de Atendimento
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-4xl">
            Fale diretamente com a Rodolibra
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Para cotar uma carga fracionada, agendar um veículo dedicado ou
            tirar dúvidas operacionais, entre em contato pelos nossos canais
            diretos.
          </p>
        </div>

        {/* Grade de Cartões de Contato */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {canais.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-200 hover:border-accent/40 hover:shadow-card-hover"
              >
                <div>
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-accent-light">
                    <Icon size={20} />
                  </span>

                  <h3 className="mt-4 font-bold text-navy text-base">
                    {item.titulo}
                  </h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className="mt-1.5 block text-base font-extrabold text-accent hover:underline break-words"
                    >
                      {item.valor}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-base font-extrabold text-accent break-words">
                      {item.valor}
                    </p>
                  )}

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {item.subtexto}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className={`inline-flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 px-3 text-xs font-bold transition ${
                        item.primary
                          ? "bg-accent text-white hover:bg-accent-hover"
                          : "bg-slate-100 text-navy hover:bg-navy hover:text-white"
                      }`}
                    >
                      <span>{item.cta}</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="block text-center text-xs font-semibold text-slate-500 py-2">
                      Atendimento em dias úteis
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé da Seção: Base Operacional + Chamada Direta */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 items-stretch">
          <div className="rounded-xl border border-slate-200 bg-mist p-6 sm:p-7 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-navy font-bold text-base mb-2.5">
                <Building2 size={20} className="text-accent shrink-0" />
                <span>Base Operacional e Cobertura</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A Rodolibra atende empresas de diferentes segmentos em todo o
                Brasil. Informe a origem, o destino e os dados da carga para que
                a equipe analise a rota e prepare a cotação.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>Atendimento em todo o Brasil</span>
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-navy p-6 sm:p-7 text-white lg:col-span-5 flex flex-col justify-between shadow-card">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-light">
                Atendimento Rápido
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-white leading-snug">
                Prefere tratar diretamente pelo WhatsApp?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Inicie uma conversa direta com nossa operação ou utilize o
                formulário da página para enviar os dados da sua carga.
              </p>
            </div>

            <a
              href={waLink(
                "Olá! Gostaria de solicitar uma cotação com a Rodolibra."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full text-center justify-center py-3 text-sm"
            >
              <MessageCircle size={18} />
              <span>Iniciar conversa no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
