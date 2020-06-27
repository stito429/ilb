<template>
  <section>
    <div class="hero-padding hero-bg">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <figure class="image is-128x128">
              <img src="../../assets/images/logos/ilblogo.png" class="logo-image" />
            </figure>
          </div>

          <div class="level-item">
            <div class="title is-1 has-text-weight-bold engraved-text-hero level-is-shrinkable">{{header}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="component">
      <section class="has-text-black columns is-centered">
        <div class="column is-10 padding">
          <br />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">{{paragraph1Header}}</h3>
          <span class="heading-fade-effect"></span><br/>
          <div class="columns is-vcentered">
            <div class="column is-12">
              <div class="is-size-4">{{paragraph1}}</div>
            </div>
            <!-- <div class="column is-4">
              <figure class="image">
                <img :src="require('../../assets/images/product-photos/itc-3.jpg')" />
              </figure>
            </div> -->
          </div>
<!-- 
          <hr />

          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">{{paragraph2Header}}</h3>
          <div class="is-size-4">{{paragraph2}}</div>
          <br />
          <div class="is-size-4">{{paragraph3}}</div>
          <br />
          <div class="is-size-4">{{paragraph4}}</div> -->

        </div>
      </section>
      <br />
    </div>

    <footer class="footer hero-bg">
      <div class="content colummns">
        <div class="is-size-4 has-text-black column is-offset-1 is-5">{{contact}}</div>
        <div class="is-size-4 has-text-black column is-offset-1 is-5">{{footer}}</div>
        <div class="is-size-4 has-text-black column is-offset-1 is-5">{{footerPublish}}</div>
      </div>
    </footer>
  </section>
</template>

<script>
import photo1 from "../../assets/images/product-photos/itc-1.jpg";
export default {
  components: {},
  data: function() {
    return {
      header: "Project and Construction Management",
      paragraph1Header: "Service Overview",
      paragraph1:
        "ILB has 34 years in the steel Industry where George Verbanic has lead the furnace plant  groups in designing, building , installing, scheduling and training plant personnel on their new equipment. When it comes to getting the job done right ILB has a proven track record in the industry to get the job done on budget, on time, train everyone and complete the job on or under budget.  Over the years George has been a key leader in installing all of the North American Blast Furnace charging systems while working for Paul Wurth. George has also supported the Industry independently, including companies such as Precision Machine Control,  ArcelorMittal and US Steel.",
    //   paragraph2Header: "Service Details",
    //   paragraph2:
    //     "Orbital is a recognized full-service engineering company that offers not only a vast spectrum of the major engineering support services, but also offers state-of-the-art supplemental services to include drone survey inspections; and 3D scanning and modeling; along with construction site support, retrofit engineering, and site scheduling services.",
    //   paragraph3:
    //     "ILB is excited to collaborate with Orbital to solve some of the most challenging issues that plants encounter. In this respect, we can explore the use of ILB’s product applications utilizing the various Saint-Gobain refractory and ceramics products from a wear and/or performance standpoint.",
    //   paragraph4:
    //     "These benefits and our marketing materials detail the value-added services and products that ILB can deliver to its customers, which are beneficial from an operations payback standpoint.",
      contact:
        "Please contact ILB by phone or e-mail if you have questions and to get further information.",
      footer:
        "",
      footerPublish:
        "Publish Date: March 2020--service applications offered are the copyright of ILB and its support group"
    };
  }
};
</script>

<style scoped>
/* .component {
  background: linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255)),
    url("../../assets/images/backgrounds/clay-background.jpg") no-repeat center center
      fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

} */

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
.hero-padding {
  padding-top: 75px;
  padding-bottom: 25px;
  padding-left: 8.33%;
  padding-right: 8.33%;
}

.hero-bg {
  background: rgb(49, 133, 228);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  background-position: left;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 600px) {
  .padding {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.hero-fade-effect {
  display: block;
  border: none;
  color: white;
  height: 1px;
  background: black;
  background: -webkit-gradient(
    radial,
    0% 2%,
    0,
    50% 50%,
    553,
    from(#fff),
    to(rgb(19, 42, 94))
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
    from(rgb(0, 0, 0)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(0, 0, 0);
  /* text-shadow: 1px 1px rgb(132, 165, 148), -1px -1px rgb(48, 48, 48); */
}

.engraved-text-header {
  color: rgb(14, 72, 138);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}


hr {
  border: 1px solid rgb(49, 133, 228);
  border-radius: 2px;
}
.logo-color {
  color: rgb(19, 42, 94);
}

.logo-image {
  border-radius: 3px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.product-image {
  max-width: 100%;
  padding: 10px;
  position: relative;
}

#product-image3 {
  float: right;
  margin: 0 15px 0 0;
  max-width: 30%;
}
.product-description {
  padding-left: 0px;
}

/* .layout {
  padding-left: 50px;
  padding-right: 50px;
} */

.card-content {
  padding: 0px;
  margin-bottom: 0px;
}
.card-content .content {
  margin: 1rem 1rem;
  padding: 0px;
}

.card-header {
  padding-top: 0px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.card {
  width: 400px;
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: rgba(65, 124, 85, 0.084);
}

.is-shady {
  animation: flyintoright 0.9s backwards;
  /* background: #fff; */
  box-shadow: 0 10px 16px rgba(92, 84, 79, 0.5), 0 6px 6px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: inline-block;
  margin: 10px;
  position: relative;
  transition: all 0.2s ease-in-out;
}
</style>
