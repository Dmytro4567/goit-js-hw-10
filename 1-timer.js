import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-BbSUbo7J.js";const s=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");let i,u;function v(e){const r=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:f}}function n(e){return String(e).padStart(2,"0")}const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=new Date?(y.error({message:"Please choose a date in the future"}),t.disabled=!0):(i=e[0],t.disabled=!1)}};t.disabled=!0;t.addEventListener("click",()=>{t.disabled=!0,s.disabled=!0,u=setInterval(()=>{const o=i-new Date;if(o<=0){clearInterval(u),s.disabled=!1,t.disabled=!0;return}const{days:a,hours:c,minutes:d,seconds:r}=v(o);S.textContent=n(a),b.textContent=n(c),p.textContent=n(d),q.textContent=n(r)},1e3)});h(s,C);
//# sourceMappingURL=1-timer.js.map
