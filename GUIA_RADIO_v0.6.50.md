# Rádio portátil — CLANDESTINO v0.6.50

O rádio faz parte do equipamento padrão de todos os personagens e participantes, dispensando item específico no inventário.

## Painel

- Acesso: canto inferior esquerdo, acima de DATA TERRESTRE.
- A qualidade do sinal fica visível para jogadores e Narrador, mesmo com o formulário do rádio recolhido.
- O Narrador, e somente ele, vê o controle `SINAL GLOBAL // NARRADOR`.
- O regulador altera `game.settings` com escopo `world`; clientes conectados recebem a atualização.
- Faixas: 0–24 sem sinal; 25–49 ruim; 50–69 instável; 70–84 bom; 85–100 excelente.
- O bloqueio ocorre abaixo de 50%. O texto não é descartado e nenhum som de transmissão é reproduzido quando a mensagem é bloqueada.

## Envio

O jogador seleciona um usuário conectado no dropdown e digita a mensagem. O botão TX cria uma `ChatMessage` com `whisper` somente para o remetente e o destinatário; nenhuma mensagem pública é criada por esse fluxo. O emissor ouve o efeito de conexão após envio, e o destinatário recebe aviso e painel de rádio.

## Limitações técnicas

A intensidade é única para o Mundo; não calcula distância entre tokens, relevo ou obstáculos. A restrição cobre o rádio implementado pelo sistema e mensagens marcadas com sua flag. Não restringe chat comum nem a comunicação de outros módulos. A consistência do estado em multicliente depende da sincronização normal de `game.settings` do Foundry V14. Testar em Mundo de homologação antes de usar em sessão.
