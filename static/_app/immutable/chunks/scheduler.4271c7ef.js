function k(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function w(t){return t()}function A(){return Object.create(null)}function j(t){t.forEach(w)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(E(n,e))}function B(t,n,e,o){if(t){const c=g(t,n,e,o);return t[0](c)}}function g(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],f=Math.max(n.dirty.length,c.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function D(t,n,e,o,c,l){if(c){const f=g(n,e,o,l);t.p(f,c)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t,n,e){return t.set(e),n}let a;function _(t){a=t}function y(){if(!a)throw new Error("Function called outside component initialization");return a}function I(t){y().$$.on_mount.push(t)}function J(t){y().$$.after_update.push(t)}function K(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const i=[],p=[];let s=[];const b=[],m=Promise.resolve();let d=!1;function O(){d||(d=!0,m.then(z))}function L(){return O(),m}function q(t){s.push(t)}const h=new Set;let r=0;function z(){if(r!==0)return;const t=a;do{try{for(;r<i.length;){const n=i[r];r++,_(n),M(n.$$)}}catch(n){throw i.length=0,r=0,n}for(_(null),i.length=0,r=0;p.length;)p.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(i.length);for(;b.length;)b.pop()();d=!1,h.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function N(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{O as A,J as a,p as b,B as c,C as d,U as e,y as f,G as g,_ as h,v as i,z as j,H as k,K as l,A as m,k as n,I as o,F as p,S as q,j as r,P as s,L as t,D as u,q as v,N as w,a as x,w as y,i as z};