// Compêndios de mundo alimentados uma única vez por fonte canônica 4.6.
const DEFINITIONS=[['equipamentos','Itens e Armas','data/equipamentos.json'],['caminhos','Caminhos','data/caminhos.json'],['trilhas','Trilhas','data/trilhas.json']];
Hooks.once('ready',async()=>{
 if(!game.user.isGM)return;
 for(const [key,label,path] of DEFINITIONS){
  try{
   const name=`clandestino-${key}`;
   let pack=game.packs.find(p=>p.metadata.packageType==='world' && p.metadata.name===name);
   if(!pack){pack=await CompendiumCollection.createCompendium({type:'Item',label:`CLANDESTINO | ${label}`,name,package:'world'});}
   const existing=await pack.getIndex();
   // Não substitui edições feitas pelo Narrador; somente completa registros ausentes.
   const response=await fetch(`systems/clandestino-rpg-foundry/${path}`);
   if(!response.ok)throw new Error(`HTTP ${response.status}: ${path}`);
   const records=await response.json();
   const known=new Set(existing.map(x=>x.name));
   const pending=records.filter(x=>!known.has(x.name));
   if(pending.length)await Item.createDocuments(pending,{pack:pack.collection});
  }catch(err){console.error('CLANDESTINO | Falha ao preparar compêndio',label,err);ui.notifications.warn(`CLANDESTINO: não foi possível preparar ${label}. Consulte o console.`);}
 }
});
