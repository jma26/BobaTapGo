<template>
  <div class="restaurantinfo">
    <h3 class="name">{{ name }}</h3>
    <p class="description pb-4 mb-4">{{ description }}</p>
    <ul class="categories p-0">
      <li class="category" v-for="items in categories" :key="items.category">
        <a @click="scrollTo" class="category-link">
          {{ items.category }}
        </a>
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
  },
  methods: {
    scrollTo: function(event) {
      const element = document.getElementById(event.target.innerText).getBoundingClientRect().top;
      console.log(element);
      window.scrollTo({
        top: element - 130,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.description {
  border-bottom: 1px solid #9a9da0;
}

.categories {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  & > .category {
    margin: 0.5rem 1rem 0.5rem 0;
  }
}

.category-link {
  color: initial;
  text-decoration: initial;
  &:hover {
    cursor: pointer;
  }
}
</style>
