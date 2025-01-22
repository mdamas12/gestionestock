import{k as x,c as d,h as k,l as H,g as B,n as D,X as A,w as I,Y as F,o as N,G as R,u as w,Z as m,E as K,$ as O,a0 as G,a1 as Z,a2 as J,a3 as ee,a4 as te,r as $,a5 as le,p as oe}from"./index.c77837c0.js";import{u as X,a as Y,g as ie,b as ne,h as ae}from"./scroll.78a5b6fd.js";var ve=x({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=d(()=>parseInt(e.lines,10)),l=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),i=d(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>k("div",{style:i.value,class:l.value},H(t.default))}});const re=["ul","ol"];var me=x({name:"QList",props:{...X,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=B(),l=Y(e,o.proxy.$q),i=d(()=>re.includes(e.tag)?null:"list"),c=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:c.value,role:i.value},H(t.default))}});function be(e,t,o){let l;function i(){l!==void 0&&(A.remove(l),l=void 0)}return D(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>o.value===!0,handler:t},A.add(l)}}}const pe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},we=["beforeShow","show","beforeHide","hide"];function ye({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:i,processOnMount:c}){const r=B(),{props:s,emit:f,proxy:L}=r;let u;function p(n){e.value===!0?g(n):y(n)}function y(n){if(s.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const a=s["onUpdate:modelValue"]!==void 0;a===!0&&(f("update:modelValue",!0),u=n,R(()=>{u===n&&(u=void 0)})),(s.modelValue===null||a===!1)&&v(n)}function v(n){e.value!==!0&&(e.value=!0,f("beforeShow",n),l!==void 0?l(n):f("show",n))}function g(n){if(s.disable===!0)return;const a=s["onUpdate:modelValue"]!==void 0;a===!0&&(f("update:modelValue",!1),u=n,R(()=>{u===n&&(u=void 0)})),(s.modelValue===null||a===!1)&&T(n)}function T(n){e.value!==!1&&(e.value=!1,f("beforeHide",n),i!==void 0?i(n):f("hide",n))}function S(n){s.disable===!0&&n===!0?s["onUpdate:modelValue"]!==void 0&&f("update:modelValue",!1):n===!0!==e.value&&(n===!0?v:T)(u)}I(()=>s.modelValue,S),o!==void 0&&F(r)===!0&&I(()=>L.$route.fullPath,()=>{o.value===!0&&e.value===!0&&g()}),c===!0&&N(()=>{S(s.modelValue)});const E={show:y,hide:g,toggle:p};return Object.assign(L,E),E}let h=0,V,C,q,P=!1,Q,U,W,b=null;function se(e){ue(e)&&K(e)}function ue(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=O(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=o||l?e.deltaY:e.deltaX;for(let c=0;c<t.length;c++){const r=t[c];if(ae(r,l))return l?i<0&&r.scrollTop===0?!0:i>0&&r.scrollTop+r.clientHeight===r.scrollHeight:i<0&&r.scrollLeft===0?!0:i>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function j(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function _(e){P!==!0&&(P=!0,requestAnimationFrame(()=>{P=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=l),l>q&&(document.scrollingElement.scrollTop-=Math.ceil((l-q)/8))}))}function z(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(t);V=ie(window),C=ne(window),Q=t.style.left,U=t.style.top,W=window.location.href,t.style.left=`-${V}px`,t.style.top=`-${C}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,w.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",_,m.passiveCapture),window.visualViewport.addEventListener("scroll",_,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",j,m.passiveCapture))}w.is.desktop===!0&&w.is.mac===!0&&window[`${e}EventListener`]("wheel",se,m.notPassive),e==="remove"&&(w.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",_,m.passiveCapture),window.visualViewport.removeEventListener("scroll",_,m.passiveCapture)):window.removeEventListener("scroll",j,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Q,t.style.top=U,window.location.href===W&&window.scrollTo(V,C),q=void 0)}function ce(e){let t="add";if(e===!0){if(h++,b!==null){clearTimeout(b),b=null;return}if(h>1)return}else{if(h===0||(h--,h>0))return;if(t="remove",w.is.ios===!0&&w.is.nativeMobile===!0){b!==null&&clearTimeout(b),b=setTimeout(()=>{z(t),b=null},100);return}}z(t)}function ge(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ce(t))}}}function he(){let e=null;const t=B();function o(){e!==null&&(clearTimeout(e),e=null)}return G(o),D(o),{removeTimeout:o,registerTimeout(l,i){o(),Z(t)===!1&&(e=setTimeout(()=>{e=null,l()},i))}}}function qe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),J.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ke(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function Le(e,t,o){if(o<=t)return t;const l=o-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}function Te(e,t=2,o="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(o)+l}var Se=x({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:o.value},H(t.default))}}),Ee=x({name:"QItem",props:{...X,...ee,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=B(),i=Y(e,l),{hasLink:c,linkAttrs:r,linkClass:s,linkTag:f,navigateOnClick:L}=te(),u=$(null),p=$(null),y=d(()=>e.clickable===!0||c.value===!0||e.tag==="label"),v=d(()=>e.disable!==!0&&y.value===!0),g=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=d(()=>{if(e.insetLevel===void 0)return null;const a=l.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function S(a){v.value===!0&&(p.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===u.value?p.value.focus():document.activeElement===p.value&&u.value.focus()),L(a))}function E(a){if(v.value===!0&&le(a,[13,32])===!0){K(a),a.qKeyEvent=!0;const M=new MouseEvent("click",a);M.qKeyEvent=!0,u.value.dispatchEvent(M)}o("keyup",a)}function n(){const a=oe(t.default,[]);return v.value===!0&&a.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:p})),a}return()=>{const a={ref:u,class:g.value,style:T.value,role:"listitem",onClick:S,onKeyup:E};return v.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,r.value)):y.value===!0&&(a["aria-disabled"]="true"),k(f.value,a,n())}}});export{Se as Q,we as a,he as b,qe as c,ye as d,be as e,ke as f,ge as g,ve as h,Ee as i,me as j,Le as n,Te as p,pe as u};
