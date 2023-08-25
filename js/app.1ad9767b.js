(function(t){function e(e){for(var o,r,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},s={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2f4e":function(t,e,n){},"4a99":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"noise",rawName:"v-noise",value:"brown",expression:"'brown'"},{name:"lofi",rawName:"v-lofi"}],staticClass:"container",attrs:{id:"app"}},[e("h2",[e("span",[t._v(t._s(t._f("uppercase")("Pomodoro")))]),e("ControlsComponent")],1),e("StateTitleComponent"),e("CountdownComponent",{staticClass:"mb-2"}),e("transition",{attrs:{name:"fade"}},[e("KittensComponent",{directives:[{name:"show",rawName:"v-show",value:!t.isWorking,expression:"!isWorking"}]})],1)],1)},a=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"btn-group controls"},[e("button",{staticClass:"btn btn-outline-secondary mr-1 ml-2",attrs:{disabled:t.isStarted&&!t.isPaused,title:"start"},on:{click:t.start}},[e("font-awesome-icon",{attrs:{icon:"play"}})],1),e("button",{staticClass:"btn btn-outline-secondary mr-1",attrs:{disabled:!t.isStarted||t.isPaused,title:"pause"},on:{click:t.pause}},[e("font-awesome-icon",{attrs:{icon:"pause"}})],1),e("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:!t.isStarted,title:"stop"},on:{click:t.stop}},[e("font-awesome-icon",{attrs:{icon:"stop"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isStarted&&!t.isPaused,expression:"isStarted && !isPaused"}],staticClass:"toggle-volume",on:{click:t.toggleSound}},[t.isSoundEnabled?e("font-awesome-icon",{attrs:{icon:"volume-up"}}):t._e(),t.isSoundEnabled?t._e():e("font-awesome-icon",{attrs:{icon:"volume-mute"}})],1)])},i=[],c=n("2f62"),u={name:"ControlsComponent",computed:{...Object(c["c"])(["isStarted","isPaused","isStopped","isWorking","isSoundEnabled"])},methods:Object(c["b"])(["start","pause","stop","toggleSound"])},l=u,d=(n("ea49"),n("2877")),p=Object(d["a"])(l,r,i,!1,null,"4c9b63ac",null),m=p.exports,f=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v(t._s(t.isWorking?t.workingTitle:t.restingTitle))])])},b=[],g={name:"StateTitleComponent",data(){return{workingTitle:"Work!",restingTitle:"Rest!"}},computed:Object(c["c"])(["isWorking"])},v=g,h=Object(d["a"])(v,f,b,!1,null,"015da560",null),w=h.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card bg-light"},[e("div",{staticClass:"card-body"},[e("span",[t._v(t._s(t._f("leftPad")(t.min))+":"+t._s(t._f("leftPad")(t.sec)))])])])},C=[],y={name:"CountdownComponent",computed:{...Object(c["c"])({min:"getMinutes",sec:"getSeconds"})}},k=y,_=Object(d["a"])(k,S,C,!1,null,"04690640",null),O=_.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card bg-light kittens"},[e("div",{staticClass:"card-body"},[e("img",{attrs:{src:t.catImgSrc,alt:"Cat image"}})])])},P=[],T={name:"KittensComponent",computed:Object(c["c"])({catImgSrc:"getCatImgSrc"}),methods:Object(c["b"])(["fetchKitten"]),mounted(){this.fetchKitten()}},E=T,x=(n("c78e"),Object(d["a"])(E,j,P,!1,null,"7b7be57e",null)),W=x.exports,A={isStarted:t=>t.started,isPaused:t=>t.paused,isStopped:t=>t.stopped,isWorking:t=>t.isWorking,getMinutes:t=>Math.floor(t.counter/60),getSeconds:t=>t.counter%60,getCatImgSrc:t=>t.catImgSrc,isSoundEnabled:t=>t.soundEnabled};const I="START",M="PAUSE",K="STOP",N="FETCH_KITTEN",D="TOGGLE_SOUND";var R={start:({commit:t})=>t(I),pause:({commit:t})=>t(M),stop:({commit:t})=>t(K),fetchKitten:({commit:t})=>t(N),toggleSound:({commit:t})=>t(D)};const B=6,G=300,J=5;function L(t,e=!1){const n=e?!t.paused&&!t.stopped&&t.soundEnabled:t.soundEnabled;n?t.isWorking?(o["a"].noise.start(),o["a"].lofi.pause()):t.isWorking||(o["a"].noise.pause(),o["a"].lofi.start()):(o["a"].noise.pause(),o["a"].lofi.pause())}function U(t,e=!1){e=e||!t.isWorking,t.isWorking=e,L(t,!0),t.counter=t.isWorking?B:G}function H(t){0===t.counter&&U(t),t.counter%J!==0||t.isWorking||q(t),t.counter--,t.timestamp=(new Date).getTime()}function q(t){const e=new XMLHttpRequest;e.open("GET","https://api.thecatapi.com/v1/images/search?size=med&ts="+t.timestamp,!1),e.send(null),t.catImgSrc=JSON.parse(e.response)[0].url}var z={[I](t){t.started=!0,t.paused=!1,t.stopped=!1,t.interval=setInterval(()=>H(t),1e3),L(t)},[M](t){t.started=!0,t.paused=!0,t.stopped=!1,clearInterval(t.interval),o["a"].noise.pause(),o["a"].lofi.pause()},[K](t){t.started=!1,t.paused=!1,t.stopped=!0,clearInterval(t.interval),U(t,!0),o["a"].noise.stop(),o["a"].lofi.pause()},[N](t){q(t)},[D](t){t.soundEnabled=!t.soundEnabled,L(t)}};o["a"].use(c["a"]);const F={started:!1,paused:!1,stopped:!1,isWorking:!0,counter:B,interval:null,catImgSrc:"",timestamp:0,soundEnabled:!0};var X=new c["a"].Store({state:F,getters:A,actions:R,mutations:z}),$={name:"App",components:{KittensComponent:W,CountdownComponent:O,StateTitleComponent:w,ControlsComponent:m},computed:Object(c["c"])(["isWorking"]),store:X},Q=$,V=(n("8002"),Object(d["a"])(Q,s,a,!1,null,null,null)),Y=V.exports,Z=n("ecee"),tt=n("c074"),et=n("ad3d");n("ab8b");const nt=new(window.AudioContext||window.webkitAudioContext);let ot=0;const st=()=>{ot=2*nt.sampleRate;const t=nt.createBuffer(1,ot,nt.sampleRate),e=t.getChannelData(0);Array.from(Array(ot)).forEach((t,n)=>{e[n]=2*Math.random()-1});const n=nt.createBufferSource();return n.buffer=t,n.loop=!0,n.start(0),n},at=()=>{const t=4096;return(()=>{let e=0,n=0,o=0,s=0,a=0,r=0,i=0;const c=nt.createScriptProcessor(t,1,1);return c.onaudioprocess=c=>{const u=c.outputBuffer.getChannelData(0);Array.from(Array(t)).forEach((t,c)=>{const l=2*Math.random()-1;e=.99886*e+.0555179*l,n=.99332*n+.0750759*l,o=.969*o+.153852*l,s=.8665*s+.3104856*l,a=.55*a+.5329522*l,r=-.7616*r-.016898*l,u[c]=e+n+o+s+a+r+i+.5362*l,u[c]*=.11,i=.115926*l})},c})()},rt=()=>{const t=4096;return(()=>{let e=0;const n=nt.createScriptProcessor(t,1,1);return n.onaudioprocess=n=>{const o=n.outputBuffer.getChannelData(0);Array.from(Array(t)).forEach((t,n)=>{const s=2*Math.random()-1;o[n]=(e+.02*s)/1.02,e=o[n],o[n]*=3.5})},n})()};var it={install:t=>{t.directive("noise",(t,{value:e})=>{let n=st();switch(e){case"pink":n=at();break;case"brown":n=rt();break;default:}n.connect(nt.destination),nt.suspend()}),t.noise={start:()=>{nt.resume()},pause:()=>{nt.suspend()},stop:()=>{nt.suspend()}}}};let ct;const ut="/sleepy-cat-118974.mp3";ct=new Audio(ut),ct.muted=!0;var lt={install:t=>{t.directive("lofi",(t,{value:e})=>{e&&(ct=new Audio(e),ct.currentTime=0,ct.pause(),ct.muted=!0)}),t.lofi={start:()=>{ct.muted=!1,ct.play()},pause:()=>{ct.muted=!0,ct.pause()},stop:()=>{ct.currentTime=0,ct.muted=!0,ct.pause()}}}};Z["c"].add(tt["b"],tt["a"],tt["c"],tt["e"],tt["d"]),o["a"].component("font-awesome-icon",et["a"]),o["a"].config.productionTip=!1,o["a"].filter("lowercase",t=>t.toLowerCase()),o["a"].filter("uppercase",t=>t.toUpperCase()),o["a"].filter("addSpace",t=>t+" "),o["a"].filter("leftPad",t=>t<10?"0"+t:t),o["a"].use(it),o["a"].use(lt),new o["a"]({render:t=>t(Y)}).$mount("#app")},8002:function(t,e,n){"use strict";n("4a99")},"9cb0":function(t,e,n){},c78e:function(t,e,n){"use strict";n("2f4e")},ea49:function(t,e,n){"use strict";n("9cb0")}});
//# sourceMappingURL=app.1ad9767b.js.map