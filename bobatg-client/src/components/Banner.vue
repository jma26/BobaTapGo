<template>
  <div class="banner">
    <h2 class="text">{{text}}</h2>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
 .banner {
   background-color: #000;
   color: #FFF;
   height: 240px;
   display: flex;
   align-items: center;
 }
 .text {
   width: 100%;
   max-width: 1140px;
   margin: auto;
   padding: 0 15px;
 }
</style>