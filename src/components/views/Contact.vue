<template>
  <section id="contact">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center">Contact</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="2" offset-sm="5" class="d-flex justify-space-around">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
            alt="github icon"
            class="contact-icon"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
            alt="linkedin icon"
            class="contact-icon"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/microsoftoutlook.svg"
            alt="microsoftoutlook icon"
            class="contact-icon"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background-color: #f2be8d;
}

.contact-icon {
  height: 30px;
  width: 30px;
}
</style>