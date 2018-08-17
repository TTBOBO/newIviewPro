import Main from '@/view/main'
import parentView from '@/components/parent-view';
/**
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  access: (null) 可访问该页面的权限值，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
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
            hideInMenu: true,
            title: '首页',
        },
        component: () =>
            import ('@/view/home/home')
    }]
}];