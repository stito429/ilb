<template>
  <nav class="navbar is-light is-fixed-top" id="navbar-background">
    <!--Company Logo & Website-->
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img v-bind:src="companyLogo" alt="Industrial Linerback Services LLC" id="navbar-logo-fix" />
      </nuxt-link>
      <!--workflow on the burger menu when clicked-->
      <div
        v-on:click="active = !active"
        v-bind:class="{'is-active': active }"
        class="navbar-burger burger"
        data-target="mynavbar"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!--Navbar Options-->
    <div v-bind:class="{'is-active': active }" class="navbar-menu">
      <!--Left Navbar list-->
      <div class="navbar-start">
        <!--Products DropDown Navbar Items-->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link has-text-weight-bold">{{ navProductsDropdownMenu }}</a>
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
          <a class="navbar-link has-text-weight-bold">{{ navServicesDropdownMenu }}</a>
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
            <div v-for="navbarRightItem in navbarRightItems" :key="navbarRightItem.route">
              <a
                v-bind:href="navbarRightItem.route"
                class="navbar-item button classname"
                id="nav-button"
              >
                <div class="has-text-weight-bold">{{ navbarRightItem.item }}</div>
              </a>
            </div>
            <div>              
              <a @click="show"
                class="navbar-item button classname"
                id="nav-button">
                <div class="has-text-weight-bold">Contact</div>
                </a>
            </div>
          </div>
        </div>
        <!--Right NavBar ends-->
      </div>
    </div>
    <!--NavBar Items ends-->
  </nav>
  <!--NavBar ends-->
</template>

<script>
import companyLogo from '~/assets/images/logos/ilblogo.png'
// import contact from '~/components/contact'
export default {

  data() {
    return {
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
          item: "Saint-Gobain SpyroCor",
          route: "/products/sg-spyrocor"
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
          item: "Scheduling Services",
          route: "/services/scheduling"
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
// methods: {
//   show () {
//     this.$modal.show('Contact');
//   },
//   hide () {
//     this.$modal.hide('Contact');
//   }
// }
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

  #nav-button {
  }
}

@media screen and (max-width: 1023px) {
  #button-container {
    flex-flow: column wrap;
  }
  #nav-button {
  }
}

@media screen and (min-width: 1023px) {
  .classname {
    -moz-box-shadow: inset 0px 1px 17px -3px #ad2424;
    -webkit-box-shadow: inset 0px 1px 17px -3px #8c8c8c;
    box-shadow: inset 0px 1px 17px -3px #8c8c8c;

    background: -webkit-linear-gradient(
      top,
      #cdcdcd 0%,
      #e6e4e4 21%,
      #e7e7e7 50%,
      #dddddd 80%,
      #b3b3b3 100%
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
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    height: 50px;
    line-height: 34px;
    width: 110px;
    text-decoration: none;
    text-align: center;
    margin: 2px;

    color: #333;
    background-color: #666;
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5); /* 50% white from bottom */
  }
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
</style>