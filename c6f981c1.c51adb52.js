(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(a),h=n,d=b["".concat(c,".").concat(h)]||b[h]||u[h]||o;return a?r.a.createElement(d,s(s({ref:t},l),{},{components:a})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(101)),c={},s={unversionedId:"hunting/utilities/curl",id:"hunting/utilities/curl",isDocsHomePage:!1,title:"curl",description:"* HTTP Authentication",source:"@site/docs\\hunting\\utilities\\curl.md",permalink:"/rosh/docs/hunting/utilities/curl",sidebar:"huntingSidebar",previous:{title:"Python Scripts",permalink:"/rosh/docs/hunting/scripts/python_scripts"},next:{title:"nc",permalink:"/rosh/docs/hunting/utilities/nc"}},i=[{value:"HTTP basic authentication",id:"http-basic-authentication",children:[]},{value:"Digest Authentication",id:"digest-authentication",children:[]},{value:"Token Authentication",id:"token-authentication",children:[]},{value:"response headers <code>i</code>",id:"response-headers-i",children:[]},{value:"Only response headers <code>I</code>",id:"only-response-headers-i",children:[]},{value:"username and password for proxy",id:"username-and-password-for-proxy",children:[]},{value:"username and password for HTTP server",id:"username-and-password-for-http-server",children:[]}],l={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#http-basic-authentication"}),"HTTP basic authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#digest-authentication"}),"Digest Authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#token-authentication"}),"Token Authentication")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#perform-an-http-get-request"}),"Perform an HTTP GET request")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#http-response-headers"}),"HTTP Response Headers"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#response-headers-i"}),"response headers ",Object(o.b)("inlineCode",{parentName:"a"},"i"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#only-response-headers-I"}),"Only response headers ",Object(o.b)("inlineCode",{parentName:"a"},"I"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#perform-an-http-post-request"}),"Perform an HTTP POST request")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#perform-an-http-post-request-sending-json"}),"Perform an HTTP POST request sending JSON")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#perform-an-http-put-request"}),"Perform an HTTP PUT request")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#follow-a-redirect"}),"Follow a redirect")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#store-the-response-to-a-file"}),"Store the response to a file")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#set-a-different-user-agent"}),"Set a different User Agent")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#inspecting-all-the-details-of-the-request-and-the-response"}),"Inspecting all the details of the request and the response")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#proxy"}),"Proxy ",Object(o.b)("inlineCode",{parentName:"a"},"-x")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#username-and-password-for-proxy"}),"username and password for proxy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#username-and-password-for-HTTP-server"}),"username and password for HTTP server")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#copying-any-browser-network-request-to-a-curl-command"}),"Copying any browser network request to a curl command"))),Object(o.b)("p",null,"Refs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://flaviocopes.com/http-curl/"}),"https://flaviocopes.com/http-curl/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://curl.haxx.se/docs/manual.html"}),"https://curl.haxx.se/docs/manual.html"))),Object(o.b)("h1",{id:"http-authentication"},"HTTP Authentication"),Object(o.b)("h2",{id:"http-basic-authentication"},"HTTP basic authentication"),Object(o.b)("p",null,"If a resource requires Basic HTTP Authentication, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"u")," option to pass the ",Object(o.b)("inlineCode",{parentName:"p"},"user:password values"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -u user:pass https://flaviocopes.com/\ncurl -u bob:qwerty http://192.165.34.3/dir/\n")),Object(o.b)("h2",{id:"digest-authentication"},"Digest Authentication"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl --digest -u alice:password1 http://192.165.34.3/poc/\n")),Object(o.b)("h2",{id:"token-authentication"},"Token Authentication"),Object(o.b)("p",null,"We have to set the token in headers for token authentication to work."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -H 'Authorization: Token <token>' 192.183.171.3\n")),Object(o.b)("p",null,'We have to write a custom wrapper around this command. In the script, we will rely on the fact\nthat on using the correct token, we will get something else than "Unauthorized Access".'),Object(o.b)("p",null,"You can refer this script ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jai-the-seeker/CTF-OSCP/blob/master/scripts.md#authorization-token"}),"https://github.com/jai-the-seeker/CTF-OSCP/blob/master/scripts.md#authorization-token")),Object(o.b)("p",null,"After performing the dictionary attack we will get the password, which can be used to set the token in the headers"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# -H, --header <header/@file> Pass custom header(s) to server\ncurl -H 'Authorization: Token 123123123' 192.186.248.3\n")),Object(o.b)("h1",{id:"perform-an-http-get-request"},"Perform an HTTP GET request"),Object(o.b)("p",null,"When you perform a request, curl will return the body of the response:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl https://flaviocopes.com/\n")),Object(o.b)("h1",{id:"http-response-headers"},"HTTP response headers"),Object(o.b)("h2",{id:"response-headers-i"},"response headers ",Object(o.b)("inlineCode",{parentName:"h2"},"i")),Object(o.b)("p",null,"By default the response headers are hidden in the output of curl. To show them, use the ",Object(o.b)("inlineCode",{parentName:"p"},"i")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -i https://flaviocopes.com/\n")),Object(o.b)("h2",{id:"only-response-headers-i"},"Only response headers ",Object(o.b)("inlineCode",{parentName:"h2"},"I")),Object(o.b)("p",null,"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"I")," option, you can get only the headers, and not the response body:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -I https://flaviocopes.com/\n")),Object(o.b)("h1",{id:"perform-an-http-post-request"},"Perform an HTTP POST request"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"X")," option lets you change the ",Object(o.b)("inlineCode",{parentName:"p"},"HTTP")," method used. By default, ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," is used, and it\u2019s the same as writing"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET https://flaviocopes.com/\n")),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"-X POST")," will perform a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request. You can perform a POST request passing data URL encoded:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'curl -d "option=value&something=anothervalue" -X POST https://flaviocopes.com/\n')),Object(o.b)("p",null,"In this case, the ",Object(o.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded Content-Type")," is sent."),Object(o.b)("h1",{id:"perform-an-http-post-request-sending-json"},"Perform an HTTP POST request sending JSON"),Object(o.b)("p",null,"Instead of posting data URL-encoded, like in the example above, you might want to send JSON. In this case you need to explicitly set the Content-Type header, by using the ",Object(o.b)("inlineCode",{parentName:"p"},"H")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'curl -d \'{"option": "value", "something": "anothervalue"}\' -H "Content-Type: application/json" -X POST https://flaviocopes.com/\n')),Object(o.b)("p",null,"You can also send a JSON file from your disk:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'curl -d "@my-file.json" -X POST https://flaviocopes.com/\n')),Object(o.b)("h1",{id:"perform-an-http-put-request"},"Perform an HTTP PUT request"),Object(o.b)("p",null,"The concept is the same as for ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," requests, just change the ",Object(o.b)("inlineCode",{parentName:"p"},"HTTP method")," using ",Object(o.b)("inlineCode",{parentName:"p"},"-X PUT")),Object(o.b)("h1",{id:"follow-a-redirect"},"Follow a redirect"),Object(o.b)("p",null,"A redirect response like 301, which specifies the Location response header, can be automatically followed by specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"L")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl http://flaviocopes.com/\n")),Object(o.b)("p",null,"will not follow automatically to the HTTPS version which I set up to redirect to, but this will:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -L http://flaviocopes.com/\n")),Object(o.b)("h1",{id:"store-the-response-to-a-file"},"Store the response to a file"),Object(o.b)("p",null,"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"o")," option you can tell curl to save the response to a file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -o file.html https://flaviocopes.com/\n")),Object(o.b)("p",null,"You can also just save a file by its name on the server, using the O option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -O https://flaviocopes.com/index.html\n")),Object(o.b)("h1",{id:"set-a-different-user-agent"},"Set a different User Agent"),Object(o.b)("p",null,"The user agent tells the server which client is performing the request. By default curl sends the ",Object(o.b)("inlineCode",{parentName:"p"},"curl/<version> user agent, like: curl/7.54.0.")),Object(o.b)("p",null,"You can specify a different user agent using the ",Object(o.b)("inlineCode",{parentName:"p"},"--user-agent")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'curl --user-agent "my-user-agent" https://flaviocopes.com\n')),Object(o.b)("h1",{id:"inspecting-all-the-details-of-the-request-and-the-response"},"Inspecting all the details of the request and the response"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"--verbose")," option to make curl output all the details of the request, and the response:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl --verbose -I https://flaviocopes.com/\n")),Object(o.b)("h1",{id:"proxy"},"proxy"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"-x, --proxy [protocol://]host[:port]\ncurl -x 192.201.208.3:3128 127.0.0.1\n")),Object(o.b)("p",null,"The proxy string can be specified with a protocol:// prefix. No protocol specified or http:// will be treated as HTTP proxy. Use socks4://, socks4a://, socks5:// or socks5h:// to request a specific SOCKS version to be used."),Object(o.b)("h2",{id:"username-and-password-for-proxy"},"username and password for proxy"),Object(o.b)("p",null,"In order to pass the credentials to the proxy server, we can use the curl option ",Object(o.b)("inlineCode",{parentName:"p"},"-U"),". Therefore, the following command will work:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -U admin:laurie -x 192.173.117.3:3128 127.0.0.1:1996\n")),Object(o.b)("p",null,"Alternatively,"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# curl -x <[protocol://][user:password@]proxyhost[:port]> url\n# Example 1\ncurl -x http://user:password@proxy-IP-here:port url-of-website:port\n# Example 2\ncurl -x admin:laurie@192.142.49.3:3128 127.0.0.1:1996\n")),Object(o.b)("h2",{id:"username-and-password-for-http-server"},"username and password for HTTP server"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Get a file from an HTTP server that requires user and password, using the proxy:\ncurl -u user:passwd -x my-proxy:888 http://www.get.this/\n")),Object(o.b)("p",null,"The curl ",Object(o.b)("inlineCode",{parentName:"p"},"-u")," option is used to specify credentials for the ",Object(o.b)("em",{parentName:"p"},"target")," server authentication and not for the ",Object(o.b)("em",{parentName:"p"},"proxy")," server authentication."),Object(o.b)("p",null,"For e.g, when you are using the command ",Object(o.b)("inlineCode",{parentName:"p"},"curl -u admin:laurie -x 192.173.117.3:3128 127.0.0.1:1996"),". The credentials ",Object(o.b)("inlineCode",{parentName:"p"},"admin:laurie")," are ",Object(o.b)("em",{parentName:"p"},"not")," being passed as credentials to the proxy server, instead, they are passed as a part of the request which is supposed to be forwarded to the target server.  The option value will be considered as credentials for the target server authentication and not for the proxy authentication."),Object(o.b)("p",null,"The above command will work in the scenario where the proxy server is configured without authentication, but the target server is protected with authentication (basic/digest authentication). This way, the connection will be forwarded by the proxy server and the credentials will be used to authenticate with the target server."))}p.isMDXComponent=!0}}]);