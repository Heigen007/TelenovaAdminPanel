(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-222ae73a"],{"06d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2b0e"),r=i["default"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},1079:function(t,e,n){"use strict";var i=n("541c");e["a"]=i["a"]},"11de":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var i=n("2b0e"),r=n("b42e"),o=n("c637"),a=n("a723"),c=n("cf75"),s=Object(c["d"])({id:Object(c["c"])(a["u"]),inline:Object(c["c"])(a["g"],!1),novalidate:Object(c["c"])(a["g"],!1),validated:Object(c["c"])(a["g"],!1)},o["J"]),u=i["default"].extend({name:o["J"],functional:!0,props:s,render:function(t,e){var n=e.props,i=e.data,o=e.children;return t("form",Object(r["a"])(i,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),o)}})},"18c6":function(t,e,n){"use strict";n("e067")},"1c9e":function(t,e,n){t.exports=n.p+"img/homepod.e3172634.png"},"1f1e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2b0e"),r=i["default"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},"2f8c":function(t,e,n){t.exports=n.p+"img/iphone-x.ff1daa9e.png"},"308e":function(t,e,n){t.exports=n.p+"img/macbook-pro.fbbe4299.png"},"3f7e":function(t,e,n){t.exports=n.p+"img/magic-mouse.3cf7a781.png"},"40fc":function(t,e,n){"use strict";n.d(e,"b",(function(){return C})),n.d(e,"a",(function(){return w}));var i=n("2b0e"),r=n("0056"),o=n("a723"),a=n("906c"),c=n("6b77"),s=n("a8c8"),u=n("58f2"),l=n("3a58"),d=n("d82f"),p=n("cf75"),f=n("fa73");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(u["a"])("value",{type:o["p"],defaultValue:"",event:r["bb"]}),g=v.mixin,O=v.props,j=v.prop,y=v.event,C=Object(p["d"])(Object(d["m"])(m(m({},O),{},{ariaInvalid:Object(p["c"])(o["j"],!1),autocomplete:Object(p["c"])(o["u"]),debounce:Object(p["c"])(o["p"],0),formatter:Object(p["c"])(o["l"]),lazy:Object(p["c"])(o["g"],!1),lazyFormatter:Object(p["c"])(o["g"],!1),number:Object(p["c"])(o["g"],!1),placeholder:Object(p["c"])(o["u"]),plaintext:Object(p["c"])(o["g"],!1),readonly:Object(p["c"])(o["g"],!1),trim:Object(p["c"])(o["g"],!1)})),"formTextControls"),w=i["default"].extend({mixins:[g],props:C,data:function(){var t=this[j];return{localValue:Object(f["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,n="range"===e,i="color"===e;return[{"custom-range":n,"form-control-plaintext":t&&!n&&!i,"form-control":i||!t&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(s["d"])(Object(l["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(p["b"])(this.formatter)}},watch:b({},j,(function(t){var e=Object(f["g"])(t),n=this.modifyValue(t);e===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(r["eb"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(f["g"])(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(f["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l["b"])(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.lazy;if(!i||n){this.clearDebounce();var r=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(y,t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},o=this.computedDebounce;o>0&&!i&&!n?this.$_inputDebounceTimer=setTimeout(r,o):r()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(c["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(r["y"],n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(c["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(r["d"],n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(f["g"])(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(r["b"],t)},focus:function(){this.disabled||Object(a["d"])(this.$el)},blur:function(){this.disabled||Object(a["c"])(this.$el)}}})},4797:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var i=n("2b0e"),r=n("c637"),o=n("a723"),a=n("2326"),c=n("906c"),s=n("6b77"),u=n("d82f"),l=n("cf75"),d=n("dde7"),p=n("06d9"),f=n("ad47"),h=n("d520"),m=n("40fc"),b=n("1f1e"),v=n("90ef"),g=n("bc9a");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],w=Object(l["d"])(Object(u["m"])(j(j(j(j(j(j({},v["b"]),d["b"]),f["b"]),h["b"]),m["b"]),{},{list:Object(l["c"])(o["u"]),max:Object(l["c"])(o["p"]),min:Object(l["c"])(o["p"]),noWheel:Object(l["c"])(o["g"],!1),step:Object(l["c"])(o["p"]),type:Object(l["c"])(o["u"],"text",(function(t){return Object(a["a"])(C,t)}))})),r["R"]),x=i["default"].extend({name:r["R"],mixins:[g["a"],v["a"],d["a"],f["a"],h["a"],m["a"],p["a"],b["a"]],props:w,computed:{localType:function(){var t=this.type;return Object(a["a"])(C,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,n=this.form,i=this.disabled,r=this.placeholder,o=this.required,a=this.min,c=this.max,s=this.step;return{id:this.safeId(),name:e,form:n,type:t,disabled:i,placeholder:r,required:o,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:a,max:c,step:s,list:"password"!==t?this.list:null,"aria-required":o?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return j(j({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(s["c"])(t,e,"focus",this.onWheelFocus),Object(s["c"])(t,e,"blur",this.onWheelBlur),t||Object(s["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(s["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(s["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(s["f"])(t,{propagation:!1}),Object(c["c"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},4916:function(t,e,n){"use strict";n("cea4")},"5fda":function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var i,r=n("2b0e"),o=n("2f79"),a=n("c637"),c=n("0056"),s=n("a723"),u=n("9b76"),l=n("906c"),d=n("7b1e"),p=n("58f2"),f=n("3a58"),h=n("d82f"),m=n("cf75"),b=n("8c18"),v=n("f29e"),g=n("ce2a");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=Object(p["a"])("show",{type:s["i"],defaultValue:!1}),w=C.mixin,x=C.props,P=C.prop,k=C.event,D=function(t){return""===t||Object(d["b"])(t)?0:(t=Object(f["c"])(t,0),t>0?t:0)},I=function(t){return""===t||!0===t||!(Object(f["c"])(t,0)<1)&&!!t},_=Object(m["d"])(Object(h["m"])(j(j({},x),{},{dismissLabel:Object(m["c"])(s["u"],"Close"),dismissible:Object(m["c"])(s["g"],!1),fade:Object(m["c"])(s["g"],!1),variant:Object(m["c"])(s["u"],"info")})),a["a"]),S=r["default"].extend({name:a["a"],mixins:[w,b["a"]],props:_,data:function(){return{countDown:0,localShow:I(this[P])}},watch:(i={},y(i,P,(function(t){this.countDown=D(t),this.localShow=I(t)})),y(i,"countDown",(function(t){var e=this;this.clearCountDownInterval();var n=this[P];Object(d["i"])(n)&&(this.$emit(c["n"],t),n!==t&&this.$emit(k,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){Object(l["B"])((function(){e.localShow=!1}))})))})),y(i,"localShow",(function(t){var e=this[P];t||!this.dismissible&&!Object(d["i"])(e)||this.$emit(c["m"]),Object(d["i"])(e)||e===t||this.$emit(k,t)})),i),created:function(){this.$_filterTimer=null;var t=this[P];this.countDown=D(t),this.localShow=I(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var n=this.dismissible,i=this.variant,r=t();n&&(r=t(v["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(u["k"])])),e=t("div",{staticClass:"alert",class:y({"alert-dismissible":n},"alert-".concat(i),i),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[o["a"]]},[r,this.normalizeSlot()])}return t(g["a"],{props:{noFade:!this.fade}},[e])}})},"9e14":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var i=n("2b0e"),r=n("c637"),o=n("3c21"),a=n("d82f"),c=n("cf75"),s=n("dde7"),u=n("d3cb"),l=n("ad47"),d=n("d520"),p=n("90ef");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=Object(c["d"])(Object(a["m"])(h(h(h(h(h({},p["b"]),s["b"]),u["c"]),l["b"]),d["b"])),r["T"]),v=i["default"].extend({name:r["T"],mixins:[p["a"],u["b"],s["a"],l["a"],d["a"]],inject:{bvGroup:{from:"bvRadioGroup",default:!1}},props:b,watch:{computedLocalChecked:function(t,e){Object(o["a"])(t,e)||this.$emit(u["a"],t)}}})},a923:function(t,e,n){t.exports=n.p+"img/apple-watch.c51a5f8c.png"},a953:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var i=n("2b0e"),r=n("a723"),o=n("cf75"),a=Object(o["d"])({plain:Object(o["c"])(r["g"],!1)},"formControls"),c=i["default"].extend({props:a,computed:{custom:function(){return!this.plain}}})},ad47:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var i=n("2b0e"),r=n("a723"),o=n("cf75"),a=Object(o["d"])({size:Object(o["c"])(r["u"])},"formControls"),c=i["default"].extend({props:a,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},ca6e:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s}));var i=n("5530");n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n("a18c");var o=n("a6f4"),a=function(t){return"object"===r(t)&&null!==t},c=function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},s=function(){var t=Object(o["getCurrentInstance"])().proxy,e=Object(o["reactive"])({route:t.$route});return Object(o["watch"])((function(){return t.$route}),(function(t){e.route=t})),Object(i["a"])(Object(i["a"])({},Object(o["toRefs"])(e)),{},{router:t.$router})}},cbad:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-ecommerce-details"},[n("b-alert",{attrs:{variant:"danger",show:void 0===t.product}},[n("h4",{staticClass:"alert-heading"},[t._v(" Error fetching product data ")]),n("div",{staticClass:"alert-body"},[t._v(" No item found with this item slug. Check "),n("b-link",{staticClass:"alert-link",attrs:{to:{name:"apps-e-commerce-shop"}}},[t._v(" Shop ")]),t._v(" for other items. ")],1)]),t.product?n("b-card",{attrs:{"no-body":""}},[n("b-card-body",[n("b-row",{staticClass:"my-2"},[n("b-col",{staticClass:"d-flex align-items-center justify-content-center mb-2 mb-md-0",attrs:{cols:"12",md:"5"}},[n("div",{staticClass:"d-flex align-items-center justify-content-center"},[n("b-img",{staticClass:"product-img",attrs:{src:t.product.offerData.images[0],alt:"Image of "+t.product.offerData.kaspi_name,fluid:""}})],1)]),n("b-col",{attrs:{cols:"12",md:"7"}},[n("h4",[t._v(t._s(t.product.offerData.kaspi_name))]),n("b-card-text",{staticClass:"item-company mb-0"},[n("span",[t._v("by")]),n("b-link",{staticClass:"company-name"},[t._v(" "+t._s(t.product.offerData.brand)+" ")])],1),n("b-card-text",{staticClass:"mt-1"},[t._v(" Id - "),n("span",{staticClass:"text-success"},[t._v(t._s(t.product.offerData.kaspi_id))])]),n("div",{staticClass:"ecommerce-details-price d-flex flex-wrap mt-1"},[n("h4",{staticClass:"item-price mr-1"},[t._v(" "+t._s(t.product.offerData.price)+" тг. ")]),n("ul",{staticClass:"unstyled-list list-inline pl-1 border-left"},t._l(5,(function(e){return n("li",{key:e,staticClass:"ratings-list-item mr-25"},[n("feather-icon",{class:[{"fill-current":e<=t.product.offerData.kaspi_rating},e<=t.product.offerData.kaspi_rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"18"}})],1)})),0)]),n("b-card-text",[t._v("Available - "),n("span",{staticClass:"text-success"},[t._v("In stock")])]),n("ul",{staticClass:"product-features list-unstyled"}),n("hr"),n("div",{staticClass:"d-flex flex-column flex-sm-row pt-1"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0",attrs:{variant:"primary"},on:{click:function(e){t.AddingRelatedProducts=!t.AddingRelatedProducts}}},[n("feather-icon",{staticClass:"mr-50",attrs:{icon:"PlusCircleIcon"}}),n("span",[t._v("Add Related Products")])],1)],1)],1)],1),t.AddingRelatedProducts?n("b-card-code",{attrs:{title:"Adding Related Products"}},[n("div",[n("b-form",{ref:"form",staticClass:"repeater-form",on:{submit:function(e){return e.preventDefault(),t.repeateAgain.apply(null,arguments)}}},t._l(t.items,(function(e,i){return n("b-row",{key:e.id,ref:"row",refInFor:!0,attrs:{id:e.id}},[n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Product Id","label-for":String(i)}},[n("b-form-input",{staticClass:"AddedRelatedProducts",attrs:{id:String(i),type:"text",placeholder:"Product Id"}})],1)],1),n("b-col",{staticClass:"mb-50",attrs:{lg:"2",md:"3"}},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-0 mt-md-2",attrs:{variant:"outline-danger"},on:{click:function(e){return t.removeItem(i)}}},[n("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}}),n("span",[t._v("Delete")])],1)],1),n("b-col",{attrs:{cols:"12"}},[n("hr")])],1)})),1)],1),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:t.repeateAgain}},[n("feather-icon",{staticClass:"mr-25",attrs:{icon:"PlusIcon"}}),n("span",[t._v("Add New")])],1),n("br"),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2",attrs:{variant:"primary"},on:{click:t.AddRelatedProducts}},[n("feather-icon",{staticClass:"mr-25",attrs:{icon:"CheckIcon"}}),n("span",[t._v("Save")])],1)],1):t._e()],1),n("e-commerce-product-details-item-features"),t.product.similarProducts?n("e-commerce-product-details-related-products",{attrs:{info:t.product.similarProducts}}):t._e()],1):t._e()],1)},r=[],o=(n("a434"),n("159b"),n("e009")),a=n("1079"),c=(n("ca6e"),n("4360"),n("205f")),s=n("6197"),u=n("a15b"),l=n("b28b"),d=n("4918"),p=n("d6e4"),f=n("aa59"),h=n("1947"),m=n("5fda"),b=n("11de"),v=n("8226"),g=n("4797"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-features"},[n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[n("div",{staticClass:"w-75 mx-auto"},[n("feather-icon",{attrs:{icon:"AwardIcon",size:"35"}}),n("h4",{staticClass:"mt-2 mb-1"},[t._v(" 100% Original ")]),n("p",{staticClass:"card-text"},[t._v(" Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah. ")])],1)]),n("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[n("div",{staticClass:"w-75 mx-auto"},[n("feather-icon",{attrs:{icon:"ClockIcon",size:"35"}}),n("h4",{staticClass:"mt-2 mb-1"},[t._v(" 10 Day Replacement ")]),n("p",{staticClass:"card-text"},[t._v(" Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake. ")])],1)]),n("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[n("div",{staticClass:"w-75 mx-auto"},[n("feather-icon",{attrs:{icon:"ShieldIcon",size:"35"}}),n("h4",{staticClass:"mt-2 mb-1"},[t._v(" 1 Year Warranty ")]),n("p",{staticClass:"card-text"},[t._v(" Cotton candy gingerbread cake I love sugar plum I love sweet croissant. ")])],1)])])])},j=[],y={},C=y,w=n("2877"),x=Object(w["a"])(C,O,j,!1,null,null,null),P=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-body",[n("div",{staticClass:"mt-4 mb-2 text-center"},[n("h4",[t._v("Related Products")]),n("b-card-text",[t._v("People also search for this items")])],1),n("swiper",{staticClass:"swiper-responsive-breakpoints px-4 py-2",attrs:{options:t.swiperOptions}},[t._l(t.info,(function(e,i){return e?n("swiper-slide",{key:i},[n("b-link",[n("div",{staticClass:"item-heading"},[n("h5",{staticClass:"text-truncate mb-0"},[t._v(" "+t._s(e.offerData.kaspi_name)+" ")]),n("small",{staticClass:"text-body"},[t._v("by "+t._s(e.offerData.brand))])]),n("div",{staticClass:"img-container w-50 mx-auto py-75"},[n("b-link",{attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:e.offerData.kaspi_id}}}},[n("b-img",{attrs:{src:e.offerData.images[0],fluid:""}})],1)],1),n("div",{staticClass:"item-meta"},[n("ul",{staticClass:"unstyled-list list-inline mb-25"},t._l(5,(function(t){return n("li",{key:t,staticClass:"ratings-list-item"},[n("feather-icon",{staticClass:"mr-25",class:[{"fill-current":t<=e.offerData.kaspi_rating},t<=e.offerData.kaspi_rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"18"}})],1)})),0),n("p",{staticClass:"card-text text-primary mb-0"},[t._v(" "+t._s(e.offerData.price)+" тг. ")])])])],1):t._e()})),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"})],2)],1)},D=[],I=n("7212"),_={components:{BCardBody:s["a"],BCardText:p["a"],BImg:d["a"],BLink:f["a"],Swiper:I["Swiper"],SwiperSlide:I["SwiperSlide"]},props:{info:Array},setup:function(){var t={slidesPerView:5,spaceBetween:55,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1600:{slidesPerView:4,spaceBetween:55},1300:{slidesPerView:3,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},320:{slidesPerView:1,spaceBetween:55}}},e=[{name:"Apple Watch Series 6",brand:"Apple",price:399.98,rating:4,image:n("a923")},{name:"Apple MacBook Pro - Silver",brand:"Apple",price:2449.49,rating:2,image:n("308e")},{name:"Apple HomePod (Space Grey)",brand:"Apple",price:229.29,rating:3,image:n("1c9e")},{name:"Magic Mouse 2 - Black",brand:"Apple",price:90.98,rating:5,image:n("3f7e")},{name:"iPhone 12 Pro",brand:"Apple",price:1559.99,rating:4,image:n("2f8c")}];return{swiperOptions:t,relatedProducts:e}}},S=_,$=(n("4916"),Object(w["a"])(S,k,D,!1,null,null,null)),B=$.exports,V=(n("e316"),'\n<template>\n  <div>\n     <div>\n      <b-form\n        ref="form"\n        :style="{height: trHeight}"\n        class="repeater-form"\n        @submit.prevent="repeateAgain"\n      >\n\n        \x3c!-- Row Loop --\x3e\n        <b-row\n          v-for="(item, index) in items"\n          :id="item.id"\n          :key="item.id"\n          ref="row"\n        >\n\n          \x3c!-- Item Name --\x3e\n          <b-col md="4">\n            <b-form-group\n              label="Item Name"\n              label-for="item-name"\n            >\n              <b-form-input\n                id="item-name"\n                type="text"\n                placeholder="Vuexy Admin Template"\n              />\n            </b-form-group>\n          </b-col>\n\n          \x3c!-- Cost --\x3e\n          <b-col md="2">\n            <b-form-group\n              label="Cost"\n              label-for="cost"\n            >\n              <b-form-input\n                id="cost"\n                type="number"\n                placeholder="32"\n              />\n            </b-form-group>\n          </b-col>\n\n          \x3c!-- Quantity --\x3e\n          <b-col md="2">\n            <b-form-group\n              label="Quantity"\n              label-for="quantity"\n            >\n              <b-form-input\n                id="quantity"\n                type="number"\n                placeholder="1"\n              />\n            </b-form-group>\n          </b-col>\n\n          \x3c!-- Profession --\x3e\n          <b-col\n            lg="2"\n            md="1"\n          >\n            <b-form-group\n              label="Price"\n              label-for="price"\n            >\n              <b-form-input\n                id="pzrice"\n                value="32$"\n                plaintext\n              />\n            </b-form-group>\n          </b-col>\n\n          \x3c!-- Remove Button --\x3e\n          <b-col\n            lg="2"\n            md="3"\n            class="mb-50"\n          >\n            <b-button\n              v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n              variant="outline-danger"\n              class="mt-0 mt-md-2"\n              @click="removeItem(index)"\n            >\n              <feather-icon\n                icon="XIcon"\n                class="mr-25"\n              />\n              <span>Delete</span>\n            </b-button>\n          </b-col>\n          <b-col cols="12">\n            <hr>\n          </b-col>\n        </b-row>\n\n      </b-form>\n    </div>\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      variant="primary"\n      @click="repeateAgain"\n    >\n      <feather-icon\n        icon="PlusIcon"\n        class="mr-25"\n      />\n      <span>Add New</span>\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  BForm, BFormGroup, BFormInput, BRow, BCol, BButton,\n} from \'bootstrap-vue\'\nimport { heightTransition } from \'@core/mixins/ui/transition\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n    BFormGroup,\n    BFormInput,\n  },\n  directives: {\n    Ripple,\n  },\n  mixins: [heightTransition],\n  data() {\n    return {\n      items: [{\n        id: 1,\n        selected: \'male\',\n        selected1: \'designer\',\n        prevHeight: 0,\n      }],\n      nextTodoId: 2,\n    }\n  },\n  mounted() {\n    this.initTrHeight()\n  },\n  created() {\n    window.addEventListener(\'resize\', this.initTrHeight)\n  },\n  destroyed() {\n    window.removeEventListener(\'resize\', this.initTrHeight)\n  },\n  methods: {\n    repeateAgain() {\n      this.items.push({\n        id: this.nextTodoId += this.nextTodoId,\n      })\n\n      this.$nextTick(() => {\n        this.trAddHeight(this.$refs.row[0].offsetHeight)\n      })\n    },\n    removeItem(index) {\n      this.items.splice(index, 1)\n      this.trTrimHeight(this.$refs.row[0].offsetHeight)\n    },\n    initTrHeight() {\n      this.trSetHeight(null)\n      this.$nextTick(() => {\n        this.trSetHeight(this.$refs.form.scrollHeight)\n      })\n    },\n  },\n}\n<\/script>\n\n<style lang="scss" scoped>\n.repeater-form {\n  overflow: hidden;\n  transition: .35s height;\n}\n</style>\n'),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{lg:"6"}},[n("v-select",{attrs:{dir:"ltr",multiple:"",label:"title",options:t.option},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},T=[],G=n("9e14"),R=n("4a7a"),F=n.n(R),W={components:{BRow:u["a"],BCol:l["a"],BFormRadio:G["a"],BCardText:p["a"],BCard:c["a"],BCardCode:a["a"],vSelect:F.a},data:function(){return{codeVueMultiBasic:void 0,codeVueMultiIcon:void 0,codeMultiPush:void 0,codeVueSelectionLimit:void 0,codeVueDir:void 0,dir:"ltr",selected:[{title:"Phones"},{title:"Electro"}],options:[],option:[{title:"Electro"},{title:"Notebooks"},{title:"Phones"},{title:"HeadPhones"},{title:"Glasses"},{title:"TV`s"},{title:"Pens"},{title:"Sunglasses"}]}}},E=W,z=Object(w["a"])(E,A,T,!1,null,null,null),L=z.exports,M=n("bc3a"),N=n.n(M),H={directives:{Ripple:o["a"]},components:{VueSelectMultiple:L,BCardCode:a["a"],BCard:c["a"],BCardBody:s["a"],BRow:u["a"],BCol:l["a"],BImg:d["a"],BCardText:p["a"],BLink:f["a"],BButton:h["a"],BAlert:m["a"],BForm:b["a"],BFormGroup:v["a"],BFormInput:g["a"],ECommerceProductDetailsItemFeatures:P,ECommerceProductDetailsRelatedProducts:B},data:function(){return{items:[],nextTodoId:2,codeBasic:V,AddingRelatedProducts:!1,product:null}},watch:{$route:function(t){var e=this;N.a.get("https://textforeva.ru/storage/kaspi_id/".concat(this.$route.params.slug)).then((function(t){console.log(t),e.product=t.data})).catch((function(t){console.log(t)}))}},created:function(){var t=this;N.a.get("https://textforeva.ru/storage/kaspi_id/".concat(this.$route.params.slug)).then((function(e){console.log(e),t.product=e.data})).catch((function(t){console.log(t)}))},methods:{repeateAgain:function(){this.items.push({id:this.nextTodoId+=this.nextTodoId})},removeItem:function(t){this.items.splice(t,1)},AddRelatedProducts:function(){var t=document.querySelectorAll(".AddedRelatedProducts"),e=[];t.forEach((function(t){e.push(t.value)})),console.log(e),N.a.post("https://textforeva.ru/storage/addSimilarGoods",{kaspi_id:this.$route.params.slug,similarProductsId:e}).then((function(t){console.log(t),self.product=t.data,location.reload()})).catch((function(t){console.log(t)}))}}},q=H,J=(n("18c6"),Object(w["a"])(q,i,r,!1,null,null,null));e["default"]=J.exports},cea4:function(t,e,n){},d3cb:function(t,e,n){"use strict";n.d(e,"a",(function(){return I})),n.d(e,"c",(function(){return _})),n.d(e,"b",(function(){return S}));var i,r,o=n("2b0e"),a=n("a723"),c=n("0056"),s=n("906c"),u=n("7b1e"),l=n("3c21"),d=n("58f2"),p=n("d82f"),f=n("cf75"),h=n("493b"),m=n("dde7"),b=n("a953"),v=n("ad47"),g=n("d520"),O=n("90ef"),j=n("8c18");function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=Object(d["a"])("checked",{defaultValue:null}),P=x.mixin,k=x.props,D=x.prop,I=x.event,_=Object(f["d"])(Object(p["m"])(C(C(C(C(C(C(C({},O["b"]),k),m["b"]),v["b"]),g["b"]),b["b"]),{},{ariaLabel:Object(f["c"])(a["u"]),ariaLabelledby:Object(f["c"])(a["u"]),button:Object(f["c"])(a["g"],!1),buttonVariant:Object(f["c"])(a["u"]),inline:Object(f["c"])(a["g"],!1),value:Object(f["c"])(a["a"])})),"formRadioCheckControls"),S=o["default"].extend({mixins:[h["a"],O["a"],P,j["a"],m["a"],v["a"],g["a"],b["a"]],inheritAttrs:!1,props:_,data:function(){return{localChecked:this.isGroup?this.bvGroup[D]:this[D],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(l["a"])(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(u["b"])(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},w(t,"btn-".concat(e),e),w(t,"disabled",this.isDisabled),w(t,"active",this.isChecked),w(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return C(C({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(i={},w(i,D,(function(){this["".concat(D,"Watcher")].apply(this,arguments)})),w(i,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),i),methods:(r={},w(r,"".concat(D,"Watcher"),(function(t){Object(l["a"])(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),w(r,"computedLocalCheckedWatcher",(function(t,e){Object(l["a"])(t,e)||this.$emit(I,t)})),w(r,"handleChange",(function(t){var e=this,n=t.target.checked,i=this.value,r=n?i:null;this.computedLocalChecked=i,this.$nextTick((function(){e.$emit(c["d"],r),e.isGroup&&e.bvGroup.$emit(c["d"],r)}))})),w(r,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),w(r,"focus",(function(){this.isDisabled||Object(s["d"])(this.$refs.input)})),w(r,"blur",(function(){this.isDisabled||Object(s["c"])(this.$refs.input)})),r),render:function(t){var e=this.isRadio,n=this.isBtnMode,i=this.isPlain,r=this.isCustom,o=this.isInline,a=this.isSwitch,c=this.computedSize,s=this.bvAttrs,u=this.normalizeSlot(),l=t("input",{class:[{"form-check-input":i,"custom-control-input":r,"position-static":i&&!u},n?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:C({change:this.handleChange},n?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(n){var d=t("label",{class:this.buttonClasses},[l,u]);return this.isGroup||(d=t("div",{class:["btn-group-toggle","d-inline-block"]},[d])),d}var p=t();return i&&!u||(p=t("label",{class:{"form-check-label":i,"custom-control-label":r},attrs:{for:this.safeId()}},u)),t("div",{class:[w({"form-check":i,"form-check-inline":i&&o,"custom-control":r,"custom-control-inline":r&&o,"custom-checkbox":r&&!e&&!a,"custom-switch":a,"custom-radio":r&&e},"b-custom-control-".concat(c),c&&!n),s.class],style:s.style},[l,p])}})},dde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var i=n("2b0e"),r=n("a723"),o=n("906c"),a=n("cf75"),c="input, textarea, select",s=Object(a["d"])({autofocus:Object(a["c"])(r["g"],!1),disabled:Object(a["c"])(r["g"],!1),form:Object(a["c"])(r["u"]),id:Object(a["c"])(r["u"]),name:Object(a["c"])(r["u"]),required:Object(a["c"])(r["g"],!1)},"formControls"),u=i["default"].extend({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(o["B"])((function(){var e=t.$el;t.autofocus&&Object(o["u"])(e)&&(Object(o["v"])(e,c)||(e=Object(o["C"])(c,e)),Object(o["d"])(e))}))}))}}})},e067:function(t,e,n){},e316:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("4360"),r=n("ca6e"),o=function(){var t=function(t){return i["a"].dispatch("app-ecommerce/addProductInWishlist",{productId:t})},e=function(t){return i["a"].dispatch("app-ecommerce/removeProductFromWishlist",{productId:t})},n=function(t){return i["a"].dispatch("app-ecommerce/addProductInCart",{productId:t})},r=function(t){return i["a"].dispatch("app-ecommerce/removeProductFromCart",{productId:t})};return{addProductInWishlist:t,removeProductFromWishlist:e,addProductInCart:n,removeProductFromCart:r}},a=function(){var t=Object(r["c"])(),e=t.router,n=function(t){var e=o(),n=e.addProductInWishlist,i=e.removeProductFromWishlist;t.isInWishlist?i(t.id).then((function(){t.isInWishlist=!1})):n(t.id).then((function(){t.isInWishlist=!0}))},a=function(t){var n=o(),r=n.addProductInCart;t.isInCart?e.push({name:"apps-e-commerce-checkout"}):r(t.id).then((function(){t.isInCart=!0,i["a"].commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",i["a"].state["app-ecommerce"].cartItemsCount+1)}))},c=function(t,n){var r=o(),a=r.addProductInCart,c=r.removeProductFromWishlist;t.isInCart?e.push({name:"apps-e-commerce-checkout"}):a(t.id).then((function(){t.isInCart=!0,c(t.id),i["a"].commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",i["a"].state["app-ecommerce"].cartItemsCount+1)})).then((function(){t.isInWishlist=!1,n(t)}))};return{toggleProductInWishlist:n,handleCartActionClick:a,handleWishlistCartActionClick:c}}}}]);
//# sourceMappingURL=chunk-222ae73a.89f2e5c7.js.map