import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RobotBuilder from '../components/robot/RobotBuilder.vue';
import Search from '../components/search/Search.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }, {
    path: '/search',
    name: 'Search',
    component: Search,
  }],
});
