<template>
  <div class="menu">
    <b-row>
      <b-col class="px-3" cols="12">
        <h2 :id="`${category}`" class="category-title pb-2">{{category}}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="item-container pl-3 pr-3 pt-2 pb-2 my-3" cols="6" v-for="item in drinks" :key="item.title">
        <b-link class="item-link" :href="`#${item.title}`">
          <div class="top-container">
            <h4 class="item-title mb-3">{{item.title}}</h4>
            <p class="item-price">${{item.price}}</p>
          </div>
          <p class="item-description">{{item.description}}</p>
        </b-link>
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
.item-link {
  color: initial;
  text-decoration: initial;
}

.category-title {
  border-bottom: 1px solid gray;
}

.item-container {
  &:hover {
    box-shadow: 0 0 1px 0 #000;
    background-color: #F7F7F7;
    cursor: pointer;
  }
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
