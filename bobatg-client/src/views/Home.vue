<template>
  <div class="home">
    <b-card
      overlay
      img-src="https://source.unsplash.com/random/"
      img-alt="Card Image"
      img-width="100%"
      img-height="100%"
      text-variant="white"
      align="center"
      title="Cupidatat adipisicing commodo tempor et duis ex in"
    >
      <b-card-text>
        Ea fugiat eiusmod sunt tempor fugiat aliquip velit aliqua qui velit anim
      </b-card-text>
      <b-card-text>
        <CTAForm />
      </b-card-text>
    </b-card>
    <b-container>
      <b-row class="my-5">
        <b-col class="my-3 my-lg-5" sm="12" md="12" lg="6">
          <p>
            Sunt deserunt eiusmod nulla qui sint non laborum occaecat aliquip
            irure irure cupidatat nisi.
          </p>
          <h2>Velit commodo ipsum eu et in.</h2>
          <p>Amet laboris id velit dolore dolor velit culpa.</p>
          <p>
            Sunt nulla cupidatat laborum incididunt ipsum consectetur ut
            laborum.
          </p>
          <p>Nulla enim ex laborum duis officia incididunt sint eu.</p>
        </b-col>
        <b-col class="my-3 my-lg-5" sm="12" md="12" lg="6">
          <img
            src="https://source.unsplash.com/random/600x400"
            class="image-placeholder"
          />
        </b-col>
      </b-row>
      <b-row class="my-5">
        <b-col
          class="my-3 my-lg-5"
          sm="12"
          md="12"
          lg="6"
          order="2"
          order-sm="2"
          order-md="2"
          order-lg="1"
        >
          <img
            src="https://source.unsplash.com/random/600x400"
            class="image-placeholder"
          />
        </b-col>
        <b-col
          class="my-3 my-lg-5"
          sm="12"
          md="12"
          lg="6"
          order="1"
          order-sm="1"
          order-md="1"
          order-lg="2"
        >
          <p>
            Sunt deserunt eiusmod nulla qui sint non laborum occaecat aliquip
            irure irure cupidatat nisi.
          </p>
          <h2>Velit commodo ipsum eu et in.</h2>
          <p>Amet laboris id velit dolore dolor velit culpa.</p>
          <p>
            Sunt nulla cupidatat laborum incididunt ipsum consectetur ut
            laborum.
          </p>
          <p>Nulla enim ex laborum duis officia incididunt sint eu.</p>
        </b-col>
      </b-row>
      <b-row class="my-5">
        <b-col class="my-3 my-lg-5" sm="12" md="12" lg="6">
          <p>
            Sunt deserunt eiusmod nulla qui sint non laborum occaecat aliquip
            irure irure cupidatat nisi.
          </p>
          <h2>Velit commodo ipsum eu et in.</h2>
          <p>Amet laboris id velit dolore dolor velit culpa.</p>
          <p>
            Sunt nulla cupidatat laborum incididunt ipsum consectetur ut
            laborum.
          </p>
          <p>Nulla enim ex laborum duis officia incididunt sint eu.</p>
        </b-col>
        <b-col class="my-3 my-lg-5" sm="12" md="12" lg="6">
          <img
            src="https://source.unsplash.com/random/600x400"
            class="image-placeholder"
          />
        </b-col>
      </b-row>
      <b-row class="my-5">
        <b-col
          class="my-3 my-lg-5"
          sm="12"
          md="12"
          lg="6"
          order="2"
          order-sm="2"
          order-md="2"
          order-lg="1"
        >
          <img
            src="https://source.unsplash.com/random/600x400"
            class="image-placeholder"
          />
        </b-col>
        <b-col
          class="my-3 my-lg-5"
          sm="12"
          md="12"
          lg="6"
          order="1"
          order-sm="1"
          order-md="1"
          order-lg="2"
        >
          <p>
            Sunt deserunt eiusmod nulla qui sint non laborum occaecat aliquip
            irure irure cupidatat nisi.
          </p>
          <h2>Velit commodo ipsum eu et in.</h2>
          <p>Amet laboris id velit dolore dolor velit culpa.</p>
          <p>
            Sunt nulla cupidatat laborum incididunt ipsum consectetur ut
            laborum.
          </p>
          <p>Nulla enim ex laborum duis officia incididunt sint eu.</p>
        </b-col>
      </b-row>
      <!-- Customer Review -->
      <CustReview />
      <b-row class="my-5 text-center">
        <b-col class="my-5">
          <h2>
            Eiusmod velit est ullamco in reprehenderit reprehenderit ex qui
            magna.
          </h2>
          <p class="mt-3">
            Nisi ad qui ut consequat amet cupidatat nisi dolor fugiat.
          </p>
          <CTAForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CTAForm from "@/components/CTAForm";
import CustReview from "@/components/CustReview";

export default {
  name: "Home",
  components: {
    CTAForm,
    CustReview
  }
};
</script>

<style lang="scss" scoped>
.card-img {
  max-height: 100vh;
  height: 100vh;
  object-fit: cover;
}
.card-img-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 124px;
}
.image-placeholder {
  width: 100%;
}
</style>
