<template>
<div>
  <b-button
    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
    variant="primary"
    class="ml-1 mb-2"
    v-b-modal.modal-select2
  >
    Delete Promo
  </b-button>
  <b-card-code
    no-body
    :link='"https://containimages.storage-archive.pscloud.io/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-08-25%20%D0%B2%2003.52.jpg"'
    title="1 promo type"
  >
    <b-table responsive="lg" :items="FirstPromoItems"/>
  </b-card-code>
  <b-card-code
    no-body
    :link='"https://containimages.storage-archive.pscloud.io/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-08-25%20%D0%B2%2003.46.43.png"'
    title="2 promo type "
  >
    <b-table responsive="lg" :items="SecondPromoItems"/>
  </b-card-code>
  <b-card-code
    no-body
    :link='"https://containimages.storage-archive.pscloud.io/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-08-25%20%D0%B2%2003.44.37.png"'
    title="3 promo type"
  >
    <b-table responsive="lg" :items="ThirdPromoItems"/>
  </b-card-code>
  <b-card-code
    no-body
    :link='"https://containimages.storage-archive.pscloud.io/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-08-25%20%D0%B2%2003.54.40.png"'
    title="4 promo type"
  >
    <b-table responsive="lg" :items="FourthPromoItems"/>
  </b-card-code>
  <b-card-code
    no-body
    :link='"https://containimages.storage-archive.pscloud.io/2021-08-25%2004.09.27.jpg"'
    title="5 promo type"
  >
    <b-table responsive="lg" :items="FifthPromoItems"/>
  </b-card-code>
  <b-card-code
    no-body
    :link='"https://containimages.storage-archive.pscloud.io/321321.jpg"'
    title="6 promo type"
  >
    <b-table responsive="lg" :items="SixthPromoItems"/>
  </b-card-code>
  <b-card-code
    no-body
    :link='"https://containimages.storage-archive.pscloud.io/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-08-25%20%D0%B2%2004.05.57%202.jpg"'
    title="7 promo type"
  >
    <b-table responsive="lg" :items="SeventhPromoItems"/>
  </b-card-code>
    <b-modal
      id="modal-select2"
      centered
      title="Delete promoaction"
      ok-title="submit"
      cancel-variant="outline-secondary"
      @ok="deletePromo"
    >
      <b-form>
        <b-form-group
          label-for="name"
        >
          <b-form-input
            style='margin: 5px 0 5px 0;'
            id='name'
            placeholder='Enter promo Id'
            v-model='delId'
          />
        </b-form-group>

      </b-form>
    </b-modal>
</div>
</template>

<script>
import {
  BRow, BCol, BCard, BFormInput, BCardText, BCardTitle, BMedia, BAvatar, BMediaAside, BMediaBody, BImg, BCardBody, BLink, BBadge, BFormGroup, BInputGroup, BInputGroupAppend, BPagination, BTable, BForm, BModal, BButton
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { kFormatter } from '@core/utils/filter'
import ContentWithSidebar from '@core/layouts/components/content-with-sidebar/ContentWithSidebar.vue'
import axios from '@myAxios'

export default {
  components: {
    BButton,
    BCardCode,
    BForm,
    BModal,
    BTable,
    BRow,
    BCol,
    BCard,
    BFormInput,
    BCardText,
    BCardBody,
    BCardTitle,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BLink,
    BBadge,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BImg,
    BPagination,
    ContentWithSidebar,
  },
  data() {
    return {
      search_query: '',
      blogList: [],
      blogSidebar: {},
      currentPage: 1,
      perPage: 1,
      rows: 140,
      FirstPromoItems: [],
      SecondPromoItems: [],
      ThirdPromoItems: [],
      FourthPromoItems: [],
      FifthPromoItems: [],
      SixthPromoItems: [],
      SeventhPromoItems: [],
      delId: ''
    }
  },
  created() {
    this.$http.get('/blog/list/data').then(res => { this.blogList = res.data })
    this.$http.get('/blog/list/data/sidebar').then(res => { this.blogSidebar = res.data })
    this.updatePromo()
  },
  methods: {
    updatePromo(){
    axios.get(`https://textforeva.ru/promoAction/`)
    .then(response => {
      var options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      }
      console.log(response);

      var FPromo = response.data.filter(el => el.typeOfPromo == 1)
      for (let i = 0; i < FPromo.length; i++) {
        FPromo[i] = {
          "Id": FPromo[i]._id,
          "time_of_promo_ending": new Date(FPromo[i].timeOfPromoEnding).toLocaleString('en-US',options)
        }
      }
      this.FirstPromoItems = FPromo

      var SPromo = response.data.filter(el => el.typeOfPromo == 2)
      for (let i = 0; i < SPromo.length; i++) {
        SPromo[i] = {
          "Id": SPromo[i]._id,
          "product_kaspi_id": SPromo[i].productKaspiId,
          "big_promo_text": SPromo[i].bigPromoText,
          "small_promo_text": SPromo[i].smallPromoText,
          "sale": SPromo[i].sale,
          "time_of_promo_ending": new Date(SPromo[i].timeOfPromoEnding).toLocaleString('en-US',options)
        }
      }
      this.SecondPromoItems = SPromo

      var TPromo = response.data.filter(el => el.typeOfPromo == 3)
      for (let i = 0; i < TPromo.length; i++) {
        TPromo[i] = {
          "Id": TPromo[i]._id,
          "product_kaspi_id": TPromo[i].productKaspiId,
          "big_promo_text": TPromo[i].bigPromoText,
          "small_promo_text": TPromo[i].smallPromoText,
          "sale": TPromo[i].sale,
          "time_of_promo_ending": new Date(TPromo[i].timeOfPromoEnding).toLocaleString('en-US',options)
        }
      }
      this.ThirdPromoItems = TPromo

      var FPromoo = response.data.filter(el => el.typeOfPromo == 4)
      for (let i = 0; i < FPromoo.length; i++) {
        FPromoo[i] = {
          "Id": FPromoo[i]._id,
          "big_promo_text": FPromoo[i].bigPromoText,
          "link": FPromoo[i].link,
          "time_of_promo_ending": new Date(FPromoo[i].timeOfPromoEnding).toLocaleString('en-US',options)
        }
      }
      this.FourthPromoItems = FPromoo

      var FifthPromo = response.data.filter(el => el.typeOfPromo == 5)
      for (let i = 0; i < FifthPromo.length; i++) {
        FifthPromo[i] = {
          "Id": FifthPromo[i]._id,
          "link": FifthPromo[i].link,
          "time_of_promo_ending": new Date(FifthPromo[i].timeOfPromoEnding).toLocaleString('en-US',options)
        }
      }
      this.FifthPromoItems = FifthPromo

      var SixthPromo = response.data.filter(el => el.typeOfPromo == 6)
      for (let i = 0; i < SixthPromo.length; i++) {
        SixthPromo[i] = {
          "Id": SixthPromo[i]._id,
          "big_promo_text": SixthPromo[i].bigPromoText,
          "link": SixthPromo[i].link,
          "time_of_promo_ending": new Date(SixthPromo[i].timeOfPromoEnding).toLocaleString('en-US',options)
        }
      }
      this.SixthPromoItems = SixthPromo

      var SeventhPromo = response.data.filter(el => el.typeOfPromo == 7)
      for (let i = 0; i < SeventhPromo.length; i++) {
        SeventhPromo[i] = {
          "Id": SeventhPromo[i]._id,
          "big_promo_text": SeventhPromo[i].bigPromoText,
          "link": SeventhPromo[i].link,
          "time_of_promo_ending": new Date(SeventhPromo[i].timeOfPromoEnding).toLocaleString('en-US',options)
        }
      }
      this.SeventhPromoItems = SeventhPromo
    })
    .catch(function (error) {
      console.log(error);
    })
    },
    deletePromo(){
      if(Number(this.delId)) {
        axios.delete('https://textforeva.ru/promoAction/', { data: {id: this.delId} })
        .then(res => {
          console.log(res)
          this.makeToast('success',  'Promo has been deleted', 'Success')
          this.updatePromo()
        })
        .catch(err => {
          console.log(err);
          this.makeToast('danger',  'Some error occured', 'Error')
        })
      } else {
        axios.delete(' https://textforeva.ru/promoAction/govno', { data: {id: this.delId} })
        .then(res => {
          console.log(res)
          this.makeToast('success',  'Promo has been deleted', 'Success')
          this.updatePromo()
        })
        .catch(err => {
          console.log(err);
          this.makeToast('danger',  'Some error occured', 'Error')
        })
      }
    },
    kFormatter,
    tagsColor(tag) {
      if (tag === 'Quote') return 'light-info'
      if (tag === 'Gaming') return 'light-danger'
      if (tag === 'Fashion') return 'light-primary'
      if (tag === 'Video') return 'light-warning'
      if (tag === 'Food') return 'light-success'
      return 'light-primary'
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

<style lang="scss">
@import '@core/scss/vue/pages/page-blog.scss';
</style>
