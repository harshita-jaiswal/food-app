/* eslint-disable no-tabs */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    recipes: [],
    selectedCategory: 'Dessert',
    searchKey: '',
    cart: 0,
    showDetail: false,
    detail: {}
  },
  getters: {
    getFav (state) {
      return state.recipes.filter((item) => item.isFavourite === true)
		},
    getSelectedCategory (state) {
      return state.recipes.filter((item) => item.category === state.selectedCategory)
		},
    getSearchList (state) {
      return state.searchKey.length ? state.recipes.filter((item) => item.name === state.searchKey) : []
		}
  },
  mutations: {
    setCategory (state, list) {
      state.categories = list
		},
    setRecipes (state, list) {
      state.recipes = list
		},
    selectCategory (state, cat) {
      state.selectedCategory = cat
		},
    addToCart (state) {
      state.cart = state.cart + 1
		},
    setSearch (state, key) {
      state.searchKey = key
		},
    showDetailStatus (state, status) {
      state.showDetail = status
		},
    setDetail (state, detail) {
      state.detail = detail
		},
    removeToCart (state) {
      state.cart = state.cart - 1
		}
  },
  actions: {}
})
