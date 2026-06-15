# Josean & Lanny — Experiência Streaming

Projeto React/Vite pronto para hospedar na Vercel, criado como uma homenagem cinematográfica para celebrar **2 anos e 2 meses** de Josean e Lanny.

## O que vem pronto

- Visual escuro/vermelho inspirado em plataformas de streaming premium.
- Tela inicial com perfil da Lanny.
- Hero cinematográfico com chamada principal.
- Cards de episódios da história.
- Sessão “Top 10 motivos para amar você”.
- Galeria de momentos.
- Carta completa em modal.
- Layout responsivo para celular.
- Placeholders de fotos fáceis de substituir.

## Como rodar no computador

```bash
npm install
npm run dev
```

Depois abra o link local que o terminal mostrar, normalmente:

```bash
http://localhost:5173
```

## Como publicar na Vercel

1. Extraia este ZIP.
2. Envie a pasta para um repositório no GitHub.
3. Entre na Vercel.
4. Clique em **Add New Project**.
5. Selecione o repositório.
6. Framework: **Vite**.
7. Build Command: `npm run build`.
8. Output Directory: `dist`.
9. Clique em **Deploy**.

## Como trocar textos

Edite o arquivo:

```txt
src/data/couple.js
```

Lá você muda nomes, carta, episódios, frases e caminhos das fotos.

## Como trocar fotos

As imagens ficam em:

```txt
public/fotos/
```

Você pode substituir os arquivos `foto-01.svg`, `foto-02.svg`, etc. por fotos reais. Se colocar nomes diferentes, edite os caminhos no arquivo `src/data/couple.js`.

## Observação importante

O design é inspirado em estética de streaming premium, com tons escuros e vermelho cinematográfico. Ele não usa logotipo oficial da Netflix nem arquivos protegidos da marca.
