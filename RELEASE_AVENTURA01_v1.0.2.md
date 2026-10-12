# CLANDESTINO — Aventura 01 v1.0.2 — Reparo de Fundos

## Correção
- Nova macro **CLANDESTINO | Reparar fundos v1.0.2** verifica os mapas WebP do módulo e os copia, quando possível, para a pasta própria do Mundo com a API do Foundry V14.
- Reaplica o caminho de imagem aos fundos das cenas existentes, inclusive cópias com o mesmo nome.
- Se o servidor não encontrar as imagens do módulo, apresenta a pasta de upload manual: `worlds/<id-do-mundo>/clandestino-silencio-absoluto/maps`.
- A macro **não** gera novas cenas nem remove duplicatas, preservando paredes e documentos existentes.

## Instruções
1. Publique a tag `aventura01-v1.0.2` com `module.json` e `clandestino-silencio-absoluto.zip`.
2. Atualize e ative o módulo; execute como Narrador a macro **CLANDESTINO | Reparar fundos v1.0.2**.
3. Caso o relatório aponte imagens indisponíveis, faça upload dos três arquivos `.webp` pelo File Picker do Foundry para a pasta indicada e execute novamente a macro.
4. Atualize as cenas e exclua manualmente duplicatas, depois de conferir que nenhum registro foi personalizado.

**Atenção:** é necessário verificar a imagem no Foundry V14.368 real. O funcionamento de arquivos hospedados em caminhos personalizados varia segundo a instalação.
