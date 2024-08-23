"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[55],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(k,o(o({ref:a},l),{},{components:t})):n.createElement(k,o({ref:a},l))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1453:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const i={},o="Getting Started",s={unversionedId:"user-guide/adapter/gettingStarted",id:"user-guide/adapter/gettingStarted",title:"Getting Started",description:"In this article, the set up of the Adapter is explained step by step. Additionally, you can try out some of the functionalities of the Adapter following the instructions in this article.",source:"@site/docs/user-guide/adapter/gettingStarted.md",sourceDirName:"user-guide/adapter",slug:"/user-guide/adapter/gettingStarted",permalink:"/kadai-doc/docs/user-guide/adapter/gettingStarted",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Adapter",permalink:"/kadai-doc/docs/category/adapter"},next:{title:"Demo App",permalink:"/kadai-doc/docs/demo-app/demoApp"}},p={},d=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Step 0 (optional): Initialize an empty Camunda application",id:"step-0-optional-initialize-an-empty-camunda-application",level:2},{value:"Step 1: Configure your Camunda application",id:"step-1-configure-your-camunda-application",level:2},{value:"kadai-outbox.properties",id:"kadai-outboxproperties",level:3},{value:"application.properties",id:"applicationproperties",level:3},{value:"application.yaml",id:"applicationyaml",level:3},{value:"Step 2: Initialize an empty Adapter application",id:"step-2-initialize-an-empty-adapter-application",level:2},{value:"Step 3: Configure your Adapter application",id:"step-3-configure-your-adapter-application",level:2},{value:"application.properties",id:"applicationproperties-1",level:3},{value:"kadai.properties",id:"kadaiproperties",level:3},{value:"Step 4: Add SPIs to your Adapter application",id:"step-4-add-spis-to-your-adapter-application",level:2},{value:"Step 5: Start all applications together",id:"step-5-start-all-applications-together",level:2},{value:"Step 6: Try out different functionalities of Adapter.",id:"step-6-try-out-different-functionalities-of-adapter",level:2}],l={toc:d};function c(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"In this article, the set up of the Adapter is explained step by step. Additionally, you can try out some of the functionalities of the Adapter following the instructions in this article."),(0,r.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an IDE of your choice (preferably IntelliJ)"),(0,r.kt)("li",{parentName:"ul"},"Java 17"),(0,r.kt)("li",{parentName:"ul"},"maven"),(0,r.kt)("li",{parentName:"ul"},"Camunda Modeler"),(0,r.kt)("li",{parentName:"ul"},"Postgres or Docker (to set up postgres database)"),(0,r.kt)("li",{parentName:"ul"},"optional: postman (makes REST API requests easier)"),(0,r.kt)("li",{parentName:"ul"},"Working KADAI application (see ",(0,r.kt)("a",{parentName:"li",href:"/kadai-doc/docs/user-guide/getting-started/exampleSpringBoot"},"here")," for instructions)")),(0,r.kt)("p",null,"Note: Please name your packages, folders and files exactly like in the example!"),(0,r.kt)("h2",{id:"step-0-optional-initialize-an-empty-camunda-application"},"Step 0 (optional): Initialize an empty Camunda application"),(0,r.kt)("p",null,"If you don't have a Camunda application that you could use for experimenting with the Adapter, install a new application. You can use  ",(0,r.kt)("a",{parentName:"p",href:"https://start.camunda.com/"},"https://start.camunda.com/"),' to initialize an empty application. You need to choose Java 17. Additionally, make sure that the modules "REST API", "Webapps" and "Spin" are chosen and set an admin username and password of your choice.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Local Image",src:t(1360).Z,width:"1407",height:"1488"})),(0,r.kt)("p",null,"Unpack the project in a folder of your choice and open it in your IDE."),(0,r.kt)("h2",{id:"step-1-configure-your-camunda-application"},"Step 1: Configure your Camunda application"),(0,r.kt)("p",null,'Add a new extension property to your User Tasks. The name of the property should be kadai.classification-key. It should have an existing classification key as value. If you are using the KADAI example application, you can enter "L1050" as value.'),(0,r.kt)("p",null,"Add following dependencies to the dependencies section of your pom:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n  <groupId>pro.kadai</groupId>\n  <artifactId>kadai-adapter-camunda-outbox-rest-spring-boot-starter</artifactId>\n  <version>3.1.0</version>\n</dependency>\n<dependency>\n  <groupId>org.jboss.resteasy</groupId>\n  <artifactId>resteasy-servlet-spring-boot-starter</artifactId>\n  <version>6.1.1.Final</version>\n</dependency>\n<dependency>\n  <groupId>org.camunda.spin</groupId>\n  <artifactId>camunda-spin-dataformat-json-jackson</artifactId>\n</dependency>\n<dependency>\n  <groupId>org.postgresql</groupId>\n  <artifactId>postgresql</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,'You need to exclude the following from the org.camunda.bpm.springboot dependency with the artifact ID "camunda-bpm-spring-boot-starter-rest":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n  <groupId>org.camunda.bpm.springboot</groupId>\n  <artifactId>camunda-bpm-spring-boot-starter-rest</artifactId>\n  <exclusions>\n    <exclusion>\n      <groupId>org.skyscreamer</groupId>\n      <artifactId>jsonassert</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>\n")),(0,r.kt)("p",null,"Then, add a repository to the pom:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<repositories>\n  <repository>\n    <id>jboss-public-repository</id>\n    <name>JBoss Repository</name>\n    <url>https://repository.jboss.org/nexus/content/groups/public</url>\n  </repository>\n</repositories>\n")),(0,r.kt)("p",null,"Add the following file to your resources folder:"),(0,r.kt)("h3",{id:"kadai-outboxproperties"},"kadai-outbox.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kadai.adapter.outbox.schema = kadai_tables\nkadai.adapter.outbox.max.number.of.events = 57\nkadai.adapter.create_outbox_schema = true\nkadai.adapter.outbox.initial.number.of.task.creation.retries = 5\nkadai.adapter.outbox.duration.between.task.creation.retries = PT1H\n\n#kadai.adapter.outbox.datasource.jndi=java:jboss/datasources/ProcessEnginePostgres\n#kadai.adapter.outbox.datasource.jndi=jdbc/ProcessEngine\n\nkadai.adapter.outbox.datasource.driver=org.postgresql.Driver\nkadai.adapter.outbox.datasource.url=jdbc:postgresql://localhost:5102/postgres\nkadai.adapter.outbox.datasource.username=postgres\nkadai.adapter.outbox.datasource.password=postgres\n\n#kadai.adapter.outbox.datasource.url=jdbc:h2:mem:camunda;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;LOCK_MODE=0;DB_CLOSE_ON_EXIT=FALSE;\n#kadai.adapter.outbox.datasource.driver=org.h2.Driver\n#kadai.adapter.outbox.datasource.username=sa\n#kadai.adapter.outbox.datasource.password=sa\n")),(0,r.kt)("p",null,"You need to add at least one of the following ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yaml")," given below:"),(0,r.kt)("h3",{id:"applicationproperties"},"application.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server.port=8085\nspring.main.allow-bean-definition-overriding=true\ncamunda.bpm.auto-deployment-enabled=true\n\nserver.servlet.context-path=/example-context-root\ncamunda.bpm.admin-user.id=admin\ncamunda.bpm.admin-user.first-name=admin\ncamunda.bpm.admin-user.password=admin\ncamunda.bpm.admin-user.last-name=admin\n\ncamunda.bpm.database.type=postgres\n\n# new mandatory field starting from camunda version 7.20\n# see https://forum.camunda.io/t/camunda-7-20-history-time-to-live-cannot-be-null-cannot-deploy-wf-created-in-7-18/48159\ncamunda.bpm.generic-properties.properties.historyTimeToLive: P180D\n\n# properties for resteasy-servlet-spring-boot-starter\n# without these 2 propertiers the camunda-context is registered twice\nresteasy.jaxrs.app.registration=property\nresteasy.jaxrs.app.classes=pro.kadai.adapter.camunda.outbox.rest.config.OutboxRestServiceConfig\n\nspring.datasource.url=jdbc:postgresql://localhost:5102/postgres\nspring.datasource.driver-class-name = org.postgresql.Driver\nspring.datasource.username = postgres\nspring.datasource.password = postgres\n\n#spring.datasource.url=jdbc:h2:mem:camunda;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;DB_CLOSE_ON_EXIT=FALSE;\n#spring.datasource.driverClassName=org.h2.Driver\n#spring.datasource.username=sa\n#spring.datasource.password=sa\n\n")),(0,r.kt)("h3",{id:"applicationyaml"},"application.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"camunda:\n  bpm:\n    admin-user:\n      first-name: admin\n      id: admin\n      last-name: admin\n      password: admin\n    auto-deployment-enabled: true\n    database:\n      type: postgres\n    generic-properties:\n      properties:\n        historyTimeToLive: P180D\nresteasy:\n  jaxrs:\n    app:\n      classes: pro.kadai.adapter.camunda.outbox.rest.config.OutboxRestServiceConfig\n      registration: property\nserver:\n  port: 8085\n  servlet:\n    context-path: /example-context-root\nspring:\n  datasource:\n    driver-class-name: org.postgresql.Driver\n    password: postgres\n    url: jdbc:postgresql://localhost:5102/postgres\n    username: postgres\n  main:\n    allow-bean-definition-overriding: true\n")),(0,r.kt)("p",null,"Start the camunda application and check if it runs correctly.\nClose the camunda application after checking."),(0,r.kt)("h2",{id:"step-2-initialize-an-empty-adapter-application"},"Step 2: Initialize an empty Adapter application"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializer")," to initialize a Spring Boot Project. Chose Java 17."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Local Image",src:t(8186).Z,width:"3357",height:"1848"})),(0,r.kt)("p",null,"Unpack the project in a folder of your choice and open it in your IDE."),(0,r.kt)("h2",{id:"step-3-configure-your-adapter-application"},"Step 3: Configure your Adapter application"),(0,r.kt)("p",null,"Add following dependencies to the dependencies section of your pom (if they don't already exist):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependencies>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-configuration-processor</artifactId>\n    <optional>true</optional>\n  </dependency>\n  <dependency>\n     <groupId>pro.kadai</groupId>\n    <artifactId>kadai-adapter</artifactId>\n    <version>3.1.0</version>\n  </dependency>\n  <dependency>\n    <groupId>pro.kadai</groupId>\n    <artifactId>kadai-adapter-camunda-system-connector</artifactId>\n    <version>3.1.0</version>\n  </dependency>\n  <dependency>\n    <groupId>pro.kadai</groupId>\n    <artifactId>kadai-adapter-kadai-connector</artifactId>\n    <version>3.1.0</version>\n  </dependency>\n  <dependency>\n    <groupId>com.ibm.db2</groupId>\n    <artifactId>jcc</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>org.postgresql</groupId>\n    <artifactId>postgresql</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>com.h2database</groupId>\n    <artifactId>h2</artifactId>\n  </dependency>\n</dependencies>\n")),(0,r.kt)("p",null,"Add the following annotations to your AdapterApplication, and import the packages correspondingly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@EnableScheduling\n@ComponentScan(basePackages = "pro.kadai.adapter")\n@Import({AdapterConfiguration.class})\n')),(0,r.kt)("p",null,"Add following files to your resources folder:"),(0,r.kt)("h3",{id:"applicationproperties-1"},"application.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"######################################################################################\n## Adapter properties\n######################################################################################\n##\n#logging.level.org.springframework=DEBUG\nlogging.level.pro.kadai=DEBUG\n#logging.level.com.spring.ibatis=DEBUG\n#logging.level.com.spring.ibatis.*=DEBUG\n#logging.level.org.apache.ibatis=DEBUG\n\n#logging.level.pro.kadai=info\n\n## Set Server Port for Adapter\nserver.port = 8083\nspring.main.allow-bean-definition-overriding=true\n\nkadai.adapter.run-as.user=taskadmin\nkadai.adapter.scheduler.run.interval.for.start.kadai.tasks.in.milliseconds=10000\nkadai.adapter.scheduler.run.interval.for.complete.referenced.tasks.in.milliseconds=10000\nkadai.adapter.scheduler.run.interval.for.claim.referenced.tasks.in.milliseconds=10000\nkadai.adapter.scheduler.run.interval.for.cancel.claim.referenced.tasks.in.milliseconds=10000\nkadai.adapter.scheduler.run.interval.for.check.finished.referenced.tasks.in.milliseconds=10000\n\nkadai-system-connector-camunda-rest-api-user-name=admin\nkadai-system-connector-camunda-rest-api-user-password=admin\nkadai-system-connector-outbox-rest-api-user-name=admin\nkadai-system-connector-outbox-rest-api-user-password=admin\n####################################################################################\n# System connector properties\n####################################################################################\n#\n# Set URLs of Camunda REST API and associated KADAI Outbox REST API. The format is\n# <camundaSystem1-RestURL> | <camundaSystem1-OutboxRestURL> , ..., <camundaSystemN-RestURL> | <camundaSystemN-OutboxRestURL>\n\nkadai-system-connector-camundaSystemURLs=http://localhost:8085/example-context-root/engine-rest | http://localhost:8085/example-context-root/outbox-rest\n\n####################################################################################\n# Kadai-connector properties\n####################################################################################\n#\n# Configure the datasource for Kadai DB (used by kadai-connector)\n#kadai.datasource.jdbcUrl = jdbc:h2:tcp://localhost:9095/mem:kadai;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;LOCK_MODE=0;\n#kadai.datasource.jdbcUrl=jdbc:h2:mem:kadai;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;LOCK_MODE=0;DB_CLOSE_ON_EXIT=FALSE\n#kadai.datasource.driverClassName = org.h2.Driver\n#kadai.datasource.username = sa\n#kadai.datasource.password = sa\nkadai.schemaName=kadai\n#\n# kadai.datasource.jdbcUrl=jdbc:db2://localhost:50050/kadai\n# kadai.datasource.driverClassName=com.ibm.db2.jcc.DB2Driver\n# kadai.datasource.username=db2user\n# kadai.datasource.password=Db2password\n\nkadai.datasource.jdbcUrl=jdbc:postgresql://localhost:5102/postgres\nkadai.datasource.driverClassName=org.postgresql.Driver\nkadai.datasource.username=postgres\nkadai.datasource.password=postgres\n#kadai.schemaName=kadai\n\nkadai.adapter.mapping.default.objectreference.company=DEFAULT_COMPANY\nkadai.adapter.mapping.default.objectreference.system=DEFAULT_SYSTEM\nkadai.adapter.mapping.default.objectreference.system.instance=DEFAULT_SYSTEM_INSTANCE\nkadai.adapter.mapping.default.objectreference.type=DEFAULT_TYPE\nkadai.adapter.mapping.default.objectreference.value=DEFAULT_VALUE\n\n")),(0,r.kt)("h3",{id:"kadaiproperties"},"kadai.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kadai.roles.user=group1 | group2|teamlead-1 |teamlead-2 |user-1-1| user-1-1| user-1-2| user-2-1| user-2-2| max|elena|simone\nkadai.roles.Admin=name=konrad,Organisation=novatec|admin\nkadai.roles.business_admin=max|Moritz|businessadmin\nkadai.roles.task_admin=peter | taskadmin\nkadai.roles.monitor=john|teamlead_2 | monitor\nkadai.domains=DOMAIN_A|DOMAIN_B|DOMAIN_C\nkadai.classification.types=TASK|DOCUMENT\nkadai.classification.categories.task=EXTERNAL| manual| autoMAtic| Process\nkadai.classification.categories.document=EXTERNAL\nkadai.jobs.enabled=false\n")),(0,r.kt)("h2",{id:"step-4-add-spis-to-your-adapter-application"},"Step 4: Add SPIs to your Adapter application"),(0,r.kt)("p",null,"SPIs need to be additionally specified in the Adapter application. You can read more about SPIs ",(0,r.kt)("a",{parentName:"p",href:"/kadai-doc/docs/user-guide/features/howToUseServiceProviderInterfaces"},"here"),".\nThe necessary SPI for the Adapter application can be build as follows: First, create a new package with the name taskrouting. Then, create a class in the package taskrouting with the name ExampleTaskRouter. It should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package com.example.demo.taskrouting; //or your own path depending on your packages\nimport pro.kadai.common.api.KadaiEngine;\nimport pro.kadai.spi.routing.api.TaskRoutingProvider;\nimport pro.kadai.task.api.models.Task;\n\n/** This is a sample implementation of TaskRouter. */\npublic class ExampleTaskRouter implements TaskRoutingProvider {\n\n  @Override\n  public void initialize(KadaiEngine kadaiEngine) {\n    // no-op\n  }\n\n  @Override\n  public String determineWorkbasketId(Task task) {\n    return "WBI:100000000000000000000000000000000001";\n  }\n}\n')),(0,r.kt)("p",null,"Next, add a new folder to your resources folder and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF"),". Create a new folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF"),", so that services is a subfolder of ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF"),". Finally, create a file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," folder with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"pro.kadai.spi.routing.api.TaskRoutingProvider"),". This file must contain the fully qualified classname (including the package) of the class ExampleTaskRouter, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"com.example.demo.taskrouting.ExampleTaskRouter\n")),(0,r.kt)("p",null,"Make sure there aren't any empty lines in this file.\nThe finished structure of the source folder should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Local Image",src:t(5699).Z,width:"1251",height:"933"})),(0,r.kt)("h2",{id:"step-5-start-all-applications-together"},"Step 5: Start all applications together"),(0,r.kt)("p",null,"First, check if your postgres database is running. For example, start the container provided in the KADAI repository by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"bash ./docker-databases/prepare_db.sh POSTGRES_14 && exit")," in a terminal. "),(0,r.kt)("p",null,"Then, start your KADAI application. Start your camunda app next, and login. Last, start the adapter. "),(0,r.kt)("h2",{id:"step-6-try-out-different-functionalities-of-adapter"},"Step 6: Try out different functionalities of Adapter."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Start a process with a User Task in Camunda. The User Task should be imported to KADAI automatically. You can check it by first knowing the name of the user task from the started process, then make a postgres GET request to KADAI using the following request, entering the name (or just substring of the name) of the user task for the "name-like" attribute'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"GET http://localhost:8080/kadai/api/v1/tasks?name-like=Say hello\n")),(0,r.kt)("p",{parentName:"li"},'Here we assume that the name of the user task is "Say hello to demo", but you can set the name differently by opening the ',(0,r.kt)("inlineCode",{parentName:"p"},"process.bpmn")," file in the camunda application and set the name attribute in ",(0,r.kt)("inlineCode",{parentName:"p"},"<bpmn:userTask>"),"differently.\nMake sure that the correct port number is used for KADAI request. You can check the port number in ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," of KADAI under ",(0,r.kt)("inlineCode",{parentName:"p"},"server.port"),'. If not specified, then the default port is 8080. You have to authenticate yourself using Basic Auth: In postman, go to the "Authorization" tab. There, select basicAuth and type "admin" as user and "admin" as password. Make sure enableCsrf is set to false in the properties of the KADAI application.'),(0,r.kt)("p",{parentName:"li"},"The output of the request in Postman should look like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Local Image",src:t(3792).Z,width:"1920",height:"1019"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Claim the KADAI Task from the previous step using postman. Make sure you add the following property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," file of the adapter application: ",(0,r.kt)("inlineCode",{parentName:"p"},"kadai.adapter.camunda.claiming.enabled=true"),", then restart the adapter. To send the POST request, use the same authorization as in the previous step. The Task should get claimed in Camunda automatically."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"POST http://localhost:8080/kadai/api/v1/tasks/{taskid}/claim\n")),(0,r.kt)("p",{parentName:"li"},"You can check that the task in KADAI is also claimed by making the same GET Request as in Step 1 and see the ",(0,r.kt)("inlineCode",{parentName:"p"},"claimed")," attribute.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the KADAI Task from previous step using postman. To send the POST request, use the same authorization as in the previous step. The Task should disappear from Camunda Tasklist."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"POST http://localhost:8080/kadai/api/v1/tasks/{taskid}/complete\n")))),(0,r.kt)("p",null,"More functionalities like the cancelling of a claimed task and their URLs can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://kadai.azurewebsites.net/kadai/docs/rest/rest-api.html"},"full documentation of the REST-API"),"."))}c.isMDXComponent=!0},5699:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/adapter-getting-started-project-structure-cb71d0e550090b7fb987bfd169d8a2bc.png"},8186:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/adapter-initialization-54b523db9b07bfb30c1a961c825b3ad3.png"},1360:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/camunda-initialization-8afbd82adc705e090b52fd8945d9e0b6.png"},3792:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/show-tasks-57dd5257e2cb1b7edc6e6119f1556b93.png"}}]);