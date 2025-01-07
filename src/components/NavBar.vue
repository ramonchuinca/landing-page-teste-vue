<template>
    <nav class="custom-navbar">
        <a href="#" class="logo">
            <img src="/assets/foto-1.webp" alt="Logotipo" class="logo-image" />

            Minha Marca
          </a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  .custom-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgb(10, 69, 4);
        background-color: #050d04;
    padding: 10px 20px;
  }
  
  .logo {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .logo-image {
    width: 40px; /* Ajuste o tamanho do logotipo */
    height: 40px;
    margin-right: 10px; /* Espaço entre o logotipo e o texto */
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
  }
  
  ul li a {
    color: white;
    text-decoration: none;
  }

  /* Mobile Styles */
@media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
}
  </style>
  