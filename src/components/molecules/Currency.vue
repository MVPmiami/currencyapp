<template>
  <div :class="$style.currencyWrapper">
    <img
      v-if="currency === 'BYN'"
      src="./../../assets/img/bel.png"
      :class="$style.flag"
    />
    <img
      v-if="currency === 'RUB'"
      src="./../../assets/img/rus.png"
      :class="$style.flag"
    />
    <img
      v-if="currency === 'USD'"
      src="./../../assets/img/usd.png"
      :class="$style.flag"
    />
    <img
      v-if="currency === 'EUR'"
      src="./../../assets/img/eur.png"
      :class="$style.flag"
    />
    <div>
      {{ getConvertedDataFromApi[`${currency}${getCurrentCurrency}`] }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Currency",
  props: {
    currency: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["getConvertedDataFromApi", "getCurrentCurrency"]),
  },
};
</script>

<style lang="scss" module>
.flag {
  width: 2rem;
  height: 2rem;
}
.currencyWrapper {
  color: $colorText;
  padding: 0.8rem;
  border-bottom: 0.2rem solid $colorBtnUnactive;
  @include flexBox(raw);
  width: 100%;
  justify-content: flex-start;
  & div {
    margin-left: 2.5rem;
    @include fontHeader($colorText);
  }
}
</style>
