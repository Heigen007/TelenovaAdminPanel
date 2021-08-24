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
          :id="item._id"
          :key="item._id"
          ref="row"
        >

          <!-- Item Name -->
          <b-col md="4">
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
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Item link"
              label-for="item-name"
            >
              <b-form-input
                id="item-name"
                type="text"
                placeholder="Link"
                v-model='item._id'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Name column"
              label-for="item-name"
            >
              <b-form-input
                id="item-name"
                type="text"
                placeholder="Name"
                v-model='item.name_col'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Opt price column"
              label-for="item-name"
            >
              <b-form-input
                id="item-name"
                type="number"
                placeholder="Price"
                v-model='item.opt_price_col'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Currency column"
              label-for="item-name"
            >
              <b-form-input
                id="item-name"
                type="text"
                placeholder="Currency"
                v-model='item.currency_col'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Quantity column"
              label-for="item-name"
            >
              <b-form-input
                id="item-name"
                type="text"
                placeholder="Currency"
                v-model='item.quantity_col'
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Rrc price  column"
              label-for="item-name"
            >
              <b-form-input
                id="item-name"
                type="text"
                placeholder="Currency"
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
              @click='changeLink(item)'
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
import axios from 'axios'
import loader from '../../../components/CssPreloader.vue'
import vSelect from 'vue-select'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

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
      nextTodoId: 2
    }
  },
  mounted() {
    this.initTrHeight()
    axios.get('http://178.250.159.216/links')
    .then(res => {
      console.log(res);
      this.items = res.data.data
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
  created() {
    window.addEventListener('resize', this.initTrHeight)
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
    changeLink(item){
      var formData = new FormData()
      if(item._id) formData.append('link', item._id)
      if(item.name_col) formData.append('name_col', item.name_col)
      if(item.opt_price_col) formData.append('opt_price_col', item.opt_price_col)
      if(item.currency_col) formData.append('currency_col', item.currency_col)
      if(item.supplier_name) formData.append('supplier_name', item.supplier_name)
      if(item.quantity_col) formData.append('quantity_col', item.quantity_col)
      if(item.rrc_price_col) formData.append('rrc_price_col', item.rrc_price_col)
      axios.post('http://178.250.159.216/links', formData)
      .then(res => {
        if(!res.data.status) this.makeToast('danger',  res.data.data, 'Error')
        else{
          this.makeToast('success',  'Link has been updated', 'Success')
        }
      })
      .catch(err => {
        console.log(err);
          this.makeToast('danger',  'Some network error occured', 'Error')
      })
    },
    removeItem(item,index) {
    console.log(item);
      var formData = new FormData()
      formData.append('link', item._id)
      axios.delete('http://178.250.159.216/links', { data: formData })
      .then(res => {
        console.log(res)
        if(!res.data.status) this.makeToast('danger',  res.data.data, 'Error')
        else{
          this.makeToast('success',  'Link has been deleted', 'Success')
        }
      })
      .catch(err => {
        console.log(err);
        this.makeToast('danger',  'Some network error occured', 'Error')
      })
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
    kaspiXml(){
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