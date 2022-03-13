<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "Currency",
  props: {
    currency: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" module>
div {
  color: white;
}
.flag {
  width: 2rem;
  height: 2rem;
}
</style>
