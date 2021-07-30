import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state:({
    BackUrl: 'https://textforeva.ru',
    WsConnection: null,
    AllProducts: [],
    AllProductsCopy: [],
    Categories: null,
    IsAdmin: false
  }),
  mutations: {
    SetLoader(state){
      state.IsAdmin = false
    },
    SetLoaderTrue(state){
      state.IsAdmin = true
    },
    SetWs(state, ws){
      state.WsConnection = ws
    },
    ChProductsCopy(state, products){
      var arr = products
      state.AllProducts = arr
      state.AllProductsCopy = arr
      state.IsAdmin = true
    },
    SetProducts(state, updatedVersion) {
      state.AllProducts = updatedVersion
    },
    SetCategories(state, response){
      state.Categories = response
    },
    Filter(state, e) {
      var PriceRange
      switch (e[0]) {
        case '<=20000 тг.':
          PriceRange = [0,20000]
          break;
        case '20000 тг. - 100000 тг.':
          PriceRange = [20000,100000]
          break;
        case '100000 тг. - 300000 тг.':
          PriceRange = [100000,300000]
          break;
        case '300000 тг. - 1000000 тг.':
          PriceRange = [300000,1000000]
          break;
        case '1000000 тг. +':
          PriceRange = [1000000,10000000]
          break;
        default:
          PriceRange = false
      }
      if(!PriceRange){
        var JSON_Obj = 
        {
          "action": "search",
          "agent": "client",
          "data": {
            "query": "",
            "filters": {
              "firstLevelCategory": e[1]
            }
          }
        }        
      } else if(e[1] == '') {
        var JSON_Obj = 
        {
          "action": "search",
          "agent": "client",
          "data": {
            "query": "",
            "filters": {
              "priceRange": PriceRange
            }
          }
        }  
      } else {
        var JSON_Obj = 
        {
          "action": "search",
          "agent": "client",
          "data": {
            "query": "",
            "filters": {
              "priceRange": PriceRange,
              "firstLevelCategory": e[1]
            }
          }
        }  
      }
      console.log(JSON_Obj);
      state.WsConnection.send(JSON.stringify(JSON_Obj))
    }
  },
  actions: {
    StartShopGetter({ commit, dispatch }){
      
      dispatch('connect')
      axios.get(`https://textforeva.ru/storage`)
      .then(response => {
        console.log(response);
        commit('SetProducts', response.data)
        commit('SetLoaderTrue')
      })
      .catch(function (error) {
        console.log(error);
      })
  
      axios.get(`https://textforeva.ru/storage/getAllCategories`)
      .then(response => {
        commit('SetCategories', response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    async connect ({ commit, dispatch }) {
      console.log('connect');
      var connection = new WebSocket(`wss://textforeva.ru/ws/`)
      connection.onmessage = async (msg) => {
        let data = JSON.parse(msg.data)
        commit('ChProductsCopy', data.products)
        commit('SetLoaderTrue')
      }
      connection.onopen = function () {
        console.log('START WEBSOCKET CONNECTION');
        commit('SetWs',connection)
      };
      connection.onclose = async e => {
        console.log('CLOSE WEBSOCKET CONNECTION')
        setTimeout(() => dispatch('connect'), 1)
      }
      connection.onerror = (err) => {
        console.log(err)
      }
    }
  },
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
  },
  strict: process.env.DEV,
})
