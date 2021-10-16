import{S as t,i as e,s as n,e as o,c as a,a as s,d as r,b as c,N as l,f as i,I as d,V as u,W as p,X as g,Y as m,x as h,u as $,j as f,k as b,t as k,m as v,n as y,g as E,o as I,H as w,h as C,r as x,w as T,v as A,$ as M,G as H,a0 as j}from"./vendor-e97f695b.js";function D(t){let e;return{c(){e=o("div"),this.h()},l(t){e=a(t,"DIV",{class:!0,style:!0}),s(e).forEach(r),this.h()},h(){c(e,"class","backdrop svelte-11euqxw"),c(e,"style",t[1]),l(e,"additional-height",null!=t[0])},m(t,n){i(t,e,n)},p(t,[n]){2&n&&c(e,"style",t[1]),1&n&&l(e,"additional-height",null!=t[0])},i:d,o:d,d(t){t&&r(e)}}}function V(t,e,n){let{backgroundImage:o=null}=e,{backgroundColor:a=null}=e,{additionalHeight:s=null}=e,r=o?`background-image: url("${o}");`:`background-color: ${a};`;return r+=`--additional-height: ${s};`,t.$$set=t=>{"backgroundImage"in t&&n(2,o=t.backgroundImage),"backgroundColor"in t&&n(3,a=t.backgroundColor),"additionalHeight"in t&&n(0,s=t.additionalHeight)},[s,r,o,a]}class S extends t{constructor(t){super(),e(this,t,V,D,n,{backgroundImage:2,backgroundColor:3,additionalHeight:0})}}const N=t=>({}),q=t=>({});function O(t){let e,n;const l=t[4].visual,d=u(l,t,t[3],q);return{c(){e=o("div"),d&&d.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=s(e);d&&d.l(n),n.forEach(r),this.h()},h(){c(e,"class","visual svelte-myvy0m")},m(t,o){i(t,e,o),d&&d.m(e,null),n=!0},p(t,e){d&&d.p&&(!n||8&e)&&p(d,l,t,t[3],n?m(l,t[3],e,N):g(t[3]),q)},i(t){n||(h(d,t),n=!0)},o(t){$(d,t),n=!1},d(t){t&&r(e),d&&d.d(t)}}}function _(t){let e,n,l,d,M,H,j,D,V;n=new S({props:{backgroundImage:t[1],additionalHeight:"var(--header-height)"}});const N=t[4].default,q=u(N,t,t[3],null);let _=t[2].visual&&O(t);return{c(){e=o("section"),f(n.$$.fragment),l=b(),d=o("div"),M=o("h1"),H=k(t[0]),j=b(),q&&q.c(),D=b(),_&&_.c(),this.h()},l(o){e=a(o,"SECTION",{class:!0});var c=s(e);v(n.$$.fragment,c),l=y(c),d=a(c,"DIV",{class:!0});var i=s(d);M=a(i,"H1",{class:!0});var u=s(M);H=E(u,t[0]),u.forEach(r),j=y(i),q&&q.l(i),i.forEach(r),D=y(c),_&&_.l(c),c.forEach(r),this.h()},h(){c(M,"class","svelte-myvy0m"),c(d,"class","title-section svelte-myvy0m"),c(e,"class","wrapper svelte-myvy0m")},m(t,o){i(t,e,o),I(n,e,null),w(e,l),w(e,d),w(d,M),w(M,H),w(d,j),q&&q.m(d,null),w(e,D),_&&_.m(e,null),V=!0},p(t,[o]){const a={};2&o&&(a.backgroundImage=t[1]),n.$set(a),(!V||1&o)&&C(H,t[0]),q&&q.p&&(!V||8&o)&&p(q,N,t,t[3],V?m(N,t[3],o,null):g(t[3]),null),t[2].visual?_?(_.p(t,o),4&o&&h(_,1)):(_=O(t),_.c(),h(_,1),_.m(e,null)):_&&(x(),$(_,1,1,(()=>{_=null})),T())},i(t){V||(h(n.$$.fragment,t),h(q,t),h(_),V=!0)},o(t){$(n.$$.fragment,t),$(q,t),$(_),V=!1},d(t){t&&r(e),A(n),q&&q.d(t),_&&_.d()}}}function z(t,e,n){let{$$slots:o={},$$scope:a}=e;const s=M(o);let{title:r}=e,{backgroundImage:c="/images/backdrops/default.jpg"}=e;return t.$$set=t=>{"title"in t&&n(0,r=t.title),"backgroundImage"in t&&n(1,c=t.backgroundImage),"$$scope"in t&&n(3,a=t.$$scope)},[r,c,s,a,o]}class G extends t{constructor(t){super(),e(this,t,z,_,n,{title:0,backgroundImage:1})}}function W(t){let e,n,l,d,k,E;n=new S({props:{backgroundColor:t[0]}});const C=t[2].default,x=u(C,t,t[1],null);return{c(){e=o("section"),f(n.$$.fragment),l=b(),d=o("div"),k=b(),x&&x.c(),this.h()},l(t){e=a(t,"SECTION",{class:!0});var o=s(e);v(n.$$.fragment,o),l=y(o),d=a(o,"DIV",{class:!0,style:!0}),s(d).forEach(r),k=y(o),x&&x.l(o),o.forEach(r),this.h()},h(){c(d,"class","backdrop svelte-1xsx4kg"),H(d,"background-color",t[0]),c(e,"class","wrapper svelte-1xsx4kg")},m(t,o){i(t,e,o),I(n,e,null),w(e,l),w(e,d),w(e,k),x&&x.m(e,null),E=!0},p(t,[e]){const o={};1&e&&(o.backgroundColor=t[0]),n.$set(o),(!E||1&e)&&H(d,"background-color",t[0]),x&&x.p&&(!E||2&e)&&p(x,C,t,t[1],E?m(C,t[1],e,null):g(t[1]),null)},i(t){E||(h(n.$$.fragment,t),h(x,t),E=!0)},o(t){$(n.$$.fragment,t),$(x,t),E=!1},d(t){t&&r(e),A(n),x&&x.d(t)}}}function X(t,e,n){let{$$slots:o={},$$scope:a}=e,{backgroundColor:s="transparent"}=e;return t.$$set=t=>{"backgroundColor"in t&&n(0,s=t.backgroundColor),"$$scope"in t&&n(1,a=t.$$scope)},[s,a,o]}class Y extends t{constructor(t){super(),e(this,t,X,W,n,{backgroundColor:0})}}function B(t){let e,n,s,l,i,u,p,g,m,h;return document.title=e=t[0],{c(){n=o("meta"),s=o("meta"),l=o("meta"),i=o("meta"),u=o("meta"),p=o("meta"),g=o("meta"),m=o("meta"),h=o("meta"),this.h()},l(t){const e=j('[data-svelte="svelte-wfxfbq"]',document.head);n=a(e,"META",{name:!0,content:!0}),s=a(e,"META",{property:!0,content:!0}),l=a(e,"META",{property:!0,content:!0}),i=a(e,"META",{property:!0,content:!0}),u=a(e,"META",{property:!0,content:!0}),p=a(e,"META",{property:!0,content:!0}),g=a(e,"META",{property:!0,content:!0}),m=a(e,"META",{property:!0,content:!0}),h=a(e,"META",{name:!0,content:!0}),e.forEach(r),this.h()},h(){c(n,"name","description"),c(n,"content",t[1]),c(s,"property","og:title"),c(s,"content",t[0]),c(l,"property","og:description"),c(l,"content",t[1]),c(i,"property","og:image"),c(i,"content","/images/opengraph.jpg"),c(u,"property","twitter:card"),c(u,"content","summary_large_image"),c(p,"property","twitter:title"),c(p,"content",t[0]),c(g,"property","twitter:description"),c(g,"content",t[1]),c(m,"property","twitter:image"),c(m,"content","/images/opengraph.jpg"),c(h,"name","keywords"),c(h,"content","javascript dragndrop drag and drop drag'n'drop file upload image preview")},m(t,e){w(document.head,n),w(document.head,s),w(document.head,l),w(document.head,i),w(document.head,u),w(document.head,p),w(document.head,g),w(document.head,m),w(document.head,h)},p(t,[o]){1&o&&e!==(e=t[0])&&(document.title=e),2&o&&c(n,"content",t[1]),1&o&&c(s,"content",t[0]),2&o&&c(l,"content",t[1]),1&o&&c(p,"content",t[0]),2&o&&c(g,"content",t[1])},i:d,o:d,d(t){r(n),r(s),r(l),r(i),r(u),r(p),r(g),r(m),r(h)}}}function F(t,e,n){let{title:o="Dropzone"}=e,{description:a="Tools to build great forms."}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,a=t.description)},[o,a]}class J extends t{constructor(t){super(),e(this,t,F,B,n,{title:0,description:1})}}export{Y as C,G as I,J as S};
