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
          <div class="columns is-vcentered">
            <div class="column is-8">
              <div class="is-size-5">{{paragraph1}}</div>
            </div>
            <div class="column is-4">
              <figure class="image">
                <img class="product-image" :src="require('../../assets/images/product-photos/quin1.jpg')" />
              </figure>
            </div>
          </div>

          <!-- <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph2Header}}</h3> -->
          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph2Header}}</h3>

          <div class="is-size-5">{{paragraph2}}</div>
          <br />
          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph3Header}}</h3>

          <div class="is-size-5">{{paragraph3}}</div>
          <br />
          <div class="is-size-5">{{paragraph4}}</div>
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
export default {
  components: {},
  data: function() {
    return {
      header: "Quin Global",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback and Services (ILB) is a support partner of Quin Global. ILB acts as their USA distributor throughout North America serving the industries ILB serves. ILB and Quin together have agreed to enter into many different industries including: steel, cement, automotive, waste energy, asphalt and energy. With Quin Global being a worldwide supplier of adhesive products we are looking to raise the bar by providing a superior product that sets-up far quicker than any other product out there. For example the Linerback Adhesive which is an industrial adhesive is a Quin Global manufactured product that ILB and Quin Global pulled together for the tough industrial world. This product has a breakaway strength of 18 psi and set-s in 15 minutes. It’s a contact to contact application where you spray both mating surfaces and just stick them together. For a quick repair in the field—nothing can compare. Epoxy would but it takes a minimum of 8 hrs to cure.",
      paragraph2Header: "Sanitization",
      paragraph2:
        "ILB also sells through them a sanitary spray that’s approved for Sars and Covid-19 –it’s called RS1. They also have a floor adhesive that is amzing and it’s their TensorgripG67 adhesive.",
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
      paragraph3Header: "Efficiency",
      paragraph3:
        "These products overall can help speed up your installation time and take care of monotonous maintenance nightmares that get put off because of the set-up time. For further details on their floor adhesive you can view their website at:Quin-Global.com. If you would like more details o the Linerback Industrial adhesive please contact ILB.",
      paragraph4:
        "If you look at the benefits of the products listed above and how it will speed up your job or repairs it make sense with customers to give our products a look.",
      contact:
        "Please contact ILB either by phone or by e-mail to get further detail on any of the adhesive products discussed above."
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
    url("../../assets/images/backgrounds/gray.jpg") no-repeat center center fixed;
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
  max-width: 80%;
  padding: 10px;
  position: relative;
}
</style>
