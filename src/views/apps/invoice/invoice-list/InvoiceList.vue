<template>

  <!-- Table Container Card -->
  <b-card
    no-body
  >


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

    
  <!-- <template #head(invoiceStatus)>
        <feather-icon
          icon="TrendingUpIcon"
          class="mx-auto"
        />
      </template> -->

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
      <!-- Column: Delivery status -->
       <template #cell(deliveryStatus)="data">
        
          <p class="mb-0">
            {{ data.item.deliveryStatus }}
          </p>
          <!-- <p class="mb-0">
            Due Date: {{ data.item.dueDate }}
          </p> -->
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

      <!-- Column: Actions s -->
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
            :id="`invoice-row-${data.item.id}-preview-icon`"
            icon="EyeIcon"
            size="16"
            class="mx-1"
            @click="$router.push({ name: 'apps-invoice-preview', params: { id: data.item.id }})"
          />
          <b-tooltip
            title="Preview Invoice"
            :target="`invoice-row-${data.item.id}-preview-icon`"
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
    <div class="mx-2 mb-2">
      <b-row>

        <b-col
          cols="12"
          sm="6"
          class="d-flex align-items-center justify-content-center justify-content-sm-start"
        >
          <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.to }} entries</span>
        </b-col>
        <!-- Pagination -->
        <b-col
          cols="12"
          sm="6"
          class="d-flex align-items-center justify-content-center justify-content-sm-end"
        >

          <!-- <b-pagination
            v-model="currentPage"
            :total-rows="AllInvoices.length"
            :per-page="perPage"
            first-number
            last-number
            class="mb-0 mt-1 mt-sm-0"
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
          </b-pagination> -->

        </b-col>

      </b-row>
    </div>
  </b-card>

</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { onUnmounted } from '@vue/composition-api'
import store from '@/store'
import useInvoicesList from './useInvoiceList'
import axios from '@myAxios'
import invoiceStoreModule from '../invoiceStoreModule'
import loader from '../../../../components/CssPreloader.vue'

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

    vSelect,
  },
  data(){
    return{
      AllInvoices: null,
    }
  },
  created(){
    var self = this
    axios.get('https://textforeva.ru/order')
    .then(response => {
      var filteredData = JSON.parse(JSON.stringify(response.data))
      for(var i = 0; i < response.data.length; i++){
        filteredData[i] = {
          id: filteredData[i]._id,
          issuedDate: Date.parse(new Date(filteredData[i].date)),
          total: filteredData[i].finishPrice,
          avatar: '',
          invoiceStatus: filteredData[i].paymentStatus == 'notPaid' ? 'Not Paid' : 'Paid' ,
          deliveryStatus: filteredData[i].orderStatus == 'delivered' ? 'Delivered' : 'Not Delivered' ,

          balance: 100,
          dueDate: new Date(filteredData[i].date).toLocaleString().split(',')[0],
          client: {
            address: filteredData[i].address,
            email: filteredData[i].email,
            name: filteredData[i].name
          }
        }
      }
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
