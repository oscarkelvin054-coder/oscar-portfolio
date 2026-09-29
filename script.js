const typeWriter=(el,t,s=70)=>{let i=0;el.textContent="";let x=setInterval(()=>{el.textContent+=t[i++];if(i>=t.length)clearInterval(x)},s)};
const roles=["Student / Frontend Dev","HTML • CSS • JS • Python","Port Harcourt, NG - 08084225535"];
let r=0; const el=document.getElementById('type');
function loop(){typeWriter(el,roles[r],60); r=(r+1)%roles.length}
loop(); setInterval(loop,3000);
