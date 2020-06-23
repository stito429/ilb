<template>
  <section>
    <div class="hero hero-bg is-small">
      <br />
      <br />
      <br />
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column is-2 is-offset-1">
            <figure class="image is-128x128">
              <img src="../../assets/images/logos/itc.png" class="logo-image" />
            </figure>
          </div>
          <div class="column is-8">
            <br />
            <h1 class="title is-1 has-text-weight-bold engraved-text-hero">{{header}}</h1>
            <span class="hero-fade-effect"></span>
            <br />
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
            <div class="column is-8">
              <div class="is-size-4">{{paragraph1}}</div>
            </div>
            <div class="column is-4">
              <figure class="image">
                <img :src="require('../../assets/images/product-photos/itc-3.jpg')" />
              </figure>
            </div>
          </div>

          <hr />

          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph2Header}}</h3>
          <div class="is-size-4">{{paragraph2}}</div>
          <br />

          <!-- <div class="columns" v-for="product in products" :key="product.name">
            <div class="column is-3">
              <div class="title is-4">{{product.name}}</div>
            </div>
            <div class="column is-7 product-description">
              <div class="is-size-4">{{product.description}}</div>
            </div>
          </div>-->

          <div class="columns is-multiline is-centered">
            <div v-for="product in products" :key="product.name" class="column is-4">
              <div class="card is-shady">
                <div class="card-header hero-bg">
                  <div class="card-header-title">
                    <div class="has-text-centered is-size-4 has-text-white">{{ product.name}}</div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="content is-size-5 has-text-black">
                    <p>{{product.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph3Header}}</h3>
          <div class="is-size-4">{{paragraph3}}</div>
          <br />
          <div class="is-size-4">{{paragraph4}}</div>

          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{photosHeader}}</h3>
          <div class="columns is-centered">
            <div class="column is-two-third">
              <figure class="image">
                <img class="product-image" :src="require('../../assets/images/product-photos/itc-1.jpg')" />
              </figure>
            </div>
            <div class="column is-two-third">
              <figure class="image">
                <img class="product-image" :src="require('../../assets/images/product-photos/itc-2.jpg')" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>

    <footer class="footer hero-bg">
      <div class="content colummns">
        <div class="is-size-4 has-text-white column is-offset-1 is-5">{{contact}}</div>
        <div class="is-size-4 has-text-white column is-offset-1 is-5">{{footer}}</div>
        
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
      header: "ITC Coatings",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback & Services (ILB) is a support partner of International Technical Ceramics (ITC) Coatings, acting as their sole US representative in North America. (ITC has another representative in Canada called NorHeat.) ILB and ITC are currently making significant inroads and entering into many different industries, including steel, cement, automotive, waste energy, asphalt, and energy. During their 20-year history of being in business with their key products, ITC has successfully entered the foundry and pottery markets with its high temperature, energy efficient ceramic coatings. With our outlook plan, we anticipate expanding the business into these other industries with great success.",
      paragraph2Header: "Material Supply Details",
      paragraph2:
        "The description and application of ITC’s five key water-based ceramic coatings products are as follows:",
      products: [
        {
          name: "ITC-100HT",
          description:
            "ITC's most versatile ceramics coatings that has proven to achieve outstanding energy savings and refractory protection. It is installed mills thick as it can be used solely by itself or as a final top coat over other ITC products such as ITC 213."
        },
        {
          name: "ITC-213",
          description:
            "An outstanding ceramics coatings for metal. It is formulated to protect metals and graphite surface’s including those exposed to molton metals."
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
        "The above products play a significant role in securing the life of the refractory or metal by keeping oxygen away from the metal and keeping heat from penetrating behind any refractory product or fibrous material.",
      paragraph4:
        "The protection benefits of these products will deliver significant results from an operations payback standpoint.",
      photosHeader: "Examples of Applications",
      contact:
        "Please contact ILB by phone or e-mail if you have questions and to get further information on how we can help you with your furnace refractory life longevity.",
      footer:
        "Publish Date: March 2020--products and applications are copyright of ITC Coatings"
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
    to(rgb(13, 111, 60))
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
  border: 1px solid rgb(35, 91, 27);
  border-radius: 2px;
}
.logo-color {
  color: rgb(35, 91, 27);
}

.logo-image {
  border-radius: 3px;
  position: absolute;
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
