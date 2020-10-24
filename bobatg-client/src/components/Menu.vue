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
        <!-- Add To Cart Modal -->
        <b-modal :id="`${item.title}`" ok-title="Add To Cart">
          <h4 class="modal-title">{{item.title}}</h4>
          <p class="modal-price">{{item.price}}</p>
          <template #modal-footer="{ ok }">
            <b-input-group>
              <b-input-group-prepend>
                <b-btn variant="outline-info" @click="decrement()">-</b-btn>
              </b-input-group-prepend>
              <b-form-input type="text" :value="quantity"></b-form-input>
              <b-input-group-prepend>
                <b-btn variant="outline-secondary" @click="increment()">+</b-btn>
              </b-input-group-prepend>
              <b-button size="sm" variant="success" @click="ok()">Add To Cart</b-button>
            </b-input-group>
          </template>
        </b-modal>
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
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    decrement() {
      if (this.quantity < 1) {
        this.quantity = 1;
      } else {
        this.quantity--;
      }
    },
    increment() {
      this.quantity++;
    }
  }
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
