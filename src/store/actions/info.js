import * as types from '../constant/type'
import util from '../../assets/js/util'
import { ajaxGet, ajaxPost } from '../../api/axios'

export const infoAction = {
    getUserInfo({ state, commit, dispatch }, params) {
        ajaxGet("userInfo", {
            id: state.userinfo.id,
            token: util.getLocalStorage("tokne")
        }).then((res) => {
            state.userinfo = res.data;
            util.setLocalStorage('userinfo', JSON.stringify(res.data));
        })
    }
}