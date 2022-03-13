<template>
  <div :class="$style.startWindow">
    <ChoiceWindowOfCurrency />
    <Button v-if="getCurrentCurrency" :typeBtn="getTypeOfBtns.showCurrency" />
  </div>
</template>

<script>
import ChoiceWindowOfCurrency from "./../molecules/ChoiceWindowOfCurrency.vue";
import Button from "./../atoms/Button.vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "StartWindow",
  components: {
    ChoiceWindowOfCurrency,
    Button,
  },
  data() {
    return {
      info: null,
    };
  },
  computed: {
    ...mapGetters(["getCurrentCurrency", "getTypeOfBtns"]),
  },
};
</script>

<style lang="scss" module>
.startWindow {
  @include flexBox(column);
}
</style>
