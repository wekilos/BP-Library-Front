(self.webpackChunke_test_admin=self.webpackChunke_test_admin||[]).push([[268],{9106:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var l=s(5043);const a=s.p+"static/media/titleLeft.246e871d9f7018c6d768ebe30951c348.svg";const c=s.p+"static/media/titleRight.217164b96fc5efa149155001afd8c2f0.svg";const i=s.p+"static/media/titleBottom.e977b9427bf0bbac814cdcf66665e57c.svg";var n=s(579);const r=e=>{let{text:t}=e;return(0,n.jsxs)("div",{className:"flex justify-center items-center flex-wrap",children:[(0,n.jsxs)("div",{className:" w-full flex items-center justify-center gap-6",children:[(0,n.jsx)("img",{className:"w-[60px]  object-contain",src:a,alt:"left"}),(0,n.jsx)("p",{className:"m-0 text-[30px] font-[400] ",children:t}),(0,n.jsx)("img",{className:"w-[60px]  object-contain",src:c,alt:"right"})]}),(0,n.jsx)("div",{className:"w-full flex justify-center",children:(0,n.jsx)("img",{className:" w-[60px] object-contain",src:i,alt:"bottom"})})]})},o=l.memo(r)},4472:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var l=s(5043),a=s(1688),c=s(6811),i=s(9106),n=s(6534),r=s(6950),o=s(4214),x=s(579);const d=()=>{var e;(0,a.W6)();const{id:t}=(0,a.g)(),[s,d]=(0,l.useState)(),[m,f]=(0,l.useState)(!1);(0,l.useEffect)((()=>{p()}),[t]);const p=()=>{c.S.get("/api/item/"+t).then((e=>{console.log(e.data),d(e.data)})).catch((e=>{console.log(e)}))};return(0,x.jsxs)("div",{className:"w-full",children:[(0,x.jsx)(i.A,{text:null===s||void 0===s||null===(e=s.Category)||void 0===e?void 0:e.name_tm}),(0,x.jsxs)("div",{className:"w-full mt-10 flex justify-start gap-8 items-start",children:[(0,x.jsx)("img",{className:"w-[250px] object-contain rounded-[12px]",src:c.C+(null===s||void 0===s?void 0:s.placeholder),alt:""}),(0,x.jsxs)("div",{className:"w-full",children:[(0,x.jsx)("h1",{className:"text-black text-[30px]",children:null===s||void 0===s?void 0:s.name_tm}),(0,x.jsxs)("div",{className:"w-full my-8",children:[(0,x.jsxs)("div",{className:"flex w-full my-4 items-center justify-between",children:[(0,x.jsx)("p",{className:"w-[100px]  text-[16px] text-black font-[400]",children:"Awtor:"}),(0,x.jsx)("h1",{className:"w-full text-[16px] text-black font-[600]",children:null===s||void 0===s?void 0:s.author})]}),(0,x.jsxs)("div",{className:"flex w-full my-4 items-center justify-between",children:[(0,x.jsx)("p",{className:"w-[100px] text-[16px] text-black font-[400]",children:"\xddyly:"}),(0,x.jsx)("h1",{className:"w-full text-[16px] text-black font-[600]",children:null===s||void 0===s?void 0:s.year})]}),(0,x.jsxs)("div",{className:"flex w-full my-4 items-center justify-between",children:[(0,x.jsx)("p",{className:"w-[100px] text-[16px] text-black font-[400]",children:"Ne\u015firi\xfdat:"}),(0,x.jsx)("h1",{className:"w-full text-[16px] text-black font-[600]",children:null===s||void 0===s?void 0:s.publishing})]})]}),(0,x.jsxs)("div",{className:"flex gap-4 justify-start items-center",children:[(0,x.jsxs)("button",{onClick:()=>{window.open(c.C+(null===s||void 0===s?void 0:s.CategoryItemFiles[0].filename),"_blank")},className:"bg-main flex gap-3 items-center text-white rounded-[5px] text-[18px] py-2 px-7",children:[(0,x.jsx)(n.A,{className:"text-white"})," \xdd\xfckle"]}),(0,x.jsxs)("button",{onClick:()=>f(!0),className:"bg-main flex gap-3 items-center text-white rounded-[5px] text-[18px] py-2 px-7",children:[(0,x.jsx)(r.A,{className:"text-white"})," Oka"]})]})]})]}),m&&(0,x.jsx)("div",{className:"w-full mt-2 p-2 h-[75vh] overflow-y-auto scrollbar-hide",children:(0,x.jsx)(o.Ay,{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",documents:[{uri:c.C+(null===s||void 0===s?void 0:s.placeholder)}],pluginRenderers:[o.c0,o.BH],theme:{primary:"#5296d8",secondary:"#ffffff",tertiary:"#5296d899",textPrimary:"#ffffff",textSecondary:"#5296d8",textTertiary:"#00000099",disableThemeScrollbar:!1}})})]})}},6811:(e,t,s)=>{"use strict";s.d(t,{C:()=>a,S:()=>c});var l=s(7154);const a="http://192.168.7.179:8282/";console.log(a);const c=l.A.create({baseURL:a,timeout:1e7,headers:{Authorization:"Bearer "+(()=>{if(JSON.parse(localStorage.getItem("userData")))return JSON.parse(localStorage.getItem("userData")).token})(),"Content-Type":"multipart/form-data",Accept:"application/json"}})},7640:()=>{},3237:()=>{},7492:()=>{},1815:()=>{},6671:()=>{},2787:()=>{}}]);
//# sourceMappingURL=268.dc4c8161.chunk.js.map