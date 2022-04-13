import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store'
const app = createApp(App).use(router);

app.use(router);
app.use(store);

app.mount('#app');
