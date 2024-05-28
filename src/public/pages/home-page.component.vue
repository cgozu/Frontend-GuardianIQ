<template>
<navbar-component />
  <div>

    <div class="card">
      <div class="card-image" :style="{ backgroundImage: 'url(' + currentImage + ')' }">
        <div class="card-overlay">
          <h1>Cámaras de seguridad de última tecnología</h1>
          <p>Por tu primera compra, obten el 30% de descuento</p>
          <button @click="shopNow">Shop now</button>
        </div>
      </div>
      <div class="image-indicators">
        <button v-for="(image, index) in images" :key="index" @click="setCurrentImage(index)" :class="{ 'active': currentImageIndex === index }"></button>
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
import footerComponent from "@/public/components/footer/footer.component.vue";
import navbarComponent from "@/public/components/navbar/navbar.component.vue";
// import toolbarComponent from "@/public/components/toolbar/Toolbar.component.vue";
export default {
  components: {
    footerComponent,
   // toolbarComponent
    navbarComponent
  },
  name: 'Home',
  data() {
    return {
      images: [
        'https://camarasconfiables.com/wp-content/uploads/cuanto-internet-usan-las-camaras-de-seguridad-1024x576.jpg',
        'https://rhenlasempresas.com/wp-content/uploads/2022/09/IPS.jpg',
        'https://tehutinetworks.net/wp-content/uploads/2023/09/seguridad-en-casa.png'
      ],
      currentImageIndex: 0
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  methods: {
    setCurrentImage(index) {
      this.currentImageIndex = index;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    shopNow() {
      this.$router.push('/SafetyDevicePage');
    }
  },
  mounted() {
    setInterval(this.nextImage, 3000);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.card {
  background-color: #11315C;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 2500px;
  max-height: 2500px;
  margin: 2rem auto;

}

.card-image {
  width: 100%;
  height: 900px;
  background-size: cover;
  background-position: center;
  position: relative;

}
.card-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.card-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}


.card-overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #11315C;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #11315C;
  font-family: 'Roboto', sans-serif;
}

.card-overlay p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  font-family: 'Roboto', sans-serif;
}
.card-overlay button {
  background-color: #F9A825;
  border: none;
  padding: 0.75rem 1.5rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 99px;
}




.card-arrows i {
  color: #F9A825;
  font-size: 2rem;
  cursor: pointer;
}


.image-indicators {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
}

.image-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  opacity: 0.5;
}

.image-indicators button.active {
  opacity: 1;
}
</style>
