<template>
  <section>
    <div class="hero hero-bg is-small">
      <div class="hero-body">
        <div class="columns  is-centered is-multiline">
          <div class="column is-1 is-narrow is-hidden-mobile"></div>
          <div class="column is-2-desktop is-3-tablet is-hidden-touch logo-column">
            <figure class="image-container"> 
              <img
                src="../../assets/images/logos/ilblogo.png"
                class="logo-image"
              />
            </figure>
          </div>

          <div class="column">
            <h1 class="title is-size-1-desktop is-size-2-touch is-size-3-tablet is-size-6-mobile has-text-weight-bold engraved-text-hero ">
              {{ header }}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="component">
      <section class="has-text-black columns is-centered layout">
        <div class="column is-10">
          <br />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph1Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
              <div class="is-size-4">{{ paragraph1 }}</div>
          <br/>
          <div class="is-size-4">{{paragraph2}}</div>
          <br />

          <hr />
          <!-- CONTACT SECTION -->
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ contactHeader }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ contact }}</div>
          <br />
          <div class="columns is-centered is-vcentered">
            <div class="column is-4-desktop has-text-centered">
              <a class="contact-button" href="tel:(724)825-1474">
                Call<br />724-825-1474</a
              >
            </div>
            <div class="column is-4-desktop  has-text-centered">
              <a class="contact-button" @click="$modal.show('contact-form')"
                >Email<br />
                verbanicilb@gmail.com</a
              >
            </div>
          </div>
          <!-- END CONTACT SECTION -->
        </div>
      </section>
      <br />
    </div>

    <footer class="hero-bg">
      <div class="content colummns">
        <div class="is-size-6 has-text-white column has-text-right is-12">
          {{ footer }}
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      header: "Project and Construction Management",
      paragraph1Header: "Service Overview",
      paragraph1:
        "ILB is backed by 34 years in the Steel Industry where George Verbanic has led the furnace plant groups in designing, building , installing, scheduling and training plant personnel on their new equipment. To get the job done on time and on or under budget, and train staff and team members. When it comes to getting the job done right, ILB has a proven track record in the industry to get the job done on budget, on time, train everyone and complete the job on or under budget.  Over the years, George has been a key leader in installing all of the North American blast furnace charging systems while working for Paul Wurth. He has also supported the Industry independently, including companies such as Precision Machine Control, ArcelorMittal, and US Steel.",
      contactHeader: "Contact Us",
      contact:
        "Please contact ILB by phone or e-mail if you have any questions about getting further information on these types of management services.",
      footer:
        "Publish Date: March 2020--service applications offered are the © Copyright of ILB and its support group"
    };
  }
};
</script>

<style scoped>
/* Standard classes across all products pages; only needing product specific colors*/

.component {
  background: linear-gradient(
      to right,
      #ffffff68 0%,
      #ffffffb8 10%,
      #ffffffaa 50%,
      #ffffff8e 90%,
      #ffffff7b 100%
    ),
    url("../../assets/images/backgrounds/gray.jpg") no-repeat center center
      fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* min-height: 100vh; */
}
.hero-bg {
  background: rgba(49, 133, 228);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  background-position: left;
  background-repeat: no-repeat;
}

.hero-fade-effect {
  display: block;
  border: none;
  color: rgb(199, 199, 199);
  height: 1px;
  background: black;
  background: -webkit-gradient(
    radial,
    10% 90%,
    50,
    10% 90%,
    553,
    from(rgb(193, 193, 193)),
    to(rgb(49, 133, 228))
  );
}
.heading-fade-effect {
  display: block;
  border: none;
  height: 1px;
  background: -webkit-gradient(
    radial,
    0% 20%,
    0,
    100% 10%,
    555,
    from(rgb(49, 133, 228)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(211, 211, 211);
  text-shadow: 1px 1px rgb(49, 133, 228), -1px -1px rgb(117, 115, 114);
}

.engraved-text-header {
  color: rgb(49, 133, 228);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}

hr {
  border: 2px solid rgb(49, 133, 228);
  border-radius: 4px;
}
.logo-color {
  color: rgb(49, 133, 228);
}

.logo-column {
  position: relative;
}

.image-container {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.logo-image {
  border-radius: 3px;
  position: relative;
  width: 100%;
  vertical-align: middle;
}

.layout {
  padding-left: 25px;
  padding-right: 25px;
}

.contact-button {
  border: none;
  background: rgba(49, 133, 228);
  color: #e9e9e9 !important;
  font-weight: 900;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  width: 100%;
}

.contact-button:hover {
  color: rgba(49, 133, 228) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}


</style>
