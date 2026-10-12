/** CLANDESTINO — Sessão 01. Importador sob comando do Narrador; não cria nada automaticamente. */
const ID = "clandestino-silencio-absoluto";
const prefix = `modules/${ID}/assets/maps/`;
const MODULE_FLAG = "importedAdventure";
const key = "S01-VESPERA-9";
const esc = s => foundry.utils.escapeHTML(String(s ?? ""));
function page(name, body, secret=false) {
  return {name, type:"text", text:{format:1,content:`<article><h2>${esc(name)}</h2>${body}</article>`},ownership:{default:secret?0:2}};
}
const journalSpec = [
  {name:"S01 | Guia do Narrador", secret:true, pages:[
    page("Plano da Sessão 01",`<p><b>4–5 horas; cinco jogadores.</b> Início: 17/08/2184 às 03:42 RT (data de campanha ajustável). Recursos do Lar: Atmosfera 3/4, Energia 2/4, Estrutura 3/4, Comunicação 1/4.</p><p>Sequência flexível: aproximação, hangar, conversa com VIGÍLIA, redistribuição de energia, investigação da guarita e quarentena. Não revelar o Projeto CONTINUIDADE nesta sessão.</p><p><b>Revelação:</b> registros da estação contêm uma identidade extra. O vídeo falha por 11 segundos. No fim, o nome de um personagem surge duplicado.</p>`,true),
    page("Pistas e alternativas",`<p><b>Hangar:</b> manifesto com MARCO-06, sexto registro de ocupação, sombra na câmera norte. As três pistas são independentes, sem travar acesso atrás de testes.</p><p><b>Controle:</b> C01 Atracação; C02 Segurança; C03 Energia; C04 VIGÍLIA. Escolha entre elevador, diagnóstico ou iluminação. Escadas continuam disponíveis.</p><p><b>Guarita:</b> Salvat desapareceu às 23:12, foi registrado em serviço às 23:14; rádio guarda gravação anômala.</p><p><b>Saídas:</b> protocolos de comando, bypass mecânico ou rotas alternativas exigem recursos e tempo. Não permitir que uma única porta bloqueie a sessão.</p>`,true)
  ]},
  {name:"S01 | Briefing de Missão", secret:false, pages:[
    page("Contrato — operação VÉSPERA-9",`<p><b>Operação de reconhecimento e manutenção.</b> Equipe: cinco profissionais a bordo da nave de serviço Andorinha. Objetivos: verificar sistemas de suporte, restabelecer comunicações, recuperar registros operacionais. Permanência prevista: 18 horas.</p><p>Uma transmissão autenticada registrou tripulação completa e encerrou com a instrução: <em>“NÃO ENVIEM RESGATE.”</em></p>`)
  ]},
  {name:"S01 | Manifestos", secret:true, pages:[
    page("Manifesto inicial — cinco passageiros",`<p>Computador da Andorinha: <b>cinco passageiros</b>, conforme personagens da mesa. Preencher nomes reais antes de compartilhar.</p>`,true),
    page("Registro da estação — seis entradas",`<p>VÉSPERA-9: <b>IDENTIDADES REGISTRADAS: 06</b>. Entrada extra: <b>MARCO-06</b>. Sem sobrenome, função ou credencial válida.</p>`,true),
    page("Manifesto revisado — final da sessão",`<p>A entrada extra foi substituída pelo <b>nome completo de um dos protagonistas</b>, que agora aparece duas vezes. O Narrador deve escolher o nome de acordo com as decisões do grupo.</p>`,true)
  ]},
  {name:"S01 | Registros de Henrique Salvat",secret:true,pages:[
    page("Relatório de turno A-3",`<p><b>16/08/2184 — HENRIQUE SALVAT</b></p><p>22:10 — Verificação das comportas.<br>22:37 — Ruídos em shafts de serviço.<br>22:42 — Solicitada inspeção.<br>23:08 — Ordem cancelada pelo sistema.<br>23:12 — Operador ausente da guarita.<br>23:14 — Operador registrado em serviço.</p><p><i>“Eu não cancelei o pedido.”</i></p>`,true),
    page("Áudio transcrito — guarita",`<p><b>SALVAT:</b> Controle, existe alguém dentro da parede.<br><b>VOZ:</b> A manutenção não foi concluída.<br><b>SALVAT:</b> Quem está falando?<br><b>VOZ:</b> Você.<br>[INTERFERÊNCIA] [FIM]</p>`,true)
  ]},
  {name:"S01 | Terminal VIGÍLIA",secret:true,pages:[
    page("Primeiro contato",`<p><code>IDENTIDADES AUTORIZADAS: 05<br>IDENTIDADES REGISTRADAS: 06<br>DIVERGÊNCIA ADMINISTRATIVA<br>RECOMENDAÇÃO: CONTINUAR OPERAÇÕES PREVISTAS.</code></p>`,true),
    page("Respostas padrão",`<p><b>Quem é o sexto?</b> “Identidade em reconciliação de registros.”<br><b>Onde está a tripulação?</b> “A tripulação permanece vinculada às funções designadas.”<br><b>Podemos partir?</b> “A partida está temporariamente suspensa por quarentena administrativa.”<br><b>Há perigo?</b> “Nenhum incidente de segurança foi confirmado.”</p>`,true),
    page("Alerta de quarentena",`<p><code>ATRACAÇÃO A-3 BLOQUEADA<br>INCONSISTÊNCIA BIOMÉTRICA<br>INDIVÍDUOS AUTORIZADOS: 05<br>INDIVÍDUOS IDENTIFICADOS: 06<br>LIBERAÇÃO AUTOMÁTICA NEGADA</code></p>`,true)
  ]}
];
function wall(x1,y1,x2,y2,door=0){return {c:[x1,y1,x2,y2],move:door?0:20,sense:door?0:20,sound:door?0:20,door,ds:door?0:undefined};}
function perimeter(w,h,doors){
  const walls=[];
  const sides=[[[0,0],[w,0]],[[w,0],[w,h]],[[w,h],[0,h]],[[0,h],[0,0]]];
  for(let k=0;k<4;k++){
    const [a,b]=sides[k];const d=doors.find(d=>d.side===k);
    if(!d){walls.push(wall(...a,...b));continue;}
    const isHorizontal=k%2===0;const start=isHorizontal?a[0]:a[1];const end=isHorizontal?b[0]:b[1];
    const low=d.center-d.width/2, high=d.center+d.width/2;
    const coords = (t)=> isHorizontal ? [t,a[1]] : [a[0],t];
    const forward=start<end;const b1=forward?low:high,b2=forward?high:low;
    walls.push(wall(...a,...coords(b1)));
    walls.push(wall(...coords(b1),...coords(b2),1));
    walls.push(wall(...coords(b2),...b));
  }
  return walls;
}
const R=72;
function px(n){return n*R;}
function light(x,y,bright=5,dim=9,color="#d95738"){
 return {x:px(x),y:px(y),rotation:0,config:{alpha:0.35,angle:360,bright:px(bright),dim:px(dim),color,contrast:0.1,luminosity:0.15,saturation:0.15}};
}
const scenes=[
 {name:"S01 • Hangar A-3",file:"hangar-a3.webp",W:42,H:30,doors:[{side:2,center:px(21),width:px(3)},{side:3,center:px(25),width:px(2)}],lights:[[4,3],[38,3],[4,26],[38,26]], notes:"Andorinha central; acesso à Sala de Controle e Guarita por corredores superiores. Portas internas e objetos elevados precisam ser revisados em mesa."},
 {name:"S01 • Sala de Controle A-3C",file:"sala-controle-a3c.webp",W:12,H:8,doors:[{side:2,center:px(6),width:px(2)}],lights:[[2,2],[10,2]],notes:"C01 atracação; C02 segurança; C03 energia; C04 VIGÍLIA. A porta inferior comunica com Hangar A-3."},
 {name:"S01 • Guarita A-3G",file:"guarita-a3g.webp",W:8,H:6,doors:[{side:2,center:px(4),width:px(2)}],lights:[[3,3]],notes:"G01 mesa; G02 rádio; G03 armário; G04 terminal; G05 câmera. A porta inferior comunica com Hangar A-3."}
];
function sceneData(s){const W=px(s.W),H=px(s.H);return {
 name:s.name,background:{src:prefix+s.file},width:W,height:H,padding:0.10,grid:{type:1,size:R,distance:1,units:"m"},
 walls:perimeter(W,H,s.doors),lights:s.lights.map(([x,y])=>light(x,y,3,7)),
 navigation:true,active:false,notes:[],flags:{[ID]:{[MODULE_FLAG]:key}},
 description:s.notes
};}
/** Recupera fundos das cenas importadas anteriormente, sem duplicar documentos. */
async function repairSceneBackgrounds(){
 if(!game.user.isGM){ui.notifications.warn("Somente o Narrador pode reparar cenas.");return;}
 const report=[];
 for(const spec of scenes){
   const target=`${prefix}${spec.file}`;
   // Imagens devem ser acessíveis pelo próprio servidor Foundry, não por um caminho local.
   let available=false;
   try{
     const res=await fetch(target,{method:"GET",cache:"no-store"});
     available=res.ok && (res.headers.get("content-type")||"").toLowerCase().includes("image");
     if(res.ok && !available) available=(await res.blob()).type.startsWith("image/");
   }catch(err){console.warn("CLANDESTINO | Falha ao consultar imagem",target,err);}
   if(!available){
     report.push(`${spec.name}: imagem indisponível (${target}). Confira a pasta assets/maps do módulo.`);
     continue;
   }
   const matching=game.scenes.filter(scene=>scene.name===spec.name || scene.getFlag(ID,MODULE_FLAG)===key && scene.name.includes(spec.name.slice(5)));
   if(!matching.length){report.push(`${spec.name}: cena ainda não importada.`);continue;}
   for(const scene of matching){
     try{
       await scene.update({"background.src":target,width:px(spec.W),height:px(spec.H),"grid.size":R});
       report.push(`${scene.name}: fundo restaurado.`);
     }catch(err){console.error("CLANDESTINO | Não foi possível restaurar fundo",scene.name,err);report.push(`${scene.name}: erro ao atualizar a cena.`);}
   }
 }
 new Dialog({title:"CLANDESTINO | Diagnóstico das imagens",content:`<div style="max-height:360px;overflow:auto"><p>${report.map(line=>esc(line)).join("</p><p>")}</p></div>`,buttons:{ok:{label:"Fechar"}}}).render(true);
}
async function importAdventure(){
 if(!game.user.isGM){ui.notifications.warn("Somente o Narrador pode importar a aventura.");return;}
 const already=game.scenes.some(s=>s.getFlag(ID,MODULE_FLAG)===key)||game.journal.some(j=>j.getFlag(ID,MODULE_FLAG)===key);
 if(already){
   const yes=await Dialog.confirm({title:"CLANDESTINO — Importação anterior",content:"<p>Há registros desta aventura no Mundo. Uma nova importação criará cópias. Continuar?</p>"});
   if(!yes)return;
 }
 let folder=game.folders.find(f=>f.name==="CLANDESTINO | Silêncio Absoluto — Sessão 01"&&f.type==="Scene");
 if(!folder)folder=await Folder.create({name:"CLANDESTINO | Silêncio Absoluto — Sessão 01",type:"Scene"});
 let journalFolder=game.folders.find(f=>f.name==="CLANDESTINO | S01 — Registros"&&f.type==="JournalEntry");
 if(!journalFolder)journalFolder=await Folder.create({name:"CLANDESTINO | S01 — Registros",type:"JournalEntry"});
 const created=[];
 try{
   for(const s of scenes)created.push(await Scene.create({...sceneData(s),folder:folder.id}));
   for(const j of journalSpec){
     const journal=await JournalEntry.create({name:j.name,folder:journalFolder.id,ownership:{default:j.secret?0:2},flags:{[ID]:{[MODULE_FLAG]:key}}});
     created.push(journal);
     await journal.createEmbeddedDocuments("JournalEntryPage",j.pages.map(p=>({...p,ownership:{default:j.secret?0:2}})));
   }
   ui.notifications.info(`CLANDESTINO: importadas ${scenes.length} cenas e ${journalSpec.length} entradas de diário. Reveja paredes, permissões e iluminação antes da sessão.`);
 }catch(err){console.error("CLANDESTINO | Falha na importação da aventura",err);ui.notifications.error("Falha ao importar aventura. Consulte o console e remova eventuais documentos parciais.");}
}
Hooks.once("ready",()=>{
 game.clandestinoAdventure01={importAdventure,repairSceneBackgrounds};
 if(!game.user.isGM)return;
 if(!game.macros.some(m=>m.name==="CLANDESTINO | Reparar mapas da Sessão 01")){
  Macro.create({name:"CLANDESTINO | Reparar mapas da Sessão 01",type:"script",img:"icons/svg/eye.svg",command:"await game.clandestinoAdventure01.repairSceneBackgrounds();"})
  .catch(err=>console.warn("CLANDESTINO | Não foi possível criar macro de reparo",err));
 }
 if(game.macros.some(m=>m.name==="CLANDESTINO | Importar Sessão 01"))return;
 Macro.create({name:"CLANDESTINO | Importar Sessão 01",type:"script",img:"icons/svg/book.svg",command:"await game.clandestinoAdventure01.importAdventure();"})
 .catch(err=>console.warn("CLANDESTINO | Não foi possível criar macro de importação",err));
});
