function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),d=document.querySelector('input[name="step"]'),s=document.querySelector('input[name="amount"]');function c(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(o){o.preventDefault();for(let o=0;o<s.value;o+=1){const t=Number(u.value),n=Number(d.value);c(o+1,t+o*n).then((({position:o,delay:t})=>(console.log(`✅ Fulfilled promise ${o} in ${t}ms`),e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)))).catch((({position:o,delay:t})=>(console.log(`❌ Rejected promise ${o} in ${t}ms`),e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`))))}l.reset()}));
//# sourceMappingURL=03-promises.df3affeb.js.map
