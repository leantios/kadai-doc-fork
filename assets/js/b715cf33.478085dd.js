"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[1793],{4767:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var i=r(4848),t=r(8453);const n={sidebar_position:2},a="Security",d={id:"user-guide/configuration/security",title:"Security",description:"Users",source:"@site/docs/user-guide/configuration/security.md",sourceDirName:"user-guide/configuration",slug:"/user-guide/configuration/security",permalink:"/taskana-doc/docs/user-guide/configuration/security",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"userSidebar",previous:{title:"Database",permalink:"/taskana-doc/docs/user-guide/configuration/database"},next:{title:"LDAP",permalink:"/taskana-doc/docs/user-guide/configuration/ldap"}},o={},c=[{value:"Users",id:"users",level:2},{value:"Roles Mapping",id:"roles-mapping",level:3},{value:"REST Service Security",id:"rest-service-security",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"security",children:"Security"})}),"\n",(0,i.jsx)(s.h2,{id:"users",children:"Users"}),"\n",(0,i.jsxs)(s.p,{children:["The configuration of the user-related parameters is in the file ",(0,i.jsx)(s.code,{children:"kadai.properties"}),". Some parameters allow multiple values specified as a list. In this case, individual values are separated by a configurable separator. Use the ",(0,i.jsx)(s.em,{children:"propertiesSeparator"}),' parameter to specify it. If none is provided, the default is "|". If you specify a propertiesSeparator, no list item in the properties file can contain any character from the propertiesSeparator.']}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Sample Value"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"EXTERNAL | manual | autoMAtic | Process"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"kadai.user.minimalPermissionsToAssignDomains"}),(0,i.jsx)(s.td,{children:"The  list of minimal Workbasket permissions of a user needed to belong to  the domain. Needed to determine the domains of a user, which are  aggregated in the getUser() method of the UserService. Values have to match the Enum values of WorkbasketPermission. If this property is not defined the dynamic computation of the domain attribute will not be executed."}),(0,i.jsx)(s.td,{children:"READ | OPEN"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"kadai.addAdditionalUserInfo"}),(0,i.jsx)(s.td,{children:"Add attributes of the user from the USER_INFO table, for example during a Task request or Task Query, the default value is false"}),(0,i.jsx)(s.td,{children:"true"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"roles-mapping",children:"Roles Mapping"}),"\n",(0,i.jsxs)(s.p,{children:["KADAI Roles and their meaning can be looked up ",(0,i.jsx)(s.a,{href:"../core-concepts/securityAndPermissions#security-roles-in-kadai",children:"here"}),". For each role, a list of access ids that refer to users or groups can be specified using following keywords:"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Role"}),(0,i.jsx)(s.th,{children:"Keyword"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"user"}),(0,i.jsx)(s.td,{children:"kadai.roles.user"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"business_admin"}),(0,i.jsx)(s.td,{children:"kadai.roles.business_admin"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"task_admin"}),(0,i.jsx)(s.td,{children:"kadai.roles.task_admin"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"admin"}),(0,i.jsx)(s.td,{children:"kadai.roles.admin"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"monitor"}),(0,i.jsx)(s.td,{children:"kadai.roles.monitor"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"task_router"}),(0,i.jsx)(s.td,{children:"kadai.roles.task_router"})]})]})]}),"\n",(0,i.jsx)(s.p,{children:'The access ids are separated by a configurable separator. If none is provided, the default is "|". The assignment of roles to users or groups can look like this:'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"kadai.roles.user=cn=ksc-users,cn=groups,OU=Test,O=KADAI | teamlead-1 | teamlead-2 | user-1-1 | user-1-2 | user-2-1 | user-2-2 | user-b-1 | user-b-2\nkadai.roles.admin=admin | uid=admin,cn=users,OU=Test,O=KADAI\nkadai.roles.business_admin=businessadmin | cn=business-admins,cn=groups,OU=Test,O=KADAI\nkadai.roles.monitor=monitor | cn=monitor-users,cn=groups,OU=Test,O=KADAI\nkadai.roles.task_admin=taskadmin\n"})}),"\n",(0,i.jsx)(s.h2,{id:"rest-service-security",children:"REST Service Security"}),"\n",(0,i.jsxs)(s.p,{children:["As described in ",(0,i.jsx)(s.a,{href:"/taskana-doc/docs/user-guide/core-concepts/securityAndPermissions",children:"security"}),", kadai-core uses JAAS Subjects for authentication. However, when using the REST service of KADAI, you need to provide a mapping to the JAAS Subjects. KADAI shows how to do that in the class BootWebSecurityConfigurer in the ",(0,i.jsx)(s.code,{children:"kadai-rest-spring-example-boot"})," module using LDAP. There, you can also lookup additional configuration of KADAI on REST level. This way, KADAI provides LDAP support for its REST Service. You can read more about LDAP Configuration ",(0,i.jsx)(s.a,{href:"/taskana-doc/docs/user-guide/configuration/ldap",children:"here"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Following additional security parameters can be configured in the ",(0,i.jsx)(s.code,{children:"application.properties"}),":"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Sample Value"}),(0,i.jsx)(s.th,{children:"Optional"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"devMode"}),(0,i.jsx)(s.td,{children:"When using frontend with devMode set to true and enablCsrf to false, you will be automatically logged in as admin. The default value is false."}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"true"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"enableCsrf"}),(0,i.jsx)(s.td,{children:"This property enables the support of CSRF tokens. This will not work together with devMode. You need to set it to false in order to use Basic Auth, for example in Postman.The default value is false."}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>d});var i=r(6540);const t={},n=i.createContext(t);function a(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);