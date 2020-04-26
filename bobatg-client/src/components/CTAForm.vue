<template>
  <div class="ctaform m-5">
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
export default {};
</script>

<style></style>
