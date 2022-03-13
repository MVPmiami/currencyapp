<template>
  <div :class="$style.newCurrencyWrapper">
    <img
      v-if="getNewUserCurrencies.includes('BYN')"
      src="./../../assets/img/bel.png"
      :class="$style.flag"
      @click="add('BYN')"
    />
    <img
      v-if="getNewUserCurrencies.includes('RUB')"
      src="./../../assets/img/rus.png"
      :class="$style.flag"
      @click="add('RUB')"
    />
    <img
      v-if="getNewUserCurrencies.includes('USD')"
      src="./../../assets/img/usd.png"
      :class="$style.flag"
      @click="add('USD')"
    />
    <img
      v-if="getNewUserCurrencies.includes('EUR')"
      src="./../../assets/img/eur.png"
      :class="$style.flag"
      @click="add('EUR')"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "NewCurrency",
  computed: {
    ...mapGetters(["getNewUserCurrencies"]),
  },
  methods: {
    ...mapMutations(["addNewCurrency"]),
    add(name) {
      this.addNewCurrency(name);
    },
  },
};
</script>

<style lang="scss" module>
.newCurrencyWrapper {
  width: 12rem;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: -3.5rem;
  right: 0.5rem;
  .flag {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
