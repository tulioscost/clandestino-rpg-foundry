# CLANDESTINO — Protocolo: Silêncio Absoluto | Sessão 01

Módulo de aventura opcional, separado do sistema **clandestino-rpg-foundry**. Versão 1.0.0.

## Conteúdo
- Três cenas com mapas sem legendas: Hangar A-3, Sala de Controle A-3C e Guarita A-3G.
- Grades de 1m, iluminação inicial, paredes externas e portas simples (editáveis no Foundry).
- Cinco entradas de diário: guia e pistas, briefing, manifestos, Salvat e VIGÍLIA.
- Macro **CLANDESTINO | Importar Sessão 01**, criada para o Narrador ao iniciar um Mundo.

## Instalação manual
1. Extraia `clandestino-silencio-absoluto.zip` na pasta `FoundryVTT/Data/modules/`.
2. A estrutura correta é `Data/modules/clandestino-silencio-absoluto/module.json`.
3. Reinicie o Foundry, habilite o módulo no Mundo CLANDESTINO e execute a macro **CLANDESTINO | Importar Sessão 01**.
4. **Não execute a importação duas vezes**, salvo se quiser duplicar os documentos.
5. Revise permissões dos Journals, geometria das paredes, posição das portas, luzes e escala dos mapas. Ative manualmente a cena inicial.

## Limitações conhecidas
- Os mapas são **plantas estilizadas geradas especificamente para esta preparação**, não desenhos arquitetônicos idênticos à prancha ilustrativa da etapa anterior.
- Há paredes de perímetro e portas de entrada, não paredes exaustivas de obstáculos internos, vidro ou todas as salas de suporte. O Narrador deve acrescentá-las com a ferramenta de paredes.
- O módulo gera *scenes* e *journal entries*, mas não automatiza descobertas, gatilhos de aproximação, trilha sonora ou sincronização de cenas entre os personagens.
- O manifesto final exige substituir o placeholder pelo nome do personagem escolhido.
- O importador foi validado por sintaxe, JSON e integridade do ZIP, mas **não foi executado em um servidor Foundry V14.368**.

## Compatibilidade
O manifesto declara Foundry v13 ou superior e marca a v14 como versão-alvo. Não distribui o sistema-base nem o Foundry.
