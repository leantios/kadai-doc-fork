"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=s(n),p=i,c=y["".concat(m,".").concat(p)]||y[p]||x[p]||a;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(7294),i=n(2389);function a(e){let{children:t,fallback:n}=e;return(0,i.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):n??null}},3973:(e,t,n)=>{var r=n(1262),i=n(7294);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(r),l=a(i);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #333;\n  color: #fff;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n");var m=function(e){var t=e.content,n=i.useState("loading..."),r=n[0],a=n[1],o=i.useRef(null),m=window.GraphViewer;return i.useEffect((function(){if(m)if(t){var e={editable:"_blank",highlight:"#0000ff",nav:!0,resize:!0,toolbar:"zoom lightbox",xml:t},n=JSON.stringify(e);o.current.dataset.mxgraph=n,a(""),setTimeout((function(){m.createViewerForElement(o.current)}),0)}else a("drawio file is empty");else a("GraphViewer is not loaded")}),[]),l.default.createElement("div",{className:"docusaurus-plugin-drawio"},l.default.createElement("div",{className:"docusaurus-plugin-drawio__content",ref:o},r))},s=i.memo((function(e){var t=e.content;return l.default.createElement(o.default,{fallback:l.default.createElement(l.default.Fragment,null,"loading...")},(function(){return l.default.createElement(m,{content:t})}))}));e.exports=s},2702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>x});var r=n(7462),i=(n(7294),n(3905)),a=n(3973),o=n.n(a);const l={sidebar_position:3},m="Java-API usage",s={unversionedId:"user-guide/core-concepts/javaApiUsage",id:"user-guide/core-concepts/javaApiUsage",title:"Java-API usage",description:"The following article describes the practical implementation of main concepts of KADAI, explained in the Overview. Please be familiar with the contents of the Overview in order to understand this article.",source:"@site/docs/user-guide/core-concepts/javaApiUsage.md",sourceDirName:"user-guide/core-concepts",slug:"/user-guide/core-concepts/javaApiUsage",permalink:"/kadai-doc/docs/user-guide/core-concepts/javaApiUsage",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"userSidebar",previous:{title:"Task Lifecycle",permalink:"/kadai-doc/docs/user-guide/core-concepts/taskLifecycle"},next:{title:"REST-API",permalink:"/kadai-doc/docs/user-guide/core-concepts/restApi"}},d={},x=[{value:"Where to find entities and operations on them",id:"where-to-find-entities-and-operations-on-them",level:2},{value:"The core of the Java-API",id:"the-core-of-the-java-api",level:2},{value:"How to create an Entity using the Java-API?",id:"how-to-create-an-entity-using-the-java-api",level:3},{value:"Example Task",id:"example-task",level:4},{value:"How to manipulate an Entity using the Java-API?",id:"how-to-manipulate-an-entity-using-the-java-api",level:3},{value:"How to integrate the Java API of KADAI- into your application?",id:"how-to-integrate-the-java-api-of-kadai--into-your-application",level:3}],y={toc:x};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"java-api-usage"},"Java-API usage"),(0,i.kt)("p",null,"The following article describes the practical implementation of main concepts of KADAI, explained in the ",(0,i.kt)("a",{parentName:"p",href:"/kadai-doc/docs/user-guide/core-concepts/overview"},"Overview"),". Please be familiar with the contents of the Overview in order to understand this article."),(0,i.kt)("h2",{id:"where-to-find-entities-and-operations-on-them"},"Where to find entities and operations on them"),(0,i.kt)("p",null,"The Overview describes ",(0,i.kt)("a",{parentName:"p",href:"/kadai-doc/docs/user-guide/core-concepts/overview#kadai-entities"},"entities")," and ",(0,i.kt)("a",{parentName:"p",href:"/kadai-doc/docs/user-guide/core-concepts/overview#operations-on-entities"},"operations on them"),". "),(0,i.kt)("p",null,"The Task, Classification and Workbasket as well as related entities can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kadai.task.api.models"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kadai.classification.api.models"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kadai.workbasket.api.models"),". Besides Tasks, Classifications and Workbaskets, KADAI also operates using summary objects: TaskSummaries, ClassificationSummaries and WorkbasketSummaries. They represent the same concepts as Tasks, Classifications and Workbaskets. Each summary object refers to a full entity, but only contains the most important information. For example, a TaskSummary with id 1234 refers to the Task with the id 1234. However, the TaskSummary does not contain the Attachment of the Task as well as some other information. The summary objects can be found in the same package as the complete entity interfaces."),(0,i.kt)("p",null,"Creating, Deleting and Updating can be done using TaskService, ClassificationService and WorkbasketService. The Services can be found in",(0,i.kt)("inlineCode",{parentName:"p"}," io.kadai.task.api"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kadai.classification.api"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kadai.workbasket.api"),". The corresponding queries can be also found in these packages. They are called  TaskQuery, ClassificationQuery and WorkbasketQuery."),(0,i.kt)("h2",{id:"the-core-of-the-java-api"},"The core of the Java-API"),(0,i.kt)("p",null,"Below is the diagramm that shows different packages that make up the Java-API of KADAI. They can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib/kadai-core")," folder"),(0,i.kt)(o(),{content:'<mxfile host="65bd71144e">\n    <diagram id="tQ7L7jLhEiCsHXpghWq2" name="Page-1">\n        <mxGraphModel dx="864" dy="1835" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">\n            <root>\n                <mxCell id="0"/>\n                <mxCell id="1" parent="0"/>\n                <mxCell id="112" value="" style="rounded=0.5;whiteSpace=wrap;html=1;fontSize=14;fillColor=#eeeeee;strokeColor=none;" vertex="1" parent="1">\n                    <mxGeometry x="420" y="60" width="660" height="940" as="geometry"/>\n                </mxCell>\n                <mxCell id="45" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="2" target="3">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="240" y="220" as="targetPoint"/>\n                        <Array as="points">\n                            <mxPoint x="240" y="490"/>\n                            <mxPoint x="240" y="160"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="46" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="2" target="4">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="240" y="490"/>\n                            <mxPoint x="240" y="270"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="47" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="2" target="5">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="240" y="490"/>\n                            <mxPoint x="240" y="380"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="48" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="2" target="6">\n                    <mxGeometry relative="1" as="geometry"/>\n                </mxCell>\n                <mxCell id="49" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="2" target="7">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="240" y="490"/>\n                            <mxPoint x="240" y="600"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="50" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.75;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="2" target="8">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="240" y="490"/>\n                            <mxPoint x="240" y="725"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="51" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="2" target="9">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="240" y="490"/>\n                            <mxPoint x="240" y="820"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="2" value="&lt;font style=&quot;font-size: 14px&quot;&gt;&lt;b&gt;kadai-core&lt;/b&gt;&lt;/font&gt;" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#bac8d3;strokeColor=#23445d;" vertex="1" parent="1">\n                    <mxGeometry x="60" y="450" width="140" height="80" as="geometry"/>\n                </mxCell>\n                <mxCell id="52" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="3" target="19">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="430" y="160"/>\n                            <mxPoint x="430" y="100"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="3" value="classification" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#fad7ac;strokeColor=#b46504;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="270" y="130" width="120" height="60" as="geometry"/>\n                </mxCell>\n                <mxCell id="53" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.25;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="4" target="23">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="430" y="270"/>\n                            <mxPoint x="430" y="218"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="4" value="common" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#bac8d3;strokeColor=#23445d;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="270" y="240" width="120" height="60" as="geometry"/>\n                </mxCell>\n                <mxCell id="54" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="5" target="34">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="430" y="380"/>\n                            <mxPoint x="430" y="360"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="5" value="monitor" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#bac8d3;strokeColor=#23445d;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="270" y="350" width="120" height="60" as="geometry"/>\n                </mxCell>\n                <mxCell id="55" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="6" target="37">\n                    <mxGeometry relative="1" as="geometry"/>\n                </mxCell>\n                <mxCell id="6" value="spi" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#bac8d3;strokeColor=#23445d;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="270" y="460" width="120" height="60" as="geometry"/>\n                </mxCell>\n                <mxCell id="56" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="7" target="39">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="430" y="600"/>\n                            <mxPoint x="430" y="620"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="7" value="task" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#fad7ac;strokeColor=#b46504;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="270" y="570" width="120" height="60" as="geometry"/>\n                </mxCell>\n                <mxCell id="57" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="8" target="40">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="430" y="710"/>\n                            <mxPoint x="430" y="750"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="8" value="user" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#bac8d3;strokeColor=#23445d;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="270" y="680" width="120" height="60" as="geometry"/>\n                </mxCell>\n                <mxCell id="58" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="9" target="41">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="430" y="820"/>\n                            <mxPoint x="430" y="880"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="9" value="workbasket" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#fad7ac;strokeColor=#b46504;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="270" y="790" width="120" height="60" as="geometry"/>\n                </mxCell>\n                <mxCell id="80" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="19">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="920" y="120" as="targetPoint"/>\n                        <Array as="points">\n                            <mxPoint x="920" y="100"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="19" value="api" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="460" y="75" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="83" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="1" source="23" target="62">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="660" y="229.57142857142867" as="targetPoint"/>\n                        <Array as="points">\n                            <mxPoint x="655" y="230"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="23" value="api" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="460" y="205" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="84" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="34" target="66">\n                    <mxGeometry relative="1" as="geometry">\n                        <Array as="points">\n                            <mxPoint x="785" y="360"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="34" value="api" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="460" y="335" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="91" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="37">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="620" y="489.57142857142867" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="37" value="api" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="460" y="465" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="39" value="api" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="460" y="595" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="40" value="api" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="460" y="725" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="41" value="api" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="460" y="855" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="82" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="59">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="655.2857142857144" y="100" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="59" value="models" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="600" y="110" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="81" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="60">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="785.2857142857144" y="100" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="60" value="exceptions" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="730" y="110" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="61" value="..." style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="860" y="110" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="62" value="..." style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="600" y="240" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="85" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="65">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="655.2857142857144" y="369.57142857142867" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="87" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="65">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="655.2857142857144" y="360" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="65" value="reports" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="600" y="370" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="66" value="..." style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="730" y="370" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="93" value="" style="endArrow=none;dashed=1;html=1;dashPattern=1 3;strokeWidth=2;fontSize=14;" edge="1" parent="1">\n                    <mxGeometry width="50" height="50" relative="1" as="geometry">\n                        <mxPoint x="620" y="490" as="sourcePoint"/>\n                        <mxPoint x="680" y="490" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="94" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="570" y="620" as="sourcePoint"/>\n                        <mxPoint x="920" y="640" as="targetPoint"/>\n                        <Array as="points">\n                            <mxPoint x="920" y="620"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="99" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="95">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="655.2857142857144" y="620" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="95" value="models" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="600" y="630" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="98" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="96">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="785.2857142857144" y="620" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="96" value="exceptions" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="730" y="630" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="97" value="..." style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="860" y="630" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="100" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="570" y="750" as="sourcePoint"/>\n                        <mxPoint x="920" y="770" as="targetPoint"/>\n                        <Array as="points">\n                            <mxPoint x="920" y="750"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="108" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="101">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="655.2857142857144" y="750" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="101" value="models" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="600" y="760" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="109" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="102">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="785.2857142857144" y="750" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="102" value="exceptions" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="730" y="760" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="103" value="..." style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;fontSize=14;" vertex="1" parent="1">\n                    <mxGeometry x="860" y="760" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="104" style="edgeStyle=none;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="570" y="880" as="sourcePoint"/>\n                        <mxPoint x="920" y="900" as="targetPoint"/>\n                        <Array as="points">\n                            <mxPoint x="920" y="880"/>\n                        </Array>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="110" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="105">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="655.2857142857144" y="880" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="105" value="models" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;" vertex="1" parent="1">\n                    <mxGeometry x="600" y="890" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="111" style="edgeStyle=none;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;fontSize=14;endArrow=none;endFill=0;" edge="1" parent="1" source="106">\n                    <mxGeometry relative="1" as="geometry">\n                        <mxPoint x="785.2857142857144" y="880" as="targetPoint"/>\n                    </mxGeometry>\n                </mxCell>\n                <mxCell id="106" value="exceptions" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;" vertex="1" parent="1">\n                    <mxGeometry x="730" y="890" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="107" value="..." style="rounded=1;whiteSpace=wrap;html=1;fillColor=#b0e3e6;strokeColor=#0e8088;" vertex="1" parent="1">\n                    <mxGeometry x="860" y="890" width="110" height="50" as="geometry"/>\n                </mxCell>\n                <mxCell id="113" value="" style="shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;fontSize=14;direction=south;" vertex="1" parent="1">\n                    <mxGeometry x="420" y="30" width="650" height="30" as="geometry"/>\n                </mxCell>\n                <mxCell id="114" value="&lt;font style=&quot;font-size: 20px&quot;&gt;&lt;b&gt;JAVA API&lt;/b&gt;&lt;/font&gt;" style="rounded=0;whiteSpace=wrap;html=1;fontSize=14;fillColor=none;strokeColor=none;" vertex="1" parent="1">\n                    <mxGeometry x="645" y="-20" width="210" height="60" as="geometry"/>\n                </mxCell>\n            </root>\n        </mxGraphModel>\n    </diagram>\n</mxfile>',mdxType:"Drawio"}),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"io.kadai.classification.api"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Classification entity that consists of the Classification and ClassificationSummary interfaces in the models folder"),(0,i.kt)("li",{parentName:"ul"},"Methods to create, update and delete a Classification in the ClassificationService interface"),(0,i.kt)("li",{parentName:"ul"},"Methods to query the Classification with filtering and sorting in the ClassificationQuery interface"),(0,i.kt)("li",{parentName:"ul"},"Used Exceptions and Enums")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"io.kadai.task.api "),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Task entity that consists of the Task and TaskSummary interfaces in the models folder"),(0,i.kt)("li",{parentName:"ul"},"The Attachment entity that consists of the Attachment and AttachmentSummary interfaces in the models folder"),(0,i.kt)("li",{parentName:"ul"},"The ObjectReference entity that consists of the ObjectReference interface in the models folder"),(0,i.kt)("li",{parentName:"ul"},"Methods to create, update and delete a Task in the TaskService interface"),(0,i.kt)("li",{parentName:"ul"},"Methods to query the Task with filtering and sorting in the TaskQuery interface"),(0,i.kt)("li",{parentName:"ul"},"Used Exceptions and Enums")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"io.kadai.workbasket.api"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Workbasket entity that consists of the Workbasket and WorkbasketSummary interfaces in the models folder"),(0,i.kt)("li",{parentName:"ul"},"The WorkbasketAccessItem entity that consists of the WorkbasketAccessItem interface"),(0,i.kt)("li",{parentName:"ul"},"Methods to create, update and delete a Workbasket in the WorkbasketService interface"),(0,i.kt)("li",{parentName:"ul"},"Methods to query the Workbasket with filtering and sorting in the WorkbasketQuery interface"),(0,i.kt)("li",{parentName:"ul"},"Used Exceptions and Enums ")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"io.kadai.common.api"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"KadaiEngine interface that brings all services of KADAI together"),(0,i.kt)("li",{parentName:"ul"},"Other, non-entity-related services")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"io.kadai.monitor.api"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Report models for aggregating data on an entity can be found in the reports folder"),(0,i.kt)("li",{parentName:"ul"},"Reports can be created using ReportBuilders from the report folder. They make filtering of entities included in a Report possible"),(0,i.kt)("li",{parentName:"ul"},"Methods to create ReportBuilder are in the MonitorService interface")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"io.kadai.user.api"),": "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The User entity that consists of the User interface in the models folder"),(0,i.kt)("li",{parentName:"ul"},"Methods to create, update and delete a User in the UserService interface"),(0,i.kt)("li",{parentName:"ul"},"Used Exceptions "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"io.kadai.spi"),": "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"contains all Service Provider Interfaces (SPIs) of KADAI. An SPI allows the client to change the behavior of KADAI by implementing the SPI. More about SPIs can be found here (link)")))),(0,i.kt)("h3",{id:"how-to-create-an-entity-using-the-java-api"},"How to create an Entity using the Java-API?"),(0,i.kt)("h4",{id:"example-task"},"Example Task"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First create a Task object that is not in the database yet with method\n",(0,i.kt)("inlineCode",{parentName:"li"},"TaskService.newTask")),(0,i.kt)("li",{parentName:"ol"},"Then set some properties of that Task via its setter methods."),(0,i.kt)("li",{parentName:"ol"},"Finally, persist this Task to the database via ",(0,i.kt)("inlineCode",{parentName:"li"},"TaskSerivce.createTask"))),(0,i.kt)("p",null,"You can find corresponding functions ",(0,i.kt)("inlineCode",{parentName:"p"},"WorkbasketService.newWorkbasket"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassificationService.newClassification"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"WorkbasketService.createWorkbasket")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassificationService.createClassification")," in other Services. They can be used to create other entities."),(0,i.kt)("h3",{id:"how-to-manipulate-an-entity-using-the-java-api"},"How to manipulate an Entity using the Java-API?"),(0,i.kt)("p",null,"Some properties of an entity can be set via the entity interface (e.g. the Task interface) in the KADAI Java-API. For example, the method ",(0,i.kt)("inlineCode",{parentName:"p"},"  Task.setDescription")," can be used to set the description of a Task.  However, some properties of entities cannot be set this way. For example, a Workbasket has to be specified during the creation of a Task. You can change the Workbasket by transferring the Task using ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskService.transfer"),". The state of a Task can only be modified by corresponding TaskService methods ",(0,i.kt)("inlineCode",{parentName:"p"},"claim"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forceClaim"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelClaim")," etc. You can read more about the status changes here (link)."),(0,i.kt)("h3",{id:"how-to-integrate-the-java-api-of-kadai--into-your-application"},"How to integrate the Java API of KADAI- into your application?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find out the DataSource for your KADAI database. You can read here (link) about setting it up"),(0,i.kt)("li",{parentName:"ul"},"Pass the DataSource to the constructor of ",(0,i.kt)("inlineCode",{parentName:"li"},"io.kadai.configuration.KadaiEngineConfiguration"),"."),(0,i.kt)("li",{parentName:"ul"},"Build a KADAIEngine using ",(0,i.kt)("inlineCode",{parentName:"li"},"KadaiEngineConfiguration.buildEngine"),".")),(0,i.kt)("p",null,"You can use the corresponding Services by getting them with the methods ",(0,i.kt)("inlineCode",{parentName:"p"},"KadaiEngine.getClassificationService"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"KadaiEngine.getTaskService")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"KadaiEngine.getWorkbasketService"),"."))}p.isMDXComponent=!0}}]);