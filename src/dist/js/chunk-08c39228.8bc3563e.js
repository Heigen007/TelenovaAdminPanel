(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08c39228"],{"2cea":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{attrs:{variant:"primary",show:""}},[n("div",{staticClass:"alert-body"},[n("p",[n("strong",[t._v("Info: ")]),n("span",[t._v("This layout can be useful for getting started with empty content section.")])])])])],1)},o=[],r=n("5fda"),c={components:{BAlert:r["a"]}},a=c,s=n("2877"),l=Object(s["a"])(a,i,o,!1,null,null,null);e["default"]=l.exports},"5fda":function(t,e,n){"use strict";n.d(e,"a",(function(){return C}));var i,o=n("2b0e"),r=n("2f79"),c=n("c637"),a=n("0056"),s=n("a723"),l=n("9b76"),u=n("906c"),h=n("7b1e"),f=n("58f2"),b=n("3a58"),w=n("d82f"),p=n("cf75"),m=n("8c18"),d=n("f29e"),O=n("ce2a");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D=Object(f["a"])("show",{type:s["i"],defaultValue:!1}),g=D.mixin,S=D.props,$=D.prop,P=D.event,k=function(t){return""===t||Object(h["b"])(t)?0:(t=Object(b["c"])(t,0),t>0?t:0)},T=function(t){return""===t||!0===t||!(Object(b["c"])(t,0)<1)&&!!t},_=Object(p["d"])(Object(w["m"])(j(j({},S),{},{dismissLabel:Object(p["c"])(s["u"],"Close"),dismissible:Object(p["c"])(s["g"],!1),fade:Object(p["c"])(s["g"],!1),variant:Object(p["c"])(s["u"],"info")})),c["a"]),C=o["default"].extend({name:c["a"],mixins:[g,m["a"]],props:_,data:function(){return{countDown:0,localShow:T(this[$])}},watch:(i={},y(i,$,(function(t){this.countDown=k(t),this.localShow=T(t)})),y(i,"countDown",(function(t){var e=this;this.clearCountDownInterval();var n=this[$];Object(h["i"])(n)&&(this.$emit(a["n"],t),n!==t&&this.$emit(P,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){Object(u["B"])((function(){e.localShow=!1}))})))})),y(i,"localShow",(function(t){var e=this[$];t||!this.dismissible&&!Object(h["i"])(e)||this.$emit(a["m"]),Object(h["i"])(e)||e===t||this.$emit(P,t)})),i),created:function(){this.$_filterTimer=null;var t=this[$];this.countDown=k(t),this.localShow=T(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var n=this.dismissible,i=this.variant,o=t();n&&(o=t(d["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(l["k"])])),e=t("div",{staticClass:"alert",class:y({"alert-dismissible":n},"alert-".concat(i),i),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[r["a"]]},[o,this.normalizeSlot()])}return t(O["a"],{props:{noFade:!this.fade}},[e])}})}}]);
//# sourceMappingURL=chunk-08c39228.8bc3563e.js.map