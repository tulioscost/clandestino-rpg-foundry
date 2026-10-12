# CLANDESTINO v0.6.39 — Interface dos Bioprojetados

## Correção da ficha
- O painel **Bioprojetado — atributos com dificuldade +1** agora é um **dropdown recolhível** (`details/summary`), inicialmente fechado.
- Clique no título para exibir as nove opções de atributo e selecionar os quatro atributos penalizados.
- As escolhas seguem gravadas em `system.bioPenalizedAttributes`, com o limite existente de quatro.
- O resumo da origem permanece visível abaixo, mesmo com a seção recolhida.
- O novo layout reduz a altura do cabeçalho e se adapta a janelas estreitas.

## Regras preservadas
- Teto de 10d6; graduação de perícia concede +1d6.
- PV máximos = ROB × 5.
- Bioprojetados: penalidade de +1 na dificuldade de quatro atributos escolhidos.

## Instalação
Atualize o repositório e anexe `system.json` e `clandestino-rpg-foundry.zip` à Release `v0.6.39`. Faça backup do Mundo antes de atualizar.

## Verificação
Sintaxe do template, JSON e integridade do ZIP conferidas. Teste visual e funcional no Foundry V14.368 ainda necessário.
