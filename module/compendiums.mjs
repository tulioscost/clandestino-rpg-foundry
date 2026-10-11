// Compêndios de mundo: livros de carreira são JournalEntry, não itens de inventário.
const DEFS=[
 ['equipamentos','Itens e Armas','Item','equipamentos.json'],
 ['caminhos-ref','Caminhos — Referência','JournalEntry','caminhos.json'],
 ['trilhas-ref','Trilhas — Referência','JournalEntry','trilhas.json'],
 ['ameacas','Ameaças Canônicas','Actor','ameacas.json'],
 ['lares','Lares e Instalações','Actor','lares.json']
];
Hooks.once('ready',async()=>{
 if(!game.user.isGM)return;
 for(const [key,label,type,file] of DEFS){
  try{
   const name=`clandestino-${key}`;
   let pack=game.packs.find(p=>p.metadata.packageType==='world'&&p.metadata.name===name);
   if(!pack)pack=await CompendiumCollection.createCompendium({type,label:`CLANDESTINO | ${label}`,name,package:'world'});
   const response=await fetch(`systems/clandestino-rpg-foundry/data/${file}`);
   if(!response.ok)throw new Error(`HTTP ${response.status}: ${file}`);
   const records=await response.json();const index=await pack.getIndex();const known=new Set(index.map(x=>x.name));
   let pending=records.filter(x=>!known.has(x.name));
   if(type==='JournalEntry')pending=pending.map(x=>({name:x.name,pages:[{name:'Descrição',type:'text',text:{content:`<pre>${foundry.utils.escapeHTML(x.system.description||'')}</pre>`,format:1}}]}));
   if(pending.length){
    if(type==='Item')await Item.createDocuments(pending,{pack:pack.collection});
    else if(type==='Actor')await Actor.createDocuments(pending,{pack:pack.collection});
    else await JournalEntry.createDocuments(pending,{pack:pack.collection});
   }
  }catch(error){console.error('CLANDESTINO | Compêndio',label,error);ui.notifications.warn(`CLANDESTINO: erro no compêndio ${label}.`);}
 }
});
