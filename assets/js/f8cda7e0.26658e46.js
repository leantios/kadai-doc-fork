"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[8247],{5579:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"user-guide/features/howToUseServiceProviderInterfaces","title":"How to use Service Provider Interfaces (SPIs)","description":"KADAI allows","source":"@site/versioned_docs/version-9.2.0/user-guide/features/howToUseServiceProviderInterfaces.md","sourceDirName":"user-guide/features","slug":"/user-guide/features/howToUseServiceProviderInterfaces","permalink":"/kadai-doc/docs/9.2.*/user-guide/features/howToUseServiceProviderInterfaces","draft":false,"unlisted":false,"tags":[],"version":"9.2.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"userSidebar","previous":{"title":"Features","permalink":"/kadai-doc/docs/9.2.*/category/features"},"next":{"title":"List of provided SPIs","permalink":"/kadai-doc/docs/9.2.*/user-guide/features/listOfProvidedSPIs"}}');var n=i(4848),s=i(8453);const r={sidebar_position:1},a="How to use Service Provider Interfaces (SPIs)",c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-use-service-provider-interfaces-spis",children:"How to use Service Provider Interfaces (SPIs)"})}),"\n",(0,n.jsxs)(t.p,{children:["KADAI allows\ncustomizing and modify its behavior through the use of dedicated Service Provider Interfaces\n(SPI).\nEach SPI defines an interface that can be implemented by custom code.\nThis is a common approach for Java developers to extend their applications.\nYou can find out more about the background and the details in the Java documentation:\n",(0,n.jsx)(t.a,{href:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html",children:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html"})]}),"\n",(0,n.jsx)(t.p,{children:"To use an SPI within KADAI, do the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Create a class that implements the relevant interface."}),"\n",(0,n.jsx)(t.li,{children:"Place that class into the classpath of your application."}),"\n",(0,n.jsx)(t.li,{children:"Provide a control file with the full name of the SPI (e.g., io.kadai.spi.task.api.CreateTaskPreprocessor) in the subdirectory META-INF/services of the classpath. This control file must contain the fully qualified classname (including the package) of the class that implements the relevant interface. This control file is used by the ServiceLoader to load the custom class at runtime. The control file may contain multiple classes that implement the interface. Each implementation should be declared in a new line. All implementations will be used consecutively in the declaration order of the control file."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'The steps above can look the following way for implementing the SPI "TaskRoutingProvider":'}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Implement TaskRoutingProvider in a class with the name DmnTaskRouter."}),"\n",(0,n.jsx)(t.li,{children:"Place this class within your application, for example, into the package myapp."}),"\n",(0,n.jsx)(t.li,{children:"Create src/main/resources/META-INF/services/io.kadai.spi.routing.api.TaskRoutingProvider with the following content:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"myapp.DmnTaskRouter\n"})}),"\n",(0,n.jsx)(t.p,{children:"If you provide one or multiple implementations according to the description above,\nKADAI will invoke the implementations at a specific point.\nFor example,\nthe implementation of the CreateTaskPreprocessor will be invoked\nbefore a new Task is inserted into the database.\nThe Javadoc of each SPI describes these invocation conditions."}),"\n",(0,n.jsxs)(t.p,{children:["You can see the list of SPIs provided by KADAI ",(0,n.jsx)(t.a,{href:"/kadai-doc/docs/9.2.*/user-guide/features/listOfProvidedSPIs",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var o=i(6540);const n={},s=o.createContext(n);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);