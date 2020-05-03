<template>
  <div class="ctaform my-5">
    <b-form inline @submit="onSubmit" @reset="onReset">
      <b-form-group label-for="teashopname-input">
        <b-form-input
          id="teashopname-input"
          v-model="teashopname"
          type="text"
          required
          placeholder="Tea Shop Name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "CTAForm"
};
</script>

<style lang="scss" scoped>
  .form-inline {
    justify-content: center;
  }
  .form-group {
    margin-bottom: 0;
  }
</style>
