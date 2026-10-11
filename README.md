# CLANDESTINO para Foundry VTT — protótipo 0.1.0

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
