<template>
  <div id="app" class="container mt-4 rounded">
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
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 800px;
  background-color: whitesmoke;
}

router-link-exact-active {
  color: #42b983;
}

body {
  background-image: url("assets/background.jpg");
}
</style>
