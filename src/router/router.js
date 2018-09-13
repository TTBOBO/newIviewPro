import Main from '@/view/main'
import parentView from '@/components/parent-view';
/**
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  access: (null) 可访问该页面的权限值，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * 没有下级的 不需要填写  meta   有下级的  填写meta
 * }
 */
export default [{
        path: '/login',
        name: 'login',
        meta: {
            title: '用户登录',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/login/login.vue')
    }, {
        path: '/403',
        name: 'page403',
        meta: {
            title: '没有权限',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/403.vue')
    }, {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        meta: {
            hideInMenu: true,
        },
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                hideInMenu: false,
                title: '首页',
            },
            component: resolve => { require(['@/view/home/home'], resolve) }
        }]
    },{
        path: '/user',
        name: 'user',
        meta: {
            title: '用户管理',
            //   href: 'https://lison16.github.io/iview-admin-doc/#/',
            icon: 'ios-pulse'
        },
        component: Main,
        children: [{
            path: 'userlist',
            name: 'userlist',
            meta: {
                icon: 'md-contacts',
                title: '系统会员'
            },
            component: resolve => { require(['@/view/member/member'], resolve) }
        },
        {
            path: 'address',
            name: 'address',
            meta: {
                icon: 'md-contacts',
                title: '会员地址'
            },
            component: resolve => { require(['@/view/member/address'], resolve) }
        }]
    },{
        path: '/articleGroup',
        name: 'articleGroup',
        meta: {
            title: '文章管理',
            //   href: 'https://lison16.github.io/iview-admin-doc/#/',
            icon: 'ios-pulse'
        },
        component: Main,
        children: [{
            path: 'article',
            name: 'article',
            meta: {
                icon: 'md-contacts',
                title: '文章列表'
            },
            component: resolve => { require(['@/view/article/article'], resolve) }
        },{
            path: 'articleType',
            name: 'articleType',
            meta: {
                icon: 'md-contacts',
                title: '文章分类'
            },
            component: resolve => { require(['@/view/article/articleType'], resolve) }
        },{
            path: 'feedback',
            name: 'feedback',
            meta: {
                icon: 'md-contacts',
                title: '文章评论'
            },
            component: resolve => { require(['@/view/article/feedback'], resolve) }
        }]
    }, {
        path: '/test',
        name: 'test',
        meta: {
            title: '数据管理',
            //   href: 'https://lison16.github.io/iview-admin-doc/#/',
            icon: 'ios-pulse'
        },
        component: Main,
        children: [{
            path: 'userMonitor',
            name: 'userMonitor',
            meta: {
                icon: 'md-people',
                title: '用户监测'
            },
            component: resolve => { require(['@/view/home/home'], resolve) }
        },{
            path: 'accessMonitor',
            name: 'accessMonitor',
            meta: {
                icon: 'ios-podium',
                title: '访问监测'
            },
            component: resolve => { require(['@/view/home/home'], resolve) }
        }]
    }, {
        path: '/order',
        name: 'order',
        component: Main,
        meta: {
            title: '数据管理',
            //   href: 'https://lison16.github.io/iview-admin-doc/#/',
            icon: 'ios-pulse'
        },
        children: [{
            path: 'order',
            name: 'order',
            meta: {
                title: '订单管理',
                //   href: 'https://lison16.github.io/iview-admin-doc/#/',
                icon: 'ios-pulse'
            },
            component: resolve => { require(['@/view/order/order'], resolve) }
        },{
            path: 'particle',
            name: 'particle',
            meta: {
                icon: 'ios-podium',
                title: '粒子Demo'
            },
            component: resolve => { require(['@/components/particle.vue'], resolve) } 
        }]
    }, {
        path: '/test2',
        name: 'test2',
        component: Main,
        meta: {
            icon: 'md-settings',
            title: '系统设置',
            // access: "4"
        },
        children: [{
            path: 'role',
            name: 'role',
            meta: {
                icon: 'md-git-branch',
                title: '角色管理',
                // access: "4"
            },
            component: resolve => { require(['@/view/admin/admin_role'], resolve) }
        },
        {
            path: 'jurisdiction',
            name: 'jurisdiction',
            meta: {
                icon: 'md-list-box',
                title: '管理员列表',
                // access: "4"
            },
            component:  resolve => { require(['@/view/admin/admin'], resolve) }
        },
        {
            path: '/rolegroup',
            name: 'rolegroup',
            meta: {
                icon: 'ios-people',
                title: '角色组管理',
                // access: "4"
            },
            component: () =>
                import ('@/view/test.vue')
        },
        {
            path: '/pwd',
            name: 'pwd',
            meta: {
                icon: 'ios-notifications-off',
                title: '密码管理',
                // access: "4"
            },
            component:  resolve => { require(['@/view/admin/admin'], resolve) }
        },
        {
            path: 'roadshow',
            name: 'roadshow',
            meta: {
                icon: 'ios-chatboxes',
                title: '广告管理',
                // access: "4"
            },
            component: resolve => { require(['@/view/article/roadshow'], resolve) }
        },
        {
            path: 'roadshowType',
            name: 'roadshowType',
            meta: {
                icon: 'ios-chatboxes',
                title: '广告分类',
                // access: "4"
            },
            component: resolve => { require(['@/view/article/roadshowType'], resolve) }
        },
        {
            path: '/message',
            name: 'message',
            meta: {
                icon: 'ios-chatboxes',
                title: '消息反馈',
                // access: "4"
            },
            component: () =>
                import ('@/view/test.vue')
        }]
    },
    {
        path: '*',
        name: 'page404',
        meta: {
            title: '页面不存在',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/404.vue')
    }
]