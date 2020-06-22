<template>
  <section>
    <!-- <contact-form-modal /> -->
    <div class="hero hero-bg is-small">
      <br />
      <br />
      <br />
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column is-2 is-offset-1">
            <figure class="image is-128x128">
              <img src="../../assets/images/logos/quin.png" class="logo-image" />
            </figure>
          </div>
          <div class="column is-8">
            <h1 class="title is-1 has-text-weight-bold has-text-white">{{header}}</h1>
          </div>
        </div>
      </div>
      <br />
    </div>
    <div class="component">
      <section class="has-text-black columns is-centered">
        <div class="column is-10">
          <br />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph1Header}}</h3>

          

              <div class="is-size-5">{{paragraph1}}</div>


          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph2Header}}</h3>


          <div class="is-size-5"><figure class="image">
            <img class="product-image" :src="require('../../assets/images/product-photos/quin1.jpg')"/> </figure>
            {{paragraph2}} 
              </div>
          <br />
          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph3Header}}</h3>

          <div class="is-size-5">{{paragraph3}}</div>
          <br />
          <hr />
                    <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph4Header}}</h3>

          <div class="is-size-5">{{paragraph4}}</div>
          <br />
          <hr />
                    <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph5Header}}</h3>

          <div class="is-size-5">{{paragraph5}}</div>
          <br />
          <br />
        </div>
      </section>
    </div>
    <footer class="footer hero-bg">
      <div class="content colummns">
        <div class="is-size-4 has-text-white column is-offset-1 is-6">{{contact}}</div>
      </div>
    </footer>
  </section>
</template>

<script>
// import ContactFormModal from "@/components/Contact";
export default {
  components: {
    // ContactFormModal
  },
  data: function() {
    return {
      header: "Quin Global",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback and Services (ILB) is a support partner of Quin Global. ILB acts as their USA distributor throughout North America serving the industries ILB serves. ILB and Quin together have agreed to enter into many different industries including: steel, cement, automotive, waste energy, asphalt, energy and the flooring industry. With Quin Global being a worldwide supplier of adhesive and sanitization products we are looking to raise the bar by providing unique and superior products for your needs.",
      paragraph2Header: "Linerbacker Adhesive",
      paragraph2:
        "ILB has its own adhesive for Industrial use. This adhesive is backed by Quin Global for any industrial, commercial or residential use. This product comes in a spray can and is called Linebacker Adhesive. This product was pulled together and formulated for the tough industrial world as it came out of the aerospace industry to laminate two surfaces together--the same or different. Here is why our Linerbacker Adhesive spray is unique: it has a breakaway strength of 16-18 psi and sets-up in 15 minutes. It’s a contact to contact application where you spray both mating surfaces and just stick them together. For a quick repair in the field—nothing can compare. Epoxy would but it takes a minimum of 8 hrs to cure.",
      paragraph3Header: "Floor Adhesive",
      paragraph3:
        "Quin Global has a special, recently new product just for flooring which has been approved by the building industry. This product also has a quick drying time and a high break away strength where any flooring product can be installed very quickly, plus any wall tile. This floor adhesive has been gaining attention in the marketplace as being an installation material of choice. It is their product called TensorgripG67 which comes in a 50 lbs canister and is sprayed on.",

      paragraph4Header: "Sanitization Spray",
      paragraph4:
        "Quin Global just got this sanitary spray approved this year to address the spread of Sars and Covid-19 –it’s called RS1. This product comes in a 50 lb canister where it can be sprayed throughout an office, airport or any industrial building including any factory to kill the virus. ",
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
        "These adhesive products shared above can overall speed up your installation time and take care of monotonous maintenance nightmares that get put off because of the set-up time. Now our sanitization product is a cutting edge product that can help us all be safe from any covid virus. ",
      contact:
        "Please contact ILB either by phone or by e-mail to get further details on any of the adhesives or sanitization products shared above."
    };
  }
};
</script>

<style scoped>
.component {
  background: linear-gradient(
      to right,
      #e1e1e19f 0%,
      #ffffffb8 10%,
      #ffffffaa 50%,
      #ffffff8e 90%,
      #d3d3d3a7 100%
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
.copy {
  background: #ffffff;
  padding-left: 100px;
  padding-right: 100px;
}
hr {
  border: 1px solid rgb(31, 105, 128);
  border-radius: 2px;
}
.logo-color {
  color: rgb(31, 105, 128);
}

.logo-image {
  border-radius: 3px;
  position: absolute;
}

.product-image {
  max-width: 150px;
  margin-right: 10px;
  float: left;
}
</style>
