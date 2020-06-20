<template>
  <div class="container">
    <div>
      <h2>Pick a Tea</h2>
    </div>
    <div>
      <form
        netlify
        name="vue-tea"
        method="post"
        data-netlify-honeypot="bot-field"
      >
        <input  name="form-name" value="vue-tea" />
        <div class="tea">
          <label
            v-for="tea in teaNames"
            :key="tea"
            :class="{
              'tea-label': true,
              checked: tea === chosenTea
            }"
          >
            <input
              v-model="chosenTea"
              name="tea"
              type="radio"
              :value="tea"
            />
            <span>{{ tea }}</span>
          </label>
        </div>
        <div>
          <h1>{{ teaName }}</h1>
        </div><div>
        <input type="submit"/></div>
      </form>
    </div>
  </div>
</template>

<script>
// Many thanks: https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/
export default {
  data() {
    return {
      chosenTea: "Earl Grey",
      teaTypes: {
        "Earl Grey": "London",
        "Irish Breakfast": "Dublin",
        Chai: "Bombay",
        Rose: "Atlantic City",
        Matcha: "Tokyo",
        Rooibos: "Cape Town",
        "Yerba Mate": "Montreal",
        Green: "Oregon Mist"
      }
    };
  },
  computed: {
    teaName() {
      return `${this.teaTypes[this.chosenTea]} Fog`;
    },
    teaNames() {
      return Object.keys(this.teaTypes);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.tea {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1.5em;
}
</style>
