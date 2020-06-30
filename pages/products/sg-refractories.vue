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
            
            <h1 class="title is-1 has-text-weight-bold engraved-text-hero">
              {{ header }}
            </h1>
            <span class="hero-fade-effect"></span>
   
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
            <div class="column is-8">
              <div class="is-size-4">{{ paragraph1 }}</div>
            </div>
            <div class="column is-4">
              <figure class="image product-image">
                <img
                  :src="require('../../assets/images/img/furnace3-hd.jpg')"
                />
              </figure>
            </div>
          </div>

          <hr />

          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph2Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ paragraph2 }}</div>
          <br />

          <div class="columns is-multiline is-centered">
            <div
              v-for="product in products"
              :key="product.name"
              class="column is-4"
            >
              <div class="card is-shady">
                <div class="card-header hero-bg">
                  <div class="card-header-title">
                    <div class="has-text-centered is-size-4 has-text-white">
                      {{ product.name }}
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="content is-size-5 has-text-black">
                    <p>{{ product.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ paragraph3Header }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="is-size-4">{{ paragraph3 }}</div>
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
      <div class="content colummns is-centered">
        <div class="is-size-6 has-text-white column is-8">
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
      header: "Saint-Gobain Refractories and Linings Group",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback and Services (ILB) represent the Saint-Gobain Refractories and Linings Group which is based out of Brazil and France. When it comes to finding a refractory that will stand up to the test, Saint-Gobain has a long-standing, positive track record when it comes to performance. Many people are not aware of or forgot about a company called Carborundum, a leader in refractories during the 70’s and 80’s. It was acquired in the late 90’s by Saint-Gobain which grew the refractory’s business extensively worldwide from then.",
      paragraph2Header: "Market Strategy",
      paragraph2:
        "Today, the Refractories and Linings group is achieving a significant presence in the North America market, with ILB leading the effort. We are introducing their impressive lineup of products which include: SiC brick, tap-hole clays, monolithic shapes, blast furnace linings, trough and runner castables, general castables, and shotcrete patch materials. ILB works with customers by evaluating their needs and identifying the best engineered solution for their line of business. For the past 15 years, the Saint-Gobain’s refractories support team has been a leader in refractory performance materials in Europe and South America. Furthermore, their R&D Groups take the extra steps to design and develop a key product to extend the life of a customers product need. Saint-Gobain’s winning combination of engineering know how, design, technical expertise, quality assurance, and installation knowledge has proven itself over the years with sustaining the highest level of satisfied, return customer business.",
      paragraph3Header: "Proven Results",
      paragraph3:
        "All of the benefits above and project histories around the globe, and our marketing material details will explain to end users that it makes a lot of sense to consider Saint-Gobain products to help improve your facility’s performance and equipment longevity.",
      contactHeader: "Contact Us",
      contact:
        "Please contact ILB by phone or e-mail us to get further details on how we can help solve your wear and maintenance cost issues and challenges.",
      footer: "Publish Date: March 2020--products and applications are copyright of Saint-Gobain "
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
  background: rgb(184, 103, 5);
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
    to(rgb(184, 103, 5))
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
    from(rgb(210, 125, 21)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(211, 211, 211);
  text-shadow: 1px 1px rgb(184, 103, 5), -1px -1px rgb(184, 103, 5);
}

.engraved-text-header {
  color: rgb(184, 103, 5);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}

hr {
  border: 2px solid rgb(184, 103, 5);
  border-radius: 4px;
}
.logo-color {
  color: rgb(184, 103, 5);
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
  background: rgba(184, 103, 5);
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
  color: rgba(184, 103, 5) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}





/* .hero-bg {
  background: rgb(210, 125, 21);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  background-position: left;
  background-repeat: no-repeat;
}

hr {
  border: 1px solid rgb(179, 124, 5);
  border-radius: 2px;
}
.logo-color {
  color: rgb(179, 124, 5);
} */


</style>
