import{a6 as Ae,r as O,o as re,w as j,c as p,ac as Ve,g as G,i as _e,n as ue,ad as Ee,ae as Be,af as Ce,E as $e,G as W,a0 as Ie,ag as Oe,h as x,A as X,Q as ce,ah as Te,l as ee,ai as Pe,aj as je,u as De,k as we,B as ve}from"./index.f0b3f861.js";import{a as Me,u as Se}from"./scroll.86f6f8b4.js";let ie,ne=0;const I=new Array(256);for(let e=0;e<256;e++)I[e]=(e+256).toString(16).substring(1);const ze=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let u=t;u>0;u--)r.push(Math.floor(Math.random()*256));return r}})(),ge=4096;function de(){(ie===void 0||ne+16>ge)&&(ne=0,ie=ze(ge));const e=Array.prototype.slice.call(ie,ne,ne+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,I[e[0]]+I[e[1]]+I[e[2]]+I[e[3]]+"-"+I[e[4]]+I[e[5]]+"-"+I[e[6]]+I[e[7]]+"-"+I[e[8]]+I[e[9]]+"-"+I[e[10]]+I[e[11]]+I[e[12]]+I[e[13]]+I[e[14]]+I[e[15]]}function Ne(e){return e==null?null:e}function me(e,t){return e==null?t===!0?`f_${de()}`:null:e}function Ke({getValue:e,required:t=!0}={}){if(Ae.value===!0){const r=e!==void 0?O(Ne(e())):O(null);return t===!0&&r.value===null&&re(()=>{r.value=`f_${de()}`}),e!==void 0&&j(e,u=>{r.value=me(u,t)}),r}return e!==void 0?p(()=>me(e(),t)):O(`f_${de()}`)}const he=/^on[A-Z]/;function Le(){const{attrs:e,vnode:t}=G(),r={listeners:O({}),attributes:O({})};function u(){const d={},f={};for(const v in e)v!=="class"&&v!=="style"&&he.test(v)===!1&&(d[v]=e[v]);for(const v in t.props)he.test(v)===!0&&(f[v]=t.props[v]);r.attributes.value=d,r.listeners.value=f}return Ve(u),u(),r}function Ze({validate:e,resetValidation:t,requiresQForm:r}){const u=_e(Ee,!1);if(u!==!1){const{props:d,proxy:f}=G();Object.assign(f,{validate:e,resetValidation:t}),j(()=>d.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(f)):u.bindComponent(f)}),re(()=>{d.disable!==!0&&u.bindComponent(f)}),ue(()=>{d.disable!==!0&&u.unbindComponent(f)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,pe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ye=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,le=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ae=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>be.test(e),hexaColor:e=>pe.test(e),hexOrHexaColor:e=>ye.test(e),rgbColor:e=>le.test(e),rgbaColor:e=>ae.test(e),rgbOrRgbaColor:e=>le.test(e)||ae.test(e),hexOrRgbColor:e=>be.test(e)||le.test(e),hexaOrRgbaColor:e=>pe.test(e)||ae.test(e),anyColor:e=>ye.test(e)||le.test(e)||ae.test(e)},Ue=[!0,!1,"ondemand"],He={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ue.includes(e)}};function Qe(e,t){const{props:r,proxy:u}=G(),d=O(!1),f=O(null),v=O(!1);Ze({validate:z,resetValidation:D});let C=0,E;const q=p(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),w=p(()=>r.disable!==!0&&q.value===!0&&t.value===!1),b=p(()=>r.error===!0||d.value===!0),H=p(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:f.value);j(()=>r.modelValue,()=>{v.value=!0,w.value===!0&&r.lazyRules===!1&&T()});function $(){r.lazyRules!=="ondemand"&&w.value===!0&&v.value===!0&&T()}j(()=>r.reactiveRules,K=>{K===!0?E===void 0&&(E=j(()=>r.rules,$,{immediate:!0,deep:!0})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),j(()=>r.lazyRules,$),j(e,K=>{K===!0?v.value=!0:w.value===!0&&r.lazyRules!=="ondemand"&&T()});function D(){C++,t.value=!1,v.value=!1,d.value=!1,f.value=null,T.cancel()}function z(K=r.modelValue){if(r.disable===!0||q.value===!1)return!0;const V=++C,Q=t.value!==!0?()=>{v.value=!0}:()=>{},L=(S,M)=>{S===!0&&Q(),d.value=S,f.value=M||null,t.value=!1},N=[];for(let S=0;S<r.rules.length;S++){const M=r.rules[S];let B;if(typeof M=="function"?B=M(K,se):typeof M=="string"&&se[M]!==void 0&&(B=se[M](K)),B===!1||typeof B=="string")return L(!0,B),!1;B!==!0&&B!==void 0&&N.push(B)}return N.length===0?(L(!1),!0):(t.value=!0,Promise.all(N).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return V===C&&L(!1),!0;const M=S.find(B=>B===!1||typeof B=="string");return V===C&&L(M!==void 0,M),M===void 0},S=>(V===C&&(console.error(S),L(!0)),!1)))}const T=Be(z,0);return ue(()=>{E!==void 0&&E(),T.cancel()}),Object.assign(u,{resetValidation:D,validate:z}),Ce(u,"hasError",()=>b.value),{isDirtyModel:v,hasRules:q,hasError:b,errorMessage:H,validate:z,resetValidation:D}}let Y=[],te=[];function qe(e){te=te.filter(t=>t!==e)}function gt(e){qe(e),te.push(e)}function mt(e){qe(e),te.length===0&&Y.length!==0&&(Y[Y.length-1](),Y=[])}function Re(e){te.length===0?e():Y.push(e)}function We(e){Y=Y.filter(t=>t!==e)}function fe(e){return e!=null&&(""+e).length!==0}const Ye={...Se,...He,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Ge={...Ye,maxlength:[Number,String]},Je=["update:modelValue","clear","focus","blur"];function Xe({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:u,proxy:d}=G(),f=Me(u,d.$q),v=Ke({required:e,getValue:()=>u.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?p(()=>u.tag):{value:"label"},isDark:f,editable:p(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:Le(),targetUid:v,rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function et(e){const{props:t,emit:r,slots:u,attrs:d,proxy:f}=G(),{$q:v}=f;let C=null;e.hasValue===void 0&&(e.hasValue=p(()=>fe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{r("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:l,focus:M}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:E,hasRules:q,hasError:w,errorMessage:b,resetValidation:H}=Qe(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),D=p(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),z=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),T=p(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&D.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=p(()=>t.labelSlot===!0||t.label!==void 0),Q=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),L=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),N=p(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function S(){const i=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(i===null||i.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==i&&c.focus({preventScroll:!0}))}function M(){Re(S)}function B(){We(S);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function a(i){C!==null&&(clearTimeout(C),C=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",i))}function l(i,c){C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",i)),c!==void 0&&c())})}function s(i){$e(i),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),W(()=>{const c=E.value;H(),E.value=c})}function o(i){[13,32].includes(i.keyCode)&&s(i)}function h(){const i=[];return u.prepend!==void 0&&i.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},u.prepend())),i.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&i.push(m("error",[x(ce,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(m("inner-loading-append",u.loading!==void 0?u.loading():[x(Te,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(m("inner-clearable-append",[x(ce,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":v.lang.label.clear,onKeyup:o,onClick:s})])),u.append!==void 0&&i.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},u.append())),e.getInnerAppend!==void 0&&i.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function g(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):u.rawControl!==void 0?i.push(u.rawControl()):u.control!==void 0&&i.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(L.value))),V.value===!0&&i.push(x("div",{class:Q.value},ee(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(ee(u.default))}function R(){let i,c;w.value===!0?b.value!==null?(i=[x("div",{role:"alert"},b.value)],c=`q--slot-error-${b.value}`):(i=ee(u.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[x("div",t.hint)],c=`q--slot-hint-${t.hint}`):(i=ee(u.hint),c="q--slot-hint"));const k=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&k===!1&&i===void 0)return;const F=x("div",{key:c,class:"q-field__messages col"},i);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?F:x(Pe,{name:"q-transition--field-message"},()=>F),k===!0?x("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function m(i,c){return c===null?null:x("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let y=!1;return Ie(()=>{y=!0}),Oe(()=>{y===!0&&t.autofocus===!0&&f.focus()}),t.autofocus===!0&&re(()=>{f.focus()}),ue(()=>{C!==null&&clearTimeout(C)}),Object.assign(f,{focus:M,blur:B}),function(){const c=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...N.value}:N.value;return x(e.tag.value,{ref:e.rootRef,class:[T.value,d.class],style:d.style,...c},[u.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},u.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},h()),D.value===!0?R():null]),u.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},u.after()):null])}}const ke={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},oe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Fe=Object.keys(oe);Fe.forEach(e=>{oe[e].regex=new RegExp(oe[e].pattern)});const tt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Fe.join("")+"])|(.)","g"),xe=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),nt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function lt(e,t,r,u){let d,f,v,C,E,q;const w=O(null),b=O($());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,z),j(()=>e.mask,a=>{if(a!==void 0)T(b.value,!0);else{const l=M(b.value);z(),e.modelValue!==l&&t("update:modelValue",l)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&T(b.value,!0)}),j(()=>e.unmaskedValue,()=>{w.value===!0&&T(b.value)});function $(){if(z(),w.value===!0){const a=N(M(e.modelValue));return e.fillMask!==!1?B(a):a}return e.modelValue}function D(a){if(a<d.length)return d.slice(-a);let l="",s=d;const o=s.indexOf(_);if(o!==-1){for(let h=a-s.length;h>0;h--)l+=_;s=s.slice(0,o)+l+s.slice(o)}return s}function z(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&H(),w.value===!1){C=void 0,d="",f="";return}const a=ke[e.mask]===void 0?e.mask:ke[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(xe,"\\$&"),o=[],h=[],g=[];let R=e.reverseFillMask===!0,m="",y="";a.replace(tt,(F,n,A,U,Z)=>{if(U!==void 0){const P=oe[U];g.push(P),y=P.negate,R===!0&&(h.push("(?:"+y+"+)?("+P.pattern+"+)?(?:"+y+"+)?("+P.pattern+"+)?"),R=!1),h.push("(?:"+y+"+)?("+P.pattern+")?")}else if(A!==void 0)m="\\"+(A==="\\"?"":A),g.push(A),o.push("([^"+m+"]+)?"+m+"?");else{const P=n!==void 0?n:Z;m=P==="\\"?"\\\\\\\\":P.replace(xe,"\\\\$&"),g.push(P),o.push("([^"+m+"]+)?"+m+"?")}});const i=new RegExp("^"+o.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),c=h.length-1,k=h.map((F,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):n===c?new RegExp("^"+F+"("+(y===""?".":y)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));v=g,C=F=>{const n=i.exec(e.reverseFillMask===!0?F:F.slice(0,g.length+1));n!==null&&(F=n.slice(1).join(""));const A=[],U=k.length;for(let Z=0,P=F;Z<U;Z++){const J=k[Z].exec(P);if(J===null)break;P=P.slice(J.shift().length),A.push(...J)}return A.length!==0?A.join(""):F},d=g.map(F=>typeof F=="string"?F:_).join(""),f=d.split(_).join(l)}function T(a,l,s){const o=u.value,h=o.selectionEnd,g=o.value.length-h,R=M(a);l===!0&&z();const m=N(R),y=e.fillMask!==!1?B(m):m,i=b.value!==y;o.value!==y&&(o.value=y),i===!0&&(b.value=y),document.activeElement===o&&W(()=>{if(y===f){const k=e.reverseFillMask===!0?f.length:0;o.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=o.selectionEnd;let F=h-1;for(let n=E;n<=F&&n<k;n++)d[n]!==_&&F++;V.right(o,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const k=e.reverseFillMask===!0?h===0?y.length>m.length?1:0:Math.max(0,y.length-(y===f?0:Math.min(m.length,g)+1))+1:h;o.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const k=Math.max(0,y.length-(y===f?0:Math.min(m.length,g+1)));k===1&&h===1?o.setSelectionRange(k,k,"forward"):V.rightReverse(o,k)}else{const k=y.length-g;o.setSelectionRange(k,k,"backward")}else if(i===!0){const k=Math.max(0,d.indexOf(_),Math.min(m.length,h)-1);V.right(o,k)}else{const k=h-1;V.right(o,k)}});const c=e.unmaskedValue===!0?M(y):y;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&r(c,!0)}function K(a,l,s){const o=N(M(a.value));l=Math.max(0,d.indexOf(_),Math.min(o.length,l)),E=l,a.setSelectionRange(l,s,"forward")}const V={left(a,l){const s=d.slice(l-1).indexOf(_)===-1;let o=Math.max(0,l-1);for(;o>=0;o--)if(d[o]===_){l=o,s===!0&&l++;break}if(o<0&&d[l]!==void 0&&d[l]!==_)return V.right(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},right(a,l){const s=a.value.length;let o=Math.min(s,l+1);for(;o<=s;o++)if(d[o]===_){l=o;break}else d[o-1]===_&&(l=o);if(o>s&&d[l-1]!==void 0&&d[l-1]!==_)return V.left(a,s);a.setSelectionRange(l,l,"forward")},leftReverse(a,l){const s=D(a.value.length);let o=Math.max(0,l-1);for(;o>=0;o--)if(s[o-1]===_){l=o;break}else if(s[o]===_&&(l=o,o===0))break;if(o<0&&s[l]!==void 0&&s[l]!==_)return V.rightReverse(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},rightReverse(a,l){const s=a.value.length,o=D(s),h=o.slice(0,l+1).indexOf(_)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(o[g-1]===_){l=g,l>0&&h===!0&&l--;break}if(g>s&&o[l-1]!==void 0&&o[l-1]!==_)return V.leftReverse(a,s);a.setSelectionRange(l,l,"forward")}};function Q(a){t("click",a),q=void 0}function L(a){if(t("keydown",a),je(a)===!0||a.altKey===!0)return;const l=u.value,s=l.selectionStart,o=l.selectionEnd;if(a.shiftKey||(q=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&q===void 0&&(q=l.selectionDirection==="forward"?s:o);const h=V[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),h(l,q===s?o:s),a.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(q,g),Math.max(q,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===o?(V.left(l,s),l.setSelectionRange(l.selectionStart,o,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===o&&(V.rightReverse(l,o),l.setSelectionRange(s,l.selectionEnd,"forward"))}function N(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return S(a);const l=v;let s=0,o="";for(let h=0;h<l.length;h++){const g=a[s],R=l[h];if(typeof R=="string")o+=R,g===R&&s++;else if(g!==void 0&&R.regex.test(g))o+=R.transform!==void 0?R.transform(g):g,s++;else return o}return o}function S(a){const l=v,s=d.indexOf(_);let o=a.length-1,h="";for(let g=l.length-1;g>=0&&o!==-1;g--){const R=l[g];let m=a[o];if(typeof R=="string")h=R+h,m===R&&o--;else if(m!==void 0&&R.regex.test(m))do h=(R.transform!==void 0?R.transform(m):m)+h,o--,m=a[o];while(s===g&&m!==void 0&&R.regex.test(m));else return h}return h}function M(a){return typeof a!="string"||C===void 0?typeof a=="number"?C(""+a):a:C(a)}function B(a){return f.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?f.slice(0,-a.length)+a:a+f.slice(a.length)}return{innerValue:b,hasMask:w,moveCursorForPaste:K,updateMaskValue:T,onMaskedKeydown:L,onMaskedClick:Q}}const at={name:String};function ht(e){return p(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function bt(e={}){return(t,r,u)=>{t[r](x("input",{class:"hidden"+(u||""),...e.value}))}}function ot(e){return p(()=>e.name||e.for)}function rt(e,t){function r(){const u=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?p(()=>{if(e.type==="file")return r()}):p(r)}const ut=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,it=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,st=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,dt=/[a-z0-9_ -]$/i;function ft(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(De.is.firefox===!0?dt.test(r.data)===!1:ut.test(r.data)===!0||it.test(r.data)===!0||st.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}var pt=we({name:"QInput",inheritAttrs:!1,props:{...Ge,...nt,...at,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Je,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:u}=G(),{$q:d}=u,f={};let v=NaN,C,E,q=null,w;const b=O(null),H=ot(e),{innerValue:$,hasMask:D,moveCursorForPaste:z,updateMaskValue:T,onMaskedKeydown:K,onMaskedClick:V}=lt(e,t,m,b),Q=rt(e,!0),L=p(()=>fe($.value)),N=ft(g),S=Xe({changeEvent:!0}),M=p(()=>e.type==="textarea"||e.autogrow===!0),B=p(()=>M.value===!0||["text","search","url","tel","password"].includes(e.type)),a=p(()=>{const n={...S.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:i,onBlur:c,onFocus:ve};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=N,D.value===!0&&(n.onKeydown=K,n.onClick=V),e.autogrow===!0&&(n.onAnimationend=R),n}),l=p(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return M.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});j(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),j(()=>e.modelValue,n=>{if(D.value===!0){if(E===!0&&(E=!1,String(n)===v))return;T(n)}else $.value!==n&&($.value=n,e.type==="number"&&f.hasOwnProperty("value")===!0&&(C===!0?C=!1:delete f.value));e.autogrow===!0&&W(y)}),j(()=>e.autogrow,n=>{n===!0?W(y):b.value!==null&&r.rows>0&&(b.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&W(y)});function s(){Re(()=>{const n=document.activeElement;b.value!==null&&b.value!==n&&(n===null||n.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value!==null&&b.value.select()}function h(n){if(D.value===!0&&e.reverseFillMask!==!0){const A=n.target;z(A,A.selectionStart,A.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const A=n.target.value;if(n.target.qComposing===!0){f.value=A;return}if(D.value===!0)T(A,!1,n.inputType);else if(m(A),B.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&W(()=>{n.target===document.activeElement&&A.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&y()}function R(n){t("animationend",n),y()}function m(n,A){w=()=>{q=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==n&&v!==n&&(v=n,A===!0&&(E=!0),t("update:modelValue",n),W(()=>{v===n&&(v=NaN)})),w=void 0},e.type==="number"&&(C=!0,f.value=n),e.debounce!==void 0?(q!==null&&clearTimeout(q),f.value=n,q=setTimeout(w,e.debounce)):w()}function y(){requestAnimationFrame(()=>{const n=b.value;if(n!==null){const A=n.parentNode.style,{scrollTop:U}=n,{overflowY:Z,maxHeight:P}=d.platform.is.firefox===!0?{}:window.getComputedStyle(n),J=Z!==void 0&&Z!=="scroll";J===!0&&(n.style.overflowY="hidden"),A.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",J===!0&&(n.style.overflowY=parseInt(P,10)<n.scrollHeight?"auto":"hidden"),A.marginBottom="",n.scrollTop=U}})}function i(n){N(n),q!==null&&(clearTimeout(q),q=null),w!==void 0&&w(),t("change",n.target.value)}function c(n){n!==void 0&&ve(n),q!==null&&(clearTimeout(q),q=null),w!==void 0&&w(),C=!1,E=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=$.value!==void 0?$.value:"")})}function k(){return f.hasOwnProperty("value")===!0?f.value:$.value!==void 0?$.value:""}ue(()=>{c()}),re(()=>{e.autogrow===!0&&y()}),Object.assign(S,{innerValue:$,fieldClass:p(()=>`q-${M.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:p(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:m,hasValue:L,floatingLabel:p(()=>L.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||fe(e.displayValue)),getControl:()=>x(M.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...a.value,...e.type!=="file"?{value:k()}:Q.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(M.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},k()),x("span",e.shadowText)])});const F=et(S);return Object.assign(u,{focus:s,select:o,getNativeElement:()=>b.value}),Ce(u,"nativeEl",()=>b.value),F}}),yt=we({name:"QCard",props:{...Se,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=G(),u=Me(e,r),d=p(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>x(e.tag,{class:d.value},ee(t.default))}});export{pt as Q,yt as a,Je as b,et as c,Xe as d,gt as e,Re as f,at as g,ot as h,fe as i,ft as j,bt as k,ht as l,mt as r,Ge as u};
