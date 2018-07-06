
export default [
  {
    path: '/',
    component: () => import('layouts/main'),
    redirect: 'index',
    children: [
      {
        path: '/',
        component: () => import('layouts/default'),
        redirect: 'index',
        children: [
          {
            path: 'index',
            component: () => import('pages/index'),
            redirect: 'index/home',
            children: [
              {
                path: 'home',
                component: () => import('components/views/home')
              },
              {
                path: 'skills',
                component: () => import('components/views/skills')
              },
              {
                path: 'portfolio',
                component: () => import('components/views/portfolio')
              },
              {
                path: 'contacts',
                component: () => import('components/views/contacts')
              }
            ]
          }
        ]
      },
      {
        path: '/login',
        component: () => import('pages/login')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
