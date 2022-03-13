<template>
  <div :class="$style.currencyListWrapper">
    <Currency v-for="currency in getConvertedCurrencies" :currency="currency" />
  </div>
</template>

<script>
import Currency from "./../molecules/Currency.vue";
import { mapGetters } from "vuex";
export default {
  name: "CurrencyList",
  components: {
    Currency,
  },
  computed: {
    ...mapGetters([
      "getAllCurrencies",
      "getCurrentCurrency",
      "getConvertedDataFromApi",
      "getConvertedCurrencies",
    ]),
  },
};
</script>

<style lang="scss" module>
.currencyListWrapper {
  width: 100%;
  @include flexBox(column);
}
</style>
