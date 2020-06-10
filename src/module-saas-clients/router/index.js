import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)
export default [{
  root: true,
  path: '/saas-clients',
  component: Layout,
  redirect: 'noredirect',
  name: 'saas-clients',
  meta: {
    title: 'SaaS企业管理',
    icon: 'international'
  },
  children: [{
      path: 'index',
      component: _import('saas-clients/pages/index'),
      name: 'saas-clients-index',
      meta: {
        title: 'SaaS企业',
        icon: 'international',
        noCache: true
      }
    },
    {
      path: 'details/:id',
      name: 'saas-clients-detail',
      component: _import('saas-clients/pages/detail'),
      meta: {
        title: 'SaaS企业详情',
        icon: 'international',
        noCache: false
      }
    }
  ]
}]
