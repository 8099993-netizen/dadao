(function(){
  const header=document.querySelector(".header"),progress=document.querySelector(".progress"),topBtn=document.querySelector(".top"),menu=document.querySelector(".menu");
  function scrollState(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;header&&header.classList.toggle("scrolled",y>18);topBtn&&topBtn.classList.toggle("show",y>520);progress&&(progress.style.width=(h>0?y/h*100:0)+"%")}
  addEventListener("scroll",scrollState,{passive:true});scrollState();
  menu&&menu.addEventListener("click",()=>{const open=document.body.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
  document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>document.body.classList.remove("open")));
  topBtn&&topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
  document.querySelectorAll(".faqItem button").forEach(b=>b.addEventListener("click",()=>b.parentElement.classList.toggle("open")));
  const reveals=document.querySelectorAll(".reveal");
  if("IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.14});reveals.forEach(el=>io.observe(el))}else reveals.forEach(el=>el.classList.add("visible"));
  const stats=document.querySelector(".stats"),nums=document.querySelectorAll("[data-count]");let done=false;
  function run(){nums.forEach(n=>{const t=+n.dataset.count,s=n.dataset.suffix||"",st=performance.now();function tick(now){const p=Math.min((now-st)/1300,1),v=Math.round(t*(1-Math.pow(1-p,3)));n.textContent=v.toLocaleString("en-US")+s;p<1&&requestAnimationFrame(tick)}requestAnimationFrame(tick)})}
  if(stats&&"IntersectionObserver"in window){new IntersectionObserver((es,o)=>{if(es[0].isIntersecting&&!done){done=true;run();o.disconnect()}},{threshold:.35}).observe(stats)}else run();
})();