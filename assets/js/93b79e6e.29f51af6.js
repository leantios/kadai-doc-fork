"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:8},o="Priority Report",l={unversionedId:"user-guide/configuration/priorityReport",id:"user-guide/configuration/priorityReport",title:"Priority Report",description:"KADAI provides the possibility to customize Priority Reports in the UI. To configure it, go to \u201cSettings\u201d in the KADAI UI.",source:"@site/docs/user-guide/configuration/priorityReport.md",sourceDirName:"user-guide/configuration",slug:"/user-guide/configuration/priorityReport",permalink:"/kadai-doc/docs/user-guide/configuration/priorityReport",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"userSidebar",previous:{title:"History and Custom Properties",permalink:"/kadai-doc/docs/user-guide/configuration/historyAndCustomProperties"},next:{title:"UI",permalink:"/kadai-doc/docs/user-guide/configuration/ui"}},p={},s=[{value:"Placement of this configuration in KADAI",id:"placement-of-this-configuration-in-kadai",level:3}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"priority-report"},"Priority Report"),(0,i.kt)("p",null,"KADAI provides the possibility to customize Priority Reports in the UI. To configure it, go to \u201cSettings\u201d in the KADAI UI. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"setting",src:r(959).Z,width:"1710",height:"873"})),(0,i.kt)("p",null,"Currently the UI supports the following types of parameters: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"What the UI shows"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"an input field where text can be typed in"),(0,i.kt)("td",{parentName:"tr",align:null},"Priority names")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"interval"),(0,i.kt)("td",{parentName:"tr",align:null},"two input fields for numbers, a lower and an upper boundary"),(0,i.kt)("td",{parentName:"tr",align:null},"Priority intervals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"color"),(0,i.kt)("td",{parentName:"tr",align:null},"a color picker"),(0,i.kt)("td",{parentName:"tr",align:null},"Priority colors")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"json"),(0,i.kt)("td",{parentName:"tr",align:null},"a text area where a string in json format can be typed in."),(0,i.kt)("td",{parentName:"tr",align:null},"Filter values")))),(0,i.kt)("h3",{id:"placement-of-this-configuration-in-kadai"},"Placement of this configuration in KADAI"),(0,i.kt)("p",null,"The parameters described above are saved in the CONFIGURATION table under CUSTOM_ATTRIBUTES. The data structure is divided in two parts: The fields with their corresponding values and a field named \u201cschema\u201d. That field contains all information which is needed in the UI to display those parameters. The default values can be found there."))}c.isMDXComponent=!0},959:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UISettings-35b921e6de6a2c15918da11792c6dd00.png"}}]);