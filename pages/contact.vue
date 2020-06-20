<template>
  <!-- <modal
    name="Contact"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    :clickToClose="false"
    width="60%"
    height="auto"
  > -->
  <div><br/><br/><br/><br/>
    <form netlify name="contact-form" class="form" method="POST" data-netlify-honeypot="bot-field">
      <fieldset>
        <!-- Form Name -->
        <legend class="has-text-centered has-text-weight-bold">Contact Us</legend>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Company Info</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Company Name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-building"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
<div>
<input type="submit"/></div>
      </fieldset>
    </form></div>
  <!-- </modal> -->
</template>

<script>
import axios from "axios";
export default {
  name: "contact",
  methods: {
    submit(){
       return this.$router.push({ path: '/' })

        },
    // This function puts all the form fields into a FormData constructor, which we later encode with the URLSearchParams constructor
    createFormDataObj(data) {
      const formData = new FormData();
      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }
      return formData;
    },
    // This is our custom onSubmit function; don't forget to add `@submit.prevent="handleSubmit"` inside your <form> tag
    handleSubmit() {
      // This `data` object is what's passed to the createFormDataObj function. It needs all of your form fields, where the key is the name= attribute and the value is the computed value.
      const data = {
        "form-name": "contact-form",
        contact: this.contact
      };
      // This POSTs your encoded form to Netlify with the required headers (for text; headers will be different for POSTing a file) and, on success, redirects to the custom success page located at pages/thanks.vue
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(this.createFormDataObj(data)).toString()
      })
        // This is how we route to /thanks on successful form submission
        // More on $router.push function: https://router.vuejs.org/guide/essentials/navigation.html
        .then(() => this.$router.push("/"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style css-scoped>
.form {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  background: linear-gradient(
    to right,
    #ffffff80 0%,
    #ffffffa8 10%,
    #ffffffc4 50%,
    #ffffff9a 90%,
    #ffffff87 100%
  );
  /* url("../assets/backgrounds/gray.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  /* min-height: 100vh; */
}
</style>

