(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{4284:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(6118)},2325:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6516).Z,o=r(2619).Z,i=r(6808).Z,l=r(518).Z,a=i(r(7378)),u=o(r(3057)),s=r(1405),c=r(8252),f=r(7742);r(4472);var d=o(r(2788));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,i,l,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&l(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,u=!1;o.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>u,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{u=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:i,qualityInt:u,className:s,imgStyle:c,blurStyle:f,isLazy:d,fill:p,placeholder:h,loading:g,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:E,onLoadingCompleteRef:_,setBlurComplete:C,setShowAltText:x,onLoad:j,onError:S}=e,T=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},T,r,{width:i,height:o,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:g,style:n({},c,f),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,v,h,E,_,C,b))},[v,h,E,_,C,S,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,E,_,C,b)},onError:e=>{x(!0),"blur"===h&&C(!0),S&&S(e)}})))}),y=a.forwardRef((e,t)=>{let r,o;var i,{src:m,sizes:y,unoptimized:b=!1,priority:w=!1,loading:E,className:_,quality:C,width:x,height:j,fill:S,style:T,onLoad:k,onLoadingComplete:M,placeholder:O="empty",blurDataURL:P,layout:L,objectFit:R,objectPosition:z,lazyBoundary:I,lazyRoot:A}=e,N=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=a.useContext(f.ImageConfigContext),B=a.useMemo(()=>{let e=p||D||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[D]),U=N,W=U.loader||d.default;delete U.loader;let Z="__next_img_default"in W;if(Z){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let q=W;W=e=>{let{config:t}=e,r=l(e,["config"]);return q(r)}}if(L){"fill"===L&&(S=!0);let F={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];F&&(T=n({},T,F));let G={responsive:"100vw",fill:"100vw"}[L];G&&!y&&(y=G)}let H="",K=g(x),V=g(j);if("object"==typeof(i=m)&&(h(i)||void 0!==i.src)){let J=h(m)?m.default:m;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,o=J.blurHeight,P=P||J.blurDataURL,H=J.src,!S){if(K||V){if(K&&!V){let $=K/J.width;V=Math.round(J.height*$)}else if(!K&&V){let Q=V/J.height;K=Math.round(J.width*Q)}}else K=J.width,V=J.height}}let X=!w&&("lazy"===E||void 0===E);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,X=!1),B.unoptimized&&(b=!0),Z&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[Y,ee]=a.useState(!1),[et,er]=a.useState(!1),en=g(C),eo=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:z}:{},et?{}:{color:"transparent"},T),ei="blur"===O&&P&&!Y?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:K,heightInt:V,blurWidth:r,blurHeight:o,blurDataURL:P}),'")')}:{},el=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let i=/(^|\s)(1?\d?\d)vw/g,l=[];for(let a;a=i.exec(r);a)l.push(parseInt(a[2]));if(l.length){let u=.01*Math.min(...l);return{widths:o.filter(e=>e>=n[0]*u),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:s,kind:"x"}}(t,o,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,n)=>"".concat(a({config:t,src:r,quality:i,width:e})," ").concat("w"===s?e:n+1).concat(s)).join(", "),src:a({config:t,src:r,quality:i,width:u[c]})}}({config:B,src:m,unoptimized:b,width:K,quality:en,sizes:y,loader:W}),ea=m,eu={imageSrcSet:el.srcSet,imageSizes:el.sizes,crossOrigin:U.crossOrigin},es=a.useRef(k);a.useEffect(()=>{es.current=k},[k]);let ec=a.useRef(M);a.useEffect(()=>{ec.current=M},[M]);let ef=n({isLazy:X,imgAttributes:el,heightInt:V,widthInt:K,qualityInt:en,className:_,imgStyle:eo,blurStyle:ei,loading:E,config:B,fill:S,unoptimized:b,placeholder:O,loader:W,srcString:ea,onLoadRef:es,onLoadingCompleteRef:ec,setBlurComplete:ee,setShowAltText:er},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},ef,{ref:t})),w?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+el.src+el.srcSet+el.sizes,rel:"preload",as:"image",href:el.srcSet?void 0:el.src},eu))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3853:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2619).Z,o=r(518).Z,i=n(r(7378)),l=r(1398),a=r(1959),u=r(9970),s=r(6994),c=r(1780),f=r(8315),d=r(2325),p=r(3649);let h=new Set;function g(e,t,r,n){if(l.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:v,prefetch:y,passHref:b,replace:w,shallow:E,scroll:_,locale:C,onClick:x,onMouseEnter:j,onTouchStart:S,legacyBehavior:T=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,T&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let M=!1!==y,O=i.default.useContext(s.RouterContext),P=i.default.useContext(c.AppRouterContext),L=null!=O?O:P,R=!O,{href:z,as:I}=i.default.useMemo(()=>{if(!O){let e=m(a);return{href:e,as:h?m(h):e}}let[t,r]=l.resolveHref(O,a,!0);return{href:t,as:h?l.resolveHref(O,h):r||t}},[O,a,h]),A=i.default.useRef(z),N=i.default.useRef(I);T&&(n=i.default.Children.only(r));let D=T?n&&"object"==typeof n&&n.ref:t,[B,U,W]=f.useIntersection({rootMargin:"200px"}),Z=i.default.useCallback(e=>{(N.current!==I||A.current!==z)&&(W(),N.current=I,A.current=z),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[I,D,z,W,B]);i.default.useEffect(()=>{L&&U&&M&&g(L,z,I,{locale:C})},[I,z,U,C,M,null==O?void 0:O.locale,L]);let q={ref:Z,onClick(e){T||"function"!=typeof x||x(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:u}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?i.default.startTransition(h):h()}(e,L,z,I,w,E,_,C,R,M)},onMouseEnter(e){T||"function"!=typeof j||j(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(M||!R)&&g(L,z,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){T||"function"!=typeof S||S(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(M||!R)&&g(L,z,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!T||b||"a"===n.type&&!("href"in n.props)){let F=void 0!==C?C:null==O?void 0:O.locale,G=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(I,F,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);q.href=G||p.addBasePath(u.addLocale(I,F,null==O?void 0:O.defaultLocale))}return T?i.default.cloneElement(n,q):i.default.createElement("a",Object.assign({},k,q),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8315:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[c,f]=n.useState(!1),[d,p]=n.useState(null);n.useEffect(()=>{if(i){if(!s&&!c&&d&&d.tagName){let e=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let t=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!c){let n=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(n)}},[d,s,r,t,c]);let h=n.useCallback(()=>{f(!1)},[]);return[p,c,h]};var n=r(7378),o=r(8404);let i="function"==typeof IntersectionObserver,l=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1405:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i}=e,l=n||t,a=o||r,u=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},2788:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},6118:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(n){r=l}}();var u=[],s=!1,c=-1;function f(){s&&n&&(s=!1,n.length?u=n.concat(u):c=-1,u.length&&d())}function d(){if(!s){var e=a(f);s=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||s||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},l=!0;try{t[e](i,i.exports,n),l=!1}finally{l&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},8038:function(e,t,r){e.exports=r(3057)},8579:function(e,t,r){e.exports=r(1569)},9894:function(e,t,r){e.exports=r(3853)},6677:function(e,t,r){e.exports=r(7895)}}]);