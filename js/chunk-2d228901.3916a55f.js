(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e._f("emptyImageFilter")(e.user.image),width:"200",height:"200"}}),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"Submit...":"Submit")+" ")]),r("button",{staticClass:"btn btn-danger",on:{click:e.goBack}},[e._v("Back")])])])},s=[],n=r("5530"),i=r("1da1"),c=(r("96cf"),r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("b0c0"),r("2708")),u=r("2f62"),o=r("2fa3"),m=r("4cce"),l={name:"UserEdit",mixins:[c["a"]],created:function(){this.setUser(this.currentUser)},data:function(){return{user:{name:"",image:""},isProcessing:!1}},methods:{setUser:function(e){var t=this.$route.params.id;t!==e.id&&this.$router.push({name:"not-found"}),this.user=e},handleFileChange:function(e){var t=e.target.files;if(!t.length)return this.user.image="";var r=window.URL.createObjectURL(t[0]);this.user.image=r},handleSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,s,n,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.user.name){r.next=3;break}return o["a"].fire({icon:"info",title:"尚未填寫姓名！"}),r.abrupt("return");case 3:return r.prev=3,t.isProcessing=!0,a=t.currentUser.id,s=e.target,n=new FormData(s),r.next=10,m["a"].update(a,n);case 10:if(i=r.sent,c=i.data,console.log(c),"success"===c.status){r.next=15;break}throw new Error(c.message);case 15:o["a"].fire({icon:"success",title:"更新資料成功！"}),t.$router.push("/users/".concat(a)),r.next=23;break;case 19:r.prev=19,r.t0=r["catch"](3),t.isProcessing=!1,o["a"].fire({icon:"error",title:r.t0});case 23:case"end":return r.stop()}}),r,null,[[3,19]])})))()},goBack:function(){var e=this.currentUser.id;this.$router.push("/users/".concat(e))}},computed:Object(n["a"])({},Object(u["b"])(["currentUser"])),watch:{currentUser:function(e){this.setUser(e)}}},d=l,f=r("2877"),g=Object(f["a"])(d,a,s,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d228901.3916a55f.js.map