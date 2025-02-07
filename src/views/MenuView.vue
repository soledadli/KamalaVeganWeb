<template>
  <v-container>
    <h2 class="text-center text-h4 font-weight-bold my-4">Photo Gallery</h2>

    <v-row dense>
      <v-col v-for="(image, index) in images" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-card class="image-card" @click="openImage(image)">
          <v-img :src="getImageUrl(image)" aspect-ratio="1" class="rounded-lg"></v-img>
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
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  data() {
    return {
      dialog: false,
      selectedImage: null,
      images: [],
    }
  },
  methods: {
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
  transition: transform 0.3s ease-in-out;
}

.image-card:hover {
  transform: scale(1.05);
}
</style>
