import{s as ie,n as oe,r as de,e as Q}from"../chunks/scheduler.e108d1fd.js";import{S as ce,i as ue,g as a,s as M,z as ve,h as s,f as l,c as S,j as f,x as j,k as e,y as t,a as re,A as U,B as W}from"../chunks/index.a9aad4a7.js";import{M as me}from"../chunks/bootstrap.esm.c2fdfd5f.js";import{m as pe,s as fe,d as he}from"../chunks/store.04b0bdc9.js";const _e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;const{document:X}=_e;function ge(i){let w,h,_,d,v,k='<div class="container-fluid"><a href="/login.html" class="navbar-brand svelte-2m1rv2">SNDI</a></div>',x,g,m,p,E,b,I,z="Login",o,L,r,y,n,A,C,N="Benutzername",R,B,c,G,D,Y="Passwort",J,V,Z='<button type="submit" class="btn btn-primary">Login</button>',K,$;return{c(){w=a("meta"),h=M(),_=a("section"),d=a("div"),v=a("nav"),v.innerHTML=k,x=M(),g=a("div"),m=a("div"),p=a("div"),E=a("div"),b=a("div"),I=a("h5"),I.textContent=z,o=M(),L=a("div"),r=a("form"),y=a("div"),n=a("input"),A=M(),C=a("label"),C.textContent=N,R=M(),B=a("div"),c=a("input"),G=M(),D=a("label"),D.textContent=Y,J=M(),V=a("div"),V.innerHTML=Z,this.h()},l(u){const T=ve("svelte-1yk2yl2",X.head);w=s(T,"META",{name:!0,content:!0}),T.forEach(l),h=S(u),_=s(u,"SECTION",{});var ee=f(_);d=s(ee,"DIV",{class:!0});var H=f(d);v=s(H,"NAV",{class:!0,"data-svelte-h":!0}),j(v)!=="svelte-12l9art"&&(v.innerHTML=k),x=S(H),g=s(H,"DIV",{class:!0});var te=f(g);m=s(te,"DIV",{class:!0});var ae=f(m);p=s(ae,"DIV",{class:!0});var se=f(p);E=s(se,"DIV",{class:!0});var ne=f(E);b=s(ne,"DIV",{class:!0});var q=f(b);I=s(q,"H5",{class:!0,"data-svelte-h":!0}),j(I)!=="svelte-1n40lkb"&&(I.textContent=z),o=S(q),L=s(q,"DIV",{class:!0});var le=f(L);r=s(le,"FORM",{});var P=f(r);y=s(P,"DIV",{class:!0});var O=f(y);n=s(O,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),A=S(O),C=s(O,"LABEL",{for:!0,"data-svelte-h":!0}),j(C)!=="svelte-1ubyjfg"&&(C.textContent=N),O.forEach(l),R=S(P),B=s(P,"DIV",{class:!0});var F=f(B);c=s(F,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),G=S(F),D=s(F,"LABEL",{for:!0,"data-svelte-h":!0}),j(D)!=="svelte-2d9uwq"&&(D.textContent=Y),F.forEach(l),J=S(P),V=s(P,"DIV",{class:!0,"data-svelte-h":!0}),j(V)!=="svelte-1wz249l"&&(V.innerHTML=Z),P.forEach(l),le.forEach(l),q.forEach(l),ne.forEach(l),se.forEach(l),ae.forEach(l),te.forEach(l),H.forEach(l),ee.forEach(l),this.h()},h(){X.title="Login",e(w,"name","description"),e(w,"content","Login Page"),e(v,"class","nav navbar bg-secondary-subtle svelte-2m1rv2"),e(I,"class","card-title p-1"),e(n,"type","text"),e(n,"class","form-control"),e(n,"id","username"),e(n,"placeholder","Benutzername eingeben"),n.required=!0,e(C,"for","username"),e(y,"class","form-floating mb-3"),e(c,"type","password"),e(c,"class","form-control"),e(c,"id","password"),e(c,"placeholder","Passwort eingeben"),c.required=!0,e(D,"for","password"),e(B,"class","form-floating mb-3"),e(V,"class","d-grid gap-2"),e(L,"class","card-text"),e(b,"class","card-body"),e(E,"class","card"),e(p,"class","col-md-6"),e(m,"class","row p-2 h-75 align-items-center justify-content-center"),e(g,"class","container svelte-2m1rv2"),e(d,"class","main svelte-2m1rv2")},m(u,T){t(X.head,w),re(u,h,T),re(u,_,T),t(_,d),t(d,v),t(d,x),t(d,g),t(g,m),t(m,p),t(p,E),t(E,b),t(b,I),t(b,o),t(b,L),t(L,r),t(r,y),t(y,n),U(n,i[0]),t(y,A),t(y,C),t(r,R),t(r,B),t(B,c),U(c,i[1]),t(B,G),t(B,D),t(r,J),t(r,V),K||($=[W(n,"input",i[6]),W(c,"input",i[7]),W(r,"submit",i[8])],K=!0)},p(u,[T]){T&1&&n.value!==u[0]&&U(n,u[0]),T&2&&c.value!==u[1]&&U(c,u[1])},i:oe,o:oe,d(u){u&&(l(h),l(_)),l(w),K=!1,de($)}}}function be(i,w,h){let _,d,v;Q(i,pe,o=>h(3,_=o)),Q(i,fe,o=>h(4,d=o)),Q(i,he,o=>h(5,v=o));let k,x,g,m="",p="";async function E(o,L){const r=btoa(o+":"+L),y="/login/fetch/"+encodeURIComponent(o),n=await fetch(y,{method:"GET",headers:{Authorization:"Basic "+r,"Content-Type":"application/json; charset=utf-8"}}),A=await n.json();if(n.status===200)window.localStorage.setItem("auth",r),window.localStorage.setItem("current_user",o),window.localStorage.setItem("permissions",JSON.stringify(A.Ok)),window.open("/","_self");else{if(k&&x&&g){const N=new me(k);x.textContent="Fehler",g.textContent="Falsches Passwort!",N.toggle()}const C=document.getElementsByTagName("input");for(const N of C)N.classList.add("is-invalid")}}function b(){m=this.value,h(0,m)}function I(){p=this.value,h(1,p)}const z=()=>E(m,p);return i.$$.update=()=>{i.$$.dirty&56&&(k=v,x=d,g=_)},[m,p,E,_,d,v,b,I,z]}class Ce extends ce{constructor(w){super(),ue(this,w,be,ge,ie,{})}}export{Ce as component};