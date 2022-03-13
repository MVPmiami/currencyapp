<template>
  <div :class="$style.container">
    <div :class="$style.baseCurrency">
      <BaseCurrency :typeCurrency="getCurrentCurrency" :smallIcon="true" />
      <h2>Выбранная основная валюта</h2>
    </div>
    <CurrencyList />
    <Button
      v-if="getUserCurrencies.length <= 2"
      :typeBtn="getTypeOfBtns.addCurrency"
    />
    <NewCurrency
      v-if="getIsShowNewListOfCurrency && getUserCurrencies.length <= 2"
    />
  </div>
</template>

<script>
import BaseCurrency from "./../atoms/BaseCurrency.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import CurrencyList from "./../organisms/CurrencyList.vue";
import Button from "./../atoms/Button.vue";
import NewCurrency from "./../atoms/NewCurrency.vue";

export default {
  name: "Content",
  components: {
    BaseCurrency,
    CurrencyList,
    Button,
    NewCurrency,
  },
  computed: {
    ...mapGetters([
      "getCurrentCurrency",
      "getTypeOfBtns",
      "getUserCurrencies",
      "getIsShowNewListOfCurrency",
    ]),
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
  border-bottom: 0.2rem solid $colorBtnUnactive;
}
</style>
