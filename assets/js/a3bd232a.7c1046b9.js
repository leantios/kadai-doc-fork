"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[3543],{6832:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"user-guide/core-concepts/securityAndPermissions","title":"Security and Permissions","description":"Security Overview","source":"@site/docs/user-guide/core-concepts/securityAndPermissions.md","sourceDirName":"user-guide/core-concepts","slug":"/user-guide/core-concepts/securityAndPermissions","permalink":"/kadai-doc/docs/user-guide/core-concepts/securityAndPermissions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"userSidebar","previous":{"title":"REST-API","permalink":"/kadai-doc/docs/user-guide/core-concepts/restApi"},"next":{"title":"Configuration","permalink":"/kadai-doc/docs/category/configuration"}}');var i=t(4848),n=t(8453);const a={sidebar_position:5},d="Security and Permissions",o={},c=[{value:"Security Overview",id:"security-overview",level:2},{value:"Security Roles in KADAI",id:"security-roles-in-kadai",level:2},{value:"Access to Workbaskets",id:"access-to-workbaskets",level:2},{value:"Example WorkbasketAccessList table",id:"example-workbasketaccesslist-table",level:3},{value:"Disable security using the <em>securityEnabled</em> parameter",id:"disable-security-using-the-securityenabled-parameter",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"security-and-permissions",children:"Security and Permissions"})}),"\n",(0,i.jsx)(s.h2,{id:"security-overview",children:"Security Overview"}),"\n",(0,i.jsx)(s.p,{children:"KADAI Java library uses JAAS subjects for its authentication. Its security features can be used\nbased on the REST service. The authentication cannot be run without the REST service. Client side\nauthorization is required to view Tasks and Workbaskets or to make any changes. If the client side\nauthorization does not work, the unauthorized user will not be able to use KADAI properly."}),"\n",(0,i.jsxs)(s.p,{children:["We provide an example (kadai-rest-spring-example) which is using LDAP. You can build a simple\nstep-by-step example with our ",(0,i.jsx)(s.a,{href:"/kadai-doc/docs/user-guide/getting-started/exampleSpringBoot",children:"Getting Started"})," as well."]}),"\n",(0,i.jsxs)(s.p,{children:["KADAI Java library needs its client to provide a mapping to the JAAS Subject used for users and\ngroups. The client should create a JAAS context for the Java library. The ids of users and groups,\ne.g. ",(0,i.jsx)(s.code,{children:"user-1-1"})," or ",(0,i.jsx)(s.code,{children:"admin"}),", are then used for the internal logic in the Java library. Our REST\nService already provides LDAP support."]}),"\n",(0,i.jsx)(s.h2,{id:"security-roles-in-kadai",children:"Security Roles in KADAI"}),"\n",(0,i.jsx)(s.p,{children:"Users can have one of the six different roles:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"USER"}),"\nThe USER role grants access to KADAI. USER is everybody who gets assigned to and completes\ntasks."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"TASK_ADMIN"}),"\nThe TASK_ADMIN role includes all permissions on tasks except deleting a task/tasks.\nIt can also READ all workbaskets in case to create/transfer tasks in/to them."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"BUSINESS_ADMINISTRATOR"}),"\nThe BUSINESS_ADMINISTRATOR role allows changing the business configuration (workbaskets,\nclassifications, ...)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"ADMINISTRATOR"}),"\nThe ADMINISTRATOR role includes all permissions on the system."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"MONITOR"}),"\nThe MONITOR role grants access to all monitoring operations and to the monitoring UI."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"TASK_ROUTER"}),"\nThe TASK_ROUTER role implies access to creating Tasks in all Workbaskets without having READ\npermissions for them. This role is used for automated scripts, not for persons."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You can assign roles to users or groups in the ",(0,i.jsx)(s.code,{children:"kadai.properties"})," file. Read more about LDAP\nconfiguration ",(0,i.jsx)(s.a,{href:"/kadai-doc/docs/user-guide/configuration/ldap",children:"here"})]}),"\n",(0,i.jsx)(s.h2,{id:"access-to-workbaskets",children:"Access to Workbaskets"}),"\n",(0,i.jsxs)(s.p,{children:["KADAI Java library uses WorkbasketAccessItems for authorization. WorkbasketAccessItems are stored\nin the WorkbasketAccessList database table. Each WorkbasketAccessItems contains values for each of\nthe following permissions: ",(0,i.jsx)(s.em,{children:"READ, OPEN, APPEND, TRANSFER, DISTRIBUTE and CUSTOM_1 through\nCUSTOM_12"}),'. A WorkbasketAccessItem belongs to a specific Workbasket-User or Workbasket-Group pair.\nThe user or group are specified by their accessId (for example, "user-1-1"). The different\npermissions have the following meaning:']}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Permission"}),(0,i.jsx)(s.th,{children:"Meaning"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"READ"}),(0,i.jsxs)(s.td,{children:["Read or query Workbasket metadata.   If a user does ",(0,i.jsx)(s.strong,{children:"not"})," have the READ permission, he does not even know about the existence of the Workbasket."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"READTASKS"}),(0,i.jsxs)(s.td,{children:["Allows user to read or query metadata of Tasks without ",(0,i.jsx)(s.strong,{children:"explicitly"})," specifying Workbasket in the query. For this, the READ permission is also required. If a user does not have the READTASKS permission, he cannot specify this Workbasket when getting Tasks."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"OPEN"}),(0,i.jsxs)(s.td,{children:["The user is allowed to ",(0,i.jsx)(s.strong,{children:"explicitly"})," query the Tasks of specific Workbaskets. To do this, READ and READTASKS permissions are also required. If a user does not have the OPEN permission, he cannot query/filter Tasks by Workbaskets."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"EDITTASKS"}),(0,i.jsx)(s.td,{children:"Allows the user to update, claim or complete tasks. For editing, READ and READTASKS permissions are also required."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"APPEND"}),(0,i.jsx)(s.td,{children:"The user is allowed to append a Task to the Workbasket. This applies to creation of Tasks in this Workbasket as well as for transferring Tasks to this Workbasket."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"TRANSFER"}),(0,i.jsx)(s.td,{children:"Allows the user to transfer Tasks from this Workbasket to another one."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"DISTRIBUTE"}),(0,i.jsx)(s.td,{children:"The  user is allowed to distribute Tasks from this Workbasket to the  configured distribution targets. For distribution the APPEND and  TRANSFER permissions are checked also."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"CUSTOM_1 .. CUSTOM_12"}),(0,i.jsx)(s.td,{children:"Permissions to be used in custom code to configure application specific scenarios which are not directly checked by KADAI."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"example-workbasketaccesslist-table",children:"Example WorkbasketAccessList table"}),"\n",(0,i.jsx)(s.p,{children:"Example WorkbasketAccessItems:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"ID"}),(0,i.jsx)(s.th,{children:"WB_ID"}),(0,i.jsx)(s.th,{children:",ACCESS_ID"}),(0,i.jsx)(s.th,{children:"ACCESS_NAME"}),(0,i.jsx)(s.th,{children:"READ,"}),(0,i.jsx)(s.th,{children:"READTSKS"}),(0,i.jsx)(s.th,{children:"OPN,"}),(0,i.jsx)(s.th,{children:"EDITTSKS"}),(0,i.jsx)(s.th,{children:"APPD,"}),(0,i.jsx)(s.th,{children:"TRSFR,"}),(0,i.jsx)(s.th,{children:"DISTR,"}),(0,i.jsx)(s.th,{children:"C1,"}),(0,i.jsx)(s.th,{children:"..,"}),(0,i.jsx)(s.th,{children:"C12)"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"WA01"}),(0,i.jsx)(s.td,{children:"WB01"}),(0,i.jsx)(s.td,{children:"teamlead_1"}),(0,i.jsx)(s.td,{children:"Dominik"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true,...false"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"WA02"}),(0,i.jsx)(s.td,{children:"WB01"}),(0,i.jsx)(s.td,{children:"teamlead_2"}),(0,i.jsx)(s.td,{children:"Holger"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true,...true;"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"WA03"}),(0,i.jsx)(s.td,{children:"WB01"}),(0,i.jsx)(s.td,{children:"group_1"}),(0,i.jsx)(s.td,{children:"Schaden"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"true,...true;"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]})]})]}),"\n",(0,i.jsxs)(s.h2,{id:"disable-security-using-the-securityenabled-parameter",children:["Disable security using the ",(0,i.jsx)(s.em,{children:"securityEnabled"})," parameter"]}),"\n",(0,i.jsxs)(s.p,{children:["The securityEnabled-flag can disable authentication for the complete KADAI functionality if set\nto false. The default value of the flag is true. You can change the value by specifying the\n",(0,i.jsx)(s.em,{children:"securityEnabled"})," parameter of the constructor of KadaiEngineConfiguration."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"KadaiEngineConfiguration(DataSource dataSource, boolean useManagedTransactions,\n        boolean securityEnabled, String propertiesFileName, String propertiesSeparator)\n"})}),"\n",(0,i.jsx)(s.p,{children:"In the spring boot example, you can add the following bean to disable security:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'    @Bean\n    public KadaiEngineConfiguration kadaiEngineConfiguration(DataSource dataSource) {\n        return new SpringKadaiEngineConfiguration(dataSource, true, false, "KADAI");\n    }\n'})}),"\n",(0,i.jsxs)(s.p,{children:["The CONFIGURATION table has an ENFORCE_SECURITY field.\nIf this field is already set, then\n",(0,i.jsx)(s.em,{children:"securityEnabled"})," should be set to the same value.\nIf the ENFORCE_SECURITY flag in the database has\nno value, then the first KadaiEngine connecting to the database sets its ",(0,i.jsx)(s.em,{children:"securityEnabled"})," as the\nvalue of ENFORCE_SECURITY."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>d});var r=t(6540);const i={},n=r.createContext(i);function a(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);