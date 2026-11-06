/* Local QR generation: only the public room URL is encoded, never participant tokens. */
window.RoomInvite=(function(){
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let cachedUrl='',cachedQr='';
 function render(url,code){
  if(url!==cachedUrl){cachedUrl=url;cachedQr='';try{const qr=qrcode(0,'M');qr.addData(url);qr.make();cachedQr=qr.createSvgTag({cellSize:5,margin:20,scalable:true})}catch{}}
  return '<section class="room-invite" aria-label="친구 초대"><div class="room-invite-copy"><h2>친구를 이 방으로 초대해요</h2><p>옆의 QR을 휴대폰 카메라로 찍거나, 링크를 복사해 보내 주세요.</p><label for="roomInviteUrl">이 방의 초대 링크</label><a class="room-invite-url" href="'+escape(url)+'">'+escape(url)+'</a><div class="invite-link"><input id="roomInviteUrl" aria-label="친구 초대 링크" readonly value="'+escape(url)+'"><button data-act="copy">초대 링크 복사</button></div><p class="room-invite-code">직접 참여할 때는 방 코드 <strong>'+escape(code)+'</strong></p></div><figure class="room-invite-qr">'+(cachedQr?'<a href="'+escape(url)+'" aria-label="방 '+escape(code)+' 참여 QR 코드">'+cachedQr+'</a>':'<p>QR을 표시하지 못했어요.<br>초대 링크를 이용해 주세요.</p>')+'<figcaption>카메라로 찍고 바로 참여!</figcaption></figure></section>';
 }
 return{render};
})();
