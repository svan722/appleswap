import{a as k,a5 as h,bv as K,bw as M,m as v,aF as g,r as p,w as I,s as b,v as r,x as A,y as T,z as n,c as t,F as o,H as s,O as _}from"./index.d1971cae.js";const w=k({components:{Menu:h,MenuItem:K,SubMenu:M},emits:["changePage"],setup(e,{emit:a}){const{t:c}=v(),{getIsMobile:l}=g(),m=p(["Introduction"]),i=p([""]);return I(()=>m.value,()=>{a("changePage",m.value[0])}),{t:c,selectedKeys:m,getIsMobile:l,openKeys:i}}});function C(e,a,c,l,m,i){const u=r("MenuItem"),y=r("SubMenu"),f=r("Menu");return A(),T(f,{openKeys:e.openKeys,"onUpdate:openKeys":a[0]||(a[0]=d=>e.openKeys=d),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":a[1]||(a[1]=d=>e.selectedKeys=d),style:_(`${e.getIsMobile?"":"width: 256px; min-height: calc(100vh - 80px)"}`),mode:"inline"},{default:n(()=>[t(u,{key:"Introduction"},{default:n(()=>[o(s(e.t("routes.home.document.menu.Introduction")),1)]),_:1}),t(u,{key:"Advantages"},{default:n(()=>[o(s(e.t("routes.home.document.menu.Advantages")),1)]),_:1}),t(y,{key:"Tokenomics"},{title:n(()=>[o(s(e.t("routes.home.document.menu.Tokenomics")),1)]),default:n(()=>[t(u,{key:"ApToken"},{default:n(()=>[o(s(e.t("routes.home.document.menu.ApToken")),1)]),_:1}),t(u,{key:"Allocation"},{default:n(()=>[o(s(e.t("routes.home.document.menu.Allocation")),1)]),_:1})]),_:1}),t(u,{key:"Transaction"},{default:n(()=>[o(s(e.t("routes.home.document.menu.Transaction")),1)]),_:1}),t(u,{key:"Community"},{default:n(()=>[o(s(e.t("routes.home.document.menu.Community")),1)]),_:1}),t(u,{key:"Privacy"},{default:n(()=>[o(s(e.t("routes.home.document.menu.Privacy")),1)]),_:1})]),_:1},8,["openKeys","selectedKeys","style"])}var $=b(w,[["render",C]]);export{$ as default};