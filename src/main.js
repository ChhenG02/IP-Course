import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import App from './App.vue';
import router from './router'; // Import the router

const app = createApp(App);

app.use(createPinia());
app.use(router); // Register the router

app.mount('#app');
