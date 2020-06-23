<template>
  <section>
    <!-- hero -->
    <section class="hero hero-bg is-small section shift-hero"><div class="hero-body"></div></section>

    <section class="component section">
      <!-- <div class="has-text-weight-bold ">
        
        <div class="has-text-white is-size-1 level">
        <div class="level-item">

          <figure class="image">
            <img :src="require('./../assets/logos/ilblogo.png')" />
          </figure>
        </div>
        <div class="level-item">
          {{hero1}}
        </div>
      </div></div>-->
      <section class="has-text-black columns is-centered">
        <div class="column is-8 padding">
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">{{paragraph1Header}}</h3>
          <span class="heading-fade-effect"></span>
          <div class="columns is-vcentered">
            <div class="column is-12">
              <div class="is-size-4">{{paragraph1}}</div>
            </div>
          </div>

          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">{{paragraph2Header}}</h3>
          <span class="heading-fade-effect"></span>
          <p class="is-size-4">{{paragraph2}}</p><br/>
          <p class="is-size-4">{{paragraph3}}</p><br/>
          <p class="is-size-4">{{paragraph4}}</p><br/>
          <p class="is-size-4">{{paragraph5}}</p>
        </div>

        <hr />
      </section>
    </section>
    <footer class="footer hero-bg">
      <div class="content colummns">
        <div class="is-size-4 has-text-white column is-offset-1 is-6">{{contact}}</div>
      </div>
    </footer>
  </section>
</template>

<script>
import logo from "../../assets/images/logos/ilblogo.png";

export default {
  data: function() {
    return {
      hero1: "About ILB",
      paragraph1Header: "Mission Statement",
      paragraph1:
        "ILB’s Mission Statement is focused on your performance needs and bottom line to bring our products and engineering expertise to your door step; we will work and collaborate with you to determine the most economical and top-performing solutions by implementing and monitoring the plan from start to finish. Our goal is to be an industry leader by providing our customers with the best products and proven engineered solutions for the best price. This all happens through our network of reputable, global companies, alongside seasoned technical experts who work in a wide spectrum of industries - all backed by tested, used, and reputable products that show proven results.",
      paragraph2Header: "History",
      paragraph2:
        "Industrial Linerback & Services LLC was founded in January 2017 by George Verbanic. It is a sole proprietorship company that provides products and services to a diverse industry base that it represents. George, a Mechanical Engineer with a degree from theUniversity of Pittsburgh and with a minor in Manufacturing Engineering, serves as the materials specialist and sales engineer for ILB. His career began in 1987 with a focus on the steel industry, working for recognized companies such as Wean/Danieli, Tenova, and the Paul Wurth/SMS Group. In addition, he also gained experience in the air and water treatment side of the business while working for Calgon Carbon. George also spent several years working for Hatch; an engineering and installation consulting group.",
      paragraph3:
        "ILB has a multitude of top performing products to offer: refractories or ceramic materials made by Saint-Gobain, advanced thermoplastic sheeting products produced by US Liner, and a proprietary industrial adhesive promoted by Quin-Global. All of these products - individually or in combination - offer exceptional results. ILB makes this all happen through its in-house engineering expertise, with the support of Orbital Engineering which has every facet of engineering under one roof, and Saint-Gobain, whose products are known worldwide for performance and value.",
      paragraph4:
        "When it comes to making the right choice with our customers, we are committed to providing the best horsepower possible selecting the right materials to do the job right the first time.",
      paragraph5:
        "ILB welcomes the opportunity to discuss any issue or challenge you may be facing that requires technical or commercial support, or materials and services. For a personal consultation, please contact:",
      contactInfo: [
        { name: "George Verbanic" },
        {
          title: "Material Specialist/Sales Engineer"
        },
        {
          email: "verbanicilb@gmail.com"
        },
        {
          cell: "724-825-1474"
        }
      ]
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
  min-height: 100vh;
}

.hero-bg {
  background: linear-gradient(to right, #f5f5f546, #00000085),
    url("../../assets/images/img/drafter.jpg") fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  background-position: bottom;
  background-repeat: no-repeat;
}
.hero h1 {
  color: #dbdbdb;
}
.shift-hero {

  padding-top: 400px;
}
.shift-hero-logo {
  position: relative;
  top: 20px;
  left: 150px;
}
</style>
