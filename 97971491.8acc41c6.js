(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),c=(r(0),r(186)),i={},o={id:"web/LFI",title:"LFI",description:"* LFI",source:"@site/docs\\web\\LFI.md",permalink:"/rosh/docs/web/LFI"},l=[{value:"Fuzz URI parameters",id:"fuzz-uri-parameters",children:[]},{value:"Check for LFI",id:"check-for-lfi",children:[{value:"Step 1: Directory Traversal",id:"step-1-directory-traversal",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#lfi"}),"LFI"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#fuzz-uri-parameters"}),"Fuzz URI parameters")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#Check-for-lfi"}),"Check for LFI"))))),Object(c.b)("h1",{id:"lfi"},"LFI"),Object(c.b)("p",null,"Refs:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.acunetix.com/blog/articles/local-file-inclusion-lfi/"}),"https://www.acunetix.com/blog/articles/local-file-inclusion-lfi/"))),Object(c.b)("h2",{id:"fuzz-uri-parameters"},"Fuzz URI parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jai-the-seeker/CTF-OSCP/blob/master/web/web_recon.md#fuzzing-parameter-for-lfi"}),"https://github.com/jai-the-seeker/CTF-OSCP/blob/master/web/web_recon.md#fuzzing-parameter-for-lfi"))),Object(c.b)("h2",{id:"check-for-lfi"},"Check for LFI"),Object(c.b)("p",null,"Refs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.exploit-db.com/papers/12886"}),"https://www.exploit-db.com/papers/12886")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.securityidiots.com/Web-Pentest/LFI/guide-to-lfi.html"}),"http://www.securityidiots.com/Web-Pentest/LFI/guide-to-lfi.html")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://highon.coffee/blog/lfi-cheat-sheet/"}),"https://highon.coffee/blog/lfi-cheat-sheet/"))),Object(c.b)("h3",{id:"step-1-directory-traversal"},"Step 1: Directory Traversal"),Object(c.b)("p",null,"In burpsuite, send the intercepted request to repeater mode. Then temper with the arguments of the parameter, to find the LFI vulnerability. In case the vulnerability exists, the contents of ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/passwd"),", will show up in the response. In case, there are no parameters being supplied to the URI, the same can be found by fuzzing. In the example below, the parameter ",Object(c.b)("inlineCode",{parentName:"p"},"file")," has been found out through fuzzing URI parameters."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /manage.php?file=../../../../../../../../../../../etc/passwd HTTP/1.1\n")))}p.isMDXComponent=!0},186:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,m=u["".concat(i,".").concat(s)]||u[s]||f[s]||c;return r?a.a.createElement(m,o(o({ref:t},b),{},{components:r})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);