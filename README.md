# CLANDESTINO para Foundry VTT — v0.6.51

**Alvo: Foundry VTT V14.369.** Mínimo declarado: V14. Testes funcionais em servidor 14.369 permanecem pendentes.

Para atualizar: faça backup de seus Mundos; instale o Foundry 14.369 e atualize o sistema pela Release `v0.6.51`.

## v0.6.36
24 novos equipamentos técnicos e compêndio separado de drogas e medicações.

> v0.6.30: criador de tokens neon (4 cores), recorte de retrato e edição via VTTA Tokenizer. Consulte GUIA_TOKENIZER.md.

> v0.6.25: gerador de personagens agora inclui kit inicial, créditos e vícios/compulsões quando couber; ameaças do compêndio receberam retratos individuais.

> v0.4.3: descrições individuais de 96 registros do compêndio de itens e armas.

> Atualização 0.4.2: compêndio de itens e armas agora inclui ícones únicos em silhueta.

# CLANDESTINO para Foundry VTT — protótipo 0.1.1

## Instalação local

1. Descompacte a pasta `clandestino-rpg-foundry` em `FoundryVTT/Data/systems/` (a pasta deve conter `system.json`).
2. Reinicie o Foundry VTT.
3. Crie um Mundo e selecione o sistema **CLANDESTINO — Horror Espacial**.
4. Crie Atores dos tipos `personagem`, `clandestino`, `lar` ou `ultraSentinela`.

**Alvo de API:** Foundry VTT 13. Esta versão não foi executada no aplicativo Foundry; valide em um mundo de teste antes de usar numa campanha real. Não há URL pública de manifesto.

## Funcionalidades

- Nove atributos oficiais; fichas e campos editáveis;
- Rolagens `Nd6`: sucessos em 5/6; resultado 6 gera Ímpeto, utilizável apenas após sucesso;
- Limite de 6 dados; dificuldades de 1 a 3;
- BPM automático por faixas; lembrete de teste em crise; botões +10 / −10;
- PV, Proteção, dano fixo, ataques com FOR/AGI;
- Lar com Atmosfera, Energia, Estrutura e Comunicação (0–4);
- Ficha Ultra Sentinela com Sincronia e bateria, como regra especial do suplemento;
- Atores de ameaça com ataque configurável, pistas, contramedidas e relógio;
- Itens de arma, armadura, equipamento, talento e nota.

## Regras automatizadas vs. decisões do Narrador

| Sistema | Automação |
|---|---|
| Pool de dados e Ímpetos | Automático |
| Penalidade BPM | Opcional no teste; o operador decide se a ação é 'sob pressão' |
| Dano de ataques | Base automático, conversão do Ímpeto e alvo dependem do Narrador |
| Ferimentos críticos, crise e morte | Alerta e resolução manual |
| Talentos e 12 Trilhas | Registrados como itens; ativação manual |
| Contaminação, relógios e recursos | Gerenciados na ficha |
| Sincronia Ultra Sentinela | Teste e +10 BPM após falha; demais consequências manuais |

## Dados e terminologia

Base editorial: CLANDESTINO 4.6, regras de 5/6, limite seis dados, BPM e Lar; suplemento Carne e Aço para US. Não inclui reproduções integrais das páginas, das artes ou da fonte comercial para redistribuição. Adicione seus próprios recursos visuais no Foundry.

## Observações e limitações

- O tipo de ator `clandestino` não pré-cadastra as 12 fichas canônicas porque seus dados completos demandam conferência individual; os campos ficam disponíveis para cadastro.
- O pacote experimental ainda não inclui compêndios, mapas de aventura, efeitos automáticos de todos os talentos ou integração com sistemas de iluminação/fog.
- O valor inicial de PV é definido por ficha de criação; confira `PV = ROB × 3` ao editar ROB. O valor de BPM inicial é `max(50, 70 - 5 × FIB)` e deve ser ajustado na criação.
- Para publicar em repositório e instalar via URL, hospede o `system.json` e um ZIP em endereço permanente e preencha `manifest`/`download` no JSON.


## v0.6.2
- Integra imagem de capa oficial do sistema para exibição no Foundry.
- Expande o compêndio **Talentos — Referência** para incluir talentos iniciais e talentos por patamar das 12 Trilhas.


## v0.6.9
- Talentos e Condições em dropdown na ficha.
- Talentos limitados pela Trilha selecionada.
- Overlay de pausa traduzido para `JOGO PARADO` com símbolo pulsante personalizado.


## v0.6.11
- Revisão de nomes em compêndios e livro digital. Migração segura das Trilhas e Talentos existentes.

## Módulos necessários

Este sistema requer os módulos abaixo ativados no Foundry VTT:

- Dice Tray (`dice-calculator`)
- Dice So Nice! (`dice-so-nice`)
- Chat Commands (`_chatcommands`)
- Global Progress Clocks (`global-progress-clocks`)

### Integração do dado CLANDESTINO

Quando o módulo **Dice So Nice!** estiver ativo, o sistema registra automaticamente um preset de **d6** chamado **CLANDESTINO — Neon**, permitindo ao usuário selecioná-lo nas configurações do próprio Dice So Nice. O lado **6** utiliza o símbolo triangular oficial do sistema.



## v0.6.12
Ajustes de legibilidade e responsividade; o dado CLANDESTINO é opcional nas preferências do Dice So Nice, sem alteração forçada das escolhas individuais.
