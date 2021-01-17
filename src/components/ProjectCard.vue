<template>
  <v-card class="mx-auto" max-width="344" shaped elevation="3">
    <v-img
      v-if="!this.project.image"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      height="200px"
    ></v-img>

    <v-img v-else :src="this.project.image" height="200px"></v-img>

    <v-card-title> {{ this.project.title }} </v-card-title>

    <v-card-subtitle>
      {{ this.truncateDesc(this.project.shortDesc) }}
    </v-card-subtitle>

    <v-container v-if="this.project.tags">
      <v-row dense>
        <v-chip v-for="tag in this.project.tags" :key="tag" class="mr-2">{{
          tag
        }}</v-chip>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        v-if="this.project.sourceCode"
        :href="this.project.sourceCode"
      >
        source code
      </v-btn>

      <v-btn
        color="orange lighten-2"
        text
        v-if="this.project.demo"
        :href="this.project.demo"
      >
        demo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
  },
  methods: {
    truncateDesc(desc) {
      if (desc.length > 80) return desc.slice(0, 77) + "...";

      return desc;
    },
  },
};
</script>

<style scoped>
</style>