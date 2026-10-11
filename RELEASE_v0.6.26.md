# CLANDESTINO v0.6.26 — Gerador por Perfil e 24 Personagens Prontos

A versão **0.6.26** amplia a geração automática de tripulantes e acrescenta um novo compêndio de fichas prontas para usar no Foundry VTT.

## Novidades

### Gerador de personagens aprimorado
- Distribui atributos e perícias com ênfase no Caminho selecionado, respeitando os orçamentos de criação de **Humanos (6/8)** e **Bioprojetados (8/12)**.
- Escolhe **equipamentos iniciais por Trilha** e acrescenta itens coerentes com as perícias mais desenvolvidas.
- Respeita a capacidade de carga (**6 + FOR**) e atribui quantidades iniciais controladas de munição.
- Cria nome e sobrenome, background, créditos e eventuais vícios/compulsões.
- O Narrador pode escolher o modo de vício: **aleatório quando couber**, **nenhum** ou **seleção específica**.
- O macro já existente **CLANDESTINO | Gerar personagem** recebe a atualização, desde que ainda contenha o comando oficial do sistema.

### Vícios e compulsões
- Novo catálogo com **32 opções narrativas**, agrupadas em Químicos, Compulsões, Comportamentais, Tecnológicos e Contaminação.
- Personagens das Trilhas **Viciado** e **Hospedeiro** recebem prioridade temática nos resultados automáticos.
- Não há penalidades mecânicas automáticas adicionais: as consequências são definidas pelo Narrador.

### Compêndio de personagens prontos
- Novo compêndio **CLANDESTINO | Personagens Prontos — 24 Fichas**, instalado na pasta **CLANDESTINO — Compêndios**.
- Inclui **dois personagens por Trilha**, contemplando todas as 12 Trilhas existentes.
- Todas as fichas possuem nome e sobrenome, Origem, Caminho, Trilha, atributos, perícias, PV, BPM, créditos, background, vício quando aplicável e inventário com itens reais do sistema.
- As fichas são templates editáveis e podem ser importadas para o Mundo.
- O compêndio é criado sem apagar personagens já importados ou alterados pelo Narrador.

## Atualização
1. Envie os arquivos de `Repositorio/` para o repositório `tulioscost/clandestino-rpg-foundry`.
2. Crie a tag e Release **v0.6.26**.
3. Anexe `Release/system.json` e `Release/clandestino-rpg-foundry.zip`.
4. No Foundry, atualize o sistema e abra um Mundo de teste.

**Verificações realizadas:** sintaxe JavaScript, JSON válido, 24 fichas/12 Trilhas, distribuição correta de pontos, carga máxima e integridade dos ZIPs. **A integração funcional ainda precisa ser validada no Foundry V14.368.**
