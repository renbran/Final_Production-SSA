var za=Object.defineProperty;var Ct=t=>{throw TypeError(t)};var qa=(t,a,i)=>a in t?za(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;var v=(t,a,i)=>qa(t,typeof a!="symbol"?a+"":a,i),it=(t,a,i)=>a.has(t)||Ct("Cannot "+i);var m=(t,a,i)=>(it(t,a,"read from private field"),i?i.call(t):a.get(t)),E=(t,a,i)=>a.has(t)?Ct("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,i),N=(t,a,i,n)=>(it(t,a,"write to private field"),n?n.call(t,i):a.set(t,i),i),k=(t,a,i)=>(it(t,a,"access private method"),i);var At=(t,a,i,n)=>({set _(s){N(t,a,s,i)},get _(){return m(t,a,n)}});var ta={Stringify:1},j=(t,a)=>{const i=new String(t);return i.isEscaped=!0,i.callbacks=a,i},$a=/[&<>'"]/,aa=async(t,a)=>{let i="";a||(a=[]);const n=await Promise.all(t);for(let s=n.length-1;i+=n[s],s--,!(s<0);s--){let r=n[s];typeof r=="object"&&a.push(...r.callbacks||[]);const o=r.isEscaped;if(r=await(typeof r=="object"?r.toString():r),typeof r=="object"&&a.push(...r.callbacks||[]),r.isEscaped??o)i+=r;else{const l=[i];te(r,l),i=l[0]}}return j(i,a)},te=(t,a)=>{const i=t.search($a);if(i===-1){a[0]+=t;return}let n,s,r=0;for(s=i;s<t.length;s++){switch(t.charCodeAt(s)){case 34:n="&quot;";break;case 39:n="&#39;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a[0]+=t.substring(r,s)+n,r=s+1}a[0]+=t.substring(r,s)},ia=t=>{const a=t.callbacks;if(!(a!=null&&a.length))return t;const i=[t],n={};return a.forEach(s=>s({phase:ta.Stringify,buffer:i,context:n})),i[0]},na=async(t,a,i,n,s)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const r=t.callbacks;return r!=null&&r.length?(s?s[0]+=t:s=[t],Promise.all(r.map(l=>l({phase:a,buffer:s,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(c=>na(c,a,!1,n,s))).then(()=>s[0]))):Promise.resolve(t)},Ga=(t,...a)=>{const i=[""];for(let n=0,s=t.length-1;n<s;n++){i[0]+=t[n];const r=Array.isArray(a[n])?a[n].flat(1/0):[a[n]];for(let o=0,l=r.length;o<l;o++){const c=r[o];if(typeof c=="string")te(c,i);else if(typeof c=="number")i[0]+=c;else{if(typeof c=="boolean"||c===null||c===void 0)continue;if(typeof c=="object"&&c.isEscaped)if(c.callbacks)i.unshift("",c);else{const d=c.toString();d instanceof Promise?i.unshift("",d):i[0]+=d}else c instanceof Promise?i.unshift("",c):te(c.toString(),i)}}}return i[0]+=t.at(-1),i.length===1?"callbacks"in i?j(ia(j(i[0],i.callbacks))):j(i[0]):aa(i,i.callbacks)},bt=Symbol("RENDERER"),ut=Symbol("ERROR_HANDLER"),A=Symbol("STASH"),sa=Symbol("INTERNAL"),Ua=Symbol("MEMO"),Je=Symbol("PERMALINK"),Tt=t=>(t[sa]=!0,t),ra=t=>({value:a,children:i})=>{if(!i)return;const n={children:[{tag:Tt(()=>{t.push(a)}),props:{}}]};Array.isArray(i)?n.children.push(...i.flat()):n.children.push(i),n.children.push({tag:Tt(()=>{t.pop()}),props:{}});const s={tag:"",props:n,type:""};return s[ut]=r=>{throw t.pop(),r},s},oa=t=>{const a=[t],i=ra(a);return i.values=a,i.Provider=i,we.push(i),i},we=[],Nt=t=>{const a=[t],i=n=>{a.push(n.value);let s;try{s=n.children?(Array.isArray(n.children)?new ma("",{},n.children):n.children).toString():""}finally{a.pop()}return s instanceof Promise?s.then(r=>j(r,r.callbacks)):j(s)};return i.values=a,i.Provider=i,i[bt]=ra(a),we.push(i),i},Se=t=>t.values.at(-1),$e={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},pt={},Ge="data-precedence",He=t=>Array.isArray(t)?t:[t],Lt=new WeakMap,Pt=(t,a,i,n)=>({buffer:s,context:r})=>{if(!s)return;const o=Lt.get(r)||{};Lt.set(r,o);const l=o[t]||(o[t]=[]);let c=!1;const d=$e[t];if(d.length>0){e:for(const[,h]of l)for(const u of d)if(((h==null?void 0:h[u])??null)===(i==null?void 0:i[u])){c=!0;break e}}if(c?s[0]=s[0].replaceAll(a,""):d.length>0?l.push([a,i,n]):l.unshift([a,i,n]),s[0].indexOf("</head>")!==-1){let h;if(n===void 0)h=l.map(([u])=>u);else{const u=[];h=l.map(([p,,g])=>{let b=u.indexOf(g);return b===-1&&(u.push(g),b=u.length-1),[p,b]}).sort((p,g)=>p[1]-g[1]).map(([p])=>p)}h.forEach(u=>{s[0]=s[0].replaceAll(u,"")}),s[0]=s[0].replace(/(?=<\/head>)/,h.join(""))}},Be=(t,a,i)=>j(new F(t,i,He(a??[])).toString()),Fe=(t,a,i,n)=>{if("itemProp"in i)return Be(t,a,i);let{precedence:s,blocking:r,...o}=i;s=n?s??"":void 0,n&&(o[Ge]=s);const l=new F(t,o,He(a||[])).toString();return l instanceof Promise?l.then(c=>j(l,[...c.callbacks||[],Pt(t,c,o,s)])):j(l,[Pt(t,l,o,s)])},Va=({children:t,...a})=>{const i=wt();if(i){const n=Se(i);if(n==="svg"||n==="head")return new F("title",a,He(t??[]))}return Fe("title",t,a,!1)},Wa=({children:t,...a})=>{const i=wt();return["src","async"].some(n=>!a[n])||i&&Se(i)==="head"?Be("script",t,a):Fe("script",t,a,!1)},Xa=({children:t,...a})=>["href","precedence"].every(i=>i in a)?(a["data-href"]=a.href,delete a.href,Fe("style",t,a,!0)):Be("style",t,a),Ya=({children:t,...a})=>["onLoad","onError"].some(i=>i in a)||a.rel==="stylesheet"&&(!("precedence"in a)||"disabled"in a)?Be("link",t,a):Fe("link",t,a,"precedence"in a),Ka=({children:t,...a})=>{const i=wt();return i&&Se(i)==="head"?Be("meta",t,a):Fe("meta",t,a,!1)},la=(t,{children:a,...i})=>new F(t,i,He(a??[])),Ja=t=>(typeof t.action=="function"&&(t.action=Je in t.action?t.action[Je]:void 0),la("form",t)),ca=(t,a)=>(typeof a.formAction=="function"&&(a.formAction=Je in a.formAction?a.formAction[Je]:void 0),la(t,a)),Za=t=>ca("input",t),Qa=t=>ca("button",t);const nt=Object.freeze(Object.defineProperty({__proto__:null,button:Qa,form:Ja,input:Za,link:Ya,meta:Ka,script:Wa,style:Xa,title:Va},Symbol.toStringTag,{value:"Module"}));var ei=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),Ze=t=>ei.get(t)||t,da=(t,a)=>{for(const[i,n]of Object.entries(t)){const s=i[0]==="-"||!/[A-Z]/.test(i)?i:i.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`);a(s,n==null?null:typeof n=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${n}`:`${n}px`:n)}},Te=void 0,wt=()=>Te,ti=t=>/[A-Z]/.test(t)&&t.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,ai=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],ii=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Et=(t,a)=>{for(let i=0,n=t.length;i<n;i++){const s=t[i];if(typeof s=="string")te(s,a);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof F?s.toStringToBuffer(a):typeof s=="number"||s.isEscaped?a[0]+=s:s instanceof Promise?a.unshift("",s):Et(s,a)}}},F=class{constructor(t,a,i){v(this,"tag");v(this,"props");v(this,"key");v(this,"children");v(this,"isEscaped",!0);v(this,"localContexts");this.tag=t,this.props=a,this.children=i}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var a,i;const t=[""];(a=this.localContexts)==null||a.forEach(([n,s])=>{n.values.push(s)});try{this.toStringToBuffer(t)}finally{(i=this.localContexts)==null||i.forEach(([n])=>{n.values.pop()})}return t.length===1?"callbacks"in t?ia(j(t[0],t.callbacks)).toString():t[0]:aa(t,t.callbacks)}toStringToBuffer(t){const a=this.tag,i=this.props;let{children:n}=this;t[0]+=`<${a}`;const s=Te&&Se(Te)==="svg"?r=>ti(Ze(r)):r=>Ze(r);for(let[r,o]of Object.entries(i))if(r=s(r),r!=="children"){if(r==="style"&&typeof o=="object"){let l="";da(o,(c,d)=>{d!=null&&(l+=`${l?";":""}${c}:${d}`)}),t[0]+=' style="',te(l,t),t[0]+='"'}else if(typeof o=="string")t[0]+=` ${r}="`,te(o,t),t[0]+='"';else if(o!=null)if(typeof o=="number"||o.isEscaped)t[0]+=` ${r}="${o}"`;else if(typeof o=="boolean"&&ii.includes(r))o&&(t[0]+=` ${r}=""`);else if(r==="dangerouslySetInnerHTML"){if(n.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");n=[j(o.__html)]}else if(o instanceof Promise)t[0]+=` ${r}="`,t.unshift('"',o);else if(typeof o=="function"){if(!r.startsWith("on")&&r!=="ref")throw new Error(`Invalid prop '${r}' of type 'function' supplied to '${a}'.`)}else t[0]+=` ${r}="`,te(o.toString(),t),t[0]+='"'}if(ai.includes(a)&&n.length===0){t[0]+="/>";return}t[0]+=">",Et(n,t),t[0]+=`</${a}>`}},st=class extends F{toStringToBuffer(t){const{children:a}=this,i=this.tag.call(null,{...this.props,children:a.length<=1?a[0]:a});if(!(typeof i=="boolean"||i==null))if(i instanceof Promise)if(we.length===0)t.unshift("",i);else{const n=we.map(s=>[s,s.values.at(-1)]);t.unshift("",i.then(s=>(s instanceof F&&(s.localContexts=n),s)))}else i instanceof F?i.toStringToBuffer(t):typeof i=="number"||i.isEscaped?(t[0]+=i,i.callbacks&&(t.callbacks||(t.callbacks=[]),t.callbacks.push(...i.callbacks))):te(i,t)}},ma=class extends F{toStringToBuffer(t){Et(this.children,t)}},It=(t,a,...i)=>{a??(a={}),i.length&&(a.children=i.length===1?i[0]:i);const n=a.key;delete a.key;const s=Ue(t,a,i);return s.key=n,s},Mt=!1,Ue=(t,a,i)=>{if(!Mt){for(const n in pt)nt[n][bt]=pt[n];Mt=!0}return typeof t=="function"?new st(t,a,i):nt[t]?new st(nt[t],a,i):t==="svg"||t==="head"?(Te||(Te=Nt("")),new F(t,a,[new st(Te,{value:t},i)])):new F(t,a,i)},ni=({children:t})=>new ma("",{children:t},Array.isArray(t)?t:t?[t]:[]);function e(t,a,i){let n;if(!a||!("children"in a))n=Ue(t,a,[]);else{const s=a.children;n=Array.isArray(s)?Ue(t,a,s):Ue(t,a,[s])}return n.key=i,n}var Rt=(t,a,i)=>(n,s)=>{let r=-1;return o(0);async function o(l){if(l<=r)throw new Error("next() called multiple times");r=l;let c,d=!1,h;if(t[l]?(h=t[l][0][0],n.req.routeIndex=l):h=l===t.length&&s||void 0,h)try{c=await h(n,()=>o(l+1))}catch(u){if(u instanceof Error&&a)n.error=u,c=await a(u,n),d=!0;else throw u}else n.finalized===!1&&i&&(c=await i(n));return c&&(n.finalized===!1||d)&&(n.res=c),n}},si=Symbol(),ri=async(t,a=Object.create(null))=>{const{all:i=!1,dot:n=!1}=a,r=(t instanceof va?t.raw.headers:t.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?oi(t,{all:i,dot:n}):{}};async function oi(t,a){const i=await t.formData();return i?li(i,a):{}}function li(t,a){const i=Object.create(null);return t.forEach((n,s)=>{a.all||s.endsWith("[]")?ci(i,s,n):i[s]=n}),a.dot&&Object.entries(i).forEach(([n,s])=>{n.includes(".")&&(di(i,n,s),delete i[n])}),i}var ci=(t,a,i)=>{t[a]!==void 0?Array.isArray(t[a])?t[a].push(i):t[a]=[t[a],i]:a.endsWith("[]")?t[a]=[i]:t[a]=i},di=(t,a,i)=>{let n=t;const s=a.split(".");s.forEach((r,o)=>{o===s.length-1?n[r]=i:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},ha=t=>{const a=t.split("/");return a[0]===""&&a.shift(),a},mi=t=>{const{groups:a,path:i}=hi(t),n=ha(i);return ui(n,a)},hi=t=>{const a=[];return t=t.replace(/\{[^}]+\}/g,(i,n)=>{const s=`@${n}`;return a.push([s,i]),s}),{groups:a,path:t}},ui=(t,a)=>{for(let i=a.length-1;i>=0;i--){const[n]=a[i];for(let s=t.length-1;s>=0;s--)if(t[s].includes(n)){t[s]=t[s].replace(n,a[i][1]);break}}return t},ze={},pi=(t,a)=>{if(t==="*")return"*";const i=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(i){const n=`${t}#${a}`;return ze[n]||(i[2]?ze[n]=a&&a[0]!==":"&&a[0]!=="*"?[n,i[1],new RegExp(`^${i[2]}(?=/${a})`)]:[t,i[1],new RegExp(`^${i[2]}$`)]:ze[n]=[t,i[1],!0]),ze[n]}return null},St=(t,a)=>{try{return a(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,i=>{try{return a(i)}catch{return i}})}},fi=t=>St(t,decodeURI),ua=t=>{const a=t.url,i=a.indexOf("/",a.indexOf(":")+4);let n=i;for(;n<a.length;n++){const s=a.charCodeAt(n);if(s===37){const r=a.indexOf("?",n),o=a.slice(i,r===-1?void 0:r);return fi(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(s===63)break}return a.slice(i,n)},gi=t=>{const a=ua(t);return a.length>1&&a.at(-1)==="/"?a.slice(0,-1):a},ue=(t,a,...i)=>(i.length&&(a=ue(a,...i)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${a==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(a==null?void 0:a[0])==="/"?a.slice(1):a}`}`),pa=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const a=t.split("/"),i=[];let n="";return a.forEach(s=>{if(s!==""&&!/\:/.test(s))n+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){i.length===0&&n===""?i.push("/"):i.push(n);const r=s.replace("?","");n+="/"+r,i.push(n)}else n+="/"+s}),i.filter((s,r,o)=>o.indexOf(s)===r)},rt=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?St(t,ga):t):t,fa=(t,a,i)=>{let n;if(!i&&a&&!/[%+]/.test(a)){let o=t.indexOf(`?${a}`,8);for(o===-1&&(o=t.indexOf(`&${a}`,8));o!==-1;){const l=t.charCodeAt(o+a.length+1);if(l===61){const c=o+a.length+2,d=t.indexOf("&",c);return rt(t.slice(c,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";o=t.indexOf(`&${a}`,o+1)}if(n=/[%+]/.test(t),!n)return}const s={};n??(n=/[%+]/.test(t));let r=t.indexOf("?",8);for(;r!==-1;){const o=t.indexOf("&",r+1);let l=t.indexOf("=",r);l>o&&o!==-1&&(l=-1);let c=t.slice(r+1,l===-1?o===-1?void 0:o:l);if(n&&(c=rt(c)),r=o,c==="")continue;let d;l===-1?d="":(d=t.slice(l+1,o===-1?void 0:o),n&&(d=rt(d))),i?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(d)):s[c]??(s[c]=d)}return a?s[a]:s},vi=fa,yi=(t,a)=>fa(t,a,!0),ga=decodeURIComponent,Ot=t=>St(t,ga),ge,O,W,ya,ba,ft,Y,Vt,va=(Vt=class{constructor(t,a="/",i=[[]]){E(this,W);v(this,"raw");E(this,ge);E(this,O);v(this,"routeIndex",0);v(this,"path");v(this,"bodyCache",{});E(this,Y,t=>{const{bodyCache:a,raw:i}=this,n=a[t];if(n)return n;const s=Object.keys(a)[0];return s?a[s].then(r=>(s==="json"&&(r=JSON.stringify(r)),new Response(r)[t]())):a[t]=i[t]()});this.raw=t,this.path=a,N(this,O,i),N(this,ge,{})}param(t){return t?k(this,W,ya).call(this,t):k(this,W,ba).call(this)}query(t){return vi(this.url,t)}queries(t){return yi(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const a={};return this.raw.headers.forEach((i,n)=>{a[n]=i}),a}async parseBody(t){var a;return(a=this.bodyCache).parsedBody??(a.parsedBody=await ri(this,t))}json(){return m(this,Y).call(this,"text").then(t=>JSON.parse(t))}text(){return m(this,Y).call(this,"text")}arrayBuffer(){return m(this,Y).call(this,"arrayBuffer")}blob(){return m(this,Y).call(this,"blob")}formData(){return m(this,Y).call(this,"formData")}addValidatedData(t,a){m(this,ge)[t]=a}valid(t){return m(this,ge)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[si](){return m(this,O)}get matchedRoutes(){return m(this,O)[0].map(([[,t]])=>t)}get routePath(){return m(this,O)[0].map(([[,t]])=>t)[this.routeIndex].path}},ge=new WeakMap,O=new WeakMap,W=new WeakSet,ya=function(t){const a=m(this,O)[0][this.routeIndex][1][t],i=k(this,W,ft).call(this,a);return i&&/\%/.test(i)?Ot(i):i},ba=function(){const t={},a=Object.keys(m(this,O)[0][this.routeIndex][1]);for(const i of a){const n=k(this,W,ft).call(this,m(this,O)[0][this.routeIndex][1][i]);n!==void 0&&(t[i]=/\%/.test(n)?Ot(n):n)}return t},ft=function(t){return m(this,O)[1]?m(this,O)[1][t]:t},Y=new WeakMap,Vt),bi="text/plain; charset=UTF-8",ot=(t,a)=>({"Content-Type":t,...a}),Ie,Me,$,ve,G,R,Re,ye,be,se,Oe,je,K,pe,Wt,Ni=(Wt=class{constructor(t,a){E(this,K);E(this,Ie);E(this,Me);v(this,"env",{});E(this,$);v(this,"finalized",!1);v(this,"error");E(this,ve);E(this,G);E(this,R);E(this,Re);E(this,ye);E(this,be);E(this,se);E(this,Oe);E(this,je);v(this,"render",(...t)=>(m(this,ye)??N(this,ye,a=>this.html(a)),m(this,ye).call(this,...t)));v(this,"setLayout",t=>N(this,Re,t));v(this,"getLayout",()=>m(this,Re));v(this,"setRenderer",t=>{N(this,ye,t)});v(this,"header",(t,a,i)=>{this.finalized&&N(this,R,new Response(m(this,R).body,m(this,R)));const n=m(this,R)?m(this,R).headers:m(this,se)??N(this,se,new Headers);a===void 0?n.delete(t):i!=null&&i.append?n.append(t,a):n.set(t,a)});v(this,"status",t=>{N(this,ve,t)});v(this,"set",(t,a)=>{m(this,$)??N(this,$,new Map),m(this,$).set(t,a)});v(this,"get",t=>m(this,$)?m(this,$).get(t):void 0);v(this,"newResponse",(...t)=>k(this,K,pe).call(this,...t));v(this,"body",(t,a,i)=>k(this,K,pe).call(this,t,a,i));v(this,"text",(t,a,i)=>!m(this,se)&&!m(this,ve)&&!a&&!i&&!this.finalized?new Response(t):k(this,K,pe).call(this,t,a,ot(bi,i)));v(this,"json",(t,a,i)=>k(this,K,pe).call(this,JSON.stringify(t),a,ot("application/json",i)));v(this,"html",(t,a,i)=>{const n=s=>k(this,K,pe).call(this,s,a,ot("text/html; charset=UTF-8",i));return typeof t=="object"?na(t,ta.Stringify,!1,{}).then(n):n(t)});v(this,"redirect",(t,a)=>{const i=String(t);return this.header("Location",/[^\x00-\xFF]/.test(i)?encodeURI(i):i),this.newResponse(null,a??302)});v(this,"notFound",()=>(m(this,be)??N(this,be,()=>new Response),m(this,be).call(this,this)));N(this,Ie,t),a&&(N(this,G,a.executionCtx),this.env=a.env,N(this,be,a.notFoundHandler),N(this,je,a.path),N(this,Oe,a.matchResult))}get req(){return m(this,Me)??N(this,Me,new va(m(this,Ie),m(this,je),m(this,Oe))),m(this,Me)}get event(){if(m(this,G)&&"respondWith"in m(this,G))return m(this,G);throw Error("This context has no FetchEvent")}get executionCtx(){if(m(this,G))return m(this,G);throw Error("This context has no ExecutionContext")}get res(){return m(this,R)||N(this,R,new Response(null,{headers:m(this,se)??N(this,se,new Headers)}))}set res(t){if(m(this,R)&&t){t=new Response(t.body,t);for(const[a,i]of m(this,R).headers.entries())if(a!=="content-type")if(a==="set-cookie"){const n=m(this,R).headers.getSetCookie();t.headers.delete("set-cookie");for(const s of n)t.headers.append("set-cookie",s)}else t.headers.set(a,i)}N(this,R,t),this.finalized=!0}get var(){return m(this,$)?Object.fromEntries(m(this,$)):{}}},Ie=new WeakMap,Me=new WeakMap,$=new WeakMap,ve=new WeakMap,G=new WeakMap,R=new WeakMap,Re=new WeakMap,ye=new WeakMap,be=new WeakMap,se=new WeakMap,Oe=new WeakMap,je=new WeakMap,K=new WeakSet,pe=function(t,a,i){const n=m(this,R)?new Headers(m(this,R).headers):m(this,se)??new Headers;if(typeof a=="object"&&"headers"in a){const r=a.headers instanceof Headers?a.headers:new Headers(a.headers);for(const[o,l]of r)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(i)for(const[r,o]of Object.entries(i))if(typeof o=="string")n.set(r,o);else{n.delete(r);for(const l of o)n.append(r,l)}const s=typeof a=="number"?a:(a==null?void 0:a.status)??m(this,ve);return new Response(t,{status:s,headers:n})},Wt),T="ALL",wi="all",Ei=["get","post","put","delete","options","patch"],Na="Can not add a route since the matcher is already built.",wa=class extends Error{},Si="__COMPOSED_HANDLER",xi=t=>t.text("404 Not Found",404),jt=(t,a)=>{if("getResponse"in t){const i=t.getResponse();return a.newResponse(i.body,i)}return console.error(t),a.text("Internal Server Error",500)},D,L,Sa,H,ie,Ve,We,Xt,Ea=(Xt=class{constructor(a={}){E(this,L);v(this,"get");v(this,"post");v(this,"put");v(this,"delete");v(this,"options");v(this,"patch");v(this,"all");v(this,"on");v(this,"use");v(this,"router");v(this,"getPath");v(this,"_basePath","/");E(this,D,"/");v(this,"routes",[]);E(this,H,xi);v(this,"errorHandler",jt);v(this,"onError",a=>(this.errorHandler=a,this));v(this,"notFound",a=>(N(this,H,a),this));v(this,"fetch",(a,...i)=>k(this,L,We).call(this,a,i[1],i[0],a.method));v(this,"request",(a,i,n,s)=>a instanceof Request?this.fetch(i?new Request(a,i):a,n,s):(a=a.toString(),this.fetch(new Request(/^https?:\/\//.test(a)?a:`http://localhost${ue("/",a)}`,i),n,s)));v(this,"fire",()=>{addEventListener("fetch",a=>{a.respondWith(k(this,L,We).call(this,a.request,a,void 0,a.request.method))})});[...Ei,wi].forEach(r=>{this[r]=(o,...l)=>(typeof o=="string"?N(this,D,o):k(this,L,ie).call(this,r,m(this,D),o),l.forEach(c=>{k(this,L,ie).call(this,r,m(this,D),c)}),this)}),this.on=(r,o,...l)=>{for(const c of[o].flat()){N(this,D,c);for(const d of[r].flat())l.map(h=>{k(this,L,ie).call(this,d.toUpperCase(),m(this,D),h)})}return this},this.use=(r,...o)=>(typeof r=="string"?N(this,D,r):(N(this,D,"*"),o.unshift(r)),o.forEach(l=>{k(this,L,ie).call(this,T,m(this,D),l)}),this);const{strict:n,...s}=a;Object.assign(this,s),this.getPath=n??!0?a.getPath??ua:gi}route(a,i){const n=this.basePath(a);return i.routes.map(s=>{var o;let r;i.errorHandler===jt?r=s.handler:(r=async(l,c)=>(await Rt([],i.errorHandler)(l,()=>s.handler(l,c))).res,r[Si]=s.handler),k(o=n,L,ie).call(o,s.method,s.path,r)}),this}basePath(a){const i=k(this,L,Sa).call(this);return i._basePath=ue(this._basePath,a),i}mount(a,i,n){let s,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?s=c=>c:s=n.replaceRequest));const o=r?c=>{const d=r(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};s||(s=(()=>{const c=ue(this._basePath,a),d=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(d)||"/",new Request(u,h)}})());const l=async(c,d)=>{const h=await i(s(c.req.raw),...o(c));if(h)return h;await d()};return k(this,L,ie).call(this,T,ue(a,"*"),l),this}},D=new WeakMap,L=new WeakSet,Sa=function(){const a=new Ea({router:this.router,getPath:this.getPath});return a.errorHandler=this.errorHandler,N(a,H,m(this,H)),a.routes=this.routes,a},H=new WeakMap,ie=function(a,i,n){a=a.toUpperCase(),i=ue(this._basePath,i);const s={basePath:this._basePath,path:i,method:a,handler:n};this.router.add(a,i,[n,s]),this.routes.push(s)},Ve=function(a,i){if(a instanceof Error)return this.errorHandler(a,i);throw a},We=function(a,i,n,s){if(s==="HEAD")return(async()=>new Response(null,await k(this,L,We).call(this,a,i,n,"GET")))();const r=this.getPath(a,{env:n}),o=this.router.match(s,r),l=new Ni(a,{path:r,matchResult:o,env:n,executionCtx:i,notFoundHandler:m(this,H)});if(o[0].length===1){let d;try{d=o[0][0][0][0](l,async()=>{l.res=await m(this,H).call(this,l)})}catch(h){return k(this,L,Ve).call(this,h,l)}return d instanceof Promise?d.then(h=>h||(l.finalized?l.res:m(this,H).call(this,l))).catch(h=>k(this,L,Ve).call(this,h,l)):d??m(this,H).call(this,l)}const c=Rt(o[0],this.errorHandler,m(this,H));return(async()=>{try{const d=await c(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return k(this,L,Ve).call(this,d,l)}})()},Xt),xa=[],ka=Symbol("buildAllMatchers");function ki(t,a){const i=this[ka](),n=(s,r)=>{const o=i[s]||i[T],l=o[2][r];if(l)return l;const c=r.match(o[0]);if(!c)return[[],xa];const d=c.indexOf("",1);return[o[1][d],c]};return this.match=n,n(t,a)}var Qe="[^/]+",Ce=".*",Ae="(?:|/.*)",fe=Symbol(),Ci=new Set(".\\+*[^]$()");function Ai(t,a){return t.length===1?a.length===1?t<a?-1:1:-1:a.length===1||t===Ce||t===Ae?1:a===Ce||a===Ae?-1:t===Qe?1:a===Qe?-1:t.length===a.length?t<a?-1:1:a.length-t.length}var re,oe,B,Yt,gt=(Yt=class{constructor(){E(this,re);E(this,oe);E(this,B,Object.create(null))}insert(a,i,n,s,r){if(a.length===0){if(m(this,re)!==void 0)throw fe;if(r)return;N(this,re,i);return}const[o,...l]=a,c=o==="*"?l.length===0?["","",Ce]:["","",Qe]:o==="/*"?["","",Ae]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(c){const h=c[1];let u=c[2]||Qe;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw fe;if(d=m(this,B)[u],!d){if(Object.keys(m(this,B)).some(p=>p!==Ce&&p!==Ae))throw fe;if(r)return;d=m(this,B)[u]=new gt,h!==""&&N(d,oe,s.varIndex++)}!r&&h!==""&&n.push([h,m(d,oe)])}else if(d=m(this,B)[o],!d){if(Object.keys(m(this,B)).some(h=>h.length>1&&h!==Ce&&h!==Ae))throw fe;if(r)return;d=m(this,B)[o]=new gt}d.insert(l,i,n,s,r)}buildRegExpStr(){const i=Object.keys(m(this,B)).sort(Ai).map(n=>{const s=m(this,B)[n];return(typeof m(s,oe)=="number"?`(${n})@${m(s,oe)}`:Ci.has(n)?`\\${n}`:n)+s.buildRegExpStr()});return typeof m(this,re)=="number"&&i.unshift(`#${m(this,re)}`),i.length===0?"":i.length===1?i[0]:"(?:"+i.join("|")+")"}},re=new WeakMap,oe=new WeakMap,B=new WeakMap,Yt),et,De,Kt,Ti=(Kt=class{constructor(){E(this,et,{varIndex:0});E(this,De,new gt)}insert(t,a,i){const n=[],s=[];for(let o=0;;){let l=!1;if(t=t.replace(/\{[^}]+\}/g,c=>{const d=`@\\${o}`;return s[o]=[d,c],o++,l=!0,d}),!l)break}const r=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=s.length-1;o>=0;o--){const[l]=s[o];for(let c=r.length-1;c>=0;c--)if(r[c].indexOf(l)!==-1){r[c]=r[c].replace(l,s[o][1]);break}}return m(this,De).insert(r,a,n,m(this,et),i),n}buildRegExp(){let t=m(this,De).buildRegExpStr();if(t==="")return[/^$/,[],[]];let a=0;const i=[],n=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,r,o)=>r!==void 0?(i[++a]=Number(r),"$()"):(o!==void 0&&(n[Number(o)]=++a),"")),[new RegExp(`^${t}`),i,n]}},et=new WeakMap,De=new WeakMap,Kt),Li=[/^$/,[],Object.create(null)],Xe=Object.create(null);function Ca(t){return Xe[t]??(Xe[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(a,i)=>i?`\\${i}`:"(?:|/.*)")}$`))}function Pi(){Xe=Object.create(null)}function Ii(t){var d;const a=new Ti,i=[];if(t.length===0)return Li;const n=t.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[p,g])=>h?1:p?-1:u.length-g.length),s=Object.create(null);for(let h=0,u=-1,p=n.length;h<p;h++){const[g,b,f]=n[h];g?s[b]=[f.map(([w])=>[w,Object.create(null)]),xa]:u++;let y;try{y=a.insert(b,u,g)}catch(w){throw w===fe?new wa(b):w}g||(i[u]=f.map(([w,S])=>{const C=Object.create(null);for(S-=1;S>=0;S--){const[x,I]=y[S];C[x]=I}return[w,C]}))}const[r,o,l]=a.buildRegExp();for(let h=0,u=i.length;h<u;h++)for(let p=0,g=i[h].length;p<g;p++){const b=(d=i[h][p])==null?void 0:d[1];if(!b)continue;const f=Object.keys(b);for(let y=0,w=f.length;y<w;y++)b[f[y]]=l[b[f[y]]]}const c=[];for(const h in o)c[h]=i[o[h]];return[r,c,s]}function me(t,a){if(t){for(const i of Object.keys(t).sort((n,s)=>s.length-n.length))if(Ca(i).test(a))return[...t[i]]}}var J,Z,tt,Aa,Jt,Mi=(Jt=class{constructor(){E(this,tt);v(this,"name","RegExpRouter");E(this,J);E(this,Z);v(this,"match",ki);N(this,J,{[T]:Object.create(null)}),N(this,Z,{[T]:Object.create(null)})}add(t,a,i){var l;const n=m(this,J),s=m(this,Z);if(!n||!s)throw new Error(Na);n[t]||[n,s].forEach(c=>{c[t]=Object.create(null),Object.keys(c[T]).forEach(d=>{c[t][d]=[...c[T][d]]})}),a==="/*"&&(a="*");const r=(a.match(/\/:/g)||[]).length;if(/\*$/.test(a)){const c=Ca(a);t===T?Object.keys(n).forEach(d=>{var h;(h=n[d])[a]||(h[a]=me(n[d],a)||me(n[T],a)||[])}):(l=n[t])[a]||(l[a]=me(n[t],a)||me(n[T],a)||[]),Object.keys(n).forEach(d=>{(t===T||t===d)&&Object.keys(n[d]).forEach(h=>{c.test(h)&&n[d][h].push([i,r])})}),Object.keys(s).forEach(d=>{(t===T||t===d)&&Object.keys(s[d]).forEach(h=>c.test(h)&&s[d][h].push([i,r]))});return}const o=pa(a)||[a];for(let c=0,d=o.length;c<d;c++){const h=o[c];Object.keys(s).forEach(u=>{var p;(t===T||t===u)&&((p=s[u])[h]||(p[h]=[...me(n[u],h)||me(n[T],h)||[]]),s[u][h].push([i,r-d+c+1]))})}}[ka](){const t=Object.create(null);return Object.keys(m(this,Z)).concat(Object.keys(m(this,J))).forEach(a=>{t[a]||(t[a]=k(this,tt,Aa).call(this,a))}),N(this,J,N(this,Z,void 0)),Pi(),t}},J=new WeakMap,Z=new WeakMap,tt=new WeakSet,Aa=function(t){const a=[];let i=t===T;return[m(this,J),m(this,Z)].forEach(n=>{const s=n[t]?Object.keys(n[t]).map(r=>[r,n[t][r]]):[];s.length!==0?(i||(i=!0),a.push(...s)):t!==T&&a.push(...Object.keys(n[T]).map(r=>[r,n[T][r]]))}),i?Ii(a):null},Jt),Q,U,Zt,Ri=(Zt=class{constructor(t){v(this,"name","SmartRouter");E(this,Q,[]);E(this,U,[]);N(this,Q,t.routers)}add(t,a,i){if(!m(this,U))throw new Error(Na);m(this,U).push([t,a,i])}match(t,a){if(!m(this,U))throw new Error("Fatal error");const i=m(this,Q),n=m(this,U),s=i.length;let r=0,o;for(;r<s;r++){const l=i[r];try{for(let c=0,d=n.length;c<d;c++)l.add(...n[c]);o=l.match(t,a)}catch(c){if(c instanceof wa)continue;throw c}this.match=l.match.bind(l),N(this,Q,[l]),N(this,U,void 0);break}if(r===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(m(this,U)||m(this,Q).length!==1)throw new Error("No active router has been determined yet.");return m(this,Q)[0]}},Q=new WeakMap,U=new WeakMap,Zt),xe=Object.create(null),ee,M,le,Ne,P,V,ne,Qt,Ta=(Qt=class{constructor(t,a,i){E(this,V);E(this,ee);E(this,M);E(this,le);E(this,Ne,0);E(this,P,xe);if(N(this,M,i||Object.create(null)),N(this,ee,[]),t&&a){const n=Object.create(null);n[t]={handler:a,possibleKeys:[],score:0},N(this,ee,[n])}N(this,le,[])}insert(t,a,i){N(this,Ne,++At(this,Ne)._);let n=this;const s=mi(a),r=[];for(let o=0,l=s.length;o<l;o++){const c=s[o],d=s[o+1],h=pi(c,d),u=Array.isArray(h)?h[0]:c;if(u in m(n,M)){n=m(n,M)[u],h&&r.push(h[1]);continue}m(n,M)[u]=new Ta,h&&(m(n,le).push(h),r.push(h[1])),n=m(n,M)[u]}return m(n,ee).push({[t]:{handler:i,possibleKeys:r.filter((o,l,c)=>c.indexOf(o)===l),score:m(this,Ne)}}),n}search(t,a){var l;const i=[];N(this,P,xe);let s=[this];const r=ha(a),o=[];for(let c=0,d=r.length;c<d;c++){const h=r[c],u=c===d-1,p=[];for(let g=0,b=s.length;g<b;g++){const f=s[g],y=m(f,M)[h];y&&(N(y,P,m(f,P)),u?(m(y,M)["*"]&&i.push(...k(this,V,ne).call(this,m(y,M)["*"],t,m(f,P))),i.push(...k(this,V,ne).call(this,y,t,m(f,P)))):p.push(y));for(let w=0,S=m(f,le).length;w<S;w++){const C=m(f,le)[w],x=m(f,P)===xe?{}:{...m(f,P)};if(C==="*"){const X=m(f,M)["*"];X&&(i.push(...k(this,V,ne).call(this,X,t,m(f,P))),N(X,P,x),p.push(X));continue}const[I,de,ae]=C;if(!h&&!(ae instanceof RegExp))continue;const z=m(f,M)[I],_a=r.slice(c).join("/");if(ae instanceof RegExp){const X=ae.exec(_a);if(X){if(x[de]=X[0],i.push(...k(this,V,ne).call(this,z,t,m(f,P),x)),Object.keys(m(z,M)).length){N(z,P,x);const at=((l=X[0].match(/\//))==null?void 0:l.length)??0;(o[at]||(o[at]=[])).push(z)}continue}}(ae===!0||ae.test(h))&&(x[de]=h,u?(i.push(...k(this,V,ne).call(this,z,t,x,m(f,P))),m(z,M)["*"]&&i.push(...k(this,V,ne).call(this,m(z,M)["*"],t,x,m(f,P)))):(N(z,P,x),p.push(z)))}}s=p.concat(o.shift()??[])}return i.length>1&&i.sort((c,d)=>c.score-d.score),[i.map(({handler:c,params:d})=>[c,d])]}},ee=new WeakMap,M=new WeakMap,le=new WeakMap,Ne=new WeakMap,P=new WeakMap,V=new WeakSet,ne=function(t,a,i,n){const s=[];for(let r=0,o=m(t,ee).length;r<o;r++){const l=m(t,ee)[r],c=l[a]||l[T],d={};if(c!==void 0&&(c.params=Object.create(null),s.push(c),i!==xe||n&&n!==xe))for(let h=0,u=c.possibleKeys.length;h<u;h++){const p=c.possibleKeys[h],g=d[c.score];c.params[p]=n!=null&&n[p]&&!g?n[p]:i[p]??(n==null?void 0:n[p]),d[c.score]=!0}}return s},Qt),ce,ea,Oi=(ea=class{constructor(){v(this,"name","TrieRouter");E(this,ce);N(this,ce,new Ta)}add(t,a,i){const n=pa(a);if(n){for(let s=0,r=n.length;s<r;s++)m(this,ce).insert(t,n[s],i);return}m(this,ce).insert(t,a,i)}match(t,a){return m(this,ce).search(t,a)}},ce=new WeakMap,ea),La=class extends Ea{constructor(t={}){super(t),this.router=t.router??new Ri({routers:[new Mi,new Oi]})}},ji=t=>{const i={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},n=(r=>typeof r=="string"?r==="*"?()=>r:o=>r===o?o:null:typeof r=="function"?r:o=>r.includes(o)?o:null)(i.origin),s=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(i.allowMethods);return async function(o,l){var h;function c(u,p){o.res.headers.set(u,p)}const d=await n(o.req.header("origin")||"",o);if(d&&c("Access-Control-Allow-Origin",d),i.origin!=="*"){const u=o.req.header("Vary");u?c("Vary",u):c("Vary","Origin")}if(i.credentials&&c("Access-Control-Allow-Credentials","true"),(h=i.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",i.exposeHeaders.join(",")),o.req.method==="OPTIONS"){i.maxAge!=null&&c("Access-Control-Max-Age",i.maxAge.toString());const u=await s(o.req.header("origin")||"",o);u.length&&c("Access-Control-Allow-Methods",u.join(","));let p=i.allowHeaders;if(!(p!=null&&p.length)){const g=o.req.header("Access-Control-Request-Headers");g&&(p=g.split(/\s*,\s*/))}return p!=null&&p.length&&(c("Access-Control-Allow-Headers",p.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l()}},Di=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Dt=(t,a=Bi)=>{const i=/\.([a-zA-Z0-9]+?)$/,n=t.match(i);if(!n)return;let s=a[n[1]];return s&&s.startsWith("text")&&(s+="; charset=utf-8"),s},Hi={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},Bi=Hi,Fi=(...t)=>{let a=t.filter(s=>s!=="").join("/");a=a.replace(new RegExp("(?<=\\/)\\/+","g"),"");const i=a.split("/"),n=[];for(const s of i)s===".."&&n.length>0&&n.at(-1)!==".."?n.pop():s!=="."&&n.push(s);return n.join("/")||"."},Pa={br:".br",zstd:".zst",gzip:".gz"},_i=Object.keys(Pa),zi="index.html",qi=t=>{const a=t.root??"./",i=t.path,n=t.join??Fi;return async(s,r)=>{var h,u,p,g;if(s.finalized)return r();let o;if(t.path)o=t.path;else try{if(o=decodeURIComponent(s.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(o))throw new Error}catch{return await((h=t.onNotFound)==null?void 0:h.call(t,s.req.path,s)),r()}let l=n(a,!i&&t.rewriteRequestPath?t.rewriteRequestPath(o):o);t.isDir&&await t.isDir(l)&&(l=n(l,zi));const c=t.getContent;let d=await c(l,s);if(d instanceof Response)return s.newResponse(d.body,d);if(d){const b=t.mimes&&Dt(l,t.mimes)||Dt(l);if(s.header("Content-Type",b||"application/octet-stream"),t.precompressed&&(!b||Di.test(b))){const f=new Set((u=s.req.header("Accept-Encoding"))==null?void 0:u.split(",").map(y=>y.trim()));for(const y of _i){if(!f.has(y))continue;const w=await c(l+Pa[y],s);if(w){d=w,s.header("Content-Encoding",y),s.header("Vary","Accept-Encoding",{append:!0});break}}}return await((p=t.onFound)==null?void 0:p.call(t,l,s)),s.body(d)}await((g=t.onNotFound)==null?void 0:g.call(t,l,s)),await r()}},$i=async(t,a)=>{let i;a&&a.manifest?typeof a.manifest=="string"?i=JSON.parse(a.manifest):i=a.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?i=JSON.parse(__STATIC_CONTENT_MANIFEST):i=__STATIC_CONTENT_MANIFEST;let n;a&&a.namespace?n=a.namespace:n=__STATIC_CONTENT;const s=i[t]||t;if(!s)return null;const r=await n.get(s,{type:"stream"});return r||null},Gi=t=>async function(i,n){return qi({...t,getContent:async r=>$i(r,{manifest:t.manifest,namespace:t.namespace?t.namespace:i.env?i.env.__STATIC_CONTENT:void 0})})(i,n)},Ui=t=>Gi(t),Le="_hp",Vi={Change:"Input",DoubleClick:"DblClick"},Wi={svg:"2000/svg",math:"1998/Math/MathML"},Pe=[],vt=new WeakMap,Ee=void 0,Xi=()=>Ee,q=t=>"t"in t,lt={onClick:["click",!1]},Ht=t=>{if(!t.startsWith("on"))return;if(lt[t])return lt[t];const a=t.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(a){const[,i,n]=a;return lt[t]=[(Vi[i]||i).toLowerCase(),!!n]}},Bt=(t,a)=>Ee&&t instanceof SVGElement&&/[A-Z]/.test(a)&&(a in t.style||a.match(/^(?:o|pai|str|u|ve)/))?a.replace(/([A-Z])/g,"-$1").toLowerCase():a,Yi=(t,a,i)=>{var n;a||(a={});for(let s in a){const r=a[s];if(s!=="children"&&(!i||i[s]!==r)){s=Ze(s);const o=Ht(s);if(o){if((i==null?void 0:i[s])!==r&&(i&&t.removeEventListener(o[0],i[s],o[1]),r!=null)){if(typeof r!="function")throw new Error(`Event handler for "${s}" is not a function`);t.addEventListener(o[0],r,o[1])}}else if(s==="dangerouslySetInnerHTML"&&r)t.innerHTML=r.__html;else if(s==="ref"){let l;typeof r=="function"?l=r(t)||(()=>r(null)):r&&"current"in r&&(r.current=t,l=()=>r.current=null),vt.set(t,l)}else if(s==="style"){const l=t.style;typeof r=="string"?l.cssText=r:(l.cssText="",r!=null&&da(r,l.setProperty.bind(l)))}else{if(s==="value"){const c=t.nodeName;if(c==="INPUT"||c==="TEXTAREA"||c==="SELECT"){if(t.value=r==null||r===!1?null:r,c==="TEXTAREA"){t.textContent=r;continue}else if(c==="SELECT"){t.selectedIndex===-1&&(t.selectedIndex=0);continue}}}else(s==="checked"&&t.nodeName==="INPUT"||s==="selected"&&t.nodeName==="OPTION")&&(t[s]=r);const l=Bt(t,s);r==null||r===!1?t.removeAttribute(l):r===!0?t.setAttribute(l,""):typeof r=="string"||typeof r=="number"?t.setAttribute(l,r):t.setAttribute(l,r.toString())}}}if(i)for(let s in i){const r=i[s];if(s!=="children"&&!(s in a)){s=Ze(s);const o=Ht(s);o?t.removeEventListener(o[0],r,o[1]):s==="ref"?(n=vt.get(t))==null||n():t.removeAttribute(Bt(t,s))}}},Ki=(t,a)=>{a[A][0]=0,Pe.push([t,a]);const i=a.tag[bt]||a.tag,n=i.defaultProps?{...i.defaultProps,...a.props}:a.props;try{return[i.call(null,n)]}finally{Pe.pop()}},Ia=(t,a,i,n,s)=>{var r,o;(r=t.vR)!=null&&r.length&&(n.push(...t.vR),delete t.vR),typeof t.tag=="function"&&((o=t[A][1][ja])==null||o.forEach(l=>s.push(l))),t.vC.forEach(l=>{var c;if(q(l))i.push(l);else if(typeof l.tag=="function"||l.tag===""){l.c=a;const d=i.length;if(Ia(l,a,i,n,s),l.s){for(let h=d;h<i.length;h++)i[h].s=!0;l.s=!1}}else i.push(l),(c=l.vR)!=null&&c.length&&(n.push(...l.vR),delete l.vR)})},Ji=t=>{for(;;t=t.tag===Le||!t.vC||!t.pP?t.nN:t.vC[0]){if(!t)return null;if(t.tag!==Le&&t.e)return t.e}},Ma=t=>{var a,i,n,s,r,o;q(t)||((i=(a=t[A])==null?void 0:a[1][ja])==null||i.forEach(l=>{var c;return(c=l[2])==null?void 0:c.call(l)}),(n=vt.get(t.e))==null||n(),t.p===2&&((s=t.vC)==null||s.forEach(l=>l.p=2)),(r=t.vC)==null||r.forEach(Ma)),t.p||((o=t.e)==null||o.remove(),delete t.e),typeof t.tag=="function"&&(ke.delete(t),Ye.delete(t),delete t[A][3],t.a=!0)},Ra=(t,a,i)=>{t.c=a,Oa(t,a,i)},Ft=(t,a)=>{if(a){for(let i=0,n=t.length;i<n;i++)if(t[i]===a)return i}},_t=Symbol(),Oa=(t,a,i)=>{var d;const n=[],s=[],r=[];Ia(t,a,n,s,r),s.forEach(Ma);const o=i?void 0:a.childNodes;let l,c=null;if(i)l=-1;else if(!o.length)l=0;else{const h=Ft(o,Ji(t.nN));h!==void 0?(c=o[h],l=h):l=Ft(o,(d=n.find(u=>u.tag!==Le&&u.e))==null?void 0:d.e)??-1,l===-1&&(i=!0)}for(let h=0,u=n.length;h<u;h++,l++){const p=n[h];let g;if(p.s&&p.e)g=p.e,p.s=!1;else{const b=i||!p.e;q(p)?(p.e&&p.d&&(p.e.textContent=p.t),p.d=!1,g=p.e||(p.e=document.createTextNode(p.t))):(g=p.e||(p.e=p.n?document.createElementNS(p.n,p.tag):document.createElement(p.tag)),Yi(g,p.props,p.pP),Oa(p,g,b))}p.tag===Le?l--:i?g.parentNode||a.appendChild(g):o[l]!==g&&o[l-1]!==g&&(o[l+1]===g?a.appendChild(o[l]):a.insertBefore(g,c||o[l]||null))}if(t.pP&&delete t.pP,r.length){const h=[],u=[];r.forEach(([,p,,g,b])=>{p&&h.push(p),g&&u.push(g),b==null||b()}),h.forEach(p=>p()),u.length&&requestAnimationFrame(()=>{u.forEach(p=>p())})}},Zi=(t,a)=>!!(t&&t.length===a.length&&t.every((i,n)=>i[1]===a[n][1])),Ye=new WeakMap,yt=(t,a,i)=>{var r,o,l,c,d,h;const n=!i&&a.pC;i&&(a.pC||(a.pC=a.vC));let s;try{i||(i=typeof a.tag=="function"?Ki(t,a):He(a.props.children)),((r=i[0])==null?void 0:r.tag)===""&&i[0][ut]&&(s=i[0][ut],t[5].push([t,s,a]));const u=n?[...a.pC]:a.vC?[...a.vC]:void 0,p=[];let g;for(let b=0;b<i.length;b++){Array.isArray(i[b])&&i.splice(b,1,...i[b].flat());let f=Qi(i[b]);if(f){typeof f.tag=="function"&&!f.tag[sa]&&(we.length>0&&(f[A][2]=we.map(w=>[w,w.values.at(-1)])),(o=t[5])!=null&&o.length&&(f[A][3]=t[5].at(-1)));let y;if(u&&u.length){const w=u.findIndex(q(f)?S=>q(S):f.key!==void 0?S=>S.key===f.key&&S.tag===f.tag:S=>S.tag===f.tag);w!==-1&&(y=u[w],u.splice(w,1))}if(y)if(q(f))y.t!==f.t&&(y.t=f.t,y.d=!0),f=y;else{const w=y.pP=y.props;if(y.props=f.props,y.f||(y.f=f.f||a.f),typeof f.tag=="function"){const S=y[A][2];y[A][2]=f[A][2]||[],y[A][3]=f[A][3],!y.f&&((y.o||y)===f.o||(c=(l=y.tag)[Ua])!=null&&c.call(l,w,y.props))&&Zi(S,y[A][2])&&(y.s=!0)}f=y}else if(!q(f)&&Ee){const w=Se(Ee);w&&(f.n=w)}if(!q(f)&&!f.s&&(yt(t,f),delete f.f),p.push(f),g&&!g.s&&!f.s)for(let w=g;w&&!q(w);w=(d=w.vC)==null?void 0:d.at(-1))w.nN=f;g=f}}a.vR=n?[...a.vC,...u||[]]:u||[],a.vC=p,n&&delete a.pC}catch(u){if(a.f=!0,u===_t){if(s)return;throw u}const[p,g,b]=((h=a[A])==null?void 0:h[3])||[];if(g){const f=()=>Ke([0,!1,t[2]],b),y=Ye.get(b)||[];y.push(f),Ye.set(b,y);const w=g(u,()=>{const S=Ye.get(b);if(S){const C=S.indexOf(f);if(C!==-1)return S.splice(C,1),f()}});if(w){if(t[0]===1)t[1]=!0;else if(yt(t,b,[w]),(g.length===1||t!==p)&&b.c){Ra(b,b.c,!1);return}throw _t}}throw u}finally{s&&t[5].pop()}},Qi=t=>{if(!(t==null||typeof t=="boolean")){if(typeof t=="string"||typeof t=="number")return{t:t.toString(),d:!0};if("vR"in t&&(t={tag:t.tag,props:t.props,key:t.key,f:t.f,type:t.tag,ref:t.props.ref,o:t.o||t}),typeof t.tag=="function")t[A]=[0,[]];else{const a=Wi[t.tag];a&&(Ee||(Ee=oa("")),t.props.children=[{tag:Ee,props:{value:t.n=`http://www.w3.org/${a}`,children:t.props.children}}])}return t}},zt=(t,a)=>{var i,n;(i=a[A][2])==null||i.forEach(([s,r])=>{s.values.push(r)});try{yt(t,a,void 0)}catch{return}if(a.a){delete a.a;return}(n=a[A][2])==null||n.forEach(([s])=>{s.values.pop()}),(t[0]!==1||!t[1])&&Ra(a,a.c,!1)},ke=new WeakMap,qt=[],Ke=async(t,a)=>{t[5]||(t[5]=[]);const i=ke.get(a);i&&i[0](void 0);let n;const s=new Promise(r=>n=r);if(ke.set(a,[n,()=>{t[2]?t[2](t,a,r=>{zt(r,a)}).then(()=>n(a)):(zt(t,a),n(a))}]),qt.length)qt.at(-1).add(a);else{await Promise.resolve();const r=ke.get(a);r&&(ke.delete(a),r[1]())}return s},en=(t,a,i)=>({tag:Le,props:{children:t},key:i,e:a,p:1}),ct=0,ja=1,dt=2,mt=3,ht=new WeakMap,Da=(t,a)=>!t||!a||t.length!==a.length||a.some((i,n)=>i!==t[n]),tn=void 0,$t=[],an=t=>{var o;const a=()=>typeof t=="function"?t():t,i=Pe.at(-1);if(!i)return[a(),()=>{}];const[,n]=i,s=(o=n[A][1])[ct]||(o[ct]=[]),r=n[A][0]++;return s[r]||(s[r]=[a(),l=>{const c=tn,d=s[r];if(typeof l=="function"&&(l=l(d[0])),!Object.is(l,d[0]))if(d[0]=l,$t.length){const[h,u]=$t.at(-1);Promise.all([h===3?n:Ke([h,!1,c],n),u]).then(([p])=>{if(!p||!(h===2||h===3))return;const g=p.vC;requestAnimationFrame(()=>{setTimeout(()=>{g===p.vC&&Ke([h===3?1:0,!1,c],p)})})})}else Ke([0,!1,c],n)}])},xt=(t,a)=>{var l;const i=Pe.at(-1);if(!i)return t;const[,n]=i,s=(l=n[A][1])[dt]||(l[dt]=[]),r=n[A][0]++,o=s[r];return Da(o==null?void 0:o[1],a)?s[r]=[t,a]:t=s[r][0],t},nn=t=>{const a=ht.get(t);if(a){if(a.length===2)throw a[1];return a[0]}throw t.then(i=>ht.set(t,[i]),i=>ht.set(t,[void 0,i])),t},sn=(t,a)=>{var l;const i=Pe.at(-1);if(!i)return t();const[,n]=i,s=(l=n[A][1])[mt]||(l[mt]=[]),r=n[A][0]++,o=s[r];return Da(o==null?void 0:o[1],a)&&(s[r]=[t(),a]),s[r][0]},rn=oa({pending:!1,data:null,method:null,action:null}),Gt=new Set,on=t=>{Gt.add(t),t.finally(()=>Gt.delete(t))},kt=(t,a)=>sn(()=>i=>{let n;t&&(typeof t=="function"?n=t(i)||(()=>{t(null)}):t&&"current"in t&&(t.current=i,n=()=>{t.current=null}));const s=a(i);return()=>{s==null||s(),n==null||n()}},[t]),he=Object.create(null),qe=Object.create(null),_e=(t,a,i,n,s)=>{if(a!=null&&a.itemProp)return{tag:t,props:a,type:t,ref:a.ref};const r=document.head;let{onLoad:o,onError:l,precedence:c,blocking:d,...h}=a,u=null,p=!1;const g=$e[t];let b;if(g.length>0){const S=r.querySelectorAll(t);e:for(const C of S)for(const x of $e[t])if(C.getAttribute(x)===a[x]){u=C;break e}if(!u){const C=g.reduce((x,I)=>a[I]===void 0?x:`${x}-${I}-${a[I]}`,t);p=!qe[C],u=qe[C]||(qe[C]=(()=>{const x=document.createElement(t);for(const I of g)a[I]!==void 0&&x.setAttribute(I,a[I]),a.rel&&x.setAttribute("rel",a.rel);return x})())}}else b=r.querySelectorAll(t);c=n?c??"":void 0,n&&(h[Ge]=c);const f=xt(S=>{if(g.length>0){let C=!1;for(const x of r.querySelectorAll(t)){if(C&&x.getAttribute(Ge)!==c){r.insertBefore(S,x);return}x.getAttribute(Ge)===c&&(C=!0)}r.appendChild(S)}else if(b){let C=!1;for(const x of b)if(x===S){C=!0;break}C||r.insertBefore(S,r.contains(b[0])?b[0]:r.querySelector(t)),b=void 0}},[c]),y=kt(a.ref,S=>{var I;const C=g[0];if(i===2&&(S.innerHTML=""),(p||b)&&f(S),!l&&!o)return;let x=he[I=S.getAttribute(C)]||(he[I]=new Promise((de,ae)=>{S.addEventListener("load",de),S.addEventListener("error",ae)}));o&&(x=x.then(o)),l&&(x=x.catch(l)),x.catch(()=>{})});if(s&&d==="render"){const S=$e[t][0];if(a[S]){const C=a[S],x=he[C]||(he[C]=new Promise((I,de)=>{f(u),u.addEventListener("load",I),u.addEventListener("error",de)}));nn(x)}}const w={tag:t,type:t,props:{...h,ref:y},ref:y};return w.p=i,u&&(w.e=u),en(w,r)},ln=t=>{const a=Xi(),i=a&&Se(a);return i!=null&&i.endsWith("svg")?{tag:"title",props:t,type:"title",ref:t.ref}:_e("title",t,void 0,!1,!1)},cn=t=>!t||["src","async"].some(a=>!t[a])?{tag:"script",props:t,type:"script",ref:t.ref}:_e("script",t,1,!1,!0),dn=t=>!t||!["href","precedence"].every(a=>a in t)?{tag:"style",props:t,type:"style",ref:t.ref}:(t["data-href"]=t.href,delete t.href,_e("style",t,2,!0,!0)),mn=t=>!t||["onLoad","onError"].some(a=>a in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?{tag:"link",props:t,type:"link",ref:t.ref}:_e("link",t,1,"precedence"in t,!0),hn=t=>_e("meta",t,void 0,!1,!1),Ha=Symbol(),un=t=>{const{action:a,...i}=t;typeof a!="function"&&(i.action=a);const[n,s]=an([null,!1]),r=xt(async d=>{const h=d.isTrusted?a:d.detail[Ha];if(typeof h!="function")return;d.preventDefault();const u=new FormData(d.target);s([u,!0]);const p=h(u);p instanceof Promise&&(on(p),await p),s([null,!0])},[]),o=kt(t.ref,d=>(d.addEventListener("submit",r),()=>{d.removeEventListener("submit",r)})),[l,c]=n;return n[1]=!1,{tag:rn,props:{value:{pending:l!==null,data:l,method:l?"post":null,action:l?a:null},children:{tag:"form",props:{...i,ref:o},type:"form",ref:o}},f:c}},Ba=(t,{formAction:a,...i})=>{if(typeof a=="function"){const n=xt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Ha]:a}}))},[]);i.ref=kt(i.ref,s=>(s.addEventListener("click",n),()=>{s.removeEventListener("click",n)}))}return{tag:t,props:i,type:t,ref:i.ref}},pn=t=>Ba("input",t),fn=t=>Ba("button",t);Object.assign(pt,{title:ln,script:cn,style:dn,link:mn,meta:hn,form:un,input:pn,button:fn});Nt(null);new TextEncoder;var gn=Nt(null),vn=(t,a,i,n)=>(s,r)=>{const o="<!DOCTYPE html>",l=i?It(d=>i(d,t),{Layout:a,...r},s):s,c=Ga`${j(o)}${It(gn.Provider,{value:t},l)}`;return t.html(c)},yn=(t,a)=>function(n,s){const r=n.getLayout()??ni;return t&&n.setLayout(o=>t({...o,Layout:r},n)),n.setRenderer(vn(n,r,t)),s()};const bn=yn(({children:t})=>e("html",{lang:"en",children:[e("head",{children:[e("meta",{charSet:"UTF-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}),e("meta",{name:"format-detection",content:"telephone=no"}),e("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),e("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),e("meta",{name:"mobile-web-app-capable",content:"yes"}),e("link",{rel:"dns-prefetch",href:"//fonts.googleapis.com"}),e("link",{rel:"dns-prefetch",href:"//fonts.gstatic.com"}),e("link",{rel:"dns-prefetch",href:"//cdnjs.cloudflare.com"}),e("link",{rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"anonymous"}),e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),e("link",{rel:"preload",href:"/static/style.css",as:"style"}),e("link",{rel:"preload",href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",as:"style"}),e("title",{children:"SCHOLARIX - Study Abroad Consultants | Visa, Admission & IELTS"}),e("meta",{name:"description",content:"Expert study abroad guidance for students. Get support for study visas, university admissions, scholarships, and IELTS/PTE preparation. 99% visa success rate. Book free consultation today!"}),e("meta",{name:"keywords",content:"study abroad, student visa, university admission, scholarships, IELTS, PTE, career counselling, international education, Germany study visa, Canada student visa, UK admission, Ireland universities"}),e("meta",{name:"author",content:"SCHOLARIX Study Abroad Consultants"}),e("meta",{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}),e("meta",{name:"language",content:"en"}),e("meta",{name:"revisit-after",content:"7 days"}),e("meta",{name:"distribution",content:"global"}),e("meta",{name:"rating",content:"general"}),e("meta",{name:"geo.region",content:"AE-DU"}),e("meta",{name:"geo.placename",content:"Dubai"}),e("meta",{name:"geo.position",content:"25.2048;55.2708"}),e("meta",{name:"ICBM",content:"25.2048, 55.2708"}),e("meta",{property:"og:title",content:"SCHOLARIX - Study Abroad Consultants | 99% Visa Success Rate"}),e("meta",{property:"og:description",content:"Expert study abroad guidance with 99% visa success rate. Get support for visas, admissions, scholarships & test prep. Serving students from Dubai, UAE since 2023."}),e("meta",{property:"og:type",content:"website"}),e("meta",{property:"og:url",content:"https://scholarixstudy.com"}),e("meta",{property:"og:site_name",content:"SCHOLARIX Study Abroad"}),e("meta",{property:"og:image",content:"https://scholarixstudy.com/static/images/og-image.jpg"}),e("meta",{property:"og:image:width",content:"1200"}),e("meta",{property:"og:image:height",content:"630"}),e("meta",{property:"og:image:alt",content:"SCHOLARIX Study Abroad Consultants - Your trusted partner for international education"}),e("meta",{property:"og:locale",content:"en_US"}),e("meta",{property:"business:contact_data:street_address",content:"Dubai, UAE"}),e("meta",{property:"business:contact_data:locality",content:"Dubai"}),e("meta",{property:"business:contact_data:region",content:"UAE"}),e("meta",{property:"business:contact_data:postal_code",content:"00000"}),e("meta",{property:"business:contact_data:country_name",content:"United Arab Emirates"}),e("meta",{name:"twitter:card",content:"summary_large_image"}),e("meta",{name:"twitter:site",content:"@scholarixstudy"}),e("meta",{name:"twitter:creator",content:"@scholarixstudy"}),e("meta",{name:"twitter:title",content:"SCHOLARIX - Study Abroad Consultants | 99% Visa Success"}),e("meta",{name:"twitter:description",content:"Expert study abroad guidance with 99% visa success rate. Specialized in European destinations from UAE."}),e("meta",{name:"twitter:image",content:"https://scholarixstudy.com/static/images/og-image.jpg"}),e("meta",{name:"twitter:image:alt",content:"SCHOLARIX Study Abroad Consultants"}),e("meta",{name:"theme-color",content:"#1e3a8a"}),e("meta",{name:"msapplication-TileColor",content:"#1e3a8a"}),e("meta",{name:"msapplication-config",content:"/static/browserconfig.xml"}),e("link",{rel:"canonical",href:"https://scholarixstudy.com"}),e("link",{rel:"alternate",hrefLang:"en",href:"https://scholarixstudy.com"}),e("link",{rel:"alternate",hrefLang:"x-default",href:"https://scholarixstudy.com"}),e("meta",{httpEquiv:"Content-Security-Policy",content:"default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jotfor.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https: blob:; connect-src 'self' https: wss:; frame-src 'self' https://www.google.com https://jotform.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io; upgrade-insecure-requests;"}),e("meta",{httpEquiv:"X-Content-Type-Options",content:"nosniff"}),e("meta",{httpEquiv:"X-Frame-Options",content:"SAMEORIGIN"}),e("meta",{httpEquiv:"X-XSS-Protection",content:"1; mode=block"}),e("meta",{httpEquiv:"Referrer-Policy",content:"strict-origin-when-cross-origin"}),e("meta",{httpEquiv:"Permissions-Policy",content:"camera=(), microphone=(), geolocation=(self), payment=()"}),e("meta",{httpEquiv:"Cross-Origin-Embedder-Policy",content:"unsafe-none"}),e("meta",{httpEquiv:"Cross-Origin-Opener-Policy",content:"same-origin-allow-popups"}),e("meta",{httpEquiv:"Cross-Origin-Resource-Policy",content:"cross-origin"}),e("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"mask-icon",href:"/static/images/scholarix-logo-icon-hd.png",color:"#1e3a8a"}),e("link",{rel:"shortcut icon",href:"/static/images/scholarix-logo-icon-hd.png"}),e("meta",{name:"msapplication-TileImage",content:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"manifest",href:"/static/manifest.json"}),e("meta",{name:"application-name",content:"SCHOLARIX Study Abroad"}),e("meta",{name:"apple-mobile-web-app-title",content:"SCHOLARIX"}),e("style",{dangerouslySetInnerHTML:{__html:`
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
          `}}),e("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"}),e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),e("link",{href:"/static/style.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-styles.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-forms.css",rel:"stylesheet"}),e("link",{href:"/static/interactive-planner.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-loader-3d.css",rel:"stylesheet"}),e("link",{href:"/static/course-finder.css",rel:"stylesheet"}),e("link",{href:"/static/mobile-contact-form.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-pwa.css",rel:"stylesheet"}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",defer:!0}),e("script",{src:"https://unpkg.com/globe.gl",defer:!0}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",defer:!0}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",defer:!0}),e("script",{src:"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",defer:!0}),e("script",{src:"https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"}),e("script",{children:`
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
          `}),e("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"EducationalOrganization",name:"SCHOLARIX Study Abroad Consultants",description:"Expert study abroad guidance for students seeking international education opportunities",url:"https://scholarixstudy.com",telephone:"+971525438784",email:"info@scholarixstudy.com",address:{"@type":"PostalAddress",addressCountry:"UAE"},serviceArea:"Worldwide",offers:{"@type":"Service",name:"Study Abroad Consulting",description:"Comprehensive study abroad services including visa support, university admissions, scholarships, and test preparation"}})})]}),e("body",{children:[e("div",{id:"floating-3d-elements"}),e("header",{className:"header",children:e("nav",{className:"navbar",children:e("div",{className:"nav-container",children:[e("div",{className:"nav-brand",children:e("a",{href:"/",className:"logo-link",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX Study Abroad",className:"logo"})})}),e("div",{className:"nav-menu",id:"navMenu",children:[e("a",{href:"/",className:"nav-link",children:"Home"}),e("div",{className:"nav-dropdown",children:[e("a",{href:"#",className:"nav-link dropdown-toggle",children:["Services ",e("i",{className:"fas fa-chevron-down"})]}),e("div",{className:"dropdown-content",children:[e("a",{href:"/services/visa",children:[e("i",{className:"fas fa-passport"}),"Visa Support"]}),e("a",{href:"/services/admissions",children:[e("i",{className:"fas fa-graduation-cap"}),"University Admissions"]}),e("a",{href:"/services/scholarships",children:[e("i",{className:"fas fa-trophy"}),"Scholarships"]}),e("a",{href:"/services/test-prep",children:[e("i",{className:"fas fa-book"}),"Test Preparation"]}),e("a",{href:"/services/counselling",children:[e("i",{className:"fas fa-user-tie"}),"Career Counselling"]}),e("a",{href:"/services/pre-departure",children:[e("i",{className:"fas fa-plane"}),"Pre-Departure"]})]})]}),e("a",{href:"/about",className:"nav-link",children:"About"}),e("a",{href:"/contact",className:"nav-link",children:"Contact"}),e("div",{className:"mobile-cta",children:e("button",{className:"nav-cta-btn",onclick:"openConsultationModal()",children:"Free Consultation"})})]}),e("div",{className:"nav-actions",children:[e("a",{href:"https://scholarixstudy.com",target:"_blank",rel:"noopener noreferrer",className:"nav-employee-btn",children:"Employee Login"}),e("button",{className:"nav-cta-btn",onclick:"openConsultationModal()",children:"Free Consultation"})]}),e("button",{className:"nav-toggle",id:"navToggle","aria-label":"Toggle navigation menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})})}),e("main",{children:t}),e("footer",{className:"footer",children:e("div",{className:"container",children:[e("div",{className:"footer-content",children:[e("div",{className:"footer-brand",children:[e("a",{href:"/",className:"footer-logo-link",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX",className:"footer-logo"})}),e("p",{className:"footer-tagline",children:"Your trusted study abroad partner since 2023"})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Services"}),e("ul",{className:"footer-links-list",children:[e("li",{children:e("a",{href:"/services/visa",children:"Visa Support"})}),e("li",{children:e("a",{href:"/services/admissions",children:"Admissions"})}),e("li",{children:e("a",{href:"/services/scholarships",children:"Scholarships"})}),e("li",{children:e("a",{href:"/services/test-prep",children:"Test Prep"})})]})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Destinations"}),e("ul",{className:"footer-links-list",children:[e("li",{children:e("a",{href:"/destinations/germany",children:"Germany"})}),e("li",{children:e("a",{href:"/destinations/canada",children:"Canada"})}),e("li",{children:e("a",{href:"/destinations/uk",children:"UK"})}),e("li",{children:e("a",{href:"/destinations/usa",children:"USA"})})]})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Connect"}),e("div",{className:"footer-contact",children:[e("a",{href:"tel:+971525438784",className:"contact-link",children:"+971 52 543 8784"}),e("a",{href:"mailto:info@scholarixstudy.com",className:"contact-link",children:"info@scholarixstudy.com"})]}),e("div",{className:"social-links",children:[e("a",{href:"https://facebook.com/scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Facebook",children:e("i",{className:"fab fa-facebook-f"})}),e("a",{href:"https://instagram.com/scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Instagram",children:e("i",{className:"fab fa-instagram"})}),e("a",{href:"https://linkedin.com/company/scholarix",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"LinkedIn",children:e("i",{className:"fab fa-linkedin-in"})}),e("a",{href:"https://youtube.com/@scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"YouTube",children:e("i",{className:"fab fa-youtube"})})]})]}),e("div",{className:"footer-newsletter",children:[e("h4",{children:"Stay Updated"}),e("p",{children:"Get study abroad tips & updates"}),e("form",{className:"newsletter-form",id:"newsletterForm",children:e("div",{className:"input-group",children:[e("input",{type:"email",name:"email",placeholder:"Enter your email",required:!0,className:"newsletter-input"}),e("button",{type:"submit",className:"newsletter-btn","aria-label":"Subscribe",children:e("i",{className:"fas fa-arrow-right"})})]})})]})]}),e("div",{className:"footer-bottom",children:e("div",{className:"footer-bottom-content",children:[e("p",{className:"copyright",children:"© 2025 SCHOLARIX. All rights reserved."}),e("div",{className:"footer-legal",children:[e("a",{href:"/privacy",children:"Privacy"}),e("a",{href:"/terms",children:"Terms"}),e("a",{href:"/contact",children:"Contact"})]})]})})]})}),e("div",{className:"floating-chatbot",children:e("div",{className:"chatbot-trigger",children:[e("i",{className:"fas fa-comments"}),e("span",{className:"chatbot-text",children:"Chat with us"})]})}),e("script",{src:"/static/app.js",defer:!0}),e("script",{src:"/static/enhanced-forms.js",defer:!0}),e("script",{src:"/static/interactive-planner.js",defer:!0}),e("script",{src:"/static/mobile-contact-form.js",defer:!0}),e("script",{src:"/static/enhanced-animations.js"}),e("script",{src:"/static/study-abroad-3d.js"}),e("script",{src:"/static/interactive-globe.js",defer:!0}),e("script",{src:"/static/course-finder.js"}),e("script",{src:"/static/destinations-accordion.js"}),e("script",{src:"https://cdn.jotfor.ms/agent/embedjs/01998a5c603976e5940cc26a09b91e250511/embed.js"}),e("script",{children:`
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
              const newAltitude = Math.max(1.2, Math.min(4, currentPov.altitude * factor));
              
              globe.pointOfView({
                lat: currentPov.lat,
                lng: currentPov.lng,
                altitude: newAltitude
              }, 400);
              
              // Auto-fit to screen after zoom
              setTimeout(() => {
                if (globe) {
                  const container = document.getElementById('interactive-globe');
                  if (container) {
                    const rect = container.getBoundingClientRect();
                    globe.width(rect.width).height(Math.min(rect.height, 600));
                  }
                }
              }, 450);
            };
            
            // Enhanced responsive globe resizing
            window.resetGlobeView = function() {
              if (!globe) return;
              
              // Reset to optimal view
              globe.pointOfView({ lat: 20, lng: 0, altitude: 2.2 }, 1000);
              
              // Adjust size to container
              setTimeout(() => {
                const container = document.getElementById('interactive-globe');
                if (container && globe) {
                  const rect = container.getBoundingClientRect();
                  const optimalHeight = Math.min(window.innerHeight * 0.6, 600);
                  globe.width(rect.width).height(optimalHeight);
                }
              }, 100);
            };
            
            // Auto-resize globe on window resize
            let resizeTimeout;
            window.addEventListener('resize', function() {
              clearTimeout(resizeTimeout);
              resizeTimeout = setTimeout(() => {
                if (globe) {
                  const container = document.getElementById('interactive-globe');
                  if (container) {
                    const rect = container.getBoundingClientRect();
                    const optimalHeight = Math.min(window.innerHeight * 0.6, 600);
                    globe.width(rect.width).height(optimalHeight);
                  }
                }
              }, 100);
            });

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
          `}),e("script",{dangerouslySetInnerHTML:{__html:`
            // Advanced Performance Monitoring System
            window.ScholarixAnalytics = {
              metrics: {},
              events: [],
              
              // Core Web Vitals tracking
              initPerformanceTracking() {
                if ('PerformanceObserver' in window) {
                  // Track LCP (Largest Contentful Paint)
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      this.metrics.lcp = entry.startTime;
                      console.log('🎯 LCP:', entry.startTime.toFixed(2) + 'ms');
                      
                      // Send to analytics if > 2.5s (poor)
                      if (entry.startTime > 2500) {
                        this.trackEvent('performance_warning', { metric: 'lcp', value: entry.startTime });
                      }
                    }
                  }).observe({ entryTypes: ['largest-contentful-paint'] });
                  
                  // Track FID (First Input Delay) 
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      this.metrics.fid = entry.processingStart - entry.startTime;
                      console.log('⚡ FID:', this.metrics.fid.toFixed(2) + 'ms');
                      
                      if (this.metrics.fid > 100) {
                        this.trackEvent('performance_warning', { metric: 'fid', value: this.metrics.fid });
                      }
                    }
                  }).observe({ entryTypes: ['first-input'] });
                  
                  // Track CLS (Cumulative Layout Shift)
                  let clsValue = 0;
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        this.metrics.cls = clsValue;
                        console.log('📐 CLS:', clsValue.toFixed(4));
                        
                        if (clsValue > 0.1) {
                          this.trackEvent('performance_warning', { metric: 'cls', value: clsValue });
                        }
                      }
                    }
                  }).observe({ entryTypes: ['layout-shift'] });
                  
                  console.log('🔍 Advanced performance monitoring active');
                }
                
                // Track page load metrics
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const navigation = performance.getEntriesByType('navigation')[0];
                    if (navigation) {
                      this.metrics.pageLoad = navigation.loadEventEnd - navigation.navigationStart;
                      this.metrics.domReady = navigation.domContentLoadedEventEnd - navigation.navigationStart;
                      this.metrics.ttfb = navigation.responseStart - navigation.navigationStart;
                      
                      console.log('📊 Page Metrics:', {
                        'Page Load': this.metrics.pageLoad + 'ms',
                        'DOM Ready': this.metrics.domReady + 'ms', 
                        'TTFB': this.metrics.ttfb + 'ms'
                      });
                      
                      // Track slow loading
                      if (this.metrics.pageLoad > 3000) {
                        this.trackEvent('slow_page_load', { duration: this.metrics.pageLoad });
                      }
                    }
                  }, 0);
                });
              },
              
              // User engagement tracking
              initEngagementTracking() {
                let startTime = Date.now();
                let isActive = true;
                let totalEngagementTime = 0;
                
                // Track visibility changes
                document.addEventListener('visibilitychange', () => {
                  isActive = !document.hidden;
                  if (document.hidden) {
                    this.trackEvent('page_blur', { engagement_time: totalEngagementTime });
                  } else {
                    this.trackEvent('page_focus', { engagement_time: totalEngagementTime });
                  }
                });
                
                // Track scroll depth
                let maxScroll = 0;
                window.addEventListener('scroll', () => {
                  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                  if (scrollPercent > maxScroll) {
                    maxScroll = scrollPercent;
                    if (maxScroll % 25 === 0 && maxScroll > 0) {
                      this.trackEvent('scroll_depth', { percent: maxScroll });
                    }
                  }
                }, { passive: true });
                
                console.log('📈 User engagement tracking active');
              },
              
              // Error tracking
              initErrorTracking() {
                window.addEventListener('error', (e) => {
                  this.trackEvent('javascript_error', {
                    message: e.message,
                    filename: e.filename,
                    lineno: e.lineno,
                    stack: e.error?.stack
                  });
                });
                
                window.addEventListener('unhandledrejection', (e) => {
                  this.trackEvent('promise_rejection', {
                    reason: e.reason?.toString()
                  });
                });
                
                console.log('🛡️ Error tracking active');
              },
              
              // Event tracking
              trackEvent(eventName, data = {}) {
                const event = {
                  name: eventName,
                  timestamp: Date.now(),
                  url: window.location.href,
                  userAgent: navigator.userAgent,
                  data: data
                };
                
                this.events.push(event);
                
                // Send to Google Analytics if available
                if (typeof gtag !== 'undefined') {
                  gtag('event', eventName, data);
                }
                
                // Log to console in development
                if (window.location.hostname === 'localhost') {
                  console.log('📊 Event:', eventName, data);
                }
              },
              
              // Initialize all tracking
              init() {
                this.initPerformanceTracking();
                this.initEngagementTracking(); 
                this.initErrorTracking();
                
                // Track page view
                this.trackEvent('page_view', {
                  title: document.title,
                  referrer: document.referrer
                });
                
                console.log('🚀 SCHOLARIX Analytics initialized');
              }
            };
            
            // Initialize analytics when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', () => window.ScholarixAnalytics.init());
            } else {
              window.ScholarixAnalytics.init();
            }
            
            // Service Worker Registration for PWA
            if ('serviceWorker' in navigator && 'caches' in window) {
              window.addEventListener('load', async () => {
                try {
                  const registration = await navigator.serviceWorker.register('/static/sw.js', {
                    scope: '/'
                  });
                  
                  console.log('✅ Service Worker registered:', registration.scope);
                  
                  // Handle updates
                  registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (newWorker) {
                      newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                          // Show update notification
                          showUpdateNotification();
                        }
                      });
                    }
                  });
                  
                  // Track service worker events
                  if (window.ScholarixAnalytics) {
                    window.ScholarixAnalytics.trackEvent('service_worker_registered', {
                      scope: registration.scope
                    });
                  }
                  
                } catch (error) {
                  console.error('🚨 Service Worker registration failed:', error);
                  if (window.ScholarixAnalytics) {
                    window.ScholarixAnalytics.trackEvent('service_worker_failed', {
                      error: error.message
                    });
                  }
                }
              });
              
              // Show update notification
              function showUpdateNotification() {
                const notification = document.createElement('div');
                notification.className = 'update-notification';
                notification.innerHTML = \`
                  <div class="update-content">
                    <span>🚀 New version available!</span>
                    <button onclick="window.location.reload()" class="update-btn">Update</button>
                    <button onclick="this.parentElement.parentElement.remove()" class="dismiss-btn">×</button>
                  </div>
                \`;
                
                notification.style.cssText = \`
                  position: fixed;
                  top: 80px;
                  right: 20px;
                  background: #1e3a8a;
                  color: white;
                  padding: 1rem;
                  border-radius: 8px;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                  z-index: 10000;
                  font-family: Inter, sans-serif;
                  font-size: 14px;
                  max-width: 300px;
                  animation: slideInRight 0.3s ease;
                \`;
                
                document.body.appendChild(notification);
                
                // Auto-remove after 10 seconds
                setTimeout(() => {
                  if (notification.parentElement) {
                    notification.remove();
                  }
                }, 10000);
              }
            }
            
            // Install prompt for PWA
            let deferredPrompt;
            window.addEventListener('beforeinstallprompt', (e) => {
              e.preventDefault();
              deferredPrompt = e;
              
              // Show install button after user engagement
              setTimeout(() => {
                showInstallPrompt();
              }, 30000); // Show after 30 seconds
            });
            
            function showInstallPrompt() {
              if (!deferredPrompt) return;
              
              const installBanner = document.createElement('div');
              installBanner.className = 'install-prompt';
              installBanner.innerHTML = \`
                <div class="install-content">
                  <div class="install-icon">📱</div>
                  <div class="install-text">
                    <div class="install-title">Install SCHOLARIX App</div>
                    <div class="install-subtitle">Get quick access to study abroad guidance</div>
                  </div>
                  <div class="install-actions">
                    <button class="install-btn" onclick="installApp()">Install</button>
                    <button class="dismiss-btn" onclick="dismissInstallPrompt()">Not now</button>
                  </div>
                </div>
              \`;
              
              installBanner.style.cssText = \`
                position: fixed;
                bottom: 20px;
                left: 20px;
                right: 20px;
                background: white;
                border: 1px solid #e5e7eb;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                z-index: 10000;
                font-family: Inter, sans-serif;
                animation: slideInUp 0.3s ease;
                max-width: 400px;
                margin: 0 auto;
              \`;
              
              document.body.appendChild(installBanner);
              
              window.installApp = async () => {
                if (deferredPrompt) {
                  deferredPrompt.prompt();
                  const { outcome } = await deferredPrompt.userChoice;
                  
                  if (window.ScholarixAnalytics) {
                    window.ScholarixAnalytics.trackEvent('pwa_install_prompt', { outcome });
                  }
                  
                  deferredPrompt = null;
                  installBanner.remove();
                }
              };
              
              window.dismissInstallPrompt = () => {
                installBanner.remove();
                if (window.ScholarixAnalytics) {
                  window.ScholarixAnalytics.trackEvent('pwa_install_dismissed');
                }
              };
            }
            
            // Enhanced Progressive Form System
            document.addEventListener('DOMContentLoaded', function() {
              console.log('🚀 Initializing enhanced progressive form system...');
              
              // Initialize all progressive forms
              const forms = document.querySelectorAll('.progressive-form');
              forms.forEach(initializeProgressiveForm);
              
              // Initialize enhanced form inputs
              initializeEnhancedInputs();
              
              function initializeProgressiveForm(form) {
                const steps = form.querySelectorAll('.form-step');
                const nextButtons = form.querySelectorAll('[data-next-step], .btn-next-step');
                const prevButtons = form.querySelectorAll('[data-prev-step], .btn-prev-step');
                let currentStep = 0;
                
                function showStep(n, direction = 'forward') {
                  if (n < 0 || n >= steps.length) return;
                  
                  steps.forEach((step, index) => {
                    step.classList.remove('active', 'slide-in-right', 'slide-in-left');
                    
                    if (index === n) {
                      step.style.display = 'block';
                      setTimeout(() => {
                        step.classList.add('active');
                        if (direction === 'forward') {
                          step.classList.add('slide-in-right');
                        } else {
                          step.classList.add('slide-in-left');
                        }
                      }, 10);
                    } else {
                      setTimeout(() => {
                        step.style.display = 'none';
                      }, 300);
                    }
                  });
                  
                  updateProgressIndicator(n, steps.length);
                  currentStep = n;
                  
                  // Focus first input in new step
                  setTimeout(() => {
                    const firstInput = steps[n].querySelector('input, select, textarea');
                    if (firstInput) firstInput.focus();
                  }, 350);
                }
                
                function updateProgressIndicator(step, total) {
                  const progressFill = form.querySelector('.progress-fill');
                  const progressText = form.querySelector('.progress-indicator, .progress-text');
                  const stepIndicators = form.querySelectorAll('.step-indicator .step');
                  
                  if (progressFill) {
                    const progress = ((step + 1) / total) * 100;
                    progressFill.style.width = progress + '%';
                  }
                  
                  if (progressText) {
                    progressText.textContent = 'Step ' + (step + 1) + ' of ' + total;
                  }
                  
                  // Update step indicators
                  stepIndicators.forEach((indicator, index) => {
                    indicator.classList.remove('active', 'completed');
                    if (index === step) {
                      indicator.classList.add('active');
                    } else if (index < step) {
                      indicator.classList.add('completed');
                    }
                  });
                }
                
                // Initialize first step
                showStep(0);
                
                // Handle next buttons
                nextButtons.forEach(button => {
                  button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const currentStepElement = steps[currentStep];
                    if (validateStep(currentStepElement)) {
                      if (currentStep < steps.length - 1) {
                        showStep(currentStep + 1, 'forward');
                        
                        // Track step completion
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'form_step_completed', {
                            step_number: currentStep + 1,
                            form_name: form.id || 'progressive_form'
                          });
                        }
                      }
                    }
                  });
                });
                
                // Handle previous buttons
                prevButtons.forEach(button => {
                  button.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (currentStep > 0) {
                      showStep(currentStep - 1, 'backward');
                    }
                  });
                });
                
                console.log('✅ Progressive form initialized with', steps.length, 'steps');
              }
              
              function validateStep(stepElement) {
                const requiredFields = stepElement.querySelectorAll('[required]');
                let isValid = true;
                let firstInvalidField = null;
                
                requiredFields.forEach(field => {
                  const isFieldValid = validateField(field);
                  if (!isFieldValid && !firstInvalidField) {
                    firstInvalidField = field;
                  }
                  isValid = isValid && isFieldValid;
                });
                
                if (!isValid && firstInvalidField) {
                  firstInvalidField.focus();
                  showFieldError(firstInvalidField, 'This field is required');
                }
                
                return isValid;
              }
              
              function validateField(field) {
                const value = field.value.trim();
                const fieldType = field.type;
                const fieldName = field.name;
                
                // Basic required validation
                if (field.hasAttribute('required') && !value) {
                  return false;
                }
                
                // Email validation
                if (fieldType === 'email' && value) {
                  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
                  if (!emailRegex.test(value)) {
                    showFieldError(field, 'Please enter a valid email address');
                    return false;
                  }
                }
                
                // Phone validation
                if (fieldType === 'tel' && value) {
                  const phoneRegex = /^[+]?[0-9s-()]{10,}$/;
                  if (!phoneRegex.test(value)) {
                    showFieldError(field, 'Please enter a valid phone number');
                    return false;
                  }
                }
                
                // Name validation
                if (fieldName === 'fullName' && value) {
                  if (value.length < 2) {
                    showFieldError(field, 'Name must be at least 2 characters');
                    return false;
                  }
                }
                
                clearFieldError(field);
                return true;
              }
              
              function showFieldError(field, message) {
                field.classList.add('error');
                field.setAttribute('aria-invalid', 'true');
                
                // Remove existing error message
                const existingError = field.parentNode.querySelector('.field-error');
                if (existingError) {
                  existingError.remove();
                }
                
                // Add new error message
                const errorElement = document.createElement('div');
                errorElement.className = 'field-error';
                errorElement.textContent = message;
                field.parentNode.appendChild(errorElement);
                
                // Add shake animation
                field.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                  field.style.animation = '';
                }, 500);
              }
              
              function clearFieldError(field) {
                field.classList.remove('error');
                field.setAttribute('aria-invalid', 'false');
                
                const errorElement = field.parentNode.querySelector('.field-error');
                if (errorElement) {
                  errorElement.remove();
                }
              }
              
              function initializeEnhancedInputs() {
                // Add floating label behavior
                const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
                
                formInputs.forEach(input => {
                  // Real-time validation
                  input.addEventListener('blur', function() {
                    validateField(this);
                  });
                  
                  // Clear errors on focus
                  input.addEventListener('focus', function() {
                    clearFieldError(this);
                  });
                  
                  // Auto-format phone numbers
                  if (input.type === 'tel') {
                    input.addEventListener('input', function() {
                      let value = this.value.replace(/D/g, '');
                      if (value.length > 0) {
                        if (value.length <= 3) {
                          value = value;
                        } else if (value.length <= 6) {
                          value = value.slice(0, 3) + ' ' + value.slice(3);
                        } else if (value.length <= 10) {
                          value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
                        } else {
                          value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
                        }
                      }
                      this.value = value;
                    });
                  }
                  
                  // Auto-capitalize names
                  if (input.name === 'fullName' || input.name === 'firstName' || input.name === 'lastName') {
                    input.addEventListener('input', function() {
                      this.value = this.value.replace(/\bw/g, l => l.toUpperCase());
                    });
                  }
                });
                
                console.log('✅ Enhanced input behaviors initialized');
              }
            });
            
            // Preload next page resources on hover
            let preloadedLinks = new Set();
            document.addEventListener('mouseover', function(e) {
              const link = e.target.closest('a[href]');
              if (link && link.hostname === location.hostname && !preloadedLinks.has(link.href)) {
                const preloadLink = document.createElement('link');
                preloadLink.rel = 'prefetch';
                preloadLink.href = link.href;
                document.head.appendChild(preloadLink);
                preloadedLinks.add(link.href);
                console.log('🔮 Prefetched:', link.href);
              }
            }, { passive: true });
          `}})]})]})),_=new La;_.use("/api/*",ji());_.use("/static/*",Ui({root:"./public"}));_.use(bn);_.get("/",t=>t.render(e("div",{children:[e("section",{className:"hero-section",children:[e("div",{id:"particles-js"}),e("div",{className:"hero-container",children:e("div",{className:"hero-content",children:[e("div",{className:"hero-text animate-on-scroll",children:[e("h1",{className:"hero-title",children:e("span",{id:"typewriter-text",children:"Your Dream Study Abroad Journey Starts Here"})}),e("p",{className:"hero-subtitle",children:"Specializing in European Study Destinations with High Visa Success from UAE. Expert guidance for study visas, scholarships, university admissions, and IELTS/PTE preparation. Your trusted partner since 2023 - Established in Dubai."}),e("div",{className:"hero-search-bar animate-on-scroll",children:e("div",{className:"search-container",children:e("form",{id:"heroSearchForm",className:"hero-search-form",children:e("div",{className:"search-fields",children:[e("div",{className:"search-field",children:[e("div",{className:"field-icon",children:e("i",{className:"fas fa-book-open"})}),e("select",{id:"heroStudyField","aria-label":"Select field of study",required:!0,children:[e("option",{value:"",children:"What do you want to study?"}),e("option",{value:"Computer Science",children:"Computer Science & IT"}),e("option",{value:"Business Management",children:"Business & Management"}),e("option",{value:"Engineering",children:"Engineering"}),e("option",{value:"Data Science",children:"Data Science & Analytics"}),e("option",{value:"Healthcare",children:"Healthcare & Medicine"}),e("option",{value:"Arts & Design",children:"Arts & Design"})]})]}),e("div",{className:"search-field",children:[e("div",{className:"field-icon",children:e("i",{className:"fas fa-globe-europe"})}),e("select",{id:"heroCountry","aria-label":"Select study destination",required:!0,children:[e("option",{value:"",children:"Where do you want to study?"}),e("option",{value:"Germany",children:"Germany"}),e("option",{value:"France",children:"France"}),e("option",{value:"Ireland",children:"Ireland"}),e("option",{value:"UK",children:"United Kingdom"}),e("option",{value:"Canada",children:"Canada"}),e("option",{value:"USA",children:"United States"})]})]}),e("button",{type:"submit",className:"search-submit-btn",children:[e("i",{className:"fas fa-search"}),e("span",{children:"Find Courses"})]})]})})})}),e("div",{className:"hero-stats",children:[e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"2500"}),e("div",{className:"stat-label",children:"Students Placed"})]}),e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"95"}),e("div",{className:"stat-label",children:"Visa Success %"})]}),e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"150"}),e("div",{className:"stat-label",children:"Partner Universities"})]})]}),e("div",{className:"hero-cta",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-accent btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat"]})]})]}),e("div",{className:"hero-image",children:e("img",{src:"/static/images/hero-graduate-3d.png",alt:"International Graduate Student"})})]})})]}),e("section",{className:"services-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("h2",{children:"Why Choose SCHOLARIX?"}),e("p",{children:"Comprehensive support for your international education journey"})]}),e("div",{className:"services-grid",children:[e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-passport text-primary"})}),e("h3",{children:"Study Visa Support"}),e("p",{children:"Expert guidance for student visa applications with 99% success rate. We handle all documentation and interview preparation."}),e("a",{href:"/services/visa",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-graduation-cap text-primary"})}),e("h3",{children:"University Admissions"}),e("p",{children:"Get admitted to top universities worldwide. We help with applications, essays, and course selection."}),e("a",{href:"/services/admissions",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-trophy text-accent"})}),e("h3",{children:"Scholarships"}),e("p",{children:"Access exclusive scholarships worth millions. We help you find and apply for the best funding opportunities."}),e("a",{href:"/services/scholarships",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-book text-primary"})}),e("h3",{children:"IELTS/PTE Preparation"}),e("p",{children:"Achieve your target scores with our expert trainers. Online and offline classes available."}),e("a",{href:"/services/test-prep",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-user-tie text-primary"})}),e("h3",{children:"Career Counselling"}),e("p",{children:"Get personalized career guidance to choose the right course and country for your future."}),e("a",{href:"/services/counselling",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-plane text-accent"})}),e("h3",{children:"Pre/Post Departure Support"}),e("p",{children:"Complete support for accommodation, travel, and settling in your destination country before and after arrival."}),e("a",{href:"/services/pre-departure",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]})]})]})}),e("section",{className:"course-search-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("div",{className:"badge",children:[e("i",{className:"fas fa-search"})," Find Your Program"]}),e("h2",{children:"Explore Study Programs by Destination"}),e("p",{children:"Browse through our study destinations and find programs that match your goals and budget."})]}),e("div",{className:"program-search-cta",children:[e("a",{href:"#destinations-globe",className:"btn btn-primary btn-large",children:[e("i",{className:"fas fa-globe-europe"}),"Explore Study Destinations"]}),e("p",{className:"search-subtext",children:"Click on any country pin to view programs, costs, and application requirements"})]})]})}),e("section",{className:"visa-success-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"🎯 Our Advantage"}),e("h2",{children:"Higher Visa Approval Success from UAE"}),e("p",{children:"UAE residents enjoy significantly higher visa success rates compared to home country applications"})]}),e("div",{className:"visa-success-grid",children:[e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇭🇺"}),e("h3",{children:"Hungary"}),e("div",{className:"success-badge",children:"97% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇱🇹"}),e("h3",{children:"Lithuania"}),e("div",{className:"success-badge",children:"96% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇲🇹"}),e("h3",{children:"Malta"}),e("div",{className:"success-badge",children:"95% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇩🇪"}),e("h3",{children:"Germany"}),e("div",{className:"success-badge",children:"94% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇮🇪"}),e("h3",{children:"Ireland"}),e("div",{className:"success-badge",children:"93% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇫🇮"}),e("h3",{children:"Finland"}),e("div",{className:"success-badge",children:"92% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇸🇬"}),e("h3",{children:"Singapore"}),e("div",{className:"success-badge",children:"91% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇩🇰"}),e("h3",{children:"Denmark"}),e("div",{className:"success-badge",children:"90% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇸🇪"}),e("h3",{children:"Sweden"}),e("div",{className:"success-badge",children:"90% Success"})]})]})]})}),e("section",{id:"destinations-globe",className:"destinations-globe-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("div",{className:"badge",children:"🌍 Interactive Explorer"}),e("h2",{children:"Explore Study Destinations Worldwide"}),e("p",{children:"Click on any country pin to discover programs, costs, visa requirements, and application details"})]}),e("div",{className:"globe-container",children:[e("div",{id:"interactive-globe",className:"interactive-globe"}),e("div",{className:"globe-controls",children:[e("button",{className:"globe-control-btn",onclick:"resetGlobe()",title:"Reset View",children:e("i",{className:"fas fa-home"})}),e("button",{className:"globe-control-btn",onclick:"toggleGlobeRotation()",title:"Toggle Rotation",children:e("i",{className:"fas fa-play",id:"rotation-icon"})}),e("div",{className:"globe-zoom-controls",children:[e("button",{className:"globe-control-btn",onclick:"zoomGlobe(1.2)",title:"Zoom In",children:e("i",{className:"fas fa-plus"})}),e("button",{className:"globe-control-btn",onclick:"zoomGlobe(0.8)",title:"Zoom Out",children:e("i",{className:"fas fa-minus"})})]})]}),e("div",{id:"globe-loader",className:"globe-loader",children:[e("div",{className:"loader-spinner"}),e("p",{children:"Loading Interactive Globe..."})]})]}),e("div",{className:"mobile-destinations-fallback",children:[e("div",{className:"destinations-header",children:[e("h3",{children:"🌍 Top Study Destinations"}),e("p",{children:"Click any destination to explore programs, costs & requirements"})]}),e("div",{className:"destinations-grid",children:[e("div",{className:"destination-card popular",onclick:"showDestinationModal('germany')",children:[e("div",{className:"destination-flag",children:"🇩🇪"}),e("div",{className:"destination-info",children:[e("h4",{children:"Germany"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"250+ Universities"}),e("span",{className:"stat",children:"95% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Free Tuition Available"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card popular",onclick:"showDestinationModal('canada')",children:[e("div",{className:"destination-flag",children:"🇨🇦"}),e("div",{className:"destination-info",children:[e("h4",{children:"Canada"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"500+ Universities"}),e("span",{className:"stat",children:"85% Visa Success"})]}),e("div",{className:"destination-highlight",children:"3-Year Work Permit"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card popular",onclick:"showDestinationModal('uk')",children:[e("div",{className:"destination-flag",children:"🇬🇧"}),e("div",{className:"destination-info",children:[e("h4",{children:"United Kingdom"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"400+ Universities"}),e("span",{className:"stat",children:"88% Visa Success"})]}),e("div",{className:"destination-highlight",children:"World-Class Education"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card affordable",onclick:"showDestinationModal('ireland')",children:[e("div",{className:"destination-flag",children:"🇮🇪"}),e("div",{className:"destination-info",children:[e("h4",{children:"Ireland"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"150+ Universities"}),e("span",{className:"stat",children:"90% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Tech Hub of Europe"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card premium",onclick:"showDestinationModal('australia')",children:[e("div",{className:"destination-flag",children:"🇦🇺"}),e("div",{className:"destination-info",children:[e("h4",{children:"Australia"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"300+ Universities"}),e("span",{className:"stat",children:"82% Visa Success"})]}),e("div",{className:"destination-highlight",children:"High Living Standard"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card affordable",onclick:"showDestinationModal('france')",children:[e("div",{className:"destination-flag",children:"🇫🇷"}),e("div",{className:"destination-info",children:[e("h4",{children:"France"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"600+ Universities"}),e("span",{className:"stat",children:"87% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Low Cost, High Quality"})]}),e("div",{className:"destination-arrow",children:"→"})]})]}),e("div",{className:"destinations-cta",children:e("button",{className:"btn btn-primary",onclick:"document.getElementById('consultationModal').style.display='block'",children:[e("i",{className:"fas fa-calendar-check"}),"Get Personalized Guidance"]})})]}),e("div",{id:"country-info-modal",className:"country-modal",children:e("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:[e("h3",{id:"modal-country-name",children:"Country Name"}),e("button",{id:"modal-close-btn",className:"modal-close",onclick:"closeDestinationModal()",type:"button","aria-label":"Close modal",children:e("i",{className:"fas fa-times"})})]}),e("div",{className:"modal-body",children:[e("div",{className:"country-overview",children:[e("div",{id:"modal-country-flag",className:"country-flag-large"}),e("div",{id:"modal-country-description",className:"country-description"})]}),e("div",{className:"country-stats",children:e("div",{class:"stat-grid",children:[e("div",{class:"stat-item",children:[e("i",{class:"fas fa-euro-sign"}),e("div",{children:[e("strong",{id:"modal-tuition-range",children:"€0 - €0"}),e("small",{children:"Annual Tuition"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-home"}),e("div",{children:[e("strong",{id:"modal-living-cost",children:"€0 - €0"}),e("small",{children:"Living Cost"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-check-circle"}),e("div",{children:[e("strong",{id:"modal-visa-success",children:"0%"}),e("small",{children:"Visa Success"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-briefcase"}),e("div",{children:[e("strong",{id:"modal-work-permit",children:"N/A"}),e("small",{children:"Work Permit"})]})]})]})}),e("div",{className:"program-highlights",children:[e("h4",{children:"Popular Programs"}),e("div",{id:"modal-programs",className:"programs-list"})]}),e("div",{className:"modal-actions",children:[e("button",{className:"btn btn-primary",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar"}),"Book Consultation"]}),e("button",{className:"btn btn-secondary",onclick:"downloadCountryGuide()",children:[e("i",{className:"fas fa-download"}),"Download Guide"]})]})]})]})}),e("div",{id:"program-inquiry-modal",className:"program-modal",children:e("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:[e("h3",{id:"program-modal-title",children:"Program Inquiry"}),e("button",{id:"program-modal-close-btn",className:"modal-close",onclick:"closeProgramInquiryModal()",type:"button","aria-label":"Close modal",children:e("i",{className:"fas fa-times"})})]}),e("div",{className:"modal-body",children:[e("div",{className:"program-overview",children:[e("div",{id:"program-icon",className:"program-icon-large",children:"🎓"}),e("div",{className:"program-details",children:[e("h4",{id:"program-name",children:"Program Name"}),e("div",{id:"program-price-display",className:"program-price-display",children:[e("span",{id:"program-price",children:"$0"}),e("small",{id:"program-duration",children:"/year"})]}),e("div",{id:"program-features-display",className:"program-features-preview"})]})]}),e("div",{className:"inquiry-form-section",children:[e("h4",{children:"Get Program Information"}),e("form",{id:"program-inquiry-form",className:"progressive-form",children:[e("div",{className:"form-step active","data-step":"1",children:e("div",{className:"form-grid",children:[e("div",{className:"form-group",children:[e("label",{for:"inquiry-full-name",children:[e("i",{className:"fas fa-user"}),"Full Name *"]}),e("input",{type:"text",id:"inquiry-full-name",name:"fullName",required:!0,placeholder:"Enter your full name"})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-email",children:[e("i",{className:"fas fa-envelope"}),"Email Address *"]}),e("input",{type:"email",id:"inquiry-email",name:"email",required:!0,placeholder:"your.email@example.com"})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-phone",children:[e("i",{className:"fas fa-phone"}),"Phone Number *"]}),e("input",{type:"tel",id:"inquiry-phone",name:"phone",required:!0,placeholder:"+971 50 123 4567"})]}),e("div",{className:"form-group full-width",children:[e("label",{for:"inquiry-program",children:[e("i",{className:"fas fa-graduation-cap"}),"Program of Interest *"]}),e("input",{type:"text",id:"inquiry-program",name:"program",readonly:!0,style:"background-color: #f8f9fa; cursor: not-allowed;"})]})]})}),e("div",{className:"form-step","data-step":"2",children:e("div",{className:"form-grid",children:[e("div",{className:"form-group",children:[e("label",{for:"inquiry-education-level",children:[e("i",{className:"fas fa-book"}),"Current Education Level"]}),e("select",{id:"inquiry-education-level",name:"educationLevel",children:[e("option",{value:"",children:"Select your level"}),e("option",{value:"high-school",children:"High School"}),e("option",{value:"undergraduate",children:"Undergraduate"}),e("option",{value:"graduate",children:"Graduate"}),e("option",{value:"postgraduate",children:"Postgraduate"}),e("option",{value:"working-professional",children:"Working Professional"})]})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-start-date",children:[e("i",{className:"fas fa-calendar"}),"Preferred Start Date"]}),e("select",{id:"inquiry-start-date",name:"startDate",children:[e("option",{value:"",children:"Select timeline"}),e("option",{value:"immediate",children:"Immediate (Next 3 months)"}),e("option",{value:"6-months",children:"In 6 months"}),e("option",{value:"1-year",children:"Next year"}),e("option",{value:"flexible",children:"Flexible"})]})]}),e("div",{className:"form-group full-width",children:[e("label",{for:"inquiry-message",children:[e("i",{className:"fas fa-message"}),"Additional Questions (Optional)"]}),e("textarea",{id:"inquiry-message",name:"message",rows:3,placeholder:"Any specific questions about the program, admission requirements, or other concerns?"})]})]})}),e("div",{className:"form-navigation",children:[e("div",{className:"step-indicator",children:[e("div",{className:"step active","data-step":"1",children:"1"}),e("div",{className:"progress-line",children:e("div",{className:"progress-fill"})}),e("div",{className:"step","data-step":"2",children:"2"})]}),e("div",{className:"form-buttons",children:[e("button",{type:"button",id:"program-form-prev",className:"btn btn-secondary",style:"display: none;",children:[e("i",{className:"fas fa-arrow-left"})," Previous"]}),e("button",{type:"button",id:"program-form-next",className:"btn btn-primary",children:["Next ",e("i",{className:"fas fa-arrow-right"})]}),e("button",{type:"submit",id:"program-form-submit",className:"btn btn-primary",style:"display: none;",children:[e("i",{className:"fas fa-paper-plane"})," Send Inquiry"]})]})]})]})]}),e("div",{className:"trust-indicators",children:[e("div",{className:"trust-item",children:[e("i",{className:"fas fa-shield-alt"}),e("span",{children:"Secure & Confidential"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-clock"}),e("span",{children:"Response in 24 hours"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-award"}),e("span",{children:"Expert Guidance"})]})]})]})]})}),e("div",{className:"globe-footer",children:[e("p",{className:"globe-instruction",children:[e("i",{className:"fas fa-mouse"}),"Drag to rotate • Scroll to zoom • Click pins for details"]}),e("div",{className:"popular-destinations-quick",children:[e("span",{children:"Quick access:"}),e("button",{onclick:"focusCountry('germany')",className:"quick-country-btn",children:"🇩🇪 Germany"}),e("button",{onclick:"focusCountry('canada')",className:"quick-country-btn",children:"🇨🇦 Canada"}),e("button",{onclick:"focusCountry('australia')",className:"quick-country-btn",children:"🇦🇺 Australia"}),e("button",{onclick:"focusCountry('malta')",className:"quick-country-btn",children:"🇲🇹 Malta"})]})]})]})}),e("section",{className:"mbbs-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"🏥 Medical Education"}),e("h2",{children:"Affordable MBBS Programs"}),e("p",{children:"Study medicine in WHO-recognized universities for under $5,000/year"})]}),e("div",{className:"mbbs-grid",children:[e("div",{className:"mbbs-card animate-on-scroll",children:[e("div",{className:"mbbs-header",children:[e("div",{className:"country-flag-large",children:"🇬🇪"}),e("h3",{children:"Georgia MBBS"})]}),e("div",{className:"mbbs-content",children:[e("div",{className:"price-tag",children:"$4,500/year"}),e("ul",{className:"mbbs-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," WHO-Recognized"]}),e("li",{children:[e("i",{className:"fas fa-check"})," English-Taught"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 6-Year Program"]}),e("li",{children:[e("i",{className:"fas fa-check"})," High Success Rate"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Low Living Cost"]}),e("li",{children:[e("i",{className:"fas fa-check"})," No Donation"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('georgia-mbbs', 'Georgia MBBS', '$4,500', '/year', '🇬🇪', ['WHO-Recognized', 'English-Taught', '6-Year Program', 'High Success Rate', 'Low Living Cost', 'No Donation'])",children:"Learn More"})]})]}),e("div",{className:"mbbs-card animate-on-scroll",children:[e("div",{className:"mbbs-header",children:[e("div",{className:"country-flag-large",children:"🇷🇺"}),e("h3",{children:"Russia MBBS"})]}),e("div",{className:"mbbs-content",children:[e("div",{className:"price-tag",children:"$4,000/year"}),e("ul",{className:"mbbs-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," WHO-Recognized"]}),e("li",{children:[e("i",{className:"fas fa-check"})," English Medium"]}),e("li",{children:[e("i",{className:"fas fa-check"})," World-Class Facilities"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Affordable Living"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Quality Education"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Safe Environment"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('russia-mbbs', 'Russia MBBS', '$4,000', '/year', '🇷🇺', ['WHO-Recognized', 'English Medium', 'World-Class Facilities', 'Affordable Living', 'Quality Education', 'Safe Environment'])",children:"Learn More"})]})]})]}),e("div",{className:"mbbs-cta",children:e("p",{className:"highlight-text",children:[e("i",{className:"fas fa-star"}),"Alternative to expensive UK/US/Canada medical programs - Save over $200,000!"]})})]})}),e("section",{className:"test-prep-marketplace",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"📚 Test Preparation"}),e("h2",{children:"Test Prep Course Marketplace"}),e("p",{children:"Ace your language proficiency tests with our expert-led courses"})]}),e("div",{className:"marketplace-grid",id:"testPrepGrid",children:[e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-badge",children:"Most Popular"}),e("div",{className:"course-icon",children:"🎯"}),e("h3",{children:"IELTS Preparation"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 2,000"}),e("span",{className:"current-price",children:"AED 1,499"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 60 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Live Online Classes"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Mock Tests Included"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 7+ Guarantee"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Study Materials"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Personal Tutor Support"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('ielts-prep', 'IELTS Preparation', 'AED 1,499', '', '🎯', ['60 Hours of Training', 'Live Online Classes', 'Mock Tests Included', 'Score 7+ Guarantee', 'Study Materials', 'Personal Tutor Support'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-icon",children:"🎓"}),e("h3",{children:"PTE Academic"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 1,800"}),e("span",{className:"current-price",children:"AED 1,299"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 50 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Computer-Based Practice"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 10 Full Mock Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 65+ Guarantee"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Practice Tests & Scoring"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Flexible Schedule"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('pte-academic', 'PTE Academic', 'AED 1,299', '', '🎓', ['50 Hours of Training', 'Computer-Based Practice', '10 Full Mock Tests', 'Score 65+ Guarantee', 'Practice Tests & Scoring', 'Flexible Schedule'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-icon",children:"📖"}),e("h3",{children:"TOEFL iBT"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 2,200"}),e("span",{className:"current-price",children:"AED 1,699"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 65 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Comprehensive Curriculum"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 8 Practice Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 100+ Focus"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Expert Instructors"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Lifetime Materials Access"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('toefl-ibt', 'TOEFL iBT', 'AED 1,699', '', '📖', ['65 Hours of Training', 'Comprehensive Curriculum', '8 Practice Tests', 'Score 100+ Focus', 'Expert Instructors', 'Lifetime Materials Access'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-hidden",children:[e("div",{className:"course-badge",children:"New"}),e("div",{className:"course-icon",children:"🌟"}),e("h3",{children:"Duolingo English Test"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 1,500"}),e("span",{className:"current-price",children:"AED 999"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 40 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Fast-Track Program"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 15 Practice Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 120+ Target"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Adaptive Learning"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 24/7 Online Access"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]})]}),e("div",{className:"marketplace-cta",children:e("p",{children:[e("i",{className:"fas fa-gift"})," ",e("strong",{children:"Special Offer:"})," Get 20% off when you enroll with our university admission package!"]})})]})}),e("section",{className:"testimonials-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("h2",{children:"Success Stories"}),e("p",{children:"Hear from our successful students"})]}),e("div",{className:"testimonials-grid",children:[e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"SCHOLARIX helped me secure admission at Technical University of Munich with excellent scholarship support. The entire process was smooth and professional!"'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student1.jpg",alt:"Priya Sharma"}),e("div",{className:"author-info",children:[e("h4",{children:"Priya Sharma"}),e("p",{children:"Technical University of Munich, Germany"})]})]})]}),e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"Got my German student visa in just 3 weeks! The team guided me through every step and made the documentation process stress-free."'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student2.jpg",alt:"Raj Patel"}),e("div",{className:"author-info",children:[e("h4",{children:"Raj Patel"}),e("p",{children:"University of Stuttgart, Germany"})]})]})]}),e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"The IELTS coaching was excellent. I scored 7.5 and got admitted to Trinity College Dublin. Thank you SCHOLARIX for the amazing support!"'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student3.jpg",alt:"Sarah Ahmed"}),e("div",{className:"author-info",children:[e("h4",{children:"Sarah Ahmed"}),e("p",{children:"Trinity College Dublin, Ireland"})]})]})]})]})]})}),e("section",{className:"cta-section",children:e("div",{className:"container",children:e("div",{className:"cta-content",children:[e("h2",{children:"Ready to Start Your Study Abroad Journey?"}),e("p",{children:"Get expert guidance and personalized support to achieve your international education dreams"}),e("div",{className:"cta-buttons",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-outline btn-large",onclick:"document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})",children:[e("i",{className:"fas fa-envelope"}),"Get Information"]})]})]})})}),e("section",{className:"contact-form-section",id:"contact-form",children:e("div",{className:"container",children:[e("div",{className:"section-header mobile-centered",children:[e("div",{className:"badge mobile-badge",children:[e("i",{className:"fas fa-headset"})," Free Consultation"]}),e("h2",{className:"mobile-title",children:"Get Your Free Consultation"}),e("p",{className:"mobile-subtitle",children:"Fill out this form and our experts will contact you within 24 hours"})]}),e("div",{className:"mobile-form-layout",children:[e("div",{className:"mobile-form-card",children:e("div",{className:"progressive-form-container",children:e("form",{action:"https://formspree.io/f/xyzgkjad",method:"post",className:"mobile-progressive-form",id:"mobileLeadForm",children:[e("input",{type:"hidden",name:"_subject",value:"New SCHOLARIX Consultation Request"}),e("input",{type:"hidden",name:"_next",value:"https://scholarixstudy.com/thank-you"}),e("div",{className:"mobile-form-step active",id:"mobileStep1",children:[e("div",{className:"mobile-step-header",children:[e("div",{className:"step-indicator-mobile",children:[e("div",{className:"step-number active",children:"1"}),e("div",{className:"step-divider"}),e("div",{className:"step-number",children:"2"})]}),e("div",{className:"step-title",children:"Basic Information"}),e("div",{className:"mobile-progress-bar",children:e("div",{className:"mobile-progress-fill",style:{width:"50%"}})})]}),e("div",{className:"mobile-form-fields",children:[e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-user input-icon"}),"Full Name *"]}),e("input",{type:"text",name:"fullName",className:"mobile-input",placeholder:"Enter your full name",required:!0})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-envelope input-icon"}),"Email Address *"]}),e("input",{type:"email",name:"email",className:"mobile-input",placeholder:"your.email@example.com",required:!0})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-phone input-icon"}),"Phone Number *"]}),e("div",{className:"mobile-phone-wrapper",children:[e("select",{name:"countryCode",className:"mobile-country-select",required:!0,children:[e("option",{value:"+971",children:"🇦🇪 +971"}),e("option",{value:"+1",children:"🇺🇸 +1"}),e("option",{value:"+44",children:"🇬🇧 +44"}),e("option",{value:"+91",children:"🇮🇳 +91"}),e("option",{value:"+92",children:"🇵🇰 +92"}),e("option",{value:"+966",children:"🇸🇦 +966"}),e("option",{value:"+974",children:"🇶🇦 +974"})]}),e("input",{type:"tel",name:"phone",className:"mobile-phone-input",placeholder:"50 123 4567",required:!0})]})]})]}),e("button",{type:"button",className:"mobile-next-btn",onclick:"showMobileStep2()",children:[e("span",{children:"Continue"}),e("i",{className:"fas fa-arrow-right"})]}),e("div",{className:"mobile-trust-indicators",children:[e("div",{className:"mobile-trust-item",children:[e("i",{className:"fas fa-shield-alt"}),e("span",{children:"100% Secure"})]}),e("div",{className:"mobile-trust-item",children:[e("i",{className:"fas fa-clock"}),e("span",{children:"24h Response"})]}),e("div",{className:"mobile-trust-item",children:[e("i",{className:"fas fa-award"}),e("span",{children:"Expert Guidance"})]})]})]}),e("div",{className:"mobile-form-step",id:"mobileStep2",style:{display:"none"},children:[e("div",{className:"mobile-step-header",children:[e("div",{className:"step-indicator-mobile",children:[e("div",{className:"step-number completed",children:"1"}),e("div",{className:"step-divider active"}),e("div",{className:"step-number active",children:"2"})]}),e("div",{className:"step-title",children:"Study Preferences"}),e("div",{className:"mobile-progress-bar",children:e("div",{className:"mobile-progress-fill",style:{width:"100%"}})})]}),e("div",{className:"mobile-form-fields",children:[e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-globe input-icon"}),"Preferred Destination *"]}),e("select",{name:"destination",className:"mobile-select",required:!0,children:[e("option",{value:"",children:"Select your destination"}),e("option",{value:"germany",children:"🇩🇪 Germany"}),e("option",{value:"canada",children:"🇨🇦 Canada"}),e("option",{value:"uk",children:"🇬🇧 United Kingdom"}),e("option",{value:"ireland",children:"🇮🇪 Ireland"}),e("option",{value:"australia",children:"🇦🇺 Australia"}),e("option",{value:"france",children:"🇫🇷 France"}),e("option",{value:"usa",children:"🇺🇸 United States"}),e("option",{value:"malta",children:"🇲🇹 Malta"})]})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-graduation-cap input-icon"}),"Study Level *"]}),e("select",{name:"studyLevel",className:"mobile-select",required:!0,children:[e("option",{value:"",children:"Select study level"}),e("option",{value:"bachelor",children:"Bachelor's Degree"}),e("option",{value:"master",children:"Master's Degree"}),e("option",{value:"phd",children:"PhD/Research"}),e("option",{value:"diploma",children:"Diploma/Certificate"}),e("option",{value:"foundation",children:"Foundation Course"})]})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label",children:[e("i",{className:"fas fa-calendar input-icon"}),"When to Start *"]}),e("select",{name:"timeline",className:"mobile-select",required:!0,children:[e("option",{value:"",children:"Select timeline"}),e("option",{value:"2025-spring",children:"Spring 2025"}),e("option",{value:"2025-fall",children:"Fall 2025"}),e("option",{value:"2026",children:"2026"}),e("option",{value:"2027",children:"2027 or later"}),e("option",{value:"flexible",children:"Flexible"})]})]}),e("div",{className:"mobile-input-group",children:[e("label",{className:"mobile-label optional",children:[e("i",{className:"fas fa-comment input-icon"}),"Additional Questions (Optional)"]}),e("textarea",{name:"message",className:"mobile-textarea",placeholder:"Any specific questions about programs, costs, scholarships, or requirements?",rows:3})]})]}),e("div",{className:"mobile-form-actions",children:[e("button",{type:"button",className:"mobile-back-btn",onclick:"showMobileStep1()",children:[e("i",{className:"fas fa-arrow-left"}),e("span",{children:"Back"})]}),e("button",{type:"submit",className:"mobile-submit-btn",children:[e("i",{className:"fas fa-paper-plane"}),e("span",{children:"Get Free Consultation"})]})]})]})]})})}),e("div",{className:"mobile-contact-card",children:[e("div",{className:"contact-header",children:[e("div",{className:"contact-logo",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX",className:"mobile-logo"})}),e("h3",{className:"contact-title",children:"Contact Information"}),e("p",{className:"contact-subtitle",children:"Get in touch with our experts"})]}),e("div",{className:"mobile-contact-methods",children:[e("a",{href:"tel:+971525438784",className:"mobile-contact-item primary",children:[e("div",{className:"contact-icon-wrapper phone",children:e("i",{className:"fas fa-phone"})}),e("div",{className:"contact-details",children:[e("span",{className:"contact-label",children:"Call Us Now"}),e("span",{className:"contact-value",children:"+971 52 543 8784"}),e("span",{className:"contact-note",children:"Available 9 AM - 9 PM"})]}),e("i",{className:"fas fa-chevron-right contact-arrow"})]}),e("a",{href:"https://wa.me/971525438784?text=Hi%20SCHOLARIX%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%20me%3F",className:"mobile-contact-item whatsapp",target:"_blank",rel:"noopener noreferrer",children:[e("div",{className:"contact-icon-wrapper whatsapp",children:e("i",{className:"fab fa-whatsapp"})}),e("div",{className:"contact-details",children:[e("span",{className:"contact-label",children:"WhatsApp Chat"}),e("span",{className:"contact-value",children:"+971 52 543 8784"}),e("span",{className:"contact-note",children:"Instant Response"})]}),e("i",{className:"fas fa-chevron-right contact-arrow"})]}),e("a",{href:"mailto:info@scholarixstudy.com",className:"mobile-contact-item email",children:[e("div",{className:"contact-icon-wrapper email",children:e("i",{className:"fas fa-envelope"})}),e("div",{className:"contact-details",children:[e("span",{className:"contact-label",children:"Email Us"}),e("span",{className:"contact-value",children:"info@scholarixstudy.com"}),e("span",{className:"contact-note",children:"24-hour response"})]}),e("i",{className:"fas fa-chevron-right contact-arrow"})]}),e("div",{className:"mobile-contact-item location",children:[e("div",{className:"contact-icon-wrapper location",children:e("i",{className:"fas fa-map-marker-alt"})}),e("div",{className:"contact-details",children:[e("span",{className:"contact-label",children:"Visit Our Office"}),e("span",{className:"contact-value",children:"Dubai, UAE"}),e("span",{className:"contact-note",children:"By appointment only"})]})]})]}),e("div",{className:"mobile-social-proof",children:[e("div",{className:"social-stat",children:[e("div",{className:"stat-number",children:"2500+"}),e("div",{className:"stat-label",children:"Students Helped"})]}),e("div",{className:"social-stat",children:[e("div",{className:"stat-number",children:"95%"}),e("div",{className:"stat-label",children:"Visa Success"})]}),e("div",{className:"social-stat",children:[e("div",{className:"stat-number",children:"24/7"}),e("div",{className:"stat-label",children:"Support"})]})]})]})]})]})}),e("div",{id:"consultationModal",className:"modal",children:e("div",{className:"modal-content",children:[e("span",{className:"close",onclick:"closeConsultationModal()",children:"×"}),e("h2",{children:"Book Your Free Consultation"}),e("p",{children:"Choose your preferred consultation method:"}),e("div",{className:"consultation-options",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat Consultation"]}),e("button",{className:"btn btn-secondary btn-large",onclick:"window.open('tel:+971525438784', '_self')",children:[e("i",{className:"fas fa-phone"}),"Phone Call"]}),e("button",{className:"btn btn-outline btn-large",onclick:"closeConsultationModal(); document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})",children:[e("i",{className:"fas fa-envelope"}),"Email Inquiry"]})]})]})}),e("div",{className:"whatsapp-sticky",children:e("a",{href:"https://wa.me/971525438784?text=Hi%20SCHOLARIX%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%20me%3F",className:"whatsapp-btn",target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with us on WhatsApp",children:[e("i",{className:"fab fa-whatsapp"}),e("span",{className:"whatsapp-text",children:"Chat with us"})]})})]})));_.get("/about",t=>t.render(e("div",{className:"about-page",children:e("div",{className:"container",children:[e("section",{className:"about-hero",children:e("div",{className:"about-hero-content",children:[e("h1",{children:"About SCHOLARIX"}),e("p",{className:"hero-subtitle",children:"Empowering students to achieve their international education dreams since 2018. With over 10,000 successful student placements and a 99% visa success rate, we are your trusted partner for study abroad success."})]})}),e("section",{className:"about-mission",children:e("div",{className:"section-header",children:[e("h2",{children:"Our Mission"}),e("p",{children:"To provide world-class educational guidance and support, helping students navigate their academic journeys and achieve their full potential in international education."})]})}),e("section",{className:"about-stats",children:e("div",{className:"stats-grid",children:[e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"10,000+"}),e("div",{className:"stat-label",children:"Students Placed"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"99%"}),e("div",{className:"stat-label",children:"Visa Success Rate"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"500+"}),e("div",{className:"stat-label",children:"Partner Universities"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"15+"}),e("div",{className:"stat-label",children:"Countries Covered"})]})]})}),e("section",{className:"about-team",children:[e("div",{className:"section-header",children:[e("h2",{children:"Our Expert Team"}),e("p",{children:"Experienced counselors and visa experts dedicated to your success"})]}),e("div",{className:"team-grid",children:[e("div",{className:"team-member",children:[e("img",{src:"/static/images/team1.jpg",alt:"Sarah Johnson"}),e("h3",{children:"Sarah Johnson"}),e("p",{children:"Senior Education Counselor"}),e("p",{children:"10+ years experience in US and UK admissions"})]}),e("div",{className:"team-member",children:[e("img",{src:"/static/images/team2.jpg",alt:"Michael Chen"}),e("h3",{children:"Michael Chen"}),e("p",{children:"Visa Specialist"}),e("p",{children:"Expert in student visa applications for all countries"})]}),e("div",{className:"team-member",children:[e("img",{src:"/static/images/team3.jpg",alt:"Dr. Priya Patel"}),e("h3",{children:"Dr. Priya Patel"}),e("p",{children:"Academic Director"}),e("p",{children:"PhD in International Education, 15+ years experience"})]})]})]}),e("div",{className:"about-cta",children:e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:"Meet Our Team"})})]})})));_.get("/contact",t=>t.render(e("div",{className:"contact-page",children:e("div",{className:"container",children:[e("section",{className:"contact-hero",children:[e("h1",{children:"Contact SCHOLARIX"}),e("p",{children:"Ready to start your study abroad journey? Get in touch with our experts today!"})]}),e("section",{className:"contact-main",children:e("div",{className:"contact-grid",children:[e("div",{className:"contact-info",children:[e("h2",{children:"Get In Touch"}),e("div",{className:"contact-methods",children:[e("div",{className:"contact-method",children:[e("i",{className:"fas fa-phone text-primary"}),e("div",{children:[e("h4",{children:"Phone"}),e("p",{children:"+971 52 543 8784"}),e("small",{children:"Mon-Sat: 9AM-7PM GST"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-envelope text-primary"}),e("div",{children:[e("h4",{children:"Email"}),e("p",{children:"info@scholarixstudy.com"}),e("small",{children:"Response within 24 hours"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-comments text-accent"}),e("div",{children:[e("h4",{children:"Live Chat"}),e("p",{children:"24/7 Available"}),e("small",{children:"Instant messaging support"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-map-marker-alt text-primary"}),e("div",{children:[e("h4",{children:"Office"}),e("p",{children:"Dubai, United Arab Emirates"}),e("small",{children:"By appointment only"})]})]})]})]}),e("div",{className:"contact-form",children:[e("h2",{children:"Send Us a Message"}),e("form",{id:"contactForm",className:"lead-form",children:[e("div",{className:"form-row",children:[e("div",{className:"form-group",children:e("input",{type:"text",name:"firstName",placeholder:"First Name*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"text",name:"lastName",placeholder:"Last Name*",required:!0})})]}),e("div",{className:"form-group",children:e("input",{type:"email",name:"email",placeholder:"Email Address*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"tel",name:"phone",placeholder:"Phone Number*",required:!0})}),e("div",{className:"form-group",children:e("select",{name:"subject",required:!0,children:[e("option",{value:"",children:"Subject*"}),e("option",{value:"general",children:"General Inquiry"}),e("option",{value:"visa",children:"Visa Support"}),e("option",{value:"admission",children:"University Admission"}),e("option",{value:"scholarship",children:"Scholarships"}),e("option",{value:"ielts",children:"IELTS/PTE Preparation"}),e("option",{value:"appointment",children:"Book Appointment"})]})}),e("div",{className:"form-group",children:e("textarea",{name:"message",placeholder:"Your Message*",required:!0})}),e("button",{type:"submit",className:"btn btn-primary btn-large btn-full",children:[e("i",{className:"fas fa-paper-plane"}),"Send Message"]})]})]})]})}),e("section",{className:"office-hours",children:[e("h2",{children:"Office Hours"}),e("div",{className:"hours-grid",children:[e("div",{className:"hours-item",children:[e("strong",{children:"Monday - Friday"}),e("span",{children:"9:00 AM - 7:00 PM GST"})]}),e("div",{className:"hours-item",children:[e("strong",{children:"Saturday"}),e("span",{children:"10:00 AM - 4:00 PM GST"})]}),e("div",{className:"hours-item",children:[e("strong",{children:"Sunday"}),e("span",{children:"Closed"})]})]})]})]})})));_.get("/blog",t=>t.render(e("div",{className:"blog-page",children:e("div",{className:"container",children:[e("section",{className:"blog-hero",children:[e("h1",{children:"Study Abroad Blog"}),e("p",{children:"Latest insights, tips, and updates for international students"})]}),e("section",{className:"blog-grid",children:[e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog1.jpg",alt:"IELTS Preparation Tips"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 15, 2024"}),e("span",{className:"blog-category",children:"Test Preparation"})]}),e("h2",{children:"10 Essential IELTS Preparation Tips for High Scores"}),e("p",{children:"Master the IELTS exam with these proven strategies and achieve your target band score for university admission..."}),e("a",{href:"/blog/ielts-preparation-tips",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog2.jpg",alt:"Scholarship Guide"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 10, 2024"}),e("span",{className:"blog-category",children:"Scholarships"})]}),e("h2",{children:"Complete Guide to International Scholarships for 2024"}),e("p",{children:"Discover available scholarships, application deadlines, and expert tips to secure funding for your studies abroad..."}),e("a",{href:"/blog/scholarship-guide-2024",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog3.jpg",alt:"Visa Interview Tips"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 5, 2024"}),e("span",{className:"blog-category",children:"Visa Support"})]}),e("h2",{children:"Ace Your Student Visa Interview: Common Questions & Answers"}),e("p",{children:"Prepare for your visa interview with confidence using these expert tips and practice questions..."}),e("a",{href:"/blog/visa-interview-tips",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog4.jpg",alt:"University Selection"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 28, 2024"}),e("span",{className:"blog-category",children:"University Selection"})]}),e("h2",{children:"How to Choose the Right University: A Complete Guide"}),e("p",{children:"Make informed decisions about your higher education with our comprehensive university selection guide..."}),e("a",{href:"/blog/university-selection-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog5.jpg",alt:"Canada Study Guide"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 20, 2024"}),e("span",{className:"blog-category",children:"Country Guide"})]}),e("h2",{children:"Why Canada is the Best Choice for International Students"}),e("p",{children:"Explore Canada's education system, work opportunities, and immigration pathways for international students..."}),e("a",{href:"/blog/study-in-canada-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog6.jpg",alt:"SOP Writing"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 15, 2024"}),e("span",{className:"blog-category",children:"Application Tips"})]}),e("h2",{children:"Writing a Winning Statement of Purpose (SOP)"}),e("p",{children:"Create a compelling SOP that stands out to admission committees with our step-by-step guide..."}),e("a",{href:"/blog/sop-writing-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]})]}),e("section",{className:"blog-categories",children:[e("h2",{children:"Browse by Category"}),e("div",{className:"categories-grid",children:[e("a",{href:"/blog/category/test-preparation",className:"category-card",children:[e("i",{className:"fas fa-book text-primary"}),e("h3",{children:"Test Preparation"}),e("p",{children:"IELTS, TOEFL, PTE, SAT, GRE guides"})]}),e("a",{href:"/blog/category/visa-support",className:"category-card",children:[e("i",{className:"fas fa-passport text-primary"}),e("h3",{children:"Visa Support"}),e("p",{children:"Student visa tips and guidelines"})]}),e("a",{href:"/blog/category/scholarships",className:"category-card",children:[e("i",{className:"fas fa-trophy text-accent"}),e("h3",{children:"Scholarships"}),e("p",{children:"Funding opportunities and tips"})]}),e("a",{href:"/blog/category/country-guides",className:"category-card",children:[e("i",{className:"fas fa-globe text-primary"}),e("h3",{children:"Country Guides"}),e("p",{children:"Study destination information"})]})]})]})]})})));_.get("/services/:service",t=>{const a=t.req.param("service"),i={visa:{title:"Study Visa Support",description:"Expert guidance for student visa applications with 99% success rate",content:`
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
      `}},n=i[a]||i.visa;return t.render(e("div",{className:"service-page",children:e("div",{className:"container",children:[e("div",{className:"service-hero",children:[e("h1",{children:n.title}),e("p",{className:"hero-subtitle",children:n.description})]}),e("div",{className:"service-content",dangerouslySetInnerHTML:{__html:n.content}}),e("div",{className:"service-cta-section",children:[e("h2",{children:"Ready to Get Started?"}),e("p",{children:"Book your free consultation today and take the first step toward your study abroad journey."}),e("div",{className:"service-actions",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-outline btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat"]})]})]})]})}))});_.post("/api/lead",async t=>{try{const a=await t.req.json();console.log("New lead received:",a);const i={timestamp:new Date().toISOString(),firstName:a.firstName||"",lastName:a.lastName||"",email:a.email||"",phone:`${a.countryCode||""} ${a.phone||""}`.trim(),country:a.country||"",service:a.service||"",message:a.message||""},n=await Promise.allSettled([Nn(i),wn(i)]);return n.some(r=>r.status==="fulfilled")?t.json({success:!0,message:"Thank you! We have received your inquiry and will contact you within 24 hours."}):(n.forEach((r,o)=>{r.status==="rejected"&&console.error(`Integration ${o} failed:`,r.reason)}),t.json({success:!1,message:"Thank you for your interest. Please call us directly at +971-XX-XXX-XXXX for immediate assistance."}))}catch(a){return console.error("API Error:",a),t.json({success:!1,message:"Something went wrong. Please try again or contact us directly."},500)}});async function Nn(t){try{const i=await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"addLead",data:t})});if(!i.ok)throw new Error(`Google Sheets API error: ${i.status}`);const n=await i.json();return console.log("Successfully added to Google Sheets:",n),n}catch(a){throw console.error("Google Sheets integration error:",a),a}}async function wn(t){try{const a="https://api.emailjs.com/api/v1.0/email/send",i={service_id:"YOUR_SERVICE_ID",template_id:"YOUR_TEMPLATE_ID",user_id:"YOUR_USER_ID",template_params:{to_email:"info@scholarixstudy.com",from_name:`${t.firstName} ${t.lastName}`,reply_to:t.email,subject:"New SCHOLARIX Consultation Request",message:`
New consultation request received:

Name: ${t.firstName} ${t.lastName}
Email: ${t.email}
Phone: ${t.phone}
Preferred Country: ${t.country}
Service: ${t.service}
Message: ${t.message}

Submitted: ${new Date(t.timestamp).toLocaleString()}
        `}},n=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!n.ok)throw new Error(`Email service error: ${n.status}`);return console.log("Email notification sent successfully"),{success:!0}}catch(a){throw console.error("Email notification error:",a),a}}const Ut=new La,En=Object.assign({"/src/index.tsx":_});let Fa=!1;for(const[,t]of Object.entries(En))t&&(Ut.all("*",a=>{let i;try{i=a.executionCtx}catch{}return t.fetch(a.req.raw,a.env,i)}),Ut.notFound(a=>{let i;try{i=a.executionCtx}catch{}return t.fetch(a.req.raw,a.env,i)}),Fa=!0);if(!Fa)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ut as default};
