<template>
  <section>
    <!-- hero -->
    <section class="hero hero-bg section ">
      <div class="hero-body"></div>
    </section>

    <section class="component section">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h3 class="subtitle is-2 has-text-weight-bold engraved-text-header">
            {{ hero1 }}
          </h3>
        </div>
        <span class="heading-fade-effect"></span><br />
      </div>
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="card is-shady card-background">
            <div class="card-header">
              <div class="card-header-title">
                <h3
                  class="subtitle is-2 has-text-weight-bold engraved-text-header"
                >
                  {{ paragraph1Header }}
                </h3>
                <div
                  class="has-text-centered is-size-4 has-text-weight-bold"
                ></div>
              </div>
            </div>
            <div class="card-content">
              <div class="content">
                <div class="is-size-4 mission quote">"{{ paragraph1 }}"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="card is-shady card-background">
            <div class="card-header">
              <div class="card-header-title">
                <h3
                  class="subtitle is-2 has-text-weight-bold engraved-text-header"
                >
                  {{ paragraph2Header }}
                </h3>
                <div
                  class="has-text-centered is-size-4 has-text-weight-bold"
                ></div>
              </div>
            </div>
            <div class="card-content">
              <div class="content">
                <div class="is-size-4 mission quote">"{{ paragraph2 }}"</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-8">
          <div class="card is-shady card-background">
            <div class="card-header">
              <div class="card-header-title">
                <h3
                  class="subtitle is-2 has-text-weight-bold engraved-text-header"
                >
                  {{ paragraph3Header }}
                </h3>
                <div
                  class="has-text-centered is-size-4 has-text-weight-bold"
                ></div>
              </div>
            </div>
            <div class="card-content">
              <div class="content">
                <div class="is-size-4 mission ">{{ paragraph3 }}</div>
                <br />
                <div class="is-size-4 mission ">{{ paragraph4 }}</div>
                <br />
                <div class="is-size-4 mission ">{{ paragraph5 }}</div>
                <br />
                <div class="is-size-4 mission ">{{ paragraph6 }}</div>
                <br/>
                <div class="columns is-centered is-vcentered">
                  <div class="column is-5-desktop has-text-centered">
                    <a class="contact-button" href="tel:(724)825-1474">
                      Call<br />724-825-1474</a
                    >
                  </div>
                  <div class="column is-5-desktop has-text-centered">
                    <a
                      class="contact-button"
                      @click="$modal.show('contact-form')"
                      >Email<br />
                      verbanicilb@gmail.com</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="has-text-black columns is-centered"></section>
    </section>
    <footer class="hero-bg">
      <div class="content colummns">
        <div class="is-size-6 has-text-white column has-text-right is-12">
          <i class="fa fa-copyright" aria-hidden="true"></i>
          {{ footer }}
        </div>
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
        "ILB puts your performance and bottom line needs first by bringing our products and engineering expertise directly to you. We will work and collaborate with you to come up with the most economical and top-performing solutions for your business needs. We strive to be the industry leader by offering the best proven engineered solutions which happens through our network of reputable and global companies with a seasoned technical staff of experts--all backed by tested, used and reputable products.",
      paragraph2Header: "Vision Statement",
      paragraph2:
        "ILB stands ready to be your partner of choice to transform concepts into results by offering value-added products and technical services that will meet or exceed your business need expectations.",

      paragraph3Header: "History",
      paragraph3:
        "Industrial Linerback & Services LLC was founded in January 2017 by George Verbanic. It is a sole proprietorship company that provides products and services to a diverse industry base that it represents. George, a Mechanical Engineer with a degree from the University of Pittsburgh and a minor in Manufacturing Engineering, serves as the materials specialist and sales engineer for ILB. His career began in 1987 with a focus on the steel industry, working for recognized companies such as Wean/Danieli, Tenova, and the Paul Wurth/SMS Group. In addition, he also gained experience in the air and water treatment side of the business while working for Calgon Carbon. George also spent several years working for Hatch, an engineering and installation consulting group.",
      paragraph4:
        "ILB has a multitude of top performing products to offer: refractories or ceramic materials made by Saint-Gobain, advanced thermoplastic sheeting products produced by US Liner, and a proprietary industrial adhesive promoted by Quin-Global. All of these products - individually or in combination - offer exceptional results. ILB makes this all happen through its in-house engineering expertise, with the support of Orbital Engineering, which has every facet of engineering under one roof, and Saint-Gobain, whose products are known worldwide for top performance and value.",
      paragraph5:
        "When it comes to making the right choice with our customers, we are committed to identifying and providing the materials best suited to do the job right the first time.",
      paragraph6:
        "ILB welcomes the opportunity to discuss any issue or challenge you may be facing that requires technical or commercial support, or any key materials and services. For a personal consultation, please contact us by phone or email:",
      footer:
        "Publish Date: March 2020--service applications offered are the copyright of ILB and its support group",
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
    url("../../assets/images/backgrounds/gray.jpg") no-repeat center center
      fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* min-height: 100vh; */
}

.hero-bg {
  background: linear-gradient(to right, #f5f5f500, #00000000),
    url("../../assets/images/img/about-bg-with-logo.jpg") fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  background-position: center bottom;
  background-repeat: no-repeat;
  height: 70vh;
}
.engraved-text-header {
  color: #9c7828;
  font-weight: 500;
  text-shadow: 0px 0px rgb(165, 132, 21), -1px -1px rgb(163, 135, 22);
}

#mission {
  color: #b3882a;
}
.hero h1 {
  color: #dbdbdb;
}
.shift-hero {
  padding-top: 500px;
}
.shift-hero-logo {
  position: relative;
  top: 20px;
  left: 150px;
}
.quote {
  font-style: oblique;
}
.is-shady {
  animation: flyintoright 0.9s backwards;
  /* background: #fff; */
  box-shadow: 0 10px 16px rgba(163, 128, 39, 0.372),
    0 6px 6px rgba(99, 81, 37, 0.5);
  border-radius: 4px;
  display: inline-block;
  margin: 10px;
  position: relative;
  transition: all 1s ease-in-out;
}
#about-footer {
  background: -webkit-linear-gradient(
    top,
    #dfdfdf 0%,
    #d8d8d8 21%,
    #f0f0f0 50%,
    #dbdbdb 80%,
    #dddddd 100%
  );
  padding: 20px;
}

.contact-button {
  border: none;
  background: rgba(143, 134, 38);
  color: #e9e9e9 !important;
  font-weight: 900;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  width: 100%;
}

.contact-button:hover {
  color: rgba(143, 134, 38) !important;
  font-weight: 900 !important;
  letter-spacing: 2px;
  background: rgb(230, 230, 230);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}
</style>
