<template>
  <div id="app" class="container rounded">
    <b-navbar toggleable="lg">
      <b-navbar-brand to="/">
        <b-avatar text="A"></b-avatar>&nbsp;Orka
        <strong>Arnest</strong> Cruze
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/cv/interactive">Resume</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
  background-color: whitesmoke;
}

router-link-exact-active {
  color: #42b983;
}

body {
  height: 100vh;
  padding: 1.5em 0.8em;

  background: rgb(48, 73, 255);
  background: linear-gradient(
    153deg,
    rgba(48, 73, 255, 1) 16%,
    rgba(193, 71, 71, 1) 95%
  );
}
</style>
