<template>
    <section class="nova-imagem-detran" data-section="section">
      <div class="imagem-posicionada imagem-esquerda" data-aos="zoom-in-down">
        <img
          class="imagem-texto-1"
          src="/assets/imagenanimada1.webp"
          alt="Imagem 1"
        />
      </div>
  
      <div class="imagem-posicionada imagem-direita" data-aos="zoom-in-left">
        <img
          class="imagem-texto-2"
          src="/assets/imagensanimada2.jpg"
          alt="Imagem 2"
        />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    mounted() {
      // Reativar AOS ao montar o componente (opcional, se houver dinamismo)
      this.$nextTick(() => {
        import("aos").then((AOS) => AOS.init());
      });
    },
  };
  </script>
  
  <style scoped>
  .nova-imagem-detran {
    display: flex;
    flex-direction: column; /* Coloca as imagens em uma coluna */
    align-items: center; /* Centraliza as imagens horizontalmente */
    padding: 20px;
    gap: 30px; /* Espaçamento entre as imagens */
    background-color: hsla(0, 0%, 0%, 0.8); /* Preto com 50% de transparência */
    border: 2px solid green;

  }
  
  .imagem-posicionada img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    position: relative;
    
  }

  .imagem-posicionada {
    position: relative;
  }
  

  .imagem-esquerda {
    left:-10%;
    transform: translate(-50%, -50%);
  }
  
  .imagem-direita {
    right: -10%;
    transform: translate(50%, 50%);
  }
  </style>
  