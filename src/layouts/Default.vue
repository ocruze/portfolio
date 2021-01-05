<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list-item>
        <!-- <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar> -->
        <v-list-item-content>
          <v-list-item-title class="title">
            Orka Arnest Cruze
          </v-list-item-title>
          <v-list-item-subtitle> Junior Developer </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "About me", icon: "mdi-account-circle" },
        { title: "Projects", icon: "mdi-apps-box" },
        { title: "Education", icon: "mdi-school" },
        { title: "Contact", icon: "mdi-at" },
      ],
      right: null,
    };
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
*/
/* .layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
} */

.v-application--wrap {
  flex-direction: row;
}

.v-main {
  flex: 1 0;
}
</style>
