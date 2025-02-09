<template>
  <div class="about-us">
    <h1>About Us</h1>
    <div class="background-image">
      <img src="../assets/logo/logo.png" alt="Restaurant Logo" class="responsive-logo" />
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <p style="font-size: 20px; line-height: 2.5">
            位于德国柏林的纯素中餐馆“莲花阁”，是一家专注于提供健康、美味的纯素美食的餐饮场所。我们的后厨团队亲自挑选每一种食材，确保其新鲜和高品质。为了保证菜品的原汁原味，所有的作料和汤汁均由后厨亲自熬制，不含味精和任何人工添加剂。
            我们秉承中国传统的素食之道，唯用天然食材烹制每一道菜品。此乃纯素饮食之坚守，亦是对客人之诚意用心。每一口纯素美味，皆含对自然之敬畏与健康生活之追求。
            餐馆的菜单丰富多样，从经典的中式素食点心到独创的特色菜肴，每一道菜都能带给您独特的味觉体验。在这里，您不仅能品尝到美味的纯素中餐，更能感受到我们对环保和心灵健康的关怀。无论是家人聚餐，还是朋友聚会，我们都诚挚邀请您前来体验这份心意和美味。更有中国传统手工泡茶，添古文化韵味于餐宴。
            <br /><br />
            茶艺体验介绍：•
            适合4人及以上：由专业茶艺师为您演绎茶道，全程约2小时，费用每人约30欧元。•
            专属茶室：单独的房间提供静谧环境，让您尽享茶艺之美。
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <p style="font-size: 20px; line-height: 2">
            Das in Berlin gelegene vegane chinesische Restaurant "Kamala" ist ein Ort, der sich auf
            die Bereitstellung gesunder und köstlicher veganer Speisen spezialisiert hat. Unser
            Küchenteam wählt jede Zutat persönlich aus, um deren Frische und hohe Qualität zu
            gewährleisten. Um den ursprünglichen Geschmack der Gerichte zu garantieren, werden alle
            Gewürze und Saucen von unserer Küche selbst zubereitet, ohne Geschmacksverstärker und
            künstliche Zusatzstoffe. Wir folgen der traditionellen chinesischen „Buddha-veganen“
            Esskultur, indem wir auf Lauch, Knoblauch und andere stark riechende Zutaten verzichten
            und nur natürliche Zutaten verwenden. Dies ist nicht nur ein Bekenntnis zur veganen
            Küche, sondern auch ein Ausdruck unserer Ehrlichkeit und Sorgfalt gegenüber unseren
            Gästen. Jeder Bissen veganer Köstlichkeit zeugt von unserem Respekt vor der Natur und
            dem Streben nach einem gesunden Lebensstil. Das Restaurant bietet eine vielfältige
            Speisekarte, von klassischen chinesischen veganen Dim Sum bis hin zu kreativen
            Spezialitäten, die Ihnen ein einzigartiges Geschmackserlebnis bieten. Hier können Sie
            nicht nur köstliche vegane chinesische Gerichte genießen, sondern auch unser Engagement
            für Umweltschutz und geistige Gesundheit spüren. Ob Familienessen oder Treffen mit
            Freunden, wir laden Sie herzlich
          </p>
        </v-col>
        <v-col cols="12" md="3"></v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row dense>
        <v-col v-for="(image, index) in images" :key="index" cols="12" sm="6" md="4" lg="3">
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
      return new URL(`../assets/fotos/tea/${image}`, import.meta.url).href
    },
    async fetchImages() {
      const images = import.meta.glob('../assets/fotos/tea/*.{png,jpg,jpeg,svg}')
      this.images = Object.keys(images).map((key) => key.replace('../assets/fotos/tea/', ''))
    },
  },
  mounted() {
    this.fetchImages()
  },
}
</script>

<style scoped>
.about-us {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1,
h2 {
  color: #2c3e50;
}

p {
  color: #34495e;
}
.image-card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.image-card:hover {
  transform: scale(1.05);
}
.responsive-logo {
  width: 20%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 600px) {
  .responsive-logo {
    width: 50%;
  }
}
</style>
