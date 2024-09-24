"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[2144],{3718:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=s(4848),n=s(8453);const o={sidebar_position:3},t="KadaiHistory SPI",a={id:"user-guide/features/kadaiHistorySPI",title:"KadaiHistory SPI",description:"In order to follow this article, please read general SPI information before proceeding.",source:"@site/docs/user-guide/features/kadaiHistorySPI.md",sourceDirName:"user-guide/features",slug:"/user-guide/features/kadaiHistorySPI",permalink:"/taskana-doc/docs/user-guide/features/kadaiHistorySPI",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"userSidebar",previous:{title:"List of provided SPIs",permalink:"/taskana-doc/docs/user-guide/features/listOfProvidedSPIs"},next:{title:"KADAI Jobs",permalink:"/taskana-doc/docs/user-guide/features/jobs"}},d={},c=[{value:"Use Cases for KadaiHistory",id:"use-cases-for-kadaihistory",level:2},{value:"KadaiHistory Implementation and the corresponding REST-Service",id:"kadaihistory-implementation-and-the-corresponding-rest-service",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"kadaihistory-spi",children:"KadaiHistory SPI"})}),"\n",(0,r.jsxs)(i.p,{children:["In order to follow this article, please read ",(0,r.jsx)(i.a,{href:"/taskana-doc/docs/user-guide/features/howToUseServiceProviderInterfaces",children:"general SPI information"})," before proceeding."]}),"\n",(0,r.jsxs)(i.p,{children:["The KadaiHistory can be used for different purposes. In general, it tracks actions performed by KADAI, like creation of Workbaskets, completion of Tasks etc.. The HistoryService makes this information available for further usage. KADAI already provides an implementation for the KadaiHistory described ",(0,r.jsx)(i.a,{href:"#kadaihistory-implementation-and-the-corresponding-rest-service",children:"here"}),". Below, you can see example business use cases for KadaiHistory."]}),"\n",(0,r.jsx)(i.h2,{id:"use-cases-for-kadaihistory",children:"Use Cases for KadaiHistory"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["History of one business process: (relevant for specialists working on a Task of that process)","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Who worked on it before?"}),"\n",(0,r.jsx)(i.li,{children:"Who transferred it to me?"}),"\n",(0,r.jsx)(i.li,{children:"What happened in the process before it got assigned to the user?"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Auditing:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Is everything completed?"}),"\n",(0,r.jsx)(i.li,{children:"What happend to a specific document / process?"}),"\n",(0,r.jsx)(i.li,{children:"Who aprroved what?"}),"\n",(0,r.jsx)(i.li,{children:"Who changed something?"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Reporting: (SLA/KPI)","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"How long did a process/Task take in average?"}),"\n",(0,r.jsx)(i.li,{children:"How long did it take until a new message from a customer is assigned to a specialist?"}),"\n",(0,r.jsx)(i.li,{children:"How often was is required to change the Classification of the Task/document?"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Reporting:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"How many Tasks of what Classification did we receive this day/week/month?"}),"\n",(0,r.jsx)(i.li,{children:"How many Tasks have been completed by team/location/etc.?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"kadaihistory-implementation-and-the-corresponding-rest-service",children:"KadaiHistory Implementation and the corresponding REST-Service"}),"\n",(0,r.jsx)(i.p,{children:"Additionaly to the SPI, KADAI already provides an implementation at io.kadai.simplehistory.impl.SimpleHistoryServiceImpl.\nYou can activate SimpleHistoryServiceImpl by adding following dependency to your pom:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"<dependency>\n      <groupId>io.kadai.history</groupId>\n      <artifactId>kadai-simplehistory-provider</artifactId>\n      <version><put your KADAI version here></version>\n</dependency>\n"})}),"\n",(0,r.jsxs)(i.p,{children:["KADAI also provides a REST service for SimpleHistoryServiceImpl documented ",(0,r.jsx)(i.a,{href:"https://kadai.azurewebsites.net/kadai/docs/rest/simplehistory-rest-api.html",children:"here"}),". If you want to use the REST Service, you can add the following dependency to your pom:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"<dependency>\n      <groupId>io.kadai.history</groupId>\n      <artifactId>kadai-simplehistory-rest-spring</artifactId>\n      <version><put your KADAI version here></version>\n</dependency>\n"})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>t,x:()=>a});var r=s(6540);const n={},o=r.createContext(n);function t(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);