/*
 AngularJS v1.2.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,T,s){'use strict';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.15/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function $a(b){if(null==b||Aa(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:x(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(D(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else if($a(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Qc(b,
a,c){for(var d=Ob(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function ab(){for(var b=ia.length,a;b;){b--;a=ia[b].charCodeAt(0);if(57==a)return ia[b]="A",ia.join("");if(90==a)ia[b]="0";else return ia[b]=String.fromCharCode(a+1),ia.join("")}ia.unshift("0");return ia.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function v(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Qb(b,a);return b}function R(b){return parseInt(b,
10)}function Rb(b,a){return v(new (v(function(){},{prototype:b})),a)}function B(){}function Ba(b){return b}function Y(b){return function(){return b}}function E(b){return"undefined"===typeof b}function u(b){return"undefined"!==typeof b}function W(b){return null!=b&&"object"===typeof b}function x(b){return"string"===typeof b}function ub(b){return"number"===typeof b}function Ma(b){return"[object Date]"===ta.call(b)}function M(b){return"[object Array]"===ta.call(b)}function D(b){return"function"===typeof b}
function bb(b){return"[object RegExp]"===ta.call(b)}function Aa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Rc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Sc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function cb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Na(b,a){var c=cb(b,a);0<=c&&b.splice(c,1);return a}function $(b,a){if(Aa(b)||b&&b.$evalAsync&&b.$watch)throw Oa("cpws");
if(a){if(b===a)throw Oa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push($(b[c]));else{c=a.$$hashKey;r(a,function(b,c){delete a[c]});for(var d in b)a[d]=$(b[d]);Qb(a,c)}}else(a=b)&&(M(b)?a=$(b,[]):Ma(b)?a=new Date(b.getTime()):bb(b)?a=RegExp(b.source):W(b)&&(a=$(b,{})));return a}function Sb(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function ua(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ua(b[d],a[d]))return!1;return!0}}else{if(Ma(b))return Ma(a)&&b.getTime()==a.getTime();if(bb(b)&&bb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Aa(b)||Aa(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!D(b[d])){if(!ua(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!D(a[d]))return!1;
return!0}return!1}function Tb(){return T.securityPolicy&&T.securityPolicy.isActive||T.querySelector&&!(!T.querySelector("[ng-csp]")&&!T.querySelector("[data-ng-csp]"))}function db(b,a){var c=2<arguments.length?va.call(arguments,2):[];return!D(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(va.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Tc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Aa(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Tc,a?"  ":null)}function Ub(b){return x(b)?JSON.parse(b):b}function Pa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=O(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function fa(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?O(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+O(b)})}catch(d){return O(c)}}function Vb(b){try{return decodeURIComponent(b)}catch(a){}}function Wb(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.split("="),d=Vb(c[0]),u(d)&&(b=u(c[1])?Vb(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Xb(b){var a=[];r(b,function(b,d){M(b)?r(b,function(b){a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))}):a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))});return a.length?a.join("&"):""}function vb(b){return wa(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Uc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+
a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function Yb(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===T?"document":fa(b);throw Oa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Zb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(Q&&!d.test(Q.name))return c();Q.name=Q.name.replace(d,"");Ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function eb(b,a){a=a||"_";return b.replace(Vc,function(b,d){return(d?a:"")+b.toLowerCase()})}function wb(b,a,c){if(!b)throw Oa("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&M(b)&&(b=b[b.length-1]);wb(D(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function xa(b,a){if("hasOwnProperty"===b)throw Oa("badname",a);}function $b(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&D(b)?db(e,b):b}function xb(b){var a=b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Wc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||
(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}function Xc(b){v(b,{bootstrap:Yb,copy:$,extend:v,equals:ua,element:w,forEach:r,injector:Zb,noop:B,bind:db,toJson:oa,fromJson:Ub,identity:Ba,isUndefined:E,isDefined:u,isString:x,isFunction:D,isObject:W,isNumber:ub,isElement:Rc,isArray:M,
version:Yc,isDate:Ma,lowercase:O,uppercase:Da,callbacks:{counter:0},$$minErr:z,$$csp:Tb});Ra=Wc(Q);try{Ra("ngLocale")}catch(a){Ra("ngLocale",[]).provider("$locale",Zc)}Ra("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:$c});a.provider("$compile",ac).directive({a:ad,input:bc,textarea:bc,form:bd,script:cd,select:dd,style:ed,option:fd,ngBind:gd,ngBindHtml:hd,ngBindTemplate:id,ngClass:jd,ngClassEven:kd,ngClassOdd:ld,ngCloak:md,ngController:nd,ngForm:od,ngHide:pd,ngIf:qd,ngInclude:rd,
ngInit:sd,ngNonBindable:td,ngPluralize:ud,ngRepeat:vd,ngShow:wd,ngStyle:xd,ngSwitch:yd,ngSwitchWhen:zd,ngSwitchDefault:Ad,ngOptions:Bd,ngTransclude:Cd,ngModel:Dd,ngList:Ed,ngChange:Fd,required:cc,ngRequired:cc,ngValue:Gd}).directive({ngInclude:Hd}).directive(yb).directive(dc);a.provider({$anchorScroll:Id,$animate:Jd,$browser:Kd,$cacheFactory:Ld,$controller:Md,$document:Nd,$exceptionHandler:Od,$filter:ec,$interpolate:Pd,$interval:Qd,$http:Rd,$httpBackend:Sd,$location:Td,$log:Ud,$parse:Vd,$rootScope:Wd,
$q:Xd,$sce:Yd,$sceDelegate:Zd,$sniffer:$d,$templateCache:ae,$timeout:be,$window:ce,$$rAF:de,$$asyncCallback:ee})}])}function Sa(b){return b.replace(fe,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ge,"Moz$1")}function zb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,q,p,t;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(q=w(k[l]),m?q.triggerHandler("$destroy"):m=!m,p=0,q=(t=q.children()).length;p<q;p++)e.push(Ea(t[p]));return f.apply(this,arguments)}
var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function L(b){if(b instanceof L)return b;x(b)&&(b=aa(b));if(!(this instanceof L)){if(x(b)&&"<"!=b.charAt(0))throw Ab("nosel");return new L(b)}if(x(b)){var a=T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);Bb(this,a.childNodes);w(T.createDocumentFragment()).append(this)}else Bb(this,b)}function Cb(b){return b.cloneNode(!0)}function Fa(b){fc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Fa(b[a])}function gc(b,
a,c,d){if(u(d))throw Ab("offargs");var e=ja(b,"events");ja(b,"handle")&&(E(a)?r(e,function(a,c){Db(b,c,a);delete e[c]}):r(a.split(" "),function(a){E(c)?(Db(b,a,e[a]),delete e[a]):Na(e[a]||[],c)}))}function fc(b,a){var c=b[fb],d=Ta[c];d&&(a?delete Ta[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),gc(b)),delete Ta[c],b[fb]=s))}function ja(b,a,c){var d=b[fb],d=Ta[d||-1];if(u(c))d||(b[fb]=d=++he,d=Ta[d]={}),d[a]=c;else return d&&d[a]}function hc(b,a,c){var d=ja(b,"data"),e=u(c),f=!e&&
u(a),g=f&&!W(a);d||g||ja(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];v(d,a)}else return d}function Eb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function gb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function hb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Bb(b,a){if(a){a=a.nodeName||!u(a.length)||Aa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function ic(b,a){return ib(b,"$"+(a||"ngController")+"Controller")}function ib(b,a,c){b=w(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==s)return c;b=w(d.parentNode||11===d.nodeType&&d.host)}}function jc(b){for(var a=
0,c=b.childNodes;a<c.length;a++)Fa(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function kc(b,a){var c=jb[a.toLowerCase()];return c&&lc[b.nodeName]&&c}function ie(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||T);if(E(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=
function(){return c.defaultPrevented||!1===c.returnValue};var g=Sb(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=P?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ga(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=ab()):c=b;return a+":"+c}function Ua(b){r(b,this.put,this)}function mc(b){var a,c;"function"==
typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(je,""),c=c.match(ke),r(c[1].split(le),function(b){b.replace(me,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Qa(b[c],"fn"),a=b.slice(0,c)):Qa(b,"fn",!0);return a}function Zb(b){function a(a){return function(b,c){if(W(b))r(b,Pb(a));else return a(b,c)}}function c(a,b){xa(a,"service");if(D(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Va("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],
c,d,f,h;r(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(x(a))for(c=Ra(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else D(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Qa(a,"module")}catch(l){throw M(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),Va("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===
g)throw Va("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],h=mc(a),g,k,m;k=0;for(g=h.length;k<g;k++){m=h[k];if("string"!==typeof m)throw Va("itkn",m);f.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return W(e)||D(e)?e:c},get:c,
annotate:mc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",m=[],k=new Ua,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Y(b))}),constant:a(function(a,b){xa(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Va("unpr",
m.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||B)});return p}function Id(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==O(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):
a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ee(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function ne(b,a,c,d){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(t--,0===t)for(;H.length;)try{H.pop()()}catch(b){c.error(b)}}}function f(a,b){(function kb(){r(C,function(a){a()});A=b(kb,a)})()}function g(){y=null;J!=h.url()&&(J=h.url(),
r(ba,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var t=0,H=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){r(C,function(a){a()});0===t?a():H.push(a)};var C=[],A;h.addPollFn=function(a){E(A)&&f(100,n);C.push(a);return a};var J=k.href,F=a.find("base"),y=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(J!=
a)return J=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),F.attr("href",F.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var ba=[],S=!1;h.onUrlChange=function(a){if(!S){if(d.history)w(b).on("popstate",g);if(d.hashchange)w(b).on("hashchange",g);else h.addPollFn(g);S=!0}ba.push(a);return a};h.baseHref=function(){var a=F.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},Z="",U=h.baseHref();h.cookies=function(a,b){var d,
e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+U+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+U).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==Z)for(Z=m.cookie,d=Z.split("; "),N={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),N[a]===s&&(N[a]=unescape(e.substring(h+1))));return N}};h.defer=function(a,b){var c;t++;c=n(function(){delete p[c];
e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(B),!0):!1}}function Kd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new ne(b,d,a,c)}]}function Ld(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=v({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;
return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!E(b))return a in m||g++,m[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=q=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return v({},h,{size:g})}}}var a={};
b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ae(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ac(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,f=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g=/^<\s*(tr|th|td|thead|tbody|tfoot)(\s+[^>]*)?>/i,h=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){xa(a,"directive");x(a)?(wb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+
d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);D(h)?h={compile:Y(h)}:!h.compile&&h.link&&(h.compile=Y(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"A";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(e)):r(a,Pb(k));return this};this.aHrefSanitizationWhitelist=function(b){return u(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return u(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,n,q,p,t,H,C,A,J,F,y){function ba(a,b,c,d,e){a instanceof w||(a=w(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var f=N(a,b,a,c,d,e);S(a,"ng-scope");return function(b,
c,d){wb(b,"scope");var e=c?Ha.clone.call(a):a;r(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var h=e.length;d<h;d++){var g=e[d].nodeType;1!==g&&9!==g||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function S(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,p,t,q;f=c.length;var ca=Array(f);for(p=0;p<f;p++)ca[p]=c[p];q=p=0;for(t=g.length;p<t;q++)k=ca[q],c=g[p++],f=g[p++],l=w(k),c?(c.scope?(n=a.$new(),l.data("$scope",n)):n=a,(l=c.transclude)||
!e&&b?c(f,n,k,d,Z(a,l||b)):c(f,n,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,l,n,p,t=0;t<a.length;t++)k=new Fb,l=U(a[t],[],k,0===t?d:s,e),(f=l.length?Wa(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&S(w(a[t]),"ng-scope"),k=f&&f.terminal||!(n=a[t].childNodes)||!n.length?null:N(n,f?f.transclude:b),g.push(f,k),p=p||f||k,f=null;return p?h:null}function Z(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",db(c,c.$destroy));return d}}function U(a,
b,c,d,h){var g=c.$attr,k;switch(a.nodeType){case 1:u(b,ka(Ia(a).toLowerCase()),"E",d,h);var l,n,p;k=a.attributes;for(var t=0,q=k&&k.length;t<q;t++){var H=!1,C=!1;l=k[t];if(!P||8<=P||l.specified){n=l.name;p=ka(n);la.test(p)&&(n=eb(p.substr(6),"-"));var J=p.replace(/(Start|End)$/,"");p===J+"Start"&&(H=n,C=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));p=ka(n.toLowerCase());g[p]=n;c[p]=l=aa(l.value);kc(a,p)&&(c[p]=!0);ga(a,b,l,p);u(b,p,"A",d,h,H,C)}}a=a.className;if(x(a)&&""!==a)for(;k=f.exec(a);)p=
ka(k[2]),u(b,p,"C",d,h)&&(c[p]=aa(k[3])),a=a.substr(k.index+k[0].length);break;case 3:L(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))p=ka(k[1]),u(b,p,"M",d,h)&&(c[p]=aa(k[2]))}catch(y){}}b.sort(z);return b}function I(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function ya(a,b,c){return function(d,e,f,h,g){e=I(e[0],
b,c);return a(d,e,f,h,g)}}function Wa(a,c,d,e,f,h,g,k,p){function q(a,b,c,d){if(a){c&&(a=ya(a,c,d));a.require=G.require;if(N===G||G.$$isolateScope)a=nc(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=ya(b,c,d));b.require=G.require;if(N===G||G.$$isolateScope)b=nc(b,{isolateScope:!0});k.push(b)}}function C(a,b,c){var d,e="data",f=!1;if(x(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!f)throw ha("ctreq",
a,ga);}else M(a)&&(d=[],r(a,function(a){d.push(C(a,b,c))}));return d}function J(a,e,f,h,p){function q(a,b){var c;2>arguments.length&&(b=a,a=s);Ja&&(c=ya);return p(a,b,c)}var y,ca,A,I,ba,U,ya={},u;y=c===f?d:Sb(d,new Fb(w(f),d.$attr));ca=y.$$element;if(N){var oe=/^\s*([@=&])(\??)\s*(\w*)\s*$/;h=w(f);U=e.$new(!0);Z&&Z===N.$$originalDirective?h.data("$isolateScope",U):h.data("$isolateScopeNoTemplate",U);S(h,"ng-isolate-scope");r(N.scope,function(a,c){var d=a.match(oe)||[],f=d[3]||c,h="?"==d[2],d=d[1],
g,k,p,n;U.$$isolateBindings[c]=d+f;switch(d){case "@":y.$observe(f,function(a){U[c]=a});y.$$observers[f].$$scope=e;y[f]&&(U[c]=b(y[f])(e));break;case "=":if(h&&!y[f])break;k=t(y[f]);n=k.literal?ua:function(a,b){return a===b};p=k.assign||function(){g=U[c]=k(e);throw ha("nonassign",y[f],N.name);};g=U[c]=k(e);U.$watch(function(){var a=k(e);n(a,U[c])||(n(a,g)?p(e,a=U[c]):U[c]=a);return g=a},null,k.literal);break;case "&":k=t(y[f]);U[c]=function(a){return k(e,a)};break;default:throw ha("iscp",N.name,c,
a);}})}u=p&&q;F&&r(F,function(a){var b={$scope:a===N||a.$$isolateScope?U:e,$element:ca,$attrs:y,$transclude:u},c;ba=a.controller;"@"==ba&&(ba=y[a.name]);c=H(ba,b);ya[a.name]=c;Ja||ca.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});h=0;for(A=g.length;h<A;h++)try{I=g[h],I(I.isolateScope?U:e,ca,y,I.require&&C(I.require,ca,ya),u)}catch(v){n(v,fa(ca))}h=e;N&&(N.template||null===N.templateUrl)&&(h=U);a&&a(h,f.childNodes,s,p);for(h=k.length-1;0<=h;h--)try{I=k[h],I(I.isolateScope?
U:e,ca,y,I.require&&C(I.require,ca,ya),u)}catch(K){n(K,fa(ca))}}p=p||{};for(var y=-Number.MAX_VALUE,A,F=p.controllerDirectives,N=p.newIsolateScopeDirective,Z=p.templateDirective,u=p.nonTlbTranscludeDirective,Wa=!1,Ja=p.hasElementTranscludeDirective,K=d.$$element=w(c),G,ga,v,z=e,L,la=0,P=a.length;la<P;la++){G=a[la];var R=G.$$start,V=G.$$end;R&&(K=I(c,R,V));v=s;if(y>G.priority)break;if(v=G.scope)A=A||G,G.templateUrl||(Q("new/isolated scope",N,G,K),W(v)&&(N=G));ga=G.name;!G.templateUrl&&G.controller&&
(v=G.controller,F=F||{},Q("'"+ga+"' controller",F[ga],G,K),F[ga]=G);if(v=G.transclude)Wa=!0,G.$$tlb||(Q("transclusion",u,G,K),u=G),"element"==v?(Ja=!0,y=G.priority,v=I(c,R,V),K=d.$$element=w(T.createComment(" "+ga+": "+d[ga]+" ")),c=K[0],lb(f,w(va.call(v,0)),c),z=ba(v,e,y,h&&h.name,{nonTlbTranscludeDirective:u})):(v=w(Cb(c)).contents(),K.empty(),z=ba(v,e));if(G.template)if(Q("template",Z,G,K),Z=G,v=D(G.template)?G.template(K,d):G.template,v=oc(v),G.replace){h=G;v=E(v);c=v[0];if(1!=v.length||1!==c.nodeType)throw ha("tplrt",
ga,"");lb(f,K,c);P={$attr:{}};v=U(c,[],P);var X=a.splice(la+1,a.length-(la+1));N&&kb(v);a=a.concat(v).concat(X);B(d,P);P=a.length}else K.html(v);if(G.templateUrl)Q("template",Z,G,K),Z=G,G.replace&&(h=G),J=O(a.splice(la,a.length-la),K,d,f,z,g,k,{controllerDirectives:F,newIsolateScopeDirective:N,templateDirective:Z,nonTlbTranscludeDirective:u}),P=a.length;else if(G.compile)try{L=G.compile(K,d,z),D(L)?q(null,L,R,V):L&&q(L.pre,L.post,R,V)}catch(Y){n(Y,fa(K))}G.terminal&&(J.terminal=!0,y=Math.max(y,G.priority))}J.scope=
A&&!0===A.scope;J.transclude=Wa&&z;p.hasElementTranscludeDirective=Ja;return J}function kb(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function u(b,e,f,h,g,l,p){if(e===g)return null;g=null;if(c.hasOwnProperty(e)){var t;e=a.get(e+d);for(var q=0,H=e.length;q<H;q++)try{t=e[q],(h===s||h>t.priority)&&-1!=t.restrict.indexOf(f)&&(l&&(t=Rb(t,{$$start:l,$$end:p})),b.push(t),g=t)}catch(y){n(y)}}return g}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&
(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(S(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function E(a){var b;a=aa(a);if(b=g.exec(a)){b=b[1].toLowerCase();a=w("<table>"+a+"</table>");if(/(thead|tbody|tfoot)/.test(b))return a.children(b);a=a.children("tbody");return"tr"===b?a.children("tr"):a.children("tr").contents()}return w("<div>"+
a+"</div>").contents()}function O(a,b,c,d,e,f,h,g){var k=[],l,n,t=b[0],H=a.shift(),y=v({},H,{templateUrl:null,transclude:null,replace:null,$$originalDirective:H}),C=D(H.templateUrl)?H.templateUrl(b,c):H.templateUrl;b.empty();q.get(J.getTrustedResourceUrl(C),{cache:p}).success(function(p){var q,J;p=oc(p);if(H.replace){p=E(p);q=p[0];if(1!=p.length||1!==q.nodeType)throw ha("tplrt",H.name,C);p={$attr:{}};lb(d,b,q);var A=U(q,[],p);W(H.scope)&&kb(A);a=A.concat(a);B(c,p)}else q=t,b.html(p);a.unshift(y);
l=Wa(a,q,c,e,b,H,f,h,g);r(d,function(a,c){a==q&&(d[c]=b[0])});for(n=N(b[0].childNodes,e);k.length;){p=k.shift();J=k.shift();var I=k.shift(),F=k.shift(),A=b[0];if(J!==t){var ba=J.className;g.hasElementTranscludeDirective&&H.replace||(A=Cb(q));lb(I,w(J),A);S(w(A),ba)}J=l.transclude?Z(p,l.transclude):F;l(n,p,A,d,J)}k=null}).error(function(a,b,c,d){throw ha("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):l(n,b,c,d,e)}}function z(a,b){var c=b.priority-a.priority;
return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,fa(d));}function L(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:Y(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);S(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function Ja(a,b){if("srcdoc"==b)return J.HTML;var c=Ia(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return J.RESOURCE_URL}
function ga(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ia(a))throw ha("selmulti",fa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,g){d=g.$$observers||(g.$$observers={});if(h.test(e))throw ha("nodomevents");if(f=b(g[e],!0,Ja(a,e)))g[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)})}}}})}}function lb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=
0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;break}f&&f.replaceChild(c,d);a=T.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function nc(a,b){return v(function(){return a.apply(null,arguments)},a,b)}var Fb=function(a,b){this.$$element=a;this.$attr=b||{}};Fb.prototype={$normalize:ka,$addClass:function(a){a&&0<
a.length&&F.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&F.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=pc(a,b),d=pc(b,a);0===c.length?F.removeClass(this.$$element,d):0===d.length?F.addClass(this.$$element,c):F.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=kc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=eb(a,"-"));e=Ia(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&
"src"===a)this[a]=b=y(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);C.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var R=b.startSymbol(),V=b.endSymbol(),oc="{{"==R||"}}"==V?Ba:function(a){return a.replace(/\{\{/g,R).replace(/}}/g,V)},la=/^ngAttr[A-Z]/;return ba}]}function ka(b){return Sa(b.replace(pe,
""))}function pc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Md(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){xa(a,"controller");W(a)?v(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;x(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:$b(f.$scope,h,!0)||$b(d,h,!0),Qa(e,h,!0));g=c.instantiate(e,f);
if(m){if(!f||"object"!=typeof f.$scope)throw z("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function Nd(){this.$get=["$window",function(b){return w(b.document)}]}function Od(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function qc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=O(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function rc(b){var a=W(b)?b:s;return function(c){a||
(a=qc(b));return c?a[O(c)]||null:a}}function sc(b,a,c){if(D(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Rd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){x(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Ub(d)));return d}],transformRequest:[function(a){return W(a)&&"[object File]"!==ta.call(a)&&"[object Blob]"!==ta.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:$(d),put:$(d),patch:$(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function c(a){var b=v({},a,{data:sc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;
r(a,function(b,d){D(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=v({},a.headers),f,h,c=v({},c.common,c[O(a.method)]);b(c);b(d);a:for(f in c){a=O(f);for(h in d)if(O(h)===a)continue a;d[f]=c[f]}return d}(a);v(d,a);d.headers=f;d.method=Da(d.method);(a=Gb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=[function(a){f=a.headers;var b=sc(a.data,rc(f),a.transformRequest);E(a.data)&&r(f,function(a,b){"content-type"===O(b)&&delete f[b]});
E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,b,f).then(c,c)},s],g=n.when(d);for(r(A,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};
return g}function t(b,c,f){function g(a,b,c){A&&(200<=a&&300>a?A.put(s,[a,b,qc(c)]):A.remove(s));k(b,a,c);d.$$phase||d.$apply()}function k(a,c,d){c=Math.max(c,0);(200<=c&&300>c?t.resolve:t.reject)({data:a,status:c,headers:rc(d),config:b})}function m(){var a=cb(p.pendingRequests,b);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),q=t.promise,A,r,s=H(b.url,b.params);p.pendingRequests.push(b);q.then(m,m);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(A=W(b.cache)?b.cache:W(e.cache)?e.cache:
C);if(A)if(r=A.get(s),u(r)){if(r.then)return r.then(m,m),r;M(r)?k(r[1],r[0],$(r[2])):k(r,200,{})}else A.put(s,q);E(r)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return q}function H(a,b){if(!b)return a;var c=[];Qc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),r(a,function(a){W(a)&&(a=oa(a));c.push(wa(b)+"="+wa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var C=c("$http"),A=[];r(f,function(a){A.unshift(x(a)?q.get(a):q.invoke(a))});r(g,function(a,
b){var c=x(a)?q.get(a):q.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(v(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(v(d||{},{method:a,url:b,data:c}))}})})("post","put");p.defaults=e;return p}]}function qe(b){if(8>=P&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!Q.XMLHttpRequest))return new Q.ActiveXObject("Microsoft.XMLHTTP");if(Q.XMLHttpRequest)return new Q.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Sd(){this.$get=["$browser","$window","$document",function(b,a,c){return re(b,qe,b.defer,a.angular.callbacks,c[0])}]}function re(b,a,c,d,e){function f(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;P&&8>=P?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&
d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var g=-1;return function(e,m,k,l,n,q,p,t){function H(){A=g;F&&F();y&&y.abort()}function C(a,d,e,f){S&&c.cancel(S);F=y=null;0===d&&(d=e?200:"file"==pa(m).protocol?404:0);a(1223==d?204:d,e,f);b.$$completeOutstandingRequest(B)}var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==O(e)){var J="_"+(d.counter++).toString(36);d[J]=function(a){d[J].data=a};var F=f(m.replace("JSON_CALLBACK","angular.callbacks."+J),function(){d[J].data?
C(l,200,d[J].data):C(l,A||-2);d[J]=Ca.noop})}else{var y=a(e);y.open(e,m,!0);r(n,function(a,b){u(a)&&y.setRequestHeader(b,a)});y.onreadystatechange=function(){if(y&&4==y.readyState){var a=null,b=null;A!==g&&(a=y.getAllResponseHeaders(),b="response"in y?y.response:y.responseText);C(l,A||y.status,b,a)}};p&&(y.withCredentials=!0);if(t)try{y.responseType=t}catch(s){if("json"!==t)throw s;}y.send(k||null)}if(0<q)var S=c(H,q);else q&&q.then&&q.then(H)}}function Pd(){var b="{{",a="}}";this.startSymbol=function(a){return a?
(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,q,p=0,t=[],H=f.length,C=!1,A=[];p<H;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,n+g))?(p!=n&&t.push(f.substring(p,n)),t.push(p=c(C=f.substring(n+g,q))),p.exp=C,p=q+h,C=!0):(p!=H&&t.push(f.substring(p)),p=H);(H=t.length)||(t.push(""),H=1);if(l&&1<t.length)throw tc("noconcat",f);if(!k||C)return A.length=H,p=function(a){try{for(var b=0,c=H,h;b<c;b++)"function"==
typeof(h=t[b])&&(h=h(a),h=l?e.getTrusted(l,h):e.valueOf(h),null===h||E(h)?h="":"string"!=typeof h&&(h=oa(h))),A[b]=h;return A.join("")}catch(g){a=tc("interr",f,g.toString()),d(a)}},p.exp=f,p.parts=t,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Qd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,t=u(m)&&!m;h=u(h)?h:0;q.then(null,null,d);
q.$$intervalId=k(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);t||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function Zc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",
gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",
"short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function uc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=vb(b[a]);return b.join("/")}function vc(b,a,c){b=pa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=R(b.port)||se[b.protocol]||null}function wc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=pa(b,c);a.$$path=decodeURIComponent(d&&
"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Wb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ma(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Xa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Hb(b){return b.substr(0,Xa(b).lastIndexOf("/")+1)}function xc(b,a){this.$$html5=!0;a=a||"";var c=Hb(b);vc(b,this,b);this.$$parse=function(a){var e=ma(c,a);if(!x(e))throw Ib("ipthprfx",
a,c);wc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Xb(this.$$search),b=this.$$hash?"#"+vb(this.$$hash):"";this.$$url=uc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=ma(b,d))!==s)return d=e,(e=ma(a,e))!==s?c+(ma("/",e)||e):b+d;if((e=ma(c,d))!==s)return c+e;if(c==d+"/")return c}}function Jb(b,a){var c=Hb(b);vc(b,this,b);this.$$parse=function(d){var e=ma(b,d)||ma(c,d),e="#"==e.charAt(0)?ma(a,e):
this.$$html5?e:"";if(!x(e))throw Ib("ihshprfx",d,a);wc(e,this,b);d=this.$$path;var f=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Xb(this.$$search),e=this.$$hash?"#"+vb(this.$$hash):"";this.$$url=uc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Xa(b)==Xa(a))return a}}function yc(b,a){this.$$html5=!0;Jb.apply(this,arguments);var c=Hb(b);
this.$$rewrite=function(d){var e;if(b==Xa(d))return d;if(e=ma(c,d))return b+a+e;if(c===d+"/")return c}}function mb(b){return function(){return this[b]}}function zc(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Td(){var b="",a=!1;this.hashPrefix=function(a){return u(a)?(b=a,this):b};this.html5Mode=function(b){return u(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",
h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?xc:yc):(m=Xa(k),e=Jb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=w(a.target);"a"!==O(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href");W(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=pa(e.animVal).href);var g=h.$$rewrite(e);e&&(!b.attr("target")&&g&&!a.isDefaultPrevented())&&
(a.preventDefault(),g!=d.url()&&(h.$$parse(g),c.$apply(),Q.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?
h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return l});return h}]}function Ud(){var b=!0,a=this;this.debugEnabled=function(a){return u(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||B;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=
[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function da(b,a){if("constructor"===b)throw za("isecfld",a);return b}function Ya(b,a){if(b){if(b.constructor===b)throw za("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw za("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw za("isecdom",
a);}return b}function nb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=da(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=da(a.shift(),d);return b[f]=c}function Ac(b,a,c,d,e,f,g){da(b,f);da(a,f);da(c,f);da(d,f);da(e,f);return g.unwrapPromises?function(h,g){var k=g&&g.hasOwnProperty(b)?g:h,l;if(null==k)return k;(k=k[b])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);
return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function te(b,a){da(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ue(b,a,c){da(b,c);da(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Bc(b,a,c){if(Kb.hasOwnProperty(b))return Kb[b];
var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Ac(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var h=0,g;do g=Ac(d[h++],d[h++],d[h++],d[h++],d[h++],c,a)(b,f),f=s,b=g;while(h<e);return g};else{var g="var p;\n";r(d,function(b,d){da(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=Y(g);f=a.unwrapPromises?function(a,b){return h(a,b,qa)}:h}else f=ue(d[0],d[1],c);else f=te(d[0],c);"hasOwnProperty"!==b&&(Kb[b]=f);return f}function Vd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return u(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return u(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer",
"$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!Cc.hasOwnProperty(b)&&(Cc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Lb(a);e=(new Za(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return B}}}]}function Xd(){this.$get=["$rootScope","$exceptionHandler",
function(b,a){return ve(function(a){b.$evalAsync(a)},a)}]}function ve(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],k,l;return l={resolve:function(a){if(g){var c=g;g=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),H=function(d){try{l.resolve((D(b)?
b:c)(d))}catch(e){l.reject(e),a(e)}},C=function(b){try{l.resolve((D(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},A=function(b){try{l.notify((D(h)?h:c)(b))}catch(d){a(d)}};g?g.push([H,C,A]):k.then(H,C,A);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var h=null;try{h=(a||c)()}catch(g){return b(g,!1)}return h&&D(h.then)?h.then(function(){return b(e,f)},function(a){return b(a,!1)}):
b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&D(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,h){var g=e();b(function(){try{g.resolve((D(h)?h:d)(c))}catch(b){g.reject(b),a(b)}});return g.promise}}};return{defer:e,reject:g,when:function(h,k,l,n){var q=e(),p,t=function(b){try{return(D(k)?k:c)(b)}catch(d){return a(d),
g(d)}},H=function(b){try{return(D(l)?l:d)(b)}catch(c){return a(c),g(c)}},C=function(b){try{return(D(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(t,H,C)))},function(a){p||(p=!0,q.resolve(H(a)))},function(a){p||q.notify(C(a))})});return q.promise},all:function(a){var b=e(),c=0,d=M(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}
function de(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Wd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=ab();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function k(a,b){var c=f(a);
Qa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=ab());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;
this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!D(b)){var g=k(b||B,"listener");h.fn=function(a,b,c){g(c)}}if("string"==typeof a&&e.constant){var m=h.fn;h.fn=function(a,b,c){m.call(this,a,b,c);Na(f,h)}}f||(f=this.$$watchers=[]);f.unshift(h);return function(){Na(f,h);c=null}},$watchCollection:function(a,b){var c=this,d,e,h,g=1<b.length,
k=0,m=f(a),l=[],n={},q=!0,r=0;return this.$watch(function(){d=m(c);var a,b;if(W(d))if($a(d))for(e!==l&&(e=l,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(k++,e[b]=d[b]):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=
!1,b(d,d,c)):b(d,h,c);if(g)if(W(d))if($a(d)){h=Array(d.length);for(var a=0;a<d.length;a++)h[a]=d[a]}else for(a in h={},d)Dc.call(d,a)&&(h[a]=d[a]);else h=d})},$digest:function(){var d,f,h,g,k=this.$$asyncQueue,l=this.$$postDigestQueue,r,y,s=b,S,N=[],u,v,I;m("$digest");c=null;do{y=!1;for(S=this;k.length;){try{I=k.shift(),I.scope.$eval(I.expression)}catch(w){q.$$phase=null,e(w)}c=null}a:do{if(g=S.$$watchers)for(r=g.length;r--;)try{if(d=g[r])if((f=d.get(S))!==(h=d.last)&&!(d.eq?ua(f,h):"number"==typeof f&&
"number"==typeof h&&isNaN(f)&&isNaN(h)))y=!0,c=d,d.last=d.eq?$(f):f,d.fn(f,h===n?f:h,S),5>s&&(u=4-s,N[u]||(N[u]=[]),v=D(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,v+="; newVal: "+oa(f)+"; oldVal: "+oa(h),N[u].push(v));else if(d===c){y=!1;break a}}catch(x){q.$$phase=null,e(x)}if(!(g=S.$$childHead||S!==this&&S.$$nextSibling))for(;S!==this&&!(g=S.$$nextSibling);)S=S.$parent}while(S=g);if((y||k.length)&&!s--)throw q.$$phase=null,a("infdig",b,oa(N));}while(y||k.length);for(q.$$phase=null;l.length;)try{l.shift()()}catch(B){e(B)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,db(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null)}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[cb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,h=!1,g={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},k=[g].concat(va.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;g.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(h)break;f=f.$parent}while(f);
return g},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},h=[f].concat(va.call(arguments,1)),g,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(l){e(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;return q}]}function $c(){var b=
/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!P||8<=P)if(f=pa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function we(b){if("self"===b)return b;if(x(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(bb(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function Ec(b){var a=[];u(b)&&r(b,function(b){a.push(we(b))});return a}function Zd(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Ec(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Ec(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ea.HTML]=d(f);g[ea.CSS]=d(f);g[ea.URL]=d(f);g[ea.JS]=d(f);g[ea.RESOURCE_URL]=d(g[ea.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===
s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var f=pa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Gb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Gb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw ra("insecurl",d.toString());}if(c===
ea.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function Yd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=$(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ba);e.parseAs=
function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(ea,function(a,b){var c=O(b);e[Sa("parse_as_"+c)]=function(b){return f(a,b)};e[Sa("get_trusted_"+c)]=function(b){return g(a,b)};e[Sa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function $d(){this.$get=["$window","$document",function(b,a){var c={},d=R((/android (\d+)/.exec(O((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,n=!1;if(k){for(var q in k)if(l=m.exec(q)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||l&&n||(l=x(f.body.style.webkitTransition),n=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==P)return!1;if(E(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Tb(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:P,msieDocumentMode:g}}]}function be(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=u(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=k;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function pa(b,a){var c=b;P&&(V.setAttribute("href",c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:
"/"+V.pathname}}function Gb(b){b=x(b)?pa(b):b;return b.protocol===Fc.protocol&&b.host===Fc.host}function ce(){this.$get=Y(Q)}function ec(b){function a(d,e){if(W(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Gc);a("date",Hc);a("filter",xe);a("json",ye);a("limitTo",ze);a("lowercase",Ae);a("number",Ic);a("orderBy",Jc);a("uppercase",Be)}function xe(){return function(b,
a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ca.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Dc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
b[g];e.check(h)&&d.push(h)}return d}}function Gc(b){var a=b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Kc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){return Kc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Kc(b,a,c,d,e){if(null==b||!isFinite(b)||W(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Lc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Lc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(l=g.length-n,k=0;k<l;k++)0===(l-k)%q&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%n&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);
m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Mb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Mb(e,a,d)}}function ob(b,a){return function(c,d){var e=c["get"+b](),f=Da(a?"SHORT"+b:b);return d[f][e]}}function Hc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=
b[8]?a.setUTCHours:a.setHours;b[9]&&(f=R(b[9]+b[10]),g=R(b[9]+b[11]));h.call(a,R(b[1]),R(b[2])-1,R(b[3]));f=R(b[4]||0)-f;g=R(b[5]||0)-g;h=R(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Ce.test(c)?R(c):a(c));ub(c)&&(c=new Date(c));if(!Ma(c))return c;for(;e;)(m=De.exec(e))?
(g=g.concat(va.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Ee[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function ye(){return function(b){return oa(b,!0)}}function ze(){return function(b,a){if(!M(b)&&!x(b))return b;a=R(a);if(x(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Jc(b){return function(a,
c,d){function e(a,b){return Pa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=Sc(c,function(a){var c=!1,d=a||Ba;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var h=d();return e(function(a,b){return f(a[h],b[h])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);
return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){D(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Y(b)}function Mc(b,a,c,d){function e(a,c){c=c?"-"+eb(c,"-"):"";d.removeClass(b,(a?pb:qb)+c);d.addClass(b,(a?qb:pb)+c)}var f=this,g=b.parent().controller("form")||rb,h=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ka);e(!0);f.$addControl=function(a){xa(a.$name,
"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Na(k,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Na(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||e(b);if(d){if(-1!=cb(d,c))return}else m[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ka);d.addClass(b,
sb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,sb);d.addClass(b,Ka);f.$dirty=!1;f.$pristine=!0;r(k,function(a){a.$setPristine()})}}function na(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Fe(b,a,c){var d=c.prop("validity");W(d)&&(c=function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)},b.$parsers.push(c),b.$formatters.push(c))}function tb(b,a,c,d,e,f){var g=a.prop("validity");if(!e.android){var h=
!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;m()})}var m=function(){if(!h){var e=a.val();Pa(c.ngTrim||"T")&&(e=aa(e));if(d.$viewValue!==e||g&&""===e&&!g.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",m);else{var k,l=function(){k||(k=f.defer(function(){m();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||l()});if(e.hasEvent("paste"))a.on("paste cut",
l)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return na(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw z("ngPattern")("noregexp",n,e,fa(a));return na(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var q=R(c.ngMinlength);e=function(a){return na(d,"minlength",d.$isEmpty(a)||
a.length>=q,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=R(c.ngMaxlength);e=function(a){return na(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Nb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function f(b){if(!0===a||c.$index%2===a){var d=g(b||"");h?ua(b,h)||e.$updateClass(d,g(h)):e.$addClass(d)}h=$(b)}function g(a){if(M(a))return a.join(" ");if(W(a)){var b=[];r(a,function(a,c){a&&b.push(c)});
return b.join(" ")}return a}var h;c.$watch(e[b],f,!0);e.$observe("class",function(a){f(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,f){var h=d&1;if(h!==f&1){var n=g(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var O=function(b){return x(b)?b.toLowerCase():b},Dc=Object.prototype.hasOwnProperty,Da=function(b){return x(b)?b.toUpperCase():b},P,w,Ea,va=[].slice,Ge=[].push,ta=Object.prototype.toString,Oa=z("ng"),Ca=Q.angular||(Q.angular={}),Ra,Ia,ia=["0","0","0"];P=R((/msie (\d+)/.exec(O(navigator.userAgent))||
[])[1]);isNaN(P)&&(P=R((/trident\/.*; rv:(\d+)/.exec(O(navigator.userAgent))||[])[1]));B.$inject=[];Ba.$inject=[];var aa=function(){return String.prototype.trim?function(b){return x(b)?b.trim():b}:function(b){return x(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ia=9>P?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Da(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Vc=/[A-Z]/g,Yc={full:"1.2.15",major:1,minor:2,dot:15,
codeName:"beer-underestimating"},Ta=L.cache={},fb=L.expando="ng-"+(new Date).getTime(),he=1,Nc=Q.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Db=Q.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};L._data=function(b){return this.cache[b[this.expando]]||{}};var fe=/([\:\-\_]+(.))/g,ge=/^moz([A-Z])/,Ab=z("jqLite"),Ha=L.prototype={ready:function(b){function a(){c||(c=!0,
b())}var c=!1;"complete"===T.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),L(Q).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Ge,sort:[].sort,splice:[].splice},jb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){jb[O(b)]=b});var lc={};r("input select option textarea button form details".split(" "),function(b){lc[Da(b)]=
!0});r({data:hc,inheritedData:ib,scope:function(b){return w(b).data("$scope")||ib(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w(b).data("$isolateScope")||w(b).data("$isolateScopeNoTemplate")},controller:ic,injector:function(b){return ib(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Eb,css:function(b,a,c){a=Sa(a);if(u(c))b.style[a]=c;else{var d;8>=P&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=P&&(d=""===d?s:
d);return d}},attr:function(b,a,c){var d=O(a);if(jb[d])if(u(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||B).specified?d:s;else if(u(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(u(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>P?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";
b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ia(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Fa(d[c]);b.innerHTML=a},empty:jc},function(b,a){L.prototype[a]=function(a,d){var e,f;if(b!==jc&&(2==b.length&&b!==Eb&&b!==ic?a:d)===s){if(W(a)){for(e=0;e<this.length;e++)if(b===hc)b(this[e],a);else for(f in a)b(this[e],
f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});r({removeData:fc,dealoc:Fa,on:function a(c,d,e,f){if(u(f))throw Ab("onargs");var g=ja(c,"events"),h=ja(c,"handle");g||ja(c,"events",g={});h||ja(c,"handle",h=ie(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=T.body.contains||T.body.compareDocumentPosition?function(a,
c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Nc(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:gc,one:function(a,c,d){a=w(a);a.on(c,function f(){a.off(c,d);a.off(c,
f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Fa(a);r(new L(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new L(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new L(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Fa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new L(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:hb,removeClass:gb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;E(f)&&(f=!Eb(a,c));(f?hb:gb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Cb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:B,stopPropagation:B}];r(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){L.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)E(g)?(g=a(this[h],c,e,f),u(g)&&(g=w(g))):Bb(g,a(this[h],c,e,f));return u(g)?g:this};L.prototype.bind=L.prototype.on;
L.prototype.unbind=L.prototype.off});Ua.prototype={put:function(a,c){this[Ga(a)]=c},get:function(a){return this[Ga(a)]},remove:function(a){var c=this[a=Ga(a)];delete this[a];return c}};var ke=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,le=/,/,me=/^\s*(_?)(\S+?)\1\s*$/,je=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Va=z("$injector"),He=z("$animate"),Jd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw He("notcsel",c);this.$$selectors[c.substr(1)]=
e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=x(c)?c:M(c)?c.join(" "):"";r(a,function(a){hb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=
x(c)?c:M(c)?c.join(" "):"";r(a,function(a){gb(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){hb(a,c);gb(a,g)});h&&d(h)},enabled:B}}]}],ha=z("$compile");ac.$inject=["$provide","$$sanitizeUriProvider"];var pe=/^(x[\:\-_]|data[\:\-_])/i,tc=z("$interpolate"),Ie=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,se={http:80,https:443,ftp:21},Ib=z("$location");yc.prototype=Jb.prototype=xc.prototype={$$html5:!1,$$replace:!1,absUrl:mb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Ie.exec(a);d[1]&&
this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:mb("$$protocol"),host:mb("$$host"),port:mb("$$port"),path:zc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a))this.$$search=Wb(a);else if(W(a))this.$$search=a;else throw Ib("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:zc("$$hash",
Ba),replace:function(){this.$$replace=!0;return this}};var za=z("$parse"),Cc={},qa,La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:B,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return u(d)?u(e)?d+e:d:u(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(u(d)?d:0)-(u(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,
c)},"=":B,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,
c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Je={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Lb=function(a){this.options=a};Lb.prototype={constructor:Lb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=La[this.ch],g=La[d],h=La[e];h?(this.tokens.push({index:this.index,
text:e,fn:h}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+
a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=u(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw za("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=
O(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=
this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=La[c],d.json=La[c];else{var m=Bc(c,this.options,this.text);d.fn=v(function(a,c){return m(a,c)},{assign:function(d,e){return nb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Je[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;
this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Za.ZERO=function(){return 0};Za.prototype={constructor:Za,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,
index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(",
"[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw za("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw za("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},
expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return v(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return v(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return v(function(e,f){return c(e,
f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Bc(d,this.options,this.text);return v(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){return nb(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return v(function(e,f){var g=a(e,f),h=d(e,f),m;if(!g)return s;(g=Ya(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=
a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return Ya(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||B;Ya(m,e.text);Ya(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Ya(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return v(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return v(function(c,d){for(var e={},m=0;m<
a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Kb={},ra=z("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=T.createElement("a"),Fc=pa(Q.location.href,!0);ec.$inject=["$provide"];Gc.$inject=["$locale"];Ic.$inject=["$locale"];var Lc=".",Ee={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:ob("Month"),MMM:ob("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",
1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:ob("Day"),EEE:ob("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))}},De=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ce=/^\-?\d+$/;Hc.$inject=["$locale"];var Ae=Y(O),Be=Y(Da);Jc.$inject=
["$parse"];var ad=Y({restrict:"E",compile:function(a,c){8>=P&&(c.href||c.name||c.$set("href",""),a.append(T.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===ta.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),yb={};r(jb,function(a,c){if("multiple"!=a){var d=ka("ng-"+c);yb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src",
"srcset","href"],function(a){var c=ka("ng-"+a);yb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===ta.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),P&&g&&e.prop(g,f[h]))})}}}});var rb={$addControl:B,$removeControl:B,$setValidity:B,$setDirty:B,$setPristine:B};Mc.$inject=["$element","$attrs","$scope","$animate"];var Oc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Mc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Nc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Db(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&nb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&nb(a,k,s,k);v(g,rb)})}}}}}]},bd=Oc(),od=Oc(!0),Ke=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Le=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Me=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Pc={text:tb,number:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Me.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Fe(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return na(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),
e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return na(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return na(e,"number",e.$isEmpty(a)||ub(a),a)})},url:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);a=function(a){return na(e,"url",e.$isEmpty(a)||Ke.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);a=function(a){return na(e,"email",e.$isEmpty(a)||Le.test(a),a)};e.$formatters.push(a);
e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",ab());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;x(f)||(f=!0);x(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};
e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:B,button:B,submit:B,reset:B,file:B},bc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Pc[O(f.type)]||Pc.text)(d,e,f,g,c,a)}}}],qb="ng-valid",pb="ng-invalid",Ka="ng-pristine",sb="ng-dirty",Ne=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+eb(c,"-"):"";g.removeClass(e,(a?pb:qb)+c);
g.addClass(e,(a?qb:pb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var m=f(d.ngModel),k=m.assign;if(!k)throw z("ngModel")("nonassign",d.ngModel,fa(e));this.$render=B;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||rb,n=0,q=this.$error={};e.addClass(Ka);h(!0);this.$setValidity=function(a,c){q[a]!==
!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;g.removeClass(e,sb);g.addClass(e,Ka)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Ka),g.addClass(e,sb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),r(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=m(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],Dd=function(){return{require:["ngModel","^?form"],controller:Ne,link:function(a,c,d,e){var f=e[0],g=e[1]||rb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Fd=Y({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
cc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Ed=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&r(a.split(f),function(a){a&&
c.push(aa(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Oe=/^(true|false|\d+)$/,Gd=function(){return{priority:100,compile:function(a,c){return Oe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},gd=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),id=["$interpolate",
function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],hd=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],jd=Nb("",!0),ld=Nb("Odd",0),kd=Nb("Even",1),md=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),
nd=[function(){return{scope:!0,controller:"@",priority:500}}],dc={};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ka("ng-"+a);dc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(O(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var qd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",
$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(f){Pa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=T.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=xb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],rd=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ca.noop,compile:function(g,
h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(g,h,p,r,s){var v=0,A,w,F,y=function(){w&&(w.remove(),w=null);A&&(A.$destroy(),A=null);F&&(e.leave(F,function(){w=null}),w=F,F=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!u(l)||l&&!g.$eval(l)||d()},p=++v;f?(a.get(f,{cache:c}).success(function(a){if(p===v){var c=g.$new();r.template=a;a=s(c,function(a){y();e.enter(a,null,h,m)});A=c;F=a;A.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){p===
v&&y()}),g.$emit("$includeContentRequested")):(y(),r.template=null)})}}}}],Hd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],sd=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),td=sa({terminal:!0,priority:1E3}),ud=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||
0,l=e.$eval(m)||{},n={},q=c.startSymbol(),p=c.endSymbol(),t=/^when(Minus)?(.+)$/;r(g,function(a,c){t.test(c)&&(l[O(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+h+"-"+k+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],vd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,
link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,t,s,v,u={$id:Ga};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){v&&(u[v]=a);u[s]=c;u.$index=d;return n(e,u)}):(p=function(a,c){return Ga(c)},t=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);s=l[3]||l[1];v=l[2];var J={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,u={},A,I,x,B,E,K,
z=[];if($a(a))E=a,n=q||p;else{n=q||t;E=[];for(x in a)a.hasOwnProperty(x)&&"$"!=x.charAt(0)&&E.push(x);E.sort()}A=E.length;h=z.length=E.length;for(g=0;g<h;g++)if(x=a===E?g:E[g],B=a[x],B=n(x,B,g),xa(B,"`track by` id"),J.hasOwnProperty(B))K=J[B],delete J[B],u[B]=K,z[g]=K;else{if(u.hasOwnProperty(B))throw r(z,function(a){a&&a.scope&&(J[a.id]=a)}),d("dupes",k,B);z[g]={id:B};u[B]=!1}for(x in J)J.hasOwnProperty(x)&&(K=J[x],g=xb(K.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),K.scope.$destroy());
g=0;for(h=E.length;g<h;g++){x=a===E?g:E[g];B=a[x];K=z[g];z[g-1]&&(l=z[g-1].clone[z[g-1].clone.length-1]);if(K.scope){I=K.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);K.clone[0]!=n&&c.move(xb(K.clone),null,w(l));l=K.clone[K.clone.length-1]}else I=e.$new();I[s]=B;v&&(I[v]=x);I.$index=g;I.$first=0===g;I.$last=g===A-1;I.$middle=!(I.$first||I.$last);I.$odd=!(I.$even=0===(g&1));K.scope||m(I,function(a){a[a.length++]=T.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,w(l));l=a;K.scope=I;K.clone=
a;u[K.id]=K})}J=u})}}}],wd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Pa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],pd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Pa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],xd=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),yd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,f){var g,h,m,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q=k.length;if(0<q){if(m){for(n=0;n<q;n++)m[n].remove();m=null}m=[];for(n=0;n<q;n++){var p=h[n];k[n].$destroy();m[n]=p;a.leave(p,function(){m.splice(n,1);0===m.length&&(m=null)})}}h=[];k=[];if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],zd=sa({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ad=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Cd=sa({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",fa(c));f(function(a){c.empty();c.append(a)})}}),cd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Pe=z("ngOptions"),Bd=Y({terminal:!0}),dd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:B};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=
d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){xa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=B})}],link:function(e,g,h,m){function k(a,
c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&x.prop("selected",!0)):E(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ua(d.$viewValue);r(c.find("option"),function(c){c.selected=u(a.get(c.value))})};a.$watch(function(){ua(e,d.$viewValue)||(e=$(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=
[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,z;t=g.$modelValue;z=y(e)||[];var E=n?Ob(z):z,I,C,D;C={};s=!1;var F,L;if(p)if(w&&M(t))for(s=new Ua([]),D=0;D<t.length;D++)C[m]=t[D],s.put(w(e,C),t[D]);else s=new Ua(t);for(D=0;I=E.length,D<I;D++){k=D;if(n){k=E[D];if("$"===k.charAt(0))continue;C[n]=k}C[m]=z[k];d=q(e,C)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=u(s.remove(w?w(e,C):r(e,C))):(w?(d={},d[m]=t,d=
w(e,d)===w(e,C)):d=t===r(e,C),s=s||d);F=l(e,C);F=u(F)?F:"";k.push({id:w?w(e,C):n?E[D]:D,label:F,selected:d})}p||(v||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));C=0;for(E=c.length;C<E;C++){d=c[C];k=a[d];x.length<=C?(t={element:B.clone().attr("label",d),label:k.label},z=[t],x.push(z),f.append(t.element)):(z=x[C],t=z[0],t.label!=d&&t.element.attr("label",t.label=d));F=null;D=0;for(I=k.length;D<I;D++)s=k[D],(d=z[D+1])?(F=d.element,d.label!==s.label&&
F.text(d.label=s.label),d.id!==s.id&&F.val(d.id=s.id),d.selected!==s.selected&&F.prop("selected",d.selected=s.selected)):(""===s.id&&v?L=v:(L=A.clone()).val(s.id).attr("selected",s.selected).text(s.label),z.push({element:L,label:s.label,id:s.id,selected:s.selected}),F?F.after(L):t.element.append(L),F=L);for(D++;z.length>D;)z.pop().element.remove()}for(;x.length>C;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Pe("iexp",t,fa(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],q=c(k[3]||""),r=
c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];v&&(a(v)(e),v.removeClass("ng-scope"),v.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,q,t,v,u;if(p)for(k=[],q=0,v=x.length;q<v;q++)for(a=x[q],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(r(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=
c[u],w(e,d)==h){k=r(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=r(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var q=m[0];m=m[1];var p=h.multiple,t=h.ngOptions,v=!1,x,A=w(T.createElement("option")),B=w(T.createElement("optgroup")),z=A.clone();h=0;for(var y=g.children(),D=y.length;h<D;h++)if(""===y[h].value){x=v=y.eq(h);break}q.init(m,v,z);p&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,g,m):p?l(e,g,m):k(e,g,m,q)}}}}],fd=["$interpolate",
function(a){var c={addOption:B,removeOption:B};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],ed=Y({restrict:"E",terminal:!0});
Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=Q.jQuery)?(w=Ea,v(Ea.fn,{scope:Ha.scope,isolateScope:Ha.isolateScope,controller:Ha.controller,injector:Ha.injector,inheritedData:Ha.inheritedData}),zb("remove",!0,!0,!1),zb("empty",!1,!1,!1),zb("html",!1,!1,!0)):w=L,Ca.element=w,Xc(Ca),w(T).ready(function(){Uc(T,Yb)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map
;
/*
 AngularJS v1.2.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);h&&(h.$destroy(),h=null);l&&(k.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){k.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});h=d.scope=b;h.$emit("$viewContentLoaded");h.$eval(u)}else y()}
var h,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},k=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;k.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";k[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,h){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=h.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(k,function(f,k){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var h=1,p=g.length;h<p;++h){var n=q[h-1],r="string"==typeof g[h]?decodeURIComponent(g[h]):
g[h];n&&r&&(l[n.name]=r)}q=l}else q=null;else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&s(k[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:k,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",
function(){this.$get=function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map
;
/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});;
angular.module('perfect_scrollbar', []).directive('perfectScrollbar', ['$parse',
    function($parse) {
        var psOptions = [
            'wheelSpeed', 'wheelPropagation', 'minScrollbarLength', 'useBothWheelAxes',
            'useKeyboard', 'suppressScrollX', 'suppressScrollY', 'scrollXMarginOffset',
            'scrollYMarginOffset', 'includePadding'
        ];

        return {
            restrict: 'E',
            transclude: true,
            template: '<div><div ng-transclude></div></div>',
            replace: true,
            link: function($scope, $elem, $attr) {
                var options = {
                    wheelSpeed: 50,
                    includePadding: true,
                    useKeyboard: true
                };

                for (var i = 0, l = psOptions.length; i < l; i++) {
                    var opt = psOptions[i];
                    if ($attr[opt] != undefined) {
                        options[opt] = $parse($attr[opt])();
                    }
                }

                $elem.perfectScrollbar(options);

                if ($attr.refreshOnChange) {
                    $scope.$watchCollection($attr.refreshOnChange, function() {
                        $scope.$evalAsync(function() {
                            $elem.perfectScrollbar('update');
                        });
                    });
                }

                $elem.bind('$destroy', function() {
                    $elem.perfectScrollbar('destroy');
                });
            }
        };
    }
]);;
/*
 * Accessifyhtml5.js
 *
 * Source: https://github.com/yatil/accessifyhtml5.js
 */

var AccessifyHTML5=function(e,f){var c={article:{role:"article"},aside:{role:"complementary"},nav:{role:"navigation"},main:{role:"main"},output:{"aria-live":"polite"},section:{role:"region"},"[required]":{"aria-required":"true"}},g={ok:[],warn:[],fail:[]},k=g.fail,b,h,a,d,n,p,l,r,m,s=RegExp("aria-[a-z]+|role|tabindex|title|alt|data-[\\w-]+|lang|style|maxlength|placeholder|pattern|required|type|target|accesskey|longdesc"),t=0,q=document;if(q.querySelectorAll){e&&(e.header&&(c[e.header]={role:"banner"}),
e.footer&&(c[e.footer]={role:"contentinfo"}),e.main&&(c[e.main]={role:"main"},c.main={role:""}));if(f&&f._CONFIG_&&f._CONFIG_.ignore_defaults)c=f;else for(a in f)c[a]=f[a];for(b in c)if(!b.match(/^_(CONFIG|[A-Z]+)_/)&&c.hasOwnProperty(b)){try{h=q.querySelectorAll(b)}catch(u){k.push({sel:b,attr:null,val:null,msg:"Invalid syntax for `document.querySelectorAll` function",ex:u})}p=c[b];(!h||1>h.length)&&g.warn.push({sel:b,attr:null,val:null,msg:"Not found"});for(l=0;l<h.length;l++)for(n in p)if(p.hasOwnProperty(n)&&
(a=n,d=p[n],!a.match(/_?note/)))if(a.match(s))if((typeof d).match(/string|number|boolean/)){if(r=a.match(/(describ|label)l?edby/)){try{m=q.querySelector(d)}catch(v){k.push({sel:b,attr:a,val:d,msg:"Invalid selector syntax (2) - see 'val'",ex:v})}if(!m){k.push({sel:b,attr:a,val:d,msg:"Labelledby ref not found - see 'val'"});continue}m.id||(m.id="acfy-id-"+t);d=m.id;a="aria-"+("label"===r[1]?"labelledby":"describedby");t++}h[l].hasAttribute(a)?g.warn.push({sel:b,attr:a,val:d,msg:"Already present, skipped"}):
(h[l].setAttribute(a,d),g.ok.push({sel:b,attr:a,val:d,msg:"Added"}))}else k.push({sel:b,attr:a,val:d,msg:"Value-type not allowed"});else k.push({sel:b,attr:a,val:null,msg:"Attribute not allowed",re:s})}}g.input=c;return g};;
/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * List of language-specific string literals (wrapped in a lookup object, see below)
 * All string literals should be translated for each language.
 *
 * The language tags (keys) should be consistent with IETF's RFC 5646 
 * (http://www.rfc-editor.org/rfc/rfc5646.txt) or later standards.
 * For more information, see 
 * http://www.w3.org/International/articles/language-tags/Overview.en.php.
 */
tsunami.strings = { 
	'en': {
		language: "English",

		page_title: "Tsunami Evacuation Map",

		page_btn_map: "Evacuation Map",
		page_btn_info: "Tsunami Information",

		search_placeholder: "Enter Location",
		search_go: "Go",
		search_warning: "If your marker lands in the pink, move to higher ground.",

		jump_to: "Jump To ",
		region_name_HI: "Hawai'i",
		region_name_GU: "Guam",
		region_name_AS: "American Somoa",
		region_name_MP: "Commonwealth of the Northern Mariana Islands (CNMI)",

		language_select: "Language",
		share_me: "Share",
		share_text: "Learn how to be prepared for tsunami and know your evacuation plan",
		share_text_location: " at {location}",

		about_map: "About This Map",

		infotab_tsunamievacuation: "Tsunami Evacuation",
		infotab_tsunamiplan: "Tsunami Plan",
		infotab_tsunamirisk: "Tsunami Risk",
		infotab_tsunamiwarning: "Tsunami Warning",

		dummy: null
	},
	'zh-CN': {
		language: "中文（简体）",

		page_title: "海啸准备！",

		page_btn_map: "疏散地图",
		page_btn_info: "海啸信息",

		search_placeholder: "输入地名或街道地址",
		search_go: "搜索",
		search_warning: "如果你在红色的海啸撤离区内，请撤离到附近高地。",

		jump_to: "跳转到",
		region_name_HI: "夏威夷",
		region_name_GU: "关岛",
		region_name_AS: "美属萨摩亚",
		region_name_MP: "北马里亚纳群岛邦",

		language_select: "选择语言",
		share_me: "分享",
		share_text: "学习为海啸做好准备，了解你的撤离计划",
		share_text_location: "在{location}附近",

		about_map: "关于地图",

		infotab_tsunamievacuation: "海啸疏散",
		infotab_tsunamiplan: "海啸预备",
		infotab_tsunamirisk: "海啸危险",
		infotab_tsunamiwarning: "海啸计划",

		dummy: null
	}/*,
	'cn': {
	
	}
	*/
};
;
/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/** 
 * Dictionary of URLs of major textual contents plus common strings, which will be set dynamically
 * based on the lists provided below (see tsunami.updateContents() below).
 * 
 * The purpose of this dictionary is to provide a way for angularjs to automatically watch for 
 * changes made to the content URLs and thus automatically reload contents upon URL changes.  The
 * contents can be included as the following.
 *     <div ng-include="contents.thingstoknow"></div>
 *
 * We cannot directly compose the URLs inside the "ng-include" directives (see below).  This does 
 * not work because the value of the directive will be evaluated once and the contents won't be
 * automatically reloaded even if the region/language has been changed.
 *     <div ng-include="'partials/' + params.region + '/' + params.lang + '/thingstoknow.html'"></div>
 *
 * (I understand that this is far from perfect, so please let me know if you know any better 
 * solution to this problem.  -- Yanlin)
 * 
 * Since Google Maps API cannot switch language localization after it is loaded, we may choose to
 * reload the page to apply language changes and asynchronously load Google Maps API according to
 * the language detected at page loading time.  If this is the way to go, we may also opt to reload
 * the page upon region selection so that we don't have to worry about content refreshing, thus eliminate
 * the need for the content URLs.
 */
tsunami.contents = {
	pages: [
		'map', 
		'info'
	],
	infotabs: [
		'tsunamiwarning',
		'tsunamievacuation', 
		'tsunamiplan', 
		'tsunamirisk', 
	],
	contents: [
		'tsunamiwarning', 
		'tsunamievacuation', 
		'tsunamiplan', 
		'tsunamirisk', 
		'aboutmap', 
		'thingstoknow',
		'strings'
	]
};

// Update URLs of page contents
tsunami.updateContents = function(lang) {
	lang = lang || tsunami.params.lang;
	var path = 'partials/' + tsunami.params.region + '/' + lang + '/';

	// Contents
	$.each(tsunami.contents.contents, function(i, name) {
		var url = path + name + '.html';
		if (tsunami.contents[name] != url) {
			tsunami.contents[name] = url;
		}
	});
};

// Update content URLs for
//tsunami.updateContents();
;
/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * List of regions (wrapped in a lookup object, see below)
 */
tsunami.regions = {
    // Evacuation zones for all regions (not region specific)
    evacuationZones: ['http://webqa.csc.noaa.gov/tsunami-toolv2/data/TsunamiEvacuationZones_GU_HI_20140701.kmz'],
    regions: [{
            abbr: 'GU',
            name: 'Guam',
            languages: ['en', 'zh-CN'],
            map: {
                maptype: 'terrain',
                center: "13.4502076,144.7874584",
                zoom: 10
            },
            //evacuationZones: ['data/Guam.kmz'] - Kyle stripped this out, because the 2 layers were overlapping 
        }, {
            abbr: 'HI',
            name: 'Hawai\'i',
            languages: ['en', 'zh-CN'],
            map: {
                maptype: 'roadmap',
                center: "21.3114,-157.7964",
                zoom: 7
            },
            //evacuationZones: ['data/HawaiiEvacuationZones20131028.kmz'] - Kyle stripped this out, because the 2 layers were overlapping 
        }
        /*,
		{
			abbr: 'MP',
			name: 'Commonwealth of the Northern Mariana Islands (CNMI)'
			languages: ['en'],
			map: {}
		},
		{
			abbr: 'AS',
			name: 'Amarican Samoa'
			languages: ['en'],
			map: {}
		}
		*/
    ]
};
// Turn the array of regions into a region dictionary for easier lookup
(function() {
    $.each(tsunami.regions.regions, function(i, region) {
        tsunami.regions[region.abbr] = region;
    });
})();

/**
 * Switch region
 */
tsunami.switchRegion = function(region) {
    if (!tsunami.regions[region]) {
        alert('Unknown region: ' + region);
        return;
    }

    // Evacuation zone layers specific to the current region (if any)
    if (tsunami.map) {
        tsunami.removeEvacuationZones();
    }

    // Application parameters
    if (tsunami.params.region != region) {
        // Update region-specific parameters if a different region is specified
        tsunami.params.region = region;
        tsunami.params.lang = tsunami.getLangForRegion(region);
        tsunami.params.maptype = tsunami.regions[region].map.maptype;
        tsunami.params.center = tsunami.regions[region].map.center;
        tsunami.params.zoom = tsunami.regions[region].map.zoom;

        // Reset last successful search results or place name
        tsunami.clearMarker();
    }
    //window.alert('Parameters: \n' + JSON.stringify(tsunami.params, null, 2));
    tsunami.updateContents();

    // Add Tsunami Evacuation Zones Layer(s)
    tsunami._mapRegion();
     
    // Evacuation zone
    tsunami.addEvacuationZones();
};

/**
 * Map the selected region
 *
 * If the map has been initialized, center to the new region.  Otherwise, initialize map and center to region.
 */
tsunami._mapRegion = function() {
    var center = tsunami.params.center.split(',');
    center = new google.maps.LatLng(center[0], center[1]);
    var zoom = Number(tsunami.params.zoom);
    var maptype = google.maps.MapTypeId.ROADMAP;
    if (tsunami.params.maptype && google.maps.MapTypeId[tsunami.params.maptype.toUpperCase()]) {
        maptype = google.maps.MapTypeId[tsunami.params.maptype.toUpperCase()];
    }

    if (tsunami.map) {
        // Update map type/center/zoom
        tsunami.map.setMapTypeId(maptype);
        tsunami.map.panTo(center);
        tsunami.map.setZoom(zoom);
    } else {
        tsunami._initMap(center, zoom, maptype);
    }
};

/**
 * Initialize map to region defined by application parameters, plus 
 *   - Setting up geocoder,
 *   - Setting up autocomplete for location search,
 *   - Loading global evacuation zones, and
 *   - Displaying place or restoring search results if any
 */
tsunami._initMap = function(center, zoom, maptype) {
    // Initialize map and set map type/center/zoom level
    tsunami.geocoder = new google.maps.Geocoder();
    tsunami.map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: zoom,
        mapTypeId: maptype
    });

    // Set up autocomplete for geo-search
    tsunami.setupSearchAutocomplete(tsunami.map);

    // Load evacuation zones for all regions (if any)
    if (tsunami.regions.evacuationZones) {
        $.each(tsunami.regions.evacuationZones, function(i, url) {
            tsunami.addEvacuationZoneLayer(url);
        });
    }

    // Display place marker or restore search results if any
    if (tsunami.params.mapname) {
        // Display place marker
        tsunami.marker = new google.maps.Marker({
            map: tsunami.map,
            position: center,
            title: tsunami.params.mapname
        });
    } else if (tsunami.params.location) {
        // Restore search results
        $('#pac-input').val(tsunami.params.location);
        tsunami.geocodeAddress(tsunami.params.location);
    }
};

/**
 * Get the most reasonable language for a specified region, in following order:
 * 1. Current language if it is available for specified region
 * 2. Language last selected for the region (if any)
 * 3. First language in the list of available languages for the region
 */
tsunami.getLangForRegion = function(region) {
    var lang = tsunami.params.lang;
    if (tsunami.regions[region].languages.indexOf(lang) < 0) {
        lang = tsunami.regions[region].lang || tsunami.regions[region].languages[0];
    }
    return lang;
};

/**
 * Remove evacuation zone layers (if any)
 */
tsunami.removeEvacuationZones = function() {
    if (tsunami._loadedEvacuationZones) {
        $.each(tsunami._loadedEvacuationZones, function(i, kmlLayer) {
            kmlLayer.setMap(null);
        });
        tsunami._loadedEvacuationZones = [];
    }
};

/**
 * Add (visible) evacuation zone layers for the current region
 */
tsunami.addEvacuationZones = function() {
    tsunami._loadedEvacuationZones = [];
    // TODO: Wrap into a function so that we can register en event listener to load visible
    // zones dynamically
    if (tsunami.regions[tsunami.params.region].evacuationZones) {
        $.each(tsunami.regions[tsunami.params.region].evacuationZones, function(i, url) {
            // TODO: Check bounds to load only visible layers
            //alert('Evacuation layer URL: ' + url);
            var kmlLayer = tsunami.addEvacuationZoneLayer(url);
            tsunami._loadedEvacuationZones.push(kmlLayer);
        });
    }
};

/**
 * Add the specified evaculation zone layer (KML/KMZ) to map
 */
tsunami.addEvacuationZoneLayer = function(url) {
    url = _canonicalizeUrl(url);
    var kmlLayer = new google.maps.KmlLayer({
        url: url,
        map: tsunami.map,
        //clickable: false,
        preserveViewport: true,
        //supressInfoWindows: true
    });
    google.maps.event.addListener(kmlLayer, 'status_changed', function() {
        if (kmlLayer.getStatus() != google.maps.KmlLayerStatus.OK) {
            window.alert('Failed to load evacuation zone layer.' + 
                '\n\nURL: ' + url +
                '\n\nError: ' + kmlLayer.getStatus()
                );
        }
    });
    return kmlLayer;
};

/**
 * Cononicalize URL (mostly for converting relative URLs to absolute ones)
 * See: http://grack.com/blog/2009/11/17/absolutizing-url-in-javascript/
 */
function _canonicalizeUrl(url) {
    var div = document.createElement('div');
    div.innerHTML = "<a></a>";
    div.firstChild.href = url; // Ensures that the href is properly escaped
    div.innerHTML = div.innerHTML; // Run the current innerHTML back through the parser
    return div.firstChild.href;
};
/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * Lookup table of predefined place names
 */
tsunami.places = {
	"HI": {
		"HAWAI_I": {
			center: "19.5597,-155.5229",
			zoom: 8
		},
		"MAUI": {
			center: "20.804,-156.378",
			zoom: 10
		},
		"KAUA_I": {
			center: "22.053,-159.489",
			zoom: 10
		},
		"LANA_I": {
			center: "20.828,-156.93",
			zoom: 11
		},
		"MOLOKA_I": {
			center: "21.133,-157.011",
			zoom: 11
		},
		"NI_IHAU": {
			center: "21.879,-160.160",
			zoom: 10
		},
		"O_AHU": {
			center: "21.462,-157.96",
			zoom: 10
		},
		"O_AHU-AIRPORT TO WAIKIKI": {
			center: "21.3091153402817,-157.920612356933",
			zoom: 12
		},
		"O_AHU-EWA BEACH TO AIRPORT": {
			center: "21.3121575590345,-158.005832138262",
			zoom: 12
		},
		"HAWAI_I-HAKALAU BAY": {
			center: "19.8992218702186,-155.130236948084",
			zoom: 12
		},
		"MOLOKA_I-HALAWA": {
			center: "21.1586012776415,-156.740619324584",
			zoom: 12
		},
		"MOLOKA_I-HALENA TO KAPUKUWAHINE": {
			center: "21.0883630900761,-157.2410118563",
			zoom: 12
		},
		"MAUI-HANA": {
			center: "20.7838373085425,-155.998338448893",
			zoom: 12
		},
		"MAUI-HANAKAOO TO KAELEKII PT.": {
			center: "20.9646128087109,-156.681192105779",
			zoom: 12
		},
		"O_AHU-HANAUMA BAY TO MAKAPUU": {
			center: "21.290168871514,-157.666814106697",
			zoom: 12
		},
		"LANA_I-HAUA TO KAPOHO": {
			center: "20.7864742772949,-156.820348605908",
			zoom: 12
		},
		"O_AHU-HAUULA TO MALAEKAHANA": {
			center: "21.6493597155986,-157.925600106938",
			zoom: 12
		},
		"HAWAI_I-HILO - PART 1": {
			center: "19.7151239012972,-155.075226635533",
			zoom: 12
		},
		"HAWAI_I-HILO - PART 2": {
			center: "19.7308461513118,-155.030327947991",
			zoom: 12
		},
		"MOLOKA_I-KAALAEA TO UALAPUE": {
			center: "21.0842217463222,-156.77961866837",
			zoom: 12
		},
		"O_AHU-KAHANA BAY TO HAUULA": {
			center: "21.5894336217928,-157.89348191940",
			zoom: 12
		},
		"O_AHU-KAHE POINT TO EWA BEACH": {
			center: "21.3415492153119,-158.125396075874",
			zoom: 12
		},
		"KAUA_I-KAILIU PT. TO KALIHIWAI BAY": {
			center: "22.224295559884,-159.458774045865",
			zoom: 12
		},
		"HAWAI_I-KAILUA BAY TO KIHOLO BAY": {
			center: "19.8321832139062,-155.983287073879",
			zoom: 12
		},
		"O_AHU-KAILUA TO KANEOHE BAY": {
			center: "21.4550503716676,-157.757039013031",
			zoom: 12
		},
		"LANA_I-KAIOLOHIA BAY TO HAUA": {
			center: "20.8871309023887,-156.86542554345",
			zoom: 12
		},
		"MOLOKA_I-KALAUPAPA TO KAUPIKIAWA": {
			center: "21.2054303714351,-156.974623512302",
			zoom: 12
		},
		"MAUI-KALEIA KEALEKII PT. TO KEAWALUA": {
			center: "21.0223089962646,-156.623147855725",
			zoom: 12
		},
		"MAUI-KAMAOLE BEACH PARK TO KEALIA": {
			center: "20.7827692772915,-156.462290574325",
			zoom: 12
		},
		"MAUI-KANAHA BEACH PARK TO KUAU": {
			center: "20.9131655586629,-156.39257666801",
			zoom: 12
		},
		"O_AHU-KANEOHE BAY TO KAHANA BAY": {
			center: "21.5572345905128,-157.857319981874",
			zoom: 12
		},
		"MOLOKA_I-KAPUKAULUA TO KAUNAKAKAI": {
			center: "21.0760296213146,-156.986627856063",
			zoom: 12
		},
		"KAUA_I-KAUAPEA BEACH TO ANAHOLA BAY": {
			center: "22.2288505286383,-159.401321920812",
			zoom: 12
		},
		"LANA_I-KAUMALAPAU HARBOR": {
			center: "20.7836116210423,-156.990546512317",
			zoom: 12
		},
		"HAWAI_I-KEALAKEKUA TO KAILUA": {
			center: "19.5042809323508,-155.950964823849",
			zoom: 12
		},
		"KAUA_I-KEALIA TO ALAKUKUI PT.": {
			center: "22.0796548409993,-159.315013389482",
			zoom: 12
		},
		"MAUI-KEALIA TO UKUMEHAME BEACH PARK": {
			center: "20.7808083710397,-156.520188293129",
			zoom: 12
		},
		"HAWAI_I-KEAUHOU TO KAILUA": {
			center: "19.6214379012099,-155.984021011379",
			zoom: 12
		},
		"KAUA_I-KEONILOA BAY TO LAWAI BAY": {
			center: "21.8861068408191,-159.490339139645",
			zoom: 12
		},
		"MAUI-LAUNIUPOKO PT. TO WAHIKULI STATE WAYSIDE PARK": {
			center: "20.8611019648644,-156.669013199517",
			zoom: 12
		},
		"HAWAI_I-LAUPAHOEHOE": {
			center: "19.9918984953049,-155.242787729439",
			zoom: 12
		},
		"O_AHU-MAKAPUU TO WAIMANALO": {
			center: "21.3279121840492,-157.689256825467",
			zoom: 12
		},
		"O_AHU-MALAEKAHANA TO SUNSET BEACH": {
			center: "21.7032780281488,-157.986438794494",
			zoom: 12
		},
		"LANA_I-MANELE BAY TO KAPIHUA BAY": {
			center: "20.7355796209975,-156.892396355975",
			zoom: 12
		},
		"HAWAI_I-MILOLII TO KEALAKEKUA": {
			center: "19.1454370570166,-155.911291480062",
			zoom: 12
		},
		"O_AHU-MOKULEIA TO YOKOHAMA BAY": {
			center: "21.5434375279999,-158.237931607228",
			zoom: 12
		},
		"KAUA_I-NAWILIWILI": {
			center: "21.9572431221353,-159.347643764512",
			zoom: 12
		},
		"KAUA_I-NININI PT. TO KAMALA PT.": {
			center: "21.9206854033513,-159.381059514543",
			zoom: 12
		},
		"HAWAI_I-NORTH KOHALA": {
			center: "20.256080683051,-155.810410104968",
			zoom: 12
		},
		"KAUA_I-NUMILA TO WAIMEA": {
			center: "21.9016985908336,-159.61352557726",
			zoom: 12
		},
		"HAWAI_I-OPIHIKAO TO KAU / PUNA": {
			center: "19.319822338429,-155.048592573008",
			zoom: 12
		},
		"LANA_I-POHAKULOA PT. TO KAIOLOHIA BAY": {
			center: "20.9223575274215,-156.943999918523",
			zoom: 12
		},
		"MOLOKA_I-POHAKUMAULIULI": {
			center: "21.1673573401497,-157.257458668815",
			zoom: 12
		},
		"KAUA_I-POIPU": {
			center: "21.8788462783123,-159.470983233377",
			zoom: 12
		},
		"O_AHU-POKAI BAY TO KAHE POINT": {
			center: "21.3961875591128,-158.160367450906",
			zoom: 12
		},
		"HAWAI_I-PUNALUU TO HONUAPO / KAU": {
			center: "19.1375145257592,-155.504558073433",
			zoom: 12
		},
		"MAUI-PUU OLAI TO KAMAOLE BEACH PARK": {
			center: "20.6360159646548,-156.44672263681",
			zoom: 12
		},
		"HAWAI_I-SOUTH HILO - PUNA": {
			center: "19.5682273386604,-154.904174760374",
			zoom: 12
		},
		"HAWAI_I-SOUTH KOHALA": {
			center: "19.946854589013,-155.863796105017",
			zoom: 12
		},
		"O_AHU-SUNSET BEACH TO WAIALUA BAY": {
			center: "21.6268328405776,-158.073583138325",
			zoom: 12
		},
		"MOLOKA_I-UALAPUE TO KAPUKAULUA": {
			center: "21.0478202462883,-156.878165730962",
			zoom: 12
		},
		"MAUI-UKUMEHAME BEACH PARK TO LAUNIUPOKO PT.": {
			center: "20.8103324960672,-156.608347043211",
			zoom: 12
		},
		"O_AHU-WAIALUA BAY TO MOKULEIA": {
			center: "21.5778229030319,-158.148334325895",
			zoom: 12
		},
		"MAUI-WAIEHU PT. TO KANAHA BEACH PARK": {
			center: "20.8913190586426,-156.462721761825",
			zoom: 12
		},
		"O_AHU-WAIKIKI": {
			center: "21.2777920590025,-157.830642575599",
			zoom: 12
		},
		"O_AHU-WAIKIKI TO WAILUPE": {
			center: "21.261089058987,-157.787993919309",
			zoom: 12
		},
		"HAWAI_I-WAILEA": {
			center: "19.8821990889528,-155.119295885574",
			zoom: 12
		},
		"KAUA_I-WAILUA TO KAMILO PT.": {
			center: "22.0459456847179,-159.337870795753",
			zoom: 12
		},
		"O_AHU-WAILUPE TO HANAUMA BAY": {
			center: "21.2807547465053,-157.737064294262",
			zoom: 12
		},
		"O_AHU-WAIMANALO TO KAILUA": {
			center: "21.3950984341118,-157.723422075499",
			zoom: 12
		},
		"KAUA_I-WAIMEA TO BARKING SANDS": {
			center: "21.9712949033984,-159.729355171117",
			zoom: 12
		},
		"HAWAI_I-WAIPIO BAY": {
			center: "20.1119100579167,-155.595553667268",
			zoom: 12
		},
		"O_AHU-YOKOHAMA BAY TO POKAI BAY": {
			center: "21.463030527925,-158.212139294704",
			zoom: 12
		}
	},
	"GU": {

	}
};
;
/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * Set up autocomplete for geo-search
 */
tsunami.setupSearchAutocomplete = function() {
	var input = document.getElementById('pac-input');
	 
	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', tsunami.map);

	//var infowindow = new google.maps.InfoWindow();
	 
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		//infowindow.close();
		var place = autocomplete.getPlace();
		tsunami._displayPlace(place);

	    var address = '';
	    if (place.address_components) {
	      address = [
	        (place.address_components[0] && place.address_components[0].short_name || ''),
	        (place.address_components[1] && place.address_components[1].short_name || ''),
	        (place.address_components[2] && place.address_components[2].short_name || '')
	      ].join(' ');
	    }

	    /*infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
	    infowindow.open(tsunami.map, tsunami.marker);*/
	  });
};

/**
 * Geocodes location specified in #geocodeInput
 * Gets called from controller.js:$scope.geocode
 * @return {[type]} [description]
 */
tsunami.geocodeAddress = function (address) {
	// bad coding practice to access address from the view using jquery... atempting to mitigate the issue, but keep the if statement so things don't break...
	var location;
	
	if (address != undefined && address!=""){
		location = address;
	}
	else {
		 location = $('#pac-input').val();
	}

	tsunami.geocoder.geocode( { 'address': location}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			tsunami._displayPlace(results[0]);
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
};

/**
 * Display place and center it on map
 */
tsunami._displayPlace = function(place) {
	// Hide previous marker
	if (tsunami.marker) tsunami.marker.setVisible(false);

	// Validate place and its geometry
	//alert(JSON.stringify(place, null, 2));
	if (!place || !place.geometry) return;

	// Save successfully search (for purpose of bookmarking)
	tsunami._markerLocation = $('#pac-input').val();
	if (tsunami.params.mapname) {
		// Reset specified place name
		tsunami.params.mapname = null;
	}

	// If the place has a geometry, then present it on a map.
	if (place.geometry.viewport) {
		tsunami.map.fitBounds(place.geometry.viewport);
	} else {
		tsunami.map.setCenter(place.geometry.location);
		tsunami.map.setZoom(17);  // Why 17? Because it looks good.
	}

	// Create or update the marker, and make it visible
	if (tsunami.marker) {
		tsunami.marker.setPosition(place.geometry.location);
		tsunami.marker.setVisible(true);
		tsunami.marker.setTitle(tsunami._markerLocation);
	} else {
		tsunami.marker = new google.maps.Marker({
			map: tsunami.map,
			position: place.geometry.location,
			title: tsunami._markerLocation
		});
		tsunami.marker.setVisible(true);

		// Alert for the first time
		// alert(tsunami.strings[tsunami.params.lang].search_warning);	
	}
};

/**
 * Clear the marker (predefined places or result of geo-search)
 */
tsunami.clearMarker = function() {
    tsunami.params.location = null;
    tsunami.params.mapname = null;
    if (tsunami.marker) {
    	tsunami.marker.setVisible(false);
    }
};

/**
 * Get the location of the currently visible marker, as the result of the last successful geosearch
 */
tsunami.getMarkerLocation = function() {
	return (tsunami.marker && tsunami.marker.getVisible()) ? tsunami._markerLocation : null;
};
;
/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * Application parameters (region, selected language, map center and zoom level, etc)
 */
tsunami.params = tsunami.params || {};

/**
 * Initialize application parameters
 */
tsunami.initParams = function() {
	// URL parameters
	tsunami._parseParams();

	// Apply parameters associated with place if a place name is specified through 
	// the version 1 compatible parameter "mapname"
	if (tsunami.params.mapname) {
		tsunami.params.mapname = tsunami.params.mapname.toUpperCase();
		tsunami._applyPlaceParams();
	}
	// Apply parameters associated with location if address is specified 
	if (tsunami.params.address){
		// check if city and zip present (old version)
		if (tsunami.params.city){
			tsunami.params.address = tsunami.params.address + ", " + tsunami.params.city;
		}
		if (tsunami.params.zip){
			tsunami.params.address = tsunami.params.address + ", " + tsunami.params.zip;
		}
		// will call search from the controller
	}

	// Apply default parameters and overwrite invalid parameters if necessary
	tsunami._applyDefaultParams();
};

/**
 * Apply parameters if one of the predefined place names is specified through
 * the version 1 compatible parameter "mapname"
 */
tsunami._applyPlaceParams = function() {
	var params = tsunami.params;

	// Predefined place names are defined for Hawai'i by default.
	if (params.region == null || tsunami.regions[params.region] == null) {
		params.region = "HI";
	}

	if (tsunami.places && tsunami.places[params.region] && tsunami.places[params.region][params.mapname]) {
		// Place is predefined.
		var place = tsunami.places[params.region][params.mapname];
		params.center = place.center;
		params.zoom = place.zoom;
	} else {
		// Place name is not predefined.
		// Default to location search instead if no location is specified
		if (!params.location) {
			params.location = params.mapname;
		} else {
			window.alert('Unknown place name ignored: ' + params.mapname);
		}
		params.mapname = null;
	}

};


/**
 * Apply default parameters if they are missing and overwrite parameters if they are inappropriate
 */
tsunami._applyDefaultParams = function() {
	var params = tsunami.params;

	// Default to the first if none is specified or the specified is not valid
	if (params.region == null || tsunami.regions[params.region] == null) {
		params.region = tsunami.regions.regions[0].abbr;
	}

	// Default to the first if none is specified or the specified is not valid
	if (params.lang == null || tsunami.regions[params.region].languages.indexOf(params.lang) < 0) {
		params.lang = tsunami.regions[params.region].languages[0];
	}

	// Default to the center of region if none is specified or the specified is not valid
	if (params.center) {
		var latlong = params.center.split(',');
		if (latlong.length != 2 || isNaN(Number(latlong[0])) || isNaN(Number(latlong[1]))) {
			// Invalid center parameter
			params.center = null;
		}
	}
	params.center = params.center || tsunami.regions[params.region].map.center;

	// Default to the zoom of region if none is specified or the specified is not valid
	if (params.zoom == null || isNaN(Number(params.zoom)) || Number(params.zoom) < 1) {
		params.zoom = tsunami.regions[params.region].map.zoom;
	}

	// Default to the default map type of region if none is specified or the specified is not valid
	if (params.maptype == null || google.maps.MapTypeId[params.maptype.toUpperCase()] == null) {
		params.maptype = tsunami.regions[params.region].map.maptype;
	}

	// Default to the first if none is specified or the specified is not valid
	if (params.page == null || tsunami.contents.pages.indexOf(params.page) < 0) {
		params.page = tsunami.contents.pages[0];
	}

	// Default to the first if none is specified or the specified is not valid
	if (params.infotab == null || tsunami.contents.infotabs.indexOf(params.infotab) < 0) {
		params.infotab = tsunami.contents.infotabs[0];
	}

	params.location = params.location || null;

	//alert(JSON.stringify(params, null, 2));
};

/**
 * Parse application parameters from URL
 */
tsunami._parseParams = function() {
	var query = null;
	if (window.location.search != null && window.location.search.length > 1) {
		query = window.location.search.substr(1);
	} else if (window.location.href.indexOf('?' > 0)) {
		query = window.location.href.split('?')[1];
	}
	if (query) {
		var params = query.split("&");
		for (var i = 0; i < params.length; i ++) {
			var param = params[i].split("=");
			tsunami.params[param[0].toLowerCase()] = decodeURIComponent(param[1]).replace(/\+/g, " "); // replace + with space
		}
	}
};

/**
 * Compose the URL that would serve as the bookmark of the current page
 */
tsunami.composePageUrl = function() {
	// Prepare application parameters
	var params = tsunami.params;
	if (tsunami.map) {
		var center = tsunami.map.getCenter();
		params.center = center.lat() + ',' + center.lng();
		params.zoom = tsunami.map.getZoom();
		params.maptype = tsunami.map.getMapTypeId();
	}
	params.location = tsunami.getMarkerLocation();

	// Join parameters (ignore local, temp parameters whose name is prefixed with underscore)
	var query = null;
	for (var param in params) {
		if (param && param.charAt(0) != '_') {
			var value = params[param];
			if (value == 0 || value) {
				query = (query == null ? '' : query + '&') + param + '=' + encodeURIComponent(value);
			}
		}
	}

	// Concatenate with source URL
	var url = window.location.href.split('?')[0] + '?' + query;
	//alert('Page url: \n' + url);
	return url;
};
;
;
'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'angulartics',
  'angulartics.google.analytics',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'perfect_scrollbar'
])/*.
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}])*/;
;
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');
;
'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainCtrl', MainCtrl);

/**
 * Main controller for the application
 */
function MainCtrl($scope, $location, $anchorScroll, $analytics) {
  // set region to Hawaii - will overwrite later based on location (if possible)
  tsunami.params.region = 'HI';

  $scope.indexModel = {
    address: ''
  };
  // object to deal with figuring out location using geolocation
  var objGeoLocation = {
    getCurrentPositionError: function(error) { // Call back from navigator.geolocation.getCurrentPosition for error
      // mock up possition within US continental and send it to success function
      var position = {
        coords: {
          latitude: 29, 
          longitude: -81
        }
      };
      objGeoLocation.getCurrentPosition(position)
      return;

        switch(error.code) {
            case error.PERMISSION_DENIED:
                // "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                // "Location information is unavailable."
                break;
            case error.TIMEOUT:
                // "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                // "An unknown error occurred."
                break;
        }
    },
    getCurrentPosition: function(position) { // Call back from navigator.geolocation.getCurrentPosition for sucess
      var geocoder = new google.maps.Geocoder();
      var location = {
        'location': {
          'lat': position.coords.latitude,  // guam 13.5
          'lng': position.coords.longitude  // guam 144.8
        }
      };
      
      geocoder.geocode(location, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          // loop through results and find Country for type
          for (var i = 0; i < results.length; i++){
            if (results[i].types[0] == 'country'){
              if (results[i].formatted_address == 'Guam'){
                $scope.switchRegion('GU')
                $scope.$apply();
                break;
              }
            }
          }
        }

      });

    }    
  }


  // Prepare to share the current page
  $scope.prepareShare = function() {
    $scope.shareLink = tsunami.composePageUrl();
    $scope.shareLinkEncoded = encodeURIComponent($scope.shareLink);

    var shareText = tsunami.strings[params.lang].share_text;
    var location = tsunami.getMarkerLocation();
    if (location) {
      var locationTemplate = tsunami.strings[params.lang].share_text_location;
      shareText = shareText + locationTemplate.replace('{location}', location);
    }
    $scope.shareText = shareText;
    $scope.shareTextEncoded = encodeURIComponent(shareText);
  };


  $scope.mainNav = function (page) { 
    $analytics.pageTrack(page);
    tsunami.params.page = page;
  }

  $scope.tsunamiInfoNav = function (tab) { 
    $analytics.pageTrack(tab);
    tsunami.params.infotab = tab;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  $scope.switchRegion = function (region) { 
    $analytics.pageTrack('region=' + region);
    tsunami.switchRegion(region);
  }

  $scope.geocode = function (address) { 
    $analytics.pageTrack('searchPerfomed');
    tsunami.geocodeAddress(address);
  }
  $scope.geocodeEnter = function (e) { 
    $analytics.pageTrack('searchPerfomed');
   if(e.keyCode == 13){
    $scope.geocode();
   }
  }

  $scope.applyLang = function(lang) {
    $scope.params.lang = lang;
    tsunami.updateContents(lang);
  };

  $scope.scrollTop =  function(){
    $location.hash('pageTop');

        // call $anchorScroll()
        $anchorScroll();
  }


  appInitialize();

  // Try to get location of the users and default to that region
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(objGeoLocation.getCurrentPosition, objGeoLocation.getCurrentPositionError);
  }








  function appInitialize(){
    // Initialize application parameters
    tsunami.initParams();
    var params = tsunami.params;

    // Expose some of the main functionality to scope for convenient access
    $scope.regions = tsunami.regions;
    $scope.contents = tsunami.contents;
    $scope.strings = tsunami.strings;
    $scope.updateContents = tsunami.updateContents;

    // Link application parameters and content URLs to scope so that their
    // changes can be watched by angularjs
    $scope.params = tsunami.params;

    // Initialize map with the default region
    tsunami.switchRegion(tsunami.params.region);

    // check if search coming from external site
    if (tsunami.params.address){
      $analytics.pageTrack('incomingExternalSearch');
      $scope.indexModel.address = tsunami.params.address;
      $scope.geocode(tsunami.params.address);
    }

  }



};
'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
;
'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('hideOnclickout', function($document) {
    return {
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            elem.bind('click', function(e) {
                e.stopPropagation();
            });
            $document.bind('click', function() {
                scope.$apply(attr.hideOnclickout);
            });
        }
    };
});