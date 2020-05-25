<template>
  <div class="demo">
    <Banner :text="text" />
    <b-container>
      <b-row>
        <b-col>
          <RestaurantInfo 
            :name="name"
            :description="description"
            class="py-5"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import RestaurantInfo from "@/components/RestaurantInfo";

export default {
  name: "Demo",
  components: {
    Banner,
    RestaurantInfo
  },
  props: {
    text: {
      type: String,
      default: 'Order Ahead'
    },
    name: {
      type: String,
      default: 'Restaurant Name'
    },
    description: {
      type: String,
      default: 'Ea fugiat eiusmod sunt tempor fugiat aliquip velit aliqua qui velit anim'
    }
  }
};
</script>

<style lang="scss" scoped>
  .demo {
    margin-top: 124px;
  }
</style>