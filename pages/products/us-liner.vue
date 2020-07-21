<template>
  <section>
    <div class="hero hero-bg is-small">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-2">
            <figure class="image ">
              <img
                src="../../assets/images/logos/us-liner.png"
                class="logo-image"
              />
            </figure>
          </div>
          <div class="column is-8">
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
          <div class="columns is-centered">
            <div class="column is-two-third">
              <br />
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/us-conc2.jpg')
                  "
                />
              </figure>
            </div>
            <div class="column is-two-third">
              <br />
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/us-cover.jpg')
                  "
                />
              </figure>
            </div>
          </div>
          <div class="is-size-4">{{ paragraph2 }}</div>
          <div class="columns is-centered">
            <div class="column is-two-third">
              <ul class="fa-ul">
                <li v-for="quality1 in qualities1" :key="quality1">
                  <span class="icon is-size-7 logo-color">
                    <i class="fa-li fas fa-circle"></i>
                  </span>
                  <span
                    class="is-size-4"
                    v-bind:href="quality1"
                    v-html="quality1"
                  ></span>
                </li>
              </ul>
            </div>
            <div class="column is-two-third">
              <ul class="fa-ul">
                <li v-for="quality2 in qualities2" :key="quality2">
                  <span class="icon is-size-7 logo-color">
                    <i class="fa-li fas fa-circle"></i>
                  </span>
                  <span
                    class="is-size-4"
                    v-bind:href="quality2"
                    v-html="quality2"
                  ></span>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph4Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ paragraph4 }}</div>
          <br />
          <div class="columns" v-for="product in products" :key="product.name">
            <div class="column is-2">
              <div class="title is-4 logo-accent-color">{{ product.name }}</div>
            </div>
            <div class="column is-10 product-description">
              <div class="is-size-4">{{ product.description }}</div>
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
            {{ paragraph5Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ paragraph5 }}</div>
          <br />

          <hr />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ photosHeader }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="columns is-centered">
            <div class="column is-two-third">
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/us-caisson.jpg')
                  "
                />
              </figure>
            </div>
            <div class="column is-two-third">
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/us-conc3.jpg')
                  "
                />
              </figure>
            </div>
          </div>
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
      header: "US Liner",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback & Services (ILB) represents US Liner by offering their unique line of sheeting products in a variety of industrial, commercial, and residential applications. US Liner manufactures three key products that ILB is introducing to the industries it serves: Versitex, Ecotex, and BXR sheets. ",
      paragraph2: "All three sheets offer the following qualities and traits:",
      qualities1: [
        "rot and mildew resistant",
        "moisture resistant",
        "light weight (20% lighter than aluminum thickness equivalent)",
        "acid resistant",
        "corrosion resistant",
        "white in color (typical) or can come in other colors (min 600 linear ft run needed)",
        "cleans easily with soap and water",
        "either flexible or rigid",
        "recyclable"
      ],
      qualities2: [
        "virtually non-stick (frozen water slides off and spray foam insulation will not stick)",
        "puncture resistant (hot patch method available if it does get punctured)",
        "smooth top finish and textured finish on the back for an adhesive to be used to stick product to wood or steel",
        "can include a UV protection layer on the top surface",
        "a farmable use"
      ],
      paragraph3Header: "Industries",
      paragraph3:
        "These unique products are currently changing several industries, one in particular being the tractor trailer industry, the others being the RV industry, railroad, and US Military.  For more details please visit their website at: USLCO.com.",
      paragraph4Header: "Market Strategy",
      paragraph4:
        "The US Liner sheeting comes in various thicknesses up to almost a quarter of an inch thick. The thinner sheet sizes of Versitex are typically made in 8 ft wide rolls (optional 102” wide rolls) and can come in lengths up to 600 linear feet. The other options are Versitex and Ecotex boards which can be processed in 4 x 8 ft panel sheets then stacked on pallets for shipment. BXR is their translucent panel which comes in 2 ft by 8 ft panels. Here are some further details on these products:",
      products: [
        {
          name: "Versitex",
          description:
            "is their highly used, advanced thermoplastic composite sheet product made from continuous glass strands. It is their only product that carries the FDA stamp as it is used to assemble refrigerated truck panels due to its back scrim surface for adhesion to other products such as insulation. These high resistant, impact resistant panels are comprised of Polypropylene resin reinforced with continuous bi-directional glass strands. They comes in approximately six different thicknesses and named accordingly: VR1 (.04”), VR2 (.06”), VR3 (.08”), VR5 (.125”), VR8 (.175”), and VR10 (.215”). The Versitex VR sheeting product provides significant energy absorption over traditional FRP panels and exhibits thermal expansion similar to aluminum but far less than steel."
        },
        {
          name: "Ecotex",
          description:
            "is made from US Liner’s own recycled materials and comes in one thickness: 3/16” thick. It has a reinforced sandwich construction by laminating Versitex skins onto a chopped long fiber polypropylene and glass core. This low cost material is geared to the environmental conscious seeking value with ultimate strength capabilities."
        },
        {
          name: "BXR",
          description:
            "is US Liner’s translucent sheet product used in tractor trailer roofs. It has over five times the tear resistance of the best fiberglass roof currently on the market, is super bright, and has unsurpassed UV protection to deter cracking due to the sun. Its five layer construction makes it very durable by allowing light to be transmitted through the product layers and has outstanding durability and strength. This sheet typically comes in 2 ft x 8 ft panel sizes but can also be supplied in 4 ft x 8 ft sheets."
        }
      ],
      paragraph5Header: "More Info",
      paragraph5:
        "A close review of these products and their many uses show that they have significant merit in protecting shed inner walls, any overhang or walkway, chicken coops, metal building roofs or side walls, and many other applications such as being used as a caisson or concrete form.",
      photosHeader: "Sample Applications",
      contactHeader: "Contact Us",
      contact:
        "If you have questions or would like to know more about US Liner products and their potential uses at your facility, please contact ILB by phone or e-mail us to get further details on how we can assist with your current needs.",
      footer:
        "Publish Date: March 2020--products and applications are © Copyright of US Liner and ILB"
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
  background: rgba(72, 148, 84);
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
    to(rgb(72, 148, 84))
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
    from(rgb(72, 148, 84)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(211, 211, 211);
  text-shadow: 1px 1px rgb(72, 148, 84), -1px -1px rgb(36, 63, 47);
}

.engraved-text-header {
  color: rgb(72, 148, 84);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}

hr {
  border: 2px solid rgb(72, 148, 84);
  border-radius: 4px;
}
.logo-color {
  color: rgb(72, 148, 84);
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
  background: rgba(72, 148, 84);
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
  color: rgba(72, 148, 84) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}
/* Classes specific to US Liner  */

.product-image {
  /* width: 100%; */
  max-width: 350px;
  padding: 10px;
  /* float: right; */
}

.logo-accent-color {
  color: rgb(213, 107, 26);
}

#product-image-background {
  float: left;
  padding-right: 150px;
  min-width: 100%;
  min-height: 200px;
}

.product-description {
  padding-left: 0px;
}

.qualities {
  background-color: rgb(72, 148, 84);
}

ul li {
  list-style-position: outside;
  text-indent: -2em;
  padding: 1px 0 1px 6px;
}
</style>
