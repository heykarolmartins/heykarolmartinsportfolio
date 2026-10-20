# Karol Martins — Portfolio v2 (Next.js)

Site de venda para edição recorrente de vídeos curtos. Identidade preservada (off-white, preto, verde-limão, Manrope + DM Mono, monograma `hKM`).

## Editar textos, preços e links
Tudo fica em **`app/content.ts`**. Não precisa mexer em `page.tsx`.
Antes de publicar, troque:
- `site.email` → seu e-mail profissional real
- `site.socials` → links reais (YT Jobs, Instagram, X, LinkedIn)
- `site.spotsOpen` → vagas reais disponíveis
- `pricing.plans` → preço (hoje "from $390", uma hipótese)

## Colocar os vídeos
1. Exporte cada amostra em MP4 (H.264, 9:16, até ~8 MB, sem áudio obrigatório).
2. Salve em `public/work/` (ex.: `public/work/sample-01.mp4`).
3. Em `content.ts`, preencha `video: '/work/sample-01.mp4'` no item correspondente.
O vídeo toca ao passar o mouse. Mantenha `status: 'DEMO EDIT'` em projetos demonstrativos e use `'CLIENT'` só para trabalho pago real.

## Rodar no computador
```
npm install
npm run dev     → http://localhost:3000
```

## Publicar (grátis na Vercel)
Suba esta pasta para o repositório do GitHub já conectado à Vercel; o deploy é automático.
Depois do deploy, abra a URL e confira no celular.

## Motion incluído
Preloader com contador e timecode · barra de progresso em formato de timeline + leitor de timecode · trilho lateral de seções · títulos com revelação por linha · celular animado com legendas palavra a palavra e timeline de edição · botões magnéticos com preenchimento · cursor customizado (desktop) · cards com inclinação 3D · contadores animados · FAQ em acordeão.
Respeita "reduzir movimento" do sistema. O formulário de amostra grátis abre o e-mail do visitante já preenchido (sem servidor).
