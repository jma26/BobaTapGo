<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-container>
        <b-navbar-brand href="/" rel="Boba Tap Go - Online Ordering System">
          <img class="brand-logo" src="@/assets/imgs/logo.png" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/online-drink-ordering-system"
                >Online drink ordering system</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/pricing">Pricing</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/demo">Demo</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link
                to="/login"
                @click.native="showLogin"
              >
                Log in
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/get-access-now">Get access now</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- Login Modal -->
    <Login />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Header",
  components: {
    Login
  },
  methods: {
    showLogin: function() {
      this.$bvModal.show('loginModal');
    }
  }
};
</script>

<style lang="scss" scoped>
.brand-logo {
  width: 34%;
  height: auto;
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
}
.navbar-dark .navbar-toggler {
  border-color: #343a40;
}
.navbar-toggler-icon {
  background-color: #fff;
}
li {
  text-transform: uppercase;
}
a {
  &:link {
    text-decoration: none;
  }
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    color: #fff;
    text-decoration: none;
  }
}
</style>
