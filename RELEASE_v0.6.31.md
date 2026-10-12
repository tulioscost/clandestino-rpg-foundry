# CLANDESTINO v0.6.31 — Ameaças Canônicas e Paredes Automáticas

## Ameaças canônicas
- 25 fichas do bestiário recebem cinco habilidades próprias, desbloqueadas por nível, com descrições relacionadas aos vestígios e às contramedidas de cada criatura.
- Cada ameaça possui ataque contextualizado; entidades resolvidas por relógio continuam sem ataque convencional.
- As estatísticas originais de PV, Proteção, dados de ataque, dano e relógios foram preservadas.
- Compêndios existentes: migração automática somente das habilidades genéricas publicadas anteriormente; edições personalizadas pelo Narrador não são sobrescritas.

## Mapas e paredes
- Ao criar uma cena com imagem de fundo ou atualizar seu mapa, o Narrador recebe a pergunta **“Deseja gerar paredes automaticamente?”**.
- Um detector experimental identifica linhas longas e retas de alto contraste em mapas ortogonais, com sensibilidade configurável.
- O sistema informa a quantidade de segmentos e exige **segunda confirmação** antes de criar paredes.
- As paredes são documentos Wall nativos do Foundry, com livre edição, movimentação e exclusão pelo Narrador.
- Nenhuma alteração é feita quando a opção é recusada.
- O recurso também pode ser chamado pela API `game.clandestino.generateWalls(game.scenes.current)`.

### Limitações e testes
O detector não reconhece portas automaticamente, curvas ou plantas complexas e pode confundir linhas decorativas com paredes. **Revise todos os segmentos no editor de paredes antes de utilizar visão e iluminação.**

Compatibilidade pretendida: Foundry V14.368. Código e pacotes verificados estaticamente; funcionamento dentro de um Mundo deve ser testado antes de campanha em produção.
