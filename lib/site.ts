/**
 * ============================================================================
 * RODOLIBRA - ARQUIVO CENTRAL DE CONFIGURAÇÃO E DADOS
 * ============================================================================
 * Projeto de Extensão Universitária: "TI e Sociedade"
 * 
 * Este arquivo foi projetado para facilitar a manutenção futura por pessoas
 * sem conhecimento avançado de programação. Todos os textos, serviços,
 * perguntas frequentes e dados de contato podem ser editados aqui.
 */

// Número oficial de WhatsApp da Rodolibra (+55 41 99220-8330 - Gustavo Rios).
// Pode ser sobrescrito via NEXT_PUBLIC_WHATSAPP_NUMBER em .env.local se necessário.
const DEFAULT_WHATSAPP_NUMBER = "5541992208330";
const RAW_ENV_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
export const WHATSAPP_NUMBER =
  RAW_ENV_PHONE.replace(/\D/g, "") || DEFAULT_WHATSAPP_NUMBER;

/**
 * Gera o link direto para o WhatsApp da Rodolibra com a mensagem formatada.
 */
export const waLink = (text?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (text && text.trim().length > 0) {
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  }
  return baseUrl;
};

export const TBD = "Informação em homologação com a Rodolibra";

export const site = {
  name: "Rodolibra",
  tagline: "Transporte e Logística Rodoviária",
  headline: "Sua carga no destino certo, com agilidade e total transparência.",
  subheadline:
    "Apresentação moderna e solicitação direta de cotações para transporte rodoviário. Informações organizadas sem complicação para novos clientes.",
  
  // Dados oficiais documentados no projeto de extensão
  contactName: "Gustavo Rios",
  phone: "+55 41 99220-8330",
  formattedPhone: "+55 41 99220-8330",
  
  // Campos estruturados para substituição posterior após autorização
  email: "contato@rodolibra.com.br", // Provisório / Sugerido
  isEmailProvisional: true,
  
  hours: "Segunda a Sexta: 08h às 18h",
  isHoursProvisional: true,
  
  baseRegion: "Curitiba e Região Metropolitana — PR (Atendimento sob consulta para rotas estaduais e interestaduais)",
  isRegionProvisional: true,
  
  projectInfo: {
    title: "Projeto de Extensão Universitária: TI e Sociedade",
    partner: "Rodolibra Transportadora",
    objective: "Modernização da presença digital, facilitação do canal de cotações e aproximação comunitária através da tecnologia.",
  },
};

export const nav = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "A Empresa" },
  { id: "servicos", label: "Serviços" },
  { id: "cotacao", label: "Cotação" },
  { id: "faq", label: "Dúvidas" },
  { id: "contato", label: "Contato" },
] as const;

export interface ServiceItem {
  id: string;
  icon: "Truck" | "Package" | "Route" | "Snowflake";
  badge: string;
  title: string;
  description: string;
  features: string[];
  provisional?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "rodoviario-geral",
    icon: "Truck",
    badge: "Principal",
    title: "Transporte Rodoviário Geral",
    description:
      "Transporte seguro de cargas industriais, manufaturados e insumos diversos por rodovia, com acompanhamento de ponta a ponta.",
    features: [
      "Planejamento de itinerário rodoviário",
      "Conferência minuciosa na coleta",
      "Emissão ágil de documentação de transporte (CT-e/DACTE)",
    ],
    provisional: true,
  },
  {
    id: "carga-fracionada",
    icon: "Package",
    badge: "Custo-benefício",
    title: "Carga Fracionada",
    description:
      "Ideal para remessas menores que não ocupam um veículo inteiro. Agrupamento eficiente para otimizar os custos de frete.",
    features: [
      "Aproveitamento inteligente de espaço",
      "Redução expressiva de custo unitário",
      "Acomodação segura de pequenos e médios volumes",
    ],
    provisional: true,
  },
  {
    id: "carga-dedicada",
    icon: "Route",
    badge: "Agilidade Total",
    title: "Carga Dedicada (Lotação)",
    description:
      "Veículo exclusivo para a sua carga com saída imediata e rota direta até o destinatário final, sem paradas intermediárias.",
    features: [
      "Exclusividade operacional do veículo",
      "Menor tempo de trânsito entre origem e destino",
      "Máxima segurança para mercadorias de alto valor",
    ],
    provisional: true,
  },
  {
    id: "cargas-especiais",
    icon: "Snowflake",
    badge: "Sob Consulta",
    title: "Cargas Especiais & Refrigeradas",
    description:
      "Atendimento para mercadorias que exigem cuidados específicos de manuseio ou temperatura controlada, mediante consulta prévia.",
    features: [
      "Análise de compatibilidade de temperatura",
      "Cuidados rigorosos de acondicionamento",
      "Avaliação de rota e prazos especiais",
    ],
    provisional: true,
  },
];

export interface FaqItem {
  id: string;
  q: string;
  a: string;
  provisional?: boolean;
}

export const faqs: FaqItem[] = [
  {
    id: "info-necessaria",
    q: "Quais informações são necessárias para solicitar uma cotação?",
    a: "Para agilizar seu orçamento, precisamos de: cidade de origem e destino, peso estimado (kg), dimensões aproximadas (comprimento, largura e altura) ou quantidade de volumes/pallets, tipo de mercadoria e qualquer observação relevante (fragilidade, urgência ou controle de temperatura). Você pode preencher todos esses dados diretamente no formulário deste site!",
    provisional: false,
  },
  {
    id: "como-solicitar",
    q: "Como solicitar uma cotação com a Rodolibra?",
    a: "É muito simples: basta rolar até a seção 'Cotação' deste site, preencher os dados essenciais da sua carga e clicar em 'Solicitar cotação pelo WhatsApp'. O sistema organiza todas as informações em uma mensagem pronta e direciona para a conversa com nossa equipe.",
    provisional: false,
  },
  {
    id: "regioes-atendidas",
    q: "Quais regiões a Rodolibra atende?",
    a: "A base de contato documentada está localizada em Curitiba e Região Metropolitana (Paraná). O atendimento para outras cidades do Paraná, estados vizinhos ou rotas interestaduais é avaliado caso a caso. Recomendamos informar origem e destino no formulário para consultarmos imediatamente a disponibilidade de atendimento.",
    provisional: true,
  },
  {
    id: "tipos-de-carga",
    q: "Quais tipos de carga são transportados?",
    a: "Trabalhamos com o transporte de cargas gerais secas, mercadorias fracionadas e cargas lotação/dedicadas. Para cargas com restrições fiscais, produtos perigosos ou itens com exigências sanitárias especiais, recomendamos descrever a mercadoria no formulário para confirmação operacional prévia.",
    provisional: true,
  },
  {
    id: "carga-congelada",
    q: "A Rodolibra transporta carga congelada ou refrigerada?",
    a: "O transporte com temperatura controlada (refrigerada ou congelada) depende da disponibilidade de frota especializada e rota solicitada. Na hora de preencher a cotação, marque a observação de temperatura necessária para que nossa equipe avalie a viabilidade técnica.",
    provisional: true,
  },
  {
    id: "como-contatar",
    q: "Como entrar em contato com a Rodolibra?",
    a: "O canal mais rápido é pelo WhatsApp, através do botão flutuante no canto da tela ou clicando nos botões e números de contato da página. Você pode falar diretamente pelo número +55 41 99220-8330 com Gustavo Rios.",
    provisional: false,
  },
  {
    id: "prazo-cotacao",
    q: "Qual é o tempo médio para receber a resposta da cotação?",
    a: "Assim que sua mensagem estruturada chega pelo WhatsApp com os dados completos (origem, destino, peso e tipo de carga), nossa equipe analisa a rota e retorna com a melhor proposta comercial o mais rápido possível.",
    provisional: false,
  },
];
