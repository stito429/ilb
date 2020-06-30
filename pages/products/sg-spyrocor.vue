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
            <div class="column is-8">
              <div class="is-size-4">{{ paragraph1 }}</div>
            </div>
            <div class="column is-4">
              <figure class="image product-image">
                <img
                  :src="
                    require('../../assets/images/product-photos/sg-spyrocor1.png')
                  "
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

          <div class="is-size-4">{{ paragraph3 }}</div>
          <br />

          <div class="columns is-vcentered">
            <div class="column is-4">
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/sg-spyrocor2.png')
                  "
                />
              </figure>
            </div>
            <div class="column is-7 is-offset-1">
              <ol>
                <li
                  class="is-size-4"
                  v-for="benefit in benefits"
                  :key="benefit"
                >
                  {{ benefit }}
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
          <hr />
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">{{photosHeader}}</h3>
          <span class="heading-fade-effect"></span><br />
          <div class="columns is-centered">
            <div class="column is-two-third">
              <figure class="image">
                <img
                  class="product-image" id="vert-insert"
                  :src="
                    require('../../assets/images/product-photos/sg-spyrocor3.png')
                  "
                />
              </figure>
            </div>
            <div class="column is-two-third">
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/sg-spyrocor4.png')
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
      header: "Saint-Gobain SpyroCor",
      paragraph1Header: "Industry Innovation",
      paragraph1:
        "Industrial Linerback & Services (ILB) is a representative of the Saint-Gobain SpyroCor Group which has a radiant tube insert product that goes into galvanizing, annealing, and reheat furnaces. The tube insert is comprised of a series of silicon carbide flute blocks that are installed onto a rod and then inserted into the furnace’s radiant tube exit side. SpyroCor also has a HeatCor product that goes into the entry side of the tube next to the burner to increase the efficiency of the flame.",
      paragraph2Header: "Market Strategy",
      paragraph2:
        "Over the years, SpyroCor has been used in a variety of industries; it can be installed in straight tubes, U-tubes, Tri and W-tubes, and has recently been tried in Double P-tubes.",
      paragraph3:
        "SpyroCor has a proven track record of helping furnace performance for almost 15 plus years.  Some of the key benefits that have been achieved include:",

      benefits: [
        "More uptime and throughputs due to increased heat output",
        "Real energy savings with even heat distribution",
        "Sustained product emissions reducing both CO2 and NOx",
        "High performance and low maintenance",
        "Increased radiant tube shell life",
        "Easy, do-it-yourself installation"
      ],
      paragraph4Header: "Benefits",
      paragraph4:
        "Based on these benefits and our marketing material details, which ILB can share with our customers, it makes sense to consider SpyroCor space from an operations payback standpoint.  We will work with your team to achieve your performance goals and maximize your cost savings.",
      photosHeader: "Tube Inserts",
      contactHeader: "Contact Us",
      contact:
        "Please contact ILB by phone or e-mail if you have questions and to get further details on how we can help.",
      footer:
        "Publish Date: March 2020--products and applications are copyright of Saint-Gobain"
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
  background: rgba(191, 38, 4);
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
    to(rgb(191, 38, 4))
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
    from(rgb(191, 38, 4)),
    to(rgba(201, 201, 201, 0.756))
  );
}
.engraved-text-hero {
  color: rgb(211, 211, 211);
  text-shadow: 1px 1px rgb(132, 165, 148), -1px -1px rgb(36, 63, 47);
}

.engraved-text-header {
  color: rgb(191, 38, 4);
  text-shadow: 1px 0px rgb(191, 191, 191), 0px -1px rgb(67, 67, 67);
}

hr {
  border: 2px solid rgb(191, 38, 4);
  border-radius: 4px;
}
.logo-color {
  color: rgb(206, 53, 19);
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
  background: rgba(191, 38, 4);
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
  color: rgba(191, 38, 4) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}



/*  PRODUCT SPECIFIC */

#vert-insert {
  max-height: 500px
}

/* .product-image {
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
} */


</style>
