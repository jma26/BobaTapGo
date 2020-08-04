<template>
  <div class="itemModal">
    <h4 class="item-title">{{ this.$attrs.item.title }}</h4>
    <p class="item-description">{{ this.$attrs.item.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemModal',
}
</script>

<style lang="scss" scoped>

</style>