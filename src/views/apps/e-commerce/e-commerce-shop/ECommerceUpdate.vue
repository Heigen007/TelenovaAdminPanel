<template>

  <!-- Table Container Card -->
  <b-card
    no-body
  >
    <b-modal
      id="modal-select2"
      centered
      title="Information"
      ok-title="submit"
      cancel-variant="outline-secondary"
      @ok="handleOk"
    >
      <b-form>
        <b-form-group label='Enter supplier_category'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder="Enter supplier_category"
            v-model='actualProduct.supplier_category'
            readonly
          />
        </b-form-group>
        <b-form-group  label='Enter first_level_category'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter first_level_category'
            v-model='actualProduct.first_level_category'
          />
        </b-form-group>
        <b-form-group  label='Enter second_level_category'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter second_level_category'
            v-model='actualProduct.second_level_category'
          />
        </b-form-group>
        <b-form-group  label='Enter third_level_category'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter third_level_category'
            v-model='actualProduct.third_level_category'
          />
        </b-form-group>
        <b-form-group  label='Enter brand'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter brand'
            v-model='actualProduct.brand'
            readonly
          />
        </b-form-group>
        <b-form-group  label='Enter name'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter name'
            v-model='actualProduct.name'
          />
        </b-form-group>
        <b-form-group  label='Enter supplier_name'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter supplier_name'
            v-model='actualProduct.supplier_name'
            readonly
          />
        </b-form-group>
        <b-form-group  label='Enter supplier'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter supplier'
            v-model='actualProduct.supplier'
            readonly
          />
        </b-form-group>
        <b-form-group  label='Enter product_count'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter product_count'
            v-model='actualProduct.product_count'
            readonly
          />
        </b-form-group>
        <b-form-group  label='Enter opt_price'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter opt_price'
            v-model='actualProduct.opt_price'
            readonly
          />
        </b-form-group>
        <b-form-group  label='Enter price'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter price'
            v-model='actualProduct.price'
            readonly
          />
        </b-form-group>
        <b-form-group  label='Enter kaspi_rating'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter kaspi_rating'
            v-model='actualProduct.kaspi_rating'
          />
        </b-form-group>
        <b-form-group  label='Enter kaspi_id'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter kaspi_id'
            v-model='actualProduct.kaspi_id'
            readonly
          />
        </b-form-group>
        <b-form-group  label='Images'>
          <b-form-input
            v-for='(el,i) in actualProduct.images'
            :key='i+"ccc"'
            style='margin: 5px 0 5px 0;'
            v-model='actualProduct.images[i]'
          />
        </b-form-group>
        <b-button
          variant="primary"
          class="btn-cart mb-2"
          style="width: 100%"
          @click='actualProduct.images.push("")'
        >
          <feather-icon
            icon="ShoppingCartIcon"
            class="mr-50"
          />
          <span>Add Image</span>
        </b-button>
        <b-form-group label='supplier_images'>
          <b-form-input
            v-for='(el,i) in actualProduct.supplier_images'
            :key='i'
            style='margin: 5px 0 5px 0;'
            v-model='actualProduct.supplier_images[i]'
            readonly
          />
        </b-form-group>
        <div>Properties</div>
        <div style='display: flex; ' class = 'my-1' v-for='(prop,o) in actualProduct.properties' :key='o'>
          <input placeholder="property" class = 'form-control' style='width: 40%' type="text" v-model='actualProduct.properties[o][0]'>
          <input placeholder="value" class = 'form-control' style='width: 40%' type="text" v-model='actualProduct.properties[o][1]'>
        </div>
        <b-button
          variant="primary"
          class="btn-cart mb-2"
          style="width: 100%;"
          @click='actualProduct.properties.push(["",""])'
        >
          <feather-icon
            icon="ShoppingCartIcon"
            class="mr-50"
          />
          <span>Add Property</span>
        </b-button>

        <div>Additional Properties</div>
        <div class = 'my-1' v-for='(prop,o) in actualProduct.additional_properties' :key='o'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter additional_properties title'
            v-model='actualProduct.additional_properties[o][0]'
          />
          <div v-for='(addProp,y) in actualProduct.additional_properties[o][1]' :key='y'>
            <input placeholder="property" class = 'form-control' style='width: 40%' type="text" v-model='actualProduct.additional_properties[o][1][y][0]'>
            <input placeholder="value" class = 'form-control mb-1' style='width: 40%' type="text" v-model='actualProduct.additional_properties[o][1][y][1]'>
          </div>
          <b-button
            variant="primary"
            class="btn-cart mb-2"
            style="width: 100%;"
            @click='actualProduct.additional_properties[o][1].push(["",""])'
          >
            <feather-icon
              icon="ShoppingCartIcon"
              class="mr-50"
            />
            <span>Add Property</span>
          </b-button>
        </div>
        <b-button
          variant="primary"
          class="btn-cart mb-2"
          style="width: 100%;"
          @click='actualProduct.additional_properties.push(["",[["",""]]])'
        >
          <feather-icon
            icon="ShoppingCartIcon"
            class="mr-50"
          />
          <span>Add Additional Property</span>
        </b-button>
        <b-form-group
          label-for="vue-select"
        >
            <b-form-checkbox
                style='margin: 5px 0 5px 0;'
                v-model="actualProduct.on_kaspi"
                class="custom-control-info"
            >
                Existing product on kaspi?
            </b-form-checkbox>
        </b-form-group>

        <div v-if='actualProduct.on_kaspi'>
          <b-form-group label='KASPI RAZMETKA'>
            <b-form-input
              style='margin: 5px 0 5px 0;'
              v-model='kaspiR'
            />
          </b-form-group>
          <b-button
            variant="primary"
            class="btn-cart mb-2"
            style="width: 100%;"
            @click='addR'
          >
            <feather-icon
              icon="ShoppingCartIcon"
              class="mr-50"
            />
            <span>Add razmetka</span>
          </b-button>
        </div>

        <b-form-group
          label-for="vue-select"
        >
            <b-form-checkbox
                style='margin: 5px 0 5px 0;'
                v-model="actualProduct.on_site"
                class="custom-control-info"
            >
                Existing product on site?
            </b-form-checkbox>
        </b-form-group>

        <div v-if='actualProduct.on_site'>
          <b-form-group label='Site id'>
            <b-form-input
              style='margin: 5px 0 5px 0;'
              v-model='actualProduct.site_id'
            />
          </b-form-group>
        </div>

      </b-form>
    </b-modal>
    <b-table
      v-if='AllInvoices'
      ref="refInvoiceListTable"
      :items="AllInvoices.slice((pageNum - 1) * 50, pageNum * 50)"
      responsive
      :fields="tableColumns"
      primary-key="id"
      :sort-by.sync="sortBy"
      show-empty
      empty-text="No matching records found"
      :sort-desc.sync="isSortDirDesc"
      class="position-relative"
    >

      <template #head(invoiceStatus)>
        <feather-icon
          icon="TrendingUpIcon"
          class="mx-auto"
        />
      </template>

      <!-- Column: Id -->
      <template #cell(id)="data">
        <b-link
          :to="{ name: 'apps-invoice-preview', params: { id: data.item.id }}"
          class="font-weight-bold"
        >
          #{{ data.value }}
        </b-link>
      </template>

      <template #cell(actions)="data">

        <div class="text-nowrap">

          <feather-icon
            @click="chData(data.item.mainInfo)"
            :id="`invoice-row-${data.item.id}-preview-icon`"
            icon="EyeIcon"
            size="16"
            class="mx-1"
            v-b-modal.modal-select2
          />
        </div>
      </template>

    </b-table>

    <loader v-else />

    <section v-if='AllInvoices'>
      <b-row>
        <b-col cols="12">
          <b-pagination
            v-model="pageNum"
            :total-rows="AllInvoices.length"
            :per-page="50"
            first-number
            align="center"
            last-number
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon
                icon="ChevronLeftIcon"
                size="18"
              />
            </template>
            <template #next-text>
              <feather-icon
                icon="ChevronRightIcon"
                size="18"
              />
            </template>
          </b-pagination>
        </b-col>
      </b-row>
    </section>
  </b-card>

</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, VBModal,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip, BFormCheckbox, BFormGroup, BForm,
  BCardText, BFormFile, BMediaAside, BMediaBody, BImg
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { onUnmounted } from '@vue/composition-api'
import store from '@/store'
import useInvoicesList from './useInvoiceList'
import axios from 'axios'
import invoiceStoreModule from './invoiceStoreModule'
import loader from '../../../../components/CssPreloader.vue'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BCard,
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
    BCardText, BFormFile, BMediaAside, BMediaBody, BImg,

    vSelect,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data(){
    return{
      AllInvoices: null,
      pageNum: 1,
      checkbox: false,
      arr: {
        'name1': 'name11',
        'name2': 'name22'
      },
      blogEdit: {},
      blogFile: [],
      actualProduct: {},
      kaspiR: '',
    }
  },
  created(){
    this.$http.get('/blog/list/data/edit').then(res => { this.blogEdit = res.data; })
    var self = this
    axios.get('http://178.250.159.216/queryes?count=2&start=1')
    .then(res => {
      axios.get(`http://178.250.159.216/queryes?count=${res.data.max}&start=1`)
      .then(response => {
        console.log(response)
        var filteredData = JSON.parse(JSON.stringify(response.data.data))
        for(var i = 0; i < response.data.data.length; i++){
          filteredData[i] = {
            Name: filteredData[i]._id,
            mainInfo: filteredData[i]
          }
        }
        self.AllInvoices = filteredData
      })
      .catch(error => {
        console.log(error)
      })
    })
    .catch(error => {
      console.log(error)
    })
  },

  setup() {

    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const statusOptions = [
      'Downloaded',
      'Draft',
      'Paid',
      'Partial Payment',
      'Past Due',
    ]

    const {
      fetchInvoices,
      tableColumns,
      perPage,
      currentPage,
      totalInvoices,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,

      statusFilter,

      refetchData,

      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    } = useInvoicesList()
    return {
      fetchInvoices,
      tableColumns,
      perPage,
      currentPage,
      totalInvoices,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,

      statusFilter,

      refetchData,

      statusOptions,

      avatarText,
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    }
  },
  methods: {
    makeToast(variant = null, content, title) {
      this.$bvToast.toast(content, {
        title: title,
        variant,
        solid: true,
        content: 'Info'
      })
    },
    handleOk(){
      var obj = JSON.parse(JSON.stringify(this.actualProduct))
      var a = Object.keys(obj.properties).length
      var d = {properties: {}}

      for (let i = 0; i < a; i++) {
        console.log(obj.properties[i][0]);
        var l = obj.properties[i][0];
        d.properties[l] = obj.properties[i][1]
      }
      obj.properties = d.properties
////////////////////////////////////////////////////////////////// 
      var additionalProductsLength = Object.keys(obj.additional_properties).length
      var additionalProducts = obj.additional_properties
      console.log(additionalProducts, obj.additional_properties);
      var resultPr = {additional_properties: {}}

      for (let index = 0; index < additionalProductsLength; index++) {
        resultPr.additional_properties[additionalProducts[index][0]] = {}
        var innerAdditionalProducts = this.actualProduct.additional_properties[index][1]

        for (let addProp = 0; addProp < innerAdditionalProducts.length; addProp++) {
          resultPr.additional_properties[additionalProducts[index][0]][innerAdditionalProducts[addProp][0]] = innerAdditionalProducts[addProp][1]
        }
        
      }
      obj.additional_properties = resultPr.additional_properties
/////////////////////////////////////////////////////////////////
      console.log(obj);
      var formData = new FormData()
      var keys = Object.keys(obj)
      for (let index = 0; index < keys.length; index++) {
        formData.append(keys[index], obj[keys[index]])
      }
      formData.set('additional_properties',JSON.stringify(obj.additional_properties))
      formData.set('properties',JSON.stringify(obj.properties))
      formData.set('images',JSON.stringify(obj.images))
      if(obj.third_level_category == '') formData.set('third_level_category','not show')
      axios.post('http://178.250.159.216:5000/query_upload', formData)
      .then(res => {
        console.log(res);
        if(res.data.status) {
          this.makeToast('success',  'Information has been updated', 'Success')
        } else {
          this.makeToast('danger',  'Please, fill all the fields', 'Error')
        }
      })
      .catch(err => {
        this.makeToast('danger',  'Some network error occured', 'Error')
      })
    },
    chData(data2){
      var data = JSON.parse(JSON.stringify(data2))
      var arr = []
      data.on_site = data.already_in_site
      data.id = data._id
      delete data._id
      var copy = Object.keys(data.properties)
      for (let i = 0; i < Object.keys(data.properties).length; i++) {
        arr.push([copy[i],data.properties[copy[i]]])
      }
      data.properties = arr
//////////////////////////////////////////////////////////////
      var arr2 = []
      var copy2 = Object.keys(data.additional_properties)

      for (let i = 0; i < Object.keys(data.additional_properties).length; i++) {
        arr2.push([copy2[i],[]])
        var copy3 = data.additional_properties[copy2[i]]
        console.log(copy3);
        var copy4 = Object.keys(copy3)
        for (let o = 0; o < Object.keys(copy3).length; o++) {
          console.log(arr2,copy4);
          arr2[i][1].push([copy4[o],data.additional_properties[copy2[i]][copy4[o]]])
        }
      }
      console.log(arr2);
      data.additional_properties = arr2
///////////////////////////////////////////////////////////////
      this.actualProduct = data
    },
    addR(){
      var form = new FormData()
      form.append('markup', this.kaspiR)
      console.log(this.kaspiR);
      axios.post('http://178.250.159.216/parce_markup', form)
      .then(res => {
        console.log(res);
        this.chData(res.data.data)
      })
      .catch(err => {
        console.log(err);
        // chData(res.data.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;

  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }

  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
