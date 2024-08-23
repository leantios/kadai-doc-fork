"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[693],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>m});var r=t(7294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,r,n=function(e,i){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var i=r.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},u=function(e){var i=d(e.components);return r.createElement(s.Provider,{value:i},e.children)},p={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},c=r.forwardRef((function(e,i){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=n,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(k,o(o({ref:i},u),{},{components:t})):r.createElement(k,o({ref:i},u))}));function m(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1651:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const a={sidebar_position:6},o="Holidays and Working Days",l={unversionedId:"user-guide/configuration/holidaysAndWorkingDays",id:"user-guide/configuration/holidaysAndWorkingDays",title:"Holidays and Working Days",description:"The configuration of these parameters is in the file `kadai.properties`.",source:"@site/docs/user-guide/configuration/holidaysAndWorkingDays.md",sourceDirName:"user-guide/configuration",slug:"/user-guide/configuration/holidaysAndWorkingDays",permalink:"/kadai-doc/docs/user-guide/configuration/holidaysAndWorkingDays",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"userSidebar",previous:{title:"KADAI-jobs",permalink:"/kadai-doc/docs/user-guide/configuration/kadaiJobs"},next:{title:"History and Custom Properties",permalink:"/kadai-doc/docs/user-guide/configuration/historyAndCustomProperties"}},s={},d=[{value:"Holidays",id:"holidays",level:2},{value:"Working time",id:"working-time",level:2}],u={toc:d};function p(e){let{components:i,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"holidays-and-working-days"},"Holidays and Working Days"),(0,n.kt)("p",null,"The configuration of these parameters is in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"kadai.properties"),". "),(0,n.kt)("p",null,"Some parameters allow multiple values specified as a list. In this case, individual values are separated by a configurable separator. Use the ",(0,n.kt)("em",{parentName:"p"},"propertiesSeparator"),' parameter to specify it. If none is provided, the default is "|". If you specify a propertiesSeparator, no list item in the properties file can contain any character from the propertiesSeparator.'),(0,n.kt)("h2",{id:"holidays"},"Holidays"),(0,n.kt)("p",null,"Holidays can be customized. This is relevant because time on a holiday doesn't count towards working time. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.german.holidays.enabled"),": Standard German holidays will be enabled."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.german.holidays.corpus-christi.enabled"),": The holiday corpus christi will be activated.  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.custom.holidays"),": Holiday dates specified as a list will be added. Each holiday should be in the dd.MM format.\nExample custom holidays: ",(0,n.kt)("inlineCode",{parentName:"li"},"kadai.custom.holidays=31.07|16.12"))),(0,n.kt)("h2",{id:"working-time"},"Working time"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.MONDAY")," : Working time on Monday, e. g. 09:00-18:00"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.TUESDAY")," : Working time on Tuesday, e. g. 09:00-18:00"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.WEDNESDAY")," : Working time on Wednesday, e. g. 09:00-18:00"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.THURSDAY")," : Working time on Thursday, e. g. 09:00-18:00"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.schedule.FRIDAY")," : Working time on Friday, e. g. 09:00-18:00"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kadai.workingTime.timezone")," : Time zone, e. g. UTC")))}p.isMDXComponent=!0}}]);