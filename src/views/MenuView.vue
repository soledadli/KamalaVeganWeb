<template>
  <div>
    <h1
      style="
        text-align: center;
        color: #4caf50;
        font-family: 'Arial', sans-serif;
        margin-bottom: 20px;
      "
    >
      Speisekarte
    </h1>
    <div class="button-container">
      <button @click="currentTab = 'Menu'" :style="buttonStyle">Menu</button>
      <button @click="currentTab = 'Getranke'" :style="buttonStyle">Getranke</button>
      <button @click="currentTab = 'Feuertopf'" :style="buttonStyle">Feuertopf</button>
      <button @click="currentTab = 'Foto'" :style="buttonStyle">Fotos</button>
    </div>
    <a
      :href="pdfLink"
      download
      style="
        display: block;
        text-align: center;
        margin-bottom: 20px;
        color: #4caf50;
        font-family: 'Arial', sans-serif;
        text-decoration: none;
      "
    >
      Download {{ currentTab }}
    </a>
    <iframe v-if="currentTab !== 'Foto'" :src="iframeSrc" width="100%" height="800px"></iframe>
    <v-container v-if="currentTab === 'Foto'">
      <v-row dense>
        <v-col v-for="(image, index) in images" :key="index" cols="12" sm="6" md="4" lg="3" xl="2">
          <v-card class="image-card" @click="openImage(image)">
            <v-img :src="getImageUrl(image)" aspect-ratio="1" class="rounded-lg"></v-img>
            <v-card-title>{{ image.replace(/_/g, '').replace(/\.jpg$/, '') }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <!-- Lightbox Modal -->
      <v-dialog v-model="dialog" max-width="800px">
        <v-card>
          <v-img :src="getImageUrl(selectedImage)" class="rounded-lg"></v-img>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'Menu',
      buttonStyle: {
        margin: '0 10px',
        padding: '10px 20px',
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
      },
      dialog: false,
      selectedImage: null,
      images: [],
    }
  },
  computed: {
    pdfLink() {
      switch (this.currentTab) {
        case 'Menu':
          return '/KamalaVeganWeb/pdfs/SpeiserKarte_01.pdf'
        case 'Getranke':
          return '/KamalaVeganWeb/pdfs/Getranke_01.pdf'
        case 'Feuertopf':
          return '/KamalaVeganWeb/pdfs/Feuertopf_01.pdf'
        default:
          return '/KamalaVeganWeb/pdfs/SpeiserKarte_01.pdf'
      }
    },
    iframeSrc() {
      switch (this.currentTab) {
        case 'Menu':
          return '/KamalaVeganWeb/pdfjs-4.10.38-dist/web/viewer.html?file=/KamalaVeganWeb/pdfs/SpeiserKarte_01.pdf'
        case 'Getranke':
          return '/KamalaVeganWeb/pdfjs-4.10.38-dist/web/viewer.html?file=/KamalaVeganWeb/pdfs/Getranke_01.pdf'
        case 'Feuertopf':
          return '/KamalaVeganWeb/pdfjs-4.10.38-dist/web/viewer.html?file=/KamalaVeganWeb/pdfs/Feuertopf_01.pdf'
        default:
          return '/KamalaVeganWeb/pdfjs-4.10.38-dist/web/viewer.html?file=/KamalaVeganWeb/pdfs/SpeiserKarte_01.pdf'
      }
    },
  },
  watch: {
    currentTab(newTab) {
      this.pdfLink = this.getPdfLink(newTab)
      this.iframeSrc = this.getIframeSrc(newTab)
    },
  },
  methods: {
    getPdfLink(tab) {
      switch (tab) {
        case 'Menu':
          return '/KamalaVeganWeb/pdfs/SpeiserKarte_01.pdf'
        case 'Getranke':
          return '/KamalaVeganWeb/pdfs/Getranke_01.pdf'
        case 'Feuertopf':
          return '/KamalaVeganWeb/pdfs/Feuertopf_01.pdf'
        default:
          return '/KamalaVeganWeb/pdfs/SpeiserKarte_01.pdf'
      }
    },
    getIframeSrc(tab) {
      switch (tab) {
        case 'Menu':
          return '/KamalaVeganWeb/pdfjs-4.10.38-dist/web/viewer.html?file=/KamalaVeganWeb/pdfs/SpeiserKarte_01.pdf'
        case 'Getranke':
          return '/KamalaVeganWeb/pdfjs-4.10.38-dist/web/viewer.html?file=/KamalaVeganWeb/pdfs/Getranke_01.pdf'
        case 'Feuertopf':
          return '/KamalaVeganWeb/pdfjs-4.10.38-dist/web/viewer.html?file=/KamalaVeganWeb/pdfs/Feuertopf_01.pdf'
        default:
          return '/KamalaVeganWeb/pdfjs-4.10.38-dist/web/viewer.html?file=/KamalaVeganWeb/pdfs/SpeiserKarte_01.pdf'
      }
    },
    openImage(image) {
      this.selectedImage = image
      this.dialog = true
    },
    getImageUrl(image) {
      return new URL(`../assets/fotos/${image}`, import.meta.url).href
    },
    async fetchImages() {
      const images = import.meta.glob('../assets/fotos/*.{png,jpg,jpeg,svg}')
      this.images = Object.keys(images).map((key) => key.replace('../assets/fotos/', ''))
    },
  },
  mounted() {
    this.fetchImages()
  },
}
</script>
<style scoped>
.image-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.image-card:hover {
  transform: scale(1.05);
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .button-container button {
    flex: 1 1 45%;
    margin: 5px;
  }
}
</style>
