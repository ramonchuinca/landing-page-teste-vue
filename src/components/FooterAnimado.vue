<template>
	<footer class="FooterAnimado">
	  <div class="footer-content">
		<p>&copy; 2025 Minha Marca. Todos os direitos reservados.</p>
		<ul class="footer-links">
		  <li><a href="#">Política de Privacidade</a></li>
		  <li><a href="#">Termos de Uso</a></li>
		  <li><a href="#">Contato</a></li>
		</ul>
	  </div>
	</footer>
  </template>
  
  <script>
  export default {
	name: "FooterAnimado",
  };
  </script>
  
  <style scoped>
  .FooterAnimado {
	background-color: hsla(0, 0%, 0%, 0.8); /* Preto com 50% de transparência */
	color: white; /* Texto branco */
	padding: 20rem;
	text-align: center;
	position: relative;
	overflow: hidden;
	top: -1vh;
  }
  
  .footer-content {
	opacity: 0;
	transform: translateY(20px);
	animation: fadeInUp 1.5s ease-out forwards; /* Animação ao carregar */
  }
  
  .footer-links {
	list-style: none;
	padding: 0;
	margin: 10px 0 0;
	display: flex;
	justify-content: center;
	gap: 15px;
  }
  
  .footer-links li {
	margin: 0;
  }
  
  .footer-links a {
	color: #00bcd4; /* Azul claro */
	text-decoration: none;
	font-weight: bold;
  }
  
  .footer-links a:hover {
	text-decoration: underline;
  }
  
  /* Animação */
  @keyframes fadeInUp {
	from {
	  opacity: 0;
	  transform: translateY(20px);
	}
	to {
	  opacity: 1;
	  transform: translateY(0);
	}
  }
  </style>
  
