<template>
  <nav class="navbar is-light is-fixed-top" id="navbar-background">
    <!--Company Logo & Website-->
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img
          v-bind:src="companyLogo"
          alt="Industrial Linerback Services LLC"
          id="navbar-logo-fix"
        />
      </nuxt-link>
      <!--workflow on the burger menu when clicked-->
      <div class="navbar-item has-text-weight-bold is-hidden-desktop" id="navbar-phone">
        <div class="phone cta ">
          <span class="icon is-large">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>
        </div>
        <a class="phone number" href="tel:(724)825-1474">724-825-1474</a>
      </div>
      <div
        v-on:click="active = !active"
        v-bind:class="{ 'is-active': active }"
        class="navbar-burger burger"
        data-target="mynavbar"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!--Navbar Options-->
    <div v-bind:class="{ 'is-active': active }" class="navbar-menu">
      <!--Left Navbar list-->
      <div class="navbar-start">
        <!--Products DropDown Navbar Items-->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link has-text-weight-bold">{{
            navProductsDropdownMenu
          }}</a>
          <div class="navbar-dropdown is-boxed" id="dropdown-background">
            <a
              v-for="navDropdownItem in navProductsDropdownItems"
              :key="navDropdownItem.route"
              class="navbar-item"
              v-bind:href="navDropdownItem.route"
            >
              <p class="has-text-weight-bold">{{ navDropdownItem.item }}</p>
            </a>
          </div>
        </div>

        <!--Services DropDown Navbar Items-->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link has-text-weight-bold">{{
            navServicesDropdownMenu
          }}</a>
          <div class="navbar-dropdown is-boxed" id="dropdown-background">
            <a
              v-for="navDropdownItem in navServicesDropdownItems"
              :key="navDropdownItem.route"
              class="navbar-item"
              v-bind:href="navDropdownItem.route"
            >
              <p class="has-text-weight-bold">{{ navDropdownItem.item }}</p>
            </a>
          </div>
        </div>
      </div>
      <!--Left NavBar ends-->

      <!--NavBar items on the right-->
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped" id="button-container">
            <div
              v-for="navbarRightItem in navbarRightItems"
              :key="navbarRightItem.route"
            >
              <a
                v-bind:href="navbarRightItem.route"
                class="navbar-item classname has-text-weight-bold"
                id="nav-button"
              >
                {{ navbarRightItem.item }}
              </a>
            </div>
            <div>
              <a
                @click="show"
                class="navbar-item classname has-text-weight-bold"
                id="nav-button"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <!--Right NavBar ends-->
      </div>
    </div>
    <!--NavBar Items ends-->

    <contact-form-modal v-if="shown" />
  </nav>

  <!--NavBar ends-->
</template>

<script>
import companyLogo from "~/assets/images/logos/ilblogo.png";
import ContactFormModal from "~/components/contact";
export default {
  components: {
    ContactFormModal
  },
  data() {
    return {
      shown: false,
      active: false,
      companyLogo: companyLogo,
      navProductsDropdownMenu: "Products",
      navServicesDropdownMenu: "Services",
      navProductsDropdownItems: [
        {
          item: "ITC Coatings",
          route: "/products/itc-coatings"
        },
        {
          item: "Quin-Global",
          route: "/products/quin-global"
        },
        {
          item: "Saint-Gobain Refractories and Linings",
          route: "/products/sg-refractories"
        },
        {
          item: "Saint-Gobain Furnace Tube Inserts",
          route: "/products/sg-furnace-tube-inserts"
        },
        {
          item: "Saint-Gobain WRT",
          route: "/products/sg-wrt"
        },
        {
          item: "US Liner",
          route: "/products/us-liner"
        }
      ],
      navServicesDropdownItems: [
        {
          item: "Orbital Engineering Support",
          route: "/services/orbital-engineering-support"
        },
        {
          item: "Saint-Gobain Engineering Support",
          route: "/services/sg-engineering-support"
        },
        {
          item: "Project and Construction Management",
          route: "/services/project-construction-mgmt"
        },
        {
          item: "Inspection and Scheduling Services",
          route: "/services/inspection-scheduling-services"
        }
      ],
      navbarRightItems: [
        {
          item: "Home",
          route: "/"
        },
        {
          item: "About",
          route: "/about"
        },
        {
          item: "Gallery",
          route: "/gallery"
        },
        {
          item: "Testimonials",
          route: "/testimonials"
        }
      ]
    };
  },
  methods: {
    show: function() {
      this.shown = true;
      this.$modal.show("contact-form");
      this.$modal.show("contact-form");
    },
    hide() {
      this.$modal.hide("Contact");
    },
    init() {
      this.shown = true;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
#navbar-logo-fix {
  max-width: 150px;
  max-height: 50px;
}

#navbar-background {
  background: -webkit-linear-gradient(
    top,
    #f7f7f7 0%,
    #e6e6e6 21%,
    #f0f0f0 50%,
    #b1b1b1 80%,
    #7d7d7d 100%
  );
  /* url("../assets/backgrounds/steel-background.jpg") repeat-x scroll 0 0; */
}
/* @media screen and (max-width: 1023px) {
  .navbar {
    display: flex;
    flex-wrap: wrap;
  }
  .navbar-brand {
    min-width: 100%;
  }
  .navbar-menu {
    margin-left: auto;
    min-width: 50%;

  }
}  */

@media screen and (min-width: 1023px) {
  #dropdown-background {
    background: -webkit-linear-gradient(
      top,
      #e6e6e6 0%,
      #e1e1e1 21%,
      #ffffff 50%,
      #e2e2e2 80%,
      #e1e1e1 100%
    );
  }

  /* #nav-button {
  } */
}

@media screen and (max-width: 1023px) {
  #button-container {
    flex-flow: column wrap;
  }
  /* #nav-button {
  } */
}

/* @media screen and (min-width: 1023px) { */
.classname {
  background: #f1f1f1;
  background-image: -webkit-linear-gradient(top, #f1f1f1, rgb(201, 201, 201));
  background-image: -moz-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: -ms-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: -o-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: linear-gradient(
    to bottom,
    rgb(250, 250, 250),
    rgb(155, 155, 155)
  );
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #000000;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  min-width: 100%;
  padding-right: 2%;
  padding-left: 2%;
  padding-top: 5%;
  /* box-shadow: 1px 1px 20px 0px #000000;
-webkit-box-shadow: 1px 1px 20px 0px #000000;
-moz-box-shadow: 1px 1px 20px 0px #000000; */
  text-shadow: 0px 0px 27px #ffffff;
  /* border: inset #C7C7C7 2px; */
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}

.classname:hover {
  background: #f1f1f1;
  background-image: -webkit-linear-gradient(top, #f1f1f1, rgb(201, 201, 201));
  background-image: -moz-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: -ms-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: -o-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: linear-gradient(
    to bottom,
    rgb(250, 250, 250),
    rgb(155, 155, 155)
  );
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #000000 !important;
  font-family: Arial !important;
  font-size: 14px !important;
  font-weight: 900 !important;
  min-width: 100% !important;
  padding-right: 2% !important;
  padding-left: 2% !important;
  padding-top: 5% !important;
  box-shadow: 1px 1px 20px 0px #a2a2a2;
  -webkit-box-shadow: 1px 1px 20px 0px #888888;
  -moz-box-shadow: 1px 1px 20px 0px #e6e6e6;
  text-shadow: 0px 0px 27px #ffffff;
  border: inset #c7c7c7 2px;

  display: inline-block;
  cursor: pointer;
  text-align: center;
}

.classname:active {
  background: #f1f1f1;
  background-image: -webkit-linear-gradient(top, #f1f1f1, rgb(201, 201, 201));
  background-image: -moz-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: -ms-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: -o-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: linear-gradient(
    to bottom,
    rgb(250, 250, 250),
    rgb(155, 155, 155)
  );
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #000000;
  font-family: Arial;
  font-size: 14px;
  font-weight: 900;
  min-width: 100%;
  padding-right: 2%;
  padding-left: 2%;
  padding-top: 5%;
  box-shadow: 1px 1px 20px 0px #ffffff;
  -webkit-box-shadow: 1px 1px 20px 0px #676767;
  -moz-box-shadow: 1px 1px 20px 0px #000000;
  text-shadow: 0px 0px 27px #ffffff;
  border: inset #c7c7c7 2px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}

.phone {
  background: #f1f1f1;
  background-image: -webkit-linear-gradient(top, #f1f1f1, rgb(201, 201, 201));
  background-image: -moz-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: -ms-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: -o-linear-gradient(top, #f1f1f1, #c7c7c7);
  background-image: linear-gradient(
    to bottom,
    rgb(250, 250, 250),
    rgb(155, 155, 155)
  );
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #000000;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  min-width: 100%;
  padding-right: 2%;
  padding-left: 2%;
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  cursor: pointer;
  text-decoration: none;
}

.cta {
  height: 80%;
  min-width: 100px;
  color: black;
  z-index: 1;
  transition: 1.2s;
}

.number {
  height: 80%;
  min-width: 100px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-size: cover;
  color: white;
  box-shadow: 3px 3px 30px #aaa;
  text-decoration: none;
}

.cta:hover {
  transform: translateX(-98%);
  transition: 1.2s;
}

#navbar-phone {
  padding-left: 10%;
}
</style>