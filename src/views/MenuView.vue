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
    <div style="text-align: center; margin-bottom: 20px">
      <button @click="currentTab = 'Menu'" :style="buttonStyle">Menu</button>
      <button @click="currentTab = 'Getranke'" :style="buttonStyle">Getranke</button>
      <button @click="currentTab = 'Feuertopf'" :style="buttonStyle">Feuertopf</button>
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
      Download PDF
    </a>
    <iframe :src="iframeSrc" width="100%" height="1100px"></iframe>
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
  },
}
</script>
