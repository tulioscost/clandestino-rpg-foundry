export const ATTRIBUTES = {FOR:'Força',AGI:'Agilidade',ROB:'Robustez',CAR:'Carisma',MOR:'Moral',FIB:'Fibra',INT:'Intelecto',RAC:'Raciocínio',VON:'Vontade'};
export function bpmState(n) { if(n>=180)return {label:'Crise',penalty:-2,crisis:true}; if(n>=150)return {label:'Colapso iminente',penalty:-2}; if(n>=120)return {label:'Pânico',penalty:-1}; if(n>=100)return {label:'Ansioso',penalty:-1}; if(n>=80)return {label:'Tenso',penalty:0}; return {label:'Calmo',penalty:0}; }
export function poolSize(attribute,skill=0,equipment=0,modifier=0,applyPressure=false,bpm=60) { let n=Number(attribute||0)+Number(skill||0)+Number(equipment||0)+Number(modifier||0); if(applyPressure) n+=bpmState(bpm).penalty; return Math.max(0, Math.min(6, Math.trunc(n))); }
export function evaluateDice(results,difficulty=1) { const successes=results.filter(x=>x>=5).length; const impetuses=results.filter(x=>x===6).length; return {successes,impetuses,success:successes>=difficulty,usableImpetuses:successes>=difficulty?impetuses:0}; }
export async function rollPool({actor,label='Teste',attribute='FOR',dice=3,difficulty=1,applyPressure=false,skill=0,equipment=0,modifier=0}) {
  const n=Math.max(0,Math.min(6,Math.trunc(Number(dice))));
  if(!n){ ui.notifications.warn('A reserva de dados é zero. Ajuste os modificadores.'); return; }
  const roll=await (new Roll(`${n}d6`)).evaluate();
  const results=roll.dice.flatMap(d=>d.results.map(r=>r.result));
  const result=evaluateDice(results,Number(difficulty));
  const color=result.success?'#4d9b84':'#b43a3a';
  const diceMarkup=results.map(r=>`<span style="display:inline-block;padding:5px 10px;margin:3px;border-radius:4px;background:${r>=5?'#922b2e':'#29313a'};color:white;font-weight:bold">${r}</span>`).join('');
  const content=`<div class="clan-chat"><h3>${foundry.utils.escapeHTML(label)}</h3><p>${foundry.utils.escapeHTML(attribute)} · ${n}d6 · Dificuldade ${difficulty}${applyPressure?' · Penalidade BPM aplicada':''}</p><p>${diceMarkup}</p><p style="color:${color}"><strong>${result.success?'SUCESSO':'FALHA'}</strong> · ${result.successes} sucessos · ${result.impetuses} seis (${result.usableImpetuses} Ímpetos utilizáveis)</p><small>O Ímpeto só pode ser empregado em um teste bem-sucedido. Seu efeito é decidido conforme a ficção e as regras.</small></div>`;
  await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:label},{create:false});
  await ChatMessage.create({speaker:ChatMessage.getSpeaker({actor}),content,rolls:[roll]});
  return result;
}
export function rollProbability(n,k){ let s=0;const choose=(a,b)=>{let z=1;for(let i=1;i<=b;i++)z=z*(a-i+1)/i;return z;};for(let i=k;i<=n;i++)s+=choose(n,i)*Math.pow(1/3,i)*Math.pow(2/3,n-i);return s;}
