<template>
  <div class="restaurantinfo">
    <h3 class="name">{{name}}</h3>
    <p class="description pb-4 mb-4">{{description}}</p>
    <ul class="categories p-0">
      <li class="category" v-for="category in categories" :key="category">
        <a class="category-link" :href="'#' + [`${category}`]">{{category}}</a>
      </li>
    </ul>
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
    },
    categories: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  border-bottom: 1px solid #9A9DA0;
}
.categories {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  & > .category {
    margin: 0.5rem 1rem 0.5rem 0;
  }
}
</style>