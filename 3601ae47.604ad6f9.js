(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(9),o=(t(0),t(182)),c={},i={id:"vulnhub/DC-9",title:"DC-9",description:"Find IP Address of Machine",source:"@site/docs\\vulnhub\\DC-9.md",permalink:"/rosh/docs/vulnhub/DC-9"},p=[{value:"Find IP Address of Machine",id:"find-ip-address-of-machine",children:[]},{value:"Nmap Scan",id:"nmap-scan",children:[]}],s={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"find-ip-address-of-machine"},"Find IP Address of Machine"),Object(o.b)("p",null,"Let's find the IP address of the DC-9 machine"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ arp-scan --interface=eth1 10.10.10.0/24\n\nInterface: eth1, type: EN10MB, MAC: 08:00:27:5a:bb:1d, IPv4: 10.10.10.106\nStarting arp-scan 1.9.7 with 256 hosts (https://github.com/royhills/arp-scan)\n10.10.10.1  0a:00:27:00:00:05   (Unknown: locally administered)\n10.10.10.100    08:00:27:6d:d8:39   PCS Systemtechnik GmbH\n10.10.10.109    08:00:27:2e:3b:e6   PCS Systemtechnik GmbH\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"arp-scan")," reult shows the IP address of DC-9 machine as ",Object(o.b)("inlineCode",{parentName:"p"},"10.10.10.109")),Object(o.b)("h2",{id:"nmap-scan"},"Nmap Scan"),Object(o.b)("p",null,"Scan the default ports"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"root@kali:~# nmap -sV -sC -oA dc-9.output 10.10.10.109\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-06-16 06:59 EDT\nNmap scan report for 10.10.10.109\nHost is up (0.00017s latency).\nNot shown: 999 closed ports\nPORT   STATE    SERVICE VERSION\n22/tcp filtered ssh\nMAC Address: 08:00:27:2E:3B:E6 (Oracle VirtualBox virtual NIC)\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 8.00 seconds\n")),Object(o.b)("p",null,"Sleep for sometime and start the port scan for all the ports"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"root@kali:~# sleep 300; nmap -p- -oA dc-9-allports 10.10.10.109\n")))}l.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(f,i(i({ref:n},s),{},{components:t})):a.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);