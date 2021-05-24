var e={exports:{}},t=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},n=t,r=Object.prototype.toString;function o(e){return"[object Array]"===r.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function s(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===r.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var f={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:s,isUndefined:i,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function n(n,r){s(t[r])&&s(n)?t[r]=e(t[r],n):s(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)c(arguments[r],n);return t},extend:function(e,t,r){return c(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},p=f;function d(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var l=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(p.isURLSearchParams(t))r=t.toString();else{var o=[];p.forEach(t,(function(e,t){null!=e&&(p.isArray(e)?t+="[]":e=[e],p.forEach(e,(function(e){p.isDate(e)?e=e.toISOString():p.isObject(e)&&(e=JSON.stringify(e)),o.push(d(t)+"="+d(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},h=f;function m(){this.handlers=[]}m.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},m.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},m.prototype.forEach=function(e){h.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var g=m,y=f,v=function(e){return!(!e||!e.__CANCEL__)},w=f,b=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},E=function(e,t,n,r,o){var i=new Error(e);return b(i,t,n,r,o)},x=E,C=f,S=C.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),C.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),C.isString(r)&&a.push("path="+r),C.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},R=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},j=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},A=f,O=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],N=f,U=N.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=N.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},B=f,T=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(x("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},L=S,P=l,k=function(e,t){return e&&!R(t)?j(e,t):t},q=function(e){var t,n,r,o={};return e?(A.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=A.trim(e.substr(0,r)).toLowerCase(),n=A.trim(e.substr(r+1)),t){if(o[t]&&O.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},D=U,F=E,H=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;B.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+s)}var u=k(e.baseURL,e.url);if(i.open(e.method.toUpperCase(),P(u,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in i?q(i.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:r,config:e,request:i};T(t,n,o),i=null}},i.onabort=function(){i&&(n(F("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(F("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(F(t,e,"ECONNABORTED",i)),i=null},B.isStandardBrowserEnv()){var c=(e.withCredentials||D(u))&&e.xsrfCookieName?L.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in i&&B.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),B.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))},z=f,_=function(e,t){w.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},I={"Content-Type":"application/x-www-form-urlencoded"};function M(e,t){!z.isUndefined(e)&&z.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var X,J={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(X=H),X),transformRequest:[function(e,t){return _(t,"Accept"),_(t,"Content-Type"),z.isFormData(e)||z.isArrayBuffer(e)||z.isBuffer(e)||z.isStream(e)||z.isFile(e)||z.isBlob(e)?e:z.isArrayBufferView(e)?e.buffer:z.isURLSearchParams(e)?(M(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):z.isObject(e)?(M(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};J.headers={common:{Accept:"application/json, text/plain, */*"}},z.forEach(["delete","get","head"],(function(e){J.headers[e]={}})),z.forEach(["post","put","patch"],(function(e){J.headers[e]=z.merge(I)}));var V=J,$=f,K=function(e,t,n){return y.forEach(n,(function(n){e=n(e,t)})),e},G=v,Q=V;function W(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var Y=f,Z=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return Y.isPlainObject(e)&&Y.isPlainObject(t)?Y.merge(e,t):Y.isPlainObject(t)?Y.merge({},t):Y.isArray(t)?t.slice():t}function u(r){Y.isUndefined(t[r])?Y.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}Y.forEach(r,(function(e){Y.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),Y.forEach(o,u),Y.forEach(i,(function(r){Y.isUndefined(t[r])?Y.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),Y.forEach(a,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var c=r.concat(o).concat(i).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return Y.forEach(f,u),n},ee=f,te=l,ne=g,re=function(e){return W(e),e.headers=e.headers||{},e.data=K(e.data,e.headers,e.transformRequest),e.headers=$.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),$.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Q.adapter)(e).then((function(t){return W(e),t.data=K(t.data,t.headers,e.transformResponse),t}),(function(t){return G(t)||(W(e),t&&t.response&&(t.response.data=K(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},oe=Z;function ie(e){this.defaults=e,this.interceptors={request:new ne,response:new ne}}ie.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=oe(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[re,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},ie.prototype.getUri=function(e){return e=oe(this.defaults,e),te(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},ee.forEach(["delete","get","head","options"],(function(e){ie.prototype[e]=function(t,n){return this.request(oe(n||{},{method:e,url:t,data:(n||{}).data}))}})),ee.forEach(["post","put","patch"],(function(e){ie.prototype[e]=function(t,n,r){return this.request(oe(r||{},{method:e,url:t,data:n}))}}));var ae=ie;function se(e){this.message=e}se.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},se.prototype.__CANCEL__=!0;var ue=se,ce=ue;function fe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new ce(e),t(n.reason))}))}fe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},fe.source=function(){var e;return{token:new fe((function(t){e=t})),cancel:e}};var pe=fe,de=f,le=t,he=ae,me=Z;function ge(e){var t=new he(e),n=le(he.prototype.request,t);return de.extend(n,he.prototype,t),de.extend(n,t),n}var ye=ge(V);ye.Axios=he,ye.create=function(e){return ge(me(ye.defaults,e))},ye.Cancel=ue,ye.CancelToken=pe,ye.isCancel=v,ye.all=function(e){return Promise.all(e)},ye.spread=function(e){return function(t){return e.apply(null,t)}},ye.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},e.exports=ye,e.exports.default=ye;export{e as a};
