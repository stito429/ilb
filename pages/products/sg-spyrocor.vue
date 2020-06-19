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
          </div>
          <div class="column is-8">
            <br />
            <h1 class="title is-1 has-text-weight-bold has-text-white">{{header}}</h1>
            <br />
          </div>
        </div>
      </div>
    </div>

    <div class="component">
      <section class="has-text-black columns is-centered">
        <div class="column is-10 padding">
          <br />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph1Header}}</h3>
          <div class="columns is-vcentered">
            <div class="column is-8">
              <div class="is-size-4">{{paragraph1}}</div>
            </div>
            <div class="column is-4">
              <figure class="image">
                <img :src="require('../../assets/images/product-photos/sg-spyrocor1.png')" />
              </figure>
            </div>
          </div>

          <hr />

          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph2Header}}</h3>
          <div class="is-size-4">{{paragraph2}}</div>

          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph3Header}}</h3>
          <div class="is-size-4">{{paragraph3}}</div>
          <br />

          <div class="columns is-vcentered">
            <div class="column is-4">
              <figure class="image">
                <img
                  class="product-image"
                  :src="require('../../assets/images/product-photos/sg-spyrocor2.png')"
                />
              </figure></div>
              <div class="column is-7 is-offset-1">
              <ol>
                <li class="is-size-4" v-for="benefit in benefits" :key="benefit">{{benefit}}</li>
              </ol>
              </div>
            
          
          </div>
          <hr/>
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph4Header}}</h3>
          <div class="is-size-4">{{paragraph4}}</div>

          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{photosHeader}}</h3>
          <div class="columns is-centered">
            <div class="column is-two-third">
              <figure class="image">
                <img class="product-image" :src="require('../../assets/images/product-photos/sg-spyrocor3.png')" />
              </figure>
            </div>
            <div class="column is-two-third">
              <figure class="image">
                <img class="product-image" :src="require('../../assets/images/product-photos/sg-spyrocor4.png')" />
              </figure>
                            <figure class="image">
                <img class="product-image" :src="require('../../assets/images/product-photos/sg-spyrocor5.png')" />
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
// export default {
//   components: {},
//   data: function() {
//     return {
//       name: "Saint-Gobain SpyroCor",
//       paragraph1:
//         "Industrial Linerback and Services (ILB) represents the Saint-Gobain SpyroCor Group where they have a radiant tube insert product that goes into either Galvanizing, Annealing and Reheat Furnaces. The SpyroCor product is made up of a series of Silicon Carbide flute blocks that are installed onto a rod then inserted in the furnaces radiant tube exit side. SpyroCor is proven to be a product that all furnace builders and users take a look at to see if it has benefit for them.",
//       paragraph2:
//         "Over the years SpyroCor has been used in a variety of Industries. This product can be installed in either straight tubes, U-tubes, Tri and W-tubes and most recently tried in Double P Tubes.",
//       paragraph3:
//         " SpyroCor may be something your group might want to consider.  SpyroCor does have a proven track record of helping furnace performance for almost 15 plus years now.  Over the years here are some of the key benefits that have been experienced.",
//       paragraph4:
//         "If you look at these benefits above and our flyer details which ILB can share with its customers it makes a lot of sense to consider it from an operations payback standpoint.  It’s no problem—we can work with your team to maximize your savings.",
//       benefits: [
//         "1) More uptime and more throughputs due to increased heat output",
//         "2) Real energy savings with even heat distribution",
//         "3) Sustained product emissions reducing CO2 and NOx",
//         "4) High performance and low maintenance",
//         "5) Contributes to increasing your radiant tube shell life",
//         "6) Easy; Do-it-yourself installation"
//       ]
//     };
//   }
// };

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
    paragraph4Header:"Benefits",
      paragraph4:
        "Based on these benefits and our marketing material details, which ILB can share with our customers, it makes sense to consider SpyroCor from an operations payback standpoint.  We will work with your team to achieve your performance goals and maximize your cost savings.",
      contact:
        "Please contact ILB by phone or e-mail if you have questions and to get further details on how we can help."
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
    url("../../assets/images/backgrounds/gray.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* min-height: 100vh; */
}
.hero-bg {
  background: rgb(191, 38, 4);
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
  border: 1px solid rgb(206, 53, 19);
  border-radius: 2px;
}
.logo-color {
  color: rgb(206, 53, 19);
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
  min-height: 400px;
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
