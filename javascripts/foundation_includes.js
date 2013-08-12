var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){for(var t=e.firstChild;t;t=t.nextSibling){if("CODE"==t.nodeName)return t;if(3!=t.nodeType||!t.nodeValue.match(/\s+/))break}}function r(e,t){return Array.prototype.map.call(e.childNodes,function(e){return 3==e.nodeType?t?e.nodeValue.replace(/\n/g,""):e.nodeValue:"BR"==e.nodeName?"\n":r(e,t)}).join("")}function n(e){var t=(e.className+" "+e.parentNode.className).split(/\s+/);t=t.map(function(e){return e.replace(/^language-/,"")});for(var r=0;r<t.length;r++)if(g[t[r]]||"no-highlight"==t[r])return t[r]}function c(e){var t=[];return function r(e,n){for(var c=e.firstChild;c;c=c.nextSibling)3==c.nodeType?n+=c.nodeValue.length:"BR"==c.nodeName?n+=1:1==c.nodeType&&(t.push({event:"start",offset:n,node:c}),n=r(c,n),t.push({event:"stop",offset:n,node:c}));return n}(e,0),t}function s(t,r,n){function c(){return t.length&&r.length?t[0].offset!=r[0].offset?t[0].offset<r[0].offset?t:r:"start"==r[0].event?t:r:t.length?t:r}function s(t){function r(t){return" "+t.nodeName+'="'+e(t.value)+'"'}return"<"+t.nodeName+Array.prototype.map.call(t.attributes,r).join("")+">"}for(var i=0,a="",o=[];t.length||r.length;){var l=c().splice(0,1)[0];if(a+=e(n.substr(i,l.offset-i)),i=l.offset,"start"==l.event)a+=s(l.node),o.push(l.node);else if("stop"==l.event){var u,b=o.length;do b--,u=o[b],a+="</"+u.nodeName.toLowerCase()+">";while(u!=l.node);for(o.splice(b,1);b<o.length;)a+=s(o[b]),b++}}return a+e(n.substr(i))}function i(e){function t(t,r){return RegExp(t,"m"+(e.cI?"i":"")+(r?"g":""))}function r(e,n){function c(e,t){t.split(" ").forEach(function(t){var r=t.split("|");i[r[0]]=[e,r[1]?Number(r[1]):1],s.push(r[0])})}if(!e.compiled){e.compiled=!0;var s=[];if(e.k){var i={};if(e.lR=t(e.l||hljs.IR,!0),"string"==typeof e.k)c("keyword",e.k);else for(var a in e.k)e.k.hasOwnProperty(a)&&c(a,e.k[a]);e.k=i}n&&(e.bWK&&(e.b="\\b("+s.join("|")+")\\s"),e.bR=t(e.b?e.b:"\\B|\\b"),e.e||e.eW||(e.e="\\B|\\b"),e.e&&(e.eR=t(e.e)),e.tE=e.e||"",e.eW&&n.tE&&(e.tE+=(e.e?"|":"")+n.tE)),e.i&&(e.iR=t(e.i)),void 0===e.r&&(e.r=1),e.c||(e.c=[]);for(var o=0;o<e.c.length;o++)"self"==e.c[o]&&(e.c[o]=e),r(e.c[o],e);e.starts&&r(e.starts,n);for(var l=[],o=0;o<e.c.length;o++)l.push(e.c[o].b);e.tE&&l.push(e.tE),e.i&&l.push(e.i),e.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function a(t,r){function n(e,t){for(var r=0;r<t.c.length;r++){var n=t.c[r].bR.exec(e);if(n&&0==n.index)return t.c[r]}}function c(e,t){return e.e&&e.eR.test(t)?e:e.eW?c(e.parent,t):void 0}function s(e,t){return t.i&&t.iR.test(e)}function l(e,t){var r=f.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function u(){var t=e(m);if(!N.k)return t;var r="",n=0;N.lR.lastIndex=0;for(var c=N.lR.exec(t);c;){r+=t.substr(n,c.index-n);var s=l(N,c);s?(w+=s[1],r+='<span class="'+s[0]+'">'+c[0]+"</span>"):r+=c[0],n=N.lR.lastIndex,c=N.lR.exec(t)}return r+t.substr(n)}function b(){if(N.sL&&!g[N.sL])return e(m);var t=N.sL?a(N.sL,m):o(m);return N.r>0&&(w+=t.keyword_count,v+=t.r),'<span class="'+t.language+'">'+t.value+"</span>"}function d(){return void 0!==N.sL?b():u()}function p(t,r){var n=t.cN?'<span class="'+t.cN+'">':"";t.rB?(k+=n,m=""):t.eB?(k+=e(r)+n,m=""):(k+=n,m=r),N=Object.create(t,{parent:{value:N}}),v+=t.r}function h(t,r){if(m+=t,void 0===r)return k+=d(),0;var i=n(r,N);if(i)return k+=d(),p(i,r),i.rB?0:r.length;var a=c(N,r);if(a){a.rE||a.eE||(m+=r),k+=d();do N.cN&&(k+="</span>"),N=N.parent;while(N!=a.parent);return a.eE&&(k+=e(r)),m="",a.starts&&p(a.starts,""),a.rE?0:r.length}if(s(r,N))throw"Illegal";return m+=r,r.length||1}var f=g[t];i(f);var N=f,m="",v=0,w=0,k="";try{for(var y,_,E=0;;){if(N.t.lastIndex=E,y=N.t.exec(r),!y)break;_=h(r.substr(E,y.index-E),y[0]),E=y.index+_}return h(r.substr(E)),{r:v,keyword_count:w,value:k,language:t}}catch(A){if("Illegal"==A)return{r:0,keyword_count:0,value:e(r)};throw A}}function o(t){var r={keyword_count:0,r:0,value:e(t)},n=r;for(var c in g)if(g.hasOwnProperty(c)){var s=a(c,t);s.language=c,s.keyword_count+s.r>n.keyword_count+n.r&&(n=s),s.keyword_count+s.r>r.keyword_count+r.r&&(n=r,r=s)}return n.language&&(r.second_best=n),r}function l(e,t,r){return t&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,r){return r.replace(/\t/g,t)})),r&&(e=e.replace(/\n/g,"<br>")),e}function u(e,t,i){var u=r(e,i),b=n(e);if("no-highlight"!=b){var d=b?a(b,u):o(u);b=d.language;var g=c(e);if(g.length){var p=document.createElement("pre");p.innerHTML=d.value,d.value=s(g,c(p),u)}d.value=l(d.value,t,i);var h=e.className;h.match("(\\s|^)(language-)?"+b+"(\\s|$)")||(h=h?h+" "+b:b),e.innerHTML=d.value,e.className=h,e.result={language:b,kw:d.keyword_count,re:d.r},d.second_best&&(e.second_best={language:d.second_best.language,kw:d.second_best.keyword_count,re:d.second_best.r})}}function b(){b.called||(b.called=!0,Array.prototype.map.call(document.getElementsByTagName("pre"),t).filter(Boolean).forEach(function(e){u(e,hljs.tabReplace)}))}function d(){window.addEventListener("DOMContentLoaded",b,!1),window.addEventListener("load",b,!1)}var g={};this.LANGUAGES=g,this.highlight=a,this.highlightAuto=o,this.fixMarkup=l,this.highlightBlock=u,this.initHighlighting=b,this.initHighlightingOnLoad=d,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BNR="\\b(0b[01]+)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\[\\s\\S]",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0},this.CLCM={cN:"comment",b:"//",e:"$"},this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"},this.HCM={cN:"comment",b:"#",e:"$"},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.BNM={cN:"number",b:this.BNR,r:0},this.inherit=function(e,t){var r={};for(var n in e)r[n]=e[n];if(t)for(var n in t)r[n]=t[n];return r}};hljs.LANGUAGES.bash=function(e){var t="true false",r="if then else elif fi for break continue while in do done echo exit return set declare",n={cN:"variable",b:"\\$[a-zA-Z0-9_#]+"},c={cN:"variable",b:"\\${([^}]|\\\\})+}"},s={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE,n,c],r:0},i={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0},a={cN:"test_condition",b:"",e:"",c:[s,i,n,c],k:{literal:t},r:0};return{k:{keyword:r,literal:t},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},n,c,e.HCM,s,i,e.inherit(a,{b:"\\[ ",e:" \\]",r:0}),e.inherit(a,{b:"\\[\\[ ",e:" \\]\\]"})]}}(hljs),hljs.LANGUAGES.ruby=function(e){var t="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",r="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",n={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"},c={cN:"yardoctag",b:"@[A-Za-z]+"},s=[{cN:"comment",b:"#",e:"$",c:[c]},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:[c],r:10},{cN:"comment",b:"^__END__",e:"\\n$"}],i={cN:"subst",b:"#\\{",e:"}",l:t,k:n},a=[e.BE,i],o=[{cN:"string",b:"'",e:"'",c:a,r:0},{cN:"string",b:'"',e:'"',c:a,r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:a},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:a},{cN:"string",b:"%[qw]?{",e:"}",c:a},{cN:"string",b:"%[qw]?<",e:">",c:a,r:10},{cN:"string",b:"%[qw]?/",e:"/",c:a,r:10},{cN:"string",b:"%[qw]?%",e:"%",c:a,r:10},{cN:"string",b:"%[qw]?-",e:"-",c:a,r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:a,r:10}],l={cN:"function",bWK:!0,e:" |$|;",k:"def",c:[{cN:"title",b:r,l:t,k:n},{cN:"params",b:"\\(",e:"\\)",l:t,k:n}].concat(s)},u=s.concat(o.concat([{cN:"class",bWK:!0,e:"$|;",k:"class module",c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(s)},l,{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:o.concat([{b:r}]),r:0},{cN:"symbol",b:t+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:s.concat([{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[e.BE,i]}]),r:0}]));return i.c=u,l.c[1].c=u,{l:t,k:n,c:u}}(hljs),hljs.LANGUAGES.javascript=function(e){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[e.ASM,e.QSM,e.CLCM,e.CBLCLM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",i:"\\n",c:[{b:"\\\\/"}]},{b:"<",e:">;",sL:"xml"}],r:0},{cN:"function",bWK:!0,e:"{",k:"function",c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[e.CLCM,e.CBLCLM],i:"[\"'\\(]"}],i:"\\[|%"}]}}(hljs),hljs.LANGUAGES.css=function(e){var t={cN:"function",b:e.IR+"\\(",e:"\\)",c:[e.NM,e.ASM,e.QSM]};return{cI:!0,i:"[=/|']",c:[e.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",eE:!0,k:"import page media charset",c:[t,e.ASM,e.QSM,e.NM]},{cN:"tag",b:e.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBLCLM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[t,e.NM,e.QSM,e.ASM,e.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}(hljs),hljs.LANGUAGES.xml=function(){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,c:[{cN:"attribute",b:e,r:0},{b:'="',rB:!0,e:'"',c:[{cN:"value",b:'"',eW:!0}]},{b:"='",rB:!0,e:"'",c:[{cN:"value",b:"'",eW:!0}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:!0,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},t]}]}}(hljs),hljs.LANGUAGES.http=function(){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}}(hljs),hljs.LANGUAGES.python=function(e){var t={cN:"prompt",b:"^(>>>|\\.\\.\\.) "},r=[{cN:"string",b:"(u|b)?r?'''",e:"'''",c:[t],r:10},{cN:"string",b:'(u|b)?r?"""',e:'"""',c:[t],r:10},{cN:"string",b:"(u|r|ur)'",e:"'",c:[e.BE],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:[e.BE],r:10},{cN:"string",b:"(b|br)'",e:"'",c:[e.BE]},{cN:"string",b:'(b|br)"',e:'"',c:[e.BE]}].concat([e.ASM,e.QSM]),n={cN:"title",b:e.UIR},c={cN:"params",b:"\\(",e:"\\)",c:["self",e.CNM,t].concat(r)},s={bWK:!0,e:":",i:"[${=;\\n]",c:[n,c],r:10};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},i:"(</|->|\\?)",c:r.concat([t,e.HCM,e.inherit(s,{cN:"function",k:"def"}),e.inherit(s,{cN:"class",k:"class"}),e.CNM,{cN:"decorator",b:"@",e:"$"},{b:"\\b(print|exec)\\("}])}}(hljs),hljs.LANGUAGES.sql=function(e){return{cI:!0,c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",e:";",eW:!0,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM]},e.CBLCLM,{cN:"comment",b:"--",e:"$"}]}}(hljs),hljs.LANGUAGES.perl=function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t,r:10},n={cN:"variable",b:"\\$\\d"},c={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"},s=[e.BE,r,n,c],i={b:"->",c:[{b:e.IR},{b:"{",e:"}"}]},a={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},o=[n,c,e.HCM,a,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:!0},i,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:s,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:s,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:s,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:s,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:s,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:s,r:5},{cN:"string",b:"'",e:"'",c:[e.BE],r:0},{cN:"string",b:'"',e:'"',c:s,r:0},{cN:"string",b:"`",e:"`",c:[e.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"("+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,a,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bWK:!0,e:"(\\s*\\(.*?\\))?[;{]",k:"sub",r:5},{cN:"operator",b:"-\\w\\b",r:0}];return r.c=o,i.c[1].c=o,{k:t,c:o}}(hljs),hljs.LANGUAGES.json=function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={cN:"value",e:",",eW:!0,eE:!0,c:r,k:t},c={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:n}],i:"\\S"},s={b:"\\[",e:"\\]",c:[e.inherit(n,{cN:null})],i:"\\S"};return r.splice(r.length,0,c,s),{c:r,k:t,i:"\\S"}}(hljs);