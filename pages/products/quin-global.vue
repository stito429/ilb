<template>
  <section>
    <div class="hero hero-bg is-small">
      <div class="hero-body">
        <div class="columns is-vcentered is-centered">
          <div class="column is-2">
            <figure class="image is-128x128">
              <img
                src="../../assets/images/logos/quin.png"
                class="logo-image"
              />
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
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph2Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="columns is-mobile is-centered">
            <div class="column is-size-4 is-9">
              {{ paragraph2 }}
            </div>

            <div class="column">
              <figure class="image">
                <img
                  class="product-image"
                  :src="require('../../assets/images/product-photos/quin1.jpg')"
                />
              </figure>
            </div>
          </div>

          <hr />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph3Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ paragraph3 }}</div>

          <hr />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph4Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ paragraph4 }}</div>

          <hr />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph5Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ paragraph5 }}</div>
          <hr />
          <!-- CONTACT SECTION -->
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">
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
export default {
  components: {},
  data: function() {
    return {
      header: "Quin Global",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback & Services (ILB) is a support partner of Quin Global. ILB acts as their USA distributor throughout North America serving the industries ILB serves. ILB and Quin together have agreed to enter many different industries including: steel, cement, automotive, waste energy, asphalt, energy, and flooring. With Quin Global being a worldwide supplier of adhesive and sanitization products, we are looking to raise the bar by providing unique and superior products for your needs.",
      paragraph2Header: "Linebacker Adhesive",
      paragraph2:
        "ILB has its own adhesive for Industrial use. This adhesive is backed by Quin Global for most industrial, commercial or residential use. This product comes in a spray can and is called Linebacker Adhesive. This product was formulated for the tough industrial world as it came out of the aerospace industry to laminate two surfaces together--the same or different. Here is why our Linebacker Adhesive spray is unique: it has a breakaway strength of 16-18 psi and sets up in 15 minutes, and it’s a contact-to-contact application where you spray both mating surfaces and just stick them together. For a quick repair in the field, nothing can compare. In comparison, epoxy would but it takes a minimum of 8 hrs to cure.  ",
      paragraph3Header: "Floor Adhesive",
      paragraph3:
        "Quin Global has a special, new product just for flooring, called TensorgripG67, which has been approved by the building industry. This product also has a quick drying time and a high breakaway strength where any flooring product can be installed very quickly, plus any wall tile. This floor adhesive has been gaining attention in the marketplace as an installation material of choice. TensorgripG67 comes in a 50 lb canister and is sprayed on.",

      paragraph4Header: "Sanitization Spray",
      paragraph4:
        "Quin Global just got their RS1 sanitization spray approved this year to address the spread of Sars and Covid-19. This product comes in a 50 lb canister and can be sprayed throughout an office, airport or any industrial building, including any factory to kill the virus.  Now our sanitization product is a cutting edge product that can help us all be safe from any covid virus.",
      products: [
        {
          name: "",
          description: ""
        },
        {
          name: "",
          description: ""
        }
      ],
      paragraph5Header: "Efficiency",
      paragraph5:
        "The products shared above can speed up your installation time and take care of monotonous maintenance nightmares that get put off because of the set-up time. ",
      contactHeader: "Contact Us",
      contact:
        "Please contact ILB by phone or e-mail to get further details on any of the adhesives or sanitization products shared above.",
        footer: "Publish Date: March 2020--products and applications are copyright of Quin Global"
    };
  }
};
</script>

<style scoped>
.product-image {
  max-width: 200px;
  margin-right: 10px;
  float: right;
}

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
  background: rgb(55, 136, 180);
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
    to(rgb(55, 136, 180))
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
    from(rgb(55, 136, 180)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(211, 211, 211);
  text-shadow: 1px 1px rgb(132, 165, 148), -1px -1px rgb(36, 63, 47);
}

.engraved-text-header {
  color: rgb(34, 102, 139);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}

hr {
  border: 2px solid rgb(31, 105, 128);
  border-radius: 10px;
}
.logo-color {
  color: rgb(31, 105, 128);
}

.logo-image {
  border-radius: 3px;
  position: absolute;
  max-height: 100%;
}

.layout {
  padding-left: 50px;
  padding-right: 50px;
}

.contact-button {
  border: none;
  background: rgba(55, 136, 180);
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
  color: rgba(55, 136, 180) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}
</style>
