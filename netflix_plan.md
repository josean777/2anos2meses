# Plano de Transformação: Interface Netflix

## 1. Identidade Visual
- **Cores**: 
  - Fundo: `#141414` (Preto Netflix)
  - Primária: `#E50914` (Vermelho Netflix)
  - Texto: `#FFFFFF` (Branco) e `#B3B3B3` (Cinza secundário)
- **Tipografia**: Netflix Sans (usaremos `Inter` ou `Helvetica Neue` como fallback, já que o usuário já tem Inter).
- **Sombras**: Gradientes lineares escuros no topo e na base das seções.

## 2. Componentes a Ajustar
- **Header**:
  - Logo à esquerda (`J&L STREAM` em vermelho com fonte pesada).
  - Menu de navegação simples.
  - Avatar do perfil à direita (estilo quadrado com bordas levemente arredondadas).
  - Background transparente que fica preto ao rolar.
- **Hero (Destaque)**:
  - Imagem de fundo em tela cheia com gradiente para preto.
  - Título grande e descrição.
  - Botões "Assistir" (Branco com texto preto) e "Mais Informações" (Cinza translúcido).
- **Rows (Carrosséis)**:
  - Títulos de seção em branco, tamanho médio.
  - Cards de conteúdo com proporção 16:9.
  - Efeito de hover: zoom suave e borda sutil.
- **Modal de Detalhes**:
  - Estilo Netflix "Quick View" ou Modal centralizado.
  - Informações de "Match", ano, classificação indicativa.

## 3. Melhorias Técnicas
- Corrigir as extensões de imagem no código (o código usa `.svg` mas os arquivos são `.JPG` e `.heic`).
- Adicionar transições suaves.
- Melhorar a responsividade para mobile.

## 4. Estrutura de Arquivos
- Manter `App.jsx` para a lógica principal.
- Refatorar `styles.css` para focar no visual Netflix puro.
- Ajustar `couple.js` para garantir que as referências de imagem batam com os arquivos reais.
