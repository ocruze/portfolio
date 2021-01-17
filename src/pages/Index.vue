<template>
  <Layout>
    <About />
    <Projects />
    <Education />
    <Contact />
  </Layout>
</template>

<script>
import About from "~/components/views/About";
import Education from "~/components/views/Education";
import Projects from "~/components/views/Projects";
import Contact from "~/components/views/Contact";

export default {
  metaInfo: {
    title: "Orka Arnest Cruze",
  },
  components: {
    About,
    Education,
    Projects,
    Contact,
  },
};
</script>

<style>
/* .home-links a {
  margin-right: 1rem;
} */
</style>


