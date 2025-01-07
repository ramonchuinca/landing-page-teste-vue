<script setup>

import NavBar from './components/NavBar.vue';
import Banner from './components/Banner.vue';
import ImagensAnimadas from './components/ImagensAnimadas.vue';
import SegundaImagen from './components/SegundaImagen.vue';
import FooterAnimado from './components/FooterAnimado.vue';


</script>


<template>
  <NavBar/>
  <Banner/>
  <ImagensAnimadas />

  <header>
    <iframe class="video-you" width="560" height="315" 
    src="https://www.youtube.com/embed/AdApfFxO3Gs?si=UCw5aOaDm0sSNkhn"
    title="YouTube video player"
   frameborder="0" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </header>
<SegundaImagen/>
<FooterAnimado/>


  <div class="fundo-escuro">
    <div>
      <p class="texto-fake">
        "A persistência é o caminho do êxito.",
        "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar em você.",
        "O sucesso nasce do querer, da determinação e da persistência em se chegar a um objetivo.",
        "Com organização e tempo, acha-se o segredo de fazer tudo e bem feito.",
        "Sorte é o encontro da preparação com a oportunidade."
      </p>
    </div>
  </div>

</template>


<style scoped>

</style>
