(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function X6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}function Q6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=M1(s)?Po(s):Q6(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(M1(c))return c;if(t1(c))return c}}const ko=/;(?![^(]*\))/g,yo=/:([^]+)/,Ao=/\/\*.*?\*\//gs;function Po(c){const a={};return c.replace(Ao,"").split(ko).forEach(e=>{if(e){const s=e.split(yo);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function J6(c){let a="";if(M1(c))a=c;else if(U(c))for(let e=0;e<c.length;e++){const s=J6(c[e]);s&&(a+=s+" ")}else if(t1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const To="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fo=X6(To);function r7(c){return!!c||c===""}const L1=c=>M1(c)?c:c==null?"":U(c)||t1(c)&&(c.toString===l7||!W(c.toString))?JSON.stringify(c,i7,2):String(c),i7=(c,a)=>a&&a.__v_isRef?i7(c,a.value):J2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:n7(a)?{[`Set(${a.size})`]:[...a.values()]}:t1(a)&&!U(a)&&!o7(a)?String(a):a,f1={},Q2=[],Z1=()=>{},Bo=()=>!1,_o=/^on[^a-z]/,k4=c=>_o.test(c),c8=c=>c.startsWith("onUpdate:"),b1=Object.assign,a8=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Ro=Object.prototype.hasOwnProperty,X=(c,a)=>Ro.call(c,a),U=Array.isArray,J2=c=>y4(c)==="[object Map]",n7=c=>y4(c)==="[object Set]",W=c=>typeof c=="function",M1=c=>typeof c=="string",e8=c=>typeof c=="symbol",t1=c=>c!==null&&typeof c=="object",f7=c=>t1(c)&&W(c.then)&&W(c.catch),l7=Object.prototype.toString,y4=c=>l7.call(c),Eo=c=>y4(c).slice(8,-1),o7=c=>y4(c)==="[object Object]",s8=c=>M1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,m4=X6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Do=/-(\w)/g,e2=A4(c=>c.replace(Do,(a,e)=>e?e.toUpperCase():"")),qo=/\B([A-Z])/g,O2=A4(c=>c.replace(qo,"-$1").toLowerCase()),P4=A4(c=>c.charAt(0).toUpperCase()+c.slice(1)),m6=A4(c=>c?`on${P4(c)}`:""),b3=(c,a)=>!Object.is(c,a),C4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},M4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},S3=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let _5;const $o=()=>_5||(_5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Q1;class Uo{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Q1,!a&&Q1&&(this.index=(Q1.scopes||(Q1.scopes=[])).push(this)-1)}run(a){if(this.active){const e=Q1;try{return Q1=this,a()}finally{Q1=e}}}on(){Q1=this}off(){Q1=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Oo(c,a=Q1){a&&a.active&&a.effects.push(c)}const r8=c=>{const a=new Set(c);return a.w=0,a.n=0,a},t7=c=>(c.w&g2)>0,m7=c=>(c.n&g2)>0,Io=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=g2},Wo=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];t7(r)&&!m7(r)?r.delete(c):a[e++]=r,r.w&=~g2,r.n&=~g2}a.length=e}},b6=new WeakMap;let u3=0,g2=1;const S6=30;let I1;const D2=Symbol(""),N6=Symbol("");class i8{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Oo(this,s)}run(){if(!this.active)return this.fn();let a=I1,e=d2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=I1,I1=this,d2=!0,g2=1<<++u3,u3<=S6?Io(this):R5(this),this.fn()}finally{u3<=S6&&Wo(this),g2=1<<--u3,I1=this.parent,d2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){I1===this?this.deferStop=!0:this.active&&(R5(this),this.onStop&&this.onStop(),this.active=!1)}}function R5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let d2=!0;const C7=[];function t3(){C7.push(d2),d2=!1}function m3(){const c=C7.pop();d2=c===void 0?!0:c}function B1(c,a,e){if(d2&&I1){let s=b6.get(c);s||b6.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=r8()),z7(r)}}function z7(c,a){let e=!1;u3<=S6?m7(c)||(c.n|=g2,e=!t7(c)):e=!c.has(I1),e&&(c.add(I1),I1.deps.push(c))}function f2(c,a,e,s,r,i){const n=b6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&U(c)){const l=S3(s);n.forEach((t,o)=>{(o==="length"||o>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":U(c)?s8(e)&&f.push(n.get("length")):(f.push(n.get(D2)),J2(c)&&f.push(n.get(N6)));break;case"delete":U(c)||(f.push(n.get(D2)),J2(c)&&f.push(n.get(N6)));break;case"set":J2(c)&&f.push(n.get(D2));break}if(f.length===1)f[0]&&w6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);w6(r8(l))}}function w6(c,a){const e=U(c)?c:[...c];for(const s of e)s.computed&&E5(s);for(const s of e)s.computed||E5(s)}function E5(c,a){(c!==I1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Go=X6("__proto__,__v_isRef,__isVue"),v7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(e8)),Zo=n8(),jo=n8(!1,!0),Ko=n8(!0),D5=Yo();function Yo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=Q(this);for(let i=0,n=this.length;i<n;i++)B1(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(Q)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){t3();const s=Q(this)[a].apply(this,e);return m3(),s}}),c}function n8(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?Ct:V7:a?p7:u7).get(s))return s;const n=U(s);if(!c&&n&&X(D5,r))return Reflect.get(D5,r,i);const f=Reflect.get(s,r,i);return(e8(r)?v7.has(r):Go(r))||(c||B1(s,"get",r),a)?f:w1(f)?n&&s8(r)?f:f.value:t1(f)?c?M7(f):q3(f):f}}const Xo=h7(),Qo=h7(!0);function h7(c=!1){return function(e,s,r,i){let n=e[s];if(i3(n)&&w1(n)&&!w1(r))return!1;if(!c&&(!d4(r)&&!i3(r)&&(n=Q(n),r=Q(r)),!U(e)&&w1(n)&&!w1(r)))return n.value=r,!0;const f=U(e)&&s8(s)?Number(s)<e.length:X(e,s),l=Reflect.set(e,s,r,i);return e===Q(i)&&(f?b3(r,n)&&f2(e,"set",s,r):f2(e,"add",s,r)),l}}function Jo(c,a){const e=X(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&f2(c,"delete",a,void 0),s}function ct(c,a){const e=Reflect.has(c,a);return(!e8(a)||!v7.has(a))&&B1(c,"has",a),e}function at(c){return B1(c,"iterate",U(c)?"length":D2),Reflect.ownKeys(c)}const H7={get:Zo,set:Xo,deleteProperty:Jo,has:ct,ownKeys:at},et={get:Ko,set(c,a){return!0},deleteProperty(c,a){return!0}},st=b1({},H7,{get:jo,set:Qo}),f8=c=>c,T4=c=>Reflect.getPrototypeOf(c);function Y3(c,a,e=!1,s=!1){c=c.__v_raw;const r=Q(c),i=Q(a);e||(a!==i&&B1(r,"get",a),B1(r,"get",i));const{has:n}=T4(r),f=s?f8:e?t8:N3;if(n.call(r,a))return f(c.get(a));if(n.call(r,i))return f(c.get(i));c!==r&&c.get(a)}function X3(c,a=!1){const e=this.__v_raw,s=Q(e),r=Q(c);return a||(c!==r&&B1(s,"has",c),B1(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function Q3(c,a=!1){return c=c.__v_raw,!a&&B1(Q(c),"iterate",D2),Reflect.get(c,"size",c)}function q5(c){c=Q(c);const a=Q(this);return T4(a).has.call(a,c)||(a.add(c),f2(a,"add",c,c)),this}function $5(c,a){a=Q(a);const e=Q(this),{has:s,get:r}=T4(e);let i=s.call(e,c);i||(c=Q(c),i=s.call(e,c));const n=r.call(e,c);return e.set(c,a),i?b3(a,n)&&f2(e,"set",c,a):f2(e,"add",c,a),this}function U5(c){const a=Q(this),{has:e,get:s}=T4(a);let r=e.call(a,c);r||(c=Q(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&f2(a,"delete",c,void 0),i}function O5(){const c=Q(this),a=c.size!==0,e=c.clear();return a&&f2(c,"clear",void 0,void 0),e}function J3(c,a){return function(s,r){const i=this,n=i.__v_raw,f=Q(n),l=a?f8:c?t8:N3;return!c&&B1(f,"iterate",D2),n.forEach((t,o)=>s.call(r,l(t),l(o),i))}}function c4(c,a,e){return function(...s){const r=this.__v_raw,i=Q(r),n=J2(i),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=r[c](...s),o=e?f8:a?t8:N3;return!a&&B1(i,"iterate",l?N6:D2),{next(){const{value:C,done:z}=t.next();return z?{value:C,done:z}:{value:f?[o(C[0]),o(C[1])]:o(C),done:z}},[Symbol.iterator](){return this}}}}function v2(c){return function(...a){return c==="delete"?!1:this}}function rt(){const c={get(i){return Y3(this,i)},get size(){return Q3(this)},has:X3,add:q5,set:$5,delete:U5,clear:O5,forEach:J3(!1,!1)},a={get(i){return Y3(this,i,!1,!0)},get size(){return Q3(this)},has:X3,add:q5,set:$5,delete:U5,clear:O5,forEach:J3(!1,!0)},e={get(i){return Y3(this,i,!0)},get size(){return Q3(this,!0)},has(i){return X3.call(this,i,!0)},add:v2("add"),set:v2("set"),delete:v2("delete"),clear:v2("clear"),forEach:J3(!0,!1)},s={get(i){return Y3(this,i,!0,!0)},get size(){return Q3(this,!0)},has(i){return X3.call(this,i,!0)},add:v2("add"),set:v2("set"),delete:v2("delete"),clear:v2("clear"),forEach:J3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=c4(i,!1,!1),e[i]=c4(i,!0,!1),a[i]=c4(i,!1,!0),s[i]=c4(i,!0,!0)}),[c,e,a,s]}const[it,nt,ft,lt]=rt();function l8(c,a){const e=a?c?lt:ft:c?nt:it;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(X(e,r)&&r in s?e:s,r,i)}const ot={get:l8(!1,!1)},tt={get:l8(!1,!0)},mt={get:l8(!0,!1)},u7=new WeakMap,p7=new WeakMap,V7=new WeakMap,Ct=new WeakMap;function zt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vt(c){return c.__v_skip||!Object.isExtensible(c)?0:zt(Eo(c))}function q3(c){return i3(c)?c:o8(c,!1,H7,ot,u7)}function ht(c){return o8(c,!1,st,tt,p7)}function M7(c){return o8(c,!0,et,mt,V7)}function o8(c,a,e,s,r){if(!t1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const n=vt(c);if(n===0)return c;const f=new Proxy(c,n===2?s:e);return r.set(c,f),f}function c3(c){return i3(c)?c3(c.__v_raw):!!(c&&c.__v_isReactive)}function i3(c){return!!(c&&c.__v_isReadonly)}function d4(c){return!!(c&&c.__v_isShallow)}function d7(c){return c3(c)||i3(c)}function Q(c){const a=c&&c.__v_raw;return a?Q(a):c}function L7(c){return M4(c,"__v_skip",!0),c}const N3=c=>t1(c)?q3(c):c,t8=c=>t1(c)?M7(c):c;function g7(c){d2&&I1&&(c=Q(c),z7(c.dep||(c.dep=r8())))}function x7(c,a){c=Q(c),c.dep&&w6(c.dep)}function w1(c){return!!(c&&c.__v_isRef===!0)}function Ht(c){return b7(c,!1)}function ut(c){return b7(c,!0)}function b7(c,a){return w1(c)?c:new pt(c,a)}class pt{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Q(a),this._value=e?a:N3(a)}get value(){return g7(this),this._value}set value(a){const e=this.__v_isShallow||d4(a)||i3(a);a=e?a:Q(a),b3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:N3(a),x7(this))}}function a3(c){return w1(c)?c.value:c}const Vt={get:(c,a,e)=>a3(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return w1(r)&&!w1(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function S7(c){return c3(c)?c:new Proxy(c,Vt)}var N7;class Mt{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[N7]=!1,this._dirty=!0,this.effect=new i8(a,()=>{this._dirty||(this._dirty=!0,x7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=Q(this);return g7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}N7="__v_isReadonly";function dt(c,a,e=!1){let s,r;const i=W(c);return i?(s=c,r=Z1):(s=c.get,r=c.set),new Mt(s,r,i||!r,e)}function L2(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){F4(i,a,e)}return r}function D1(c,a,e,s){if(W(c)){const i=L2(c,a,e,s);return i&&f7(i)&&i.catch(n=>{F4(n,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(D1(c[i],a,e,s));return r}function F4(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,f=e;for(;i;){const t=i.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){L2(l,null,10,[c,n,f]);return}}Lt(c,e,r,s)}function Lt(c,a,e,s=!0){console.error(c)}let w3=!1,k6=!1;const N1=[];let c2=0;const e3=[];let i2=null,T2=0;const w7=Promise.resolve();let m8=null;function k7(c){const a=m8||w7;return c?a.then(this?c.bind(this):c):a}function gt(c){let a=c2+1,e=N1.length;for(;a<e;){const s=a+e>>>1;k3(N1[s])<c?a=s+1:e=s}return a}function C8(c){(!N1.length||!N1.includes(c,w3&&c.allowRecurse?c2+1:c2))&&(c.id==null?N1.push(c):N1.splice(gt(c.id),0,c),y7())}function y7(){!w3&&!k6&&(k6=!0,m8=w7.then(P7))}function xt(c){const a=N1.indexOf(c);a>c2&&N1.splice(a,1)}function bt(c){U(c)?e3.push(...c):(!i2||!i2.includes(c,c.allowRecurse?T2+1:T2))&&e3.push(c),y7()}function I5(c,a=w3?c2+1:0){for(;a<N1.length;a++){const e=N1[a];e&&e.pre&&(N1.splice(a,1),a--,e())}}function A7(c){if(e3.length){const a=[...new Set(e3)];if(e3.length=0,i2){i2.push(...a);return}for(i2=a,i2.sort((e,s)=>k3(e)-k3(s)),T2=0;T2<i2.length;T2++)i2[T2]();i2=null,T2=0}}const k3=c=>c.id==null?1/0:c.id,St=(c,a)=>{const e=k3(c)-k3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function P7(c){k6=!1,w3=!0,N1.sort(St);const a=Z1;try{for(c2=0;c2<N1.length;c2++){const e=N1[c2];e&&e.active!==!1&&L2(e,null,14)}}finally{c2=0,N1.length=0,A7(),w3=!1,m8=null,(N1.length||e3.length)&&P7()}}function Nt(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||f1;let r=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in s){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:C,trim:z}=s[o]||f1;z&&(r=e.map(h=>M1(h)?h.trim():h)),C&&(r=e.map(S3))}let f,l=s[f=m6(a)]||s[f=m6(e2(a))];!l&&i&&(l=s[f=m6(O2(a))]),l&&D1(l,c,6,r);const t=s[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,D1(t,c,6,r)}}function T7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let n={},f=!1;if(!W(c)){const l=t=>{const o=T7(t,a,!0);o&&(f=!0,b1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!f?(t1(c)&&s.set(c,null),null):(U(i)?i.forEach(l=>n[l]=null):b1(n,i),t1(c)&&s.set(c,n),n)}function B4(c,a){return!c||!k4(a)?!1:(a=a.slice(2).replace(/Once$/,""),X(c,a[0].toLowerCase()+a.slice(1))||X(c,O2(a))||X(c,a))}let F1=null,_4=null;function L4(c){const a=F1;return F1=c,_4=c&&c.type.__scopeId||null,a}function z8(c){_4=c}function v8(){_4=null}function s3(c,a=F1,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&c0(-1);const i=L4(a);let n;try{n=c(...r)}finally{L4(i),s._d&&c0(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function C6(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[n],slots:f,attrs:l,emit:t,render:o,renderCache:C,data:z,setupState:h,ctx:d,inheritAttrs:L}=c;let w,S;const F=L4(c);try{if(e.shapeFlag&4){const $=r||s;w=J1(o.call($,$,C,i,h,z,d)),S=l}else{const $=a;w=J1($.length>1?$(i,{attrs:l,slots:f,emit:t}):$(i,null)),S=a.props?l:wt(l)}}catch($){M3.length=0,F4($,c,1),w=C1(j1)}let k=w;if(S&&L!==!1){const $=Object.keys(S),{shapeFlag:G}=k;$.length&&G&7&&(n&&$.some(c8)&&(S=kt(S,n)),k=x2(k,S))}return e.dirs&&(k=x2(k),k.dirs=k.dirs?k.dirs.concat(e.dirs):e.dirs),e.transition&&(k.transition=e.transition),w=k,L4(F),w}const wt=c=>{let a;for(const e in c)(e==="class"||e==="style"||k4(e))&&((a||(a={}))[e]=c[e]);return a},kt=(c,a)=>{const e={};for(const s in c)(!c8(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function yt(c,a,e){const{props:s,children:r,component:i}=c,{props:n,children:f,patchFlag:l}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?W5(s,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let C=0;C<o.length;C++){const z=o[C];if(n[z]!==s[z]&&!B4(t,z))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:s===n?!1:s?n?W5(s,n,t):!0:!!n;return!1}function W5(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!B4(e,i))return!0}return!1}function At({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const Pt=c=>c.__isSuspense;function Tt(c,a){a&&a.pendingBranch?U(c)?a.effects.push(...c):a.effects.push(c):bt(c)}function z4(c,a){if(x1){let e=x1.provides;const s=x1.parent&&x1.parent.provides;s===e&&(e=x1.provides=Object.create(s)),e[c]=a}}function n2(c,a,e=!1){const s=x1||F1;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&W(a)?a.call(s.proxy):a}}const a4={};function v4(c,a,e){return F7(c,a,e)}function F7(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:n}=f1){const f=x1;let l,t=!1,o=!1;if(w1(c)?(l=()=>c.value,t=d4(c)):c3(c)?(l=()=>c,s=!0):U(c)?(o=!0,t=c.some(k=>c3(k)||d4(k)),l=()=>c.map(k=>{if(w1(k))return k.value;if(c3(k))return _2(k);if(W(k))return L2(k,f,2)})):W(c)?a?l=()=>L2(c,f,2):l=()=>{if(!(f&&f.isUnmounted))return C&&C(),D1(c,f,3,[z])}:l=Z1,a&&s){const k=l;l=()=>_2(k())}let C,z=k=>{C=S.onStop=()=>{L2(k,f,4)}},h;if(T3)if(z=Z1,a?e&&D1(a,f,3,[l(),o?[]:void 0,z]):l(),r==="sync"){const k=Nm();h=k.__watcherHandles||(k.__watcherHandles=[])}else return Z1;let d=o?new Array(c.length).fill(a4):a4;const L=()=>{if(S.active)if(a){const k=S.run();(s||t||(o?k.some(($,G)=>b3($,d[G])):b3(k,d)))&&(C&&C(),D1(a,f,3,[k,d===a4?void 0:o&&d[0]===a4?[]:d,z]),d=k)}else S.run()};L.allowRecurse=!!a;let w;r==="sync"?w=L:r==="post"?w=()=>A1(L,f&&f.suspense):(L.pre=!0,f&&(L.id=f.uid),w=()=>C8(L));const S=new i8(l,w);a?e?L():d=S.run():r==="post"?A1(S.run.bind(S),f&&f.suspense):S.run();const F=()=>{S.stop(),f&&f.scope&&a8(f.scope.effects,S)};return h&&h.push(F),F}function Ft(c,a,e){const s=this.proxy,r=M1(c)?c.includes(".")?B7(s,c):()=>s[c]:c.bind(s,s);let i;W(a)?i=a:(i=a.handler,e=a);const n=x1;n3(this);const f=F7(r,i.bind(s),e);return n?n3(n):q2(),f}function B7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function _2(c,a){if(!t1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),w1(c))_2(c.value,a);else if(U(c))for(let e=0;e<c.length;e++)_2(c[e],a);else if(n7(c)||J2(c))c.forEach(e=>{_2(e,a)});else if(o7(c))for(const e in c)_2(c[e],a);return c}function _7(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return q7(()=>{c.isMounted=!0}),U7(()=>{c.isUnmounting=!0}),c}const R1=[Function,Array],Bt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:R1,onEnter:R1,onAfterEnter:R1,onEnterCancelled:R1,onBeforeLeave:R1,onLeave:R1,onAfterLeave:R1,onLeaveCancelled:R1,onBeforeAppear:R1,onAppear:R1,onAfterAppear:R1,onAppearCancelled:R1},setup(c,{slots:a}){const e=s9(),s=_7();let r;return()=>{const i=a.default&&h8(a.default(),!0);if(!i||!i.length)return;let n=i[0];if(i.length>1){for(const L of i)if(L.type!==j1){n=L;break}}const f=Q(c),{mode:l}=f;if(s.isLeaving)return z6(n);const t=G5(n);if(!t)return z6(n);const o=y3(t,f,s,e);A3(t,o);const C=e.subTree,z=C&&G5(C);let h=!1;const{getTransitionKey:d}=t.type;if(d){const L=d();r===void 0?r=L:L!==r&&(r=L,h=!0)}if(z&&z.type!==j1&&(!F2(t,z)||h)){const L=y3(z,f,s,e);if(A3(z,L),l==="out-in")return s.isLeaving=!0,L.afterLeave=()=>{s.isLeaving=!1,e.update.active!==!1&&e.update()},z6(n);l==="in-out"&&t.type!==j1&&(L.delayLeave=(w,S,F)=>{const k=R7(s,z);k[String(z.key)]=z,w._leaveCb=()=>{S(),w._leaveCb=void 0,delete o.delayedLeave},o.delayedLeave=F})}return n}}},_t=Bt;function R7(c,a){const{leavingVNodes:e}=c;let s=e.get(a.type);return s||(s=Object.create(null),e.set(a.type,s)),s}function y3(c,a,e,s){const{appear:r,mode:i,persisted:n=!1,onBeforeEnter:f,onEnter:l,onAfterEnter:t,onEnterCancelled:o,onBeforeLeave:C,onLeave:z,onAfterLeave:h,onLeaveCancelled:d,onBeforeAppear:L,onAppear:w,onAfterAppear:S,onAppearCancelled:F}=a,k=String(c.key),$=R7(e,c),G=(O,K)=>{O&&D1(O,s,9,K)},s1=(O,K)=>{const J=K[1];G(O,K),U(O)?O.every(V1=>V1.length<=1)&&J():O.length<=1&&J()},m1={mode:i,persisted:n,beforeEnter(O){let K=f;if(!e.isMounted)if(r)K=L||f;else return;O._leaveCb&&O._leaveCb(!0);const J=$[k];J&&F2(c,J)&&J.el._leaveCb&&J.el._leaveCb(),G(K,[O])},enter(O){let K=l,J=t,V1=o;if(!e.isMounted)if(r)K=w||l,J=S||t,V1=F||o;else return;let B=!1;const n1=O._enterCb=S1=>{B||(B=!0,S1?G(V1,[O]):G(J,[O]),m1.delayedLeave&&m1.delayedLeave(),O._enterCb=void 0)};K?s1(K,[O,n1]):n1()},leave(O,K){const J=String(c.key);if(O._enterCb&&O._enterCb(!0),e.isUnmounting)return K();G(C,[O]);let V1=!1;const B=O._leaveCb=n1=>{V1||(V1=!0,K(),n1?G(d,[O]):G(h,[O]),O._leaveCb=void 0,$[J]===c&&delete $[J])};$[J]=c,z?s1(z,[O,B]):B()},clone(O){return y3(O,a,e,s)}};return m1}function z6(c){if(R4(c))return c=x2(c),c.children=null,c}function G5(c){return R4(c)?c.children?c.children[0]:void 0:c}function A3(c,a){c.shapeFlag&6&&c.component?A3(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function h8(c,a=!1,e){let s=[],r=0;for(let i=0;i<c.length;i++){let n=c[i];const f=e==null?n.key:String(e)+String(n.key!=null?n.key:i);n.type===P1?(n.patchFlag&128&&r++,s=s.concat(h8(n.children,a,f))):(a||n.type!==j1)&&s.push(f!=null?x2(n,{key:f}):n)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function E7(c){return W(c)?{setup:c,name:c.name}:c}const h4=c=>!!c.type.__asyncLoader,R4=c=>c.type.__isKeepAlive;function Rt(c,a){D7(c,"a",a)}function Et(c,a){D7(c,"da",a)}function D7(c,a,e=x1){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(E4(a,s,e),e){let r=e.parent;for(;r&&r.parent;)R4(r.parent.vnode)&&Dt(s,a,e,r),r=r.parent}}function Dt(c,a,e,s){const r=E4(a,c,s,!0);O7(()=>{a8(s[a],r)},e)}function E4(c,a,e=x1,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;t3(),n3(e);const f=D1(a,e,c,n);return q2(),m3(),f});return s?r.unshift(i):r.push(i),i}}const m2=c=>(a,e=x1)=>(!T3||c==="sp")&&E4(c,(...s)=>a(...s),e),qt=m2("bm"),q7=m2("m"),$t=m2("bu"),$7=m2("u"),U7=m2("bum"),O7=m2("um"),Ut=m2("sp"),Ot=m2("rtg"),It=m2("rtc");function Wt(c,a=x1){E4("ec",c,a)}function Gt(c,a){const e=F1;if(e===null)return c;const s=$4(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,f,l,t=f1]=a[i];n&&(W(n)&&(n={mounted:n,updated:n}),n.deep&&_2(f),r.push({dir:n,instance:s,value:f,oldValue:void 0,arg:l,modifiers:t}))}return c}function k2(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let n=0;n<r.length;n++){const f=r[n];i&&(f.oldValue=i[n].value);let l=f.dir[s];l&&(t3(),D1(l,e,8,[c.el,f,c,a]),m3())}}const I7="components";function g4(c,a){return jt(I7,c,!0,a)||c}const Zt=Symbol();function jt(c,a,e=!0,s=!1){const r=F1||x1;if(r){const i=r.type;if(c===I7){const f=xm(i,!1);if(f&&(f===a||f===e2(a)||f===P4(e2(a))))return i}const n=Z5(r[c]||i[c],a)||Z5(r.appContext[c],a);return!n&&s?i:n}}function Z5(c,a){return c&&(c[a]||c[e2(a)]||c[P4(e2(a))])}function W7(c,a,e,s){let r;const i=e&&e[s];if(U(c)||M1(c)){r=new Array(c.length);for(let n=0,f=c.length;n<f;n++)r[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){r=new Array(c);for(let n=0;n<c;n++)r[n]=a(n+1,n,void 0,i&&i[n])}else if(t1(c))if(c[Symbol.iterator])r=Array.from(c,(n,f)=>a(n,f,void 0,i&&i[f]));else{const n=Object.keys(c);r=new Array(n.length);for(let f=0,l=n.length;f<l;f++){const t=n[f];r[f]=a(c[t],t,f,i&&i[f])}}else r=[];return e&&(e[s]=r),r}const y6=c=>c?r9(c)?$4(c)||c.proxy:y6(c.parent):null,V3=b1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>y6(c.parent),$root:c=>y6(c.root),$emit:c=>c.emit,$options:c=>H8(c),$forceUpdate:c=>c.f||(c.f=()=>C8(c.update)),$nextTick:c=>c.n||(c.n=k7.bind(c.proxy)),$watch:c=>Ft.bind(c)}),v6=(c,a)=>c!==f1&&!c.__isScriptSetup&&X(c,a),Kt={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const h=n[a];if(h!==void 0)switch(h){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(v6(s,a))return n[a]=1,s[a];if(r!==f1&&X(r,a))return n[a]=2,r[a];if((t=c.propsOptions[0])&&X(t,a))return n[a]=3,i[a];if(e!==f1&&X(e,a))return n[a]=4,e[a];A6&&(n[a]=0)}}const o=V3[a];let C,z;if(o)return a==="$attrs"&&B1(c,"get",a),o(c);if((C=f.__cssModules)&&(C=C[a]))return C;if(e!==f1&&X(e,a))return n[a]=4,e[a];if(z=l.config.globalProperties,X(z,a))return z[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return v6(r,a)?(r[a]=e,!0):s!==f1&&X(s,a)?(s[a]=e,!0):X(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},n){let f;return!!e[n]||c!==f1&&X(c,n)||v6(a,n)||(f=i[0])&&X(f,n)||X(s,n)||X(V3,n)||X(r.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:X(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let A6=!0;function Yt(c){const a=H8(c),e=c.proxy,s=c.ctx;A6=!1,a.beforeCreate&&j5(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:C,mounted:z,beforeUpdate:h,updated:d,activated:L,deactivated:w,beforeDestroy:S,beforeUnmount:F,destroyed:k,unmounted:$,render:G,renderTracked:s1,renderTriggered:m1,errorCaptured:O,serverPrefetch:K,expose:J,inheritAttrs:V1,components:B,directives:n1,filters:S1}=a;if(t&&Xt(t,s,null,c.appContext.config.unwrapInjectedRef),n)for(const r1 in n){const a1=n[r1];W(a1)&&(s[r1]=a1.bind(e))}if(r){const r1=r.call(e,e);t1(r1)&&(c.data=q3(r1))}if(A6=!0,i)for(const r1 in i){const a1=i[r1],$1=W(a1)?a1.bind(e,e):W(a1.get)?a1.get.bind(e,e):Z1,w2=!W(a1)&&W(a1.set)?a1.set.bind(e):Z1,U1=E1({get:$1,set:w2});Object.defineProperty(s,r1,{enumerable:!0,configurable:!0,get:()=>U1.value,set:y1=>U1.value=y1})}if(f)for(const r1 in f)G7(f[r1],s,e,r1);if(l){const r1=W(l)?l.call(e):l;Reflect.ownKeys(r1).forEach(a1=>{z4(a1,r1[a1])})}o&&j5(o,c,"c");function z1(r1,a1){U(a1)?a1.forEach($1=>r1($1.bind(e))):a1&&r1(a1.bind(e))}if(z1(qt,C),z1(q7,z),z1($t,h),z1($7,d),z1(Rt,L),z1(Et,w),z1(Wt,O),z1(It,s1),z1(Ot,m1),z1(U7,F),z1(O7,$),z1(Ut,K),U(J))if(J.length){const r1=c.exposed||(c.exposed={});J.forEach(a1=>{Object.defineProperty(r1,a1,{get:()=>e[a1],set:$1=>e[a1]=$1})})}else c.exposed||(c.exposed={});G&&c.render===Z1&&(c.render=G),V1!=null&&(c.inheritAttrs=V1),B&&(c.components=B),n1&&(c.directives=n1)}function Xt(c,a,e=Z1,s=!1){U(c)&&(c=P6(c));for(const r in c){const i=c[r];let n;t1(i)?"default"in i?n=n2(i.from||r,i.default,!0):n=n2(i.from||r):n=n2(i),w1(n)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:f=>n.value=f}):a[r]=n}}function j5(c,a,e){D1(U(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function G7(c,a,e,s){const r=s.includes(".")?B7(e,s):()=>e[s];if(M1(c)){const i=a[c];W(i)&&v4(r,i)}else if(W(c))v4(r,c.bind(e));else if(t1(c))if(U(c))c.forEach(i=>G7(i,a,e,s));else{const i=W(c.handler)?c.handler.bind(e):a[c.handler];W(i)&&v4(r,i,c)}}function H8(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,f=i.get(a);let l;return f?l=f:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(t=>x4(l,t,n,!0)),x4(l,a,n)),t1(a)&&i.set(a,l),l}function x4(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&x4(c,i,e,!0),r&&r.forEach(n=>x4(c,n,e,!0));for(const n in a)if(!(s&&n==="expose")){const f=Qt[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const Qt={data:K5,props:P2,emits:P2,methods:P2,computed:P2,beforeCreate:k1,created:k1,beforeMount:k1,mounted:k1,beforeUpdate:k1,updated:k1,beforeDestroy:k1,beforeUnmount:k1,destroyed:k1,unmounted:k1,activated:k1,deactivated:k1,errorCaptured:k1,serverPrefetch:k1,components:P2,directives:P2,watch:cm,provide:K5,inject:Jt};function K5(c,a){return a?c?function(){return b1(W(c)?c.call(this,this):c,W(a)?a.call(this,this):a)}:a:c}function Jt(c,a){return P2(P6(c),P6(a))}function P6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function k1(c,a){return c?[...new Set([].concat(c,a))]:a}function P2(c,a){return c?b1(b1(Object.create(null),c),a):a}function cm(c,a){if(!c)return a;if(!a)return c;const e=b1(Object.create(null),c);for(const s in a)e[s]=k1(c[s],a[s]);return e}function am(c,a,e,s=!1){const r={},i={};M4(i,q4,1),c.propsDefaults=Object.create(null),Z7(c,a,r,i);for(const n in c.propsOptions[0])n in r||(r[n]=void 0);e?c.props=s?r:ht(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function em(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:n}}=c,f=Q(r),[l]=c.propsOptions;let t=!1;if((s||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let C=0;C<o.length;C++){let z=o[C];if(B4(c.emitsOptions,z))continue;const h=a[z];if(l)if(X(i,z))h!==i[z]&&(i[z]=h,t=!0);else{const d=e2(z);r[d]=T6(l,f,d,h,c,!1)}else h!==i[z]&&(i[z]=h,t=!0)}}}else{Z7(c,a,r,i)&&(t=!0);let o;for(const C in f)(!a||!X(a,C)&&((o=O2(C))===C||!X(a,o)))&&(l?e&&(e[C]!==void 0||e[o]!==void 0)&&(r[C]=T6(l,f,C,void 0,c,!0)):delete r[C]);if(i!==f)for(const C in i)(!a||!X(a,C))&&(delete i[C],t=!0)}t&&f2(c,"set","$attrs")}function Z7(c,a,e,s){const[r,i]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(m4(l))continue;const t=a[l];let o;r&&X(r,o=e2(l))?!i||!i.includes(o)?e[o]=t:(f||(f={}))[o]=t:B4(c.emitsOptions,l)||(!(l in s)||t!==s[l])&&(s[l]=t,n=!0)}if(i){const l=Q(e),t=f||f1;for(let o=0;o<i.length;o++){const C=i[o];e[C]=T6(r,l,C,t[C],c,!X(t,C))}}return n}function T6(c,a,e,s,r,i){const n=c[e];if(n!=null){const f=X(n,"default");if(f&&s===void 0){const l=n.default;if(n.type!==Function&&W(l)){const{propsDefaults:t}=r;e in t?s=t[e]:(n3(r),s=t[e]=l.call(null,a),q2())}else s=l}n[0]&&(i&&!f?s=!1:n[1]&&(s===""||s===O2(e))&&(s=!0))}return s}function j7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,n={},f=[];let l=!1;if(!W(c)){const o=C=>{l=!0;const[z,h]=j7(C,a,!0);b1(n,z),h&&f.push(...h)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!i&&!l)return t1(c)&&s.set(c,Q2),Q2;if(U(i))for(let o=0;o<i.length;o++){const C=e2(i[o]);Y5(C)&&(n[C]=f1)}else if(i)for(const o in i){const C=e2(o);if(Y5(C)){const z=i[o],h=n[C]=U(z)||W(z)?{type:z}:Object.assign({},z);if(h){const d=J5(Boolean,h.type),L=J5(String,h.type);h[0]=d>-1,h[1]=L<0||d<L,(d>-1||X(h,"default"))&&f.push(C)}}}const t=[n,f];return t1(c)&&s.set(c,t),t}function Y5(c){return c[0]!=="$"}function X5(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function Q5(c,a){return X5(c)===X5(a)}function J5(c,a){return U(a)?a.findIndex(e=>Q5(e,c)):W(a)&&Q5(a,c)?0:-1}const K7=c=>c[0]==="_"||c==="$stable",u8=c=>U(c)?c.map(J1):[J1(c)],sm=(c,a,e)=>{if(a._n)return a;const s=s3((...r)=>u8(a(...r)),e);return s._c=!1,s},Y7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(K7(r))continue;const i=c[r];if(W(i))a[r]=sm(r,i,s);else if(i!=null){const n=u8(i);a[r]=()=>n}}},X7=(c,a)=>{const e=u8(a);c.slots.default=()=>e},rm=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Q(a),M4(a,"_",e)):Y7(a,c.slots={})}else c.slots={},a&&X7(c,a);M4(c.slots,q4,1)},im=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,n=f1;if(s.shapeFlag&32){const f=a._;f?e&&f===1?i=!1:(b1(r,a),!e&&f===1&&delete r._):(i=!a.$stable,Y7(a,r)),n=a}else a&&(X7(c,a),n={default:1});if(i)for(const f in r)!K7(f)&&!(f in n)&&delete r[f]};function Q7(){return{app:null,config:{isNativeTag:Bo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nm=0;function fm(c,a){return function(s,r=null){W(s)||(s=Object.assign({},s)),r!=null&&!t1(r)&&(r=null);const i=Q7(),n=new Set;let f=!1;const l=i.app={_uid:nm++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:wm,get config(){return i.config},set config(t){},use(t,...o){return n.has(t)||(t&&W(t.install)?(n.add(t),t.install(l,...o)):W(t)&&(n.add(t),t(l,...o))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,o){return o?(i.components[t]=o,l):i.components[t]},directive(t,o){return o?(i.directives[t]=o,l):i.directives[t]},mount(t,o,C){if(!f){const z=C1(s,r);return z.appContext=i,o&&a?a(z,t):c(z,t,C),f=!0,l._container=t,t.__vue_app__=l,$4(z.component)||z.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return i.provides[t]=o,l}};return l}}function F6(c,a,e,s,r=!1){if(U(c)){c.forEach((z,h)=>F6(z,a&&(U(a)?a[h]:a),e,s,r));return}if(h4(s)&&!r)return;const i=s.shapeFlag&4?$4(s.component)||s.component.proxy:s.el,n=r?null:i,{i:f,r:l}=c,t=a&&a.r,o=f.refs===f1?f.refs={}:f.refs,C=f.setupState;if(t!=null&&t!==l&&(M1(t)?(o[t]=null,X(C,t)&&(C[t]=null)):w1(t)&&(t.value=null)),W(l))L2(l,f,12,[n,o]);else{const z=M1(l),h=w1(l);if(z||h){const d=()=>{if(c.f){const L=z?X(C,l)?C[l]:o[l]:l.value;r?U(L)&&a8(L,i):U(L)?L.includes(i)||L.push(i):z?(o[l]=[i],X(C,l)&&(C[l]=o[l])):(l.value=[i],c.k&&(o[c.k]=l.value))}else z?(o[l]=n,X(C,l)&&(C[l]=n)):h&&(l.value=n,c.k&&(o[c.k]=n))};n?(d.id=-1,A1(d,e)):d()}}}const A1=Tt;function lm(c){return om(c)}function om(c,a){const e=$o();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:C,nextSibling:z,setScopeId:h=Z1,insertStaticContent:d}=c,L=(m,v,H,u=null,V=null,x=null,A=!1,g=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!F2(m,v)&&(u=y(m),y1(m,V,x,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:M,ref:D,shapeFlag:_}=v;switch(M){case D4:w(m,v,H,u);break;case j1:S(m,v,H,u);break;case H4:m==null&&F(v,H,u,A);break;case P1:B(m,v,H,u,V,x,A,g,N);break;default:_&1?G(m,v,H,u,V,x,A,g,N):_&6?n1(m,v,H,u,V,x,A,g,N):(_&64||_&128)&&M.process(m,v,H,u,V,x,A,g,N,Y)}D!=null&&V&&F6(D,m&&m.ref,x,v||m,!v)},w=(m,v,H,u)=>{if(m==null)s(v.el=f(v.children),H,u);else{const V=v.el=m.el;v.children!==m.children&&t(V,v.children)}},S=(m,v,H,u)=>{m==null?s(v.el=l(v.children||""),H,u):v.el=m.el},F=(m,v,H,u)=>{[m.el,m.anchor]=d(m.children,v,H,u,m.el,m.anchor)},k=({el:m,anchor:v},H,u)=>{let V;for(;m&&m!==v;)V=z(m),s(m,H,u),m=V;s(v,H,u)},$=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=z(m),r(m),m=H;r(v)},G=(m,v,H,u,V,x,A,g,N)=>{A=A||v.type==="svg",m==null?s1(v,H,u,V,x,A,g,N):K(m,v,V,x,A,g,N)},s1=(m,v,H,u,V,x,A,g)=>{let N,M;const{type:D,props:_,shapeFlag:q,transition:I,dirs:j}=m;if(N=m.el=n(m.type,x,_&&_.is,_),q&8?o(N,m.children):q&16&&O(m.children,N,null,u,V,x&&D!=="foreignObject",A,g),j&&k2(m,null,u,"created"),_){for(const e1 in _)e1!=="value"&&!m4(e1)&&i(N,e1,null,_[e1],x,m.children,u,V,P);"value"in _&&i(N,"value",null,_.value),(M=_.onVnodeBeforeMount)&&X1(M,u,m)}m1(N,m,m.scopeId,A,u),j&&k2(m,null,u,"beforeMount");const i1=(!V||V&&!V.pendingBranch)&&I&&!I.persisted;i1&&I.beforeEnter(N),s(N,v,H),((M=_&&_.onVnodeMounted)||i1||j)&&A1(()=>{M&&X1(M,u,m),i1&&I.enter(N),j&&k2(m,null,u,"mounted")},V)},m1=(m,v,H,u,V)=>{if(H&&h(m,H),u)for(let x=0;x<u.length;x++)h(m,u[x]);if(V){let x=V.subTree;if(v===x){const A=V.vnode;m1(m,A,A.scopeId,A.slotScopeIds,V.parent)}}},O=(m,v,H,u,V,x,A,g,N=0)=>{for(let M=N;M<m.length;M++){const D=m[M]=g?V2(m[M]):J1(m[M]);L(null,D,v,H,u,V,x,A,g)}},K=(m,v,H,u,V,x,A)=>{const g=v.el=m.el;let{patchFlag:N,dynamicChildren:M,dirs:D}=v;N|=m.patchFlag&16;const _=m.props||f1,q=v.props||f1;let I;H&&y2(H,!1),(I=q.onVnodeBeforeUpdate)&&X1(I,H,v,m),D&&k2(v,m,H,"beforeUpdate"),H&&y2(H,!0);const j=V&&v.type!=="foreignObject";if(M?J(m.dynamicChildren,M,g,H,u,j,x):A||a1(m,v,g,null,H,u,j,x,!1),N>0){if(N&16)V1(g,v,_,q,H,u,V);else if(N&2&&_.class!==q.class&&i(g,"class",null,q.class,V),N&4&&i(g,"style",_.style,q.style,V),N&8){const i1=v.dynamicProps;for(let e1=0;e1<i1.length;e1++){const p1=i1[e1],O1=_[p1],W2=q[p1];(W2!==O1||p1==="value")&&i(g,p1,O1,W2,V,m.children,H,u,P)}}N&1&&m.children!==v.children&&o(g,v.children)}else!A&&M==null&&V1(g,v,_,q,H,u,V);((I=q.onVnodeUpdated)||D)&&A1(()=>{I&&X1(I,H,v,m),D&&k2(v,m,H,"updated")},u)},J=(m,v,H,u,V,x,A)=>{for(let g=0;g<v.length;g++){const N=m[g],M=v[g],D=N.el&&(N.type===P1||!F2(N,M)||N.shapeFlag&70)?C(N.el):H;L(N,M,D,null,u,V,x,A,!0)}},V1=(m,v,H,u,V,x,A)=>{if(H!==u){if(H!==f1)for(const g in H)!m4(g)&&!(g in u)&&i(m,g,H[g],null,A,v.children,V,x,P);for(const g in u){if(m4(g))continue;const N=u[g],M=H[g];N!==M&&g!=="value"&&i(m,g,M,N,A,v.children,V,x,P)}"value"in u&&i(m,"value",H.value,u.value)}},B=(m,v,H,u,V,x,A,g,N)=>{const M=v.el=m?m.el:f(""),D=v.anchor=m?m.anchor:f("");let{patchFlag:_,dynamicChildren:q,slotScopeIds:I}=v;I&&(g=g?g.concat(I):I),m==null?(s(M,H,u),s(D,H,u),O(v.children,H,D,V,x,A,g,N)):_>0&&_&64&&q&&m.dynamicChildren?(J(m.dynamicChildren,q,H,V,x,A,g),(v.key!=null||V&&v===V.subTree)&&J7(m,v,!0)):a1(m,v,H,D,V,x,A,g,N)},n1=(m,v,H,u,V,x,A,g,N)=>{v.slotScopeIds=g,m==null?v.shapeFlag&512?V.ctx.activate(v,H,u,A,N):S1(v,H,u,V,x,A,N):z2(m,v,N)},S1=(m,v,H,u,V,x,A)=>{const g=m.component=Vm(m,u,V);if(R4(m)&&(g.ctx.renderer=Y),Mm(g),g.asyncDep){if(V&&V.registerDep(g,z1),!m.el){const N=g.subTree=C1(j1);S(null,N,v,H)}return}z1(g,m,v,H,V,x,A)},z2=(m,v,H)=>{const u=v.component=m.component;if(yt(m,v,H))if(u.asyncDep&&!u.asyncResolved){r1(u,v,H);return}else u.next=v,xt(u.update),u.update();else v.el=m.el,u.vnode=v},z1=(m,v,H,u,V,x,A)=>{const g=()=>{if(m.isMounted){let{next:D,bu:_,u:q,parent:I,vnode:j}=m,i1=D,e1;y2(m,!1),D?(D.el=j.el,r1(m,D,A)):D=j,_&&C4(_),(e1=D.props&&D.props.onVnodeBeforeUpdate)&&X1(e1,I,D,j),y2(m,!0);const p1=C6(m),O1=m.subTree;m.subTree=p1,L(O1,p1,C(O1.el),y(O1),m,V,x),D.el=p1.el,i1===null&&At(m,p1.el),q&&A1(q,V),(e1=D.props&&D.props.onVnodeUpdated)&&A1(()=>X1(e1,I,D,j),V)}else{let D;const{el:_,props:q}=v,{bm:I,m:j,parent:i1}=m,e1=h4(v);if(y2(m,!1),I&&C4(I),!e1&&(D=q&&q.onVnodeBeforeMount)&&X1(D,i1,v),y2(m,!0),_&&Z){const p1=()=>{m.subTree=C6(m),Z(_,m.subTree,m,V,null)};e1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&p1()):p1()}else{const p1=m.subTree=C6(m);L(null,p1,H,u,m,V,x),v.el=p1.el}if(j&&A1(j,V),!e1&&(D=q&&q.onVnodeMounted)){const p1=v;A1(()=>X1(D,i1,p1),V)}(v.shapeFlag&256||i1&&h4(i1.vnode)&&i1.vnode.shapeFlag&256)&&m.a&&A1(m.a,V),m.isMounted=!0,v=H=u=null}},N=m.effect=new i8(g,()=>C8(M),m.scope),M=m.update=()=>N.run();M.id=m.uid,y2(m,!0),M()},r1=(m,v,H)=>{v.component=m;const u=m.vnode.props;m.vnode=v,m.next=null,em(m,v.props,u,H),im(m,v.children,H),t3(),I5(),m3()},a1=(m,v,H,u,V,x,A,g,N=!1)=>{const M=m&&m.children,D=m?m.shapeFlag:0,_=v.children,{patchFlag:q,shapeFlag:I}=v;if(q>0){if(q&128){w2(M,_,H,u,V,x,A,g,N);return}else if(q&256){$1(M,_,H,u,V,x,A,g,N);return}}I&8?(D&16&&P(M,V,x),_!==M&&o(H,_)):D&16?I&16?w2(M,_,H,u,V,x,A,g,N):P(M,V,x,!0):(D&8&&o(H,""),I&16&&O(_,H,u,V,x,A,g,N))},$1=(m,v,H,u,V,x,A,g,N)=>{m=m||Q2,v=v||Q2;const M=m.length,D=v.length,_=Math.min(M,D);let q;for(q=0;q<_;q++){const I=v[q]=N?V2(v[q]):J1(v[q]);L(m[q],I,H,null,V,x,A,g,N)}M>D?P(m,V,x,!0,!1,_):O(v,H,u,V,x,A,g,N,_)},w2=(m,v,H,u,V,x,A,g,N)=>{let M=0;const D=v.length;let _=m.length-1,q=D-1;for(;M<=_&&M<=q;){const I=m[M],j=v[M]=N?V2(v[M]):J1(v[M]);if(F2(I,j))L(I,j,H,null,V,x,A,g,N);else break;M++}for(;M<=_&&M<=q;){const I=m[_],j=v[q]=N?V2(v[q]):J1(v[q]);if(F2(I,j))L(I,j,H,null,V,x,A,g,N);else break;_--,q--}if(M>_){if(M<=q){const I=q+1,j=I<D?v[I].el:u;for(;M<=q;)L(null,v[M]=N?V2(v[M]):J1(v[M]),H,j,V,x,A,g,N),M++}}else if(M>q)for(;M<=_;)y1(m[M],V,x,!0),M++;else{const I=M,j=M,i1=new Map;for(M=j;M<=q;M++){const T1=v[M]=N?V2(v[M]):J1(v[M]);T1.key!=null&&i1.set(T1.key,M)}let e1,p1=0;const O1=q-j+1;let W2=!1,T5=0;const v3=new Array(O1);for(M=0;M<O1;M++)v3[M]=0;for(M=I;M<=_;M++){const T1=m[M];if(p1>=O1){y1(T1,V,x,!0);continue}let Y1;if(T1.key!=null)Y1=i1.get(T1.key);else for(e1=j;e1<=q;e1++)if(v3[e1-j]===0&&F2(T1,v[e1])){Y1=e1;break}Y1===void 0?y1(T1,V,x,!0):(v3[Y1-j]=M+1,Y1>=T5?T5=Y1:W2=!0,L(T1,v[Y1],H,null,V,x,A,g,N),p1++)}const F5=W2?tm(v3):Q2;for(e1=F5.length-1,M=O1-1;M>=0;M--){const T1=j+M,Y1=v[T1],B5=T1+1<D?v[T1+1].el:u;v3[M]===0?L(null,Y1,H,B5,V,x,A,g,N):W2&&(e1<0||M!==F5[e1]?U1(Y1,H,B5,2):e1--)}}},U1=(m,v,H,u,V=null)=>{const{el:x,type:A,transition:g,children:N,shapeFlag:M}=m;if(M&6){U1(m.component.subTree,v,H,u);return}if(M&128){m.suspense.move(v,H,u);return}if(M&64){A.move(m,v,H,Y);return}if(A===P1){s(x,v,H);for(let _=0;_<N.length;_++)U1(N[_],v,H,u);s(m.anchor,v,H);return}if(A===H4){k(m,v,H);return}if(u!==2&&M&1&&g)if(u===0)g.beforeEnter(x),s(x,v,H),A1(()=>g.enter(x),V);else{const{leave:_,delayLeave:q,afterLeave:I}=g,j=()=>s(x,v,H),i1=()=>{_(x,()=>{j(),I&&I()})};q?q(x,j,i1):i1()}else s(x,v,H)},y1=(m,v,H,u=!1,V=!1)=>{const{type:x,props:A,ref:g,children:N,dynamicChildren:M,shapeFlag:D,patchFlag:_,dirs:q}=m;if(g!=null&&F6(g,null,H,m,!0),D&256){v.ctx.deactivate(m);return}const I=D&1&&q,j=!h4(m);let i1;if(j&&(i1=A&&A.onVnodeBeforeUnmount)&&X1(i1,v,m),D&6)p(m.component,H,u);else{if(D&128){m.suspense.unmount(H,u);return}I&&k2(m,null,v,"beforeUnmount"),D&64?m.type.remove(m,v,H,V,Y,u):M&&(x!==P1||_>0&&_&64)?P(M,v,H,!1,!0):(x===P1&&_&384||!V&&D&16)&&P(N,v,H),u&&I2(m)}(j&&(i1=A&&A.onVnodeUnmounted)||I)&&A1(()=>{i1&&X1(i1,v,m),I&&k2(m,null,v,"unmounted")},H)},I2=m=>{const{type:v,el:H,anchor:u,transition:V}=m;if(v===P1){K3(H,u);return}if(v===H4){$(m);return}const x=()=>{r(H),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(m.shapeFlag&1&&V&&!V.persisted){const{leave:A,delayLeave:g}=V,N=()=>A(H,x);g?g(m.el,x,N):N()}else x()},K3=(m,v)=>{let H;for(;m!==v;)H=z(m),r(m),m=H;r(v)},p=(m,v,H)=>{const{bum:u,scope:V,update:x,subTree:A,um:g}=m;u&&C4(u),V.stop(),x&&(x.active=!1,y1(A,m,v,H)),g&&A1(g,v),A1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},P=(m,v,H,u=!1,V=!1,x=0)=>{for(let A=x;A<m.length;A++)y1(m[A],v,H,u,V)},y=m=>m.shapeFlag&6?y(m.component.subTree):m.shapeFlag&128?m.suspense.next():z(m.anchor||m.el),E=(m,v,H)=>{m==null?v._vnode&&y1(v._vnode,null,null,!0):L(v._vnode||null,m,v,null,null,null,H),I5(),A7(),v._vnode=m},Y={p:L,um:y1,m:U1,r:I2,mt:S1,mc:O,pc:a1,pbc:J,n:y,o:c};let v1,Z;return a&&([v1,Z]=a(Y)),{render:E,hydrate:v1,createApp:fm(E,v1)}}function y2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function J7(c,a,e=!1){const s=c.children,r=a.children;if(U(s)&&U(r))for(let i=0;i<s.length;i++){const n=s[i];let f=r[i];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[i]=V2(r[i]),f.el=n.el),e||J7(n,f)),f.type===D4&&(f.el=n.el)}}function tm(c){const a=c.slice(),e=[0];let s,r,i,n,f;const l=c.length;for(s=0;s<l;s++){const t=c[s];if(t!==0){if(r=e[e.length-1],c[r]<t){a[s]=r,e.push(s);continue}for(i=0,n=e.length-1;i<n;)f=i+n>>1,c[e[f]]<t?i=f+1:n=f;t<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const mm=c=>c.__isTeleport,P1=Symbol(void 0),D4=Symbol(void 0),j1=Symbol(void 0),H4=Symbol(void 0),M3=[];let W1=null;function h1(c=!1){M3.push(W1=c?null:[])}function Cm(){M3.pop(),W1=M3[M3.length-1]||null}let P3=1;function c0(c){P3+=c}function c9(c){return c.dynamicChildren=P3>0?W1||Q2:null,Cm(),P3>0&&W1&&W1.push(c),c}function u1(c,a,e,s,r,i){return c9(b(c,a,e,s,r,i,!0))}function zm(c,a,e,s,r){return c9(C1(c,a,e,s,r,!0))}function B6(c){return c?c.__v_isVNode===!0:!1}function F2(c,a){return c.type===a.type&&c.key===a.key}const q4="__vInternal",a9=({key:c})=>c??null,u4=({ref:c,ref_key:a,ref_for:e})=>c!=null?M1(c)||w1(c)||W(c)?{i:F1,r:c,k:a,f:!!e}:c:null;function b(c,a=null,e=null,s=0,r=null,i=c===P1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&a9(a),ref:a&&u4(a),scopeId:_4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:F1};return f?(p8(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=M1(e)?8:16),P3>0&&!n&&W1&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&W1.push(l),l}const C1=vm;function vm(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===Zt)&&(c=j1),B6(c)){const f=x2(c,a,!0);return e&&p8(f,e),P3>0&&!i&&W1&&(f.shapeFlag&6?W1[W1.indexOf(c)]=f:W1.push(f)),f.patchFlag|=-2,f}if(bm(c)&&(c=c.__vccOpts),a){a=hm(a);let{class:f,style:l}=a;f&&!M1(f)&&(a.class=J6(f)),t1(l)&&(d7(l)&&!U(l)&&(l=b1({},l)),a.style=Q6(l))}const n=M1(c)?1:Pt(c)?128:mm(c)?64:t1(c)?4:W(c)?2:0;return b(c,a,e,s,r,n,i,!0)}function hm(c){return c?d7(c)||q4 in c?b1({},c):c:null}function x2(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:n}=c,f=a?Hm(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&a9(f),ref:a&&a.ref?e&&r?U(r)?r.concat(u4(a)):[r,u4(a)]:u4(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==P1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&x2(c.ssContent),ssFallback:c.ssFallback&&x2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx}}function g1(c=" ",a=0){return C1(D4,null,c,a)}function e9(c,a){const e=C1(H4,null,c);return e.staticCount=a,e}function Z2(c="",a=!1){return a?(h1(),zm(j1,null,c)):C1(j1,null,c)}function J1(c){return c==null||typeof c=="boolean"?C1(j1):U(c)?C1(P1,null,c.slice()):typeof c=="object"?V2(c):C1(D4,null,String(c))}function V2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:x2(c)}function p8(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(U(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),p8(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(q4 in a)?a._ctx=F1:r===3&&F1&&(F1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else W(a)?(a={default:a,_ctx:F1},e=32):(a=String(a),s&64?(e=16,a=[g1(a)]):e=8);c.children=a,c.shapeFlag|=e}function Hm(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=J6([a.class,s.class]));else if(r==="style")a.style=Q6([a.style,s.style]);else if(k4(r)){const i=a[r],n=s[r];n&&i!==n&&!(U(i)&&i.includes(n))&&(a[r]=i?[].concat(i,n):n)}else r!==""&&(a[r]=s[r])}return a}function X1(c,a,e,s=null){D1(c,a,7,[e,s])}const um=Q7();let pm=0;function Vm(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||um,i={uid:pm++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Uo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:j7(s,r),emitsOptions:T7(s,r),emit:null,emitted:null,propsDefaults:f1,inheritAttrs:s.inheritAttrs,ctx:f1,data:f1,props:f1,attrs:f1,slots:f1,refs:f1,setupState:f1,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=Nt.bind(null,i),c.ce&&c.ce(i),i}let x1=null;const s9=()=>x1||F1,n3=c=>{x1=c,c.scope.on()},q2=()=>{x1&&x1.scope.off(),x1=null};function r9(c){return c.vnode.shapeFlag&4}let T3=!1;function Mm(c,a=!1){T3=a;const{props:e,children:s}=c.vnode,r=r9(c);am(c,e,r,a),rm(c,s);const i=r?dm(c,a):void 0;return T3=!1,i}function dm(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=L7(new Proxy(c.ctx,Kt));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?gm(c):null;n3(c),t3();const i=L2(s,c,0,[c.props,r]);if(m3(),q2(),f7(i)){if(i.then(q2,q2),a)return i.then(n=>{a0(c,n,a)}).catch(n=>{F4(n,c,0)});c.asyncDep=i}else a0(c,i,a)}else i9(c,a)}function a0(c,a,e){W(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:t1(a)&&(c.setupState=S7(a)),i9(c,e)}let e0;function i9(c,a,e){const s=c.type;if(!c.render){if(!a&&e0&&!s.render){const r=s.template||H8(c).template;if(r){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=s,t=b1(b1({isCustomElement:i,delimiters:f},n),l);s.render=e0(r,t)}}c.render=s.render||Z1}n3(c),t3(),Yt(c),m3(),q2()}function Lm(c){return new Proxy(c.attrs,{get(a,e){return B1(c,"get","$attrs"),a[e]}})}function gm(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=Lm(c))},slots:c.slots,emit:c.emit,expose:a}}function $4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(S7(L7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in V3)return V3[e](c)},has(a,e){return e in a||e in V3}}))}function xm(c,a=!0){return W(c)?c.displayName||c.name:c.name||a&&c.__name}function bm(c){return W(c)&&"__vccOpts"in c}const E1=(c,a)=>dt(c,a,T3);function n9(c,a,e){const s=arguments.length;return s===2?t1(a)&&!U(a)?B6(a)?C1(c,null,[a]):C1(c,a):C1(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&B6(e)&&(e=[e]),C1(c,a,e))}const Sm=Symbol(""),Nm=()=>n2(Sm),wm="3.2.45",km="http://www.w3.org/2000/svg",B2=typeof document<"u"?document:null,s0=B2&&B2.createElement("template"),ym={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?B2.createElementNS(km,c):B2.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>B2.createTextNode(c),createComment:c=>B2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>B2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const n=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{s0.innerHTML=s?`<svg>${c}</svg>`:c;const f=s0.content;if(s){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function Am(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function Pm(c,a,e){const s=c.style,r=M1(e);if(e&&!r){for(const i in e)_6(s,i,e[i]);if(a&&!M1(a))for(const i in a)e[i]==null&&_6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const r0=/\s*!important$/;function _6(c,a,e){if(U(e))e.forEach(s=>_6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=Tm(c,a);r0.test(e)?c.setProperty(O2(s),e.replace(r0,""),"important"):c[s]=e}}const i0=["Webkit","Moz","ms"],h6={};function Tm(c,a){const e=h6[a];if(e)return e;let s=e2(a);if(s!=="filter"&&s in c)return h6[a]=s;s=P4(s);for(let r=0;r<i0.length;r++){const i=i0[r]+s;if(i in c)return h6[a]=i}return a}const n0="http://www.w3.org/1999/xlink";function Fm(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(n0,a.slice(6,a.length)):c.setAttributeNS(n0,a,e);else{const i=Fo(a);e==null||i&&!r7(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function Bm(c,a,e,s,r,i,n){if(a==="innerHTML"||a==="textContent"){s&&n(s,r,i),c[a]=e??"";return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const l=e??"";(c.value!==l||c.tagName==="OPTION")&&(c.value=l),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=r7(e):e==null&&l==="string"?(e="",f=!0):l==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function j2(c,a,e,s){c.addEventListener(a,e,s)}function _m(c,a,e,s){c.removeEventListener(a,e,s)}function Rm(c,a,e,s,r=null){const i=c._vei||(c._vei={}),n=i[a];if(s&&n)n.value=s;else{const[f,l]=Em(a);if(s){const t=i[a]=$m(s,r);j2(c,f,t,l)}else n&&(_m(c,f,n,l),i[a]=void 0)}}const f0=/(?:Once|Passive|Capture)$/;function Em(c){let a;if(f0.test(c)){a={};let s;for(;s=c.match(f0);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):O2(c.slice(2)),a]}let H6=0;const Dm=Promise.resolve(),qm=()=>H6||(Dm.then(()=>H6=0),H6=Date.now());function $m(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;D1(Um(s,e.value),a,5,[s])};return e.value=c,e.attached=qm(),e}function Um(c,a){if(U(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const l0=/^on[a-z]/,Om=(c,a,e,s,r=!1,i,n,f,l)=>{a==="class"?Am(c,s,r):a==="style"?Pm(c,e,s):k4(a)?c8(a)||Rm(c,a,e,s,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Im(c,a,s,r))?Bm(c,a,s,i,n,f,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),Fm(c,a,s,r))};function Im(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&l0.test(a)&&W(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||l0.test(a)&&M1(e)?!1:a in c}const h2="transition",h3="animation",f9={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wm=b1({},_t.props,f9),A2=(c,a=[])=>{U(c)?c.forEach(e=>e(...a)):c&&c(...a)},o0=c=>c?U(c)?c.some(a=>a.length>1):c.length>1:!1;function Gm(c){const a={};for(const B in c)B in f9||(a[B]=c[B]);if(c.css===!1)return a;const{name:e="v",type:s,duration:r,enterFromClass:i=`${e}-enter-from`,enterActiveClass:n=`${e}-enter-active`,enterToClass:f=`${e}-enter-to`,appearFromClass:l=i,appearActiveClass:t=n,appearToClass:o=f,leaveFromClass:C=`${e}-leave-from`,leaveActiveClass:z=`${e}-leave-active`,leaveToClass:h=`${e}-leave-to`}=c,d=Zm(r),L=d&&d[0],w=d&&d[1],{onBeforeEnter:S,onEnter:F,onEnterCancelled:k,onLeave:$,onLeaveCancelled:G,onBeforeAppear:s1=S,onAppear:m1=F,onAppearCancelled:O=k}=a,K=(B,n1,S1)=>{p2(B,n1?o:f),p2(B,n1?t:n),S1&&S1()},J=(B,n1)=>{B._isLeaving=!1,p2(B,C),p2(B,h),p2(B,z),n1&&n1()},V1=B=>(n1,S1)=>{const z2=B?m1:F,z1=()=>K(n1,B,S1);A2(z2,[n1,z1]),t0(()=>{p2(n1,B?l:i),r2(n1,B?o:f),o0(z2)||m0(n1,s,L,z1)})};return b1(a,{onBeforeEnter(B){A2(S,[B]),r2(B,i),r2(B,n)},onBeforeAppear(B){A2(s1,[B]),r2(B,l),r2(B,t)},onEnter:V1(!1),onAppear:V1(!0),onLeave(B,n1){B._isLeaving=!0;const S1=()=>J(B,n1);r2(B,C),o9(),r2(B,z),t0(()=>{B._isLeaving&&(p2(B,C),r2(B,h),o0($)||m0(B,s,w,S1))}),A2($,[B,S1])},onEnterCancelled(B){K(B,!1),A2(k,[B])},onAppearCancelled(B){K(B,!0),A2(O,[B])},onLeaveCancelled(B){J(B),A2(G,[B])}})}function Zm(c){if(c==null)return null;if(t1(c))return[u6(c.enter),u6(c.leave)];{const a=u6(c);return[a,a]}}function u6(c){return S3(c)}function r2(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c._vtc||(c._vtc=new Set)).add(a)}function p2(c,a){a.split(/\s+/).forEach(s=>s&&c.classList.remove(s));const{_vtc:e}=c;e&&(e.delete(a),e.size||(c._vtc=void 0))}function t0(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let jm=0;function m0(c,a,e,s){const r=c._endId=++jm,i=()=>{r===c._endId&&s()};if(e)return setTimeout(i,e);const{type:n,timeout:f,propCount:l}=l9(c,a);if(!n)return s();const t=n+"end";let o=0;const C=()=>{c.removeEventListener(t,z),i()},z=h=>{h.target===c&&++o>=l&&C()};setTimeout(()=>{o<l&&C()},f+1),c.addEventListener(t,z)}function l9(c,a){const e=window.getComputedStyle(c),s=d=>(e[d]||"").split(", "),r=s(`${h2}Delay`),i=s(`${h2}Duration`),n=C0(r,i),f=s(`${h3}Delay`),l=s(`${h3}Duration`),t=C0(f,l);let o=null,C=0,z=0;a===h2?n>0&&(o=h2,C=n,z=i.length):a===h3?t>0&&(o=h3,C=t,z=l.length):(C=Math.max(n,t),o=C>0?n>t?h2:h3:null,z=o?o===h2?i.length:l.length:0);const h=o===h2&&/\b(transform|all)(,|$)/.test(s(`${h2}Property`).toString());return{type:o,timeout:C,propCount:z,hasTransform:h}}function C0(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,s)=>z0(e)+z0(c[s])))}function z0(c){return Number(c.slice(0,-1).replace(",","."))*1e3}function o9(){return document.body.offsetHeight}const t9=new WeakMap,m9=new WeakMap,Km={name:"TransitionGroup",props:b1({},Wm,{tag:String,moveClass:String}),setup(c,{slots:a}){const e=s9(),s=_7();let r,i;return $7(()=>{if(!r.length)return;const n=c.moveClass||`${c.name||"v"}-move`;if(!Jm(r[0].el,e.vnode.el,n))return;r.forEach(Ym),r.forEach(Xm);const f=r.filter(Qm);o9(),f.forEach(l=>{const t=l.el,o=t.style;r2(t,n),o.transform=o.webkitTransform=o.transitionDuration="";const C=t._moveCb=z=>{z&&z.target!==t||(!z||/transform$/.test(z.propertyName))&&(t.removeEventListener("transitionend",C),t._moveCb=null,p2(t,n))};t.addEventListener("transitionend",C)})}),()=>{const n=Q(c),f=Gm(n);let l=n.tag||P1;r=i,i=a.default?h8(a.default()):[];for(let t=0;t<i.length;t++){const o=i[t];o.key!=null&&A3(o,y3(o,f,s,e))}if(r)for(let t=0;t<r.length;t++){const o=r[t];A3(o,y3(o,f,s,e)),t9.set(o,o.el.getBoundingClientRect())}return C1(l,null,i)}}},C9=Km;function Ym(c){const a=c.el;a._moveCb&&a._moveCb(),a._enterCb&&a._enterCb()}function Xm(c){m9.set(c,c.el.getBoundingClientRect())}function Qm(c){const a=t9.get(c),e=m9.get(c),s=a.left-e.left,r=a.top-e.top;if(s||r){const i=c.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",c}}function Jm(c,a,e){const s=c.cloneNode();c._vtc&&c._vtc.forEach(n=>{n.split(/\s+/).forEach(f=>f&&s.classList.remove(f))}),e.split(/\s+/).forEach(n=>n&&s.classList.add(n)),s.style.display="none";const r=a.nodeType===1?a:a.parentNode;r.appendChild(s);const{hasTransform:i}=l9(s);return r.removeChild(s),i}const v0=c=>{const a=c.props["onUpdate:modelValue"]||!1;return U(a)?e=>C4(a,e):a};function cC(c){c.target.composing=!0}function h0(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const aC={created(c,{modifiers:{lazy:a,trim:e,number:s}},r){c._assign=v0(r);const i=s||r.props&&r.props.type==="number";j2(c,a?"change":"input",n=>{if(n.target.composing)return;let f=c.value;e&&(f=f.trim()),i&&(f=S3(f)),c._assign(f)}),e&&j2(c,"change",()=>{c.value=c.value.trim()}),a||(j2(c,"compositionstart",cC),j2(c,"compositionend",h0),j2(c,"change",h0))},mounted(c,{value:a}){c.value=a??""},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:s,number:r}},i){if(c._assign=v0(i),c.composing||document.activeElement===c&&c.type!=="range"&&(e||s&&c.value.trim()===a||(r||c.type==="number")&&S3(c.value)===a))return;const n=a??"";c.value!==n&&(c.value=n)}},eC={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sC=(c,a)=>e=>{if(!("key"in e))return;const s=O2(e.key);if(a.some(r=>r===s||eC[r]===s))return c(e)},rC=b1({patchProp:Om},ym);let H0;function iC(){return H0||(H0=lm(rC))}const nC=(...c)=>{const a=iC().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=fC(s);if(!r)return;const i=a._component;!W(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},a};function fC(c){return M1(c)?document.querySelector(c):c}const C3=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},lC={},oC=c=>(z8("data-v-681fe4b5"),c=c(),v8(),c),tC={class:"footer"},mC=oC(()=>b("div",{class:"content"},[b("p",{class:"title has-text-centered is-7"},"Simple is better than complex!")],-1)),CC=[mC];function zC(c,a){return h1(),u1("footer",tC,CC)}const vC=C3(lC,[["render",zC],["__scopeId","data-v-681fe4b5"]]);const hC={class:"columns is-centered",id:"topRow"},HC=b("i",{class:"fa-solid fa-house"},null,-1),uC=b("i",{class:"fa-solid fa-magnifying-glass"},null,-1),pC=b("i",{class:"fa-solid fa-circle-info"},null,-1),VC={id:"midRow"},MC={id:"footer"},dC={__name:"App",setup(c){return(a,e)=>{const s=g4("router-link"),r=g4("router-view");return h1(),u1(P1,null,[b("div",hC,[b("div",null,[C1(s,{to:{name:"Home"}},{default:s3(()=>[HC]),_:1})]),b("div",null,[C1(s,{to:{name:"Dictionary"}},{default:s3(()=>[uC]),_:1})]),b("div",null,[C1(s,{to:{name:"About"}},{default:s3(()=>[pC]),_:1})])]),b("div",VC,[C1(r)]),b("div",MC,[C1(vC)])],64)}}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const K2=typeof window<"u";function LC(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const c1=Object.assign;function p6(c,a){const e={};for(const s in a){const r=a[s];e[s]=K1(r)?r.map(c):c(r)}return e}const d3=()=>{},K1=Array.isArray,gC=/\/$/,xC=c=>c.replace(gC,"");function V6(c,a,e="/"){let s,r={},i="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(s=a.slice(0,l),i=a.slice(l+1,f>-1?f:a.length),r=c(i)),f>-1&&(s=s||a.slice(0,f),n=a.slice(f,a.length)),s=wC(s??a,e),{fullPath:s+(i&&"?")+i+n,path:s,query:r,hash:n}}function bC(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function u0(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function SC(c,a,e){const s=a.matched.length-1,r=e.matched.length-1;return s>-1&&s===r&&f3(a.matched[s],e.matched[r])&&z9(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function f3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function z9(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!NC(c[e],a[e]))return!1;return!0}function NC(c,a){return K1(c)?p0(c,a):K1(a)?p0(a,c):c===a}function p0(c,a){return K1(a)?c.length===a.length&&c.every((e,s)=>e===a[s]):c.length===1&&c[0]===a}function wC(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),s=c.split("/");let r=e.length-1,i,n;for(i=0;i<s.length;i++)if(n=s[i],n!==".")if(n==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var F3;(function(c){c.pop="pop",c.push="push"})(F3||(F3={}));var L3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(L3||(L3={}));function kC(c){if(!c)if(K2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),xC(c)}const yC=/^[^#]+#/;function AC(c,a){return c.replace(yC,"#")+a}function PC(c,a){const e=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:a.behavior,left:s.left-e.left-(a.left||0),top:s.top-e.top-(a.top||0)}}const U4=()=>({left:window.pageXOffset,top:window.pageYOffset});function TC(c){let a;if("el"in c){const e=c.el,s=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;a=PC(r,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function V0(c,a){return(history.state?history.state.position-a:-1)+c}const R6=new Map;function FC(c,a){R6.set(c,a)}function BC(c){const a=R6.get(c);return R6.delete(c),a}let _C=()=>location.protocol+"//"+location.host;function v9(c,a){const{pathname:e,search:s,hash:r}=a,i=c.indexOf("#");if(i>-1){let f=r.includes(c.slice(i))?c.slice(i).length:1,l=r.slice(f);return l[0]!=="/"&&(l="/"+l),u0(l,"")}return u0(e,c)+s+r}function RC(c,a,e,s){let r=[],i=[],n=null;const f=({state:z})=>{const h=v9(c,location),d=e.value,L=a.value;let w=0;if(z){if(e.value=h,a.value=z,n&&n===d){n=null;return}w=L?z.position-L.position:0}else s(h);r.forEach(S=>{S(e.value,d,{delta:w,type:F3.pop,direction:w?w>0?L3.forward:L3.back:L3.unknown})})};function l(){n=e.value}function t(z){r.push(z);const h=()=>{const d=r.indexOf(z);d>-1&&r.splice(d,1)};return i.push(h),h}function o(){const{history:z}=window;z.state&&z.replaceState(c1({},z.state,{scroll:U4()}),"")}function C(){for(const z of i)z();i=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o),{pauseListeners:l,listen:t,destroy:C}}function M0(c,a,e,s=!1,r=!1){return{back:c,current:a,forward:e,replaced:s,position:window.history.length,scroll:r?U4():null}}function EC(c){const{history:a,location:e}=window,s={value:v9(c,e)},r={value:a.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(l,t,o){const C=c.indexOf("#"),z=C>-1?(e.host&&document.querySelector("base")?c:c.slice(C))+l:_C()+c+l;try{a[o?"replaceState":"pushState"](t,"",z),r.value=t}catch(h){console.error(h),e[o?"replace":"assign"](z)}}function n(l,t){const o=c1({},a.state,M0(r.value.back,l,r.value.forward,!0),t,{position:r.value.position});i(l,o,!0),s.value=l}function f(l,t){const o=c1({},r.value,a.state,{forward:l,scroll:U4()});i(o.current,o,!0);const C=c1({},M0(s.value,l,null),{position:o.position+1},t);i(l,C,!1),s.value=l}return{location:s,state:r,push:f,replace:n}}function DC(c){c=kC(c);const a=EC(c),e=RC(c,a.state,a.location,a.replace);function s(i,n=!0){n||e.pauseListeners(),history.go(i)}const r=c1({location:"",base:c,go:s,createHref:AC.bind(null,c)},a,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function qC(c){return typeof c=="string"||c&&typeof c=="object"}function h9(c){return typeof c=="string"||typeof c=="symbol"}const H2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H9=Symbol("");var d0;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(d0||(d0={}));function l3(c,a){return c1(new Error,{type:c,[H9]:!0},a)}function s2(c,a){return c instanceof Error&&H9 in c&&(a==null||!!(c.type&a))}const L0="[^/]+?",$C={sensitive:!1,strict:!1,start:!0,end:!0},UC=/[.+*?^${}()[\]/\\]/g;function OC(c,a){const e=c1({},$C,a),s=[];let r=e.start?"^":"";const i=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(r+="/");for(let C=0;C<t.length;C++){const z=t[C];let h=40+(e.sensitive?.25:0);if(z.type===0)C||(r+="/"),r+=z.value.replace(UC,"\\$&"),h+=40;else if(z.type===1){const{value:d,repeatable:L,optional:w,regexp:S}=z;i.push({name:d,repeatable:L,optional:w});const F=S||L0;if(F!==L0){h+=10;try{new RegExp(`(${F})`)}catch($){throw new Error(`Invalid custom RegExp for param "${d}" (${F}): `+$.message)}}let k=L?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;C||(k=w&&t.length<2?`(?:/${k})`:"/"+k),w&&(k+="?"),r+=k,h+=20,w&&(h+=-8),L&&(h+=-20),F===".*"&&(h+=-50)}o.push(h)}s.push(o)}if(e.strict&&e.end){const t=s.length-1;s[t][s[t].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const n=new RegExp(r,e.sensitive?"":"i");function f(t){const o=t.match(n),C={};if(!o)return null;for(let z=1;z<o.length;z++){const h=o[z]||"",d=i[z-1];C[d.name]=h&&d.repeatable?h.split("/"):h}return C}function l(t){let o="",C=!1;for(const z of c){(!C||!o.endsWith("/"))&&(o+="/"),C=!1;for(const h of z)if(h.type===0)o+=h.value;else if(h.type===1){const{value:d,repeatable:L,optional:w}=h,S=d in t?t[d]:"";if(K1(S)&&!L)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const F=K1(S)?S.join("/"):S;if(!F)if(w)z.length<2&&(o.endsWith("/")?o=o.slice(0,-1):C=!0);else throw new Error(`Missing required param "${d}"`);o+=F}}return o||"/"}return{re:n,score:s,keys:i,parse:f,stringify:l}}function IC(c,a){let e=0;for(;e<c.length&&e<a.length;){const s=a[e]-c[e];if(s)return s;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function WC(c,a){let e=0;const s=c.score,r=a.score;for(;e<s.length&&e<r.length;){const i=IC(s[e],r[e]);if(i)return i;e++}if(Math.abs(r.length-s.length)===1){if(g0(s))return 1;if(g0(r))return-1}return r.length-s.length}function g0(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const GC={type:0,value:""},ZC=/[a-zA-Z0-9_]/;function jC(c){if(!c)return[[]];if(c==="/")return[[GC]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(h){throw new Error(`ERR (${e})/"${t}": ${h}`)}let e=0,s=e;const r=[];let i;function n(){i&&r.push(i),i=[]}let f=0,l,t="",o="";function C(){t&&(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function z(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:l==="/"?(t&&C(),n()):l===":"?(C(),e=1):z();break;case 4:z(),e=s;break;case 1:l==="("?e=2:ZC.test(l)?z():(C(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:C(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),C(),n(),r}function KC(c,a,e){const s=OC(jC(c.path),e),r=c1(s,{record:c,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function YC(c,a){const e=[],s=new Map;a=S0({strict:!1,end:!0,sensitive:!1},a);function r(o){return s.get(o)}function i(o,C,z){const h=!z,d=XC(o);d.aliasOf=z&&z.record;const L=S0(a,o),w=[d];if("alias"in o){const k=typeof o.alias=="string"?[o.alias]:o.alias;for(const $ of k)w.push(c1({},d,{components:z?z.record.components:d.components,path:$,aliasOf:z?z.record:d}))}let S,F;for(const k of w){const{path:$}=k;if(C&&$[0]!=="/"){const G=C.record.path,s1=G[G.length-1]==="/"?"":"/";k.path=C.record.path+($&&s1+$)}if(S=KC(k,C,L),z?z.alias.push(S):(F=F||S,F!==S&&F.alias.push(S),h&&o.name&&!b0(S)&&n(o.name)),d.children){const G=d.children;for(let s1=0;s1<G.length;s1++)i(G[s1],S,z&&z.children[s1])}z=z||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return F?()=>{n(F)}:d3}function n(o){if(h9(o)){const C=s.get(o);C&&(s.delete(o),e.splice(e.indexOf(C),1),C.children.forEach(n),C.alias.forEach(n))}else{const C=e.indexOf(o);C>-1&&(e.splice(C,1),o.record.name&&s.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let C=0;for(;C<e.length&&WC(o,e[C])>=0&&(o.record.path!==e[C].record.path||!u9(o,e[C]));)C++;e.splice(C,0,o),o.record.name&&!b0(o)&&s.set(o.record.name,o)}function t(o,C){let z,h={},d,L;if("name"in o&&o.name){if(z=s.get(o.name),!z)throw l3(1,{location:o});L=z.record.name,h=c1(x0(C.params,z.keys.filter(F=>!F.optional).map(F=>F.name)),o.params&&x0(o.params,z.keys.map(F=>F.name))),d=z.stringify(h)}else if("path"in o)d=o.path,z=e.find(F=>F.re.test(d)),z&&(h=z.parse(d),L=z.record.name);else{if(z=C.name?s.get(C.name):e.find(F=>F.re.test(C.path)),!z)throw l3(1,{location:o,currentLocation:C});L=z.record.name,h=c1({},C.params,o.params),d=z.stringify(h)}const w=[];let S=z;for(;S;)w.unshift(S.record),S=S.parent;return{name:L,path:d,params:h,matched:w,meta:JC(w)}}return c.forEach(o=>i(o)),{addRoute:i,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:r}}function x0(c,a){const e={};for(const s of a)s in c&&(e[s]=c[s]);return e}function XC(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:QC(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function QC(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const s in c.components)a[s]=typeof e=="boolean"?e:e[s];return a}function b0(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function JC(c){return c.reduce((a,e)=>c1(a,e.meta),{})}function S0(c,a){const e={};for(const s in c)e[s]=s in a?a[s]:c[s];return e}function u9(c,a){return a.children.some(e=>e===c||u9(c,e))}const p9=/#/g,cz=/&/g,az=/\//g,ez=/=/g,sz=/\?/g,V9=/\+/g,rz=/%5B/g,iz=/%5D/g,M9=/%5E/g,nz=/%60/g,d9=/%7B/g,fz=/%7C/g,L9=/%7D/g,lz=/%20/g;function V8(c){return encodeURI(""+c).replace(fz,"|").replace(rz,"[").replace(iz,"]")}function oz(c){return V8(c).replace(d9,"{").replace(L9,"}").replace(M9,"^")}function E6(c){return V8(c).replace(V9,"%2B").replace(lz,"+").replace(p9,"%23").replace(cz,"%26").replace(nz,"`").replace(d9,"{").replace(L9,"}").replace(M9,"^")}function tz(c){return E6(c).replace(ez,"%3D")}function mz(c){return V8(c).replace(p9,"%23").replace(sz,"%3F")}function Cz(c){return c==null?"":mz(c).replace(az,"%2F")}function b4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function zz(c){const a={};if(c===""||c==="?")return a;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(V9," "),n=i.indexOf("="),f=b4(n<0?i:i.slice(0,n)),l=n<0?null:b4(i.slice(n+1));if(f in a){let t=a[f];K1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function N0(c){let a="";for(let e in c){const s=c[e];if(e=tz(e),s==null){s!==void 0&&(a+=(a.length?"&":"")+e);continue}(K1(s)?s.map(i=>i&&E6(i)):[s&&E6(s)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function vz(c){const a={};for(const e in c){const s=c[e];s!==void 0&&(a[e]=K1(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}const hz=Symbol(""),w0=Symbol(""),M8=Symbol(""),g9=Symbol(""),D6=Symbol("");function H3(){let c=[];function a(s){return c.push(s),()=>{const r=c.indexOf(s);r>-1&&c.splice(r,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function M2(c,a,e,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((n,f)=>{const l=C=>{C===!1?f(l3(4,{from:e,to:a})):C instanceof Error?f(C):qC(C)?f(l3(2,{from:a,to:C})):(i&&s.enterCallbacks[r]===i&&typeof C=="function"&&i.push(C),n())},t=c.call(s&&s.instances[r],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(C=>f(C))})}function M6(c,a,e,s){const r=[];for(const i of c)for(const n in i.components){let f=i.components[n];if(!(a!=="beforeRouteEnter"&&!i.instances[n]))if(Hz(f)){const t=(f.__vccOpts||f)[a];t&&r.push(M2(t,e,s,i,n))}else{let l=f();r.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${i.path}"`));const o=LC(t)?t.default:t;i.components[n]=o;const z=(o.__vccOpts||o)[a];return z&&M2(z,e,s,i,n)()}))}}return r}function Hz(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function k0(c){const a=n2(M8),e=n2(g9),s=E1(()=>a.resolve(a3(c.to))),r=E1(()=>{const{matched:l}=s.value,{length:t}=l,o=l[t-1],C=e.matched;if(!o||!C.length)return-1;const z=C.findIndex(f3.bind(null,o));if(z>-1)return z;const h=y0(l[t-2]);return t>1&&y0(o)===h&&C[C.length-1].path!==h?C.findIndex(f3.bind(null,l[t-2])):z}),i=E1(()=>r.value>-1&&Mz(e.params,s.value.params)),n=E1(()=>r.value>-1&&r.value===e.matched.length-1&&z9(e.params,s.value.params));function f(l={}){return Vz(l)?a[a3(c.replace)?"replace":"push"](a3(c.to)).catch(d3):Promise.resolve()}return{route:s,href:E1(()=>s.value.href),isActive:i,isExactActive:n,navigate:f}}const uz=E7({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:k0,setup(c,{slots:a}){const e=q3(k0(c)),{options:s}=n2(M8),r=E1(()=>({[A0(c.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[A0(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:n9("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},i)}}}),pz=uz;function Vz(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Mz(c,a){for(const e in a){const s=a[e],r=c[e];if(typeof s=="string"){if(s!==r)return!1}else if(!K1(r)||r.length!==s.length||s.some((i,n)=>i!==r[n]))return!1}return!0}function y0(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const A0=(c,a,e)=>c??a??e,dz=E7({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const s=n2(D6),r=E1(()=>c.route||s.value),i=n2(w0,0),n=E1(()=>{let t=a3(i);const{matched:o}=r.value;let C;for(;(C=o[t])&&!C.components;)t++;return t}),f=E1(()=>r.value.matched[n.value]);z4(w0,E1(()=>n.value+1)),z4(hz,f),z4(D6,r);const l=Ht();return v4(()=>[l.value,f.value,c.name],([t,o,C],[z,h,d])=>{o&&(o.instances[C]=t,h&&h!==o&&t&&t===z&&(o.leaveGuards.size||(o.leaveGuards=h.leaveGuards),o.updateGuards.size||(o.updateGuards=h.updateGuards))),t&&o&&(!h||!f3(o,h)||!z)&&(o.enterCallbacks[C]||[]).forEach(L=>L(t))},{flush:"post"}),()=>{const t=r.value,o=c.name,C=f.value,z=C&&C.components[o];if(!z)return P0(e.default,{Component:z,route:t});const h=C.props[o],d=h?h===!0?t.params:typeof h=="function"?h(t):h:null,w=n9(z,c1({},d,a,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(C.instances[o]=null)},ref:l}));return P0(e.default,{Component:w,route:t})||w}}});function P0(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const Lz=dz;function gz(c){const a=YC(c.routes,c),e=c.parseQuery||zz,s=c.stringifyQuery||N0,r=c.history,i=H3(),n=H3(),f=H3(),l=ut(H2);let t=H2;K2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=p6.bind(null,p=>""+p),C=p6.bind(null,Cz),z=p6.bind(null,b4);function h(p,P){let y,E;return h9(p)?(y=a.getRecordMatcher(p),E=P):E=p,a.addRoute(E,y)}function d(p){const P=a.getRecordMatcher(p);P&&a.removeRoute(P)}function L(){return a.getRoutes().map(p=>p.record)}function w(p){return!!a.getRecordMatcher(p)}function S(p,P){if(P=c1({},P||l.value),typeof p=="string"){const m=V6(e,p,P.path),v=a.resolve({path:m.path},P),H=r.createHref(m.fullPath);return c1(m,v,{params:z(v.params),hash:b4(m.hash),redirectedFrom:void 0,href:H})}let y;if("path"in p)y=c1({},p,{path:V6(e,p.path,P.path).path});else{const m=c1({},p.params);for(const v in m)m[v]==null&&delete m[v];y=c1({},p,{params:C(p.params)}),P.params=C(P.params)}const E=a.resolve(y,P),Y=p.hash||"";E.params=o(z(E.params));const v1=bC(s,c1({},p,{hash:oz(Y),path:E.path})),Z=r.createHref(v1);return c1({fullPath:v1,hash:Y,query:s===N0?vz(p.query):p.query||{}},E,{redirectedFrom:void 0,href:Z})}function F(p){return typeof p=="string"?V6(e,p,l.value.path):c1({},p)}function k(p,P){if(t!==p)return l3(8,{from:P,to:p})}function $(p){return m1(p)}function G(p){return $(c1(F(p),{replace:!0}))}function s1(p){const P=p.matched[p.matched.length-1];if(P&&P.redirect){const{redirect:y}=P;let E=typeof y=="function"?y(p):y;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=F(E):{path:E},E.params={}),c1({query:p.query,hash:p.hash,params:"path"in E?{}:p.params},E)}}function m1(p,P){const y=t=S(p),E=l.value,Y=p.state,v1=p.force,Z=p.replace===!0,m=s1(y);if(m)return m1(c1(F(m),{state:typeof m=="object"?c1({},Y,m.state):Y,force:v1,replace:Z}),P||y);const v=y;v.redirectedFrom=P;let H;return!v1&&SC(s,E,y)&&(H=l3(16,{to:v,from:E}),w2(E,E,!0,!1)),(H?Promise.resolve(H):K(v,E)).catch(u=>s2(u)?s2(u,2)?u:$1(u):r1(u,v,E)).then(u=>{if(u){if(s2(u,2))return m1(c1({replace:Z},F(u.to),{state:typeof u.to=="object"?c1({},Y,u.to.state):Y,force:v1}),P||v)}else u=V1(v,E,!0,Z,Y);return J(v,E,u),u})}function O(p,P){const y=k(p,P);return y?Promise.reject(y):Promise.resolve()}function K(p,P){let y;const[E,Y,v1]=xz(p,P);y=M6(E.reverse(),"beforeRouteLeave",p,P);for(const m of E)m.leaveGuards.forEach(v=>{y.push(M2(v,p,P))});const Z=O.bind(null,p,P);return y.push(Z),G2(y).then(()=>{y=[];for(const m of i.list())y.push(M2(m,p,P));return y.push(Z),G2(y)}).then(()=>{y=M6(Y,"beforeRouteUpdate",p,P);for(const m of Y)m.updateGuards.forEach(v=>{y.push(M2(v,p,P))});return y.push(Z),G2(y)}).then(()=>{y=[];for(const m of p.matched)if(m.beforeEnter&&!P.matched.includes(m))if(K1(m.beforeEnter))for(const v of m.beforeEnter)y.push(M2(v,p,P));else y.push(M2(m.beforeEnter,p,P));return y.push(Z),G2(y)}).then(()=>(p.matched.forEach(m=>m.enterCallbacks={}),y=M6(v1,"beforeRouteEnter",p,P),y.push(Z),G2(y))).then(()=>{y=[];for(const m of n.list())y.push(M2(m,p,P));return y.push(Z),G2(y)}).catch(m=>s2(m,8)?m:Promise.reject(m))}function J(p,P,y){for(const E of f.list())E(p,P,y)}function V1(p,P,y,E,Y){const v1=k(p,P);if(v1)return v1;const Z=P===H2,m=K2?history.state:{};y&&(E||Z?r.replace(p.fullPath,c1({scroll:Z&&m&&m.scroll},Y)):r.push(p.fullPath,Y)),l.value=p,w2(p,P,y,Z),$1()}let B;function n1(){B||(B=r.listen((p,P,y)=>{if(!K3.listening)return;const E=S(p),Y=s1(E);if(Y){m1(c1(Y,{replace:!0}),E).catch(d3);return}t=E;const v1=l.value;K2&&FC(V0(v1.fullPath,y.delta),U4()),K(E,v1).catch(Z=>s2(Z,12)?Z:s2(Z,2)?(m1(Z.to,E).then(m=>{s2(m,20)&&!y.delta&&y.type===F3.pop&&r.go(-1,!1)}).catch(d3),Promise.reject()):(y.delta&&r.go(-y.delta,!1),r1(Z,E,v1))).then(Z=>{Z=Z||V1(E,v1,!1),Z&&(y.delta&&!s2(Z,8)?r.go(-y.delta,!1):y.type===F3.pop&&s2(Z,20)&&r.go(-1,!1)),J(E,v1,Z)}).catch(d3)}))}let S1=H3(),z2=H3(),z1;function r1(p,P,y){$1(p);const E=z2.list();return E.length?E.forEach(Y=>Y(p,P,y)):console.error(p),Promise.reject(p)}function a1(){return z1&&l.value!==H2?Promise.resolve():new Promise((p,P)=>{S1.add([p,P])})}function $1(p){return z1||(z1=!p,n1(),S1.list().forEach(([P,y])=>p?y(p):P()),S1.reset()),p}function w2(p,P,y,E){const{scrollBehavior:Y}=c;if(!K2||!Y)return Promise.resolve();const v1=!y&&BC(V0(p.fullPath,0))||(E||!y)&&history.state&&history.state.scroll||null;return k7().then(()=>Y(p,P,v1)).then(Z=>Z&&TC(Z)).catch(Z=>r1(Z,p,P))}const U1=p=>r.go(p);let y1;const I2=new Set,K3={currentRoute:l,listening:!0,addRoute:h,removeRoute:d,hasRoute:w,getRoutes:L,resolve:S,options:c,push:$,replace:G,go:U1,back:()=>U1(-1),forward:()=>U1(1),beforeEach:i.add,beforeResolve:n.add,afterEach:f.add,onError:z2.add,isReady:a1,install(p){const P=this;p.component("RouterLink",pz),p.component("RouterView",Lz),p.config.globalProperties.$router=P,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>a3(l)}),K2&&!y1&&l.value===H2&&(y1=!0,$(r.location).catch(Y=>{}));const y={};for(const Y in H2)y[Y]=E1(()=>l.value[Y]);p.provide(M8,P),p.provide(g9,q3(y)),p.provide(D6,l);const E=p.unmount;I2.add(p),p.unmount=function(){I2.delete(p),I2.size<1&&(t=H2,B&&B(),B=null,l.value=H2,y1=!1,z1=!1),E()}}};return K3}function G2(c){return c.reduce((a,e)=>a.then(()=>e()),Promise.resolve())}function xz(c,a){const e=[],s=[],r=[],i=Math.max(a.matched.length,c.matched.length);for(let n=0;n<i;n++){const f=a.matched[n];f&&(c.matched.find(t=>f3(t,f))?s.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>f3(t,l))||r.push(l))}return[e,s,r]}const bz={name:"Home",components:{},mounted(){var c=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;const e=["mydiv","mydiv1","mydiv2","mydiv3","mydiv4"],s=["mydivheader","mydivheader1","mydivheader2","mydivheader3","mydivheader4"];var r=0;for(const n of s)(c<900||a<600)&&(r==0?document.getElementById(n).className="title is-5":document.getElementById(n).className="subtitle is-7"),i(document.getElementById(e[r]),r),r++;function i(n,f){var l=0,t=0,o=0,C=0;document.getElementById(n.id+"header")?document.getElementById(n.id+"header").onmousedown=h:n.onmousedown=h,f!=0?(n.style.top=z(200,a-a*.3)+"px",n.style.left=z(10,c-c*.1)+"px"):(n.style.top=z(60,a-a*.8)+"px",n.style.left=z(100,c-c*.3)+"px");function z(w,S){return Math.random()*(S-w)+w}function h(w){w=w||window.event,w.preventDefault(),o=w.clientX,C=w.clientY,document.onmouseup=L,document.onmousemove=d}function d(w){w=w||window.event,w.preventDefault(),l=o-w.clientX,t=C-w.clientY,o=w.clientX,C=w.clientY,n.style.top=n.offsetTop-t+"px",n.style.left=n.offsetLeft-l+"px"}function L(){document.onmouseup=null,document.onmousemove=null}}}},Sz=e9('<div id="mydiv" data-v-bc8dca9d><h1 id="mydivheader" class="title is-3" data-v-bc8dca9d>Technical Dictionary English Albanian</h1></div><div id="mydiv1" data-v-bc8dca9d><p id="mydivheader1" class="subtitle is-5" data-v-bc8dca9d>coming soon...</p></div><div id="mydiv2" data-v-bc8dca9d><p id="mydivheader2" class="subtitle is-5" data-v-bc8dca9d>Update soon</p></div><div id="mydiv3" data-v-bc8dca9d><p id="mydivheader3" class="subtitle is-5" data-v-bc8dca9d>happy 2023</p></div><div id="mydiv4" data-v-bc8dca9d><p id="mydivheader4" class="subtitle is-5" data-v-bc8dca9d>Forestry</p></div><div class="center" data-v-bc8dca9d><div class="blob" data-v-bc8dca9d></div></div>',6);function Nz(c,a,e,s,r,i){return Sz}const wz=C3(bz,[["render",Nz],["__scopeId","data-v-bc8dca9d"]]);const kz={name:"ResultFound",props:["books","searchEnglish","searchWord","displaySMS","previousWord"],data(){return{copied:!1,copiedSmsEng:"Click to copy"}},methods:{copyClipboard(c){c=="Alb"?navigator.clipboard.writeText(this.books[0].alb):c=="Eng"?navigator.clipboard.writeText(this.books[0].eng):c=="Latin"&&navigator.clipboard.writeText(this.books[0].latin_name)}}},q1=c=>(z8("data-v-8602ac6c"),c=c(),v8(),c),yz={class:"columns"},Az={class:"column"},Pz={class:"tile is-parent"},Tz={class:"tile is-child box"},Fz={key:0},Bz=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Searched word: ",-1)),_z={class:"title is-size-6-mobile"},Rz=q1(()=>b("hr",null,null,-1)),Ez={class:"columns is-gapless is-mobile"},Dz={class:"column"},qz=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Result:",-1)),$z=["data-tooltip"],Uz={key:0,class:"column",id:"latin"},Oz=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Latin:",-1)),Iz=["data-tooltip"],Wz={class:"columns is-gapless is-mobile"},Gz={class:"column"},Zz=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Description:",-1)),jz=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Field:",-1)),Kz={key:0,class:"tag has-text-weight-bold"},Yz={key:1},Xz=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Searched word: ",-1)),Qz={class:"title is-size-6-mobile"},Jz=q1(()=>b("hr",null,null,-1)),cv={class:"columns is-gapless is-mobile"},av={class:"column"},ev=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Result:",-1)),sv=["data-tooltip"],rv={key:0,class:"column",id:"latin"},iv=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Latin:",-1)),nv=["data-tooltip"],fv={class:"columns is-gapless is-mobile"},lv={class:"column"},ov=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Description:",-1)),tv=q1(()=>b("span",{class:"tag has-text-weight-bold"},"Field:",-1)),mv={key:0,class:"tag has-text-weight-bold"},Cv={key:0},zv={class:"tile is-ancestor"},vv={class:"tile is-parent"},hv={class:"tile is-child box"},Hv={class:"has-text-weight-bold"};function uv(c,a,e,s,r,i){return h1(),u1("div",yz,[b("div",Az,[C1(C9,{name:"result-group"},{default:s3(()=>[(h1(!0),u1(P1,null,W7(this.books,n=>(h1(),u1("div",{class:"tile is-ancestor",key:n.id},[b("div",Pz,[b("div",Tz,[e.searchEnglish?(h1(),u1("div",Fz,[b("p",null,[Bz,g1(),b("span",_z,L1(n.eng),1)]),Rz,b("div",Ez,[b("div",Dz,[b("p",null,[qz,g1(),b("span",{class:"title is-size-6-mobile has-tooltip-right",onClick:a[0]||(a[0]=f=>i.copyClipboard("Alb")),"data-tooltip":r.copiedSmsEng},L1(n.alb),9,$z)])]),n.latin_name?(h1(),u1("div",Uz,[b("p",null,[Oz,g1(),b("span",{class:"title is-size-6-mobile has-tooltip-right","data-tooltip":r.copiedSmsEng,onClick:a[1]||(a[1]=f=>i.copyClipboard("Latin"))},L1(n.latin_name),9,Iz)])])):Z2("",!0)]),b("div",Wz,[b("div",Gz,[b("p",null,[Zz,g1(" "+L1(n.desc_eng),1)]),b("p",null,[jz,g1(" "+L1(n.field_eng),1)]),b("p",null,[n.source?(h1(),u1("span",Kz,"Source:")):Z2("",!0),g1(L1(n.source),1)])])])])):(h1(),u1("div",Yz,[b("p",null,[Xz,g1(),b("span",Qz,L1(n.alb),1)]),Jz,b("div",cv,[b("div",av,[b("p",null,[ev,g1(),b("span",{class:"title is-size-6-mobile has-tooltip-right","data-tooltip":r.copiedSmsEng,onClick:a[2]||(a[2]=f=>i.copyClipboard("Eng"))},L1(n.eng),9,sv)])]),n.latin_name?(h1(),u1("div",rv,[b("p",null,[iv,g1(),b("span",{class:"title is-size-6-mobile has-tooltip-right","data-tooltip":r.copiedSmsEng,onClick:a[3]||(a[3]=f=>i.copyClipboard("Latin"))},L1(n.latin_name),9,nv)])])):Z2("",!0)]),b("div",fv,[b("div",lv,[b("p",null,[ov,g1(" "+L1(n.desc_alb),1)]),b("p",null,[tv,g1(" "+L1(n.field_alb),1)]),b("p",null,[n.source?(h1(),u1("span",mv,"Source:")):Z2("",!0),g1(L1(n.source),1)])])])]))])])]))),128)),e.books==""?(h1(),u1("div",Cv,[b("div",zv,[b("div",vv,[b("div",hv,[b("p",null,[b("span",Hv,L1(this.previousWord),1),g1(L1(this.displaySMS),1)])])])])])):Z2("",!0)]),_:1})])])}const pv=C3(kz,[["render",uv],["__scopeId","data-v-8602ac6c"]]);const Vv={name:"SimilarWord",props:["books","similarBooks","nearWords","searchEnglish"],methods:{runSearch(c){this.$emit("updateBooks",c)}}},Mv={class:"columns"},dv={key:0,class:"column"},Lv={class:"tile is-ancestor"},gv={class:"tile is-parent"},xv={class:"tile is-child box"},bv={key:0},Sv=["onClick"],Nv={key:1},wv=["onClick"];function kv(c,a,e,s,r,i){return h1(),u1("div",Mv,[this.similarBooks?(h1(),u1("div",dv,[b("div",Lv,[b("div",gv,[C1(C9,{name:"similar-group"},{default:s3(()=>[b("div",xv,[b("span",null,L1(this.nearWords)+": ",1),(h1(!0),u1(P1,null,W7(this.similarBooks,n=>(h1(),u1("div",{key:n.id},[this.searchEnglish?(h1(),u1("div",bv,[b("a",{class:"tag",onClick:f=>i.runSearch(n)},L1(n.eng),9,Sv)])):(h1(),u1("div",Nv,[b("a",{class:"tag",onClick:f=>i.runSearch(n)},L1(n.alb),9,wv)]))]))),128))])]),_:1})])])])):Z2("",!0)])}const yv=C3(Vv,[["render",kv],["__scopeId","data-v-7190c298"]]);const Av={name:"App",components:{ResultFound:pv,SimilarWord:yv},data(){return{books:null,searchWord:null,searchEnglish:!0,previousWord:null,similarWords:null,searchWay:"eng-alb",searchButton:"Search",inputText:"Type a word",displaySMS:", not found in our database! Be sure your search is longer than two letters, has no numbers and is different from previous.",contribButton:"@Contributors",contributors:null,similarBooks:null,nearWords:"Nearby words"}},methods:{switchSearch(){this.searchEnglish=!this.searchEnglish,this.searchEnglish?this.searchWay="eng-alb":this.searchWay="alb-eng"},searchDict(){this.searchWord===null||Array.from(this.searchWord)[0]===" "||this.searchWord.length<3||Number(Array.from(this.searchWord)[0])?(this.books=[],this.similarBooks=[]):this.previousWord===this.searchWord?this.searchWord="":(this.similarBooks=[],this.similarInit(this.searchWay,this.searchWord),this.init(this.searchWay,this.searchWord),this.previousWord=this.searchWord,this.searchWord="")},showContributors(){this.contributors="Comming soon!!!!!!"},updateBooks(c){console.log(c.eng),this.searchWay=="eng-alb"?this.searchWord=c.eng:this.searchWord=c.alb,this.searchDict()},async init(c,a){await fetch("https://web-production-d984.up.railway.app/"+c+"/"+a).then(e=>e.json()).then(e=>this.books=e).catch(e=>console.log(e.message))},async similarInit(c,a){await fetch("https://web-production-d984.up.railway.app/"+c+"-similar/"+a).then(e=>e.json()).then(e=>this.similarBooks=e).catch(e=>console.log(e.message))}}},O4=c=>(z8("data-v-8fea8ac5"),c=c(),v8(),c),Pv={class:"columns is-gapless is-centered"},Tv=O4(()=>b("div",{class:"column is-2"},null,-1)),Fv={class:"column"},Bv={class:"section is-small"},_v={class:"columns"},Rv={class:"column"},Ev={class:"content has-text-centered"},Dv={key:0},qv={class:"title",id:"switchLanguage","data-tooltip":"Switch languange"},$v=O4(()=>b("i",{class:"fa-solid fa-arrow-right-arrow-left"},null,-1)),Uv={key:1},Ov={class:"title","data-tooltip":"Switch language"},Iv=O4(()=>b("i",{class:"fa-solid fa-arrow-right-arrow-left"},null,-1)),Wv={class:"columns"},Gv={class:"column is-full"},Zv=["placeholder"],jv=O4(()=>b("div",{class:"column is-2"},null,-1));function Kv(c,a,e,s,r,i){const n=g4("ResultFound"),f=g4("SimilarWord");return h1(),u1("div",Pv,[Tv,b("div",Fv,[b("section",Bv,[b("div",_v,[b("div",Rv,[b("div",Ev,[r.searchEnglish?(h1(),u1("div",Dv,[b("h1",qv,[b("span",{onClick:a[0]||(a[0]=(...l)=>i.switchSearch&&i.switchSearch(...l))},[g1("English "),$v,g1(" Albanian ")])])])):(h1(),u1("div",Uv,[b("h1",Ov,[b("span",{onClick:a[1]||(a[1]=(...l)=>i.switchSearch&&i.switchSearch(...l))},[g1("Albanian "),Iv,g1(" English")])])]))])])]),b("div",Wv,[b("div",Gv,[Gt(b("input",{class:"input is-focused",id:"searchInput",type:"text",placeholder:r.inputText,"onUpdate:modelValue":a[2]||(a[2]=l=>r.searchWord=l),onKeyup:a[3]||(a[3]=sC((...l)=>i.searchDict&&i.searchDict(...l),["enter"]))},null,40,Zv),[[aC,r.searchWord]]),b("button",{class:"button is-primary",id:"searchBtn",onClick:a[4]||(a[4]=(...l)=>i.searchDict&&i.searchDict(...l))},L1(r.searchButton),1)])]),C1(n,{books:this.books,searchEnglish:this.searchEnglish,searchWord:this.searchWord,displaySMS:this.displaySMS,previousWord:this.previousWord},null,8,["books","searchEnglish","searchWord","displaySMS","previousWord"]),C1(f,{books:this.books,similarBooks:this.similarBooks,nearWords:this.nearWords,searchEnglish:this.searchEnglish,onUpdateBooks:i.updateBooks},null,8,["books","similarBooks","nearWords","searchEnglish","onUpdateBooks"])])]),jv])}const Yv=C3(Av,[["render",Kv],["__scopeId","data-v-8fea8ac5"]]);const Xv={name:"About",components:{}},Qv=e9('<div class="columns is-gapless is-centered" data-v-f75fbc98></div><div class="columns is-gapless is-centered" data-v-f75fbc98><div class="column is-3" data-v-f75fbc98></div><div class="column is-6 is-gapless" data-v-f75fbc98><div class="columns is-gapless is-centered" data-v-f75fbc98><div class="column is-three-quarters" data-v-f75fbc98><div class="box" data-v-f75fbc98><h1 class="title is-4" data-v-f75fbc98>Technical Dictionary English-Albanian</h1><p class="subtitle" data-v-f75fbc98>This project is published in January-2023.</p><p data-v-f75fbc98>The project is still under update. A lot of new information will be added this year.</p><div class="columns" data-v-f75fbc98><div class="column" data-v-f75fbc98><div class="list" data-v-f75fbc98><ul data-v-f75fbc98><div class="list-item" data-v-f75fbc98><li data-v-f75fbc98><i class="fa-solid fa-check" data-v-f75fbc98></i> Forestry </li></div></ul></div></div><div class="column" data-v-f75fbc98></div><div class="column" data-v-f75fbc98></div></div></div></div><div class="column" data-v-f75fbc98></div></div><div class="columns is-gapless is-centered" data-v-f75fbc98><div class="column" data-v-f75fbc98></div><div class="column" data-v-f75fbc98></div><div class="column is-three-quarters" data-v-f75fbc98><div class="box" data-v-f75fbc98><h1 class="title is-4" data-v-f75fbc98>Your contribution is very important...</h1><p data-v-f75fbc98>If you have a list of technical words and want to add in this dictionary or if you find any mistake. Check out our facebook site to get in touch with this project.</p><p data-v-f75fbc98> You can contribute also as a developer, soon the project will be shared in github.</p></div></div></div><div class="columns is-gapless is-centered" data-v-f75fbc98><div class="column" data-v-f75fbc98></div><div class="column is-two-thirds" data-v-f75fbc98><div class="box" data-v-f75fbc98><h1 class="subtitle" data-v-f75fbc98>Simple is better than complex!</h1></div></div><div class="column" data-v-f75fbc98></div></div></div><div class="column is-3" data-v-f75fbc98></div></div><div class="columns is-gapless is-centered" data-v-f75fbc98></div>',3);function Jv(c,a,e,s,r,i){return Qv}const ch=C3(Xv,[["render",Jv],["__scopeId","data-v-f75fbc98"]]),ah=[{path:"/",name:"Home",component:wz},{path:"/Dictionary",name:"Dictionary",component:Yv},{path:"/About",name:"About",component:ch}],eh=gz({history:DC("/dict-al/"),routes:ah});function T0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function T(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?T0(Object(e),!0).forEach(function(s){d1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):T0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function S4(c){return S4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},S4(c)}function sh(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function F0(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function rh(c,a,e){return a&&F0(c.prototype,a),e&&F0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function d1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function d8(c,a){return nh(c)||lh(c,a)||x9(c,a)||th()}function $3(c){return ih(c)||fh(c)||x9(c)||oh()}function ih(c){if(Array.isArray(c))return q6(c)}function nh(c){if(Array.isArray(c))return c}function fh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function lh(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,f;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return s}}function x9(c,a){if(c){if(typeof c=="string")return q6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return q6(c,a)}}function q6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function oh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function th(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var B0=function(){},L8={},b9={},S9=null,N9={mark:B0,measure:B0};try{typeof window<"u"&&(L8=window),typeof document<"u"&&(b9=document),typeof MutationObserver<"u"&&(S9=MutationObserver),typeof performance<"u"&&(N9=performance)}catch{}var mh=L8.navigator||{},_0=mh.userAgent,R0=_0===void 0?"":_0,b2=L8,o1=b9,E0=S9,e4=N9;b2.document;var C2=!!o1.documentElement&&!!o1.head&&typeof o1.addEventListener=="function"&&typeof o1.createElement=="function",w9=~R0.indexOf("MSIE")||~R0.indexOf("Trident/"),s4,r4,i4,n4,f4,l2="___FONT_AWESOME___",$6=16,k9="fa",y9="svg-inline--fa",$2="data-fa-i2svg",U6="data-fa-pseudo-element",Ch="data-fa-pseudo-element-pending",g8="data-prefix",x8="data-icon",D0="fontawesome-i2svg",zh="async",vh=["HTML","HEAD","STYLE","SCRIPT"],A9=function(){try{return!0}catch{return!1}}(),l1="classic",H1="sharp",b8=[l1,H1];function U3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[l1]}})}var B3=U3((s4={},d1(s4,l1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),d1(s4,H1,{fa:"solid",fass:"solid","fa-solid":"solid"}),s4)),_3=U3((r4={},d1(r4,l1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),d1(r4,H1,{solid:"fass"}),r4)),R3=U3((i4={},d1(i4,l1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),d1(i4,H1,{fass:"fa-solid"}),i4)),hh=U3((n4={},d1(n4,l1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),d1(n4,H1,{"fa-solid":"fass"}),n4)),Hh=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,P9="fa-layers-text",uh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ph=U3((f4={},d1(f4,l1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),d1(f4,H1,{900:"fass"}),f4)),T9=[1,2,3,4,5,6,7,8,9,10],Vh=T9.concat([11,12,13,14,15,16,17,18,19,20]),Mh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],R2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E3=new Set;Object.keys(_3[l1]).map(E3.add.bind(E3));Object.keys(_3[H1]).map(E3.add.bind(E3));var dh=[].concat(b8,$3(E3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",R2.GROUP,R2.SWAP_OPACITY,R2.PRIMARY,R2.SECONDARY]).concat(T9.map(function(c){return"".concat(c,"x")})).concat(Vh.map(function(c){return"w-".concat(c)})),g3=b2.FontAwesomeConfig||{};function Lh(c){var a=o1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function gh(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(o1&&typeof o1.querySelector=="function"){var xh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xh.forEach(function(c){var a=d8(c,2),e=a[0],s=a[1],r=gh(Lh(e));r!=null&&(g3[s]=r)})}var F9={styleDefault:"solid",familyDefault:"classic",cssPrefix:k9,replacementClass:y9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};g3.familyPrefix&&(g3.cssPrefix=g3.familyPrefix);var o3=T(T({},F9),g3);o3.autoReplaceSvg||(o3.observeMutations=!1);var R={};Object.keys(F9).forEach(function(c){Object.defineProperty(R,c,{enumerable:!0,set:function(e){o3[c]=e,x3.forEach(function(s){return s(R)})},get:function(){return o3[c]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(a){o3.cssPrefix=a,x3.forEach(function(e){return e(R)})},get:function(){return o3.cssPrefix}});b2.FontAwesomeConfig=R;var x3=[];function bh(c){return x3.push(c),function(){x3.splice(x3.indexOf(c),1)}}var u2=$6,a2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sh(c){if(!(!c||!C2)){var a=o1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=o1.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return o1.head.insertBefore(a,s),c}}var Nh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function D3(){for(var c=12,a="";c-- >0;)a+=Nh[Math.random()*62|0];return a}function z3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function S8(c){return c.classList?z3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function B9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wh(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(B9(c[e]),'" ')},"").trim()}function I4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function N8(c){return c.size!==a2.size||c.x!==a2.x||c.y!==a2.y||c.rotate!==a2.rotate||c.flipX||c.flipY}function kh(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function yh(c){var a=c.transform,e=c.width,s=e===void 0?$6:e,r=c.height,i=r===void 0?$6:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&w9?l+="translate(".concat(a.x/u2-s/2,"em, ").concat(a.y/u2-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/u2,"em), calc(-50% + ").concat(a.y/u2,"em)) "):l+="translate(".concat(a.x/u2,"em, ").concat(a.y/u2,"em) "),l+="scale(".concat(a.size/u2*(a.flipX?-1:1),", ").concat(a.size/u2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Ah=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _9(){var c=k9,a=y9,e=R.cssPrefix,s=R.replacementClass,r=Ah;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var q0=!1;function d6(){R.autoAddCss&&!q0&&(Sh(_9()),q0=!0)}var Ph={mixout:function(){return{dom:{css:_9,insertCss:d6}}},hooks:function(){return{beforeDOMElementCreation:function(){d6()},beforeI2svg:function(){d6()}}}},o2=b2||{};o2[l2]||(o2[l2]={});o2[l2].styles||(o2[l2].styles={});o2[l2].hooks||(o2[l2].hooks={});o2[l2].shims||(o2[l2].shims=[]);var G1=o2[l2],R9=[],Th=function c(){o1.removeEventListener("DOMContentLoaded",c),N4=1,R9.map(function(a){return a()})},N4=!1;C2&&(N4=(o1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(o1.readyState),N4||o1.addEventListener("DOMContentLoaded",Th));function Fh(c){C2&&(N4?setTimeout(c,0):R9.push(c))}function O3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?B9(c):"<".concat(a," ").concat(wh(s),">").concat(i.map(O3).join(""),"</").concat(a,">")}function $0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Bh=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},L6=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?Bh(e,r):e,l,t,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<n;l++)t=i[l],o=f(o,a[t],t,a);return o};function _h(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function O6(c){var a=_h(c);return a.length===1?a[0].toString(16):null}function Rh(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function U0(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function I6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=U0(a);typeof G1.hooks.addPack=="function"&&!r?G1.hooks.addPack(c,U0(a)):G1.styles[c]=T(T({},G1.styles[c]||{}),i),c==="fas"&&I6("fa",a)}var l4,o4,t4,Y2=G1.styles,Eh=G1.shims,Dh=(l4={},d1(l4,l1,Object.values(R3[l1])),d1(l4,H1,Object.values(R3[H1])),l4),w8=null,E9={},D9={},q9={},$9={},U9={},qh=(o4={},d1(o4,l1,Object.keys(B3[l1])),d1(o4,H1,Object.keys(B3[H1])),o4);function $h(c){return~dh.indexOf(c)}function Uh(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!$h(r)?r:null}var O9=function(){var a=function(i){return L6(Y2,function(n,f,l){return n[l]=L6(f,i,{}),n},{})};E9=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),D9=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),U9=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in Y2||R.autoFetchSvg,s=L6(Eh,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});q9=s.names,$9=s.unicodes,w8=W4(R.styleDefault,{family:R.familyDefault})};bh(function(c){w8=W4(c.styleDefault,{family:R.familyDefault})});O9();function k8(c,a){return(E9[c]||{})[a]}function Oh(c,a){return(D9[c]||{})[a]}function E2(c,a){return(U9[c]||{})[a]}function I9(c){return q9[c]||{prefix:null,iconName:null}}function Ih(c){var a=$9[c],e=k8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function S2(){return w8}var y8=function(){return{prefix:null,iconName:null,rest:[]}};function W4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?l1:e,r=B3[s][c],i=_3[s][c]||_3[s][r],n=c in G1.styles?c:null;return i||n||null}var O0=(t4={},d1(t4,l1,Object.keys(R3[l1])),d1(t4,H1,Object.keys(R3[H1])),t4);function G4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},d1(a,l1,"".concat(R.cssPrefix,"-").concat(l1)),d1(a,H1,"".concat(R.cssPrefix,"-").concat(H1)),a),n=null,f=l1;(c.includes(i[l1])||c.some(function(t){return O0[l1].includes(t)}))&&(f=l1),(c.includes(i[H1])||c.some(function(t){return O0[H1].includes(t)}))&&(f=H1);var l=c.reduce(function(t,o){var C=Uh(R.cssPrefix,o);if(Y2[o]?(o=Dh[f].includes(o)?hh[f][o]:o,n=o,t.prefix=o):qh[f].indexOf(o)>-1?(n=o,t.prefix=W4(o,{family:f})):C?t.iconName=C:o!==R.replacementClass&&o!==i[l1]&&o!==i[H1]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var z=n==="fa"?I9(t.iconName):{},h=E2(t.prefix,t.iconName);z.prefix&&(n=null),t.iconName=z.iconName||h||t.iconName,t.prefix=z.prefix||t.prefix,t.prefix==="far"&&!Y2.far&&Y2.fas&&!R.autoFetchSvg&&(t.prefix="fas")}return t},y8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===H1&&(Y2.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=E2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=S2()||"fas"),l}var Wh=function(){function c(){sh(this,c),this.definitions={}}return rh(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=T(T({},e.definitions[f]||{}),n[f]),I6(f,n[f]);var l=R3[l1][f];l&&I6(l,n[f]),O9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(C){typeof C=="string"&&(e[f][C]=t)}),e[f][l]=t}),e}}]),c}(),I0=[],X2={},r3={},Gh=Object.keys(r3);function Zh(c,a){var e=a.mixoutsTo;return I0=c,X2={},Object.keys(r3).forEach(function(s){Gh.indexOf(s)===-1&&delete r3[s]}),I0.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),S4(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){X2[n]||(X2[n]=[]),X2[n].push(i[n])})}s.provides&&s.provides(r3)}),e}function W6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=X2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function U2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=X2[c]||[];r.forEach(function(i){i.apply(null,e)})}function t2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return r3[c]?r3[c].apply(null,a):void 0}function G6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||S2();if(a)return a=E2(e,a)||a,$0(W9.definitions,e,a)||$0(G1.styles,e,a)}var W9=new Wh,jh=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,U2("noAuto")},Kh={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return C2?(U2("beforeI2svg",a),t2("pseudoElements2svg",a),t2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Fh(function(){Xh({autoReplaceSvgRoot:e}),U2("watch",a)})}},Yh={icon:function(a){if(a===null)return null;if(S4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:E2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=W4(a[0]);return{prefix:s,iconName:E2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(R.cssPrefix,"-"))>-1||a.match(Hh))){var r=G4(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||S2(),iconName:E2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=S2();return{prefix:i,iconName:E2(i,a)||a}}}},_1={noAuto:jh,config:R,dom:Kh,parse:Yh,library:W9,findIconDefinition:G6,toHtml:O3},Xh=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?o1:e;(Object.keys(G1.styles).length>0||R.autoFetchSvg)&&C2&&R.autoReplaceSvg&&_1.dom.i2svg({node:s})};function Z4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return O3(s)})}}),Object.defineProperty(c,"node",{get:function(){if(C2){var s=o1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Qh(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(N8(n)&&e.found&&!s.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};r.style=I4(T(T({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Jh(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(R.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},r),{},{id:n}),children:s}]}]}function A8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,C=c.extra,z=c.watchable,h=z===void 0?!1:z,d=s.found?s:e,L=d.width,w=d.height,S=r==="fak",F=[R.replacementClass,i?"".concat(R.cssPrefix,"-").concat(i):""].filter(function(K){return C.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(C.classes).join(" "),k={children:[],attributes:T(T({},C.attributes),{},{"data-prefix":r,"data-icon":i,class:F,role:C.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(w)})},$=S&&!~C.classes.indexOf("fa-fw")?{width:"".concat(L/w*16*.0625,"em")}:{};h&&(k.attributes[$2]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(o||D3())},children:[l]}),delete k.attributes.title);var G=T(T({},k),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:n,symbol:f,styles:T(T({},$),C.styles)}),s1=s.found&&e.found?t2("generateAbstractMask",G)||{children:[],attributes:{}}:t2("generateAbstractIcon",G)||{children:[],attributes:{}},m1=s1.children,O=s1.attributes;return G.children=m1,G.attributes=O,f?Jh(G):Qh(G)}function W0(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=T(T(T({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(t[$2]="");var o=T({},n.styles);N8(r)&&(o.transform=yh({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var C=I4(o);C.length>0&&(t.style=C);var z=[];return z.push({tag:"span",attributes:t,children:[a]}),i&&z.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),z}function cH(c){var a=c.content,e=c.title,s=c.extra,r=T(T(T({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=I4(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var g6=G1.styles;function Z6(c){var a=c[0],e=c[1],s=c.slice(4),r=d8(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(R2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(R2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(R2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var aH={found:!1,width:512,height:512};function eH(c,a){!A9&&!R.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function j6(c,a){var e=a;return a==="fa"&&R.styleDefault!==null&&(a=S2()),new Promise(function(s,r){if(t2("missingIconAbstract"),e==="fa"){var i=I9(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&g6[a]&&g6[a][c]){var n=g6[a][c];return s(Z6(n))}eH(c,a),s(T(T({},aH),{},{icon:R.showMissingIcons&&c?t2("missingIconAbstract")||{}:{}}))})}var G0=function(){},K6=R.measurePerformance&&e4&&e4.mark&&e4.measure?e4:{mark:G0,measure:G0},p3='FA "6.2.1"',sH=function(a){return K6.mark("".concat(p3," ").concat(a," begins")),function(){return G9(a)}},G9=function(a){K6.mark("".concat(p3," ").concat(a," ends")),K6.measure("".concat(p3," ").concat(a),"".concat(p3," ").concat(a," begins"),"".concat(p3," ").concat(a," ends"))},P8={begin:sH,end:G9},p4=function(){};function Z0(c){var a=c.getAttribute?c.getAttribute($2):null;return typeof a=="string"}function rH(c){var a=c.getAttribute?c.getAttribute(g8):null,e=c.getAttribute?c.getAttribute(x8):null;return a&&e}function iH(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(R.replacementClass)}function nH(){if(R.autoReplaceSvg===!0)return V4.replace;var c=V4[R.autoReplaceSvg];return c||V4.replace}function fH(c){return o1.createElementNS("http://www.w3.org/2000/svg",c)}function lH(c){return o1.createElement(c)}function Z9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?fH:lH:e;if(typeof c=="string")return o1.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(Z9(n,{ceFn:s}))}),r}function oH(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var V4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(Z9(r),e)}),e.getAttribute($2)===null&&R.keepOriginalSource){var s=o1.createComment(oH(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~S8(e).indexOf(R.replacementClass))return V4.replace(a);var r=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===R.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return O3(f)}).join(`
`);e.setAttribute($2,""),e.innerHTML=n}};function j0(c){c()}function j9(c,a){var e=typeof a=="function"?a:p4;if(c.length===0)e();else{var s=j0;R.mutateApproach===zh&&(s=b2.requestAnimationFrame||j0),s(function(){var r=nH(),i=P8.begin("mutate");c.map(r),i(),e()})}}var T8=!1;function K9(){T8=!0}function Y6(){T8=!1}var w4=null;function K0(c){if(E0&&R.observeMutations){var a=c.treeCallback,e=a===void 0?p4:a,s=c.nodeCallback,r=s===void 0?p4:s,i=c.pseudoElementsCallback,n=i===void 0?p4:i,f=c.observeMutationsRoot,l=f===void 0?o1:f;w4=new E0(function(t){if(!T8){var o=S2();z3(t).forEach(function(C){if(C.type==="childList"&&C.addedNodes.length>0&&!Z0(C.addedNodes[0])&&(R.searchPseudoElements&&n(C.target),e(C.target)),C.type==="attributes"&&C.target.parentNode&&R.searchPseudoElements&&n(C.target.parentNode),C.type==="attributes"&&Z0(C.target)&&~Mh.indexOf(C.attributeName))if(C.attributeName==="class"&&rH(C.target)){var z=G4(S8(C.target)),h=z.prefix,d=z.iconName;C.target.setAttribute(g8,h||o),d&&C.target.setAttribute(x8,d)}else iH(C.target)&&r(C.target)})}}),C2&&w4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tH(){w4&&w4.disconnect()}function mH(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function CH(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=G4(S8(c));return r.prefix||(r.prefix=S2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=Oh(r.prefix,c.innerText)||k8(r.prefix,O6(c.innerText))),!r.iconName&&R.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function zH(c){var a=z3(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return R.autoA11y&&(e?a["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(s||D3()):(a["aria-hidden"]="true",a.focusable="false")),a}function vH(){return{iconName:null,title:null,titleId:null,prefix:null,transform:a2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Y0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=CH(c),s=e.iconName,r=e.prefix,i=e.rest,n=zH(c),f=W6("parseNodeAttributes",{},c),l=a.styleParser?mH(c):[];return T({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:a2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var hH=G1.styles;function Y9(c){var a=R.autoReplaceSvg==="nest"?Y0(c,{styleParser:!1}):Y0(c);return~a.extra.classes.indexOf(P9)?t2("generateLayersText",c,a):t2("generateSvgReplacementMutation",c,a)}var N2=new Set;b8.map(function(c){N2.add("fa-".concat(c))});Object.keys(B3[l1]).map(N2.add.bind(N2));Object.keys(B3[H1]).map(N2.add.bind(N2));N2=$3(N2);function X0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!C2)return Promise.resolve();var e=o1.documentElement.classList,s=function(C){return e.add("".concat(D0,"-").concat(C))},r=function(C){return e.remove("".concat(D0,"-").concat(C))},i=R.autoFetchSvg?N2:b8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(hH));i.includes("fa")||i.push("fa");var n=[".".concat(P9,":not([").concat($2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat($2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=z3(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=P8.begin("onTree"),t=f.reduce(function(o,C){try{var z=Y9(C);z&&o.push(z)}catch(h){A9||h.name==="MissingIcon"&&console.error(h)}return o},[]);return new Promise(function(o,C){Promise.all(t).then(function(z){j9(z,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(z){l(),C(z)})})}function HH(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Y9(c).then(function(e){e&&j9([e],a)})}function uH(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:G6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:G6(r||{})),c(s,T(T({},e),{},{mask:r}))}}var pH=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?a2:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,C=e.title,z=C===void 0?null:C,h=e.titleId,d=h===void 0?null:h,L=e.classes,w=L===void 0?[]:L,S=e.attributes,F=S===void 0?{}:S,k=e.styles,$=k===void 0?{}:k;if(a){var G=a.prefix,s1=a.iconName,m1=a.icon;return Z4(T({type:"icon"},a),function(){return U2("beforeDOMElementCreation",{iconDefinition:a,params:e}),R.autoA11y&&(z?F["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(d||D3()):(F["aria-hidden"]="true",F.focusable="false")),A8({icons:{main:Z6(m1),mask:l?Z6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:s1,transform:T(T({},a2),r),symbol:n,title:z,maskId:o,titleId:d,extra:{attributes:F,styles:$,classes:w}})})}},VH={mixout:function(){return{icon:uH(pH)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=X0,e.nodeCallback=HH,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?o1:s,i=e.callback,n=i===void 0?function(){}:i;return X0(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,t=s.symbol,o=s.mask,C=s.maskId,z=s.extra;return new Promise(function(h,d){Promise.all([j6(r,f),o.iconName?j6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var w=d8(L,2),S=w[0],F=w[1];h([e,A8({icons:{main:S,mask:F},prefix:f,iconName:r,transform:l,symbol:t,maskId:C,title:i,titleId:n,extra:z,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=I4(f);l.length>0&&(r.style=l);var t;return N8(n)&&(t=t2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},MH={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return Z4({type:"layer"},function(){U2("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat($3(i)).join(" ")},children:n}]})}}}},dH={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,t=l===void 0?{}:l,o=s.styles,C=o===void 0?{}:o;return Z4({type:"counter",content:e},function(){return U2("beforeDOMElementCreation",{content:e,params:s}),cH({content:e.toString(),title:i,extra:{attributes:t,styles:C,classes:["".concat(R.cssPrefix,"-layers-counter")].concat($3(f))}})})}}}},LH={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?a2:r,n=s.title,f=n===void 0?null:n,l=s.classes,t=l===void 0?[]:l,o=s.attributes,C=o===void 0?{}:o,z=s.styles,h=z===void 0?{}:z;return Z4({type:"text",content:e},function(){return U2("beforeDOMElementCreation",{content:e,params:s}),W0({content:e,transform:T(T({},a2),i),title:f,extra:{attributes:C,styles:h,classes:["".concat(R.cssPrefix,"-layers-text")].concat($3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(w9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return R.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,W0({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},gH=new RegExp('"',"ug"),Q0=[1105920,1112319];function xH(c){var a=c.replace(gH,""),e=Rh(a,0),s=e>=Q0[0]&&e<=Q0[1],r=a.length===2?a[0]===a[1]:!1;return{value:O6(r?a[0]:a),isSecondary:s||r}}function J0(c,a){var e="".concat(Ch).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=z3(c.children),n=i.filter(function(m1){return m1.getAttribute(U6)===a})[0],f=b2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(uh),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&o!=="none"&&o!==""){var C=f.getPropertyValue("content"),z=~["Sharp"].indexOf(l[2])?H1:l1,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_3[z][l[2].toLowerCase()]:ph[z][t],d=xH(C),L=d.value,w=d.isSecondary,S=l[0].startsWith("FontAwesome"),F=k8(h,L),k=F;if(S){var $=Ih(L);$.iconName&&$.prefix&&(F=$.iconName,h=$.prefix)}if(F&&!w&&(!n||n.getAttribute(g8)!==h||n.getAttribute(x8)!==k)){c.setAttribute(e,k),n&&c.removeChild(n);var G=vH(),s1=G.extra;s1.attributes[U6]=a,j6(F,h).then(function(m1){var O=A8(T(T({},G),{},{icons:{main:m1,mask:y8()},prefix:h,iconName:k,extra:s1,watchable:!0})),K=o1.createElement("svg");a==="::before"?c.insertBefore(K,c.firstChild):c.appendChild(K),K.outerHTML=O.map(function(J){return O3(J)}).join(`