<template>
  <section>
      <div class="hero hero-bg is-small">
        <div class="hero-body">
          <div class="columns is-mobile is-multiline is-centered pb-3">
            <div class="column is-1 is-narrow is-hidden-mobile"></div>
            <div class="column is-1 logo-column is-hidden-mobile">
              <figure class="image-container"> 
                <img
                  src="../../assets/images/logos/itc.png"
                  class="logo-image"
                />
              </figure>
            </div>

            <div class="column is-2 is-hidden-tablet ">
              <figure class="image is-64x64">
                <img
                  src="../../assets/images/logos/itc.png"
                  class="logo-image"
                />
              </figure>
            </div>

            <div class="column pl-6">
              <h1 class="title is-size-1-desktop is-size-3-mobile is-size-2-tablet has-text-weight-bold engraved-text-hero ">
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

          <div class="columns is-centered">
            <div class="column is-full-mobile">
              <figure class="image product-image pl-5 pb-5 is-hidden-mobile">
                <img
                  :src="
                    require('../../assets/images/product-photos/itc-3.jpg')
                  "
                />
              </figure>

              <figure class="image  is-hidden-tablet">
                <img
                  :src="
                    require('../../assets/images/product-photos/itc-3.jpg')
                  "
                />
              </figure>
              <div class="is-size-4 column is-full-mobile">
                {{ paragraph1 }}
              </div>
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
          <div class="is-size-4">{{ paragraph4 }}</div>

          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">
            {{ photosHeader }}
          </h3>
          <span class="heading-fade-effect"></span><br />
          <div class="columns is-centered">
            <div class="column is-two-third">
              <figure class="image">
                <img
                  class="product-image-samples"
                  :src="require('../../assets/images/product-photos/itc-1.jpg')"
                />
              </figure>
            </div>
            <div class="column is-two-third">
              <figure class="image">
                <img
                  class="product-image-samples"
                  :src="require('../../assets/images/product-photos/itc-2.jpg')"
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
        <div class="is-size-6 has-text-white column has-text-right is-12"><i class="fa fa-copyright" aria-hidden="true"></i>
          {{ footer }}
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  layout: "productLayout",
  transition: 'page',
  components: {},
  data: function() {
    return {
      header: "ITC Coatings",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback & Services (ILB) is a support partner of International Technical Ceramics (ITC) Coatings, acting as their sole US representative in North America. (ITC has another representative in Canada called NorHeat). ILB and ITC are currently making significant inroads and entering into many different industries, including steel, cement, automotive, waste energy, asphalt, and energy. During their 20-year history of being in business with their key products, ITC has successfully entered the foundry and pottery markets with its high temperature, energy-efficient ceramic coatings. With our outlook plan, we anticipate expanding the business into these other industries with great success.",
      paragraph2Header: "Material Supply Details",
      paragraph2:
        "The descriptions and applications of ITC’s five key water-based ceramic coatings products are as follows:",
      products: [
        {
          name: "ITC-100HT",
          description:
            "ITC's most versatile ceramics coatings that has proven to achieve outstanding energy savings and refractory protection. It is installed mills thick as it can be used solely by itself or as a final top coat over other ITC products such as ITC 213."
        },
        {
          name: "ITC-213",
          description:
            "An outstanding ceramics coatings for metal. It is formulated to protect metals and graphite surfaces including those exposed to molton metals before the final coat is applied."
        },
        {
          name: "ITC-296A",
          description:
            "A high purity ceramic top coat that gives a clean firing and minimizes impurities in gloss kilns and molten metal operations. It will prevent dross, slag build up, heavy suds, and carbon deposits."
        },
        {
          name: "ITC-200EZ",
          description:
            "ITC’s only ceramic fill product. It is proven to be an excellent durable compound and most versatile ceramics coating. Over the years it has been shown to repair broken, chipped or cracked brick and castable or fiber material. It bonds rapidly and eliminates the need for costly rebricking which saves on down time."
        },
        {
          name: "ITC-148",
          description:
            "ITC's key heavy duty ceramic repair product formulated to protect metals and graphite, including those exposed to molton metal. It also prevents stainless steel and steel parts from erosion, oxidization, and fatigue."
        }
      ],
      paragraph3Header: "Superior Results",
      paragraph3:
        "The above products play a significant role in securing the life of the refractory, fiber or metal by keeping oxygen away from the metal and keeping heat from penetrating behind any refractory product or fibrous material.",
      paragraph4:
        "The protection benefits of these products will deliver significant results from an operations payback standpoint.",
      photosHeader: "Examples of Applications",
      contactHeader: "Contact Us",
      contact:
        "Please contact ILB by phone or e-mail if you have any questions about how we can help extend your furnace refractory life longevity.",
      footer:
        "Publish Date: March 2020--products and applications are © Copyright of ITC Coatings"
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
    url("../../assets/images/backgrounds/gray-1200.jpg") no-repeat center center
      fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* min-height: 100vh; */
}
.hero-bg {
  background: rgba(15, 131, 87);
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
    to(rgb(15, 131, 87))
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
    from(rgb(13, 111, 60)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(211, 211, 211);
  text-shadow: 1px 1px rgb(132, 165, 148), -1px -1px rgb(36, 63, 47);
}

.engraved-text-header {
  color: rgb(31, 80, 43);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}

hr {
  border: 2px solid rgb(35, 91, 27);
  border-radius: 4px;
}
.logo-color {
  color: rgb(35, 91, 27);
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
  align-content: right
}

.layout {
  padding-left: 25px;
  padding-right: 25px;
}

.contact-button {
  border: none;
  background: rgba(15, 131, 87);
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
  color: rgba(15, 131, 87) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}
/* Classes specific to ITC  */


.product-image {
  max-width: 400px;
  float: right;
}

.product-image-samples {
  margin: 0 15px 0 0;
  max-width: 10 0%;
}

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
