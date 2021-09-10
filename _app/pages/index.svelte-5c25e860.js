import{S as e,i as t,s as n,R as r,e as o,t as s,c as $,a,g as c,d as l,b as i,f,J as u,h as d,k as p,l as m,n as g,T as h,U as y,V as v,x as w,u as x,j as b,X as E,m as k,o as z,v as S,Y as D,Q as P}from"../chunks/vendor-65c102a4.js";import{I as j,A as G}from"../chunks/Actions-2bef5587.js";import{S as N}from"../chunks/StyledLink-2795f45b.js";import{C as T}from"../chunks/ContentSection-17e87cd4.js";function I(e){let t,n;return{c(){t=o("h2"),n=s(e[0]),this.h()},l(r){t=$(r,"H2",{class:!0});var o=a(t);n=c(o,e[0]),o.forEach(l),this.h()},h(){i(t,"class","svelte-1xnevtv")},m(e,r){f(e,t,r),u(t,n)},p(e,t){1&t&&d(n,e[0])},d(e){e&&l(t)}}}function O(e){let t,n,s,c;const u=e[2].default,d=r(u,e,e[1],null);let b=e[0]&&I(e);return{c(){t=o("h1"),d&&d.c(),n=p(),b&&b.c(),s=m(),this.h()},l(e){t=$(e,"H1",{class:!0});var r=a(t);d&&d.l(r),r.forEach(l),n=g(e),b&&b.l(e),s=m(),this.h()},h(){i(t,"class","svelte-1xnevtv")},m(e,r){f(e,t,r),d&&d.m(t,null),f(e,n,r),b&&b.m(e,r),f(e,s,r),c=!0},p(e,[t]){d&&d.p&&(!c||2&t)&&h(d,u,e,e[1],c?v(u,e[1],t,null):y(e[1]),null),e[0]?b?b.p(e,t):(b=I(e),b.c(),b.m(s.parentNode,s)):b&&(b.d(1),b=null)},i(e){c||(w(d,e),c=!0)},o(e){x(d,e),c=!1},d(e){e&&l(t),d&&d.d(e),e&&l(n),b&&b.d(e),e&&l(s)}}}function L(e,t,n){let{$$slots:r={},$$scope:o}=t,{subtitle:s=null}=t;return e.$$set=e=>{"subtitle"in e&&n(0,s=e.subtitle),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class C extends e{constructor(e){super(),t(this,e,L,O,n,{subtitle:0})}}function H(e){let t,n;const s=e[1].default,c=r(s,e,e[0],null);return{c(){t=o("div"),c&&c.c(),this.h()},l(e){t=$(e,"DIV",{class:!0});var n=a(t);c&&c.l(n),n.forEach(l),this.h()},h(){i(t,"class","svelte-29eesf")},m(e,r){f(e,t,r),c&&c.m(t,null),n=!0},p(e,[t]){c&&c.p&&(!n||1&t)&&h(c,s,e,e[0],n?v(s,e[0],t,null):y(e[0]),null)},i(e){n||(w(c,e),n=!0)},o(e){x(c,e),n=!1},d(e){e&&l(t),c&&c.d(e)}}}function R(e,t,n){let{$$slots:r={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&n(0,o=e.$$scope)},[o,r]}class U extends e{constructor(e){super(),t(this,e,R,H,n,{})}}function W(e){let t,n,m,b,E;const k=e[2].default,z=r(k,e,e[1],null);return{c(){t=o("div"),n=o("h3"),m=s(e[0]),b=p(),z&&z.c(),this.h()},l(r){t=$(r,"DIV",{class:!0});var o=a(t);n=$(o,"H3",{class:!0});var s=a(n);m=c(s,e[0]),s.forEach(l),b=g(o),z&&z.l(o),o.forEach(l),this.h()},h(){i(n,"class","svelte-6qmhlv"),i(t,"class","feature")},m(e,r){f(e,t,r),u(t,n),u(n,m),u(t,b),z&&z.m(t,null),E=!0},p(e,[t]){(!E||1&t)&&d(m,e[0]),z&&z.p&&(!E||2&t)&&h(z,k,e,e[1],E?v(k,e[1],t,null):y(e[1]),null)},i(e){E||(w(z,e),E=!0)},o(e){x(z,e),E=!1},d(e){e&&l(t),z&&z.d(e)}}}function Y(e,t,n){let{$$slots:r={},$$scope:o}=t,{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class A extends e{constructor(e){super(),t(this,e,Y,W,n,{title:0})}}function J(e){let t;return{c(){t=s("Get Started")},l(e){t=c(e,"Get Started")},m(e,n){f(e,t,n)},d(e){e&&l(t)}}}function V(e){let t;return{c(){t=s("Dropzone.js")},l(e){t=c(e,"Dropzone.js")},m(e,n){f(e,t,n)},d(e){e&&l(t)}}}function q(e){let t,n,r,o;return t=new N({props:{href:"/plus",color:"secondary",$$slots:{default:[J]},$$scope:{ctx:e}}}),r=new N({props:{href:"/js",color:"secondary",variant:"text",$$slots:{default:[V]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment),n=p(),b(r.$$.fragment)},l(e){k(t.$$.fragment,e),n=g(e),k(r.$$.fragment,e)},m(e,s){z(t,e,s),f(e,n,s),z(r,e,s),o=!0},p(e,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s)},i(e){o||(w(t.$$.fragment,e),w(r.$$.fragment,e),o=!0)},o(e){x(t.$$.fragment,e),x(r.$$.fragment,e),o=!1},d(e){S(t,e),e&&l(n),S(r,e)}}}function M(e){let t,n,r,i,d,m,h,y,v,E,D,P,j;return P=new G({props:{$$slots:{default:[q]},$$scope:{ctx:e}}}),{c(){t=o("p"),n=s("Use the free and Open Source JavaScript library Dropzone.js to handle drag and dropping of files\n    into your form."),r=p(),i=o("p"),d=s("If you don't want to maintain your own server, simply use"),m=s(" "),h=p(),y=o("strong"),v=s("Dropzone Plus"),E=s(", a hosted solution that will take care of the data for you."),D=p(),b(P.$$.fragment)},l(e){t=$(e,"P",{});var o=a(t);n=c(o,"Use the free and Open Source JavaScript library Dropzone.js to handle drag and dropping of files\n    into your form."),o.forEach(l),r=g(e),i=$(e,"P",{});var s=a(i);d=c(s,"If you don't want to maintain your own server, simply use"),m=c(s," "),h=g(s),y=$(s,"STRONG",{});var f=a(y);v=c(f,"Dropzone Plus"),f.forEach(l),E=c(s,", a hosted solution that will take care of the data for you."),s.forEach(l),D=g(e),k(P.$$.fragment,e)},m(e,o){f(e,t,o),u(t,n),f(e,r,o),f(e,i,o),u(i,d),u(i,m),u(i,h),u(i,y),u(y,v),u(i,E),f(e,D,o),z(P,e,o),j=!0},p(e,t){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),P.$set(n)},i(e){j||(w(P.$$.fragment,e),j=!0)},o(e){x(P.$$.fragment,e),j=!1},d(e){e&&l(t),e&&l(r),e&&l(i),e&&l(D),S(P,e)}}}function F(e){let t,n,r;return{c(){t=o("div"),n=o("img"),this.h()},l(e){t=$(e,"DIV",{slot:!0,class:!0});var r=a(t);n=$(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(l),this.h()},h(){D(n.src,r="/images/dropzone-grid.png")||i(n,"src","/images/dropzone-grid.png"),i(n,"alt","Dropzone example"),i(n,"class","svelte-u6s7hp"),i(t,"slot","visual"),i(t,"class","visual svelte-u6s7hp")},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function Q(e){let t;return{c(){t=s("Let us take care of processing your forms")},l(e){t=c(e,"Let us take care of processing your forms")},m(e,n){f(e,t,n)},d(e){e&&l(t)}}}function X(e){let t,n;return{c(){t=o("p"),n=s("Starting at just 4$/month your form data is handled for you. No hidden costs, cancel any\n        time.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Starting at just 4$/month your form data is handled for you. No hidden costs, cancel any\n        time."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function B(e){let t,n;return{c(){t=o("p"),n=s("Get started in just a few minutes. You won't even notice you're doing it.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Get started in just a few minutes. You won't even notice you're doing it."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function K(e){let t,n;return{c(){t=o("p"),n=s("Our servers run on kubernetes clusters and scale to your demand. No downtime or slow uploads\n        when you experience user spikes.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Our servers run on kubernetes clusters and scale to your demand. No downtime or slow uploads\n        when you experience user spikes."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function Z(e){let t,n;return{c(){t=o("p"),n=s("Let your users send you files through a form on your website and get them via email.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Let your users send you files through a form on your website and get them via email."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function _(e){let t,n,r,o,s,$,a,c;return t=new A({props:{title:"Inexpensive",$$slots:{default:[X]},$$scope:{ctx:e}}}),r=new A({props:{title:"Easy setup",$$slots:{default:[B]},$$scope:{ctx:e}}}),s=new A({props:{title:"Secure & robust",$$slots:{default:[K]},$$scope:{ctx:e}}}),a=new A({props:{title:"Handle files",$$slots:{default:[Z]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment),n=p(),b(r.$$.fragment),o=p(),b(s.$$.fragment),$=p(),b(a.$$.fragment)},l(e){k(t.$$.fragment,e),n=g(e),k(r.$$.fragment,e),o=g(e),k(s.$$.fragment,e),$=g(e),k(a.$$.fragment,e)},m(e,l){z(t,e,l),f(e,n,l),z(r,e,l),f(e,o,l),z(s,e,l),f(e,$,l),z(a,e,l),c=!0},p(e,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o);const $={};1&n&&($.$$scope={dirty:n,ctx:e}),r.$set($);const c={};1&n&&(c.$$scope={dirty:n,ctx:e}),s.$set(c);const l={};1&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){c||(w(t.$$.fragment,e),w(r.$$.fragment,e),w(s.$$.fragment,e),w(a.$$.fragment,e),c=!0)},o(e){x(t.$$.fragment,e),x(r.$$.fragment,e),x(s.$$.fragment,e),x(a.$$.fragment,e),c=!1},d(e){S(t,e),e&&l(n),S(r,e),e&&l(o),S(s,e),e&&l($),S(a,e)}}}function ee(e){let t;return{c(){t=s("Create your account")},l(e){t=c(e,"Create your account")},m(e,n){f(e,t,n)},d(e){e&&l(t)}}}function te(e){let t;return{c(){t=s("Learn more")},l(e){t=c(e,"Learn more")},m(e,n){f(e,t,n)},d(e){e&&l(t)}}}function ne(e){let t,n,r,o;return t=new N({props:{href:"https://plus.dropzone.dev/register",color:"primary",$$slots:{default:[ee]},$$scope:{ctx:e}}}),r=new N({props:{href:"/plus",color:"primary",variant:"text",$$slots:{default:[te]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment),n=p(),b(r.$$.fragment)},l(e){k(t.$$.fragment,e),n=g(e),k(r.$$.fragment,e)},m(e,s){z(t,e,s),f(e,n,s),z(r,e,s),o=!0},p(e,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s)},i(e){o||(w(t.$$.fragment,e),w(r.$$.fragment,e),o=!0)},o(e){x(t.$$.fragment,e),x(r.$$.fragment,e),o=!1},d(e){S(t,e),e&&l(n),S(r,e)}}}function re(e){let t,n,r,o,s,$;return t=new C({props:{subtitle:"A subscription model for your forms",$$slots:{default:[Q]},$$scope:{ctx:e}}}),r=new U({props:{$$slots:{default:[_]},$$scope:{ctx:e}}}),s=new G({props:{$$slots:{default:[ne]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment),n=p(),b(r.$$.fragment),o=p(),b(s.$$.fragment)},l(e){k(t.$$.fragment,e),n=g(e),k(r.$$.fragment,e),o=g(e),k(s.$$.fragment,e)},m(e,a){z(t,e,a),f(e,n,a),z(r,e,a),f(e,o,a),z(s,e,a),$=!0},p(e,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o);const $={};1&n&&($.$$scope={dirty:n,ctx:e}),r.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){$||(w(t.$$.fragment,e),w(r.$$.fragment,e),w(s.$$.fragment,e),$=!0)},o(e){x(t.$$.fragment,e),x(r.$$.fragment,e),x(s.$$.fragment,e),$=!1},d(e){S(t,e),e&&l(n),S(r,e),e&&l(o),S(s,e)}}}function oe(e){let t;return{c(){t=s("The drag'n'drop library you've come to love")},l(e){t=c(e,"The drag'n'drop library you've come to love")},m(e,n){f(e,t,n)},d(e){e&&l(t)}}}function se(e){let t,n,r,i,d,m,h,y,v,w,x,b;return{c(){t=o("p"),n=s("Dropzone has always been and will always be"),r=s(" "),i=p(),d=o("strong"),m=s("open source"),h=s(", released under the"),y=s(" "),v=p(),w=o("strong"),x=s("MIT license"),b=s(".")},l(e){t=$(e,"P",{});var o=a(t);n=c(o,"Dropzone has always been and will always be"),r=c(o," "),i=g(o),d=$(o,"STRONG",{});var s=a(d);m=c(s,"open source"),s.forEach(l),h=c(o,", released under the"),y=c(o," "),v=g(o),w=$(o,"STRONG",{});var f=a(w);x=c(f,"MIT license"),f.forEach(l),b=c(o,"."),o.forEach(l)},m(e,o){f(e,t,o),u(t,n),u(t,r),u(t,i),u(t,d),u(d,m),u(t,h),u(t,y),u(t,v),u(t,w),u(w,x),u(t,b)},p:P,d(e){e&&l(t)}}}function $e(e){let t,n;return{c(){t=o("p"),n=s("Show previews of the files being dragged in the browser with no line of code.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Show previews of the files being dragged in the browser with no line of code."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function ae(e){let t,n;return{c(){t=o("p"),n=s("One of the first file drag'n'drop libraries and still maintained.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"One of the first file drag'n'drop libraries and still maintained."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function ce(e){let t,n;return{c(){t=o("p"),n=s("Upload big files in chunks instead of one big file.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Upload big files in chunks instead of one big file."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function le(e){let t,n;return{c(){t=o("p"),n=s("Tested and used in many different ecosystems and browsers. Even in the browser that shall\n        remain unnamed.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Tested and used in many different ecosystems and browsers. Even in the browser that shall\n        remain unnamed."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function ie(e){let t,n;return{c(){t=o("p"),n=s("Dropzone has been created to look good out of the box. Want a different look? Everything's\n        customizable.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Dropzone has been created to look good out of the box. Want a different look? Everything's\n        customizable."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function fe(e){let t,n;return{c(){t=o("p"),n=s("Dropzone is extremely customizable, and the look and feel can be changed completely.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Dropzone is extremely customizable, and the look and feel can be changed completely."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function ue(e){let t,n,r,i,d,m,h;return{c(){t=o("p"),n=s("With over 15k stars on GitHub, and over 300.000 downloads"),r=s(" "),i=p(),d=o("strong"),m=s("a week"),h=s(" on npm, Dropzone is quite popular.")},l(e){t=$(e,"P",{});var o=a(t);n=c(o,"With over 15k stars on GitHub, and over 300.000 downloads"),r=c(o," "),i=g(o),d=$(o,"STRONG",{});var s=a(d);m=c(s,"a week"),s.forEach(l),h=c(o," on npm, Dropzone is quite popular."),o.forEach(l)},m(e,o){f(e,t,o),u(t,n),u(t,r),u(t,i),u(t,d),u(d,m),u(t,h)},p:P,d(e){e&&l(t)}}}function de(e){let t,n;return{c(){t=o("p"),n=s("Starting at just 4$/month your form data is handled for you. No hidden costs, cancel any\n        time.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Starting at just 4$/month your form data is handled for you. No hidden costs, cancel any\n        time."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function pe(e){let t,n;return{c(){t=o("p"),n=s("Get started in just a few minutes. You won't even notice you're doing it.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Get started in just a few minutes. You won't even notice you're doing it."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function me(e){let t,n;return{c(){t=o("p"),n=s("Our servers run on kubernetes clusters and scale to your demand. No downtime or slow uploads\n        when you experience user spikes.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Our servers run on kubernetes clusters and scale to your demand. No downtime or slow uploads\n        when you experience user spikes."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function ge(e){let t,n;return{c(){t=o("p"),n=s("Let your users send you files through a form on your website and get them via email.")},l(e){t=$(e,"P",{});var r=a(t);n=c(r,"Let your users send you files through a form on your website and get them via email."),r.forEach(l)},m(e,r){f(e,t,r),u(t,n)},d(e){e&&l(t)}}}function he(e){let t,n,r,o,s,$,a,c,i,u,d,m,h,y,v,E,D,P,j,G,N,T,I,O;return t=new A({props:{title:"Completely free",$$slots:{default:[se]},$$scope:{ctx:e}}}),r=new A({props:{title:"Image previews",$$slots:{default:[$e]},$$scope:{ctx:e}}}),s=new A({props:{title:"7 years and going",$$slots:{default:[ae]},$$scope:{ctx:e}}}),a=new A({props:{title:"Chunked uploads",$$slots:{default:[ce]},$$scope:{ctx:e}}}),i=new A({props:{title:"Wide browser support",$$slots:{default:[le]},$$scope:{ctx:e}}}),d=new A({props:{title:"Good looking by default",$$slots:{default:[ie]},$$scope:{ctx:e}}}),h=new A({props:{title:"Fully customizable",$$slots:{default:[fe]},$$scope:{ctx:e}}}),v=new A({props:{title:"Trusted by millions",$$slots:{default:[ue]},$$scope:{ctx:e}}}),D=new A({props:{title:"Inexpensive",$$slots:{default:[de]},$$scope:{ctx:e}}}),j=new A({props:{title:"Easy setup",$$slots:{default:[pe]},$$scope:{ctx:e}}}),N=new A({props:{title:"Secure & robust",$$slots:{default:[me]},$$scope:{ctx:e}}}),I=new A({props:{title:"Handle files",$$slots:{default:[ge]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment),n=p(),b(r.$$.fragment),o=p(),b(s.$$.fragment),$=p(),b(a.$$.fragment),c=p(),b(i.$$.fragment),u=p(),b(d.$$.fragment),m=p(),b(h.$$.fragment),y=p(),b(v.$$.fragment),E=p(),b(D.$$.fragment),P=p(),b(j.$$.fragment),G=p(),b(N.$$.fragment),T=p(),b(I.$$.fragment)},l(e){k(t.$$.fragment,e),n=g(e),k(r.$$.fragment,e),o=g(e),k(s.$$.fragment,e),$=g(e),k(a.$$.fragment,e),c=g(e),k(i.$$.fragment,e),u=g(e),k(d.$$.fragment,e),m=g(e),k(h.$$.fragment,e),y=g(e),k(v.$$.fragment,e),E=g(e),k(D.$$.fragment,e),P=g(e),k(j.$$.fragment,e),G=g(e),k(N.$$.fragment,e),T=g(e),k(I.$$.fragment,e)},m(e,l){z(t,e,l),f(e,n,l),z(r,e,l),f(e,o,l),z(s,e,l),f(e,$,l),z(a,e,l),f(e,c,l),z(i,e,l),f(e,u,l),z(d,e,l),f(e,m,l),z(h,e,l),f(e,y,l),z(v,e,l),f(e,E,l),z(D,e,l),f(e,P,l),z(j,e,l),f(e,G,l),z(N,e,l),f(e,T,l),z(I,e,l),O=!0},p(e,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o);const $={};1&n&&($.$$scope={dirty:n,ctx:e}),r.$set($);const c={};1&n&&(c.$$scope={dirty:n,ctx:e}),s.$set(c);const l={};1&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l);const f={};1&n&&(f.$$scope={dirty:n,ctx:e}),i.$set(f);const u={};1&n&&(u.$$scope={dirty:n,ctx:e}),d.$set(u);const p={};1&n&&(p.$$scope={dirty:n,ctx:e}),h.$set(p);const m={};1&n&&(m.$$scope={dirty:n,ctx:e}),v.$set(m);const g={};1&n&&(g.$$scope={dirty:n,ctx:e}),D.$set(g);const y={};1&n&&(y.$$scope={dirty:n,ctx:e}),j.$set(y);const w={};1&n&&(w.$$scope={dirty:n,ctx:e}),N.$set(w);const x={};1&n&&(x.$$scope={dirty:n,ctx:e}),I.$set(x)},i(e){O||(w(t.$$.fragment,e),w(r.$$.fragment,e),w(s.$$.fragment,e),w(a.$$.fragment,e),w(i.$$.fragment,e),w(d.$$.fragment,e),w(h.$$.fragment,e),w(v.$$.fragment,e),w(D.$$.fragment,e),w(j.$$.fragment,e),w(N.$$.fragment,e),w(I.$$.fragment,e),O=!0)},o(e){x(t.$$.fragment,e),x(r.$$.fragment,e),x(s.$$.fragment,e),x(a.$$.fragment,e),x(i.$$.fragment,e),x(d.$$.fragment,e),x(h.$$.fragment,e),x(v.$$.fragment,e),x(D.$$.fragment,e),x(j.$$.fragment,e),x(N.$$.fragment,e),x(I.$$.fragment,e),O=!1},d(e){S(t,e),e&&l(n),S(r,e),e&&l(o),S(s,e),e&&l($),S(a,e),e&&l(c),S(i,e),e&&l(u),S(d,e),e&&l(m),S(h,e),e&&l(y),S(v,e),e&&l(E),S(D,e),e&&l(P),S(j,e),e&&l(G),S(N,e),e&&l(T),S(I,e)}}}function ye(e){let t;return{c(){t=s("Learn more")},l(e){t=c(e,"Learn more")},m(e,n){f(e,t,n)},d(e){e&&l(t)}}}function ve(e){let t;return{c(){t=s("Documentation")},l(e){t=c(e,"Documentation")},m(e,n){f(e,t,n)},d(e){e&&l(t)}}}function we(e){let t,n,r,o;return t=new N({props:{href:"/js",color:"primary",$$slots:{default:[ye]},$$scope:{ctx:e}}}),r=new N({props:{href:"https://docs.dropzone.dev",color:"primary",variant:"text",$$slots:{default:[ve]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment),n=p(),b(r.$$.fragment)},l(e){k(t.$$.fragment,e),n=g(e),k(r.$$.fragment,e)},m(e,s){z(t,e,s),f(e,n,s),z(r,e,s),o=!0},p(e,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o);const s={};1&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s)},i(e){o||(w(t.$$.fragment,e),w(r.$$.fragment,e),o=!0)},o(e){x(t.$$.fragment,e),x(r.$$.fragment,e),o=!1},d(e){S(t,e),e&&l(n),S(r,e)}}}function xe(e){let t,n,r,o,s,$;return t=new C({props:{subtitle:"A JavaScript file upload library with image previews",$$slots:{default:[oe]},$$scope:{ctx:e}}}),r=new U({props:{$$slots:{default:[he]},$$scope:{ctx:e}}}),s=new G({props:{$$slots:{default:[we]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment),n=p(),b(r.$$.fragment),o=p(),b(s.$$.fragment)},l(e){k(t.$$.fragment,e),n=g(e),k(r.$$.fragment,e),o=g(e),k(s.$$.fragment,e)},m(e,a){z(t,e,a),f(e,n,a),z(r,e,a),f(e,o,a),z(s,e,a),$=!0},p(e,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),t.$set(o);const $={};1&n&&($.$$scope={dirty:n,ctx:e}),r.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){$||(w(t.$$.fragment,e),w(r.$$.fragment,e),w(s.$$.fragment,e),$=!0)},o(e){x(t.$$.fragment,e),x(r.$$.fragment,e),x(s.$$.fragment,e),$=!1},d(e){S(t,e),e&&l(n),S(r,e),e&&l(o),S(s,e)}}}function be(e){let t,n,r,o,s,$,a;return n=new j({props:{title:"Tools to build great forms",$$slots:{visual:[F],default:[M]},$$scope:{ctx:e}}}),o=new T({props:{backgroundColor:"white",$$slots:{default:[re]},$$scope:{ctx:e}}}),$=new T({props:{$$slots:{default:[xe]},$$scope:{ctx:e}}}),{c(){t=p(),b(n.$$.fragment),r=p(),b(o.$$.fragment),s=p(),b($.$$.fragment),this.h()},l(e){E('[data-svelte="svelte-1ce0zkg"]',document.head).forEach(l),t=g(e),k(n.$$.fragment,e),r=g(e),k(o.$$.fragment,e),s=g(e),k($.$$.fragment,e),this.h()},h(){document.title="Dropzone"},m(e,c){f(e,t,c),z(n,e,c),f(e,r,c),z(o,e,c),f(e,s,c),z($,e,c),a=!0},p(e,[t]){const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),o.$set(s);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),$.$set(a)},i(e){a||(w(n.$$.fragment,e),w(o.$$.fragment,e),w($.$$.fragment,e),a=!0)},o(e){x(n.$$.fragment,e),x(o.$$.fragment,e),x($.$$.fragment,e),a=!1},d(e){e&&l(t),S(n,e),e&&l(r),S(o,e),e&&l(s),S($,e)}}}class Ee extends e{constructor(e){super(),t(this,e,null,be,n,{})}}export{Ee as default};
