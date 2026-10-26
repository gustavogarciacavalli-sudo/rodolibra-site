# Rodolibra — Site Institucional de Transporte & Logística

> **Projeto de Extensão Universitária:** TI e Sociedade  
> **Empresa Parceira:** Rodolibra Transportes  
> **Contato oficial:** +55 41 99891-3381
> **Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lucide Icons

---

## 🎯 Objetivo do Projeto

Desenvolvido para solucionar os desafios de comunicação e presença digital da **Rodolibra**, o site cumpre os seguintes requisitos:
1. **Apresentação Digital Profissional:** Identidade visual sóbria nas cores institucionais (#0B1F33, #164A70, #EA580C, #17212B, #F4F6F9).
2. **Serviços Claros:** Apresentação em cards de Carga Geral, Carga Fracionada, Carga Dedicada e Cargas Especiais.
3. **Formulário de Cotação Estruturada:** Coleta origem, destino, tipo de carga, peso, dimensões, quantidade de volumes, data prevista e observações, e direciona os dados para o WhatsApp.
4. **FAQ Interativo:** Responde às principais dúvidas levantadas no projeto (rotas, congelados, cotação e contatos).
5. **Simplicidade de Manutenção:** Todas as informações, textos, contatos e serviços estão centralizados no arquivo `lib/site.ts` para que pessoas sem conhecimento avançado em programação possam atualizar o site.

---

## 🚀 Como Executar Localmente

### 1. Clonar ou Acessar a Pasta do Projeto
```bash
cd rodolibra-site
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar Variáveis de Ambiente (Opcional)
Copie o arquivo de exemplo:
```bash
cp .env.example .env.local
```
No arquivo `.env.local`, preencha o número de WhatsApp oficial com DDD (apenas números):
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5541998913381
```
*Nota: Se a variável não estiver definida, o site utilizará o link universal do WhatsApp (`https://api.whatsapp.com/send?text=...`), preservando a mensagem pronta e aguardando a seleção do contato.*

### 4. Executar em Modo de Desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 5. Compilar para Produção (Build)
```bash
npm run build
npm run start
```

---

## 📂 Estrutura do Projeto

```text
rodolibra-site/
├── app/
│   ├── globals.css          # Estilos globais, tipografia, botões e classes utilitárias
│   ├── layout.tsx           # Layout raiz com fontes Montserrat e Inter e metadados SEO
│   └── page.tsx             # Página única contendo as 6 seções principais
├── components/
│   ├── Header.tsx           # Menu de navegação fixo, responsivo com drawer mobile
│   ├── Hero.tsx             # 1ª dobra com chamada principal e consulta de modalidades
│   ├── About.tsx            # Apresentação da empresa e contexto da extensão universitária
│   ├── Services.tsx         # Cards de serviços com ícones Lucide e atalho para cotação
│   ├── Quote.tsx            # Formulário de cotação integrado ao WhatsApp
│   ├── Faq.tsx              # Acordeão de perguntas frequentes com busca em tempo real
│   ├── Contact.tsx          # Seção de contato com telefone, e-mail e botões diretos
│   └── Footer.tsx           # Rodapé institucional e botão flutuante do WhatsApp (FAB)
├── lib/
│   └── site.ts              # CONFIGURAÇÃO CENTRAL: Edite textos, contatos e itens aqui
├── .env.example             # Exemplo de configuração de variáveis de ambiente
├── tailwind.config.ts       # Paleta de cores (#0B1F33, #164A70, #EA580C) e tipografia
└── package.json             # Dependências e scripts de execução
```

---

## 📝 Como Editar o Conteúdo (Para Não-Programadores)

Abra o arquivo [`lib/site.ts`](lib/site.ts):
- **Telefone:** Atualize `site.phone` e a variável `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- **E-mail / Horário:** Atualize `site.email` ou `site.hours`.
- **Serviços:** Altere ou adicione novos itens na lista `services`.
- **Perguntas do FAQ:** Edite as perguntas e respostas na lista `faqs`.

---

## 🌐 Publicação no GitHub e Deploy na Vercel

### Publicar no GitHub
```bash
git remote add origin https://github.com/SEU-USUARIO/rodolibra-site.git
git push -u origin main
```

### Publicar na Vercel
1. Conecte sua conta do GitHub à [Vercel](https://vercel.com).
2. Clique em **"Add New Project"** e selecione o repositório `rodolibra-site`.
3. Em **Environment Variables**, adicione (se desejado):
   - Key: `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - Value: `5541998913381`
4. Clique em **Deploy**.

Ou publique via terminal (com a CLI da Vercel instalada):
```bash
npx vercel --prod
```
