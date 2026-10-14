import assert from 'node:assert/strict';
import {signalState,normalizeSignal,RADIO_MIN_SIGNAL,setupClanRadio} from '../clandestino-rpg-foundry/module/radio.mjs';
assert.equal(RADIO_MIN_SIGNAL,50);
for(const [value,label,allowed] of [[0,'SEM SINAL',false],[24,'SEM SINAL',false],[25,'SINAL RUIM',false],[49,'SINAL RUIM',false],[50,'SINAL INSTÁVEL',true],[69,'SINAL INSTÁVEL',true],[70,'SINAL BOM',true],[84,'SINAL BOM',true],[85,'SINAL EXCELENTE',true],[100,'SINAL EXCELENTE',true]]){
 const s=signalState(value);assert.equal(s.label,label);assert.equal(s.canSend,allowed);assert.equal(s.value,value);
}
assert.equal(normalizeSignal(-30),0);assert.equal(normalizeSignal(120),100);
const callbacks={init:[],ready:[]}; const hooks={};
globalThis.Hooks={once(name,fn){callbacks[name].push(fn);},on(name,fn){(hooks[name]??=[]).push(fn);}};
let worldStrength=100, registerCall=null, warnings=0;
globalThis.game={settings:{register(scope,key,opts){registerCall={scope,key,opts};},get(){return worldStrength;}},users:{filter:()=>[],get:()=>undefined},user:{id:'player1',isGM:false},messages:{contents:[]}};
globalThis.document={getElementById(){return null;}};
globalThis.ui={notifications:{warn(){warnings++;},info(){},error(){}}};
setupClanRadio();for(const fn of callbacks.init)fn();
assert.equal(registerCall.scope,'clandestino-rpg-foundry');assert.equal(registerCall.key,'radioSignalStrength');
assert.equal(registerCall.opts.scope,'world');assert.equal(registerCall.opts.config,false);assert.equal(registerCall.opts.default,100);
for(const fn of callbacks.ready)fn();
const msg={flags:{'clandestino-rpg-foundry':{radio:true}}};
const ordinary={flags:{}};
assert.equal(hooks.preCreateChatMessage[0](ordinary),undefined);
for(const strength of [0,24,25,49]){worldStrength=strength;assert.equal(hooks.preCreateChatMessage[0](msg),false);}
for(const strength of [50,70,85,100]){worldStrength=strength;assert.equal(hooks.preCreateChatMessage[0](msg),undefined);}
assert.equal(warnings,4);
console.log('Rádio v0.6.50: 11 faixas/casos, normalização, registro world, bloqueio no preCreate e 4 cenários permitidos: OK');
