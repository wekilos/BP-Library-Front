"use strict";(self.webpackChunke_test_front=self.webpackChunke_test_front||[]).push([[344],{7011:(e,t,l)=>{l.d(t,{A:()=>d});var i=l(5043),s=l(1688),a=l(2382);l(3286),l(7454);l.p;var n=l(6811),o=l(579);const c=e=>{let{slides:t}=e;const l=(0,s.W6)();return(0,o.jsx)("div",{className:"w-full h-300px]",children:(0,o.jsx)(a.A,{dots:!1,arrows:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:4,children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,o.jsx)("div",{onClick:()=>l.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"h-[300px] w-[auto] cursor-pointer ",children:(0,o.jsx)("img",{className:"object-contain h-full",src:n.C+(null===e||void 0===e?void 0:e.placeholder),alt:""})},"surat"+t)))})})},d=i.memo(c)},9106:(e,t,l)=>{l.d(t,{A:()=>d});var i=l(5043);const s=l.p+"static/media/titleLeft.246e871d9f7018c6d768ebe30951c348.svg";const a=l.p+"static/media/titleRight.217164b96fc5efa149155001afd8c2f0.svg";const n=l.p+"static/media/titleBottom.e977b9427bf0bbac814cdcf66665e57c.svg";var o=l(579);const c=e=>{let{text:t}=e;return(0,o.jsxs)("div",{className:"flex justify-center items-center flex-wrap",children:[(0,o.jsxs)("div",{className:" w-full flex items-center justify-center gap-6",children:[(0,o.jsx)("img",{className:"w-[60px]  object-contain",src:s,alt:"left"}),(0,o.jsx)("p",{className:"m-0 text-[30px] font-[400] ",children:t}),(0,o.jsx)("img",{className:"w-[60px]  object-contain",src:a,alt:"right"})]}),(0,o.jsx)("div",{className:"w-full flex justify-center",children:(0,o.jsx)("img",{className:" w-[60px] object-contain",src:n,alt:"bottom"})})]})},d=i.memo(c)},2825:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var i=l(5043),s=l(9106),a=(l(7011),l(6811)),n=l(1688),o=l(9964),c=l(579);const d=()=>{var e,t,l,d;const{id:r,q:m}=(0,n.g)(),x=(0,n.W6)(),[p,u]=(0,i.useState)(!1),[v,h]=(0,i.useState)([]),[f,j]=(0,i.useState)({page:1,limit:20});(0,i.useEffect)((()=>{g()}),[r,m,f]);const g=()=>{u(!0);let e=m&&(null===m||void 0===m?void 0:m.length)>0?m.slice(2):"";console.log(e),a.S.get("/api/category/"+(null===r||void 0===r?void 0:r.slice(3)),{params:{search_query:e,page:f.page,limit:f.limit}}).then((e=>{console.log(e.data),h(e.data),u(!1)})).catch((e=>{console.log(e),u(!1)}))};return(0,c.jsx)("div",{className:"w-full",children:p?(0,c.jsx)(o.A,{}):(0,c.jsxs)("div",{children:[(null===v||void 0===v||null===(e=v.CategoryItems)||void 0===e?void 0:e.length)>0&&"string"===(null===v||void 0===v?void 0:v.CategoryItems[0].card_type)&&(0,c.jsxs)("div",{className:"w-full my-5 min-h-fit",children:[(0,c.jsx)(s.A,{text:null===v||void 0===v?void 0:v.name_tm}),(0,c.jsx)("div",{className:"flex justify-evenly w-full my-2 flex-wrap",children:null===v||void 0===v||null===(t=v.CategoryItems)||void 0===t?void 0:t.map(((e,t)=>(0,c.jsx)("div",{onClick:()=>x.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"cursor-pointer leading-[62px] text-center my-2 px-4 whitespace-normal line-clamp-1   w-[45%] h-[62px] bg-[#f1f1f1] rounded-[10px] text-[18px] shadow-md",children:null===e||void 0===e?void 0:e.name_tm},"item"+t)))}),(0,c.jsx)("div",{className:"flex justify-center mt-2",children:(0,c.jsx)("button",{onClick:()=>x.push({pathname:"/id="+(null===v||void 0===v?void 0:v.id)+"/q="}),className:"bg-main text-white rounded-[5px] text-[18px] py-2 px-7",children:"\xc4hlisi"})})]}),(null===v||void 0===v||null===(l=v.CategoryItems)||void 0===l?void 0:l.length)>0&&"card"===(null===v||void 0===v?void 0:v.CategoryItems[0].card_type)&&(0,c.jsxs)("div",{className:"w-full my-5 min-h-fit",children:[(0,c.jsx)(s.A,{text:null===v||void 0===v?void 0:v.name_tm}),(0,c.jsx)("div",{className:"flex pl-[2%] justify-start gap-[2%] my-2 w-full flex-wrap",children:null===v||void 0===v||null===(d=v.CategoryItems)||void 0===d?void 0:d.map(((e,t)=>(0,c.jsxs)("div",{onClick:()=>x.push({pathname:"/item/"+(null===e||void 0===e?void 0:e.id)}),className:"cursor-pointer rounded-[8px] my-[2%] min-w-[200px] w-[23%]  shadow-sm",children:[(0,c.jsx)("img",{className:"w-full object-contain rounded-t-[8px] ",src:a.C+(null===e||void 0===e?void 0:e.placeholder),alt:""}),(0,c.jsxs)("div",{className:"mt-3",children:[(0,c.jsx)("h1",{className:"text-[18px] m-0 p-0 text-black text-center",children:null===e||void 0===e?void 0:e.name_tm}),(0,c.jsx)("p",{className:"text-[16px] pb-2 m-0 p-0 text-black text-center",children:null===e||void 0===e?void 0:e.year})]})]},"item"+t)))}),(0,c.jsx)("div",{className:"flex justify-center mt-2",children:(0,c.jsx)("button",{onClick:()=>j({...f,limit:f.limit+8}),className:"bg-main text-white rounded-[5px] text-[18px] py-2 px-7",children:"\xc4hlisi"})})]})]})})}},6811:(e,t,l)=>{l.d(t,{C:()=>s,S:()=>a});var i=l(7154);const s="http://192.168.7.179:8282/";console.log(s);const a=i.A.create({baseURL:s,timeout:1e7,headers:{Authorization:"Bearer "+(()=>{if(JSON.parse(localStorage.getItem("userData")))return JSON.parse(localStorage.getItem("userData")).token})(),"Content-Type":"multipart/form-data",Accept:"application/json"}})}}]);
//# sourceMappingURL=344.6e5cc07c.chunk.js.map