import{s as q,n as A,r as ee,e as te,q as ne,b as le}from"./scheduler.876dbae6.js";import{S as z,i as F,g as h,s as I,m as H,h as _,j as p,A as L,c as N,n as M,f as v,k as u,a as G,x as i,z as V,o as Z,d as O,p as se,t as j,b as ae,r as re,u as oe,v as ie,w as ce}from"./index.ba11a9a1.js";import{p as ue}from"./stores.d46309a4.js";import{j as de}from"./singletons.bcea37f0.js";const fe=de("goto");function he(a){let t,n,e,o='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>',c,s,f,l,d,r,b,g,T="Passwort ändern",w,y,m,x="Logins Verwalten",k,C,S,J="Ausloggen",P,K;return{c(){t=h("div"),n=h("div"),e=h("button"),e.innerHTML=o,c=I(),s=h("ul"),f=h("li"),l=h("h6"),d=H(a[0]),r=I(),b=h("li"),g=h("button"),g.textContent=T,w=I(),y=h("li"),m=h("button"),m.textContent=x,k=I(),C=h("li"),S=h("button"),S.textContent=J,this.h()},l(U){t=_(U,"DIV",{class:!0});var D=p(t);n=_(D,"DIV",{class:!0});var B=p(n);e=_(B,"BUTTON",{class:!0,type:!0,title:!0,"data-bs-toggle":!0,"aria-expanded":!0,"data-svelte-h":!0}),L(e)!=="svelte-1y4fith"&&(e.innerHTML=o),c=N(B),s=_(B,"UL",{class:!0});var E=p(s);f=_(E,"LI",{});var Q=p(f);l=_(Q,"H6",{class:!0});var R=p(l);d=M(R,a[0]),R.forEach(v),Q.forEach(v),r=N(E),b=_(E,"LI",{});var W=p(b);g=_(W,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),L(g)!=="svelte-e3icxy"&&(g.textContent=T),W.forEach(v),w=N(E),y=_(E,"LI",{});var X=p(y);m=_(X,"BUTTON",{id:!0,class:!0,type:!0,"data-svelte-h":!0}),L(m)!=="svelte-1afcvgl"&&(m.textContent=x),X.forEach(v),k=N(E),C=_(E,"LI",{});var Y=p(C);S=_(Y,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),L(S)!=="svelte-1997fkn"&&(S.textContent=J),Y.forEach(v),E.forEach(v),B.forEach(v),D.forEach(v),this.h()},h(){u(e,"class","btn btn-outline-danger dropdown-toggle hide-arrow svelte-1aynsk9"),u(e,"type","button"),u(e,"title","Profil"),u(e,"data-bs-toggle","dropdown"),u(e,"aria-expanded","false"),u(l,"class","dropdown-header"),u(g,"class","dropdown-item"),u(g,"type","button"),u(m,"id","login-creator"),u(m,"class","dropdown-item"),u(m,"type","button"),u(S,"class","dropdown-item"),u(S,"type","button"),u(s,"class","dropdown-menu dropdown-menu-end"),u(n,"class","btn-group dropdown"),u(t,"class","d-flex")},m(U,D){G(U,t,D),i(t,n),i(n,e),i(n,c),i(n,s),i(s,f),i(f,l),i(l,d),i(s,r),i(s,b),i(b,g),i(s,w),i(s,y),i(y,m),i(s,k),i(s,C),i(C,S),P||(K=[V(g,"click",a[2]),V(m,"click",a[3]),V(S,"click",a[4])],P=!0)},p(U,[D]){D&1&&Z(d,U[0])},i:A,o:A,d(U){U&&v(t),P=!1,ee(K)}}}function _e(a,t,n){let{currentUser:e}=t,{onSelect:o}=t;const c=()=>{o&&o("password")},s=()=>{o&&o("login")},f=()=>{localStorage.clear(),fe("/login",{replaceState:!0})};return a.$$set=l=>{"currentUser"in l&&n(0,e=l.currentUser),"onSelect"in l&&n(1,o=l.onSelect)},[e,o,c,s,f]}class ve extends z{constructor(t){super(),F(this,t,_e,he,q,{currentUser:0,onSelect:1})}}function $(a){let t,n;return t=new ve({props:{onSelect:a[1],currentUser:a[0]}}),{c(){re(t.$$.fragment)},l(e){oe(t.$$.fragment,e)},m(e,o){ie(t,e,o),n=!0},p(e,o){const c={};o&2&&(c.onSelect=e[1]),o&1&&(c.currentUser=e[0]),t.$set(c)},i(e){n||(O(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){ce(t,e)}}}function ge(a){let t,n,e,o,c,s,f,l=a[0]!=null&&$(a);return{c(){t=h("nav"),n=h("div"),e=h("a"),o=H("SNDI"),s=I(),l&&l.c(),this.h()},l(d){t=_(d,"NAV",{class:!0});var r=p(t);n=_(r,"DIV",{class:!0});var b=p(n);e=_(b,"A",{href:!0,class:!0});var g=p(e);o=M(g,"SNDI"),g.forEach(v),s=N(b),l&&l.l(b),b.forEach(v),r.forEach(v),this.h()},h(){u(e,"href",c=a[2].url.pathname),u(e,"class","navbar-brand svelte-114yh5g"),u(n,"class","container-fluid"),u(t,"class","nav navbar bg-secondary-subtle svelte-114yh5g")},m(d,r){G(d,t,r),i(t,n),i(n,e),i(e,o),i(n,s),l&&l.m(n,null),f=!0},p(d,[r]){(!f||r&4&&c!==(c=d[2].url.pathname))&&u(e,"href",c),d[0]!=null?l?(l.p(d,r),r&1&&O(l,1)):(l=$(d),l.c(),O(l,1),l.m(n,null)):l&&(se(),j(l,1,1,()=>{l=null}),ae())},i(d){f||(O(l),f=!0)},o(d){j(l),f=!1},d(d){d&&v(t),l&&l.d()}}}function pe(a,t,n){let e;te(a,ue,s=>n(2,e=s));let{currentUser:o=null}=t,{onSelect:c}=t;return a.$$set=s=>{"currentUser"in s&&n(0,o=s.currentUser),"onSelect"in s&&n(1,c=s.onSelect)},[o,c,e]}class Ce extends z{constructor(t){super(),F(this,t,pe,ge,q,{currentUser:0,onSelect:1})}}function me(a){let t,n,e,o,c,s,f,l,d,r,b="Schließen",g,T;return{c(){t=h("dialog"),n=h("div"),e=h("div"),o=H(a[0]),c=I(),s=h("div"),f=h("div"),l=H(a[1]),d=I(),r=h("button"),r.textContent=b,this.h()},l(w){t=_(w,"DIALOG",{class:!0});var y=p(t);n=_(y,"DIV",{class:!0});var m=p(n);e=_(m,"DIV",{class:!0});var x=p(e);o=M(x,a[0]),x.forEach(v),c=N(m),s=_(m,"DIV",{class:!0});var k=p(s);f=_(k,"DIV",{class:!0});var C=p(f);l=M(C,a[1]),C.forEach(v),d=N(k),r=_(k,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),L(r)!=="svelte-h6oa6y"&&(r.textContent=b),k.forEach(v),m.forEach(v),y.forEach(v),this.h()},h(){u(e,"class","card-header"),u(f,"class","card-text"),u(r,"type","button"),u(r,"class","btn btn-secondary mt-3"),u(s,"class","card-body"),u(n,"class","card"),u(t,"class","custom-dialog svelte-1lk4541")},m(w,y){G(w,t,y),i(t,n),i(n,e),i(e,o),i(n,c),i(n,s),i(s,f),i(f,l),i(s,d),i(s,r),a[6](t),g||(T=[V(r,"click",a[5]),V(t,"close",a[4])],g=!0)},p(w,[y]){y&1&&Z(o,w[0]),y&2&&Z(l,w[1])},i:A,o:A,d(w){w&&v(t),a[6](null),g=!1,ee(T)}}}function be(a,t,n){let{title:e="Fehler!"}=t,o,c;function s(r){n(1,o=r),c.attributes.getNamedItem("open")||c.showModal()}function f(r){ne.call(this,a,r)}const l=()=>c.close();function d(r){le[r?"unshift":"push"](()=>{c=r,n(2,c)})}return a.$$set=r=>{"title"in r&&n(0,e=r.title)},[e,o,c,s,f,l,d]}class Ee extends z{constructor(t){super(),F(this,t,be,me,q,{title:0,open:3})}get open(){return this.$$.ctx[3]}}export{Ee as D,Ce as N,fe as g};
