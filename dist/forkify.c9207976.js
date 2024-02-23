var e,t,r,n,i,o,a,c,s,u,l,f,p,h,v,g,d=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof d&&d)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},E={};w=!(E=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={},j={};j=!E(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var O=Function.prototype.call;S=j?O.bind(O):function(){return O.apply(O,arguments)};var P={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;n=$&&!P.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:P;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var k={},x={},M={},T=Function.prototype,F=T.call,I=j&&T.bind.bind(F,F),A={},N=(M=j?I:function(e){return function(){return F.apply(e,arguments)}})({}.toString),q=M("".slice);A=function(e){return q(N(e),8,-1)};var H=Object,R=M("".split);x=E(function(){return!H("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?R(e,""):H(e)}:H;var C={},D={};D=function(e){return null==e};var G=TypeError;C=function(e){if(D(e))throw new G("Can't call method on "+e);return e},k=function(e){return x(C(e))};var z={},B={},U={},W={},Y="object"==typeof document&&document.all;W=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},U=function(e){return"object"==typeof e?null!==e:W(e)};var Q={},K={};K=function(e,t){var r;return arguments.length<2?(r=b[e],W(r)?r:void 0):b[e]&&b[e][t]};var V={};V=M({}.isPrototypeOf);var J={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(o=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var eo=b.String;J=(X=!!Object.getOwnPropertySymbols&&!E(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;Q=J?function(e){return"symbol"==typeof e}:function(e){var t=K("Symbol");return W(t)&&V(t.prototype,ea(e))};var ec={},es={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ef=TypeError;es=function(e){if(W(e))return e;throw new ef(eu(e)+" is not a function")},ec=function(e,t){var r=e[t];return D(r)?void 0:es(r)};var ep={},eh=TypeError;ep=function(e,t){var r,n;if("string"===t&&W(r=e.toString)&&!U(n=S(r,e))||W(r=e.valueOf)&&!U(n=S(r,e))||"string"!==t&&W(r=e.toString)&&!U(n=S(r,e)))return n;throw new eh("Can't convert object to primitive value")};var ev={},eg={},ed={};ed=!1;var ey={},em=Object.defineProperty;ey=function(e,t){try{em(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||ey(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.36.0",mode:ed?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},eE={},eS=Object;eE=function(e){return eS(C(e))};var ej=M({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return ej(eE(e),t)};var eO={},eP=0,e$=Math.random(),eL=M(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++eP+e$,36)};var ek=b.Symbol,ex=ev("wks"),eM=J?ek.for||ek:ek&&ek.withoutSetter||eO,eT=TypeError,eF=(ew(ex,e="toPrimitive")||(ex[e]=X&&ew(ek,e)?ek[e]:eM("Symbol."+e)),ex[e]);B=function(e,t){if(!U(e)||Q(e))return e;var r,n=ec(e,eF);if(n){if(void 0===t&&(t="default"),r=S(n,e,t),!U(r)||Q(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},z=function(e){var t=B(e,"string");return Q(t)?t:t+""};var eI={},eA={},eN=b.document,eq=U(eN)&&U(eN.createElement);eA=function(e){return eq?eN.createElement(e):{}},eI=!w&&!E(function(){return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});var eH=Object.getOwnPropertyDescriptor;r=w?eH:function(e,t){if(e=k(e),t=z(t),eI)try{return eH(e,t)}catch(e){}if(ew(e,t))return L(!S(n,e,t),e[t])};var eR={},eC={};eC=w&&E(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eD={},eG=String,ez=TypeError;eD=function(e){if(U(e))return e;throw new ez(eG(e)+" is not an object")};var eB=TypeError,eU=Object.defineProperty,eW=Object.getOwnPropertyDescriptor,eY="enumerable",eQ="configurable",eK="writable";a=w?eC?function(e,t,r){if(eD(e),t=z(t),eD(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eW(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eQ in r?r[eQ]:n[eQ],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return eU(e,t,r)}:eU:function(e,t,r){if(eD(e),t=z(t),eD(r),eI)try{return eU(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eB("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eR=w?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eV={},eJ={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e2=M(Function.toString);W(eg.inspectSource)||(eg.inspectSource=function(e){return e2(e)}),e1=eg.inspectSource;var e4={},e3={},e7=b.WeakMap;e3=W(e7)&&/native code/.test(String(e7));var e5={},e9=ev("keys");e5=function(e){return e9[e]||(e9[e]=eO(e))};var e6={};e6={};var e8="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e3||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,c=function(e,t){if(tr.has(e))throw new te(e8);return t.facade=e,tr.set(e,t),t},s=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e5("state");e6[tn]=!0,c=function(e,t){if(ew(e,tn))throw new te(e8);return t.facade=e,eR(e,tn,t),t},s=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e4={set:c,get:s,has:u,enforce:function(e){return u(e)?s(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=s(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,to=e4.get,ta=String,tc=Object.defineProperty,ts=M("".slice),tu=M("".replace),tl=M([].join),tf=w&&!E(function(){return 8!==tc(function(){},"length",{value:8}).length}),tp=String(String).split("String"),th=eJ=function(e,t,r){"Symbol("===ts(ta(t),0,7)&&(t="["+tu(ta(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?tc(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&ew(r,"arity")&&e.length!==r.arity&&tc(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&tc(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=th(function(){return W(this)&&to(this).source||e1(this)},"toString"),eV=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(W(r)&&eJ(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tv={},tg={},td={},ty={},tm={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},tm=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tE=Math.max,tS=Math.min;ty=function(e,t){var r=tm(e);return r<0?tE(r+t,0):tS(r,t)};var tj={},tO={},tP=Math.min;tO=function(e){var t=tm(e);return t>0?tP(t,9007199254740991):0},tj=function(e){return tO(e.length)};var t$=function(e){return function(t,r,n){var i,o=k(t),a=tj(o);if(0===a)return!e&&-1;var c=ty(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},tL={includes:t$(!0),indexOf:t$(!1)}.indexOf,tk=M([].push);td=function(e,t){var r,n=k(e),i=0,o=[];for(r in n)!ew(e6,r)&&ew(n,r)&&tk(o,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tL(o,r)||tk(o,r));return o};var tx=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return td(e,tx)},f=Object.getOwnPropertySymbols;var tM=M([].concat);tg=K("Reflect","ownKeys")||function(e){var t=l(eD(e));return f?tM(t,f(e)):t},tv=function(e,t,n){for(var i=tg(t),o=0;o<i.length;o++){var c=i[o];ew(e,c)||n&&ew(n,c)||a(e,c,r(t,c))}};var tT={},tF=/#|\.prototype\./,tI=function(e,t){var r=tN[tA(e)];return r===tH||r!==tq&&(W(t)?E(t):!!t)},tA=tI.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tN=tI.data={},tq=tI.NATIVE="N",tH=tI.POLYFILL="P";tT=tI,m=function(e,t){var n,i,o,a,c,s=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[s]||ey(s,{}):b[s]&&b[s].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(c=r(n,i))&&c.value:n[i],!tT(u?i:s+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tv(a,o)}(e.sham||o&&o.sham)&&eR(a,"sham",!0),eV(n,i,a,e)}};var tR={},tC={},tD=Function.prototype,tG=tD.apply,tz=tD.call;tC="object"==typeof Reflect&&Reflect.apply||(j?tz.bind(tG):function(){return tz.apply(tG,arguments)});var tB={},tU={},tW=(tU=function(e){if("Function"===A(e))return M(e)})(tU.bind);tB=function(e,t){return es(e),void 0===t?e:j?tW(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=K("document","documentElement");var tQ={};tQ=M([].slice);var tK={},tV=TypeError;tK=function(e,t){if(e<t)throw new tV("Not enough arguments");return e};var tJ={};tJ=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===A(b.process);var tZ=b.setImmediate,t0=b.clearImmediate,t1=b.process,t2=b.Dispatch,t4=b.Function,t3=b.MessageChannel,t7=b.String,t5=0,t9={},t6="onreadystatechange";E(function(){p=b.location});var t8=function(e){if(ew(t9,e)){var t=t9[e];delete t9[e],t()}},re=function(e){return function(){t8(e)}},rt=function(e){t8(e.data)},rr=function(e){b.postMessage(t7(e),p.protocol+"//"+p.host)};tZ&&t0||(tZ=function(e){tK(arguments.length,1);var t=W(e)?e:t4(e),r=tQ(arguments,1);return t9[++t5]=function(){tC(t,void 0,r)},h(t5),t5},t0=function(e){delete t9[e]},tX?h=function(e){t1.nextTick(re(e))}:t2&&t2.now?h=function(e){t2.now(re(e))}:t3&&!tJ?(g=(v=new t3).port2,v.port1.onmessage=rt,h=tB(g.postMessage,g)):b.addEventListener&&W(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!E(rr)?(h=rr,b.addEventListener("message",rt,!1)):h=t6 in eA("script")?function(e){tY.appendChild(eA("script"))[t6]=function(){tY.removeChild(this),t8(e)}}:function(e){setTimeout(re(e),0)});var rn=(tR={set:tZ,clear:t0}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tR.set,ro={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rc=b.Function,rs=/MSIE .\./.test(ee)||ra&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ro=function(e,t){var r=t?2:1;return rs?function(n,i){var o=tK(arguments.length,1)>r,a=W(n)?n:rc(n),c=o?tQ(arguments,r):[],s=o?function(){tC(a,this,c)}:a;return t?e(s,i):e(s)}:e};var ru=b.setImmediate?ro(ri,!1):ri;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ru},{setImmediate:ru});var rl=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof d?r:d).prototype);return i(s,"_invoke",{value:(a=new $(o||[]),c=p,function(r,i){if(c===h)throw Error("Generator is already running");if(c===v){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(s){if(s===g)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var u=f(e,n,a);if("normal"===u.type){if(c=a.done?v:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=v,a.method="throw",a.arg=u.arg)}})}),s}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",v="completed",g={};function d(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var E=m.prototype=d.prototype=Object.create(b);function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,c){var s=f(e[i],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,c)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(E,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(j.prototype),u(j.prototype,c,function(){return this}),e.AsyncIterator=j,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new j(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(E),u(E,s,"Generator"),u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rl}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rl:Function("r","regeneratorRuntime = r")(rl)}const rf="https://forkify-api.herokuapp.com/api/v2/recipes/",rp=async function(e){try{let t=fetch(e),r=await Promise.race([t,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},rh={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},rv=async function(e){try{let{recipe:t}=(await rp(`${rf}${e}`)).data;rh.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients},console.log(rh.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rg=async function(e){try{rh.search.query=e;let t=await rp(`${rf}?search=${e}`);console.log(t),rh.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url}))}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rd=function(e=rh.search.page){rh.search.page=e;let t=(e-1)*rh.search.resultsPerPage,r=e*rh.search.resultsPerPage;return rh.search.results.slice(t,r)};var ry={};ry=new URL("icons.c14567a0.svg",import.meta.url).toString();class rm{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
        <div class="spinner">
              <svg>
                <use href="${y(ry)}#icon-loader"></use>
              </svg>
            </div>
            `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`
      <div class="error">
          <div>
            <svg>
              <use href="${y(ry)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
          <div>
            <svg>
              <use href="${y(ry)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rb extends rm{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
       <svg class="recipe__info-icon">
        <use href="${y(ry)}#icon-clock"></use>
       </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
       <svg class="recipe__info-icon">
         <use href="${y(ry)}#icon-users"></use>
       </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>
    
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${y(ry)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${y(ry)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="recipe__user-generated">
     
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${y(ry)}#icon-bookmark-fill"></use>
      </svg>
    </button>
    </div>
    
    <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
    </ul>
    </div>
    
    <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${y(ry)}#icon-arrow-right"></use>
      </svg>
    </a>
    </div>
    `}_generateMarkupIngredient(e){return`
  <li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${y(ry)}#icon-check"></use>
  </svg>
  <div class="recipe__quantity">${e.quantity}</div>
  <div class="recipe__description">
    <span class="recipe__unit">${e.unit}</span>
    ${e.description}
  </div>
</li>
  `}}var r_=new rb;class rw{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rE=new rw;class rS extends rm{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again :)";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
    <li class="preview">
            <a class="preview__link " href="#${e.id}">
              <figure class="preview__fig">
                <img src="${e.image}" alt="${e.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                
              </div>
            </a>
          </li>
    

    `}}var rj=new rS;class rO extends rm{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
      <button class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${y(ry)}#icon-arrow-right"></use>
            </svg>
          </button>
      `:e===t&&t>1?`
      <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${y(ry)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
      `:e<t?`
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${y(ry)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>

        <button class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${y(ry)}#icon-arrow-right"></use>
            </svg>
          </button>
    `:""}}var rP=new rO;const r$=async function(){try{let e=window.location.hash.slice(1);if(console.log(e),!e)return;r_.renderSpinner(),await rv(e),r_.render(rh.recipe)}catch(e){r_.renderError()}},rL=async function(){try{rj.renderSpinner();let e=rE.getQuery();if(!e)return;await rg(e),rj.render(rd(2)),rP.render(rh.search)}catch(e){console.log(e)}};r_.addHandlerRender(r$),rE.addHandlerSearch(rL);
//# sourceMappingURL=forkify.c9207976.js.map
