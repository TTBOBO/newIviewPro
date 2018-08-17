import { infoAction } from '../actions/info'

import { infoMutations } from '../mutations/info'

import { getMenuByRouter } from '@/assets/js/tool';

import routers from '@/router/router'
import util from '../../assets/js/util'

const pageInfo = {
    state: {
        showpop: false,
        userinfo: {},
        coinType: [], //币种
        confirm: false
    },
    getters: {
        menuList: (state, getters) => {
            //1,2,3 => [1,2,3]
            let access = util.getLocalStorage('access') ? util.getLocalStorage('access').split(",") : [1, 2];
            return getMenuByRouter(routers, access);
        }
    },
    actions: infoAction,
    mutations: infoMutations
}

export default pageInfo