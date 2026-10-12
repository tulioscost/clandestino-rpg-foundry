# CLANDESTINO v0.6.30 — Criador de Tokens Neon e VTTA Tokenizer

## Novidades

- Novo botão **Criar token** na ficha do ator, disponível a usuários com permissão de edição.
- Quatro molduras circulares com identidade retrofuturista: **vermelho, ciano, verde e roxo**.
- Combina a imagem atual do ator com a moldura selecionada em **PNG 512 × 512** com recorte circular.
- Atualiza o **token protótipo** do ator e tenta atualizar suas instâncias abertas na cena.
- Mantém o retrato original intacto; a imagem composta é salva como arquivo separado.
- Novo botão **Editar no Tokenizer** para abrir o editor do módulo **VTTA Tokenizer** quando ativo.

## Requisitos e permissões

O módulo [VTTA Tokenizer](https://foundryvtt.com/packages/vtta-tokenizer/) permite refinamento posterior. O gerador nativo permanece disponível mesmo com o módulo desligado. O upload exige permissão de escrita no diretório de arquivos do Foundry; para jogadores, normalmente é necessário papel **Trusted Player** e uploads de usuários confiáveis habilitados pelo Narrador.

## Compatibilidade

Alvo: Foundry VTT **14.368**. Os arquivos de token são guardados em `Data/clandestino-tokens` (não dentro da pasta do sistema). O gerador não modifica mecânicas ou rolagens.

## Verificação

Manifeste e arquivos ZIP verificados; sintaxe JavaScript conferida. Integração e upload precisam ser confirmados em uma mesa de teste no Foundry V14.368.
