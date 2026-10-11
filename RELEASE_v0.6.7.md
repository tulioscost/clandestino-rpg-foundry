# CLANDESTINO v0.6.7 — Correção das tabelas d6

Correção de compatibilidade com Foundry V14.368: os seis resultados de cada uma das três tabelas agora usam `type: "text"` em vez do valor legado `type: 0`. O módulo também aplica `CONST.TABLE_RESULT_TYPES.TEXT` na importação.

As tabelas existentes válidas não são substituídas. Não são alterados atores, inventários, diários, músicas nem cenas.
