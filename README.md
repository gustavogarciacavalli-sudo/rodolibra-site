# Rodolibra — site institucional (TI e Sociedade)
Next.js 14 + TypeScript + Tailwind + Lucide.

## Rodar
    npm install && npm run dev

## Editar conteúdo
Tudo em `lib/site.ts` (serviços, FAQ, contatos). Itens `provisional` e `TBD` precisam de confirmação.
WhatsApp: copie `.env.example` para `.env.local` e defina `NEXT_PUBLIC_WHATSAPP_NUMBER` (ex.: 5541XXXXXXXXX). Na Vercel: Settings > Environment Variables.

## Deploy
    npx vercel --prod
