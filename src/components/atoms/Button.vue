<template>
  <a-button
    v-if="typeBtn === 'showCurrency'"
    type="primary"
    :class="$style.button"
    @click="showCurrency"
    >Показать курс</a-button
  >
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
  },
  methods: {
    ...mapMutations([
      "toogleIsShowChoiceWindow",
      "getDataFromApiForCurrentCurrency",
      "setConvertedCurrencies",
    ]),
    ...mapActions(["getCurrencies"]),
    showCurrency() {
      this.toogleIsShowChoiceWindow();
      this.getDataFromApiForCurrentCurrency();
      this.setConvertedCurrencies();
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
</style>
