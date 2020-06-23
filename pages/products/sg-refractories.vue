<template>
  <section>
    <div class="hero hero-bg is-small">
      <br />
      <br />
      <br />
      <div class="hero-body">
        <div class="columns">
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
                <img
                  class="product-image"
                  :src="require('../../assets/images/img/furnace3-hd.jpg')"
                />
              </figure>
            </div>
          </div>

          <hr />

          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph2Header}}</h3>
          <div class="is-size-4">{{paragraph2}}</div>
          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph3Header}}</h3>
          <div class="is-size-4">{{paragraph3}}</div>
          <hr />
          <h3 class="subtitle is-3 has-text-weight-bold logo-color">{{paragraph4Header}}</h3>

          <div class="is-size-4">{{paragraph4}}</div>
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
export default {
  components: {},
  data: function() {
    return {
      header: "Saint-Gobain Refractories and Linings Group",
      paragraph1Header: "Background",
      paragraph1:
        "Industrial Linerback and Services (ILB) represent the Saint-Gobain Refractories and Linings Group which is based out of Brazil and France. When it comes to finding a refractory that will stand up to the test, Saint-Gobain has a long-standing, positive track record when it comes to performance. Many people are not aware of or forgot about a company called Carborundum, a leader in refractories during the 70’s and 80’s. It was acquired in the late 90’s by Saint-Gobain which grew the refractory’s business extensively worldwide from then.",
      paragraph2Header: "Market Strategy",
      paragraph2:
        "Today, the Refractories and Linings group is achieving a significant presence in the North America market, with ILB leading the effort. We are introducing their impressive lineup of products which include: SiC brick, tap-hole clays, monolithic shapes, blast furnace linings, trough and runner castables, general castables, and shotcrete patch materials. ILB works with customers by evaluating their needs and identifying the best engineered solution for their line of business. For the past 15 years, the Saint-Gobain’s refractories support team has been a leader in refractory performance materials in Europe and South America. Furthermore, their R&D Groups take the extra steps to design and develop a key product to extend the life of a customers product need. Saint-Gobain’s winning combination of engineering know how, design, technical expertise, quality assurance, and installation knowledge has proven itself over the years with sustaining the highest level of satisfied, return customer business.",
      paragraph3Header: "More Info",
      paragraph3:
        "To learn more about Saint-Gobain and its product line, please visit their website at: refractories.saint-gobain.com. You will see that Saint-Gobain has a lot to offer with its top-performing refractories which can be joined with a custom material formulation to meet your unique needs.",
      paragraph4Header: "Proven Results",
      paragraph4:
        "All of the benefits above and project histories around the globe, and our marketing material details will explain to end users that it makes a lot of sense to consider Saint-Gobain products to help improve your facility’s performance and equipment longevity.",
      contact:
        "Please contact ILB by phone or e-mail us to get further details on how we can help solve your wear and maintenance cost issues and challenges."
    };
  }
};
</script>

<style>
.component {
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.6) 10%,
      rgba(255, 255, 255, 0.7) 15%,
      rgba(255, 255, 255, 0.7) 85%,
      rgba(255, 255, 255, 0.6) 90%
    ),
    url("../../assets/images/backgrounds/gray.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* min-height: 100vh; */
}
.hero-bg {
  background: rgb(210, 125, 21);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  background-position: left;
  background-repeat: no-repeat;
}

hr {
  border: 1px solid rgb(179, 124, 5);
  border-radius: 2px;
}
.logo-color {
  color: rgb(179, 124, 5);
}

.logo-image {
  border-radius: 3px;
}

.product-image {
  max-width: 100%;
  padding: 10px;
  position: relative;
}
</style>
