# Publicando na Vercel

## Opção mais fácil

1. Descompacte o ZIP.
2. Crie um repositório no GitHub.
3. Envie todos os arquivos da pasta para esse repositório.
4. Acesse a Vercel.
5. Clique em **Add New... > Project**.
6. Escolha o repositório.
7. A Vercel deve detectar como Vite automaticamente.
8. Confirme:
   - Build Command: `npm run build`
   - Output Directory: `dist`
9. Clique em **Deploy**.

## Depois que publicar

Sempre que você alterar o GitHub, a Vercel atualiza o site automaticamente.

## Onde personalizar

- Textos principais: `src/data/couple.js`
- Carta: `src/data/couple.js`
- Fotos: `public/fotos/`
- Cores/design: `src/styles.css`
