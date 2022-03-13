<template>
  <div id="app" :class="$style.app">
    <div :class="$style.container">
      <h1 v-if="getIsShowChoiceWindow" :class="$style.headerText">
        Выберите вашу валюту
      </h1>
      <StartWindow v-if="getIsShowChoiceWindow" />
      <Content v-else />
    </div>
  </div>
</template>

<script>
import StartWindow from "./components/organisms/StartWindow.vue";
import Content from "./components/organisms/Content.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    StartWindow,
    Content,
  },
  computed: {
    ...mapGetters(["getIsShowChoiceWindow"]),
  },
  methods: {
    ...mapActions(["renderLocalStorageCurrency"]),
  },
  mounted() {
    this.renderLocalStorageCurrency();
  },
};
</script>

<style lang="scss" module>
.headerText {
  @include fontHeader($colorHeader);
}
</style>
