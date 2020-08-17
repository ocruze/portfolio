<template>
  <b-container class="home-container text-center">
    <b-row align-v="center" class="home-row">
      <b-col>
        <h1>Junior Developer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis placerat vehicula. Sed hendrerit sapien vel tortor tempor sollicitudin. Interdum.</p>
        <b-button pill variant="outline-secondary">View CV</b-button>
      </b-col>
      <b-col>
        <div class="avatar-wrapper">
          <b-img src="@/assets/avatar.jpg" alt="avatar" width="500px" rounded="circle"></b-img>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss" scoped>
.home-container {
  background-color: darken($color: whitesmoke, $amount: 10);
}

.home-row {
  height: calc(100vh - 10em);
}

.avatar-wrapper{
  padding: 20px;
  background-color: white;
  border-radius: 100%;
}
</style>
