import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "https://currate.ru/api/?get=rates&pairs=USDBYN,USDRUB,USDEUR,EURBYN,EURRUB,EURUSD,RUSBYN,RUSUSD,RUSEUR,BYNRUS,BYNUSD,BYNEUR&key=1d67f10c51117a2ba1aa1aca81aee091",
    currencies: ["BYN","RUB","USD","EUR"],
    typeOfBtns: {
      showCurrency: "showCurrency",
      changeCurrency: "changeCurrency",
      addCurrency: "addCurrency",
      removeCurrency: "removeCurrency"
    },
    baseCurrency: "",
    isShowChoiceWindow: true,
    dataFromApi: {}
  },
  getters: {
    getDataFromApi: (state) => {
      return state.dataFromApi;
    },
    getAllCurrencies: (state) => {
      return state.currencies;
    },
    getTypeOfBtns: (state) => {
      return state.typeOfBtns;
    },
    getFlags: (state) => {
      return state.flags;
    },
    getIsShowChoiceWindow : (state) => {
      return state.isShowChoiceWindow;
    },
    getCurrentCurrency: (state) => {
      return state.baseCurrency;
    }
  },
  mutations: {
    toogleIsShowChoiceWindow: (state) => {
      state.isShowChoiceWindow = !state.isShowChoiceWindow;
    },
    setCurrentCurrency: (state, payload) => {
      state.baseCurrency = payload;
      localStorage.setItem("baseCurrency", JSON.stringify(state.baseCurrency));
    },
    renderLocalStorageCurrency: (state) => {
      localStorage.getItem("baseCurrency")
        ? (state.baseCurrency = JSON.parse(localStorage.getItem("baseCurrency")))
        : "";
    },
    getAllCurrenciesFromApi: (state) => {
      axios
      .get("https://currate.ru/api/?get=currency_list&key=1d67f10c51117a2ba1aa1aca81aee091")
      .then(res => res.json())
      .then(data => state.dataFromApi = {...data})
      .catch(error => console.log(error))
    }
  },
  actions: {
    renderLocalStorageCurrency(context) {
      context.commit("renderLocalStorageCurrency");
    },
    getCurrencies(context) {
      context.commit("getAllCurrenciesFromApi");
    },
  },
})
