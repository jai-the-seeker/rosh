(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),s=(n(0),n(143)),i=n(147),c={title:"Kill Sessions and Cookies",author:"Jai"},o={id:"web_security/sessions",title:"Kill Sessions and Cookies",description:"Refs:",source:"@site/docs\\web_security\\sessions.mdx",permalink:"/rosh/docs/web_security/sessions",sidebar:"web_securitySidebar",next:{title:"bruteforcing",permalink:"/rosh/docs/web_security/dvwa/bruteforcing"}},l=[{value:"In the begining",id:"in-the-begining",children:[]},{value:"Capture traffic in Burpsuite",id:"capture-traffic-in-burpsuite",children:[]},{value:"Play with Sessions",id:"play-with-sessions",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.a)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"Refs:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=9n7ZohSRKrQ"}),"https://www.youtube.com/watch?v=9n7ZohSRKrQ"))),Object(s.a)("h2",{id:"in-the-begining"},"In the begining"),Object(s.a)("p",null,"Let us create a php file for starting the session"),Object(s.a)("pre",null,Object(s.a)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n  session_start();\n?>\n")),Object(s.a)("p",null,Object(s.a)("inlineCode",{parentName:"p"},"session_start()")," creates a session or resumes the current one based on a session identifier passed\nvia a GET or POST request, or passed via a cookie."),Object(s.a)("p",null,"Once we open the file in the browser, we will see that a cookie named ",Object(s.a)("inlineCode",{parentName:"p"},"PHPSESSID")," is created"),Object(s.a)("img",{alt:"Figure 01",src:Object(i.a)("img/web_security/sessions/pssid.jpg")}),Object(s.a)("p",null,"A session file is created in our server in the /tmp directory"),Object(s.a)("pre",null,Object(s.a)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# ls /tmp \nsess_ca9f1b3ed05ab874e5d47ab522867ee3\n")),Object(s.a)("h2",{id:"capture-traffic-in-burpsuite"},"Capture traffic in Burpsuite"),Object(s.a)("p",null,"The first time we visit the webpage, raw request is given below"),Object(s.a)("pre",null,Object(s.a)("code",Object(r.a)({parentName:"pre"},{}),"GET /sess.php HTTP/1.1\nHost: 10.10.10.105:5000\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate\nConnection: close\nUpgrade-Insecure-Requests: 1\n")),Object(s.a)("p",null,"When we visit the webpage again, we see that ",Object(s.a)("inlineCode",{parentName:"p"},"PHPSESSID")," cookie also travels along with the\nrequest"),Object(s.a)("pre",null,Object(s.a)("code",Object(r.a)({parentName:"pre"},{}),"GET /sess.php HTTP/1.1\nHost: 10.10.10.105:5000\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate\nConnection: close\nCookie: PHPSESSID=ca9f1b3ed05ab874e5d47ab522867ee3\nUpgrade-Insecure-Requests: 1\nCache-Control: max-age=0\n")),Object(s.a)("h2",{id:"play-with-sessions"},"Play with Sessions"),Object(s.a)("p",null,"Let us set a few session variables, these are set with the PHP global variable $_SESSION.\nThese variables can be accessed during lifetime of a session."),Object(s.a)("pre",null,Object(s.a)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n  session_start();\n  if (isset($_SESSION['user'])) {\n    echo \"Welcome :\". $_SESSION['user'].\"<br>\";\n  }\n  else {\n    $_SESSION['user'] = \"burp\";\n  }\n?>\n")),Object(s.a)("p",null,"Now, when the user visits the webpage, an entry is made inside the sessions file in the server"),Object(s.a)("pre",null,Object(s.a)("code",Object(r.a)({parentName:"pre"},{}),'$ cat sess_ca9f1b3ed05ab874e5d47ab522867ee3 \nuser|s:4:"burp";\n')),Object(s.a)("p",null,'The second and subsequent times, the user visits the webpage, "Welcome :burp" is displayed on the browser.'))}u.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||s;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},144:function(e,t,n){"use strict";var r=n(0),a=n(36);t.a=function(){return Object(r.useContext)(a.a)}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(144);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);