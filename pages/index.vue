<template>
  <section>
    <!-- hero -->
    <section class="hero bg is-fullheight section">
      <div class="hero-body has-text-weight-bold shift-hero columns">
        <div class="column is-5" id="blurred-box">
          <div class>
            <div class="title is-2 has-text-white has-text-centered">
              Engineered Solutions
              <br />with a
              <div class="title is-1 has-text-weight-bold highlighted">
                {{heroTItle2}}
                <br />
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-4 has-text-centered">
                <span class="highlighted is-size-4">
                  {{heroProductsLeft}}
                  <br />
                </span>
                <span class="has-text-white">{{heroProductsRight}}</span>
              </div>

              <div class="column is-4 has-text-centered">
                <span class="highlighted is-size-4">
                  {{heroDesignLeft}}
                  <br />
                </span>
                <span class="has-text-white">{{heroDesignRight}}</span>
              </div>

              <div class="column is-4 has-text-centered">
                <span class="highlighted is-size-4">
                  {{heroServicesLeft}}
                  <br />
                </span>
                <span class="has-text-white">{{heroServicesRight}}</span>
              </div>
            </div>
            <div class="has-text-centered">
              <button id="hero-button" class="is-size-4"><a @click="show"
                >
                
                Click Here and Share Your Needs With Us</a></button>
              <div>-</div>
            </div>
          </div>
          <div class="has-text-centered" id>
            <span class="has-text-white">
              {{heroResidentialLeft}}
              <div class="highlighted">{{heroresidentialRight}}</div>
            </span>
            <div class="has-text-centered">
              <button>Click Here</button>
              <div>-</div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- Logo Intro -->
    <section class="logo-background section">
      <div class="columns is-centered is-vcentered">
        <div class="column is-4">
          <figure class="image is-3-by-1">
            <img src="./../assets/images/logos/ilblogo.png" />
          </figure>
        </div>

        <div class="column is-4">
          <div class="columns">
            <div class="column is-9">
              <ul>
                <li
                  v-for="benefit in benefits"
                  :key="benefit"
                  v-bind:href="benefit"
                  class="engraved-text is-size-4 has-text-weight-bold benefit-box"
                >{{benefit}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Cats -->
    <section class="container section" id="product-cats">
      <div class="columns is-centered">
        <div class="column is-12">
          <div class="title is-2 highlighted has-text-centered shadowed">Why is ILB Different?</div>
        </div>
      </div>
      <div class="columns is-4 is-multiline is-vcentered is-centered">
        <div class="column is-4" id->
          <div class="content">
            <h2 class="title highlighted has-text-centered">One Point of Contact</h2>
            <div
              class="has-text-weight-semibold has-text-white is-size-5"
              id="text-background"
            >Industrial Linerback & Services is your one-stop-shop for all of your industrial, commerical, and residential needs. There's no need to coordinate with multiple companies for your next project. Let ILB combine and match products and services for all of your applications.</div>
          </div>
        </div>

        <div class="column is-5">
          <figure class="image">
            <img src="./../assets/images/img/contact.jpg" id="contact-photo" />
          </figure>
        </div>
      </div>

      <p>.</p>
      <div class="columns is-multiline is-centered is-vcentered">
        <div class="column is-5 has-text-centered" id="product-cats-box">
          <div class="columns is-centered">
            <ul class="column is-6">
              <li class="has-text-left" v-for="productCat in productCats1" :key="productCat">
                <span class="highlighted icon is-size-3 is-large">
                  <i class="fas fa-check"></i>
                </span>
                <span
                  class="has-text-weight-bold is-size-3 has-text-white"
                  v-bind:href="productCat"
                  v-html="productCat"
                ></span>
              </li>
            </ul>

            <ul class="column is-6">
              <li class="has-text-left" v-for="productCat in productCats2" :key="productCat">
                <span class="highlighted icon is-size-3 is-large">
                  <i class="fas fa-check fa"></i>
                </span>
                <span
                  class="has-text-weight-bold is-size-3 has-text-white"
                  v-bind:href="productCat"
                  v-html="productCat"
                ></span>
              </li>
            </ul>
          </div>
        </div>

        <div class="column is-4">
          <h2 class="title highlighted has-text-centered">Several Solutions</h2>
          <div
            class="has-text-weight-semibold has-text-white is-size-5 several-solutions"
          >We offer a variety of products that will cover all of your needs. This allows us to design each product with your application in mind. We back up each of our products by offering several engineering support services.</div>
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
        >Industrial Linerback Services & LLC.</h1>
        <br />
      </div>
      <div class="columns is-variable is-multiline is-centered">
        <div class="column is-3">
          <div class="card is-shady card-background">
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-weight-bold">Diversity</div>
              </div>
              <img class="image is-64x64" src="./../assets/images/icons/icon-diversity.png" />
            </div>
            <div class="card-content">
              <div class="content">
                <p
                  class="is-size-5 has-text-black"
                >ILB offers many top-grade, QUALITY products and services to meet the needs of many different types of customers.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="card is-shady card-background">
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-bold">Proficiency</div>
              </div>
              <img class="image is-64x64" src="./../assets/images/icons/icon-proficiency.png" />
            </div>
            <div class="card-content">
              <div class="content">
                <p
                  class="is-size-5 has-text-black"
                >Together, our highest levels of EXPERTISE and EXPERIENCE in choosing the right products and services for each unique job.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="card is-shady card-background">
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-bold">Dedication</div>
              </div>
              <img class="image is-64x64" src="./../assets/images/icons/icon-dedication.png" />
            </div>
            <div class="card-content">
              <div class="content">
                <p
                  class="is-size-5 has-text-black"
                >ILB takes the extra steps to identify, develop, and implement VALUE-ADDED engineering solutions that apply to your specific line of business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-variableis-multiline is-centered">
        <div class="column is-3">
          <div class="card is-shady card-background">
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-bold">Personalization</div>
              </div>
              <img class="image is-64x64" src="./../assets/images/icons/icon-personalization.png" />
            </div>
            <div class="card-content">
              <div class="content">
                <p
                  class="is-size-5 has-text-black"
                >Whatever your needs are we listen, learn, and with your approval, will implement the best solution moving forward to achieve YOUR highest expectations.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="card is-shady card-background">
            <div class="card-header">
              <div class="card-header-title">
                <div class="has-text-centered is-size-4 has-text-bold">Clients</div>
              </div>
              <img class="image is-64x64" src="./../assets/images/icons/icon-clients.png" />
            </div>
            <div class="card-content">
              <div class="content">
                <p
                  class="is-size-5 has-text-black"
                >Our mission is to complete each customer request with the highest level of professionalism and INTEGRITY while keeping your expectations in mind.</p>
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
    <section class="container section" id="product-companies">
      <div class="columns">
        <div class="column">
          <h1 class="title is-2 has-text-centered highlighted">
            Diverse Products
            <br />From Industry Leaders
            <br />
          </h1>
        </div>
      </div>

      <!-- Row 1 -->
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="box company has-text-white">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="./../assets/images/logos/sg.png" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="is-size-5">
                    <strong class="title is-4 highlighted">Saint-Gobain WRT</strong>
                    <br />
                    <small>Latrobe,PA</small>
                    <br />The WRT group is most recognized for its manufacture of pre-engineered and standard ceramic tile shapes, as well as casted
                    shapes for industrial applications. When it comes to protecting a surface from any sliding abrasion issues, their Durafrax ceramic material is an
                    industry leader in performance. WRT also offers other products such as epoxies, trial-able wear products, silicone caulks, and silicon carbide bricks.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column is-6">
          <div class="box company has-text-white">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="./../assets/images/logos/sg.png" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="is-size-5">
                    <strong
                      class="title is-4 highlighted"
                    >Saint-Gobain Refractories and Lining Group</strong>
                    <br />
                    <small>Brazil & the UK</small>
                    <br />Saint-Gobain Refractories and Lining Group manufactures various refractories such as tap-hole clays,
                    shotcrete repair products, castables, cement free sol-gel/colloidal silica bonded materials, SiC shapes, various furnace lining materials, and carbon
                    blocks.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <!-- Row 2 -->
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="box company has-text-white">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="./../assets/images/logos/sg.png" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="is-size-5">
                    <strong class="title is-4 highlighted">Saint-Gobain SpyroCor</strong>
                    <br />
                    <small>Worcester, MA</small>
                    <br />The Saint-Gobain SpyroCor Group, offers a series of silicon carbide products for the galvanizing, annealing, and
                    reheat furnace areas. Their proprietary SpyroCor and HeatCor products are constructed from a 3D manufacturing process that utilizes silicon
                    carbide to increase the performance of any furnace radiant tube (e.g., straight tube, u-tube, tri-tube, w-tube, double-p tube.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      

      <div class="column is-6">
        <div class="box company has-text-white">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="./../assets/images/logos/us-liner.png" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="is-size-5">
                  <strong class="title is-4 highlighted">US Liner Company</strong>
                  <br />
                  <small>Cranberry Township, PA</small>
                  <br />US Liner Company manufactures several different advanced thermoplastic composite sheeting products that are rot, mildew and acid resistant. The
                  three key products ILB promotes for different industrial and commercial applications are Versitex, Ecotex, and BXR, all manufactured at the
                  company’s headquarters in Cranberry Township. When looking for a light-weight sheeting product to apply for a given application, nothing
                  compares to US Liner’s quality and durability.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div></div>
      <!-- Row 3 -->
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="box company has-text-white">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="./../assets/images/logos/quin.png" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="is-size-5">
                    <strong class="title is-4 highlighted">Quin Global</strong>
                    <br />
                    <small>Omaha, Nebraska</small>
                    <br />Promotes adhesives capable of setting in 15 minutes or less and can be used in two
                    specific applications: flooring and general construction, where two surfaces get laminated together.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column is-6">
          <div class="box company has-text-white">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="./../assets/images/logos/itc.png" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="is-size-5">
                    <strong class="title is-4 highlighted">ITC Coatings</strong>
                    <br />
                    <small>Fortworth, TX</small>
                    <br />Coatings—With its offering of five unique water-based ceramic coating products, ITC caters to many applications. ITC
                    has products that go on mills thick and cover metal surfaces, ceramic brick, IFB fire brick, fibrous insulation, or any general exterior refractory layer.
                    Their coatings products basically reradiate or reflect heat back into the product heat source.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="logo-background section">
      <h1 class="title is-2 has-text-centered engraved-text">Additional Value-Added Services</h1>
      <div class="columns is-centered">
        <div class="column is-5">
          <p class="is-size-4">{{additionalServices.description}}</p>
        </div>

        <div class="column is-3">
          <figure class="image">
            <img src="./../assets/images/img/hands.jpg" id="contact-photo" />
          </figure>
        </div>
      </div>
    </section>
    <!-- Props -->
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </section>
</template>

<script>
import logo from "./../assets/images/logos/ilblogo.png";
// import Contact from "./../components/Contact";
export default {
  // computed: {
  //   getIcon(feature) {
  //     return "./../assets/" + feature;
  //   }
  // },
  //   methods: {
  //   show () {
  //     this.$modal.show('Contact');
  //   },
  //   hide () {
  //     this.$modal.hide('Contact');
  //   }
  // },
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
        "Industrial Materials that Protect your Equipment and Improve Performance",
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
            "We empower together our highest levels of EXPERTISE and EXPERIENCE are in choosing the right products and services for the job.",
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
            "Whatever your needs are; we listen, we learn, and with your approval, we will implement the best solution moving forward to reach YOUR highest expectations.",
          iconPath: "./../assets/icon-handshake.png"
        },
        {
          title: "Mission",
          description:
            "Our mission is to complete each CUSTOMER request with the highest level of professionalism and integrity while keeping your expectations in mind.",
          iconPath: "./../assets/icon-handshake.png"
        }
      ],
      productCats1: ["Ceramics", "Sheeting", "Refractories"],
      productCats2: [
        "Coating",
        "Adhesives",
        "Engineering &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp Services"
      ],
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
          "ILB offers a variety of specialized services in support of its product sales, along with some standalone services, including engineering design, project and construction management, inspection, and scheduling individually or in conjunction with the Saint-Gobain or Orbital Engineering teams."
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
    url("../assets/images/img/hero-bg-with-logo.jpg") no-repeat center left fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  background-position: left;
  background-repeat: no-repeat;
}

.hero h1 {
  color: #dbdbdb;
}
.shift-hero {
  position: relative;
  
}
.shift-hero-logo {
  position: relative;
  top: 20px;
  left: 150px;
}
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
  animation: flyintoright .9s backwards;
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
    url("../assets/images/img/factory1-original.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  max-width: 5000px;
}
#hero-button {
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
}

#hero-button a {
  color: white;
}
.classname {
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

#blurred-box {
  background: rgb(0, 0, 0); /* for IE */
  background: rgba(31, 19, 0, 0.933);
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  padding: 0px;
  /* -webkit-box-shadow: 6px 13px 22px 0px #000000;
  box-shadow: 6px 13px 22px 0px #000000; */
}
#product-cats {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.776), rgba(0, 0, 0, 0)),
    url("../assets/images/img/welding2-hd.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  max-width: 5000px;

  /* Set up proportionate scaling */
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
    url("../assets/images/img/factory1-original.jpg") no-repeat center center fixed;
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

.several-solutions {
  padding-left: 10px;
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
</style>