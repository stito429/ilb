<template>
  <section>
    <div class="hero hero-bg is-small">
      <div class="hero-body">
        <div class="columns is-vcentered is-centered">
          <div class="column is-2">
            <figure class="image is-128x128">
              <img src="../../assets/images/logos/orbital.png" class="logo-image" />
            </figure>
          </div>
          <div class="column is-8">
            <br />
            <h1 class="title is-1 has-text-weight-bold engraved-text-hero">
              {{ header }}
            </h1>
            <span class="hero-fade-effect"></span>
            <br />
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
          <hr />

          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">{{paragraph2Header}}</h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{paragraph2}}</div>
          <br />
          <div class="is-size-4">{{paragraph3}}</div>
          <br />
          <div class="is-size-4">{{paragraph4}}</div>
                    <br />
          <div class="is-size-4">{{paragraph5}}</div>

          <hr />
          <!-- CONTACT SECTION -->
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ contactHeader }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ contact }}</div>
          <br />
          <div class="columns is-centered is-vcentered">
            <div class="column is-4 has-text-centered">
              <a class="contact-button" href="tel:(724)825-1474">
                Call<br />724-825-1474</a
              >
            </div>
            <div class="column is-4 has-text-centered">
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
        <div class="is-size-6 has-text-white column has-text-right is-12"><i class="fa fa-copyright" aria-hidden="true"></i>
          {{ footer }}
        </div>
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
      header: "Orbital Engineering Support",
      paragraph1Header: "Service Overview",
      paragraph1:
        "Industrial Linerback & Services (ILB) is a support partner of Orbital Engineering, acting as their sole regional sales representative in North America. Not only does ILB represent Orbital’s services, but they also represent Saint-Gobain and several of their refractory and ceramic product lines in different engineered solutions, utilizing Orbital Engineering if needed.  ILB and Oribital, an engineering support service company headquartered in Pittsburgh, PA, are working together with customers to develop and offer engineered solutions for just about any need within a plant. Orbital Engineering is a 50-year-old, veteran-owned company with six office locations throughout the US:  Pittsburgh, Philadelphia, Chicago, Detroit, St. Louis, and Houston.",
      paragraph2Header: "Service Details",
      paragraph2:
        "Orbital is a recognized full-service engineering company that offers not only a vast spectrum of the major engineering support services, but also state-of-the-art supplemental services to include drone survey inspections; 3D scanning and modeling; and construction site support, retrofit engineering, and site scheduling services.",
      paragraph3:
        "ILB is excited to collaborate with Orbital to solve some of the most challenging issues that plants encounter. In this respect, we can explore the use of ILB’s product applications utilizing the various Saint-Gobain refractory and ceramics products from a wear and/or performance standpoint.",
      paragraph4:
        "These benefits and our marketing materials detail the value-added services and products that ILB can deliver to its customers, which are beneficial from an operations payback standpoint.",
      contactHeader: "Contact Us",
      contact:
        "Please contact ILB by phone or e-mail if you have questions and to get further information on how we can help you with your engineering and operational challenges.",
      paragraph5:
        "For any engineering support you may need, the ILB and Orbital Engineering team will figure it out.",
      footer:
        "Publish Date: March 2020--service applications offered are the copyright of Orbital Engineering and ILB"
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
  background: rgba(143, 134, 38);
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
    to(rgb(143, 134, 38))
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
    from(rgb(143, 134, 38)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(211, 211, 211);
  text-shadow: 1px 1px rgb(132, 165, 148), -1px -1px rgb(143, 134, 38);
}

.engraved-text-header {
  color: rgb(143, 134, 38);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}

hr {
  border: 2px solid rgb(143, 134, 38);
  border-radius: 4px;
}
.logo-color {
  color: rgb(143, 134, 38);
}

.logo-image {
  border-radius: 3px;
  position: absolute;
}

.layout {
  padding-left: 50px;
  padding-right: 50px;
}

.contact-button {
  border: none;
  background: rgba(143, 134, 38);
  color: #e9e9e9 !important;
  font-weight: 900;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  min-width: 80%;
  max-width: 100%;
}

.contact-button:hover {
  color: rgba(143, 134, 38) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}



</style>
