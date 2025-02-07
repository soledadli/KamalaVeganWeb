<template>
  <v-app>
    <v-container>
      <v-app-bar app style="background-color: #4caf50; color: #fff density= 'comfortable'">
        <v-container class="d-flex align-center">
          <v-toolbar-title class="text-h5 font-weight-bold">KamalaVegan</v-toolbar-title>
          <v-tabs v-model="currentTab" background-color="transparent">
            <v-tab value="about-us">About Us</v-tab>
            <v-tab value="menu">Menu</v-tab>
            <v-tab value="reservierung">Reservierung</v-tab>
            <v-tab value="kontakt">Kontakt</v-tab>
          </v-tabs>
        </v-container>
      </v-app-bar>

      <v-main>
        <v-container v-if="currentTab === 'about-us'">
          <AboutUsView />
        </v-container>

        <v-container v-if="currentTab === 'menu'">
          <MenuView />
        </v-container>

        <v-container v-if="currentTab === 'reservierung'">
          <ReserveView />
        </v-container>

        <v-container v-if="currentTab === 'kontakt'">
          <KontaktView />
        </v-container>
      </v-main>
    </v-container>
    <footer class="footer" style="background-color: #4caf50; color: #fff">
      <p>&copy; 2025 KamalaVegan - All Rights Reserved</p>
    </footer>
  </v-app>
</template>

<script>
import MenuView from './views/MenuView.vue'
import AboutUsView from './views/AboutUsView.vue'
import ReserveView from './views/ReserveView.vue'
import KontaktView from './views/KontaktView.vue'

export default {
  components: {
    MenuView,
    AboutUsView,
    ReserveView,
    KontaktView,
  },
  data() {
    return {
      currentTab: 'about-us',
    }
  },
}
</script>
