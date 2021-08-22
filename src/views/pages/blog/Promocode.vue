<template>
  <b-card
    class="blog-edit-wrapper"
  >

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Create promocode
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-body
                style="min-width:200px"
              >
                <b-form-group
                  label="Promocode(example: AD8S67)"
                  label-for="IdInput1"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promocode'
                    id="IdInput1"
                    placeholder="Enter Promocode"
                  />
                </b-form-group>
                <b-form-group
                  label="Promocode Discount(%, number only)"
                  label-for="basicInput7"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='PromocodeDiscount'
                    id="basicInput7"
                    placeholder="Enter Discount"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promocode Ending
                  </h5>
                  <flat-pickr
                    v-model="PromocodeEnding"
                    class="form-control"
                  />
                </b-form-group>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click = 'CreatePromocode'
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
      </b-row>
    </b-form>
    <!--/ form -->
    <b-table
    v-if='AllInvoices'
      ref="refInvoiceListTable"
      :items="AllInvoices"
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

      <!-- Column: Invoice Status -->
      <template #cell(invoiceStatus)="data">
        <b-avatar
          :id="`invoice-row-${data.item.id}`"
          size="32"
          :variant="`light-${resolveInvoiceStatusVariantAndIcon(data.item.invoiceStatus).variant}`"
        >
          <feather-icon
            :icon="resolveInvoiceStatusVariantAndIcon(data.item.invoiceStatus).icon"
          />
        </b-avatar>
        <b-tooltip
          :target="`invoice-row-${data.item.id}`"
          placement="top"
        >
          <p class="mb-0">
            {{ data.item.invoiceStatus }}
          </p>
          <!-- <p class="mb-0">
            Due Date: {{ data.item.dueDate }}
          </p> -->
        </b-tooltip>
      </template>

      <!-- Column: Client -->
      <template #cell(client)="data">
        <b-media vertical-align="center">
          <template #aside>
            <b-avatar
              size="32"
              :src="data.item.avatar"
              :text="avatarText(data.item.client.name)"
              :variant="`light-${resolveClientAvatarVariant(data.item.invoiceStatus)}`"
            />
          </template>
          <span class="font-weight-bold d-block text-nowrap">
            {{ data.item.client.name }}
          </span>
          <small class="text-muted">{{ data.item.client.email }}</small>
        </b-media>
      </template>

      <!-- Column: Issued Date -->
      <template #cell(issuedDate)="data">
        <span class="text-nowrap">
          {{ data.value }}
        </span>
      </template>

      <!-- Column: Balance -->
      <!-- <template #cell(balance)="data">
        <template v-if="data.value === 0">
          <b-badge
            pill
            variant="light-success"
          >
            Paid
          </b-badge>
        </template>
        <template v-else>
          {{ data.value }}
        </template>
      </template> -->

      <!-- Column: Actions -->
      <template #cell(actions)="data">

        <div class="text-nowrap">
          <!-- <feather-icon
            :id="`invoice-row-${data.item.id}-send-icon`"
            icon="SendIcon"
            class="cursor-pointer"
            size="16"
          />
          <b-tooltip
            title="Send Invoice"
            class="cursor-pointer"
            :target="`invoice-row-${data.item.id}-send-icon`"
          /> -->

          <feather-icon
            :id="`invoice-row-${data.item._id}-preview-icon`"
            icon="DeleteIcon"
            size="16"
            class="mx-1"
            @click="deletePromo(data.item._id)"
          />

          <!-- Dropdown -->
          <!-- <b-dropdown
            variant="link"
            toggle-class="p-0"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item>
              <feather-icon icon="DownloadIcon" />
              <span class="align-middle ml-50">Download</span>
            </b-dropdown-item>
            <b-dropdown-item :to="{ name: 'apps-invoice-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <feather-icon icon="CopyIcon" />
              <span class="align-middle ml-50">Duplicate</span>
            </b-dropdown-item>
          </b-dropdown> -->
        </div>
      </template>

    </b-table>
    <loader v-else />
  </b-card>
</template>
<script>

import flatPickr from 'vue-flatpickr-component'
import {
  BCard, BCardText, BMediaAside, BMediaBody, BForm, BRow, BCol, BFormGroup, BFormInput, BImg, BFormFile, BButton, BFormDatepicker, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import axios from 'axios'
import loader from '../../../components/CssPreloader.vue'
import Swal from 'sweetalert2'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { onUnmounted } from '@vue/composition-api'
import store from '@/store'
import useInvoicesList from './useInvoiceList'
import invoiceStoreModule from './invoiceStoreModule'

export default {
  components: {
    BCard,
    BMedia,
    BCardText,
    BMediaAside,
    BMediaBody,
    BForm,
    BLink,
    BImg,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormFile,
    BFormDatepicker,
    BTable,
    BAvatar,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
    loader,
    flatPickr
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      Promocode: '',
      PromocodeEnding: '',
      PromocodeDiscount: '',
      AllInvoices: null,
    }
  },
  methods: {
    CreatePromocode(){
      var date = this.PromocodeEnding.split('-')
      var self = this
      date = new Date(Number(date[0]),Number(date[1] - 1),Number(date[2])).toISOString()
      var obj = {
        date: date,
        sale: this.PromocodeDiscount,
        code: this.Promocode
      }
      console.log(obj);
      axios.post('https://textforeva.ru/promoCode/',obj)
      .then(res => {
        Swal.fire(
          'Success!',
          'Promocode has been created!',
          'success'
        )
        axios.get('https://textforeva.ru/promoCode/')
        .then(response => {
          var filteredData = JSON.parse(JSON.stringify(response.data))
          self.AllInvoices = filteredData
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(err => {
        Swal.fire(
          'Error!',
          'Some error occurred',
          'error'
        )
      })
    },
    deletePromo(id) {
      var self = this
      axios.delete('https://textforeva.ru/promoCode/', { data: { id: id } })
      .then(res => {
        console.log({id: id},res);
        Swal.fire(
          'Success!',
          'Promocode has been deleted!',
          'success'
        )
        axios.get('https://textforeva.ru/promoCode/')
        .then(response => {
          var filteredData = JSON.parse(JSON.stringify(response.data))
          self.AllInvoices = filteredData
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(err => {
        Swal.fire(
          'Error!',
          'Some error occurred',
          'error'
        )
      })
    }
  },
  created(){
    var self = this
    axios.get('https://textforeva.ru/promoCode/')
    .then(response => {
      console.log(response);
      var filteredData = JSON.parse(JSON.stringify(response.data))
      self.AllInvoices = filteredData
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
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/pages/page-blog.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
