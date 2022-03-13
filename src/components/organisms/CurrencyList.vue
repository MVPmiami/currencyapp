<template>
  <div>
    <Currency
      v-for="currency in getAllCurrencies"
      :currency="currency !== getCurrentCurrency ? currency : null"
    />
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
    ...mapGetters(["getAllCurrencies", "getCurrentCurrency"]),
  },
};
</script>

<style></style>
