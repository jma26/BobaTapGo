<template>
  <div class="demo">
    <Banner :text="text.default" />
    <b-container>
      <b-row>
        <b-col>
          <RestaurantInfo
            :name="name.default"
            :description="description.default"
            :categories="categories.default"
            class="pt-5 py-3"
          />
        </b-col>
      </b-row>
      <b-row class="mt-4" v-for="(value, index) in menu.default" :key="index">
        <b-col cols="12">
          <Menu 
            :category="value.category"
            :drinks="value.drinks"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import RestaurantInfo from "@/components/RestaurantInfo";
import Menu from "@/components/Menu";

export default {
  name: "Demo",
  components: {
    Banner,
    RestaurantInfo,
    Menu
  },
  data: function() {
    return {
      text: {
        type: String,
        default: "Order Ahead"
      },
      name: {
        type: String,
        default: "Restaurant Name"
      },
      description: {
        type: String,
        default:
          "Ea fugiat eiusmod sunt tempor fugiat aliquip velit aliqua qui velit anim"
      },
      categories: {
        type: Array,
        default: [
          "Milk Teas",
          "Green Teas",
          "Black Teas",
          "Coffees",
          "Smoothies"
        ]
      },
      menu: {
        type: Array,
        default: [
          {
            category: "Milk Teas",
            drinks: [
              {
                title: "Black Milk Tea",
                price: 4.5,
                category: "Milk Teas",
                description: "Classic milk tea made with earl grey tea leaves"
              },
              {
                title: "Green Milk Tea",
                price: 4.5,
                category: "Milk Teas",
                description: "Milk tea created with jasmine tea leaves"
              }
            ]
          },
          {
            category: "Green Teas",
            drinks: [
              {
                title: "Oolong Green Tea",
                price: 4.5,
                category: "Green Teas",
                description: "Freshly brewed tea with oolong tea leaves"
              },
              {
                title: "Jasmine Green Tea",
                price: 4.5,
                category: "Green Teas",
                description: "Freshly brewed tea with jasmine tea leaves"
              }
            ]
          },
          {
            category: "Black Teas",
            drinks: [
              {
                title: "Assam Black Tea",
                price: 4.5,
                category: "Black Teas",
                description: "Freshly brewed tea with black assam tea leaves"
              },
              {
                title: "Earl Grey Black Tea",
                price: 4.5,
                category: "Black Teas",
                description: "Freshly brewed tea with black earl grey tea leaves"
              }
            ]
          },
          {
            category: "Coffees",
            drinks: [
              {
                title: "House Coffee",
                price: 4.5,
                category: "Coffees",
                description:
                  "Signature house coffee made with espresso shots and milk with a hint of cinnamon"
              },
              {
                title: "Caramel Macchiato",
                price: 4.5,
                category: "Coffees",
                description:
                  "Espresso based coffee with steamed milk, pumps of caramel sauce, and vanilla syrup"
              }
            ]
          },
          {
            category: "Smoothies",
            drinks: [
              {
                title: "Oreo Cookie Smoothie",
                price: 4.5,
                category: "Smoothies",
                description:
                  "Ice blended smoothie with oreo cookie bits and vanilla ice cream"
              },
              {
                title: "Coffee Smoothie",
                price: 4.5,
                category: "Smoothies",
                description:
                  "Ice blended smoothie with 3 shots of cold espresso, caramel sauce, and vanilla syrup"
              }
            ]
          }
        ]
      }
    } 
  }
};
</script>

<style lang="scss" scoped>
.demo {
  margin-top: 124px;
}
</style>
