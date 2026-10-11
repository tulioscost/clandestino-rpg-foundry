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
