# CLANDESTINO — Foundry VTT v0.6.32

## Organização de atores, lore corporativa e interface de tensão

Esta versão amplia o sistema para apoiar campanhas de horror espacial prolongadas.

### Fichas, pastas e personagens
- Pastas automáticas de Atores: **JOGADORES**, **NPCS**, **LARES** e **AMEAÇAS**. Atores novos são classificados pelo tipo. Atores existentes sem pasta também são classificados; pastas já escolhidas pelo Narrador são preservadas.
- Novo tipo de ator **NPC**, com ficha baseada no modelo de personagem.
- Moldura do retrato ampliada por um **monitor cardiométrico**: ações rápidas, marcador de BPM e coração que pulsa conforme o BPM quando estiver acima de 120. Não altera as mecânicas.

### Conteúdo de ambientação
- Compêndio **IAs de Bordo — 20 Perfis**, com personalidade, origem tecnológica e ganchos narrativos.
- Compêndio **Megacorporações — Dossiês (10)**, distinguindo explicitamente as referências já encontradas de propostas de expansão. **Não foram verificadas dez corporações canônicas no material disponível**.
- Compêndio **Subsidiárias — Referência** e macro **Gerar subsidiária**: corporação-mãe, especialização, sede, histórico e segredo, gravados em Journal.
- Macro **Gerar Lar** com História Pregressa automática e Journal contendo fundação, expansão, crise e situação atual.
- Macro **História Pregressa do Lar** para adicionar o mesmo tipo de histórico aos Lares existentes.

### Campanha e eventos
- Compêndio de Journals **Silêncio Absoluto — 16 Sessões**, com estruturas de investigação, desafios, NPCs e ganchos. Os capítulos posteriores à Sessão 01 são **roteiros de planejamento**, não aventuras completas finalizadas.
- Compêndio **Mapas Prontos — VÉSPERA-9 S01** com três cenas-base, fundos, perímetro, porta e luzes editáveis. Devem ser revisadas no Foundry antes de usar: obstáculos internos e posicionamento de ameaças dependem da geometria final.
- Compêndio **Eventos e Pistas** com 20 gatilhos de calendário, recursos do Lar ou relógios narrativos. Alertas ao Narrador em alterações, sem aplicação automática de penalidades ou danos.

### Relógio do Apocalipse
- Novo campo de **mensagem final da IA**, configurável pelo Narrador antes do início; transmitida no chat uma vez ao atingir zero.

### Dependências
- Adicionado **VTTA Tokenizer** (`vtta-tokenizer`) como módulo exigido, além das dependências anteriores.

### Limitações e verificação
- Não sobrescreve compêndios de lore editados pelo Narrador.
- Os mapas são preparações técnicas, não substituem a inspeção de portas/iluminação na mesa.
- A sintaxe JS, os arquivos JSON e os ZIPs foram verificados; testes de integração no Foundry V14.368 ainda são necessários.
