exports.routes = [
  {
    path: '/', component: '../layouts/index',
    routes: [
      { path: '/', component: './index' },
      { path: '/user', component: './user' },
      { path: '/name', component: './name' },
      { path: '/canvas', component: './canvas/canvas' },
    ]
  },
]


