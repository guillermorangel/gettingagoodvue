import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import pinDirective from './shared/directive/pin-directive';
import currencyFilter from './shared/filter/currency-filter';

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency: currencyFilter,
};

app.use(router)
  .use(store)
  .directive('pin', pinDirective)
  .mount('#app');
