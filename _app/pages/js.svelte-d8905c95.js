import{S as t,i as e,s,e as o,j as n,k as r,t as a,c,a as l,m as i,d as $,n as u,g as f,b as d,f as p,H as m,o as h,h as g,x as v,u as y,v as w,r as b,w as x,a3 as D,a4 as k,_ as z,I as E,a0 as I,a5 as S}from"../chunks/vendor-b3b3a727.js";import{A as j}from"../chunks/Actions-bdf033d1.js";import{S as P,t as G,e as T,b as _}from"../chunks/StyledLink-7c1f5274.js";import{S as H,I as A,C as q}from"../chunks/Seo-88eaa937.js";import{_ as V}from"../chunks/preload-helper-ec9aa979.js";import{H as N}from"../chunks/Heading-83db6aa4.js";import{M as O,a as B}from"../chunks/MainFeatures-9b136232.js";function F(t,e,s){const o=t.slice();return o[1]=e[s],o}function M(t){let e,s,b,x,D,z,E,I,S=t[1]+"";return b=new k({}),{c(){e=o("li"),s=o("span"),n(b.$$.fragment),x=r(),D=o("span"),z=a(S),E=r(),this.h()},l(t){e=c(t,"LI",{class:!0});var o=l(e);s=c(o,"SPAN",{class:!0});var n=l(s);i(b.$$.fragment,n),n.forEach($),x=u(o),D=c(o,"SPAN",{class:!0});var r=l(D);z=f(r,S),r.forEach($),E=u(o),o.forEach($),this.h()},h(){d(s,"class","icon svelte-va4f19"),d(D,"class","text svelte-va4f19"),d(e,"class","svelte-va4f19")},m(t,o){p(t,e,o),m(e,s),h(b,s,null),m(e,x),m(e,D),m(D,z),m(e,E),I=!0},p(t,e){(!I||1&e)&&S!==(S=t[1]+"")&&g(z,S)},i(t){I||(v(b.$$.fragment,t),I=!0)},o(t){y(b.$$.fragment,t),I=!1},d(t){t&&$(e),w(b)}}}function R(t){let e,s,n=t[0],r=[];for(let o=0;o<n.length;o+=1)r[o]=M(F(t,n,o));const a=t=>y(r[t],1,1,(()=>{r[t]=null}));return{c(){e=o("ul");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=c(t,"UL",{class:!0});var s=l(e);for(let e=0;e<r.length;e+=1)r[e].l(s);s.forEach($),this.h()},h(){d(e,"class","svelte-va4f19")},m(t,o){p(t,e,o);for(let s=0;s<r.length;s+=1)r[s].m(e,null);s=!0},p(t,[s]){if(1&s){let o;for(n=t[0],o=0;o<n.length;o+=1){const a=F(t,n,o);r[o]?(r[o].p(a,s),v(r[o],1)):(r[o]=M(a),r[o].c(),v(r[o],1),r[o].m(e,null))}for(b(),o=n.length;o<r.length;o+=1)a(o);x()}},i(t){if(!s){for(let t=0;t<n.length;t+=1)v(r[t]);s=!0}},o(t){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)y(r[e]);s=!1},d(t){t&&$(e),D(r,t)}}}function L(t,e,s){let{items:o}=e;return t.$$set=t=>{"items"in t&&s(0,o=t.items)},[o]}class C extends t{constructor(t){super(),e(this,t,L,R,s,{items:0})}}async function J(){{const t=(await V((()=>import("../chunks/dropzone-fb1a7bdb.js").then((function(t){return t.d}))),[])).default;return t.autoDiscover=!1,e=>({destroy:function(t,e){const s=new t(e,{url:"/",maxFiles:4,parallelUploads:1,uploadMultiple:!1}),o=s.addFile.bind(s);s.addFile=(...t)=>{s.files.length<4&&o(...t)};const n=[];return s.submitRequest=(t,e,o)=>{const r=8,a=2e3;for(let c=0;c<r;c++)n.push(setTimeout((()=>{s.emit("uploadprogress",o[0],100/(r-1)*c,o[0].size/(r-1)*c),c===r-1&&(o[0].status="success",s.emit("success",o[0],"success"),s.emit("complete",o[0]),s.processQueue(),4==s.getFilesWithStatus("success").length&&s.disable())}),a/r*c))},()=>{n.forEach((t=>clearTimeout(t))),s.destroy()}}(t,e)})}}function W(t){let e,s,n,i,h,g,v,y,w,b,x,D,k,E,I,S,j,P;return{c(){e=o("div"),s=o("div"),n=o("h1"),i=a("Try it out!"),h=r(),g=o("p"),v=a("Drag and drop files here"),y=r(),w=o("p"),b=a("This is just a demo Dropzone.\n          "),x=o("br"),D=a("\n          Dropped files are "),k=o("strong"),E=a("not"),I=a(" actually uploaded."),this.h()},l(t){e=c(t,"DIV",{class:!0});var o=l(e);s=c(o,"DIV",{class:!0});var r=l(s);n=c(r,"H1",{class:!0});var a=l(n);i=f(a,"Try it out!"),a.forEach($),h=u(r),g=c(r,"P",{});var d=l(g);v=f(d,"Drag and drop files here"),d.forEach($),y=u(r),w=c(r,"P",{class:!0});var p=l(w);b=f(p,"This is just a demo Dropzone.\n          "),x=c(p,"BR",{}),D=f(p,"\n          Dropped files are "),k=c(p,"STRONG",{});var m=l(k);E=f(m,"not"),m.forEach($),I=f(p," actually uploaded."),p.forEach($),r.forEach($),o.forEach($),this.h()},h(){d(n,"class","svelte-12uhhij"),d(w,"class","comment svelte-12uhhij"),d(s,"class","dz-message svelte-12uhhij"),d(e,"class","dropzone svelte-12uhhij")},m(o,r){p(o,e,r),m(e,s),m(s,n),m(n,i),m(s,h),m(s,g),m(g,v),m(s,y),m(s,w),m(w,b),m(w,x),m(w,D),m(w,k),m(k,E),m(w,I),j||(P=z(S=t[0].call(null,e)),j=!0)},d(t){t&&$(e),j=!1,P()}}}function U(t){let e,s=t[0]&&W(t);return{c(){e=o("div"),s&&s.c(),this.h()},l(t){e=c(t,"DIV",{class:!0});var o=l(e);s&&s.l(o),o.forEach($),this.h()},h(){d(e,"class","dropzone-container svelte-12uhhij")},m(t,o){p(t,e,o),s&&s.m(e,null)},p(t,[o]){t[0]?s||(s=W(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:E,o:E,d(t){t&&$(e),s&&s.d()}}}function Q(t,e,s){var o=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))((function(n,r){function a(t){try{l(o.next(t))}catch(e){r(e)}}function c(t){try{l(o.throw(t))}catch(e){r(e)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,c)}l((o=o.apply(t,e||[])).next())}))};let n;return function(){o(this,void 0,void 0,(function*(){s(0,n=yield J())}))}(),[n]}class Y extends t{constructor(t){super(),e(this,t,Q,U,s,{})}}function K(t){let e;return{c(){e=a("Documentation")},l(t){e=f(t,"Documentation")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function X(t){let e;return{c(){e=a("Download")},l(t){e=f(t,"Download")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function Z(t){let e,s,o,a;return e=new P({props:{href:"https://docs.dropzone.dev/",color:"white",$$slots:{default:[K]},$$scope:{ctx:t}}}),o=new P({props:{href:"https://docs.dropzone.dev/getting-started/installation/stand-alone",color:"white",variant:"text",$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(o.$$.fragment)},l(t){i(e.$$.fragment,t),s=u(t),i(o.$$.fragment,t)},m(t,n){h(e,t,n),p(t,s,n),h(o,t,n),a=!0},p(t,s){const n={};1&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const r={};1&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){a||(v(e.$$.fragment,t),v(o.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),y(o.$$.fragment,t),a=!1},d(t){w(e,t),t&&$(s),w(o,t)}}}function tt(t){let e,s,d,g,b,x,D,k,z,E,I,S,P,G,T,_;return T=new j({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){e=o("p"),s=o("strong"),d=a("Dropzone.js"),g=a(" is one of the most popular drag and drop\n    JavaScript libraries. It is\n    "),b=o("strong"),x=a("free"),D=a(", "),k=o("strong"),z=a("fully open source"),E=a(", and makes it easy\n    for you to handle dropped files on your website."),I=r(),S=o("p"),P=a("It's meant to look good by default, and is highly customizable."),G=r(),n(T.$$.fragment)},l(t){e=c(t,"P",{});var o=l(e);s=c(o,"STRONG",{});var n=l(s);d=f(n,"Dropzone.js"),n.forEach($),g=f(o," is one of the most popular drag and drop\n    JavaScript libraries. It is\n    "),b=c(o,"STRONG",{});var r=l(b);x=f(r,"free"),r.forEach($),D=f(o,", "),k=c(o,"STRONG",{});var a=l(k);z=f(a,"fully open source"),a.forEach($),E=f(o,", and makes it easy\n    for you to handle dropped files on your website."),o.forEach($),I=u(t),S=c(t,"P",{});var p=l(S);P=f(p,"It's meant to look good by default, and is highly customizable."),p.forEach($),G=u(t),i(T.$$.fragment,t)},m(t,o){p(t,e,o),m(e,s),m(s,d),m(e,g),m(e,b),m(b,x),m(e,D),m(e,k),m(k,z),m(e,E),p(t,I,o),p(t,S,o),m(S,P),p(t,G,o),h(T,t,o),_=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),T.$set(s)},i(t){_||(v(T.$$.fragment,t),_=!0)},o(t){y(T.$$.fragment,t),_=!1},d(t){t&&$(e),t&&$(I),t&&$(S),t&&$(G),w(T,t)}}}function et(t){let e,s;return e=new Y({props:{slot:"visual"}}),{c(){n(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,o){h(e,t,o),s=!0},p:E,i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function st(t){let e,s;return{c(){e=o("p"),s=a("You can get all the source code on GitHub, as well as installation\n        instructions. If you encounter an issue with this library, this is the\n        place to create an issue.")},l(t){e=c(t,"P",{});var o=l(e);s=f(o,"You can get all the source code on GitHub, as well as installation\n        instructions. If you encounter an issue with this library, this is the\n        place to create an issue."),o.forEach($)},m(t,o){p(t,e,o),m(e,s)},d(t){t&&$(e)}}}function ot(t){let e,s;return{c(){e=o("img"),this.h()},l(t){e=c(t,"IMG",{slot:!0,src:!0,alt:!0}),this.h()},h(){d(e,"slot","icon"),I(e.src,s="/images/icons/github.svg")||d(e,"src","/images/icons/github.svg"),d(e,"alt","GitHub")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function nt(t){let e;return{c(){e=a("GitHub")},l(t){e=f(t,"GitHub")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function rt(t){let e,s;return e=new P({props:{slot:"actions",href:"https://github.com/dropzone/dropzone",$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,o){h(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function at(t){let e,s;return{c(){e=o("p"),s=a("All the documentation about Dropzone, and the multiple ways to configure\n        and customise it, can be found on GitBook.")},l(t){e=c(t,"P",{});var o=l(e);s=f(o,"All the documentation about Dropzone, and the multiple ways to configure\n        and customise it, can be found on GitBook."),o.forEach($)},m(t,o){p(t,e,o),m(e,s)},d(t){t&&$(e)}}}function ct(t){let e,s;return{c(){e=o("img"),this.h()},l(t){e=c(t,"IMG",{slot:!0,src:!0,alt:!0}),this.h()},h(){d(e,"slot","icon"),I(e.src,s="/images/icons/gitbook.svg")||d(e,"src","/images/icons/gitbook.svg"),d(e,"alt","GitBook")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function lt(t){let e;return{c(){e=a("Docs")},l(t){e=f(t,"Docs")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function it(t){let e,s;return e=new P({props:{slot:"actions",href:"https://docs.dropzone.dev",$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,o){h(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function $t(t){let e,s,n,i,h,g,v,y;return{c(){e=o("p"),s=a("If you need help, there are"),n=a(" "),i=r(),h=o("a"),g=a("GitHub Discussions\n        "),v=a(" "),y=a("\n        and Stackoverflow. Use the tag dropzonejs and there'll be plenty of people\n        helping you out."),this.h()},l(t){e=c(t,"P",{});var o=l(e);s=f(o,"If you need help, there are"),n=f(o," "),i=u(o),h=c(o,"A",{href:!0});var r=l(h);g=f(r,"GitHub Discussions\n        "),r.forEach($),v=f(o," "),y=f(o,"\n        and Stackoverflow. Use the tag dropzonejs and there'll be plenty of people\n        helping you out."),o.forEach($),this.h()},h(){d(h,"href","https://github.com/dropzone/dropzone/discussions")},m(t,o){p(t,e,o),m(e,s),m(e,n),m(e,i),m(e,h),m(h,g),m(e,v),m(e,y)},p:E,d(t){t&&$(e)}}}function ut(t){let e,s,a,f,g,b,x,D,k,z;return b=new S({}),{c(){e=o("div"),s=o("img"),f=r(),g=o("span"),n(b.$$.fragment),x=r(),D=o("img"),this.h()},l(t){e=c(t,"DIV",{slot:!0});var o=l(e);s=c(o,"IMG",{src:!0,alt:!0}),f=u(o),g=c(o,"SPAN",{class:!0});var n=l(g);i(b.$$.fragment,n),n.forEach($),x=u(o),D=c(o,"IMG",{src:!0,alt:!0}),o.forEach($),this.h()},h(){I(s.src,a="/images/icons/stackoverflow.svg")||d(s,"src","/images/icons/stackoverflow.svg"),d(s,"alt","Stackoverflow"),d(g,"class","plus-icon-container svelte-8wqnm2"),I(D.src,k="/images/icons/github.svg")||d(D,"src","/images/icons/github.svg"),d(D,"alt","GitHub"),d(e,"slot","icon")},m(t,o){p(t,e,o),m(e,s),m(e,f),m(e,g),h(b,g,null),m(e,x),m(e,D),z=!0},i(t){z||(v(b.$$.fragment,t),z=!0)},o(t){y(b.$$.fragment,t),z=!1},d(t){t&&$(e),w(b)}}}function ft(t){let e;return{c(){e=a("Stack Overflow")},l(t){e=f(t,"Stack Overflow")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function dt(t){let e,s;return e=new P({props:{slot:"actions",href:"https://stackoverflow.com/questions/tagged/dropzone.js",$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,o){h(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function pt(t){let e,s,o,a,c,l;return e=new B({props:{title:"Source code on GitHub",$$slots:{actions:[rt],icon:[ot],default:[st]},$$scope:{ctx:t}}}),o=new B({props:{title:"Documentation",$$slots:{actions:[it],icon:[ct],default:[at]},$$scope:{ctx:t}}}),c=new B({props:{title:"Questions and Support",$$slots:{actions:[dt],icon:[ut],default:[$t]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(o.$$.fragment),a=r(),n(c.$$.fragment)},l(t){i(e.$$.fragment,t),s=u(t),i(o.$$.fragment,t),a=u(t),i(c.$$.fragment,t)},m(t,n){h(e,t,n),p(t,s,n),h(o,t,n),p(t,a,n),h(c,t,n),l=!0},p(t,s){const n={};1&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const r={};1&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r);const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),c.$set(a)},i(t){l||(v(e.$$.fragment,t),v(o.$$.fragment,t),v(c.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),y(o.$$.fragment,t),y(c.$$.fragment,t),l=!1},d(t){w(e,t),t&&$(s),w(o,t),t&&$(a),w(c,t)}}}function mt(t){let e,s;return e=new O({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,o){h(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function ht(t){let e;return{c(){e=a("Dropzone.js comes feature packed")},l(t){e=f(t,"Dropzone.js comes feature packed")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function gt(t){let e,s,g,b,x,D,k,z,E,I,S,j,P,G,T,_,H,A,q,V,O,B,F,M;return e=new N({props:{subtitle:"And it's easy to add the features you want",$$slots:{default:[ht]},$$scope:{ctx:t}}}),j=new C({props:{items:["Chunked uploads","Error handling","Well tested","Wide browser support","Fallback without JavaScript","Fully customizable","Open Source","Translation support","jQuery plugin","File queues","Multiple installation options"]}}),F=new C({props:{items:["Good looking defaults","Image Previews","Progress Bars","Success & error icons","Themes"]}}),{c(){n(e.$$.fragment),s=r(),g=o("div"),b=o("div"),x=o("h2"),D=a("Built to last"),k=r(),z=o("p"),E=a("Dropzone is a robust library trusted by millions. It started in 2012\n        with compatibility in mind. Whether your users use an outdated browser,\n        or have JavaScript enabled, Dropzone got you covered."),I=r(),S=o("div"),n(j.$$.fragment),P=r(),G=o("div"),T=o("div"),_=o("h2"),H=a("Looking good by default"),A=r(),q=o("p"),V=a("One main goal when creating Dropzone was to have file previews that are\n        not only practical, but also look good. That's why the default design of\n        Dropzone looks great without you needing to do anything."),O=r(),B=o("div"),n(F.$$.fragment),this.h()},l(t){i(e.$$.fragment,t),s=u(t),g=c(t,"DIV",{class:!0});var o=l(g);b=c(o,"DIV",{class:!0});var n=l(b);x=c(n,"H2",{class:!0});var r=l(x);D=f(r,"Built to last"),r.forEach($),k=u(n),z=c(n,"P",{});var a=l(z);E=f(a,"Dropzone is a robust library trusted by millions. It started in 2012\n        with compatibility in mind. Whether your users use an outdated browser,\n        or have JavaScript enabled, Dropzone got you covered."),a.forEach($),n.forEach($),I=u(o),S=c(o,"DIV",{class:!0});var d=l(S);i(j.$$.fragment,d),d.forEach($),o.forEach($),P=u(t),G=c(t,"DIV",{class:!0});var p=l(G);T=c(p,"DIV",{class:!0});var m=l(T);_=c(m,"H2",{class:!0});var h=l(_);H=f(h,"Looking good by default"),h.forEach($),A=u(m),q=c(m,"P",{});var v=l(q);V=f(v,"One main goal when creating Dropzone was to have file previews that are\n        not only practical, but also look good. That's why the default design of\n        Dropzone looks great without you needing to do anything."),v.forEach($),m.forEach($),O=u(p),B=c(p,"DIV",{class:!0});var y=l(B);i(F.$$.fragment,y),y.forEach($),p.forEach($),this.h()},h(){d(x,"class","svelte-8wqnm2"),d(b,"class","features__description svelte-8wqnm2"),d(S,"class","features__list svelte-8wqnm2"),d(g,"class","features svelte-8wqnm2"),d(_,"class","svelte-8wqnm2"),d(T,"class","features__description svelte-8wqnm2"),d(B,"class","features__list svelte-8wqnm2"),d(G,"class","features svelte-8wqnm2")},m(t,o){h(e,t,o),p(t,s,o),p(t,g,o),m(g,b),m(b,x),m(x,D),m(b,k),m(b,z),m(z,E),m(g,I),m(g,S),h(j,S,null),p(t,P,o),p(t,G,o),m(G,T),m(T,_),m(_,H),m(T,A),m(T,q),m(q,V),m(G,O),m(G,B),h(F,B,null),M=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){M||(v(e.$$.fragment,t),v(j.$$.fragment,t),v(F.$$.fragment,t),M=!0)},o(t){y(e.$$.fragment,t),y(j.$$.fragment,t),y(F.$$.fragment,t),M=!1},d(t){w(e,t),t&&$(s),t&&$(g),w(j),t&&$(P),t&&$(G),w(F)}}}function vt(t){let e;return{c(){e=a("Need a server?")},l(t){e=f(t,"Need a server?")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function yt(t){let e,s,n,r;return{c(){e=o("span"),s=a("Try for free")},l(t){e=c(t,"SPAN",{});var o=l(e);s=f(o,"Try for free"),o.forEach($)},m(t,o){p(t,e,o),m(e,s),n||(r=z(_.call(null,e,T.plusActionsViewed)),n=!0)},p:E,d(t){t&&$(e),n=!1,r()}}}function wt(t){let e;return{c(){e=a("Learn more")},l(t){e=f(t,"Learn more")},m(t,s){p(t,e,s)},d(t){t&&$(e)}}}function bt(t){let e,s,o,a;return e=new P({props:{use:[G,T.tryPlus],href:"https://plus.dropzone.dev",color:"secondary",$$slots:{default:[yt]},$$scope:{ctx:t}}}),o=new P({props:{use:[G,T.learnMoreAboutPlus],href:"/plus/",color:"secondary",variant:"text",$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(o.$$.fragment)},l(t){i(e.$$.fragment,t),s=u(t),i(o.$$.fragment,t)},m(t,n){h(e,t,n),p(t,s,n),h(o,t,n),a=!0},p(t,s){const n={};1&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const r={};1&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){a||(v(e.$$.fragment,t),v(o.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),y(o.$$.fragment,t),a=!1},d(t){w(e,t),t&&$(s),w(o,t)}}}function xt(t){let e,s,d,g,b,x,D,k,z,E,I,S;return e=new N({props:{subtitle:"Dropzone Plus",$$slots:{default:[vt]},$$scope:{ctx:t}}}),I=new j({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),d=o("p"),g=a("Instead of implementing your own server logic, use "),b=o("strong"),x=a("Dropzone Plus"),D=a("!"),k=o("br"),z=a(" Create an account in a few minutes and you’re ready to collect your\n    form data (including files)."),E=r(),n(I.$$.fragment)},l(t){i(e.$$.fragment,t),s=u(t),d=c(t,"P",{});var o=l(d);g=f(o,"Instead of implementing your own server logic, use "),b=c(o,"STRONG",{});var n=l(b);x=f(n,"Dropzone Plus"),n.forEach($),D=f(o,"!"),k=c(o,"BR",{}),z=f(o," Create an account in a few minutes and you’re ready to collect your\n    form data (including files)."),o.forEach($),E=u(t),i(I.$$.fragment,t)},m(t,o){h(e,t,o),p(t,s,o),p(t,d,o),m(d,g),m(d,b),m(b,x),m(d,D),m(d,k),m(d,z),p(t,E,o),h(I,t,o),S=!0},p(t,s){const o={};1&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o);const n={};1&s&&(n.$$scope={dirty:s,ctx:t}),I.$set(n)},i(t){S||(v(e.$$.fragment,t),v(I.$$.fragment,t),S=!0)},o(t){y(e.$$.fragment,t),y(I.$$.fragment,t),S=!1},d(t){w(e,t),t&&$(s),t&&$(d),t&&$(E),w(I,t)}}}function Dt(t){let e,s,o,a,c,l,f,d,m,g;return e=new H({props:{title:"Dropzone.js",description:"Dropzone.js is an open source library that provides beautiful and easy to use drag'n'drop file uploads with image previews."}}),o=new A({props:{title:"File uploads made easy",backgroundImage:"js",$$slots:{visual:[et],default:[tt]},$$scope:{ctx:t}}}),c=new q({props:{backgroundColor:"white",$$slots:{default:[mt]},$$scope:{ctx:t}}}),f=new q({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),m=new q({props:{backgroundColor:"white",$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(o.$$.fragment),a=r(),n(c.$$.fragment),l=r(),n(f.$$.fragment),d=r(),n(m.$$.fragment)},l(t){i(e.$$.fragment,t),s=u(t),i(o.$$.fragment,t),a=u(t),i(c.$$.fragment,t),l=u(t),i(f.$$.fragment,t),d=u(t),i(m.$$.fragment,t)},m(t,n){h(e,t,n),p(t,s,n),h(o,t,n),p(t,a,n),h(c,t,n),p(t,l,n),h(f,t,n),p(t,d,n),h(m,t,n),g=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),o.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),f.$set(r);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),m.$set(a)},i(t){g||(v(e.$$.fragment,t),v(o.$$.fragment,t),v(c.$$.fragment,t),v(f.$$.fragment,t),v(m.$$.fragment,t),g=!0)},o(t){y(e.$$.fragment,t),y(o.$$.fragment,t),y(c.$$.fragment,t),y(f.$$.fragment,t),y(m.$$.fragment,t),g=!1},d(t){w(e,t),t&&$(s),w(o,t),t&&$(a),w(c,t),t&&$(l),w(f,t),t&&$(d),w(m,t)}}}class kt extends t{constructor(t){super(),e(this,t,null,Dt,s,{})}}export{kt as default};
