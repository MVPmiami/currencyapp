<template>
  <div :class="$style.wrapper">
    <BaseCurrency
      v-for="currency in getAllCurrencies"
      :typeCurrency="currency"
      :smallIcon="false"
    />
  </div>
</template>

<script>
import BaseCurrency from "./../atoms/BaseCurrency.vue";
import { mapGetters } from "vuex";

export default {
  name: "ChoiceWindowOfCurrency",
  components: {
    BaseCurrency,
  },
  computed: mapGetters(["getAllCurrencies"]),
};
</script>

<style lang="scss" module>
.wrapper {
  @include flagBox();
}
</style>
