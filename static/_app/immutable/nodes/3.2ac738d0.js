import{s as X,n as W,r as ee,b as te}from"../chunks/scheduler.655984ec.js";import{S as Y,i as Z,g as f,s as C,h as m,j as w,A as q,c as D,f as p,k as s,a as J,x as a,C as A,z,r as M,I as ne,u as k,v as F,d as U,t as H,w as R}from"../chunks/index.032e79dd.js";import{N as se,D as ae,g as oe}from"../chunks/Dialog.a3461780.js";const le=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,re=!1,ge=Object.freeze(Object.defineProperty({__proto__:null,ssr:re},Symbol.toStringTag,{value:"Module"}));function ie(g){let o,i,t,d="Login",u,c,l,r,n,v,h,_="Benutzername",L,$,e,y,b,S="Passwort",V,E,x='<button type="submit" class="btn btn-primary">Login</button>',O,K;return{c(){o=f("div"),i=f("div"),t=f("h5"),t.textContent=d,u=C(),c=f("div"),l=f("form"),r=f("div"),n=f("input"),v=C(),h=f("label"),h.textContent=_,L=C(),$=f("div"),e=f("input"),y=C(),b=f("label"),b.textContent=S,V=C(),E=f("div"),E.innerHTML=x,this.h()},l(I){o=m(I,"DIV",{class:!0});var T=w(o);i=m(T,"DIV",{class:!0});var B=w(i);t=m(B,"H5",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-1n40lkb"&&(t.textContent=d),u=D(B),c=m(B,"DIV",{class:!0});var Q=w(c);l=m(Q,"FORM",{});var j=w(l);r=m(j,"DIV",{class:!0});var N=w(r);n=m(N,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),v=D(N),h=m(N,"LABEL",{for:!0,"data-svelte-h":!0}),q(h)!=="svelte-1ubyjfg"&&(h.textContent=_),N.forEach(p),L=D(j),$=m(j,"DIV",{class:!0});var P=w($);e=m(P,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),y=D(P),b=m(P,"LABEL",{for:!0,"data-svelte-h":!0}),q(b)!=="svelte-2d9uwq"&&(b.textContent=S),P.forEach(p),V=D(j),E=m(j,"DIV",{class:!0,"data-svelte-h":!0}),q(E)!=="svelte-1msw3vj"&&(E.innerHTML=x),j.forEach(p),Q.forEach(p),B.forEach(p),T.forEach(p),this.h()},h(){s(t,"class","card-title p-1"),s(n,"type","text"),s(n,"class","form-control"),s(n,"id","username"),s(n,"placeholder","Benutzername eingeben"),n.required=!0,s(h,"for","username"),s(r,"class","form-floating mb-3"),s(e,"type","password"),s(e,"class","form-control"),s(e,"id","password"),s(e,"placeholder","Passwort eingeben"),e.required=!0,s(b,"for","password"),s($,"class","form-floating mb-3"),s(E,"class","d-grid gap-2"),s(c,"class","card-text"),s(i,"class","card-body"),s(o,"class","card")},m(I,T){J(I,o,T),a(o,i),a(i,t),a(i,u),a(i,c),a(c,l),a(l,r),a(r,n),A(n,g[1]),a(r,v),a(r,h),a(l,L),a(l,$),a($,e),A(e,g[2]),a($,y),a($,b),a(l,V),a(l,E),O||(K=[z(n,"input",g[3]),z(e,"input",g[4]),z(l,"submit",g[5])],O=!0)},p(I,[T]){T&2&&n.value!==I[1]&&A(n,I[1]),T&4&&e.value!==I[2]&&A(e,I[2])},i:W,o:W,d(I){I&&p(o),O=!1,ee(K)}}}function ce(g,o,i){let{handleLogin:t}=o,d="",u="";function c(){d=this.value,i(1,d)}function l(){u=this.value,i(2,u)}const r=()=>t(d,u);return g.$$set=n=>{"handleLogin"in n&&i(0,t=n.handleLogin)},[t,d,u,c,l,r]}class de extends Y{constructor(o){super(),Z(this,o,ce,ie,X,{handleLogin:0})}}const{document:G}=le;function ue(g){let o,i,t,d,u,c,l,r,n,v,h,_,L;u=new se({props:{currentUser:null,onSelect:null}}),v=new de({props:{handleLogin:g[1]}});let $={};return _=new ae({props:$}),g[2](_),{c(){o=f("meta"),i=C(),t=f("section"),d=f("div"),M(u.$$.fragment),c=C(),l=f("div"),r=f("div"),n=f("div"),M(v.$$.fragment),h=C(),M(_.$$.fragment),this.h()},l(e){const y=ne("svelte-1eoy2p",G.head);o=m(y,"META",{name:!0,content:!0}),y.forEach(p),i=D(e),t=m(e,"SECTION",{});var b=w(t);d=m(b,"DIV",{class:!0});var S=w(d);k(u.$$.fragment,S),c=D(S),l=m(S,"DIV",{class:!0});var V=w(l);r=m(V,"DIV",{class:!0});var E=w(r);n=m(E,"DIV",{class:!0});var x=w(n);k(v.$$.fragment,x),x.forEach(p),E.forEach(p),V.forEach(p),S.forEach(p),h=D(b),k(_.$$.fragment,b),b.forEach(p),this.h()},h(){G.title="SchillerDB - Login",s(o,"name","description"),s(o,"content","Login Page"),s(n,"class","col-md-6"),s(r,"class","row p-2 h-75 align-items-center justify-content-center"),s(l,"class","container svelte-qemm91"),s(d,"class","main svelte-qemm91")},m(e,y){a(G.head,o),J(e,i,y),J(e,t,y),a(t,d),F(u,d,null),a(d,c),a(d,l),a(l,r),a(r,n),F(v,n,null),a(t,h),F(_,t,null),L=!0},p(e,[y]){const b={};_.$set(b)},i(e){L||(U(u.$$.fragment,e),U(v.$$.fragment,e),U(_.$$.fragment,e),L=!0)},o(e){H(u.$$.fragment,e),H(v.$$.fragment,e),H(_.$$.fragment,e),L=!1},d(e){e&&(p(i),p(t)),p(o),R(u),R(v),g[2](null),R(_)}}}function fe(g,o,i){let t;async function d(c,l){const r=btoa(c+":"+l),n="/api/login/fetch/"+encodeURIComponent(c),v=await fetch(n,{method:"GET",headers:{Authorization:"Basic "+r,"Content-Type":"application/json; charset=utf-8"}});if(v.status===200){const h=await v.json();window.localStorage.setItem("auth",r),window.localStorage.setItem("current_user",c),window.localStorage.setItem("permissions",JSON.stringify(h.Ok)),oe("/",{replaceState:!0})}else{t.open("Fehler","Falsche Anmeldedaten!");const h=document.getElementsByTagName("input");for(const _ of h)_.classList.add("is-invalid")}}function u(c){te[c?"unshift":"push"](()=>{t=c,i(0,t)})}return[t,d,u]}class ve extends Y{constructor(o){super(),Z(this,o,fe,ue,X,{})}}export{ve as component,ge as universal};
