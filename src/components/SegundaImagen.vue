<template>
    <div class="SegundaImagen">
      <img src="/assets/banner-vue.png" alt="SegundaImagen" class="SegundaImagen" />
    </div>
  </template>
  
  <script>
  export default {
    name: "SegundaImagen",
  };
  </script>
  
  <style scoped>
  .SegundaImagen {
    position: relative;
    width: 100%;
    height: 300px; /* Ajuste a altura conforme necessário */
    overflow: hidden;
  }
  
  .SegundaImagen {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra todo o espaço */
  }
  </style>
  