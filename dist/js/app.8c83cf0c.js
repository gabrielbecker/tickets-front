(function(t){function e(e){for(var s,a,o=e[0],c=e[1],l=e[2],p=0,v=[];p<o.length;p++)a=o[p],r[a]&&v.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"footer"},[n("ul",t._l(t.errors,function(e,s){return n("li",{key:s},[t._v("\n                "+t._s(e)+"\n            ")])}),0),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.event.name,expression:"event.name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:t.event.name},on:{input:function(e){e.target.composing||t.$set(t.event,"name",e.target.value)}}}),n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.event_save(t.event)}}},[t._v("Salvar Evento")])]),n("br"),n("table",{staticClass:"table table-striped table-bordered",staticStyle:{width:"100%"}},[t._m(1),n("tbody",[t._l(t.events,function(e){return[n("tr",{key:e.id,staticClass:"accordion-toggle",attrs:{"data-toggle":"collapse","data-target":"#collapseOne"},on:{click:function(n){t.toggle(e)}}},[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.timestamp))]),n("td",[n("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(n){t.event_update(e)}}},[n("span",{staticClass:"glyphicon glyphicon-edit",attrs:{"aria-hidden":"true"}})]),n("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(n){t.event_remove(e)}}},[n("span",{staticClass:"glyphicon glyphicon-remove",attrs:{"aria-hidden":"true"}})])])]),t.opened.includes(e.id)?n("tr",{attrs:{event:e.name}},[n("td",{attrs:{colspan:"2"}},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ticket.type,expression:"ticket.type"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:t.ticket.type},on:{input:function(e){e.target.composing||t.$set(t.ticket,"type",e.target.value)}}}),n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.ticket_save(t.ticket)}}},[t._v("Salvar Ingresso")])])])]):t._e(),t._l(t.tickets,function(s){return t.opened.includes(e.id)?n("tr",[n("td",[t._v(t._s(s.type))]),n("td",[t._v(t._s(s.timestamp))]),n("td",[n("button",{staticClass:"btn btn-warning btn-xs",on:{click:function(e){t.ticket_remove(s)}}},[n("span",{staticClass:"glyphicon glyphicon-remove",attrs:{"aria-hidden":"true"}})])])]):t._e()})]})],2)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"container-fluid bg-primary text-white sticky-top"},[n("h2",{staticClass:"center"},[t._v("Tickets")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Eventos")]),n("th",[t._v("Criação")]),n("th")])])}],a=n("bc3a"),o=n.n(a);const c=o.a.create({baseURL:"http://localhost:6600/"});var l={list:()=>{return c.get("events")},save:t=>{return c.post("events/",t)},update:t=>{return c.put("events/"+t.id+"/",t)},delete:t=>{return c.delete("events/"+t.id+"/",t)}},u={retrive:t=>{return c.get("tickets/?event="+t)},save:t=>{return c.post("tickets/",t)},update:t=>{return c.put("tickets/"+t.id+"/",t)},delete:t=>{return c.delete("tickets/"+t.id+"/",t)}},p={data(){return{event:{id:"",name:""},events:[],errors:[],tickets:[],ticket:{event:"",type:""},opened:""}},mounted(){this.event_list()},methods:{event_list(){l.list().then(t=>{this.events=t.data.results})},ticket_list(t){u.retrive(t).then(t=>{this.tickets=t.data.results})},event_save(){this.event.id?l.update(this.event).then(t=>{this.event={},this.errors={},alert("Atualizado com sucesso!"),this.event_list()}).catch(t=>{this.errors=t.response.data.name}):l.save(this.event).then(t=>{this.event={},this.errors={},alert("Salvo com sucesso!"),this.event_list()}).catch(t=>{this.errors=t.response.data.name})},event_update(t){this.event=t},event_remove(t){confirm("Deseja excluir o evento?")&&l.delete(t).then(t=>{this.event_list(),this.errors={}}).catch(t=>{this.errors=t.response.data.name})},ticket_update(t){this.ticket=t},ticket_remove(t){confirm("Deseja excluir o ingresso?")&&u.delete(t).then(t=>{this.ticket_list(this.event.name),this.errors={}}).catch(t=>{this.errors=t.response.data.name})},ticket_save(){this.ticket.event=this.opened,u.save(this.ticket).then(t=>{this.ticket={},this.errors={},alert("Salvo com sucesso!"),this.ticket_list(this.event.name)}).catch(t=>{this.errors=t.response.data.name})},toggle(t){this.opened===t.id?this.opened="":this.opened=t.id,this.ticket_list(t.name)}}},v=p,d=(n("034f"),n("2877")),h=Object(d["a"])(v,r,i,!1,null,null,null);h.options.__file="App.vue";var f=h.exports;s["a"].config.productionTip=!1,new s["a"]({render:t=>t(f)}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.8c83cf0c.js.map