<template>
  <section id="feather-icons">
    <div class="icon-search-wrapper my-3 mx-auto">
      <b-form-group>
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="icons-search"
            v-model="seachQuery"
            placeholder="Search Categories"
          />
        </b-input-group>
      </b-form-group>
    </div>
    <div v-if='categories'
      id="icons-container"
      class="d-flex flex-wrap"
    >
      <router-link :to='"/chCategory?" + Object.keys(icon)[0]'
        v-for="(icon,i) in FilteredCategories"
        :key="i">
        <CatCard :icon='icon' />
      </router-link>
    </div>
    <loader v-else />
  </section>
</template>

<script>
import loader from '../../../components/CssPreloader.vue'
import {
  BFormGroup, BInputGroup, BInputGroupPrepend, BFormInput, BCard, BCardText, VBTooltip,
} from 'bootstrap-vue'
import CatCard from './CatCard.vue'
import { useClipboard } from '@vueuse/core'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { useToast } from 'vue-toastification/composition'
import axios from 'axios'
export default {
  components: {
    BCard,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BCardText,
    BInputGroupPrepend,
    CatCard,
    loader,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      seachQuery: '',
      categories: null,
    }
  },
  created(){
    var self = this
    axios.get(`${this.$store.state.BackUrl}/storage/getAllCategories`)
    .then(response => {
      console.log(response.data);
      self.categories = response.data
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  computed: {
    FilteredCategories() {
      const seachQueryIcon = this.seachQuery
      return this.categories.filter(item => Object.keys(item)[0].includes(seachQueryIcon))
    },
  },
  setup() {
    const toast = useToast()
    const { copy } = useClipboard()

    const copyIconName = iconName => {
      copy(iconName)

      toast({
        component: ToastificationContent,
        props: {
          title: 'Icon name copied',
          icon: 'CopyIcon',
          variant: 'success',
        },
      })
    }

    return {
      copyIconName,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/ui-feather.scss';
</style>

