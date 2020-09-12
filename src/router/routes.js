
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
        component: () => import('pages/Index.vue') 
      },
      {
        path: '/user',
        component: () => import('pages/UserPage.vue')
      },
      {
        path: '/admin',
        component: () => import('pages/AdminPage.vue')
      },
      {
        path: '/error',
        component: () => import('pages/Error404.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
