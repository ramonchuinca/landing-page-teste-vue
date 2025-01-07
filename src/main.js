import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'; // Importar CSS do AOS
import AOS from 'aos';


createApp(App).mount('#app')

// Inicializar AOS após o mount
AOS.init();
