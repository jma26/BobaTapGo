<template>
  <div class="menu">
    <b-row>
      <b-col class="px-3" cols="12">
        <h2 class="category-title pb-2">{{category}}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="item-container px-3 my-3" cols="6" v-for="item in drinks" :key="item.title">
        <div class="top-container">
          <h4 class="item-title mb-3">{{item.title}}</h4>
          <p class="item-price">${{item.price}}</p>
        </div>
        <p class="item-description">{{item.description}}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    category: {
      type: String
    },
    drinks: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.category-title {
  border-bottom: 1px solid gray;
}

.top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-description {
  max-width: 80%;
}

.item-price {
  font-weight: bold;
  letter-spacing: 0.1rem;
}
</style>
