<template>
  <div class="restaurantinfo">
    <h3 class="name">{{name}}</h3>
    <p class="description">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "RestaurantInfo",
  props: {
    name: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
</style>