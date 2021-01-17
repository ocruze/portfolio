<template>
  <section id="projects" class="section-projects">
    <v-container>
      <v-row>
        <v-col>
          <h1>Projects</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-container>
            <v-row dense>
              <ProjectCard
                v-for="project in projects"
                :key="project.name"
                :project="project"
              />
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProjectCard from "~/components/ProjectCard";
import projectsFromFile from "./../../../static/projects.json";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: projectsFromFile,
    };
  },
};
</script>

<style  scoped>
.section-projects {
  background-color: #f2be8d;
}
</style>