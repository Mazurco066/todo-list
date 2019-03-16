(function(t){function e(e){for(var s,o,i=e[0],u=e[1],c=e[2],f=0,d=[];f<i.length;f++)o=i[f],a[o]&&d.push(a[o][0]),a[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/todo-list/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"0b56":function(t,e,n){},"24f1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("My Progress")]),n("TaskProgress",{attrs:{progress:t.progress}}),n("NewTask",{on:{taskAdded:t.addTask}}),n("TaskGrid",{attrs:{tasks:t.tasks},on:{taskDeleted:t.deleteTask,taskStateChanged:t.toggleTaskState}})],1)},r=[],o=n("a745"),i=n.n(o),u=n("f499"),c=n.n(u),l=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-progress"},[n("span",{staticClass:"progress-value"},[t._v(t._s(t.progress)+"%")]),n("div",{staticClass:"progress-bar",style:{width:t.progress+"%"}})])}),f=[],d=(n("c5f6"),{props:{progress:{type:Number,default:0}}}),p=d,k=(n("7f99"),n("2877")),g=Object(k["a"])(p,l,f,!1,null,null,null),h=g.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-new"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-element",attrs:{type:"text",placeholder:"What is your task?"},domProps:{value:t.name},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("button",{staticClass:"form-element",on:{click:t.add}},[t._v("+")])])},v=[],b={data:function(){return{name:""}},methods:{add:function(){this.$emit("taskAdded",{name:this.name}),this.name=""}}},y=b,_=(n("6a6f"),Object(k["a"])(y,m,v,!1,null,null,null)),w=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-grid"},[t.tasks.length?t._l(t.tasks,function(e,s){return n("Task",{key:e.name,attrs:{task:e},on:{taskDeleted:function(e){return t.$emit("taskDeleted",s)},taskStateChanged:function(e){return t.$emit("taskStateChanged",s)}}})}):n("p",{staticClass:"no-task"},[t._v("No pending tasks :)")])],2)},O=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task",class:t.stateClass,on:{click:function(e){return t.$emit("taskStateChanged",t.task)}}},[n("span",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.$emit("taskDeleted",t.task)}}},[t._v("x")]),n("p",[t._v(t._s(t.task.name))])])},x=[],j={props:{task:{type:Object,required:!0}},computed:{stateClass:function(){return{pending:this.task.pending,done:!this.task.pending}}},methods:{}},S=j,P=(n("fcc1"),Object(k["a"])(S,T,x,!1,null,null,null)),$=P.exports,E={components:{Task:$},props:{tasks:{type:Array,required:!0}}},M=E,N=(n("6d79"),Object(k["a"])(M,C,O,!1,null,null,null)),D=N.exports,A={components:{TaskProgress:h,NewTask:w,TaskGrid:D},data:function(){return{tasks:[]}},methods:{addTask:function(t){var e=function(e){return e.name===t.name},n=0==this.tasks.filter(e).length;n&&""!=t.name&&this.tasks.push({name:t.name,pending:t.pending||!0})},deleteTask:function(t){this.tasks.splice(t,1)},toggleTaskState:function(t){this.tasks[t].pending=!this.tasks[t].pending}},computed:{progress:function(){var t=this.tasks.length,e=this.tasks.filter(function(t){return!t.pending}).length;return Math.round(e/t*100)||0}},watch:{tasks:{deep:!0,handler:function(){localStorage.setItem("tasks",c()(this.tasks))}}},created:function(){var t=localStorage.getItem("tasks"),e=JSON.parse(t);!i()(e)||(this.tasks=e)}},J=A,q=(n("034f"),Object(k["a"])(J,a,r,!1,null,null,null)),G=q.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(G)}}).$mount("#app")},"64a9":function(t,e,n){},"6a6f":function(t,e,n){"use strict";var s=n("0b56"),a=n.n(s);a.a},"6d79":function(t,e,n){"use strict";var s=n("7f5d"),a=n.n(s);a.a},"7f5d":function(t,e,n){},"7f99":function(t,e,n){"use strict";var s=n("24f1"),a=n.n(s);a.a},f182:function(t,e,n){},fcc1:function(t,e,n){"use strict";var s=n("f182"),a=n.n(s);a.a}});
//# sourceMappingURL=app.01a62ab4.js.map