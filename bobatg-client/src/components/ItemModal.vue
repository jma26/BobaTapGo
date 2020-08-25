<template>
  <div class="itemModal">
    <h4 class="item-title">{{ this.$attrs.item.title }}</h4>
    <p class="item-description">{{ this.$attrs.item.description }}</p>
    <p class="btn--close" @click="closeItemModal">X</p>
  </div>
</template>

<script>
export default {
  name: 'ItemModal',
  methods: {
    closeItemModal: function() {
      this.$emit("modalClick", false);
    }
  }
}
</script>

<style lang="scss" scoped>
.itemModal {
  position: relative;
}
.btn--close {
  margin: 0;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.5rem;
  vertical-align: top;
  &:hover {
    cursor: pointer;
  }
}
</style>