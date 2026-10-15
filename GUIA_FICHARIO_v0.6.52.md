# CLANDESTINO — Fichário (v0.6.52)

## Funcionamento

- As fichas dos atores do tipo Tripulante, Ultra Sentinela ou NPC possuem alternância **CLÁSSICO / FICHÁRIO** no cabeçalho.
- A escolha é uma configuração **client**, por navegador/usuário, e não altera o banco de dados do ator.
- O Fichário preserva os campos e manipuladores de eventos existentes da ficha clássica.
- Abas: Identidade, Atributos, Perícias, Inventário, Equipamentos, Rádio, Status/BPM.
- Equipamentos lista, a partir dos itens reais do ator, os objetos do tipo arma, armadura e equipamento, com botões de uso/editar/equipar/recarregar.
- A aba Rádio abre o rádio privado persistente já presente no painel da Data Terrestre, para evitar duplicar mensagens e estado.
- Os valores de atributo, perícia, RD, BPM e PV não mudaram.
- O design de botões e bordas usa CSS interativo, inspirado na imagem aprovada, que foi incluída em `docs/` como referência visual. **A imagem não é utilizada como interface rasterizada**, pois botões, textos e campos precisam funcionar, adaptar-se a tamanhos diferentes e ser acessíveis.

## Instalação

Use a Release completa; não substitua arquivos isolados. Atualize `system.json`, templates, JS e CSS e recarregue o navegador (Ctrl+F5). Não é necessária migração de atores.

## Testes no Foundry 14.369

1. Abrir uma ficha de tripulante e confirmar o modo Clássico.
2. Clicar em Fichário e verificar sete abas com realce colorido.
3. Alternar de aba, alterar atributo e perícia, verificar persistência.
4. Equipar/retirar armadura na aba Equipamentos e confirmar a RD; repetir em Inventário.
5. Verificar rolagens de itens e ataques e o teto de 10d6.
6. Abrir Rádio e confirmar o painel do canto inferior esquerdo.
7. Ajustar BPM para 121 e confirmar animação cardíaca, retornar a 120.
8. Fechar/reabrir a ficha e verificar que a preferência visual persiste.
9. Testar tema claro/escuro, janela estreita e permissões de jogador/narrador.
10. Verificar as demais fichas de Ameaça e Lar em modo clássico.

## Limitações

- Testes executados foram estáticos (sintaxe e empacotamento). A interface requer validação funcional no Foundry VTT 14.369.
- A preferência visual é por cliente, não por ator, e permanece local ao navegador/usuário.
- A aba Rádio aponta ao widget global, em vez de criar um segundo rádio independente.
