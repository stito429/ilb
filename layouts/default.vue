<template>
  <div id="app">
    <navbar />
    <contact-form/>
  <nuxt />
  </div>
</template>


<script>
import navbar from '~/components/navbar.vue'
import ContactForm from '~/components/contact.vue'
export default {
  name: 'app',
  components: {
    navbar,
    ContactForm
  }
}

</script>
<style>

</style>
