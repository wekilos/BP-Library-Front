"use strict";(self.webpackChunke_test_front=self.webpackChunke_test_front||[]).push([[825],{3312:(e,t,l)=>{l.d(t,{A:()=>r});var s=l(5043),a=l(1688),i=l(5673),o=l(3968),n=l(6811),c=l(579);const d=e=>{let{slides:t}=e;const l=(0,a.W6)(),d=(0,s.useRef)();return(0,c.jsxs)("div",{className:"w-full h-[300px] flex items-center gap-2 justify-between my-2",children:[(0,c.jsx)("div",{className:"bg-main cursor-pointer rounded-[100%] w-[20px]  h-[20px]  text-white flex justify-center items-center",children:(0,c.jsx)(i.A,{onClick:()=>{d.current.scrollBy(-224,0)},className:"text-white text-[12px] font-[900]"})}),(0,c.jsx)("div",{ref:d,className:"w-full flex  justify-start gap-6 overflow-x-auto scrollbar-hide",children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,c.jsx)("div",{onClick:()=>l.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"    min-w-[200px] w-[200px] cursor-pointer ",children:(0,c.jsx)("img",{className:"w-full object-contain",src:n.C+(null===e||void 0===e?void 0:e.placeholder),alt:""})},"surat"+t)))}),(0,c.jsx)("div",{className:"bg-main cursor-pointer rounded-[100%] w-[20px]  h-[20px]  text-white flex justify-center items-center",children:(0,c.jsx)(o.A,{onClick:()=>{d.current.scrollBy(224,0)},className:"text-white text-[18px]   font-[900]"})})]})},r=s.memo(d)},9106:(e,t,l)=>{l.d(t,{A:()=>d});var s=l(5043);const a=l.p+"static/media/titleLeft.246e871d9f7018c6d768ebe30951c348.svg";const i=l.p+"static/media/titleRight.217164b96fc5efa149155001afd8c2f0.svg";const o=l.p+"static/media/titleBottom.e977b9427bf0bbac814cdcf66665e57c.svg";var n=l(579);const c=e=>{let{text:t}=e;return(0,n.jsxs)("div",{className:"flex justify-center items-center flex-wrap",children:[(0,n.jsxs)("div",{className:" w-full flex items-center justify-center gap-6",children:[(0,n.jsx)("img",{className:"w-[60px]  object-contain",src:a,alt:"left"}),(0,n.jsx)("p",{className:"m-0 text-[30px] font-[400] ",children:t}),(0,n.jsx)("img",{className:"w-[60px]  object-contain",src:i,alt:"right"})]}),(0,n.jsx)("div",{className:"w-full flex justify-center",children:(0,n.jsx)("img",{className:" w-[60px] object-contain",src:o,alt:"bottom"})})]})},d=s.memo(c)},2825:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var s=l(5043),a=l(9106),i=(l(3312),l(6811)),o=l(1688),n=l(9964),c=l(579);const d=()=>{var e,t,l,d;const{id:r,q:m}=(0,o.g)(),x=(0,o.W6)(),[u,p]=(0,s.useState)(!1),[v,f]=(0,s.useState)([]),[h,g]=(0,s.useState)({page:1,limit:20}),[j,y]=(0,s.useState)(!0);(0,s.useEffect)((()=>{w()}),[r,m,h]);const w=()=>{p(!0);let e=m&&(null===m||void 0===m?void 0:m.length)>0?m.slice(2):"";console.log(e),i.S.get("/api/category/"+(null===r||void 0===r?void 0:r.slice(3)),{params:{search_query:e,page:h.page,limit:h.limit}}).then((e=>{if(console.log(e.data),h.page>1){var t,l,s;let a=v.CategoryItems.concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.CategoryItems);f({...v,CategoryItems:a}),(null===e||void 0===e||null===(l=e.data)||void 0===l||null===(s=l.CategoryItems)||void 0===s?void 0:s.length)>0?y(!0):y(!1)}else f(e.data);p(!1)})).catch((e=>{console.log(e),p(!1)}))},N=()=>{g({...h,page:h.page+1})};return(0,c.jsx)("div",{className:"w-full",children:u?(0,c.jsx)(n.A,{}):(0,c.jsxs)("div",{children:[(null===v||void 0===v||null===(e=v.CategoryItems)||void 0===e?void 0:e.length)>0&&"string"===(null===v||void 0===v?void 0:v.CategoryItems[0].card_type)&&(0,c.jsxs)("div",{className:"w-full my-5 min-h-fit",children:[(0,c.jsx)(a.A,{text:null===v||void 0===v?void 0:v.name_tm}),(0,c.jsx)("div",{className:"flex justify-evenly w-full my-2 flex-wrap",children:null===v||void 0===v||null===(t=v.CategoryItems)||void 0===t?void 0:t.map(((e,t)=>(0,c.jsx)("div",{onClick:()=>x.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"cursor-pointer leading-[62px] text-center my-2 px-4 whitespace-normal line-clamp-1   w-[45%] h-[62px] bg-[#f1f1f1] rounded-[10px] text-[18px] shadow-md",children:null===e||void 0===e?void 0:e.name_tm},"item"+t)))}),(0,c.jsx)("div",{className:"flex justify-center mt-2",children:j&&(0,c.jsx)("button",{onClick:()=>N(),className:"bg-main text-white rounded-[5px] text-[18px] py-2 px-7",children:"Dowamy"})})]}),(null===v||void 0===v||null===(l=v.CategoryItems)||void 0===l?void 0:l.length)>0&&"card"===(null===v||void 0===v?void 0:v.CategoryItems[0].card_type)&&(0,c.jsxs)("div",{className:"w-full my-5 min-h-fit",children:[(0,c.jsx)(a.A,{text:null===v||void 0===v?void 0:v.name_tm}),(0,c.jsx)("div",{className:"flex pl-[2%] justify-start gap-[2%] my-2 w-full flex-wrap",children:null===v||void 0===v||null===(d=v.CategoryItems)||void 0===d?void 0:d.map(((e,t)=>(0,c.jsxs)("div",{onClick:()=>x.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"cursor-pointer rounded-[8px] my-[2%] min-w-[200px] w-[23%]  shadow-sm",children:[(0,c.jsx)("img",{className:"w-full object-contain rounded-t-[8px] ",src:i.C+(null===e||void 0===e?void 0:e.placeholder),alt:""}),(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsx)("h1",{className:"text-[18px] m-0 p-0 text-black text-center",children:null===e||void 0===e?void 0:e.name_tm}),(0,c.jsx)("p",{className:"text-[16px] pb-2 m-0 p-0 text-black text-center",children:null===e||void 0===e?void 0:e.year})]})]},"item"+t)))}),(0,c.jsx)("div",{className:"flex justify-center mt-2",children:j&&(0,c.jsx)("button",{onClick:()=>N(),className:"bg-main text-white rounded-[5px] text-[18px] py-2 px-7",children:"Dowamy"})})]})]})})}},6811:(e,t,l)=>{l.d(t,{C:()=>a,S:()=>i});var s=l(7154);const a="http://192.168.7.179:8282/";console.log(a);const i=s.A.create({baseURL:a,timeout:1e7,headers:{Authorization:"Bearer "+(()=>{if(JSON.parse(localStorage.getItem("userData")))return JSON.parse(localStorage.getItem("userData")).token})(),"Content-Type":"multipart/form-data",Accept:"application/json"}})},5673:(e,t,l)=>{var s=l(4994);t.A=void 0;var a=s(l(39)),i=l(579);t.A=(0,a.default)((0,i.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft")},3968:(e,t,l)=>{var s=l(4994);t.A=void 0;var a=s(l(39)),i=l(579);t.A=(0,a.default)((0,i.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=825.6977f78f.chunk.js.map