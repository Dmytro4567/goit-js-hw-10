import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",s=>{s.preventDefault();const o=s.target,t=Number(o.elements.delay.value),m=o.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{m==="fulfilled"?e(t):r(t)},t)}).then(e=>{i.success({message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({message:`Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
