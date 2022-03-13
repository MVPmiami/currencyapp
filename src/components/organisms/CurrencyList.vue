<template>
  <div :class="$style.currencyListWrapper">
    <Currency
      v-for="currency in getUserCurrencies"
      :currency="currency.name"
      :id="currency.id"
    />
  </div>
</template>

<script>
import Currency from "./../molecules/Currency.vue";
import { mapGetters, mapActions } from "vuex";
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
      "getUserCurrencies",
    ]),
  },
  methods: {
    ...mapActions(["renderLocalUserCurrencies"]),
  },
  mounted() {
    this.renderLocalUserCurrencies();
  },
};
</script>

<style lang="scss" module>
.currencyListWrapper {
  width: 100%;
  @include flexBox(column);
}
</style>
