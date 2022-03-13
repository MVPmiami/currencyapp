<template>
  <div :class="$style.container">
    <div :class="$style.baseCurrency">
      <BaseCurrency :typeCurrency="getCurrentCurrency" :smallIcon="true" />
      <h2>Выбранная основная валюта</h2>
    </div>
    <div>
      <CurrencyList />
    </div>
  </div>
</template>

<script>
import BaseCurrency from "./../atoms/BaseCurrency.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import CurrencyList from "./../organisms/CurrencyList.vue";

export default {
  name: "Content",
  components: {
    BaseCurrency,
    CurrencyList,
  },
  computed: {
    ...mapGetters(["getCurrentCurrency"]),
  },
  methods: {},
};
</script>

<style lang="scss" module>
.active {
  width: 4rem;
  height: 4rem;
  opacity: 1;
}
.baseCurrency {
  @include flexBox(row);
  & h2 {
    @include fontText($colorText);
    margin-left: 10px;
  }
  padding-bottom: 1rem;
  border-bottom: 0.2rem solid $colorText;
}
</style>
