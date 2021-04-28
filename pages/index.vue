<template>
  <section>
    <!-- hero -->
    <section class="hero bg is-fullheight section">
      <div
        class="hero-body has-text-weight-bold shift-hero columns"
      >
      <div class="column is-1 is-hidden-desktop"></div>
        <div class="column is-4-fullhd is-4-widescreen is-5-desktop is-9-tablet is-11-mobile"
          id="blurred-box"
          data-aos="slide-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-offset="400"
          data-aos-delay="0"
        >
          <div class="columns is-centered is-mobile">
            <div class="column is-10 is-9-mobile is-10-tablet">
              <div class="title is-3 has-text-white has-text-centered pt-3">
                Engineered Solutions
                <br />with a
                <div
                  class="title is-1 has-text-weight-bold highlighted underlined"
                  data-aos="fade-in"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in"
                  data-aos-once="true"
                  data-aos-offset="400"
                  data-aos-delay="1500"
                >
                  Global Reach
                  <br />
                </div>
              </div>
              <div class="columns is-centered has-text-centered">
                <div class="column is-12 ">
                  <div class="highlighted is-size-4">
                    {{ heroProductsLeft }}
                  </div>
                  <div class="has-text-white is-size-6">
                    {{ heroProductsRight }}
                  </div>
                </div>
              </div>
              <div class="columns is-centered has-text-centered">
                <div class="column is-9">
                  <div class="highlighted is-size-4">
                    {{ heroDesignLeft }}
                  </div>
                  <div class="has-text-white is-size-6">
                    {{ heroDesignRight }}
                  </div>
                </div>
              </div>
              <div class="columns is-centered has-text-centered">
                <div class="column is-9">
                  <div class="highlighted is-size-4">
                    {{ heroServicesLeft }}
                  </div>
                  <div class="has-text-white is-size-6">
                    {{ heroServicesRight }}
                  </div>
                </div>
              </div>

              <!-- </div> -->

              <div class="columns is-centered">
                <div class="column is-11 has-text-centered">
                  <div class="has-text-centered">
                    <button id="" class="is-size-4 contact-button">
                      <a @click="$modal.show('contact-form')">
                        Click Here and Share Your Needs With Us</a
                      >
                    </button>
                  </div>
                </div>
              </div>
              <div class="columns is-centered">
                <div class="column is-11 has-text-centered" id>
                  <span class="has-text-white is-size-5">
                    {{ heroResidentialLeft }}
                    <div class="highlighted">{{ heroresidentialRight }}</div>
                  </span>
                  <div class="has-text-centered pb-3">
                    <router-link to="/products/us-liner" tag="button"
                      >Click Here</router-link>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
         <div class="column is-1 is-hidden-desktop"></div>
      </div>
    </section>
    <!-- Logo Intro -->
    <section class="logo-background section">
      <div class="columns is-centered is-vcentered is-multiline">
        <div
          class="column is-10-mobile is-offset-1-mobile is-4-widescreen is-5-desktop is-10-tablet"
        >
          <figure
            class="image is-3-by-1"
            data-aos="zoom-out"
            data-aos-duration="1500"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img src="./../assets/images/logos/ilblogo.png" />
          </figure>
        </div>

        <div
          class="column is-10-mobile is-offset-1-mobile is-4-widescreen is-5-desktop is-10-tablet"
        >
          <div class="columns ">
            <div
              class="column is-12-mobile"
              data-aos="fade-up-left"
              data-aos-duration="2000"
              data-aos-offset="400"
              data-aos-once="true"
            >
              <div
                v-for="benefit in benefits"
                :key="benefit"
                v-bind:href="benefit"
                class="engraved-text is-size-4 has-text-weight-bold benefit-box has-text-centered-touch"
              >
                {{ benefit }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Cats -->
    <section class="container section" id="product-cats">
      <div class="columns is-centered">
        <div class="column is-12">
          <h2
            class="title is-2 highlighted has-text-centered shadowed"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-offset="450"
          >
            Why is ILB Different?
          </h2>
        </div>
      </div>

      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-5-desktop is-11-mobile" id->
          <div
            class=""
            data-aos="slide-right"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-offset="450"
            data-aos-delay=""
          >
            <h2 class="title is- shadowed highlighted has-text-centered">
              One Point of Contact
            </h2>
            <div
              class="has-text-weight-semibold has-text-white is-size-5"
              id="text-background"
            >
              Industrial Linerback & Services is your one-stop-shop for all of
              your industrial, commerical, and residential needs. There's no
              need to coordinate with multiple companies for your next project.
              Let ILB combine and match products and services for all of your
              application needs.
            </div>
          </div>
        </div>

        <div class="column is-5-desktop is-11-mobile">
          <figure
            class="image"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-offset="500"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <img src="./../assets/images/img/contact.jpg" id="contact-photo" />
          </figure>
        </div>
      </div>

      <div
        class="columns is-multiline is-centered is-vcentered"
        id="several-solutions"
      >
        <div
          class="column is-5-desktop is-11-mobile"
          id="product-cats-box"
          data-aos="flip-left"
          data-aos-delay="1000"
          data-aos-duration="2000"
          data-aos-offset="250"
          data-aos-once="true"
        >
          <div
            class="columns is-mobile is-centered"
            id="desktop-test"
          >
            <div class="column is-mobile is-half">
              <div class="columns is-centered is-mobile">
                <div class="column is-hidden-desktop pr-5"></div>
                <div class="column is-narrow">
                  <ul>
                    <li v-for="productCat in productCats1" :key="productCat">
                      <span class="highlighted icon is-large" id="product-cat">
                        <i class="fas fa-check fa"></i>
                      </span>
                      <span
                        class="has-text-weight-bold has-text-white"
                        id="product-cat"
                        v-bind:href="productCat"
                        v-html="productCat"
                      ></span>
                    </li>
                  </ul>
                </div>
                <div class="column"></div>
              </div>
            </div>
            <div class="column is-mobile is-half">
              <div class="columns is-centered is-mobile">
                <!-- <div class="column"></div> -->
                <div class="column is-narrow">
                  <ul>
                    <li v-for="productCat in productCats2" :key="productCat">
                      <span class="highlighted icon is-large" id="product-cat">
                        <i class="fas fa-check fa"></i>
                      </span>
                      <span
                        class="has-text-weight-bold has-text-white"
                        id="product-cat"
                        v-bind:href="productCat"
                        v-html="productCat"
                      ></span>
                    </li>
                  </ul>
                </div>
                <div class="column"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="column is-5-desktop is-11-mobile"
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <h2 class="title highlighted has-text-centered">Several Solutions</h2>
          <div
            class="has-text-weight-semibold has-text-white is-size-5 several-solutions"
          >
            We offer a variety of products that will cover all of your needs.
            This allows us to design each product with your application in mind.
            We back up each of our products by offering several engineering
            support services.
          </div>
        </div>
      </div>
      <!-- <div class="column is-2">
          <div class="content">
            <h2 class="title">Who We Serve</h2>
            <ul>
              <li
                v-for="customer in customers"
                :key="customer"
                v-bind:href="customer"
              >{{customer}}</li>
            </ul>
          </div>
      </div>-->
    </section>

    <!-- Qualities Loop-->
    <!-- <div class="columns is-multiline is-vcentered is-centered intro-background">
        <div
          v-for="quality in qualities"
          :key="quality.title"
          class="column is-2 card intro-background"
        >
          <div class="card-header">
            <div class="card-header-title">
              <div class="has-text-centered">{{ quality.title}}</div>
            </div>
            <img class="image is-64x64" src="./../assets/images/icon-handshake.png" />
          </div>
          <div class="card-content">
            <div class="content">
              <p>{{quality.description}}</p>
            </div>
          </div>
        </div>
    </div>-->

    <!-- Qualities HardCoded-->
    <section class="logo-background section">
      <div>
        <h1
          class="title is-1 has-text-centered engraved-text"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2500"
        >
          Industrial Linerback Services & LLC.
        </h1>
        <br />
      </div>
      <div class="columns is-variable is-multiline is-centered">
        <div class="column is-3-widescreen is-half-tablet">
          <div
            class="card is-shady card-background"
            data-aos="flip-up"
            data-aos-offset="300"
            data-aos-easing="ease-out"
            data-aos-delay="1000"
            data-aos-duration="200"
            data-aos-once="true"
          >
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-weight-bold">
                  Diversity
                </div>
              </div>
              <img
                class="image is-64x64"
                src="./../assets/images/icons/icon-diversity.png"
              />
            </div>
            <div class="card-content">
              <div class="content">
                <p class="is-size-5 has-text-black">
                  ILB offers many top-grade, QUALITY products and services to
                  meet the needs of many different types of customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3-widescreen is-half-tablet">
          <div
            class="card is-shady card-background"
            data-aos="flip-up"
            data-aos-offset="300"
            data-aos-easing="ease-out"
            data-aos-delay="1500"
            data-aos-duration="200"
            data-aos-once="true"
          >
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-bold">
                  Proficiency
                </div>
              </div>
              <img
                class="image is-64x64"
                src="./../assets/images/icons/icon-proficiency.png"
              />
            </div>
            <div class="card-content">
              <div class="content">
                <p class="is-size-5 has-text-black">
                  Together, our highest levels of EXPERTISE and EXPERIENCE is used in
                  choosing the right products and services for each unique job.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3-widescreen is-half-tablet">
          <div
            class="card is-shady card-background"
            data-aos="flip-up"
            data-aos-offset="300"
            data-aos-easing="ease-out"
            data-aos-delay="2000"
            data-aos-duration="200"
            data-aos-once="true"
          >
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-bold">
                  Dedication
                </div>
              </div>
              <img
                class="image is-64x64"
                src="./../assets/images/icons/icon-dedication.png"
              />
            </div>
            <div class="card-content">
              <div class="content">
                <p class="is-size-5 has-text-black">
                  ILB takes the extra steps to identify, develop, and implement
                  VALUE-ADDED engineering solutions that apply to your specific
                  line of business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-variableis-multiline is-centered">
        <div class="column is-3-widescreen">
          <div
            class="card is-shady card-background"
            data-aos="flip-up"
            data-aos-offset="100"
            data-aos-easing="ease-in"
            data-aos-delay="2000"
            data-aos-duration="200"
            data-aos-once="true"
          >
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-bold">
                  Personalization
                </div>
              </div>
              <img
                class="image is-64x64"
                src="./../assets/images/icons/icon-personalization.png"
              />
            </div>
            <div class="card-content">
              <div class="content">
                <p class="is-size-5 has-text-black">
                  Whatever your needs are we take action by listening and learning; 
                  then with your approval we will implement the best solution moving forward 
                  to achieve your highest expectation. 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3-widescreen">
          <div
            class="card is-shady card-background"
            data-aos="flip-up"
            data-aos-offset="100"
            data-aos-easing="ease-in"
            data-aos-delay="2500"
            data-aos-duration="200"
            data-aos-once="true"
          >
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-bold">
                  Clients
                </div>
              </div>
              <img
                class="image is-64x64"
                src="./../assets/images/icons/icon-clients.png"
              />
            </div>
            <div class="card-content">
              <div class="content">
                <p class="is-size-5 has-text-black">
                  Our mission is to complete each customer delivery request with the
                  highest level of professionalism and INTEGRITY while keeping
                  your expectations in mind.
                </p>
              </div>
            </div>
            <div class="is-divider" data-content="OR"></div>
          </div>
        </div>
      </div>
      <div>
        <br />
      </div>
    </section>
    <!-- Products -->
    <!-- Products --><!-- Products --><!-- Products --><!-- Products --><!-- Products --><!-- Products -->
    <section class="container section" id="product-companies">
      <div class="columns">
        <div class="column">
          <h1
            class="title is-2 has-text-centered highlighted"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-anchor-placement=""
            data-aos-duration="2000"
            data-aos-once="true"
          >
            Diverse Products
            <br />From Industry Leaders
            <br />
          </h1>
        </div>
      </div>

      <!-- Row 1 -->
      <div class="columns is-centered is-multiline">
        <div class="column is-6-desktop is-12-mobile is-12-tablet">
          <nuxt-link to="/products/sg-wrt">
            <div
              class="box company has-text-white"
              data-aos="fade-up-left"
              data-aos-duration="1000"
              data-aos-offset="350"
              data-aos-once="true"
            >
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128 is-hidden-touch">
                    <img src="./../assets/images/logos/sg.png" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p class="is-size-5">
                      <strong class="title is-4 highlighted"
                        >Saint-Gobain WRT</strong
                      >
                      <br />
                      <small>Latrobe, PA</small>
                      <br />The WRT group is most recognized for its manufacture
                      of pre-engineered and standard ceramic tile shapes, as
                      well as casted shapes for industrial applications. When it
                      comes to protecting a surface from any sliding abrasion
                      issues, their Durafrax ceramic material is an industry
                      leader in performance. WRT also offers other products such
                      as epoxies, trial-able wear products, silicone caulks, and
                      silicon carbide bricks.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </nuxt-link>
        </div>
        <div class="column is-6-desktop is-12-mobile">
          <nuxt-link to="/products/sg-refractories">
            <div
              class="box company has-text-white"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-offset="350"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128 is-hidden-touch">
                    <img src="./../assets/images/logos/sg.png" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p class="is-size-5">
                      <strong class="title is-4 highlighted"
                        >Saint-Gobain Refractories and Lining Group</strong
                      >
                      <br />
                      <small>Brazil & the UK</small>
                      <br />Saint-Gobain Refractories and Lining Group
                      manufactures various refractories such as tap-hole clays,
                      shotcrete repair products, castables, cement free
                      sol-gel/colloidal silica bonded materials, SiC shapes,
                      various furnace lining materials, and carbon blocks.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- Row 2 -->
      <div class="columns is-centered is-multiline">
        <div class="column is-6-desktop is-12-mobile is-12-tablet">
          <nuxt-link to="/products/sg-furnace-tube-inserts">
            <div
              class="box company has-text-white"
              data-aos="fade-up-left"
              data-aos-duration="1000"
              data-aos-offset="200"
              data-aos-once="true"
            >
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128 is-hidden-touch">
                    <img src="./../assets/images/logos/sg.png" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p class="is-size-5">
                      <strong class="title is-4 highlighted"
                        >Saint-Gobain SpyroCor</strong
                      >
                      <br />
                      <small>Worcester, MA</small>
                      <br />The Saint-Gobain SpyroCor Group, offers a series of
                      silicon carbide products for the galvanizing, annealing,
                      and reheat furnace areas. Their proprietary SpyroCor and
                      HeatCor products are constructed from a 3D manufacturing
                      process that utilizes silicon carbide to increase the
                      performance of any furnace radiant tube (e.g., straight
                      tube, u-tube, tri-tube, w-tube, double-p tube).
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </nuxt-link>
        </div>

        <div class="column is-6-desktop is-12-mobile is-12-tablet">
          <nuxt-link to="/products/us-liner">
            <div
              class="box company has-text-white"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-offset="200"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128 is-hidden-touch">
                    <img src="./../assets/images/logos/us-liner.png" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p class="is-size-5">
                      <strong class="title is-4 highlighted"
                        >US Liner Company</strong
                      >
                      <br />
                      <small>Harmony, PA</small>
                      <br />The US Liner Company manufactures several different
                      advanced thermoplastic composite sheeting products which
                      are rot, mildew and acid resistant. The three key products
                      ILB promotes for different industrial and commercial
                      applications are Versitex, Ecotex, and BXR, all
                      manufactured at the company’s headquarters in Harmony.
                      When looking for a light-weight sheeting product to apply
                      for a given application, nothing compares to US Liner’s
                      quality and durability.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- Row 3 -->
      <div class="columns is-centered is-multiline">
        <div class="column is-6-desktop is-12-mobile is-12-tablet">
          <nuxt-link to="/products/quin-global">
            <div
              class="box company has-text-white"
              data-aos="fade-up-left"
              data-aos-duration="1000"
              data-aos-offset="200"
              data-aos-once="true"
            >
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128 is-hidden-touch">
                    <img src="./../assets/images/logos/quin.png" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p class="is-size-5">
                      <strong class="title is-4 highlighted"
                        >Quin Global</strong
                      >
                      <br />
                      <small>Omaha, Nebraska</small>
                      <br />Promotes adhesives capable of setting in 15 minutes
                      or less and can be used in two specific applications:
                      flooring and general construction, where two surfaces get
                      laminated together.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </nuxt-link>
        </div>
        <div class="column is-6-desktop is-12-mobile is-12-tablet">
          <nuxt-link to="/products/itc-coatings">
            <div
              class="box company has-text-white"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-offset="200"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128 is-hidden-touch">
                    <img src="./../assets/images/logos/itc.png" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p class="is-size-5">
                      <strong class="title is-4 highlighted"
                        >ITC Coatings</strong
                      >
                      <br />
                      <small>Fortworth, TX</small>
                      <br />ITC Coatings offers five unique water based ceramic
                      coatings products that have many applications. ITC has
                      products that go on mills thick and cover metal surfaces,
                      ceramic brick, IFB fire brick, fibrous insulation, or any
                      general exterior refractory layer. Their coatings products
                      basically reradiate or reflect heat back into the product
                      heat source.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="logo-background section">
      <h1 class="title is-2 has-text-centered engraved-text">
        Additional Value-Added Services
      </h1>
      <div class="columns is-centered">
        <div class="column is-5">
          <p class="is-size-4">{{ additionalServices.description }}</p>
        </div>

        <div class="column is-3">
          <figure class="image">
            <img src="./../assets/images/img/hands.jpg" id="contact-photo" />
          </figure>
        </div>
      </div>
    </section>
    <!-- Props -->
    <footer id="landing-footer">
      Icons made by
      <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"
        >Eucalyp</a
      >
      from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      <p>ILB © Copyright and Issue Date: March 2020</p>
    </footer>
  </section>
</template>

<script>
import logo from "./../assets/images/logos/ilblogo.png";
export default {
  // transition: "bounce",
  components: {
    // ContactFormModal
  },
  computed: {
    getIcon(feature) {
      return "./../assets/" + feature;
    }
  },
  methods: {
    show() {
      this.$modal.show("Contact");
    },
    hide() {
      this.$modal.hide("Contact");
    }
  },
  data: function() {
    return {
      logo: logo,
      name: "Industrial Linerback and Services LLC",
      heroTitle1: "Engineered Solutions with a ",
      heroTItle2: "Global Reach",
      heroButton1: "How Can We Help You?",
      heroButton2: "",
      heroProductsLeft: "Products",
      heroProductsRight:
        "Industrial Materials that Protect Your Equipment and Improve Performance",
      heroDesignLeft: "Design",
      heroDesignRight:
        "Complete Value-Added Engineering Support to Address Your Needs",
      heroServicesLeft: "Services",
      heroServicesRight:
        "Partnerships Backed by Technical Expertise and Experience",
      heroResidentialLeft: "Looking for industrial grade products for ",
      heroresidentialRight: "Residential or Construction Applications?",
      cta: "",
      intro1: "What makes ILB different?",
      intro2: "We",
      benefits: [
        "Improves performance",
        "Protects physical assets",
        "Lowers maintenance costs",
        "Makes installation easy"
      ],
      features: [
        {
          title: "Diversity",
          description:
            "ILB offers a variety top-grade products and services to meet the unique needs of a multitude of companies from different industries.",
          iconPath: "icon-handshake.png"
        },
        {
          title: "Proficiency",
          description:
            "We empower together our highest levels of EXPERTISE and EXPERIENCE is used in choosing the right products and services for the job.",
          iconPath: "./../assets/icon-handshake.png"
        },
        {
          title: "Dedication",
          description:
            "We take those extra steps to identify, develop, and implement value-added engineerings solutions that will apply to your specific line of business.",
          iconPath: "./../assets/icon-handshake.png"
        },
        {
          title: "Personalization",
          description:
            "Whatever your needs are we take action by listening and learning; then with your approval we will implement the best solution moving forward to achieve your highest expectation.",
          iconPath: "./../assets/icon-handshake.png"
        },
        {
          title: "Mission",
          description:
            "Our mission is to complete each CUSTOMER delivery request with the highest level of professionalism and integrity while keeping your expectations in mind.",
          iconPath: "./../assets/icon-handshake.png"
        }
      ],
      productCats1: ["Ceramics", "Sheeting", "Refractories"],
      productCats2: ["Coatings", "Adhesives", "Engineering <br/>Services"],
      customers: [
        "Steel",
        "Cement",
        "Grain",
        "Chemical",
        "Petrochemical",
        "Oil and Gas",
        "Automotive",
        "Residential and Commercial Construction",
        "Farmers",
        "Water Treatment",
        "Wastewater Treatment",
        "Landscape and Utility Box Trailers",
        "and Many More..."
      ],
      productsIntro: "Products from leading manufacturers",
      products: [
        {
          name: "Saint-Gobain WRT",
          logo: "",
          location: "Latrobe, PA",
          description:
            "Based in Latrobe, PA, the WRT group is most recognized for its manufacture of pre-engineered and standard ceramic tile shapes, as well as casted shapes for industrial applications. When it comes to protecting a surface from any sliding abrasion issues, their Durafrax ceramic material is an industry leader in performance. WRT also offers other products such as epoxies, trial-able wear products, silicone caulks and silicon carbide bricks.",
          route: "/products/sgwrt"
        },
        {
          name: "Saint-Gobain SpyroCor",
          location: "",
          description:
            "The Saint-Gobain SpyroCor Group, headquartered in Worcester, MA, offers a series of silicon carbide products for the galvanizing, annealing, and reheat furnace areas. Their proprietary SpyroCor and HeatCor products are constructed from a 3D manufacturing process that utilizes silicon carbide to increase the performance of any furnace radiant tube (e.g., straight tube, u-tube, tri-tube, w-tube, and double-p tube).",
          route: "/products/sg-spyrocor"
        },
        {
          name: "Saint-Gobain Refractories and Linings",
          location: "Brazil",
          description:
            "With home bases in Brazil and the UK, Saint-Gobain Refractories and Lining Group manufactures various refractories such as tap-hole clays, shotcrete repair products, castables, cement free sol-gel/colloidal silica bonded materials, SiC shapes, various furnace lining materials, and carbon blocks.",
          route: "/products/sg-refractories"
        },
        {
          name: "US Liner",
          location: "Cranberry Twp, PA",
          description:
            "US Liner Company manufactures several different advanced thermoplastic composite sheeting products that are rot, mildew and acid resistant. The three key products that ILB promotes for different industrial and commercial applications are Versitex, Ecotex, and BXR, all manufactured at the company’s headquarters in Cranberry Township, PA. When looking for a light-weight sheeting product to apply for a given application, nothing compares to US Liner’s quality and durability.",
          route: "/products/us-liner"
        },
        {
          name: "Quin Global",
          location: "Nebraska",
          description:
            "Quin Global, based out of Omaha, Nebraska, promotes adhesives capable of setting in 15 minutes or less and can be used in two specific applications: flooring and general construction, where two surfaces get laminated together.",
          route: "/products/quin-global"
        },
        {
          name: "ITC Coatings",
          location: "Fortworth, TX",
          description:
            "With its offering of five unique water-based ceramic coating products, this Fortworth, TX company caters to many applications. ITC has products that go on mills thick and cover metal surfaces, ceramic brick, IFB fire brick, fibrous insulation, or any general exterior refractory layer. Their coatings products basically reradiate or reflect heat back into the product heat source.",
          route: "/products/itc-coatings"
        }
      ],
      servicesIntro: "Services",
      orbitalService: {
        name: "Orbital Engineering",
        description:
          "Engineering—This Pittsburgh, PA company has six major engineering offices throughout the US. Orbital has partnered with ILB to assist in finding engineering opportunities that fall into ILB’s line of business",
        route: "/products/orbital-engineering-support"
      },
      additionalServices: {
        description:
          "ILB offers a variety of specialized services in support of its product sales, along with some standalone services, including engineering design, project and construction management, inspection, and scheduling.  All are offered individually or in conjunction with the Saint-Gobain or Orbital Engineering teams."
      },
      genServices: {
        heading: "Services",
        genDescription:
          "ILB offers a variety of specialized services in support of its product sales, along with some standalone services, including engineering design, project and construction management, inspection, and scheduling.  All are offered individually or in conjunction with the Saint-Gobain or Orbital Engineering teams.",
        route: "/services",
        services: [
          {
            name: "Saint-Gobain Engineering Support",
            description:
              "With Saint-Gobain being a large company with over 5000 products to offer and having a strong R&D group, they can support ILB on any product application selection that is being looked at in a plant.",
            route: "/services/sg-engineering-support"
          },
          {
            name: "Project and Construction Management",
            description:
              "Whenever it comes to any field support needed to monitor the installation or lead a project, an ILB representative can help. ILB can pull within to support the effort and if need be can work in conjunction with Saint-Gobain, ITC or Orbital Engineering to fulfill the need.  ILB looks forward to supporting your needs!",
            route: "/services/project-construction-mgmt"
          },
          {
            name: "Inspection and Scheduling  Services",
            description:
              "If a plant has an immediate need for any additional inspection or scheduling services, the ILB team can step in and help.",
            route: "/services/scheduling"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.hero.bg {
  background: linear-gradient(to right, #00000000, #ffffff00),
    url("../assets/images/img/hero-bg-with-logo-2048.jpg") 
      fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background-repeat: no-repeat;
}
#blurred-box {
  background: rgb(0, 0, 0); /* for IE */
  background: rgba(31, 26, 17, 0.933);
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  padding: 0px;
  /* -webkit-box-shadow: 6px 13px 22px 0px #000000;
  box-shadow: 6px 13px 22px 0px #000000; */
}
.hero h1 {
  color: #dbdbdb;
}
.shift-hero {
  position: relative;
  top: -8vh;
}
.underlined {
  text-decoration: underline;
}
.contact-button {
  border: none;
  background: rgb(230, 106, 4);
  color: #e9e9e9 !important;
  font-weight: 900;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  width: 100%;
  -webkit-animation: glowing 1000ms infinite;
  -moz-animation: glowing 1000ms infinite;
  -o-animation: glowing 1000ms infinite;
  animation: glowing 2000ms infinite;
}
.contact-button a {
  color: white;
}
.contact-button:hover {
  color: rgb(226, 115, 11) !important;
  font-weight: 900 !important;
  letter-spacing: .3px;
  background: rgb(230, 230, 230) !important;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}
.contact-button:hover a {
  color: rgb(226, 115, 11) !important
}
/* @-webkit-keyframes glowing {
  0% { background-color: #E2730B; -webkit-box-shadow: 0 0 3px #E2730B; }
  50% { background-color: #FF0000; -webkit-box-shadow: 0 0 40px #FF0000; }
  100% { background-color: #B20000; -webkit-box-shadow: 0 0 3px #B20000; }
} */
/* @-moz-keyframes glowing {
  0% { background-color: #B20000; -moz-box-shadow: 0 0 3px #B20000; }
  50% { background-color: #FF0000; -moz-box-shadow: 0 0 40px #FF0000; }
  100% { background-color: #B20000; -moz-box-shadow: 0 0 3px #B20000; }
} */
/* @-o-keyframes glowing {
  0% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }
  50% { background-color: #FF0000; box-shadow: 0 0 40px #FF0000; }
  100% { background-color: #B20000; box-shadow: 0 0 3px #B20000; }
} */
/* @keyframes glowing {
  0% { background-color: #E2730B; box-shadow: 0 0 5px #E2730B; }
  50% { background-color: #db7c22; box-shadow: 0 0 15px #b86314; }
  100% { background-color: #E2730B; box-shadow: 0 0 4px #E2730B; }
} */
.highlighted {
  color: #eda70f;
}
.hero-subtitle-head {
  border-bottom: rgb(0, 0, 0);
}
.card-content {
  padding: 0px;
  margin-bottom: 0px;
}
.card-content .content {
  font-size: 14px;
  margin: 1rem 1rem;
  padding: 0px;
}
.card-content .content h4 {
  font-size: 16px;
  font-weight: 900;
}
.card-header {
  padding-top: 10px;
}
.card {
  height: 100%;
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
.is-shady:hover {
  box-shadow: 0 10px 16px #4d4119, 0 6px 6px rgba(0, 0, 0, 0.6);
}
.hero-box {
  background: rgba(235, 212, 163, 0.5);
  opacity: 80%;
}
/* .texture-background {
  background: linear-gradient(
      rgba(130, 129, 126, 0.536),
      rgba(136, 136, 136, 0.8)
    ),ds
    url("./../assets/backgrounds/metal-texture2-hd.jpg") no-repeat center center
      fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
} */
.logo-background {
  background: -webkit-linear-gradient(
      top,
      #f4f4f47e 0%,
      #ebebeb81 21%,
      #f0f0f081 50%,
      #e9e9e981 80%,
      #e2e2e279 100%
    ),
    url("../assets/images/backgrounds/gray.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
/* .carbon-background {
  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(
      #1d1d1d 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      transparent 50%,
      transparent 75%,
      #242424 75%,
      #242424
    );
  background-color: #131313;
  background-size: 20px 20px;
} */
#cutting-edge-background {
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.351),
      rgba(0, 0, 0, 0.098)
    ),
    url("../assets/images/img/factory1-original.jpg") no-repeat center center
      fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  max-width: 5000px;
}
/* #hero-button {
  font-family: arial;
  font-weight: bold;
  color: rgb(255, 255, 255) !important;
  font-size: 14px;
  padding: 13px 12px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  border: 2px groove #d7d9ca;
  background: #da5502;
} */
#hero-button a {
  color: white;
}
.classnames {
  -moz-box-shadow: inset 0px 1px 17px -3px #8c8c8c;
  -webkit-box-shadow: inset 0px 1px 17px -3px #8c8c8c;
  box-shadow: inset 0px 1px 17px -3px #8c8c8c;
  background: -webkit-linear-gradient(
    top,
    #acacac 0%,
    #cecece 21%,
    #e7e7e7 50%,
    #cecece 80%,
    #acacac 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#c9c9c9', endColorstr='#f0f0f0');
  background-color: #c9c9c9;
  -webkit-border-top-left-radius: 4px;
  -moz-border-radius-topleft: 4px;
  border-top-left-radius: 4px;
  -webkit-border-top-right-radius: 4px;
  -moz-border-radius-topright: 4px;
  border-top-right-radius: 4px;
  -webkit-border-bottom-right-radius: 4px;
  -moz-border-radius-bottomright: 4px;
  border-bottom-right-radius: 4px;
  -webkit-border-bottom-left-radius: 4px;
  -moz-border-radius-bottomleft: 4px;
  border-bottom-left-radius: 4px;
  text-indent: 0;
  border: 2px solid #cfcfcf;
  display: inline-block;
  color: #292929;
  font-family: arial;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  height: 50px;
  line-height: 34px;
  width: 110px;
  text-decoration: none;
  text-align: center;
  margin: 2px;
}
.classname:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #f0f0f0),
    color-stop(1, #c9c9c9)
  );
  background: -moz-linear-gradient(center top, #f0f0f0 5%, #c9c9c9 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f0f0f0', endColorstr='#c9c9c9');
  background-color: #f0f0f0;
}
.classname:active {
  position: relative;
  top: 1px;
}
#landing-logo {
  max-width: 300px;
}
#product-cats {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.776), rgba(0, 0, 0, 0)),
    url("../assets/images/img/welding2-hd.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  max-width: 5000px;
}
/* Extra Small Screen  ----------- */
@media only screen and (max-width: 670px) {
  #desktop-test {
    /* background: rgb(13, 148, 172); */
  }
  ul li {
    list-style-position: outside;
    text-indent: -3.3em;
    padding: 1px 10 3px 6px;
  }
  ul {
    position: relative;
    left: 1.4em;
  }
  .several-solutions {
    padding-left: em;
  }
  #several-solutions {
    display: flex;
    flex-direction: column-reverse;
  }
  #product-cats-box {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.796),
      rgba(0, 0, 0, 0.76)
    );
    border: 5px outset #a4a09e;
    border-radius: 1px 1px 1px 1px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  #product-cat {
    font-size: 1em;
  }
}
/* Small Screen  ----------- */
@media only screen and (min-width: 671px) and (max-width: 768px) {
  #desktop-test {
    /* background: rgb(225, 25, 192); */
  }
  ul li {
    list-style-position: outside;
    text-indent: -3em;
    padding: 1px 10 3px 6px;
  }
  ul {
    position: relative;
    left: 2.4em;
  }
  .several-solutions {
    padding-left: em;
  }
  #several-solutions {
    display: flex;
    flex-direction: column-reverse;
  }
  #product-cats-box {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.796),
      rgba(0, 0, 0, 0.76)
    );
    border: 5px outset #a4a09e;
    border-radius: 1px 1px 1px 1px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  #product-cat {
    font-size: 2em;
  }
}
/*  */
/* Tablets (portrait) ----------- */
@media only screen and (min-width: 769px) {
  #desktop-test {
    /* background: rgb(8, 162, 8); */
  }
  #product-cat {
    font-size: 1.5em;
  }
  #product-cats-box {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.796),
      rgba(0, 0, 0, 0.76)
    );
    border: 5px outset #a4a09e;
    border-radius: 1px 1px 1px 1px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  ul li {
    list-style-position: outside;
    text-indent: -3em;
    padding: 1px 10 3px 6px;
  }
  ul {
    position: relative;
    left: 2em;
  }
}
/*  */
/* Desktop  ----------- */
@media only screen and (min-width: 1024px) and (max-width: 1361px) {
  #desktop-test {
    /* background: rgb(50, 62, 226); */
  }
  ul li {
    list-style-position: outside;
    text-indent: -3em;
    padding: 1px 10 3px 6px;
  }
  ul {
    position: relative;
    left: 3em;
  }
  .several-solutions {
    padding-left: 1em;
  }
  #product-cats-box {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.796),
      rgba(0, 0, 0, 0.76)
    );
    border: 5px outset #a4a09e;
    border-radius: 1px 1px 1px 1px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  #product-cat {
    font-size: 1.5em;
  }
}
/*  */
/* Widescreen  ----------- */
@media only screen and (min-width: 1362px) {
  #desktop-test {
    /* background: rgb(253, 80, 0); */
  }
  ul li {
    list-style-position: outside;
    text-indent: -3em;
    padding: 1px 10 3px 6px;
  }
  ul {
    position: relative;
    left: 3em;
  }
  .several-solutions {
    padding-left: 1em;
  }
  #product-cats-box {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.796),
      rgba(0, 0, 0, 0.76)
    );
    border: 5px outset #a4a09e;
    border-radius: 1px 1px 1px 1px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  #product-cat {
    font-size: 2em;
  }
}
/*  */
#text-background {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.878),
    rgba(0, 0, 0, 0.009)
  );
}
#product-companies {
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.721),
      rgba(0, 0, 0, 0.74)
    ),
    url("../assets/images/img/factory1-original.jpg") no-repeat center center
      fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  max-width: 5000px;
  /* Set up proportionate scaling */
}
.card-background {
  background: -webkit-linear-gradient(
    top,
    #e1e1e1 0%,
    #ffffff 21%,
    #ffffff 50%,
    #e3e3e3 80%,
    #e1e1e1 100%
  );
}
.benefits-box {
  border-left: 6px solid #eda70f;
  padding-left: 6px;
  max-height: 300px;
}
.benefit-box {
  border-bottom: 5px ridge #bab5b5;
  border-radius: 3px;
  padding-bottom: 0px;
}
.title {
  font-variant: small-caps;
  font-family: "Arial Black", Gadget, sans-serif;
}
.company {
  background: rgba(114, 114, 114, 0);
}
hr {
  border: 0;
  border-top: 1px solid #8c8c8c;
  border-bottom: 1px solid #fff;
}
ul {
  list-style-position: outside;
}
.engraved-text {
  color: rgba(24, 24, 24, 0.906);
  /* text-shadow: 0px -1px 0px rgb(223, 223, 223); 50% black coming from the top */
  text-shadow: 1px 1px rgb(205, 205, 205), -1px -1px rgb(101, 101, 101);
}
.products-cats-text {
  color: rgb(253, 80, 0);
  text-shadow: -1px -3px 1px rgb(62, 45, 1);
}
#contact-photo {
  border: 5px outset #a4a09e;
  border-radius: 1px 1px 1px 1px;
  max-height: 300px;
  max-width: 100%;
}
i.fa::before {
  font-size: 40px;
}
.shadowed {
  text-shadow: -10px -10px 10px #000000;
}
#landing-footer {
  background: -webkit-linear-gradient(
    top,
    #f7f7f7 0%,
    #e6e6e6 21%,
    #f0f0f0 50%,
    #c5c5c5 80%,
    #c0c0c0 100%
  );
  padding: 20px;
  text-align: right;
}
</style>
