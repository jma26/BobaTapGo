<template>
  <div class="demo">
    <Banner v-bind:text="text || 'Order Ahead'" />
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: "Demo",
  components: {
    Banner
  },
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
  .demo {
    margin-top: 124px;
  }
</style>