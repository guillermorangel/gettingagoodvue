import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RobotBuilder from '../components/robot/RobotBuilder.vue';
import SidebarStandard from '../components/sidebar/SidebarStandard.vue';
import SidebarBuild from '../components/sidebar/SidebarBuild.vue';
import BrowseParts from '../components/part/BrowseParts.vue';
import RobotHeads from '../components/part/RobotHeads.vue';
import RobotArms from '../components/part/RobotArms.vue';
import RobotTorsos from '../components/part/RobotTorsos.vue';
import RobotBases from '../components/part/RobotBases.vue';
import PartInfo from '../components/part/PartInfo.vue';
import Search from '../components/search/Search.vue';
import ShoppingCart from '../components/cart/ShoppingCart.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  }, {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      }, {
        name: 'BrowseTorsos',
        path: 'toros',
        component: RobotTorsos,
      }, {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      },
    ],
  }, {
    path: '/parts/:partType/:partId',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidPartId = Number.isInteger(Number(to.params.partId));
      next(isValidPartId);
    },
  }, {
    path: '/search',
    name: 'Search',
    component: Search,
  }],
});
