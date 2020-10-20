<template>
  <div class="menu">
    <b-row>
      <b-col class="px-3" cols="12">
        <h2 :id="`${category}`" class="category-title pb-2">{{category}}</h2>
      </b-col>
    </b-row>
    <b-row align-h="between">
      <b-col class="item-container px-0 my-3 mx-3" cols="5" @click="$emit('itemClick', true)" v-for="item in drinks" :key="item.title">
        <b-button v-b-modal="`${item.title}`" class="item--btn">
          <div class="top-container">
            <h4 class="item-title mb-3">{{item.title}}</h4>
            <p class="item-price">{{item.price}}</p>
          </div>
          <p class="item-description">{{item.description}}</p>
        </b-button>
        <b-modal :id="`${item.title}`">TESTING</b-modal>
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
  },
};
</script>

<style lang="scss" scoped>
.item-link {
  color: initial;
  text-decoration: initial;
}

.item--btn {
  width: 100%;
  height: 100%;
}

.category-title {
  border-bottom: 1px solid gray;
}

.item-container {
  border: 1px solid #E7E7E7;
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
