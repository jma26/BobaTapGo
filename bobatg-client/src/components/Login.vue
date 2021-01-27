<template>
  <div class="login">
    <b-modal
      id="loginModal"
      title="Login"
      hide-footer="true"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- Email Group -->
        <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="Email is required"
        >
          <b-form-input
            id="email-input"
            placeholder="youremail@example.com"
            :state="emailState"
            v-model="email"
            required
          >
          </b-form-input>
        </b-form-group>
        <!-- Password Group -->
        <b-form-group
          label="Password"
          label-for="password-input"
          invalid-feedback="Password is required"
        >
          <b-form-input
            id="password-input"
            placeholder="*******"
            :state="passwordState"
            v-model="password"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-button block type="submit" variant="primary">Login</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      emailState: null,
      passwordState: null,
    }
  },
  methods: {
    checkFormValidity: function() {
      const valid = this.$refs.form.checkValidity()
      this.emailState = this.passwordState = valid;
      return valid;
    },
    handleOk: function(modalEvent) {
      modalEvent.preventDefault();
      this.handleSubmit();
    },
    handleSubmit: function() {
      // Exit when form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Close modal manually on success
      this.$nextTick(() => {
        this.$bvModal.hide('loginModal')
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
