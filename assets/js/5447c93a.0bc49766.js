"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[7671],{541:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-guide/configuration/database","title":"Database","description":"To use KADAI, you need to create a database yourself, and then specify it through the DataSource. You can see the list of the supported databases here.","source":"@site/docs/user-guide/configuration/database.md","sourceDirName":"user-guide/configuration","slug":"/user-guide/configuration/database","permalink":"/kadai-doc/docs/user-guide/configuration/database","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"userSidebar","previous":{"title":"Configuration","permalink":"/kadai-doc/docs/category/configuration"},"next":{"title":"Security","permalink":"/kadai-doc/docs/user-guide/configuration/security"}}');var i=a(4848),s=a(8453);const o={sidebar_position:1},r="Database",c={},d=[{value:"DataSource",id:"datasource",level:3},{value:"SchemaName and Prefilling the Database",id:"schemaname-and-prefilling-the-database",level:3},{value:"Connection options",id:"connection-options",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"database",children:"Database"})}),"\n",(0,i.jsxs)(n.p,{children:["To use KADAI, you need to create a database yourself, and then specify it through the ",(0,i.jsx)(n.a,{href:"#datasource",children:"DataSource"}),". You can see the list of the supported databases ",(0,i.jsx)(n.a,{href:"/kadai-doc/docs/user-guide/getting-started/supportedEnvironments",children:"here"}),".\nThe recommended page size for the database is 32 k. It's necessary to create the database schema. The sort order of query results can be changed by the collating sequence specified in database creation. The default for most databases is a case-sensitive sort order.  If you want query results to be sorted case insensitively, you should specify an appropriate collating sequence."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Page size: 32k"}),"\n",(0,i.jsx)(n.li,{children:"Encoding: UTF-8"}),"\n",(0,i.jsxs)(n.li,{children:["Collating sequence examples:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"db2 (case sensitive): IDENTITY"}),"\n",(0,i.jsx)(n.li,{children:"postgres (case sensitive): de_DE.UTF-8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example db2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CREATE DATABASE <databaseName> USING CODESET UTF-8 COLLATE USING IDENTITY PAGESIZE 32 K \n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example Postgres:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CREATE DATABASE <databaseName> WITH ENCODING 'UTF8' LC_COLLATE='de_DE.UTF-8';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"datasource",children:"DataSource"}),"\n",(0,i.jsx)(n.p,{children:"KADAI connects to the database via a DataSource. It does not support XADataSources for connections to databases. The DataSource can be specified during the creation of KadaiConfiguration. For example, as following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"new KadaiConfiguration.Builder(dataSource, true, schemaName, false)\n        .initKadaiProperties(propertiesFileName, delimiter)\n        .build();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In Spring environment, the DataSource has standard spring options that can be configured in the ",(0,i.jsx)(n.code,{children:"application.properties"})," file. You can read more about them in the Spring documentation. Here is an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"spring.datasource.url=jdbc:h2:mem:kadai;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;LOCK_MODE=0;\nspring.datasource.driverClassName=org.h2.Driver\nspring.datasource.username=sa\nspring.datasource.password=sa\n"})}),"\n",(0,i.jsx)(n.h3,{id:"schemaname-and-prefilling-the-database",children:"SchemaName and Prefilling the Database"}),"\n",(0,i.jsxs)(n.p,{children:['Additionally to the DataSource, you can also configure the schemaName.\nIt can be specified during the creation of KadaiConfiguration, as seen in the example above.\nThe default schemaName is `KADAI.\nThe schemaName can also be changed by setting the parameter "kadai.schemaName"\nin the ',(0,i.jsx)(n.code,{children:"application.properties"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kadai.schemaName=KADAI\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Additionally to that, you can configure KADAI so that it prefills the database with sample data.\nYou can find sample data in the folder ",(0,i.jsx)(n.code,{children:"common/kadai-common-data/src/main/resources/sql/sample-data"}),'.\nTo do that, set the "generateSampleData" property in the ',(0,i.jsx)(n.code,{children:"application.properties"})," file to true:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"generateSampleData=true\n"})}),"\n",(0,i.jsx)(n.h2,{id:"connection-options",children:"Connection options"}),"\n",(0,i.jsx)(n.p,{children:"KADAI supports three connection management modes: PARTICIPATE, AUTOCOMMIT and EXPLICIT. You can specify the connection management mode when creating KadaiEngine using"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"KadaiEngine buildKadaiEngine (KadaiConfiguration configuration, ConnectionManagementMode connectionManagementMode)\n"})}),"\n",(0,i.jsx)(n.p,{children:"The default mode is PARTICIPATE."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"mode"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PARTICIPATE"}),(0,i.jsx)(n.td,{children:"KADAI  participates in surrounding global transactions. It acquires and  releases connections at begin / end of each API call and relies on the infrastructure to do the commit."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AUTOCOMMIT"}),(0,i.jsx)(n.td,{children:"KADAI commits each single API call separately."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"EXPLICIT"}),(0,i.jsx)(n.td,{children:"KADAI  doesn't acquire, commit or close connections. The client is responsible  for opening a connection, passing it to KADAI, committing or  rolling it back. In order to close a connection, the client has to call either KadaiEngine.closeConnection() or KadaiEngine.setConnection(null)."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);