"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[4358],{7924:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"user-guide/configuration/ldap","title":"LDAP","description":"KADAI provides LDAP support by showing LDAP-usage in its","source":"@site/docs/user-guide/configuration/ldap.md","sourceDirName":"user-guide/configuration","slug":"/user-guide/configuration/ldap","permalink":"/kadai-doc/docs/user-guide/configuration/ldap","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"userSidebar","previous":{"title":"Security","permalink":"/kadai-doc/docs/user-guide/configuration/security"},"next":{"title":"Classification and ServiceLevel","permalink":"/kadai-doc/docs/user-guide/configuration/classificationAndServiceLevel"}}');var r=s(4848),d=s(8453);const n={sidebar_position:3},a="LDAP",l={},h=[];function o(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ldap",children:"LDAP"})}),"\n",(0,r.jsxs)(t.p,{children:["KADAI provides ",(0,r.jsx)(t.a,{href:"https://ldap.com/learn-about-ldap/",children:"LDAP"})," support by showing LDAP-usage in its\nexample module ",(0,r.jsx)(t.code,{children:"kadai-rest-spring-example-boot"}),".\nIf you do not create an LdapContextSource bean, KADAI will create one for you using the parameters\nspecified on this documentation page.\nIf you want to create your LdapContextSource bean to be used in KADAI, please use as qualifier the\nconstant ",(0,r.jsx)(t.code,{children:"io.kadai.common.rest.ldap.KADAI_LDAP_CONTEXT_SOURCE"}),".\nTo configure LDAP for usage with KADAI, you need an .ldif file. Additionally, you need to configure\nLDAP in the ",(0,r.jsx)(t.code,{children:"application.properties"})," file using the following parameters:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Sample Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.serverUrl"}),(0,r.jsx)(t.td,{children:"The url of the ldap server used by KADAI."}),(0,r.jsx)(t.td,{children:"ldap://localhost:10389"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.bindDn"}),(0,r.jsx)(t.td,{children:"The bind dn when connecting."}),(0,r.jsx)(t.td,{children:"uid=admin"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.bindPassword"}),(0,r.jsx)(t.td,{children:"The password for connecting with the bind dn."}),(0,r.jsx)(t.td,{children:"secret"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.baseDn"}),(0,r.jsx)(t.td,{children:"The base dn of the ldap server."}),(0,r.jsx)(t.td,{children:"ou=Test,O=KADAI"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userSearchBase"}),(0,r.jsx)(t.td,{children:"The search root for users."}),(0,r.jsx)(t.td,{children:"cn=users"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userSearchFilterName"}),(0,r.jsx)(t.td,{children:"Name of the attribute for filtering users."}),(0,r.jsx)(t.td,{children:"objectclass"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userSearchFilterValue"}),(0,r.jsx)(t.td,{children:"Value of the attribute for filtering users."}),(0,r.jsx)(t.td,{children:"person"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userFirstnameAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the first name of the user."}),(0,r.jsx)(t.td,{children:"givenName"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userLastnameAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the last name of the user."}),(0,r.jsx)(t.td,{children:"sn"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userFullnameAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the full name of the user."}),(0,r.jsx)(t.td,{children:"cn"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userPhoneAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the phone of the user."}),(0,r.jsx)(t.td,{children:"phoneNumber"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userMobilePhoneAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the mobile phone of the user."}),(0,r.jsx)(t.td,{children:"mobileNumber"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userEmailAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the email of the user."}),(0,r.jsx)(t.td,{children:"email"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userOrglevel1Attribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the first organization level of the user."}),(0,r.jsx)(t.td,{children:"orgLevel1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userOrglevel2Attribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the second organization level of the user."}),(0,r.jsx)(t.td,{children:"orgLevel2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userOrglevel3Attribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the third organization level of the user."}),(0,r.jsx)(t.td,{children:"orgLevel3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userOrglevel4Attribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the fourth organization level of the user."}),(0,r.jsx)(t.td,{children:"orgLevel4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userIdAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the id of the user."}),(0,r.jsx)(t.td,{children:"uid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.userMemberOfGroupAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify groups of the user."}),(0,r.jsx)(t.td,{children:"memberOf"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.groupSearchBase"}),(0,r.jsx)(t.td,{children:"The search root for groups"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.groupSearchFilterName"}),(0,r.jsx)(t.td,{children:"Name of the attribute for filtering groups."}),(0,r.jsx)(t.td,{children:"objectclass"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.groupSearchFilterValue"}),(0,r.jsx)(t.td,{children:"Value of the attribute for filtering goups."}),(0,r.jsx)(t.td,{children:"groupOfUniqueNames"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.groupNameAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the name of the group."}),(0,r.jsx)(t.td,{children:"cn"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.groupIdAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the access id of the group in the ldif file. If it's empty, then the groupNameAttribute or the dn will be used as access id, depending on your configuration."}),(0,r.jsx)(t.td,{children:"gid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.minSearchForLength",(0,r.jsx)("br",{})," (optional)"]}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.maxNumberOfReturnedAccessIds",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"50"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.groupsOfUser",(0,r.jsx)("br",{})," (optional)"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("span",{style:{color:"red"},children:(0,r.jsx)(t.strong,{children:"Deprecated:"})})," Please use kadai.ldap.groupsOfUser.name instead."]}),(0,r.jsx)(t.td,{children:"uniquemember"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.groupsOfUser.name",(0,r.jsx)("br",{}),"  (optional)"]}),(0,r.jsx)(t.td,{children:"Name of the attribute in a group object, which specifies the member of the group."}),(0,r.jsx)(t.td,{children:"uniquemember"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.groupsOfUser.type",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsx)(t.td,{children:'Type of the attribute in a group object, which specifies the member of the group.If you specify \u2018dn\u2019 as the type, KADAI assumes that this field contains exactly the full dn of the member. The value of this field should be either "dn" or empty.'}),(0,r.jsx)(t.td,{children:"dn"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.permissionSearchBase ",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsx)(t.td,{children:"The search root for permissions"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.permissionSearchFilterName ",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsx)(t.td,{children:"Name of the attribute for filtering permissions"}),(0,r.jsx)(t.td,{children:"objectclass"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.permissionSearchFilterValue ",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsx)(t.td,{children:"Group of unique names"}),(0,r.jsx)(t.td,{children:"groupOfUniqueNames"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.permissionNameAttribute ",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsx)(t.td,{children:"Name of the attribute that sets the name of permission when defining a permission"}),(0,r.jsx)(t.td,{children:"permission"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.permissionIdAttribute"}),(0,r.jsx)(t.td,{children:"Name of the attribute that is used to specify the access id of the permission in the ldif file. If it's empty, then the permissionNameAttribute or the dn will be used as access id, depending on your configuration."}),(0,r.jsx)(t.td,{children:"gid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.permissionsOfUser ",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("span",{style:{color:"red"},children:(0,r.jsx)(t.strong,{children:"Deprecated:"})})," Please use kadai.ldap.permissionsOfUser.name instead."]}),(0,r.jsx)(t.td,{children:"uniquemember"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.permissionsOfUser.name",(0,r.jsx)("br",{}),"  (optional)"]}),(0,r.jsx)(t.td,{children:"Name of the attribute in a permission object, which specifies the member of the permission."}),(0,r.jsx)(t.td,{children:"uniquemember"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.permissionsOfUser.type",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsx)(t.td,{children:'Type of the attribute in a permission object, which specifies the member of the permission. If you specify \u2018dn\u2019 as the type, KADAI assumes that this field contains exactly the full dn of the member. The value of this field should be either "dn" or empty.'}),(0,r.jsx)(t.td,{children:"dn"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["kadai.ldap.userPermissionsAttribute ",(0,r.jsx)("br",{}),"(optional)"]}),(0,r.jsx)(t.td,{children:"Name of the attribute that lists the permission when defining a user. It's not required yet, as it's enough to list the user when defining the permission"}),(0,r.jsx)(t.td,{children:"permission"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kadai.ldap.useDnForGroups"}),(0,r.jsx)(t.td,{children:"True if dn to be used for groups, false otherwise."}),(0,r.jsx)(t.td,{children:"true"})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>a});var i=s(6540);const r={},d=i.createContext(r);function n(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);