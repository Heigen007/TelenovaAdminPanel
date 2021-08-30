<template>
  <b-card-code title="Xlsx links">
    <div>
      <b-form
        ref="form"
        :style="{height: trHeight}"
        class="repeater-form"
        @submit.prevent="repeateAgain"
      >

        <!-- Row Loop -->
        <b-row
          v-for="(item, index) in items"
          :key="item.index"
          ref="row"
        >

          <!-- Item Name -->
          <!-- <b-col md="4">
            <b-form-group
              label="Item Name"
              :label-for="'item-name' + index"
            >
              <b-form-input
                :id="'item-name' + index"
                type="text"
                placeholder="Name"
                v-model='item.supplier_name'
              />
            </b-form-group>
          </b-col> -->
          <b-col md="8">
            <b-form-group
              label="Link"
            >
              <b-form-input
                type="text"
                placeholder="Link"
                v-model='item.link'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Name"
            >
              <b-form-input
                v-if='item.constant'
                type="text"
                placeholder="name"
                v-model='item._id'
                readonly
              />
              <b-form-input
                v-else
                type="text"
                placeholder="name"
                v-model='item._id'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Name column"
            >
              <b-form-input
                type="text"
                placeholder="Name col"
                v-model='item.name_col'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Opt price column"
            >
              <b-form-input
                type="number"
                placeholder="Price col"
                v-model='item.opt_price_col'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Currency column"
            >
              <b-form-input
                type="text"
                placeholder="Currency col"
                v-model='item.currency_col'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Quantity column"
            >
              <b-form-input
                type="text"
                placeholder="Quantity col"
                v-model='item.quantity_col'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Rrc price  column"
            >
              <b-form-input
                type="text"
                placeholder="Price col"
                v-model='item.rrc_price_col'
              />
            </b-form-group>
          </b-col>
          <b-col
            md="2"
            style='align-items: center; display: flex'
            class="mb-50"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="outline-info"
              class="mt-0 mt-md-2"
              @click='changeLink(item, index)'
            >
              <span>Create</span>
            </b-button>
          </b-col>
          <!-- Remove Button -->
          <b-col
            md="2"
            style='align-items: center; display: flex'
            class="mb-50"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="outline-danger"
              class="mt-0 mt-md-2"
              @click="removeItem(item,index)"
            >
              <feather-icon
                icon="XIcon"
                class="mr-25"
              />
              <span>Delete</span>
            </b-button>
          </b-col>
          <b-col cols="12">
            <hr>
          </b-col>
        </b-row>

      </b-form>
    </div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="repeateAgain"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-25"
      />
      <span>Add New</span>
    </b-button>
    <br>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="info"
      @click="kaspiXml"
      class='mt-2'
    >
      <span>Export Kaspi.xml</span>
    </b-button>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, VBModal,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip, BFormCheckbox, BFormGroup, BForm, BFormTextarea
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import axios from '@myAxios'
import loader from '../../../components/CssPreloader.vue'
import vSelect from 'vue-select'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { saveAs } from 'file-saver';

export default {
  components: {
    BCard,
    BFormTextarea,
    loader,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
    BFormCheckbox,
    BFormGroup,
    BForm,
    AppCollapse,
    AppCollapseItem,
    BCardCode,

    vSelect,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      items: [],
      nextTodoId: 2,
      xmlLink: ''
    }
  },
  mounted() {
    this.initTrHeight()
    axios.get('http://178.250.159.216/links')
    .then(res => {
      console.log(res);
      this.items = res.data.data
      for (let index = 0; index < this.items.length; index++) {
        this.items[index].constant = true
      }
      for (let index = 0; index < this.items.length; index++) {
        setTimeout(() => {
          this.trAddHeight(this.$refs.row[0].offsetHeight)
        }, (index+1)*150)
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  async created() {
    window.addEventListener('resize', this.initTrHeight)
    await axios.get('http://178.250.159.216/kaspi_xml')
    .then(res => {
      console.log(res)
      this.xmlLink = res.data.link
    })
    .catch(err => {
      console.log(err);
      this.makeToast('danger',  'Some network error occured', 'Error')
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    changeLink(item, index){
      var self = this
      var formData = new FormData()
      if(item.link) formData.append('link', item.link)
      if(item.name_col) formData.append('name_col', item.name_col)
      if(item.opt_price_col) formData.append('opt_price_col', item.opt_price_col)
      if(item.currency_col) formData.append('currency_col', item.currency_col)
      if(item._id) formData.append('supplier_name', item._id)
      if(item.quantity_col) formData.append('quantity_col', item.quantity_col)
      if(item.rrc_price_col) formData.append('rrc_price_col', item.rrc_price_col)
      axios.post('http://178.250.159.216/links', formData)
      .then(res => {
        console.log(res);
        if(!res.data.status) this.makeToast('danger',  res.data.data, 'Error')
        else{
          this.makeToast('success',  'Link has been updated', 'Success')
          self.items[index].constant = true
          this.$forceUpdate()
        }
      })
      .catch(err => {
        console.log(err);
          this.makeToast('danger',  'Some network error occured', 'Error')
      })
    },
    removeItem(item,index) {
      var formData = new FormData()
      formData.append('link', item.link)
      axios.delete('http://178.250.159.216/links', { data: formData })
      .then(res => {
        console.log(res)
        if(!res.data.status) this.makeToast('danger', 'Some error occured', 'Error')
        else{
          this.makeToast('success',  'Link has been deleted', 'Success')
          this.items.splice(index, 1)
          this.trTrimHeight(this.$refs.row[0].offsetHeight)
        }
      })
      .catch(err => {
        console.log(err);
        this.makeToast('danger',  'Some network error occured', 'Error')
      })
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
    kaspiXml(){
      if(this.xmlLink){
        this.openModal()
      } else {
        setTimeout(() => {
          this.kaspiXml()
        }, 300);
      }
      // var blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?><shiporder orderid="889923"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:noNamespaceSchemaLocation="shiporder.xsd">   <orderperson>John Smith</orderperson><shipto><name>Ola Nordmann</name><address>Langgt 23</address><city>4000 Stavanger</city><country>Norway</country></shipto><item><title>Empire Burlesque</title><note>Special Edition</note><quantity>1</quantity><price>10.90</price></item><item><title>Hide your heart</title><quantity>1</quantity><price>9.90</price></item></shiporder>'], {type: "text/xml"});

      // saveAs(blob, "test.xmp");
    },
    openModal(){
      window.open(this.xmlLink)
    },
    makeToast(variant = null, content, title) {
      this.$bvToast.toast(content, {
        title: title,
        variant,
        solid: true,
        content: 'asas'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@core/scss/vue/libs/vue-select.scss';

.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>