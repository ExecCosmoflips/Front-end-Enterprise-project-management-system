import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/addreceivable',
    name: '应收功能',
    meta: {
      hideInBread: true,
      title: '项目人员',
      access: ['project_staff', 'admin']

    },
    component: Main,
    children: [
      {
        path: 'addreceivable',
        name: '添加应收',
        meta: {
          icon: 'ios-hammer',
          title: '添加应收',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/addreceivable/addreceivable.vue')
      },

      {
        path: 'check_addreceivable',
        name: '查看应收',

        meta: {
          title: '查看应收',
          icon: 'ios-hammer'

        },
        component: () => import('@/view/addreceivable/check_addreceivable.vue')
      }]
  },
  {
    path: '/addcost',
    name: '费用功能',
    meta: {
      hideInBread: true,
      title: '费用功能'

    },
    component: Main,
    children: [
      {
        path: '/check_addcost',
        name: '查看费用',
        meta: {
          title: '查看费用',
          icon: 'ios-hammer'
        },
        component: () => import('@/view/addcost/check_addcost.vue')
      },
      {
        path: '/addcost',
        name: '添加费用',
        meta: {
          title: '添加费用',
          icon: 'ios-hammer'
        },
        component: () => import('@/view/addcost/addcost.vue')
      }
    ]
  },
  {
    path: '/SuperAdmin',
    name: '管理功能',
    meta: {
      icon: 'md-menu',
      title: '超级管理员',
      access: ['super_admin', 'admin']
    },
    component: Main,
    children: [
      {
        path: 'Setup_dep_name',
        name: '设置部门名',
        meta: {
          icon: 'ios-hammer',
          title: '管理功能'
        },
        component: () => import('@/view/SuperAdmin/Setup-dep-name/Setup-dep-name.vue')
      },
      {
        path: 'Add_dep_admin',
        name: '添加部门管理员',
        meta: {
          icon: 'ios-create',
          title: '管理功能'
        },
        component: () => import('@/view/SuperAdmin/Add-dep-admin/Add-dep-admin.vue')
      },
      {
        path: 'Add_treasurer',
        name: '添加财务人员',
        meta: {
          icon: 'ios-create',
          title: '管理功能'
        },
        component: () => import('@/view/SuperAdmin/Add-treasurer/Add-treasurer.vue')
      },
      {
        path: 'Setup_Logo',
        name: '设置企业名称/Logo',
        meta: {
          icon: 'ios-hammer',
          title: '管理功能'
        },
        component: () => import('@/view/SuperAdmin/Setup-Logo/Setup-Logo.vue')
      }
    ]
  },
  {
    path: '/data-analysis',
    name: '数据分析',
    meta: {
      icon: 'md-clipboard',
      title: '测试'
    },
    component: Main,
    children: [
      {
        path: 'manage_function_page',
        name: '按部门',
        meta: {
          icon: 'md-clipboard',
          title: '按部门'
        },
        component: () => import('@/view/data-analysis/department-list.vue')
      },
      {
        path: 'data_analysis_page',
        name: '按项目',
        meta: {
          icon: 'md-clipboard',
          title: '按项目'
        },
        component: () => import('@/view/data-analysis/show-data.vue')
      }
    ]
  },
  {
    path: '/financial_staff/advances_manage',
    name: 'advances_manage',
    meta: {
      icon: 'ios-bookmarks',
      title: '预收管理',
      access: ['finance', 'admin']
    },
    component: Main,
    children: [
      {
        path: 'check_advances_received_page',
        name: 'check_advances_received_page',
        meta: {
          icon: 'ios-bookmarks',
          title: '查看预收'
        },
        component: () => import('@/view/financial-staff/advances-manage/check-advances-received.vue')
      },
      {
        path: 'record_advances_received_page',
        name: 'record_advances_received_page',
        meta: {
          icon: 'ios-bookmarks',
          title: '记录预收'
        },
        component: () => import('@/view/financial-staff/advances-manage/record-advances-received.vue')
      }
    ]
  },
  {
    path: '/financial_staff/income_manage',
    name: 'income_manage',
    meta: {
      icon: 'md-add',
      title: '收入管理',
      access: ['finance', 'admin']
    },
    component: Main,
    children: [
      {
        path: 'check_income_page',
        name: 'check_income_page',
        meta: {
          icon: 'md-add',
          title: '查看收入'
        },
        component: () => import('@/view/financial-staff/income-manage/check-income.vue')
      },
      {
        path: 'confirm_income_page',
        name: 'confirm_income_page',
        meta: {
          icon: 'md-add',
          title: '确认收入'
        },
        component: () => import('@/view/financial-staff/income-manage/confirm-income.vue')
      }
    ]
  },
  {
    path: '/financial_staff/expend_manage',
    name: 'expend_manage',
    meta: {
      icon: 'md-add',
      title: '支出管理',
      access: ['finance', 'admin']
    },
    component: Main,
    children: [
      {
        path: 'check_expend_page',
        name: 'check_expend_page',
        meta: {
          icon: 'md-add',
          title: '查看支出'
        },
        component: () => import('@/view/financial-staff/expend-manage/check-expend.vue')
      },
      {
        path: 'confirm_expend_page',
        name: 'confirm_expend_page',
        meta: {
          icon: 'md-add',
          title: '确认支出'
        },
        component: () => import('@/view/financial-staff/expend-manage/confirm-expend.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: Main,
    children: [
      {
        path: 'test1',
        name: 'test1',
        meta: {
          title: '测试'
        },
        component: () => import('@/view/test/test')
      }
    ]
  },
  {
    path: '/department-manager/project-manager',
    name: 'project-manager',
    component: Main,
    meta: {
      access: ['department_manager', 'admin']
    },
    children: [
      {
        path: 'project-list',
        name: 'project-list',
        meta: {
          title: '项目列表'
        },
        component: () => import('@/view/department-manager/project-management/project-list')
      }
    ]
  },
  {
    path: '/department-manager/project-manager',
    name: 'project-manager',
    component: Main,
    hideInMenu: true,
    meta: {
      access: ['department_manager', 'admin']
    },
    children: [
      {
        path: 'project-info',
        name: 'project-info',
        meta: {
          title: '项目详细',
          notCache: true
        },
        component: () => import('@/view/department-manager/project-management/project-info')
      }
    ]
  },
  {
    path: '/department-manager/staff-manager',
    name: 'staff-manager',
    component: Main,
    meta: {
      access: ['department_manager', 'admin']
    },
    children: [
      {
        path: 'staff-list',
        name: 'staff-list',
        meta: {
          title: '人员列表'
        },
        component: () => import('@/view/department-manager/staff-management/staff-list')
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login')
  },
  {
    path: '/register',
    name: '/register',
    meta: {
      title: 'Register - 注册',
      hideInMenu: true
    },
    component: () => import('@/view/signin/signin.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'level_2_2_2',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
  {
    path: '/staff-manage',
    name: '添加部门人员',
    meta: {
      icon: 'md-cloud-upload',
      title: '数据上传',
      access: ['department_manager', 'admin']
    },
    component: Main,
    children: [
      {
        path: 'view_staff_page',
        name: '部门人员列表',
        meta: {
          icon: 'ios-document',
          title: '列表'
        },
        component: () => import('@/view/staff-manage/view-staff.vue')
      },
      {
        path: '/add_staff',
        name: '添加部门人员',
        meta: {
          title: '添加部门人员',
          hideInMenu: true
        },
        component: () => import('@/view/staff-manage/add-staff.vue')
      }
    ]
  },
  {
    path: '/staff-use',
    name: '部门人员使用',
    meta: {
      icon: 'md-clipboard',
      title: '人员使用',
      access: ['department_manager', 'admin']
    },
    component: Main,
    children: [
      {
        path: 'approve_request_page',
        name: '批准人员使用请求',
        meta: {
          icon: 'md-clipboard',
          title: '人员使用'
        },
        component: () => import('@/view/staff-use/approve-request.vue')
      }
    ]
  }
]
