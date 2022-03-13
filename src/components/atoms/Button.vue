<template>
  <div>
    <!--Использование таких вот библиотек плохая практика, подключил кнопку, но дальше будет свой код-->
    <a-button
      v-if="typeBtn === 'showCurrency'"
      type="primary"
      :class="$style.button"
      @click="showCurrency"
      >Показать курс</a-button
    >
    <div
      v-if="typeBtn === 'removeCurrency'"
      @click="deleteCurrency"
      :class="$style.deleteBtn"
    ></div>
    <div
      v-if="typeBtn === 'addCurrency'"
      @click="showNewListOfCurrency"
      :class="$style.addCurrencyBtn"
    ></div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "Button",
  props: {
    typeBtn: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapMutations([
      "toogleIsShowChoiceWindow",
      "getDataFromApiForCurrentCurrency",
      "setConvertedCurrencies",
      "setUserCurrencies",
      "removeCurrency",
      "toogleNewListOfCurrency",
    ]),
    ...mapActions(["getCurrencies"]),
    showCurrency() {
      this.toogleIsShowChoiceWindow();
      this.getDataFromApiForCurrentCurrency();
      this.setConvertedCurrencies();
      this.setUserCurrencies();
    },
    deleteCurrency() {
      this.removeCurrency(this.id);
    },
    showNewListOfCurrency() {
      this.toogleNewListOfCurrency();
    },
  },
};
</script>

<style lang="scss" module>
.button {
  width: 13.5rem;
  background-color: $colorBcg !important;
  color: $colorBtnUnactive !important;
  border: 0.0625rem solid $colorBtnUnactive !important;
  @include fontText($colorText);
  &:hover {
    background-color: $colorBtnUnactive !important;
    color: $colorText !important;
    border: 1px solid $colorBtnActive !important;
  }
}
.deleteBtn {
  @include btn();
  position: absolute;
  right: 0;
  bottom: 0.8rem;
  background-image: url("./../../assets/img/close.png") !important;
}
.addCurrencyBtn {
  position: absolute;
  left: 1.75rem;
  bottom: -3rem;
  @include btn();
  background-image: url("./../../assets/img/add.png") !important;
}
</style>
