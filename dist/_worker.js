var _a=Object.defineProperty;var xt=t=>{throw TypeError(t)};var qa=(t,a,i)=>a in t?_a(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;var v=(t,a,i)=>qa(t,typeof a!="symbol"?a+"":a,i),it=(t,a,i)=>a.has(t)||xt("Cannot "+i);var h=(t,a,i)=>(it(t,a,"read from private field"),i?i.call(t):a.get(t)),S=(t,a,i)=>a.has(t)?xt("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,i),b=(t,a,i,s)=>(it(t,a,"write to private field"),s?s.call(t,i):a.set(t,i),i),C=(t,a,i)=>(it(t,a,"access private method"),i);var At=(t,a,i,s)=>({set _(n){b(t,a,n,i)},get _(){return h(t,a,s)}});var ta={Stringify:1},j=(t,a)=>{const i=new String(t);return i.isEscaped=!0,i.callbacks=a,i},Ga=/[&<>'"]/,aa=async(t,a)=>{let i="";a||(a=[]);const s=await Promise.all(t);for(let n=s.length-1;i+=s[n],n--,!(n<0);n--){let r=s[n];typeof r=="object"&&a.push(...r.callbacks||[]);const l=r.isEscaped;if(r=await(typeof r=="object"?r.toString():r),typeof r=="object"&&a.push(...r.callbacks||[]),r.isEscaped??l)i+=r;else{const c=[i];te(r,c),i=c[0]}}return j(i,a)},te=(t,a)=>{const i=t.search(Ga);if(i===-1){a[0]+=t;return}let s,n,r=0;for(n=i;n<t.length;n++){switch(t.charCodeAt(n)){case 34:s="&quot;";break;case 39:s="&#39;";break;case 38:s="&amp;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}a[0]+=t.substring(r,n)+s,r=n+1}a[0]+=t.substring(r,n)},ia=t=>{const a=t.callbacks;if(!(a!=null&&a.length))return t;const i=[t],s={};return a.forEach(n=>n({phase:ta.Stringify,buffer:i,context:s})),i[0]},sa=async(t,a,i,s,n)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const r=t.callbacks;return r!=null&&r.length?(n?n[0]+=t:n=[t],Promise.all(r.map(c=>c({phase:a,buffer:n,context:s}))).then(c=>Promise.all(c.filter(Boolean).map(o=>sa(o,a,!1,s,n))).then(()=>n[0]))):Promise.resolve(t)},Ua=(t,...a)=>{const i=[""];for(let s=0,n=t.length-1;s<n;s++){i[0]+=t[s];const r=Array.isArray(a[s])?a[s].flat(1/0):[a[s]];for(let l=0,c=r.length;l<c;l++){const o=r[l];if(typeof o=="string")te(o,i);else if(typeof o=="number")i[0]+=o;else{if(typeof o=="boolean"||o===null||o===void 0)continue;if(typeof o=="object"&&o.isEscaped)if(o.callbacks)i.unshift("",o);else{const d=o.toString();d instanceof Promise?i.unshift("",d):i[0]+=d}else o instanceof Promise?i.unshift("",o):te(o.toString(),i)}}}return i[0]+=t.at(-1),i.length===1?"callbacks"in i?j(ia(j(i[0],i.callbacks))):j(i[0]):aa(i,i.callbacks)},Nt=Symbol("RENDERER"),mt=Symbol("ERROR_HANDLER"),A=Symbol("STASH"),na=Symbol("INTERNAL"),Va=Symbol("MEMO"),Je=Symbol("PERMALINK"),Tt=t=>(t[na]=!0,t),ra=t=>({value:a,children:i})=>{if(!i)return;const s={children:[{tag:Tt(()=>{t.push(a)}),props:{}}]};Array.isArray(i)?s.children.push(...i.flat()):s.children.push(i),s.children.push({tag:Tt(()=>{t.pop()}),props:{}});const n={tag:"",props:s,type:""};return n[mt]=r=>{throw t.pop(),r},n},la=t=>{const a=[t],i=ra(a);return i.values=a,i.Provider=i,we.push(i),i},we=[],bt=t=>{const a=[t],i=s=>{a.push(s.value);let n;try{n=s.children?(Array.isArray(s.children)?new ha("",{},s.children):s.children).toString():""}finally{a.pop()}return n instanceof Promise?n.then(r=>j(r,r.callbacks)):j(n)};return i.values=a,i.Provider=i,i[Nt]=ra(a),we.push(i),i},Ee=t=>t.values.at(-1),Ge={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},ft={},Ue="data-precedence",Be=t=>Array.isArray(t)?t:[t],Mt=new WeakMap,Pt=(t,a,i,s)=>({buffer:n,context:r})=>{if(!n)return;const l=Mt.get(r)||{};Mt.set(r,l);const c=l[t]||(l[t]=[]);let o=!1;const d=Ge[t];if(d.length>0){e:for(const[,u]of c)for(const m of d)if(((u==null?void 0:u[m])??null)===(i==null?void 0:i[m])){o=!0;break e}}if(o?n[0]=n[0].replaceAll(a,""):d.length>0?c.push([a,i,s]):c.unshift([a,i,s]),n[0].indexOf("</head>")!==-1){let u;if(s===void 0)u=c.map(([m])=>m);else{const m=[];u=c.map(([f,,g])=>{let N=m.indexOf(g);return N===-1&&(m.push(g),N=m.length-1),[f,N]}).sort((f,g)=>f[1]-g[1]).map(([f])=>f)}u.forEach(m=>{n[0]=n[0].replaceAll(m,"")}),n[0]=n[0].replace(/(?=<\/head>)/,u.join(""))}},He=(t,a,i)=>j(new $(t,i,Be(a??[])).toString()),$e=(t,a,i,s)=>{if("itemProp"in i)return He(t,a,i);let{precedence:n,blocking:r,...l}=i;n=s?n??"":void 0,s&&(l[Ue]=n);const c=new $(t,l,Be(a||[])).toString();return c instanceof Promise?c.then(o=>j(c,[...o.callbacks||[],Pt(t,o,l,n)])):j(c,[Pt(t,c,l,n)])},za=({children:t,...a})=>{const i=wt();if(i){const s=Ee(i);if(s==="svg"||s==="head")return new $("title",a,Be(t??[]))}return $e("title",t,a,!1)},Wa=({children:t,...a})=>{const i=wt();return["src","async"].some(s=>!a[s])||i&&Ee(i)==="head"?He("script",t,a):$e("script",t,a,!1)},Xa=({children:t,...a})=>["href","precedence"].every(i=>i in a)?(a["data-href"]=a.href,delete a.href,$e("style",t,a,!0)):He("style",t,a),Ka=({children:t,...a})=>["onLoad","onError"].some(i=>i in a)||a.rel==="stylesheet"&&(!("precedence"in a)||"disabled"in a)?He("link",t,a):$e("link",t,a,"precedence"in a),Ya=({children:t,...a})=>{const i=wt();return i&&Ee(i)==="head"?He("meta",t,a):$e("meta",t,a,!1)},ca=(t,{children:a,...i})=>new $(t,i,Be(a??[])),Ja=t=>(typeof t.action=="function"&&(t.action=Je in t.action?t.action[Je]:void 0),ca("form",t)),oa=(t,a)=>(typeof a.formAction=="function"&&(a.formAction=Je in a.formAction?a.formAction[Je]:void 0),ca(t,a)),Za=t=>oa("input",t),Qa=t=>oa("button",t);const st=Object.freeze(Object.defineProperty({__proto__:null,button:Qa,form:Ja,input:Za,link:Ka,meta:Ya,script:Wa,style:Xa,title:za},Symbol.toStringTag,{value:"Module"}));var ei=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),Ze=t=>ei.get(t)||t,da=(t,a)=>{for(const[i,s]of Object.entries(t)){const n=i[0]==="-"||!/[A-Z]/.test(i)?i:i.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`);a(n,s==null?null:typeof s=="number"?n.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${s}`:`${s}px`:s)}},Te=void 0,wt=()=>Te,ti=t=>/[A-Z]/.test(t)&&t.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,ai=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],ii=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],St=(t,a)=>{for(let i=0,s=t.length;i<s;i++){const n=t[i];if(typeof n=="string")te(n,a);else{if(typeof n=="boolean"||n===null||n===void 0)continue;n instanceof $?n.toStringToBuffer(a):typeof n=="number"||n.isEscaped?a[0]+=n:n instanceof Promise?a.unshift("",n):St(n,a)}}},$=class{constructor(t,a,i){v(this,"tag");v(this,"props");v(this,"key");v(this,"children");v(this,"isEscaped",!0);v(this,"localContexts");this.tag=t,this.props=a,this.children=i}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var a,i;const t=[""];(a=this.localContexts)==null||a.forEach(([s,n])=>{s.values.push(n)});try{this.toStringToBuffer(t)}finally{(i=this.localContexts)==null||i.forEach(([s])=>{s.values.pop()})}return t.length===1?"callbacks"in t?ia(j(t[0],t.callbacks)).toString():t[0]:aa(t,t.callbacks)}toStringToBuffer(t){const a=this.tag,i=this.props;let{children:s}=this;t[0]+=`<${a}`;const n=Te&&Ee(Te)==="svg"?r=>ti(Ze(r)):r=>Ze(r);for(let[r,l]of Object.entries(i))if(r=n(r),r!=="children"){if(r==="style"&&typeof l=="object"){let c="";da(l,(o,d)=>{d!=null&&(c+=`${c?";":""}${o}:${d}`)}),t[0]+=' style="',te(c,t),t[0]+='"'}else if(typeof l=="string")t[0]+=` ${r}="`,te(l,t),t[0]+='"';else if(l!=null)if(typeof l=="number"||l.isEscaped)t[0]+=` ${r}="${l}"`;else if(typeof l=="boolean"&&ii.includes(r))l&&(t[0]+=` ${r}=""`);else if(r==="dangerouslySetInnerHTML"){if(s.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");s=[j(l.__html)]}else if(l instanceof Promise)t[0]+=` ${r}="`,t.unshift('"',l);else if(typeof l=="function"){if(!r.startsWith("on")&&r!=="ref")throw new Error(`Invalid prop '${r}' of type 'function' supplied to '${a}'.`)}else t[0]+=` ${r}="`,te(l.toString(),t),t[0]+='"'}if(ai.includes(a)&&s.length===0){t[0]+="/>";return}t[0]+=">",St(s,t),t[0]+=`</${a}>`}},nt=class extends ${toStringToBuffer(t){const{children:a}=this,i=this.tag.call(null,{...this.props,children:a.length<=1?a[0]:a});if(!(typeof i=="boolean"||i==null))if(i instanceof Promise)if(we.length===0)t.unshift("",i);else{const s=we.map(n=>[n,n.values.at(-1)]);t.unshift("",i.then(n=>(n instanceof $&&(n.localContexts=s),n)))}else i instanceof $?i.toStringToBuffer(t):typeof i=="number"||i.isEscaped?(t[0]+=i,i.callbacks&&(t.callbacks||(t.callbacks=[]),t.callbacks.push(...i.callbacks))):te(i,t)}},ha=class extends ${toStringToBuffer(t){St(this.children,t)}},Rt=(t,a,...i)=>{a??(a={}),i.length&&(a.children=i.length===1?i[0]:i);const s=a.key;delete a.key;const n=Ve(t,a,i);return n.key=s,n},Lt=!1,Ve=(t,a,i)=>{if(!Lt){for(const s in ft)st[s][Nt]=ft[s];Lt=!0}return typeof t=="function"?new nt(t,a,i):st[t]?new nt(st[t],a,i):t==="svg"||t==="head"?(Te||(Te=bt("")),new $(t,a,[new nt(Te,{value:t},i)])):new $(t,a,i)},si=({children:t})=>new ha("",{children:t},Array.isArray(t)?t:t?[t]:[]);function e(t,a,i){let s;if(!a||!("children"in a))s=Ve(t,a,[]);else{const n=a.children;s=Array.isArray(n)?Ve(t,a,n):Ve(t,a,[n])}return s.key=i,s}var It=(t,a,i)=>(s,n)=>{let r=-1;return l(0);async function l(c){if(c<=r)throw new Error("next() called multiple times");r=c;let o,d=!1,u;if(t[c]?(u=t[c][0][0],s.req.routeIndex=c):u=c===t.length&&n||void 0,u)try{o=await u(s,()=>l(c+1))}catch(m){if(m instanceof Error&&a)s.error=m,o=await a(m,s),d=!0;else throw m}else s.finalized===!1&&i&&(o=await i(s));return o&&(s.finalized===!1||d)&&(s.res=o),s}},ni=Symbol(),ri=async(t,a=Object.create(null))=>{const{all:i=!1,dot:s=!1}=a,r=(t instanceof va?t.raw.headers:t.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?li(t,{all:i,dot:s}):{}};async function li(t,a){const i=await t.formData();return i?ci(i,a):{}}function ci(t,a){const i=Object.create(null);return t.forEach((s,n)=>{a.all||n.endsWith("[]")?oi(i,n,s):i[n]=s}),a.dot&&Object.entries(i).forEach(([s,n])=>{s.includes(".")&&(di(i,s,n),delete i[s])}),i}var oi=(t,a,i)=>{t[a]!==void 0?Array.isArray(t[a])?t[a].push(i):t[a]=[t[a],i]:a.endsWith("[]")?t[a]=[i]:t[a]=i},di=(t,a,i)=>{let s=t;const n=a.split(".");n.forEach((r,l)=>{l===n.length-1?s[r]=i:((!s[r]||typeof s[r]!="object"||Array.isArray(s[r])||s[r]instanceof File)&&(s[r]=Object.create(null)),s=s[r])})},ua=t=>{const a=t.split("/");return a[0]===""&&a.shift(),a},hi=t=>{const{groups:a,path:i}=ui(t),s=ua(i);return mi(s,a)},ui=t=>{const a=[];return t=t.replace(/\{[^}]+\}/g,(i,s)=>{const n=`@${s}`;return a.push([n,i]),n}),{groups:a,path:t}},mi=(t,a)=>{for(let i=a.length-1;i>=0;i--){const[s]=a[i];for(let n=t.length-1;n>=0;n--)if(t[n].includes(s)){t[n]=t[n].replace(s,a[i][1]);break}}return t},_e={},fi=(t,a)=>{if(t==="*")return"*";const i=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(i){const s=`${t}#${a}`;return _e[s]||(i[2]?_e[s]=a&&a[0]!==":"&&a[0]!=="*"?[s,i[1],new RegExp(`^${i[2]}(?=/${a})`)]:[t,i[1],new RegExp(`^${i[2]}$`)]:_e[s]=[t,i[1],!0]),_e[s]}return null},Et=(t,a)=>{try{return a(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,i=>{try{return a(i)}catch{return i}})}},pi=t=>Et(t,decodeURI),ma=t=>{const a=t.url,i=a.indexOf("/",a.indexOf(":")+4);let s=i;for(;s<a.length;s++){const n=a.charCodeAt(s);if(n===37){const r=a.indexOf("?",s),l=a.slice(i,r===-1?void 0:r);return pi(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(n===63)break}return a.slice(i,s)},gi=t=>{const a=ma(t);return a.length>1&&a.at(-1)==="/"?a.slice(0,-1):a},me=(t,a,...i)=>(i.length&&(a=me(a,...i)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${a==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(a==null?void 0:a[0])==="/"?a.slice(1):a}`}`),fa=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const a=t.split("/"),i=[];let s="";return a.forEach(n=>{if(n!==""&&!/\:/.test(n))s+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){i.length===0&&s===""?i.push("/"):i.push(s);const r=n.replace("?","");s+="/"+r,i.push(s)}else s+="/"+n}),i.filter((n,r,l)=>l.indexOf(n)===r)},rt=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?Et(t,ga):t):t,pa=(t,a,i)=>{let s;if(!i&&a&&!/[%+]/.test(a)){let l=t.indexOf(`?${a}`,8);for(l===-1&&(l=t.indexOf(`&${a}`,8));l!==-1;){const c=t.charCodeAt(l+a.length+1);if(c===61){const o=l+a.length+2,d=t.indexOf("&",o);return rt(t.slice(o,d===-1?void 0:d))}else if(c==38||isNaN(c))return"";l=t.indexOf(`&${a}`,l+1)}if(s=/[%+]/.test(t),!s)return}const n={};s??(s=/[%+]/.test(t));let r=t.indexOf("?",8);for(;r!==-1;){const l=t.indexOf("&",r+1);let c=t.indexOf("=",r);c>l&&l!==-1&&(c=-1);let o=t.slice(r+1,c===-1?l===-1?void 0:l:c);if(s&&(o=rt(o)),r=l,o==="")continue;let d;c===-1?d="":(d=t.slice(c+1,l===-1?void 0:l),s&&(d=rt(d))),i?(n[o]&&Array.isArray(n[o])||(n[o]=[]),n[o].push(d)):n[o]??(n[o]=d)}return a?n[a]:n},vi=pa,yi=(t,a)=>pa(t,a,!0),ga=decodeURIComponent,Ot=t=>Et(t,ga),ge,O,W,ya,Na,pt,K,zt,va=(zt=class{constructor(t,a="/",i=[[]]){S(this,W);v(this,"raw");S(this,ge);S(this,O);v(this,"routeIndex",0);v(this,"path");v(this,"bodyCache",{});S(this,K,t=>{const{bodyCache:a,raw:i}=this,s=a[t];if(s)return s;const n=Object.keys(a)[0];return n?a[n].then(r=>(n==="json"&&(r=JSON.stringify(r)),new Response(r)[t]())):a[t]=i[t]()});this.raw=t,this.path=a,b(this,O,i),b(this,ge,{})}param(t){return t?C(this,W,ya).call(this,t):C(this,W,Na).call(this)}query(t){return vi(this.url,t)}queries(t){return yi(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const a={};return this.raw.headers.forEach((i,s)=>{a[s]=i}),a}async parseBody(t){var a;return(a=this.bodyCache).parsedBody??(a.parsedBody=await ri(this,t))}json(){return h(this,K).call(this,"text").then(t=>JSON.parse(t))}text(){return h(this,K).call(this,"text")}arrayBuffer(){return h(this,K).call(this,"arrayBuffer")}blob(){return h(this,K).call(this,"blob")}formData(){return h(this,K).call(this,"formData")}addValidatedData(t,a){h(this,ge)[t]=a}valid(t){return h(this,ge)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[ni](){return h(this,O)}get matchedRoutes(){return h(this,O)[0].map(([[,t]])=>t)}get routePath(){return h(this,O)[0].map(([[,t]])=>t)[this.routeIndex].path}},ge=new WeakMap,O=new WeakMap,W=new WeakSet,ya=function(t){const a=h(this,O)[0][this.routeIndex][1][t],i=C(this,W,pt).call(this,a);return i&&/\%/.test(i)?Ot(i):i},Na=function(){const t={},a=Object.keys(h(this,O)[0][this.routeIndex][1]);for(const i of a){const s=C(this,W,pt).call(this,h(this,O)[0][this.routeIndex][1][i]);s!==void 0&&(t[i]=/\%/.test(s)?Ot(s):s)}return t},pt=function(t){return h(this,O)[1]?h(this,O)[1][t]:t},K=new WeakMap,zt),Ni="text/plain; charset=UTF-8",lt=(t,a)=>({"Content-Type":t,...a}),Re,Le,G,ve,U,I,Ie,ye,Ne,ne,Oe,je,Y,fe,Wt,bi=(Wt=class{constructor(t,a){S(this,Y);S(this,Re);S(this,Le);v(this,"env",{});S(this,G);v(this,"finalized",!1);v(this,"error");S(this,ve);S(this,U);S(this,I);S(this,Ie);S(this,ye);S(this,Ne);S(this,ne);S(this,Oe);S(this,je);v(this,"render",(...t)=>(h(this,ye)??b(this,ye,a=>this.html(a)),h(this,ye).call(this,...t)));v(this,"setLayout",t=>b(this,Ie,t));v(this,"getLayout",()=>h(this,Ie));v(this,"setRenderer",t=>{b(this,ye,t)});v(this,"header",(t,a,i)=>{this.finalized&&b(this,I,new Response(h(this,I).body,h(this,I)));const s=h(this,I)?h(this,I).headers:h(this,ne)??b(this,ne,new Headers);a===void 0?s.delete(t):i!=null&&i.append?s.append(t,a):s.set(t,a)});v(this,"status",t=>{b(this,ve,t)});v(this,"set",(t,a)=>{h(this,G)??b(this,G,new Map),h(this,G).set(t,a)});v(this,"get",t=>h(this,G)?h(this,G).get(t):void 0);v(this,"newResponse",(...t)=>C(this,Y,fe).call(this,...t));v(this,"body",(t,a,i)=>C(this,Y,fe).call(this,t,a,i));v(this,"text",(t,a,i)=>!h(this,ne)&&!h(this,ve)&&!a&&!i&&!this.finalized?new Response(t):C(this,Y,fe).call(this,t,a,lt(Ni,i)));v(this,"json",(t,a,i)=>C(this,Y,fe).call(this,JSON.stringify(t),a,lt("application/json",i)));v(this,"html",(t,a,i)=>{const s=n=>C(this,Y,fe).call(this,n,a,lt("text/html; charset=UTF-8",i));return typeof t=="object"?sa(t,ta.Stringify,!1,{}).then(s):s(t)});v(this,"redirect",(t,a)=>{const i=String(t);return this.header("Location",/[^\x00-\xFF]/.test(i)?encodeURI(i):i),this.newResponse(null,a??302)});v(this,"notFound",()=>(h(this,Ne)??b(this,Ne,()=>new Response),h(this,Ne).call(this,this)));b(this,Re,t),a&&(b(this,U,a.executionCtx),this.env=a.env,b(this,Ne,a.notFoundHandler),b(this,je,a.path),b(this,Oe,a.matchResult))}get req(){return h(this,Le)??b(this,Le,new va(h(this,Re),h(this,je),h(this,Oe))),h(this,Le)}get event(){if(h(this,U)&&"respondWith"in h(this,U))return h(this,U);throw Error("This context has no FetchEvent")}get executionCtx(){if(h(this,U))return h(this,U);throw Error("This context has no ExecutionContext")}get res(){return h(this,I)||b(this,I,new Response(null,{headers:h(this,ne)??b(this,ne,new Headers)}))}set res(t){if(h(this,I)&&t){t=new Response(t.body,t);for(const[a,i]of h(this,I).headers.entries())if(a!=="content-type")if(a==="set-cookie"){const s=h(this,I).headers.getSetCookie();t.headers.delete("set-cookie");for(const n of s)t.headers.append("set-cookie",n)}else t.headers.set(a,i)}b(this,I,t),this.finalized=!0}get var(){return h(this,G)?Object.fromEntries(h(this,G)):{}}},Re=new WeakMap,Le=new WeakMap,G=new WeakMap,ve=new WeakMap,U=new WeakMap,I=new WeakMap,Ie=new WeakMap,ye=new WeakMap,Ne=new WeakMap,ne=new WeakMap,Oe=new WeakMap,je=new WeakMap,Y=new WeakSet,fe=function(t,a,i){const s=h(this,I)?new Headers(h(this,I).headers):h(this,ne)??new Headers;if(typeof a=="object"&&"headers"in a){const r=a.headers instanceof Headers?a.headers:new Headers(a.headers);for(const[l,c]of r)l.toLowerCase()==="set-cookie"?s.append(l,c):s.set(l,c)}if(i)for(const[r,l]of Object.entries(i))if(typeof l=="string")s.set(r,l);else{s.delete(r);for(const c of l)s.append(r,c)}const n=typeof a=="number"?a:(a==null?void 0:a.status)??h(this,ve);return new Response(t,{status:n,headers:s})},Wt),T="ALL",wi="all",Si=["get","post","put","delete","options","patch"],ba="Can not add a route since the matcher is already built.",wa=class extends Error{},Ei="__COMPOSED_HANDLER",ki=t=>t.text("404 Not Found",404),jt=(t,a)=>{if("getResponse"in t){const i=t.getResponse();return a.newResponse(i.body,i)}return console.error(t),a.text("Internal Server Error",500)},D,M,Ea,B,ie,ze,We,Xt,Sa=(Xt=class{constructor(a={}){S(this,M);v(this,"get");v(this,"post");v(this,"put");v(this,"delete");v(this,"options");v(this,"patch");v(this,"all");v(this,"on");v(this,"use");v(this,"router");v(this,"getPath");v(this,"_basePath","/");S(this,D,"/");v(this,"routes",[]);S(this,B,ki);v(this,"errorHandler",jt);v(this,"onError",a=>(this.errorHandler=a,this));v(this,"notFound",a=>(b(this,B,a),this));v(this,"fetch",(a,...i)=>C(this,M,We).call(this,a,i[1],i[0],a.method));v(this,"request",(a,i,s,n)=>a instanceof Request?this.fetch(i?new Request(a,i):a,s,n):(a=a.toString(),this.fetch(new Request(/^https?:\/\//.test(a)?a:`http://localhost${me("/",a)}`,i),s,n)));v(this,"fire",()=>{addEventListener("fetch",a=>{a.respondWith(C(this,M,We).call(this,a.request,a,void 0,a.request.method))})});[...Si,wi].forEach(r=>{this[r]=(l,...c)=>(typeof l=="string"?b(this,D,l):C(this,M,ie).call(this,r,h(this,D),l),c.forEach(o=>{C(this,M,ie).call(this,r,h(this,D),o)}),this)}),this.on=(r,l,...c)=>{for(const o of[l].flat()){b(this,D,o);for(const d of[r].flat())c.map(u=>{C(this,M,ie).call(this,d.toUpperCase(),h(this,D),u)})}return this},this.use=(r,...l)=>(typeof r=="string"?b(this,D,r):(b(this,D,"*"),l.unshift(r)),l.forEach(c=>{C(this,M,ie).call(this,T,h(this,D),c)}),this);const{strict:s,...n}=a;Object.assign(this,n),this.getPath=s??!0?a.getPath??ma:gi}route(a,i){const s=this.basePath(a);return i.routes.map(n=>{var l;let r;i.errorHandler===jt?r=n.handler:(r=async(c,o)=>(await It([],i.errorHandler)(c,()=>n.handler(c,o))).res,r[Ei]=n.handler),C(l=s,M,ie).call(l,n.method,n.path,r)}),this}basePath(a){const i=C(this,M,Ea).call(this);return i._basePath=me(this._basePath,a),i}mount(a,i,s){let n,r;s&&(typeof s=="function"?r=s:(r=s.optionHandler,s.replaceRequest===!1?n=o=>o:n=s.replaceRequest));const l=r?o=>{const d=r(o);return Array.isArray(d)?d:[d]}:o=>{let d;try{d=o.executionCtx}catch{}return[o.env,d]};n||(n=(()=>{const o=me(this._basePath,a),d=o==="/"?0:o.length;return u=>{const m=new URL(u.url);return m.pathname=m.pathname.slice(d)||"/",new Request(m,u)}})());const c=async(o,d)=>{const u=await i(n(o.req.raw),...l(o));if(u)return u;await d()};return C(this,M,ie).call(this,T,me(a,"*"),c),this}},D=new WeakMap,M=new WeakSet,Ea=function(){const a=new Sa({router:this.router,getPath:this.getPath});return a.errorHandler=this.errorHandler,b(a,B,h(this,B)),a.routes=this.routes,a},B=new WeakMap,ie=function(a,i,s){a=a.toUpperCase(),i=me(this._basePath,i);const n={basePath:this._basePath,path:i,method:a,handler:s};this.router.add(a,i,[s,n]),this.routes.push(n)},ze=function(a,i){if(a instanceof Error)return this.errorHandler(a,i);throw a},We=function(a,i,s,n){if(n==="HEAD")return(async()=>new Response(null,await C(this,M,We).call(this,a,i,s,"GET")))();const r=this.getPath(a,{env:s}),l=this.router.match(n,r),c=new bi(a,{path:r,matchResult:l,env:s,executionCtx:i,notFoundHandler:h(this,B)});if(l[0].length===1){let d;try{d=l[0][0][0][0](c,async()=>{c.res=await h(this,B).call(this,c)})}catch(u){return C(this,M,ze).call(this,u,c)}return d instanceof Promise?d.then(u=>u||(c.finalized?c.res:h(this,B).call(this,c))).catch(u=>C(this,M,ze).call(this,u,c)):d??h(this,B).call(this,c)}const o=It(l[0],this.errorHandler,h(this,B));return(async()=>{try{const d=await o(c);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return C(this,M,ze).call(this,d,c)}})()},Xt),ka=[],Ca=Symbol("buildAllMatchers");function Ci(t,a){const i=this[Ca](),s=(n,r)=>{const l=i[n]||i[T],c=l[2][r];if(c)return c;const o=r.match(l[0]);if(!o)return[[],ka];const d=o.indexOf("",1);return[l[1][d],o]};return this.match=s,s(t,a)}var Qe="[^/]+",xe=".*",Ae="(?:|/.*)",pe=Symbol(),xi=new Set(".\\+*[^]$()");function Ai(t,a){return t.length===1?a.length===1?t<a?-1:1:-1:a.length===1||t===xe||t===Ae?1:a===xe||a===Ae?-1:t===Qe?1:a===Qe?-1:t.length===a.length?t<a?-1:1:a.length-t.length}var re,le,H,Kt,gt=(Kt=class{constructor(){S(this,re);S(this,le);S(this,H,Object.create(null))}insert(a,i,s,n,r){if(a.length===0){if(h(this,re)!==void 0)throw pe;if(r)return;b(this,re,i);return}const[l,...c]=a,o=l==="*"?c.length===0?["","",xe]:["","",Qe]:l==="/*"?["","",Ae]:l.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(o){const u=o[1];let m=o[2]||Qe;if(u&&o[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))))throw pe;if(d=h(this,H)[m],!d){if(Object.keys(h(this,H)).some(f=>f!==xe&&f!==Ae))throw pe;if(r)return;d=h(this,H)[m]=new gt,u!==""&&b(d,le,n.varIndex++)}!r&&u!==""&&s.push([u,h(d,le)])}else if(d=h(this,H)[l],!d){if(Object.keys(h(this,H)).some(u=>u.length>1&&u!==xe&&u!==Ae))throw pe;if(r)return;d=h(this,H)[l]=new gt}d.insert(c,i,s,n,r)}buildRegExpStr(){const i=Object.keys(h(this,H)).sort(Ai).map(s=>{const n=h(this,H)[s];return(typeof h(n,le)=="number"?`(${s})@${h(n,le)}`:xi.has(s)?`\\${s}`:s)+n.buildRegExpStr()});return typeof h(this,re)=="number"&&i.unshift(`#${h(this,re)}`),i.length===0?"":i.length===1?i[0]:"(?:"+i.join("|")+")"}},re=new WeakMap,le=new WeakMap,H=new WeakMap,Kt),et,De,Yt,Ti=(Yt=class{constructor(){S(this,et,{varIndex:0});S(this,De,new gt)}insert(t,a,i){const s=[],n=[];for(let l=0;;){let c=!1;if(t=t.replace(/\{[^}]+\}/g,o=>{const d=`@\\${l}`;return n[l]=[d,o],l++,c=!0,d}),!c)break}const r=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let l=n.length-1;l>=0;l--){const[c]=n[l];for(let o=r.length-1;o>=0;o--)if(r[o].indexOf(c)!==-1){r[o]=r[o].replace(c,n[l][1]);break}}return h(this,De).insert(r,a,s,h(this,et),i),s}buildRegExp(){let t=h(this,De).buildRegExpStr();if(t==="")return[/^$/,[],[]];let a=0;const i=[],s=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,r,l)=>r!==void 0?(i[++a]=Number(r),"$()"):(l!==void 0&&(s[Number(l)]=++a),"")),[new RegExp(`^${t}`),i,s]}},et=new WeakMap,De=new WeakMap,Yt),Mi=[/^$/,[],Object.create(null)],Xe=Object.create(null);function xa(t){return Xe[t]??(Xe[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(a,i)=>i?`\\${i}`:"(?:|/.*)")}$`))}function Pi(){Xe=Object.create(null)}function Ri(t){var d;const a=new Ti,i=[];if(t.length===0)return Mi;const s=t.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,m],[f,g])=>u?1:f?-1:m.length-g.length),n=Object.create(null);for(let u=0,m=-1,f=s.length;u<f;u++){const[g,N,p]=s[u];g?n[N]=[p.map(([w])=>[w,Object.create(null)]),ka]:m++;let y;try{y=a.insert(N,m,g)}catch(w){throw w===pe?new wa(N):w}g||(i[m]=p.map(([w,E])=>{const x=Object.create(null);for(E-=1;E>=0;E--){const[k,R]=y[E];x[k]=R}return[w,x]}))}const[r,l,c]=a.buildRegExp();for(let u=0,m=i.length;u<m;u++)for(let f=0,g=i[u].length;f<g;f++){const N=(d=i[u][f])==null?void 0:d[1];if(!N)continue;const p=Object.keys(N);for(let y=0,w=p.length;y<w;y++)N[p[y]]=c[N[p[y]]]}const o=[];for(const u in l)o[u]=i[l[u]];return[r,o,n]}function he(t,a){if(t){for(const i of Object.keys(t).sort((s,n)=>n.length-s.length))if(xa(i).test(a))return[...t[i]]}}var J,Z,tt,Aa,Jt,Li=(Jt=class{constructor(){S(this,tt);v(this,"name","RegExpRouter");S(this,J);S(this,Z);v(this,"match",Ci);b(this,J,{[T]:Object.create(null)}),b(this,Z,{[T]:Object.create(null)})}add(t,a,i){var c;const s=h(this,J),n=h(this,Z);if(!s||!n)throw new Error(ba);s[t]||[s,n].forEach(o=>{o[t]=Object.create(null),Object.keys(o[T]).forEach(d=>{o[t][d]=[...o[T][d]]})}),a==="/*"&&(a="*");const r=(a.match(/\/:/g)||[]).length;if(/\*$/.test(a)){const o=xa(a);t===T?Object.keys(s).forEach(d=>{var u;(u=s[d])[a]||(u[a]=he(s[d],a)||he(s[T],a)||[])}):(c=s[t])[a]||(c[a]=he(s[t],a)||he(s[T],a)||[]),Object.keys(s).forEach(d=>{(t===T||t===d)&&Object.keys(s[d]).forEach(u=>{o.test(u)&&s[d][u].push([i,r])})}),Object.keys(n).forEach(d=>{(t===T||t===d)&&Object.keys(n[d]).forEach(u=>o.test(u)&&n[d][u].push([i,r]))});return}const l=fa(a)||[a];for(let o=0,d=l.length;o<d;o++){const u=l[o];Object.keys(n).forEach(m=>{var f;(t===T||t===m)&&((f=n[m])[u]||(f[u]=[...he(s[m],u)||he(s[T],u)||[]]),n[m][u].push([i,r-d+o+1]))})}}[Ca](){const t=Object.create(null);return Object.keys(h(this,Z)).concat(Object.keys(h(this,J))).forEach(a=>{t[a]||(t[a]=C(this,tt,Aa).call(this,a))}),b(this,J,b(this,Z,void 0)),Pi(),t}},J=new WeakMap,Z=new WeakMap,tt=new WeakSet,Aa=function(t){const a=[];let i=t===T;return[h(this,J),h(this,Z)].forEach(s=>{const n=s[t]?Object.keys(s[t]).map(r=>[r,s[t][r]]):[];n.length!==0?(i||(i=!0),a.push(...n)):t!==T&&a.push(...Object.keys(s[T]).map(r=>[r,s[T][r]]))}),i?Ri(a):null},Jt),Q,V,Zt,Ii=(Zt=class{constructor(t){v(this,"name","SmartRouter");S(this,Q,[]);S(this,V,[]);b(this,Q,t.routers)}add(t,a,i){if(!h(this,V))throw new Error(ba);h(this,V).push([t,a,i])}match(t,a){if(!h(this,V))throw new Error("Fatal error");const i=h(this,Q),s=h(this,V),n=i.length;let r=0,l;for(;r<n;r++){const c=i[r];try{for(let o=0,d=s.length;o<d;o++)c.add(...s[o]);l=c.match(t,a)}catch(o){if(o instanceof wa)continue;throw o}this.match=c.match.bind(c),b(this,Q,[c]),b(this,V,void 0);break}if(r===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,l}get activeRouter(){if(h(this,V)||h(this,Q).length!==1)throw new Error("No active router has been determined yet.");return h(this,Q)[0]}},Q=new WeakMap,V=new WeakMap,Zt),ke=Object.create(null),ee,L,ce,be,P,z,se,Qt,Ta=(Qt=class{constructor(t,a,i){S(this,z);S(this,ee);S(this,L);S(this,ce);S(this,be,0);S(this,P,ke);if(b(this,L,i||Object.create(null)),b(this,ee,[]),t&&a){const s=Object.create(null);s[t]={handler:a,possibleKeys:[],score:0},b(this,ee,[s])}b(this,ce,[])}insert(t,a,i){b(this,be,++At(this,be)._);let s=this;const n=hi(a),r=[];for(let l=0,c=n.length;l<c;l++){const o=n[l],d=n[l+1],u=fi(o,d),m=Array.isArray(u)?u[0]:o;if(m in h(s,L)){s=h(s,L)[m],u&&r.push(u[1]);continue}h(s,L)[m]=new Ta,u&&(h(s,ce).push(u),r.push(u[1])),s=h(s,L)[m]}return h(s,ee).push({[t]:{handler:i,possibleKeys:r.filter((l,c,o)=>o.indexOf(l)===c),score:h(this,be)}}),s}search(t,a){var c;const i=[];b(this,P,ke);let n=[this];const r=ua(a),l=[];for(let o=0,d=r.length;o<d;o++){const u=r[o],m=o===d-1,f=[];for(let g=0,N=n.length;g<N;g++){const p=n[g],y=h(p,L)[u];y&&(b(y,P,h(p,P)),m?(h(y,L)["*"]&&i.push(...C(this,z,se).call(this,h(y,L)["*"],t,h(p,P))),i.push(...C(this,z,se).call(this,y,t,h(p,P)))):f.push(y));for(let w=0,E=h(p,ce).length;w<E;w++){const x=h(p,ce)[w],k=h(p,P)===ke?{}:{...h(p,P)};if(x==="*"){const X=h(p,L)["*"];X&&(i.push(...C(this,z,se).call(this,X,t,h(p,P))),b(X,P,k),f.push(X));continue}const[R,de,ae]=x;if(!u&&!(ae instanceof RegExp))continue;const _=h(p,L)[R],Fa=r.slice(o).join("/");if(ae instanceof RegExp){const X=ae.exec(Fa);if(X){if(k[de]=X[0],i.push(...C(this,z,se).call(this,_,t,h(p,P),k)),Object.keys(h(_,L)).length){b(_,P,k);const at=((c=X[0].match(/\//))==null?void 0:c.length)??0;(l[at]||(l[at]=[])).push(_)}continue}}(ae===!0||ae.test(u))&&(k[de]=u,m?(i.push(...C(this,z,se).call(this,_,t,k,h(p,P))),h(_,L)["*"]&&i.push(...C(this,z,se).call(this,h(_,L)["*"],t,k,h(p,P)))):(b(_,P,k),f.push(_)))}}n=f.concat(l.shift()??[])}return i.length>1&&i.sort((o,d)=>o.score-d.score),[i.map(({handler:o,params:d})=>[o,d])]}},ee=new WeakMap,L=new WeakMap,ce=new WeakMap,be=new WeakMap,P=new WeakMap,z=new WeakSet,se=function(t,a,i,s){const n=[];for(let r=0,l=h(t,ee).length;r<l;r++){const c=h(t,ee)[r],o=c[a]||c[T],d={};if(o!==void 0&&(o.params=Object.create(null),n.push(o),i!==ke||s&&s!==ke))for(let u=0,m=o.possibleKeys.length;u<m;u++){const f=o.possibleKeys[u],g=d[o.score];o.params[f]=s!=null&&s[f]&&!g?s[f]:i[f]??(s==null?void 0:s[f]),d[o.score]=!0}}return n},Qt),oe,ea,Oi=(ea=class{constructor(){v(this,"name","TrieRouter");S(this,oe);b(this,oe,new Ta)}add(t,a,i){const s=fa(a);if(s){for(let n=0,r=s.length;n<r;n++)h(this,oe).insert(t,s[n],i);return}h(this,oe).insert(t,a,i)}match(t,a){return h(this,oe).search(t,a)}},oe=new WeakMap,ea),Ma=class extends Sa{constructor(t={}){super(t),this.router=t.router??new Ii({routers:[new Li,new Oi]})}},ji=t=>{const i={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},s=(r=>typeof r=="string"?r==="*"?()=>r:l=>r===l?l:null:typeof r=="function"?r:l=>r.includes(l)?l:null)(i.origin),n=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(i.allowMethods);return async function(l,c){var u;function o(m,f){l.res.headers.set(m,f)}const d=await s(l.req.header("origin")||"",l);if(d&&o("Access-Control-Allow-Origin",d),i.origin!=="*"){const m=l.req.header("Vary");m?o("Vary",m):o("Vary","Origin")}if(i.credentials&&o("Access-Control-Allow-Credentials","true"),(u=i.exposeHeaders)!=null&&u.length&&o("Access-Control-Expose-Headers",i.exposeHeaders.join(",")),l.req.method==="OPTIONS"){i.maxAge!=null&&o("Access-Control-Max-Age",i.maxAge.toString());const m=await n(l.req.header("origin")||"",l);m.length&&o("Access-Control-Allow-Methods",m.join(","));let f=i.allowHeaders;if(!(f!=null&&f.length)){const g=l.req.header("Access-Control-Request-Headers");g&&(f=g.split(/\s*,\s*/))}return f!=null&&f.length&&(o("Access-Control-Allow-Headers",f.join(",")),l.res.headers.append("Vary","Access-Control-Request-Headers")),l.res.headers.delete("Content-Length"),l.res.headers.delete("Content-Type"),new Response(null,{headers:l.res.headers,status:204,statusText:"No Content"})}await c()}},Di=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Dt=(t,a=Hi)=>{const i=/\.([a-zA-Z0-9]+?)$/,s=t.match(i);if(!s)return;let n=a[s[1]];return n&&n.startsWith("text")&&(n+="; charset=utf-8"),n},Bi={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},Hi=Bi,$i=(...t)=>{let a=t.filter(n=>n!=="").join("/");a=a.replace(new RegExp("(?<=\\/)\\/+","g"),"");const i=a.split("/"),s=[];for(const n of i)n===".."&&s.length>0&&s.at(-1)!==".."?s.pop():n!=="."&&s.push(n);return s.join("/")||"."},Pa={br:".br",zstd:".zst",gzip:".gz"},Fi=Object.keys(Pa),_i="index.html",qi=t=>{const a=t.root??"./",i=t.path,s=t.join??$i;return async(n,r)=>{var u,m,f,g;if(n.finalized)return r();let l;if(t.path)l=t.path;else try{if(l=decodeURIComponent(n.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(l))throw new Error}catch{return await((u=t.onNotFound)==null?void 0:u.call(t,n.req.path,n)),r()}let c=s(a,!i&&t.rewriteRequestPath?t.rewriteRequestPath(l):l);t.isDir&&await t.isDir(c)&&(c=s(c,_i));const o=t.getContent;let d=await o(c,n);if(d instanceof Response)return n.newResponse(d.body,d);if(d){const N=t.mimes&&Dt(c,t.mimes)||Dt(c);if(n.header("Content-Type",N||"application/octet-stream"),t.precompressed&&(!N||Di.test(N))){const p=new Set((m=n.req.header("Accept-Encoding"))==null?void 0:m.split(",").map(y=>y.trim()));for(const y of Fi){if(!p.has(y))continue;const w=await o(c+Pa[y],n);if(w){d=w,n.header("Content-Encoding",y),n.header("Vary","Accept-Encoding",{append:!0});break}}}return await((f=t.onFound)==null?void 0:f.call(t,c,n)),n.body(d)}await((g=t.onNotFound)==null?void 0:g.call(t,c,n)),await r()}},Gi=async(t,a)=>{let i;a&&a.manifest?typeof a.manifest=="string"?i=JSON.parse(a.manifest):i=a.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?i=JSON.parse(__STATIC_CONTENT_MANIFEST):i=__STATIC_CONTENT_MANIFEST;let s;a&&a.namespace?s=a.namespace:s=__STATIC_CONTENT;const n=i[t]||t;if(!n)return null;const r=await s.get(n,{type:"stream"});return r||null},Ui=t=>async function(i,s){return qi({...t,getContent:async r=>Gi(r,{manifest:t.manifest,namespace:t.namespace?t.namespace:i.env?i.env.__STATIC_CONTENT:void 0})})(i,s)},Vi=t=>Ui(t),Me="_hp",zi={Change:"Input",DoubleClick:"DblClick"},Wi={svg:"2000/svg",math:"1998/Math/MathML"},Pe=[],vt=new WeakMap,Se=void 0,Xi=()=>Se,q=t=>"t"in t,ct={onClick:["click",!1]},Bt=t=>{if(!t.startsWith("on"))return;if(ct[t])return ct[t];const a=t.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(a){const[,i,s]=a;return ct[t]=[(zi[i]||i).toLowerCase(),!!s]}},Ht=(t,a)=>Se&&t instanceof SVGElement&&/[A-Z]/.test(a)&&(a in t.style||a.match(/^(?:o|pai|str|u|ve)/))?a.replace(/([A-Z])/g,"-$1").toLowerCase():a,Ki=(t,a,i)=>{var s;a||(a={});for(let n in a){const r=a[n];if(n!=="children"&&(!i||i[n]!==r)){n=Ze(n);const l=Bt(n);if(l){if((i==null?void 0:i[n])!==r&&(i&&t.removeEventListener(l[0],i[n],l[1]),r!=null)){if(typeof r!="function")throw new Error(`Event handler for "${n}" is not a function`);t.addEventListener(l[0],r,l[1])}}else if(n==="dangerouslySetInnerHTML"&&r)t.innerHTML=r.__html;else if(n==="ref"){let c;typeof r=="function"?c=r(t)||(()=>r(null)):r&&"current"in r&&(r.current=t,c=()=>r.current=null),vt.set(t,c)}else if(n==="style"){const c=t.style;typeof r=="string"?c.cssText=r:(c.cssText="",r!=null&&da(r,c.setProperty.bind(c)))}else{if(n==="value"){const o=t.nodeName;if(o==="INPUT"||o==="TEXTAREA"||o==="SELECT"){if(t.value=r==null||r===!1?null:r,o==="TEXTAREA"){t.textContent=r;continue}else if(o==="SELECT"){t.selectedIndex===-1&&(t.selectedIndex=0);continue}}}else(n==="checked"&&t.nodeName==="INPUT"||n==="selected"&&t.nodeName==="OPTION")&&(t[n]=r);const c=Ht(t,n);r==null||r===!1?t.removeAttribute(c):r===!0?t.setAttribute(c,""):typeof r=="string"||typeof r=="number"?t.setAttribute(c,r):t.setAttribute(c,r.toString())}}}if(i)for(let n in i){const r=i[n];if(n!=="children"&&!(n in a)){n=Ze(n);const l=Bt(n);l?t.removeEventListener(l[0],r,l[1]):n==="ref"?(s=vt.get(t))==null||s():t.removeAttribute(Ht(t,n))}}},Yi=(t,a)=>{a[A][0]=0,Pe.push([t,a]);const i=a.tag[Nt]||a.tag,s=i.defaultProps?{...i.defaultProps,...a.props}:a.props;try{return[i.call(null,s)]}finally{Pe.pop()}},Ra=(t,a,i,s,n)=>{var r,l;(r=t.vR)!=null&&r.length&&(s.push(...t.vR),delete t.vR),typeof t.tag=="function"&&((l=t[A][1][ja])==null||l.forEach(c=>n.push(c))),t.vC.forEach(c=>{var o;if(q(c))i.push(c);else if(typeof c.tag=="function"||c.tag===""){c.c=a;const d=i.length;if(Ra(c,a,i,s,n),c.s){for(let u=d;u<i.length;u++)i[u].s=!0;c.s=!1}}else i.push(c),(o=c.vR)!=null&&o.length&&(s.push(...c.vR),delete c.vR)})},Ji=t=>{for(;;t=t.tag===Me||!t.vC||!t.pP?t.nN:t.vC[0]){if(!t)return null;if(t.tag!==Me&&t.e)return t.e}},La=t=>{var a,i,s,n,r,l;q(t)||((i=(a=t[A])==null?void 0:a[1][ja])==null||i.forEach(c=>{var o;return(o=c[2])==null?void 0:o.call(c)}),(s=vt.get(t.e))==null||s(),t.p===2&&((n=t.vC)==null||n.forEach(c=>c.p=2)),(r=t.vC)==null||r.forEach(La)),t.p||((l=t.e)==null||l.remove(),delete t.e),typeof t.tag=="function"&&(Ce.delete(t),Ke.delete(t),delete t[A][3],t.a=!0)},Ia=(t,a,i)=>{t.c=a,Oa(t,a,i)},$t=(t,a)=>{if(a){for(let i=0,s=t.length;i<s;i++)if(t[i]===a)return i}},Ft=Symbol(),Oa=(t,a,i)=>{var d;const s=[],n=[],r=[];Ra(t,a,s,n,r),n.forEach(La);const l=i?void 0:a.childNodes;let c,o=null;if(i)c=-1;else if(!l.length)c=0;else{const u=$t(l,Ji(t.nN));u!==void 0?(o=l[u],c=u):c=$t(l,(d=s.find(m=>m.tag!==Me&&m.e))==null?void 0:d.e)??-1,c===-1&&(i=!0)}for(let u=0,m=s.length;u<m;u++,c++){const f=s[u];let g;if(f.s&&f.e)g=f.e,f.s=!1;else{const N=i||!f.e;q(f)?(f.e&&f.d&&(f.e.textContent=f.t),f.d=!1,g=f.e||(f.e=document.createTextNode(f.t))):(g=f.e||(f.e=f.n?document.createElementNS(f.n,f.tag):document.createElement(f.tag)),Ki(g,f.props,f.pP),Oa(f,g,N))}f.tag===Me?c--:i?g.parentNode||a.appendChild(g):l[c]!==g&&l[c-1]!==g&&(l[c+1]===g?a.appendChild(l[c]):a.insertBefore(g,o||l[c]||null))}if(t.pP&&delete t.pP,r.length){const u=[],m=[];r.forEach(([,f,,g,N])=>{f&&u.push(f),g&&m.push(g),N==null||N()}),u.forEach(f=>f()),m.length&&requestAnimationFrame(()=>{m.forEach(f=>f())})}},Zi=(t,a)=>!!(t&&t.length===a.length&&t.every((i,s)=>i[1]===a[s][1])),Ke=new WeakMap,yt=(t,a,i)=>{var r,l,c,o,d,u;const s=!i&&a.pC;i&&(a.pC||(a.pC=a.vC));let n;try{i||(i=typeof a.tag=="function"?Yi(t,a):Be(a.props.children)),((r=i[0])==null?void 0:r.tag)===""&&i[0][mt]&&(n=i[0][mt],t[5].push([t,n,a]));const m=s?[...a.pC]:a.vC?[...a.vC]:void 0,f=[];let g;for(let N=0;N<i.length;N++){Array.isArray(i[N])&&i.splice(N,1,...i[N].flat());let p=Qi(i[N]);if(p){typeof p.tag=="function"&&!p.tag[na]&&(we.length>0&&(p[A][2]=we.map(w=>[w,w.values.at(-1)])),(l=t[5])!=null&&l.length&&(p[A][3]=t[5].at(-1)));let y;if(m&&m.length){const w=m.findIndex(q(p)?E=>q(E):p.key!==void 0?E=>E.key===p.key&&E.tag===p.tag:E=>E.tag===p.tag);w!==-1&&(y=m[w],m.splice(w,1))}if(y)if(q(p))y.t!==p.t&&(y.t=p.t,y.d=!0),p=y;else{const w=y.pP=y.props;if(y.props=p.props,y.f||(y.f=p.f||a.f),typeof p.tag=="function"){const E=y[A][2];y[A][2]=p[A][2]||[],y[A][3]=p[A][3],!y.f&&((y.o||y)===p.o||(o=(c=y.tag)[Va])!=null&&o.call(c,w,y.props))&&Zi(E,y[A][2])&&(y.s=!0)}p=y}else if(!q(p)&&Se){const w=Ee(Se);w&&(p.n=w)}if(!q(p)&&!p.s&&(yt(t,p),delete p.f),f.push(p),g&&!g.s&&!p.s)for(let w=g;w&&!q(w);w=(d=w.vC)==null?void 0:d.at(-1))w.nN=p;g=p}}a.vR=s?[...a.vC,...m||[]]:m||[],a.vC=f,s&&delete a.pC}catch(m){if(a.f=!0,m===Ft){if(n)return;throw m}const[f,g,N]=((u=a[A])==null?void 0:u[3])||[];if(g){const p=()=>Ye([0,!1,t[2]],N),y=Ke.get(N)||[];y.push(p),Ke.set(N,y);const w=g(m,()=>{const E=Ke.get(N);if(E){const x=E.indexOf(p);if(x!==-1)return E.splice(x,1),p()}});if(w){if(t[0]===1)t[1]=!0;else if(yt(t,N,[w]),(g.length===1||t!==f)&&N.c){Ia(N,N.c,!1);return}throw Ft}}throw m}finally{n&&t[5].pop()}},Qi=t=>{if(!(t==null||typeof t=="boolean")){if(typeof t=="string"||typeof t=="number")return{t:t.toString(),d:!0};if("vR"in t&&(t={tag:t.tag,props:t.props,key:t.key,f:t.f,type:t.tag,ref:t.props.ref,o:t.o||t}),typeof t.tag=="function")t[A]=[0,[]];else{const a=Wi[t.tag];a&&(Se||(Se=la("")),t.props.children=[{tag:Se,props:{value:t.n=`http://www.w3.org/${a}`,children:t.props.children}}])}return t}},_t=(t,a)=>{var i,s;(i=a[A][2])==null||i.forEach(([n,r])=>{n.values.push(r)});try{yt(t,a,void 0)}catch{return}if(a.a){delete a.a;return}(s=a[A][2])==null||s.forEach(([n])=>{n.values.pop()}),(t[0]!==1||!t[1])&&Ia(a,a.c,!1)},Ce=new WeakMap,qt=[],Ye=async(t,a)=>{t[5]||(t[5]=[]);const i=Ce.get(a);i&&i[0](void 0);let s;const n=new Promise(r=>s=r);if(Ce.set(a,[s,()=>{t[2]?t[2](t,a,r=>{_t(r,a)}).then(()=>s(a)):(_t(t,a),s(a))}]),qt.length)qt.at(-1).add(a);else{await Promise.resolve();const r=Ce.get(a);r&&(Ce.delete(a),r[1]())}return n},es=(t,a,i)=>({tag:Me,props:{children:t},key:i,e:a,p:1}),ot=0,ja=1,dt=2,ht=3,ut=new WeakMap,Da=(t,a)=>!t||!a||t.length!==a.length||a.some((i,s)=>i!==t[s]),ts=void 0,Gt=[],as=t=>{var l;const a=()=>typeof t=="function"?t():t,i=Pe.at(-1);if(!i)return[a(),()=>{}];const[,s]=i,n=(l=s[A][1])[ot]||(l[ot]=[]),r=s[A][0]++;return n[r]||(n[r]=[a(),c=>{const o=ts,d=n[r];if(typeof c=="function"&&(c=c(d[0])),!Object.is(c,d[0]))if(d[0]=c,Gt.length){const[u,m]=Gt.at(-1);Promise.all([u===3?s:Ye([u,!1,o],s),m]).then(([f])=>{if(!f||!(u===2||u===3))return;const g=f.vC;requestAnimationFrame(()=>{setTimeout(()=>{g===f.vC&&Ye([u===3?1:0,!1,o],f)})})})}else Ye([0,!1,o],s)}])},kt=(t,a)=>{var c;const i=Pe.at(-1);if(!i)return t;const[,s]=i,n=(c=s[A][1])[dt]||(c[dt]=[]),r=s[A][0]++,l=n[r];return Da(l==null?void 0:l[1],a)?n[r]=[t,a]:t=n[r][0],t},is=t=>{const a=ut.get(t);if(a){if(a.length===2)throw a[1];return a[0]}throw t.then(i=>ut.set(t,[i]),i=>ut.set(t,[void 0,i])),t},ss=(t,a)=>{var c;const i=Pe.at(-1);if(!i)return t();const[,s]=i,n=(c=s[A][1])[ht]||(c[ht]=[]),r=s[A][0]++,l=n[r];return Da(l==null?void 0:l[1],a)&&(n[r]=[t(),a]),n[r][0]},ns=la({pending:!1,data:null,method:null,action:null}),Ut=new Set,rs=t=>{Ut.add(t),t.finally(()=>Ut.delete(t))},Ct=(t,a)=>ss(()=>i=>{let s;t&&(typeof t=="function"?s=t(i)||(()=>{t(null)}):t&&"current"in t&&(t.current=i,s=()=>{t.current=null}));const n=a(i);return()=>{n==null||n(),s==null||s()}},[t]),ue=Object.create(null),qe=Object.create(null),Fe=(t,a,i,s,n)=>{if(a!=null&&a.itemProp)return{tag:t,props:a,type:t,ref:a.ref};const r=document.head;let{onLoad:l,onError:c,precedence:o,blocking:d,...u}=a,m=null,f=!1;const g=Ge[t];let N;if(g.length>0){const E=r.querySelectorAll(t);e:for(const x of E)for(const k of Ge[t])if(x.getAttribute(k)===a[k]){m=x;break e}if(!m){const x=g.reduce((k,R)=>a[R]===void 0?k:`${k}-${R}-${a[R]}`,t);f=!qe[x],m=qe[x]||(qe[x]=(()=>{const k=document.createElement(t);for(const R of g)a[R]!==void 0&&k.setAttribute(R,a[R]),a.rel&&k.setAttribute("rel",a.rel);return k})())}}else N=r.querySelectorAll(t);o=s?o??"":void 0,s&&(u[Ue]=o);const p=kt(E=>{if(g.length>0){let x=!1;for(const k of r.querySelectorAll(t)){if(x&&k.getAttribute(Ue)!==o){r.insertBefore(E,k);return}k.getAttribute(Ue)===o&&(x=!0)}r.appendChild(E)}else if(N){let x=!1;for(const k of N)if(k===E){x=!0;break}x||r.insertBefore(E,r.contains(N[0])?N[0]:r.querySelector(t)),N=void 0}},[o]),y=Ct(a.ref,E=>{var R;const x=g[0];if(i===2&&(E.innerHTML=""),(f||N)&&p(E),!c&&!l)return;let k=ue[R=E.getAttribute(x)]||(ue[R]=new Promise((de,ae)=>{E.addEventListener("load",de),E.addEventListener("error",ae)}));l&&(k=k.then(l)),c&&(k=k.catch(c)),k.catch(()=>{})});if(n&&d==="render"){const E=Ge[t][0];if(a[E]){const x=a[E],k=ue[x]||(ue[x]=new Promise((R,de)=>{p(m),m.addEventListener("load",R),m.addEventListener("error",de)}));is(k)}}const w={tag:t,type:t,props:{...u,ref:y},ref:y};return w.p=i,m&&(w.e=m),es(w,r)},ls=t=>{const a=Xi(),i=a&&Ee(a);return i!=null&&i.endsWith("svg")?{tag:"title",props:t,type:"title",ref:t.ref}:Fe("title",t,void 0,!1,!1)},cs=t=>!t||["src","async"].some(a=>!t[a])?{tag:"script",props:t,type:"script",ref:t.ref}:Fe("script",t,1,!1,!0),os=t=>!t||!["href","precedence"].every(a=>a in t)?{tag:"style",props:t,type:"style",ref:t.ref}:(t["data-href"]=t.href,delete t.href,Fe("style",t,2,!0,!0)),ds=t=>!t||["onLoad","onError"].some(a=>a in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?{tag:"link",props:t,type:"link",ref:t.ref}:Fe("link",t,1,"precedence"in t,!0),hs=t=>Fe("meta",t,void 0,!1,!1),Ba=Symbol(),us=t=>{const{action:a,...i}=t;typeof a!="function"&&(i.action=a);const[s,n]=as([null,!1]),r=kt(async d=>{const u=d.isTrusted?a:d.detail[Ba];if(typeof u!="function")return;d.preventDefault();const m=new FormData(d.target);n([m,!0]);const f=u(m);f instanceof Promise&&(rs(f),await f),n([null,!0])},[]),l=Ct(t.ref,d=>(d.addEventListener("submit",r),()=>{d.removeEventListener("submit",r)})),[c,o]=s;return s[1]=!1,{tag:ns,props:{value:{pending:c!==null,data:c,method:c?"post":null,action:c?a:null},children:{tag:"form",props:{...i,ref:l},type:"form",ref:l}},f:o}},Ha=(t,{formAction:a,...i})=>{if(typeof a=="function"){const s=kt(n=>{n.preventDefault(),n.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Ba]:a}}))},[]);i.ref=Ct(i.ref,n=>(n.addEventListener("click",s),()=>{n.removeEventListener("click",s)}))}return{tag:t,props:i,type:t,ref:i.ref}},ms=t=>Ha("input",t),fs=t=>Ha("button",t);Object.assign(ft,{title:ls,script:cs,style:os,link:ds,meta:hs,form:us,input:ms,button:fs});bt(null);new TextEncoder;var ps=bt(null),gs=(t,a,i,s)=>(n,r)=>{const l="<!DOCTYPE html>",c=i?Rt(d=>i(d,t),{Layout:a,...r},n):n,o=Ua`${j(l)}${Rt(ps.Provider,{value:t},c)}`;return t.html(o)},vs=(t,a)=>function(s,n){const r=s.getLayout()??si;return t&&s.setLayout(l=>t({...l,Layout:r},s)),s.setRenderer(gs(s,r,t)),n()};const ys=vs(({children:t})=>e("html",{lang:"en",children:[e("head",{children:[e("meta",{charSet:"UTF-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("title",{children:"SCHOLARIX - Study Abroad Consultants | Visa, Admission & IELTS"}),e("meta",{name:"description",content:"Expert study abroad guidance for students. Get support for study visas, university admissions, scholarships, and IELTS/PTE preparation. 99% visa success rate. Book free consultation today!"}),e("meta",{name:"keywords",content:"study abroad, student visa, university admission, scholarships, IELTS, PTE, career counselling, international education"}),e("meta",{name:"author",content:"SCHOLARIX Study Abroad Consultants"}),e("meta",{property:"og:title",content:"SCHOLARIX - Study Abroad Consultants"}),e("meta",{property:"og:description",content:"Expert study abroad guidance with 99% visa success rate. Get support for visas, admissions, scholarships & test prep."}),e("meta",{property:"og:type",content:"website"}),e("meta",{property:"og:image",content:"/static/images/og-image.jpg"}),e("meta",{name:"twitter:card",content:"summary_large_image"}),e("meta",{name:"twitter:title",content:"SCHOLARIX - Study Abroad Consultants"}),e("meta",{name:"twitter:description",content:"Expert study abroad guidance with 99% visa success rate."}),e("meta",{httpEquiv:"Content-Security-Policy",content:"default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'none'; object-src 'none'; base-uri 'self';"}),e("meta",{httpEquiv:"X-Content-Type-Options",content:"nosniff"}),e("meta",{httpEquiv:"X-Frame-Options",content:"DENY"}),e("meta",{httpEquiv:"X-XSS-Protection",content:"1; mode=block"}),e("meta",{httpEquiv:"Referrer-Policy",content:"strict-origin-when-cross-origin"}),e("link",{rel:"icon",type:"image/png",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"}),e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),e("link",{href:"/static/style.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-styles.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-loader-3d.css",rel:"stylesheet"}),e("link",{href:"/static/course-finder.css",rel:"stylesheet"}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",defer:!0}),e("script",{src:"https://unpkg.com/globe.gl",defer:!0}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",defer:!0}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",defer:!0}),e("script",{src:"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",defer:!0}),e("script",{src:"https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"}),e("script",{children:`
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
          `}),e("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"EducationalOrganization",name:"SCHOLARIX Study Abroad Consultants",description:"Expert study abroad guidance for students seeking international education opportunities",url:"https://scholarixstudy.com",telephone:"+971525438784",email:"info@scholarixstudy.com",address:{"@type":"PostalAddress",addressCountry:"UAE"},serviceArea:"Worldwide",offers:{"@type":"Service",name:"Study Abroad Consulting",description:"Comprehensive study abroad services including visa support, university admissions, scholarships, and test preparation"}})})]}),e("body",{children:[e("div",{id:"floating-3d-elements"}),e("header",{className:"header",children:e("nav",{className:"navbar",children:e("div",{className:"nav-container",children:[e("div",{className:"nav-brand",children:e("a",{href:"/",className:"logo-link",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX Study Abroad",className:"logo"})})}),e("div",{className:"nav-menu",id:"navMenu",children:[e("a",{href:"/",className:"nav-link",children:"Home"}),e("div",{className:"nav-dropdown",children:[e("a",{href:"#",className:"nav-link dropdown-toggle",children:["Services ",e("i",{className:"fas fa-chevron-down"})]}),e("div",{className:"dropdown-content",children:[e("a",{href:"/services/visa",children:[e("i",{className:"fas fa-passport"}),"Visa Support"]}),e("a",{href:"/services/admissions",children:[e("i",{className:"fas fa-graduation-cap"}),"University Admissions"]}),e("a",{href:"/services/scholarships",children:[e("i",{className:"fas fa-trophy"}),"Scholarships"]}),e("a",{href:"/services/test-prep",children:[e("i",{className:"fas fa-book"}),"Test Preparation"]}),e("a",{href:"/services/counselling",children:[e("i",{className:"fas fa-user-tie"}),"Career Counselling"]}),e("a",{href:"/services/pre-departure",children:[e("i",{className:"fas fa-plane"}),"Pre-Departure"]})]})]}),e("a",{href:"/about",className:"nav-link",children:"About"}),e("a",{href:"/contact",className:"nav-link",children:"Contact"}),e("div",{className:"mobile-cta",children:e("button",{className:"nav-cta-btn",onclick:"openConsultationModal()",children:"Free Consultation"})})]}),e("div",{className:"nav-actions",children:[e("a",{href:"https://scholarixstudy.com",target:"_blank",className:"nav-employee-btn",children:"Employee Login"}),e("button",{className:"nav-cta-btn",onclick:"openConsultationModal()",children:"Free Consultation"})]}),e("button",{className:"nav-toggle",id:"navToggle","aria-label":"Toggle navigation menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})})}),e("main",{children:t}),e("footer",{className:"footer",children:e("div",{className:"container",children:[e("div",{className:"footer-content",children:[e("div",{className:"footer-brand",children:[e("a",{href:"/",className:"footer-logo-link",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX",className:"footer-logo"})}),e("p",{className:"footer-tagline",children:"Your trusted study abroad partner since 2023"})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Services"}),e("ul",{className:"footer-links-list",children:[e("li",{children:e("a",{href:"/services/visa",children:"Visa Support"})}),e("li",{children:e("a",{href:"/services/admissions",children:"Admissions"})}),e("li",{children:e("a",{href:"/services/scholarships",children:"Scholarships"})}),e("li",{children:e("a",{href:"/services/test-prep",children:"Test Prep"})})]})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Destinations"}),e("ul",{className:"footer-links-list",children:[e("li",{children:e("a",{href:"/destinations/germany",children:"Germany"})}),e("li",{children:e("a",{href:"/destinations/canada",children:"Canada"})}),e("li",{children:e("a",{href:"/destinations/uk",children:"UK"})}),e("li",{children:e("a",{href:"/destinations/usa",children:"USA"})})]})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Connect"}),e("div",{className:"footer-contact",children:[e("a",{href:"tel:+971525438784",className:"contact-link",children:"+971 52 543 8784"}),e("a",{href:"mailto:info@scholarixstudy.com",className:"contact-link",children:"info@scholarixstudy.com"})]}),e("div",{className:"social-links",children:[e("a",{href:"https://facebook.com/scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Facebook",children:e("i",{className:"fab fa-facebook-f"})}),e("a",{href:"https://instagram.com/scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Instagram",children:e("i",{className:"fab fa-instagram"})}),e("a",{href:"https://linkedin.com/company/scholarix",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"LinkedIn",children:e("i",{className:"fab fa-linkedin-in"})}),e("a",{href:"https://youtube.com/@scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"YouTube",children:e("i",{className:"fab fa-youtube"})})]})]}),e("div",{className:"footer-newsletter",children:[e("h4",{children:"Stay Updated"}),e("p",{children:"Get study abroad tips & updates"}),e("form",{className:"newsletter-form",id:"newsletterForm",children:e("div",{className:"input-group",children:[e("input",{type:"email",name:"email",placeholder:"Enter your email",required:!0,className:"newsletter-input"}),e("button",{type:"submit",className:"newsletter-btn","aria-label":"Subscribe",children:e("i",{className:"fas fa-arrow-right"})})]})})]})]}),e("div",{className:"footer-bottom",children:e("div",{className:"footer-bottom-content",children:[e("p",{className:"copyright",children:"© 2025 SCHOLARIX. All rights reserved."}),e("div",{className:"footer-legal",children:[e("a",{href:"/privacy",children:"Privacy"}),e("a",{href:"/terms",children:"Terms"}),e("a",{href:"/contact",children:"Contact"})]})]})})]})}),e("div",{className:"floating-chatbot",children:e("div",{className:"chatbot-trigger",children:[e("i",{className:"fas fa-comments"}),e("span",{className:"chatbot-text",children:"Chat with us"})]})}),e("script",{src:"/static/app.js",defer:!0}),e("script",{src:"/static/enhanced-animations.js"}),e("script",{src:"/static/study-abroad-3d.js"}),e("script",{src:"/static/interactive-globe.js",defer:!0}),e("script",{src:"/static/course-finder.js"}),e("script",{src:"/static/destinations-accordion.js"}),e("script",{src:"https://cdn.jotfor.ms/agent/embedjs/01998a5c603976e5940cc26a09b91e250511/embed.js"}),e("script",{children:`
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
          `}),e("script",{children:`
          // Interactive Globe Implementation
          document.addEventListener('DOMContentLoaded', function() {
            // Study destinations data with coordinates and details
            const studyDestinations = [
              {
                id: 'germany',
                name: 'Germany',
                flag: '🇩🇪',
                lat: 51.1657,
                lng: 10.4515,
                description: 'European leader in engineering and technology',
                tuitionRange: '€5,000-10,000',
                visaSuccess: '95%',
                programs: [
                  { name: 'Computer Science', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Engineering', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Business Management', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Data Science', duration: '2-4 years', level: 'Master/PhD' }
                ],
                highlights: ['No tuition fees at public universities', 'Strong industrial connections', 'Post-study work visa available']
              },
              {
                id: 'canada',
                name: 'Canada',
                flag: '🇨🇦',
                lat: 56.1304,
                lng: -106.3468,
                description: 'World-class education with work opportunities',
                tuitionRange: '€8,000-15,000',
                visaSuccess: '92%',
                programs: [
                  { name: 'Information Technology', duration: '2-4 years', level: 'Bachelor/Master' },
                  { name: 'Healthcare', duration: '4-6 years', level: 'Bachelor/Master' },
                  { name: 'Business Analytics', duration: '1-2 years', level: 'Master' },
                  { name: 'Environmental Science', duration: '3-4 years', level: 'Bachelor/Master' }
                ],
                highlights: ['3-year post-graduation work permit', 'Pathway to permanent residency', 'High quality of life']
              },
              {
                id: 'australia',
                name: 'Australia',
                flag: '🇦🇺',
                lat: -25.2744,
                lng: 133.7751,
                description: 'Innovation hub with excellent quality of life',
                tuitionRange: '€7,000-15,000',
                visaSuccess: '90%',
                programs: [
                  { name: 'Medicine', duration: '5-6 years', level: 'Bachelor/Master' },
                  { name: 'Mining Engineering', duration: '4 years', level: 'Bachelor' },
                  { name: 'Marine Science', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Tourism Management', duration: '3 years', level: 'Bachelor' }
                ],
                highlights: ['48 hours work per fortnight', 'World-renowned universities', 'Diverse cultural environment']
              },
              {
                id: 'netherlands',
                name: 'Netherlands',
                flag: '🇳🇱',
                lat: 52.1326,
                lng: 5.2913,
                description: 'English-taught programs in Europe's heart',
                tuitionRange: '€12,000-18,000',
                visaSuccess: '88%',
                programs: [
                  { name: 'International Business', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Sustainable Energy', duration: '2 years', level: 'Master' },
                  { name: 'Art & Design', duration: '4 years', level: 'Bachelor' },
                  { name: 'Psychology', duration: '3 years', level: 'Bachelor' }
                ],
                highlights: ['Over 2,000 English-taught programs', 'Central location in Europe', 'Excellent cycling infrastructure']
              },
              {
                id: 'malta',
                name: 'Malta',
                flag: '🇲🇹',
                lat: 35.9375,
                lng: 14.3754,
                description: 'Affordable EU education in English',
                tuitionRange: '€2,500-4,000',
                visaSuccess: '96%',
                programs: [
                  { name: 'Maritime Studies', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Gaming & Interactive Media', duration: '3 years', level: 'Bachelor' },
                  { name: 'Hospitality Management', duration: '3 years', level: 'Bachelor' },
                  { name: 'Finance', duration: '3-4 years', level: 'Bachelor/Master' }
                ],
                highlights: ['EU membership benefits', 'English-speaking environment', 'Mediterranean lifestyle']
              },
              {
                id: 'singapore',
                name: 'Singapore',
                flag: '🇸🇬',
                lat: 1.3521,
                lng: 103.8198,
                description: 'Asia's education and business hub',
                tuitionRange: '€12,000-20,000',
                visaSuccess: '87%',
                programs: [
                  { name: 'Fintech', duration: '1-2 years', level: 'Master' },
                  { name: 'Supply Chain Management', duration: '18 months', level: 'Master' },
                  { name: 'Artificial Intelligence', duration: '2 years', level: 'Master' },
                  { name: 'International Relations', duration: '2 years', level: 'Master' }
                ],
                highlights: ['Gateway to Asia-Pacific', 'Top-ranked universities', 'Multicultural environment']
              },
              {
                id: 'ireland',
                name: 'Ireland',
                flag: '🇮🇪',
                lat: 53.1424,
                lng: -7.6921,
                description: 'Tech hub with vibrant culture',
                tuitionRange: '€9,000-16,000',
                visaSuccess: '93%',
                programs: [
                  { name: 'Software Engineering', duration: '4 years', level: 'Bachelor' },
                  { name: 'Pharmaceutical Science', duration: '4 years', level: 'Bachelor' },
                  { name: 'Creative Writing', duration: '1-2 years', level: 'Master' },
                  { name: 'Renewable Energy', duration: '2 years', level: 'Master' }
                ],
                highlights: ['EU's tech capital', '2-year post-study visa', 'English-speaking country']
              },
              {
                id: 'uk',
                name: 'United Kingdom',
                flag: '🇬🇧',
                lat: 55.3781,
                lng: -3.4360,
                description: 'World-renowned education excellence',
                tuitionRange: '€15,000-25,000',
                visaSuccess: '85%',
                programs: [
                  { name: 'Law', duration: '3 years', level: 'Bachelor' },
                  { name: 'Medicine', duration: '5-6 years', level: 'Bachelor' },
                  { name: 'Literature', duration: '3 years', level: 'Bachelor' },
                  { name: 'Economics', duration: '3-4 years', level: 'Bachelor/Master' }
                ],
                highlights: ['Historic universities', 'Graduate route visa', 'Research excellence']
              },
              {
                id: 'usa',
                name: 'United States',
                flag: '🇺🇸',
                lat: 39.8283,
                lng: -98.5795,
                description: 'Leading innovation and research',
                tuitionRange: '€20,000-40,000',
                visaSuccess: '82%',
                programs: [
                  { name: 'MBA', duration: '2 years', level: 'Master' },
                  { name: 'Computer Science', duration: '4 years', level: 'Bachelor' },
                  { name: 'Biotechnology', duration: '4-6 years', level: 'Bachelor/Master' },
                  { name: 'Film Studies', duration: '4 years', level: 'Bachelor' }
                ],
                highlights: ['World's top universities', 'OPT work opportunities', 'Diverse academic programs']
              },
              {
                id: 'france',
                name: 'France',
                flag: '🇫🇷',
                lat: 46.2276,
                lng: 2.2137,
                description: 'Excellence in arts and sciences',
                tuitionRange: '€3,000-8,000',
                visaSuccess: '89%',
                programs: [
                  { name: 'Fashion Design', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Culinary Arts', duration: '2-3 years', level: 'Diploma/Bachelor' },
                  { name: 'International Relations', duration: '2 years', level: 'Master' },
                  { name: 'Aerospace Engineering', duration: '5 years', level: 'Master' }
                ],
                highlights: ['Low tuition fees', 'Rich cultural heritage', 'Central European location']
              }
            ];

            let globe;
            let isAutoRotating = false;

            // Initialize Globe with enhanced error handling
            function initializeGlobe() {
              const globeElement = document.getElementById('interactive-globe');
              if (!globeElement || typeof Globe === 'undefined') {
                setTimeout(initializeGlobe, 500);
                return;
              }

              // Show loading
              globeElement.innerHTML = '<div class="globe-loading">Loading Interactive Globe...</div>';

              try {
                globe = Globe()
                  (globeElement)
                  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
                  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                  .pointsData(studyDestinations)
                  .pointAltitude(0.02)
                  .pointRadius(0.8)
                  .pointColor(() => '#3b82f6')
                  .pointLabel(function(d) {
                    return '<div style="background: rgba(0,0,0,0.8); color: white; padding: 10px; border-radius: 8px; font-size: 14px; max-width: 200px;">' +
                           '<strong>' + d.flag + ' ' + d.name + '</strong><br/>' +
                           '<em>' + d.description + '</em><br/>' +
                           '<small>Click to explore programs</small>' +
                           '</div>';
                  })
                  .onPointClick(openDestinationModal)
                  .pointResolution(6)
                  .atmosphereColor('#3b82f6')
                  .atmosphereAltitude(0.15)
                  .enablePointerInteraction(true);

                // Set initial globe position
                globe.pointOfView({ altitude: 2.5 });

                // Auto-rotate functionality
                setupGlobeControls();

              } catch (error) {
                console.error('Globe initialization error:', error);
                globeElement.innerHTML = '&lt;div class="globe-loading"&gt;Globe temporarily unavailable&lt;/div&gt;';
                if (window.handleError) {
                  window.handleError({
                    message: error.message,
                    filename: 'Globe Initialization',
                    lineno: 0,
                    error: error
                  }, 'Interactive Globe');
                }
              }
            }

            // Setup globe controls
            function setupGlobeControls() {
              const autoRotateBtn = document.getElementById('autoRotateBtn');
              const resetViewBtn = document.getElementById('resetViewBtn');

              if (autoRotateBtn) {
                autoRotateBtn.addEventListener('click', function() {
                  isAutoRotating = !isAutoRotating;
                  if (isAutoRotating) {
                    startAutoRotation();
                    autoRotateBtn.classList.add('active');
                    autoRotateBtn.innerHTML = '<i class="fas fa-pause"></i><span>Stop Rotation</span>';
                  } else {
                    stopAutoRotation();
                    autoRotateBtn.classList.remove('active');
                    autoRotateBtn.innerHTML = '<i class="fas fa-play"></i><span>Auto Rotate</span>';
                  }
                });
              }

              if (resetViewBtn) {
                resetViewBtn.addEventListener('click', function() {
                  if (globe) {
                    globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
                  }
                });
              }
            }

            // Auto-rotation functionality
            function startAutoRotation() {
              if (!globe) return;
              globe.controls().autoRotate = true;
              globe.controls().autoRotateSpeed = 0.5;
            }

            function stopAutoRotation() {
              if (!globe) return;
              globe.controls().autoRotate = false;
            }

            // Open destination modal
            function openDestinationModal(destination) {
              const modal = document.getElementById('destinationModal');
              const content = document.getElementById('destinationContent');
              
              if (!modal || !content) return;

              // Generate programs HTML
              const programsHTML = destination.programs.map(program => \`
                <div class="program-card">
                  <h4>\${program.name}</h4>
                  <p>Duration: \${program.duration}</p>
                  <div class="program-meta">
                    <span>Level: \${program.level}</span>
                  </div>
                </div>
              \`).join('');

              // Generate highlights HTML
              const highlightsHTML = destination.highlights.map(highlight => \`
                <li><i class="fas fa-check-circle" style="color: var(--primary-600); margin-right: 8px;"></i>\${highlight}</li>
              \`).join('');

              content.innerHTML = \`
                <div class="destination-header">
                  <div class="destination-flag">\${destination.flag}</div>
                  <div class="destination-title">
                    <h2>\${destination.name}</h2>
                    <p>\${destination.description}</p>
                  </div>
                </div>
                
                <div class="destination-stats-grid">
                  <div class="destination-stat">
                    <div class="destination-stat-value">\${destination.tuitionRange}</div>
                    <div class="destination-stat-label">Annual Tuition</div>
                  </div>
                  <div class="destination-stat">
                    <div class="destination-stat-value">\${destination.visaSuccess}</div>
                    <div class="destination-stat-label">Visa Success Rate</div>
                  </div>
                  <div class="destination-stat">
                    <div class="destination-stat-value">\${destination.programs.length}+</div>
                    <div class="destination-stat-label">Programs Available</div>
                  </div>
                </div>

                <div class="destination-programs">
                  <h3>Popular Study Programs</h3>
                  <div class="programs-grid">
                    \${programsHTML}
                  </div>
                </div>

                <div class="destination-highlights" style="margin-bottom: 2rem;">
                  <h3>Why Choose \${destination.name}?</h3>
                  <ul style="list-style: none; padding: 0;">
                    \${highlightsHTML}
                  </ul>
                </div>

                <div class="destination-cta-section">
                  <button class="btn btn-primary btn-large" onclick="closeDestinationModal(); openConsultationModal();">
                    <i class="fas fa-calendar-alt"></i>
                    Get Guidance for \${destination.name}
                  </button>
                </div>
              \`;

              modal.classList.add('active');
              document.body.style.overflow = 'hidden';
            }

            // Close destination modal
            window.closeDestinationModal = function() {
              const modal = document.getElementById('destinationModal');
              if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
              }
            };

            // Initialize globe when page loads
            initializeGlobe();

            // Handle window resize
            window.addEventListener('resize', function() {
              if (globe) {
                globe.width(globe.width());
                globe.height(globe.height());
              }
            });

            // Additional Globe Control Functions
            window.resetGlobe = function() {
              if (globe) {
                globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
              }
            };

            window.toggleGlobeRotation = function() {
              isAutoRotating = !isAutoRotating;
              const rotationIcon = document.getElementById('rotation-icon');
              
              if (isAutoRotating) {
                startAutoRotation();
                if (rotationIcon) {
                  rotationIcon.className = 'fas fa-pause';
                }
              } else {
                stopAutoRotation();
                if (rotationIcon) {
                  rotationIcon.className = 'fas fa-play';
                }
              }
            };

            window.zoomGlobe = function(factor) {
              if (!globe) return;
              
              const currentPov = globe.pointOfView();
              const newAltitude = Math.max(1.5, Math.min(5, currentPov.altitude * factor));
              
              globe.pointOfView({
                lat: currentPov.lat,
                lng: currentPov.lng,
                altitude: newAltitude
              }, 300);
            };

            window.showDestinationModal = function(countryId) {
              const country = studyDestinations.find(dest => dest.id === countryId);
              if (!country) return;

              const modal = document.getElementById('country-info-modal');
              if (!modal) return;

              // Update modal content
              document.getElementById('modal-country-name').textContent = country.name;
              document.getElementById('modal-country-flag').textContent = country.flag;
              document.getElementById('modal-country-description').textContent = country.description;
              document.getElementById('modal-tuition-range').textContent = country.tuitionRange;
              document.getElementById('modal-living-cost').textContent = country.livingCost || 'Contact for details';
              document.getElementById('modal-visa-success').textContent = country.visaSuccess;
              document.getElementById('modal-work-permit').textContent = country.workPermit || 'Available';

              // Update programs
              const programsList = document.getElementById('modal-programs');
              if (programsList && country.programs) {
                programsList.innerHTML = country.programs.map(program => 
                  '<span class="program-tag">' + program.name + ' (' + program.level + ')</span>'
                ).join('');
              }

              // Show modal
              modal.style.display = 'block';
              document.body.style.overflow = 'hidden';
            };

            window.downloadCountryGuide = function() {
              // This would trigger a download of country-specific guide
              alert('Country guide download feature coming soon!');
            };

            // Initialize globe when DOM is ready
            if (document.getElementById('interactive-globe')) {
              initializeGlobe();
            }
          });

          // Progressive Form Functions
          function showStep2() {
            // Validate Step 1 fields
            const fullName = document.querySelector('input[name="fullName"]');
            const email = document.querySelector('input[name="email"]');
            const phone = document.querySelector('input[name="phone"]');
            
            if (!fullName || !email || !phone) {
              return; // Elements not found
            }
            
            const fullNameValue = fullName.value.trim();
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();
            
            if (!fullNameValue || !emailValue || !phoneValue) {
              alert('Please fill in all required fields before continuing.');
              return;
            }
            
            // Basic email validation
            const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
            if (!emailPattern.test(emailValue)) {
              alert('Please enter a valid email address.');
              return;
            }
            
            // Show step 2, hide step 1
            const step1 = document.getElementById('step1');
            const step2 = document.getElementById('step2');
            
            if (step1 &amp;&amp; step2) {
              step1.classList.remove('active');
              step1.classList.add('hidden');
              step2.classList.remove('hidden');
              step2.classList.add('active');
              
              // Smooth scroll to top of form
              const form = document.getElementById('leadForm');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              
              // Track step completion
              if (typeof gtag !== 'undefined') {
                gtag('event', 'form_step_completed', {
                  'step_number': 1,
                  'form_name': 'consultation_form'
                });
              }
            }
          }
          
          function showStep1() {
            // Show step 1, hide step 2
            const step1 = document.getElementById('step1');
            const step2 = document.getElementById('step2');
            
            if (step1 &amp;&amp; step2) {
              step2.classList.remove('active');
              step2.classList.add('hidden');
              step1.classList.remove('hidden');
              step1.classList.add('active');
              
              // Smooth scroll to top of form
              const form = document.getElementById('leadForm');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }
          
          // Initialize progressive form event listeners
          document.addEventListener('DOMContentLoaded', function() {
            const continueBtn = document.getElementById('continueToStep2');
            const backBtn = document.getElementById('backToStep1');
            
            if (continueBtn) {
              continueBtn.addEventListener('click', showStep2);
            }
            
            if (backBtn) {
              backBtn.addEventListener('click', showStep1);
            }
          });
          `}),e("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"}),e("script",{children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
          `}),e("script",{children:`
          // Backup initialization after all scripts load
          window.addEventListener('load', function() {
            setTimeout(function() {
              if (typeof window.initializeCinematicTypewriter === 'function') {
                const typewriterElement = document.getElementById('typewriter-text');
                if (typewriterElement && (!typewriterElement.innerHTML.trim() || typewriterElement.innerHTML === '')) {
                  console.log('🔄 Running backup typewriter initialization...');
                  window.initializeCinematicTypewriter();
                }
              } else {
                console.log('⚠️ Typewriter function not available, trying manual initialization...');
                const typewriterElement = document.getElementById('typewriter-text');
                if (typewriterElement && !typewriterElement.innerHTML.trim()) {
                  typewriterElement.innerHTML = 'Your Dream <span class="text-accent">Study Abroad</span> Journey Starts Here';
                }
              }
            }, 1000);
          });
          `}),e("script",{children:`
          // Immediate check and initialization
          document.addEventListener('DOMContentLoaded', function() {
            console.log('🚀 DOM loaded, checking typewriter...');
            const element = document.getElementById('typewriter-text');
            if (element) {
              console.log('✅ Found typewriter element with content:', element.innerHTML);
              if (!element.innerHTML.trim() || element.innerHTML === '') {
                element.innerHTML = 'Your Dream <span class="text-accent">Study Abroad</span> Journey Starts Here';
                console.log('🔧 Added emergency fallback text');
              }
            } else {
              console.error('❌ Typewriter element not found in DOM');
            }
          });
          `})]})]})),F=new Ma;F.use("/api/*",ji());F.use("/static/*",Vi({root:"./public"}));F.use(ys);F.get("/",t=>t.render(e("div",{children:[e("section",{className:"hero-section",children:[e("div",{id:"particles-js"}),e("div",{className:"hero-container",children:e("div",{className:"hero-content",children:[e("div",{className:"hero-text animate-on-scroll",children:[e("h1",{className:"hero-title",children:e("span",{id:"typewriter-text",children:"Your Dream Study Abroad Journey Starts Here"})}),e("p",{className:"hero-subtitle",children:"Specializing in European Study Destinations with High Visa Success from UAE. Expert guidance for study visas, scholarships, university admissions, and IELTS/PTE preparation. Your trusted partner since 2023 - Established in Dubai."}),e("div",{className:"hero-search-bar animate-on-scroll",children:e("div",{className:"search-container",children:e("form",{id:"heroSearchForm",className:"hero-search-form",children:e("div",{className:"search-fields",children:[e("div",{className:"search-field",children:[e("div",{className:"field-icon",children:e("i",{className:"fas fa-book-open"})}),e("select",{id:"heroStudyField","aria-label":"Select field of study",required:!0,children:[e("option",{value:"",children:"What do you want to study?"}),e("option",{value:"Computer Science",children:"Computer Science & IT"}),e("option",{value:"Business Management",children:"Business & Management"}),e("option",{value:"Engineering",children:"Engineering"}),e("option",{value:"Data Science",children:"Data Science & Analytics"}),e("option",{value:"Healthcare",children:"Healthcare & Medicine"}),e("option",{value:"Arts & Design",children:"Arts & Design"})]})]}),e("div",{className:"search-field",children:[e("div",{className:"field-icon",children:e("i",{className:"fas fa-globe-europe"})}),e("select",{id:"heroCountry","aria-label":"Select study destination",required:!0,children:[e("option",{value:"",children:"Where do you want to study?"}),e("option",{value:"Germany",children:"Germany"}),e("option",{value:"France",children:"France"}),e("option",{value:"Ireland",children:"Ireland"}),e("option",{value:"UK",children:"United Kingdom"}),e("option",{value:"Canada",children:"Canada"}),e("option",{value:"USA",children:"United States"})]})]}),e("button",{type:"submit",className:"search-submit-btn",children:[e("i",{className:"fas fa-search"}),e("span",{children:"Find Courses"})]})]})})})}),e("div",{className:"hero-stats",children:[e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"2500"}),e("div",{className:"stat-label",children:"Students Placed"})]}),e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"95"}),e("div",{className:"stat-label",children:"Visa Success %"})]}),e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"150"}),e("div",{className:"stat-label",children:"Partner Universities"})]})]}),e("div",{className:"hero-cta",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-accent btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat"]})]})]}),e("div",{className:"hero-image",children:e("img",{src:"/static/images/hero-graduate-3d.png",alt:"International Graduate Student"})})]})})]}),e("section",{className:"services-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("h2",{children:"Why Choose SCHOLARIX?"}),e("p",{children:"Comprehensive support for your international education journey"})]}),e("div",{className:"services-grid",children:[e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-passport text-primary"})}),e("h3",{children:"Study Visa Support"}),e("p",{children:"Expert guidance for student visa applications with 99% success rate. We handle all documentation and interview preparation."}),e("a",{href:"/services/visa",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-graduation-cap text-primary"})}),e("h3",{children:"University Admissions"}),e("p",{children:"Get admitted to top universities worldwide. We help with applications, essays, and course selection."}),e("a",{href:"/services/admissions",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-trophy text-accent"})}),e("h3",{children:"Scholarships"}),e("p",{children:"Access exclusive scholarships worth millions. We help you find and apply for the best funding opportunities."}),e("a",{href:"/services/scholarships",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-book text-primary"})}),e("h3",{children:"IELTS/PTE Preparation"}),e("p",{children:"Achieve your target scores with our expert trainers. Online and offline classes available."}),e("a",{href:"/services/test-prep",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-user-tie text-primary"})}),e("h3",{children:"Career Counselling"}),e("p",{children:"Get personalized career guidance to choose the right course and country for your future."}),e("a",{href:"/services/counselling",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-plane text-accent"})}),e("h3",{children:"Pre/Post Departure Support"}),e("p",{children:"Complete support for accommodation, travel, and settling in your destination country before and after arrival."}),e("a",{href:"/services/pre-departure",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]})]})]})}),e("section",{className:"course-search-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("div",{className:"badge",children:[e("i",{className:"fas fa-search"})," Find Your Program"]}),e("h2",{children:"Explore Study Programs by Destination"}),e("p",{children:"Browse through our study destinations and find programs that match your goals and budget."})]}),e("div",{className:"program-search-cta",children:[e("a",{href:"#destinations-globe",className:"btn btn-primary btn-large",children:[e("i",{className:"fas fa-globe-europe"}),"Explore Study Destinations"]}),e("p",{className:"search-subtext",children:"Click on any country pin to view programs, costs, and application requirements"})]})]})}),e("section",{className:"visa-success-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"🎯 Our Advantage"}),e("h2",{children:"Higher Visa Approval Success from UAE"}),e("p",{children:"UAE residents enjoy significantly higher visa success rates compared to home country applications"})]}),e("div",{className:"visa-success-grid",children:[e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇭🇺"}),e("h3",{children:"Hungary"}),e("div",{className:"success-badge",children:"97% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇱🇹"}),e("h3",{children:"Lithuania"}),e("div",{className:"success-badge",children:"96% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇲🇹"}),e("h3",{children:"Malta"}),e("div",{className:"success-badge",children:"95% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇩🇪"}),e("h3",{children:"Germany"}),e("div",{className:"success-badge",children:"94% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇮🇪"}),e("h3",{children:"Ireland"}),e("div",{className:"success-badge",children:"93% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇫🇮"}),e("h3",{children:"Finland"}),e("div",{className:"success-badge",children:"92% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇸🇬"}),e("h3",{children:"Singapore"}),e("div",{className:"success-badge",children:"91% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇩🇰"}),e("h3",{children:"Denmark"}),e("div",{className:"success-badge",children:"90% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇸🇪"}),e("h3",{children:"Sweden"}),e("div",{className:"success-badge",children:"90% Success"})]})]})]})}),e("section",{id:"destinations-globe",className:"destinations-globe-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("div",{className:"badge",children:"🌍 Interactive Explorer"}),e("h2",{children:"Explore Study Destinations Worldwide"}),e("p",{children:"Click on any country pin to discover programs, costs, visa requirements, and application details"})]}),e("div",{className:"globe-container",children:[e("div",{id:"interactive-globe",className:"interactive-globe"}),e("div",{className:"globe-controls",children:[e("button",{className:"globe-control-btn",onclick:"resetGlobe()",title:"Reset View",children:e("i",{className:"fas fa-home"})}),e("button",{className:"globe-control-btn",onclick:"toggleGlobeRotation()",title:"Toggle Rotation",children:e("i",{className:"fas fa-play",id:"rotation-icon"})}),e("div",{className:"globe-zoom-controls",children:[e("button",{className:"globe-control-btn",onclick:"zoomGlobe(1.2)",title:"Zoom In",children:e("i",{className:"fas fa-plus"})}),e("button",{className:"globe-control-btn",onclick:"zoomGlobe(0.8)",title:"Zoom Out",children:e("i",{className:"fas fa-minus"})})]})]}),e("div",{id:"globe-loader",className:"globe-loader",children:[e("div",{className:"loader-spinner"}),e("p",{children:"Loading Interactive Globe..."})]})]}),e("div",{className:"mobile-destinations-fallback",children:[e("div",{className:"destinations-header",children:[e("h3",{children:"🌍 Top Study Destinations"}),e("p",{children:"Click any destination to explore programs, costs & requirements"})]}),e("div",{className:"destinations-grid",children:[e("div",{className:"destination-card popular",onclick:"showDestinationModal('germany')",children:[e("div",{className:"destination-flag",children:"🇩🇪"}),e("div",{className:"destination-info",children:[e("h4",{children:"Germany"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"250+ Universities"}),e("span",{className:"stat",children:"95% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Free Tuition Available"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card popular",onclick:"showDestinationModal('canada')",children:[e("div",{className:"destination-flag",children:"🇨🇦"}),e("div",{className:"destination-info",children:[e("h4",{children:"Canada"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"500+ Universities"}),e("span",{className:"stat",children:"85% Visa Success"})]}),e("div",{className:"destination-highlight",children:"3-Year Work Permit"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card popular",onclick:"showDestinationModal('uk')",children:[e("div",{className:"destination-flag",children:"🇬🇧"}),e("div",{className:"destination-info",children:[e("h4",{children:"United Kingdom"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"400+ Universities"}),e("span",{className:"stat",children:"88% Visa Success"})]}),e("div",{className:"destination-highlight",children:"World-Class Education"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card affordable",onclick:"showDestinationModal('ireland')",children:[e("div",{className:"destination-flag",children:"🇮🇪"}),e("div",{className:"destination-info",children:[e("h4",{children:"Ireland"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"150+ Universities"}),e("span",{className:"stat",children:"90% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Tech Hub of Europe"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card premium",onclick:"showDestinationModal('australia')",children:[e("div",{className:"destination-flag",children:"🇦🇺"}),e("div",{className:"destination-info",children:[e("h4",{children:"Australia"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"300+ Universities"}),e("span",{className:"stat",children:"82% Visa Success"})]}),e("div",{className:"destination-highlight",children:"High Living Standard"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card affordable",onclick:"showDestinationModal('france')",children:[e("div",{className:"destination-flag",children:"🇫🇷"}),e("div",{className:"destination-info",children:[e("h4",{children:"France"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"600+ Universities"}),e("span",{className:"stat",children:"87% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Low Cost, High Quality"})]}),e("div",{className:"destination-arrow",children:"→"})]})]}),e("div",{className:"destinations-cta",children:e("button",{className:"btn btn-primary",onclick:"document.getElementById('consultationModal').style.display='block'",children:[e("i",{className:"fas fa-calendar-check"}),"Get Personalized Guidance"]})})]}),e("div",{id:"country-info-modal",className:"country-modal",children:e("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:[e("h3",{id:"modal-country-name",children:"Country Name"}),e("button",{id:"modal-close-btn",className:"modal-close",onclick:"closeDestinationModal()",type:"button","aria-label":"Close modal",children:e("i",{className:"fas fa-times"})})]}),e("div",{className:"modal-body",children:[e("div",{className:"country-overview",children:[e("div",{id:"modal-country-flag",className:"country-flag-large"}),e("div",{id:"modal-country-description",className:"country-description"})]}),e("div",{className:"country-stats",children:e("div",{class:"stat-grid",children:[e("div",{class:"stat-item",children:[e("i",{class:"fas fa-euro-sign"}),e("div",{children:[e("strong",{id:"modal-tuition-range",children:"€0 - €0"}),e("small",{children:"Annual Tuition"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-home"}),e("div",{children:[e("strong",{id:"modal-living-cost",children:"€0 - €0"}),e("small",{children:"Living Cost"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-check-circle"}),e("div",{children:[e("strong",{id:"modal-visa-success",children:"0%"}),e("small",{children:"Visa Success"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-briefcase"}),e("div",{children:[e("strong",{id:"modal-work-permit",children:"N/A"}),e("small",{children:"Work Permit"})]})]})]})}),e("div",{className:"program-highlights",children:[e("h4",{children:"Popular Programs"}),e("div",{id:"modal-programs",className:"programs-list"})]}),e("div",{className:"modal-actions",children:[e("button",{className:"btn btn-primary",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar"}),"Book Consultation"]}),e("button",{className:"btn btn-secondary",onclick:"downloadCountryGuide()",children:[e("i",{className:"fas fa-download"}),"Download Guide"]})]})]})]})}),e("div",{id:"program-inquiry-modal",className:"program-modal",children:e("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:[e("h3",{id:"program-modal-title",children:"Program Inquiry"}),e("button",{id:"program-modal-close-btn",className:"modal-close",onclick:"closeProgramInquiryModal()",type:"button","aria-label":"Close modal",children:e("i",{className:"fas fa-times"})})]}),e("div",{className:"modal-body",children:[e("div",{className:"program-overview",children:[e("div",{id:"program-icon",className:"program-icon-large",children:"🎓"}),e("div",{className:"program-details",children:[e("h4",{id:"program-name",children:"Program Name"}),e("div",{id:"program-price-display",className:"program-price-display",children:[e("span",{id:"program-price",children:"$0"}),e("small",{id:"program-duration",children:"/year"})]}),e("div",{id:"program-features-display",className:"program-features-preview"})]})]}),e("div",{className:"inquiry-form-section",children:[e("h4",{children:"Get Program Information"}),e("form",{id:"program-inquiry-form",className:"progressive-form",children:[e("div",{className:"form-step active","data-step":"1",children:e("div",{className:"form-grid",children:[e("div",{className:"form-group",children:[e("label",{for:"inquiry-full-name",children:[e("i",{className:"fas fa-user"}),"Full Name *"]}),e("input",{type:"text",id:"inquiry-full-name",name:"fullName",required:!0,placeholder:"Enter your full name"})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-email",children:[e("i",{className:"fas fa-envelope"}),"Email Address *"]}),e("input",{type:"email",id:"inquiry-email",name:"email",required:!0,placeholder:"your.email@example.com"})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-phone",children:[e("i",{className:"fas fa-phone"}),"Phone Number *"]}),e("input",{type:"tel",id:"inquiry-phone",name:"phone",required:!0,placeholder:"+971 50 123 4567"})]}),e("div",{className:"form-group full-width",children:[e("label",{for:"inquiry-program",children:[e("i",{className:"fas fa-graduation-cap"}),"Program of Interest *"]}),e("input",{type:"text",id:"inquiry-program",name:"program",readonly:!0,style:"background-color: #f8f9fa; cursor: not-allowed;"})]})]})}),e("div",{className:"form-step","data-step":"2",children:e("div",{className:"form-grid",children:[e("div",{className:"form-group",children:[e("label",{for:"inquiry-education-level",children:[e("i",{className:"fas fa-book"}),"Current Education Level"]}),e("select",{id:"inquiry-education-level",name:"educationLevel",children:[e("option",{value:"",children:"Select your level"}),e("option",{value:"high-school",children:"High School"}),e("option",{value:"undergraduate",children:"Undergraduate"}),e("option",{value:"graduate",children:"Graduate"}),e("option",{value:"postgraduate",children:"Postgraduate"}),e("option",{value:"working-professional",children:"Working Professional"})]})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-start-date",children:[e("i",{className:"fas fa-calendar"}),"Preferred Start Date"]}),e("select",{id:"inquiry-start-date",name:"startDate",children:[e("option",{value:"",children:"Select timeline"}),e("option",{value:"immediate",children:"Immediate (Next 3 months)"}),e("option",{value:"6-months",children:"In 6 months"}),e("option",{value:"1-year",children:"Next year"}),e("option",{value:"flexible",children:"Flexible"})]})]}),e("div",{className:"form-group full-width",children:[e("label",{for:"inquiry-message",children:[e("i",{className:"fas fa-message"}),"Additional Questions (Optional)"]}),e("textarea",{id:"inquiry-message",name:"message",rows:3,placeholder:"Any specific questions about the program, admission requirements, or other concerns?"})]})]})}),e("div",{className:"form-navigation",children:[e("div",{className:"step-indicator",children:[e("div",{className:"step active","data-step":"1",children:"1"}),e("div",{className:"progress-line",children:e("div",{className:"progress-fill"})}),e("div",{className:"step","data-step":"2",children:"2"})]}),e("div",{className:"form-buttons",children:[e("button",{type:"button",id:"program-form-prev",className:"btn btn-secondary",style:"display: none;",children:[e("i",{className:"fas fa-arrow-left"})," Previous"]}),e("button",{type:"button",id:"program-form-next",className:"btn btn-primary",children:["Next ",e("i",{className:"fas fa-arrow-right"})]}),e("button",{type:"submit",id:"program-form-submit",className:"btn btn-primary",style:"display: none;",children:[e("i",{className:"fas fa-paper-plane"})," Send Inquiry"]})]})]})]})]}),e("div",{className:"trust-indicators",children:[e("div",{className:"trust-item",children:[e("i",{className:"fas fa-shield-alt"}),e("span",{children:"Secure & Confidential"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-clock"}),e("span",{children:"Response in 24 hours"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-award"}),e("span",{children:"Expert Guidance"})]})]})]})]})}),e("div",{className:"globe-footer",children:[e("p",{className:"globe-instruction",children:[e("i",{className:"fas fa-mouse"}),"Drag to rotate • Scroll to zoom • Click pins for details"]}),e("div",{className:"popular-destinations-quick",children:[e("span",{children:"Quick access:"}),e("button",{onclick:"focusCountry('germany')",className:"quick-country-btn",children:"🇩🇪 Germany"}),e("button",{onclick:"focusCountry('canada')",className:"quick-country-btn",children:"🇨🇦 Canada"}),e("button",{onclick:"focusCountry('australia')",className:"quick-country-btn",children:"🇦🇺 Australia"}),e("button",{onclick:"focusCountry('malta')",className:"quick-country-btn",children:"🇲🇹 Malta"})]})]})]})}),e("section",{className:"mbbs-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"🏥 Medical Education"}),e("h2",{children:"Affordable MBBS Programs"}),e("p",{children:"Study medicine in WHO-recognized universities for under $5,000/year"})]}),e("div",{className:"mbbs-grid",children:[e("div",{className:"mbbs-card animate-on-scroll",children:[e("div",{className:"mbbs-header",children:[e("div",{className:"country-flag-large",children:"🇬🇪"}),e("h3",{children:"Georgia MBBS"})]}),e("div",{className:"mbbs-content",children:[e("div",{className:"price-tag",children:"$4,500/year"}),e("ul",{className:"mbbs-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," WHO-Recognized"]}),e("li",{children:[e("i",{className:"fas fa-check"})," English-Taught"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 6-Year Program"]}),e("li",{children:[e("i",{className:"fas fa-check"})," High Success Rate"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Low Living Cost"]}),e("li",{children:[e("i",{className:"fas fa-check"})," No Donation"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('georgia-mbbs', 'Georgia MBBS', '$4,500', '/year', '🇬🇪', ['WHO-Recognized', 'English-Taught', '6-Year Program', 'High Success Rate', 'Low Living Cost', 'No Donation'])",children:"Learn More"})]})]}),e("div",{className:"mbbs-card animate-on-scroll",children:[e("div",{className:"mbbs-header",children:[e("div",{className:"country-flag-large",children:"🇷🇺"}),e("h3",{children:"Russia MBBS"})]}),e("div",{className:"mbbs-content",children:[e("div",{className:"price-tag",children:"$4,000/year"}),e("ul",{className:"mbbs-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," WHO-Recognized"]}),e("li",{children:[e("i",{className:"fas fa-check"})," English Medium"]}),e("li",{children:[e("i",{className:"fas fa-check"})," World-Class Facilities"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Affordable Living"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Quality Education"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Safe Environment"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('russia-mbbs', 'Russia MBBS', '$4,000', '/year', '🇷🇺', ['WHO-Recognized', 'English Medium', 'World-Class Facilities', 'Affordable Living', 'Quality Education', 'Safe Environment'])",children:"Learn More"})]})]})]}),e("div",{className:"mbbs-cta",children:e("p",{className:"highlight-text",children:[e("i",{className:"fas fa-star"}),"Alternative to expensive UK/US/Canada medical programs - Save over $200,000!"]})})]})}),e("section",{className:"test-prep-marketplace",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"📚 Test Preparation"}),e("h2",{children:"Test Prep Course Marketplace"}),e("p",{children:"Ace your language proficiency tests with our expert-led courses"})]}),e("div",{className:"marketplace-grid",id:"testPrepGrid",children:[e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-badge",children:"Most Popular"}),e("div",{className:"course-icon",children:"🎯"}),e("h3",{children:"IELTS Preparation"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 2,000"}),e("span",{className:"current-price",children:"AED 1,499"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 60 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Live Online Classes"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Mock Tests Included"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 7+ Guarantee"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Study Materials"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Personal Tutor Support"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('ielts-prep', 'IELTS Preparation', 'AED 1,499', '', '🎯', ['60 Hours of Training', 'Live Online Classes', 'Mock Tests Included', 'Score 7+ Guarantee', 'Study Materials', 'Personal Tutor Support'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-icon",children:"🎓"}),e("h3",{children:"PTE Academic"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 1,800"}),e("span",{className:"current-price",children:"AED 1,299"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 50 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Computer-Based Practice"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 10 Full Mock Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 65+ Guarantee"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Practice Tests & Scoring"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Flexible Schedule"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('pte-academic', 'PTE Academic', 'AED 1,299', '', '🎓', ['50 Hours of Training', 'Computer-Based Practice', '10 Full Mock Tests', 'Score 65+ Guarantee', 'Practice Tests & Scoring', 'Flexible Schedule'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-icon",children:"📖"}),e("h3",{children:"TOEFL iBT"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 2,200"}),e("span",{className:"current-price",children:"AED 1,699"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 65 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Comprehensive Curriculum"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 8 Practice Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 100+ Focus"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Expert Instructors"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Lifetime Materials Access"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('toefl-ibt', 'TOEFL iBT', 'AED 1,699', '', '📖', ['65 Hours of Training', 'Comprehensive Curriculum', '8 Practice Tests', 'Score 100+ Focus', 'Expert Instructors', 'Lifetime Materials Access'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-hidden",children:[e("div",{className:"course-badge",children:"New"}),e("div",{className:"course-icon",children:"🌟"}),e("h3",{children:"Duolingo English Test"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 1,500"}),e("span",{className:"current-price",children:"AED 999"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 40 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Fast-Track Program"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 15 Practice Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 120+ Target"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Adaptive Learning"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 24/7 Online Access"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]})]}),e("div",{className:"marketplace-cta",children:e("p",{children:[e("i",{className:"fas fa-gift"})," ",e("strong",{children:"Special Offer:"})," Get 20% off when you enroll with our university admission package!"]})})]})}),e("section",{className:"fee-structure-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"💰 Transparent Pricing"}),e("h2",{children:"Our Fee Structure"}),e("p",{children:"Clear, affordable pricing with no hidden costs - Pay after guaranteed admission!"})]}),e("div",{className:"fee-structure-content",children:[e("div",{className:"fee-highlight animate-on-scroll",children:[e("div",{className:"discount-banner",children:[e("span",{className:"old-fee",children:"AED 5,000"}),e("span",{className:"arrow",children:"→"}),e("span",{className:"new-fee",children:"AED 2,500"}),e("div",{className:"discount-badge",children:"50% OFF"})]}),e("h3",{children:"Limited Time Offer - Total Service Fee"})]}),e("div",{className:"payment-timeline animate-on-scroll",children:[e("div",{className:"timeline-step",children:[e("div",{className:"step-number",children:"1"}),e("div",{className:"step-content",children:[e("h4",{children:"Free Consultation"}),e("p",{className:"step-price",children:"AED 0"}),e("p",{children:"Initial assessment, course selection, university recommendations"})]})]}),e("div",{className:"timeline-connector"}),e("div",{className:"timeline-step highlight",children:[e("div",{className:"step-number",children:"2"}),e("div",{className:"step-content",children:[e("h4",{children:"100% Guaranteed Admission"}),e("p",{className:"step-price",children:"AED 1,500"}),e("p",{children:"Pay only after receiving your admission letter with our 100% guarantee"})]})]}),e("div",{className:"timeline-connector"}),e("div",{className:"timeline-step",children:[e("div",{className:"step-number",children:"3"}),e("div",{className:"step-content",children:[e("h4",{children:"After Visa Approval"}),e("p",{className:"step-price",children:"AED 1,000"}),e("p",{children:"Final payment after your student visa is successfully approved"})]})]})]}),e("div",{className:"fee-inclusions animate-on-scroll",children:[e("h3",{children:"What's Included in Your Package"}),e("div",{className:"inclusions-grid",children:[e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"University Selection & Applications"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Document Preparation & Review"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Visa Application Support"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Scholarship Assistance"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Interview Preparation"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Pre/Post Departure Support"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Accommodation Assistance"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Ongoing Support & Guidance"})]})]})]}),e("div",{className:"fee-cta animate-on-scroll",children:[e("button",{className:"btn btn-accent btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-check"}),"Start with Free Consultation"]}),e("p",{className:"guarantee-text",children:[e("i",{className:"fas fa-shield-alt"}),e("strong",{children:"100% Money-Back Guarantee"})," - If we don't get you admitted, you pay nothing!"]})]})]})]})}),e("section",{className:"testimonials-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("h2",{children:"Success Stories"}),e("p",{children:"Hear from our successful students"})]}),e("div",{className:"testimonials-grid",children:[e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"SCHOLARIX helped me secure admission at Technical University of Munich with excellent scholarship support. The entire process was smooth and professional!"'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student1.jpg",alt:"Priya Sharma"}),e("div",{className:"author-info",children:[e("h4",{children:"Priya Sharma"}),e("p",{children:"Technical University of Munich, Germany"})]})]})]}),e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"Got my German student visa in just 3 weeks! The team guided me through every step and made the documentation process stress-free."'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student2.jpg",alt:"Raj Patel"}),e("div",{className:"author-info",children:[e("h4",{children:"Raj Patel"}),e("p",{children:"University of Stuttgart, Germany"})]})]})]}),e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"The IELTS coaching was excellent. I scored 7.5 and got admitted to Trinity College Dublin. Thank you SCHOLARIX for the amazing support!"'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student3.jpg",alt:"Sarah Ahmed"}),e("div",{className:"author-info",children:[e("h4",{children:"Sarah Ahmed"}),e("p",{children:"Trinity College Dublin, Ireland"})]})]})]})]})]})}),e("section",{className:"cta-section",children:e("div",{className:"container",children:e("div",{className:"cta-content",children:[e("h2",{children:"Ready to Start Your Study Abroad Journey?"}),e("p",{children:"Get expert guidance and personalized support to achieve your international education dreams"}),e("div",{className:"cta-buttons",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-outline btn-large",onclick:"document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})",children:[e("i",{className:"fas fa-envelope"}),"Get Information"]})]})]})})}),e("section",{className:"contact-form-section",id:"contact-form",children:e("div",{className:"container",children:e("div",{className:"form-container",children:[e("div",{className:"form-content",children:[e("h2",{children:"Get Your Free Consultation"}),e("p",{children:"Fill out this form and our experts will contact you within 24 hours"}),e("div",{className:"progressive-form-container",children:e("form",{action:"https://formspree.io/f/xyzgkjad",method:"post",className:"progressive-form",id:"leadForm",children:[e("input",{type:"hidden",name:"_subject",value:"New SCHOLARIX Consultation Request"}),e("input",{type:"hidden",name:"_next",value:"https://scholarix-study-abroad.pages.dev/thank-you"}),e("div",{className:"form-step active",id:"step1",children:[e("div",{className:"step-progress",children:[e("div",{className:"progress-indicator",children:"Step 1 of 2"}),e("div",{className:"progress-bar",children:e("div",{className:"progress-fill",style:{width:"50%"}})})]}),e("div",{className:"form-fields",children:[e("div",{className:"form-group",children:e("input",{type:"text",name:"fullName",placeholder:"Full Name*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"email",name:"email",placeholder:"Email Address*",required:!0})}),e("div",{className:"form-group",children:e("div",{className:"phone-input-wrapper",children:[e("select",{name:"countryCode",className:"country-code-select",required:!0,children:[e("option",{value:"+971",children:"🇦🇪 +971"}),e("option",{value:"+1",children:"🇺🇸 +1"}),e("option",{value:"+44",children:"🇬🇧 +44"}),e("option",{value:"+91",children:"�� +91"}),e("option",{value:"+92",children:"�� +92"})]}),e("input",{type:"tel",name:"phone",placeholder:"Phone Number*",required:!0})]})})]}),e("button",{type:"button",className:"btn btn-primary btn-large",onclick:"showStep2()",children:[e("i",{className:"fas fa-arrow-right"}),"Get Started"]}),e("div",{className:"trust-indicators",children:[e("div",{className:"trust-item",children:[e("i",{className:"fas fa-shield-alt"}),e("span",{children:"Secure & Confidential"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-clock"}),e("span",{children:"Response in 24 hours"})]})]})]}),e("div",{className:"form-step",id:"step2",style:{display:"none"},children:[e("div",{className:"step-progress",children:[e("div",{className:"progress-indicator",children:"Step 2 of 2"}),e("div",{className:"progress-bar",children:e("div",{className:"progress-fill",style:{width:"100%"}})})]}),e("div",{className:"form-fields",children:[e("div",{className:"form-group",children:e("select",{name:"destination",required:!0,children:[e("option",{value:"",children:"Preferred Destination*"}),e("option",{value:"germany",children:"🇩🇪 Germany"}),e("option",{value:"canada",children:"🇨🇦 Canada"}),e("option",{value:"uk",children:"🇬🇧 United Kingdom"}),e("option",{value:"ireland",children:"🇮🇪 Ireland"}),e("option",{value:"australia",children:"🇦🇺 Australia"}),e("option",{value:"france",children:"🇫🇷 France"})]})}),e("div",{className:"form-group",children:e("select",{name:"studyLevel",required:!0,children:[e("option",{value:"",children:"Study Level*"}),e("option",{value:"bachelor",children:"Bachelor's Degree"}),e("option",{value:"master",children:"Master's Degree"}),e("option",{value:"phd",children:"PhD/Research"})]})}),e("div",{className:"form-group",children:e("select",{name:"timeline",required:!0,children:[e("option",{value:"",children:"When to Start*"}),e("option",{value:"2025",children:"2025"}),e("option",{value:"2026",children:"2026"}),e("option",{value:"2027",children:"2027 or later"})]})}),e("div",{className:"form-group",children:e("textarea",{name:"message",placeholder:"Any specific questions or requirements? (Optional)",rows:3})})]}),e("div",{className:"form-actions",children:[e("button",{type:"button",className:"btn btn-secondary",onclick:"showStep1()",children:[e("i",{className:"fas fa-arrow-left"}),"Back"]}),e("button",{type:"submit",className:"btn btn-primary btn-large",children:[e("i",{className:"fas fa-calendar-check"}),"Complete"]})]})]})]})})]}),e("div",{className:"form-image",children:[e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX - Free Consultation"}),e("div",{className:"contact-info",children:[e("h3",{children:"Contact Information"}),e("div",{className:"contact-item",children:[e("i",{className:"fas fa-phone text-primary"}),e("div",{children:[e("strong",{children:"Call Us"}),e("p",{children:"+971 52 543 8784"})]})]}),e("div",{className:"contact-item",children:[e("i",{className:"fas fa-envelope text-primary"}),e("div",{children:[e("strong",{children:"Email Us"}),e("p",{children:"info@scholarixstudy.com"})]})]}),e("div",{className:"contact-item",children:[e("i",{className:"fas fa-comments text-accent"}),e("div",{children:[e("strong",{children:"Live Chat"}),e("p",{children:"Available 24/7"})]})]})]})]})]})})}),e("div",{id:"consultationModal",className:"modal",children:e("div",{className:"modal-content",children:[e("span",{className:"close",onclick:"closeConsultationModal()",children:"×"}),e("h2",{children:"Book Your Free Consultation"}),e("p",{children:"Choose your preferred consultation method:"}),e("div",{className:"consultation-options",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat Consultation"]}),e("button",{className:"btn btn-secondary btn-large",onclick:"window.open('tel:+971525438784', '_self')",children:[e("i",{className:"fas fa-phone"}),"Phone Call"]}),e("button",{className:"btn btn-outline btn-large",onclick:"closeConsultationModal(); document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})",children:[e("i",{className:"fas fa-envelope"}),"Email Inquiry"]})]})]})}),e("div",{className:"whatsapp-sticky",children:e("a",{href:"https://wa.me/971525438784?text=Hi%20SCHOLARIX%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%20me%3F",className:"whatsapp-btn",target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with us on WhatsApp",children:[e("i",{className:"fab fa-whatsapp"}),e("span",{className:"whatsapp-text",children:"Chat with us"})]})})]})));F.get("/about",t=>t.render(e("div",{className:"about-page",children:e("div",{className:"container",children:[e("section",{className:"about-hero",children:e("div",{className:"about-hero-content",children:[e("h1",{children:"About SCHOLARIX"}),e("p",{className:"hero-subtitle",children:"Empowering students to achieve their international education dreams since 2018. With over 10,000 successful student placements and a 99% visa success rate, we are your trusted partner for study abroad success."})]})}),e("section",{className:"about-mission",children:e("div",{className:"section-header",children:[e("h2",{children:"Our Mission"}),e("p",{children:"To provide world-class educational guidance and support, helping students navigate their academic journeys and achieve their full potential in international education."})]})}),e("section",{className:"about-stats",children:e("div",{className:"stats-grid",children:[e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"10,000+"}),e("div",{className:"stat-label",children:"Students Placed"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"99%"}),e("div",{className:"stat-label",children:"Visa Success Rate"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"500+"}),e("div",{className:"stat-label",children:"Partner Universities"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"15+"}),e("div",{className:"stat-label",children:"Countries Covered"})]})]})}),e("section",{className:"about-team",children:[e("div",{className:"section-header",children:[e("h2",{children:"Our Expert Team"}),e("p",{children:"Experienced counselors and visa experts dedicated to your success"})]}),e("div",{className:"team-grid",children:[e("div",{className:"team-member",children:[e("img",{src:"/static/images/team1.jpg",alt:"Sarah Johnson"}),e("h3",{children:"Sarah Johnson"}),e("p",{children:"Senior Education Counselor"}),e("p",{children:"10+ years experience in US and UK admissions"})]}),e("div",{className:"team-member",children:[e("img",{src:"/static/images/team2.jpg",alt:"Michael Chen"}),e("h3",{children:"Michael Chen"}),e("p",{children:"Visa Specialist"}),e("p",{children:"Expert in student visa applications for all countries"})]}),e("div",{className:"team-member",children:[e("img",{src:"/static/images/team3.jpg",alt:"Dr. Priya Patel"}),e("h3",{children:"Dr. Priya Patel"}),e("p",{children:"Academic Director"}),e("p",{children:"PhD in International Education, 15+ years experience"})]})]})]}),e("div",{className:"about-cta",children:e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:"Meet Our Team"})})]})})));F.get("/contact",t=>t.render(e("div",{className:"contact-page",children:e("div",{className:"container",children:[e("section",{className:"contact-hero",children:[e("h1",{children:"Contact SCHOLARIX"}),e("p",{children:"Ready to start your study abroad journey? Get in touch with our experts today!"})]}),e("section",{className:"contact-main",children:e("div",{className:"contact-grid",children:[e("div",{className:"contact-info",children:[e("h2",{children:"Get In Touch"}),e("div",{className:"contact-methods",children:[e("div",{className:"contact-method",children:[e("i",{className:"fas fa-phone text-primary"}),e("div",{children:[e("h4",{children:"Phone"}),e("p",{children:"+971 52 543 8784"}),e("small",{children:"Mon-Sat: 9AM-7PM GST"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-envelope text-primary"}),e("div",{children:[e("h4",{children:"Email"}),e("p",{children:"info@scholarixstudy.com"}),e("small",{children:"Response within 24 hours"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-comments text-accent"}),e("div",{children:[e("h4",{children:"Live Chat"}),e("p",{children:"24/7 Available"}),e("small",{children:"Instant messaging support"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-map-marker-alt text-primary"}),e("div",{children:[e("h4",{children:"Office"}),e("p",{children:"Dubai, United Arab Emirates"}),e("small",{children:"By appointment only"})]})]})]})]}),e("div",{className:"contact-form",children:[e("h2",{children:"Send Us a Message"}),e("form",{id:"contactForm",className:"lead-form",children:[e("div",{className:"form-row",children:[e("div",{className:"form-group",children:e("input",{type:"text",name:"firstName",placeholder:"First Name*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"text",name:"lastName",placeholder:"Last Name*",required:!0})})]}),e("div",{className:"form-group",children:e("input",{type:"email",name:"email",placeholder:"Email Address*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"tel",name:"phone",placeholder:"Phone Number*",required:!0})}),e("div",{className:"form-group",children:e("select",{name:"subject",required:!0,children:[e("option",{value:"",children:"Subject*"}),e("option",{value:"general",children:"General Inquiry"}),e("option",{value:"visa",children:"Visa Support"}),e("option",{value:"admission",children:"University Admission"}),e("option",{value:"scholarship",children:"Scholarships"}),e("option",{value:"ielts",children:"IELTS/PTE Preparation"}),e("option",{value:"appointment",children:"Book Appointment"})]})}),e("div",{className:"form-group",children:e("textarea",{name:"message",placeholder:"Your Message*",required:!0})}),e("button",{type:"submit",className:"btn btn-primary btn-large btn-full",children:[e("i",{className:"fas fa-paper-plane"}),"Send Message"]})]})]})]})}),e("section",{className:"office-hours",children:[e("h2",{children:"Office Hours"}),e("div",{className:"hours-grid",children:[e("div",{className:"hours-item",children:[e("strong",{children:"Monday - Friday"}),e("span",{children:"9:00 AM - 7:00 PM GST"})]}),e("div",{className:"hours-item",children:[e("strong",{children:"Saturday"}),e("span",{children:"10:00 AM - 4:00 PM GST"})]}),e("div",{className:"hours-item",children:[e("strong",{children:"Sunday"}),e("span",{children:"Closed"})]})]})]})]})})));F.get("/blog",t=>t.render(e("div",{className:"blog-page",children:e("div",{className:"container",children:[e("section",{className:"blog-hero",children:[e("h1",{children:"Study Abroad Blog"}),e("p",{children:"Latest insights, tips, and updates for international students"})]}),e("section",{className:"blog-grid",children:[e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog1.jpg",alt:"IELTS Preparation Tips"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 15, 2024"}),e("span",{className:"blog-category",children:"Test Preparation"})]}),e("h2",{children:"10 Essential IELTS Preparation Tips for High Scores"}),e("p",{children:"Master the IELTS exam with these proven strategies and achieve your target band score for university admission..."}),e("a",{href:"/blog/ielts-preparation-tips",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog2.jpg",alt:"Scholarship Guide"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 10, 2024"}),e("span",{className:"blog-category",children:"Scholarships"})]}),e("h2",{children:"Complete Guide to International Scholarships for 2024"}),e("p",{children:"Discover available scholarships, application deadlines, and expert tips to secure funding for your studies abroad..."}),e("a",{href:"/blog/scholarship-guide-2024",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog3.jpg",alt:"Visa Interview Tips"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 5, 2024"}),e("span",{className:"blog-category",children:"Visa Support"})]}),e("h2",{children:"Ace Your Student Visa Interview: Common Questions & Answers"}),e("p",{children:"Prepare for your visa interview with confidence using these expert tips and practice questions..."}),e("a",{href:"/blog/visa-interview-tips",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog4.jpg",alt:"University Selection"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 28, 2024"}),e("span",{className:"blog-category",children:"University Selection"})]}),e("h2",{children:"How to Choose the Right University: A Complete Guide"}),e("p",{children:"Make informed decisions about your higher education with our comprehensive university selection guide..."}),e("a",{href:"/blog/university-selection-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog5.jpg",alt:"Canada Study Guide"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 20, 2024"}),e("span",{className:"blog-category",children:"Country Guide"})]}),e("h2",{children:"Why Canada is the Best Choice for International Students"}),e("p",{children:"Explore Canada's education system, work opportunities, and immigration pathways for international students..."}),e("a",{href:"/blog/study-in-canada-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog6.jpg",alt:"SOP Writing"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 15, 2024"}),e("span",{className:"blog-category",children:"Application Tips"})]}),e("h2",{children:"Writing a Winning Statement of Purpose (SOP)"}),e("p",{children:"Create a compelling SOP that stands out to admission committees with our step-by-step guide..."}),e("a",{href:"/blog/sop-writing-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]})]}),e("section",{className:"blog-categories",children:[e("h2",{children:"Browse by Category"}),e("div",{className:"categories-grid",children:[e("a",{href:"/blog/category/test-preparation",className:"category-card",children:[e("i",{className:"fas fa-book text-primary"}),e("h3",{children:"Test Preparation"}),e("p",{children:"IELTS, TOEFL, PTE, SAT, GRE guides"})]}),e("a",{href:"/blog/category/visa-support",className:"category-card",children:[e("i",{className:"fas fa-passport text-primary"}),e("h3",{children:"Visa Support"}),e("p",{children:"Student visa tips and guidelines"})]}),e("a",{href:"/blog/category/scholarships",className:"category-card",children:[e("i",{className:"fas fa-trophy text-accent"}),e("h3",{children:"Scholarships"}),e("p",{children:"Funding opportunities and tips"})]}),e("a",{href:"/blog/category/country-guides",className:"category-card",children:[e("i",{className:"fas fa-globe text-primary"}),e("h3",{children:"Country Guides"}),e("p",{children:"Study destination information"})]})]})]})]})})));F.get("/services/:service",t=>{const a=t.req.param("service"),i={visa:{title:"Study Visa Support",description:"Expert guidance for student visa applications with 99% success rate",content:`
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
      `}},s=i[a]||i.visa;return t.render(e("div",{className:"service-page",children:e("div",{className:"container",children:[e("div",{className:"service-hero",children:[e("h1",{children:s.title}),e("p",{className:"hero-subtitle",children:s.description})]}),e("div",{className:"service-content",dangerouslySetInnerHTML:{__html:s.content}}),e("div",{className:"service-cta-section",children:[e("h2",{children:"Ready to Get Started?"}),e("p",{children:"Book your free consultation today and take the first step toward your study abroad journey."}),e("div",{className:"service-actions",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-outline btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat"]})]})]})]})}))});F.post("/api/lead",async t=>{try{const a=await t.req.json();console.log("New lead received:",a);const i={timestamp:new Date().toISOString(),firstName:a.firstName||"",lastName:a.lastName||"",email:a.email||"",phone:`${a.countryCode||""} ${a.phone||""}`.trim(),country:a.country||"",service:a.service||"",message:a.message||""},s=await Promise.allSettled([Ns(i),bs(i)]);return s.some(r=>r.status==="fulfilled")?t.json({success:!0,message:"Thank you! We have received your inquiry and will contact you within 24 hours."}):(s.forEach((r,l)=>{r.status==="rejected"&&console.error(`Integration ${l} failed:`,r.reason)}),t.json({success:!1,message:"Thank you for your interest. Please call us directly at +971-XX-XXX-XXXX for immediate assistance."}))}catch(a){return console.error("API Error:",a),t.json({success:!1,message:"Something went wrong. Please try again or contact us directly."},500)}});async function Ns(t){try{const i=await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"addLead",data:t})});if(!i.ok)throw new Error(`Google Sheets API error: ${i.status}`);const s=await i.json();return console.log("Successfully added to Google Sheets:",s),s}catch(a){throw console.error("Google Sheets integration error:",a),a}}async function bs(t){try{const a="https://api.emailjs.com/api/v1.0/email/send",i={service_id:"YOUR_SERVICE_ID",template_id:"YOUR_TEMPLATE_ID",user_id:"YOUR_USER_ID",template_params:{to_email:"info@scholarixstudy.com",from_name:`${t.firstName} ${t.lastName}`,reply_to:t.email,subject:"New SCHOLARIX Consultation Request",message:`
New consultation request received:

Name: ${t.firstName} ${t.lastName}
Email: ${t.email}
Phone: ${t.phone}
Preferred Country: ${t.country}
Service: ${t.service}
Message: ${t.message}

Submitted: ${new Date(t.timestamp).toLocaleString()}
        `}},s=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok)throw new Error(`Email service error: ${s.status}`);return console.log("Email notification sent successfully"),{success:!0}}catch(a){throw console.error("Email notification error:",a),a}}const Vt=new Ma,ws=Object.assign({"/src/index.tsx":F});let $a=!1;for(const[,t]of Object.entries(ws))t&&(Vt.all("*",a=>{let i;try{i=a.executionCtx}catch{}return t.fetch(a.req.raw,a.env,i)}),Vt.notFound(a=>{let i;try{i=a.executionCtx}catch{}return t.fetch(a.req.raw,a.env,i)}),$a=!0);if(!$a)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Vt as default};
