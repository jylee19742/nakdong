(function(root){'use strict';
// A single A4 page, with a high-resolution certificate rendered by the browser.
function fromJpeg(jpeg,width,height){
 const enc=new TextEncoder(),parts=[],offsets=[0];let length=0;
 const add=value=>{const bytes=typeof value==='string'?enc.encode(value):value;parts.push(bytes);length+=bytes.length};
 const object=(id,body)=>{offsets[id]=length;add(id+' 0 obj\n');add(body);add('\nendobj\n')};
 add('%PDF-1.4\n');object(1,'<< /Type /Catalog /Pages 2 0 R >>');object(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
 object(3,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Certificate 4 0 R >> >> /Contents 5 0 R >>');
 offsets[4]=length;add('4 0 obj\n<< /Type /XObject /Subtype /Image /Width '+width+' /Height '+height+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+jpeg.length+' >>\nstream\n');add(jpeg);add('\nendstream\nendobj\n');
 const w=559.28,h=w*height/width,commands='q\n'+w+' 0 0 '+h.toFixed(3)+' 18 '+((841.89-h)/2).toFixed(3)+' cm\n/Certificate Do\nQ';
 object(5,'<< /Length '+enc.encode(commands).length+' >>\nstream\n'+commands+'\nendstream');
 const xref=length;add('xref\n0 6\n0000000000 65535 f \n');for(let i=1;i<=5;i++)add(String(offsets[i]).padStart(10,'0')+' 00000 n \n');add('trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF\n');
 const result=new Uint8Array(length);let pos=0;for(const part of parts){result.set(part,pos);pos+=part.length}return result;
}
root.CertificatePdf={fromJpeg};if(typeof module==='object')module.exports=root.CertificatePdf;
})(typeof window==='object'?window:globalThis);
