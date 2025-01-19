<template>
  <div class="MenuView">
    <h1>Online MenuView</h1>
    <div class="photos">
      <div v-for="photo in photos" :key="photo" class="photo">
        <img :src="require(`@/assets/fotos/${photo}`)" :alt="photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuView',
  data() {
    return {
      photos: [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        // Add more photo filenames here
      ],
    }
  },
}
</script>

<style scoped>
.MenuView {
  text-align: center;
}

.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.photo {
  margin: 10px;
}

.photo img {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
}
</style>
