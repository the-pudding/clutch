import{s as ee,f as k,a as w,l as O,B as ye,g as x,d as b,c as M,h as S,m as F,D as W,j as E,k as Y,u as p,i as H,M as _e,G as X,n as K,N as ve,v as $,I as ae,o as ge,L as Q,C as fe,O as Ee}from"../chunks/scheduler.7de57571.js";import{S as te,i as ne,a as R,g as ce,c as ue,t as J,b as de,d as pe,m as he,e as me}from"../chunks/index.83f76350.js";import{e as Z}from"../chunks/transform.3586df06.js";import{b as Ce}from"../chunks/paths.ba4f465d.js";function be(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}class ke extends Map{constructor(e,s=Te){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:s}}),e!=null)for(const[n,i]of e)this.set(n,i)}get(e){return super.get(se(this,e))}has(e){return super.has(se(this,e))}set(e,s){return super.set(xe(this,e),s)}delete(e){return super.delete(ze(this,e))}}function se({_intern:t,_key:e},s){const n=e(s);return t.has(n)?t.get(n):s}function xe({_intern:t,_key:e},s){const n=e(s);return t.has(n)?t.get(n):(t.set(n,s),s)}function ze({_intern:t,_key:e},s){const n=e(s);return t.has(n)&&(s=t.get(n),t.delete(n)),s}function Te(t){return t!==null&&typeof t=="object"?t.valueOf():t}function Le(t){return t}function Se(t,...e){return we(t,Array.from,Le,e)}function we(t,e,s,n){return function i(o,v){if(v>=n.length)return s(o);const y=new ke,c=n[v++];let l=-1;for(const m of o){const r=c(m,++l,o),a=y.get(r);a?a.push(m):y.set(r,[m])}for(const[m,r]of y)y.set(m,i(r,v));return e(y)}(t,0)}async function Me(t){if("clipboard"in navigator)await navigator.clipboard.writeText(t);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=t,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}const De=(t,e)=>{async function s(){if(i)try{await Me(i),t.dispatchEvent(new CustomEvent("svelte-copy",{detail:i}))}catch(o){t.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:o}))}}let n=typeof e=="string"?["click"]:[e.events].flat(1),i=typeof e=="string"?e:e.text;return n.forEach(o=>{t.addEventListener(o,s,!0)}),{update:o=>{const v=typeof o=="string"?["click"]:[o.events].flat(1),y=typeof o=="string"?o:o.text,c=v.filter(m=>!n.includes(m)),l=n.filter(m=>!v.includes(m));c.forEach(m=>{t.addEventListener(m,s,!0)}),l.forEach(m=>{t.removeEventListener(m,s,!0)}),n=v,i=y},destroy:()=>{n.forEach(o=>{t.removeEventListener(o,s,!0)})}}};function Ne(t){let e,s,n,i,o,v,y,c,l,m,r,a="CSS Snippet",h,g,j,D,A,T,L="Copy CSS to Clipboard",B,z,N,U,V;return{c(){e=k("link"),s=w(),n=k("div"),i=k("h3"),o=O(t[0]),v=w(),y=k("p"),c=O(t[1]),l=w(),m=k("details"),r=k("summary"),r.textContent=a,h=w(),g=k("code"),j=O(t[2]),D=w(),A=k("p"),T=k("button"),T.textContent=L,z=k("span"),N=O(t[3]),this.h()},l(C){const f=ye("svelte-1uevrx3",document.head);e=x(f,"LINK",{rel:!0,href:!0}),f.forEach(b),s=M(C),n=x(C,"DIV",{style:!0,class:!0});var I=S(n);i=x(I,"H3",{class:!0});var u=S(i);o=F(u,t[0]),u.forEach(b),v=M(I),y=x(I,"P",{});var _=S(y);c=F(_,t[1]),_.forEach(b),l=M(I),m=x(I,"DETAILS",{class:!0});var d=S(m);r=x(d,"SUMMARY",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-1p4cxwi"&&(r.textContent=a),h=M(d),g=x(d,"CODE",{class:!0});var P=S(g);j=F(P,t[2]),P.forEach(b),d.forEach(b),D=M(I),A=x(I,"P",{});var q=S(A);T=x(q,"BUTTON",{class:!0,"data-svelte-h":!0}),W(T)!=="svelte-v2s51m"&&(T.textContent=L),z=x(q,"SPAN",{class:!0});var G=S(z);N=F(G,t[3]),G.forEach(b),q.forEach(b),I.forEach(b),this.h()},h(){E(e,"rel","external stylesheet"),E(e,"href",t[5]),E(i,"class","svelte-19ry7n"),Y(y,"font-size",t[4]),E(r,"class","svelte-19ry7n"),E(g,"class","svelte-19ry7n"),E(m,"class","svelte-19ry7n"),E(T,"class","svelte-19ry7n"),E(z,"class","svelte-19ry7n"),Y(n,"font-family","'"+t[0]+"'"),E(n,"class","svelte-19ry7n")},m(C,f){p(document.head,e),H(C,s,f),H(C,n,f),p(n,i),p(i,o),p(n,v),p(n,y),p(y,c),p(n,l),p(n,m),p(m,r),p(m,h),p(m,g),p(g,j),p(n,D),p(n,A),p(A,T),p(A,z),p(z,N),U||(V=[_e(B=De.call(null,T,t[2])),X(T,"svelte-copy",t[6])],U=!0)},p(C,[f]){f&1&&K(o,C[0]),f&2&&K(c,C[1]),f&16&&Y(y,"font-size",C[4]),f&4&&K(j,C[2]),B&&ve(B.update)&&f&4&&B.update.call(null,C[2]),f&8&&K(N,C[3]),f&1&&Y(n,"font-family","'"+C[0]+"'")},i:$,o:$,d(C){C&&(b(s),b(n)),b(e),U=!1,ae(V)}}}function Ie(t,e,s){let n,{id:i=""}=e,{family:o=""}=e,{size:v=16}=e,{text:y}=e,c="",l="";const m=`${Ce}/assets/demo/fonts/${i}.css`,r=()=>{s(3,l="Copied!"),setTimeout(()=>{s(3,l="")},1e3)};return ge(async()=>{const a=await fetch(m);s(2,c=await a.text())}),t.$$set=a=>{"id"in a&&s(7,i=a.id),"family"in a&&s(0,o=a.family),"size"in a&&s(8,v=a.size),"text"in a&&s(1,y=a.text)},t.$$.update=()=>{t.$$.dirty&256&&s(4,n=`${v}px`)},[o,y,c,l,n,m,r,i,v]}class Pe extends te{constructor(e){super(),ne(this,e,Ie,Ne,ee,{id:7,family:0,size:8,text:1})}}const Ae=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function le(t,e,s){const n=t.slice();return n[5]=e[s][0],n[6]=e[s][1],n}function oe(t,e,s){const n=t.slice();return n[9]=e[s].family,n[10]=e[s].id,n}function re(t){let e,s;return e=new Pe({props:{id:t[10],family:t[9],size:t[0],text:t[1]}}),{c(){de(e.$$.fragment)},l(n){pe(e.$$.fragment,n)},m(n,i){he(e,n,i),s=!0},p(n,i){const o={};i&1&&(o.size=n[0]),i&2&&(o.text=n[1]),e.$set(o)},i(n){s||(R(e.$$.fragment,n),s=!0)},o(n){J(e.$$.fragment,n),s=!1},d(n){me(e,n)}}}function ie(t){let e,s=t[5]+"",n,i,o,v,y,c=Z(t[6]),l=[];for(let r=0;r<c.length;r+=1)l[r]=re(oe(t,c,r));const m=r=>J(l[r],1,1,()=>{l[r]=null});return{c(){e=k("h2"),n=O(s),i=w(),o=k("section");for(let r=0;r<l.length;r+=1)l[r].c();v=w(),this.h()},l(r){e=x(r,"H2",{});var a=S(e);n=F(a,s),a.forEach(b),i=M(r),o=x(r,"SECTION",{class:!0});var h=S(o);for(let g=0;g<l.length;g+=1)l[g].l(h);v=M(h),h.forEach(b),this.h()},h(){E(o,"class","svelte-1lzc8ku")},m(r,a){H(r,e,a),p(e,n),H(r,i,a),H(r,o,a);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(o,null);p(o,v),y=!0},p(r,a){if(a&7){c=Z(r[6]);let h;for(h=0;h<c.length;h+=1){const g=oe(r,c,h);l[h]?(l[h].p(g,a),R(l[h],1)):(l[h]=re(g),l[h].c(),R(l[h],1),l[h].m(o,v))}for(ce(),h=c.length;h<l.length;h+=1)m(h);ue()}},i(r){if(!y){for(let a=0;a<c.length;a+=1)R(l[a]);y=!0}},o(r){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)J(l[a]);y=!1},d(r){r&&(b(e),b(i),b(o)),fe(l,r)}}}function Be(t){let e,s,n="Hosted Fonts on The Pudding",i,o,v="<em>Do not use fonts hosted by The Pudding without written permission.</em>",y,c,l,m,r,a,h,g,j,D,A="text sample",T,L,B,z,N,U,V,C=Z(t[2]),f=[];for(let u=0;u<C.length;u+=1)f[u]=ie(le(t,C,u));const I=u=>J(f[u],1,1,()=>{f[u]=null});return{c(){e=k("div"),s=k("h1"),s.textContent=n,i=w(),o=k("p"),o.innerHTML=v,y=w(),c=k("form"),l=k("label"),m=O("font-size: "),r=O(t[0]),a=O("px"),h=w(),g=k("input"),j=w(),D=k("label"),D.textContent=A,T=w(),L=k("input"),B=w(),z=k("article");for(let u=0;u<f.length;u+=1)f[u].c();this.h()},l(u){e=x(u,"DIV",{id:!0,class:!0});var _=S(e);s=x(_,"H1",{"data-svelte-h":!0}),W(s)!=="svelte-1m2hcwq"&&(s.textContent=n),i=M(_),o=x(_,"P",{"data-svelte-h":!0}),W(o)!=="svelte-895ja5"&&(o.innerHTML=v),y=M(_),c=x(_,"FORM",{});var d=S(c);l=x(d,"LABEL",{for:!0,class:!0});var P=S(l);m=F(P,"font-size: "),r=F(P,t[0]),a=F(P,"px"),P.forEach(b),h=M(d),g=x(d,"INPUT",{id:!0,type:!0,min:!0,max:!0}),j=M(d),D=x(d,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),W(D)!=="svelte-16zo6eo"&&(D.textContent=A),T=M(d),L=x(d,"INPUT",{id:!0,type:!0,maxlength:!0}),d.forEach(b),_.forEach(b),B=M(u),z=x(u,"ARTICLE",{class:!0});var q=S(z);for(let G=0;G<f.length;G+=1)f[G].l(q);q.forEach(b),this.h()},h(){E(l,"for","size"),E(l,"class","svelte-1lzc8ku"),E(g,"id","size"),E(g,"type","range"),E(g,"min","12"),E(g,"max","48"),E(D,"for","text"),E(D,"class","svelte-1lzc8ku"),E(L,"id","text"),E(L,"type","text"),E(L,"maxlength","100"),E(e,"id","info"),E(e,"class","svelte-1lzc8ku"),E(z,"class","svelte-1lzc8ku")},m(u,_){H(u,e,_),p(e,s),p(e,i),p(e,o),p(e,y),p(e,c),p(c,l),p(l,m),p(l,r),p(l,a),p(c,h),p(c,g),Q(g,t[0]),p(c,j),p(c,D),p(c,T),p(c,L),Q(L,t[1]),H(u,B,_),H(u,z,_);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(z,null);N=!0,U||(V=[X(g,"change",t[3]),X(g,"input",t[3]),X(L,"input",t[4])],U=!0)},p(u,[_]){if((!N||_&1)&&K(r,u[0]),_&1&&Q(g,u[0]),_&2&&L.value!==u[1]&&Q(L,u[1]),_&7){C=Z(u[2]);let d;for(d=0;d<C.length;d+=1){const P=le(u,C,d);f[d]?(f[d].p(P,_),R(f[d],1)):(f[d]=ie(P),f[d].c(),R(f[d],1),f[d].m(z,null))}for(ce(),d=C.length;d<f.length;d+=1)I(d);ue()}},i(u){if(!N){for(let _=0;_<C.length;_+=1)R(f[_]);N=!0}},o(u){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)J(f[_]);N=!1},d(u){u&&(b(e),b(B),b(z)),fe(f,u),U=!1,ae(V)}}}function je(t,e,s){let n=18,i="The quick brown fox jumps over the lazy dog.";const o=Se(Ae,c=>c.type);o.sort((c,l)=>be(c[1].length,l[1].length));function v(){n=Ee(this.value),s(0,n)}function y(){i=this.value,s(1,i)}return[n,i,o,v,y]}class Oe extends te{constructor(e){super(),ne(this,e,je,Be,ee,{})}}function Fe(t){let e,s;return e=new Oe({}),{c(){de(e.$$.fragment)},l(n){pe(e.$$.fragment,n)},m(n,i){he(e,n,i),s=!0},p:$,i(n){s||(R(e.$$.fragment,n),s=!0)},o(n){J(e.$$.fragment,n),s=!1},d(n){me(e,n)}}}class Ge extends te{constructor(e){super(),ne(this,e,null,Fe,ee,{})}}export{Ge as component};
