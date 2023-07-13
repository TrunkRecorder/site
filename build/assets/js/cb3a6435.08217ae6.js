"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},i="Plugin System",p={unversionedId:"notes/PLUGIN-SYSTEM",id:"notes/PLUGIN-SYSTEM",title:"Plugin System",description:"The plugin system is designed to allow third parties to integrate their own features without changing the core code of trunk-recorder, and allow for features to be updated independently of the trunk-recorder code base. The current methods supported by the plugin system is loosely based on the Status uploader.",source:"@site/docs/notes/PLUGIN-SYSTEM.md",sourceDirName:"notes",slug:"/notes/PLUGIN-SYSTEM",permalink:"/docs/notes/PLUGIN-SYSTEM",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/PLUGIN-SYSTEM.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CALL-HANDLING",permalink:"/docs/notes/CALL-HANDLING"},next:{title:"Object Lifecycles and States in Trunk Recorder",permalink:"/docs/notes/STATES"}},o={},s=[],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugin-system"},"Plugin System"),(0,r.kt)("p",null,"The plugin system is designed to allow third parties to integrate their own features without changing the core code of trunk-recorder, and allow for features to be updated independently of the trunk-recorder code base. The current methods supported by the plugin system is loosely based on the Status uploader."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Unless otherwise noted, all fuctions need to return an int result (0 for successful, -1 for failure)")),(0,r.kt)("p",null,"Plugins need to implement the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<name>_plugin_new")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns a new pointer to a plugin_t instance, along with the used callback method references."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"init(plugin_t * const plugin)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The plugin_t instance needs to have a reference to an init(plugin_t) call."),(0,r.kt)("li",{parentName:"ul"},"The init(plugin_t) method gets called after the parse_config method.")))),(0,r.kt)("p",null,"Plugins can ",(0,r.kt)("em",{parentName:"p"},"optionally")," implement the following methods, based on usage, or set to NULL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"parse_config(plugin_t * const plugin, boost::property_tree::ptree::value_type &cfg)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called before init(plugin_t), and passed the Configuration information in the settings file for that plugin."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"start(plugin_t * const plugin)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called after trunk-recorder has been setup and all configuraiton is loaded."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"stop(plugin_t * const plugin)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called after trunk-recorder has started shutting down, but the top-block is still running."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"poll_one(plugin_t * const plugin)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called during each pass thru the main loop of trunk-recorder."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"call_start(plugin_t * const plugin, Call *call)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a new call is starting."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"call_end(plugin_t * const plugin, Call_Data_t call_info)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a call has ended."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"trunk_message(std::vector<TrunkMessage> messages, System *system)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a new message is received from the control channel of a Trunk system"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setup_recorder(plugin_t * const plugin, Recorder *recorder)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a new recorder has been created."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setup_system(plugin_t * const plugin, System * system)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a new system has been created."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setup_systems(plugin_t * const plugin, std::vector<System *> systems)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called during startup when the initial systems have been created."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setup_sources(plugin_t * const plugin, std::vector<Source *> sources)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called during startup when the initial sources have been created."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signal(plugin_t * const plugin, long unitId, const char *signaling_type, gr::blocks::SignalType sig_type, Call *call, System *system, Recorder *recorder)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a decoded signal (i.e. MDC-1200) has been detected."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"audio_stream(plugin_t * const plugin, Call *call, Recorder *recorder, float *samples, int sampleCount)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a set of audio samples that would be written out to the wav file writer is available."),(0,r.kt)("li",{parentName:"ul"},"Useful to implement live audio streaming."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unit_registration(System *sys, long source_id)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Called when a Subscriber Unit (radio) registers with a Trunk System")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unit_deregistration(System *sys, long source_id)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Called when a Subscriber Unit (radio) deregisters from a Trunk System")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unit_acknowledge_response(System *sys, long source_id)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Called for the Unit Ack Trunk message")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unit_group_affiliation(System *sys, long source_id, long talkgroup_num)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Called when a new Subscriber Unit (radio) selects a Talkgroup on a Trunk System")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unit_data_grant(System *sys, long source_id)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Called for the Unit Data Grant Trunk Message")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unit_answer_request(System *sys, long source_id, long talkgroup)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Called for the Unit Answer Request Trunk Message")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"unit_location(System *sys, long source_id, long talkgroup_num)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Called for the Unit Location Trunk Message"))))}c.isMDXComponent=!0}}]);