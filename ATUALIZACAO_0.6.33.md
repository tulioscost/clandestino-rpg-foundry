# CLANDESTINO — Foundry VTT v0.6.33

## Correção de layout da ficha de ator

Esta versão reorganiza o cabeçalho da ficha de personagens para se aproximar do layout de referência enviado no playtest.

### Alterações
- O retrato permanece na **coluna esquerda** e conserva o monitor retrofuturista e a ação **Alterar imagem**.
- O painel **BIO // SENSOR** passa a ocupar exclusivamente o **topo da coluna direita**.
- **Criar token**, **Editar no Tokenizer**, **Origem**, distribuição de pontos e **Nome do personagem / ator** aparecem diretamente **abaixo do sensor**, sem o grande espaço vazio observado antes.
- A disposição adapta-se à largura da ficha, com reorganização em uma coluna em janelas estreitas.
- Foram preservados o alerta cardíaco para **BPM > 120**, o Tokenizer, a origem Bioprojetado/Humano e as demais funcionalidades.

### Compatibilidade
- Foundry VTT 14.368 (alvo do sistema).
- Mantidas as dependências e os demais arquivos da versão v0.6.32.

### Testes recomendados
- Abrir a ficha em tamanhos grande, médio e estreito.
- Confirmar os botões **Criar token** e **Editar no Tokenizer**.
- Alterar BPM acima/abaixo de 120 e verificar o indicador cardíaco.
- Verificar os campos de Origem e Nome nas duas aparências (claro/escuro).

> Verificado: manifesto e integridade dos pacotes. Validação visual diretamente no Foundry ainda pendente.
