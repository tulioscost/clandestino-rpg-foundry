# CLANDESTINO — Release v0.6.37

## Correções

- **Consulta de Caminho e Trilha**: área de leitura limitada em altura, com rolagem interna e quebra de texto, evitando que descrições longas se sobreponham aos atributos vitais e demais campos da ficha.
- **Dice So Nice**: as rolagens feitas pelo sistema CLANDESTINO passam a selecionar automaticamente o visual **CLANDESTINO — Neon** quando o BPM está em 120 ou menos, e **CLANDESTINO — BPM Crítico** quando o BPM ultrapassa 120. Ao retornar a 120 ou menos, a próxima rolagem usa novamente o visual Neon.
- A alteração dos dados é **visual**, sem modificação da reserva, resultados ou mecânicas de jogo.

## Observações

- A seleção automática aplica-se às rolagens disparadas pelas funções nativas de CLANDESTINO que usam `rollPool`. Rolagens externas, de macros independentes ou outros sistemas não são sobrescritas.
- Necessário Dice So Nice ativo para o visual personalizado.
- Compatibilidade-alvo: Foundry VTT 14.368.
- Verificados JSON, sintaxe dos módulos e integridade dos ZIPs; conferir comportamento visual em um Mundo de teste.
