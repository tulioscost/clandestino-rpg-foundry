# CLANDESTINO Foundry v0.3.0 — Arsenal e Logística

**Novos dados propostos para esta expansão digital:** 20 armas, 6 armaduras, 25 consumíveis e 10 categorias de munição. Os nomes, capacidades de carregador, dano e Carga dos novos equipamentos são sugestões de jogo, não afirmações de que constem originalmente no livro.

**Regra canônica do livro:** Carga 0 (bolso), 1 (mão/cinto), 2 (volumoso); até 4 sem penalidade; 5–6 ocasiona −1 dado em deslocamento exigente. O bloqueio automático acima de 6 foi aplicado apenas como aviso visual, não impossibilita edição.

**Uso:** Importar armas e munições do compêndio para o Ator (arrastar); a arma já vem carregada, e a munição reserva é rastreada pelo tipo. Botão Ataque subtrai o custo por disparo mesmo ao errar; botão Recarregar transfere munição do inventário. Botão Usar 1 consome uma unidade; Vestir/Retirar seleciona proteção.

**Importante:** o compêndio do Mundo ganha apenas itens com nomes inéditos, sem sobrepor os registros antigos. A carga de itens antigos ainda utiliza `weight` como carga. Munição em quantidade representa unidades individuais, de modo que A Carga da munição é calculada proporcionalmente às unidades restantes (peso de cada projétil = Carga da embalagem / número inicial de unidades). Valores fracionários podem aparecer, e a carga do carregador já está incluída na arma para evitar dupla contagem.

**Publicação:** envie os arquivos à raiz do repositório, crie Release `v0.3.0`, anexe `system.json` e `clandestino-rpg-foundry.zip` da pasta Release. Faça backup do Mundo antes de atualizar.
