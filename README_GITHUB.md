> v0.6.25: gerador de personagens agora inclui kit inicial, créditos e vícios/compulsões quando couber; ameaças do compêndio receberam retratos individuais.

> v0.4.3: descrições individuais de 96 registros do compêndio de itens e armas.

> Atualização 0.4.2: compêndio de itens e armas agora inclui ícones únicos em silhueta.

# Instalação via GitHub — CLANDESTINO Foundry VTT

1. Crie um repositório **público** chamado `clandestino-rpg-foundry` no GitHub.
2. Envie o **conteúdo desta pasta**, não a pasta dentro de outra pasta, para a raiz do repositório.
3. Em `Settings > Actions > General > Workflow permissions`, habilite `Read and write permissions`, caso necessário.
4. Crie a tag `v0.1.1` e envie-a ao GitHub (por terminal: `git tag v0.1.1 && git push origin v0.1.1`).
5. Aguarde a ação `Publicar sistema Foundry` concluir. A Release deve conter `system.json` e `clandestino-rpg-foundry.zip`.
6. Em Foundry V13, `Game Systems > Install System > Manifest URL`, cole:
   `https://github.com/tulioscost/clandestino-rpg-foundry/releases/latest/download/system.json`
   Substitua `tulioscost` pelo perfil ou organização real do repositório.
7. Instale e crie um mundo de teste.

O `system.json` da raiz contém URLs-exemplo, mas a automação gera a versão real para cada Release a partir do nome do repositório. **Nunca instale a partir das URLs-exemplo da raiz.**

Para publicar atualizações: altere a versão no `system.json` da raiz e publique nova tag como `v0.2.0`. A URL do manifesto continua estável.

**Compatibilidade**: estrutura preparada para Foundry V13; não foi testada em instalação real.


## v0.6.2
- Capa do sistema integrada ao pacote.
- Compêndio de talentos preenchido com entradas de referência de todas as Trilhas e patamares.


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
