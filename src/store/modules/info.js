import { infoAction } from '../actions/info'

import { infoMutations } from '../mutations/info'

import { getMenuByRouter } from '@/assets/js/tool';

import routers from '@/router/router'
import util from '../../assets/js/util'

const pageInfo = {
    state: {
        userinfo: {},
    },
    getters: {
        menuList: (state, getters) => {
            let access = util.getLocalStorage('access') ? util.getLocalStorage('access').split(",") : [1, 2];
            return getMenuByRouter(routers, access);
        }
    },
    actions: infoAction,
    mutations: infoMutations
}

export default pageInfo