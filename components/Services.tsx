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
            <span className="badge-tag bg-brand/10 text-brand">
              Serviços de Transporte
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Soluções sob medida para o transporte da sua mercadoria
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Cada carga tem particularidades de peso, prazo e acomodação. Escolha a modalidade que melhor se adapta à sua empresa ou solicite apoio à nossa equipe.
            </p>
          </div>

          <a
            href="#cotacao"
            className="btn-outline hidden sm:inline-flex items-center gap-2 self-start md:self-auto shrink-0"
          >
            <span>Preencher cotação geral</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Grade de Serviços */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item: ServiceItem) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card-hover"
              >
                <div>
                  {/* Topo do Card com Ícone e Badge */}
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-accent transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon size={24} />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  {/* Título e Descrição */}
                  <h3 className="mt-5 text-lg font-bold text-navy group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Lista de Vantagens / Itens */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {item.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-600"
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

                {/* Ação do Card */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#cotacao"
                    className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-navy transition-all duration-200 group-hover:bg-accent group-hover:text-navy hover:shadow-sm"
                  >
                    <span>Cotar este serviço</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  {item.provisional && (
                    <span className="mt-2 block text-center text-[10px] text-slate-400">
                      Escopo operacional sujeito à consulta prévia
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Rodapé da seção de serviços */}
        <div className="mt-10 rounded-2xl bg-slate-50 p-6 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-sm text-slate-600">
            <strong className="text-navy">Não tem certeza de qual modalidade escolher?</strong> Preencha os dados no formulário e sugerimos a opção mais vantajosa para o seu frete.
          </div>
          <a href="#cotacao" className="btn-primary text-xs py-2.5 px-4 shrink-0">
            Ir para Cotação
          </a>
        </div>

      </div>
    </section>
  );
}
