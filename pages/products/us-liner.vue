<template>
  <section>
    <div class="hero-padding hero-bg">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <figure class="image is-128x128">
              <img src="../../assets/images/logos/us-liner.png" class="logo-image" />
            </figure>
          </div>

          <div class="level-item">
            <div class="title is-1 has-text-weight-bold has-text-white">{{header}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="component">
      <section class="has-text-black columns is-centered">
        <div class="column is-10 padding">
          <br />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph1Header}}</h3>
          <div class="columns is-centered">
            <div class="column is-7">
              <div class="is-size-4">{{paragraph1}}</div>         
            </div>
            <div class="column is-75">
              <figure class="image" >
                <img :src="require('../../assets/images/product-photos/us-conc2.jpg')" id="product-image-background" />
              </figure>
            </div>
          </div>
           <div class="is-size-4">{{paragraph2}}</div>   
          <div class="column is-10 is-offset-1">
            <div class="columns has-text-black">
              <div class="column is-6">
                <ul class="fa-ul">
                  <li v-for="quality in qualities1" :key="qualities1">
                    <span class="icon is-size-7 logo-accent-color">
                      <i class="fa-li fas fa-circle"></i>
                    </span>
                    <span class="is-size-4" v-bind:href="quality" v-html="quality"></span>
                  </li>
                </ul>
              </div>
              <div class="column is-6">
                <ul class="fa-ul">
                  <li v-for="quality in qualitie2" :key="qualities2">
                    <span class="icon is-size-7 logo-accent-color">
                      <i class="fa-li fas fa-circle"></i>
                    </span>
                    <span class="is-size-4" v-bind:href="quality" v-html="quality"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />

          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph4Header}}</h3>
          <div class="is-size-4">{{paragraph4}}</div>
          <br />
          <div class="columns" v-for="product in products" :key="product.name">
            <div class="column is-2">
              <div class="title is-4 logo-accent-color">{{product.name}}</div>
            </div>
            <div class="column is-10 product-description">
              <div class="is-size-4">{{product.description}}</div>
            </div>
          </div>

          <!-- <div class="columns is-multiline is-centered">
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
          </div></div>-->

          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph3Header}}</h3>
          <div class="is-size-4">{{paragraph3}}</div>

          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph5Header}}</h3>
          <div class="is-size-4">{{paragraph5}}</div>
          <br />

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
        <div class="is-size-4 has-text-white column is-offset-1 is-6">{{contact}}</div>
      </div>
    </footer>
  </section>
</template>

<script>
// import logo from "../../assets/images/logos/ilblogo.png";
// export default {
//   components: {},
//   data: function() {
//     return {
//       name: "US Liner",
//       website: {
//         site: "USLCO.com",
//         url: "https://www.uslco.com"
//       },
//       paragraph1:
//         "Industrial Linerback and Services (ILB)represent’s US Liner in offering their sheeting products in a variety of Industrial applications. US Liner manufactures three key products that ILB is introducing to the Industries it serves….they are: <b>Versitex, Ecotex, and BXR </b> sheets. <p>All of these three product sheets offer the following quality and traits. </p>They are: Rot and mildew resistant, moisture resistant, light weight (20% lighter than aluminum thickness equivalent), acid resistant, corrosion resistant, white in color (Typical) or can come in any other color (min 600 linear ft run needed), cleans very easily with soap and water, either flexible or rigid, recyclable , pretty much non-stick (after water freezes it slides off and  spray foam insulation will not stick to it), very puncture resistant (hot patch method available if it does get punctured), nice smooth top finish and a textured finish on the back for an adhesive to be used to stick product to wood or steel, can include a UV protection layer on the top surface plus they have a farmable use.",
//       paragraph2:
//         "US Liner's unique products are currently changing several industries--one in particular being the tractor trailer industry. The others being the RV industry, the railroad, and the US Military.  For more details please visit their website at ",
//       paragraph3:
//         "Overall these materials can come in various thicknesses up to almost a quarter of an inch thick. US Liner’s thinner sheet sizes of Versitex are typically made in 8 ft wide rolls (optional 102&quot; wide rolls) and can come in lengths up to 600 linear feet. The other option is that their Versitex and Ecotex board can be processed in 4 x 8 ft panel sheets and then stacked on pallets for shipment. BXR is their translucent panel and it typically comes in 2 ft by 8 ft panels. Here are some further details on the products.",
//       products: [
//         {
//           name: "Versitex",
//           description:
//             "Their highly used advanced thermoplastic composite sheet product that is made from continuous glass strands. It is their only product that carries the FDA stamp as it is used to assemble refrigerated truck panels as it has a back scrim surface for adhesion to other products such as insulation. These high resistant impact resistant panels are comprised of Polypropylene resin reinforced with continuous bi-directional glass strands. It comes in approximately 6 different thicknesses and named accordingly…….. VR1 (.04”) , VR2 (.06”) , VR3 (.08”),VR5(.125”) ,VR8 (.175”) and VR10 (.215”). The Versitex VR sheeting product provides significant energy absorption over traditional FRP panels and exhibit thermal expansion similar to aluminum but far less than steel."
//         },
//         {
//           name: "Ecotex",
//           description:
//             "Made from their own recycled materials and comes in one thickness---3/16” thick. It has a reinforced sandwich construction by laminating Versitex skins onto a chopped long fiber polypropylene and glass core. This low cost material is geared to the environmental conscious seeking value with ultimate strength capabilities."
//         },
//         {
//           name: "BXR",
//           description:
//             "US Liners translucent sheet product that is used in tractor trailer roofs. It has over 5 times the tear resistance of the Best fiberglass roof currently in the market place. . It is super bright and has unsurpassed UV protection to deter cracking due to the sun. Its five layer construction makes it very durable by letting light to be transmitted through the product layers and having outstanding durability and strength.  This sheet typically comes in 2 ft x 8 ft panel sizes but can be supplied in 4 ft 8ft sheets."
//         }
//       ],
//       paragraph4:
//         "Overall, if you look at these products and their uses they have a lot of merit in protecting shed inner walls, any overhang or walkway, chicken coop, metal building roof or side wall, plus may other different applications such as being used as a caisson or concrete form. ",
//       paragraph5:
//         "If you would like to know more about the product and its potential uses please contact ILB either by phone or by e-mail to get further details on where we can possibly help."
//     };
//   }
// };

export default {
  components: {},
  data: function() {
    return {
      header: "US Liner",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback & Services (ILB) represents US Liner by offering their unique line of sheeting products in a variety of industrial applications. US Liner manufactures three key products that ILB is introducing to the industries it serves: Versitex, Ecotex, and BXR sheets. ",
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
        "pretty much non-stick (frozen water slides off and spray foam insulation will not stick)",
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
        "The US Liner sheeting comes in various thicknesses up to almost a quarter of an inch thick. The thinner sheet sizes of Versitex are typically made in 8 ft wide rolls (optional 102&quot; wide rolls) and can come in lengths up to 600 linear feet. The other options are Versitex and Ecotex boards which can be processed in 4 x 8 ft panel sheets then stacked on pallets for shipment. BXR is their translucent panel which comes in 2 ft by 8 ft panels. Here are some further details on these products:",
      products: [
        {
          name: "Versitex",
          description:
            "is their highly used, advanced thermoplastic composite sheet product made from continuous glass strands. It is their only product that carries the FDA stamp as it is used to assemble refrigerated truck panels due to its back scrim surface for adhesion to other products such as insulation. These high resistant, impact resistant panels are comprised of Polypropylene resin reinforced with continuous bi-directional glass strands. They comes in approximately six different thicknesses and named accordingly: VR1 (.04”), VR2 (.06”), VR3 (.08”), VR5(.125”), VR8 (.175”), and VR10 (.215”). The Versitex VR sheeting product provides significant energy absorption over traditional FRP panels and exhibits thermal expansion similar to aluminum but far less than steel."
        },
        {
          name: "Ecotex",
          description:
            "is made from US Liner’s own recycled materials and comes in one thickness: 3/16” thick. It has a reinforced sandwich construction by laminating Versitex skins onto a chopped long fiber polypropylene and glass core. This low cost material is geared to the environmental conscious seeking value with ultimate strength capabilities."
        },
        {
          name: "BXR",
          description:
            "is US Liner’s translucent sheet product used in tractor trailer roofs. It has over five times the tear resistance of the best fiberglass roof currently on the market, is super bright, and has unsurpassed UV protection to deter cracking due to the sun. Its five layer construction makes it very durable by allowing light to be transmitted through the product layers and has outstanding durability and strength. This sheet typically comes in 2 ft x 8 ft panel sizes but can also be supplied in 4 ft 8ft sheets."
        }
      ],
      paragraph5Header: "More Info",
      paragraph5:
        "A close review of these products and their many uses show that they have significant merit in protecting shed inner walls, any overhang or walkway, chicken coops, metal building roofs or side walls, and many other applications such as being used as a caisson or concrete form.If you have questions or would like to know more about US Liner products and their potential uses at your facility, please contact ILB by phone or e-mail to get further details on how we can assist with your current needs.",
      contact:
        "If you have questions or would like to know more about US Liner products and their potential uses at your facility, please contact ILB by phone or e-mail to get further details on how we can assist with your current needs."
    };
  }
};
</script>

<style scoped>
.component {
  background: linear-gradient(
      to right,
      #ffffff80 0%,
      #ffffffa8 10%,
      #ffffffc4 50%,
      #ffffff9a 90%,
      #ffffff87 100%
    ),
    url("../../assets/images/backgrounds/gray.jpg") no-repeat center center fixed;
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
  background: rgb(72, 148, 84);
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
  border: 1px solid rgb(78, 172, 65);
  border-radius: 2px;
}
.logo-color {
  color: rgb(54, 147, 41);
}
.logo-accent-color {
  color: rgb(213, 107, 26);
}

.logo-image {
  border-radius: 3px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.product-image {
  min-width: 100%;
  padding: 10px;
  /* position: relative; */
}

#product-image-background {
  float: left;
  padding-right: 150px;
  min-width: 100%;
  min-height: 200px;
}

#product-image3 {
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
