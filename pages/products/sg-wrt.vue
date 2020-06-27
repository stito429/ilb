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
              <img src="../../assets/images/logos/sg.png" class="logo-image" />
            </figure>
            <br />
          </div>
          <div class="column is-8">
            <br />
            <h1 class="title is-1 has-text-weight-bold has-text-white">
              {{ header }}
            </h1>
            <br />
          </div>
        </div>
      </div>
    </div>

    <div class="component">
      <section class="has-text-black columns is-centered">
        <div class="column is-10 padding">
          <br />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">
            {{ paragraph1Header }}
          </h3>
          <div class="columns">
            <div class="column is-6">
              <div class="is-size-4">{{ paragraph1 }}</div>
            </div>
            <div class="column is-6">
              <figure class="image">
                <img
                  :src="
                    require('../../assets/images/product-photos/sg-wrt1.png')
                  "
                />
              </figure>
            </div>
          </div>

          <hr />

          <h3 class="subtitle is-3 has-text-weight-bold logo-color">
            {{ paragraph2Header }}
          </h3>
          <div class="columns">
            <div class="column is-size-4">{{ paragraph2 }}</div>
            <div class="column">
              <figure class="image">
                <img
                  class="product-image"
                  :src="
                    require('../../assets/images/product-photos/sg-wrt5.png')
                  "
                />
              </figure>
            </div>
          </div>
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">
            {{ paragraph3Header }}
          </h3>
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
          <!-- <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph4Header}}</h3>
          <div class="is-size-4">{{paragraph4}}</div>
          <hr/> -->
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">
            {{ paragraph5Header }}
          </h3>
          <div class="is-size-4">{{ paragraph5 }}</div>
          <br />
          <div class="is-size-4">{{ paragraph6 }}</div>
          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">
            {{ photosHeader }}
          </h3>
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
        </div>
      </section>
      <br />
    </div>

    <footer class="footer hero-bg">
      <div class="content colummns">
        <div class="is-size-4 has-text-white column is-offset-1 is-6">
          {{ contact }}
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
// export default {
//   components: {},
//   data: function() {
//     return {
//       name: "Saint-Gobain WRT Group",
//       website: {
//         site: "wrt.saint-gobain.com",
//         url: "https://wrt.saint-gobain.com"
//       },
//       sections: [
//         {
//         title: "Background",
//         description: "Industrial Linerback &amp; Services (ILB) is a representative of the Saint-Gobain WRT Group which is the company’s wear resistant tile group. The WRT group, based in Latrobe, PA; offers several different products through ILB that can be used in a variety of industries. If combatting wear resistance is your challenge, we have the solution in an impressive ceramic product called Durafrax. If you have an impact issue combined with an abrasive issue, ILB has a solution for that too: a hardened plate or HC250 wear plate that can be bolted in and out. Bottom line, when it comes to resisting abrasion and high heat, Saint-Gobain’s Durafrax is proven to outlast steel 16 to 1 or chromium carbide overlay by 4 to 1.",
//       },{
//       title: "Market Strategy",
//       description: "Saint-Gobain WRT is an industry leader for wear protection products. We offer pre-engineered tiles, our standard tiles, and a casted product, aswell as many other options to include: high alumina silica products, which is Durafrax; plain silicon carbide products; a premium silicon carbide product called hexoly; and some coatings, basalt, silicones, epoxies, and light-weight wearing compounds.",
//       },{
//       title: "General Applications",
//       applicationsList: [
//         "Steel Making and Blast Furnaces",
//         "Power",
//         "Ashphalt",
//         "Petrochemical",
//         "Mining and mineral processing",
//         "Cement",
//         "Material Handling",
//         "Process Line Flumes",
//         "Water and Wastewater Treatment areas",
//         "Ship Yards"
//       ]},{
//       title: "Website",
//       description: "For additional details on all their products please visit their website at: ",
//       },{

//       closing: "All of the benefits above, and project histories around the globe, our marketing material details will explain to end users that it makes a lot of sense to consider Saint-Gobain products to help improve your facility’s performance and equipment longevity.  All of the benefits above and our marketing material details, which ILB can share, illustrate why this product line is beneficial from an operations payback standpoint. Please contact ILB by phone or e-mail if you have questions and to get further information on how we can help you with your wear challenges."
//       }]
//     };
//   }
// };
export default {
  components: {},
  data: function() {
    return {
      header: "Saint-Gobain WRT",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback & Services (ILB) is a representative of the Saint-Gobain WRT Group which is the company’s wear resistant tile group. The WRT group, based in Latrobe, PA; offers several different products through ILB that can be used in a variety of industries. If combatting wear resistance is your challenge, we have the solution in an impressive ceramic product called Durafrax. If you have an impact issue combined with an abrasive issue, ILB has a solution for that too: a hardened plate or HC250 wear plate that can be bolted in and out. Bottom line, when it comes to resisting abrasion and high heat, Saint-Gobain’s Durafrax is proven to outlast steel 16 to 1 or chromium carbide overlay by 4 to 1.",
      paragraph2Header: "Market Strategy",
      paragraph2:
        "Saint-Gobain WRT is an industry leader for wear protection products. We offer pre-engineered tiles, our standard tiles, and a casted product, as well as many other options to include: high alumina silica products, which is Durafrax; plain silicon carbide products; a premium silicon carbide product called hexoly; and some coatings, basalt, silicones, epoxies, and light-weight wearing compounds.",
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
      paragraph4Header: "More Info",
      paragraph4:
        "For additional details on Saint-Gobain’s WRT product line, please visit their website at: wrt.saint-gobain.com.",
      paragraph5Header: "Benefits",
      paragraph5:
        "All of the benefits above, and project histories around the globe, our marketing material details will explain to end users that it makes a lot of sense to consider Saint-Gobain products to help improve your facility’s performance and equipment longevity.",
      paragraph6:
        "All of the benefits above and our marketing material details, which ILB can share, illustrate why this product line is beneficial from and operations payback standpoint.",
      contact:
        "Please contact ILB by phone or e-mail if you have questions and to get further information on how we can help you with your wear challenges."
    };
  }
};
</script>

<style>
/* .board-item-content {
  word-break: break-all;
  position: relative;
  background: #fff;
  border-radius: 4px;
  font-size: 15px;
  -webkit-box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
  margin: 5px;
}

.board-item {
  margin: 5px 0;
  will-change: transform;
}

#sectioncontainer {
  margin-top: 20px;
}


.cards-container {
  max-width: 50%;
}

.column_wrapper {
  column-count: 2;
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
  background: rgb(12, 147, 162);
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

hr {
  border: 1px solid rgb(12, 147, 162);
  border-radius: 2px;
}
.logo-color {
  color: rgb(12, 147, 162);
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
</style>
