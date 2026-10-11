# CLANDESTINO v0.1.1 — Retrato editável

A imagem do personagem, ameaça, Lar ou Ultra Sentinela agora é um botão clicável no cabeçalho da ficha. Clique na imagem, selecione o arquivo no FilePicker e confirme. A imagem é salva em `Actor.img` e acompanha a atualização do token conforme configuração do Foundry. Requer permissão de Proprietário sobre o ator.

## Publicação GitHub
1. Substitua no repositório os arquivos `module/system.mjs`, `templates/actor.hbs`, `styles/clandestino.css`, `system.json` e `scripts/build_release.py` pelos fornecidos aqui.
2. Crie a Release `v0.1.1` (não altere o arquivo ZIP por dentro).
3. Anexe os dois arquivos desta distribuição: `system.json` e `clandestino-rpg-foundry.zip`.
4. Abra o Foundry, atualize o sistema e recarregue a aba para eliminar CSS antigo.

## Notas
A atualização não renomeia tipos de ator nem altera o esquema dos dados dos personagens. O arquivo ZIP deve ser anexado à Release com este nome exato.
