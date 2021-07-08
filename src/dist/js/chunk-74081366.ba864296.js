(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74081366"],{1079:function(t,e,r){"use strict";var n=r("541c");e["a"]=n["a"]},"12aa":function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r("2b0e"),o=r("b42e"),i=r("c637"),a=r("a723"),p=r("d82f"),u=r("cf75"),c=r("1947");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=Object(u["d"])(Object(p["m"])(s(s({},Object(p["k"])(c["b"],["size"])),{},{ariaRole:Object(u["c"])(a["u"],"group"),size:Object(u["c"])(a["u"]),tag:Object(u["c"])(a["u"],"div"),vertical:Object(u["c"])(a["g"],!1)})),i["k"]),v=n["default"].extend({name:i["k"],functional:!0,props:l,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.tag,Object(o["a"])(n,{class:d({"btn-group":!r.vertical,"btn-group-vertical":r.vertical},"btn-group-".concat(r.size),r.size),attrs:{role:r.ariaRole}}),i)}})},5431:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("button-group-basic"),r("button-group-size"),r("button-group-dropdown-support")],1)],1)},o=[],i=r("a15b"),a=r("b28b"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Basic"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Group a series of buttons together on a single line with ")]),r("code",[t._v("<b-button-group>")]),r("span",[t._v(".")])]),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1)},u=[],c=r("12aa"),b=r("1947"),s=r("d6e4"),d=r("1079"),l=r("e009"),v='\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      First\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Second\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Third\n    </b-button>\n  </b-button-group>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',m='\n<template>\n  <div>\n    <div>\n      \x3c!-- large --\x3e\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n    <div>\n\n      \x3c!-- default --\x3e\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n\n    <div>\n\n      \x3c!-- size --\x3e\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',f='\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Button\n    </b-button>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      right\n      variant="outline-primary"\n      text="Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      right\n      split\n      text="Split Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n  </b-button-group>\n</template>\n\n<script>\nimport {\n  BButtonGroup, BButton, BDropdown, BDropdownItem, BDropdownDivider, \n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BDropdown,\n    BDropdownItem,\n    BButton,\n    BDropdownDivider,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',g={components:{BButtonGroup:c["a"],BButton:b["a"],BCardText:s["a"],BCardCode:d["a"]},directives:{Ripple:l["a"]},data:function(){return{codeBasic:v}}},O=g,w=r("2877"),j=Object(w["a"])(O,p,u,!1,null,null,null),y=j.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSize)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Set the size prop to ")]),r("code",[t._v("lg")]),r("span",[t._v(" or ")]),r("code",[t._v("sm")]),r("span",[t._v(" to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons.")])]),r("div",[r("b-button-group",{attrs:{size:"lg"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1),r("div",[r("b-button-group",{staticClass:"my-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1),r("div",[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1)],1)},h=[],_={components:{BButtonGroup:c["a"],BButton:b["a"],BCardText:s["a"],BCardCode:d["a"]},directives:{Ripple:l["a"]},data:function(){return{codeSize:m}}},x=_,D=Object(w["a"])(x,B,h,!1,null,null,null),P=D.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{staticClass:"mb-0",attrs:{title:"Dropdown menu support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDropdown)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Add ")]),r("code",[t._v("<b-dropdown>")]),r("span",[t._v(" menus directly inside your ")]),r("code",[t._v("<b-button-group>")]),r("span",[t._v(". Note that split dropdown menus are not supported when prop ")]),r("code",[t._v("vertical")]),r("span",[t._v(" is set.")])]),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Button ")]),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",variant:"outline-primary",text:"Menu"}},[r("b-dropdown-item",[t._v("Item 1")]),r("b-dropdown-item",[t._v("Item 2")]),r("b-dropdown-divider"),r("b-dropdown-item",[t._v("Item 3")])],1),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary",right:"",split:"",text:"Split Menu"}},[r("b-dropdown-item",[t._v("Item 1")]),r("b-dropdown-item",[t._v("Item 2")]),r("b-dropdown-divider"),r("b-dropdown-item",[t._v("Item 3")])],1)],1)],1)},z=[],N=r("dd9a"),I=r("9eaa"),C=r("f47c"),T={components:{BButtonGroup:c["a"],BDropdown:N["a"],BDropdownItem:I["a"],BButton:b["a"],BCardCode:d["a"],BDropdownDivider:C["a"],BCardText:s["a"]},directives:{Ripple:l["a"]},data:function(){return{codeDropdown:f}}},G=T,k=Object(w["a"])(G,S,z,!1,null,null,null),R=k.exports,E={components:{BRow:i["a"],BCol:a["a"],ButtonGroupBasic:y,ButtonGroupSize:P,ButtonGroupDropdownSupport:R}},F=E,M=Object(w["a"])(F,n,o,!1,null,null,null);e["default"]=M.exports},b28b:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r("b42e"),o=r("c637"),i=r("a723"),a=r("992e"),p=r("2326"),u=r("228e"),c=r("6c06"),b=r("7b1e"),s=r("b508"),d=r("d82f"),l=r("cf75"),v=r("fa73");function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=["auto","start","end","center","baseline","stretch"],w=function(t,e,r){var n=t;if(!Object(b["p"])(r)&&!1!==r)return e&&(n+="-".concat(e)),"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),Object(v["c"])(n)):Object(v["c"])(n)},j=Object(s["a"])(w),y=Object(d["c"])(null),B=function(){var t=Object(u["b"])().filter(c["a"]),e=t.reduce((function(t,e){return t[e]=Object(l["c"])(i["i"]),t}),Object(d["c"])(null)),r=t.reduce((function(t,e){return t[Object(l["g"])(e,"offset")]=Object(l["c"])(i["p"]),t}),Object(d["c"])(null)),n=t.reduce((function(t,e){return t[Object(l["g"])(e,"order")]=Object(l["c"])(i["p"]),t}),Object(d["c"])(null));return y=Object(d["a"])(Object(d["c"])(null),{col:Object(d["h"])(e),offset:Object(d["h"])(r),order:Object(d["h"])(n)}),Object(l["d"])(Object(d["m"])(f(f(f(f({},e),r),n),{},{alignSelf:Object(l["c"])(i["u"],null,(function(t){return Object(p["a"])(O,t)})),col:Object(l["c"])(i["g"],!1),cols:Object(l["c"])(i["p"]),offset:Object(l["c"])(i["p"]),order:Object(l["c"])(i["p"]),tag:Object(l["c"])(i["u"],"div")})),o["y"])},h={name:o["y"],functional:!0,get props(){return delete this.props,this.props=B()},render:function(t,e){var r,o=e.props,i=e.data,p=e.children,u=o.cols,c=o.offset,b=o.order,s=o.alignSelf,d=[];for(var l in y)for(var v=y[l],m=0;m<v.length;m++){var f=j(l,v[m].replace(l,""),o[v[m]]);f&&d.push(f)}var O=d.some((function(t){return a["e"].test(t)}));return d.push((r={col:o.col||!O&&!u},g(r,"col-".concat(u),u),g(r,"offset-".concat(c),c),g(r,"order-".concat(b),b),g(r,"align-self-".concat(s),s),r)),t(o.tag,Object(n["a"])(i,{class:d}),p)}}},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("2b0e"),o=r("b42e"),i=r("c637"),a=r("a723"),p=r("cf75"),u=Object(p["d"])({textTag:Object(p["c"])(a["u"],"p")},i["u"]),c=n["default"].extend({name:i["u"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.textTag,Object(o["a"])(n,{staticClass:"card-text"}),i)}})},f47c:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r("2b0e"),o=r("b42e"),i=r("c637"),a=r("a723"),p=r("cf75"),u=r("d82f");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(p["d"])({tag:Object(p["c"])(a["u"],"hr")},i["D"]),l=n["default"].extend({name:i["D"],functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data;return t("li",Object(o["a"])(Object(u["j"])(n,["attrs"]),{attrs:{role:"presentation"}}),[t(r.tag,{staticClass:"dropdown-divider",attrs:b(b({},n.attrs||{}),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}})}}]);
//# sourceMappingURL=chunk-74081366.ba864296.js.map