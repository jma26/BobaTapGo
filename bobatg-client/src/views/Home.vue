<template>
  <div class="home m-5">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h1>Cupidatat adipisicing commodo tempor et duis ex in</h1>
          <h2>Ea fugiat eiusmod sunt tempor fugiat aliquip velit aliqua qui velit anim</h2>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col>
          <CTAForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CTAForm from '@/components/CTAForm.vue';

export default {
  name: "Home",
  components: {
    CTAForm
  }
};
</script>
