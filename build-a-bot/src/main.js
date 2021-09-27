import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import pinDirective from './shared/directive/pin-directive';

createApp(App)
  .use(router)
  .use(store)
  .directive('pin', pinDirective)
  .mount('#app');
