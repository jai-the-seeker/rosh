(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),c=n(9),r=(n(0),n(183)),i={title:"Bash Scripts",sidebar_label:"Bash Scripts"},l={id:"scripts/bash_scripts",title:"Bash Scripts",description:"* Bash",source:"@site/docs\\scripts\\bash_scripts.md",permalink:"/rosh/docs/scripts/bash_scripts",sidebar_label:"Bash Scripts",sidebar:"someSidebar",previous:{title:"SMTP",permalink:"/rosh/docs/network_recon/SMTP"},next:{title:"Python Scripts",permalink:"/rosh/docs/scripts/python_scripts"}},s=[{value:"Sed",id:"sed",children:[]},{value:"awk",id:"awk",children:[]},{value:"Authorization Token",id:"authorization-token",children:[]},{value:"Directory Listing",id:"directory-listing",children:[]},{value:"proxy authentication dictionary attk",id:"proxy-authentication-dictionary-attk",children:[]},{value:"<code>find</code>",id:"find",children:[]},{value:"<code>locate</code>",id:"locate",children:[]},{value:"<code>netstat</code>",id:"netstat",children:[]},{value:"<code>ps</code>",id:"ps",children:[]},{value:"empty file",id:"empty-file",children:[]},{value:"Basic Expressions",id:"basic-expressions",children:[]},{value:"If-else",id:"if-else",children:[]},{value:"Menu select",id:"menu-select",children:[]},{value:"<code>test</code> Expressions",id:"test-expressions",children:[{value:"Use of <code>test</code> expression in if-else",id:"use-of-test-expression-in-if-else",children:[]}]},{value:"for loops",id:"for-loops",children:[]},{value:"for-in-loops",id:"for-in-loops",children:[]},{value:"Functions",id:"functions",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Local Variables",id:"local-variables",children:[]},{value:"Exit codes",id:"exit-codes",children:[]}]},{value:"Read file line by line",id:"read-file-line-by-line",children:[]}],o={rightToc:s};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#bash"}),"Bash"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#sed"}),"Sed"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#awk"}),"awk")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#useful-scripts"}),"Useful Scripts"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#authorization-token"}),"Authorization Token")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#directory-listing"}),"Directory Listing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#proxy-authentication-dictionary-attk"}),"proxy authentication dictionary attk")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#system-commands"}),"System Commands"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#find"}),Object(r.b)("inlineCode",{parentName:"a"},"find"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#locate"}),Object(r.b)("inlineCode",{parentName:"a"},"locate"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#netstat"}),Object(r.b)("inlineCode",{parentName:"a"},"netstat"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#ps"}),Object(r.b)("inlineCode",{parentName:"a"},"ps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#empty-file"}),"empty file")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#basic-bash-commands-and-constructs"}),"Basic Bash Commands and Constructs"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#basic-expressions"}),"Basic Expressions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#if-else"}),"If-else")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#menu-select"}),"Menu select")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#test-expressions"}),Object(r.b)("inlineCode",{parentName:"a"},"test")," Expressions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#for-loops"}),"for loops")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#for-in-loops"}),"for-in-loops")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#functions"}),"Functions"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#arguments"}),"Arguments")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#local-variables"}),"Local Variables")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#exit-codes"}),"Exit codes")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#read-file-line-by-line"}),"Read file line by line"))))),Object(r.b)("h1",{id:"bash"},"Bash"),Object(r.b)("h2",{id:"sed"},"Sed"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Format\n# sed 's/regexp/replace/g' filename.txt\nsed 's/,/ /g' filename.txt # replaces all comma with space\nsed 's/\\//g' filename.txt # remove / from filename.txt\n")),Object(r.b)("h2",{id:"awk"},"awk"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"awk -F: '{print $1} creds # prints first coulumn of file creds which contains : separated values\nawk -F, '{print $1} creds # prints first coulumn of file creds which contains , separated values\n")),Object(r.b)("h1",{id:"useful-scripts"},"Useful Scripts"),Object(r.b)("h2",{id:"authorization-token"},"Authorization Token"),Object(r.b)("p",null,"Bash script to read different tokens from a file and pass them to ",Object(r.b)("inlineCode",{parentName:"p"},"curl")," command to find out the valid token for authorization. To read file line by line in a ",Object(r.b)("inlineCode",{parentName:"p"},"while")," loop you can refer ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#read-file-line-by-line"}),"Read file line by line")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nwhile read token; do\ncontent=$(curl -s -H \'Authorization: Token \'"$token" $1)\nif echo "$content" | grep -qi "unauth"; then\ncontinue\nelse\necho "Found token : $token"\nfi\ndone <$2\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./brute.sh 192.186.248.3 wordlists/100-common-passwords.txt\n")),Object(r.b)("h2",{id:"directory-listing"},"Directory Listing"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nwhile read dir_name; do\necho "Trying directory: $dir_name"\ncurl http://$1$dir_name\ndone <$2\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./testscript.sh 192.11.183.3 directory.txt\n")),Object(r.b)("h2",{id:"proxy-authentication-dictionary-attk"},"proxy authentication dictionary attk"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\n  \nwhile read user\ndo\n  while read passwd\n  do\n    content=$(curl -I -x "$user":"$passwd"@$1 $2)\n    echo "$user - $passwd"\n    if echo "$content" | grep -qi "407 proxy authentication required"; then\n      continue\n    else\n      echo "Found usernam-pwd : $user - $passwd"\n      exit 0\n    fi\n  done <$4\ndone <$3\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ ./crack.py 192.144.18.3:3128 127.0.0.1  usernames.lst password.lst\n")),Object(r.b)("h1",{id:"system-commands"},"System Commands"),Object(r.b)("h2",{id:"find"},Object(r.b)("inlineCode",{parentName:"h2"},"find")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"find / -type f -name '*.txt'\nfind / -type f -perm 775 -user student\n")),Object(r.b)("h2",{id:"locate"},Object(r.b)("inlineCode",{parentName:"h2"},"locate")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# -i option to perform a case-insensitive search\nlocate wordlist\n")),Object(r.b)("h2",{id:"netstat"},Object(r.b)("inlineCode",{parentName:"h2"},"netstat")),Object(r.b)("p",null,"Refs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.binarytides.com/linux-netstat-command-examples/"}),"https://www.binarytides.com/linux-netstat-command-examples/"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"netstat")," is a command line utility that can be used to list out all the network (socket) connections on a system."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Enumerate services running on the target machine\nps -ef\nnetstat -anlp\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# List out all connections\nnetstat -a\n# List out only tcp connections\nnetstat -at\n# Disable reverse dns lookup for faster output. By default, the netstat command tries to find out the hostname of each ip address in the # connection by doing a reverse dns lookup. This slows down the output.\nnetstat -n\n# List out only listening connections\nnetstat -l\n# Get process name/pid and user id. -p for process name/pid and -e for user\n# When using the -p option, netstat must be run with root privileges, otherwise it cannot detect the pids of processes running with root # privileges and most services like http and ftp often run with root privileges.\nsudo netstat -ltpe\n# All established connections from the server.\nnetstat -natu | grep 'ESTABLISHED'\nnetstat -natu | grep 'ESTABLISHED' | grep 61.177.142.158\n# Listening Connection\nnetstat -an | grep 'LISTEN'\nnetstat -tnl\n")),Object(r.b)("h2",{id:"ps"},Object(r.b)("inlineCode",{parentName:"h2"},"ps")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Display all processes in BSD format\nps aux\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"-a")," flag stands for all processes"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"-x")," will display all processes even those not associated with the current tty"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# To view a full format listing run\nps -ef\n")),Object(r.b)("h2",{id:"empty-file"},"empty file"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'# -n tells echo not to output the trailing newline\necho -n "" > access.log\n\n# The truncate command helps to shrink or extend the size of a file to a defined size.\n# -s option specifies the file size\ntruncate -s 0 access.log\n')),Object(r.b)("h1",{id:"basic-bash-commands-and-constructs"},"Basic Bash Commands and Constructs"),Object(r.b)("p",null,"Refs :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=LTuuMtQR1uQ&list=PLBf0hzazHTGMJzHon4YXGscxUvsFpxrZT"}),"https://www.youtube.com/watch?v=LTuuMtQR1uQ&list=PLBf0hzazHTGMJzHon4YXGscxUvsFpxrZT")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=aNQCl_ByM20"}),"https://www.youtube.com/watch?v=aNQCl_ByM20"))),Object(r.b)("h2",{id:"basic-expressions"},"Basic Expressions"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\n\n# No space is allowed before and after the assignment (i.e. the equal sign) in BASH\ncounter=8\n\necho "Double vs Single quote"\necho "$counter"\n# single quote prevents shell expansion to keep text as it is\necho \'$counter\' \n\necho "Variable Expansion"\necho $counter\necho ${counter}th floor\n\necho "Brace Expansion"\necho T{a,i,o}m\n\necho "Arithematic Expansion"\necho $[3*2]\necho $((3*2))\necho $((counter++))\necho $((counter--))\n\necho "Parameter Expansion"\nopt=${1:-DEFAULT VALUE}\necho $opt\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"Double vs Single quote\n8\n$counter\nVariable Expansion\n8\n8th floor\nBrace Expansion\nTam Tim Tom\nArithematic Expansion\n6\n6\n8\n9\nParameter Expansion\nDEFAULT VALUE\n")),Object(r.b)("h2",{id:"if-else"},"If-else"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\necho "Enter your username : "; read NAME\n\n# format 1\n# if test-result-is-true; then COMMAND; fi\nif [ "$NAME" = "Eliot" ]; then echo "Welcome back Eliot"; else echo "Please register"; fi\n\nfunction test_func() {\n  return 0\n}\n\n# format 2\n# if function-return-zero; then COMMAND; fi\nif test_func\nthen\n  echo "Function returned zero"\nelse\n  echo "Non zero return!!!"\nfi\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"Enter your username : \nEliot\nWelcome back Eliot\nFunction returned zero\n")),Object(r.b)("h2",{id:"menu-select"},"Menu select"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nmenu="Pizza Burger FrenchFries Quit"\nselect choice in $menu; do\n  [[ $choice == Quit ]] && {\n    echo bye\n    break\n  }\n  # REPLY is a BASH built-in variable for select construct\n  echo "You selected option $REPLY"\ndone\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"1) Pizza\n2) Burger\n3) FrenchFries\n4) Quit\n#? 3\nYou selected option 3\n#? 4\nbye\n")),Object(r.b)("h2",{id:"test-expressions"},Object(r.b)("inlineCode",{parentName:"h2"},"test")," Expressions"),Object(r.b)("p",null,"We can make use of conditional expressions in the bash scripting. In order to know the available expressions use"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ help test\ntest: test [expr]\n    Evaluate conditional expression.\n    \n    Exits with a status of 0 (true) or 1 (false) depending on\n    the evaluation of EXPR.\n    \n    -d FILE        True if file is a directory.\n    -e FILE        True if file exists.\n")),Object(r.b)("h3",{id:"use-of-test-expression-in-if-else"},"Use of ",Object(r.b)("inlineCode",{parentName:"h3"},"test")," expression in if-else"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nif [ -e /etc/shadow ]; then echo "File exists"; else echo "Missing..."; fi\n')),Object(r.b)("h2",{id:"for-loops"},"for loops"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\nfor((i = 1, j = 10; i <= 3 && j <= 20; i++, j += 10)); do echo $i $j; done\n")),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"1 10\n2 20\n")),Object(r.b)("h2",{id:"for-in-loops"},"for-in-loops"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nfor NAME in $(cat names.txt); do\n  echo "Name is : $NAME"\ndone\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"Name is : ram\nName is : shayam\nName is : sita\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\necho "Please enter the subnet : "\nread SUBNET\nfor IP in $(seq 1 254); do\n  ping -c 1 $SUBNET.$IP\ndone\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"Please enter the subnet : \n192.234.246\nPING 192.234.246.1 (192.234.246.1) 56(84) bytes of data.\n64 bytes from 192.234.246.1: icmp_seq=1 ttl=64 time=0.079 ms\n")),Object(r.b)("h2",{id:"functions"},"Functions"),Object(r.b)("h3",{id:"arguments"},"Arguments"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nfunction show_arguments() { #define a function\n  echo $@    # all arguments\n  echo $*    # all arguments\n  echo $1 $2 # first and second arguments\n}\nshow_arguments 1 "a b c" 3\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"1 a b c 3\n1 a b c 3\n1 a b c\n")),Object(r.b)("h3",{id:"local-variables"},"Local Variables"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\ncounter=4\nfunction check() { #define a function\n  local counter=8\n  echo $counter  \n}\ncheck\necho $counter\n")),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"8\n4\n")),Object(r.b)("h3",{id:"exit-codes"},"Exit codes"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nfunction func() { #define a function\n  return $1  \n}\nfunc 5\n(($? != 0)) && { echo "Error M1"; } # Method 1\nif ! func 5; then echo "Error M2"; fi # Method 2\n')),Object(r.b)("p",null,"output"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"Error M1\nError M2\n")),Object(r.b)("h2",{id:"read-file-line-by-line"},"Read file line by line"),Object(r.b)("p",null,"Refs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.cyberciti.biz/faq/unix-howto-read-line-by-line-from-file/"}),"https://www.cyberciti.biz/faq/unix-howto-read-line-by-line-from-file/"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"while read -r line; do COMMAND; done < input.file")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"-r")," option passed to read command prevents backslash escapes from being interpreted.\nAdd ",Object(r.b)("inlineCode",{parentName:"p"},"IFS=")," option before read command to prevent leading/trailing whitespace from being trimmed."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"while IFS= read -r line; do COMMAND $line; done < input.file")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\ninput="/path/to/txt/file"\nwhile IFS= read -r line\ndo\n  echo "$line"\ndone < "$input"\n')))}b.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),b=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?c.a.createElement(h,l(l({ref:t},o),{},{components:n})):c.a.createElement(h,l({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<r;o++)i[o]=n[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);