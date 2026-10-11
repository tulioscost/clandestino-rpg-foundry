# CLANDESTINO 0.4.1 — correções da ficha

- Todas as 12 Trilhas listadas no seletor, com indicação do Caminho de origem. A escolha de uma Trilha não acrescenta peso ao inventário.
- Nome do Ator editável na própria ficha (altera o campo Actor.name).
- Background e Vícios como campos persistidos por Actor.system.
- Alterar ROB recalcula automaticamente PV máximos = ROB × 3. Os danos já sofridos são preservados como quantidade absoluta. Ex.: ROB 3, 9/9 PV; recebe 2 dano (7/9); ao mudar para ROB 4 fica 10/12 PV.
- A lógica se aplica apenas a personagens e Ultra Sentinelas, sem mudar automaticamente os PV de ameaças.
- Preserve backups e teste em Mundo de cópia antes da atualização.

**Publicação:** envie o conteúdo da pasta Repositorio ao GitHub, crie Release `v0.4.1`, anexe os arquivos da pasta Release.
