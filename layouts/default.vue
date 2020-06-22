<template>
  <div id="app">
    <navbar />
    <contact-form-modal/>
    <modals-container />
  <nuxt />
  </div>
</template>


<script>
import navbar from '~/components/navbar.vue'
import ContactFormModal from '~/components/contact.vue'
export default {
  name: 'app',
  components: {
    navbar,
    ContactFormModal
  }
}

</script>
<style lang="scss">

</style>
