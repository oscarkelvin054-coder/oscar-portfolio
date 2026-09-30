// 1. TypeWriter - reusable
const typeWriter=(el,text,s=80)=>{let i=0; (function t(){if(i<text.length){el.textContent+=text.charAt(i++);setTimeout(t,s)}})()};
typeWriter(document.getElementById("type"),"I'm Oscar Kelvin — Frontend Dev");

// 2. Theme Toggle
const btn=document.getElementById("themeToggle");
btn.onclick=()=>{document.body.classList.toggle("light");btn.textContent=document.body.classList.contains("light")?"☀️":"🌙"; localStorage.setItem("theme",document.body.className)};
if(localStorage.getItem("theme")){document.body.className=localStorage.getItem("theme"); btn.textContent=document.body.classList.contains("light")?"☀️":"🌙"}

// 3. Skills animate on scroll - reusable debounce
const debounce=(fn,d)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),d)}};
const animateBars=()=>{document.querySelectorAll(".bar div").forEach(b=>{if(b.getBoundingClientRect().top<window.innerHeight-50){b.style.width=b.dataset.w}})};
window.addEventListener("scroll",debounce(animateBars,100)); animateBars();

// 4. Project Filter - reusable
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");const f=b.dataset.f;document.querySelectorAll(".card").forEach(c=>{c.style.display=(f==="all"||c.dataset.cat===f)?"block":"none"})});

// 5. WhatsApp Form -> 08084225535
document.getElementById("waForm").onsubmit=e=>{
 e.preventDefault();
 const n=document.getElementById("cName").value, bu=document.getElementById("cBudget").value, m=document.getElementById("cMsg").value;
 const msg=`Hi Oscar, I'm ${n}. Budget: ${bu}. Project: ${m}. From your portfolio oscar-portfolio.pxxlspace.cv`;
 window.open(`https://wa.me/2348084225535?text=${encodeURIComponent(msg)}`,"_blank");
};