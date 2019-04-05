import Vue from 'vue';
// import VueRouter from 'vue-router';

// import routes from 'TodoRouterDir/routes';
// import routes from 'TodoVuexDir/routes';
// import store from 'TodoVuexDir/store';

import '../scss/global.scss';

import myApp from './first';
// import myApp from 'TodoDir';
// import myApp from 'TodoRouterDir';
// import myApp from 'TodoVuexDir';

// Vue.use(VueRouter);
// const router = new VueRouter({
//   routes: routes,
//   mode: 'history',
// });

new Vue({
  el: '#app',
  // router: router,
  // store: store,
  render: h => h(myApp),
  // render: h => h(myApp), は↓の書き方を短くしたもの
  // render: function (createElement) {
  //   return createElement(myApp)
  // }
});
