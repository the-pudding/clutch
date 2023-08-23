import{s as ee,f as k,a as w,l as H,B as me,g as z,d as C,c as D,h as L,m as j,Q,j as E,k as W,u as p,i as O,U as ye,D as X,n as K,S as _e,v as $,O as ie,o as ve,T as Y,C as re,V as ge}from"../chunks/scheduler.3de13e7e.js";import{S as te,i as ne,a as R,g as fe,c as ce,t as J,b as ue,d as de,m as pe,e as he}from"../chunks/index.2e8f3570.js";import{I as Ee,e as Z,d as be}from"../chunks/transform.227d0205.js";import{b as Ce}from"../chunks/paths.4c5f8bb7.js";function ke(n){return n}function ze(n,...e){return xe(n,Array.from,ke,e)}function xe(n,e,s,t){return function f(o,v){if(v>=t.length)return s(o);const y=new Ee,c=t[v++];let l=-1;for(const m of o){const a=c(m,++l,o),i=y.get(a);i?i.push(m):y.set(a,[m])}for(const[m,a]of y)y.set(m,f(a,v));return e(y)}(n,0)}async function Te(n){if("clipboard"in navigator)await navigator.clipboard.writeText(n);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=n,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}const Se=(n,e)=>{async function s(){if(f)try{await Te(f),n.dispatchEvent(new CustomEvent("svelte-copy",{detail:f}))}catch(o){n.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:o}))}}let t=typeof e=="string"?["click"]:[e.events].flat(1),f=typeof e=="string"?e:e.text;return t.forEach(o=>{n.addEventListener(o,s,!0)}),{update:o=>{const v=typeof o=="string"?["click"]:[o.events].flat(1),y=typeof o=="string"?o:o.text,c=v.filter(m=>!t.includes(m)),l=t.filter(m=>!v.includes(m));c.forEach(m=>{n.addEventListener(m,s,!0)}),l.forEach(m=>{n.removeEventListener(m,s,!0)}),t=v,f=y},destroy:()=>{t.forEach(o=>{n.removeEventListener(o,s,!0)})}}};function Le(n){let e,s,t,f,o,v,y,c,l,m,a,i="CSS Snippet",h,g,F,I,B,T,S="Copy CSS to Clipboard",N,x,M,U,G;return{c(){e=k("link"),s=w(),t=k("div"),f=k("h3"),o=H(n[0]),v=w(),y=k("p"),c=H(n[1]),l=w(),m=k("details"),a=k("summary"),a.textContent=i,h=w(),g=k("code"),F=H(n[2]),I=w(),B=k("p"),T=k("button"),T.textContent=S,x=k("span"),M=H(n[3]),this.h()},l(b){const r=me("svelte-1uevrx3",document.head);e=z(r,"LINK",{rel:!0,href:!0}),r.forEach(C),s=D(b),t=z(b,"DIV",{style:!0,class:!0});var P=L(t);f=z(P,"H3",{class:!0});var u=L(f);o=j(u,n[0]),u.forEach(C),v=D(P),y=z(P,"P",{});var _=L(y);c=j(_,n[1]),_.forEach(C),l=D(P),m=z(P,"DETAILS",{class:!0});var d=L(m);a=z(d,"SUMMARY",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-1p4cxwi"&&(a.textContent=i),h=D(d),g=z(d,"CODE",{class:!0});var A=L(g);F=j(A,n[2]),A.forEach(C),d.forEach(C),I=D(P),B=z(P,"P",{});var q=L(B);T=z(q,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(T)!=="svelte-v2s51m"&&(T.textContent=S),x=z(q,"SPAN",{class:!0});var V=L(x);M=j(V,n[3]),V.forEach(C),q.forEach(C),P.forEach(C),this.h()},h(){E(e,"rel","external stylesheet"),E(e,"href",n[5]),E(f,"class","svelte-19ry7n"),W(y,"font-size",n[4]),E(a,"class","svelte-19ry7n"),E(g,"class","svelte-19ry7n"),E(m,"class","svelte-19ry7n"),E(T,"class","svelte-19ry7n"),E(x,"class","svelte-19ry7n"),W(t,"font-family","'"+n[0]+"'"),E(t,"class","svelte-19ry7n")},m(b,r){p(document.head,e),O(b,s,r),O(b,t,r),p(t,f),p(f,o),p(t,v),p(t,y),p(y,c),p(t,l),p(t,m),p(m,a),p(m,h),p(m,g),p(g,F),p(t,I),p(t,B),p(B,T),p(B,x),p(x,M),U||(G=[ye(N=Se.call(null,T,n[2])),X(T,"svelte-copy",n[6])],U=!0)},p(b,[r]){r&1&&K(o,b[0]),r&2&&K(c,b[1]),r&16&&W(y,"font-size",b[4]),r&4&&K(F,b[2]),N&&_e(N.update)&&r&4&&N.update.call(null,b[2]),r&8&&K(M,b[3]),r&1&&W(t,"font-family","'"+b[0]+"'")},i:$,o:$,d(b){b&&(C(s),C(t)),C(e),U=!1,ie(G)}}}function we(n,e,s){let t,{id:f=""}=e,{family:o=""}=e,{size:v=16}=e,{text:y}=e,c="",l="";const m=`${Ce}/assets/demo/fonts/${f}.css`,a=()=>{s(3,l="Copied!"),setTimeout(()=>{s(3,l="")},1e3)};return ve(async()=>{const i=await fetch(m);s(2,c=await i.text())}),n.$$set=i=>{"id"in i&&s(7,f=i.id),"family"in i&&s(0,o=i.family),"size"in i&&s(8,v=i.size),"text"in i&&s(1,y=i.text)},n.$$.update=()=>{n.$$.dirty&256&&s(4,t=`${v}px`)},[o,y,c,l,t,m,a,f,v]}class De extends te{constructor(e){super(),ne(this,e,we,Le,ee,{id:7,family:0,size:8,text:1})}}const Ie=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function se(n,e,s){const t=n.slice();return t[5]=e[s][0],t[6]=e[s][1],t}function le(n,e,s){const t=n.slice();return t[9]=e[s].family,t[10]=e[s].id,t}function oe(n){let e,s;return e=new De({props:{id:n[10],family:n[9],size:n[0],text:n[1]}}),{c(){ue(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,f){pe(e,t,f),s=!0},p(t,f){const o={};f&1&&(o.size=t[0]),f&2&&(o.text=t[1]),e.$set(o)},i(t){s||(R(e.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),s=!1},d(t){he(e,t)}}}function ae(n){let e,s=n[5]+"",t,f,o,v,y,c=Z(n[6]),l=[];for(let a=0;a<c.length;a+=1)l[a]=oe(le(n,c,a));const m=a=>J(l[a],1,1,()=>{l[a]=null});return{c(){e=k("h2"),t=H(s),f=w(),o=k("section");for(let a=0;a<l.length;a+=1)l[a].c();v=w(),this.h()},l(a){e=z(a,"H2",{});var i=L(e);t=j(i,s),i.forEach(C),f=D(a),o=z(a,"SECTION",{class:!0});var h=L(o);for(let g=0;g<l.length;g+=1)l[g].l(h);v=D(h),h.forEach(C),this.h()},h(){E(o,"class","svelte-1lzc8ku")},m(a,i){O(a,e,i),p(e,t),O(a,f,i),O(a,o,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(o,null);p(o,v),y=!0},p(a,i){if(i&7){c=Z(a[6]);let h;for(h=0;h<c.length;h+=1){const g=le(a,c,h);l[h]?(l[h].p(g,i),R(l[h],1)):(l[h]=oe(g),l[h].c(),R(l[h],1),l[h].m(o,v))}for(fe(),h=c.length;h<l.length;h+=1)m(h);ce()}},i(a){if(!y){for(let i=0;i<c.length;i+=1)R(l[i]);y=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)J(l[i]);y=!1},d(a){a&&(C(e),C(f),C(o)),re(l,a)}}}function Me(n){let e,s,t="Hosted Fonts on The Pudding",f,o,v="<em>Do not use fonts hosted by The Pudding without written permission.</em>",y,c,l,m,a,i,h,g,F,I,B="text sample",T,S,N,x,M,U,G,b=Z(n[2]),r=[];for(let u=0;u<b.length;u+=1)r[u]=ae(se(n,b,u));const P=u=>J(r[u],1,1,()=>{r[u]=null});return{c(){e=k("div"),s=k("h1"),s.textContent=t,f=w(),o=k("p"),o.innerHTML=v,y=w(),c=k("form"),l=k("label"),m=H("font-size: "),a=H(n[0]),i=H("px"),h=w(),g=k("input"),F=w(),I=k("label"),I.textContent=B,T=w(),S=k("input"),N=w(),x=k("article");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){e=z(u,"DIV",{id:!0,class:!0});var _=L(e);s=z(_,"H1",{"data-svelte-h":!0}),Q(s)!=="svelte-1m2hcwq"&&(s.textContent=t),f=D(_),o=z(_,"P",{"data-svelte-h":!0}),Q(o)!=="svelte-895ja5"&&(o.innerHTML=v),y=D(_),c=z(_,"FORM",{});var d=L(c);l=z(d,"LABEL",{for:!0,class:!0});var A=L(l);m=j(A,"font-size: "),a=j(A,n[0]),i=j(A,"px"),A.forEach(C),h=D(d),g=z(d,"INPUT",{id:!0,type:!0,min:!0,max:!0}),F=D(d),I=z(d,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),Q(I)!=="svelte-16zo6eo"&&(I.textContent=B),T=D(d),S=z(d,"INPUT",{id:!0,type:!0,maxlength:!0}),d.forEach(C),_.forEach(C),N=D(u),x=z(u,"ARTICLE",{class:!0});var q=L(x);for(let V=0;V<r.length;V+=1)r[V].l(q);q.forEach(C),this.h()},h(){E(l,"for","size"),E(l,"class","svelte-1lzc8ku"),E(g,"id","size"),E(g,"type","range"),E(g,"min","12"),E(g,"max","48"),E(I,"for","text"),E(I,"class","svelte-1lzc8ku"),E(S,"id","text"),E(S,"type","text"),E(S,"maxlength","100"),E(e,"id","info"),E(e,"class","svelte-1lzc8ku"),E(x,"class","svelte-1lzc8ku")},m(u,_){O(u,e,_),p(e,s),p(e,f),p(e,o),p(e,y),p(e,c),p(c,l),p(l,m),p(l,a),p(l,i),p(c,h),p(c,g),Y(g,n[0]),p(c,F),p(c,I),p(c,T),p(c,S),Y(S,n[1]),O(u,N,_),O(u,x,_);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(x,null);M=!0,U||(G=[X(g,"change",n[3]),X(g,"input",n[3]),X(S,"input",n[4])],U=!0)},p(u,[_]){if((!M||_&1)&&K(a,u[0]),_&1&&Y(g,u[0]),_&2&&S.value!==u[1]&&Y(S,u[1]),_&7){b=Z(u[2]);let d;for(d=0;d<b.length;d+=1){const A=se(u,b,d);r[d]?(r[d].p(A,_),R(r[d],1)):(r[d]=ae(A),r[d].c(),R(r[d],1),r[d].m(x,null))}for(fe(),d=b.length;d<r.length;d+=1)P(d);ce()}},i(u){if(!M){for(let _=0;_<b.length;_+=1)R(r[_]);M=!0}},o(u){r=r.filter(Boolean);for(let _=0;_<r.length;_+=1)J(r[_]);M=!1},d(u){u&&(C(e),C(N),C(x)),re(r,u),U=!1,ie(G)}}}function Pe(n,e,s){let t=18,f="The quick brown fox jumps over the lazy dog.";const o=ze(Ie,c=>c.type);o.sort((c,l)=>be(c[1].length,l[1].length));function v(){t=ge(this.value),s(0,t)}function y(){f=this.value,s(1,f)}return[t,f,o,v,y]}class Ae extends te{constructor(e){super(),ne(this,e,Pe,Me,ee,{})}}function Be(n){let e,s;return e=new Ae({}),{c(){ue(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,f){pe(e,t,f),s=!0},p:$,i(t){s||(R(e.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),s=!1},d(t){he(e,t)}}}class Oe extends te{constructor(e){super(),ne(this,e,null,Be,ee,{})}}export{Oe as component};
