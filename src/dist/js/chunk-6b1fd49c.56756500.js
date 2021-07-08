(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b1fd49c"],{"0e87":function(n,e,a){"use strict";a.r(e);var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{cols:"12"}},[a("badge-contextual")],1),a("b-col",{attrs:{cols:"12"}},[a("badge-glow")],1),a("b-col",{attrs:{cols:"12"}},[a("badge-light")],1),a("b-col",{attrs:{cols:"12"}},[a("badge-icon")],1),a("b-col",{attrs:{md:"6"}},[a("badge-link")],1),a("b-col",{attrs:{md:"6"}},[a("badge-block")],1)],1)},r=[],c=a("a15b"),o=a("b28b"),s=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Contextual Badges"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeContextual)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[n._v("Add any of the following variants via the ")]),a("code",[n._v("variant")]),a("span",[n._v(" prop to change the appearance of a ")]),a("code",[n._v("<b-badge>:")]),a("span",[n._v(" default, primary, success, warning, info,")]),a("span",[n._v(" and ")]),a("span",[n._v("danger.")]),a("span",[n._v(" If no variant is specified ")]),a("code",[n._v("default")]),a("span",[n._v(" will be used.")])]),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{attrs:{variant:"primary"}},[n._v(" Primary ")]),a("b-badge",[n._v(" Secondary ")]),a("b-badge",{attrs:{variant:"success"}},[n._v(" Success ")]),a("b-badge",{attrs:{variant:"danger"}},[n._v(" Danger ")]),a("b-badge",{attrs:{variant:"warning"}},[n._v(" Warning ")]),a("b-badge",{attrs:{variant:"info"}},[n._v(" Info ")]),a("b-badge",{attrs:{variant:"dark"}},[n._v(" Dark ")])],1)],1)},i=[],b=a("1079"),d=a("d6e4"),l=a("e98b"),g='\n<template>\n   <div class="demo-inline-spacing">\n      <b-badge variant="primary">\n        Primary\n      </b-badge>\n      <b-badge>\n        Secondary\n      </b-badge>\n      <b-badge variant="success">\n        Success\n      </b-badge>\n      <b-badge variant="danger">\n        Danger\n      </b-badge>\n      <b-badge variant="warning">\n        Warning\n      </b-badge>\n      <b-badge variant="info">\n        Info\n      </b-badge>\n      <b-badge variant="dark">\n        Dark\n      </b-badge>\n    </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',u='\n<template>\n  \x3c!-- glow badges --\x3e\n  <div class="demo-inline-spacing">\n    <b-badge\n      variant="primary"\n      class="badge-glow"\n    >\n      Primary\n    </b-badge>\n    <b-badge class="badge-glow">\n      Secondary\n    </b-badge>\n    <b-badge\n      variant="success"\n      class="badge-glow"\n    >\n      Success\n    </b-badge>\n    <b-badge\n      variant="danger"\n      class="badge-glow"\n    >\n      Danger\n    </b-badge>\n    <b-badge\n      variant="warning"\n      class="badge-glow"\n    >\n      Warning\n    </b-badge>\n    <b-badge\n      variant="info"\n      class="badge-glow"\n    >\n      Info\n    </b-badge>\n    <b-badge\n      variant="dark"\n      class="badge-glow"\n    >\n      Dark\n    </b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',p='\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge variant="light-primary">\n      Primary\n    </b-badge>\n    <b-badge variant="light-secondary">\n      Secondary\n    </b-badge>\n    <b-badge variant="light-success">\n      Success\n    </b-badge>\n    <b-badge variant="light-danger">\n      Danger\n    </b-badge>\n    <b-badge variant="light-warning">\n      Warning\n    </b-badge>\n    <b-badge variant="light-info">\n      Info\n    </b-badge>\n    <b-badge variant="light-dark">\n      Dark\n    </b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',f='\n<template>\n  \x3c!--badges --\x3e\n  <div class="demo-inline-spacing">\n    <b-badge variant="primary">\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Primary</span>\n    </b-badge>\n    <b-badge>\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Secondary</span>\n    </b-badge>\n    <b-badge\n      variant="success"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Success</span>\n    </b-badge>\n    <b-badge\n      variant="danger"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Danger</span>\n    </b-badge>\n    <b-badge\n      variant="warning"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Warning</span>\n    </b-badge>\n    <b-badge\n      variant="info"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Info</span>\n    </b-badge>\n    <b-badge\n      variant="dark"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Dark</span>\n    </b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',v='\n<template>\n  <b-badge\n    href="#"\n    variant="primary"\n  >\n    <feather-icon\n      icon="LinkIcon"\n      class="mr-25"\n    />\n    <span>Link Badge</span>\n  </b-badge>\n</template>\n\n<script>\nimport {BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',O='\n<template>\n  <div class="text-center">\n    <b-badge\n      href="#"\n      class="d-block"\n      variant="primary"\n    >\n      Badge\n    </b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',m={components:{BCardCode:b["a"],BCardText:d["a"],BBadge:l["a"]},data:function(){return{codeContextual:g}}},j=m,h=a("2877"),_=Object(h["a"])(j,s,i,!1,null,null,null),y=_.exports,B=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Glow Badges"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeGlow)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[n._v("Use class ")]),a("code",[n._v(".badge-glow")]),a("span",[n._v(" to add glow effect to contextual badge.")])]),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{staticClass:"badge-glow",attrs:{variant:"primary"}},[n._v(" Primary ")]),a("b-badge",{staticClass:"badge-glow"},[n._v(" Secondary ")]),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"success"}},[n._v(" Success ")]),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"danger"}},[n._v(" Danger ")]),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"warning"}},[n._v(" Warning ")]),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"info"}},[n._v(" Info ")]),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"dark"}},[n._v(" Dark ")])],1)],1)},w=[],C={components:{BCardCode:b["a"],BCardText:d["a"],BBadge:l["a"]},data:function(){return{codeGlow:u}}},k=C,x=Object(h["a"])(k,B,w,!1,null,null,null),S=x.exports,P=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Light Badges"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeLightBadges)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[n._v("Use ")]),a("code",[n._v("variant='light-{color}'")]),a("span",[n._v(" prop to add light effect to your badge.")])]),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{attrs:{variant:"light-primary"}},[n._v(" Primary ")]),a("b-badge",{attrs:{variant:"light-secondary"}},[n._v(" Secondary ")]),a("b-badge",{attrs:{variant:"light-success"}},[n._v(" Success ")]),a("b-badge",{attrs:{variant:"light-danger"}},[n._v(" Danger ")]),a("b-badge",{attrs:{variant:"light-warning"}},[n._v(" Warning ")]),a("b-badge",{attrs:{variant:"light-info"}},[n._v(" Info ")]),a("b-badge",{attrs:{variant:"light-dark"}},[n._v(" Dark ")])],1)],1)},I=[],D={components:{BCardCode:b["a"],BCardText:d["a"],BBadge:l["a"]},data:function(){return{codeLightBadges:p}}},E=D,L=Object(h["a"])(E,P,I,!1,null,null,null),T=L.exports,W=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Badges With Icons"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeIcon)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[n._v(" You can add icon inside badge components. ")]),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{attrs:{variant:"primary"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),a("span",[n._v("Primary")])],1),a("b-badge",[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),a("span",[n._v("Secondary")])],1),a("b-badge",{attrs:{variant:"success"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),a("span",[n._v("Success")])],1),a("b-badge",{attrs:{variant:"danger"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),a("span",[n._v("Danger")])],1),a("b-badge",{attrs:{variant:"warning"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),a("span",[n._v("Warning")])],1),a("b-badge",{attrs:{variant:"info"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),a("span",[n._v("Info")])],1),a("b-badge",{attrs:{variant:"dark"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),a("span",[n._v("Dark")])],1)],1)],1)},$=[],G={components:{BCardCode:b["a"],BBadge:l["a"],BCardText:d["a"]},data:function(){return{codeIcon:f}}},U=G,H=Object(h["a"])(U,W,$,!1,null,null,null),J=H.exports,V=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Link Badge"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeLink)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Use ")]),a("code",[n._v("href")]),a("span",[n._v(" prop (links) or ")]),a("code",[n._v("to")]),a("span",[n._v(" prop (router-links) for link badges.")])]),a("b-badge",{attrs:{href:"#",variant:"primary"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"LinkIcon"}}),a("span",[n._v("Link Badge")])],1)],1)},A=[],R={components:{BCardCode:b["a"],BCardText:d["a"],BBadge:l["a"]},data:function(){return{codeLink:v}}},Y=R,q=Object(h["a"])(Y,V,A,!1,null,null,null),z=q.exports,F=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Block Badge"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeBlock)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Use ")]),a("code",[n._v(".d-block")]),a("span",[n._v(" class with ")]),a("code",[n._v("<b-badge>")]),a("span",[n._v(", to display badge as a block element.")])]),a("div",{staticClass:"text-center"},[a("b-badge",{staticClass:"d-block",attrs:{href:"#",variant:"primary"}},[n._v(" Badge ")])],1)],1)},K=[],M={components:{BCardCode:b["a"],BCardText:d["a"],BBadge:l["a"]},data:function(){return{codeBlock:O}}},N=M,Q=Object(h["a"])(N,F,K,!1,null,null,null),X=Q.exports,Z={components:{BRow:c["a"],BCol:o["a"],BadgeContextual:y,BadgeGlow:S,BadgeLight:T,BadgeIcon:J,BadgeLink:z,BadgeBlock:X}},nn=Z,en=Object(h["a"])(nn,t,r,!1,null,null,null);e["default"]=en.exports},1079:function(n,e,a){"use strict";var t=a("541c");e["a"]=t["a"]},a15b:function(n,e,a){"use strict";a.d(e,"a",(function(){return _}));var t=a("b42e"),r=a("c637"),c=a("a723"),o=a("2326"),s=a("228e"),i=a("6c06"),b=a("b508"),d=a("d82f"),l=a("cf75"),g=a("fa73");function u(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function p(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){f(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function f(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var v=["start","end","center"],O=Object(b["a"])((function(n,e){return e=Object(g["h"])(Object(g["g"])(e)),e?Object(g["c"])(["row-cols",n,e].filter(i["a"]).join("-")):null})),m=Object(b["a"])((function(n){return Object(g["c"])(n.replace("cols",""))})),j=[],h=function(){var n=Object(s["b"])().reduce((function(n,e){return n[Object(l["g"])(e,"cols")]=Object(l["c"])(c["p"]),n}),Object(d["c"])(null));return j=Object(d["h"])(n),Object(l["d"])(Object(d["m"])(p(p({},n),{},{alignContent:Object(l["c"])(c["u"],null,(function(n){return Object(o["a"])(Object(o["b"])(v,"between","around","stretch"),n)})),alignH:Object(l["c"])(c["u"],null,(function(n){return Object(o["a"])(Object(o["b"])(v,"between","around"),n)})),alignV:Object(l["c"])(c["u"],null,(function(n){return Object(o["a"])(Object(o["b"])(v,"baseline","stretch"),n)})),noGutters:Object(l["c"])(c["g"],!1),tag:Object(l["c"])(c["u"],"div")})),r["Ob"])},_={name:r["Ob"],functional:!0,get props(){return delete this.props,this.props=h(),this.props},render:function(n,e){var a,r=e.props,c=e.data,o=e.children,s=r.alignV,i=r.alignH,b=r.alignContent,d=[];return j.forEach((function(n){var e=O(m(n),r[n]);e&&d.push(e)})),d.push((a={"no-gutters":r.noGutters},f(a,"align-items-".concat(s),s),f(a,"justify-content-".concat(i),i),f(a,"align-content-".concat(b),b),a)),n(r.tag,Object(t["a"])(c,{staticClass:"row",class:d}),o)}}},b28b:function(n,e,a){"use strict";a.d(e,"a",(function(){return B}));var t=a("b42e"),r=a("c637"),c=a("a723"),o=a("992e"),s=a("2326"),i=a("228e"),b=a("6c06"),d=a("7b1e"),l=a("b508"),g=a("d82f"),u=a("cf75"),p=a("fa73");function f(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function v(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){O(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function O(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var m=["auto","start","end","center","baseline","stretch"],j=function(n,e,a){var t=n;if(!Object(d["p"])(a)&&!1!==a)return e&&(t+="-".concat(e)),"col"!==n||""!==a&&!0!==a?(t+="-".concat(a),Object(p["c"])(t)):Object(p["c"])(t)},h=Object(l["a"])(j),_=Object(g["c"])(null),y=function(){var n=Object(i["b"])().filter(b["a"]),e=n.reduce((function(n,e){return n[e]=Object(u["c"])(c["i"]),n}),Object(g["c"])(null)),a=n.reduce((function(n,e){return n[Object(u["g"])(e,"offset")]=Object(u["c"])(c["p"]),n}),Object(g["c"])(null)),t=n.reduce((function(n,e){return n[Object(u["g"])(e,"order")]=Object(u["c"])(c["p"]),n}),Object(g["c"])(null));return _=Object(g["a"])(Object(g["c"])(null),{col:Object(g["h"])(e),offset:Object(g["h"])(a),order:Object(g["h"])(t)}),Object(u["d"])(Object(g["m"])(v(v(v(v({},e),a),t),{},{alignSelf:Object(u["c"])(c["u"],null,(function(n){return Object(s["a"])(m,n)})),col:Object(u["c"])(c["g"],!1),cols:Object(u["c"])(c["p"]),offset:Object(u["c"])(c["p"]),order:Object(u["c"])(c["p"]),tag:Object(u["c"])(c["u"],"div")})),r["y"])},B={name:r["y"],functional:!0,get props(){return delete this.props,this.props=y()},render:function(n,e){var a,r=e.props,c=e.data,s=e.children,i=r.cols,b=r.offset,d=r.order,l=r.alignSelf,g=[];for(var u in _)for(var p=_[u],f=0;f<p.length;f++){var v=h(u,p[f].replace(u,""),r[p[f]]);v&&g.push(v)}var m=g.some((function(n){return o["e"].test(n)}));return g.push((a={col:r.col||!m&&!i},O(a,"col-".concat(i),i),O(a,"offset-".concat(b),b),O(a,"order-".concat(d),d),O(a,"align-self-".concat(l),l),a)),n(r.tag,Object(t["a"])(c,{class:g}),s)}}},d6e4:function(n,e,a){"use strict";a.d(e,"a",(function(){return b}));var t=a("2b0e"),r=a("b42e"),c=a("c637"),o=a("a723"),s=a("cf75"),i=Object(s["d"])({textTag:Object(s["c"])(o["u"],"p")},c["u"]),b=t["default"].extend({name:c["u"],functional:!0,props:i,render:function(n,e){var a=e.props,t=e.data,c=e.children;return n(a.textTag,Object(r["a"])(t,{staticClass:"card-text"}),c)}})},e98b:function(n,e,a){"use strict";a.d(e,"a",(function(){return v}));var t=a("2b0e"),r=a("b42e"),c=a("c637"),o=a("a723"),s=a("d82f"),i=a("cf75"),b=a("4a38"),d=a("aa59");function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function g(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){u(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function u(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var p=Object(s["j"])(d["b"],["event","routerTag"]);delete p.href.default,delete p.to.default;var f=Object(i["d"])(Object(s["m"])(g(g({},p),{},{pill:Object(i["c"])(o["g"],!1),tag:Object(i["c"])(o["u"],"span"),variant:Object(i["c"])(o["u"],"secondary")})),c["e"]),v=t["default"].extend({name:c["e"],functional:!0,props:f,render:function(n,e){var a=e.props,t=e.data,c=e.children,o=a.active,s=a.disabled,l=Object(b["d"])(a),g=l?d["a"]:a.tag,u=a.variant||"secondary";return n(g,Object(r["a"])(t,{staticClass:"badge",class:["badge-".concat(u),{"badge-pill":a.pill,active:o,disabled:s}],props:l?Object(i["e"])(p,a):{}}),c)}})}}]);
//# sourceMappingURL=chunk-6b1fd49c.56756500.js.map