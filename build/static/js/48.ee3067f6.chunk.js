"use strict";(self.webpackChunke_test_front=self.webpackChunke_test_front||[]).push([[48],{3312:(e,t,l)=>{l.d(t,{A:()=>r});var s=l(5043),i=l(1688),a=l(5673),n=l(3968),d=l(6811),o=l(579);const c=e=>{let{slides:t}=e;const l=(0,i.W6)(),c=(0,s.useRef)();return(0,o.jsxs)("div",{className:"w-full h-[300px] flex items-center gap-2 justify-between my-2",children:[(0,o.jsx)("div",{className:"bg-main cursor-pointer rounded-[100%] w-[20px]  h-[20px]  text-white flex justify-center items-center",children:(0,o.jsx)(a.A,{onClick:()=>{c.current.scrollBy(-224,0)},className:"text-white text-[12px] font-[900]"})}),(0,o.jsx)("div",{ref:c,className:"w-full flex  justify-start gap-6 overflow-x-auto scrollbar-hide",children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,o.jsx)("div",{onClick:()=>l.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"    min-w-[200px] w-[200px] cursor-pointer ",children:(0,o.jsx)("img",{className:"w-full object-contain",src:d.C+(null===e||void 0===e?void 0:e.placeholder),alt:""})},"surat"+t)))}),(0,o.jsx)("div",{className:"bg-main cursor-pointer rounded-[100%] w-[20px]  h-[20px]  text-white flex justify-center items-center",children:(0,o.jsx)(n.A,{onClick:()=>{c.current.scrollBy(224,0)},className:"text-white text-[18px]   font-[900]"})})]})},r=s.memo(c)},9106:(e,t,l)=>{l.d(t,{A:()=>c});var s=l(5043);const i=l.p+"static/media/titleLeft.246e871d9f7018c6d768ebe30951c348.svg";const a=l.p+"static/media/titleRight.217164b96fc5efa149155001afd8c2f0.svg";const n=l.p+"static/media/titleBottom.e977b9427bf0bbac814cdcf66665e57c.svg";var d=l(579);const o=e=>{let{text:t}=e;return(0,d.jsxs)("div",{className:"flex justify-center items-center flex-wrap",children:[(0,d.jsxs)("div",{className:" w-full flex items-center justify-center gap-6",children:[(0,d.jsx)("img",{className:"w-[60px]  object-contain",src:i,alt:"left"}),(0,d.jsx)("p",{className:"m-0 text-[30px] font-[400] ",children:t}),(0,d.jsx)("img",{className:"w-[60px]  object-contain",src:a,alt:"right"})]}),(0,d.jsx)("div",{className:"w-full flex justify-center",children:(0,d.jsx)("img",{className:" w-[60px] object-contain",src:n,alt:"bottom"})})]})},c=s.memo(o)},2048:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var s=l(5043),i=l(9106),a=l(3312),n=l(6811),d=l(1688),o=l(9964),c=l(579);const r=()=>{const{id:e,q:t}=(0,d.g)(),l=(0,d.W6)(),[r,m]=(0,s.useState)(!1),[x,u]=(0,s.useState)([]);(0,s.useEffect)((()=>{v()}),[e,t]);const v=()=>{m(!0);let e=t&&(null===t||void 0===t?void 0:t.length)>0?t.slice(2):"";console.log(e),n.S.get("/api/category/all",{params:{search_query:e}}).then((e=>{var t;console.log(e.data),u(null===(t=e.data)||void 0===t?void 0:t.rows),m(!1)})).catch((e=>{console.log(e),m(!1)}))};return(0,c.jsx)("div",{className:"w-full",children:r?(0,c.jsx)(o.A,{}):null===x||void 0===x?void 0:x.map(((e,t)=>{var s,d,o,r,m;return(0,c.jsxs)("div",{className:"w-full",children:[0===t&&(null===e||void 0===e||null===(s=e.CategoryItems)||void 0===s?void 0:s.length)>0&&(0,c.jsxs)("div",{className:"w-full mb-5 min-h-fit",children:[(0,c.jsx)(i.A,{text:null===e||void 0===e?void 0:e.name_tm}),(0,c.jsx)("div",{className:"w-full py-2 ",children:(0,c.jsx)(a.A,{slides:null===e||void 0===e?void 0:e.CategoryItems})}),(0,c.jsx)("div",{className:"flex justify-center my-2",children:(0,c.jsx)("button",{onClick:()=>l.push({pathname:"/id="+(null===e||void 0===e?void 0:e.id)+"/q="}),className:"bg-main text-white rounded-[5px] text-[18px] py-2 px-7",children:"\xc4hlisi"})})]}),0!==t&&(null===e||void 0===e||null===(d=e.CategoryItems)||void 0===d?void 0:d.length)>0&&"string"===(null===e||void 0===e?void 0:e.CategoryItems[0].card_type)&&(0,c.jsxs)("div",{className:"w-full my-5 min-h-fit",children:[(0,c.jsx)(i.A,{text:null===e||void 0===e?void 0:e.name_tm}),(0,c.jsx)("div",{className:"flex justify-evenly w-full my-2 flex-wrap",children:null===e||void 0===e||null===(o=e.CategoryItems)||void 0===o?void 0:o.map(((e,t)=>(0,c.jsx)("div",{onClick:()=>l.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"cursor-pointer leading-[62px] text-center my-2 px-4 whitespace-normal line-clamp-1   w-[45%] h-[62px] bg-[#f1f1f1] rounded-[10px] text-[18px] shadow-md",children:null===e||void 0===e?void 0:e.name_tm},"item"+t)))}),(0,c.jsx)("div",{className:"flex justify-center mt-2",children:(0,c.jsx)("button",{onClick:()=>l.push({pathname:"/id="+(null===e||void 0===e?void 0:e.id)+"/q="}),className:"bg-main text-white rounded-[5px] text-[18px] py-2 px-7",children:"\xc4hlisi"})})]}),0!==t&&(null===e||void 0===e||null===(r=e.CategoryItems)||void 0===r?void 0:r.length)>0&&"card"===(null===e||void 0===e?void 0:e.CategoryItems[0].card_type)&&(0,c.jsxs)("div",{className:"w-full my-5 min-h-fit",children:[(0,c.jsx)(i.A,{text:null===e||void 0===e?void 0:e.name_tm}),(0,c.jsx)("div",{className:"flex pl-[2%] justify-start gap-[2%] my-2 w-full flex-wrap",children:null===e||void 0===e||null===(m=e.CategoryItems)||void 0===m?void 0:m.map(((e,t)=>(0,c.jsxs)("div",{onClick:()=>l.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"cursor-pointer rounded-[8px] my-[2%] min-w-[200px] w-[23%]  shadow-sm",children:[(0,c.jsx)("img",{className:"w-full object-contain rounded-t-[8px] ",src:n.C+(null===e||void 0===e?void 0:e.placeholder),alt:""}),(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsx)("h1",{className:"text-[18px] m-0 p-0 text-black text-center",children:null===e||void 0===e?void 0:e.name_tm}),(0,c.jsx)("p",{className:"text-[16px] pb-2 m-0 p-0 text-black text-center",children:null===e||void 0===e?void 0:e.year})]})]},"item"+t)))}),(0,c.jsx)("div",{className:"flex justify-center mt-2",children:(0,c.jsx)("button",{onClick:()=>l.push({pathname:"/id="+(null===e||void 0===e?void 0:e.id)+"/q="}),className:"bg-main text-white rounded-[5px] text-[18px] py-2 px-7",children:"\xc4hlisi"})})]})]},"cate"+t)}))})}},6811:(e,t,l)=>{l.d(t,{C:()=>i,S:()=>a});var s=l(7154);const i="http://192.168.7.179:8282/";console.log(i);const a=s.A.create({baseURL:i,timeout:1e7,headers:{Authorization:"Bearer "+(()=>{if(JSON.parse(localStorage.getItem("userData")))return JSON.parse(localStorage.getItem("userData")).token})(),"Content-Type":"multipart/form-data",Accept:"application/json"}})},5673:(e,t,l)=>{var s=l(4994);t.A=void 0;var i=s(l(39)),a=l(579);t.A=(0,i.default)((0,a.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft")},3968:(e,t,l)=>{var s=l(4994);t.A=void 0;var i=s(l(39)),a=l(579);t.A=(0,i.default)((0,a.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=48.ee3067f6.chunk.js.map