import{S as t,i as e,s as n,e as o,c as a,a as r,d as s,b as l,G as c,N as i,f as d,I as u,V as g,j as m,k as p,m as h,n as b,o as $,H as f,W as k,X as v,Y as y,x as I,u as E,v as M,t as C,g as w,h as T,r as x,w as A,a1 as j,a2 as H}from"./vendor-b3b3a727.js";function D(t){let e;return{c(){e=o("div"),this.h()},l(t){e=a(t,"DIV",{class:!0,style:!0}),r(e).forEach(s),this.h()},h(){l(e,"class","backdrop svelte-jl06pf"),c(e,"--additional-height",t[3]),c(e,"--bg-image",t[0]),c(e,"--bg-image-mobile",t[1]),c(e,"--bg-color",t[2]),i(e,"additional-height",null!=t[3])},m(t,n){d(t,e,n)},p(t,[n]){8&n&&c(e,"--additional-height",t[3]),1&n&&c(e,"--bg-image",t[0]),2&n&&c(e,"--bg-image-mobile",t[1]),4&n&&c(e,"--bg-color",t[2]),8&n&&i(e,"additional-height",null!=t[3])},i:u,o:u,d(t){t&&s(e)}}}function V(t,e,n){let{backgroundImage:o=null}=e,{backgroundImageMobile:a=null}=e,{backgroundColor:r=null}=e,{additionalHeight:s=null}=e;return o=o?`url('${o}')`:"none",a=a?`url('${a}')`:"none",t.$$set=t=>{"backgroundImage"in t&&n(0,o=t.backgroundImage),"backgroundImageMobile"in t&&n(1,a=t.backgroundImageMobile),"backgroundColor"in t&&n(2,r=t.backgroundColor),"additionalHeight"in t&&n(3,s=t.additionalHeight)},[o,a,r,s]}class S extends t{constructor(t){super(),e(this,t,V,D,n,{backgroundImage:0,backgroundImageMobile:1,backgroundColor:2,additionalHeight:3})}}function N(t){let e,n,i,u,C,w;n=new S({props:{backgroundColor:t[0]}});const T=t[2].default,x=g(T,t,t[1],null);return{c(){e=o("section"),m(n.$$.fragment),i=p(),u=o("div"),C=p(),x&&x.c(),this.h()},l(t){e=a(t,"SECTION",{class:!0});var o=r(e);h(n.$$.fragment,o),i=b(o),u=a(o,"DIV",{class:!0,style:!0}),r(u).forEach(s),C=b(o),x&&x.l(o),o.forEach(s),this.h()},h(){l(u,"class","backdrop svelte-1xsx4kg"),c(u,"background-color",t[0]),l(e,"class","wrapper svelte-1xsx4kg")},m(t,o){d(t,e,o),$(n,e,null),f(e,i),f(e,u),f(e,C),x&&x.m(e,null),w=!0},p(t,[e]){const o={};1&e&&(o.backgroundColor=t[0]),n.$set(o),(!w||1&e)&&c(u,"background-color",t[0]),x&&x.p&&(!w||2&e)&&k(x,T,t,t[1],w?y(T,t[1],e,null):v(t[1]),null)},i(t){w||(I(n.$$.fragment,t),I(x,t),w=!0)},o(t){E(n.$$.fragment,t),E(x,t),w=!1},d(t){t&&s(e),M(n),x&&x.d(t)}}}function O(t,e,n){let{$$slots:o={},$$scope:a}=e,{backgroundColor:r="transparent"}=e;return t.$$set=t=>{"backgroundColor"in t&&n(0,r=t.backgroundColor),"$$scope"in t&&n(1,a=t.$$scope)},[r,a,o]}class _ extends t{constructor(t){super(),e(this,t,O,N,n,{backgroundColor:0})}}const q=t=>({}),z=t=>({});function G(t){let e,n;const c=t[6].visual,i=g(c,t,t[5],z);return{c(){e=o("div"),i&&i.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);i&&i.l(n),n.forEach(s),this.h()},h(){l(e,"class","visual svelte-myvy0m")},m(t,o){d(t,e,o),i&&i.m(e,null),n=!0},p(t,e){i&&i.p&&(!n||32&e)&&k(i,c,t,t[5],n?y(c,t[5],e,q):v(t[5]),z)},i(t){n||(I(i,t),n=!0)},o(t){E(i,t),n=!1},d(t){t&&s(e),i&&i.d(t)}}}function W(t){let e,n,c,i,u,j,H,D,V;n=new S({props:{backgroundImage:t[1],backgroundImageMobile:t[2],additionalHeight:"var(--header-height)"}});const N=t[6].default,O=g(N,t,t[5],null);let _=t[3].visual&&G(t);return{c(){e=o("section"),m(n.$$.fragment),c=p(),i=o("div"),u=o("h1"),j=C(t[0]),H=p(),O&&O.c(),D=p(),_&&_.c(),this.h()},l(o){e=a(o,"SECTION",{class:!0});var l=r(e);h(n.$$.fragment,l),c=b(l),i=a(l,"DIV",{class:!0});var d=r(i);u=a(d,"H1",{class:!0});var g=r(u);j=w(g,t[0]),g.forEach(s),H=b(d),O&&O.l(d),d.forEach(s),D=b(l),_&&_.l(l),l.forEach(s),this.h()},h(){l(u,"class","svelte-myvy0m"),l(i,"class","title-section svelte-myvy0m"),l(e,"class","wrapper svelte-myvy0m")},m(t,o){d(t,e,o),$(n,e,null),f(e,c),f(e,i),f(i,u),f(u,j),f(i,H),O&&O.m(i,null),f(e,D),_&&_.m(e,null),V=!0},p(t,[n]){(!V||1&n)&&T(j,t[0]),O&&O.p&&(!V||32&n)&&k(O,N,t,t[5],V?y(N,t[5],n,null):v(t[5]),null),t[3].visual?_?(_.p(t,n),8&n&&I(_,1)):(_=G(t),_.c(),I(_,1),_.m(e,null)):_&&(x(),E(_,1,1,(()=>{_=null})),A())},i(t){V||(I(n.$$.fragment,t),I(O,t),I(_),V=!0)},o(t){E(n.$$.fragment,t),E(O,t),E(_),V=!1},d(t){t&&s(e),M(n),O&&O.d(t),_&&_.d()}}}function X(t,e,n){let{$$slots:o={},$$scope:a}=e;const r=j(o);let{title:s}=e,{backgroundImage:l="default"}=e,c=`/images/backdrops/${l}.jpg`,i=`/images/backdrops/${l}-mobile.jpg`;return t.$$set=t=>{"title"in t&&n(0,s=t.title),"backgroundImage"in t&&n(4,l=t.backgroundImage),"$$scope"in t&&n(5,a=t.$$scope)},[s,c,i,r,l,a,o]}class Y extends t{constructor(t){super(),e(this,t,X,W,n,{title:0,backgroundImage:4})}}function B(t){let e,n,r,c,i,d,g,m,p,h;return document.title=e=t[0],{c(){n=o("meta"),r=o("meta"),c=o("meta"),i=o("meta"),d=o("meta"),g=o("meta"),m=o("meta"),p=o("meta"),h=o("meta"),this.h()},l(t){const e=H('[data-svelte="svelte-wfxfbq"]',document.head);n=a(e,"META",{name:!0,content:!0}),r=a(e,"META",{property:!0,content:!0}),c=a(e,"META",{property:!0,content:!0}),i=a(e,"META",{property:!0,content:!0}),d=a(e,"META",{property:!0,content:!0}),g=a(e,"META",{property:!0,content:!0}),m=a(e,"META",{property:!0,content:!0}),p=a(e,"META",{property:!0,content:!0}),h=a(e,"META",{name:!0,content:!0}),e.forEach(s),this.h()},h(){l(n,"name","description"),l(n,"content",t[1]),l(r,"property","og:title"),l(r,"content",t[0]),l(c,"property","og:description"),l(c,"content",t[1]),l(i,"property","og:image"),l(i,"content","/images/opengraph.jpg"),l(d,"property","twitter:card"),l(d,"content","summary_large_image"),l(g,"property","twitter:title"),l(g,"content",t[0]),l(m,"property","twitter:description"),l(m,"content",t[1]),l(p,"property","twitter:image"),l(p,"content","/images/opengraph.jpg"),l(h,"name","keywords"),l(h,"content","javascript dragndrop drag and drop drag'n'drop file upload image preview")},m(t,e){f(document.head,n),f(document.head,r),f(document.head,c),f(document.head,i),f(document.head,d),f(document.head,g),f(document.head,m),f(document.head,p),f(document.head,h)},p(t,[o]){1&o&&e!==(e=t[0])&&(document.title=e),2&o&&l(n,"content",t[1]),1&o&&l(r,"content",t[0]),2&o&&l(c,"content",t[1]),1&o&&l(g,"content",t[0]),2&o&&l(m,"content",t[1])},i:u,o:u,d(t){s(n),s(r),s(c),s(i),s(d),s(g),s(m),s(p),s(h)}}}function F(t,e,n){let{title:o="Dropzone"}=e,{description:a="Tools to build great forms."}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,a=t.description)},[o,a]}class J extends t{constructor(t){super(),e(this,t,F,B,n,{title:0,description:1})}}export{_ as C,Y as I,J as S};
