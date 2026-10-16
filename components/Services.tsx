import {
  Truck,
  Package,
  Route,
  Snowflake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { services, ServiceItem } from "@/lib/site";

const iconMap = {
  Truck,
  Package,
  Route,
  Snowflake,
};

export default function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="badge-tag bg-accent/10 text-accent">
              Serviços de Transporte
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-4xl">
              Modalidades para cada perfil de carga
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Cada remessa exige um planejamento próprio de espaço, rota e
              prazo. Conheça as soluções operacionais da Rodolibra.
            </p>
          </div>

          <a
            href="#cotacao"
            className="btn-outline hidden sm:inline-flex items-center gap-2 self-start md:self-auto shrink-0"
          >
            <span>Solicitar orçamento</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Grade de Serviços */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item: ServiceItem) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-200 hover:border-accent/40 hover:shadow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy text-accent-light transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                    {item.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-600 leading-snug"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#cotacao"
                    className="flex w-full items-center justify-between rounded-lg bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-navy transition-colors duration-200 group-hover:bg-accent group-hover:text-white"
                  >
                    <span>Cotar esta modalidade</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Rodapé da seção de serviços */}
        <div className="mt-10 rounded-xl bg-mist p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-sm text-slate-600">
            <strong className="text-navy">
              Precisa avaliar qual modalidade tem o melhor custo-benefício?
            </strong>{" "}
            Informe o peso e o volume da sua carga no formulário e auxiliamos na
            escolha.
          </div>
          <a
            href="#cotacao"
            className="btn-primary text-xs sm:text-sm py-2.5 px-5 shrink-0"
          >
            <span>Preencher cotação</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
