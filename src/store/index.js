import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://currate.ru/api/?get=rates&pairs=USDBYN,USDRUB,USDEUR,EURBYN,EURRUB,EURUSD,RUSBYN,RUSUSD,RUSEUR,BYNRUS,BYNUSD,BYNEUR&key=1d67f10c51117a2ba1aa1aca81aee091",
    currencies: ["BYN", "RUB", "USD", "EUR"],
    typeOfBtns: {
      showCurrency: "showCurrency",
      addCurrency: "addCurrency",
      removeCurrency: "removeCurrency",
    },
    baseCurrency: "",
    isShowChoiceWindow: true,
    dataFromApi: {
      // from api
      status: 200,
      message: "rates",
      data: {
        USDBYN: "3.29",
        USDRUB: "116.75",
        USDEUR: "0.91642",
        EURBYN: "3.65",
        EURRUB: "128.95",
        EURUSD: "1.09",
        RUBBYN: "0.0284",
        RUBUSD: "0.008565",
        RUBEUR: "0.007755",
        BYNRUB: "35.24",
        BYNUSD: "0.3038",
        BYNEUR: "0.27415",
      },
    },
    convertedData: {},
    convertedCurrencies: [],
    userCurrencies: [],
    newUserCurrencies: [],
    isShowNewListOfCurrency: false,
  },
  getters: {
    getIsShowNewListOfCurrency: (state) => {
      return state.isShowNewListOfCurrency;
    },
    getNewUserCurrencies: (state) => {
      return state.newUserCurrencies;
    },
    getUserCurrencies: (state) => {
      return state.userCurrencies;
    },
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
    toogleNewListOfCurrency: (state) => {
      state.isShowNewListOfCurrency = !state.isShowNewListOfCurrency;
    },
    addNewCurrency: (state, payload) => {
      state.userCurrencies.push({ name: payload, id: uuidv4() });
      state.newUserCurrencies = state.newUserCurrencies.filter(
        (cur) => cur !== payload
      );
      localStorage.setItem(
        "newUserCurrencies",
        JSON.stringify(state.newUserCurrencies)
      );
    },
    removeCurrency: (state, payload) => {
      state.userCurrencies = state.userCurrencies.filter((cur) => {
        if (cur.id !== payload) {
          return cur;
        } else {
          if (!state.newUserCurrencies.includes(cur.name)) {
            state.newUserCurrencies.push(cur.name);
          }
        }
      });
      localStorage.setItem(
        "newUserCurrencies",
        JSON.stringify(state.newUserCurrencies)
      );
      localStorage.setItem(
        "userCurrencies",
        JSON.stringify(state.userCurrencies)
      );
    },
    setUserCurrencies: (state) => {
      state.newUserCurrencies = [];
      state.userCurrencies = state.convertedCurrencies.map((cur) => {
        return { name: cur, id: uuidv4() };
      });
      localStorage.setItem(
        "userCurrencies",
        JSON.stringify(state.userCurrencies)
      );
    },
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
      localStorage.setItem(
        "isShowChoiceWindow",
        JSON.stringify(state.isShowChoiceWindow)
      );
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
    renderLocalStorageIsShowChoiseWindow: (state) => {
      localStorage.getItem("isShowChoiceWindow")
        ? (state.isShowChoiceWindow = JSON.parse(
            localStorage.getItem("isShowChoiceWindow")
          ))
        : true;
    },
    renderLocalUserCurrencies: (state) => {
      localStorage.getItem("userCurrencies")
        ? (state.userCurrencies = JSON.parse(
            localStorage.getItem("userCurrencies")
          ))
        : [];
    },
    renderLocalNewUserCurrencies: (state) => {
      localStorage.getItem("newUserCurrencies")
        ? (state.newUserCurrencies = JSON.parse(
            localStorage.getItem("newUserCurrencies")
          ))
        : [];
    },
    getAllCurrenciesFromApi: (state) => {
      /*
      Необходим доступ к бэку , чтобы прописать CORS, Либо писать midleware,либо брать платную апи и просить доступ к статике на гитехабе. Думаю мысль ясна
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
    renderLocalStorageIsShowChoiseWindow(context) {
      context.commit("renderLocalStorageIsShowChoiseWindow");
    },
    renderLocalUserCurrencies(context) {
      context.commit("renderLocalUserCurrencies");
    },
    renderLocalNewUserCurrencies(context) {
      context.commit("renderLocalNewUserCurrencies");
    },
    getCurrencies(context) {
      context.commit("getAllCurrenciesFromApi");
    },
  },
});
