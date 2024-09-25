"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[290],{421:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(4848),n=s(8453);const t={sidebar_position:7},a="Queries: Filtering and Sorting",o={id:"user-guide/features/queriesFilteringAndSorting",title:"Queries: Filtering and Sorting",description:"You can get a list of Tasks, Workbaskets, Classifications, Users and other resources using KADAI queries. They allow filtering and sorting according to different criterias, e. g. priority, owner, etc. Queries can be executed using the REST-API or the Java-API.",source:"@site/docs/user-guide/features/queriesFilteringAndSorting.md",sourceDirName:"user-guide/features",slug:"/user-guide/features/queriesFilteringAndSorting",permalink:"/kadai-doc/docs/user-guide/features/queriesFilteringAndSorting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"userSidebar",previous:{title:"Users",permalink:"/kadai-doc/docs/user-guide/features/users"},next:{title:"Reference",permalink:"/kadai-doc/docs/category/reference"}},u={},d=[{value:"Query usage in the REST-API",id:"query-usage-in-the-rest-api",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"queries-filtering-and-sorting",children:"Queries: Filtering and Sorting"})}),"\n",(0,i.jsx)(r.p,{children:"You can get a list of Tasks, Workbaskets, Classifications, Users and other resources using KADAI queries. They allow filtering and sorting according to different criterias, e. g. priority, owner, etc. Queries can be executed using the REST-API or the Java-API."}),"\n",(0,i.jsx)(r.h2,{id:"query-usage-in-the-rest-api",children:"Query usage in the REST-API"}),"\n",(0,i.jsxs)(r.p,{children:["KADAI provides a REST-API described ",(0,i.jsx)(r.a,{href:"../core-concepts/restApi",children:"here"}),'. You should use HTTP GET method in order to execute a query. Query parameters for filtering and sorting are specified in the HTTP request after "?". For example, the following request will return all Tasks that are owned by ',(0,i.jsx)(r.em,{children:"user-1-1"})," or ",(0,i.jsx)(r.em,{children:"user-1-2"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"GET http://localhost:8080/kadai/api/v1/tasks?owner-in=user-1-1&owner-in=user-1-2\n"})}),"\n",(0,i.jsxs)(r.p,{children:["You can try querying using Postman like in our ",(0,i.jsx)(r.a,{href:"/kadai-doc/docs/user-guide/getting-started/exampleSpringBoot#step-5-try-out-the-rest-api",children:"Spring Boot example"}),".\nHere is an example of the query from our ",(0,i.jsx)(r.a,{href:"../core-concepts/restApi",children:"REST-API doc"})," using Postman:"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Query",src:s(8267).A+"",width:"1920",height:"1012"})}),"\n",(0,i.jsxs)(r.p,{children:["More about queries using the REST-API can be found in the ",(0,i.jsx)(r.a,{href:"https://kadai.azurewebsites.net/kadai/docs/rest/rest-api.html",children:"REST-API Documentation"}),"."]}),"\n",(0,i.jsx)(r.h1,{id:"query-in-java-api",children:"Query in JAVA-API"}),"\n",(0,i.jsxs)(r.p,{children:["You can also execute queries using the ",(0,i.jsx)(r.a,{href:"/kadai-doc/docs/user-guide/core-concepts/javaApiUsage",children:"JAVA-API"})," of KADAI. To do that, create a query using the service of the relevant entity. Then, add filtering and sorting parameters to your query and execute it. When querying for Tasks, you need to use ",(0,i.jsx)(r.code,{children:"TaskService.createTaskQuery()"}),". You can find the query filter and sorting parameters under ",(0,i.jsx)(r.code,{children:"io.kadai.TaskQuery.api"}),".\nHere is an example of a query that returns Tasks owned by ",(0,i.jsx)(r.em,{children:"user-1-1"})," or ",(0,i.jsx)(r.em,{children:"user-1-2"})," sorted by the business process id of the Task:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-language",children:'List<TaskSummary> tasks = taskService.createTaskQuery()\n                        .ownerIn("user-1-1","user-1-2").orderByBusinessProcessId(SortDirection.ASCENDING)\n                        .list();\n'})})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8267:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/postman-query-4913da54d8ba8e03fc9fd64d36edcc0c.png"},8453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>o});var i=s(6540);const n={},t=i.createContext(n);function a(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);