import{S as t,i as e,s,e as o,t as a,k as r,c as n,a as c,g as i,d as l,n as u,b as d,f,G as h,Y as p,P as $,j as m,W as v,m as g,o as w,x as y,u as b,v as E,Z as D,X as I}from"../chunks/vendor-46205c40.js";import{I as k,A as z}from"../chunks/Actions-e3780342.js";import{S as x}from"../chunks/StyledLink-37e99158.js";import{C as S}from"../chunks/ContentSection-541df1d0.js";import{_ as G}from"../chunks/preload-helper-ec9aa979.js";async function _(){{const t=(await G((()=>import("../chunks/dropzone-fb1a7bdb.js").then((function(t){return t.d}))),[])).default;return t.autoDiscover=!1,e=>({destroy:function(t,e){const s=new t(e,{url:"/",maxFiles:4,parallelUploads:1,uploadMultiple:!1}),o=s.addFile.bind(s);s.addFile=(...t)=>{s.files.length<4&&o(...t)};const a=[];return s.submitRequest=(t,e,o)=>{const r=8,n=2e3;for(let c=0;c<r;c++)a.push(setTimeout((()=>{s.emit("uploadprogress",o[0],100/(r-1)*c,o[0].size/(r-1)*c),c===r-1&&(o[0].status="success",s.emit("success",o[0],"success"),s.emit("complete",o[0]),s.processQueue(),4==s.getFilesWithStatus("success").length&&s.disable())}),n/r*c))},()=>{a.forEach((t=>clearTimeout(t))),s.destroy()}}(t,e)})}}function j(t){let e,s,$,m,v,g,w,y,b,E,D,I,k,z,x,S,G,_;return{c(){e=o("div"),s=o("div"),$=o("h1"),m=a("Try it out!"),v=r(),g=o("p"),w=a("Drag and drop files here"),y=r(),b=o("p"),E=a("This is just a demo Dropzone.\n          "),D=o("br"),I=a("\n          Dropped files are "),k=o("strong"),z=a("not"),x=a(" actually uploaded."),this.h()},l(t){e=n(t,"DIV",{class:!0});var o=c(e);s=n(o,"DIV",{class:!0});var a=c(s);$=n(a,"H1",{class:!0});var r=c($);m=i(r,"Try it out!"),r.forEach(l),v=u(a),g=n(a,"P",{});var d=c(g);w=i(d,"Drag and drop files here"),d.forEach(l),y=u(a),b=n(a,"P",{class:!0});var f=c(b);E=i(f,"This is just a demo Dropzone.\n          "),D=n(f,"BR",{}),I=i(f,"\n          Dropped files are "),k=n(f,"STRONG",{});var h=c(k);z=i(h,"not"),h.forEach(l),x=i(f," actually uploaded."),f.forEach(l),a.forEach(l),o.forEach(l),this.h()},h(){d($,"class","svelte-9qci9r"),d(b,"class","comment svelte-9qci9r"),d(s,"class","dz-message svelte-9qci9r"),d(e,"class","dropzone svelte-9qci9r")},m(o,a){f(o,e,a),h(e,s),h(s,$),h($,m),h(s,v),h(s,g),h(g,w),h(s,y),h(s,b),h(b,E),h(b,D),h(b,I),h(b,k),h(k,z),h(b,x),G||(_=p(S=t[0].call(null,e)),G=!0)},d(t){t&&l(e),G=!1,_()}}}function H(t){let e,s=t[0]&&j(t);return{c(){e=o("div"),s&&s.c(),this.h()},l(t){e=n(t,"DIV",{class:!0});var o=c(e);s&&s.l(o),o.forEach(l),this.h()},h(){d(e,"class","dropzone-container svelte-9qci9r")},m(t,o){f(t,e,o),s&&s.m(e,null)},p(t,[o]){t[0]?s||(s=j(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:$,o:$,d(t){t&&l(e),s&&s.d()}}}function T(t,e,s){var o=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))((function(a,r){function n(t){try{i(o.next(t))}catch(e){r(e)}}function c(t){try{i(o.throw(t))}catch(e){r(e)}}function i(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,c)}i((o=o.apply(t,e||[])).next())}))};let a;return function(){o(this,void 0,void 0,(function*(){s(0,a=yield _())}))}(),[a]}class V extends t{constructor(t){super(),e(this,t,T,H,s,{})}}function P(t){let e;return{c(){e=a("Documentation")},l(t){e=i(t,"Documentation")},m(t,s){f(t,e,s)},d(t){t&&l(e)}}}function C(t){let e;return{c(){e=a("Download")},l(t){e=i(t,"Download")},m(t,s){f(t,e,s)},d(t){t&&l(e)}}}function O(t){let e,s,o,a;return e=new x({props:{href:"https://docs.dropzone.dev/",color:"secondary",$$slots:{default:[P]},$$scope:{ctx:t}}}),o=new x({props:{href:"https://github.com/dropzone/dropzone/releases/latest/download/dist.zip",color:"secondary",variant:"text",$$slots:{default:[C]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),s=r(),m(o.$$.fragment)},l(t){g(e.$$.fragment,t),s=u(t),g(o.$$.fragment,t)},m(t,r){w(e,t,r),f(t,s,r),w(o,t,r),a=!0},p(t,s){const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a);const r={};1&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){a||(y(e.$$.fragment,t),y(o.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),b(o.$$.fragment,t),a=!1},d(t){E(e,t),t&&l(s),E(o,t)}}}function q(t){let e,s,d,p,$,v,D,I,k,x;return k=new z({props:{$$slots:{default:[O]},$$scope:{ctx:t}}}),{c(){e=o("p"),s=o("strong"),d=a("Dropzone.js"),p=a(" is one of the most popular drag and drop JavaScript libraries. It is\n    fully open source, and makes it easy for you to handle dropped files on your website."),$=r(),v=o("p"),D=a("It's meant to look good by default, and is highly customizable."),I=r(),m(k.$$.fragment)},l(t){e=n(t,"P",{});var o=c(e);s=n(o,"STRONG",{});var a=c(s);d=i(a,"Dropzone.js"),a.forEach(l),p=i(o," is one of the most popular drag and drop JavaScript libraries. It is\n    fully open source, and makes it easy for you to handle dropped files on your website."),o.forEach(l),$=u(t),v=n(t,"P",{});var r=c(v);D=i(r,"It's meant to look good by default, and is highly customizable."),r.forEach(l),I=u(t),g(k.$$.fragment,t)},m(t,o){f(t,e,o),h(e,s),h(s,d),h(e,p),f(t,$,o),f(t,v,o),h(v,D),f(t,I,o),w(k,t,o),x=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),k.$set(s)},i(t){x||(y(k.$$.fragment,t),x=!0)},o(t){b(k.$$.fragment,t),x=!1},d(t){t&&l(e),t&&l($),t&&l(v),t&&l(I),E(k,t)}}}function A(t){let e,s,a;return s=new V({}),{c(){e=o("div"),m(s.$$.fragment),this.h()},l(t){e=n(t,"DIV",{slot:!0,class:!0});var o=c(e);g(s.$$.fragment,o),o.forEach(l),this.h()},h(){d(e,"slot","visual"),d(e,"class","visual")},m(t,o){f(t,e,o),w(s,e,null),a=!0},i(t){a||(y(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){t&&l(e),E(s)}}}function N(t){let e;return{c(){e=a("GitHub")},l(t){e=i(t,"GitHub")},m(t,s){f(t,e,s)},d(t){t&&l(e)}}}function F(t){let e;return{c(){e=a("Docs")},l(t){e=i(t,"Docs")},m(t,s){f(t,e,s)},d(t){t&&l(e)}}}function M(t){let e;return{c(){e=a("Stack Overflow")},l(t){e=i(t,"Stack Overflow")},m(t,s){f(t,e,s)},d(t){t&&l(e)}}}function R(t){let e,s,p,$,v,k,z,S,G,_,j,H,T,V,P,C,O,q,A,R,B,Q,U,Y,J,L,W,X,Z,K,tt,et,st,ot,at,rt,nt,ct,it,lt,ut,dt,ft,ht,pt,$t,mt,vt,gt,wt,yt,bt,Et,Dt,It;return V=new x({props:{href:"https://github.com/dropzone/dropzone",$$slots:{default:[N]},$$scope:{ctx:t}}}),X=new x({props:{href:"https://docs.dropzone.dev",$$slots:{default:[F]},$$scope:{ctx:t}}}),rt=new D({}),Dt=new x({props:{href:"https://www.stackoverflow.com",$$slots:{default:[M]},$$scope:{ctx:t}}}),{c(){e=o("div"),s=o("section"),p=o("div"),$=o("img"),k=r(),z=o("h3"),S=a("Source Code on GitHub"),G=r(),_=o("p"),j=a("You can get all the source code on GitHub, as well as installation instructions. If you\n        encounter an issue with this library, this is the place to create an issue."),H=r(),T=o("div"),m(V.$$.fragment),P=r(),C=o("section"),O=o("div"),q=o("img"),R=r(),B=o("h3"),Q=a("Documentation"),U=r(),Y=o("p"),J=a("All the documentation about Dropzone, and the multiple ways to configure and customise it,\n        can be found on GitBook."),L=r(),W=o("div"),m(X.$$.fragment),Z=r(),K=o("section"),tt=o("div"),et=o("img"),ot=r(),at=o("span"),m(rt.$$.fragment),nt=r(),ct=o("img"),lt=r(),ut=o("h3"),dt=a("Questions and Support"),ft=r(),ht=o("p"),pt=a("If you need help, there are"),$t=a(" "),mt=r(),vt=o("a"),gt=a("GitHub Discussions "),wt=a(" "),yt=a("\n        and Stackoverflow. Use the tag dropzonejs and there'll be plenty of people helping you out."),bt=r(),Et=o("div"),m(Dt.$$.fragment),this.h()},l(t){e=n(t,"DIV",{class:!0});var o=c(e);s=n(o,"SECTION",{class:!0});var a=c(s);p=n(a,"DIV",{class:!0});var r=c(p);$=n(r,"IMG",{src:!0,alt:!0}),r.forEach(l),k=u(a),z=n(a,"H3",{});var d=c(z);S=i(d,"Source Code on GitHub"),d.forEach(l),G=u(a),_=n(a,"P",{});var f=c(_);j=i(f,"You can get all the source code on GitHub, as well as installation instructions. If you\n        encounter an issue with this library, this is the place to create an issue."),f.forEach(l),H=u(a),T=n(a,"DIV",{class:!0});var h=c(T);g(V.$$.fragment,h),h.forEach(l),a.forEach(l),P=u(o),C=n(o,"SECTION",{class:!0});var m=c(C);O=n(m,"DIV",{class:!0});var v=c(O);q=n(v,"IMG",{src:!0,alt:!0}),v.forEach(l),R=u(m),B=n(m,"H3",{});var w=c(B);Q=i(w,"Documentation"),w.forEach(l),U=u(m),Y=n(m,"P",{});var y=c(Y);J=i(y,"All the documentation about Dropzone, and the multiple ways to configure and customise it,\n        can be found on GitBook."),y.forEach(l),L=u(m),W=n(m,"DIV",{class:!0});var b=c(W);g(X.$$.fragment,b),b.forEach(l),m.forEach(l),Z=u(o),K=n(o,"SECTION",{class:!0});var E=c(K);tt=n(E,"DIV",{class:!0});var D=c(tt);et=n(D,"IMG",{src:!0,alt:!0}),ot=u(D),at=n(D,"SPAN",{class:!0});var I=c(at);g(rt.$$.fragment,I),I.forEach(l),nt=u(D),ct=n(D,"IMG",{src:!0,alt:!0}),D.forEach(l),lt=u(E),ut=n(E,"H3",{});var x=c(ut);dt=i(x,"Questions and Support"),x.forEach(l),ft=u(E),ht=n(E,"P",{});var A=c(ht);pt=i(A,"If you need help, there are"),$t=i(A," "),mt=u(A),vt=n(A,"A",{href:!0});var N=c(vt);gt=i(N,"GitHub Discussions "),N.forEach(l),wt=i(A," "),yt=i(A,"\n        and Stackoverflow. Use the tag dropzonejs and there'll be plenty of people helping you out."),A.forEach(l),bt=u(E),Et=n(E,"DIV",{class:!0});var F=c(Et);g(Dt.$$.fragment,F),F.forEach(l),E.forEach(l),o.forEach(l),this.h()},h(){I($.src,v="/images/icons/github.svg")||d($,"src","/images/icons/github.svg"),d($,"alt","GitHub"),d(p,"class","main-feature__icon-header svelte-12vdrtw"),d(T,"class","main-feature__actions svelte-12vdrtw"),d(s,"class","main-feature svelte-12vdrtw"),I(q.src,A="/images/icons/gitbook.svg")||d(q,"src","/images/icons/gitbook.svg"),d(q,"alt","GitBook"),d(O,"class","main-feature__icon-header svelte-12vdrtw"),d(W,"class","main-feature__actions svelte-12vdrtw"),d(C,"class","main-feature svelte-12vdrtw"),I(et.src,st="/images/icons/stackoverflow.svg")||d(et,"src","/images/icons/stackoverflow.svg"),d(et,"alt","Stackoverflow"),d(at,"class","plus-icon-container svelte-12vdrtw"),I(ct.src,it="/images/icons/github.svg")||d(ct,"src","/images/icons/github.svg"),d(ct,"alt","GitHub"),d(tt,"class","main-feature__icon-header svelte-12vdrtw"),d(vt,"href","https://github.com/dropzone/dropzone/discussions"),d(Et,"class","main-feature__actions svelte-12vdrtw"),d(K,"class","main-feature svelte-12vdrtw"),d(e,"class","main-features svelte-12vdrtw")},m(t,o){f(t,e,o),h(e,s),h(s,p),h(p,$),h(s,k),h(s,z),h(z,S),h(s,G),h(s,_),h(_,j),h(s,H),h(s,T),w(V,T,null),h(e,P),h(e,C),h(C,O),h(O,q),h(C,R),h(C,B),h(B,Q),h(C,U),h(C,Y),h(Y,J),h(C,L),h(C,W),w(X,W,null),h(e,Z),h(e,K),h(K,tt),h(tt,et),h(tt,ot),h(tt,at),w(rt,at,null),h(tt,nt),h(tt,ct),h(K,lt),h(K,ut),h(ut,dt),h(K,ft),h(K,ht),h(ht,pt),h(ht,$t),h(ht,mt),h(ht,vt),h(vt,gt),h(ht,wt),h(ht,yt),h(K,bt),h(K,Et),w(Dt,Et,null),It=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),V.$set(s);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),X.$set(o);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),Dt.$set(a)},i(t){It||(y(V.$$.fragment,t),y(X.$$.fragment,t),y(rt.$$.fragment,t),y(Dt.$$.fragment,t),It=!0)},o(t){b(V.$$.fragment,t),b(X.$$.fragment,t),b(rt.$$.fragment,t),b(Dt.$$.fragment,t),It=!1},d(t){t&&l(e),E(V),E(X),E(rt),E(Dt)}}}function B(t){let e,s,o,a,n;return s=new k({props:{title:"File uploads made easy",$$slots:{visual:[A],default:[q]},$$scope:{ctx:t}}}),a=new S({props:{backgroundColor:"white",$$slots:{default:[R]},$$scope:{ctx:t}}}),{c(){e=r(),m(s.$$.fragment),o=r(),m(a.$$.fragment),this.h()},l(t){v('[data-svelte="svelte-1o0qyst"]',document.head).forEach(l),e=u(t),g(s.$$.fragment,t),o=u(t),g(a.$$.fragment,t),this.h()},h(){document.title="Dropzone.js"},m(t,r){f(t,e,r),w(s,t,r),f(t,o,r),w(a,t,r),n=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),a.$set(r)},i(t){n||(y(s.$$.fragment,t),y(a.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),b(a.$$.fragment,t),n=!1},d(t){t&&l(e),E(s,t),t&&l(o),E(a,t)}}}class Q extends t{constructor(t){super(),e(this,t,null,B,s,{})}}export{Q as default};
