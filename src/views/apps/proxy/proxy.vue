
<template>
  <b-card-code title="Proxy list">
    <b-modal
      id="modal3"
      centered
      title="Basic Modal"
      ok-title="submit"
      cancel-variant="outline-secondary"
      @ok="addProxy"
    >
      <b-form-group
        label="Enter Proxy"
        label-for="name"
      >
        <b-form-textarea
          style='margin: 5px 0 5px 0;'
          id="name"
          v-model='proxy'
          placeholder="Proxy"
          rows="3"
          max-rows="5"
        ></b-form-textarea>
      </b-form-group>
    </b-modal>
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
          :_id="item._id"
          :key='"item._id"+index'
          ref="row"
        >
          <b-col md="4">
            <b-form-group
              label="Item link"
              :label-for='"item-name"+index'
            >
              <b-form-input
                :id='"item-name"+index'
                type="text"
                placeholder="Link"
                v-model='item._id'
              />
            </b-form-group>
          </b-col>

          <b-col
            v-if='isLink(item)'
            md="2"
            style='align-items: center; display: flex'
            class="mb-50"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="outline-info"
              class="mt-0 mt-md-2"
              @click='changeProxy(item._id)'
            >
              <span>Create</span>
            </b-button>
          </b-col>
          <!-- Remove Button -->
          <b-col
            v-if='!isLink(item)'
            md="2"
            style='align-items: center; display: flex'
            class="mb-50"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="outline-danger"
              class="mt-0 mt-md-2"
              @click="removeItem(item._id,index)"
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
      variant="primary"
      class='mt-2'
      v-b-modal.modal3
    >
      <span>Rewrite all proxy</span>
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
      nextTodoId: 2,
      proxy: '',
      itemsCopy: []
    }
  },
  mounted() {
    this.initTrHeight()
    axios.get('http://178.250.159.216/proxy')
    .then(res => {
      console.log(res.data.data)
      this.items = res.data.data
      this.itemsCopy = JSON.parse(JSON.stringify(res.data.data))
      for (let index = 0; index < this.items.length; index++) {
        setTimeout(() => {
          this.trAddHeight(this.$refs.row[0].offsetHeight)
        }, (index+1)*150)
      }
    })
    .catch(err => {
      console.log(err)
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
        _id: this.nextTodoId += 1
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    changeProxy(item){
      var formData = new FormData()
      formData.append('proxy_link', item)
      axios.put('http://178.250.159.216/proxy', formData)
      .then(res => {
        if(!res.data.status) this.makeToast('danger',  res.data.data, 'Error')
        else{
          this.items = res.data.data
          this.itemsCopy = JSON.parse(JSON.stringify(res.data.data))
          this.makeToast('success',  'Proxy has been added', 'Success')
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
      formData.append('proxy_link', item)
      axios.delete('http://178.250.159.216/proxy', { data: formData })
      .then(res => {
        console.log(res)
        if(!res.data.status) this.makeToast('danger',  res.data.data, 'Error')
        else{
          this.makeToast('success',  'Proxy has been deleted', 'Success')
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
    addProxy(){
      var formData = new FormData()
      formData.append('proxy', this.proxy)
      axios.post('http://178.250.159.216/proxy', formData)
      .then(res => {
        console.log(res)
        if(!res.data.status) this.makeToast('danger',  res.data.data, 'Error')
        else{
          this.makeToast('success',  'Proxy has been created', 'Success')
          location.reload()
        }
      })
      .catch(err => {
        console.log(err);
        this.makeToast('danger',  'Some network error occured', 'Error')
      })
    },
    makeToast(variant = null, content, title) {
      this.$bvToast.toast(content, {
        title: title,
        variant,
        solid: true,
        content: 'asas'
      })
    },
    isLink(id){
      var arr = this.itemsCopy.filter(el => el._id == id._id)
      console.log(arr);
       return arr.length == 0
    }
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
