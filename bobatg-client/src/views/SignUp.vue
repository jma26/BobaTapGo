<template>
  <div class="signup">
    <b-card
      overlay
      img-src="https://source.unsplash.com/random/1920x350"
      img-alt="Card Image"
      text-variant="white"
      align="center"
      title="Get Access Now"
    >
      <b-card-text>
        Feed more of your hungry customers by tonight with our free online ordering system
      </b-card-text>
    </b-card>
    <b-container>
      <b-row class="my-5">
        <b-col>
          <b-form ref="signupform" @submit="onSubmit">
            <!-- Cafe Name Gruop -->
            <b-form-group
              label="Cafe Name"
              label-for="cafe-input"
              invalid-feedback="Cafe name is required"
            >
              <b-form-input
                id="cafe-input"
                placeholder="Your awesome cafe name"
                :state="cafeState"
                v-model="cafeName"
                required
              >
              </b-form-input>
            </b-form-group>
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
            <!-- First Name Gruop -->
            <b-form-group
              label="First Name"
              label-for="first-name-input"
              invalid-feedback="First name is required"
            >
              <b-form-input
                id="first-name-input"
                placeholder="First name"
                :state="firstNameState"
                v-model="firstName"
                required
              >
              </b-form-input>
            </b-form-group>
            <!-- Last Name Gruop -->
            <b-form-group
              label="Last Name"
              label-for="last-name-input"
              invalid-feedback="Last name is required"
            >
              <b-form-input
                id="last-name-input"
                placeholder="Last name"
                :state="lastNameState"
                v-model="lastName"
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
            <b-button block type="submit" variant="primary">Sign me up</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      cafeName: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      cafeNameState: null,
      firstNameState: null,
      lastNameState: null,
      emailState: null,
      passwordState: null
    }
  },
  methods: {
    checkFormValidity: function() {
      const valid = this.$refs.signupform.checkValidity()
      this.cafeNameState = this.firstNameState = this.lastNameState = this.emailState = this.passwordState = valid;
      return valid;
    },
    onSubmit: function(event) {
      event.preventDefault();
      if (!this.checkFormValidity()) {
        return
      }
      console.log('Form went through!');
    }
  }
}
</script>

<style lang="scss" scoped>
.card-img-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.signup {
  margin-top: 124px;
}
</style>