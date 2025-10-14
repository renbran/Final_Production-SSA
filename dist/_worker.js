var _i=Object.defineProperty;var Ct=t=>{throw TypeError(t)};var zi=(t,i,a)=>i in t?_i(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a;var v=(t,i,a)=>zi(t,typeof i!="symbol"?i+"":i,a),at=(t,i,a)=>i.has(t)||Ct("Cannot "+a);var h=(t,i,a)=>(at(t,i,"read from private field"),a?a.call(t):i.get(t)),E=(t,i,a)=>i.has(t)?Ct("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,a),N=(t,i,a,n)=>(at(t,i,"write to private field"),n?n.call(t,a):i.set(t,a),a),k=(t,i,a)=>(at(t,i,"access private method"),a);var At=(t,i,a,n)=>({set _(s){N(t,i,s,a)},get _(){return h(t,i,n)}});var ti={Stringify:1},j=(t,i)=>{const a=new String(t);return a.isEscaped=!0,a.callbacks=i,a},$i=/[&<>'"]/,ii=async(t,i)=>{let a="";i||(i=[]);const n=await Promise.all(t);for(let s=n.length-1;a+=n[s],s--,!(s<0);s--){let r=n[s];typeof r=="object"&&i.push(...r.callbacks||[]);const l=r.isEscaped;if(r=await(typeof r=="object"?r.toString():r),typeof r=="object"&&i.push(...r.callbacks||[]),r.isEscaped??l)a+=r;else{const o=[a];te(r,o),a=o[0]}}return j(a,i)},te=(t,i)=>{const a=t.search($i);if(a===-1){i[0]+=t;return}let n,s,r=0;for(s=a;s<t.length;s++){switch(t.charCodeAt(s)){case 34:n="&quot;";break;case 39:n="&#39;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}i[0]+=t.substring(r,s)+n,r=s+1}i[0]+=t.substring(r,s)},ai=t=>{const i=t.callbacks;if(!(i!=null&&i.length))return t;const a=[t],n={};return i.forEach(s=>s({phase:ti.Stringify,buffer:a,context:n})),a[0]},ni=async(t,i,a,n,s)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const r=t.callbacks;return r!=null&&r.length?(s?s[0]+=t:s=[t],Promise.all(r.map(o=>o({phase:i,buffer:s,context:n}))).then(o=>Promise.all(o.filter(Boolean).map(c=>ni(c,i,!1,n,s))).then(()=>s[0]))):Promise.resolve(t)},Gi=(t,...i)=>{const a=[""];for(let n=0,s=t.length-1;n<s;n++){a[0]+=t[n];const r=Array.isArray(i[n])?i[n].flat(1/0):[i[n]];for(let l=0,o=r.length;l<o;l++){const c=r[l];if(typeof c=="string")te(c,a);else if(typeof c=="number")a[0]+=c;else{if(typeof c=="boolean"||c===null||c===void 0)continue;if(typeof c=="object"&&c.isEscaped)if(c.callbacks)a.unshift("",c);else{const d=c.toString();d instanceof Promise?a.unshift("",d):a[0]+=d}else c instanceof Promise?a.unshift("",c):te(c.toString(),a)}}}return a[0]+=t.at(-1),a.length===1?"callbacks"in a?j(ai(j(a[0],a.callbacks))):j(a[0]):ii(a,a.callbacks)},bt=Symbol("RENDERER"),mt=Symbol("ERROR_HANDLER"),A=Symbol("STASH"),si=Symbol("INTERNAL"),Ui=Symbol("MEMO"),Je=Symbol("PERMALINK"),Tt=t=>(t[si]=!0,t),ri=t=>({value:i,children:a})=>{if(!a)return;const n={children:[{tag:Tt(()=>{t.push(i)}),props:{}}]};Array.isArray(a)?n.children.push(...a.flat()):n.children.push(a),n.children.push({tag:Tt(()=>{t.pop()}),props:{}});const s={tag:"",props:n,type:""};return s[mt]=r=>{throw t.pop(),r},s},li=t=>{const i=[t],a=ri(i);return a.values=i,a.Provider=a,we.push(a),a},we=[],Nt=t=>{const i=[t],a=n=>{i.push(n.value);let s;try{s=n.children?(Array.isArray(n.children)?new hi("",{},n.children):n.children).toString():""}finally{i.pop()}return s instanceof Promise?s.then(r=>j(r,r.callbacks)):j(s)};return a.values=i,a.Provider=a,a[bt]=ri(i),we.push(a),a},Se=t=>t.values.at(-1),$e={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},ft={},Ge="data-precedence",Be=t=>Array.isArray(t)?t:[t],Pt=new WeakMap,Mt=(t,i,a,n)=>({buffer:s,context:r})=>{if(!s)return;const l=Pt.get(r)||{};Pt.set(r,l);const o=l[t]||(l[t]=[]);let c=!1;const d=$e[t];if(d.length>0){e:for(const[,u]of o)for(const m of d)if(((u==null?void 0:u[m])??null)===(a==null?void 0:a[m])){c=!0;break e}}if(c?s[0]=s[0].replaceAll(i,""):d.length>0?o.push([i,a,n]):o.unshift([i,a,n]),s[0].indexOf("</head>")!==-1){let u;if(n===void 0)u=o.map(([m])=>m);else{const m=[];u=o.map(([f,,g])=>{let b=m.indexOf(g);return b===-1&&(m.push(g),b=m.length-1),[f,b]}).sort((f,g)=>f[1]-g[1]).map(([f])=>f)}u.forEach(m=>{s[0]=s[0].replaceAll(m,"")}),s[0]=s[0].replace(/(?=<\/head>)/,u.join(""))}},Fe=(t,i,a)=>j(new H(t,a,Be(i??[])).toString()),He=(t,i,a,n)=>{if("itemProp"in a)return Fe(t,i,a);let{precedence:s,blocking:r,...l}=a;s=n?s??"":void 0,n&&(l[Ge]=s);const o=new H(t,l,Be(i||[])).toString();return o instanceof Promise?o.then(c=>j(o,[...c.callbacks||[],Mt(t,c,l,s)])):j(o,[Mt(t,o,l,s)])},Vi=({children:t,...i})=>{const a=wt();if(a){const n=Se(a);if(n==="svg"||n==="head")return new H("title",i,Be(t??[]))}return He("title",t,i,!1)},Wi=({children:t,...i})=>{const a=wt();return["src","async"].some(n=>!i[n])||a&&Se(a)==="head"?Fe("script",t,i):He("script",t,i,!1)},Xi=({children:t,...i})=>["href","precedence"].every(a=>a in i)?(i["data-href"]=i.href,delete i.href,He("style",t,i,!0)):Fe("style",t,i),Yi=({children:t,...i})=>["onLoad","onError"].some(a=>a in i)||i.rel==="stylesheet"&&(!("precedence"in i)||"disabled"in i)?Fe("link",t,i):He("link",t,i,"precedence"in i),Ki=({children:t,...i})=>{const a=wt();return a&&Se(a)==="head"?Fe("meta",t,i):He("meta",t,i,!1)},oi=(t,{children:i,...a})=>new H(t,a,Be(i??[])),Ji=t=>(typeof t.action=="function"&&(t.action=Je in t.action?t.action[Je]:void 0),oi("form",t)),ci=(t,i)=>(typeof i.formAction=="function"&&(i.formAction=Je in i.formAction?i.formAction[Je]:void 0),oi(t,i)),Zi=t=>ci("input",t),Qi=t=>ci("button",t);const nt=Object.freeze(Object.defineProperty({__proto__:null,button:Qi,form:Ji,input:Zi,link:Yi,meta:Ki,script:Wi,style:Xi,title:Vi},Symbol.toStringTag,{value:"Module"}));var ea=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),Ze=t=>ea.get(t)||t,di=(t,i)=>{for(const[a,n]of Object.entries(t)){const s=a[0]==="-"||!/[A-Z]/.test(a)?a:a.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`);i(s,n==null?null:typeof n=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${n}`:`${n}px`:n)}},Te=void 0,wt=()=>Te,ta=t=>/[A-Z]/.test(t)&&t.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,ia=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],aa=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Et=(t,i)=>{for(let a=0,n=t.length;a<n;a++){const s=t[a];if(typeof s=="string")te(s,i);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof H?s.toStringToBuffer(i):typeof s=="number"||s.isEscaped?i[0]+=s:s instanceof Promise?i.unshift("",s):Et(s,i)}}},H=class{constructor(t,i,a){v(this,"tag");v(this,"props");v(this,"key");v(this,"children");v(this,"isEscaped",!0);v(this,"localContexts");this.tag=t,this.props=i,this.children=a}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var i,a;const t=[""];(i=this.localContexts)==null||i.forEach(([n,s])=>{n.values.push(s)});try{this.toStringToBuffer(t)}finally{(a=this.localContexts)==null||a.forEach(([n])=>{n.values.pop()})}return t.length===1?"callbacks"in t?ai(j(t[0],t.callbacks)).toString():t[0]:ii(t,t.callbacks)}toStringToBuffer(t){const i=this.tag,a=this.props;let{children:n}=this;t[0]+=`<${i}`;const s=Te&&Se(Te)==="svg"?r=>ta(Ze(r)):r=>Ze(r);for(let[r,l]of Object.entries(a))if(r=s(r),r!=="children"){if(r==="style"&&typeof l=="object"){let o="";di(l,(c,d)=>{d!=null&&(o+=`${o?";":""}${c}:${d}`)}),t[0]+=' style="',te(o,t),t[0]+='"'}else if(typeof l=="string")t[0]+=` ${r}="`,te(l,t),t[0]+='"';else if(l!=null)if(typeof l=="number"||l.isEscaped)t[0]+=` ${r}="${l}"`;else if(typeof l=="boolean"&&aa.includes(r))l&&(t[0]+=` ${r}=""`);else if(r==="dangerouslySetInnerHTML"){if(n.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");n=[j(l.__html)]}else if(l instanceof Promise)t[0]+=` ${r}="`,t.unshift('"',l);else if(typeof l=="function"){if(!r.startsWith("on")&&r!=="ref")throw new Error(`Invalid prop '${r}' of type 'function' supplied to '${i}'.`)}else t[0]+=` ${r}="`,te(l.toString(),t),t[0]+='"'}if(ia.includes(i)&&n.length===0){t[0]+="/>";return}t[0]+=">",Et(n,t),t[0]+=`</${i}>`}},st=class extends H{toStringToBuffer(t){const{children:i}=this,a=this.tag.call(null,{...this.props,children:i.length<=1?i[0]:i});if(!(typeof a=="boolean"||a==null))if(a instanceof Promise)if(we.length===0)t.unshift("",a);else{const n=we.map(s=>[s,s.values.at(-1)]);t.unshift("",a.then(s=>(s instanceof H&&(s.localContexts=n),s)))}else a instanceof H?a.toStringToBuffer(t):typeof a=="number"||a.isEscaped?(t[0]+=a,a.callbacks&&(t.callbacks||(t.callbacks=[]),t.callbacks.push(...a.callbacks))):te(a,t)}},hi=class extends H{toStringToBuffer(t){Et(this.children,t)}},Lt=(t,i,...a)=>{i??(i={}),a.length&&(i.children=a.length===1?a[0]:a);const n=i.key;delete i.key;const s=Ue(t,i,a);return s.key=n,s},Rt=!1,Ue=(t,i,a)=>{if(!Rt){for(const n in ft)nt[n][bt]=ft[n];Rt=!0}return typeof t=="function"?new st(t,i,a):nt[t]?new st(nt[t],i,a):t==="svg"||t==="head"?(Te||(Te=Nt("")),new H(t,i,[new st(Te,{value:t},a)])):new H(t,i,a)},na=({children:t})=>new hi("",{children:t},Array.isArray(t)?t:t?[t]:[]);function e(t,i,a){let n;if(!i||!("children"in i))n=Ue(t,i,[]);else{const s=i.children;n=Array.isArray(s)?Ue(t,i,s):Ue(t,i,[s])}return n.key=a,n}var It=(t,i,a)=>(n,s)=>{let r=-1;return l(0);async function l(o){if(o<=r)throw new Error("next() called multiple times");r=o;let c,d=!1,u;if(t[o]?(u=t[o][0][0],n.req.routeIndex=o):u=o===t.length&&s||void 0,u)try{c=await u(n,()=>l(o+1))}catch(m){if(m instanceof Error&&i)n.error=m,c=await i(m,n),d=!0;else throw m}else n.finalized===!1&&a&&(c=await a(n));return c&&(n.finalized===!1||d)&&(n.res=c),n}},sa=Symbol(),ra=async(t,i=Object.create(null))=>{const{all:a=!1,dot:n=!1}=i,r=(t instanceof vi?t.raw.headers:t.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?la(t,{all:a,dot:n}):{}};async function la(t,i){const a=await t.formData();return a?oa(a,i):{}}function oa(t,i){const a=Object.create(null);return t.forEach((n,s)=>{i.all||s.endsWith("[]")?ca(a,s,n):a[s]=n}),i.dot&&Object.entries(a).forEach(([n,s])=>{n.includes(".")&&(da(a,n,s),delete a[n])}),a}var ca=(t,i,a)=>{t[i]!==void 0?Array.isArray(t[i])?t[i].push(a):t[i]=[t[i],a]:i.endsWith("[]")?t[i]=[a]:t[i]=a},da=(t,i,a)=>{let n=t;const s=i.split(".");s.forEach((r,l)=>{l===s.length-1?n[r]=a:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},ui=t=>{const i=t.split("/");return i[0]===""&&i.shift(),i},ha=t=>{const{groups:i,path:a}=ua(t),n=ui(a);return ma(n,i)},ua=t=>{const i=[];return t=t.replace(/\{[^}]+\}/g,(a,n)=>{const s=`@${n}`;return i.push([s,a]),s}),{groups:i,path:t}},ma=(t,i)=>{for(let a=i.length-1;a>=0;a--){const[n]=i[a];for(let s=t.length-1;s>=0;s--)if(t[s].includes(n)){t[s]=t[s].replace(n,i[a][1]);break}}return t},_e={},fa=(t,i)=>{if(t==="*")return"*";const a=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(a){const n=`${t}#${i}`;return _e[n]||(a[2]?_e[n]=i&&i[0]!==":"&&i[0]!=="*"?[n,a[1],new RegExp(`^${a[2]}(?=/${i})`)]:[t,a[1],new RegExp(`^${a[2]}$`)]:_e[n]=[t,a[1],!0]),_e[n]}return null},St=(t,i)=>{try{return i(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,a=>{try{return i(a)}catch{return a}})}},pa=t=>St(t,decodeURI),mi=t=>{const i=t.url,a=i.indexOf("/",i.indexOf(":")+4);let n=a;for(;n<i.length;n++){const s=i.charCodeAt(n);if(s===37){const r=i.indexOf("?",n),l=i.slice(a,r===-1?void 0:r);return pa(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(s===63)break}return i.slice(a,n)},ga=t=>{const i=mi(t);return i.length>1&&i.at(-1)==="/"?i.slice(0,-1):i},me=(t,i,...a)=>(a.length&&(i=me(i,...a)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${i==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(i==null?void 0:i[0])==="/"?i.slice(1):i}`}`),fi=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const i=t.split("/"),a=[];let n="";return i.forEach(s=>{if(s!==""&&!/\:/.test(s))n+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){a.length===0&&n===""?a.push("/"):a.push(n);const r=s.replace("?","");n+="/"+r,a.push(n)}else n+="/"+s}),a.filter((s,r,l)=>l.indexOf(s)===r)},rt=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?St(t,gi):t):t,pi=(t,i,a)=>{let n;if(!a&&i&&!/[%+]/.test(i)){let l=t.indexOf(`?${i}`,8);for(l===-1&&(l=t.indexOf(`&${i}`,8));l!==-1;){const o=t.charCodeAt(l+i.length+1);if(o===61){const c=l+i.length+2,d=t.indexOf("&",c);return rt(t.slice(c,d===-1?void 0:d))}else if(o==38||isNaN(o))return"";l=t.indexOf(`&${i}`,l+1)}if(n=/[%+]/.test(t),!n)return}const s={};n??(n=/[%+]/.test(t));let r=t.indexOf("?",8);for(;r!==-1;){const l=t.indexOf("&",r+1);let o=t.indexOf("=",r);o>l&&l!==-1&&(o=-1);let c=t.slice(r+1,o===-1?l===-1?void 0:l:o);if(n&&(c=rt(c)),r=l,c==="")continue;let d;o===-1?d="":(d=t.slice(o+1,l===-1?void 0:l),n&&(d=rt(d))),a?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(d)):s[c]??(s[c]=d)}return i?s[i]:s},va=pi,ya=(t,i)=>pi(t,i,!0),gi=decodeURIComponent,Ot=t=>St(t,gi),ge,O,W,yi,bi,pt,Y,Vt,vi=(Vt=class{constructor(t,i="/",a=[[]]){E(this,W);v(this,"raw");E(this,ge);E(this,O);v(this,"routeIndex",0);v(this,"path");v(this,"bodyCache",{});E(this,Y,t=>{const{bodyCache:i,raw:a}=this,n=i[t];if(n)return n;const s=Object.keys(i)[0];return s?i[s].then(r=>(s==="json"&&(r=JSON.stringify(r)),new Response(r)[t]())):i[t]=a[t]()});this.raw=t,this.path=i,N(this,O,a),N(this,ge,{})}param(t){return t?k(this,W,yi).call(this,t):k(this,W,bi).call(this)}query(t){return va(this.url,t)}queries(t){return ya(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const i={};return this.raw.headers.forEach((a,n)=>{i[n]=a}),i}async parseBody(t){var i;return(i=this.bodyCache).parsedBody??(i.parsedBody=await ra(this,t))}json(){return h(this,Y).call(this,"text").then(t=>JSON.parse(t))}text(){return h(this,Y).call(this,"text")}arrayBuffer(){return h(this,Y).call(this,"arrayBuffer")}blob(){return h(this,Y).call(this,"blob")}formData(){return h(this,Y).call(this,"formData")}addValidatedData(t,i){h(this,ge)[t]=i}valid(t){return h(this,ge)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[sa](){return h(this,O)}get matchedRoutes(){return h(this,O)[0].map(([[,t]])=>t)}get routePath(){return h(this,O)[0].map(([[,t]])=>t)[this.routeIndex].path}},ge=new WeakMap,O=new WeakMap,W=new WeakSet,yi=function(t){const i=h(this,O)[0][this.routeIndex][1][t],a=k(this,W,pt).call(this,i);return a&&/\%/.test(a)?Ot(a):a},bi=function(){const t={},i=Object.keys(h(this,O)[0][this.routeIndex][1]);for(const a of i){const n=k(this,W,pt).call(this,h(this,O)[0][this.routeIndex][1][a]);n!==void 0&&(t[a]=/\%/.test(n)?Ot(n):n)}return t},pt=function(t){return h(this,O)[1]?h(this,O)[1][t]:t},Y=new WeakMap,Vt),ba="text/plain; charset=UTF-8",lt=(t,i)=>({"Content-Type":t,...i}),Le,Re,$,ve,G,I,Ie,ye,be,se,Oe,je,K,fe,Wt,Na=(Wt=class{constructor(t,i){E(this,K);E(this,Le);E(this,Re);v(this,"env",{});E(this,$);v(this,"finalized",!1);v(this,"error");E(this,ve);E(this,G);E(this,I);E(this,Ie);E(this,ye);E(this,be);E(this,se);E(this,Oe);E(this,je);v(this,"render",(...t)=>(h(this,ye)??N(this,ye,i=>this.html(i)),h(this,ye).call(this,...t)));v(this,"setLayout",t=>N(this,Ie,t));v(this,"getLayout",()=>h(this,Ie));v(this,"setRenderer",t=>{N(this,ye,t)});v(this,"header",(t,i,a)=>{this.finalized&&N(this,I,new Response(h(this,I).body,h(this,I)));const n=h(this,I)?h(this,I).headers:h(this,se)??N(this,se,new Headers);i===void 0?n.delete(t):a!=null&&a.append?n.append(t,i):n.set(t,i)});v(this,"status",t=>{N(this,ve,t)});v(this,"set",(t,i)=>{h(this,$)??N(this,$,new Map),h(this,$).set(t,i)});v(this,"get",t=>h(this,$)?h(this,$).get(t):void 0);v(this,"newResponse",(...t)=>k(this,K,fe).call(this,...t));v(this,"body",(t,i,a)=>k(this,K,fe).call(this,t,i,a));v(this,"text",(t,i,a)=>!h(this,se)&&!h(this,ve)&&!i&&!a&&!this.finalized?new Response(t):k(this,K,fe).call(this,t,i,lt(ba,a)));v(this,"json",(t,i,a)=>k(this,K,fe).call(this,JSON.stringify(t),i,lt("application/json",a)));v(this,"html",(t,i,a)=>{const n=s=>k(this,K,fe).call(this,s,i,lt("text/html; charset=UTF-8",a));return typeof t=="object"?ni(t,ti.Stringify,!1,{}).then(n):n(t)});v(this,"redirect",(t,i)=>{const a=String(t);return this.header("Location",/[^\x00-\xFF]/.test(a)?encodeURI(a):a),this.newResponse(null,i??302)});v(this,"notFound",()=>(h(this,be)??N(this,be,()=>new Response),h(this,be).call(this,this)));N(this,Le,t),i&&(N(this,G,i.executionCtx),this.env=i.env,N(this,be,i.notFoundHandler),N(this,je,i.path),N(this,Oe,i.matchResult))}get req(){return h(this,Re)??N(this,Re,new vi(h(this,Le),h(this,je),h(this,Oe))),h(this,Re)}get event(){if(h(this,G)&&"respondWith"in h(this,G))return h(this,G);throw Error("This context has no FetchEvent")}get executionCtx(){if(h(this,G))return h(this,G);throw Error("This context has no ExecutionContext")}get res(){return h(this,I)||N(this,I,new Response(null,{headers:h(this,se)??N(this,se,new Headers)}))}set res(t){if(h(this,I)&&t){t=new Response(t.body,t);for(const[i,a]of h(this,I).headers.entries())if(i!=="content-type")if(i==="set-cookie"){const n=h(this,I).headers.getSetCookie();t.headers.delete("set-cookie");for(const s of n)t.headers.append("set-cookie",s)}else t.headers.set(i,a)}N(this,I,t),this.finalized=!0}get var(){return h(this,$)?Object.fromEntries(h(this,$)):{}}},Le=new WeakMap,Re=new WeakMap,$=new WeakMap,ve=new WeakMap,G=new WeakMap,I=new WeakMap,Ie=new WeakMap,ye=new WeakMap,be=new WeakMap,se=new WeakMap,Oe=new WeakMap,je=new WeakMap,K=new WeakSet,fe=function(t,i,a){const n=h(this,I)?new Headers(h(this,I).headers):h(this,se)??new Headers;if(typeof i=="object"&&"headers"in i){const r=i.headers instanceof Headers?i.headers:new Headers(i.headers);for(const[l,o]of r)l.toLowerCase()==="set-cookie"?n.append(l,o):n.set(l,o)}if(a)for(const[r,l]of Object.entries(a))if(typeof l=="string")n.set(r,l);else{n.delete(r);for(const o of l)n.append(r,o)}const s=typeof i=="number"?i:(i==null?void 0:i.status)??h(this,ve);return new Response(t,{status:s,headers:n})},Wt),T="ALL",wa="all",Ea=["get","post","put","delete","options","patch"],Ni="Can not add a route since the matcher is already built.",wi=class extends Error{},Sa="__COMPOSED_HANDLER",xa=t=>t.text("404 Not Found",404),jt=(t,i)=>{if("getResponse"in t){const a=t.getResponse();return i.newResponse(a.body,a)}return console.error(t),i.text("Internal Server Error",500)},D,P,Si,B,ae,Ve,We,Xt,Ei=(Xt=class{constructor(i={}){E(this,P);v(this,"get");v(this,"post");v(this,"put");v(this,"delete");v(this,"options");v(this,"patch");v(this,"all");v(this,"on");v(this,"use");v(this,"router");v(this,"getPath");v(this,"_basePath","/");E(this,D,"/");v(this,"routes",[]);E(this,B,xa);v(this,"errorHandler",jt);v(this,"onError",i=>(this.errorHandler=i,this));v(this,"notFound",i=>(N(this,B,i),this));v(this,"fetch",(i,...a)=>k(this,P,We).call(this,i,a[1],a[0],i.method));v(this,"request",(i,a,n,s)=>i instanceof Request?this.fetch(a?new Request(i,a):i,n,s):(i=i.toString(),this.fetch(new Request(/^https?:\/\//.test(i)?i:`http://localhost${me("/",i)}`,a),n,s)));v(this,"fire",()=>{addEventListener("fetch",i=>{i.respondWith(k(this,P,We).call(this,i.request,i,void 0,i.request.method))})});[...Ea,wa].forEach(r=>{this[r]=(l,...o)=>(typeof l=="string"?N(this,D,l):k(this,P,ae).call(this,r,h(this,D),l),o.forEach(c=>{k(this,P,ae).call(this,r,h(this,D),c)}),this)}),this.on=(r,l,...o)=>{for(const c of[l].flat()){N(this,D,c);for(const d of[r].flat())o.map(u=>{k(this,P,ae).call(this,d.toUpperCase(),h(this,D),u)})}return this},this.use=(r,...l)=>(typeof r=="string"?N(this,D,r):(N(this,D,"*"),l.unshift(r)),l.forEach(o=>{k(this,P,ae).call(this,T,h(this,D),o)}),this);const{strict:n,...s}=i;Object.assign(this,s),this.getPath=n??!0?i.getPath??mi:ga}route(i,a){const n=this.basePath(i);return a.routes.map(s=>{var l;let r;a.errorHandler===jt?r=s.handler:(r=async(o,c)=>(await It([],a.errorHandler)(o,()=>s.handler(o,c))).res,r[Sa]=s.handler),k(l=n,P,ae).call(l,s.method,s.path,r)}),this}basePath(i){const a=k(this,P,Si).call(this);return a._basePath=me(this._basePath,i),a}mount(i,a,n){let s,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?s=c=>c:s=n.replaceRequest));const l=r?c=>{const d=r(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};s||(s=(()=>{const c=me(this._basePath,i),d=c==="/"?0:c.length;return u=>{const m=new URL(u.url);return m.pathname=m.pathname.slice(d)||"/",new Request(m,u)}})());const o=async(c,d)=>{const u=await a(s(c.req.raw),...l(c));if(u)return u;await d()};return k(this,P,ae).call(this,T,me(i,"*"),o),this}},D=new WeakMap,P=new WeakSet,Si=function(){const i=new Ei({router:this.router,getPath:this.getPath});return i.errorHandler=this.errorHandler,N(i,B,h(this,B)),i.routes=this.routes,i},B=new WeakMap,ae=function(i,a,n){i=i.toUpperCase(),a=me(this._basePath,a);const s={basePath:this._basePath,path:a,method:i,handler:n};this.router.add(i,a,[n,s]),this.routes.push(s)},Ve=function(i,a){if(i instanceof Error)return this.errorHandler(i,a);throw i},We=function(i,a,n,s){if(s==="HEAD")return(async()=>new Response(null,await k(this,P,We).call(this,i,a,n,"GET")))();const r=this.getPath(i,{env:n}),l=this.router.match(s,r),o=new Na(i,{path:r,matchResult:l,env:n,executionCtx:a,notFoundHandler:h(this,B)});if(l[0].length===1){let d;try{d=l[0][0][0][0](o,async()=>{o.res=await h(this,B).call(this,o)})}catch(u){return k(this,P,Ve).call(this,u,o)}return d instanceof Promise?d.then(u=>u||(o.finalized?o.res:h(this,B).call(this,o))).catch(u=>k(this,P,Ve).call(this,u,o)):d??h(this,B).call(this,o)}const c=It(l[0],this.errorHandler,h(this,B));return(async()=>{try{const d=await c(o);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return k(this,P,Ve).call(this,d,o)}})()},Xt),xi=[],ki=Symbol("buildAllMatchers");function ka(t,i){const a=this[ki](),n=(s,r)=>{const l=a[s]||a[T],o=l[2][r];if(o)return o;const c=r.match(l[0]);if(!c)return[[],xi];const d=c.indexOf("",1);return[l[1][d],c]};return this.match=n,n(t,i)}var Qe="[^/]+",Ce=".*",Ae="(?:|/.*)",pe=Symbol(),Ca=new Set(".\\+*[^]$()");function Aa(t,i){return t.length===1?i.length===1?t<i?-1:1:-1:i.length===1||t===Ce||t===Ae?1:i===Ce||i===Ae?-1:t===Qe?1:i===Qe?-1:t.length===i.length?t<i?-1:1:i.length-t.length}var re,le,F,Yt,gt=(Yt=class{constructor(){E(this,re);E(this,le);E(this,F,Object.create(null))}insert(i,a,n,s,r){if(i.length===0){if(h(this,re)!==void 0)throw pe;if(r)return;N(this,re,a);return}const[l,...o]=i,c=l==="*"?o.length===0?["","",Ce]:["","",Qe]:l==="/*"?["","",Ae]:l.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(c){const u=c[1];let m=c[2]||Qe;if(u&&c[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))))throw pe;if(d=h(this,F)[m],!d){if(Object.keys(h(this,F)).some(f=>f!==Ce&&f!==Ae))throw pe;if(r)return;d=h(this,F)[m]=new gt,u!==""&&N(d,le,s.varIndex++)}!r&&u!==""&&n.push([u,h(d,le)])}else if(d=h(this,F)[l],!d){if(Object.keys(h(this,F)).some(u=>u.length>1&&u!==Ce&&u!==Ae))throw pe;if(r)return;d=h(this,F)[l]=new gt}d.insert(o,a,n,s,r)}buildRegExpStr(){const a=Object.keys(h(this,F)).sort(Aa).map(n=>{const s=h(this,F)[n];return(typeof h(s,le)=="number"?`(${n})@${h(s,le)}`:Ca.has(n)?`\\${n}`:n)+s.buildRegExpStr()});return typeof h(this,re)=="number"&&a.unshift(`#${h(this,re)}`),a.length===0?"":a.length===1?a[0]:"(?:"+a.join("|")+")"}},re=new WeakMap,le=new WeakMap,F=new WeakMap,Yt),et,De,Kt,Ta=(Kt=class{constructor(){E(this,et,{varIndex:0});E(this,De,new gt)}insert(t,i,a){const n=[],s=[];for(let l=0;;){let o=!1;if(t=t.replace(/\{[^}]+\}/g,c=>{const d=`@\\${l}`;return s[l]=[d,c],l++,o=!0,d}),!o)break}const r=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let l=s.length-1;l>=0;l--){const[o]=s[l];for(let c=r.length-1;c>=0;c--)if(r[c].indexOf(o)!==-1){r[c]=r[c].replace(o,s[l][1]);break}}return h(this,De).insert(r,i,n,h(this,et),a),n}buildRegExp(){let t=h(this,De).buildRegExpStr();if(t==="")return[/^$/,[],[]];let i=0;const a=[],n=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,r,l)=>r!==void 0?(a[++i]=Number(r),"$()"):(l!==void 0&&(n[Number(l)]=++i),"")),[new RegExp(`^${t}`),a,n]}},et=new WeakMap,De=new WeakMap,Kt),Pa=[/^$/,[],Object.create(null)],Xe=Object.create(null);function Ci(t){return Xe[t]??(Xe[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(i,a)=>a?`\\${a}`:"(?:|/.*)")}$`))}function Ma(){Xe=Object.create(null)}function La(t){var d;const i=new Ta,a=[];if(t.length===0)return Pa;const n=t.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,m],[f,g])=>u?1:f?-1:m.length-g.length),s=Object.create(null);for(let u=0,m=-1,f=n.length;u<f;u++){const[g,b,p]=n[u];g?s[b]=[p.map(([w])=>[w,Object.create(null)]),xi]:m++;let y;try{y=i.insert(b,m,g)}catch(w){throw w===pe?new wi(b):w}g||(a[m]=p.map(([w,S])=>{const C=Object.create(null);for(S-=1;S>=0;S--){const[x,L]=y[S];C[x]=L}return[w,C]}))}const[r,l,o]=i.buildRegExp();for(let u=0,m=a.length;u<m;u++)for(let f=0,g=a[u].length;f<g;f++){const b=(d=a[u][f])==null?void 0:d[1];if(!b)continue;const p=Object.keys(b);for(let y=0,w=p.length;y<w;y++)b[p[y]]=o[b[p[y]]]}const c=[];for(const u in l)c[u]=a[l[u]];return[r,c,s]}function he(t,i){if(t){for(const a of Object.keys(t).sort((n,s)=>s.length-n.length))if(Ci(a).test(i))return[...t[a]]}}var J,Z,tt,Ai,Jt,Ra=(Jt=class{constructor(){E(this,tt);v(this,"name","RegExpRouter");E(this,J);E(this,Z);v(this,"match",ka);N(this,J,{[T]:Object.create(null)}),N(this,Z,{[T]:Object.create(null)})}add(t,i,a){var o;const n=h(this,J),s=h(this,Z);if(!n||!s)throw new Error(Ni);n[t]||[n,s].forEach(c=>{c[t]=Object.create(null),Object.keys(c[T]).forEach(d=>{c[t][d]=[...c[T][d]]})}),i==="/*"&&(i="*");const r=(i.match(/\/:/g)||[]).length;if(/\*$/.test(i)){const c=Ci(i);t===T?Object.keys(n).forEach(d=>{var u;(u=n[d])[i]||(u[i]=he(n[d],i)||he(n[T],i)||[])}):(o=n[t])[i]||(o[i]=he(n[t],i)||he(n[T],i)||[]),Object.keys(n).forEach(d=>{(t===T||t===d)&&Object.keys(n[d]).forEach(u=>{c.test(u)&&n[d][u].push([a,r])})}),Object.keys(s).forEach(d=>{(t===T||t===d)&&Object.keys(s[d]).forEach(u=>c.test(u)&&s[d][u].push([a,r]))});return}const l=fi(i)||[i];for(let c=0,d=l.length;c<d;c++){const u=l[c];Object.keys(s).forEach(m=>{var f;(t===T||t===m)&&((f=s[m])[u]||(f[u]=[...he(n[m],u)||he(n[T],u)||[]]),s[m][u].push([a,r-d+c+1]))})}}[ki](){const t=Object.create(null);return Object.keys(h(this,Z)).concat(Object.keys(h(this,J))).forEach(i=>{t[i]||(t[i]=k(this,tt,Ai).call(this,i))}),N(this,J,N(this,Z,void 0)),Ma(),t}},J=new WeakMap,Z=new WeakMap,tt=new WeakSet,Ai=function(t){const i=[];let a=t===T;return[h(this,J),h(this,Z)].forEach(n=>{const s=n[t]?Object.keys(n[t]).map(r=>[r,n[t][r]]):[];s.length!==0?(a||(a=!0),i.push(...s)):t!==T&&i.push(...Object.keys(n[T]).map(r=>[r,n[T][r]]))}),a?La(i):null},Jt),Q,U,Zt,Ia=(Zt=class{constructor(t){v(this,"name","SmartRouter");E(this,Q,[]);E(this,U,[]);N(this,Q,t.routers)}add(t,i,a){if(!h(this,U))throw new Error(Ni);h(this,U).push([t,i,a])}match(t,i){if(!h(this,U))throw new Error("Fatal error");const a=h(this,Q),n=h(this,U),s=a.length;let r=0,l;for(;r<s;r++){const o=a[r];try{for(let c=0,d=n.length;c<d;c++)o.add(...n[c]);l=o.match(t,i)}catch(c){if(c instanceof wi)continue;throw c}this.match=o.match.bind(o),N(this,Q,[o]),N(this,U,void 0);break}if(r===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,l}get activeRouter(){if(h(this,U)||h(this,Q).length!==1)throw new Error("No active router has been determined yet.");return h(this,Q)[0]}},Q=new WeakMap,U=new WeakMap,Zt),xe=Object.create(null),ee,R,oe,Ne,M,V,ne,Qt,Ti=(Qt=class{constructor(t,i,a){E(this,V);E(this,ee);E(this,R);E(this,oe);E(this,Ne,0);E(this,M,xe);if(N(this,R,a||Object.create(null)),N(this,ee,[]),t&&i){const n=Object.create(null);n[t]={handler:i,possibleKeys:[],score:0},N(this,ee,[n])}N(this,oe,[])}insert(t,i,a){N(this,Ne,++At(this,Ne)._);let n=this;const s=ha(i),r=[];for(let l=0,o=s.length;l<o;l++){const c=s[l],d=s[l+1],u=fa(c,d),m=Array.isArray(u)?u[0]:c;if(m in h(n,R)){n=h(n,R)[m],u&&r.push(u[1]);continue}h(n,R)[m]=new Ti,u&&(h(n,oe).push(u),r.push(u[1])),n=h(n,R)[m]}return h(n,ee).push({[t]:{handler:a,possibleKeys:r.filter((l,o,c)=>c.indexOf(l)===o),score:h(this,Ne)}}),n}search(t,i){var o;const a=[];N(this,M,xe);let s=[this];const r=ui(i),l=[];for(let c=0,d=r.length;c<d;c++){const u=r[c],m=c===d-1,f=[];for(let g=0,b=s.length;g<b;g++){const p=s[g],y=h(p,R)[u];y&&(N(y,M,h(p,M)),m?(h(y,R)["*"]&&a.push(...k(this,V,ne).call(this,h(y,R)["*"],t,h(p,M))),a.push(...k(this,V,ne).call(this,y,t,h(p,M)))):f.push(y));for(let w=0,S=h(p,oe).length;w<S;w++){const C=h(p,oe)[w],x=h(p,M)===xe?{}:{...h(p,M)};if(C==="*"){const X=h(p,R)["*"];X&&(a.push(...k(this,V,ne).call(this,X,t,h(p,M))),N(X,M,x),f.push(X));continue}const[L,de,ie]=C;if(!u&&!(ie instanceof RegExp))continue;const _=h(p,R)[L],qi=r.slice(c).join("/");if(ie instanceof RegExp){const X=ie.exec(qi);if(X){if(x[de]=X[0],a.push(...k(this,V,ne).call(this,_,t,h(p,M),x)),Object.keys(h(_,R)).length){N(_,M,x);const it=((o=X[0].match(/\//))==null?void 0:o.length)??0;(l[it]||(l[it]=[])).push(_)}continue}}(ie===!0||ie.test(u))&&(x[de]=u,m?(a.push(...k(this,V,ne).call(this,_,t,x,h(p,M))),h(_,R)["*"]&&a.push(...k(this,V,ne).call(this,h(_,R)["*"],t,x,h(p,M)))):(N(_,M,x),f.push(_)))}}s=f.concat(l.shift()??[])}return a.length>1&&a.sort((c,d)=>c.score-d.score),[a.map(({handler:c,params:d})=>[c,d])]}},ee=new WeakMap,R=new WeakMap,oe=new WeakMap,Ne=new WeakMap,M=new WeakMap,V=new WeakSet,ne=function(t,i,a,n){const s=[];for(let r=0,l=h(t,ee).length;r<l;r++){const o=h(t,ee)[r],c=o[i]||o[T],d={};if(c!==void 0&&(c.params=Object.create(null),s.push(c),a!==xe||n&&n!==xe))for(let u=0,m=c.possibleKeys.length;u<m;u++){const f=c.possibleKeys[u],g=d[c.score];c.params[f]=n!=null&&n[f]&&!g?n[f]:a[f]??(n==null?void 0:n[f]),d[c.score]=!0}}return s},Qt),ce,ei,Oa=(ei=class{constructor(){v(this,"name","TrieRouter");E(this,ce);N(this,ce,new Ti)}add(t,i,a){const n=fi(i);if(n){for(let s=0,r=n.length;s<r;s++)h(this,ce).insert(t,n[s],a);return}h(this,ce).insert(t,i,a)}match(t,i){return h(this,ce).search(t,i)}},ce=new WeakMap,ei),Pi=class extends Ei{constructor(t={}){super(t),this.router=t.router??new Ia({routers:[new Ra,new Oa]})}},ja=t=>{const a={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},n=(r=>typeof r=="string"?r==="*"?()=>r:l=>r===l?l:null:typeof r=="function"?r:l=>r.includes(l)?l:null)(a.origin),s=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(a.allowMethods);return async function(l,o){var u;function c(m,f){l.res.headers.set(m,f)}const d=await n(l.req.header("origin")||"",l);if(d&&c("Access-Control-Allow-Origin",d),a.origin!=="*"){const m=l.req.header("Vary");m?c("Vary",m):c("Vary","Origin")}if(a.credentials&&c("Access-Control-Allow-Credentials","true"),(u=a.exposeHeaders)!=null&&u.length&&c("Access-Control-Expose-Headers",a.exposeHeaders.join(",")),l.req.method==="OPTIONS"){a.maxAge!=null&&c("Access-Control-Max-Age",a.maxAge.toString());const m=await s(l.req.header("origin")||"",l);m.length&&c("Access-Control-Allow-Methods",m.join(","));let f=a.allowHeaders;if(!(f!=null&&f.length)){const g=l.req.header("Access-Control-Request-Headers");g&&(f=g.split(/\s*,\s*/))}return f!=null&&f.length&&(c("Access-Control-Allow-Headers",f.join(",")),l.res.headers.append("Vary","Access-Control-Request-Headers")),l.res.headers.delete("Content-Length"),l.res.headers.delete("Content-Type"),new Response(null,{headers:l.res.headers,status:204,statusText:"No Content"})}await o()}},Da=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Dt=(t,i=Fa)=>{const a=/\.([a-zA-Z0-9]+?)$/,n=t.match(a);if(!n)return;let s=i[n[1]];return s&&s.startsWith("text")&&(s+="; charset=utf-8"),s},Ba={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},Fa=Ba,Ha=(...t)=>{let i=t.filter(s=>s!=="").join("/");i=i.replace(new RegExp("(?<=\\/)\\/+","g"),"");const a=i.split("/"),n=[];for(const s of a)s===".."&&n.length>0&&n.at(-1)!==".."?n.pop():s!=="."&&n.push(s);return n.join("/")||"."},Mi={br:".br",zstd:".zst",gzip:".gz"},qa=Object.keys(Mi),_a="index.html",za=t=>{const i=t.root??"./",a=t.path,n=t.join??Ha;return async(s,r)=>{var u,m,f,g;if(s.finalized)return r();let l;if(t.path)l=t.path;else try{if(l=decodeURIComponent(s.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(l))throw new Error}catch{return await((u=t.onNotFound)==null?void 0:u.call(t,s.req.path,s)),r()}let o=n(i,!a&&t.rewriteRequestPath?t.rewriteRequestPath(l):l);t.isDir&&await t.isDir(o)&&(o=n(o,_a));const c=t.getContent;let d=await c(o,s);if(d instanceof Response)return s.newResponse(d.body,d);if(d){const b=t.mimes&&Dt(o,t.mimes)||Dt(o);if(s.header("Content-Type",b||"application/octet-stream"),t.precompressed&&(!b||Da.test(b))){const p=new Set((m=s.req.header("Accept-Encoding"))==null?void 0:m.split(",").map(y=>y.trim()));for(const y of qa){if(!p.has(y))continue;const w=await c(o+Mi[y],s);if(w){d=w,s.header("Content-Encoding",y),s.header("Vary","Accept-Encoding",{append:!0});break}}}return await((f=t.onFound)==null?void 0:f.call(t,o,s)),s.body(d)}await((g=t.onNotFound)==null?void 0:g.call(t,o,s)),await r()}},$a=async(t,i)=>{let a;i&&i.manifest?typeof i.manifest=="string"?a=JSON.parse(i.manifest):a=i.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?a=JSON.parse(__STATIC_CONTENT_MANIFEST):a=__STATIC_CONTENT_MANIFEST;let n;i&&i.namespace?n=i.namespace:n=__STATIC_CONTENT;const s=a[t]||t;if(!s)return null;const r=await n.get(s,{type:"stream"});return r||null},Ga=t=>async function(a,n){return za({...t,getContent:async r=>$a(r,{manifest:t.manifest,namespace:t.namespace?t.namespace:a.env?a.env.__STATIC_CONTENT:void 0})})(a,n)},Ua=t=>Ga(t),Pe="_hp",Va={Change:"Input",DoubleClick:"DblClick"},Wa={svg:"2000/svg",math:"1998/Math/MathML"},Me=[],vt=new WeakMap,Ee=void 0,Xa=()=>Ee,z=t=>"t"in t,ot={onClick:["click",!1]},Bt=t=>{if(!t.startsWith("on"))return;if(ot[t])return ot[t];const i=t.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(i){const[,a,n]=i;return ot[t]=[(Va[a]||a).toLowerCase(),!!n]}},Ft=(t,i)=>Ee&&t instanceof SVGElement&&/[A-Z]/.test(i)&&(i in t.style||i.match(/^(?:o|pai|str|u|ve)/))?i.replace(/([A-Z])/g,"-$1").toLowerCase():i,Ya=(t,i,a)=>{var n;i||(i={});for(let s in i){const r=i[s];if(s!=="children"&&(!a||a[s]!==r)){s=Ze(s);const l=Bt(s);if(l){if((a==null?void 0:a[s])!==r&&(a&&t.removeEventListener(l[0],a[s],l[1]),r!=null)){if(typeof r!="function")throw new Error(`Event handler for "${s}" is not a function`);t.addEventListener(l[0],r,l[1])}}else if(s==="dangerouslySetInnerHTML"&&r)t.innerHTML=r.__html;else if(s==="ref"){let o;typeof r=="function"?o=r(t)||(()=>r(null)):r&&"current"in r&&(r.current=t,o=()=>r.current=null),vt.set(t,o)}else if(s==="style"){const o=t.style;typeof r=="string"?o.cssText=r:(o.cssText="",r!=null&&di(r,o.setProperty.bind(o)))}else{if(s==="value"){const c=t.nodeName;if(c==="INPUT"||c==="TEXTAREA"||c==="SELECT"){if(t.value=r==null||r===!1?null:r,c==="TEXTAREA"){t.textContent=r;continue}else if(c==="SELECT"){t.selectedIndex===-1&&(t.selectedIndex=0);continue}}}else(s==="checked"&&t.nodeName==="INPUT"||s==="selected"&&t.nodeName==="OPTION")&&(t[s]=r);const o=Ft(t,s);r==null||r===!1?t.removeAttribute(o):r===!0?t.setAttribute(o,""):typeof r=="string"||typeof r=="number"?t.setAttribute(o,r):t.setAttribute(o,r.toString())}}}if(a)for(let s in a){const r=a[s];if(s!=="children"&&!(s in i)){s=Ze(s);const l=Bt(s);l?t.removeEventListener(l[0],r,l[1]):s==="ref"?(n=vt.get(t))==null||n():t.removeAttribute(Ft(t,s))}}},Ka=(t,i)=>{i[A][0]=0,Me.push([t,i]);const a=i.tag[bt]||i.tag,n=a.defaultProps?{...a.defaultProps,...i.props}:i.props;try{return[a.call(null,n)]}finally{Me.pop()}},Li=(t,i,a,n,s)=>{var r,l;(r=t.vR)!=null&&r.length&&(n.push(...t.vR),delete t.vR),typeof t.tag=="function"&&((l=t[A][1][ji])==null||l.forEach(o=>s.push(o))),t.vC.forEach(o=>{var c;if(z(o))a.push(o);else if(typeof o.tag=="function"||o.tag===""){o.c=i;const d=a.length;if(Li(o,i,a,n,s),o.s){for(let u=d;u<a.length;u++)a[u].s=!0;o.s=!1}}else a.push(o),(c=o.vR)!=null&&c.length&&(n.push(...o.vR),delete o.vR)})},Ja=t=>{for(;;t=t.tag===Pe||!t.vC||!t.pP?t.nN:t.vC[0]){if(!t)return null;if(t.tag!==Pe&&t.e)return t.e}},Ri=t=>{var i,a,n,s,r,l;z(t)||((a=(i=t[A])==null?void 0:i[1][ji])==null||a.forEach(o=>{var c;return(c=o[2])==null?void 0:c.call(o)}),(n=vt.get(t.e))==null||n(),t.p===2&&((s=t.vC)==null||s.forEach(o=>o.p=2)),(r=t.vC)==null||r.forEach(Ri)),t.p||((l=t.e)==null||l.remove(),delete t.e),typeof t.tag=="function"&&(ke.delete(t),Ye.delete(t),delete t[A][3],t.a=!0)},Ii=(t,i,a)=>{t.c=i,Oi(t,i,a)},Ht=(t,i)=>{if(i){for(let a=0,n=t.length;a<n;a++)if(t[a]===i)return a}},qt=Symbol(),Oi=(t,i,a)=>{var d;const n=[],s=[],r=[];Li(t,i,n,s,r),s.forEach(Ri);const l=a?void 0:i.childNodes;let o,c=null;if(a)o=-1;else if(!l.length)o=0;else{const u=Ht(l,Ja(t.nN));u!==void 0?(c=l[u],o=u):o=Ht(l,(d=n.find(m=>m.tag!==Pe&&m.e))==null?void 0:d.e)??-1,o===-1&&(a=!0)}for(let u=0,m=n.length;u<m;u++,o++){const f=n[u];let g;if(f.s&&f.e)g=f.e,f.s=!1;else{const b=a||!f.e;z(f)?(f.e&&f.d&&(f.e.textContent=f.t),f.d=!1,g=f.e||(f.e=document.createTextNode(f.t))):(g=f.e||(f.e=f.n?document.createElementNS(f.n,f.tag):document.createElement(f.tag)),Ya(g,f.props,f.pP),Oi(f,g,b))}f.tag===Pe?o--:a?g.parentNode||i.appendChild(g):l[o]!==g&&l[o-1]!==g&&(l[o+1]===g?i.appendChild(l[o]):i.insertBefore(g,c||l[o]||null))}if(t.pP&&delete t.pP,r.length){const u=[],m=[];r.forEach(([,f,,g,b])=>{f&&u.push(f),g&&m.push(g),b==null||b()}),u.forEach(f=>f()),m.length&&requestAnimationFrame(()=>{m.forEach(f=>f())})}},Za=(t,i)=>!!(t&&t.length===i.length&&t.every((a,n)=>a[1]===i[n][1])),Ye=new WeakMap,yt=(t,i,a)=>{var r,l,o,c,d,u;const n=!a&&i.pC;a&&(i.pC||(i.pC=i.vC));let s;try{a||(a=typeof i.tag=="function"?Ka(t,i):Be(i.props.children)),((r=a[0])==null?void 0:r.tag)===""&&a[0][mt]&&(s=a[0][mt],t[5].push([t,s,i]));const m=n?[...i.pC]:i.vC?[...i.vC]:void 0,f=[];let g;for(let b=0;b<a.length;b++){Array.isArray(a[b])&&a.splice(b,1,...a[b].flat());let p=Qa(a[b]);if(p){typeof p.tag=="function"&&!p.tag[si]&&(we.length>0&&(p[A][2]=we.map(w=>[w,w.values.at(-1)])),(l=t[5])!=null&&l.length&&(p[A][3]=t[5].at(-1)));let y;if(m&&m.length){const w=m.findIndex(z(p)?S=>z(S):p.key!==void 0?S=>S.key===p.key&&S.tag===p.tag:S=>S.tag===p.tag);w!==-1&&(y=m[w],m.splice(w,1))}if(y)if(z(p))y.t!==p.t&&(y.t=p.t,y.d=!0),p=y;else{const w=y.pP=y.props;if(y.props=p.props,y.f||(y.f=p.f||i.f),typeof p.tag=="function"){const S=y[A][2];y[A][2]=p[A][2]||[],y[A][3]=p[A][3],!y.f&&((y.o||y)===p.o||(c=(o=y.tag)[Ui])!=null&&c.call(o,w,y.props))&&Za(S,y[A][2])&&(y.s=!0)}p=y}else if(!z(p)&&Ee){const w=Se(Ee);w&&(p.n=w)}if(!z(p)&&!p.s&&(yt(t,p),delete p.f),f.push(p),g&&!g.s&&!p.s)for(let w=g;w&&!z(w);w=(d=w.vC)==null?void 0:d.at(-1))w.nN=p;g=p}}i.vR=n?[...i.vC,...m||[]]:m||[],i.vC=f,n&&delete i.pC}catch(m){if(i.f=!0,m===qt){if(s)return;throw m}const[f,g,b]=((u=i[A])==null?void 0:u[3])||[];if(g){const p=()=>Ke([0,!1,t[2]],b),y=Ye.get(b)||[];y.push(p),Ye.set(b,y);const w=g(m,()=>{const S=Ye.get(b);if(S){const C=S.indexOf(p);if(C!==-1)return S.splice(C,1),p()}});if(w){if(t[0]===1)t[1]=!0;else if(yt(t,b,[w]),(g.length===1||t!==f)&&b.c){Ii(b,b.c,!1);return}throw qt}}throw m}finally{s&&t[5].pop()}},Qa=t=>{if(!(t==null||typeof t=="boolean")){if(typeof t=="string"||typeof t=="number")return{t:t.toString(),d:!0};if("vR"in t&&(t={tag:t.tag,props:t.props,key:t.key,f:t.f,type:t.tag,ref:t.props.ref,o:t.o||t}),typeof t.tag=="function")t[A]=[0,[]];else{const i=Wa[t.tag];i&&(Ee||(Ee=li("")),t.props.children=[{tag:Ee,props:{value:t.n=`http://www.w3.org/${i}`,children:t.props.children}}])}return t}},_t=(t,i)=>{var a,n;(a=i[A][2])==null||a.forEach(([s,r])=>{s.values.push(r)});try{yt(t,i,void 0)}catch{return}if(i.a){delete i.a;return}(n=i[A][2])==null||n.forEach(([s])=>{s.values.pop()}),(t[0]!==1||!t[1])&&Ii(i,i.c,!1)},ke=new WeakMap,zt=[],Ke=async(t,i)=>{t[5]||(t[5]=[]);const a=ke.get(i);a&&a[0](void 0);let n;const s=new Promise(r=>n=r);if(ke.set(i,[n,()=>{t[2]?t[2](t,i,r=>{_t(r,i)}).then(()=>n(i)):(_t(t,i),n(i))}]),zt.length)zt.at(-1).add(i);else{await Promise.resolve();const r=ke.get(i);r&&(ke.delete(i),r[1]())}return s},en=(t,i,a)=>({tag:Pe,props:{children:t},key:a,e:i,p:1}),ct=0,ji=1,dt=2,ht=3,ut=new WeakMap,Di=(t,i)=>!t||!i||t.length!==i.length||i.some((a,n)=>a!==t[n]),tn=void 0,$t=[],an=t=>{var l;const i=()=>typeof t=="function"?t():t,a=Me.at(-1);if(!a)return[i(),()=>{}];const[,n]=a,s=(l=n[A][1])[ct]||(l[ct]=[]),r=n[A][0]++;return s[r]||(s[r]=[i(),o=>{const c=tn,d=s[r];if(typeof o=="function"&&(o=o(d[0])),!Object.is(o,d[0]))if(d[0]=o,$t.length){const[u,m]=$t.at(-1);Promise.all([u===3?n:Ke([u,!1,c],n),m]).then(([f])=>{if(!f||!(u===2||u===3))return;const g=f.vC;requestAnimationFrame(()=>{setTimeout(()=>{g===f.vC&&Ke([u===3?1:0,!1,c],f)})})})}else Ke([0,!1,c],n)}])},xt=(t,i)=>{var o;const a=Me.at(-1);if(!a)return t;const[,n]=a,s=(o=n[A][1])[dt]||(o[dt]=[]),r=n[A][0]++,l=s[r];return Di(l==null?void 0:l[1],i)?s[r]=[t,i]:t=s[r][0],t},nn=t=>{const i=ut.get(t);if(i){if(i.length===2)throw i[1];return i[0]}throw t.then(a=>ut.set(t,[a]),a=>ut.set(t,[void 0,a])),t},sn=(t,i)=>{var o;const a=Me.at(-1);if(!a)return t();const[,n]=a,s=(o=n[A][1])[ht]||(o[ht]=[]),r=n[A][0]++,l=s[r];return Di(l==null?void 0:l[1],i)&&(s[r]=[t(),i]),s[r][0]},rn=li({pending:!1,data:null,method:null,action:null}),Gt=new Set,ln=t=>{Gt.add(t),t.finally(()=>Gt.delete(t))},kt=(t,i)=>sn(()=>a=>{let n;t&&(typeof t=="function"?n=t(a)||(()=>{t(null)}):t&&"current"in t&&(t.current=a,n=()=>{t.current=null}));const s=i(a);return()=>{s==null||s(),n==null||n()}},[t]),ue=Object.create(null),ze=Object.create(null),qe=(t,i,a,n,s)=>{if(i!=null&&i.itemProp)return{tag:t,props:i,type:t,ref:i.ref};const r=document.head;let{onLoad:l,onError:o,precedence:c,blocking:d,...u}=i,m=null,f=!1;const g=$e[t];let b;if(g.length>0){const S=r.querySelectorAll(t);e:for(const C of S)for(const x of $e[t])if(C.getAttribute(x)===i[x]){m=C;break e}if(!m){const C=g.reduce((x,L)=>i[L]===void 0?x:`${x}-${L}-${i[L]}`,t);f=!ze[C],m=ze[C]||(ze[C]=(()=>{const x=document.createElement(t);for(const L of g)i[L]!==void 0&&x.setAttribute(L,i[L]),i.rel&&x.setAttribute("rel",i.rel);return x})())}}else b=r.querySelectorAll(t);c=n?c??"":void 0,n&&(u[Ge]=c);const p=xt(S=>{if(g.length>0){let C=!1;for(const x of r.querySelectorAll(t)){if(C&&x.getAttribute(Ge)!==c){r.insertBefore(S,x);return}x.getAttribute(Ge)===c&&(C=!0)}r.appendChild(S)}else if(b){let C=!1;for(const x of b)if(x===S){C=!0;break}C||r.insertBefore(S,r.contains(b[0])?b[0]:r.querySelector(t)),b=void 0}},[c]),y=kt(i.ref,S=>{var L;const C=g[0];if(a===2&&(S.innerHTML=""),(f||b)&&p(S),!o&&!l)return;let x=ue[L=S.getAttribute(C)]||(ue[L]=new Promise((de,ie)=>{S.addEventListener("load",de),S.addEventListener("error",ie)}));l&&(x=x.then(l)),o&&(x=x.catch(o)),x.catch(()=>{})});if(s&&d==="render"){const S=$e[t][0];if(i[S]){const C=i[S],x=ue[C]||(ue[C]=new Promise((L,de)=>{p(m),m.addEventListener("load",L),m.addEventListener("error",de)}));nn(x)}}const w={tag:t,type:t,props:{...u,ref:y},ref:y};return w.p=a,m&&(w.e=m),en(w,r)},on=t=>{const i=Xa(),a=i&&Se(i);return a!=null&&a.endsWith("svg")?{tag:"title",props:t,type:"title",ref:t.ref}:qe("title",t,void 0,!1,!1)},cn=t=>!t||["src","async"].some(i=>!t[i])?{tag:"script",props:t,type:"script",ref:t.ref}:qe("script",t,1,!1,!0),dn=t=>!t||!["href","precedence"].every(i=>i in t)?{tag:"style",props:t,type:"style",ref:t.ref}:(t["data-href"]=t.href,delete t.href,qe("style",t,2,!0,!0)),hn=t=>!t||["onLoad","onError"].some(i=>i in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?{tag:"link",props:t,type:"link",ref:t.ref}:qe("link",t,1,"precedence"in t,!0),un=t=>qe("meta",t,void 0,!1,!1),Bi=Symbol(),mn=t=>{const{action:i,...a}=t;typeof i!="function"&&(a.action=i);const[n,s]=an([null,!1]),r=xt(async d=>{const u=d.isTrusted?i:d.detail[Bi];if(typeof u!="function")return;d.preventDefault();const m=new FormData(d.target);s([m,!0]);const f=u(m);f instanceof Promise&&(ln(f),await f),s([null,!0])},[]),l=kt(t.ref,d=>(d.addEventListener("submit",r),()=>{d.removeEventListener("submit",r)})),[o,c]=n;return n[1]=!1,{tag:rn,props:{value:{pending:o!==null,data:o,method:o?"post":null,action:o?i:null},children:{tag:"form",props:{...a,ref:l},type:"form",ref:l}},f:c}},Fi=(t,{formAction:i,...a})=>{if(typeof i=="function"){const n=xt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Bi]:i}}))},[]);a.ref=kt(a.ref,s=>(s.addEventListener("click",n),()=>{s.removeEventListener("click",n)}))}return{tag:t,props:a,type:t,ref:a.ref}},fn=t=>Fi("input",t),pn=t=>Fi("button",t);Object.assign(ft,{title:on,script:cn,style:dn,link:hn,meta:un,form:mn,input:fn,button:pn});Nt(null);new TextEncoder;var gn=Nt(null),vn=(t,i,a,n)=>(s,r)=>{const l="<!DOCTYPE html>",o=a?Lt(d=>a(d,t),{Layout:i,...r},s):s,c=Gi`${j(l)}${Lt(gn.Provider,{value:t},o)}`;return t.html(c)},yn=(t,i)=>function(n,s){const r=n.getLayout()??na;return t&&n.setLayout(l=>t({...l,Layout:r},n)),n.setRenderer(vn(n,r,t)),s()};const bn=yn(({children:t})=>e("html",{lang:"en",children:[e("head",{children:[e("meta",{charSet:"UTF-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}),e("meta",{name:"format-detection",content:"telephone=no"}),e("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),e("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),e("meta",{name:"mobile-web-app-capable",content:"yes"}),e("link",{rel:"dns-prefetch",href:"//fonts.googleapis.com"}),e("link",{rel:"dns-prefetch",href:"//fonts.gstatic.com"}),e("link",{rel:"dns-prefetch",href:"//cdnjs.cloudflare.com"}),e("link",{rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"anonymous"}),e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),e("link",{rel:"preload",href:"/static/style.css",as:"style"}),e("link",{rel:"preload",href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",as:"style"}),e("title",{children:"SCHOLARIX - Study Abroad Consultants | Visa, Admission & IELTS"}),e("meta",{name:"description",content:"Expert study abroad guidance for students. Get support for study visas, university admissions, scholarships, and IELTS/PTE preparation. 99% visa success rate. Book free consultation today!"}),e("meta",{name:"keywords",content:"study abroad, student visa, university admission, scholarships, IELTS, PTE, career counselling, international education"}),e("meta",{name:"author",content:"SCHOLARIX Study Abroad Consultants"}),e("meta",{property:"og:title",content:"SCHOLARIX - Study Abroad Consultants"}),e("meta",{property:"og:description",content:"Expert study abroad guidance with 99% visa success rate. Get support for visas, admissions, scholarships & test prep."}),e("meta",{property:"og:type",content:"website"}),e("meta",{property:"og:image",content:"/static/images/og-image.jpg"}),e("meta",{name:"twitter:card",content:"summary_large_image"}),e("meta",{name:"twitter:title",content:"SCHOLARIX - Study Abroad Consultants"}),e("meta",{name:"twitter:description",content:"Expert study abroad guidance with 99% visa success rate."}),e("meta",{httpEquiv:"Content-Security-Policy",content:"default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'none'; object-src 'none'; base-uri 'self';"}),e("meta",{httpEquiv:"X-Content-Type-Options",content:"nosniff"}),e("meta",{httpEquiv:"X-Frame-Options",content:"DENY"}),e("meta",{httpEquiv:"X-XSS-Protection",content:"1; mode=block"}),e("meta",{httpEquiv:"Referrer-Policy",content:"strict-origin-when-cross-origin"}),e("link",{rel:"icon",type:"image/png",href:"/static/images/scholarix-logo-icon-hd.png"}),e("link",{rel:"apple-touch-icon",href:"/static/images/scholarix-logo-icon-hd.png"}),e("style",{dangerouslySetInnerHTML:{__html:`
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
          `}}),e("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"}),e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),e("link",{href:"/static/style.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-styles.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-forms.css",rel:"stylesheet"}),e("link",{href:"/static/interactive-planner.css",rel:"stylesheet"}),e("link",{href:"/static/enhanced-loader-3d.css",rel:"stylesheet"}),e("link",{href:"/static/course-finder.css",rel:"stylesheet"}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",defer:!0}),e("script",{src:"https://unpkg.com/globe.gl",defer:!0}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",defer:!0}),e("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",defer:!0}),e("script",{src:"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",defer:!0}),e("script",{src:"https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"}),e("script",{children:`
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
          `}),e("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"EducationalOrganization",name:"SCHOLARIX Study Abroad Consultants",description:"Expert study abroad guidance for students seeking international education opportunities",url:"https://scholarixstudy.com",telephone:"+971525438784",email:"info@scholarixstudy.com",address:{"@type":"PostalAddress",addressCountry:"UAE"},serviceArea:"Worldwide",offers:{"@type":"Service",name:"Study Abroad Consulting",description:"Comprehensive study abroad services including visa support, university admissions, scholarships, and test preparation"}})})]}),e("body",{children:[e("div",{id:"floating-3d-elements"}),e("header",{className:"header",children:e("nav",{className:"navbar",children:e("div",{className:"nav-container",children:[e("div",{className:"nav-brand",children:e("a",{href:"/",className:"logo-link",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX Study Abroad",className:"logo"})})}),e("div",{className:"nav-menu",id:"navMenu",children:[e("a",{href:"/",className:"nav-link",children:"Home"}),e("div",{className:"nav-dropdown",children:[e("a",{href:"#",className:"nav-link dropdown-toggle",children:["Services ",e("i",{className:"fas fa-chevron-down"})]}),e("div",{className:"dropdown-content",children:[e("a",{href:"/services/visa",children:[e("i",{className:"fas fa-passport"}),"Visa Support"]}),e("a",{href:"/services/admissions",children:[e("i",{className:"fas fa-graduation-cap"}),"University Admissions"]}),e("a",{href:"/services/scholarships",children:[e("i",{className:"fas fa-trophy"}),"Scholarships"]}),e("a",{href:"/services/test-prep",children:[e("i",{className:"fas fa-book"}),"Test Preparation"]}),e("a",{href:"/services/counselling",children:[e("i",{className:"fas fa-user-tie"}),"Career Counselling"]}),e("a",{href:"/services/pre-departure",children:[e("i",{className:"fas fa-plane"}),"Pre-Departure"]})]})]}),e("a",{href:"/about",className:"nav-link",children:"About"}),e("a",{href:"/contact",className:"nav-link",children:"Contact"}),e("div",{className:"mobile-cta",children:e("button",{className:"nav-cta-btn",onclick:"openConsultationModal()",children:"Free Consultation"})})]}),e("div",{className:"nav-actions",children:[e("a",{href:"https://scholarixstudy.com",target:"_blank",rel:"noopener noreferrer",className:"nav-employee-btn",children:"Employee Login"}),e("button",{className:"nav-cta-btn",onclick:"openConsultationModal()",children:"Free Consultation"})]}),e("button",{className:"nav-toggle",id:"navToggle","aria-label":"Toggle navigation menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})})}),e("main",{children:t}),e("footer",{className:"footer",children:e("div",{className:"container",children:[e("div",{className:"footer-content",children:[e("div",{className:"footer-brand",children:[e("a",{href:"/",className:"footer-logo-link",children:e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX",className:"footer-logo"})}),e("p",{className:"footer-tagline",children:"Your trusted study abroad partner since 2023"})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Services"}),e("ul",{className:"footer-links-list",children:[e("li",{children:e("a",{href:"/services/visa",children:"Visa Support"})}),e("li",{children:e("a",{href:"/services/admissions",children:"Admissions"})}),e("li",{children:e("a",{href:"/services/scholarships",children:"Scholarships"})}),e("li",{children:e("a",{href:"/services/test-prep",children:"Test Prep"})})]})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Destinations"}),e("ul",{className:"footer-links-list",children:[e("li",{children:e("a",{href:"/destinations/germany",children:"Germany"})}),e("li",{children:e("a",{href:"/destinations/canada",children:"Canada"})}),e("li",{children:e("a",{href:"/destinations/uk",children:"UK"})}),e("li",{children:e("a",{href:"/destinations/usa",children:"USA"})})]})]}),e("div",{className:"footer-links-section",children:[e("h4",{children:"Connect"}),e("div",{className:"footer-contact",children:[e("a",{href:"tel:+971525438784",className:"contact-link",children:"+971 52 543 8784"}),e("a",{href:"mailto:info@scholarixstudy.com",className:"contact-link",children:"info@scholarixstudy.com"})]}),e("div",{className:"social-links",children:[e("a",{href:"https://facebook.com/scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Facebook",children:e("i",{className:"fab fa-facebook-f"})}),e("a",{href:"https://instagram.com/scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Instagram",children:e("i",{className:"fab fa-instagram"})}),e("a",{href:"https://linkedin.com/company/scholarix",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"LinkedIn",children:e("i",{className:"fab fa-linkedin-in"})}),e("a",{href:"https://youtube.com/@scholarixstudy",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"YouTube",children:e("i",{className:"fab fa-youtube"})})]})]}),e("div",{className:"footer-newsletter",children:[e("h4",{children:"Stay Updated"}),e("p",{children:"Get study abroad tips & updates"}),e("form",{className:"newsletter-form",id:"newsletterForm",children:e("div",{className:"input-group",children:[e("input",{type:"email",name:"email",placeholder:"Enter your email",required:!0,className:"newsletter-input"}),e("button",{type:"submit",className:"newsletter-btn","aria-label":"Subscribe",children:e("i",{className:"fas fa-arrow-right"})})]})})]})]}),e("div",{className:"footer-bottom",children:e("div",{className:"footer-bottom-content",children:[e("p",{className:"copyright",children:"© 2025 SCHOLARIX. All rights reserved."}),e("div",{className:"footer-legal",children:[e("a",{href:"/privacy",children:"Privacy"}),e("a",{href:"/terms",children:"Terms"}),e("a",{href:"/contact",children:"Contact"})]})]})})]})}),e("div",{className:"floating-chatbot",children:e("div",{className:"chatbot-trigger",children:[e("i",{className:"fas fa-comments"}),e("span",{className:"chatbot-text",children:"Chat with us"})]})}),e("script",{src:"/static/app.js",defer:!0}),e("script",{src:"/static/enhanced-forms.js",defer:!0}),e("script",{src:"/static/interactive-planner.js",defer:!0}),e("script",{src:"/static/enhanced-animations.js"}),e("script",{src:"/static/study-abroad-3d.js"}),e("script",{src:"/static/interactive-globe.js",defer:!0}),e("script",{src:"/static/course-finder.js"}),e("script",{src:"/static/destinations-accordion.js"}),e("script",{src:"https://cdn.jotfor.ms/agent/embedjs/01998a5c603976e5940cc26a09b91e250511/embed.js"}),e("script",{children:`
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
            // Critical performance monitoring
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    console.log('🎯 LCP:', entry.startTime.toFixed(2) + 'ms');
                  }
                  if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                    console.log('📐 CLS:', entry.value.toFixed(4));
                  }
                  if (entry.entryType === 'first-contentful-paint') {
                    console.log('⚡ FCP:', entry.startTime.toFixed(2) + 'ms');
                  }
                }
              });
              
              try {
                observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift', 'first-contentful-paint'] });
                console.log('🔍 Performance monitoring active');
              } catch (e) {
                console.log('⚠️ Performance monitoring not supported');
              }
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
          `}})]})]})),q=new Pi;q.use("/api/*",ja());q.use("/static/*",Ua({root:"./public"}));q.use(bn);q.get("/",t=>t.render(e("div",{children:[e("section",{className:"hero-section",children:[e("div",{id:"particles-js"}),e("div",{className:"hero-container",children:e("div",{className:"hero-content",children:[e("div",{className:"hero-text animate-on-scroll",children:[e("h1",{className:"hero-title",children:e("span",{id:"typewriter-text",children:"Your Dream Study Abroad Journey Starts Here"})}),e("p",{className:"hero-subtitle",children:"Specializing in European Study Destinations with High Visa Success from UAE. Expert guidance for study visas, scholarships, university admissions, and IELTS/PTE preparation. Your trusted partner since 2023 - Established in Dubai."}),e("div",{className:"hero-search-bar animate-on-scroll",children:e("div",{className:"search-container",children:e("form",{id:"heroSearchForm",className:"hero-search-form",children:e("div",{className:"search-fields",children:[e("div",{className:"search-field",children:[e("div",{className:"field-icon",children:e("i",{className:"fas fa-book-open"})}),e("select",{id:"heroStudyField","aria-label":"Select field of study",required:!0,children:[e("option",{value:"",children:"What do you want to study?"}),e("option",{value:"Computer Science",children:"Computer Science & IT"}),e("option",{value:"Business Management",children:"Business & Management"}),e("option",{value:"Engineering",children:"Engineering"}),e("option",{value:"Data Science",children:"Data Science & Analytics"}),e("option",{value:"Healthcare",children:"Healthcare & Medicine"}),e("option",{value:"Arts & Design",children:"Arts & Design"})]})]}),e("div",{className:"search-field",children:[e("div",{className:"field-icon",children:e("i",{className:"fas fa-globe-europe"})}),e("select",{id:"heroCountry","aria-label":"Select study destination",required:!0,children:[e("option",{value:"",children:"Where do you want to study?"}),e("option",{value:"Germany",children:"Germany"}),e("option",{value:"France",children:"France"}),e("option",{value:"Ireland",children:"Ireland"}),e("option",{value:"UK",children:"United Kingdom"}),e("option",{value:"Canada",children:"Canada"}),e("option",{value:"USA",children:"United States"})]})]}),e("button",{type:"submit",className:"search-submit-btn",children:[e("i",{className:"fas fa-search"}),e("span",{children:"Find Courses"})]})]})})})}),e("div",{className:"hero-stats",children:[e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"2500"}),e("div",{className:"stat-label",children:"Students Placed"})]}),e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"95"}),e("div",{className:"stat-label",children:"Visa Success %"})]}),e("div",{className:"stat glass-card",children:[e("div",{className:"stat-number",children:"150"}),e("div",{className:"stat-label",children:"Partner Universities"})]})]}),e("div",{className:"hero-cta",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-accent btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat"]})]})]}),e("div",{className:"hero-image",children:e("img",{src:"/static/images/hero-graduate-3d.png",alt:"International Graduate Student"})})]})})]}),e("section",{className:"services-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("h2",{children:"Why Choose SCHOLARIX?"}),e("p",{children:"Comprehensive support for your international education journey"})]}),e("div",{className:"services-grid",children:[e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-passport text-primary"})}),e("h3",{children:"Study Visa Support"}),e("p",{children:"Expert guidance for student visa applications with 99% success rate. We handle all documentation and interview preparation."}),e("a",{href:"/services/visa",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-graduation-cap text-primary"})}),e("h3",{children:"University Admissions"}),e("p",{children:"Get admitted to top universities worldwide. We help with applications, essays, and course selection."}),e("a",{href:"/services/admissions",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-trophy text-accent"})}),e("h3",{children:"Scholarships"}),e("p",{children:"Access exclusive scholarships worth millions. We help you find and apply for the best funding opportunities."}),e("a",{href:"/services/scholarships",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-book text-primary"})}),e("h3",{children:"IELTS/PTE Preparation"}),e("p",{children:"Achieve your target scores with our expert trainers. Online and offline classes available."}),e("a",{href:"/services/test-prep",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-user-tie text-primary"})}),e("h3",{children:"Career Counselling"}),e("p",{children:"Get personalized career guidance to choose the right course and country for your future."}),e("a",{href:"/services/counselling",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]}),e("div",{className:"service-card",children:[e("div",{className:"service-icon",children:e("i",{className:"fas fa-plane text-accent"})}),e("h3",{children:"Pre/Post Departure Support"}),e("p",{children:"Complete support for accommodation, travel, and settling in your destination country before and after arrival."}),e("a",{href:"/services/pre-departure",className:"service-link",children:["Learn More ",e("i",{className:"fas fa-arrow-right"})]})]})]})]})}),e("section",{className:"course-search-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("div",{className:"badge",children:[e("i",{className:"fas fa-search"})," Find Your Program"]}),e("h2",{children:"Explore Study Programs by Destination"}),e("p",{children:"Browse through our study destinations and find programs that match your goals and budget."})]}),e("div",{className:"program-search-cta",children:[e("a",{href:"#destinations-globe",className:"btn btn-primary btn-large",children:[e("i",{className:"fas fa-globe-europe"}),"Explore Study Destinations"]}),e("p",{className:"search-subtext",children:"Click on any country pin to view programs, costs, and application requirements"})]})]})}),e("section",{className:"visa-success-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"🎯 Our Advantage"}),e("h2",{children:"Higher Visa Approval Success from UAE"}),e("p",{children:"UAE residents enjoy significantly higher visa success rates compared to home country applications"})]}),e("div",{className:"visa-success-grid",children:[e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇭🇺"}),e("h3",{children:"Hungary"}),e("div",{className:"success-badge",children:"97% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇱🇹"}),e("h3",{children:"Lithuania"}),e("div",{className:"success-badge",children:"96% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇲🇹"}),e("h3",{children:"Malta"}),e("div",{className:"success-badge",children:"95% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇩🇪"}),e("h3",{children:"Germany"}),e("div",{className:"success-badge",children:"94% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇮🇪"}),e("h3",{children:"Ireland"}),e("div",{className:"success-badge",children:"93% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇫🇮"}),e("h3",{children:"Finland"}),e("div",{className:"success-badge",children:"92% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇸🇬"}),e("h3",{children:"Singapore"}),e("div",{className:"success-badge",children:"91% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇩🇰"}),e("h3",{children:"Denmark"}),e("div",{className:"success-badge",children:"90% Success"})]}),e("div",{className:"visa-country-card animate-on-scroll",children:[e("div",{className:"country-flag",children:"🇸🇪"}),e("h3",{children:"Sweden"}),e("div",{className:"success-badge",children:"90% Success"})]})]})]})}),e("section",{id:"destinations-globe",className:"destinations-globe-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("div",{className:"badge",children:"🌍 Interactive Explorer"}),e("h2",{children:"Explore Study Destinations Worldwide"}),e("p",{children:"Click on any country pin to discover programs, costs, visa requirements, and application details"})]}),e("div",{className:"globe-container",children:[e("div",{id:"interactive-globe",className:"interactive-globe"}),e("div",{className:"globe-controls",children:[e("button",{className:"globe-control-btn",onclick:"resetGlobe()",title:"Reset View",children:e("i",{className:"fas fa-home"})}),e("button",{className:"globe-control-btn",onclick:"toggleGlobeRotation()",title:"Toggle Rotation",children:e("i",{className:"fas fa-play",id:"rotation-icon"})}),e("div",{className:"globe-zoom-controls",children:[e("button",{className:"globe-control-btn",onclick:"zoomGlobe(1.2)",title:"Zoom In",children:e("i",{className:"fas fa-plus"})}),e("button",{className:"globe-control-btn",onclick:"zoomGlobe(0.8)",title:"Zoom Out",children:e("i",{className:"fas fa-minus"})})]})]}),e("div",{id:"globe-loader",className:"globe-loader",children:[e("div",{className:"loader-spinner"}),e("p",{children:"Loading Interactive Globe..."})]})]}),e("div",{className:"mobile-destinations-fallback",children:[e("div",{className:"destinations-header",children:[e("h3",{children:"🌍 Top Study Destinations"}),e("p",{children:"Click any destination to explore programs, costs & requirements"})]}),e("div",{className:"destinations-grid",children:[e("div",{className:"destination-card popular",onclick:"showDestinationModal('germany')",children:[e("div",{className:"destination-flag",children:"🇩🇪"}),e("div",{className:"destination-info",children:[e("h4",{children:"Germany"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"250+ Universities"}),e("span",{className:"stat",children:"95% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Free Tuition Available"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card popular",onclick:"showDestinationModal('canada')",children:[e("div",{className:"destination-flag",children:"🇨🇦"}),e("div",{className:"destination-info",children:[e("h4",{children:"Canada"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"500+ Universities"}),e("span",{className:"stat",children:"85% Visa Success"})]}),e("div",{className:"destination-highlight",children:"3-Year Work Permit"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card popular",onclick:"showDestinationModal('uk')",children:[e("div",{className:"destination-flag",children:"🇬🇧"}),e("div",{className:"destination-info",children:[e("h4",{children:"United Kingdom"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"400+ Universities"}),e("span",{className:"stat",children:"88% Visa Success"})]}),e("div",{className:"destination-highlight",children:"World-Class Education"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card affordable",onclick:"showDestinationModal('ireland')",children:[e("div",{className:"destination-flag",children:"🇮🇪"}),e("div",{className:"destination-info",children:[e("h4",{children:"Ireland"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"150+ Universities"}),e("span",{className:"stat",children:"90% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Tech Hub of Europe"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card premium",onclick:"showDestinationModal('australia')",children:[e("div",{className:"destination-flag",children:"🇦🇺"}),e("div",{className:"destination-info",children:[e("h4",{children:"Australia"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"300+ Universities"}),e("span",{className:"stat",children:"82% Visa Success"})]}),e("div",{className:"destination-highlight",children:"High Living Standard"})]}),e("div",{className:"destination-arrow",children:"→"})]}),e("div",{className:"destination-card affordable",onclick:"showDestinationModal('france')",children:[e("div",{className:"destination-flag",children:"🇫🇷"}),e("div",{className:"destination-info",children:[e("h4",{children:"France"}),e("div",{className:"destination-stats",children:[e("span",{className:"stat",children:"600+ Universities"}),e("span",{className:"stat",children:"87% Visa Success"})]}),e("div",{className:"destination-highlight",children:"Low Cost, High Quality"})]}),e("div",{className:"destination-arrow",children:"→"})]})]}),e("div",{className:"destinations-cta",children:e("button",{className:"btn btn-primary",onclick:"document.getElementById('consultationModal').style.display='block'",children:[e("i",{className:"fas fa-calendar-check"}),"Get Personalized Guidance"]})})]}),e("div",{id:"country-info-modal",className:"country-modal",children:e("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:[e("h3",{id:"modal-country-name",children:"Country Name"}),e("button",{id:"modal-close-btn",className:"modal-close",onclick:"closeDestinationModal()",type:"button","aria-label":"Close modal",children:e("i",{className:"fas fa-times"})})]}),e("div",{className:"modal-body",children:[e("div",{className:"country-overview",children:[e("div",{id:"modal-country-flag",className:"country-flag-large"}),e("div",{id:"modal-country-description",className:"country-description"})]}),e("div",{className:"country-stats",children:e("div",{class:"stat-grid",children:[e("div",{class:"stat-item",children:[e("i",{class:"fas fa-euro-sign"}),e("div",{children:[e("strong",{id:"modal-tuition-range",children:"€0 - €0"}),e("small",{children:"Annual Tuition"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-home"}),e("div",{children:[e("strong",{id:"modal-living-cost",children:"€0 - €0"}),e("small",{children:"Living Cost"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-check-circle"}),e("div",{children:[e("strong",{id:"modal-visa-success",children:"0%"}),e("small",{children:"Visa Success"})]})]}),e("div",{class:"stat-item",children:[e("i",{class:"fas fa-briefcase"}),e("div",{children:[e("strong",{id:"modal-work-permit",children:"N/A"}),e("small",{children:"Work Permit"})]})]})]})}),e("div",{className:"program-highlights",children:[e("h4",{children:"Popular Programs"}),e("div",{id:"modal-programs",className:"programs-list"})]}),e("div",{className:"modal-actions",children:[e("button",{className:"btn btn-primary",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar"}),"Book Consultation"]}),e("button",{className:"btn btn-secondary",onclick:"downloadCountryGuide()",children:[e("i",{className:"fas fa-download"}),"Download Guide"]})]})]})]})}),e("div",{id:"program-inquiry-modal",className:"program-modal",children:e("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:[e("h3",{id:"program-modal-title",children:"Program Inquiry"}),e("button",{id:"program-modal-close-btn",className:"modal-close",onclick:"closeProgramInquiryModal()",type:"button","aria-label":"Close modal",children:e("i",{className:"fas fa-times"})})]}),e("div",{className:"modal-body",children:[e("div",{className:"program-overview",children:[e("div",{id:"program-icon",className:"program-icon-large",children:"🎓"}),e("div",{className:"program-details",children:[e("h4",{id:"program-name",children:"Program Name"}),e("div",{id:"program-price-display",className:"program-price-display",children:[e("span",{id:"program-price",children:"$0"}),e("small",{id:"program-duration",children:"/year"})]}),e("div",{id:"program-features-display",className:"program-features-preview"})]})]}),e("div",{className:"inquiry-form-section",children:[e("h4",{children:"Get Program Information"}),e("form",{id:"program-inquiry-form",className:"progressive-form",children:[e("div",{className:"form-step active","data-step":"1",children:e("div",{className:"form-grid",children:[e("div",{className:"form-group",children:[e("label",{for:"inquiry-full-name",children:[e("i",{className:"fas fa-user"}),"Full Name *"]}),e("input",{type:"text",id:"inquiry-full-name",name:"fullName",required:!0,placeholder:"Enter your full name"})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-email",children:[e("i",{className:"fas fa-envelope"}),"Email Address *"]}),e("input",{type:"email",id:"inquiry-email",name:"email",required:!0,placeholder:"your.email@example.com"})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-phone",children:[e("i",{className:"fas fa-phone"}),"Phone Number *"]}),e("input",{type:"tel",id:"inquiry-phone",name:"phone",required:!0,placeholder:"+971 50 123 4567"})]}),e("div",{className:"form-group full-width",children:[e("label",{for:"inquiry-program",children:[e("i",{className:"fas fa-graduation-cap"}),"Program of Interest *"]}),e("input",{type:"text",id:"inquiry-program",name:"program",readonly:!0,style:"background-color: #f8f9fa; cursor: not-allowed;"})]})]})}),e("div",{className:"form-step","data-step":"2",children:e("div",{className:"form-grid",children:[e("div",{className:"form-group",children:[e("label",{for:"inquiry-education-level",children:[e("i",{className:"fas fa-book"}),"Current Education Level"]}),e("select",{id:"inquiry-education-level",name:"educationLevel",children:[e("option",{value:"",children:"Select your level"}),e("option",{value:"high-school",children:"High School"}),e("option",{value:"undergraduate",children:"Undergraduate"}),e("option",{value:"graduate",children:"Graduate"}),e("option",{value:"postgraduate",children:"Postgraduate"}),e("option",{value:"working-professional",children:"Working Professional"})]})]}),e("div",{className:"form-group",children:[e("label",{for:"inquiry-start-date",children:[e("i",{className:"fas fa-calendar"}),"Preferred Start Date"]}),e("select",{id:"inquiry-start-date",name:"startDate",children:[e("option",{value:"",children:"Select timeline"}),e("option",{value:"immediate",children:"Immediate (Next 3 months)"}),e("option",{value:"6-months",children:"In 6 months"}),e("option",{value:"1-year",children:"Next year"}),e("option",{value:"flexible",children:"Flexible"})]})]}),e("div",{className:"form-group full-width",children:[e("label",{for:"inquiry-message",children:[e("i",{className:"fas fa-message"}),"Additional Questions (Optional)"]}),e("textarea",{id:"inquiry-message",name:"message",rows:3,placeholder:"Any specific questions about the program, admission requirements, or other concerns?"})]})]})}),e("div",{className:"form-navigation",children:[e("div",{className:"step-indicator",children:[e("div",{className:"step active","data-step":"1",children:"1"}),e("div",{className:"progress-line",children:e("div",{className:"progress-fill"})}),e("div",{className:"step","data-step":"2",children:"2"})]}),e("div",{className:"form-buttons",children:[e("button",{type:"button",id:"program-form-prev",className:"btn btn-secondary",style:"display: none;",children:[e("i",{className:"fas fa-arrow-left"})," Previous"]}),e("button",{type:"button",id:"program-form-next",className:"btn btn-primary",children:["Next ",e("i",{className:"fas fa-arrow-right"})]}),e("button",{type:"submit",id:"program-form-submit",className:"btn btn-primary",style:"display: none;",children:[e("i",{className:"fas fa-paper-plane"})," Send Inquiry"]})]})]})]})]}),e("div",{className:"trust-indicators",children:[e("div",{className:"trust-item",children:[e("i",{className:"fas fa-shield-alt"}),e("span",{children:"Secure & Confidential"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-clock"}),e("span",{children:"Response in 24 hours"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-award"}),e("span",{children:"Expert Guidance"})]})]})]})]})}),e("div",{className:"globe-footer",children:[e("p",{className:"globe-instruction",children:[e("i",{className:"fas fa-mouse"}),"Drag to rotate • Scroll to zoom • Click pins for details"]}),e("div",{className:"popular-destinations-quick",children:[e("span",{children:"Quick access:"}),e("button",{onclick:"focusCountry('germany')",className:"quick-country-btn",children:"🇩🇪 Germany"}),e("button",{onclick:"focusCountry('canada')",className:"quick-country-btn",children:"🇨🇦 Canada"}),e("button",{onclick:"focusCountry('australia')",className:"quick-country-btn",children:"🇦🇺 Australia"}),e("button",{onclick:"focusCountry('malta')",className:"quick-country-btn",children:"🇲🇹 Malta"})]})]})]})}),e("section",{className:"mbbs-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"🏥 Medical Education"}),e("h2",{children:"Affordable MBBS Programs"}),e("p",{children:"Study medicine in WHO-recognized universities for under $5,000/year"})]}),e("div",{className:"mbbs-grid",children:[e("div",{className:"mbbs-card animate-on-scroll",children:[e("div",{className:"mbbs-header",children:[e("div",{className:"country-flag-large",children:"🇬🇪"}),e("h3",{children:"Georgia MBBS"})]}),e("div",{className:"mbbs-content",children:[e("div",{className:"price-tag",children:"$4,500/year"}),e("ul",{className:"mbbs-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," WHO-Recognized"]}),e("li",{children:[e("i",{className:"fas fa-check"})," English-Taught"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 6-Year Program"]}),e("li",{children:[e("i",{className:"fas fa-check"})," High Success Rate"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Low Living Cost"]}),e("li",{children:[e("i",{className:"fas fa-check"})," No Donation"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('georgia-mbbs', 'Georgia MBBS', '$4,500', '/year', '🇬🇪', ['WHO-Recognized', 'English-Taught', '6-Year Program', 'High Success Rate', 'Low Living Cost', 'No Donation'])",children:"Learn More"})]})]}),e("div",{className:"mbbs-card animate-on-scroll",children:[e("div",{className:"mbbs-header",children:[e("div",{className:"country-flag-large",children:"🇷🇺"}),e("h3",{children:"Russia MBBS"})]}),e("div",{className:"mbbs-content",children:[e("div",{className:"price-tag",children:"$4,000/year"}),e("ul",{className:"mbbs-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," WHO-Recognized"]}),e("li",{children:[e("i",{className:"fas fa-check"})," English Medium"]}),e("li",{children:[e("i",{className:"fas fa-check"})," World-Class Facilities"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Affordable Living"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Quality Education"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Safe Environment"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('russia-mbbs', 'Russia MBBS', '$4,000', '/year', '🇷🇺', ['WHO-Recognized', 'English Medium', 'World-Class Facilities', 'Affordable Living', 'Quality Education', 'Safe Environment'])",children:"Learn More"})]})]})]}),e("div",{className:"mbbs-cta",children:e("p",{className:"highlight-text",children:[e("i",{className:"fas fa-star"}),"Alternative to expensive UK/US/Canada medical programs - Save over $200,000!"]})})]})}),e("section",{className:"test-prep-marketplace",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"📚 Test Preparation"}),e("h2",{children:"Test Prep Course Marketplace"}),e("p",{children:"Ace your language proficiency tests with our expert-led courses"})]}),e("div",{className:"marketplace-grid",id:"testPrepGrid",children:[e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-badge",children:"Most Popular"}),e("div",{className:"course-icon",children:"🎯"}),e("h3",{children:"IELTS Preparation"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 2,000"}),e("span",{className:"current-price",children:"AED 1,499"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 60 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Live Online Classes"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Mock Tests Included"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 7+ Guarantee"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Study Materials"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Personal Tutor Support"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('ielts-prep', 'IELTS Preparation', 'AED 1,499', '', '🎯', ['60 Hours of Training', 'Live Online Classes', 'Mock Tests Included', 'Score 7+ Guarantee', 'Study Materials', 'Personal Tutor Support'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-icon",children:"🎓"}),e("h3",{children:"PTE Academic"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 1,800"}),e("span",{className:"current-price",children:"AED 1,299"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 50 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Computer-Based Practice"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 10 Full Mock Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 65+ Guarantee"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Practice Tests & Scoring"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Flexible Schedule"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('pte-academic', 'PTE Academic', 'AED 1,299', '', '🎓', ['50 Hours of Training', 'Computer-Based Practice', '10 Full Mock Tests', 'Score 65+ Guarantee', 'Practice Tests & Scoring', 'Flexible Schedule'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-visible",children:[e("div",{className:"course-icon",children:"📖"}),e("h3",{children:"TOEFL iBT"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 2,200"}),e("span",{className:"current-price",children:"AED 1,699"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 65 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Comprehensive Curriculum"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 8 Practice Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 100+ Focus"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Expert Instructors"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Lifetime Materials Access"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openProgramInquiryModal('toefl-ibt', 'TOEFL iBT', 'AED 1,699', '', '📖', ['65 Hours of Training', 'Comprehensive Curriculum', '8 Practice Tests', 'Score 100+ Focus', 'Expert Instructors', 'Lifetime Materials Access'])",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]}),e("div",{className:"course-product-card animate-on-scroll test-prep-hidden",children:[e("div",{className:"course-badge",children:"New"}),e("div",{className:"course-icon",children:"🌟"}),e("h3",{children:"Duolingo English Test"}),e("div",{className:"course-price",children:[e("span",{className:"original-price",children:"AED 1,500"}),e("span",{className:"current-price",children:"AED 999"})]}),e("ul",{className:"course-features",children:[e("li",{children:[e("i",{className:"fas fa-check"})," 40 Hours of Training"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Fast-Track Program"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 15 Practice Tests"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Score 120+ Target"]}),e("li",{children:[e("i",{className:"fas fa-check"})," Adaptive Learning"]}),e("li",{children:[e("i",{className:"fas fa-check"})," 24/7 Online Access"]})]}),e("button",{className:"btn btn-primary btn-full",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-shopping-cart"})," Enroll Now"]})]})]}),e("div",{className:"marketplace-cta",children:e("p",{children:[e("i",{className:"fas fa-gift"})," ",e("strong",{children:"Special Offer:"})," Get 20% off when you enroll with our university admission package!"]})})]})}),e("section",{className:"fee-structure-section",children:e("div",{className:"container",children:[e("div",{className:"section-header animate-on-scroll",children:[e("div",{className:"badge",children:"💰 Transparent Pricing"}),e("h2",{children:"Our Fee Structure"}),e("p",{children:"Clear, affordable pricing with no hidden costs - Pay after guaranteed admission!"})]}),e("div",{className:"fee-structure-content",children:[e("div",{className:"fee-highlight animate-on-scroll",children:[e("div",{className:"discount-banner",children:[e("span",{className:"old-fee",children:"AED 5,000"}),e("span",{className:"arrow",children:"→"}),e("span",{className:"new-fee",children:"AED 2,500"}),e("div",{className:"discount-badge",children:"50% OFF"})]}),e("h3",{children:"Limited Time Offer - Total Service Fee"})]}),e("div",{className:"payment-timeline animate-on-scroll",children:[e("div",{className:"timeline-step",children:[e("div",{className:"step-number",children:"1"}),e("div",{className:"step-content",children:[e("h4",{children:"Free Consultation"}),e("p",{className:"step-price",children:"AED 0"}),e("p",{children:"Initial assessment, course selection, university recommendations"})]})]}),e("div",{className:"timeline-connector"}),e("div",{className:"timeline-step highlight",children:[e("div",{className:"step-number",children:"2"}),e("div",{className:"step-content",children:[e("h4",{children:"100% Guaranteed Admission"}),e("p",{className:"step-price",children:"AED 1,500"}),e("p",{children:"Pay only after receiving your admission letter with our 100% guarantee"})]})]}),e("div",{className:"timeline-connector"}),e("div",{className:"timeline-step",children:[e("div",{className:"step-number",children:"3"}),e("div",{className:"step-content",children:[e("h4",{children:"After Visa Approval"}),e("p",{className:"step-price",children:"AED 1,000"}),e("p",{children:"Final payment after your student visa is successfully approved"})]})]})]}),e("div",{className:"fee-inclusions animate-on-scroll",children:[e("h3",{children:"What's Included in Your Package"}),e("div",{className:"inclusions-grid",children:[e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"University Selection & Applications"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Document Preparation & Review"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Visa Application Support"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Scholarship Assistance"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Interview Preparation"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Pre/Post Departure Support"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Accommodation Assistance"})]}),e("div",{className:"inclusion-item",children:[e("i",{className:"fas fa-check-circle"}),e("span",{children:"Ongoing Support & Guidance"})]})]})]}),e("div",{className:"fee-cta animate-on-scroll",children:[e("button",{className:"btn btn-accent btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-check"}),"Start with Free Consultation"]}),e("p",{className:"guarantee-text",children:[e("i",{className:"fas fa-shield-alt"}),e("strong",{children:"100% Money-Back Guarantee"})," - If we don't get you admitted, you pay nothing!"]})]})]})]})}),e("section",{className:"testimonials-section",children:e("div",{className:"container",children:[e("div",{className:"section-header",children:[e("h2",{children:"Success Stories"}),e("p",{children:"Hear from our successful students"})]}),e("div",{className:"testimonials-grid",children:[e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"SCHOLARIX helped me secure admission at Technical University of Munich with excellent scholarship support. The entire process was smooth and professional!"'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student1.jpg",alt:"Priya Sharma"}),e("div",{className:"author-info",children:[e("h4",{children:"Priya Sharma"}),e("p",{children:"Technical University of Munich, Germany"})]})]})]}),e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"Got my German student visa in just 3 weeks! The team guided me through every step and made the documentation process stress-free."'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student2.jpg",alt:"Raj Patel"}),e("div",{className:"author-info",children:[e("h4",{children:"Raj Patel"}),e("p",{children:"University of Stuttgart, Germany"})]})]})]}),e("div",{className:"testimonial-card",children:[e("div",{className:"testimonial-content",children:[e("div",{className:"stars",children:[e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"}),e("i",{className:"fas fa-star"})]}),e("p",{children:'"The IELTS coaching was excellent. I scored 7.5 and got admitted to Trinity College Dublin. Thank you SCHOLARIX for the amazing support!"'})]}),e("div",{className:"testimonial-author",children:[e("img",{src:"/static/images/student3.jpg",alt:"Sarah Ahmed"}),e("div",{className:"author-info",children:[e("h4",{children:"Sarah Ahmed"}),e("p",{children:"Trinity College Dublin, Ireland"})]})]})]})]})]})}),e("section",{className:"cta-section",children:e("div",{className:"container",children:e("div",{className:"cta-content",children:[e("h2",{children:"Ready to Start Your Study Abroad Journey?"}),e("p",{children:"Get expert guidance and personalized support to achieve your international education dreams"}),e("div",{className:"cta-buttons",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-outline btn-large",onclick:"document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})",children:[e("i",{className:"fas fa-envelope"}),"Get Information"]})]})]})})}),e("section",{className:"contact-form-section",id:"contact-form",children:e("div",{className:"container",children:e("div",{className:"form-container",children:[e("div",{className:"form-content",children:[e("h2",{children:"Get Your Free Consultation"}),e("p",{children:"Fill out this form and our experts will contact you within 24 hours"}),e("div",{className:"progressive-form-container",children:e("form",{action:"https://formspree.io/f/xyzgkjad",method:"post",className:"progressive-form",id:"leadForm",children:[e("input",{type:"hidden",name:"_subject",value:"New SCHOLARIX Consultation Request"}),e("input",{type:"hidden",name:"_next",value:"https://scholarixstudy.com/thank-you"}),e("div",{className:"form-step active",id:"step1",children:[e("div",{className:"step-progress",children:[e("div",{className:"progress-indicator",children:"Step 1 of 2"}),e("div",{className:"progress-bar",children:e("div",{className:"progress-fill",style:{width:"50%"}})})]}),e("div",{className:"form-fields",children:[e("div",{className:"form-group",children:e("input",{type:"text",name:"fullName",placeholder:"Full Name*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"email",name:"email",placeholder:"Email Address*",required:!0})}),e("div",{className:"form-group",children:e("div",{className:"phone-input-wrapper",children:[e("select",{name:"countryCode",className:"country-code-select",required:!0,children:[e("option",{value:"+971",children:"🇦🇪 +971"}),e("option",{value:"+1",children:"🇺🇸 +1"}),e("option",{value:"+44",children:"🇬🇧 +44"}),e("option",{value:"+91",children:"�� +91"}),e("option",{value:"+92",children:"�� +92"})]}),e("input",{type:"tel",name:"phone",placeholder:"Phone Number*",required:!0})]})})]}),e("button",{type:"button",className:"btn btn-primary btn-large",onclick:"showStep2()",children:[e("i",{className:"fas fa-arrow-right"}),"Get Started"]}),e("div",{className:"trust-indicators",children:[e("div",{className:"trust-item",children:[e("i",{className:"fas fa-shield-alt"}),e("span",{children:"Secure & Confidential"})]}),e("div",{className:"trust-item",children:[e("i",{className:"fas fa-clock"}),e("span",{children:"Response in 24 hours"})]})]})]}),e("div",{className:"form-step",id:"step2",style:{display:"none"},children:[e("div",{className:"step-progress",children:[e("div",{className:"progress-indicator",children:"Step 2 of 2"}),e("div",{className:"progress-bar",children:e("div",{className:"progress-fill",style:{width:"100%"}})})]}),e("div",{className:"form-fields",children:[e("div",{className:"form-group",children:e("select",{name:"destination",required:!0,children:[e("option",{value:"",children:"Preferred Destination*"}),e("option",{value:"germany",children:"🇩🇪 Germany"}),e("option",{value:"canada",children:"🇨🇦 Canada"}),e("option",{value:"uk",children:"🇬🇧 United Kingdom"}),e("option",{value:"ireland",children:"🇮🇪 Ireland"}),e("option",{value:"australia",children:"🇦🇺 Australia"}),e("option",{value:"france",children:"🇫🇷 France"})]})}),e("div",{className:"form-group",children:e("select",{name:"studyLevel",required:!0,children:[e("option",{value:"",children:"Study Level*"}),e("option",{value:"bachelor",children:"Bachelor's Degree"}),e("option",{value:"master",children:"Master's Degree"}),e("option",{value:"phd",children:"PhD/Research"})]})}),e("div",{className:"form-group",children:e("select",{name:"timeline",required:!0,children:[e("option",{value:"",children:"When to Start*"}),e("option",{value:"2025",children:"2025"}),e("option",{value:"2026",children:"2026"}),e("option",{value:"2027",children:"2027 or later"})]})}),e("div",{className:"form-group",children:e("textarea",{name:"message",placeholder:"Any specific questions or requirements? (Optional)",rows:3})})]}),e("div",{className:"form-actions",children:[e("button",{type:"button",className:"btn btn-secondary",onclick:"showStep1()",children:[e("i",{className:"fas fa-arrow-left"}),"Back"]}),e("button",{type:"submit",className:"btn btn-primary btn-large",children:[e("i",{className:"fas fa-calendar-check"}),"Complete"]})]})]})]})})]}),e("div",{className:"form-image",children:[e("img",{src:"/static/images/scholarix-logo-professional.png",alt:"SCHOLARIX - Free Consultation"}),e("div",{className:"contact-info",children:[e("h3",{children:"Contact Information"}),e("div",{className:"contact-item",children:[e("i",{className:"fas fa-phone text-primary"}),e("div",{children:[e("strong",{children:"Call Us"}),e("p",{children:"+971 52 543 8784"})]})]}),e("div",{className:"contact-item",children:[e("i",{className:"fas fa-envelope text-primary"}),e("div",{children:[e("strong",{children:"Email Us"}),e("p",{children:"info@scholarixstudy.com"})]})]}),e("div",{className:"contact-item",children:[e("i",{className:"fas fa-comments text-accent"}),e("div",{children:[e("strong",{children:"Live Chat"}),e("p",{children:"Available 24/7"})]})]})]})]})]})})}),e("div",{id:"consultationModal",className:"modal",children:e("div",{className:"modal-content",children:[e("span",{className:"close",onclick:"closeConsultationModal()",children:"×"}),e("h2",{children:"Book Your Free Consultation"}),e("p",{children:"Choose your preferred consultation method:"}),e("div",{className:"consultation-options",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat Consultation"]}),e("button",{className:"btn btn-secondary btn-large",onclick:"window.open('tel:+971525438784', '_self')",children:[e("i",{className:"fas fa-phone"}),"Phone Call"]}),e("button",{className:"btn btn-outline btn-large",onclick:"closeConsultationModal(); document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})",children:[e("i",{className:"fas fa-envelope"}),"Email Inquiry"]})]})]})}),e("div",{className:"whatsapp-sticky",children:e("a",{href:"https://wa.me/971525438784?text=Hi%20SCHOLARIX%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%20me%3F",className:"whatsapp-btn",target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with us on WhatsApp",children:[e("i",{className:"fab fa-whatsapp"}),e("span",{className:"whatsapp-text",children:"Chat with us"})]})})]})));q.get("/about",t=>t.render(e("div",{className:"about-page",children:e("div",{className:"container",children:[e("section",{className:"about-hero",children:e("div",{className:"about-hero-content",children:[e("h1",{children:"About SCHOLARIX"}),e("p",{className:"hero-subtitle",children:"Empowering students to achieve their international education dreams since 2018. With over 10,000 successful student placements and a 99% visa success rate, we are your trusted partner for study abroad success."})]})}),e("section",{className:"about-mission",children:e("div",{className:"section-header",children:[e("h2",{children:"Our Mission"}),e("p",{children:"To provide world-class educational guidance and support, helping students navigate their academic journeys and achieve their full potential in international education."})]})}),e("section",{className:"about-stats",children:e("div",{className:"stats-grid",children:[e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"10,000+"}),e("div",{className:"stat-label",children:"Students Placed"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"99%"}),e("div",{className:"stat-label",children:"Visa Success Rate"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"500+"}),e("div",{className:"stat-label",children:"Partner Universities"})]}),e("div",{className:"stat-card",children:[e("div",{className:"stat-number",children:"15+"}),e("div",{className:"stat-label",children:"Countries Covered"})]})]})}),e("section",{className:"about-team",children:[e("div",{className:"section-header",children:[e("h2",{children:"Our Expert Team"}),e("p",{children:"Experienced counselors and visa experts dedicated to your success"})]}),e("div",{className:"team-grid",children:[e("div",{className:"team-member",children:[e("img",{src:"/static/images/team1.jpg",alt:"Sarah Johnson"}),e("h3",{children:"Sarah Johnson"}),e("p",{children:"Senior Education Counselor"}),e("p",{children:"10+ years experience in US and UK admissions"})]}),e("div",{className:"team-member",children:[e("img",{src:"/static/images/team2.jpg",alt:"Michael Chen"}),e("h3",{children:"Michael Chen"}),e("p",{children:"Visa Specialist"}),e("p",{children:"Expert in student visa applications for all countries"})]}),e("div",{className:"team-member",children:[e("img",{src:"/static/images/team3.jpg",alt:"Dr. Priya Patel"}),e("h3",{children:"Dr. Priya Patel"}),e("p",{children:"Academic Director"}),e("p",{children:"PhD in International Education, 15+ years experience"})]})]})]}),e("div",{className:"about-cta",children:e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:"Meet Our Team"})})]})})));q.get("/contact",t=>t.render(e("div",{className:"contact-page",children:e("div",{className:"container",children:[e("section",{className:"contact-hero",children:[e("h1",{children:"Contact SCHOLARIX"}),e("p",{children:"Ready to start your study abroad journey? Get in touch with our experts today!"})]}),e("section",{className:"contact-main",children:e("div",{className:"contact-grid",children:[e("div",{className:"contact-info",children:[e("h2",{children:"Get In Touch"}),e("div",{className:"contact-methods",children:[e("div",{className:"contact-method",children:[e("i",{className:"fas fa-phone text-primary"}),e("div",{children:[e("h4",{children:"Phone"}),e("p",{children:"+971 52 543 8784"}),e("small",{children:"Mon-Sat: 9AM-7PM GST"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-envelope text-primary"}),e("div",{children:[e("h4",{children:"Email"}),e("p",{children:"info@scholarixstudy.com"}),e("small",{children:"Response within 24 hours"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-comments text-accent"}),e("div",{children:[e("h4",{children:"Live Chat"}),e("p",{children:"24/7 Available"}),e("small",{children:"Instant messaging support"})]})]}),e("div",{className:"contact-method",children:[e("i",{className:"fas fa-map-marker-alt text-primary"}),e("div",{children:[e("h4",{children:"Office"}),e("p",{children:"Dubai, United Arab Emirates"}),e("small",{children:"By appointment only"})]})]})]})]}),e("div",{className:"contact-form",children:[e("h2",{children:"Send Us a Message"}),e("form",{id:"contactForm",className:"lead-form",children:[e("div",{className:"form-row",children:[e("div",{className:"form-group",children:e("input",{type:"text",name:"firstName",placeholder:"First Name*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"text",name:"lastName",placeholder:"Last Name*",required:!0})})]}),e("div",{className:"form-group",children:e("input",{type:"email",name:"email",placeholder:"Email Address*",required:!0})}),e("div",{className:"form-group",children:e("input",{type:"tel",name:"phone",placeholder:"Phone Number*",required:!0})}),e("div",{className:"form-group",children:e("select",{name:"subject",required:!0,children:[e("option",{value:"",children:"Subject*"}),e("option",{value:"general",children:"General Inquiry"}),e("option",{value:"visa",children:"Visa Support"}),e("option",{value:"admission",children:"University Admission"}),e("option",{value:"scholarship",children:"Scholarships"}),e("option",{value:"ielts",children:"IELTS/PTE Preparation"}),e("option",{value:"appointment",children:"Book Appointment"})]})}),e("div",{className:"form-group",children:e("textarea",{name:"message",placeholder:"Your Message*",required:!0})}),e("button",{type:"submit",className:"btn btn-primary btn-large btn-full",children:[e("i",{className:"fas fa-paper-plane"}),"Send Message"]})]})]})]})}),e("section",{className:"office-hours",children:[e("h2",{children:"Office Hours"}),e("div",{className:"hours-grid",children:[e("div",{className:"hours-item",children:[e("strong",{children:"Monday - Friday"}),e("span",{children:"9:00 AM - 7:00 PM GST"})]}),e("div",{className:"hours-item",children:[e("strong",{children:"Saturday"}),e("span",{children:"10:00 AM - 4:00 PM GST"})]}),e("div",{className:"hours-item",children:[e("strong",{children:"Sunday"}),e("span",{children:"Closed"})]})]})]})]})})));q.get("/blog",t=>t.render(e("div",{className:"blog-page",children:e("div",{className:"container",children:[e("section",{className:"blog-hero",children:[e("h1",{children:"Study Abroad Blog"}),e("p",{children:"Latest insights, tips, and updates for international students"})]}),e("section",{className:"blog-grid",children:[e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog1.jpg",alt:"IELTS Preparation Tips"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 15, 2024"}),e("span",{className:"blog-category",children:"Test Preparation"})]}),e("h2",{children:"10 Essential IELTS Preparation Tips for High Scores"}),e("p",{children:"Master the IELTS exam with these proven strategies and achieve your target band score for university admission..."}),e("a",{href:"/blog/ielts-preparation-tips",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog2.jpg",alt:"Scholarship Guide"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 10, 2024"}),e("span",{className:"blog-category",children:"Scholarships"})]}),e("h2",{children:"Complete Guide to International Scholarships for 2024"}),e("p",{children:"Discover available scholarships, application deadlines, and expert tips to secure funding for your studies abroad..."}),e("a",{href:"/blog/scholarship-guide-2024",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog3.jpg",alt:"Visa Interview Tips"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"March 5, 2024"}),e("span",{className:"blog-category",children:"Visa Support"})]}),e("h2",{children:"Ace Your Student Visa Interview: Common Questions & Answers"}),e("p",{children:"Prepare for your visa interview with confidence using these expert tips and practice questions..."}),e("a",{href:"/blog/visa-interview-tips",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog4.jpg",alt:"University Selection"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 28, 2024"}),e("span",{className:"blog-category",children:"University Selection"})]}),e("h2",{children:"How to Choose the Right University: A Complete Guide"}),e("p",{children:"Make informed decisions about your higher education with our comprehensive university selection guide..."}),e("a",{href:"/blog/university-selection-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog5.jpg",alt:"Canada Study Guide"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 20, 2024"}),e("span",{className:"blog-category",children:"Country Guide"})]}),e("h2",{children:"Why Canada is the Best Choice for International Students"}),e("p",{children:"Explore Canada's education system, work opportunities, and immigration pathways for international students..."}),e("a",{href:"/blog/study-in-canada-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]}),e("article",{className:"blog-post",children:[e("img",{src:"/static/images/blog6.jpg",alt:"SOP Writing"}),e("div",{className:"blog-content",children:[e("div",{className:"blog-meta",children:[e("span",{className:"blog-date",children:"February 15, 2024"}),e("span",{className:"blog-category",children:"Application Tips"})]}),e("h2",{children:"Writing a Winning Statement of Purpose (SOP)"}),e("p",{children:"Create a compelling SOP that stands out to admission committees with our step-by-step guide..."}),e("a",{href:"/blog/sop-writing-guide",className:"read-more",children:["Read More ",e("i",{className:"fas fa-arrow-right"})]})]})]})]}),e("section",{className:"blog-categories",children:[e("h2",{children:"Browse by Category"}),e("div",{className:"categories-grid",children:[e("a",{href:"/blog/category/test-preparation",className:"category-card",children:[e("i",{className:"fas fa-book text-primary"}),e("h3",{children:"Test Preparation"}),e("p",{children:"IELTS, TOEFL, PTE, SAT, GRE guides"})]}),e("a",{href:"/blog/category/visa-support",className:"category-card",children:[e("i",{className:"fas fa-passport text-primary"}),e("h3",{children:"Visa Support"}),e("p",{children:"Student visa tips and guidelines"})]}),e("a",{href:"/blog/category/scholarships",className:"category-card",children:[e("i",{className:"fas fa-trophy text-accent"}),e("h3",{children:"Scholarships"}),e("p",{children:"Funding opportunities and tips"})]}),e("a",{href:"/blog/category/country-guides",className:"category-card",children:[e("i",{className:"fas fa-globe text-primary"}),e("h3",{children:"Country Guides"}),e("p",{children:"Study destination information"})]})]})]})]})})));q.get("/services/:service",t=>{const i=t.req.param("service"),a={visa:{title:"Study Visa Support",description:"Expert guidance for student visa applications with 99% success rate",content:`
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
      `}},n=a[i]||a.visa;return t.render(e("div",{className:"service-page",children:e("div",{className:"container",children:[e("div",{className:"service-hero",children:[e("h1",{children:n.title}),e("p",{className:"hero-subtitle",children:n.description})]}),e("div",{className:"service-content",dangerouslySetInnerHTML:{__html:n.content}}),e("div",{className:"service-cta-section",children:[e("h2",{children:"Ready to Get Started?"}),e("p",{children:"Book your free consultation today and take the first step toward your study abroad journey."}),e("div",{className:"service-actions",children:[e("button",{className:"btn btn-primary btn-large",onclick:"openConsultationModal()",children:[e("i",{className:"fas fa-calendar-alt"}),"Book Free Consultation"]}),e("button",{className:"btn btn-outline btn-large",onclick:"openChatbot()",children:[e("i",{className:"fas fa-comments"}),"Live Chat"]})]})]})]})}))});q.post("/api/lead",async t=>{try{const i=await t.req.json();console.log("New lead received:",i);const a={timestamp:new Date().toISOString(),firstName:i.firstName||"",lastName:i.lastName||"",email:i.email||"",phone:`${i.countryCode||""} ${i.phone||""}`.trim(),country:i.country||"",service:i.service||"",message:i.message||""},n=await Promise.allSettled([Nn(a),wn(a)]);return n.some(r=>r.status==="fulfilled")?t.json({success:!0,message:"Thank you! We have received your inquiry and will contact you within 24 hours."}):(n.forEach((r,l)=>{r.status==="rejected"&&console.error(`Integration ${l} failed:`,r.reason)}),t.json({success:!1,message:"Thank you for your interest. Please call us directly at +971-XX-XXX-XXXX for immediate assistance."}))}catch(i){return console.error("API Error:",i),t.json({success:!1,message:"Something went wrong. Please try again or contact us directly."},500)}});async function Nn(t){try{const a=await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"addLead",data:t})});if(!a.ok)throw new Error(`Google Sheets API error: ${a.status}`);const n=await a.json();return console.log("Successfully added to Google Sheets:",n),n}catch(i){throw console.error("Google Sheets integration error:",i),i}}async function wn(t){try{const i="https://api.emailjs.com/api/v1.0/email/send",a={service_id:"YOUR_SERVICE_ID",template_id:"YOUR_TEMPLATE_ID",user_id:"YOUR_USER_ID",template_params:{to_email:"info@scholarixstudy.com",from_name:`${t.firstName} ${t.lastName}`,reply_to:t.email,subject:"New SCHOLARIX Consultation Request",message:`
New consultation request received:

Name: ${t.firstName} ${t.lastName}
Email: ${t.email}
Phone: ${t.phone}
Preferred Country: ${t.country}
Service: ${t.service}
Message: ${t.message}

Submitted: ${new Date(t.timestamp).toLocaleString()}
        `}},n=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!n.ok)throw new Error(`Email service error: ${n.status}`);return console.log("Email notification sent successfully"),{success:!0}}catch(i){throw console.error("Email notification error:",i),i}}const Ut=new Pi,En=Object.assign({"/src/index.tsx":q});let Hi=!1;for(const[,t]of Object.entries(En))t&&(Ut.all("*",i=>{let a;try{a=i.executionCtx}catch{}return t.fetch(i.req.raw,i.env,a)}),Ut.notFound(i=>{let a;try{a=i.executionCtx}catch{}return t.fetch(i.req.raw,i.env,a)}),Hi=!0);if(!Hi)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ut as default};
