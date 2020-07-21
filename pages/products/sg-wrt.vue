<template>
  <section>
    <div class="hero hero-bg is-small">
      <div class="hero-body">
        <div class="columns is-vcentered is-centered">
          <div class="column is-2">
            <figure class="image is-128x128">
              <img src="../../assets/images/logos/sg.png" class="logo-image" />
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
          <div class="columns is-centered">
            <div class="column">
              <div class="is-size-4">              <figure class="image product-image">
                <img
                  :src="
                    require('../../assets/images/product-photos/sg-wrt1.png')
                  "
                />
              </figure>{{ paragraph1 }}</div>
            </div>
 


          </div>

          <hr />

          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph2Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="columns is-centered">
            <div class="column ">
              <div class="is-size-4">
                                <figure class="image product-image">
                  <img
                    :src="
                      require('../../assets/images/product-photos/sg-wrt5.png')
                    "
                  />
                </figure>{{ paragraph2 }}

              </div>
            </div>
          </div>


          <div class="is-size-4">{{ paragraph3 }}</div>
          <br />

          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/sg-wrt-industries.jpg')
                  "
                />
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <ol>
                <li
                  class="is-size-4"
                  v-for="application in applications"
                  :key="application"
                >
                  {{ application }}
                </li>
              </ol>
            </div>
          </div>
          <hr />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph4Header }}
          </h3>
                    <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ paragraph4 }}</div>
          <br />
          <div class="is-size-4">{{ paragraph6 }}</div>
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
                    require('../../assets/images/product-photos/sg-wrt4.png')
                  "
                />
              </figure>
            </div>
            <div class="column is-two-third">
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/sg-wrt2.png')
                  "
                />
              </figure>
            </div>
          </div>

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
      header: "Saint-Gobain WRT",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback & Services (ILB) is a representative of the Saint-Gobain WRT Group which is the company’s wear-esistant tile group. The WRT Group, based in Latrobe, PA, offers several different products through ILB that can be used in a variety of industries. If combatting wear resistance is your challenge, we have the solution in an impressive ceramic product called Durafrax. If you have an impact issue combined with an abrasive issue, ILB has a solution for that too: a hardened plate or HC250 wear plate that can be bolted in and out. Bottom line, when it comes to resisting abrasion and high heat, Saint-Gobain’s Durafrax is proven to outlast steel 16 to 1 or chromium carbide overlay by 4 to 1.",
      paragraph2Header: "Market Strategy",
      paragraph2:
        "Saint-Gobain WRT is an industry leader for wear protection products. We offer pre-engineered tiles, our standard tiles, and a casted product, as well as many other options to include: high alumina silica products, which is Durafrax; plain silicon carbide products; a premium silicon carbide product called hexoly; and multiple coatings, basalt, silicones, epoxies, and light-weight wearing compounds.",
      paragraph3:
        "General application areas and industries that have successfully used our products for almost 50 years are:",
      applications: [
        "Steel Making and Blast Furnaces",
        "Power",
        "Ashphalt",
        "Petrochemical",
        "Mining and Mineral Processing",
        "Cement",
        "Material Handling",
        "Process Line Flumes",
        "Water and Wastewater Treatment",
        "Ship Yards"
      ],
      paragraph4Header: "Benefits",
      paragraph4:
        "All of the benefits above, project histories around the globe, and our marketing material details will explain to end users that it makes a lot of sense to consider Saint-Gobain products to help improve your facility’s performance and equipment longevity.",
      paragraph5:
        "All of the benefits above and our marketing material details, which ILB can share, illustrate why this product line is beneficial from and operations payback standpoint.",
      photosHeader:
        "Samples",
      contactHeader: "Contact Us",
      contact:
        "Please contact ILB by phone or e-mail if you have questions and to get further information on how we can help you with your wear challenges.",
        footer: "Publish Date: March 2020--products and applications are © Copyright of Saint-Gobain"
    };
  }
};
</script>

<style scoped>
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
  background: rgba(12, 147, 162);
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
    to(rgb(12, 147, 162))
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
    from(rgb(12, 147, 162)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(211, 211, 211);
  text-shadow: 1px 1px rgb(132, 165, 148), -1px -1px rgb(36, 63, 47);
}

.engraved-text-header {
  color: rgb(12, 147, 162);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}

hr {
  border: 2px solid rgb(12, 147, 162);
  border-radius: 4px;
}
.logo-color {
  color: rgb(12, 147, 162);
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
  background: rgba(12, 147, 162);
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
  color: rgba(12, 147, 162) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}



.product-image {
  max-width: 100%;
  padding: 10px;
  float: right;
}
</style>
