(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ed68bf0"],{1079:function(e,t,n){"use strict";var o=n("541c");t["a"]=o["a"]},"6ff4":function(e,t,n){"use strict";n("e307")},"9e14":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o=n("2b0e"),i=n("c637"),c=n("3c21"),r=n("d82f"),s=n("cf75"),l=n("dde7"),a=n("d3cb"),u=n("ad47"),p=n("d520"),d=n("90ef");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=Object(s["d"])(Object(r["m"])(m(m(m(m(m({},d["b"]),l["b"]),a["c"]),u["b"]),p["b"])),i["T"]),v=o["default"].extend({name:i["T"],mixins:[d["a"],a["b"],l["a"],u["a"],p["a"]],inject:{bvGroup:{from:"bvRadioGroup",default:!1}},props:h,watch:{computedLocalChecked:function(e,t){Object(c["a"])(e,t)||this.$emit(a["a"],e)}}})},a15b:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var o=n("b42e"),i=n("c637"),c=n("a723"),r=n("2326"),s=n("228e"),l=n("6c06"),a=n("b508"),u=n("d82f"),p=n("cf75"),d=n("fa73");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=["start","end","center"],v=Object(a["a"])((function(e,t){return t=Object(d["h"])(Object(d["g"])(t)),t?Object(d["c"])(["row-cols",e,t].filter(l["a"]).join("-")):null})),g=Object(a["a"])((function(e){return Object(d["c"])(e.replace("cols",""))})),O=[],j=function(){var e=Object(s["b"])().reduce((function(e,t){return e[Object(p["g"])(t,"cols")]=Object(p["c"])(c["p"]),e}),Object(u["c"])(null));return O=Object(u["h"])(e),Object(p["d"])(Object(u["m"])(m(m({},e),{},{alignContent:Object(p["c"])(c["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(h,"between","around","stretch"),e)})),alignH:Object(p["c"])(c["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(h,"between","around"),e)})),alignV:Object(p["c"])(c["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(h,"baseline","stretch"),e)})),noGutters:Object(p["c"])(c["g"],!1),tag:Object(p["c"])(c["u"],"div")})),i["Ob"])},C={name:i["Ob"],functional:!0,get props(){return delete this.props,this.props=j(),this.props},render:function(e,t){var n,i=t.props,c=t.data,r=t.children,s=i.alignV,l=i.alignH,a=i.alignContent,u=[];return O.forEach((function(e){var t=v(g(e),i[e]);t&&u.push(t)})),u.push((n={"no-gutters":i.noGutters},f(n,"align-items-".concat(s),s),f(n,"justify-content-".concat(l),l),f(n,"align-content-".concat(a),a),n)),e(i.tag,Object(o["a"])(c,{staticClass:"row",class:u}),r)}}},a953:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var o=n("2b0e"),i=n("a723"),c=n("cf75"),r=Object(c["d"])({plain:Object(c["c"])(i["g"],!1)},"formControls"),s=o["default"].extend({props:r,computed:{custom:function(){return!this.plain}}})},ad47:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var o=n("2b0e"),i=n("a723"),c=n("cf75"),r=Object(c["d"])({size:Object(c["c"])(i["u"])},"formControls"),s=o["default"].extend({props:r,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},c733:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("vue-select-basic")],1),n("b-col",{attrs:{cols:"12"}},[n("vue-select-multiple")],1),n("b-col",{attrs:{md:"6"}},[n("vue-select-size")],1),n("b-col",{attrs:{md:"6"}},[n("vue-select-multi-size")],1)],1)],1)},i=[],c=n("a15b"),r=n("b28b"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Vue-Select"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVueBasic)+" ")]},proxy:!0}])},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("h6",[e._v("Basic Select")]),n("b-card-text",[n("code",[e._v("vue-select")]),n("span",[e._v(" accepts arrays of primitive values or objects to use as ")]),n("code",[e._v("options")]),n("span",[e._v(" through the options prop:")])]),n("b-form-group",[n("v-select",{attrs:{dir:e.$store.state.appConfig.isRTL?"rtl":"ltr",label:"title",options:e.option},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),n("b-col",{attrs:{md:"6"}},[n("h6",[e._v("Select with Icon")]),n("b-card-text",[n("span",[e._v("The current option within the dropdown, contained within ")]),n("code",[e._v("<li>")]),n("span",[e._v(".")]),n("code",[e._v("option {Object}")]),n("span",[e._v(" - The currently iterated option from ")]),n("code",[e._v("filteredOptions")])]),n("b-form-group",[n("v-select",{attrs:{dir:e.$store.state.appConfig.isRTL?"rtl":"ltr",options:e.books,label:"title"},scopedSlots:e._u([{key:"option",fn:function(t){var o=t.title,i=t.icon;return[n("feather-icon",{staticClass:"align-middle mr-50",attrs:{icon:i,size:"16"}}),n("span",[e._v(" "+e._s(o))])]}}]),model:{value:e.selected1,callback:function(t){e.selected1=t},expression:"selected1"}})],1)],1)],1)],1)},l=[],a=n("8226"),u=n("d6e4"),p=n("1079"),d=n("4a7a"),b=n.n(d),m="\n<template>\n   <b-row>\n    \x3c!-- basic select --\x3e\n    <b-col md=\"6\">\n      <h6>Basic Select</h6>\n      <b-card-text>\n        <code>vue-select</code>\n        <span> accepts arrays of primitive values or objects to use as </span>\n        <code>options</code>\n        <span> through the options prop:</span>\n      </b-card-text>\n\n      <b-form-group>\n        <v-select\n          v-model=\"selected\"\n          :dir=\"$store.state.appConfig.isRTL ? 'rtl' : 'ltr'\"\n          label=\"title\"\n          :options=\"option\"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- select with icon --\x3e\n    <b-col md=\"6\">\n      <h6>Select with Icon</h6>\n      <b-card-text>\n        <span>The current option within the dropdown, contained within </span><code>&lt;li&gt;</code>\n        <span>.</span>\n        <code>option {Object}</code>\n        <span> - The currently iterated option from </span>\n        <code>filteredOptions</code>\n      </b-card-text>\n\n      <b-form-group>\n        <v-select\n          v-model=\"selected1\"\n          :dir=\"$store.state.appConfig.isRTL ? 'rtl' : 'ltr'\"\n          :options=\"books\"\n          label=\"title\"\n        >\n          <template #option=\"{ title, icon }\">\n            <feather-icon\n              :icon=\"icon\"\n              size=\"16\"\n              class=\"align-middle mr-50\"\n            />\n            <span> {{ title }}</span>\n          </template>\n        </v-select>\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BRow, BCol, BFormGroup } from 'bootstrap-vue'\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    vSelect,\n  },\n  data() {\n    return {\n      selected: { title: 'Square' },\n      selected1: {\n        title: 'Aperture',\n        icon: 'ApertureIcon',\n      },\n      option: [{ title: 'Square' }, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],\n      books: [\n        {\n          title: 'Aperture',\n          icon: 'ApertureIcon',\n        },\n        {\n          title: 'Codepen',\n          icon: 'CodepenIcon',\n        },\n        {\n          title: 'Globe ',\n          icon: 'GlobeIcon',\n        },\n        {\n          title: 'Instagram ',\n          icon: 'InstagramIcon',\n        },\n      ],\n    }\n  },\n}\n<\/script>\n\n<style lang=\"scss\">\n@import '@core/scss/vue/libs/vue-select.scss';\n</style>\n",f='\n<template>\n  <b-row>\n\n    \x3c!-- Small --\x3e\n    <b-col cols="12">\n      <b-form-group>\n        <v-select\n          v-model="selected"\n          :dir="$store.state.appConfig.isRTL ? \'rtl\' : \'ltr\'"\n          label="title"\n          :options="option"\n          class="select-size-sm"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- Medium --\x3e\n    <b-col cols="12">\n      <b-form-group>\n        <v-select\n          v-model="selected"\n          :dir="$store.state.appConfig.isRTL ? \'rtl\' : \'ltr\'"\n          label="title"\n          :options="option"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- Large --\x3e\n    <b-col cols="12">\n      <b-form-group>\n        <v-select\n          v-model="selected"\n          :dir="$store.state.appConfig.isRTL ? \'rtl\' : \'ltr\'"\n          label="title"\n          :options="option"\n          class="select-size-lg"\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BRow, BCol, BFormGroup } from \'bootstrap-vue\'\nimport vSelect from \'vue-select\'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    vSelect,\n  },\n data() {\n    return {\n      selected: { title: \'Square\' },\n      option: [{ title: \'Square\' }, { title: \'Rectangle\' }, { title: \'Rombo\' }, { title: \'Romboid\' }],\n    }\n  },\n}\n<\/script>\n\n<style lang="scss">\n@import \'@core/scss/vue/libs/vue-select.scss\';\n</style>\n',h='\n<template>\n  <b-row>\n\n    \x3c!-- Small --\x3e\n    <b-col cols="12">\n      <b-form-group>\n        <v-select\n          v-model="selected"\n          :dir="$store.state.appConfig.isRTL ? \'rtl\' : \'ltr\'"\n          label="title"\n          :options="option"\n          class="select-size-sm"\n          multiple\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- Medium --\x3e\n    <b-col cols="12">\n      <b-form-group>\n        <v-select\n          v-model="selected"\n          :dir="$store.state.appConfig.isRTL ? \'rtl\' : \'ltr\'"\n          label="title"\n          :options="option"\n          multiple\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- Large --\x3e\n    <b-col cols="12">\n      <b-form-group>\n        <v-select\n          v-model="selected"\n          :dir="$store.state.appConfig.isRTL ? \'rtl\' : \'ltr\'"\n          label="title"\n          :options="option"\n          class="select-size-lg"\n          multiple\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BRow, BCol, BFormGroup } from \'bootstrap-vue\'\nimport vSelect from \'vue-select\'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    vSelect,\n  },\n  data() {\n    return {\n      selected: { title: \'Square\' },\n      option: [{ title: \'Square\' }, { title: \'Rectangle\' }, { title: \'Rombo\' }, { title: \'Romboid\' }],\n    }\n  },\n}\n<\/script>\n',v="\n<template>\n  <v-select\n    v-model=\"selected\"\n    :dir=\"$store.state.appConfig.isRTL ? 'rtl' : 'ltr'\"\n    multiple\n    label=\"title\"\n    :options=\"option\"\n  />\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    vSelect,\n  },\n   data() {\n    return {\n      dir: 'ltr',\n      selected: [\n        { title: 'Square' },\n        { title: 'Romboid' },\n      ],\n    }\n  },\n}\n<\/script>\n",g="\n<template>\n  <v-select\n    v-model=\"selected1\"\n    :dir=\"$store.state.appConfig.isRTL ? 'rtl' : 'ltr'\"\n    multiple\n    :options=\"books\"\n    label=\"title\"\n  >\n    <template #option=\"{ title, icon }\">\n      <feather-icon\n        :icon=\"icon\"\n        size=\"16\"\n        class=\"align-middle mr-25\"\n      />\n      <span> {{ title }}</span>\n    </template>\n  </v-select>\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    vSelect,\n  },\n  data() {\n    return {\n      selected1: [\n        {\n          title: 'Command',\n          icon: 'CommandIcon',\n        },\n      ],\n      books: [\n        {\n          title: 'Database',\n          icon: 'DatabaseIcon',\n        },\n        {\n          title: 'Codepen',\n          icon: 'CodepenIcon',\n        },\n        {\n          title: 'Aperture ',\n          icon: 'ApertureIcon',\n        },\n        {\n          title: 'Command',\n          icon: 'CommandIcon',\n        },\n      ],\n    }\n  },\n}\n<\/script>\n",O="\n<template>\n  <div>\n    <v-select\n      :dir=\"$store.state.appConfig.isRTL ? 'rtl' : 'ltr'\"\n      multiple\n      taggable\n      push-tags\n      placeholder=\"Add Options\"\n      label=\"title\"\n    />\n  </div>\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    vSelect,\n  },\n}\n<\/script>\n",j="\n<template>\n  <v-select\n    v-model=\"selected2\"\n    :dir=\"$store.state.appConfig.isRTL ? 'rtl' : 'ltr'\"\n    multiple\n    placeholder=\"Choose up to 3 books!\"\n    label=\"title\"\n    :options=\"books\"\n    :selectable=\"() => selected2.length < 3\"\n  />\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    vSelect,\n  },\n  data() {\n    return {\n      selected2: [],\n      books: [\n        {\n          title: 'Database',\n          icon: 'DatabaseIcon',\n        },\n        {\n          title: 'Codepen',\n          icon: 'CodepenIcon',\n        },\n        {\n          title: 'Aperture ',\n          icon: 'ApertureIcon',\n        },\n        {\n          title: 'Command',\n          icon: 'CommandIcon',\n        },\n      ],\n    }\n  },\n}\n<\/script>\n",C="\n<template>\n  <div>\n    <div class=\"mb-2\">\n      <b-form-radio\n        v-model=\"dir\"\n        name=\"some-radios\"\n        value=\"ltr\"\n        inline\n      >\n        LRT\n      </b-form-radio>\n      <b-form-radio\n        v-model=\"dir\"\n        name=\"some-radios\"\n        value=\"rtl\"\n        inline\n      >\n        RTL\n      </b-form-radio>\n    </div>\n\n    <v-select\n      v-model=\"selected3\"\n      :dir=\"dir\"\n      multiple\n      label=\"title\"\n      :options=\"books\"\n    />\n  </div>\n</template>\n\n<script>\nimport {BFormRadio} from 'bootstrap-vue'\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    BFormRadio,\n    vSelect,\n  },\n  data() {\n    return {\n      dir: 'ltr',\n      selected3: [{\n        title: 'Database',\n        icon: 'DatabaseIcon',\n      }],\n      books: [\n        {\n          title: 'Database',\n          icon: 'DatabaseIcon',\n        },\n        {\n          title: 'Codepen',\n          icon: 'CodepenIcon',\n        },\n        {\n          title: 'Aperture ',\n          icon: 'ApertureIcon',\n        },\n        {\n          title: 'Command',\n          icon: 'CommandIcon',\n        },\n      ],\n    }\n  },\n}\n<\/script>\n",S={components:{BRow:c["a"],BCol:r["a"],BFormGroup:a["a"],BCardText:u["a"],BCardCode:p["a"],vSelect:b.a},data:function(){return{codeVueBasic:m,selected:{title:"Square"},selected1:{title:"Aperture",icon:"ApertureIcon"},option:[{title:"Square"},{title:"Rectangle"},{title:"Rombo"},{title:"Romboid"}],books:[{title:"Aperture",icon:"ApertureIcon"},{title:"Codepen",icon:"CodepenIcon"},{title:"Globe ",icon:"GlobeIcon"},{title:"Instagram ",icon:"InstagramIcon"}]}}},x=S,w=n("2877"),y=Object(w["a"])(x,s,l,!1,null,null,null),R=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{attrs:{title:"Multiple Select"}},[n("b-row",[n("b-col",{attrs:{lg:"6"}},[n("b-card-code",{staticClass:"border",attrs:{title:"Basic Multiple Select"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVueMultiBasic)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Equivalent to the ")]),n("code",[e._v("multiple")]),n("span",[e._v(" attribute on a ")]),n("code",[e._v("<select>")]),n("span",[e._v(" input.")])]),n("v-select",{attrs:{dir:e.ltr,multiple:"",label:"title",options:e.option},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)],1)},B=[],_=n("9e14"),G=n("205f"),L={components:{BRow:c["a"],BCol:r["a"],BFormRadio:_["a"],BCardText:u["a"],BCard:G["a"],BCardCode:p["a"],vSelect:b.a},data:function(){return{codeVueMultiBasic:v,codeVueMultiIcon:g,codeMultiPush:O,codeVueSelectionLimit:j,codeVueDir:C,dir:"ltr",selected:[{title:"Square"},{title:"Romboid"}],options:[],option:[{title:"Square"},{title:"Rectangle"},{title:"Rombo"},{title:"Romboid"},{title:"Trapeze"},{title:"Triangle"},{title:"Polygon"}]}}},z=L,T=Object(w["a"])(z,k,B,!1,null,null,null),I=T.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"size"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVueSize)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("For different sizes of select2, Use classes like ")]),n("code",[e._v(".select-size-sm")]),n("span",[e._v(" & ")]),n("code",[e._v(".select-size-lg")]),n("span",[e._v(" for Large, small & Extra Small Select respectively.")])]),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",[n("v-select",{staticClass:"select-size-sm",attrs:{dir:e.$store.state.appConfig.isRTL?"rtl":"ltr",label:"title",options:e.option},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",[n("v-select",{attrs:{dir:e.$store.state.appConfig.isRTL?"rtl":"ltr",label:"title",options:e.option},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",[n("v-select",{staticClass:"select-size-lg",attrs:{dir:e.$store.state.appConfig.isRTL?"rtl":"ltr",label:"title",options:e.option},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)],1)},$=[],D={components:{BRow:c["a"],BCol:r["a"],BCardText:u["a"],BFormGroup:a["a"],BCardCode:p["a"],vSelect:b.a},data:function(){return{selected:{title:"Square"},codeVueSize:f,option:[{title:"Square"},{title:"Rectangle"},{title:"Rombo"},{title:"Romboid"}]}}},V=D,F=Object(w["a"])(V,P,$,!1,null,null,null),q=F.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Multi size"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVueMultipleSize)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("For different sizes of select2, Use classes like ")]),n("code",[e._v(".select-size-sm")]),n("span",[e._v(" & ")]),n("code",[e._v(".select-size-lg")]),n("span",[e._v(" for Large, small & Extra Small Select respectively.")])]),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",[n("v-select",{staticClass:"select-size-sm",attrs:{dir:e.$store.state.appConfig.isRTL?"rtl":"ltr",label:"title",options:e.option,multiple:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",[n("v-select",{attrs:{dir:e.$store.state.appConfig.isRTL?"rtl":"ltr",label:"title",options:e.option,multiple:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",[n("v-select",{staticClass:"select-size-lg",attrs:{dir:e.$store.state.appConfig.isRTL?"rtl":"ltr",label:"title",options:e.option,multiple:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)],1)},M=[],E={components:{BRow:c["a"],BCol:r["a"],BFormGroup:a["a"],BCardText:u["a"],BCardCode:p["a"],vSelect:b.a},data:function(){return{selected:{title:"Square"},codeVueMultipleSize:h,option:[{title:"Square"},{title:"Rectangle"},{title:"Rombo"},{title:"Romboid"}]}}},N=E,W=Object(w["a"])(N,A,M,!1,null,null,null),H=W.exports,J={components:{BRow:c["a"],BCol:r["a"],VueSelectBasic:R,VueSelectMultiple:I,VueSelectSize:q,VueSelectMultiSize:H}},U=J,K=(n("6ff4"),Object(w["a"])(U,o,i,!1,null,null,null));t["default"]=K.exports},d3cb:function(e,t,n){"use strict";n.d(t,"a",(function(){return B})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return G}));var o,i,c=n("2b0e"),r=n("a723"),s=n("0056"),l=n("906c"),a=n("7b1e"),u=n("3c21"),p=n("58f2"),d=n("d82f"),b=n("cf75"),m=n("493b"),f=n("dde7"),h=n("a953"),v=n("ad47"),g=n("d520"),O=n("90ef"),j=n("8c18");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=Object(p["a"])("checked",{defaultValue:null}),y=w.mixin,R=w.props,k=w.prop,B=w.event,_=Object(b["d"])(Object(d["m"])(S(S(S(S(S(S(S({},O["b"]),R),f["b"]),v["b"]),g["b"]),h["b"]),{},{ariaLabel:Object(b["c"])(r["u"]),ariaLabelledby:Object(b["c"])(r["u"]),button:Object(b["c"])(r["g"],!1),buttonVariant:Object(b["c"])(r["u"]),inline:Object(b["c"])(r["g"],!1),value:Object(b["c"])(r["a"])})),"formRadioCheckControls"),G=c["default"].extend({mixins:[m["a"],O["a"],y,j["a"],f["a"],v["a"],g["a"],h["a"]],inheritAttrs:!1,props:_,data:function(){return{localChecked:this.isGroup?this.bvGroup[k]:this[k],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(e){this.isGroup?this.bvGroup.localChecked=e:this.localChecked=e}},isChecked:function(){return Object(u["a"])(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(a["b"])(this.state)?this.state:null},computedButtonVariant:function(){var e=this.buttonVariant;return e||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var e,t=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(e={},x(e,"btn-".concat(t),t),x(e,"disabled",this.isDisabled),x(e,"active",this.isChecked),x(e,"focus",this.hasFocus),e)]},computedAttrs:function(){var e=this.isDisabled,t=this.isRequired;return S(S({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:e,required:t,"aria-required":t||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(o={},x(o,k,(function(){this["".concat(k,"Watcher")].apply(this,arguments)})),x(o,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),o),methods:(i={},x(i,"".concat(k,"Watcher"),(function(e){Object(u["a"])(e,this.computedLocalChecked)||(this.computedLocalChecked=e)})),x(i,"computedLocalCheckedWatcher",(function(e,t){Object(u["a"])(e,t)||this.$emit(B,e)})),x(i,"handleChange",(function(e){var t=this,n=e.target.checked,o=this.value,i=n?o:null;this.computedLocalChecked=o,this.$nextTick((function(){t.$emit(s["d"],i),t.isGroup&&t.bvGroup.$emit(s["d"],i)}))})),x(i,"handleFocus",(function(e){e.target&&("focus"===e.type?this.hasFocus=!0:"blur"===e.type&&(this.hasFocus=!1))})),x(i,"focus",(function(){this.isDisabled||Object(l["d"])(this.$refs.input)})),x(i,"blur",(function(){this.isDisabled||Object(l["c"])(this.$refs.input)})),i),render:function(e){var t=this.isRadio,n=this.isBtnMode,o=this.isPlain,i=this.isCustom,c=this.isInline,r=this.isSwitch,s=this.computedSize,l=this.bvAttrs,a=this.normalizeSlot(),u=e("input",{class:[{"form-check-input":o,"custom-control-input":i,"position-static":o&&!a},n?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:S({change:this.handleChange},n?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(n){var p=e("label",{class:this.buttonClasses},[u,a]);return this.isGroup||(p=e("div",{class:["btn-group-toggle","d-inline-block"]},[p])),p}var d=e();return o&&!a||(d=e("label",{class:{"form-check-label":o,"custom-control-label":i},attrs:{for:this.safeId()}},a)),e("div",{class:[x({"form-check":o,"form-check-inline":o&&c,"custom-control":i,"custom-control-inline":i&&c,"custom-checkbox":i&&!t&&!r,"custom-switch":r,"custom-radio":i&&t},"b-custom-control-".concat(s),s&&!n),l.class],style:l.style},[u,d])}})},d6e4:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("2b0e"),i=n("b42e"),c=n("c637"),r=n("a723"),s=n("cf75"),l=Object(s["d"])({textTag:Object(s["c"])(r["u"],"p")},c["u"]),a=o["default"].extend({name:c["u"],functional:!0,props:l,render:function(e,t){var n=t.props,o=t.data,c=t.children;return e(n.textTag,Object(i["a"])(o,{staticClass:"card-text"}),c)}})},dde7:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a}));var o=n("2b0e"),i=n("a723"),c=n("906c"),r=n("cf75"),s="input, textarea, select",l=Object(r["d"])({autofocus:Object(r["c"])(i["g"],!1),disabled:Object(r["c"])(i["g"],!1),form:Object(r["c"])(i["u"]),id:Object(r["c"])(i["u"]),name:Object(r["c"])(i["u"]),required:Object(r["c"])(i["g"],!1)},"formControls"),a=o["default"].extend({props:l,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var e=this;this.$nextTick((function(){Object(c["B"])((function(){var t=e.$el;e.autofocus&&Object(c["u"])(t)&&(Object(c["v"])(t,s)||(t=Object(c["C"])(s,t)),Object(c["d"])(t))}))}))}}})},e307:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2ed68bf0.55756115.js.map