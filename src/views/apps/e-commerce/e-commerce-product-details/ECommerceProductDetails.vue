<template>
  <section class="app-ecommerce-details">
    <b-modal
      id="modal-select2"
      centered
      title="Add sale"
      ok-title="submit"
      cancel-variant="outline-secondary"
      @ok="handleOk"
    >
      <b-form>
        <b-form-group  label='Enter sale'>
          <b-form-input
            style='margin: 5px 0 5px 0;'
            placeholder='Enter sale'
            v-model='sale'
            type='number'
            max='2'
          />
        </b-form-group>
      </b-form>
    </b-modal>
    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="product === undefined"
    >
      <h4 class="alert-heading">
        Error fetching product data
      </h4>
      <div class="alert-body">
        No item found with this item slug. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-e-commerce-shop'}"
        >
          Shop
        </b-link>
        for other items.
      </div>
    </b-alert>

    <!-- Content -->
    <b-card
    v-if="product"
      no-body
    >
      <b-card-body>
        <b-row class="my-2">

          <!-- Left: Product Image Container -->
          <b-col
            cols="12"
            md="5"
            class="d-flex align-items-center justify-content-center mb-2 mb-md-0"
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-img
                :src="product.offerData.images[0]"
                :alt="`Image of ${product.offerData.kaspi_name}`"
                class="product-img"
                fluid
              />
            </div>
          </b-col>

          <!-- Right: Product Details -->
          <b-col
            cols="12"
            md="7"
          >
            <!-- Product Name -->
            <h4>{{ product.offerData.kaspi_name }}</h4>

            <b-card-text class="mt-1">
              Kaspi Id:  <span class="text-success">{{product.offerData.kaspi_id}}</span>
            </b-card-text>

            <!-- Product Brand -->
            <b-card-text class="mt-1">
              <span>actual_supplier: </span>
              <span class="text-success">{{ product.offerData.actual_supplier }}</span>
            </b-card-text>

            <b-card-text class="mt-1">
              <span>seller: </span>
              <span class="text-success">{{ product.offerData.seller }}</span>
            </b-card-text>

            <b-card-text class="mt-1">
              <span>on kaspi: </span>
              <span v-if='product.offerData.on_kaspi' class="text-success">{{ product.offerData.on_kaspi }}</span>
              <span v-if='!product.offerData.on_kaspi' class="text-danger">{{ product.offerData.on_kaspi }}</span>
            </b-card-text>

            <b-card-text class="mt-1">
              <span>prev_kaspi: </span>
              <span class="text-success">{{ product.offerData.prev_kaspi }}</span>
            </b-card-text>

            <b-card-text class="mt-1">
              <span>opt_price: </span>
              <span class="text-success">{{ product.offerData.opt_price }}</span>
            </b-card-text>

            <b-card-text class="mt-1">
              <span>category_list: </span>
              <span class="text-info">{{ product.offerData.category_list.join(' -> ') }}</span>
            </b-card-text>

            <b-card-text v-if='product.sale' class="mt-1">
              Sale:  <span class="text-success">{{product.sale}}%</span>
            </b-card-text>
            <!-- Price And Ratings -->
            <div class="ecommerce-details-price d-flex flex-wrap mt-1">
              <h4 class="item-price mr-1">
                {{ product.offerData.price }} тг.
              </h4>
              <ul class="unstyled-list list-inline pl-1 border-left">
                <li
                  v-for="star in 5"
                  :key="star"
                  class="ratings-list-item mr-25"
                >
                  <feather-icon
                    icon="StarIcon"
                    size="18"
                    :class="[{'fill-current': star <= product.offerData.kaspi_rating/2}, star <= product.offerData.kaspi_rating/2 ? 'text-warning' : 'text-muted']"
                  />
                </li>
              </ul>
            </div>

            <!-- Avability -->
            <b-card-text>inStock:  
              <span v-if='product.inStock' class="text-success">{{product.inStock}}</span>
              <span v-if='!product.inStock' class="text-danger">{{product.inStock}}</span>
            </b-card-text>

            <!-- Product Description -->
            <!-- <b-card-text>{{ product.description }}</b-card-text> -->

            <!-- Product Meta [Free shpping, EMI, etc.] -->
            <ul class="product-features list-unstyled">
              <!-- <li v-if="product.hasFreeShipping">
                <feather-icon icon="ShoppingCartIcon" />
                <span>Free Shipping</span></li>
              <li>
                <feather-icon icon="DollarSignIcon" />
                <span>EMI options available</span>
              </li> -->
            </ul>

            <hr>

            <!-- Colors -->
            <!-- <div class="product-color-options">
              <h6>Colors</h6>
              <ul class="list-unstyled mb-0">
                <li
                  v-for="color in product.colorOptions"
                  :key="color"
                  class="d-inline-block"
                  :class="{'selected': selectedColor === color}"
                  @click="selectedColor = color"
                >
                  <div
                    class="color-option"
                    :class="`b-${color}`"
                  >
                    <div
                      class="filloption"
                      :class="`bg-${color}`"
                    />
                  </div>
                </li>
              </ul>
            </div>

            <hr> -->

            <!-- <vue-select-multiple /> -->
            
            <div class="d-flex flex-column flex-sm-row pt-1">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0"
                @click="AddingRelatedProducts = !AddingRelatedProducts"
              >
                <feather-icon
                  icon="PlusCircleIcon"
                  class="mr-50"
                />
                <span>Add Related Products</span>
              </b-button>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0"
                v-b-modal.modal-select2
              >
                <feather-icon
                  icon="PlusCircleIcon"
                  class="mr-50"
                />
                <span>Add Sale</span>
              </b-button>
              <b-button
                v-if='product.sale'
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="danger"
                class="btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0"
                @click='removeSale'
              >
                <feather-icon
                  icon="MinusCircleIcon"
                  class="mr-50"
                />
                <span>Remove Sale</span>
              </b-button>
            </div>
          </b-col>
        </b-row>
        <b-card-code
          v-if="AddingRelatedProducts"
          title="Adding Related Products"
        >
          <div>
            <b-form
              ref="form"
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
                <b-col md="6">
                  <b-form-group
                    label="Product Id"
                    :label-for="String(index)"
                  >
                    <b-form-input
                      :id="String(index)"
                      class = 'AddedRelatedProducts'
                      type="text"
                      placeholder="Product Id"
                    />
                  </b-form-group>
                </b-col>

                <!-- Remove Button -->
                <b-col
                  lg="2"
                  md="3"
                  class="mb-50"
                >
                  <b-button
                    v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                    variant="outline-danger"
                    class="mt-0 mt-md-2"
                    @click="removeItem(index)"
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
            class="mt-2"
            variant="primary"
            @click='AddRelatedProducts'
          >
            <feather-icon
              icon="CheckIcon"
              class="mr-25"
            />
            <span>Save</span>
          </b-button>
        </b-card-code>
      </b-card-body>

      <!-- Static Content -->
      <e-commerce-product-details-item-features />

      <!-- Static Content -->
      <!-- Slider: Related Products -->
      <e-commerce-product-details-related-products v-if='product.similarProducts' :MainId='product.offerData.kaspi_id' :info='product.similarProducts' />
    </b-card>
  </section>
</template>

<script>
import Ripple from 'vue-ripple-directive'
import BCardCode from '@core/components/b-card-code'
import { useRouter } from '@core/utils/utils'
import store from '@/store'
import { ref } from '@vue/composition-api'
import {
  BCard, BCardBody, BRow, BCol, BImg, BCardText, BLink, BButton, BAlert, BForm, BFormGroup, BFormInput,
} from 'bootstrap-vue'
import ECommerceProductDetailsItemFeatures from './ECommerceProductDetailsItemFeatures.vue'
import ECommerceProductDetailsRelatedProducts from './ECommerceProductDetailsRelatedProducts.vue'
import { useEcommerceUi } from '../useEcommerce'
import { codeBasic } from './code'
import VueSelectMultiple from './VueSelectMultiple.vue'
import axios from '@myAxios'

export default {
  directives: {
    Ripple,
  },
  components: {
    // BSV
    VueSelectMultiple,
    BCardCode,
    BCard,
    BCardBody,
    BRow,
    BCol,
    BImg,
    BCardText,
    BLink,
    BButton,
    BAlert,
    BForm,
    BFormGroup,
    BFormInput,

    // SFC
    ECommerceProductDetailsItemFeatures,
    ECommerceProductDetailsRelatedProducts,
  },
  data() {
    return {
      items: [],
      nextTodoId: 2,
      codeBasic,
      AddingRelatedProducts: false,
      product: null,
      sale: 0
    }
  },
  watch: {
    $route: function (val) {
      var self = this
      axios.get(`https://textforeva.ru/storage/kaspi_id/${this.$route.params.slug}`)
      .then(response => {
        console.log(response)
        self.product = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
  },
  created(){
    var self = this
    axios.get(`https://textforeva.ru/storage/kaspi_id/${this.$route.params.slug}`)
    .then(response => {
      console.log(response)
      self.product = response.data
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    removeSale(){
      axios.delete('https://textforeva.ru/sale', {data: { productKaspiId: this.$route.params.slug }})
      .then(res => {
        console.log(res);
        this.makeToast('success',  'Sale has been deleted', 'Success')
        this.product.sale = null
      })
      .catch(err => {
        this.makeToast('danger', 'Some error occured', 'Error')
      })
    },
    handleOk(){
      if(this.sale < 1 || this.sale >= 100) {
        return this.makeToast('danger', 'Sale is incorrect', 'Error')
      }
      axios.post('https://textforeva.ru/sale', {sale: Number(this.sale), productKaspiId: this.$route.params.slug})
      .then(res => {
        console.log(res);
        if(res.data.message){
          this.makeToast('danger', res.data.message, 'Error')
        } else {
          this.makeToast('success',  'Sale has been added', 'Success')
          this.product.sale = this.sale          
        }
      })
      .catch(err => {
        this.makeToast('danger', 'Some error occured', 'Error')
      })
    },
    makeToast(variant = null, content, title) {
      this.$bvToast.toast(content, {
        title: title,
        variant,
        solid: true,
        content: 'Info'
      })
    },
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
    AddRelatedProducts(){
      var inputs = document.querySelectorAll('.AddedRelatedProducts')
      var arr = []
      inputs.forEach(element => {
        arr.push(element.value)
      });
      console.log(arr);
      axios.post('https://textforeva.ru/storage/addSimilarGoods',{
        "kaspi_id": this.$route.params.slug, 
        "similarProductsId": arr
      })
      .then(response => {
        console.log(response)
        self.product = response.data
        location.reload()
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce-details.scss";
@import '@core/scss/vue/libs/vue-select.scss';
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>
