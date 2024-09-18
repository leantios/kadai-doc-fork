"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[693],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},u=function(e){var i=d(e.components);return n.createElement(s.Provider,{value:i},e.children)},p={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},c=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?n.createElement(k,o(o({ref:i},u),{},{components:t})):n.createElement(k,o({ref:i},u))}));function m(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1651:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const a={sidebar_position:6},o="Holidays and Working Days",l={unversionedId:"user-guide/configuration/holidaysAndWorkingDays",id:"user-guide/configuration/holidaysAndWorkingDays",title:"Holidays and Working Days",description:"The configuration of these parameters is in the file `kadai.properties`.",source:"@site/docs/user-guide/configuration/holidaysAndWorkingDays.md",sourceDirName:"user-guide/configuration",slug:"/user-guide/configuration/holidaysAndWorkingDays",permalink:"/taskana-doc/docs/user-guide/configuration/holidaysAndWorkingDays",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"userSidebar",previous:{title:"KADAI-jobs",permalink:"/taskana-doc/docs/user-guide/configuration/kadaiJobs"},next:{title:"History and Custom Properties",permalink:"/taskana-doc/docs/user-guide/configuration/historyAndCustomProperties"}},s={},d=[{value:"Holidays",id:"holidays",level:2},{value:"Working time",id:"working-time",level:2}],u={toc:d};function p(e){let{components:i,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"holidays-and-working-days"},"Holidays and Working Days"),(0,r.kt)("p",null,"The configuration of these parameters is in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"kadai.properties"),". "),(0,r.kt)("p",null,"Some parameters allow multiple values specified as a list. In this case, individual values are separated by a configurable separator. Use the ",(0,r.kt)("em",{parentName:"p"},"propertiesSeparator"),' parameter to specify it. If none is provided, the default is "|". If you specify a propertiesSeparator, no list item in the properties file can contain any character from the propertiesSeparator.'),(0,r.kt)("h2",{id:"holidays"},"Holidays"),(0,r.kt)("p",null,"Holidays can be customized. This is relevant because time on a holiday doesn't count towards working time. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.german.holidays.enabled"),": Standard German holidays will be enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.german.holidays.corpus-christi.enabled"),": The holiday corpus christi will be activated.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.custom.holidays"),": Holiday dates specified as a list will be added. Each holiday should be in the dd.MM format.\nExample custom holidays: ",(0,r.kt)("inlineCode",{parentName:"li"},"kadai.custom.holidays=31.07|16.12"))),(0,r.kt)("h2",{id:"working-time"},"Working time"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.MONDAY")," : Working time on Monday, e. g. 09:00-18:00"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.TUESDAY")," : Working time on Tuesday, e. g. 09:00-18:00"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.WEDNESDAY")," : Working time on Wednesday, e. g. 09:00-18:00"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.THURSDAY")," : Working time on Thursday, e. g. 09:00-18:00"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.FRIDAY")," : Working time on Friday, e. g. 09:00-18:00"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.timezone")," : Time zone, e. g. UTC")))}p.isMDXComponent=!0}}]);