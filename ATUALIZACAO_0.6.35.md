# CLANDESTINO v0.6.35 — Proteções e Catálogo Organizado

## Novidades
- **RD automática:** vestir uma armadura atualiza a RD da ficha com seu valor de Proteção; retirar restaura a RD de base.
- O sistema continua considerando apenas uma armadura equipada por vez. Durabilidade zero impede a proteção.
- **18 novas armaduras e trajes** industriais, médicos, táticos e de exploração com durabilidade, validade e fraquezas próprias.
- **Compêndios por categoria:** Armas, Munições, Proteções/Armaduras, Consumíveis e Equipamentos.
- Compêndio legado mantido para compatibilidade com mundos já existentes.
- Ficha do equipamento: campos para consultar e editar durabilidade, validade e fraquezas.

## Compatibilidade e migração
- Para evitar perda de personalizações, valores antigos existentes não são substituídos indiscriminadamente.
- O valor `protection` é a fonte principal da RD conferida ao vestir; `rd` permanece como campo de compatibilidade em dados antigos.
- Nova versão v0.6.35 para Foundry VTT 14.368.

## Testes recomendados no Foundry
1. Vestir e retirar uma armadura: confirmar atualização imediata do campo RD.
2. Trocar de armadura, verificar que apenas uma permanece equipada.
3. Zerar durabilidade e verificar a ausência de RD.
4. Conferir os cinco compêndios por categoria.
5. Verificar que itens e fichas customizados permanecem intactos.

**Status:** pacote gerado e validado estaticamente. Testes funcionais em Foundry V14.368 ainda pendentes.
