import {ATTRIBUTES,bpmState,poolSize,rollPool,rollProbability} from './dice.mjs';
import './compendiums.mjs';
const CLAN_SKILLS = [{"key": "FOR_0", "name": "Combate Corpo a Corpo", "attribute": "FOR"}, {"key": "FOR_1", "name": "Arrombamento", "attribute": "FOR"}, {"key": "FOR_2", "name": "Atletismo", "attribute": "FOR"}, {"key": "FOR_3", "name": "Manobra de Carga", "attribute": "FOR"}, {"key": "FOR_4", "name": "Contenção de Risco", "attribute": "FOR"}, {"key": "AGI_0", "name": "Pontaria", "attribute": "AGI"}, {"key": "AGI_1", "name": "Furtividade", "attribute": "AGI"}, {"key": "AGI_2", "name": "Reflexos", "attribute": "AGI"}, {"key": "AGI_3", "name": "Acrobacia", "attribute": "AGI"}, {"key": "AGI_4", "name": "Pilotagem", "attribute": "AGI"}, {"key": "ROB_0", "name": "Resistência Física", "attribute": "ROB"}, {"key": "ROB_1", "name": "Fôlego", "attribute": "ROB"}, {"key": "ROB_2", "name": "Sobrevivência Espacial", "attribute": "ROB"}, {"key": "ROB_3", "name": "Tolerância Química", "attribute": "ROB"}, {"key": "ROB_4", "name": "Recuperação", "attribute": "ROB"}, {"key": "CAR_0", "name": "Persuasão", "attribute": "CAR"}, {"key": "CAR_1", "name": "Intimidação", "attribute": "CAR"}, {"key": "CAR_2", "name": "Atuação", "attribute": "CAR"}, {"key": "CAR_3", "name": "Etiqueta", "attribute": "CAR"}, {"key": "CAR_4", "name": "Sedução", "attribute": "CAR"}, {"key": "MOR_0", "name": "Coragem", "attribute": "MOR"}, {"key": "MOR_1", "name": "Disciplina", "attribute": "MOR"}, {"key": "MOR_2", "name": "Fé/Ritual", "attribute": "MOR"}, {"key": "MOR_3", "name": "Determinação", "attribute": "MOR"}, {"key": "MOR_4", "name": "Integridade", "attribute": "MOR"}, {"key": "FIB_0", "name": "Autocontrole", "attribute": "FIB"}, {"key": "FIB_1", "name": "Suportar Dor", "attribute": "FIB"}, {"key": "FIB_2", "name": "Persistência", "attribute": "FIB"}, {"key": "FIB_3", "name": "Foco sob Pressão", "attribute": "FIB"}, {"key": "FIB_4", "name": "Estabilidade Mental", "attribute": "FIB"}, {"key": "INT_0", "name": "Medicina", "attribute": "INT"}, {"key": "INT_1", "name": "Engenharia", "attribute": "INT"}, {"key": "INT_2", "name": "Ciência", "attribute": "INT"}, {"key": "INT_3", "name": "Informática", "attribute": "INT"}, {"key": "INT_4", "name": "Pesquisa", "attribute": "INT"}, {"key": "RAC_0", "name": "Investigação", "attribute": "RAC"}, {"key": "RAC_1", "name": "Percepção", "attribute": "RAC"}, {"key": "RAC_2", "name": "Diagnóstico", "attribute": "RAC"}, {"key": "RAC_3", "name": "Navegação", "attribute": "RAC"}, {"key": "RAC_4", "name": "Estratégia", "attribute": "RAC"}, {"key": "VON_0", "name": "Concentração", "attribute": "VON"}, {"key": "VON_1", "name": "Resistência Psíquica", "attribute": "VON"}, {"key": "VON_2", "name": "Ímpeto Desesperado", "attribute": "VON"}, {"key": "VON_3", "name": "Controle de Impulsos", "attribute": "VON"}, {"key": "VON_4", "name": "Lucidez", "attribute": "VON"}];

let CLAN_PATHS=[],CLAN_TRAILS=[];
async function clanRead(path){try{const r=await fetch(`systems/clandestino-rpg-foundry/data/${path}.json`);return r.ok?await r.json():[];}catch(e){console.error('CLANDESTINO dados',path,e);return [];}}
Hooks.once('ready',async()=>{[CLAN_PATHS,CLAN_TRAILS]=await Promise.all([clanRead('caminhos'),clanRead('trilhas')]);});
class ClanActorSheet extends foundry.applications.api.HandlebarsApplicationMixin(foundry.applications.sheets.ActorSheetV2) {
 static DEFAULT_OPTIONS={classes:['clandestino','sheet'],position:{width:750,height:780},window:{resizable:true},actions:{}};
 static PARTS={body:{template:'systems/clandestino-rpg-foundry/templates/actor.hbs'}};
 async _prepareContext(options){ const ctx=await super._prepareContext(options); const actor=this.document; const data=actor.system; const type=actor.type;
  const attributes=Object.entries(ATTRIBUTES).map(([key,label])=>({key,label,value:Number(data.attributes?.[key]??1)}));
  const items=actor.items.filter(i=>!['caminho','trilha'].includes(i.type)).map(i=>({id:i.id,name:i.name,type:i.type,system:i.system,isArmor:i.type==='armadura',isConsumable:i.type==='consumivel',load:(Number(i.system.weight)||0)*(Number(i.system.quantity)||0)}));
  const currentLoad=actor.items.filter(i=>!['nota','caminho','trilha','talento'].includes(i.type)).reduce((n,i)=>n+Math.max(0,Number(i.system.weight)||0)*Math.max(0,Number(i.system.quantity)||0),0);
  const loadStatus=currentLoad>6?'Acima do máximo':currentLoad>4?'Sobrecarregado: −1d6 em deslocamento exigente':'Carga normal';
  const paths=CLAN_PATHS.map(x=>({name:x.name,selected:data.path===x.name,description:x.system.description}));
  const trails=CLAN_TRAILS.map(x=>({name:x.name,path:x.system.path||'',selected:data.trail===x.name,description:x.system.description}));
  const currentPath=CLAN_PATHS.find(x=>x.name===data.path);
  const currentTrail=CLAN_TRAILS.find(x=>x.name===data.trail);
  const skillGroups=Object.entries(ATTRIBUTES).map(([code,label])=>({code,label,skills:CLAN_SKILLS.filter(s=>s.attribute===code).map(s=>({...s,value:Number(data.skills?.[s.key]??0)}))}));
  return {...ctx,actor,system:data,isPerson:type==='personagem'||type==='ultraSentinela',isUS:type==='ultraSentinela',isMonster:type==='clandestino',isLar:type==='lar',attributes,items,paths,trails,currentPathDescription:currentPath?.system.description||"",currentTrailDescription:currentTrail?.system.description||"",currentLoad:Math.round(currentLoad*100)/100,loadStatus,skillGroups,bpmStatus:bpmState(data.bpm?.value??60),actorType:type};
 }
 async _onRender(context,options){await super._onRender(context,options);const root=this.element;const a=this.document;
 root.querySelectorAll('[data-field]').forEach(el=>el.addEventListener('change',async ev=>{
  if(!a.isOwner)return;
  const field=ev.currentTarget.dataset.field;
  let value=ev.currentTarget.value;
  if(ev.currentTarget.type==='number')value=Number(value);
  if(field==='name'){
    const trimmed=String(value).trim();
    if(!trimmed){ui.notifications.warn('O nome do personagem não pode ficar vazio.');ev.currentTarget.value=a.name;return;}
    await a.update({name:trimmed});return;
  }
  if(field==='path' && value!==a.system.path){
    // Preserve the trail only when it is associated with the new path.
    const active=CLAN_TRAILS.find(t=>t.name===a.system.trail);
    await a.update({'system.path':value,'system.trail':active?.system?.path===value?a.system.trail:''});return;
  }
  if(field==='attributes.ROB' && (a.type==='personagem'||a.type==='ultraSentinela')){
    const robustness=Math.max(1,Math.min(6,Number(value)||1));
    const currentMax=Math.max(0,Number(a.system.health?.max)||0);
    const currentValue=Math.max(0,Number(a.system.health?.value)||0);
    const newMax=robustness*3;
    // Keep existing damage: a wounded character remains wounded after ROB changes.
    const damageTaken=Math.max(0,currentMax-currentValue);
    const newValue=Math.max(0,Math.min(newMax,newMax-damageTaken));
    await a.update({'system.attributes.ROB':robustness,'system.health.max':newMax,'system.health.value':newValue});return;
  }
  await a.update({[`system.${field}`]:value});
}));
 root.querySelectorAll('[data-action-clan]').forEach(el=>el.addEventListener('click',async ev=>{ev.preventDefault();const action=ev.currentTarget.dataset.actionClan;if(action==='portrait')await this._choosePortrait();if(action==='test')await this._test();if(action==='attribute-roll')await this._test(ev.currentTarget.dataset.attribute);if(action==='skill-roll')await this._test(ev.currentTarget.dataset.attribute,ev.currentTarget.dataset.skill);if(action==='attack')await this._attack();if(action==='item-roll')await this._itemRoll(ev.currentTarget.dataset.itemId);if(action==='reload')await this._reload(ev.currentTarget.dataset.itemId);if(action==='consume')await this._consume(ev.currentTarget.dataset.itemId);if(action==='equip')await this._equip(ev.currentTarget.dataset.itemId);if(action==='rest')await this._adjustBpm(-10);if(action==='stress')await this._adjustBpm(10);if(action==='damage')await this._damage();if(action==='new-item')await a.createEmbeddedDocuments('Item',[{name:'Novo equipamento',type:'equipamento'}]);if(action==='item-edit')a.items.get(ev.currentTarget.dataset.itemId)?.sheet.render(true);if(action==='item-del'&&a.isOwner)await a.deleteEmbeddedDocuments('Item',[ev.currentTarget.dataset.itemId]);if(action==='roll-monster')await rollPool({actor:a,label:'Ataque da ameaça',attribute:'Ataque',dice:a.system.attackDice??3,difficulty:1});if(action==='sync')await this._sync();}));
 }
 async _choosePortrait(){
  const actor=this.document;
  if(!actor.isOwner){ui.notifications.warn('Você não tem permissão para alterar a imagem deste ator.');return;}
  // Foundry V13: classe FilePicker nova; compatibilidade com instalações que expõem a classe global.
  const Picker=foundry?.applications?.apps?.FilePicker?.implementation ?? globalThis.FilePicker;
  if(!Picker){ui.notifications.error('Seletor de arquivos do Foundry indisponível.');return;}
  const picker=new Picker({type:'image',current:actor.img,callback:async (selected)=>{
   if(!selected)return;
   await actor.update({img:selected});
   this.render({force:true});
  }});
  // FilePicker legado usa browse(); a implementação V13 oferece render().
  if(typeof picker.browse==='function')await picker.browse();
  else await picker.render(true);
 }
 async _test(defaultAttribute='FOR',defaultSkill=''){
  const s=this.document.system;
  const options=Object.entries(ATTRIBUTES).map(([k,v])=>`<option value="${k}" ${k===defaultAttribute?'selected':''}>${k} — ${v}</option>`).join('');
  const skillOptions=['<option value="">Sem perícia</option>',...CLAN_SKILLS.map(x=>`<option value="${x.key}" ${x.key===defaultSkill?'selected':''}>${foundry.utils.escapeHTML(x.name)}</option>`)].join('');
  const d=await foundry.applications.api.DialogV2.wait({window:{title:'Teste — CLANDESTINO'},content:`<form class="clan-dialog"><label>Atributo<select name="attribute">${options}</select></label><label>Perícia<select name="skill">${skillOptions}</select></label><p>Graduação 1–2: +1 dado; 3–4: +2 dados. Atributo definido pela abordagem.</p><label>Bônus de equipamento<input type="number" name="equipment" value="${s.equipmentBonus||0}"></label><label>Modificador situacional<input type="number" name="modifier" value="0"></label><label>Dificuldade<select name="difficulty"><option value="1">1 — Arriscado</option><option value="2" selected>2 — Difícil</option><option value="3">3 — Extremo</option></select></label><label><input type="checkbox" name="pressure" checked>Ação sob pressão (BPM)</label></form>`,buttons:[{action:'roll',label:'Rolar',default:true,callback:(ev,btn)=>{const f=btn.form.elements;return {attribute:f.attribute.value,skill:f.skill.value,equipment:Number(f.equipment.value),modifier:Number(f.modifier.value),difficulty:Number(f.difficulty.value),pressure:f.pressure.checked};}},{action:'cancel',label:'Cancelar',callback:()=>null}]});
  if(!d)return;
  const level=Number(s.skills?.[d.skill]??0);const skillBonus=level>=3?2:level>=1?1:0;
  const dice=poolSize(s.attributes?.[d.attribute],skillBonus,d.equipment,d.modifier,d.pressure,s.bpm?.value);
  const skillName=CLAN_SKILLS.find(x=>x.key===d.skill)?.name;
  await rollPool({actor:this.document,label:`Teste de ${ATTRIBUTES[d.attribute]}${skillName?' + '+skillName+' ('+level+')':''}`,attribute:d.attribute,dice,difficulty:d.difficulty,applyPressure:d.pressure});
 }
 async _attack(defaultWeaponId=""){
  const a=this.document;const weapons=a.items.filter(i=>i.type==='arma');
  const options=weapons.map(i=>`<option value="${i.id}" ${i.id===defaultWeaponId?'selected':''}>${foundry.utils.escapeHTML(i.name)} (${Number(i.system.ammoLoaded)||0}/${Number(i.system.magazineSize)||0})</option>`).join('');
  const d=await foundry.applications.api.DialogV2.wait({window:{title:'Ataque — CLANDESTINO'},content:`<form><label>Arma<select name="weapon"><option value="">Improvisada (sem munição)</option>${options}</select></label><label>Atributo<select name="attribute"><option value="AGI">À distância (AGI)</option><option value="FOR">Corpo a corpo (FOR)</option></select></label><label>Dificuldade<select name="difficulty"><option value="1">1 — Alvo exposto</option><option value="2">2 — Cobertura</option><option value="3">3 — Extremo</option></select></label><label>Modificador de dados<input name="mod" type="number" value="0"></label><label><input name="pressure" type="checkbox" checked> Aplicar BPM</label></form>`,buttons:[{action:'ok',label:'Atacar',default:true,callback:(e,b)=>{const f=b.form.elements;return {weapon:f.weapon.value,attribute:f.attribute.value,difficulty:Number(f.difficulty.value),mod:Number(f.mod.value),pressure:f.pressure.checked};}},{action:'no',label:'Cancelar',callback:()=>null}]});
  if(!d)return;
  const weapon=a.items.get(d.weapon);const cost=Math.max(1,Number(weapon?.system.ammoPerShot)||1);
  if(weapon && weapon.system.ammoType){const loaded=Number(weapon.system.ammoLoaded)||0;if(loaded<cost){ui.notifications.warn(`${weapon.name}: munição insuficiente. Recarregue na ficha.`);return;}
   // A munição é gasta no ato de disparar, inclusive em falhas; atualização no item embarcado.
   await weapon.update({'system.ammoLoaded':loaded-cost});}
  const sk=d.attribute==='AGI'?'AGI_0':'FOR_0';const lv=Number(a.system.skills?.[sk]||0);const bonus=lv>=3?2:lv>=1?1:0;const dice=poolSize(a.system.attributes?.[d.attribute],bonus,Number(weapon?.system.rollBonus)||0,d.mod,d.pressure,a.system.bpm?.value);
  const result=await rollPool({actor:a,label:`Ataque: ${weapon?.name||'Improvisado'}`,attribute:d.attribute,dice,difficulty:d.difficulty,applyPressure:d.pressure});
  if(result?.success){const damage=Number(weapon?.system.damage??1);await ChatMessage.create({speaker:ChatMessage.getSpeaker({actor:a}),content:`<div class="clan-chat"><b>Dano-base: ${damage}</b> · ${result.usableImpetuses} Ímpeto(s). Cada 6 pode conceder +1 dano (máximo +2) OU manobra. Proteção e acerto no alvo são resolvidos pelo Narrador.</div>`});}
 }
 async _itemRoll(itemId){
  const item=this.document.items.get(itemId);if(!item)return;
  if(item.type==='arma'){await this._attack(itemId);return;}
  if(!['equipamento','consumivel','armadura','municao'].includes(item.type))return;
  // O vínculo é um campo configurável no equipamento, não um modificador obrigatório.
  const attr=item.system.rollAttribute||'INT';const skill=item.system.rollSkill||'';
  const skillInfo=CLAN_SKILLS.find(x=>x.key===skill);
  const data=await foundry.applications.api.DialogV2.wait({window:{title:`Usar: ${item.name}`},content:`<form><p>${foundry.utils.escapeHTML(item.name)}${skillInfo?' · '+foundry.utils.escapeHTML(skillInfo.name):''}</p><label>Dificuldade<select name="difficulty"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option></select></label><label>Modificador situacional<input type="number" name="modifier" value="0"></label><label><input type="checkbox" name="pressure" checked>Ação sob pressão</label></form>`,buttons:[{action:'roll',label:'Rolar',default:true,callback:(ev,button)=>{const f=button.form.elements;return {difficulty:Number(f.difficulty.value),modifier:Number(f.modifier.value),pressure:f.pressure.checked};}},{action:'cancel',label:'Cancelar',callback:()=>null}]});
  if(!data)return;
  const actor=this.document;const level=Number(actor.system.skills?.[skill]||0);const skillBonus=level>=3?2:level>=1?1:0;
  const dice=poolSize(actor.system.attributes?.[attr],skillBonus,Number(item.system.rollBonus)||0,data.modifier,data.pressure,actor.system.bpm?.value);
  await rollPool({actor,label:`${item.name}${skillInfo?' · '+skillInfo.name:''}`,attribute:attr,dice,difficulty:data.difficulty,applyPressure:data.pressure});
 }
 async _reload(itemId){
  const a=this.document;if(!a.isOwner)return;const w=a.items.get(itemId);if(!w||w.type!=='arma')return;
  const type=w.system.ammoType;if(!type){ui.notifications.warn('Esta arma não utiliza munição rastreada.');return;}
  const max=Math.max(0,Number(w.system.magazineSize)||0),loaded=Math.max(0,Number(w.system.ammoLoaded)||0),need=max-loaded;
  if(!need){ui.notifications.info('Carregador cheio.');return;}
  const reserves=a.items.filter(i=>i.type==='municao' && i.system.ammoType===type && Number(i.system.quantity)>0);
  if(!reserves.length){ui.notifications.warn(`Nenhuma munição compatível (${type}) no inventário.`);return;}
  let remaining=need,used=0;
  for(const stack of reserves){if(!remaining)break;const q=Math.max(0,Number(stack.system.quantity)||0),taken=Math.min(remaining,q);if(taken){await stack.update({'system.quantity':q-taken});remaining-=taken;used+=taken;}}
  await w.update({'system.ammoLoaded':Math.min(max,loaded+used)});
  ui.notifications.info(`${w.name}: +${used} munição. ${loaded+used}/${max}.`);
 }
 async _consume(itemId){const a=this.document;if(!a.isOwner)return;const i=a.items.get(itemId);if(!i||i.type!=='consumivel')return;const q=Math.max(0,Number(i.system.quantity)||0);if(q<1){ui.notifications.warn('Item esgotado.');return;}await i.update({'system.quantity':q-1});await ChatMessage.create({speaker:ChatMessage.getSpeaker({actor:a}),content:`${a.name} consumiu: <b>${foundry.utils.escapeHTML(i.name)}</b>. Efeito conforme descrição e Narrador.`});}
 async _equip(itemId){const a=this.document;if(!a.isOwner)return;const i=a.items.get(itemId);if(!i||i.type!=='armadura')return;const equip=!i.system.equipped;for(const other of a.items.filter(x=>x.type==='armadura'&&x.system.equipped&&x.id!==i.id))await other.update({'system.equipped':false});await i.update({'system.equipped':equip});}
 async _adjustBpm(delta){const v=Math.max(50,Number(this.document.system.bpm?.value??60)+delta);await this.document.update({'system.bpm.value':v});if(v>=180)ui.notifications.warn('BPM 180+: realize teste FIB dificuldade 1 e aplique as consequências da crise.');}
 async _damage(){const d=await foundry.applications.api.DialogV2.prompt({window:{title:'Aplicar dano'},content:'<form><label>Dano bruto<input name="damage" type="number" value="2" min="0"></label><label><input type="checkbox" name="piercing"> Penetrante</label></form>',ok:{label:'Aplicar',callback:(e,b)=>({damage:Number(b.form.elements.damage.value),piercing:b.form.elements.piercing.checked})}});if(!d)return;const a=this.document;const s=a.system;const equipped=a.items.find(i=>i.type==='armadura' && i.system.equipped);const protection=a.type==='clandestino'?(s.protection||0):Math.max(Number(s.armorProtection)||0,Number(equipped?.system.protection)||0);const applied=d.piercing?Math.max(1,d.damage-protection):Math.max(0,d.damage-protection);const current=Math.max(0,(s.health?.value??0)-applied);await a.update({'system.health.value':current});await ChatMessage.create({speaker:ChatMessage.getSpeaker({actor:a}),content:`<b>${a.name}</b>: ${d.damage} dano bruto − ${protection} Proteção = <b>${applied} dano</b>. PV: ${current}. ${current===0?'Condição crítica — verificar estabilização ROB D1.':''}`});}
 async _sync(){const a=this.document;const s=a.system;const n=poolSize(s.attributes?.ROB,s.sync,0,0,false);const r=await rollPool({actor:a,label:'Sincronia neural US',attribute:'ROB + Sincronia',dice:n,difficulty:2});if(r&&!r.success)await a.update({'system.bpm.value':Number(s.bpm?.value??60)+10});}
}
class ClanItemSheet extends foundry.applications.api.HandlebarsApplicationMixin(foundry.applications.sheets.ItemSheetV2){static DEFAULT_OPTIONS={classes:['clandestino','sheet'],position:{width:540,height:520},window:{resizable:true}};static PARTS={body:{template:'systems/clandestino-rpg-foundry/templates/item.hbs'}};async _prepareContext(o){return {...await super._prepareContext(o),item:this.document,system:this.document.system,isWeapon:this.document.type==='arma',isArmor:this.document.type==='armadura',isAmmo:this.document.type==='municao',isConsumable:this.document.type==='consumivel',skills:CLAN_SKILLS.map(x=>({...x,selected:this.document.system.rollSkill===x.key})),attributes:Object.entries(ATTRIBUTES).map(([key,label])=>({key,label,selected:this.document.system.rollAttribute===key}))};}async _onRender(c,o){await super._onRender(c,o);this.element.querySelectorAll('[data-field]').forEach(el=>el.addEventListener('change',async e=>{let v=e.target.type==='number'?Number(e.target.value):e.target.value;await this.document.update({[`system.${e.target.dataset.field}`]:v});}));}}
Hooks.once('init',()=>{Actors.registerSheet('clandestino-rpg-foundry',ClanActorSheet,{makeDefault:true,label:'CLANDESTINO — Ficha'});Items.registerSheet('clandestino-rpg-foundry',ClanItemSheet,{makeDefault:true,label:'CLANDESTINO — Item'});game.clandestino={rollPool,poolSize,bpmState,rollProbability};});
Hooks.once('ready',()=>{console.log('CLANDESTINO | Sistema experimental carregado.');});
