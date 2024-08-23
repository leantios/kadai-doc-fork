"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[436],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:4},o="Classification and ServiceLevel",l={unversionedId:"user-guide/configuration/classificationAndServiceLevel",id:"user-guide/configuration/classificationAndServiceLevel",title:"Classification and ServiceLevel",description:'The configuration of these parameters is in the file `kadai.properties`. Some parameters allow multiple values specified as a list. In this case, individual values are separated by a configurable separator. Use the propertiesSeparator parameter to specify it. If none is provided, the default is "|". If you specify a propertiesSeparator, no list item in the properties file can contain any character from the propertiesSeparator.',source:"@site/docs/user-guide/configuration/classificationAndServiceLevel.md",sourceDirName:"user-guide/configuration",slug:"/user-guide/configuration/classificationAndServiceLevel",permalink:"/kadai-doc/docs/user-guide/configuration/classificationAndServiceLevel",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"userSidebar",previous:{title:"LDAP",permalink:"/kadai-doc/docs/user-guide/configuration/ldap"},next:{title:"KADAI-jobs",permalink:"/kadai-doc/docs/user-guide/configuration/kadaiJobs"}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"classification-and-servicelevel"},"Classification and ServiceLevel"),(0,n.kt)("p",null,"The configuration of these parameters is in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"kadai.properties"),". Some parameters allow multiple values specified as a list. In this case, individual values are separated by a configurable separator. Use the ",(0,n.kt)("em",{parentName:"p"},"propertiesSeparator"),' parameter to specify it. If none is provided, the default is "|". If you specify a propertiesSeparator, no list item in the properties file can contain any character from the propertiesSeparator.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Sample Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kadai.domains"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of domains for Classifications and Workbaskets"),(0,n.kt)("td",{parentName:"tr",align:null},"DOMAIN_C ","|"," DOMAIN_TEST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kadai.classification.types"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of Classification types (case insensitive)"),(0,n.kt)("td",{parentName:"tr",align:null},"TASK ","|"," document")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kadai.classification.categories.<type",">"," (for example kadai.classification.categories.document)"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of classification categories for each type"),(0,n.kt)("td",{parentName:"tr",align:null},"EXTERNAL ","|"," manual ","|"," autoMAtic ","|"," Process")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kadai.servicelevel.validation.enforce"),(0,n.kt)("td",{parentName:"tr",align:null},"allows user to create Tasks with date-attributes independent of the serviceLevel of the Classifications"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))))}u.isMDXComponent=!0}}]);