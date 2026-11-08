(function(){
'use strict';
const chapters=[
 {category:'자연환경',title:'첫 이야기 · 물길이 만든 다섯 가지 모습',intro:'낙동강의 위쪽에서 바다 쪽으로 물길을 따라가 볼까요? 강이 흐르며 달라지는 모습을 다섯 개 자연환경 칩으로 살펴봐요. 상류는 강의 위쪽, 하류는 바다에 가까운 아래쪽을 뜻해요.',remember:'상류의 좁은 강폭과 빠른 물살 → 이동하며 둥글어진 돌 → 모래톱과 습지. 실제 모습은 지형과 물의 양에 따라 달라져요.',practice:'모래톱과 습지는 생물이 쉬는 곳이기도 해요. 함부로 들어가거나 쓰레기를 남기지 않아요.',cards:[
 ['n01','대체로 좁다','먼저 산과 계곡 사이를 지나는 상류를 살펴봐요. 이곳은 하류보다 강폭이 대체로 좁고, 아래쪽으로 여러 물줄기가 합쳐지면 강이 넓어져요.'],
 ['n02','대체로 빠르다','이제 그곳의 물살을 볼까요? 상류는 경사가 급한 곳이 많아 물살이 대체로 빨라요. 실제 빠르기는 지형과 물의 양에 따라 달라져요.'],
 ['n03','대체로 둥글다','흐르는 물은 돌도 움직여요. 돌들이 이동하며 부딪히면 뾰족한 부분이 깎여, 아래쪽으로 이동한 돌은 대체로 둥근 모습을 보여요.'],
 ['n04','모래톱','강물이 옮기는 것은 돌만이 아니에요. 모래가 쌓여 드러난 모래밭이나 작은 섬을 모래톱이라고 해요. 새들이 쉬거나 먹이를 찾기도 해요.'],
 ['n05','습지','물길 주변에는 물이 고이거나 땅이 젖어 있는 습지도 있어요. 여러 생물의 보금자리이며, 빗물을 머금어 홍수를 줄이는 데도 도움을 줘요.']]},
 {category:'식물',title:'두 번째 이야기 · 물길을 따라 자라는 다섯 식물',intro:'강이 만든 여러 환경에는 식물이 자라요. 흐름이 느린 물 위에서 시작해 강가의 풀과 나무로 시선을 옮기며, 다섯 식물 칩의 잎·열매·꽃이삭을 살펴봐요.',remember:'물억새는 은빛 꽃이삭, 갈대는 키 큰 줄기와 갈색 꽃이삭. 마름은 뿔 같은 열매, 가시연은 큰 둥근 잎과 가시가 단서예요.',practice:'식물은 뽑지 말고 눈으로 관찰해요. 낯선 열매를 함부로 먹거나 가시를 만지지 않아요.',cards:[
 ['p06','마름','흐름이 느린 물 위에서 마름을 만나 봐요. 마름모에 가까운 잎을 물 위에 띄우고, 뿔처럼 생긴 단단한 열매를 맺어요.'],
 ['p07','물억새','시선을 강가로 옮기면 무리 지어 자라는 물억새를 볼 수 있어요. 가을에 은빛 꽃이삭이 바람에 흔들리는 것이 단서예요.'],
 ['p08','갈대','물억새와 비슷해 보이는 갈대도 물가에서 자라요. 키가 큰 줄기 끝에 가을이면 갈색빛 꽃이삭이 나타나요.'],
 ['p09','가시연','이번에는 습지의 물 위를 보세요. 가시연은 큰 둥근 잎을 띄우며 잎과 줄기에 가시가 있어요. 칩 속 작은 보라색 꽃도 찾아보세요.'],
 ['p10','갯버들','강가에는 풀뿐 아니라 갯버들 같은 나무도 자라요. 가늘고 긴 가지가 있고, 봄에는 잎보다 먼저 부드러운 털의 꽃이삭을 볼 수 있어요.']]},
 {category:'동물',title:'세 번째 이야기 · 물과 물가를 나누어 사는 다섯 동물',intro:'물과 식물, 모래밭과 습지는 동물의 생활과도 이어져요. 물속을 헤엄치는 동물에서 물가의 새와 하구의 조개까지, 다섯 동물 칩을 따라가 봐요.',remember:'재루는 재두루미, 담이는 각시붕어를 바탕으로 만든 캐릭터예요. 캐릭터와 실제 칩 사진을 함께 비교해 보세요.',practice:'동물에게 가까이 다가가거나 먹이를 주지 않아요. 새가 알을 낳는 모래밭도 조심해서 지켜봐요.',cards:[
 ['a11','수달','물속과 물가를 오가는 수달은 털로 덮인 몸과 긴 꼬리가 있어요. 발의 물갈퀴로 헤엄을 잘 치며 물고기 등을 잡아먹어요.'],
 ['a12','흰목물떼새','앞서 본 모래톱과 자갈밭에는 흰목물떼새 같은 작은 새가 살아요. 뒷목의 흰 띠가 단서이며, 땅 위에 알을 낳아요.'],
 ['a13','각시붕어','물살이 느린 곳에서는 작은 민물고기 각시붕어를 떠올려 보세요. 몸은 옆으로 납작하고, 번식기 수컷은 아름다운 색을 띠어요.'],
 ['a14','재두루미','계절에 따라 찾아오는 동물도 있어요. 재두루미는 낙동강 하구의 습지 등을 찾는 겨울철새로, 회색빛 몸과 머리·목의 흰 부분이 특징이에요.'],
 ['a15','재첩','민물과 바닷물이 만나는 하구에서는 작은 조개 재첩도 살아요. 두 장의 껍데기로 몸을 보호하고, 물속의 작은 먹이를 걸러 먹어요.']]},
 {category:'지명',title:'마지막 이야기 · 다섯 지역을 잇는 하나의 강',intro:'이제 물길 이야기를 지명 칩과 이어 볼까요? 게임에 등장하는 일부 지역을 위쪽에서 하구 쪽으로 따라가면 상주 → 구미 → 대구 → 창녕 → 부산으로 연결돼요.',remember:'상주·구미·대구·창녕·부산. 게임에서 지명 칩은 이 순서의 1~5번 원형 칸에 놓아요.',practice:'우리 지역의 하천은 어디로 이어질까요? 작은 물길도 큰 강과 연결되어 있다는 것을 떠올려 보세요.',cards:[
 ['l16','상주','낙동강이 굽이쳐 흐르는 경천대와 경천섬이 있는 지역이에요. 담수생물을 연구하고 전시하는 국립낙동강생물자원관도 상주에 있어요.'],
 ['l17','구미','낙동강 주변에 평야가 펼쳐져 있고, 강을 따라 산업단지가 발달한 도시예요. 사람들의 생활도 강과 이어져 있어요.'],
 ['l18','대구','낙동강과 금호강이 만나는 곳 가까이에 달성습지가 있어요. 강들이 합쳐지는 곳의 환경을 떠올려 보세요.'],
 ['l19','창녕','대표적인 자연 습지인 우포늪이 있는 지역이에요. 습지와 그곳에서 살아가는 다양한 생물들을 함께 기억해요.'],
 ['l20','부산','낙동강이 바다와 만나는 하구가 있는 도시예요. 을숙도 일대에는 철새가 찾아오고, 모래톱과 습지 같은 환경이 펼쳐져요.']]}
];
const missions=window.RiverTrial.MISSIONS,content=document.getElementById('learnContent'),seen=new Set();let active=0,serial=0;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function chip(m){const cols=[239,532,827,1129,1440,1728],rows=[411,682,954,1241,1497],i=m.number-1,c=i%5,r=Math.floor(i/5),x=cols[c]+17,y=rows[r]+10,w=cols[c+1]-cols[c]-34,h=rows[r+1]-rows[r]-20,id='learn-chip-'+(++serial);return '<svg class="learn-chip" viewBox="'+[x,y,w,h].join(' ')+'" role="img" aria-labelledby="'+id+'"><title id="'+id+'">'+esc(m.name)+'의 확정 생태계 칩</title><defs><clipPath id="'+id+'-clip"><rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'"/></clipPath></defs><g clip-path="url(#'+id+'-clip)"><image href="chip-sheet-final-v3.webp" x="0" y="0" width="2000" height="2000"/></g></svg>'}
function render(focus=false){const ch=chapters[active];seen.add(active);document.querySelectorAll('[data-chapter]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.chapter)===active)));content.innerHTML='<section class="learn-chapter" aria-labelledby="chapterTitle"><div class="learn-chapter-head"><span class="learn-kicker">'+(active+1)+' / 4 · '+ch.category+'</span><h2 id="chapterTitle" tabindex="-1">'+ch.title+'</h2><p>'+ch.intro+'</p></div><div class="learn-cards">'+ch.cards.map(([id,title,text])=>{const m=missions.find(m=>m.id===id);return '<article class="learn-card">'+chip(m)+'<div><span class="learn-card-number">'+ch.category+' · 칩 '+m.printedNumber+'</span><h3>'+title+'</h3><p>'+text+'</p></div></article>'}).join('')+'</div><div class="learn-takeaway"><strong>이것만 기억해요</strong><p>'+ch.remember+'</p></div><p class="learn-practice"><strong>함께 지키기</strong> '+ch.practice+'</p><div class="learn-step-actions"><button data-step="-1" '+(active===0?'disabled':'')+'>← 이전 이야기</button><span>살펴본 주제 '+seen.size+' / 4</span>'+(active<3?'<button class="primary" data-step="1">다음: '+chapters[active+1].category+' →</button>':'<a class="home-link" href="#playChoices">게임 선택하기 →</a>')+'</div></section>';if(focus){document.getElementById('chapterTitle').focus({preventScroll:true});window.scrollTo({top:Math.max(0,document.getElementById('chapterTitle').getBoundingClientRect().top+window.scrollY-document.querySelector('.learn-nav').offsetHeight-44),behavior:'instant'})}document.getElementById('learnAnnounce').textContent=ch.category+' 이야기를 열었어요.';}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;if(b.dataset.chapter!==undefined)active=Number(b.dataset.chapter);else if(b.dataset.step)active=Math.max(0,Math.min(3,active+Number(b.dataset.step)));else return;render(true)});render();
})();
