"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[7048],{1975:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=n(4848),i=n(8453);const r={},o="Getting Started",s={id:"user-guide/adapter/gettingStarted",title:"Getting Started",description:"In this article, the set up of the Adapter is explained step by step. Additionally, you can try out some of the functionalities of the Adapter following the instructions in this article.",source:"@site/docs/user-guide/adapter/gettingStarted.md",sourceDirName:"user-guide/adapter",slug:"/user-guide/adapter/gettingStarted",permalink:"/kadai-doc/docs/user-guide/adapter/gettingStarted",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Adapter",permalink:"/kadai-doc/docs/category/adapter"},next:{title:"Demo App",permalink:"/kadai-doc/docs/demo-app/demoApp"}},d={},p=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Step 0 (optional): Initialize an empty Camunda application",id:"step-0-optional-initialize-an-empty-camunda-application",level:2},{value:"Step 1: Configure your Camunda application",id:"step-1-configure-your-camunda-application",level:2},{value:"kadai-outbox.properties",id:"kadai-outboxproperties",level:3},{value:"application.properties",id:"applicationproperties",level:3},{value:"application.yaml",id:"applicationyaml",level:3},{value:"Step 2: Initialize an empty Adapter application",id:"step-2-initialize-an-empty-adapter-application",level:2},{value:"Step 3: Configure your Adapter application",id:"step-3-configure-your-adapter-application",level:2},{value:"application.properties",id:"applicationproperties-1",level:3},{value:"kadai.properties",id:"kadaiproperties",level:3},{value:"Step 4: Add SPIs to your Adapter application",id:"step-4-add-spis-to-your-adapter-application",level:2},{value:"Step 5: Start all applications together",id:"step-5-start-all-applications-together",level:2},{value:"Step 6: Try out different functionalities of Adapter.",id:"step-6-try-out-different-functionalities-of-adapter",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,t.jsx)(a.p,{children:"In this article, the set up of the Adapter is explained step by step. Additionally, you can try out some of the functionalities of the Adapter following the instructions in this article."}),"\n",(0,t.jsx)(a.h2,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"an IDE of your choice (preferably IntelliJ)"}),"\n",(0,t.jsx)(a.li,{children:"Java 17"}),"\n",(0,t.jsx)(a.li,{children:"maven"}),"\n",(0,t.jsx)(a.li,{children:"Camunda Modeler"}),"\n",(0,t.jsx)(a.li,{children:"Postgres or Docker (to set up postgres database)"}),"\n",(0,t.jsx)(a.li,{children:"optional: postman (makes REST API requests easier)"}),"\n",(0,t.jsxs)(a.li,{children:["Working KADAI application (see ",(0,t.jsx)(a.a,{href:"/kadai-doc/docs/user-guide/getting-started/exampleSpringBoot",children:"here"})," for instructions)"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Note: Please name your packages, folders and files exactly like in the example!"}),"\n",(0,t.jsx)(a.h2,{id:"step-0-optional-initialize-an-empty-camunda-application",children:"Step 0 (optional): Initialize an empty Camunda application"}),"\n",(0,t.jsxs)(a.p,{children:["If you don't have a Camunda application that you could use for experimenting with the Adapter, install a new application. You can use  ",(0,t.jsx)(a.a,{href:"https://start.camunda.com/",children:"https://start.camunda.com/"}),' to initialize an empty application. You need to choose Java 17. Additionally, make sure that the modules "REST API", "Webapps" and "Spin" are chosen and set an admin username and password of your choice.']}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Local Image",src:n(5952).A+"",width:"1407",height:"1488"})}),"\n",(0,t.jsx)(a.p,{children:"Unpack the project in a folder of your choice and open it in your IDE."}),"\n",(0,t.jsx)(a.h2,{id:"step-1-configure-your-camunda-application",children:"Step 1: Configure your Camunda application"}),"\n",(0,t.jsx)(a.p,{children:'Add a new extension property to your User Tasks. The name of the property should be kadai.classification-key. It should have an existing classification key as value. If you are using the KADAI example application, you can enter "L1050" as value.'}),"\n",(0,t.jsx)(a.p,{children:"Add following dependencies to the dependencies section of your pom:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"<dependency>\n  <groupId>io.kadai</groupId>\n  <artifactId>kadai-adapter-camunda-outbox-rest-spring-boot-starter</artifactId>\n  <version>3.1.0</version>\n</dependency>\n<dependency>\n  <groupId>org.jboss.resteasy</groupId>\n  <artifactId>resteasy-servlet-spring-boot-starter</artifactId>\n  <version>6.1.1.Final</version>\n</dependency>\n<dependency>\n  <groupId>org.camunda.spin</groupId>\n  <artifactId>camunda-spin-dataformat-json-jackson</artifactId>\n</dependency>\n<dependency>\n  <groupId>org.postgresql</groupId>\n  <artifactId>postgresql</artifactId>\n</dependency>\n"})}),"\n",(0,t.jsx)(a.p,{children:'You need to exclude the following from the org.camunda.bpm.springboot dependency with the artifact ID "camunda-bpm-spring-boot-starter-rest":'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"<dependency>\n  <groupId>org.camunda.bpm.springboot</groupId>\n  <artifactId>camunda-bpm-spring-boot-starter-rest</artifactId>\n  <exclusions>\n    <exclusion>\n      <groupId>org.skyscreamer</groupId>\n      <artifactId>jsonassert</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>\n"})}),"\n",(0,t.jsx)(a.p,{children:"Then, add a repository to the pom:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"<repositories>\n  <repository>\n    <id>jboss-public-repository</id>\n    <name>JBoss Repository</name>\n    <url>https://repository.jboss.org/nexus/content/groups/public</url>\n  </repository>\n</repositories>\n"})}),"\n",(0,t.jsx)(a.p,{children:"Add the following file to your resources folder:"}),"\n",(0,t.jsx)(a.h3,{id:"kadai-outboxproperties",children:"kadai-outbox.properties"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kadai.adapter.outbox.schema = kadai_tables\nkadai.adapter.outbox.max.number.of.events = 57\nkadai.adapter.create_outbox_schema = true\nkadai.adapter.outbox.initial.number.of.task.creation.retries = 5\nkadai.adapter.outbox.duration.between.task.creation.retries = PT1H\n\n#kadai.adapter.outbox.datasource.jndi=java:jboss/datasources/ProcessEnginePostgres\n#kadai.adapter.outbox.datasource.jndi=jdbc/ProcessEngine\n\nkadai.adapter.outbox.datasource.driver=org.postgresql.Driver\nkadai.adapter.outbox.datasource.url=jdbc:postgresql://localhost:5102/postgres\nkadai.adapter.outbox.datasource.username=postgres\nkadai.adapter.outbox.datasource.password=postgres\n\n#kadai.adapter.outbox.datasource.url=jdbc:h2:mem:camunda;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;LOCK_MODE=0;DB_CLOSE_ON_EXIT=FALSE;\n#kadai.adapter.outbox.datasource.driver=org.h2.Driver\n#kadai.adapter.outbox.datasource.username=sa\n#kadai.adapter.outbox.datasource.password=sa\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You need to add at least one of the following ",(0,t.jsx)(a.code,{children:"application.properties"})," or ",(0,t.jsx)(a.code,{children:"application.yaml"})," given below:"]}),"\n",(0,t.jsx)(a.h3,{id:"applicationproperties",children:"application.properties"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"server.port=8085\nspring.main.allow-bean-definition-overriding=true\ncamunda.bpm.auto-deployment-enabled=true\n\nserver.servlet.context-path=/example-context-root\ncamunda.bpm.admin-user.id=admin\ncamunda.bpm.admin-user.first-name=admin\ncamunda.bpm.admin-user.password=admin\ncamunda.bpm.admin-user.last-name=admin\n\ncamunda.bpm.database.type=postgres\n\n# new mandatory field starting from camunda version 7.20\n# see https://forum.camunda.io/t/camunda-7-20-history-time-to-live-cannot-be-null-cannot-deploy-wf-created-in-7-18/48159\ncamunda.bpm.generic-properties.properties.historyTimeToLive: P180D\n\n# properties for resteasy-servlet-spring-boot-starter\n# without these 2 propertiers the camunda-context is registered twice\nresteasy.jaxrs.app.registration=property\nresteasy.jaxrs.app.classes=io.kadai.adapter.camunda.outbox.rest.config.OutboxRestServiceConfig\n\nspring.datasource.url=jdbc:postgresql://localhost:5102/postgres\nspring.datasource.driver-class-name = org.postgresql.Driver\nspring.datasource.username = postgres\nspring.datasource.password = postgres\n\n#spring.datasource.url=jdbc:h2:mem:camunda;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;DB_CLOSE_ON_EXIT=FALSE;\n#spring.datasource.driverClassName=org.h2.Driver\n#spring.datasource.username=sa\n#spring.datasource.password=sa\n\n"})}),"\n",(0,t.jsx)(a.h3,{id:"applicationyaml",children:"application.yaml"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"camunda:\n  bpm:\n    admin-user:\n      first-name: admin\n      id: admin\n      last-name: admin\n      password: admin\n    auto-deployment-enabled: true\n    database:\n      type: postgres\n    generic-properties:\n      properties:\n        historyTimeToLive: P180D\nresteasy:\n  jaxrs:\n    app:\n      classes: io.kadai.adapter.camunda.outbox.rest.config.OutboxRestServiceConfig\n      registration: property\nserver:\n  port: 8085\n  servlet:\n    context-path: /example-context-root\nspring:\n  datasource:\n    driver-class-name: org.postgresql.Driver\n    password: postgres\n    url: jdbc:postgresql://localhost:5102/postgres\n    username: postgres\n  main:\n    allow-bean-definition-overriding: true\n"})}),"\n",(0,t.jsx)(a.p,{children:"Start the camunda application and check if it runs correctly.\nClose the camunda application after checking."}),"\n",(0,t.jsx)(a.h2,{id:"step-2-initialize-an-empty-adapter-application",children:"Step 2: Initialize an empty Adapter application"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"https://start.spring.io/",children:"Spring Initializer"})," to initialize a Spring Boot Project. Chose Java 17."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Local Image",src:n(8467).A+"",width:"3357",height:"1848"})}),"\n",(0,t.jsx)(a.p,{children:"Unpack the project in a folder of your choice and open it in your IDE."}),"\n",(0,t.jsx)(a.h2,{id:"step-3-configure-your-adapter-application",children:"Step 3: Configure your Adapter application"}),"\n",(0,t.jsx)(a.p,{children:"Add following dependencies to the dependencies section of your pom (if they don't already exist):"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"<dependencies>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-configuration-processor</artifactId>\n    <optional>true</optional>\n  </dependency>\n  <dependency>\n     <groupId>io.kadai</groupId>\n    <artifactId>kadai-adapter</artifactId>\n    <version>3.1.0</version>\n  </dependency>\n  <dependency>\n    <groupId>io.kadai</groupId>\n    <artifactId>kadai-adapter-camunda-system-connector</artifactId>\n    <version>3.1.0</version>\n  </dependency>\n  <dependency>\n    <groupId>io.kadai</groupId>\n    <artifactId>kadai-adapter-kadai-connector</artifactId>\n    <version>3.1.0</version>\n  </dependency>\n  <dependency>\n    <groupId>com.ibm.db2</groupId>\n    <artifactId>jcc</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>org.postgresql</groupId>\n    <artifactId>postgresql</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>com.h2database</groupId>\n    <artifactId>h2</artifactId>\n  </dependency>\n</dependencies>\n"})}),"\n",(0,t.jsx)(a.p,{children:"Add the following annotations to your AdapterApplication, and import the packages correspondingly:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:'@EnableScheduling\n@ComponentScan(basePackages = "io.kadai.adapter")\n@Import({AdapterConfiguration.class})\n'})}),"\n",(0,t.jsx)(a.p,{children:"Add following files to your resources folder:"}),"\n",(0,t.jsx)(a.h3,{id:"applicationproperties-1",children:"application.properties"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"######################################################################################\n## Adapter properties\n######################################################################################\n##\n#logging.level.org.springframework=DEBUG\nlogging.level.io.kadai=DEBUG\n#logging.level.com.spring.ibatis=DEBUG\n#logging.level.com.spring.ibatis.*=DEBUG\n#logging.level.org.apache.ibatis=DEBUG\n\n#logging.level.io.kadai=info\n\n## Set Server Port for Adapter\nserver.port = 8083\nspring.main.allow-bean-definition-overriding=true\n\nkadai.adapter.run-as.user=taskadmin\nkadai.adapter.scheduler.run.interval.for.start.kadai.tasks.in.milliseconds=10000\nkadai.adapter.scheduler.run.interval.for.complete.referenced.tasks.in.milliseconds=10000\nkadai.adapter.scheduler.run.interval.for.claim.referenced.tasks.in.milliseconds=10000\nkadai.adapter.scheduler.run.interval.for.cancel.claim.referenced.tasks.in.milliseconds=10000\nkadai.adapter.scheduler.run.interval.for.check.finished.referenced.tasks.in.milliseconds=10000\n\nkadai-system-connector-camunda-rest-api-user-name=admin\nkadai-system-connector-camunda-rest-api-user-password=admin\nkadai-system-connector-outbox-rest-api-user-name=admin\nkadai-system-connector-outbox-rest-api-user-password=admin\n####################################################################################\n# System connector properties\n####################################################################################\n#\n# Set URLs of Camunda REST API and associated KADAI Outbox REST API. The format is\n# <camundaSystem1-RestURL> | <camundaSystem1-OutboxRestURL> , ..., <camundaSystemN-RestURL> | <camundaSystemN-OutboxRestURL>\n\nkadai-system-connector-camundaSystemURLs=http://localhost:8085/example-context-root/engine-rest | http://localhost:8085/example-context-root/outbox-rest\n\n####################################################################################\n# Kadai-connector properties\n####################################################################################\n#\n# Configure the datasource for Kadai DB (used by kadai-connector)\n#kadai.datasource.jdbcUrl = jdbc:h2:tcp://localhost:9095/mem:kadai;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;LOCK_MODE=0;\n#kadai.datasource.jdbcUrl=jdbc:h2:mem:kadai;NON_KEYWORDS=KEY,VALUE;IGNORECASE=TRUE;LOCK_MODE=0;DB_CLOSE_ON_EXIT=FALSE\n#kadai.datasource.driverClassName = org.h2.Driver\n#kadai.datasource.username = sa\n#kadai.datasource.password = sa\nkadai.schemaName=kadai\n#\n# kadai.datasource.jdbcUrl=jdbc:db2://localhost:50050/kadai\n# kadai.datasource.driverClassName=com.ibm.db2.jcc.DB2Driver\n# kadai.datasource.username=db2user\n# kadai.datasource.password=Db2password\n\nkadai.datasource.jdbcUrl=jdbc:postgresql://localhost:5102/postgres\nkadai.datasource.driverClassName=org.postgresql.Driver\nkadai.datasource.username=postgres\nkadai.datasource.password=postgres\n#kadai.schemaName=kadai\n\nkadai.adapter.mapping.default.objectreference.company=DEFAULT_COMPANY\nkadai.adapter.mapping.default.objectreference.system=DEFAULT_SYSTEM\nkadai.adapter.mapping.default.objectreference.system.instance=DEFAULT_SYSTEM_INSTANCE\nkadai.adapter.mapping.default.objectreference.type=DEFAULT_TYPE\nkadai.adapter.mapping.default.objectreference.value=DEFAULT_VALUE\n\n"})}),"\n",(0,t.jsx)(a.h3,{id:"kadaiproperties",children:"kadai.properties"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kadai.roles.user=group1 | group2|teamlead-1 |teamlead-2 |user-1-1| user-1-1| user-1-2| user-2-1| user-2-2| max|elena|simone\nkadai.roles.Admin=name=konrad,Organisation=novatec|admin\nkadai.roles.business_admin=max|Moritz|businessadmin\nkadai.roles.task_admin=peter | taskadmin\nkadai.roles.monitor=john|teamlead_2 | monitor\nkadai.domains=DOMAIN_A|DOMAIN_B|DOMAIN_C\nkadai.classification.types=TASK|DOCUMENT\nkadai.classification.categories.task=EXTERNAL| manual| autoMAtic| Process\nkadai.classification.categories.document=EXTERNAL\nkadai.jobs.enabled=false\n"})}),"\n",(0,t.jsx)(a.h2,{id:"step-4-add-spis-to-your-adapter-application",children:"Step 4: Add SPIs to your Adapter application"}),"\n",(0,t.jsxs)(a.p,{children:["SPIs need to be additionally specified in the Adapter application. You can read more about SPIs ",(0,t.jsx)(a.a,{href:"/kadai-doc/docs/user-guide/features/howToUseServiceProviderInterfaces",children:"here"}),".\nThe necessary SPI for the Adapter application can be build as follows: First, create a new package with the name taskrouting. Then, create a class in the package taskrouting with the name ExampleTaskRouter. It should look like this:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:'package com.example.demo.taskrouting; //or your own path depending on your packages\nimport io.kadai.common.api.KadaiEngine;\nimport io.kadai.spi.routing.api.TaskRoutingProvider;\nimport io.kadai.task.api.models.Task;\n\n/** This is a sample implementation of TaskRouter. */\npublic class ExampleTaskRouter implements TaskRoutingProvider {\n\n  @Override\n  public void initialize(KadaiEngine kadaiEngine) {\n    // no-op\n  }\n\n  @Override\n  public String determineWorkbasketId(Task task) {\n    return "WBI:100000000000000000000000000000000001";\n  }\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Next, add a new folder to your resources folder and name it ",(0,t.jsx)(a.code,{children:"META-INF"}),". Create a new folder named ",(0,t.jsx)(a.code,{children:"services"})," in the folder ",(0,t.jsx)(a.code,{children:"META-INF"}),", so that services is a subfolder of ",(0,t.jsx)(a.code,{children:"META-INF"}),". Finally, create a file in the ",(0,t.jsx)(a.code,{children:"services"})," folder with the name ",(0,t.jsx)(a.code,{children:"io.kadai.spi.routing.api.TaskRoutingProvider"}),". This file must contain the fully qualified classname (including the package) of the class ExampleTaskRouter, for example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"com.example.demo.taskrouting.ExampleTaskRouter\n"})}),"\n",(0,t.jsx)(a.p,{children:"Make sure there aren't any empty lines in this file.\nThe finished structure of the source folder should look like this:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Local Image",src:n(2438).A+"",width:"1251",height:"933"})}),"\n",(0,t.jsx)(a.h2,{id:"step-5-start-all-applications-together",children:"Step 5: Start all applications together"}),"\n",(0,t.jsxs)(a.p,{children:["First, check if your postgres database is running. For example, start the container provided in the KADAI repository by executing ",(0,t.jsx)(a.code,{children:"bash ./docker-databases/prepare_db.sh POSTGRES_14 && exit"})," in a terminal."]}),"\n",(0,t.jsx)(a.p,{children:"Then, start your KADAI application. Start your camunda app next, and login. Last, start the adapter."}),"\n",(0,t.jsx)(a.h2,{id:"step-6-try-out-different-functionalities-of-adapter",children:"Step 6: Try out different functionalities of Adapter."}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:'Start a process with a User Task in Camunda. The User Task should be imported to KADAI automatically. You can check it by first knowing the name of the user task from the started process, then make a postgres GET request to KADAI using the following request, entering the name (or just substring of the name) of the user task for the "name-like" attribute'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"GET http://localhost:8080/kadai/api/v1/tasks?name-like=Say hello\n"})}),"\n",(0,t.jsxs)(a.p,{children:['Here we assume that the name of the user task is "Say hello to demo", but you can set the name differently by opening the ',(0,t.jsx)(a.code,{children:"process.bpmn"})," file in the camunda application and set the name attribute in ",(0,t.jsx)(a.code,{children:"<bpmn:userTask>"}),"differently.\nMake sure that the correct port number is used for KADAI request. You can check the port number in ",(0,t.jsx)(a.code,{children:"application.properties"})," of KADAI under ",(0,t.jsx)(a.code,{children:"server.port"}),'. If not specified, then the default port is 8080. You have to authenticate yourself using Basic Auth: In postman, go to the "Authorization" tab. There, select basicAuth and type "admin" as user and "admin" as password. Make sure enableCsrf is set to false in the properties of the KADAI application.']}),"\n",(0,t.jsx)(a.p,{children:"The output of the request in Postman should look like this:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Local Image",src:n(2672).A+"",width:"1920",height:"1019"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Claim the KADAI Task from the previous step using postman. Make sure you add the following property to the ",(0,t.jsx)(a.code,{children:"application.properties"})," file of the adapter application: ",(0,t.jsx)(a.code,{children:"kadai.adapter.camunda.claiming.enabled=true"}),", then restart the adapter. To send the POST request, use the same authorization as in the previous step. The Task should get claimed in Camunda automatically."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"POST http://localhost:8080/kadai/api/v1/tasks/{taskid}/claim\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You can check that the task in KADAI is also claimed by making the same GET Request as in Step 1 and see the ",(0,t.jsx)(a.code,{children:"claimed"})," attribute."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Complete the KADAI Task from previous step using postman. To send the POST request, use the same authorization as in the previous step. The Task should disappear from Camunda Tasklist."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"POST http://localhost:8080/kadai/api/v1/tasks/{taskid}/complete\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["More functionalities like the cancelling of a claimed task and their URLs can be found in the ",(0,t.jsx)(a.a,{href:"https://kadai-io.azurewebsites.net/kadai/docs/rest/rest-api.html",children:"full documentation of the REST-API"}),"."]})]})}function l(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2438:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/adapter-getting-started-project-structure-cb71d0e550090b7fb987bfd169d8a2bc.png"},8467:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/adapter-initialization-54b523db9b07bfb30c1a961c825b3ad3.png"},5952:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/camunda-initialization-8afbd82adc705e090b52fd8945d9e0b6.png"},2672:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/show-tasks-57dd5257e2cb1b7edc6e6119f1556b93.png"},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>s});var t=n(6540);const i={},r=t.createContext(i);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);