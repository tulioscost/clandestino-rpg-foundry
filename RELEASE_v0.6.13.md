# CLANDESTINO v0.6.13 — Correção da integração Dice So Nice

Atualização corretiva focada no d6 personalizado do sistema.

## Corrigido
- Integração do dado **CLANDESTINO — Neon** revisada para o módulo **Dice So Nice**.
- Faces do d6 refeitas a partir das **6 faces individuais** fornecidas, agora em **PNG com fundo transparente**.
- Preset continua **opcional**: o sistema registra o dado somente quando o módulo **Dice So Nice** estiver ativo, sem sobrescrever automaticamente a aparência escolhida pelo usuário.
- Assets do dado reorganizados em `assets/dice/`, prontos para seleção manual dentro do Dice So Nice.

## Comportamento esperado
Com o módulo **Dice So Nice** ativo, o usuário poderá escolher o preset visual **CLANDESTINO — Neon** para o **d6** nas configurações do módulo.

## Dependências obrigatórias
- Dice Tray
- Dice So Nice
- Chat Commands
- Global Progress Clocks

## Instalação
Publique a tag `v0.6.13` e anexe `system.json` e `clandestino-rpg-foundry.zip` na release do GitHub.
Manifesto:
https://github.com/tulioscost/clandestino-rpg-foundry/releases/latest/download/system.json

**Validação:** estrutura do pacote revisada e assets do d6 preparados em transparência; teste final no Foundry com Dice So Nice ativo continua recomendado.
