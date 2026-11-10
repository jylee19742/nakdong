(function(){'use strict';
const KEY='nakdong-participation-v1';
function read(){try{const r=JSON.parse(localStorage.getItem(KEY)||'{}');return r&&typeof r==='object'&&!Array.isArray(r)?r:{}}catch{return {}}}
function capture(mode,room){if(!['coop','battle'].includes(mode)||room?.status!=='finished'||![2,3,4].includes(room.capacity)||!room.finishedAt)return false;const me=room.players?.find(p=>p.id===room.my?.id);if(!me||me.left)return false;if(mode==='coop'&&room.completed?.length!==20)return false;const data=read();data[mode]={mode,finished:true,capacity:room.capacity,finishedAt:room.finishedAt,correct:Number(me.correct)||0,score:Number(me.score)||0};try{localStorage.setItem(KEY,JSON.stringify(data))}catch{}return true}
function captureSolo(s){if(!s||s.completed?.length<15)return;const checked=window.RiverTrial?.restore(JSON.stringify(s));if(!checked)return;const data=read();if((data.solo?.chips||0)>checked.completed.length)return;data.solo={mode:'solo',chips:checked.completed.length,at:Date.now()};try{localStorage.setItem(KEY,JSON.stringify(data))}catch{}}
function eligibility(){let solo=null;try{solo=window.RiverTrial?.restore(localStorage.getItem('nakdong-river-solo-v2'))}catch{}const records=read(),out=[];const chips=Math.max(solo?.completed.length||0,records.solo?.chips||0);if(chips>=15&&chips<=20)out.push({mode:'solo',chips});for(const mode of ['coop','battle']){const r=records[mode];if(r?.finished&&[2,3,4].includes(r.capacity)&&Number(r.finishedAt)>0)out.push(r)}return out}
window.RiverParticipation={capture,captureSolo,eligibility};
})();
