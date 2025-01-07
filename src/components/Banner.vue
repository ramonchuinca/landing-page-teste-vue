<template>
    <div class="banner">
      <img src="/assets/banner-vue.png" alt="Banner" class="banner-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
  };
  </script>
  
  <style scoped>
  .banner {
    position: relative;
    width: 100%;
    height: 600px; /* Ajuste a altura conforme necessário */
    overflow: hidden;
  }
  
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra todo o espaço */
  }
  </style>
  