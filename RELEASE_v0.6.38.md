# CLANDESTINO — Foundry VTT v0.6.38

## Atualizações mecânicas (livro 5.2.2)
- Reserva máxima: **10d6**, após modificadores.
- Cada graduação da perícia: **+1d6**.
- Pontos de Vida máximos: **ROB × 5**.
- Bioprojetados: quatro atributos escolhidos com **dificuldade +1**; não se aplica aos demais.
- Criada seleção na ficha dos quatro atributos penalizados.
- Macro de migração acessível pelo console como `game.clandestino.migrateHealthToROB5()`; execute somente após backup. Preserva dano já sofrido.

## Nota de compatibilidade
O sistema não modifica automaticamente personagens antigos para evitar cura ou perda de dados inesperada. Os personagens existentes exigem migração explícita pelo Narrador. A escolha dos quatro atributos em Bioprojetados existentes requer revisão manual.

## Testes
Verificações de sintaxe, integridade dos arquivos e testes estáticos da fórmula. Ainda requer homologação no Foundry V14.368.
