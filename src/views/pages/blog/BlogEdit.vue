<template>
  <b-card
    v-if="Object.keys(blogEdit).length"
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
              Promo 1
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl2"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl3"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 446x262, image should be with text on it</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl1"
                    v-model="blogFile"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer"
                  />
                </div>
                <b-form-group
                  label="Product Id"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo1.Id'
                    id="basicInput"
                    placeholder="Product Id"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo1.dateDefault"
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
                    @click="FirstReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createFirstPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 2
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl4"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl5"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl6"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 446x262, image should be without text on it, write the promo text down below</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                  <b-col
                    md="6"
                    xl="4"
                    class="mb-1"
                  >
                  </b-col>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl2"
                    v-model="blogFile2"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer2"
                  />
                </div>
                <b-form-group
                  label="Bold Text Input"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo2.BoldText'
                    id="basicInput"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <b-form-group
                  label="Light Text Input"
                  label-for="basicInput2"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo2.LightText'
                    id="basicInput2"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <!-- <b-form-group
                  label="Price Input(number only)"
                  label-for="basicInput3"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo2.PriceFrom'
                    id="basicInput3"
                    placeholder="Enter Price"
                  />
                </b-form-group> -->
                <b-form-group
                  label="Promo discount(%)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo2.Discount'
                    placeholder="Enter Discount"
                  />
                </b-form-group>
                <b-form-group
                  label="Product Id"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo2.Id'
                    id="basicInput"
                    placeholder="Product Id"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo2.dateDefault"
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
                    @click="SecondReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createSecondPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 3
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="display: flex; flex-direction: column"
              >
                <b-img
                  ref="refPreviewEl7"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                /><br>
                <b-img
                  ref="refPreviewEl8"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 1400x200, image size 10mb.</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl3"
                    v-model="blogFile3"
                    accept=".jpg, .png, .gif"
                    placeholder="Choose file"
                    @input="inputImageRenderer3"
                  />
                </div>
                <br>
                <small class="text-muted">Required image resolution 400x400, image size 10mb.</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl4"
                    v-model="blogFile4"
                    accept=".jpg, .png, .gif"
                    placeholder="Choose file"
                    @input="inputImageRenderer4"
                  />
                </div>
                <b-form-group
                  label="Big Promo Text(e.g. Week Deal)"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo3.BoldText'
                    id="basicInput"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <b-form-group
                  label="Small Bold Promo Text(e.g. HURRY UP BEFORE OFFER WILL END)"
                  label-for="basicInput2"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo3.SmallText'
                    id="basicInput2"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <b-form-group
                  label="Id of Product of Promo(e.g. 7823467781342)"
                  label-for="basicInput3"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo3.Id'
                    id="basicInput3"
                    placeholder="Enter Id"
                  />
                </b-form-group>
                <b-form-group
                  label="Promo discount(%)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.Discount'
                    placeholder="Enter Discount"
                  />
                </b-form-group>
                <!-- <b-form-group
                  label="New Price of Product(Number)"
                  label-for="basicInput4"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.NewPrice'
                    id="basicInput4"
                    placeholder="Enter Price"
                  />
                </b-form-group>
                <b-form-group
                  label="Old Price of Product(Number)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.OldPrice'
                    placeholder="Enter Price"
                  />
                </b-form-group> -->
                <!-- <b-form-group
                  label="Available number of products(Number)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.AvNum'
                    placeholder="Enter Number"
                  />
                </b-form-group>
                <b-form-group
                  label="Already sold number of products(Number)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.AlrNum'
                    placeholder="Enter Number"
                  />
                </b-form-group> -->
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo3.dateDefault"
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
                    @click="ThirdReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createThirdPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 4
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl9"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl10"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl11"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 1400x200, image should be without text on it, write the promo text down below</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                  <b-col
                    md="6"
                    xl="4"
                    class="mb-1"
                  >
                  </b-col>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl5"
                    v-model="blogFile5"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer5"
                  />
                </div>
                <b-form-group
                  label="Bold Text Input"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo4.BoldText'
                    id="basicInput"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <!-- <b-form-group
                  label="Price Input(number only)"
                  label-for="basicInput3"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo4.Price'
                    id="basicInput3"
                    placeholder="Enter Price"
                  />
                </b-form-group> -->
                <b-form-group
                  label="Promo discount(%)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo4.Discount'
                    placeholder="Enter Discount"
                  />
                </b-form-group>
                <b-form-group
                  label="Second-tier Category Name"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo4.CategoryName'
                    placeholder="Category Name"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo4.dateDefault"
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
                    @click="FourthReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createFourthPromo"
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
  </b-card>
</template>
<script>

import flatPickr from 'vue-flatpickr-component'
import {
  BCard, BMedia, BCardText, BMediaAside, BMediaBody, BForm, BRow, BCol, BFormGroup, BFormInput, BImg, BFormFile, BLink, BButton, BFormDatepicker
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
import Swal from 'sweetalert2'
import axios from 'axios'

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
    flatPickr
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      Promo1: {},
      Promo2: {},
      Promo3: {},
      Promo4: {},
      blogEdit: {},
      blogFile: [],
      blogFile2: [],
      blogFile3: [],
      blogFile4: [],
      blogFile5: [],
      categoryOption: ['Fashion', 'Food', 'Gaming', 'Quote', 'Video'],
      statusOption: ['Published', 'Pending', 'Draft'],
      snowOption: {
        theme: 'snow',
      },
    }
  },
  created() {
    this.$http.get('/blog/list/data/edit').then(res => { this.blogEdit = res.data })
  },
  setup() {
    const refInputEl1 = ref(null)
    const refInputEl2 = ref(null)
    const refInputEl3 = ref(null)
    const refInputEl4 = ref(null)
    const refInputEl5 = ref(null)
    const refPreviewEl = ref(null)
    const refPreviewEl2 = ref(null)
    const refPreviewEl3 = ref(null)
    const refPreviewEl4 = ref(null)
    const refPreviewEl5 = ref(null)
    const refPreviewEl6 = ref(null)
    const refPreviewEl7 = ref(null)
    const refPreviewEl8 = ref(null)
    const refPreviewEl9 = ref(null)
    const refPreviewEl10 = ref(null)
    const refPreviewEl11 = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl1, base64 => { refPreviewEl.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl2.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl3.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer2 } = useInputImageRenderer(refInputEl2, base64 => { refPreviewEl4.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl5.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl6.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer3 } = useInputImageRenderer(refInputEl3, base64 => { refPreviewEl7.value.src = base64[0] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer4 } = useInputImageRenderer(refInputEl4, base64 => { refPreviewEl8.value.src = base64[0] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer5 } = useInputImageRenderer(refInputEl5, base64 => { refPreviewEl9.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl10.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl11.value.src = base64[2] || "/img/03.ada37056.jpg" })


    return {
      refInputEl1,
      refInputEl2,
      refInputEl3,
      refInputEl4,
      refInputEl5,
      refPreviewEl,
      refPreviewEl2,
      refPreviewEl3,
      refPreviewEl4,
      refPreviewEl5,
      refPreviewEl6,
      refPreviewEl7,
      refPreviewEl8,
      refPreviewEl9,
      refPreviewEl10,
      refPreviewEl11,
      inputImageRenderer,
      inputImageRenderer2,
      inputImageRenderer3,
      inputImageRenderer4,
      inputImageRenderer5
    }
  },
  methods: {
    FirstReset(){
      this.blogFile = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl2"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl3"].src = this.blogEdit.featuredImage
      });
    },
    SecondReset(){
      this.blogFile2 = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl4"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl5"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl6"].src = this.blogEdit.featuredImage
      });
    },
    ThirdReset(){
      this.blogFile3 = this.blogFile4 = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl7"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl8"].src = this.blogEdit.featuredImage
      });
    },
    FourthReset(){
      this.blogFile5 = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl9"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl10"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl11"].src = this.blogEdit.featuredImage
      });
    },
    createFirstPromo() {
      var date = this.Promo1.dateDefault.split('-')
      const formData = new FormData()
      date = new Date(Number(date[0]),Number(date[1]),Number(date[2])).toISOString()
      this.blogFile.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('typeOfPromo', 1)
      formData.append('productKaspiId', this.Promo1.Id)
      formData.append('timeOfPromoEnding', date)
      formData.append('sale', 0)
      this.createFinalPromo(formData)
    },
    createSecondPromo() {
      var date = this.Promo2.dateDefault.split('-')
      var formData = new FormData()
      date = new Date(Number(date[0]),Number(date[1]),Number(date[2])).toISOString()
      this.blogFile2.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('smallPromoText', this.Promo2.LightText)
      formData.append('bigPromoText', this.Promo2.BoldText)
      formData.append('typeOfPromo', 2)
      formData.append('productKaspiId', this.Promo2.Id)
      formData.append('timeOfPromoEnding', date)
      formData.append('sale', this.Promo2.Discount)
      this.createFinalPromo(formData)
    },
    createThirdPromo() {
      var date = this.Promo3.dateDefault.split('-')
      var formData = new FormData()
      date = new Date(Number(date[0]),Number(date[1]),Number(date[2])).toISOString()
      formData.append('files', this.blogFile3)
      formData.append('files', this.blogFile4)
      formData.append('smallPromoText', this.Promo3.SmallText)
      formData.append('bigPromoText', this.Promo3.BoldText)
      formData.append('typeOfPromo', 3)
      formData.append('productKaspiId', this.Promo3.Id)
      formData.append('timeOfPromoEnding', date)
      formData.append('sale', this.Promo3.Discount)
      this.createFinalPromo(formData)
    },
    createFourthPromo() {
      var date = this.Promo4.dateDefault.split('-')
      var formData = new FormData()
      date = new Date(Number(date[0]),Number(date[1]),Number(date[2])).toISOString()
      this.blogFile5.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('bigPromoText', this.Promo4.BoldText)
      formData.append('typeOfPromo', 4)
      formData.append('categoryName', this.Promo4.CategoryName)
      formData.append('timeOfPromoEnding', date)
      formData.append('sale', this.Promo4.Discount)
      this.createFinalPromo(formData)
    },
    createFinalPromo(obj) {
      console.log(obj);
      for (var pair of obj.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
      }
      axios.post('https://textforeva.ru/promoAction/', obj)
      .then( res => {
        console.log(res);
        Swal.fire(
          'Success!',
          'Promo has been created!',
          'success'
        )
        // setTimeout(() => location.reload(), 400);
      })
      .catch( err => {
        console.log(err);
        Swal.fire(
          'Error!',
          'Some error occurred',
          'error'
        )
      })
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/pages/page-blog.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
