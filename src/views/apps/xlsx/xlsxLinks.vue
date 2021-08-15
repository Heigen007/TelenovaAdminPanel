<template>
  <b-card-code title="Repeating Forms">
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
          :id="item.id"
          :key="item.id"
          ref="row"
        >

          <!-- Item Name -->
          <b-col md="4">
            <b-form-group
              label="Item Name"
              label-for="item-name"
            >
              <b-form-input
                id="item-name"
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
                v-model='item.link'
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
    <br>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="addProxy"
      class='mt-2'
    >
      <span>Add Proxy</span>
    </b-button>

  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import axios from 'axios'

export default {
  components: {
    BCardCode,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      items: [{
        id: 1,
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0,
      }],
      Links: [],
      nextTodoId: 2,
    }
  },
  mounted() {
    this.initTrHeight()
    axios.get('http://192.168.219.170:5000/links')
    .then(res => {
      console.log(res);
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

    },
    removeItem(index) {
      // this.items.splice(index, 1)
      // this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
    kaspiXml(){
    },
    addProxy(){
    }
  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>
