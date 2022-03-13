<template>
  <img
    v-if="typeCurrency === 'BYN'"
    src="./../../assets/img/bel.png"
    @click="setCurrency('BYN')"
    :class="[
      getCurrentCurrency === 'BYN' && smallIcon
        ? $style.smallFlag
        : getCurrentCurrency === 'BYN' && !smallIcon
        ? $style.active
        : $style.flag,
    ]"
  />
  <img
    v-else-if="typeCurrency === 'RUB'"
    src="./../../assets/img/rus.png"
    @click="setCurrency('RUB')"
    :class="[
      getCurrentCurrency === 'RUB' && smallIcon
        ? $style.smallFlag
        : getCurrentCurrency === 'RUB' && !smallIcon
        ? $style.active
        : $style.flag,
    ]"
  />
  <img
    v-else-if="typeCurrency === 'USD'"
    src="./../../assets/img/usd.png"
    @click="setCurrency('USD')"
    :class="[
      getCurrentCurrency === 'USD' && smallIcon
        ? $style.smallFlag
        : getCurrentCurrency === 'USD' && !smallIcon
        ? $style.active
        : $style.flag,
    ]"
  />
  <img
    v-else
    src="./../../assets/img/eur.png"
    @click="setCurrency('EUR')"
    :class="[
      getCurrentCurrency === 'EUR' && smallIcon
        ? $style.smallFlag
        : getCurrentCurrency === 'EUR' && !smallIcon
        ? $style.active
        : $style.flag,
    ]"
  />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "BaseCurrency",
  props: {
    typeCurrency: {
      type: String,
      default: "",
    },
    smallIcon: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters(["getCurrentCurrency", "getIsShowChoiceWindow"]),
  },
  methods: {
    ...mapMutations([
      "setCurrentCurrency",
      "toogleIsShowChoiceWindow",
      "setCurrentCurrency",
    ]),
    setCurrency(currency) {
      if (
        this.getCurrentCurrency === currency &&
        this.getIsShowChoiceWindow === false
      ) {
        this.toogleIsShowChoiceWindow();
        this.setCurrentCurrency("");
      } else {
        this.setCurrentCurrency(currency);
      }
    },
  },
};
</script>

<style lang="scss" module>
.smallFlag {
  width: 4rem;
  height: 4rem;
  opacity: 1;
  cursor: pointer;
}
.active {
  width: 6rem;
  height: 6rem;
  opacity: 1;
  cursor: pointer;
}
.flag {
  width: 6rem;
  height: 6rem;
  opacity: 0.2;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>
