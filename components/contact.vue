<template>
  <modal
    name="contact-form"
    :min-width="400"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    :clickToClose="false"
    width="60%"
    height="auto"
  >
  <div>
    <form action="/" netlify name="contact-form" class="form" method="POST" data-netlify-honeypot="bot-field">
      <input  name="form-name" value="contact-form" type="hidden"/>
      <fieldset>
        <!-- Form Name -->
        <legend class="title is-3 has-text-centered has-text-weight-bold">Contact Us</legend>

        <div class="field">
          <div class="field-label is-normal has-text-left">
            <label class="label">Company Info</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="Company Name" placeholder="Company Name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-building"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="field-label is-normal">
            <label class="label"></label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="Address" placeholder="Address" />
                <span class="icon is-small is-left">
                  <i class="fas fa-map-marker"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="City" placeholder="City" />
                <span class="icon is-small is-left">
                  <i class="fas fa-map-marker"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="field-label is-normal">
            <label class="label"></label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="State" placeholder="State" />
                <span class="icon is-small is-left">
                  <i class="fas fa-map-marker"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="Zip Code" placeholder="Zip Code" />
                <span class="icon is-small is-left">
                  <i class="fas fa-map-marker"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="field-label is-normal has-text-left">
            <label class="label">Contact Info</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="Name" placeholder="Name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="field-label is-normal">
            <label class="label"></label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="Phone Number" placeholder="Phone Number" />
                <span class="icon is-small is-left">
                  <i class="fas fa-phone"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input" type="email" name="Email Address" placeholder="Email Address" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="field-label is-normal has-text-left">
            <label class="label">Your Area of Business</label>
          </div>
          <div class="field-body">
            <div class="control">
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business1" value="Steel" />
                Steel 
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business2" value="Cement" />
                Cement 
              </label>
              <label class="checkbox inline">
                <input
                  type="checkbox"
                  name="Area of Business3"
                  value="WasteWater Treatment"
                />
                WasteWater Treatment 
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business4" value="Chemical" />
                Chemical <br/>
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business5" value="Grain" />
                Grain <br/>
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business6" value="Water Treatment" />
                Water Treatment <br/>
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business7" value="Oil/Gas" />
                Oil/Gas <br/>
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business8" value="Asphalt" />
                 Asphalt <br/>
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Busines9" value="Automotive" />
                Automotive <br/>
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business10" value="Builder" />
                Builder <br/>
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business11" value="Trailer" />
                Trailer <br/>
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Area of Business12" value="Construction" />
                Construction <br/>
              </label>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="field-label is-normal has-text-left">
            <label class="label">Your Line of Business Need</label>
          </div>
          <div class="field-body">
            <div class="control">
              <label class="checkbox inline">
                <input type="checkbox" name="Need1" value="Sheeting" />
                Sheeting
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Need2" value="Ceramic" />
                Ceramic
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Need3" value="Refractories" />
                Refractories
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Need4" value="Coating" />
                Coating
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Need5" value="Lining" />
                Lining
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Need6" value="Engr Services" />
                Engr Services
              </label>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="field-label is-normal has-text-left">
            <label class="label">Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea" name="Description"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field ">
          <div class="field-label is-normal has-text-left">
            <label class="label">Request the following information</label>
          </div>
          <div class="field-body">
            <div class="control">
              <label class="checkbox inline">
                <input type="checkbox" name="Info Request1" value="General Information" />
                General Information
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Info Request2" value="Request ILB Visit" />
                Request ILB Visit
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Info Request3" value="Material Quote" />
                Material Quote
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Info Request4" value="Phone Call Discussion" />
                Phone Call Discussion
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Info Request5" value="Samples" />
                Samples
              </label>
              <label class="checkbox inline">
                <input type="checkbox" name="Info Request6" value="Engineering Solution" />
                Engineering Solution
              </label>
            </div>
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            
            <a class="button is-success" type="submit" form="contact-form" value="Submit">Submit</a>
          </p>
          <p class="control">
            <a class="button is-light" @click="$modal.hide('contact-form')">Cancel</a>
          </p>
        </div>
      </fieldset>
    </form></div>
  </modal>
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
  background: -webkit-linear-gradient(
    right,
    #dcdcdc 0%,
    #e9e9e9 21%,
    #e8e7e7 50%,
    #e6e6e6 80%,
    #d8d8d8 100%
  );
  /* url("../assets/backgrounds/gray.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  /* min-height: 100vh; */
}

</style>

