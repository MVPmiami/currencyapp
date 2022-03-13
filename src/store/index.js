import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://currate.ru/api/?get=rates&pairs=USDBYN,USDRUB,USDEUR,EURBYN,EURRUB,EURUSD,RUSBYN,RUSUSD,RUSEUR,BYNRUS,BYNUSD,BYNEUR&key=1d67f10c51117a2ba1aa1aca81aee091",
    currencies: ["BYN", "RUB", "USD", "EUR"],
    typeOfBtns: {
      showCurrency: "showCurrency",
      changeCurrency: "changeCurrency",
      addCurrency: "addCurrency",
      removeCurrency: "removeCurrency",
    },
    baseCurrency: "",
    isShowChoiceWindow: true,
    dataFromApi: {
      status: 200,
      message: "rates",
      data: {
        USDBYN: "2.20558",
        USDRUB: "64.1824",
        USDEUR: "0.92674",
        EURBYN: "2.37994",
        EURRUB: "69.244",
        EURUSD: "1.07905",
        RUBBYN: "0.0343642",
        RUBUSD: "0.0155806",
        RUBEUR: "0.0144437",
        BYNRUB: "29.1002",
        BYNUSD: "0.453396",
        BYNEUR: "0.420182",
      },
    },
    convertedData: {},
    convertedCurrencies: [],
  },
  getters: {
    getConvertedCurrencies: (state) => {
      return state.convertedCurrencies;
    },
    getDataFromApi: (state) => {
      return state.dataFromApi;
    },
    getConvertedDataFromApi: (state) => {
      return state.convertedData;
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
    getIsShowChoiceWindow: (state) => {
      return state.isShowChoiceWindow;
    },
    getCurrentCurrency: (state) => {
      return state.baseCurrency;
    },
  },
  mutations: {
    setConvertedCurrencies: (state) => {
      state.convertedCurrencies = [];
      state.currencies.filter((cur) => {
        if (cur !== state.baseCurrency) {
          state.convertedCurrencies.push(cur);
        }
      });
    },
    getDataFromApiForCurrentCurrency: (state) => {
      state.convertedData = {};
      let dataFromApi = state.dataFromApi.data;
      for (let key in dataFromApi) {
        if (key.match(/.{1,3}/g).indexOf(state.baseCurrency) === 1) {
          state.convertedData[key] = dataFromApi[key];
        }
      }
    },
    toogleIsShowChoiceWindow: (state) => {
      state.isShowChoiceWindow = !state.isShowChoiceWindow;
    },
    setCurrentCurrency: (state, payload) => {
      state.baseCurrency = payload;
      localStorage.setItem("baseCurrency", JSON.stringify(state.baseCurrency));
    },
    renderLocalStorageCurrency: (state) => {
      localStorage.getItem("baseCurrency")
        ? (state.baseCurrency = JSON.parse(
            localStorage.getItem("baseCurrency")
          ))
        : "";
    },
    getAllCurrenciesFromApi: (state) => {
      /*
      Необходим доступ к бэку , чтобы прописать CORS, Либо писать midleware. Думаю мысль ясна
      axios
      .get("https://currate.ru/api/?get=currency_list&key=1d67f10c51117a2ba1aa1aca81aee091")
      .then(res => res.json())
      .then(data => state.dataFromApi = {...data})
      .catch(error => console.log(error))*/
    },
  },
  actions: {
    renderLocalStorageCurrency(context) {
      context.commit("renderLocalStorageCurrency");
    },
    getCurrencies(context) {
      context.commit("getAllCurrenciesFromApi");
    },
  },
});
