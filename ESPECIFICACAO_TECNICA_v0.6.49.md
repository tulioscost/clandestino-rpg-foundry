# CLANDESTINO — Especificação técnica v0.6.49

## Base e compatibilidade
- Código-base: v0.6.48 corrigida; Foundry VTT 14.368 (teste em instância real pendente).
- Distribuição: sistema `clandestino-rpg-foundry`, não módulo separado. Versão `0.6.49` em `system.json`.
- Não substitui configurações de calendário, áudio do apocalipse ou regras de combate anteriores.
- Não distribui arquivos de fonte; usa Orbitron disponível por importação CSS com fallback.

## Rádio privado
- Novo `module/radio.mjs`, iniciado por `setupClanRadio()` em `module/system.mjs`.
- Painel `<details>` inserido por código **acima do relógio/Data Terrestre**, abaixo da tripulação online; seleção com `game.users.filter(u=>u.active...)` e nome de personagem associado.
- Mensagens enviadas via **`ChatMessage.create({whisper:[senderId,recipientId]})`**, que é o mecanismo de privacidade nativo do Foundry. Nenhum corpo da mensagem vai por broadcast/socket público.
- `ChatMessage.flags['clandestino-rpg-foundry'].radio` permite gerar pop-up RX apenas no cliente autorizado. Mensagens de outros usuários não são mostradas no painel.
- TX: áudio do anexo convertido para `assets/radio-connect.ogg`, disparado localmente quando se clica em Transmitir (antes do await de rede).
- RX: toast e pop-up no estilo de rádio portátil escuro/âmbar/ciano; histórico limitado a cinco transmissões privadas disponíveis no cliente atual.
- Entradas escapadas por `foundry.utils.escapeHTML` para evitar execução de HTML enviado como texto.
- Sem envio em massa; GM não é incluído automaticamente nas conversas entre dois jogadores (privacidade estrita). Cada jogador só escolhe usuários conectados.
- **Importante:** whisper é privado para destinatários dentro do Foundry, mas não fornece criptografia ponta a ponta. Administração do servidor, backups e logs externos estão fora do controle do sistema.

## Substâncias e Resistência
- Novos `module/substances.mjs`, `data/substancias-jogo.json`, `data/abuso-3d6.json`.
- Origem dos nomes/descrições: os 20 verbetes existentes em `data/substancias.json` da v0.6.48, que permanecem sem alterações.
- **Parâmetros novos de playtest:** gravidade 1–4; dificuldade de 1–4 sucessos; limite de 1 ou 2 usos por cena; consequências narrativas.
- Reserva = ROB + `skills.ROB_0` (Resistência) + `temporaryAttributes.ROB`; máximo 10d6; sucesso em 5/6 por dado. No caso de Bioprojetado que tenha ROB penalizada, o `rollPool` aplica +1 na dificuldade.
- Uso: o botão `Usar 1` ou `🎲 Usar` chama `useClanSubstance` quando `system.substance.isSubstance===true`; mostra confirmação e descrição do efeito, realiza o teste, decrementa uma unidade e salva contador no flag do ator.
- Limite por cena: contador `flags.clandestino-rpg-foundry.substanceUses[sceneId][itemId]`; se excedido, ocorre teste normal mais rolagem automática `3d6` na tabela de abuso, independentemente do êxito no teste.
- Troca de cena reinicia efetivamente a contagem; retorno à mesma cena preserva o contador anterior. `game.clandestinoSubstances.resetScene(actor)` limpa manualmente os limites do personagem. Um Narrador deve definir cenas narrativas independentemente de mudanças puramente cartográficas.
- Registros clínicos simples sem risco psicoativo relevante mantêm uso narrativo comum, sem obrigatoriedade de Resistência, mas podem ser configurados no editor para testes quando a história exigir.
- Efeitos e condições de falha são **informativos/narrativos**, exibidos no chat; não aplicam automaticamente danos reais, cura ou efeitos farmacológicos. O Narrador decide efeitos não parametrizados.

## Compêndios
- Novo pack de Mundo `CLANDESTINO | 06A — Substâncias Jogáveis (Resistência)` com 20 registros do tipo `Item/consumivel`.
- Novo pack de Mundo `CLANDESTINO | 07 — Abuso de Substâncias (3d6)` do tipo `RollTable` com 16 resultados `type:'text'`, intervalos 3..18 e fórmula `3d6`.
- Pasta existente `CLANDESTINO — 06 Drogas e Medicações` reaproveitada. Criação não destrutiva por nome: evita duplicação de verbetes, preserva personalizações antigas.
- Para usar: abrir pack `06A`, importar um Item à ficha de personagem e clicar `Usar 1` no inventário.
- Parâmetros de substância editáveis pela ficha do Item (`substance.severity`, `difficulty`, `limit`, etc.).

## Testes de aceitação
1. Jogador A transmite para B; A e B veem a mensagem e C não a recebe. O som toca apenas em A.
2. Mensagem especial (`<script>`) aparece escapada, sem execução de código.
3. Narrador aparece na lista como destinatário, sem acesso forçado ao canal A→B.
4. Jogador offline não aparece na lista; entrar/sair atualiza dropdown.
5. Substância grau 3 gera dificuldade 3; ROB + graduação + temporário respeita teto 10d6.
6. Primeiro uso dentro de limite: rolagem de Resistência, decremento de uma unidade, sem tabela.
7. Primeiro uso acima de limite: Resistência + 3d6 automático, marca resultado no chat.
8. Item esgotado não consome mais nem registra uso.
9. Dois personagens não compartilham os contadores de abuso.
10. Confirmar importação de `RollTable` no Foundry 14 e compatibilidade com dados existentes.

## Verificações executadas fora do Foundry
- Validação de JSON, JavaScript (`node --check`) e ZIP.
- Teste unitário com simulação Foundry: 20 substâncias, 16 resultados de tabela, reserva 10d6, contador, excesso com 3d6 e reset.
- **Pendente:** teste end-to-end no Foundry V14.368, permissões e sincronização multiusuário, especialmente som e privacidade em clientes remotos.
