(function(){'use strict';
const ns='http://www.w3.org/2000/svg';
function decorate(root){const list=[];if(root.matches?.('svg.chip-svg,svg.learn-chip'))list.push(root);root.querySelectorAll?.('svg.chip-svg,svg.learn-chip').forEach(el=>list.push(el));for(const el of list){if(el.dataset.acrylic)continue;el.dataset.acrylic='1';const box=el.viewBox.baseVal;if(box.y>=1240)el.classList.add('acrylic-landmark');const shine=document.createElementNS(ns,'path'),x=box.x,y=box.y,w=box.width,h=box.height;shine.setAttribute('d',`M${x} ${y}H${x+w*.58}L${x+w*.1} ${y+h}H${x}Z`);shine.setAttribute('fill','white');shine.setAttribute('opacity','.09');shine.setAttribute('pointer-events','none');shine.setAttribute('aria-hidden','true');el.append(shine)}}
decorate(document);new MutationObserver(records=>{for(const r of records)for(const n of r.addedNodes)if(n.nodeType===1)decorate(n)}).observe(document.body,{childList:true,subtree:true});
})();
