var $a=Object.defineProperty;var Ct=t=>{throw TypeError(t)};var za=(t,a,i)=>a in t?$a(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;var g=(t,a,i)=>za(t,typeof a!="symbol"?a+"":a,i),it=(t,a,i)=>a.has(t)||Ct("Cannot "+i);var h=(t,a,i)=>(it(t,a,"read from private field"),i?i.call(t):a.get(t)),x=(t,a,i)=>a.has(t)?Ct("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,i),N=(t,a,i,s)=>(it(t,a,"write to private field"),s?s.call(t,i):a.set(t,i),i),E=(t,a,i)=>(it(t,a,"access private method"),i);var At=(t,a,i,s)=>({set _(r){N(t,a,r,i)},get _(){return h(t,a,s)}});var ta={Stringify:1},I=(t,a)=>{const i=new String(t);return i.isEscaped=!0,i.callbacks=a,i},Ua=/[&<>'"]/,aa=async(t,a)=>{let i="";a||(a=[]);const s=await Promise.all(t);for(let r=s.length-1;i+=s[r],r--,!(r<0);r--){let n=s[r];typeof n=="object"&&a.push(...n.callbacks||[]);const l=n.isEscaped;if(n=await(typeof n=="object"?n.toString():n),typeof n=="object"&&a.push(...n.callbacks||[]),n.isEscaped??l)i+=n;else{const c=[i];te(n,c),i=c[0]}}return I(i,a)},te=(t,a)=>{const i=t.search(Ua);if(i===-1){a[0]+=t;return}let s,r,n=0;for(r=i;r<t.length;r++){switch(t.charCodeAt(r)){case 34:s="&quot;";break;case 39:s="&#39;";break;case 38:s="&amp;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}a[0]+=t.substring(n,r)+s,n=r+1}a[0]+=t.substring(n,r)},ia=t=>{const a=t.callbacks;if(!(a!=null&&a.length))return t;const i=[t],s={};return a.forEach(r=>r({phase:ta.Stringify,buffer:i,context:s})),i[0]},sa=async(t,a,i,s,r)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const n=t.callbacks;return n!=null&&n.length?(r?r[0]+=t:r=[t],Promise.all(n.map(c=>c({phase:a,buffer:r,context:s}))).then(c=>Promise.all(c.filter(Boolean).map(o=>sa(o,a,!1,s,r))).then(()=>r[0]))):Promise.resolve(t)},Ga=(t,...a)=>{const i=[""];for(let s=0,r=t.length-1;s<r;s++){i[0]+=t[s];const n=Array.isArray(a[s])?a[s].flat(1/0):[a[s]];for(let l=0,c=n.length;l<c;l++){const o=n[l];if(typeof o=="string")te(o,i);else if(typeof o=="number")i[0]+=o;else{if(typeof o=="boolean"||o===null||o===void 0)continue;if(typeof o=="object"&&o.isEscaped)if(o.callbacks)i.unshift("",o);else{const d=o.toString();d instanceof Promise?i.unshift("",d):i[0]+=d}else o instanceof Promise?i.unshift("",o):te(o.toString(),i)}}}return i[0]+=t.at(-1),i.length===1?"callbacks"in i?I(ia(I(i[0],i.callbacks))):I(i[0]):aa(i,i.callbacks)},bt=Symbol("RENDERER"),ut=Symbol("ERROR_HANDLER"),A=Symbol("STASH"),ra=Symbol("INTERNAL"),Ba=Symbol("MEMO"),Je=Symbol("PERMALINK"),Pt=t=>(t[ra]=!0,t),na=t=>({value:a,children:i})=>{if(!i)return;const s={children:[{tag:Pt(()=>{t.push(a)}),props:{}}]};Array.isArray(i)?s.children.push(...i.flat()):s.children.push(i),s.children.push({tag:Pt(()=>{t.pop()}),props:{}});const r={tag:"",props:s,type:""};return r[ut]=n=>{throw t.pop(),n},r},la=t=>{const a=[t],i=na(a);return i.values=a,i.Provider=i,we.push(i),i},we=[],Nt=t=>{const a=[t],i=s=>{a.push(s.value);let r;try{r=s.children?(Array.isArray(s.children)?new ha("",{},s.children):s.children).toString():""}finally{a.pop()}return r instanceof Promise?r.then(n=>I(n,n.callbacks)):I(r)};return i.values=a,i.Provider=i,i[bt]=na(a),we.push(i),i},Se=t=>t.values.at(-1),Ue={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},ft={},Ge="data-precedence",He=t=>Array.isArray(t)?t:[t],Tt=new WeakMap,Rt=(t,a,i,s)=>({buffer:r,context:n})=>{if(!r)return;const l=Tt.get(n)||{};Tt.set(n,l);const c=l[t]||(l[t]=[]);let o=!1;const d=Ue[t];if(d.length>0){e:for(const[,m]of c)for(const u of d)if(((m==null?void 0:m[u])??null)===(i==null?void 0:i[u])){o=!0;break e}}if(o?r[0]=r[0].replaceAll(a,""):d.length>0?c.push([a,i,s]):c.unshift([a,i,s]),r[0].indexOf("</head>")!==-1){let m;if(s===void 0)m=c.map(([u])=>u);else{const u=[];m=c.map(([f,,v])=>{let b=u.indexOf(v);return b===-1&&(u.push(v),b=u.length-1),[f,b]}).sort((f,v)=>f[1]-v[1]).map(([f])=>f)}m.forEach(u=>{r[0]=r[0].replaceAll(u,"")}),r[0]=r[0].replace(/(?=<\/head>)/,m.join(""))}},_e=(t,a,i)=>I(new q(t,i,He(a??[])).toString()),qe=(t,a,i,s)=>{if("itemProp"in i)return _e(t,a,i);let{precedence:r,blocking:n,...l}=i;r=s?r??"":void 0,s&&(l[Ge]=r);const c=new q(t,l,He(a||[])).toString();return c instanceof Promise?c.then(o=>I(c,[...o.callbacks||[],Rt(t,o,l,r)])):I(c,[Rt(t,c,l,r)])},Wa=({children:t,...a})=>{const i=wt();if(i){const s=Se(i);if(s==="svg"||s==="head")return new q("title",a,He(t??[]))}return qe("title",t,a,!1)},Va=({children:t,...a})=>{const i=wt();return["src","async"].some(s=>!a[s])||i&&Se(i)==="head"?_e("script",t,a):qe("script",t,a,!1)},Xa=({children:t,...a})=>["href","precedence"].every(i=>i in a)?(a["data-href"]=a.href,delete a.href,qe("style",t,a,!0)):_e("style",t,a),Ka=({children:t,...a})=>["onLoad","onError"].some(i=>i in a)||a.rel==="stylesheet"&&(!("precedence"in a)||"disabled"in a)?_e("link",t,a):qe("link",t,a,"precedence"in a),Ya=({children:t,...a})=>{const i=wt();return i&&Se(i)==="head"?_e("meta",t,a):qe("meta",t,a,!1)},ca=(t,{children:a,...i})=>new q(t,i,He(a??[])),Ja=t=>(typeof t.action=="function"&&(t.action=Je in t.action?t.action[Je]:void 0),ca("form",t)),oa=(t,a)=>(typeof a.formAction=="function"&&(a.formAction=Je in a.formAction?a.formAction[Je]:void 0),ca(t,a)),Qa=t=>oa("input",t),Za=t=>oa("button",t);const st=Object.freeze(Object.defineProperty({__proto__:null,button:Za,form:Ja,input:Qa,link:Ka,meta:Ya,script:Va,style:Xa,title:Wa},Symbol.toStringTag,{value:"Module"}));var ei=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),Qe=t=>ei.get(t)||t,da=(t,a)=>{for(const[i,s]of Object.entries(t)){const r=i[0]==="-"||!/[A-Z]/.test(i)?i:i.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);a(r,s==null?null:typeof s=="number"?r.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${s}`:`${s}px`:s)}},Pe=void 0,wt=()=>Pe,ti=t=>/[A-Z]/.test(t)&&t.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,ai=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],ii=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],xt=(t,a)=>{for(let i=0,s=t.length;i<s;i++){const r=t[i];if(typeof r=="string")te(r,a);else{if(typeof r=="boolean"||r===null||r===void 0)continue;r instanceof q?r.toStringToBuffer(a):typeof r=="number"||r.isEscaped?a[0]+=r:r instanceof Promise?a.unshift("",r):xt(r,a)}}},q=class{constructor(t,a,i){g(this,"tag");g(this,"props");g(this,"key");g(this,"children");g(this,"isEscaped",!0);g(this,"localContexts");this.tag=t,this.props=a,this.children=i}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var a,i;const t=[""];(a=this.localContexts)==null||a.forEach(([s,r])=>{s.values.push(r)});try{this.toStringToBuffer(t)}finally{(i=this.localContexts)==null||i.forEach(([s])=>{s.values.pop()})}return t.length===1?"callbacks"in t?ia(I(t[0],t.callbacks)).toString():t[0]:aa(t,t.callbacks)}toStringToBuffer(t){const a=this.tag,i=this.props;let{children:s}=this;t[0]+=`<${a}`;const r=Pe&&Se(Pe)==="svg"?n=>ti(Qe(n)):n=>Qe(n);for(let[n,l]of Object.entries(i))if(n=r(n),n!=="children"){if(n==="style"&&typeof l=="object"){let c="";da(l,(o,d)=>{d!=null&&(c+=`${c?";":""}${o}:${d}`)}),t[0]+=' style="',te(c,t),t[0]+='"'}else if(typeof l=="string")t[0]+=` ${n}="`,te(l,t),t[0]+='"';else if(l!=null)if(typeof l=="number"||l.isEscaped)t[0]+=` ${n}="${l}"`;else if(typeof l=="boolean"&&ii.includes(n))l&&(t[0]+=` ${n}=""`);else if(n==="dangerouslySetInnerHTML"){if(s.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");s=[I(l.__html)]}else if(l instanceof Promise)t[0]+=` ${n}="`,t.unshift('"',l);else if(typeof l=="function"){if(!n.startsWith("on")&&n!=="ref")throw new Error(`Invalid prop '${n}' of type 'function' supplied to '${a}'.`)}else t[0]+=` ${n}="`,te(l.toString(),t),t[0]+='"'}if(ai.includes(a)&&s.length===0){t[0]+="/>";return}t[0]+=">",xt(s,t),t[0]+=`</${a}>`}},rt=class extends q{toStringToBuffer(t){const{children:a}=this,i=this.tag.call(null,{...this.props,children:a.length<=1?a[0]:a});if(!(typeof i=="boolean"||i==null))if(i instanceof Promise)if(we.length===0)t.unshift("",i);else{const s=we.map(r=>[r,r.values.at(-1)]);t.unshift("",i.then(r=>(r instanceof q&&(r.localContexts=s),r)))}else i instanceof q?i.toStringToBuffer(t):typeof i=="number"||i.isEscaped?(t[0]+=i,i.callbacks&&(t.callbacks||(t.callbacks=[]),t.callbacks.push(...i.callbacks))):te(i,t)}},ha=class extends q{toStringToBuffer(t){xt(this.children,t)}},Ot=(t,a,...i)=>{a??(a={}),i.length&&(a.children=i.length===1?i[0]:i);const s=a.key;delete a.key;const r=Be(t,a,i);return r.key=s,r},Mt=!1,Be=(t,a,i)=>{if(!Mt){for(const s in ft)st[s][bt]=ft[s];Mt=!0}return typeof t=="function"?new rt(t,a,i):st[t]?new rt(st[t],a,i):t==="svg"||t==="head"?(Pe||(Pe=Nt("")),new q(t,a,[new rt(Pe,{value:t},i)])):new q(t,a,i)},si=({children:t})=>new ha("",{children:t},Array.isArray(t)?t:t?[t]:[]);function e(t,a,i){let s;if(!a||!("children"in a))s=Be(t,a,[]);else{const r=a.children;s=Array.isArray(r)?Be(t,a,r):Be(t,a,[r])}return s.key=i,s}var Lt=(t,a,i)=>(s,r)=>{let n=-1;return l(0);async function l(c){if(c<=n)throw new Error("next() called multiple times");n=c;let o,d=!1,m;if(t[c]?(m=t[c][0][0],s.req.routeIndex=c):m=c===t.length&&r||void 0,m)try{o=await m(s,()=>l(c+1))}catch(u){if(u instanceof Error&&a)s.error=u,o=await a(u,s),d=!0;else throw u}else s.finalized===!1&&i&&(o=await i(s));return o&&(s.finalized===!1||d)&&(s.res=o),s}},ri=Symbol(),ni=async(t,a=Object.create(null))=>{const{all:i=!1,dot:s=!1}=a,n=(t instanceof ga?t.raw.headers:t.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?li(t,{all:i,dot:s}):{}};async function li(t,a){const i=await t.formData();return i?ci(i,a):{}}function ci(t,a){const i=Object.create(null);return t.forEach((s,r)=>{a.all||r.endsWith("[]")?oi(i,r,s):i[r]=s}),a.dot&&Object.entries(i).forEach(([s,r])=>{s.includes(".")&&(di(i,s,r),delete i[s])}),i}var oi=(t,a,i)=>{t[a]!==void 0?Array.isArray(t[a])?t[a].push(i):t[a]=[t[a],i]:a.endsWith("[]")?t[a]=[i]:t[a]=i},di=(t,a,i)=>{let s=t;const r=a.split(".");r.forEach((n,l)=>{l===r.length-1?s[n]=i:((!s[n]||typeof s[n]!="object"||Array.isArray(s[n])||s[n]instanceof File)&&(s[n]=Object.create(null)),s=s[n])})},ma=t=>{const a=t.split("/");return a[0]===""&&a.shift(),a},hi=t=>{const{groups:a,path:i}=mi(t),s=ma(i);return ui(s,a)},mi=t=>{const a=[];return t=t.replace(/\{[^}]+\}/g,(i,s)=>{const r=`@${s}`;return a.push([r,i]),r}),{groups:a,path:t}},ui=(t,a)=>{for(let i=a.length-1;i>=0;i--){const[s]=a[i];for(let r=t.length-1;r>=0;r--)if(t[r].includes(s)){t[r]=t[r].replace(s,a[i][1]);break}}return t},$e={},fi=(t,a)=>{if(t==="*")return"*";const i=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(i){const s=`${t}#${a}`;return $e[s]||(i[2]?$e[s]=a&&a[0]!==":"&&a[0]!=="*"?[s,i[1],new RegExp(`^${i[2]}(?=/${a})`)]:[t,i[1],new RegExp(`^${i[2]}$`)]:$e[s]=[t,i[1],!0]),$e[s]}return null},St=(t,a)=>{try{return a(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,i=>{try{return a(i)}catch{return i}})}},pi=t=>St(t,decodeURI),ua=t=>{const a=t.url,i=a.indexOf("/",a.indexOf(":")+4);let s=i;for(;s<a.length;s++){const r=a.charCodeAt(s);if(r===37){const n=a.indexOf("?",s),l=a.slice(i,n===-1?void 0:n);return pi(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(r===63)break}return a.slice(i,s)},vi=t=>{const a=ua(t);return a.length>1&&a.at(-1)==="/"?a.slice(0,-1):a},ue=(t,a,...i)=>(i.length&&(a=ue(a,...i)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${a==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(a==null?void 0:a[0])==="/"?a.slice(1):a}`}`),fa=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const a=t.split("/"),i=[];let s="";return a.forEach(r=>{if(r!==""&&!/\:/.test(r))s+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){i.length===0&&s===""?i.push("/"):i.push(s);const n=r.replace("?","");s+="/"+n,i.push(s)}else s+="/"+r}),i.filter((r,n,l)=>l.indexOf(r)===n)},nt=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?St(t,va):t):t,pa=(t,a,i)=>{let s;if(!i&&a&&!/[%+]/.test(a)){let l=t.indexOf(`?${a}`,8);for(l===-1&&(l=t.indexOf(`&${a}`,8));l!==-1;){const c=t.charCodeAt(l+a.length+1);if(c===61){const o=l+a.length+2,d=t.indexOf("&",o);return nt(t.slice(o,d===-1?void 0:d))}else if(c==38||isNaN(c))return"";l=t.indexOf(`&${a}`,l+1)}if(s=/[%+]/.test(t),!s)return}const r={};s??(s=/[%+]/.test(t));let n=t.indexOf("?",8);for(;n!==-1;){const l=t.indexOf("&",n+1);let c=t.indexOf("=",n);c>l&&l!==-1&&(c=-1);let o=t.slice(n+1,c===-1?l===-1?void 0:l:c);if(s&&(o=nt(o)),n=l,o==="")continue;let d;c===-1?d="":(d=t.slice(c+1,l===-1?void 0:l),s&&(d=nt(d))),i?(r[o]&&Array.isArray(r[o])||(r[o]=[]),r[o].push(d)):r[o]??(r[o]=d)}return a?r[a]:r},gi=pa,yi=(t,a)=>pa(t,a,!0),va=decodeURIComponent,jt=t=>St(t,va),ve,j,V,ya,ba,pt,K,Wt,ga=(Wt=class{constructor(t,a="/",i=[[]]){x(this,V);g(this,"raw");x(this,ve);x(this,j);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});x(this,K,t=>{const{bodyCache:a,raw:i}=this,s=a[t];if(s)return s;const r=Object.keys(a)[0];return r?a[r].then(n=>(r==="json"&&(n=JSON.stringify(n)),new Response(n)[t]())):a[t]=i[t]()});this.raw=t,this.path=a,N(this,j,i),N(this,ve,{})}param(t){return t?E(this,V,ya).call(this,t):E(this,V,ba).call(this)}query(t){return gi(this.url,t)}queries(t){return yi(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const a={};return this.raw.headers.forEach((i,s)=>{a[s]=i}),a}async parseBody(t){var a;return(a=this.bodyCache).parsedBody??(a.parsedBody=await ni(this,t))}json(){return h(this,K).call(this,"text").then(t=>JSON.parse(t))}text(){return h(this,K).call(this,"text")}arrayBuffer(){return h(this,K).call(this,"arrayBuffer")}blob(){return h(this,K).call(this,"blob")}formData(){return h(this,K).call(this,"formData")}addValidatedData(t,a){h(this,ve)[t]=a}valid(t){return h(this,ve)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[ri](){return h(this,j)}get matchedRoutes(){return h(this,j)[0].map(([[,t]])=>t)}get routePath(){return h(this,j)[0].map(([[,t]])=>t)[this.routeIndex].path}},ve=new WeakMap,j=new WeakMap,V=new WeakSet,ya=function(t){const a=h(this,j)[0][this.routeIndex][1][t],i=E(this,V,pt).call(this,a);return i&&/\%/.test(i)?jt(i):i},ba=function(){const t={},a=Object.keys(h(this,j)[0][this.routeIndex][1]);for(const i of a){const s=E(this,V,pt).call(this,h(this,j)[0][this.routeIndex][1][i]);s!==void 0&&(t[i]=/\%/.test(s)?jt(s):s)}return t},pt=function(t){return h(this,j)[1]?h(this,j)[1][t]:t},K=new WeakMap,Wt),bi="text/plain; charset=UTF-8",lt=(t,a)=>({"Content-Type":t,...a}),Oe,Me,U,ge,G,L,Le,ye,be,re,je,Ie,Y,fe,Vt,Ni=(Vt=class{constructor(t,a){x(this,Y);x(this,Oe);x(this,Me);g(this,"env",{});x(this,U);g(this,"finalized",!1);g(this,"error");x(this,ge);x(this,G);x(this,L);x(this,Le);x(this,ye);x(this,be);x(this,re);x(this,je);x(this,Ie);g(this,"render",(...t)=>(h(this,ye)??N(this,ye,a=>this.html(a)),h(this,ye).call(this,...t)));g(this,"setLayout",t=>N(this,Le,t));g(this,"getLayout",()=>h(this,Le));g(this,"setRenderer",t=>{N(this,ye,t)});g(this,"header",(t,a,i)=>{this.finalized&&N(this,L,new Response(h(this,L).body,h(this,L)));const s=h(this,L)?h(this,L).headers:h(this,re)??N(this,re,new Headers);a===void 0?s.delete(t):i!=null&&i.append?s.append(t,a):s.set(t,a)});g(this,"status",t=>{N(this,ge,t)});g(this,"set",(t,a)=>{h(this,U)??N(this,U,new Map),h(this,U).set(t,a)});g(this,"get",t=>h(this,U)?h(this,U).get(t):void 0);g(this,"newResponse",(...t)=>E(this,Y,fe).call(this,...t));g(this,"body",(t,a,i)=>E(this,Y,fe).call(this,t,a,i));g(this,"text",(t,a,i)=>!h(this,re)&&!h(this,ge)&&!a&&!i&&!this.finalized?new Response(t):E(this,Y,fe).call(this,t,a,lt(bi,i)));g(this,"json",(t,a,i)=>E(this,Y,fe).call(this,JSON.stringify(t),a,lt("application/json",i)));g(this,"html",(t,a,i)=>{const s=r=>E(this,Y,fe).call(this,r,a,lt("text/html; charset=UTF-8",i));return typeof t=="object"?sa(t,ta.Stringify,!1,{}).then(s):s(t)});g(this,"redirect",(t,a)=>{const i=String(t);return this.header("Location",/[^\x00-\xFF]/.test(i)?encodeURI(i):i),this.newResponse(null,a??302)});g(this,"notFound",()=>(h(this,be)??N(this,be,()=>new Response),h(this,be).call(this,this)));N(this,Oe,t),a&&(N(this,G,a.executionCtx),this.env=a.env,N(this,be,a.notFoundHandler),N(this,Ie,a.path),N(this,je,a.matchResult))}get req(){return h(this,Me)??N(this,Me,new ga(h(this,Oe),h(this,Ie),h(this,je))),h(this,Me)}get event(){if(h(this,G)&&"respondWith"in h(this,G))return h(this,G);throw Error("This context has no FetchEvent")}get executionCtx(){if(h(this,G))return h(this,G);throw Error("This context has no ExecutionContext")}get res(){return h(this,L)||N(this,L,new Response(null,{headers:h(this,re)??N(this,re,new Headers)}))}set res(t){if(h(this,L)&&t){t=new Response(t.body,t);for(const[a,i]of h(this,L).headers.entries())if(a!=="content-type")if(a==="set-cookie"){const s=h(this,L).headers.getSetCookie();t.headers.delete("set-cookie");for(const r of s)t.headers.append("set-cookie",r)}else t.headers.set(a,i)}N(this,L,t),this.finalized=!0}get var(){return h(this,U)?Object.fromEntries(h(this,U)):{}}},Oe=new WeakMap,Me=new WeakMap,U=new WeakMap,ge=new WeakMap,G=new WeakMap,L=new WeakMap,Le=new WeakMap,ye=new WeakMap,be=new WeakMap,re=new WeakMap,je=new WeakMap,Ie=new WeakMap,Y=new WeakSet,fe=function(t,a,i){const s=h(this,L)?new Headers(h(this,L).headers):h(this,re)??new Headers;if(typeof a=="object"&&"headers"in a){const n=a.headers instanceof Headers?a.headers:new Headers(a.headers);for(const[l,c]of n)l.toLowerCase()==="set-cookie"?s.append(l,c):s.set(l,c)}if(i)for(const[n,l]of Object.entries(i))if(typeof l=="string")s.set(n,l);else{s.delete(n);for(const c of l)s.append(n,c)}const r=typeof a=="number"?a:(a==null?void 0:a.status)??h(this,ge);return new Response(t,{status:r,headers:s})},Vt),P="ALL",wi="all",xi=["get","post","put","delete","options","patch"],Na="Can not add a route since the matcher is already built.",wa=class extends Error{},Si="__COMPOSED_HANDLER",ki=t=>t.text("404 Not Found",404),It=(t,a)=>{if("getResponse"in t){const i=t.getResponse();return a.newResponse(i.body,i)}return console.error(t),a.text("Internal Server Error",500)},D,T,Sa,H,ie,We,Ve,Xt,xa=(Xt=class{constructor(a={}){x(this,T);g(this,"get");g(this,"post");g(this,"put");g(this,"delete");g(this,"options");g(this,"patch");g(this,"all");g(this,"on");g(this,"use");g(this,"router");g(this,"getPath");g(this,"_basePath","/");x(this,D,"/");g(this,"routes",[]);x(this,H,ki);g(this,"errorHandler",It);g(this,"onError",a=>(this.errorHandler=a,this));g(this,"notFound",a=>(N(this,H,a),this));g(this,"fetch",(a,...i)=>E(this,T,Ve).call(this,a,i[1],i[0],a.method));g(this,"request",(a,i,s,r)=>a instanceof Request?this.fetch(i?new Request(a,i):a,s,r):(a=a.toString(),this.fetch(new Request(/^https?:\/\//.test(a)?a:`http://localhost${ue("/",a)}`,i),s,r)));g(this,"fire",()=>{addEventListener("fetch",a=>{a.respondWith(E(this,T,Ve).call(this,a.request,a,void 0,a.request.method))})});[...xi,wi].forEach(n=>{this[n]=(l,...c)=>(typeof l=="string"?N(this,D,l):E(this,T,ie).call(this,n,h(this,D),l),c.forEach(o=>{E(this,T,ie).call(this,n,h(this,D),o)}),this)}),this.on=(n,l,...c)=>{for(const o of[l].flat()){N(this,D,o);for(const d of[n].flat())c.map(m=>{E(this,T,ie).call(this,d.toUpperCase(),h(this,D),m)})}return this},this.use=(n,...l)=>(typeof n=="string"?N(this,D,n):(N(this,D,"*"),l.unshift(n)),l.forEach(c=>{E(this,T,ie).call(this,P,h(this,D),c)}),this);const{strict:s,...r}=a;Object.assign(this,r),this.getPath=s??!0?a.getPath??ua:vi}route(a,i){const s=this.basePath(a);return i.routes.map(r=>{var l;let n;i.errorHandler===It?n=r.handler:(n=async(c,o)=>(await Lt([],i.errorHandler)(c,()=>r.handler(c,o))).res,n[Si]=r.handler),E(l=s,T,ie).call(l,r.method,r.path,n)}),this}basePath(a){const i=E(this,T,Sa).call(this);return i._basePath=ue(this._basePath,a),i}mount(a,i,s){let r,n;s&&(typeof s=="function"?n=s:(n=s.optionHandler,s.replaceRequest===!1?r=o=>o:r=s.replaceRequest));const l=n?o=>{const d=n(o);return Array.isArray(d)?d:[d]}:o=>{let d;try{d=o.executionCtx}catch{}return[o.env,d]};r||(r=(()=>{const o=ue(this._basePath,a),d=o==="/"?0:o.length;return m=>{const u=new URL(m.url);return u.pathname=u.pathname.slice(d)||"/",new Request(u,m)}})());const c=async(o,d)=>{const m=await i(r(o.req.raw),...l(o));if(m)return m;await d()};return E(this,T,ie).call(this,P,ue(a,"*"),c),this}},D=new WeakMap,T=new WeakSet,Sa=function(){const a=new xa({router:this.router,getPath:this.getPath});return a.errorHandler=this.errorHandler,N(a,H,h(this,H)),a.routes=this.routes,a},H=new WeakMap,ie=function(a,i,s){a=a.toUpperCase(),i=ue(this._basePath,i);const r={basePath:this._basePath,path:i,method:a,handler:s};this.router.add(a,i,[s,r]),this.routes.push(r)},We=function(a,i){if(a instanceof Error)return this.errorHandler(a,i);throw a},Ve=function(a,i,s,r){if(r==="HEAD")return(async()=>new Response(null,await E(this,T,Ve).call(this,a,i,s,"GET")))();const n=this.getPath(a,{env:s}),l=this.router.match(r,n),c=new Ni(a,{path:n,matchResult:l,env:s,executionCtx:i,notFoundHandler:h(this,H)});if(l[0].length===1){let d;try{d=l[0][0][0][0](c,async()=>{c.res=await h(this,H).call(this,c)})}catch(m){return E(this,T,We).call(this,m,c)}return d instanceof Promise?d.then(m=>m||(c.finalized?c.res:h(this,H).call(this,c))).catch(m=>E(this,T,We).call(this,m,c)):d??h(this,H).call(this,c)}const o=Lt(l[0],this.errorHandler,h(this,H));return(async()=>{try{const d=await o(c);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return E(this,T,We).call(this,d,c)}})()},Xt),ka=[],Ea=Symbol("buildAllMatchers");function Ei(t,a){const i=this[Ea](),s=(r,n)=>{const l=i[r]||i[P],c=l[2][n];if(c)return c;const o=n.match(l[0]);if(!o)return[[],ka];const d=o.indexOf("",1);return[l[1][d],o]};return this.match=s,s(t,a)}var Ze="[^/]+",Ce=".*",Ae="(?:|/.*)",pe=Symbol(),Ci=new Set(".\\+*[^]$()");function Ai(t,a){return t.length===1?a.length===1?t<a?-1:1:-1:a.length===1||t===Ce||t===Ae?1:a===Ce||a===Ae?-1:t===Ze?1:a===Ze?-1:t.length===a.length?t<a?-1:1:a.length-t.length}var ne,le,_,Kt,vt=(Kt=class{constructor(){x(this,ne);x(this,le);x(this,_,Object.create(null))}insert(a,i,s,r,n){if(a.length===0){if(h(this,ne)!==void 0)throw pe;if(n)return;N(this,ne,i);return}const[l,...c]=a,o=l==="*"?c.length===0?["","",Ce]:["","",Ze]:l==="/*"?["","",Ae]:l.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(o){const m=o[1];let u=o[2]||Ze;if(m&&o[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw pe;if(d=h(this,_)[u],!d){if(Object.keys(h(this,_)).some(f=>f!==Ce&&f!==Ae))throw pe;if(n)return;d=h(this,_)[u]=new vt,m!==""&&N(d,le,r.varIndex++)}!n&&m!==""&&s.push([m,h(d,le)])}else if(d=h(this,_)[l],!d){if(Object.keys(h(this,_)).some(m=>m.length>1&&m!==Ce&&m!==Ae))throw pe;if(n)return;d=h(this,_)[l]=new vt}d.insert(c,i,s,r,n)}buildRegExpStr(){const i=Object.keys(h(this,_)).sort(Ai).map(s=>{const r=h(this,_)[s];return(typeof h(r,le)=="number"?`(${s})@${h(r,le)}`:Ci.has(s)?`\\${s}`:s)+r.buildRegExpStr()});return typeof h(this,ne)=="number"&&i.unshift(`#${h(this,ne)}`),i.length===0?"":i.length===1?i[0]:"(?:"+i.join("|")+")"}},ne=new WeakMap,le=new WeakMap,_=new WeakMap,Kt),et,De,Yt,Pi=(Yt=class{constructor(){x(this,et,{varIndex:0});x(this,De,new vt)}insert(t,a,i){const s=[],r=[];for(let l=0;;){let c=!1;if(t=t.replace(/\{[^}]+\}/g,o=>{const d=`@\\${l}`;return r[l]=[d,o],l++,c=!0,d}),!c)break}const n=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let l=r.length-1;l>=0;l--){const[c]=r[l];for(let o=n.length-1;o>=0;o--)if(n[o].indexOf(c)!==-1){n[o]=n[o].replace(c,r[l][1]);break}}return h(this,De).insert(n,a,s,h(this,et),i),s}buildRegExp(){let t=h(this,De).buildRegExpStr();if(t==="")return[/^$/,[],[]];let a=0;const i=[],s=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,n,l)=>n!==void 0?(i[++a]=Number(n),"$()"):(l!==void 0&&(s[Number(l)]=++a),"")),[new RegExp(`^${t}`),i,s]}},et=new WeakMap,De=new WeakMap,Yt),Ti=[/^$/,[],Object.create(null)],Xe=Object.create(null);function Ca(t){return Xe[t]??(Xe[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(a,i)=>i?`\\${i}`:"(?:|/.*)")}$`))}function Ri(){Xe=Object.create(null)}function Oi(t){var d;const a=new Pi,i=[];if(t.length===0)return Ti;const s=t.map(m=>[!/\*|\/:/.test(m[0]),...m]).sort(([m,u],[f,v])=>m?1:f?-1:u.length-v.length),r=Object.create(null);for(let m=0,u=-1,f=s.length;m<f;m++){const[v,b,p]=s[m];v?r[b]=[p.map(([w])=>[w,Object.create(null)]),ka]:u++;let y;try{y=a.insert(b,u,v)}catch(w){throw w===pe?new wa(b):w}v||(i[u]=p.map(([w,S])=>{const C=Object.create(null);for(S-=1;S>=0;S--){const[k,O]=y[S];C[k]=O}return[w,C]}))}const[n,l,c]=a.buildRegExp();for(let m=0,u=i.length;m<u;m++)for(let f=0,v=i[m].length;f<v;f++){const b=(d=i[m][f])==null?void 0:d[1];if(!b)continue;const p=Object.keys(b);for(let y=0,w=p.length;y<w;y++)b[p[y]]=c[b[p[y]]]}const o=[];for(const m in l)o[m]=i[l[m]];return[n,o,r]}function he(t,a){if(t){for(const i of Object.keys(t).sort((s,r)=>r.length-s.length))if(Ca(i).test(a))return[...t[i]]}}var J,Q,tt,Aa,Jt,Mi=(Jt=class{constructor(){x(this,tt);g(this,"name","RegExpRouter");x(this,J);x(this,Q);g(this,"match",Ei);N(this,J,{[P]:Object.create(null)}),N(this,Q,{[P]:Object.create(null)})}add(t,a,i){var c;const s=h(this,J),r=h(this,Q);if(!s||!r)throw new Error(Na);s[t]||[s,r].forEach(o=>{o[t]=Object.create(null),Object.keys(o[P]).forEach(d=>{o[t][d]=[...o[P][d]]})}),a==="/*"&&(a="*");const n=(a.match(/\/:/g)||[]).length;if(/\*$/.test(a)){const o=Ca(a);t===P?Object.keys(s).forEach(d=>{var m;(m=s[d])[a]||(m[a]=he(s[d],a)||he(s[P],a)||[])}):(c=s[t])[a]||(c[a]=he(s[t],a)||he(s[P],a)||[]),Object.keys(s).forEach(d=>{(t===P||t===d)&&Object.keys(s[d]).forEach(m=>{o.test(m)&&s[d][m].push([i,n])})}),Object.keys(r).forEach(d=>{(t===P||t===d)&&Object.keys(r[d]).forEach(m=>o.test(m)&&r[d][m].push([i,n]))});return}const l=fa(a)||[a];for(let o=0,d=l.length;o<d;o++){const m=l[o];Object.keys(r).forEach(u=>{var f;(t===P||t===u)&&((f=r[u])[m]||(f[m]=[...he(s[u],m)||he(s[P],m)||[]]),r[u][m].push([i,n-d+o+1]))})}}[Ea](){const t=Object.create(null);return Object.keys(h(this,Q)).concat(Object.keys(h(this,J))).forEach(a=>{t[a]||(t[a]=E(this,tt,Aa).call(this,a))}),N(this,J,N(this,Q,void 0)),Ri(),t}},J=new WeakMap,Q=new WeakMap,tt=new WeakSet,Aa=function(t){const a=[];let i=t===P;return[h(this,J),h(this,Q)].forEach(s=>{const r=s[t]?Object.keys(s[t]).map(n=>[n,s[t][n]]):[];r.length!==0?(i||(i=!0),a.push(...r)):t!==P&&a.push(...Object.keys(s[P]).map(n=>[n,s[P][n]]))}),i?Oi(a):null},Jt),Z,B,Qt,Li=(Qt=class{constructor(t){g(this,"name","SmartRouter");x(this,Z,[]);x(this,B,[]);N(this,Z,t.routers)}add(t,a,i){if(!h(this,B))throw new Error(Na);h(this,B).push([t,a,i])}match(t,a){if(!h(this,B))throw new Error("Fatal error");const i=h(this,Z),s=h(this,B),r=i.length;let n=0,l;for(;n<r;n++){const c=i[n];try{for(let o=0,d=s.length;o<d;o++)c.add(...s[o]);l=c.match(t,a)}catch(o){if(o instanceof wa)continue;throw o}this.match=c.match.bind(c),N(this,Z,[c]),N(this,B,void 0);break}if(n===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,l}get activeRouter(){if(h(this,B)||h(this,Z).length!==1)throw new Error("No active router has been determined yet.");return h(this,Z)[0]}},Z=new WeakMap,B=new WeakMap,Qt),ke=Object.create(null),ee,M,ce,Ne,R,W,se,Zt,Pa=(Zt=class{constructor(t,a,i){x(this,W);x(this,ee);x(this,M);x(this,ce);x(this,Ne,0);x(this,R,ke);if(N(this,M,i||Object.create(null)),N(this,ee,[]),t&&a){const s=Object.create(null);s[t]={handler:a,possibleKeys:[],score:0},N(this,ee,[s])}N(this,ce,[])}insert(t,a,i){N(this,Ne,++At(this,Ne)._);let s=this;const r=hi(a),n=[];for(let l=0,c=r.length;l<c;l++){const o=r[l],d=r[l+1],m=fi(o,d),u=Array.isArray(m)?m[0]:o;if(u in h(s,M)){s=h(s,M)[u],m&&n.push(m[1]);continue}h(s,M)[u]=new Pa,m&&(h(s,ce).push(m),n.push(m[1])),s=h(s,M)[u]}return h(s,ee).push({[t]:{handler:i,possibleKeys:n.filter((l,c,o)=>o.indexOf(l)===c),score:h(this,Ne)}}),s}search(t,a){var c;const i=[];N(this,R,ke);let r=[this];const n=ma(a),l=[];for(let o=0,d=n.length;o<d;o++){const m=n[o],u=o===d-1,f=[];for(let v=0,b=r.length;v<b;v++){const p=r[v],y=h(p,M)[m];y&&(N(y,R,h(p,R)),u?(h(y,M)["*"]&&i.push(...E(this,W,se).call(this,h(y,M)["*"],t,h(p,R))),i.push(...E(this,W,se).call(this,y,t,h(p,R)))):f.push(y));for(let w=0,S=h(p,ce).length;w<S;w++){const C=h(p,ce)[w],k=h(p,R)===ke?{}:{...h(p,R)};if(C==="*"){const X=h(p,M)["*"];X&&(i.push(...E(this,W,se).call(this,X,t,h(p,R))),N(X,R,k),f.push(X));continue}const[O,de,ae]=C;if(!m&&!(ae instanceof RegExp))continue;const $=h(p,M)[O],Fa=n.slice(o).join("/");if(ae instanceof RegExp){const X=ae.exec(Fa);if(X){if(k[de]=X[0],i.push(...E(this,W,se).call(this,$,t,h(p,R),k)),Object.keys(h($,M)).length){N($,R,k);const at=((c=X[0].match(/\//))==null?void 0:c.length)??0;(l[at]||(l[at]=[])).push($)}continue}}(ae===!0||ae.test(m))&&(k[de]=m,u?(i.push(...E(this,W,se).call(this,$,t,k,h(p,R))),h($,M)["*"]&&i.push(...E(this,W,se).call(this,h($,M)["*"],t,k,h(p,R)))):(N($,R,k),f.push($)))}}r=f.concat(l.shift()??[])}return i.length>1&&i.sort((o,d)=>o.score-d.score),[i.map(({handler:o,params:d})=>[o,d])]}},ee=new WeakMap,M=new WeakMap,ce=new WeakMap,Ne=new WeakMap,R=new WeakMap,W=new WeakSet,se=function(t,a,i,s){const r=[];for(let n=0,l=h(t,ee).length;n<l;n++){const c=h(t,ee)[n],o=c[a]||c[P],d={};if(o!==void 0&&(o.params=Object.create(null),r.push(o),i!==ke||s&&s!==ke))for(let m=0,u=o.possibleKeys.length;m<u;m++){const f=o.possibleKeys[m],v=d[o.score];o.params[f]=s!=null&&s[f]&&!v?s[f]:i[f]??(s==null?void 0:s[f]),d[o.score]=!0}}return r},Zt),oe,ea,ji=(ea=class{constructor(){g(this,"name","TrieRouter");x(this,oe);N(this,oe,new Pa)}add(t,a,i){const s=fa(a);if(s){for(let r=0,n=s.length;r<n;r++)h(this,oe).insert(t,s[r],i);return}h(this,oe).insert(t,a,i)}match(t,a){return h(this,oe).search(t,a)}},oe=new WeakMap,ea),Ta=class extends xa{constructor(t={}){super(t),this.router=t.router??new Li({routers:[new Mi,new ji]})}},Ii=t=>{const i={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},s=(n=>typeof n=="string"?n==="*"?()=>n:l=>n===l?l:null:typeof n=="function"?n:l=>n.includes(l)?l:null)(i.origin),r=(n=>typeof n=="function"?n:Array.isArray(n)?()=>n:()=>[])(i.allowMethods);return async function(l,c){var m;function o(u,f){l.res.headers.set(u,f)}const d=await s(l.req.header("origin")||"",l);if(d&&o("Access-Control-Allow-Origin",d),i.origin!=="*"){const u=l.req.header("Vary");u?o("Vary",u):o("Vary","Origin")}if(i.credentials&&o("Access-Control-Allow-Credentials","true"),(m=i.exposeHeaders)!=null&&m.length&&o("Access-Control-Expose-Headers",i.exposeHeaders.join(",")),l.req.method==="OPTIONS"){i.maxAge!=null&&o("Access-Control-Max-Age",i.maxAge.toString());const u=await r(l.req.header("origin")||"",l);u.length&&o("Access-Control-Allow-Methods",u.join(","));let f=i.allowHeaders;if(!(f!=null&&f.length)){const v=l.req.header("Access-Control-Request-Headers");v&&(f=v.split(/\s*,\s*/))}return f!=null&&f.length&&(o("Access-Control-Allow-Headers",f.join(",")),l.res.headers.append("Vary","Access-Control-Request-Headers")),l.res.headers.delete("Content-Length"),l.res.headers.delete("Content-Type"),new Response(null,{headers:l.res.headers,status:204,statusText:"No Content"})}await c()}},Di=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Dt=(t,a=_i)=>{const i=/\.([a-zA-Z0-9]+?)$/,s=t.match(i);if(!s)return;let r=a[s[1]];return r&&r.startsWith("text")&&(r+="; charset=utf-8"),r},Hi={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},_i=Hi,qi=(...t)=>{let a=t.filter(r=>r!=="").join("/");a=a.replace(new RegExp("(?<=\\/)\\/+","g"),"");const i=a.split("/"),s=[];for(const r of i)r===".."&&s.length>0&&s.at(-1)!==".."?s.pop():r!=="."&&s.push(r);return s.join("/")||"."},Ra={br:".br",zstd:".zst",gzip:".gz"},Fi=Object.keys(Ra),$i="index.html",zi=t=>{const a=t.root??"./",i=t.path,s=t.join??qi;return async(r,n)=>{var m,u,f,v;if(r.finalized)return n();let l;if(t.path)l=t.path;else try{if(l=decodeURIComponent(r.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(l))throw new Error}catch{return await((m=t.onNotFound)==null?void 0:m.call(t,r.req.path,r)),n()}let c=s(a,!i&&t.rewriteRequestPath?t.rewriteRequestPath(l):l);t.isDir&&await t.isDir(c)&&(c=s(c,$i));const o=t.getContent;let d=await o(c,r);if(d instanceof Response)return r.newResponse(d.body,d);if(d){const b=t.mimes&&Dt(c,t.mimes)||Dt(c);if(r.header("Content-Type",b||"application/octet-stream"),t.precompressed&&(!b||Di.test(b))){const p=new Set((u=r.req.header("Accept-Encoding"))==null?void 0:u.split(",").map(y=>y.trim()));for(const y of Fi){if(!p.has(y))continue;const w=await o(c+Ra[y],r);if(w){d=w,r.header("Content-Encoding",y),r.header("Vary","Accept-Encoding",{append:!0});break}}}return await((f=t.onFound)==null?void 0:f.call(t,c,r)),r.body(d)}await((v=t.onNotFound)==null?void 0:v.call(t,c,r)),await n()}},Ui=async(t,a)=>{let i;a&&a.manifest?typeof a.manifest=="string"?i=JSON.parse(a.manifest):i=a.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?i=JSON.parse(__STATIC_CONTENT_MANIFEST):i=__STATIC_CONTENT_MANIFEST;let s;a&&a.namespace?s=a.namespace:s=__STATIC_CONTENT;const r=i[t]||t;if(!r)return null;const n=await s.get(r,{type:"stream"});return n||null},Gi=t=>async function(i,s){return zi({...t,getContent:async n=>Ui(n,{manifest:t.manifest,namespace:t.namespace?t.namespace:i.env?i.env.__STATIC_CONTENT:void 0})})(i,s)},Bi=t=>Gi(t),Te="_hp",Wi={Change:"Input",DoubleClick:"DblClick"},Vi={svg:"2000/svg",math:"1998/Math/MathML"},Re=[],gt=new WeakMap,xe=void 0,Xi=()=>xe,z=t=>"t"in t,ct={onClick:["click",!1]},Ht=t=>{if(!t.startsWith("on"))return;if(ct[t])return ct[t];const a=t.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(a){const[,i,s]=a;return ct[t]=[(Wi[i]||i).toLowerCase(),!!s]}},_t=(t,a)=>xe&&t instanceof SVGElement&&/[A-Z]/.test(a)&&(a in t.style||a.match(/^(?:o|pai|str|u|ve)/))?a.replace(/([A-Z])/g,"-$1").toLowerCase():a,Ki=(t,a,i)=>{var s;a||(a={});for(let r in a){const n=a[r];if(r!=="children"&&(!i||i[r]!==n)){r=Qe(r);const l=Ht(r);if(l){if((i==null?void 0:i[r])!==n&&(i&&t.removeEventListener(l[0],i[r],l[1]),n!=null)){if(typeof n!="function")throw new Error(`Event handler for "${r}" is not a function`);t.addEventListener(l[0],n,l[1])}}else if(r==="dangerouslySetInnerHTML"&&n)t.innerHTML=n.__html;else if(r==="ref"){let c;typeof n=="function"?c=n(t)||(()=>n(null)):n&&"current"in n&&(n.current=t,c=()=>n.current=null),gt.set(t,c)}else if(r==="style"){const c=t.style;typeof n=="string"?c.cssText=n:(c.cssText="",n!=null&&da(n,c.setProperty.bind(c)))}else{if(r==="value"){const o=t.nodeName;if(o==="INPUT"||o==="TEXTAREA"||o==="SELECT"){if(t.value=n==null||n===!1?null:n,o==="TEXTAREA"){t.textContent=n;continue}else if(o==="SELECT"){t.selectedIndex===-1&&(t.selectedIndex=0);continue}}}else(r==="checked"&&t.nodeName==="INPUT"||r==="selected"&&t.nodeName==="OPTION")&&(t[r]=n);const c=_t(t,r);n==null||n===!1?t.removeAttribute(c):n===!0?t.setAttribute(c,""):typeof n=="string"||typeof n=="number"?t.setAttribute(c,n):t.setAttribute(c,n.toString())}}}if(i)for(let r in i){const n=i[r];if(r!=="children"&&!(r in a)){r=Qe(r);const l=Ht(r);l?t.removeEventListener(l[0],n,l[1]):r==="ref"?(s=gt.get(t))==null||s():t.removeAttribute(_t(t,r))}}},Yi=(t,a)=>{a[A][0]=0,Re.push([t,a]);const i=a.tag[bt]||a.tag,s=i.defaultProps?{...i.defaultProps,...a.props}:a.props;try{return[i.call(null,s)]}finally{Re.pop()}},Oa=(t,a,i,s,r)=>{var n,l;(n=t.vR)!=null&&n.length&&(s.push(...t.vR),delete t.vR),typeof t.tag=="function"&&((l=t[A][1][Ia])==null||l.forEach(c=>r.push(c))),t.vC.forEach(c=>{var o;if(z(c))i.push(c);else if(typeof c.tag=="function"||c.tag===""){c.c=a;const d=i.length;if(Oa(c,a,i,s,r),c.s){for(let m=d;m<i.length;m++)i[m].s=!0;c.s=!1}}else i.push(c),(o=c.vR)!=null&&o.length&&(s.push(...c.vR),delete c.vR)})},Ji=t=>{for(;;t=t.tag===Te||!t.vC||!t.pP?t.nN:t.vC[0]){if(!t)return null;if(t.tag!==Te&&t.e)return t.e}},Ma=t=>{var a,i,s,r,n,l;z(t)||((i=(a=t[A])==null?void 0:a[1][Ia])==null||i.forEach(c=>{var o;return(o=c[2])==null?void 0:o.call(c)}),(s=gt.get(t.e))==null||s(),t.p===2&&((r=t.vC)==null||r.forEach(c=>c.p=2)),(n=t.vC)==null||n.forEach(Ma)),t.p||((l=t.e)==null||l.remove(),delete t.e),typeof t.tag=="function"&&(Ee.delete(t),Ke.delete(t),delete t[A][3],t.a=!0)},La=(t,a,i)=>{t.c=a,ja(t,a,i)},qt=(t,a)=>{if(a){for(let i=0,s=t.length;i<s;i++)if(t[i]===a)return i}},Ft=Symbol(),ja=(t,a,i)=>{var d;const s=[],r=[],n=[];Oa(t,a,s,r,n),r.forEach(Ma);const l=i?void 0:a.childNodes;let c,o=null;if(i)c=-1;else if(!l.length)c=0;else{const m=qt(l,Ji(t.nN));m!==void 0?(o=l[m],c=m):c=qt(l,(d=s.find(u=>u.tag!==Te&&u.e))==null?void 0:d.e)??-1,c===-1&&(i=!0)}for(let m=0,u=s.length;m<u;m++,c++){const f=s[m];let v;if(f.s&&f.e)v=f.e,f.s=!1;else{const b=i||!f.e;z(f)?(f.e&&f.d&&(f.e.textContent=f.t),f.d=!1,v=f.e||(f.e=document.createTextNode(f.t))):(v=f.e||(f.e=f.n?document.createElementNS(f.n,f.tag):document.createElement(f.tag)),Ki(v,f.props,f.pP),ja(f,v,b))}f.tag===Te?c--:i?v.parentNode||a.appendChild(v):l[c]!==v&&l[c-1]!==v&&(l[c+1]===v?a.appendChild(l[c]):a.insertBefore(v,o||l[c]||null))}if(t.pP&&delete t.pP,n.length){const m=[],u=[];n.forEach(([,f,,v,b])=>{f&&m.push(f),v&&u.push(v),b==null||b()}),m.forEach(f=>f()),u.length&&requestAnimationFrame(()=>{u.forEach(f=>f())})}},Qi=(t,a)=>!!(t&&t.length===a.length&&t.every((i,s)=>i[1]===a[s][1])),Ke=new WeakMap,yt=(t,a,i)=>{var n,l,c,o,d,m;const s=!i&&a.pC;i&&(a.pC||(a.pC=a.vC));let r;try{i||(i=typeof a.tag=="function"?Yi(t,a):He(a.props.children)),((n=i[0])==null?void 0:n.tag)===""&&i[0][ut]&&(r=i[0][ut],t[5].push([t,r,a]));const u=s?[...a.pC]:a.vC?[...a.vC]:void 0,f=[];let v;for(let b=0;b<i.length;b++){Array.isArray(i[b])&&i.splice(b,1,...i[b].flat());let p=Zi(i[b]);if(p){typeof p.tag=="function"&&!p.tag[ra]&&(we.length>0&&(p[A][2]=we.map(w=>[w,w.values.at(-1)])),(l=t[5])!=null&&l.length&&(p[A][3]=t[5].at(-1)));let y;if(u&&u.length){const w=u.findIndex(z(p)?S=>z(S):p.key!==void 0?S=>S.key===p.key&&S.tag===p.tag:S=>S.tag===p.tag);w!==-1&&(y=u[w],u.splice(w,1))}if(y)if(z(p))y.t!==p.t&&(y.t=p.t,y.d=!0),p=y;else{const w=y.pP=y.props;if(y.props=p.props,y.f||(y.f=p.f||a.f),typeof p.tag=="function"){const S=y[A][2];y[A][2]=p[A][2]||[],y[A][3]=p[A][3],!y.f&&((y.o||y)===p.o||(o=(c=y.tag)[Ba])!=null&&o.call(c,w,y.props))&&Qi(S,y[A][2])&&(y.s=!0)}p=y}else if(!z(p)&&xe){const w=Se(xe);w&&(p.n=w)}if(!z(p)&&!p.s&&(yt(t,p),delete p.f),f.push(p),v&&!v.s&&!p.s)for(let w=v;w&&!z(w);w=(d=w.vC)==null?void 0:d.at(-1))w.nN=p;v=p}}a.vR=s?[...a.vC,...u||[]]:u||[],a.vC=f,s&&delete a.pC}catch(u){if(a.f=!0,u===Ft){if(r)return;throw u}const[f,v,b]=((m=a[A])==null?void 0:m[3])||[];if(v){const p=()=>Ye([0,!1,t[2]],b),y=Ke.get(b)||[];y.push(p),Ke.set(b,y);const w=v(u,()=>{const S=Ke.get(b);if(S){const C=S.indexOf(p);if(C!==-1)return S.splice(C,1),p()}});if(w){if(t[0]===1)t[1]=!0;else if(yt(t,b,[w]),(v.length===1||t!==f)&&b.c){La(b,b.c,!1);return}throw Ft}}throw u}finally{r&&t[5].pop()}},Zi=t=>{if(!(t==null||typeof t=="boolean")){if(typeof t=="string"||typeof t=="number")return{t:t.toString(),d:!0};if("vR"in t&&(t={tag:t.tag,props:t.props,key:t.key,f:t.f,type:t.tag,ref:t.props.ref,o:t.o||t}),typeof t.tag=="function")t[A]=[0,[]];else{const a=Vi[t.tag];a&&(xe||(xe=la("")),t.props.children=[{tag:xe,props:{value:t.n=`http://www.w3.org/${a}`,children:t.props.children}}])}return t}},$t=(t,a)=>{var i,s;(i=a[A][2])==null||i.forEach(([r,n])=>{r.values.push(n)});try{yt(t,a,void 0)}catch{return}if(a.a){delete a.a;return}(s=a[A][2])==null||s.forEach(([r])=>{r.values.pop()}),(t[0]!==1||!t[1])&&La(a,a.c,!1)},Ee=new WeakMap,zt=[],Ye=async(t,a)=>{t[5]||(t[5]=[]);const i=Ee.get(a);i&&i[0](void 0);let s;const r=new Promise(n=>s=n);if(Ee.set(a,[s,()=>{t[2]?t[2](t,a,n=>{$t(n,a)}).then(()=>s(a)):($t(t,a),s(a))}]),zt.length)zt.at(-1).add(a);else{await Promise.resolve();const n=Ee.get(a);n&&(Ee.delete(a),n[1]())}return r},es=(t,a,i)=>({tag:Te,props:{children:t},key:i,e:a,p:1}),ot=0,Ia=1,dt=2,ht=3,mt=new WeakMap,Da=(t,a)=>!t||!a||t.length!==a.length||a.some((i,s)=>i!==t[s]),ts=void 0,Ut=[],as=t=>{var l;const a=()=>typeof t=="function"?t():t,i=Re.at(-1);if(!i)return[a(),()=>{}];const[,s]=i,r=(l=s[A][1])[ot]||(l[ot]=[]),n=s[A][0]++;return r[n]||(r[n]=[a(),c=>{const o=ts,d=r[n];if(typeof c=="function"&&(c=c(d[0])),!Object.is(c,d[0]))if(d[0]=c,Ut.length){const[m,u]=Ut.at(-1);Promise.all([m===3?s:Ye([m,!1,o],s),u]).then(([f])=>{if(!f||!(m===2||m===3))return;const v=f.vC;requestAnimationFrame(()=>{setTimeout(()=>{v===f.vC&&Ye([m===3?1:0,!1,o],f)})})})}else Ye([0,!1,o],s)}])},kt=(t,a)=>{var c;const i=Re.at(-1);if(!i)return t;const[,s]=i,r=(c=s[A][1])[dt]||(c[dt]=[]),n=s[A][0]++,l=r[n];return Da(l==null?void 0:l[1],a)?r[n]=[t,a]:t=r[n][0],t},is=t=>{const a=mt.get(t);if(a){if(a.length===2)throw a[1];return a[0]}throw t.then(i=>mt.set(t,[i]),i=>mt.set(t,[void 0,i])),t},ss=(t,a)=>{var c;const i=Re.at(-1);if(!i)return t();const[,s]=i,r=(c=s[A][1])[ht]||(c[ht]=[]),n=s[A][0]++,l=r[n];return Da(l==null?void 0:l[1],a)&&(r[n]=[t(),a]),r[n][0]},rs=la({pending:!1,data:null,method:null,action:null}),Gt=new Set,ns=t=>{Gt.add(t),t.finally(()=>Gt.delete(t))},Et=(t,a)=>ss(()=>i=>{let s;t&&(typeof t=="function"?s=t(i)||(()=>{t(null)}):t&&"current"in t&&(t.current=i,s=()=>{t.current=null}));const r=a(i);return()=>{r==null||r(),s==null||s()}},[t]),me=Object.create(null),ze=Object.create(null),Fe=(t,a,i,s,r)=>{if(a!=null&&a.itemProp)return{tag:t,props:a,type:t,ref:a.ref};const n=document.head;let{onLoad:l,onError:c,precedence:o,blocking:d,...m}=a,u=null,f=!1;const v=Ue[t];let b;if(v.length>0){const S=n.querySelectorAll(t);e:for(const C of S)for(const k of Ue[t])if(C.getAttribute(k)===a[k]){u=C;break e}if(!u){const C=v.reduce((k,O)=>a[O]===void 0?k:`${k}-${O}-${a[O]}`,t);f=!ze[C],u=ze[C]||(ze[C]=(()=>{const k=document.createElement(t);for(const O of v)a[O]!==void 0&&k.setAttribute(O,a[O]),a.rel&&k.setAttribute("rel",a.rel);return k})())}}else b=n.querySelectorAll(t);o=s?o??"":void 0,s&&(m[Ge]=o);const p=kt(S=>{if(v.length>0){let C=!1;for(const k of n.querySelectorAll(t)){if(C&&k.getAttribute(Ge)!==o){n.insertBefore(S,k);return}k.getAttribute(Ge)===o&&(C=!0)}n.appendChild(S)}else if(b){let C=!1;for(const k of b)if(k===S){C=!0;break}C||n.insertBefore(S,n.contains(b[0])?b[0]:n.querySelector(t)),b=void 0}},[o]),y=Et(a.ref,S=>{var O;const C=v[0];if(i===2&&(S.innerHTML=""),(f||b)&&p(S),!c&&!l)return;let k=me[O=S.getAttribute(C)]||(me[O]=new Promise((de,ae)=>{S.addEventListener("load",de),S.addEventListener("error",ae)}));l&&(k=k.then(l)),c&&(k=k.catch(c)),k.catch(()=>{})});if(r&&d==="render"){const S=Ue[t][0];if(a[S]){const C=a[S],k=me[C]||(me[C]=new Promise((O,de)=>{p(u),u.addEventListener("load",O),u.addEventListener("error",de)}));is(k)}}const w={tag:t,type:t,props:{...m,ref:y},ref:y};return w.p=i,u&&(w.e=u),es(w,n)},ls=t=>{const a=Xi(),i=a&&Se(a);return i!=null&&i.endsWith("svg")?{tag:"title",props:t,type:"title",ref:t.ref}:Fe("title",t,void 0,!1,!1)},cs=t=>!t||["src","async"].some(a=>!t[a])?{tag:"script",props:t,type:"script",ref:t.ref}:Fe("script",t,1,!1,!0),os=t=>!t||!["href","precedence"].every(a=>a in t)?{tag:"style",props:t,type:"style",ref:t.ref}:(t["data-href"]=t.href,delete t.href,Fe("style",t,2,!0,!0)),ds=t=>!t||["onLoad","onError"].some(a=>a in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?{tag:"link",props:t,type:"link",ref:t.ref}:Fe("link",t,1,"precedence"in t,!0),hs=t=>Fe("meta",t,void 0,!1,!1),Ha=Symbol(),ms=t=>{const{action:a,...i}=t;typeof a!="function"&&(i.action=a);const[s,r]=as([null,!1]),n=kt(async d=>{const m=d.isTrusted?a:d.detail[Ha];if(typeof m!="function")return;d.preventDefault();const u=new FormData(d.target);r([u,!0]);const f=m(u);f instanceof Promise&&(ns(f),await f),r([null,!0])},[]),l=Et(t.ref,d=>(d.addEventListener("submit",n),()=>{d.removeEventListener("submit",n)})),[c,o]=s;return s[1]=!1,{tag:rs,props:{value:{pending:c!==null,data:c,method:c?"post":null,action:c?a:null},children:{tag:"form",props:{...i,ref:l},type:"form",ref:l}},f:o}},_a=(t,{formAction:a,...i})=>{if(typeof a=="function"){const s=kt(r=>{r.preventDefault(),r.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Ha]:a}}))},[]);i.ref=Et(i.ref,r=>(r.addEventListener("click",s),()=>{r.removeEventListener("click",s)}))}return{tag:t,props:i,type:t,ref:i.ref}},us=t=>_a("input",t),fs=t=>_a("button",t);Object.assign(ft,{title:ls,script:cs,style:os,link:ds,meta:hs,form:ms,input:us,button:fs});Nt(null);new TextEncoder;var ps=Nt(null),vs=(t,a,i,s)=>(r,n)=>{const l="<!DOCTYPE html>",c=i?Ot(d=>i(d,t),{Layout:a,...n},r):r,o=Ga`${I(l)}${Ot(ps.Provider,{value:t},c)}`;return t.html(o)},gs=(t,a)=>function(s,r){const n=s.getLayout()??si;return t&&s.setLayout(l=>t({...l,Layout:n},s)),s.setRenderer(vs(s,n,t)),r()};const ys=gs(({children:t})=>e("html",{lang:"en",children:[e("head",{children:[e("meta",{charSet:"UTF-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}),e("meta",{name:"format-detection",content:"telephone=no"}),e("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),e("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),e("meta",{name:"mobile-web-app-capable",content:"yes"}),e("link",{rel:"dns-prefetch",href:"//fonts.googleapis.com"}),e("link",{rel:"dns-prefetch",href:"//fonts.gstatic.com"}),e("link",{rel:"dns-prefetch",href:"//cdnjs.cloudflare.com"}),e("link",{rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"anonymous"}),e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),e("link",{rel:"preload",href:"/static/style.css",as:"style"}),e("link",{rel:"preload",href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",as:"style"}),e("title",{children:"SCHOLARIX - Study Abroad Consultants | Visa, Admission & IELTS"}),e("meta",{name:"description",content:"Expert study abroad guidance for students. Get support for study visas, university admissions, scholarships, and IELTS/PTE preparation. 99% visa success rate. Book free consultation today!"}),e("meta",{name:"keywords",content:"study abroad, student visa, university admission, scholarships, IELTS, PTE, career counselling, international education, Germany study visa, Canada student visa, UK admission, Ireland universities"}),e("meta",{name:"author",content:"SCHOLARIX Study Abroad Consultants"}),e("meta",{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}),e("meta",{name:"language",content:"en"}),e("meta",{name:"revisit-after",content:"7 days"}),e("meta",{name:"distribution",content:"global"}),e("meta",{name:"rating",content:"general"}),e("meta",{name:"geo.region",content:"AE-DU"}),e("meta",{name:"geo.placename",content:"Dubai"}),e("meta",{name:"geo.position",content:"25.2048;55.2708"}),e("meta",{name:"ICBM",content:"25.2048, 55.2708"}),e("meta",{property:"og:title",content:"SCHOLARIX - Study Abroad Consultants | 99% Visa Success Rate"}),e("meta",{property:"og:description",content:"Expert study abroad guidance with 99% visa success rate. Get support for visas, admissions, scholarships & test prep. Serving students from Dubai, UAE since 2023."}),e("meta",{property:"og:type",content:"website"}),e("meta",{property:"og:url",content:"https://scholarixstudy.com"}),e("meta",{property:"og:site_name",content:"SCHOLARIX Study Abroad"}),e("meta",{property:"og:image",content:"https://scholarixstudy.com/static/images/og-image.jpg"}),e("meta",{property:"og:image:width",content:"1200"}),e("meta",{property:"og:image:height",content:"630"}),e("meta",{property:"og:image:alt",content:"SCHOLARIX Study Abroad Consultants - Your trusted partner for international education"}),e("meta",{property:"og:locale",content:"en_US"}),e("meta",{property:"business:contact_data:street_address",content:"Dubai, UAE"}),e("meta",{property:"business:contact_data:locality",content:"Dubai"}),e("meta",{property:"business:contact_data:region",content:"UAE"}),e("meta",{property:"business:contact_data:postal_code",content:"00000"}),e("meta",{property:"business:contact_data:country_name",content:"United Arab Emirates"}),e("meta",{name:"twitter:card",content:"summary_large_image"}),e("meta",{name:"twitter:site",content:"@scholarixstudy"}),e("meta",{name:"twitter:creator",content:"@scholarixstudy"}),e("meta",{name:"twitter:title",content:"SCHOLARIX - Study Abroad Consultants | 99% Visa Success"}),e("meta",{name:"twitter:description",content:"Expert study abroad guidance with 99% visa success rate. Specialized in European destinations from UAE."}),e("meta",{name:"twitter:image",content:"https://scholarixstudy.com/static/images/og-image.jpg"}),e("meta",{name:"twitter:image:alt",content:"SCHOLARIX Study Abroad Consultants"}),e("meta",{name:"theme-color",content:"#1e3a8a"}),e("meta",{name:"msapplication-TileColor",content:"#1e3a8a"}),e("meta",{name:"msapplication-config",content:"/static/browserconfig.xml"}),e("link",{rel:"canonical",href:"https://scholarixstudy.com"}),e("link",{rel:"alternate",hrefLang:"en",href:"https://scholarixstudy.com"}),e("link",{rel:"alternate",hrefLang:"x-default",href:"https://scholarixstudy.com"}),e("meta",{httpEquiv:"Content-Security-Policy",content:"default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jotfor.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https: blob:; connect-src 'self' https: wss:; frame-src 'self' https://www.google.com https://jotform.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io; upgrade-insecure-requests;"}),e("meta",{httpEquiv:"X-Content-Type-Options",content:"nosniff"}),e("meta",{httpEquiv:"X-Frame-Options",content:"SAMEORIGIN"}),e("meta",{httpEquiv:"X-XSS-Protection",content:"1; mode=block"}),e("meta",{httpEquiv:"Referrer-Policy",content:"strict-origin-when-cross-origin"}),e("meta",{httpEquiv:"Permissions-Policy",content:"camera=(), microphone=(), geolocation=(self), payment=()"}),e("meta",{httpEquiv:"Cross-Origin-Embedder-Policy",content:"unsafe-none"}),e("meta",{httpEquiv:"Cross-Origin-Opener-Policy",content:"same-origin-allow-popups"}),e("meta",{httpEquiv:"Cross-Origin-Resource-Policy",content:"cross-origin"}),e("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"mask-icon",href:"/static/images/scholarix-logo-icon-hd.png",color:"#1e3a8a"}),e("link",{rel:"shortcut icon",href:"/static/images/scholarix-logo-icon-hd.png"}),e("meta",{name:"msapplication-TileImage",content:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"manifest",href:"/static/manifest.json"}),e("meta",{name:"application-name",content:"SCHOLARIX Study Abroad"}),e("meta",{name:"apple-mobile-web-app-title",content:"SCHOLARIX"}),e("style",{dangerouslySetInnerHTML:{__html:`
            :root {
              --primary-color: #1e3a8a;
              --secondary-color: #3b82f6;
              --accent-color: #f59e0b;
              --neutral-light: #f1f5f9;
              --neutral-medium: #64748b;
              --neutral-dark: #1f2937;
            }
            
            * {
              box-sizing: border-box;
            }
            
            html {
              scroll-behavior: smooth;
              overflow-x: hidden;
              width: 100%;
              height: 100%;
            }
            
            body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
              line-height: 1.6;
              color: #1f2937;
              font-size: 16px;
              width: 100%;
              min-height: 100vh;
              overflow-x: hidden;
              position: relative;
              -webkit-text-size-adjust: 100%;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              -webkit-overflow-scrolling: touch;
              zoom: 1;
            }
            
            /* Prevent zoom on iOS */
            input, select, textarea, button {
              font-size: 16px !important;
              -webkit-appearance: none;
              border-radius: 0;
            }
            
            .header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1000;
              background: rgba(255, 255, 255, 0.95);
              backdrop-filter: blur(10px);
              padding: 0.5rem 0;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .header-container {
              padding: 0 1rem;
              max-width: 1200px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            
            .logo img {
              height: 40px;
              width: auto;
              max-width: 150px;
            }
            
            @media (min-width: 768px) {
              .logo img { height: 50px; }
              .header { padding: 0.75rem 0; }
              .header-container { padding: 0 2rem; }
            }
            
            @media (min-width: 1024px) {
              .logo img { height: 60px; }
            }
            
            .hero {
              min-height: 100vh;
              display: flex;
              align-items: center;
              background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
              color: white;
              padding: 6rem 1rem 3rem;
              text-align: center;
            }
            
            .hero-content h1 {
              font-size: 2rem;
              line-height: 1.2;
              margin-bottom: 1rem;
              font-weight: 700;
            }
            
            @media (min-width: 768px) {
              .hero {
                padding: 6rem 2rem 3rem;
                text-align: left;
              }
              .hero-content h1 { font-size: 3rem; }
            }
            
            @media (min-width: 1024px) {
              .hero { padding: 8rem 2rem 4rem; }
              .hero-content h1 { font-size: 3.5rem; }
            }
            
            .btn-primary {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0.875rem 2rem;
              background-color: var(--accent-color);
              color: white;
              text-decoration: none;
              border-radius: 0.5rem;
              font-weight: 600;
              min-height: 48px;
              min-width: 48px;
              transition: all 0.2s ease;
              border: none;
              cursor: pointer;
              font-size: 1rem;
            }
            
            .btn-primary:hover {
              background-color: #e08e0b;
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
            }
            
            .btn-primary:focus {
              outline: 3px solid rgba(245, 158, 11, 0.5);
              outline-offset: 2px;
            }
            
            /* Enhanced Interactive Form Styles */
            .form-group {
              position: relative;
              margin-bottom: 1.5rem;
            }
            
            .form-input, .form-select, .form-textarea {
              width: 100%;
              padding: 1rem 1rem 1rem 3rem;
              border: 2px solid #e5e7eb;
              border-radius: 0.75rem;
              font-size: 16px;
              min-height: 56px;
              font-family: inherit;
              background: #fafbfc;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
              z-index: 2;
            }
            
            .form-input:focus, .form-select:focus, .form-textarea:focus {
              outline: none;
              border-color: var(--secondary-color);
              background: #ffffff;
              box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 25px rgba(59, 130, 246, 0.15);
              transform: translateY(-2px);
            }
            
            .form-input:valid, .form-select:valid, .form-textarea:valid {
              border-color: #10b981;
              background: #f0fdf4;
            }
            
            .form-input:invalid:not(:placeholder-shown) {
              border-color: #ef4444;
              background: #fef2f2;
            }
            
            .form-label {
              position: absolute;
              left: 3rem;
              top: 50%;
              transform: translateY(-50%);
              font-size: 16px;
              color: #6b7280;
              transition: all 0.3s ease;
              pointer-events: none;
              z-index: 1;
            }
            
            .form-input:focus + .form-label,
            .form-input:not(:placeholder-shown) + .form-label {
              top: -0.5rem;
              left: 1rem;
              font-size: 12px;
              color: var(--secondary-color);
              background: white;
              padding: 0 0.5rem;
            }
            
            .form-icon {
              position: absolute;
              left: 1rem;
              top: 50%;
              transform: translateY(-50%);
              color: #9ca3af;
              font-size: 1.125rem;
              z-index: 3;
              transition: color 0.3s ease;
            }
            
            .form-group:focus-within .form-icon {
              color: var(--secondary-color);
            }
            
            .form-validation {
              position: absolute;
              right: 1rem;
              top: 50%;
              transform: translateY(-50%);
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .form-input:valid + .form-label + .form-validation .success-icon {
              opacity: 1;
              color: #10b981;
            }
            
            .form-input:invalid:not(:placeholder-shown) + .form-label + .form-validation .error-icon {
              opacity: 1;
              color: #ef4444;
            }
            
            .form-help-text {
              font-size: 0.875rem;
              color: #6b7280;
              margin-top: 0.5rem;
              padding-left: 3rem;
              transition: color 0.3s ease;
            }
            
            .form-group:focus-within .form-help-text {
              color: var(--secondary-color);
            }
            
            /* Touch targets (WCAG 2.2 AA) */
            a, button, input, select, textarea {
              min-height: 44px;
              min-width: 44px;
            }
            
            /* Focus indicators */
            a:focus, button:focus, input:focus, select:focus, textarea:focus {
              outline: 3px solid var(--secondary-color);
              outline-offset: 2px;
            }
            
            /* Enhanced Form Animations */
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-5px); }
              75% { transform: translateX(5px); }
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
            }
            
            .slide-in-right {
              animation: slideInRight 0.3s ease-out;
            }
            
            .slide-in-left {
              animation: slideInLeft 0.3s ease-out;
            }
            
            .form-step {
              transition: all 0.3s ease;
            }
            
            .field-error {
              color: #ef4444;
              font-size: 0.875rem;
              margin-top: 0.25rem;
              padding-left: 3rem;
              animation: slideInRight 0.3s ease-out;
            }
            
            .form-input.error, .form-select.error, .form-textarea.error {
              border-color: #ef4444 !important;
              background: #fef2f2 !important;
              box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
            }
            
            /* Enhanced Progress Indicators */
            .step-indicator {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 2rem;
            }
            
            .step {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: #e5e7eb;
              color: #6b7280;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 600;
              transition: all 0.3s ease;
              position: relative;
            }
            
            .step.active {
              background: var(--secondary-color);
              color: white;
              transform: scale(1.1);
              box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
            }
            
            .step.completed {
              background: #10b981;
              color: white;
            }
            
            .step.completed::after {
              content: '✓';
              position: absolute;
            }
            
            .progress-line {
              height: 2px;
              background: #e5e7eb;
              flex: 1;
              margin: 0 0.5rem;
              position: relative;
              overflow: hidden;
            }
            
            .progress-fill {
              height: 100%;
              background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
              transition: width 0.5s ease;
              position: relative;
            }
            
            .progress-fill::after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
              animation: shimmer 2s infinite;
            }
            
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            
            /* Responsive Enhancements */
            @media (max-width: 768px) {
              .form-input, .form-select, .form-textarea {
                padding: 0.875rem 0.875rem 0.875rem 2.5rem;
                font-size: 16px;
              }
              
              .form-label {
                left: 2.5rem;
                font-size: 15px;
              }
              
              .form-icon {
                left: 0.75rem;
                font-size: 1rem;
              }
              
              .form-help-text {
                padding-left: 2.5rem;
                font-size: 0.8rem;
              }
              
              .step {
                width: 28px;
                height: 28px;
                font-size: 0.875rem;
              }
            }
            
            /* Globe Container Responsive */
            .interactive-globe {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 400px;
              max-height: 600px;
            }
            
            @media (max-width: 768px) {
              .interactive-globe {
                min-height: 300px;
                max-height: 400px;
              }
            }
            
            /* Prevent zoom on mobile forms */
            @media screen and (max-width: 768px) {
              input[type="text"],
              input[type="email"],
              input[type="tel"],
              input[type="password"],
              select,
              textarea {
                font-size: 16px !important;
                transform: scale(1);
              }
            }
            
            /* Full viewport lock */
            .viewport-lock {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              overflow: hidden;
            }
            
            /* Reduced motion support */
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
          `}}),e("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"}),e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),e("link",{href:"/static/style.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-styles.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-forms.css",rel:"stylesheet"}),e("link",{href:"/static/interactive-planner.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-loader-3d.css",rel:"stylesheet"}),e("link",{href:"/static/course-finder.css",rel:"stylesheet"}),e("link",{href:"/static/mobile-contact-form-production.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-pwa.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-globe-contrast.css",rel:"stylesheet"}),e("link",{href:"/static/working-globe-styles.css",rel:"stylesheet"}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",defer:!0}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",defer:!0}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",defer:!0}),e("script",{src:"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",defer:!0}),e("script",{src:"https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"}),e("script",{children:`
          // Ensure text is always visible
          document.addEventListener('DOMContentLoaded', function() {
            console.log('🎬 Ensuring text visibility...');
            
            const element = document.getElementById('typewriter-text');
            if (element) {
              // Force visibility styles
              element.style.display = 'inline-block';
              element.style.visibility = 'visible';
              element.style.opacity = '1';
              element.style.color = '#1e3a8a';
              element.style.fontWeight = '700';
              element.style.background = 'none';
              
              // Ensure text content is always there
              if (!element.innerHTML || element.innerHTML.trim() === '') {
                element.innerHTML = 'Your Dream <span class="text-accent">Study Abroad</span> Journey Starts Here';
              }
              
              console.log('✅ Text visibility ensured:', element.innerHTML);
              
              // Add simple fade-in animation
              element.style.animation = 'fadeInUp 1s ease-out';
              
              // Optional: Add subtle text glow animation
              setTimeout(function() {
                element.classList.add('hero-text-glow');
              }, 500);
            } else {
              console.error('❌ Typewriter element not found');
            }
          });
          `}),e("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"EducationalOrganization",name:"SCHOLARIX Study Abroad Consultants",description:"Expert study abroad guidance for students seeking international education opportunities",url:"https://scholarixstudy.com",telephone:"+971525438784",email:"info@scholarixstudy.com",address:{"@type":"PostalAddress",addressCountry:"UAE"},serviceArea:"Worldwide",offers:{"@type":"Service",name:"Study Abroad Consulting",description:"Comprehensive study abroad services including visa support, university admissions, scholarships, and test preparation"}})})]}),e("body",{children:[e("div",{id:"floating-3d-elements"}),e("header",{className:"header",children:e("nav",{className:"navbar",children:e("div",{className:"nav-container",children:[e("div",{className:"nav-brand",children:e("a",{href:"/",className:"logo-link",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX Study Abroad",className:"logo"})})}),e("div",{className:"nav-menu",id:"navMenu",children:[e("a",{href:"/",className:"nav-link",children:"Home"}),e("div",{className:"nav-dropdown",children:[e("a",{href:"#",className:"nav-link dropdown-toggle",children:["Services ",e("i",{className:"fas fa-chevron-down"})]}),e("div",{className:"dropdown-content",children:[e("a",{href:"/services/visa",children:[e("i",{className:"fas fa-passport"}),"Visa Support"]}),e("a",{href:"/services/admissions",children:[e("i",{className:"fas fa-graduation-cap"}),"University Admissions"]}),e("a",{href:"/services/scholarships",children:[e("i",{className:"fas fa-trophy"}),"Scholarships"]}),e("a",{href:"/services/test-prep",children:[e("i",{className:"fas fa-book"}),"Test Preparation"]}),e("a",{href:"/services/counselling",children:[e("i",{className:"fas fa-user-tie"}),"Career Counselling"]}),e("a",{href:"/services/pre-departure",children:[e("i",{className:"fas fa-plane"}),"Pre-Departure"]})]})]}),e("a",{href:"/about",className:"nav-link",children:"About"}),e("a",{href:"/contact",className:"nav-link",children:"Contact"}),e("div",{className:"mobile-cta",children:e("button",{className:"nav-cta-btn",onclick:"openConsultationModal()",children:"Free Consultation"})})]}),e("div",{className:"nav-actions",children:[e("a",{href:"https://scholarixstudy.com",target:"_blank",rel:"noopener noreferrer",className:"nav-employee-btn",children:"Employee Login"}),e("button",{className:"nav-cta-btn",onclick:"openConsultationModal()",children:"Free Consultation"})]}),e("button",{className:"nav-toggle",id:"navToggle","aria-label":"Toggle navigation menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})})}),e("main",{children:t}),e("footer",{className:"footer",children:e("div",{className:"container",children:[e("div",{className:"footer-content",children:[e("div",{className:"footer-brand",children:[e("a",{href:"/",className:"footer-logo-link",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX",className:"footer-logo"})}),e("p",{className:"footer-tagline",children:"Your trusted study abroad partner since 2023"})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Services"}),e("ul",{className:"footer-links-list",children:[e("li",{children:e("a",{href:"/services/visa",children:"Visa Support"})}),e("li",{children:e("a",{href:"/services/admissions",children:"Admissions"})}),e("li",{children:e("a",{href:"/services/scholarships",children:"Scholarships"})}),e("li",{children:e("a",{href:"/services/test-prep",children:"Test Prep"})})]})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Destinations"}),e("ul",{className:"footer-links-list",children:[e("li",{children:e("a",{href:"/destinations/germany",children:"Germany"})}),e("li",{children:e("a",{href:"/destinations/canada",children:"Canada"})}),e("li",{children:e("a",{href:"/destinations/uk",children:"UK"})}),e("li",{children:e("a",{href:"/destinations/usa",children:"USA"})})]})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Connect"}),e("div",{className:"footer-contact",children:[e("a",{href:"tel:+971525438784",className:"contact-link",children:"+971 52 543 8784"}),e("a",{href:"mailto:info@scholarixstudy.com",className:"contact-link",children:"info@scholarixstudy.com"})]}),e("div",{className:"social-links",children:[e("a",{href:"https://facebook.com/scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Facebook",children:e("i",{className:"fab fa-facebook-f"})}),e("a",{href:"https://instagram.com/scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Instagram",children:e("i",{className:"fab fa-instagram"})}),e("a",{href:"https://linkedin.com/company/scholarix",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"LinkedIn",children:e("i",{className:"fab fa-linkedin-in"})}),e("a",{href:"https://youtube.com/@scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"YouTube",children:e("i",{className:"fab fa-youtube"})})]})]}),e("div",{className:"footer-newsletter",children:[e("h4",{children:"Stay Updated"}),e("p",{children:"Get study abroad tips & updates"}),e("form",{className:"newsletter-form",id:"newsletterForm",children:e("div",{className:"input-group",children:[e("input",{type:"email",name:"email",placeholder:"Enter your email",required:!0,className:"newsletter-input"}),e("button",{type:"submit",className:"newsletter-btn","aria-label":"Subscribe",children:e("i",{className:"fas fa-arrow-right"})})]})})]})]}),e("div",{className:"footer-bottom",children:e("div",{className:"footer-bottom-content",children:[e("p",{className:"copyright",children:"© 2025 SCHOLARIX. All rights reserved."}),e("div",{className:"footer-legal",children:[e("a",{href:"/privacy",children:"Privacy"}),e("a",{href:"/terms",children:"Terms"}),e("a",{href:"/contact",children:"Contact"})]})]})})]})}),e("div",{className:"floating-chatbot",children:e("div",{className:"chatbot-trigger",children:[e("i",{className:"fas fa-comments"}),e("span",{className:"chatbot-text",children:"Chat with us"})]})}),e("script",{src:"/static/app.js",defer:!0}),e("script",{src:"/static/enhanced-forms.js",defer:!0}),e("script",{src:"/static/interactive-planner.js",defer:!0}),e("script",{src:"/static/mobile-contact-form-production.js",defer:!0}),e("script",{src:"/static/enhanced-animations.js"}),e("script",{src:"/static/study-abroad-3d.js"}),e("script",{src:"/static/working-globe-3d.js",defer:!0}),e("script",{src:"/static/course-finder.js"}),e("script",{src:"/static/destinations-accordion.js"}),e("script",{src:"https://cdn.jotfor.ms/agent/embedjs/01998a5c603976e5940cc26a09b91e250511/embed.js"}),e("script",{children:`
          // Prevent zoom and maintain responsive behavior
          (function() {
            // Disable zoom on iOS Safari
            document.addEventListener('touchstart', function(event) {
              if (event.touches.length > 1) {
                event.preventDefault();
              }
            }, { passive: false });
            
            let lastTouchEnd = 0;
            document.addEventListener('touchend', function(event) {
              const now = (new Date()).getTime();
              if (now - lastTouchEnd <= 300) {
                event.preventDefault();
              }
              lastTouchEnd = now;
            }, false);
            
            // Prevent zoom with keyboard
            document.addEventListener('keydown', function(event) {
              if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
                event.preventDefault();
              }
            });
            
            // Force responsive behavior
            function enforceResponsiveView() {
              const viewport = document.querySelector('meta[name="viewport"]');
              if (viewport) {
                viewport.setAttribute('content', 
                  'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
                );
              }
              
              // Reset any zoom
              if (window.outerWidth && window.innerWidth) {
                const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
                if (zoomLevel !== 1) {
                  document.body.style.zoom = '1';
                  document.documentElement.style.zoom = '1';
                }
              }
            }
            
            // Run on load and resize
            window.addEventListener('load', enforceResponsiveView);
            window.addEventListener('resize', enforceResponsiveView);
            window.addEventListener('orientationchange', function() {
              setTimeout(enforceResponsiveView, 100);
            });
            
            enforceResponsiveView();
          })();
          
          // Mobile Navigation Toggle
          document.addEventListener('DOMContentLoaded', function() {
            const navToggle = document.getElementById('navToggle');
            const navMenu = document.getElementById('navMenu');
            const header = document.querySelector('.header');
            
            // Mobile menu toggle
            if (navToggle && navMenu) {
              navToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
              });
              
              // Close menu when clicking nav links
              navMenu.addEventListener('click', function(e) {
                if (e.target.matches('.nav-link') && !e.target.matches('.dropdown-toggle')) {
                  closeMenu();
                }
              });
              
              // Close menu when clicking outside
              document.addEventListener('click', function(e) {
                if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
                  closeMenu();
                }
              });
              
              // Close menu function
              function closeMenu() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
              }
              
              // Handle window resize
              window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                  closeMenu();
                }
              });
            }
            
            // Header scroll effect
            if (header) {
              let lastScroll = 0;
              window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 10) {
                  header.classList.add('scrolled');
                } else {
                  header.classList.remove('scrolled');
                }
                
                lastScroll = currentScroll;
              });
            }
          });
          `})]})]})),F=new Ta;F.use("/api/*",Ii());F.use("/static/*",Bi({root:"./public"}));F.use(ys);F.get("/",t=>t.render(e("div",{children:[e("section",{className:"hero-section",children:[e("div",{id:"particles-js"}),e("div",{className:"hero-container",children:e("div",{className:"hero-content",children:[e("div",{className:"hero-text animate-on-scroll",children:[e("h1",{className:"hero-title",children:e("span",{id:"typewriter-text",children:"Your Dream Study Abroad Journey Starts Here"})}),e("p",{className:"hero-subtitle",children:"Specializing in European Study Destinations with High Visa Success from UAE. Expert guidance for study visas, scholarships, university admissions, and IELTS/PTE preparation. Your trusted partner since 2023 - Established in Dubai."}),e("div",{className:"hero-search-bar animate-on-scroll",children:e("div",{className:"search-container",children:e("form",{id:"heroSearchForm",className:"hero-search-form",children:e("div",{className:"search-fields",children:[e("div",{className:"search-field",children:[e("div",{className:"field-icon",children:e("i",{className:"fas fa-book-open"})}),e("select",{id:"heroStudyField","aria-label":"Select field of study",required:!0,children:[e("option",{value:"",children:"What do you want to study?"}),e("option",{value:"Computer Science",children:"Computer Science & IT"}),e("option",{value:"Business Management",children:"Business & Management"}),e("option",{value:"Engineering",children:"Engineering"}),e("option",{value:"Data Science",children:"Data Science & Analytics"}),e("option",{value:"Healthcare",children:"Healthcare & Medicine"}),e("option",{value:"Arts & Design",children:"Arts & Design"})]})]}),e("div",{className:"search-field",children:[e("div",{className:"field-icon",children:e("i",{className:"fas fa-globe-europe"})}),e("select",{id:"heroCountry","aria-label":"Select study destination",required:!0,children:[e("option",{value:"",children:"Where do you want to study?"}),e("option",{value:"Germany",children:"Germany"}),e("option",{value:"France",children:"France"}),e("option",{value:"Ireland",children:"Ireland"}),e("option",{value:"UK",children:"United Kingdom"}),e("option",{value:"Canada",children:"Canada"}),e("option",{value:"USA",children:"United States"})]})]}),e("button",{type:"submit",className:"search-submit-btn",children:[e("i",{className:"fas fa-search"}),e("span",{children:"Find Courses"})]})]})})})}),e("div",{className:"hero-stats",children:[e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"2500"}),e("div",{className:"stat-label",children:"Students Placed"})]}),e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"95"}),e("div",{className:"stat-label",children:"Visa Success %"})]}),e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"150"}),e("div",{className:"stat-label",children:"Partner Universities"})]})]}),e("div",{className:"hero-cta",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-accent btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat"]})]})]}),e("div",{className:"hero-image",children:e("img",{src:"/static/images/hero-graduate-3d.png",alt:"International Graduate Student"})})]})})]}),e("section",{className:"services-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("h2",{children:"Why Choose SCHOLARIX?"}),e("p",{children:"Comprehensive support for your international education journey"})]}),e("div",{className:"services-grid",children:[e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-passport text-primary"})}),e("h3",{children:"Study Visa Support"}),e("p",{children:"Expert guidance for student visa applications with 99% success rate. We handle all documentation and interview preparation."}),e("a",{href:"/services/visa",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-graduation-cap text-primary"})}),e("h3",{children:"University Admissions"}),e("p",{children:"Get admitted to top universities worldwide. We help with applications, essays, and course selection."}),e("a",{href:"/services/admissions",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-trophy text-accent"})}),e("h3",{children:"Scholarships"}),e("p",{children:"Access exclusive scholarships worth millions. We help you find and apply for the best funding opportunities."}),e("a",{href:"/services/scholarships",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-book text-primary"})}),e("h3",{children:"IELTS/PTE Preparation"}),e("p",{children:"Achieve your target scores with our expert trainers. Online and offline classes available."}),e("a",{href:"/services/test-prep",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-user-tie text-primary"})}),e("h3",{children:"Career Counselling"}),e("p",{children:"Get personalized career guidance to choose the right course and country for your future."}),e("a",{href:"/services/counselling",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-plane text-accent"})}),e("h3",{children:"Pre/Post Departure Support"}),e("p",{children:"Complete support for accommodation, travel, and settling in your destination country before and after arrival."}),e("a",{href:"/services/pre-departure",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]})]})]})}),e("section",{className:"course-search-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("div",{className:"badge",children:[e("i",{className:"fas fa-search"})," Find Your Program"]}),e("h2",{children:"Explore Study Programs by Destination"}),e("p",{children:"Browse through our study destinations and find programs that match your goals and budget."})]}),e("div",{className:"program-search-cta",children:[e("a",{href:"#destinations-globe",className:"btn btn-primary btn-large",children:[e("i",{className:"fas fa-globe-europe"}),"Explore Study Destinations"]}),e("p",{className:"search-subtext",children:"Click on any country pin to view programs, costs, and application requirements"})]})]})}),e("section",{className:"visa-success-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"🎯 Our Advantage"}),e("h2",{children:"Higher Visa Approval Success from UAE"}),e("p",{children:"UAE residents enjoy significantly higher visa success rates compared to home country applications"})]}),e("div",{className:"visa-success-grid",children:[e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇭🇺"}),e("h3",{children:"Hungary"}),e("div",{className:"success-badge",children:"97% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇱🇹"}),e("h3",{children:"Lithuania"}),e("div",{className:"success-badge",children:"96% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇲🇹"}),e("h3",{children:"Malta"}),e("div",{className:"success-badge",children:"95% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇩🇪"}),e("h3",{children:"Germany"}),e("div",{className:"success-badge",children:"94% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇮🇪"}),e("h3",{children:"Ireland"}),e("div",{className:"success-badge",children:"93% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇫🇮"}),e("h3",{children:"Finland"}),e("div",{className:"success-badge",children:"92% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇸🇬"}),e("h3",{children:"Singapore"}),e("div",{className:"success-badge",children:"91% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇩🇰"}),e("h3",{children:"Denmark"}),e("div",{className:"success-badge",children:"90% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇸🇪"}),e("h3",{children:"Sweden"}),e("div",{className:"success-badge",children:"90% Success"})]})]})]})}),e("section",{id:"destinations-globe",className:"destinations-globe-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("div",{className:"badge",children:"🌍 Interactive Study Explorer"}),e("h2",{children:"Discover Your Perfect Study Destination"}),e("p",{children:"Explore universities, costs, scholarships, and visa requirements through our interactive globe experience"})]}),e("div",{className:"study-journey-preview",children:[e("div",{className:"journey-step","data-step":"1",children:[e("div",{className:"step-icon",children:"🎯"}),e("h4",{children:"Choose Destination"}),e("p",{children:"Explore countries"})]}),e("div",{className:"journey-connector"}),e("div",{className:"journey-step","data-step":"2",children:[e("div",{className:"step-icon",children:"🏛️"}),e("h4",{children:"Select University"}),e("p",{children:"Browse programs"})]}),e("div",{className:"journey-connector"}),e("div",{className:"journey-step","data-step":"3",children:[e("div",{className:"step-icon",children:"📝"}),e("h4",{children:"Apply & Get Visa"}),e("p",{children:"Complete process"})]}),e("div",{className:"journey-connector"}),e("div",{className:"journey-step","data-step":"4",children:[e("div",{className:"step-icon",children:"✈️"}),e("h4",{children:"Start Journey"}),e("p",{children:"Study abroad"})]})]}),e("div",{className:"globe-container",children:[e("div",{id:"interactive-globe",className:"interactive-globe",children:e("div",{className:"globe-stats-overlay",children:[e("div",{className:"stat-bubble","data-country":"germany",children:[e("span",{className:"stat-number",children:"250+"}),e("span",{className:"stat-label",children:"Universities"})]}),e("div",{className:"stat-bubble","data-country":"canada",children:[e("span",{className:"stat-number",children:"500+"}),e("span",{className:"stat-label",children:"Programs"})]}),e("div",{className:"stat-bubble","data-country":"uk",children:[e("span",{className:"stat-number",children:"95%"}),e("span",{className:"stat-label",children:"Success Rate"})]})]})}),e("div",{className:"globe-controls",children:[e("div",{className:"control-group",children:[e("button",{className:"globe-control-btn",onclick:"resetGlobe()",title:"Reset View",children:[e("i",{className:"fas fa-home"}),e("span",{children:"Reset"})]}),e("button",{className:"globe-control-btn",onclick:"toggleGlobeRotation()",title:"Toggle Rotation",children:[e("i",{className:"fas fa-play",id:"rotation-icon"}),e("span",{children:"Auto Rotate"})]})]}),e("div",{className:"view-modes",children:[e("button",{className:"mode-btn active","data-mode":"universities",title:"View Universities",children:[e("i",{className:"fas fa-graduation-cap"}),e("span",{children:"Universities"})]}),e("button",{className:"mode-btn","data-mode":"costs",title:"View Costs",children:[e("i",{className:"fas fa-euro-sign"}),e("span",{children:"Costs"})]}),e("button",{className:"mode-btn","data-mode":"visas",title:"View Visa Info",children:[e("i",{className:"fas fa-passport"}),e("span",{children:"Visas"})]})]}),e("div",{className:"globe-zoom-controls",children:[e("button",{className:"globe-control-btn",onclick:"zoomGlobe(1.2)",title:"Zoom In",children:e("i",{className:"fas fa-plus"})}),e("button",{className:"globe-control-btn",onclick:"zoomGlobe(0.8)",title:"Zoom Out",children:e("i",{className:"fas fa-minus"})})]})]}),e("div",{id:"globe-loader",className:"globe-loader",children:e("div",{className:"loader-content",children:[e("div",{className:"loader-spinner"}),e("h3",{children:"Loading Interactive Globe..."}),e("p",{children:"Preparing your study abroad exploration experience"}),e("div",{className:"loading-progress",children:[e("div",{className:"progress-bar",children:e("div",{className:"progress-fill"})}),e("span",{className:"progress-text",children:"Loading destinations..."})]})]})})]}),e("div",{className:"globe-footer",children:[e("p",{className:"globe-instruction",children:[e("i",{className:"fas fa-mouse"}),"Drag to rotate • Scroll to zoom • Click pins for details"]}),e("div",{className:"popular-destinations-quick",children:[e("span",{children:"Quick access:"}),e("button",{onclick:"focusCountry('germany')",className:"quick-country-btn",children:"🇩🇪 Germany"}),e("button",{onclick:"focusCountry('canada')",className:"quick-country-btn",children:"🇨🇦 Canada"}),e("button",{onclick:"focusCountry('australia')",className:"quick-country-btn",children:"🇦🇺 Australia"}),e("button",{onclick:"focusCountry('malta')",className:"quick-country-btn",children:"🇲🇹 Malta"})]})]}),e("div",{className:"mobile-destinations-fallback",children:[e("div",{className:"destinations-header",children:[e("h3",{children:"🌍 Top Study Destinations"}),e("p",{children:"Click any destination to explore programs, costs & requirements"})]}),e("div",{className:"destinations-grid",children:[e("div",{className:"destination-card popular",onclick:"showDestinationModal('germany')",children:[e("div",{className:"destination-flag",children:"🇩🇪"}),e("div",{className:"destination-info",children:[e("h4",{children:"Germany"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"250+ Universities"}),e("span",{className:"stat",children:"95% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Free Tuition Available"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card popular",onclick:"showDestinationModal('canada')",children:[e("div",{className:"destination-flag",children:"🇨🇦"}),e("div",{className:"destination-info",children:[e("h4",{children:"Canada"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"500+ Universities"}),e("span",{className:"stat",children:"85% Visa Success"})]}),e("div",{className:"destination-highlight",children:"3-Year Work Permit"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card popular",onclick:"showDestinationModal('uk')",children:[e("div",{className:"destination-flag",children:"🇬🇧"}),e("div",{className:"destination-info",children:[e("h4",{children:"United Kingdom"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"400+ Universities"}),e("span",{className:"stat",children:"88% Visa Success"})]}),e("div",{className:"destination-highlight",children:"World-Class Education"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card affordable",onclick:"showDestinationModal('ireland')",children:[e("div",{className:"destination-flag",children:"🇮🇪"}),e("div",{className:"destination-info",children:[e("h4",{children:"Ireland"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"150+ Universities"}),e("span",{className:"stat",children:"90% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Tech Hub of Europe"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card premium",onclick:"showDestinationModal('australia')",children:[e("div",{className:"destination-flag",children:"🇦🇺"}),e("div",{className:"destination-info",children:[e("h4",{children:"Australia"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"300+ Universities"}),e("span",{className:"stat",children:"82% Visa Success"})]}),e("div",{className:"destination-highlight",children:"High Living Standard"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card affordable",onclick:"showDestinationModal('france')",children:[e("div",{className:"destination-flag",children:"🇫🇷"}),e("div",{className:"destination-info",children:[e("h4",{children:"France"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"600+ Universities"}),e("span",{className:"stat",children:"87% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Low Cost, High Quality"})]}),e("div",{className:"destination-arrow",children:"→"})]})]}),e("div",{className:"destinations-cta",children:e("button",{className:"btn btn-primary",onclick:"document.getElementById('consultationModal').style.display='block'",children:[e("i",{className:"fas fa-calendar-check"}),"Get Personalized Guidance"]})})]}),e("div",{id:"country-info-modal",className:"country-modal",children:e("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:[e("h3",{id:"modal-country-name",children:"Country Name"}),e("button",{id:"modal-close-btn",className:"modal-close",onclick:"closeDestinationModal()",type:"button","aria-label":"Close modal",children:e("i",{className:"fas fa-times"})})]}),e("div",{className:"modal-body",children:[e("div",{className:"country-overview",children:[e("div",{id:"modal-country-flag",className:"country-flag-large"}),e("div",{id:"modal-country-description",className:"country-description"})]}),e("div",{className:"country-stats",children:e("div",{class:"stat-grid",children:[e("div",{class:"stat-item",children:[e("i",{class:"fas fa-euro-sign"}),e("div",{children:[e("strong",{id:"modal-tuition-range",children:"€0 - €0"}),e("small",{children:"Annual Tuition"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-home"}),e("div",{children:[e("strong",{id:"modal-living-cost",children:"€0 - €0"}),e("small",{children:"Living Cost"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-check-circle"}),e("div",{children:[e("strong",{id:"modal-visa-success",children:"0%"}),e("small",{children:"Visa Success"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-briefcase"}),e("div",{children:[e("strong",{id:"modal-work-permit",children:"N/A"}),e("small",{children:"Work Permit"})]})]})]})}),e("div",{className:"program-highlights",children:[e("h4",{children:"Popular Programs"}),e("div",{id:"modal-programs",className:"programs-list"})]}),e("div",{className:"modal-actions",children:[e("button",{className:"btn btn-primary",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar"}),"Book Consultation"]}),e("button",{className:"btn btn-secondary",onclick:"downloadCountryGuide()",children:[e("i",{className:"fas fa-download"}),"Download Guide"]})]})]})]})}),e("div",{id:"program-inquiry-modal",className:"program-modal",children:e("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:[e("h3",{id:"program-modal-title",children:"Program Inquiry"}),e("button",{id:"program-modal-close-btn",className:"modal-close",onclick:"closeProgramInquiryModal()",type:"button","aria-label":"Close modal",children:e("i",{className:"fas fa-times"})})]}),e("div",{className:"modal-body",children:[e("div",{className:"program-overview",children:[e("div",{id:"program-icon",className:"program-icon-large",children:"🎓"}),e("div",{className:"program-details",children:[e("h4",{id:"program-name",children:"Program Name"}),e("div",{id:"program-price-display",className:"program-price-display",children:[e("span",{id:"program-price",children:"$0"}),e("small",{id:"program-duration",children:"/year"})]}),e("div",{id:"program-features-display",className:"program-features-preview"})]})]}),e("div",{className:"inquiry-form-section",children:[e("h4",{children:"Get Program Information"}),e("form",{id:"program-inquiry-form",className:"progressive-form",children:[e("div",{className:"form-step active","data-step":"1",children:e("div",{className:"form-grid",children:[e("div",{className:"form-group",children:[e("label",{for:"inquiry-full-name",children:[e("i",{className:"fas fa-user"}),"Full Name *"]}),e("input",{type:"text",id:"inquiry-full-name",name:"fullName",required:!0,placeholder:"Enter your full name"})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-email",children:[e("i",{className:"fas fa-envelope"}),"Email Address *"]}),e("input",{type:"email",id:"inquiry-email",name:"email",required:!0,placeholder:"your.email@example.com"})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-phone",children:[e("i",{className:"fas fa-phone"}),"Phone Number *"]}),e("input",{type:"tel",id:"inquiry-phone",name:"phone",required:!0,placeholder:"+971 50 123 4567"})]}),e("div",{className:"form-group full-width",children:[e("label",{for:"inquiry-program",children:[e("i",{className:"fas fa-graduation-cap"}),"Program of Interest *"]}),e("input",{type:"text",id:"inquiry-program",name:"program",readonly:!0,style:"background-color: #f8f9fa; cursor: not-allowed;"})]})]})}),e("div",{className:"form-step","data-step":"2",children:e("div",{className:"form-grid",children:[e("div",{className:"form-group",children:[e("label",{for:"inquiry-education-level",children:[e("i",{className:"fas fa-book"}),"Current Education Level"]}),e("select",{id:"inquiry-education-level",name:"educationLevel",children:[e("option",{value:"",children:"Select your level"}),e("option",{value:"high-school",children:"High School"}),e("option",{value:"undergraduate",children:"Undergraduate"}),e("option",{value:"graduate",children:"Graduate"}),e("option",{value:"postgraduate",children:"Postgraduate"}),e("option",{value:"working-professional",children:"Working Professional"})]})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-start-date",children:[e("i",{className:"fas fa-calendar"}),"Preferred Start Date"]}),e("select",{id:"inquiry-start-date",name:"startDate",children:[e("option",{value:"",children:"Select timeline"}),e("option",{value:"immediate",children:"Immediate (Next 3 months)"}),e("option",{value:"6-months",children:"In 6 months"}),e("option",{value:"1-year",children:"Next year"}),e("option",{value:"flexible",children:"Flexible"})]})]}),e("div",{className:"form-group full-width",children:[e("label",{for:"inquiry-message",children:[e("i",{className:"fas fa-message"}),"Additional Questions (Optional)"]}),e("textarea",{id:"inquiry-message",name:"message",rows:3,placeholder:"Any specific questions about the program, admission requirements, or other concerns?"})]})]})}),e("div",{className:"form-navigation",children:[e("div",{className:"step-indicator",children:[e("div",{className:"step active","data-step":"1",children:"1"}),e("div",{className:"progress-line",children:e("div",{className:"progress-fill"})}),e("div",{className:"step","data-step":"2",children:"2"})]}),e("div",{className:"form-buttons",children:[e("button",{type:"button",id:"program-form-prev",className:"btn btn-secondary",style:"display: none;",children:[e("i",{className:"fas fa-arrow-left"})," Previous"]}),e("button",{type:"button",id:"program-form-next",className:"btn btn-primary",children:["Next ",e("i",{className:"fas fa-arrow-right"})]}),e("button",{type:"submit",id:"program-form-submit",className:"btn btn-primary",style:"display: none;",children:[e("i",{className:"fas fa-paper-plane"})," Send Inquiry"]})]})]})]})]}),e("div",{className:"trust-indicators",children:[e("div",{className:"trust-item",children:[e("i",{className:"fas fa-shield-alt"}),e("span",{children:"Secure & Confidential"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-clock"}),e("span",{children:"Response in 24 hours"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-award"}),e("span",{children:"Expert Guidance"})]})]})]})]})}),e("div",{className:"globe-footer",children:[e("p",{className:"globe-instruction",children:[e("i",{className:"fas fa-mouse"}),"Drag to rotate • Scroll to zoom • Click pins for details"]}),e("div",{className:"popular-destinations-quick",children:[e("span",{children:"Quick access:"}),e("button",{onclick:"focusCountry('germany')",className:"quick-country-btn",children:"🇩🇪 Germany"}),e("button",{onclick:"focusCountry('canada')",className:"quick-country-btn",children:"🇨🇦 Canada"}),e("button",{onclick:"focusCountry('australia')",className:"quick-country-btn",children:"🇦🇺 Australia"}),e("button",{onclick:"focusCountry('malta')",className:"quick-country-btn",children:"🇲🇹 Malta"})]})]})]})}),e("section",{className:"mbbs-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"🏥 Medical Education"}),e("h2",{children:"Affordable MBBS Programs"}),e("p",{children:"Study medicine in WHO-recognized universities for under $5,000/year"})]}),e("div",{className:"mbbs-grid",children:[e("div",{className:"mbbs-card animate-on-scroll",children:[e("div",{className:"mbbs-header",children:[e("div",{className:"country-flag-large",children:"🇬🇪"}),e("h3",{children:"Georgia MBBS"})]}),e("div",{className:"mbbs-content",children:[e("div",{className:"price-tag",children:"$4,500/year"}),e("ul",{className:"mbbs-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," WHO-Recognized"]}),e("li",{children:[e("i",{className:"fas fa-check"})," English-Taught"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 6-Year Program"]}),e("li",{children:[e("i",{className:"fas fa-check"})," High Success Rate"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Low Living Cost"]}),e("li",{children:[e("i",{className:"fas fa-check"})," No Donation"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('georgia-mbbs', 'Georgia MBBS', '$4,500', '/year', '🇬🇪', ['WHO-Recognized', 'English-Taught', '6-Year Program', 'High Success Rate', 'Low Living Cost', 'No Donation'])",children:"Learn More"})]})]}),e("div",{className:"mbbs-card animate-on-scroll",children:[e("div",{className:"mbbs-header",children:[e("div",{className:"country-flag-large",children:"🇷🇺"}),e("h3",{children:"Russia MBBS"})]}),e("div",{className:"mbbs-content",children:[e("div",{className:"price-tag",children:"$4,000/year"}),e("ul",{className:"mbbs-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," WHO-Recognized"]}),e("li",{children:[e("i",{className:"fas fa-check"})," English Medium"]}),e("li",{children:[e("i",{className:"fas fa-check"})," World-Class Facilities"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Affordable Living"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Quality Education"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Safe Environment"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('russia-mbbs', 'Russia MBBS', '$4,000', '/year', '🇷🇺', ['WHO-Recognized', 'English Medium', 'World-Class Facilities', 'Affordable Living', 'Quality Education', 'Safe Environment'])",children:"Learn More"})]})]})]}),e("div",{className:"mbbs-cta",children:e("p",{className:"highlight-text",children:[e("i",{className:"fas fa-star"}),"Alternative to expensive UK/US/Canada medical programs - Save over $200,000!"]})})]})}),e("section",{className:"test-prep-marketplace",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"📚 Test Preparation"}),e("h2",{children:"Test Prep Course Marketplace"}),e("p",{children:"Ace your language proficiency tests with our expert-led courses"})]}),e("div",{className:"marketplace-grid",id:"testPrepGrid",children:[e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-badge",children:"Most Popular"}),e("div",{className:"course-icon",children:"🎯"}),e("h3",{children:"IELTS Preparation"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 2,000"}),e("span",{className:"current-price",children:"AED 1,499"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 60 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Live Online Classes"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Mock Tests Included"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 7+ Guarantee"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Study Materials"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Personal Tutor Support"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('ielts-prep', 'IELTS Preparation', 'AED 1,499', '', '🎯', ['60 Hours of Training', 'Live Online Classes', 'Mock Tests Included', 'Score 7+ Guarantee', 'Study Materials', 'Personal Tutor Support'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-icon",children:"🎓"}),e("h3",{children:"PTE Academic"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 1,800"}),e("span",{className:"current-price",children:"AED 1,299"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 50 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Computer-Based Practice"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 10 Full Mock Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 65+ Guarantee"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Practice Tests & Scoring"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Flexible Schedule"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('pte-academic', 'PTE Academic', 'AED 1,299', '', '🎓', ['50 Hours of Training', 'Computer-Based Practice', '10 Full Mock Tests', 'Score 65+ Guarantee', 'Practice Tests & Scoring', 'Flexible Schedule'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-icon",children:"📖"}),e("h3",{children:"TOEFL iBT"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 2,200"}),e("span",{className:"current-price",children:"AED 1,699"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 65 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Comprehensive Curriculum"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 8 Practice Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 100+ Focus"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Expert Instructors"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Lifetime Materials Access"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('toefl-ibt', 'TOEFL iBT', 'AED 1,699', '', '📖', ['65 Hours of Training', 'Comprehensive Curriculum', '8 Practice Tests', 'Score 100+ Focus', 'Expert Instructors', 'Lifetime Materials Access'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-hidden",children:[e("div",{className:"course-badge",children:"New"}),e("div",{className:"course-icon",children:"🌟"}),e("h3",{children:"Duolingo English Test"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 1,500"}),e("span",{className:"current-price",children:"AED 999"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 40 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Fast-Track Program"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 15 Practice Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 120+ Target"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Adaptive Learning"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 24/7 Online Access"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]})]}),e("div",{className:"marketplace-cta",children:e("p",{children:[e("i",{className:"fas fa-gift"})," ",e("strong",{children:"Special Offer:"})," Get 20% off when you enroll with our university admission package!"]})})]})}),e("section",{className:"testimonials-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("h2",{children:"Success Stories"}),e("p",{children:"Hear from our successful students"})]}),e("div",{className:"testimonials-grid",children:[e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"SCHOLARIX helped me secure admission at Technical University of Munich with excellent scholarship support. The entire process was smooth and professional!"'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student1.jpg",alt:"Priya Sharma"}),e("div",{className:"author-info",children:[e("h4",{children:"Priya Sharma"}),e("p",{children:"Technical University of Munich, Germany"})]})]})]}),e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"Got my German student visa in just 3 weeks! The team guided me through every step and made the documentation process stress-free."'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student2.jpg",alt:"Raj Patel"}),e("div",{className:"author-info",children:[e("h4",{children:"Raj Patel"}),e("p",{children:"University of Stuttgart, Germany"})]})]})]}),e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"The IELTS coaching was excellent. I scored 7.5 and got admitted to Trinity College Dublin. Thank you SCHOLARIX for the amazing support!"'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student3.jpg",alt:"Sarah Ahmed"}),e("div",{className:"author-info",children:[e("h4",{children:"Sarah Ahmed"}),e("p",{children:"Trinity College Dublin, Ireland"})]})]})]})]})]})}),e("section",{className:"cta-section",children:e("div",{className:"container",children:e("div",{className:"cta-content",children:[e("h2",{children:"Ready to Start Your Study Abroad Journey?"}),e("p",{children:"Get expert guidance and personalized support to achieve your international education dreams"}),e("div",{className:"cta-buttons",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-outline btn-large",onclick:"document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})",children:[e("i",{className:"fas fa-envelope"}),"Get Information"]})]})]})})}),e("section",{className:"contact-form-section",id:"contact-form",children:e("div",{className:"container",children:[e("div",{className:"section-header mobile-centered",children:[e("div",{className:"badge mobile-badge",children:[e("i",{className:"fas fa-headset"})," Free Consultation"]}),e("h2",{className:"mobile-title",children:"Get Your Free Consultation"}),e("p",{className:"mobile-subtitle",children:"Fill out this form and our experts will contact you within 24 hours"})]}),e("div",{className:"mobile-form-layout",children:[e("div",{className:"mobile-form-card",children:e("div",{className:"progressive-form-container",children:e("form",{action:"https://formspree.io/f/xyzgkjad",method:"post",className:"mobile-progressive-form",id:"mobileLeadForm",children:[e("input",{type:"hidden",name:"_subject",value:"New SCHOLARIX Consultation Request"}),e("input",{type:"hidden",name:"_next",value:"https://scholarixstudy.com/thank-you"}),e("div",{className:"mobile-form-step active",id:"mobileStep1",children:[e("div",{className:"mobile-step-header",children:[e("div",{className:"step-indicator-mobile",children:[e("div",{className:"step-number active",children:"1"}),e("div",{className:"step-divider"}),e("div",{className:"step-number",children:"2"})]}),e("div",{className:"step-title",children:"Basic Information"}),e("div",{className:"mobile-progress-bar",children:e("div",{className:"mobile-progress-fill",style:{width:"50%"}})})]}),e("div",{className:"mobile-form-fields",children:[e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-user input-icon"}),"Full Name *"]}),e("input",{type:"text",name:"fullName",className:"mobile-input",placeholder:"Enter your full name",required:!0})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-envelope input-icon"}),"Email Address *"]}),e("input",{type:"email",name:"email",className:"mobile-input",placeholder:"your.email@example.com",required:!0})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-phone input-icon"}),"Phone Number *"]}),e("div",{className:"mobile-phone-wrapper",children:[e("select",{name:"countryCode",className:"mobile-country-select",required:!0,children:[e("option",{value:"+971",children:"🇦🇪 +971"}),e("option",{value:"+1",children:"🇺🇸 +1"}),e("option",{value:"+44",children:"🇬🇧 +44"}),e("option",{value:"+91",children:"🇮🇳 +91"}),e("option",{value:"+92",children:"🇵🇰 +92"}),e("option",{value:"+966",children:"🇸🇦 +966"}),e("option",{value:"+974",children:"🇶🇦 +974"})]}),e("input",{type:"tel",name:"phone",className:"mobile-phone-input",placeholder:"50 123 4567",required:!0})]})]})]}),e("button",{type:"button",className:"mobile-next-btn",onclick:"showMobileStep2()",children:[e("span",{children:"Continue"}),e("i",{className:"fas fa-arrow-right"})]}),e("div",{className:"mobile-trust-indicators",children:[e("div",{className:"mobile-trust-item",children:[e("i",{className:"fas fa-shield-alt"}),e("span",{children:"100% Secure"})]}),e("div",{className:"mobile-trust-item",children:[e("i",{className:"fas fa-clock"}),e("span",{children:"24h Response"})]}),e("div",{className:"mobile-trust-item",children:[e("i",{className:"fas fa-award"}),e("span",{children:"Expert Guidance"})]})]})]}),e("div",{className:"mobile-form-step",id:"mobileStep2",style:{display:"none"},children:[e("div",{className:"mobile-step-header",children:[e("div",{className:"step-indicator-mobile",children:[e("div",{className:"step-number completed",children:"1"}),e("div",{className:"step-divider active"}),e("div",{className:"step-number active",children:"2"})]}),e("div",{className:"step-title",children:"Study Preferences"}),e("div",{className:"mobile-progress-bar",children:e("div",{className:"mobile-progress-fill",style:{width:"100%"}})})]}),e("div",{className:"mobile-form-fields",children:[e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-globe input-icon"}),"Preferred Destination *"]}),e("select",{name:"destination",className:"mobile-select",required:!0,children:[e("option",{value:"",children:"Select your destination"}),e("option",{value:"germany",children:"🇩🇪 Germany"}),e("option",{value:"canada",children:"🇨🇦 Canada"}),e("option",{value:"uk",children:"🇬🇧 United Kingdom"}),e("option",{value:"ireland",children:"🇮🇪 Ireland"}),e("option",{value:"australia",children:"🇦🇺 Australia"}),e("option",{value:"france",children:"🇫🇷 France"}),e("option",{value:"usa",children:"🇺🇸 United States"}),e("option",{value:"malta",children:"🇲🇹 Malta"})]})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-graduation-cap input-icon"}),"Study Level *"]}),e("select",{name:"studyLevel",className:"mobile-select",required:!0,children:[e("option",{value:"",children:"Select study level"}),e("option",{value:"bachelor",children:"Bachelor's Degree"}),e("option",{value:"master",children:"Master's Degree"}),e("option",{value:"phd",children:"PhD/Research"}),e("option",{value:"diploma",children:"Diploma/Certificate"}),e("option",{value:"foundation",children:"Foundation Course"})]})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-calendar input-icon"}),"When to Start *"]}),e("select",{name:"timeline",className:"mobile-select",required:!0,children:[e("option",{value:"",children:"Select timeline"}),e("option",{value:"2025-spring",children:"Spring 2025"}),e("option",{value:"2025-fall",children:"Fall 2025"}),e("option",{value:"2026",children:"2026"}),e("option",{value:"2027",children:"2027 or later"}),e("option",{value:"flexible",children:"Flexible"})]})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label optional",children:[e("i",{className:"fas fa-comment input-icon"}),"Additional Questions (Optional)"]}),e("textarea",{name:"message",className:"mobile-textarea",placeholder:"Any specific questions about programs, costs, scholarships, or requirements?",rows:3})]})]}),e("div",{className:"mobile-form-actions",children:[e("button",{type:"button",className:"mobile-back-btn",onclick:"showMobileStep1()",children:[e("i",{className:"fas fa-arrow-left"}),e("span",{children:"Back"})]}),e("button",{type:"submit",className:"mobile-submit-btn",children:[e("i",{className:"fas fa-paper-plane"}),e("span",{children:"Get Free Consultation"})]})]})]})]})})}),e("div",{className:"mobile-contact-card",children:[e("div",{className:"contact-header",children:[e("div",{className:"contact-logo",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX",className:"mobile-logo"})}),e("h3",{className:"contact-title",children:"Contact Information"}),e("p",{className:"contact-subtitle",children:"Get in touch with our experts"})]}),e("div",{className:"mobile-contact-methods",children:[e("a",{href:"tel:+971525438784",className:"mobile-contact-item primary",children:[e("div",{className:"contact-icon-wrapper phone",children:e("i",{className:"fas fa-phone"})}),e("div",{className:"contact-details",children:[e("span",{className:"contact-label",children:"Call Us Now"}),e("span",{className:"contact-value",children:"+971 52 543 8784"}),e("span",{className:"contact-note",children:"Available 9 AM - 9 PM"})]}),e("i",{className:"fas fa-chevron-right contact-arrow"})]}),e("a",{href:"https://wa.me/971525438784?text=Hi%20SCHOLARIX%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%20me%3F",className:"mobile-contact-item whatsapp",target:"_blank",rel:"noopener noreferrer",children:[e("div",{className:"contact-icon-wrapper whatsapp",children:e("i",{className:"fab fa-whatsapp"})}),e("div",{className:"contact-details",children:[e("span",{className:"contact-label",children:"WhatsApp Chat"}),e("span",{className:"contact-value",children:"+971 52 543 8784"}),e("span",{className:"contact-note",children:"Instant Response"})]}),e("i",{className:"fas fa-chevron-right contact-arrow"})]}),e("a",{href:"mailto:info@scholarixstudy.com",className:"mobile-contact-item email",children:[e("div",{className:"contact-icon-wrapper email",children:e("i",{className:"fas fa-envelope"})}),e("div",{className:"contact-details",children:[e("span",{className:"contact-label",children:"Email Us"}),e("span",{className:"contact-value",children:"info@scholarixstudy.com"}),e("span",{className:"contact-note",children:"24-hour response"})]}),e("i",{className:"fas fa-chevron-right contact-arrow"})]}),e("div",{className:"mobile-contact-item location",children:[e("div",{className:"contact-icon-wrapper location",children:e("i",{className:"fas fa-map-marker-alt"})}),e("div",{className:"contact-details",children:[e("span",{className:"contact-label",children:"Visit Our Office"}),e("span",{className:"contact-value",children:"Dubai, UAE"}),e("span",{className:"contact-note",children:"By appointment only"})]})]})]}),e("div",{className:"mobile-social-proof",children:[e("div",{className:"social-stat",children:[e("div",{className:"stat-number",children:"2500+"}),e("div",{className:"stat-label",children:"Students Helped"})]}),e("div",{className:"social-stat",children:[e("div",{className:"stat-number",children:"95%"}),e("div",{className:"stat-label",children:"Visa Success"})]}),e("div",{className:"social-stat",children:[e("div",{className:"stat-number",children:"24/7"}),e("div",{className:"stat-label",children:"Support"})]})]})]})]})]})}),e("div",{id:"consultationModal",className:"modal",children:e("div",{className:"modal-content",children:[e("span",{className:"close",onclick:"closeConsultationModal()",children:"×"}),e("h2",{children:"Book Your Free Consultation"}),e("p",{children:"Choose your preferred consultation method:"}),e("div",{className:"consultation-options",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat Consultation"]}),e("button",{className:"btn btn-secondary btn-large",onclick:"window.open('tel:+971525438784', '_self')",children:[e("i",{className:"fas fa-phone"}),"Phone Call"]}),e("button",{className:"btn btn-outline btn-large",onclick:"closeConsultationModal(); document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})",children:[e("i",{className:"fas fa-envelope"}),"Email Inquiry"]})]})]})}),e("div",{className:"whatsapp-sticky",children:e("a",{href:"https://wa.me/971525438784?text=Hi%20SCHOLARIX%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%20me%3F",className:"whatsapp-btn",target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with us on WhatsApp",children:[e("i",{className:"fab fa-whatsapp"}),e("span",{className:"whatsapp-text",children:"Chat with us"})]})})]})));F.get("/about",t=>t.render(e("div",{className:"about-page",children:e("div",{className:"container",children:[e("section",{className:"about-hero",children:e("div",{className:"about-hero-content",children:[e("h1",{children:"About SCHOLARIX"}),e("p",{className:"hero-subtitle",children:"Empowering students to achieve their international education dreams since 2018. With over 10,000 successful student placements and a 99% visa success rate, we are your trusted partner for study abroad success."})]})}),e("section",{className:"about-mission",children:e("div",{className:"section-header",children:[e("h2",{children:"Our Mission"}),e("p",{children:"To provide world-class educational guidance and support, helping students navigate their academic journeys and achieve their full potential in international education."})]})}),e("section",{className:"about-stats",children:e("div",{className:"stats-grid",children:[e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"10,000+"}),e("div",{className:"stat-label",children:"Students Placed"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"99%"}),e("div",{className:"stat-label",children:"Visa Success Rate"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"500+"}),e("div",{className:"stat-label",children:"Partner Universities"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"15+"}),e("div",{className:"stat-label",children:"Countries Covered"})]})]})}),e("section",{className:"about-team",children:[e("div",{className:"section-header",children:[e("h2",{children:"Our Expert Team"}),e("p",{children:"Experienced counselors and visa experts dedicated to your success"})]}),e("div",{className:"team-grid",children:[e("div",{className:"team-member",children:[e("img",{src:"/static/images/team1.jpg",alt:"Sarah Johnson"}),e("h3",{children:"Sarah Johnson"}),e("p",{children:"Senior Education Counselor"}),e("p",{children:"10+ years experience in US and UK admissions"})]}),e("div",{className:"team-member",children:[e("img",{src:"/static/images/team2.jpg",alt:"Michael Chen"}),e("h3",{children:"Michael Chen"}),e("p",{children:"Visa Specialist"}),e("p",{children:"Expert in student visa applications for all countries"})]}),e("div",{className:"team-member",children:[e("img",{src:"/static/images/team3.jpg",alt:"Dr. Priya Patel"}),e("h3",{children:"Dr. Priya Patel"}),e("p",{children:"Academic Director"}),e("p",{children:"PhD in International Education, 15+ years experience"})]})]})]}),e("div",{className:"about-cta",children:e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:"Meet Our Team"})})]})})));F.get("/contact",t=>t.render(e("div",{className:"contact-page",children:e("div",{className:"container",children:[e("section",{className:"contact-hero",children:[e("h1",{children:"Contact SCHOLARIX"}),e("p",{children:"Ready to start your study abroad journey? Get in touch with our experts today!"})]}),e("section",{className:"contact-main",children:e("div",{className:"contact-grid",children:[e("div",{className:"contact-info",children:[e("h2",{children:"Get In Touch"}),e("div",{className:"contact-methods",children:[e("div",{className:"contact-method",children:[e("i",{className:"fas fa-phone text-primary"}),e("div",{children:[e("h4",{children:"Phone"}),e("p",{children:"+971 52 543 8784"}),e("small",{children:"Mon-Sat: 9AM-7PM GST"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-envelope text-primary"}),e("div",{children:[e("h4",{children:"Email"}),e("p",{children:"info@scholarixstudy.com"}),e("small",{children:"Response within 24 hours"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-comments text-accent"}),e("div",{children:[e("h4",{children:"Live Chat"}),e("p",{children:"24/7 Available"}),e("small",{children:"Instant messaging support"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-map-marker-alt text-primary"}),e("div",{children:[e("h4",{children:"Office"}),e("p",{children:"Dubai, United Arab Emirates"}),e("small",{children:"By appointment only"})]})]})]})]}),e("div",{className:"contact-form",children:[e("h2",{children:"Send Us a Message"}),e("form",{id:"contactForm",className:"lead-form",children:[e("div",{className:"form-row",children:[e("div",{className:"form-group",children:e("input",{type:"text",name:"firstName",placeholder:"First Name*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"text",name:"lastName",placeholder:"Last Name*",required:!0})})]}),e("div",{className:"form-group",children:e("input",{type:"email",name:"email",placeholder:"Email Address*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"tel",name:"phone",placeholder:"Phone Number*",required:!0})}),e("div",{className:"form-group",children:e("select",{name:"subject",required:!0,children:[e("option",{value:"",children:"Subject*"}),e("option",{value:"general",children:"General Inquiry"}),e("option",{value:"visa",children:"Visa Support"}),e("option",{value:"admission",children:"University Admission"}),e("option",{value:"scholarship",children:"Scholarships"}),e("option",{value:"ielts",children:"IELTS/PTE Preparation"}),e("option",{value:"appointment",children:"Book Appointment"})]})}),e("div",{className:"form-group",children:e("textarea",{name:"message",placeholder:"Your Message*",required:!0})}),e("button",{type:"submit",className:"btn btn-primary btn-large btn-full",children:[e("i",{className:"fas fa-paper-plane"}),"Send Message"]})]})]})]})}),e("section",{className:"office-hours",children:[e("h2",{children:"Office Hours"}),e("div",{className:"hours-grid",children:[e("div",{className:"hours-item",children:[e("strong",{children:"Monday - Friday"}),e("span",{children:"9:00 AM - 7:00 PM GST"})]}),e("div",{className:"hours-item",children:[e("strong",{children:"Saturday"}),e("span",{children:"10:00 AM - 4:00 PM GST"})]}),e("div",{className:"hours-item",children:[e("strong",{children:"Sunday"}),e("span",{children:"Closed"})]})]})]})]})})));F.get("/blog",t=>t.render(e("div",{className:"blog-page",children:e("div",{className:"container",children:[e("section",{className:"blog-hero",children:[e("h1",{children:"Study Abroad Blog"}),e("p",{children:"Latest insights, tips, and updates for international students"})]}),e("section",{className:"blog-grid",children:[e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog1.jpg",alt:"IELTS Preparation Tips"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 15, 2024"}),e("span",{className:"blog-category",children:"Test Preparation"})]}),e("h2",{children:"10 Essential IELTS Preparation Tips for High Scores"}),e("p",{children:"Master the IELTS exam with these proven strategies and achieve your target band score for university admission..."}),e("a",{href:"/blog/ielts-preparation-tips",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog2.jpg",alt:"Scholarship Guide"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 10, 2024"}),e("span",{className:"blog-category",children:"Scholarships"})]}),e("h2",{children:"Complete Guide to International Scholarships for 2024"}),e("p",{children:"Discover available scholarships, application deadlines, and expert tips to secure funding for your studies abroad..."}),e("a",{href:"/blog/scholarship-guide-2024",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog3.jpg",alt:"Visa Interview Tips"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 5, 2024"}),e("span",{className:"blog-category",children:"Visa Support"})]}),e("h2",{children:"Ace Your Student Visa Interview: Common Questions & Answers"}),e("p",{children:"Prepare for your visa interview with confidence using these expert tips and practice questions..."}),e("a",{href:"/blog/visa-interview-tips",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog4.jpg",alt:"University Selection"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 28, 2024"}),e("span",{className:"blog-category",children:"University Selection"})]}),e("h2",{children:"How to Choose the Right University: A Complete Guide"}),e("p",{children:"Make informed decisions about your higher education with our comprehensive university selection guide..."}),e("a",{href:"/blog/university-selection-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog5.jpg",alt:"Canada Study Guide"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 20, 2024"}),e("span",{className:"blog-category",children:"Country Guide"})]}),e("h2",{children:"Why Canada is the Best Choice for International Students"}),e("p",{children:"Explore Canada's education system, work opportunities, and immigration pathways for international students..."}),e("a",{href:"/blog/study-in-canada-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog6.jpg",alt:"SOP Writing"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 15, 2024"}),e("span",{className:"blog-category",children:"Application Tips"})]}),e("h2",{children:"Writing a Winning Statement of Purpose (SOP)"}),e("p",{children:"Create a compelling SOP that stands out to admission committees with our step-by-step guide..."}),e("a",{href:"/blog/sop-writing-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]})]}),e("section",{className:"blog-categories",children:[e("h2",{children:"Browse by Category"}),e("div",{className:"categories-grid",children:[e("a",{href:"/blog/category/test-preparation",className:"category-card",children:[e("i",{className:"fas fa-book text-primary"}),e("h3",{children:"Test Preparation"}),e("p",{children:"IELTS, TOEFL, PTE, SAT, GRE guides"})]}),e("a",{href:"/blog/category/visa-support",className:"category-card",children:[e("i",{className:"fas fa-passport text-primary"}),e("h3",{children:"Visa Support"}),e("p",{children:"Student visa tips and guidelines"})]}),e("a",{href:"/blog/category/scholarships",className:"category-card",children:[e("i",{className:"fas fa-trophy text-accent"}),e("h3",{children:"Scholarships"}),e("p",{children:"Funding opportunities and tips"})]}),e("a",{href:"/blog/category/country-guides",className:"category-card",children:[e("i",{className:"fas fa-globe text-primary"}),e("h3",{children:"Country Guides"}),e("p",{children:"Study destination information"})]})]})]})]})})));F.get("/services/:service",t=>{const a=t.req.param("service"),i={visa:{title:"Study Visa Support",description:"Expert guidance for student visa applications with 99% success rate",content:`
        <h3>Comprehensive Visa Support Services</h3>
        <p>Our expert visa consultants provide end-to-end support for your student visa application, ensuring a smooth and successful process.</p>
        
        <div class="service-features">
          <h4>What We Offer:</h4>
          <ul>
            <li>Document preparation and review</li>
            <li>Application form assistance</li>
            <li>Interview preparation and mock sessions</li>
            <li>Financial documentation guidance</li>
            <li>Timeline management and tracking</li>
            <li>Post-visa services and support</li>
          </ul>
        </div>
        
        <div class="service-benefits">
          <h4>Why Choose Our Visa Services:</h4>
          <ul>
            <li>99% success rate across all countries</li>
            <li>Expert knowledge of visa requirements</li>
            <li>Personalized support throughout the process</li>
            <li>Quick turnaround time</li>
            <li>24/7 support during application period</li>
          </ul>
        </div>
      `},admissions:{title:"University Admissions",description:"Get admitted to top universities worldwide with our expert guidance",content:`
        <h3>University Admission Services</h3>
        <p>Our admission experts help you secure admission to your dream university with personalized guidance and proven strategies.</p>
        
        <div class="service-features">
          <h4>Our Admission Services Include:</h4>
          <ul>
            <li>University and course selection guidance</li>
            <li>Application preparation and submission</li>
            <li>Statement of Purpose (SOP) writing</li>
            <li>Letter of Recommendation assistance</li>
            <li>Portfolio development (for specific programs)</li>
            <li>Application tracking and follow-up</li>
          </ul>
        </div>
        
        <div class="service-stats">
          <h4>Our Success Record:</h4>
          <ul>
            <li>500+ partner universities worldwide</li>
            <li>95% admission success rate</li>
            <li>Students placed in top 100 universities</li>
            <li>Average processing time: 2-4 weeks</li>
          </ul>
        </div>
      `},scholarships:{title:"Scholarship Assistance",description:"Access exclusive scholarships and funding opportunities worth millions",content:`
        <h3>Scholarship and Financial Aid Services</h3>
        <p>Unlock funding opportunities and make your international education dreams affordable with our comprehensive scholarship assistance.</p>
        
        <div class="service-features">
          <h4>Scholarship Services:</h4>
          <ul>
            <li>Scholarship research and identification</li>
            <li>Application preparation and submission</li>
            <li>Essay and personal statement writing</li>
            <li>Merit-based scholarship guidance</li>
            <li>Need-based financial aid assistance</li>
            <li>University-specific scholarship applications</li>
          </ul>
        </div>
        
        <div class="scholarship-types">
          <h4>Types of Scholarships Available:</h4>
          <ul>
            <li>Merit-based scholarships (up to 100% tuition)</li>
            <li>Need-based financial aid</li>
            <li>Country-specific scholarships</li>
            <li>Subject-specific funding</li>
            <li>Research assistantships</li>
            <li>Sports and talent scholarships</li>
          </ul>
        </div>
      `},"test-prep":{title:"IELTS/PTE Preparation",description:"Achieve your target scores with our expert trainers and proven methods",content:`
        <h3>English Proficiency Test Preparation</h3>
        <p>Master IELTS, PTE, and TOEFL with our comprehensive preparation programs designed to help you achieve your target scores.</p>
        
        <div class="service-features">
          <h4>Our Test Prep Programs Include:</h4>
          <ul>
            <li>Diagnostic assessment and personalized study plan</li>
            <li>Live online and offline classes</li>
            <li>One-on-one tutoring sessions</li>
            <li>Mock tests and performance analysis</li>
            <li>Speaking practice sessions</li>
            <li>Writing feedback and improvement strategies</li>
          </ul>
        </div>
        
        <div class="test-formats">
          <h4>Tests We Prepare You For:</h4>
          <ul>
            <li>IELTS Academic (Speaking, Writing, Reading, Listening)</li>
            <li>PTE Academic (All modules)</li>
            <li>TOEFL iBT (Comprehensive preparation)</li>
            <li>Duolingo English Test</li>
          </ul>
        </div>
        
        <div class="success-stats">
          <h4>Our Success Rates:</h4>
          <ul>
            <li>Average score improvement: 1.5 bands</li>
            <li>95% students achieve target scores</li>
            <li>Flexible batch timings</li>
            <li>Money-back guarantee available</li>
          </ul>
        </div>
      `},counselling:{title:"Career Counselling",description:"Get personalized career guidance to choose the right path for your future",content:`
        <h3>Professional Career Counselling Services</h3>
        <p>Make informed decisions about your academic and career path with our expert counsellors who understand global education trends.</p>
        
        <div class="service-features">
          <h4>Our Counselling Services:</h4>
          <ul>
            <li>Career assessment and aptitude testing</li>
            <li>Course and university selection guidance</li>
            <li>Country selection based on career goals</li>
            <li>Industry trend analysis and job market insights</li>
            <li>Post-graduation career pathway planning</li>
            <li>Skills gap analysis and development recommendations</li>
          </ul>
        </div>
        
        <div class="counselling-process">
          <h4>Our Counselling Process:</h4>
          <ol>
            <li>Initial consultation and goal setting</li>
            <li>Comprehensive assessment and testing</li>
            <li>Detailed analysis and recommendations</li>
            <li>Action plan development</li>
            <li>Ongoing support and guidance</li>
          </ol>
        </div>
      `},"pre-departure":{title:"Pre-Departure Support",description:"Complete support for accommodation, travel, and settling in your destination",content:`
        <h3>Comprehensive Pre-Departure Services</h3>
        <p>Ensure a smooth transition to your new country with our complete pre-departure support services.</p>
        
        <div class="service-features">
          <h4>Pre-Departure Services Include:</h4>
          <ul>
            <li>Accommodation arrangement and booking</li>
            <li>Travel planning and flight booking assistance</li>
            <li>Airport pickup arrangements</li>
            <li>Bank account opening guidance</li>
            <li>Mobile connection and insurance setup</li>
            <li>Cultural orientation and country briefing</li>
          </ul>
        </div>
        
        <div class="orientation-topics">
          <h4>Orientation Program Covers:</h4>
          <ul>
            <li>Local culture and customs</li>
            <li>Transportation and navigation</li>
            <li>Healthcare system and emergency contacts</li>
            <li>Shopping and daily life essentials</li>
            <li>University campus and academic expectations</li>
            <li>Part-time work regulations and opportunities</li>
          </ul>
        </div>
        
        <div class="support-timeline">
          <h4>Support Timeline:</h4>
          <ul>
            <li>6 weeks before departure: Initial planning</li>
            <li>4 weeks before: Documentation and bookings</li>
            <li>2 weeks before: Final preparations and orientation</li>
            <li>Upon arrival: 30-day settling support</li>
          </ul>
        </div>
      `}},s=i[a]||i.visa;return t.render(e("div",{className:"service-page",children:e("div",{className:"container",children:[e("div",{className:"service-hero",children:[e("h1",{children:s.title}),e("p",{className:"hero-subtitle",children:s.description})]}),e("div",{className:"service-content",dangerouslySetInnerHTML:{__html:s.content}}),e("div",{className:"service-cta-section",children:[e("h2",{children:"Ready to Get Started?"}),e("p",{children:"Book your free consultation today and take the first step toward your study abroad journey."}),e("div",{className:"service-actions",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-outline btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat"]})]})]})]})}))});F.post("/api/lead",async t=>{try{const a=await t.req.json();console.log("New lead received:",a);const i={timestamp:new Date().toISOString(),firstName:a.firstName||"",lastName:a.lastName||"",email:a.email||"",phone:`${a.countryCode||""} ${a.phone||""}`.trim(),country:a.country||"",service:a.service||"",message:a.message||""},s=await Promise.allSettled([bs(i),Ns(i)]);return s.some(n=>n.status==="fulfilled")?t.json({success:!0,message:"Thank you! We have received your inquiry and will contact you within 24 hours."}):(s.forEach((n,l)=>{n.status==="rejected"&&console.error(`Integration ${l} failed:`,n.reason)}),t.json({success:!1,message:"Thank you for your interest. Please call us directly at +971-XX-XXX-XXXX for immediate assistance."}))}catch(a){return console.error("API Error:",a),t.json({success:!1,message:"Something went wrong. Please try again or contact us directly."},500)}});async function bs(t){try{const i=await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"addLead",data:t})});if(!i.ok)throw new Error(`Google Sheets API error: ${i.status}`);const s=await i.json();return console.log("Successfully added to Google Sheets:",s),s}catch(a){throw console.error("Google Sheets integration error:",a),a}}async function Ns(t){try{const a="https://api.emailjs.com/api/v1.0/email/send",i={service_id:"YOUR_SERVICE_ID",template_id:"YOUR_TEMPLATE_ID",user_id:"YOUR_USER_ID",template_params:{to_email:"info@scholarixstudy.com",from_name:`${t.firstName} ${t.lastName}`,reply_to:t.email,subject:"New SCHOLARIX Consultation Request",message:`
New consultation request received:

Name: ${t.firstName} ${t.lastName}
Email: ${t.email}
Phone: ${t.phone}
Preferred Country: ${t.country}
Service: ${t.service}
Message: ${t.message}

Submitted: ${new Date(t.timestamp).toLocaleString()}
        `}},s=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok)throw new Error(`Email service error: ${s.status}`);return console.log("Email notification sent successfully"),{success:!0}}catch(a){throw console.error("Email notification error:",a),a}}const Bt=new Ta,ws=Object.assign({"/src/index.tsx":F});let qa=!1;for(const[,t]of Object.entries(ws))t&&(Bt.all("*",a=>{let i;try{i=a.executionCtx}catch{}return t.fetch(a.req.raw,a.env,i)}),Bt.notFound(a=>{let i;try{i=a.executionCtx}catch{}return t.fetch(a.req.raw,a.env,i)}),qa=!0);if(!qa)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Bt as default};
