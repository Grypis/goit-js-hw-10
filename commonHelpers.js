import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as p}from"./assets/vendor-77e16229.js";let s;const a=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");t.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){s=Date.parse(r[0]),s<Date.now()?(p.error({icon:"../img/icon.svg",message:"Please choose a date in the future",messageColor:"#ffffff",backgroundColor:"#EF4040",progressBar:!0,progressBarColor:"#B51B1B",progressBarEasing:"linear",pauseOnHover:!0,position:"topRight"}),t.disabled=!0):t.disabled=!1}};f(a,C);function b(){t.disabled=!0,a.disabled=!0;const r=setInterval(()=>{let c=s-Date.now();function d(e){const i=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:l,seconds:m}}const o=d(c);function n(e){return String(e).padStart(2,"0")}h.textContent=n(o.days),y.textContent=n(o.hours),S.textContent=n(o.minutes),g.textContent=n(o.seconds),c<=1e3&&(clearInterval(r),a.disabled=!1)},1e3)}t.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
