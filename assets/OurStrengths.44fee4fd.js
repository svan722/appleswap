import{s as g,m as d,$ as n,x as s,G as o,a0 as r,F as x,H as l,D as e,Z as p,a8 as f}from"./index.d1971cae.js";var v="/assets/item_1.cd5aaa6f.png",b="/assets/item_2.135f8c81.png",y="/assets/item_3.6246e089.png",I="/assets/item_4.8f31f885.png",w="/assets/item_5.0963f613.png",k="/assets/item_6.e2213765.png";const D={setup(){const{t}=d(),a=[{title:t("routes.home.our_strengths.title_item_6"),content:t("routes.home.our_strengths.content_item_6"),image:k},{title:t("routes.home.our_strengths.title_item_1"),content:t("routes.home.our_strengths.content_item_1"),image:v},{title:t("routes.home.our_strengths.title_item_2"),content:t("routes.home.our_strengths.content_item_2"),image:b},{title:t("routes.home.our_strengths.title_item_3"),content:t("routes.home.our_strengths.content_item_3"),image:y},{title:t("routes.home.our_strengths.title_item_4"),content:t("routes.home.our_strengths.content_item_4"),image:I},{title:t("routes.home.our_strengths.title_item_5"),content:t("routes.home.our_strengths.content_item_5"),image:w}];return{t,listItem:a}}},B={class:"bg-[#100C15] flex flex-col w-full items-center justify-center p-12 mobile:p-3"},$={class:"text-5xl mobile:text-2xl tablet:text-4xl !text-white font-semibold my-18"},F={class:"w-full max-w-[1200px] flex flex-col gap-5"},N={class:"grid grid-cols-3 tablet:grid-cols-2 gap-[34px] mobile:grid-cols-1"},S={class:"w-full flex mb-[30px] min-h-[300px]"},T=["enter","src"],V={class:"w-full flex flex-col gap-[26px]"},j={class:"text-yellow-1 text-2xl font-semibold mobile:text-center"},C={class:"text-neuture-500 text-sm mobile:text-center"};function E(t,a,G,_,H,L){const c=n("motion-title-session"),u=n("motion"),h=n("motion-item-strengths");return s(),o("div",B,[r((s(),o("h2",$,[x(l(_.t("routes.home.our_strengths.title_main")),1)])),[[c]]),e("div",F,[e("div",N,[(s(!0),o(p,null,f(_.listItem,(i,m)=>r((s(),o("div",{key:m+"our-strengths-bottom",style:{background:"radial-gradient(110.76% 110.76% at 50% 4.54%, #1d1625 0%, #100c15 100%)"},class:"w-full cart-item-hover-scale rounded-[32px] p-[45px] tablet:p-6 mobile:p-6"},[e("div",S,[r(e("img",{initial:{y:2,x:3,scale:1},enter:{y:-2,x:-3,scale:1.1,transition:{delay:m%2===0?2e3:0,repeat:1/0,repeatType:"mirror",duration:2e3}},class:"m-auto",src:i.image},null,8,T),[[u]])]),e("div",V,[e("p",j,l(i.title),1),e("p",C,l(i.content),1)])])),[[h]])),128))])])])}var Z=g(D,[["render",E]]);export{Z as default};